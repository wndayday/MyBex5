var __g;
var __fcMap = {};     //key: guid, value: fc
var __fcGeoMap = {};  //key: guid, value: geoNames[]
var __fds;
var __datasetCRS = null;
var __rootId;
var __projectCRS = null;

function getSamplesPath() {
    var flag = unescape(location.pathname).lastIndexOf("Samples");
    if (flag > 0) {
        return (unescape(location.pathname).substring(1, flag) + "Samples");
    }               
}

function getSamplesRelatePath(relPath){
    return (getSamplesPath() + relPath).replace(/\//g, "\\");
}


/************************************************************************/
/* 初始化三维控件，并设置天空
/************************************************************************/
function initAxControl() {
    __g = $("__g");  // 兼容Firefox

    // 初始化RenderControl控件
    var ps = __g.new_PropertySet;
    ps.setProperty("RenderSystem", "OpenGL");
    var bInit = __g.initialize(false, ps);
    // 自定义球面坐标系
    //var strCrs = "GEOGCS[\"WGS 84\",DATUM[\"WGS_1984\",SPHEROID[\"WGS 84\",6378137,298.257223563,AUTHORITY[\"EPSG\",\"7030\"]],AUTHORITY[\"EPSG\",\"6326\"]],PRIMEM[\"Greenwich\",0,AUTHORITY[\"EPSG\",\"8901\"]],UNIT[\"degree\",0.01745329251994328,AUTHORITY[\"EPSG\",\"9122\"]],AUTHORITY[\"EPSG\",\"4326\"]]";
    //strCrs = __g.getTerrainCrsWKT("C:/CM703/DeveloperKit/SDK/Samples/Media/terrain/SingaporeGlobeTerrain.ted", "");
    //var bInit = __g.initialize2(strCrs, ps);
    if (!bInit) {
        alert("三维控件初始化失败!");
        return false;
    }
    __g.camera.flyTime = 1;
	__rootId = __g.objectManager.getProjectTree().rootID; //也可直接用字符串"11111111-1111-1111-1111-111111111111"
	
	var projectWKT = __g.getCurrentCrsWKT();
    __projectCRS = __g.crsFactory.createFromWKT(projectWKT);	

    return true;
}


/************************************************************************/
/* 加载FDB场景
/************************************************************************/
function loadFdb(fileName, textRender, geoRender) {

    // 加载FDB场景
    var c = __g.new_ConnectionInfo;
    c.connectionType = gviConnectionType.gviConnectionFireBird2x;
    c.database = getSamplesRelatePath("/Media/") + fileName;

    try {
        var ds = __g.dataSourceFactory.openDataSource(c);
        var fdsNames = ds.getFeatureDatasetNames();
        if (fdsNames.length == 0)
            return false;
        var fds = ds.openFeatureDataset(fdsNames[0]);
		__fds = fds;
		__datasetCRS = fds.spatialReference;

        var fcNames = fds.getNamesByType(gviDataSetType.gviDataSetFeatureClassTable);
        if (fcNames.length == 0)
            return false;

        for (var i = 0; i < fcNames.length; i++) {
            var fc = fds.openFeatureClass(fcNames[i]);

            // 找到FC里面的所有空间列字段
            var geoNames = [];
            var fieldinfos = fc.getFields();
            for (var j = 0; j < fieldinfos.count; j++) {
                var fi = fieldinfos.get(j);
                if (fi && fi.geometryDef)
                    geoNames.push(fi.name);
            }
            __fcMap[fc.guid] = fc;
            __fcGeoMap[fc.guid] = geoNames;
        }
    }
    catch (e) {
        exceptionHandler(e);
    }

    // CreateFeautureLayer
    var hasfly = false;
    for (var fcId in __fcGeoMap) {
        var fc = __fcMap[fcId];
//		if(fc.name != "建筑")
//			continue;

        var geoNames = __fcGeoMap[fcId];
        for (var k = 0; k < geoNames.length; k++) {
            var geoName = geoNames[k];
            var fl = __g.objectManager.createFeatureLayer(fc, geoName, textRender, geoRender, __rootId);

            if (!hasfly) {
                var fieldinfos = fc.getFields();
                var fi = fieldinfos.get(fieldinfos.indexOf(geoName));
                var env = fi.geometryDef.envelope;
                if (env.maxX == 0.0 && env.maxY == 0.0 && env.maxZ == 0.0 &&
                        env.minX == 0.0 && env.minY == 0.0 && env.minZ == 0.0)
                    continue;
                
                var ang = __g.new_EulerAngle;
                ang.heading = 0;
                ang.tilt = -20;
				var geoFac = __g.geometryFactory;
                var position = geoFac.createPoint(1);
                position.setCoords(env.center.x, env.center.y, env.center.z, 0, 0);
                position.spatialCRS =__datasetCRS;
                __g.camera.lookAt2(position, 600, ang);

                hasfly = true;
            }
        }
    }

}
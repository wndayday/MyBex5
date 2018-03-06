/**
 * Created by ghy on 2017/11/11.
 */
function getSamplesPath() {
    var flag = unescape(location.pathname).lastIndexOf("hh");
    if (flag > 0) {
        return (unescape(location.pathname).substring(1, flag) + "hh");
    }
}

function getSamplesRelatePath(relPath) {
    return (getSamplesPath() + relPath).replace(/\//g, "\\");
}
function getRealPath() {
	return document.currentScript.src;

}
//var path = getSamplesRelatePath("");
var init = (function () {
    //初始化控件
    var initAxControl=function (){
        __g = document.getElementById("__g");
       var ps = __g.new_PropertySet;
        ps.setProperty("MultiTouch", true);
        __g.initialize(false, ps);
        var _project = __g.project;
        var bool = _project.open("D:\\Package_四川峨眉山2\\四川峨眉山2.cep", false, "");
        _globe.clientWidth = $("#__g").width(); //网页可见区域宽度
        _globe.clientHeight = $("#__g").height();  //网页可见区域高度
     
        _globe.objectManager = __g.objectManager;
        _globe.camera = __g.camera;
        _globe.projectTree = __g.projectTree;
        _globe.html = __g.htmlWindow;
        //  _globe.localpath = location.href.substring(0, location.href.lastIndexOf('/') + 1);
        _globe.localpath = getSamplesRelatePath("") + "\\";
        _globe.__rootId = _globe.objectManager.getProjectTree().rootID;
        _globe.camera.undergroundMode = true;
        _globe.camera.flyTime = 5;

        // 绑定RenderControl事件
        initControlEvents(__g);

// uibutton
         rect = __g.new_UIRect;
         uiLeft = __g.new_UIDim;
         uiTop = __g.new_UIDim;
         uiRight = __g.new_UIDim;
         uiB = __g.new_UIDim;
         manager = __g.uiWindowManager;
        rootWindow = manager.uiRootWindow;
        //平面
        _globe.__datasetCRS = __g.crsFactory.createFromWKT("ENUCS[\"default\",GEOGCS[\"GCS_WGS_1984\",DATUM[\"D_WGS_1984\",SPHEROID[\"WGS_1984\",6378137.0,298.257223563]],PRIMEM[\"Greenwich\",0.0],UNIT[\"Degree\",0.0174532925199433],AUTHORITY[\"EPSG\",\"4326\"]],TIEPOINTENU[\"ENU\",-150.19,-39.58,-0.30],TIEPOINTGEO[\"GEO\",102.74780,25.00033,1942.78833]]");
    };
  
   
    //初始化幻灯片
    var initPPTslide=function (){
        var tree = _globe.objectManager.getProjectTree();
        tree.showSlide = true;
        tree.showSlide = false;
    };



    var addOverlay = function () {
        var path1 = _globe.localpath + "Data/img/btn/logo.png";
        _globe.overlayLabel = _globe.objectManager.createOverlayLabel(_globe.__rootId);
        _globe.overlayLabel.imageName = path1;
        _globe.overlayLabel.setWidth(_globe.clientWidth*0.8, 0, 0);
        _globe.overlayLabel.setHeight(_globe.clientHeight*0.1, 0, 0);
        _globe.overlayLabel.setX(_globe.clientWidth/2, 0, 0);
        _globe.overlayLabel.setY(-_globe.clientHeight/17.6, 0, 1);
        _globe.overlayLabel.visibleMask = 1;

    };
    return {
    
        initAxControl:initAxControl,
    
        initPPTslide:initPPTslide,
  
        addOverlay: addOverlay
    }
})();


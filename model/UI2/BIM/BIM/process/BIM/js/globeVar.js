/**
 * Created by ghy on 2017/11/17.
 */
var __g = null;
var rect, uiLeft, uiTop, uiRight, uiB, manager, rootWindow;
var colorId = 100;
var _globe=(function(){
    var __rootId=null;
    var commonWidth=1920;
    var commonHeigth=1080;
    var clientWidth = 0;
    var clientHeight = 0;
    var __sourceCRS = null;//平面参考
    var __datasetCRS = null;//数据参考
    var __projectCRS = null;//工程参考
    var objectManager = null;
    var camera = null;
    var localpath = null;
    var html = null;

    return{
        __rootId:__rootId,
        commonWidth:commonWidth,
        commonHeigth:commonHeigth,
        __sourceCRS: __sourceCRS,
        __datasetCRS: __datasetCRS,
        __projectCRS: __projectCRS,
        objectManager: objectManager,
        camera: camera,
        clientWidth: clientWidth,
        clientHeight: clientHeight,
        html: html
    }
})();

var _data=(function(){
    var __fcMap={};
    var __flMap={};
    var __fcGeoMap={};
   
    return{
        __fcMap:__fcMap,
        __flMap:__flMap,
        __fcGeoMap: __fcGeoMap
      
      
    }
})();

var _windows=(function(){
    var weatherButtons = [];//天气按钮
    var measureButtons = [];//测量按钮
    var cutButtons = [];//剖切按钮
    var initButtons = [];//基本按钮

    return {
     
        initButtons: initButtons,
        measureButtons:measureButtons,
       
        cutButtons: cutButtons,
        weatherButtons: weatherButtons
    
    }
})();
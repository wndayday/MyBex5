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
    var __sourceCRS = null;//ƽ��ο�
    var __datasetCRS = null;//���ݲο�
    var __projectCRS = null;//���̲ο�
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
    var weatherButtons = [];//������ť
    var measureButtons = [];//������ť
    var cutButtons = [];//���а�ť
    var initButtons = [];//������ť

    return {
     
        initButtons: initButtons,
        measureButtons:measureButtons,
       
        cutButtons: cutButtons,
        weatherButtons: weatherButtons
    
    }
})();
<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model"/> 

   <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="mapPanel" style="z-index:1;"> 
    <div class="x-panel-top" xid="top3"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        xid="titleBar2" title="BIM+GIS一张图"> 
        <div class="x-titlebar-left" xid="hideMapPanel"> 
          <a component="$UI/system/components/justep/button/button" class="btn btn-link"
            label="返回" xid="hideMapBtn" > 
            <i xid="i16"/>  
            <span xid="span23"/> 
          </a> 
        </div>  
        <div class="x-titlebar-title" xid="div12">BIM+GIS一张图</div>  
        <div class="x-titlebar-right reverse" xid="div13"/> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="mapArea" style="font-size:0"> 
      <iframe style="width:100%;height:100%;border:0;" src="$UI/BIM/bim.html"/> 
    </div> 
  </div>  
</div>
  // 横竖屏提示
function orientLayerTip(){
        if (window.orientation === 180 || window.orientation === 0) {//竖屏
           alert("为了让幽玛有更大的活动空间，建议横屏浏览");
        }
    }
var isOrientation=function () {
    
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", orientLayerTip, false);
}
orientLayerTip();
isOrientation();

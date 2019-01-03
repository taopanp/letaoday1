setHtmlfontSize();

function  setHtmlfontSize(){

    var designWidth=750
    var designSize=200;
    // 获取当前元素页面的宽度
    var windowWidth=document.documentElement.offsetWidth;
    console.log(windowWidth);
    var nowFontSize=windowWidth/(designWidth/designSize)
    
    document.documentElement.style.fontSize=nowFontSize+'px';
}

window.addEventListener('resize',setHtmlfontSize)
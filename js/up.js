/*   window.oncontextmenu=function(){return false;} 
    // 禁止任何键盘敲击事件（防止F12和shift+ctrl+i调起开发者工具） 
    window.onkeydown = window.onkeyup = window.onkeypress = function (event) { 
        console.log('键盘事件',event)
        if(event.code == 'F12'){
            window.event.returnValue = false; 
            return false;
        }
        
    } */

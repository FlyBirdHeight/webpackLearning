import "../font/iconfont.css"
function createFont(){
    const oled = document.createElement('div');
    const oFont = document.createElement('span');
    oFont.className = 'iconfont icon-user lg-icon';

    oled.appendChild(oFont);

    return oled;
}

document.body.appendChild(createFont());
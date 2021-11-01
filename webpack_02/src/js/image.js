import "../sass/image.scss"
function packImg(imagePath = ''){
    const ole = document.createElement('div');
    const oImg = document.createElement('img');
    oImg.style.width = "400px";
    oImg.style.height = "220px";
    //file-loader为了适配webpack5，将原先require的返回资源地址修改成了需要使用default才可以获取到路径的写法
    oImg.src = require('../img/shadow_qf.png');
    ole.appendChild(oImg);

    const obgImg = document.createElement('div');
    obgImg.className = "bgImg";
    ole.appendChild(obgImg)

    return ole
}


document.body.appendChild(packImg());
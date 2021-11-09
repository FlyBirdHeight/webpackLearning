import "../css/login.css"
import "../sass/login.scss"
import "../css/test.css"
function login (){
    const oh2 = document.createElement('h2');
    oh2.innerHTML = 'webpack使用css-loader';
    oh2.className = 'title';

    return oh2;
}

document.body.appendChild(login());
// import {sum, square} from "./js/util"
// import "./js/login.js"
// import "./js/image.js"
// const getData = require('./js/api')
// console.log(sum(10, 20))
// console.log(square(10));
// console.log(getData('localhost:8080/getData', 'post'))

// import "./js/icon"

// import "./main"

import "./js/title"
import App from "./view/App.vue"
import Vue from "vue"
console.log(module.hot)
if(module.hot){
    module.hot.accept(['./js/title.js'], () => {
        console.log('HMR执行完成')
    });
}

new Vue({
    render: h => h(App)
}).$mount('#root');
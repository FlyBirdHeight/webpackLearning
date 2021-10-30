import {sum, square} from "./js/util"
import "./js/login.js"
const getData = require('./js/api')
console.log(sum(10, 20))
console.log(square(10));
console.log(getData('localhost:8080/getData', 'post'))

/**
 * 1. 工程化
 * 2. 兼容性: CSS JS
 * 3. 如何实现兼容:
 * 4. 到底要兼容哪些平台
 * caniuse.com
 * 
 * browserslistrc
 */

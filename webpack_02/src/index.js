import {sum, square} from "./js/util"
import "./js/login.js"
import "./js/image.js"
const getData = require('./js/api')
console.log(sum(10, 20))
console.log(square(10));
console.log(getData('localhost:8080/getData', 'post'))


(()=>{var t={116:(t,n,o)=>{"use strict";var e=o(205),r=o.n(e),c=o(495);o.n(c)()(r()).push([t.id,".title {\r\n    color: #a3a3a3;\r\n    font-size: 40px;\r\n    letter-spacing: 1px;\r\n}",""])},495:t=>{"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var o="",e=void 0!==n[5];return n[4]&&(o+="@supports (".concat(n[4],") {")),n[2]&&(o+="@media ".concat(n[2]," {")),e&&(o+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),o+=t(n),e&&(o+="}"),n[2]&&(o+="}"),n[4]&&(o+="}"),o})).join("")},n.i=function(t,o,e,r,c){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(e)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(a[i]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);e&&a[u[0]]||(void 0!==c&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=c),o&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=o):u[2]=o),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),n.push(u))}},n}},205:t=>{"use strict";t.exports=function(t){return t[1]}},50:t=>{t.exports=function(t,n){return console.log(t,n),{name:"adsionli",age:"18"}}}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var c=n[e]={id:e,exports:{}};return t[e](c,c.exports,o),c.exports}o.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return o.d(n,{a:n}),n},o.d=(t,n)=>{for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},o.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{"use strict";o(116),document.body.appendChild(function(){const t=document.createElement("h2");return t.innerHTML="webpack使用css-loader",t.className="title",t}());const t=o(50);console.log(30),console.log(100),console.log(t("localhost:8080/getData","post"))})()})();
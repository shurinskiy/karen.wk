!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){window.onload=function(){var e=document.querySelector(".preloader");e.classList.add("preloader_hide"),setInterval((function(){e.classList.add("preloader_hidden")}),990)}},function(e,t,n){"use strict";n.r(t);!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"opened";t&&e&&(t.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),e.classList.toggle("".concat(n))}))})),["click","touchstart"].forEach((function(t){document.addEventListener(t,(function(t){e.classList.contains("".concat(n))&&!t.target.closest(".".concat(e.className.split(" ")[0]))&&(t.preventDefault(),e.classList.toggle("".concat(n)))}))})))}(document.querySelector(".menu"),document.querySelectorAll(".menu__toggle, .menu__close")),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.cls||"opened",o=t.events||"click",c=t.toggle;o.split(" ").forEach((function(t){e.forEach((function(o){o.addEventListener(t,(function(t){var o=this;t.stopPropagation(),e.forEach((function(e){return e!=o&&e.classList.remove("".concat(n))})),this.classList!="".concat(n)&&this.classList[c?"toggle":"add"]("".concat(n))}))}))}))}(document.querySelectorAll(".roadmap__card"),{events:"touchstart, click",cls:"active"});var o;n(0);(o=Element.prototype).matches=o.matches||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector,o.closest=o.closest||function(e){return this?this.matches(e)?this:this.parentElement?this.parentElement.closest(e):null:null},function(e){var t=e.matches||e.matchesSelector||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector;e.matches=e.matchesSelector=t||function(e){var t=document.querySelectorAll(e),n=this;return Array.prototype.some.call(t,(function(e){return e===n}))}}(Element.prototype)}]);
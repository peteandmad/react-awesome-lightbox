module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=require("react")},function(t,n,o){"use strict";o.r(n),o.d(n,"default",(function(){return y}));var r=o(0),i=o.n(r);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=m(t);if(e){var r=m(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return f(this,n)}}function f(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){var e=0,n=0;return t.touches&&t.touches.length?(e=t.touches[0].pageX,n=t.touches[0].pageY):(e=t.pageX,n=t.pageY),{x:e,y:n}}function b(t){return t.condition?i.a.createElement(i.a.Fragment,null,t.children):null}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(f,t);var n,o,r,a=s(f);function f(){var t,e,n,o,r;l(this,f);for(var i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];return v(p(r=a.call.apply(a,[this].concat(u))),"moving",!1),v(p(r),"initX",0),v(p(r),"initY",0),v(p(r),"lastX",0),v(p(r),"lastY",0),v(p(r),"state",{x:0,y:0,zoom:1,rotate:0,current:null!==(t=null===(e=r.props)||void 0===e?void 0:e.startIndex)&&void 0!==t?t:0,multi:!!(null===(n=r.props)||void 0===n||null===(o=n.images)||void 0===o?void 0:o.length)}),v(p(r),"createTransform",(function(t,e,n,o){return"translate3d(".concat(t,"px,").concat(e,"px,0px) scale(").concat(n,") rotate(").concat(o,"deg)")})),v(p(r),"stopSideEffect",(function(t){return t.stopPropagation()})),v(p(r),"preventDefault",(function(t){return t.preventDefault()})),v(p(r),"getCurrentImage",(function(t,e){var n,o,r,i,a;return t.multi?null!==(o=null!==(r=null===(i=e.images[t.current])||void 0===i?void 0:i.url)&&void 0!==r?r:null===(a=e.images)||void 0===a?void 0:a[t.current])&&void 0!==o?o:"":null!==(n=e.image)&&void 0!==n?n:""})),v(p(r),"getCurrentTitle",(function(t,e){var n,o,r,i;return t.multi?null!==(o=null===(r=e.images)||void 0===r||null===(i=r[t.current])||void 0===i?void 0:i.title)&&void 0!==o?o:"":null!==(n=e.title)&&void 0!==n?n:""})),v(p(r),"navigateImage",(function(t,e){r.stopSideEffect(e);var n=0;switch(t){case"next":n=r.state.current+1;break;case"prev":n=r.state.current-1;break;default:console.error("Illegal Invocation")}n>=r.props.images.length?n=0:n<0&&(n=r.props.images.length-1),r.setState({current:n,x:0,y:0,zoom:1,rotate:0})})),v(p(r),"startMove",(function(t){if(r.state.zoom<=1)return!1;r.moving=!0,r.preventDefault(t);var e=d(t);r.initX=e.x-r.lastX,r.initY=e.y-r.lastY})),v(p(r),"duringMove",(function(t){if(!r.moving)return!1;r.preventDefault(t);var e=d(t);r.lastX=e.x-r.initX,r.lastY=e.y-r.initY,r.setState({x:e.x-r.initX,y:e.y-r.initY})})),v(p(r),"endMove",(function(t){r.preventDefault(t),r.moving=!1})),v(p(r),"applyZoom",(function(t){var e=r.props.zoomStep,n=void 0===e?.3:e;switch(t){case"in":r.setState({zoom:r.state.zoom+n});break;case"out":r.state.zoom>1?r.setState({zoom:r.state.zoom-n}):r.setState({x:0,y:0});break;default:console.error("Wrong function invocation")}})),v(p(r),"applyRotate",(function(t){switch(t){case"cw":r.setState({rotate:r.state.rotate+90});break;case"acw":r.setState({rotate:r.state.rotate-90});break;default:console.error("Wrong function invocation")}})),v(p(r),"reset",(function(t){r.stopSideEffect(t),r.setState({x:0,y:0,zoom:1,rotate:0})})),v(p(r),"exit",(function(t){if("function"==typeof r.props.onClose)return r.props.onClose(t);console.warn("No Exit function passed on props: onClose")})),v(p(r),"canvasClick",(function(t){var e=r.props.clickOutsideToExit;if(void 0===e||e)return r.exit(t)})),r}return n=f,(o=[{key:"componentWillMount",value:function(){document.body.classList.add("lb-open-lightbox")}},{key:"componentWillUnmount",value:function(){document.body.classList.remove("lb-open-lightbox")}},{key:"render",value:function(){var t=this,n=this.getCurrentImage(this.state,this.props),o=this.getCurrentTitle(this.state,this.props),r=this.props,a=r.allowZoom,l=void 0===a||a,u=r.allowRotate,c=void 0===u||u,s=r.allowReset,f=void 0===s||s,p=r.buttonAlign,m=void 0===p?"flex-end":p,v=r.showTitle,d=void 0===v||v,y=this.state,g=y.x,h=y.y,x=y.zoom,E=y.rotate;return n?i.a.createElement("div",{className:"lb-container"},i.a.createElement("div",{className:"lb-header",style:{justifyContent:m}},i.a.createElement(b,{condition:d&&o},i.a.createElement("div",{className:"lb-title",style:{display:"center"===m?"none":"flex",order:"flex-start"===m?"1":"unset"}},i.a.createElement("span",{title:o,style:{textAlign:"flex-start"===m?"right":"left"}},o))),i.a.createElement(b,{condition:this.state.multi},i.a.createElement("div",{title:"Previous",className:"lb-button prev lb-hide-mobile",onClick:function(){return t.navigateImage("prev",e)}}),i.a.createElement("div",{title:"Next",className:"lb-button next lb-hide-mobile",onClick:function(){return t.navigateImage("next",e)}})),i.a.createElement(b,{condition:l},i.a.createElement("div",{title:"Zoom In",className:"lb-button zoomin",onClick:function(){return t.applyZoom("in")}}),i.a.createElement("div",{title:"Zoom Out",className:"lb-button zoomout",onClick:function(){return t.applyZoom("out")}})),i.a.createElement(b,{condition:c},i.a.createElement("div",{title:"Rotate left",className:"lb-button rotatel",onClick:function(){return t.applyRotate("acw")}}),i.a.createElement("div",{title:"Rotate right",className:"lb-button rotater",onClick:function(){return t.applyRotate("cw")}})),f?i.a.createElement("div",{title:"Reset",className:"lb-button lb-hide-mobile reload",onClick:this.reset}):null,i.a.createElement("div",{title:"Close",className:"lb-button close",style:{order:"flex-start"===m?"-1":"unset"},onClick:function(e){return t.exit(e)}})),i.a.createElement("div",{className:"lb-canvas",onClick:function(e){return t.canvasClick(e)}},i.a.createElement("img",{draggable:"false",style:{transform:this.createTransform(g,h,x,E),cursor:this.state.zoom>1?"grab":"unset"},onMouseDown:function(e){return t.startMove(e)},onTouchStart:function(e){return t.startMove(e)},onMouseMove:function(e){return t.duringMove(e)},onTouchMove:function(e){return t.duringMove(e)},onMouseUp:function(e){return t.endMove(e)},onMouseLeave:function(e){return t.endMove(e)},onTouchEnd:function(e){return t.endMove(e)},onClick:function(e){return t.stopSideEffect(e)},className:"lb-img",title:o,src:n,alt:o}),i.a.createElement(b,{condition:this.state.multi},i.a.createElement("div",{className:"mobile-controls lb-show-mobile"},i.a.createElement("div",{title:"Previous",className:"lb-button prev",onClick:function(e){return t.navigateImage("prev",e)}}),f?i.a.createElement("div",{title:"Reset",className:"lb-button reload",onClick:this.reset}):null,i.a.createElement("div",{title:"Next",className:"lb-button next",onClick:function(e){return t.navigateImage("next",e)}}))))):(console.warn("Not showing lightbox because no image(s) was supplied"),null)}}])&&u(n.prototype,o),r&&u(n,r),f}(i.a.Component)}]);
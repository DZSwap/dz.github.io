(self["webpackChunkdz_swap"]=self["webpackChunkdz_swap"]||[]).push([[58],{9669:function(t,e,n){t.exports=n(1609)},5448:function(t,e,n){"use strict";var r=n(4867),i=n(6026),a=n(4372),o=n(5327),u=n(4097),s=n(4109),p=n(7985),c=n(5061);t.exports=function(t){return new Promise((function(e,n){var l=t.data,d=t.headers,y=t.responseType;r.isFormData(l)&&delete d["Content-Type"];var f=new XMLHttpRequest;if(t.auth){var m=t.auth.username||"",h=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";d.Authorization="Basic "+btoa(m+":"+h)}var T=u(t.baseURL,t.url);function g(){if(f){var r="getAllResponseHeaders"in f?s(f.getAllResponseHeaders()):null,a=y&&"text"!==y&&"json"!==y?f.response:f.responseText,o={data:a,status:f.status,statusText:f.statusText,headers:r,config:t,request:f};i(e,n,o),f=null}}if(f.open(t.method.toUpperCase(),o(T,t.params,t.paramsSerializer),!0),f.timeout=t.timeout,"onloadend"in f?f.onloadend=g:f.onreadystatechange=function(){f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))&&setTimeout(g)},f.onabort=function(){f&&(n(c("Request aborted",t,"ECONNABORTED",f)),f=null)},f.onerror=function(){n(c("Network Error",t,null,f)),f=null},f.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(c(e,t,t.transitional&&t.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",f)),f=null},r.isStandardBrowserEnv()){var b=(t.withCredentials||p(T))&&t.xsrfCookieName?a.read(t.xsrfCookieName):void 0;b&&(d[t.xsrfHeaderName]=b)}"setRequestHeader"in f&&r.forEach(d,(function(t,e){"undefined"===typeof l&&"content-type"===e.toLowerCase()?delete d[e]:f.setRequestHeader(e,t)})),r.isUndefined(t.withCredentials)||(f.withCredentials=!!t.withCredentials),y&&"json"!==y&&(f.responseType=t.responseType),"function"===typeof t.onDownloadProgress&&f.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){f&&(f.abort(),n(t),f=null)})),l||(l=null),f.send(l)}))}},1609:function(t,e,n){"use strict";var r=n(4867),i=n(1849),a=n(321),o=n(7185),u=n(5655);function s(t){var e=new a(t),n=i(a.prototype.request,e);return r.extend(n,a.prototype,e),r.extend(n,e),n}var p=s(u);p.Axios=a,p.create=function(t){return s(o(p.defaults,t))},p.Cancel=n(5263),p.CancelToken=n(4972),p.isCancel=n(6502),p.all=function(t){return Promise.all(t)},p.spread=n(8713),p.isAxiosError=n(6268),t.exports=p,t.exports["default"]=p},5263:function(t){"use strict";function e(t){this.message=t}e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,t.exports=e},4972:function(t,e,n){"use strict";var r=n(5263);function i(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;t((function(t){n.reason||(n.reason=new r(t),e(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var t,e=new i((function(e){t=e}));return{token:e,cancel:t}},t.exports=i},6502:function(t){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},321:function(t,e,n){"use strict";var r=n(4867),i=n(5327),a=n(782),o=n(3572),u=n(7185),s=n(4875),p=s.validators;function c(t){this.defaults=t,this.interceptors={request:new a,response:new a}}c.prototype.request=function(t){"string"===typeof t?(t=arguments[1]||{},t.url=arguments[0]):t=t||{},t=u(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=t.transitional;void 0!==e&&s.assertOptions(e,{silentJSONParsing:p.transitional(p.boolean,"1.0.0"),forcedJSONParsing:p.transitional(p.boolean,"1.0.0"),clarifyTimeoutError:p.transitional(p.boolean,"1.0.0")},!1);var n=[],r=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(r=r&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var i,a=[];if(this.interceptors.response.forEach((function(t){a.push(t.fulfilled,t.rejected)})),!r){var c=[o,void 0];Array.prototype.unshift.apply(c,n),c=c.concat(a),i=Promise.resolve(t);while(c.length)i=i.then(c.shift(),c.shift());return i}var l=t;while(n.length){var d=n.shift(),y=n.shift();try{l=d(l)}catch(f){y(f);break}}try{i=o(l)}catch(f){return Promise.reject(f)}while(a.length)i=i.then(a.shift(),a.shift());return i},c.prototype.getUri=function(t){return t=u(this.defaults,t),i(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(t){c.prototype[t]=function(e,n){return this.request(u(n||{},{method:t,url:e,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(t){c.prototype[t]=function(e,n,r){return this.request(u(r||{},{method:t,url:e,data:n}))}})),t.exports=c},782:function(t,e,n){"use strict";var r=n(4867);function i(){this.handlers=[]}i.prototype.use=function(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},i.prototype.forEach=function(t){r.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=i},4097:function(t,e,n){"use strict";var r=n(1793),i=n(7303);t.exports=function(t,e){return t&&!r(e)?i(t,e):e}},5061:function(t,e,n){"use strict";var r=n(481);t.exports=function(t,e,n,i,a){var o=new Error(t);return r(o,e,n,i,a)}},3572:function(t,e,n){"use strict";var r=n(4867),i=n(8527),a=n(6502),o=n(5655);function u(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){u(t),t.headers=t.headers||{},t.data=i.call(t,t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||o.adapter;return e(t).then((function(e){return u(t),e.data=i.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return a(e)||(u(t),e&&e.response&&(e.response.data=i.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},481:function(t){"use strict";t.exports=function(t,e,n,r,i){return t.config=e,n&&(t.code=n),t.request=r,t.response=i,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},7185:function(t,e,n){"use strict";var r=n(4867);t.exports=function(t,e){e=e||{};var n={},i=["url","method","data"],a=["headers","auth","proxy","params"],o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],u=["validateStatus"];function s(t,e){return r.isPlainObject(t)&&r.isPlainObject(e)?r.merge(t,e):r.isPlainObject(e)?r.merge({},e):r.isArray(e)?e.slice():e}function p(i){r.isUndefined(e[i])?r.isUndefined(t[i])||(n[i]=s(void 0,t[i])):n[i]=s(t[i],e[i])}r.forEach(i,(function(t){r.isUndefined(e[t])||(n[t]=s(void 0,e[t]))})),r.forEach(a,p),r.forEach(o,(function(i){r.isUndefined(e[i])?r.isUndefined(t[i])||(n[i]=s(void 0,t[i])):n[i]=s(void 0,e[i])})),r.forEach(u,(function(r){r in e?n[r]=s(t[r],e[r]):r in t&&(n[r]=s(void 0,t[r]))}));var c=i.concat(a).concat(o).concat(u),l=Object.keys(t).concat(Object.keys(e)).filter((function(t){return-1===c.indexOf(t)}));return r.forEach(l,p),n}},6026:function(t,e,n){"use strict";var r=n(5061);t.exports=function(t,e,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},8527:function(t,e,n){"use strict";var r=n(4867),i=n(5655);t.exports=function(t,e,n){var a=this||i;return r.forEach(n,(function(n){t=n.call(a,t,e)})),t}},5655:function(t,e,n){"use strict";var r=n(4867),i=n(6016),a=n(481),o={"Content-Type":"application/x-www-form-urlencoded"};function u(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function s(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(t=n(5448)),t}function p(t,e,n){if(r.isString(t))try{return(e||JSON.parse)(t),r.trim(t)}catch(i){if("SyntaxError"!==i.name)throw i}return(n||JSON.stringify)(t)}var c={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:s(),transformRequest:[function(t,e){return i(e,"Accept"),i(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(u(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)||e&&"application/json"===e["Content-Type"]?(u(e,"application/json"),p(t)):t}],transformResponse:[function(t){var e=this.transitional,n=e&&e.silentJSONParsing,i=e&&e.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||i&&r.isString(t)&&t.length)try{return JSON.parse(t)}catch(u){if(o){if("SyntaxError"===u.name)throw a(u,this,"E_JSON_PARSE");throw u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(t){c.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){c.headers[t]=r.merge(o)})),t.exports=c},1849:function(t){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},5327:function(t,e,n){"use strict";var r=n(4867);function i(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var a;if(n)a=n(e);else if(r.isURLSearchParams(e))a=e.toString();else{var o=[];r.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,(function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),o.push(i(e)+"="+i(t))})))})),a=o.join("&")}if(a){var u=t.indexOf("#");-1!==u&&(t=t.slice(0,u)),t+=(-1===t.indexOf("?")?"?":"&")+a}return t}},7303:function(t){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},4372:function(t,e,n){"use strict";var r=n(4867);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,i,a,o){var u=[];u.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),r.isString(i)&&u.push("path="+i),r.isString(a)&&u.push("domain="+a),!0===o&&u.push("secure"),document.cookie=u.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},1793:function(t){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},6268:function(t){"use strict";t.exports=function(t){return"object"===typeof t&&!0===t.isAxiosError}},7985:function(t,e,n){"use strict";var r=n(4867);t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=i(window.location.href),function(e){var n=r.isString(e)?i(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return function(){return!0}}()},6016:function(t,e,n){"use strict";var r=n(4867);t.exports=function(t,e){r.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))}},4109:function(t,e,n){"use strict";var r=n(4867),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,a,o={};return t?(r.forEach(t.split("\n"),(function(t){if(a=t.indexOf(":"),e=r.trim(t.substr(0,a)).toLowerCase(),n=r.trim(t.substr(a+1)),e){if(o[e]&&i.indexOf(e)>=0)return;o[e]="set-cookie"===e?(o[e]?o[e]:[]).concat([n]):o[e]?o[e]+", "+n:n}})),o):o}},8713:function(t){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},4875:function(t,e,n){"use strict";var r=n(8593),i={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){i[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));var a={},o=r.version.split(".");function u(t,e){for(var n=e?e.split("."):o,r=t.split("."),i=0;i<3;i++){if(n[i]>r[i])return!0;if(n[i]<r[i])return!1}return!1}function s(t,e,n){if("object"!==typeof t)throw new TypeError("options must be an object");var r=Object.keys(t),i=r.length;while(i-- >0){var a=r[i],o=e[a];if(o){var u=t[a],s=void 0===u||o(u,a,t);if(!0!==s)throw new TypeError("option "+a+" must be "+s)}else if(!0!==n)throw Error("Unknown option "+a)}}i.transitional=function(t,e,n){var i=e&&u(e);function o(t,e){return"[Axios v"+r.version+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return function(n,r,u){if(!1===t)throw new Error(o(r," has been removed in "+e));return i&&!a[r]&&(a[r]=!0,console.warn(o(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,u)}},t.exports={isOlderVersion:u,assertOptions:s,validators:i}},4867:function(t,e,n){"use strict";var r=n(1849),i=Object.prototype.toString;function a(t){return"[object Array]"===i.call(t)}function o(t){return"undefined"===typeof t}function u(t){return null!==t&&!o(t)&&null!==t.constructor&&!o(t.constructor)&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function s(t){return"[object ArrayBuffer]"===i.call(t)}function p(t){return"undefined"!==typeof FormData&&t instanceof FormData}function c(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function l(t){return"string"===typeof t}function d(t){return"number"===typeof t}function y(t){return null!==t&&"object"===typeof t}function f(t){if("[object Object]"!==i.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function m(t){return"[object Date]"===i.call(t)}function h(t){return"[object File]"===i.call(t)}function T(t){return"[object Blob]"===i.call(t)}function g(t){return"[object Function]"===i.call(t)}function b(t){return y(t)&&g(t.pipe)}function x(t){return"undefined"!==typeof URLSearchParams&&t instanceof URLSearchParams}function v(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function w(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function k(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),a(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function _(){var t={};function e(e,n){f(t[n])&&f(e)?t[n]=_(t[n],e):f(e)?t[n]=_({},e):a(e)?t[n]=e.slice():t[n]=e}for(var n=0,r=arguments.length;n<r;n++)k(arguments[n],e);return t}function E(t,e,n){return k(e,(function(e,i){t[i]=n&&"function"===typeof e?r(e,n):e})),t}function S(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}t.exports={isArray:a,isArrayBuffer:s,isBuffer:u,isFormData:p,isArrayBufferView:c,isString:l,isNumber:d,isObject:y,isPlainObject:f,isUndefined:o,isDate:m,isFile:h,isBlob:T,isFunction:g,isStream:b,isURLSearchParams:x,isStandardBrowserEnv:w,forEach:k,merge:_,extend:E,trim:v,stripBOM:S}},6058:function(t,e,n){"use strict";n.d(e,{M1:function(){return y},dE:function(){return f},H3:function(){return m},dD:function(){return w},sj:function(){return k},yX:function(){return d},z3:function(){return l},gK:function(){return T},il:function(){return h},j0:function(){return x},YU:function(){return b},fi:function(){return g}});n(1087);var r=n(5803),i=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":true,"internalType":"uint256","name":"trx_amount","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"token_amount","type":"uint256"}],"name":"AddLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":true,"internalType":"uint256","name":"trx_amount","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"token_amount","type":"uint256"}],"name":"RemoveLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":true,"internalType":"uint256","name":"trx_sold","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"tokens_bought","type":"uint256"}],"name":"TokenPurchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokens_sold","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"trx_bought","type":"uint256"}],"name":"TrxPurchase","type":"event"},{"inputs":[{"internalType":"uint256","name":"min_liquidity","type":"uint256"},{"internalType":"uint256","name":"max_tokens","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factoryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"input_amount","type":"uint256"},{"internalType":"uint256","name":"input_reserve","type":"uint256"},{"internalType":"uint256","name":"output_reserve","type":"uint256"}],"name":"getInputPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"output_amount","type":"uint256"},{"internalType":"uint256","name":"input_reserve","type":"uint256"},{"internalType":"uint256","name":"output_reserve","type":"uint256"}],"name":"getOutputPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokens_sold","type":"uint256"}],"name":"getTokenToTrxInputPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"trx_bought","type":"uint256"}],"name":"getTokenToTrxOutputPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"trx_sold","type":"uint256"}],"name":"getTrxToTokenInputPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokens_bought","type":"uint256"}],"name":"getTrxToTokenOutputPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"min_trx","type":"uint256"},{"internalType":"uint256","name":"min_tokens","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokens_sold","type":"uint256"},{"internalType":"uint256","name":"min_tokens_bought","type":"uint256"},{"internalType":"uint256","name":"min_trx_bought","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"address","name":"exchange_addr","type":"address"}],"name":"tokenToExchangeSwapInput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokens_bought","type":"uint256"},{"internalType":"uint256","name":"max_tokens_sold","type":"uint256"},{"internalType":"uint256","name":"max_trx_sold","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"address","name":"exchange_addr","type":"address"}],"name":"tokenToExchangeSwapOutput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokens_sold","type":"uint256"},{"internalType":"uint256","name":"min_tokens_bought","type":"uint256"},{"internalType":"uint256","name":"min_trx_bought","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"address","name":"exchange_addr","type":"address"}],"name":"tokenToExchangeTransferInput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokens_bought","type":"uint256"},{"internalType":"uint256","name":"max_tokens_sold","type":"uint256"},{"internalType":"uint256","name":"max_trx_sold","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"address","name":"exchange_addr","type":"address"}],"name":"tokenToExchangeTransferOutput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokens_sold","type":"uint256"},{"internalType":"uint256","name":"min_tokens_bought","type":"uint256"},{"internalType":"uint256","name":"min_trx_bought","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"address","name":"token_addr","type":"address"}],"name":"tokenToTokenSwapInput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokens_bought","type":"uint256"},{"internalType":"uint256","name":"max_tokens_sold","type":"uint256"},{"internalType":"uint256","name":"max_trx_sold","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"address","name":"token_addr","type":"address"}],"name":"tokenToTokenSwapOutput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokens_sold","type":"uint256"},{"internalType":"uint256","name":"min_tokens_bought","type":"uint256"},{"internalType":"uint256","name":"min_trx_bought","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"address","name":"token_addr","type":"address"}],"name":"tokenToTokenTransferInput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokens_bought","type":"uint256"},{"internalType":"uint256","name":"max_tokens_sold","type":"uint256"},{"internalType":"uint256","name":"max_trx_sold","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"address","name":"token_addr","type":"address"}],"name":"tokenToTokenTransferOutput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokens_sold","type":"uint256"},{"internalType":"uint256","name":"min_trx","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"tokenToTrxSwapInput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"trx_bought","type":"uint256"},{"internalType":"uint256","name":"max_tokens","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"tokenToTrxSwapOutput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokens_sold","type":"uint256"},{"internalType":"uint256","name":"min_trx","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"tokenToTrxTransferInput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"trx_bought","type":"uint256"},{"internalType":"uint256","name":"max_tokens","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"tokenToTrxTransferOutput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"min_tokens","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"trxToTokenSwapInput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokens_bought","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"trxToTokenSwapOutput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"min_tokens","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"trxToTokenTransferInput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokens_bought","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"trxToTokenTransferOutput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"}]'),a=n(6441),o=n(1046),u=n(9669),s=n.n(u);const p=new Map;async function c(t,e){try{if(!t.provider||!t.account)return void console.log("no provider!");let n=p.get(e);return n||(n=await t.provider.contract().at(e),p.set(e,n)),n}catch(n){console.log("contract error:",n.message)}}async function l(t,e){try{const n=await t.provider.contract().at(e),r=await n.symbol().call(),i=await n.name().call(),a=await n.decimals().call();return{name:i,symbol:r,decimal:a,address:e,icon:""}}catch(n){return null}}async function d(t,e,n){try{let r="";if(e){const n=await c(t,e);r=await n.balanceOf(t.account).call(),r.balance&&(r=r.balance)}else{const e=await t.provider.trx.getAccount(t.account);r=e.balance}return a.bM(r,n)}catch(r){return console.log(r.message),"--"}}async function y(t,e,n){try{const r=await c(t,e);return r.allowance(t.account,n).call()}catch(i){(0,r.Z)(i.data||i.message||i)}}async function f(t,e,n,r){const i=await c(t,n);return i.approve(e,o.Bz).send()}async function m(t,e){try{const n=await c(t,"TXk8rQSAvPvBBNtqSoY6nCfsXWCSSpTVQF");return n.getExchange(e).call()}catch(n){return console.log(n),""}}async function h(t,e,n){try{const r=await t.provider.contract(i,e);return r.getTrxToTokenInputPrice(n).call({_isConstant:!0})}catch(r){console.log(r)}}async function T(t,e,n){try{const r=await t.provider.contract(i,e);return r.getTokenToTrxInputPrice(n).call({_isConstant:!0})}catch(r){console.log(r)}}async function g(t,e,n){try{const r=await t.provider.contract(i,e);return r.trxToTokenTransferInput(n.minOutAmount,String(n.deadline),t.account).send({callValue:n.inputAmount})}catch(r){console.log(r)}}async function b(t,e,n){try{const r=await t.provider.contract(i,e);return r.tokenToTrxTransferInput(n.inputAmount,n.minOutAmount,String(n.deadline),t.account).send()}catch(r){console.log(r)}}async function x(t,e,n,r){try{const a=await t.provider.contract(i,e);return a.tokenToTokenTransferInput(n.inputAmount,n.minOutAmount,1,String(n.deadline),t.account,r).send()}catch(a){console.log(a)}}const v=s().create({baseURL:"https://abc.ablesdxd.link/swap/scan/"});function w(t){return v({url:"/statusinfo",method:"get",params:t})}function k(t){return v({url:"/transactions",method:"get",params:t})}v.interceptors.response.use((t=>t.data))},8593:function(t){"use strict";t.exports=JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')}}]);
import{C as q,r as Q}from"./index.fa9b4643.js";var _={exports:{}},Z=function(e,t){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(t,n)}},ge=Z,$=Object.prototype.toString;function I(r){return Array.isArray(r)}function F(r){return typeof r=="undefined"}function Se(r){return r!==null&&!F(r)&&r.constructor!==null&&!F(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function ee(r){return $.call(r)==="[object ArrayBuffer]"}function Oe(r){return $.call(r)==="[object FormData]"}function xe(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&ee(r.buffer),e}function Re(r){return typeof r=="string"}function Ae(r){return typeof r=="number"}function re(r){return r!==null&&typeof r=="object"}function A(r){if($.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function Pe(r){return $.call(r)==="[object Date]"}function Ne(r){return $.call(r)==="[object File]"}function Te(r){return $.call(r)==="[object Blob]"}function te(r){return $.call(r)==="[object Function]"}function Ue(r){return re(r)&&te(r.pipe)}function je(r){return $.call(r)==="[object URLSearchParams]"}function Le(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function Be(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function H(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),I(r))for(var t=0,a=r.length;t<a;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function M(){var r={};function e(n,i){A(r[i])&&A(n)?r[i]=M(r[i],n):A(n)?r[i]=M({},n):I(n)?r[i]=n.slice():r[i]=n}for(var t=0,a=arguments.length;t<a;t++)H(arguments[t],e);return r}function ke(r,e,t){return H(e,function(n,i){t&&typeof n=="function"?r[i]=ge(n,t):r[i]=n}),r}function De(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}var m={isArray:I,isArrayBuffer:ee,isBuffer:Se,isFormData:Oe,isArrayBufferView:xe,isString:Re,isNumber:Ae,isObject:re,isPlainObject:A,isUndefined:F,isDate:Pe,isFile:Ne,isBlob:Te,isFunction:te,isStream:Ue,isURLSearchParams:je,isStandardBrowserEnv:Be,forEach:H,merge:M,extend:ke,trim:Le,stripBOM:De},S=m;function ne(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var ae=function(e,t,a){if(!t)return e;var n;if(a)n=a(t);else if(S.isURLSearchParams(t))n=t.toString();else{var i=[];S.forEach(t,function(l,b){l===null||typeof l=="undefined"||(S.isArray(l)?b=b+"[]":l=[l],S.forEach(l,function(f){S.isDate(f)?f=f.toISOString():S.isObject(f)&&(f=JSON.stringify(f)),i.push(ne(b)+"="+ne(f))}))}),n=i.join("&")}if(n){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},qe=m;function P(){this.handlers=[]}P.prototype.use=function(e,t,a){return this.handlers.push({fulfilled:e,rejected:t,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};P.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};P.prototype.forEach=function(e){qe.forEach(this.handlers,function(a){a!==null&&e(a)})};var _e=P,Ie=m,Fe=function(e,t){Ie.forEach(e,function(n,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[i])})},se=function(e,t,a,n,i){return e.config=t,a&&(e.code=a),e.request=n,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},He=se,ie=function(e,t,a,n,i){var o=new Error(e);return He(o,t,a,n,i)},Me=ie,Je=function(e,t,a){var n=a.config.validateStatus;!a.status||!n||n(a.status)?e(a):t(Me("Request failed with status code "+a.status,a.config,null,a.request,a))},N=m,ze=N.isStandardBrowserEnv()?function(){return{write:function(t,a,n,i,o,u){var l=[];l.push(t+"="+encodeURIComponent(a)),N.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),N.isString(i)&&l.push("path="+i),N.isString(o)&&l.push("domain="+o),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(t){var a=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Ve=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},We=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},Xe=Ve,Ke=We,Ge=function(e,t){return e&&!Xe(t)?Ke(e,t):t},J=m,Ye=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Qe=function(e){var t={},a,n,i;return e&&J.forEach(e.split(`
`),function(u){if(i=u.indexOf(":"),a=J.trim(u.substr(0,i)).toLowerCase(),n=J.trim(u.substr(i+1)),a){if(t[a]&&Ye.indexOf(a)>=0)return;a==="set-cookie"?t[a]=(t[a]?t[a]:[]).concat([n]):t[a]=t[a]?t[a]+", "+n:n}}),t},oe=m,Ze=oe.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),a;function n(i){var o=i;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return a=n(window.location.href),function(o){var u=oe.isString(o)?n(o):o;return u.protocol===a.protocol&&u.host===a.host}}():function(){return function(){return!0}}();function z(r){this.message=r}z.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};z.prototype.__CANCEL__=!0;var T=z,U=m,er=Je,rr=ze,tr=ae,nr=Ge,ar=Qe,sr=Ze,V=ie,ir=L,or=T,ue=function(e){return new Promise(function(a,n){var i=e.data,o=e.headers,u=e.responseType,l;function b(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}U.isFormData(i)&&delete o["Content-Type"];var s=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(f+":"+w)}var h=nr(e.baseURL,e.url);s.open(e.method.toUpperCase(),tr(h,e.params,e.paramsSerializer),!0),s.timeout=e.timeout;function G(){if(!!s){var y="getAllResponseHeaders"in s?ar(s.getAllResponseHeaders()):null,g=!u||u==="text"||u==="json"?s.responseText:s.response,C={data:g,status:s.status,statusText:s.statusText,headers:y,config:e,request:s};er(function(D){a(D),b()},function(D){n(D),b()},C),s=null}}if("onloadend"in s?s.onloadend=G:s.onreadystatechange=function(){!s||s.readyState!==4||s.status===0&&!(s.responseURL&&s.responseURL.indexOf("file:")===0)||setTimeout(G)},s.onabort=function(){!s||(n(V("Request aborted",e,"ECONNABORTED",s)),s=null)},s.onerror=function(){n(V("Network Error",e,null,s)),s=null},s.ontimeout=function(){var g=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",C=e.transitional||ir.transitional;e.timeoutErrorMessage&&(g=e.timeoutErrorMessage),n(V(g,e,C.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",s)),s=null},U.isStandardBrowserEnv()){var Y=(e.withCredentials||sr(h))&&e.xsrfCookieName?rr.read(e.xsrfCookieName):void 0;Y&&(o[e.xsrfHeaderName]=Y)}"setRequestHeader"in s&&U.forEach(o,function(g,C){typeof i=="undefined"&&C.toLowerCase()==="content-type"?delete o[C]:s.setRequestHeader(C,g)}),U.isUndefined(e.withCredentials)||(s.withCredentials=!!e.withCredentials),u&&u!=="json"&&(s.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&s.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&s.upload&&s.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(y){!s||(n(!y||y&&y.type?new or("canceled"):y),s.abort(),s=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),i||(i=null),s.send(i)})},p=m,le=Fe,ur=se,lr={"Content-Type":"application/x-www-form-urlencoded"};function de(r,e){!p.isUndefined(r)&&p.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function dr(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=ue),r}function cr(r,e,t){if(p.isString(r))try{return(e||JSON.parse)(r),p.trim(r)}catch(a){if(a.name!=="SyntaxError")throw a}return(t||JSON.stringify)(r)}var j={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:dr(),transformRequest:[function(e,t){return le(t,"Accept"),le(t,"Content-Type"),p.isFormData(e)||p.isArrayBuffer(e)||p.isBuffer(e)||p.isStream(e)||p.isFile(e)||p.isBlob(e)?e:p.isArrayBufferView(e)?e.buffer:p.isURLSearchParams(e)?(de(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):p.isObject(e)||t&&t["Content-Type"]==="application/json"?(de(t,"application/json"),cr(e)):e}],transformResponse:[function(e){var t=this.transitional||j.transitional,a=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,i=!a&&this.responseType==="json";if(i||n&&p.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(i)throw o.name==="SyntaxError"?ur(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(e){j.headers[e]={}});p.forEach(["post","put","patch"],function(e){j.headers[e]=p.merge(lr)});var L=j,fr=m,pr=L,hr=function(e,t,a){var n=this||pr;return fr.forEach(a,function(o){e=o.call(n,e,t)}),e},ce=function(e){return!!(e&&e.__CANCEL__)},fe=m,W=hr,mr=ce,vr=L,br=T;function X(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new br("canceled")}var yr=function(e){X(e),e.headers=e.headers||{},e.data=W.call(e,e.data,e.headers,e.transformRequest),e.headers=fe.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),fe.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||vr.adapter;return t(e).then(function(n){return X(e),n.data=W.call(e,n.data,n.headers,e.transformResponse),n},function(n){return mr(n)||(X(e),n&&n.response&&(n.response.data=W.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},v=m,pe=function(e,t){t=t||{};var a={};function n(s,f){return v.isPlainObject(s)&&v.isPlainObject(f)?v.merge(s,f):v.isPlainObject(f)?v.merge({},f):v.isArray(f)?f.slice():f}function i(s){if(v.isUndefined(t[s])){if(!v.isUndefined(e[s]))return n(void 0,e[s])}else return n(e[s],t[s])}function o(s){if(!v.isUndefined(t[s]))return n(void 0,t[s])}function u(s){if(v.isUndefined(t[s])){if(!v.isUndefined(e[s]))return n(void 0,e[s])}else return n(void 0,t[s])}function l(s){if(s in t)return n(e[s],t[s]);if(s in e)return n(void 0,e[s])}var b={url:o,method:o,data:o,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l};return v.forEach(Object.keys(e).concat(Object.keys(t)),function(f){var w=b[f]||i,h=w(f);v.isUndefined(h)&&w!==l||(a[f]=h)}),a},he={version:"0.25.0"},wr=he.version,K={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){K[r]=function(a){return typeof a===r||"a"+(e<1?"n ":" ")+r}});var me={};K.transitional=function(e,t,a){function n(i,o){return"[Axios v"+wr+"] Transitional option '"+i+"'"+o+(a?". "+a:"")}return function(i,o,u){if(e===!1)throw new Error(n(o," has been removed"+(t?" in "+t:"")));return t&&!me[o]&&(me[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(i,o,u):!0}};function Er(r,e,t){if(typeof r!="object")throw new TypeError("options must be an object");for(var a=Object.keys(r),n=a.length;n-- >0;){var i=a[n],o=e[i];if(o){var u=r[i],l=u===void 0||o(u,i,r);if(l!==!0)throw new TypeError("option "+i+" must be "+l);continue}if(t!==!0)throw Error("Unknown option "+i)}}var $r={assertOptions:Er,validators:K},ve=m,Cr=ae,be=_e,ye=yr,B=pe,we=$r,O=we.validators;function R(r){this.defaults=r,this.interceptors={request:new be,response:new be}}R.prototype.request=function(e,t){if(typeof e=="string"?(t=t||{},t.url=e):t=e||{},!t.url)throw new Error("Provided config url is not valid");t=B(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var a=t.transitional;a!==void 0&&we.assertOptions(a,{silentJSONParsing:O.transitional(O.boolean),forcedJSONParsing:O.transitional(O.boolean),clarifyTimeoutError:O.transitional(O.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(t)===!1||(i=i&&h.synchronous,n.unshift(h.fulfilled,h.rejected))});var o=[];this.interceptors.response.forEach(function(h){o.push(h.fulfilled,h.rejected)});var u;if(!i){var l=[ye,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(o),u=Promise.resolve(t);l.length;)u=u.then(l.shift(),l.shift());return u}for(var b=t;n.length;){var s=n.shift(),f=n.shift();try{b=s(b)}catch(w){f(w);break}}try{u=ye(b)}catch(w){return Promise.reject(w)}for(;o.length;)u=u.then(o.shift(),o.shift());return u};R.prototype.getUri=function(e){if(!e.url)throw new Error("Provided config url is not valid");return e=B(this.defaults,e),Cr(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};ve.forEach(["delete","get","head","options"],function(e){R.prototype[e]=function(t,a){return this.request(B(a||{},{method:e,url:t,data:(a||{}).data}))}});ve.forEach(["post","put","patch"],function(e){R.prototype[e]=function(t,a,n){return this.request(B(n||{},{method:e,url:t,data:a}))}});var gr=R,Sr=T;function x(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(a){if(!!t._listeners){var n,i=t._listeners.length;for(n=0;n<i;n++)t._listeners[n](a);t._listeners=null}}),this.promise.then=function(a){var n,i=new Promise(function(o){t.subscribe(o),n=o}).then(a);return i.cancel=function(){t.unsubscribe(n)},i},r(function(n){t.reason||(t.reason=new Sr(n),e(t.reason))})}x.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};x.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};x.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};x.source=function(){var e,t=new x(function(n){e=n});return{token:t,cancel:e}};var Or=x,xr=function(e){return function(a){return e.apply(null,a)}},Rr=m,Ar=function(e){return Rr.isObject(e)&&e.isAxiosError===!0},Ee=m,Pr=Z,k=gr,Nr=pe,Tr=L;function $e(r){var e=new k(r),t=Pr(k.prototype.request,e);return Ee.extend(t,k.prototype,e),Ee.extend(t,e),t.create=function(n){return $e(Nr(r,n))},t}var E=$e(Tr);E.Axios=k;E.Cancel=T;E.CancelToken=Or;E.isCancel=ce;E.VERSION=he.version;E.all=function(e){return Promise.all(e)};E.spread=xr;E.isAxiosError=Ar;_.exports=E;_.exports.default=E;var Ur=_.exports;const c="aprilchen",d=Ur.create({baseURL:"https://vue3-course-api.hexschool.io/v2/",withCredentials:!0,headers:{crossDomain:!0,"Content-Type":"application/json"},timeout:2e4});d.interceptors.request.use(r=>{if(q&&q.getCookie()){const e=q.getCookie();e&&(r.headers.common.Authorization=e)}return r},r=>Promise.reject(r.response.data?r.response.data:r.response));d.interceptors.response.use(async r=>r.data?r.data:r,r=>{if(r&&r.response)switch(r.response.status){case 400:break;case 401:Q.push({name:"Login"});break;case 403:Q.push({name:"Login"});break;case 500:break;default:console.log(`\u9023\u63A5\u932F\u8AA4${r.response.status}`);break}return Promise.reject(r.response.data?r.response.data:r.response)});var jr={checkAuth:()=>d.post("/api/user/check"),logout:()=>d.post("/logout")},Lr={getProductsAll:()=>d.get(`/api/${c}/products/all`),getProducts:r=>d.get(`/api/${c}/products?page=${r}`),getProduct:r=>d.get(`/api/${c}/product/${r}`)},Br={getCart:()=>d.get(`/api/${c}/cart`),addCart:r=>d.post(`/api/${c}/cart`,r),updateCart:(r,e)=>d.put(`/api/${c}/cart/${r}`,e),removeCartItem:r=>d.delete(`/api/${c}/cart/${r}`),removeCartAll:()=>d.delete(`/api/${c}/carts`)},kr={addOrder:r=>d.post(`/api/${c}/order`,r),getOrder:r=>d.get(`/api/${c}/order/${r}`)},Dr={addConpon:r=>d.post(`/api/${c}/coupon`,r)},qr={login:r=>d.post("/admin/signin",r)},_r={getProducts:r=>d.get(`/api/${c}/admin/products?page=${r}`),addProducts:r=>d.post(`/api/${c}/admin/product`,r),updateProducts:(r,e)=>d.put(`/api/${c}/admin/product/${r}`,e),delProducts:r=>d.delete(`/api/${c}/admin/product/${r}`),uploadImg:r=>d.post(`/api/${c}/admin/upload`,r)},Ir={getOrders:r=>d.get(`/api/${c}/admin/orders?page=${r}`),updateOrders:(r,e)=>d.put(`/api/${c}/admin/order/${r}`,e),delOrder:r=>d.delete(`/api/${c}/admin/order/${r}`),delOrdersAll:r=>d.delete(`/api/${c}/admin/orders/all`)},Fr={getCoupons:r=>d.get(`/api/${c}/admin/coupons?page=${r}`),addCoupon:(r,e)=>d.put(`/api/${c}/admin/coupon`,e),updateCoupon:(r,e)=>(console.log(e),d.put(`/api/${c}/admin/coupon/${r}`,e)),delCoupon:r=>d.delete(`/api/${c}/admin/coupon/${r}`)},Mr={auth:jr,products:Lr,cart:Br,order:kr,coupon:Dr,adminAuth:qr,adminProducts:_r,adminOrder:Ir,adminCoupon:Fr};export{Mr as a};

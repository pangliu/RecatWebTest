var gv=Object.defineProperty;var vv=(n,r,o)=>r in n?gv(n,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[r]=o;var zo=(n,r,o)=>vv(n,typeof r!="symbol"?r+"":r,o);function yv(n,r){for(var o=0;o<r.length;o++){const l=r[o];if(typeof l!="string"&&!Array.isArray(l)){for(const a in l)if(a!=="default"&&!(a in n)){const u=Object.getOwnPropertyDescriptor(l,a);u&&Object.defineProperty(n,a,u.get?u:{enumerable:!0,get:()=>l[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function o(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(a){if(a.ep)return;a.ep=!0;const u=o(a);fetch(a.href,u)}})();function bv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var du={exports:{}},Fo={},fu={exports:{}},be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function xv(){if(pp)return be;pp=1;var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function w(M){return M===null||typeof M!="object"?null:(M=v&&M[v]||M["@@iterator"],typeof M=="function"?M:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,x={};function S(M,j,re){this.props=M,this.context=j,this.refs=x,this.updater=re||k}S.prototype.isReactComponent={},S.prototype.setState=function(M,j){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,j,"setState")},S.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function E(){}E.prototype=S.prototype;function R(M,j,re){this.props=M,this.context=j,this.refs=x,this.updater=re||k}var T=R.prototype=new E;T.constructor=R,b(T,S.prototype),T.isPureReactComponent=!0;var F=Array.isArray,N=Object.prototype.hasOwnProperty,$={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function Q(M,j,re){var ce,he={},fe=null,Ce=null;if(j!=null)for(ce in j.ref!==void 0&&(Ce=j.ref),j.key!==void 0&&(fe=""+j.key),j)N.call(j,ce)&&!B.hasOwnProperty(ce)&&(he[ce]=j[ce]);var ye=arguments.length-2;if(ye===1)he.children=re;else if(1<ye){for(var Ne=Array(ye),mt=0;mt<ye;mt++)Ne[mt]=arguments[mt+2];he.children=Ne}if(M&&M.defaultProps)for(ce in ye=M.defaultProps,ye)he[ce]===void 0&&(he[ce]=ye[ce]);return{$$typeof:n,type:M,key:fe,ref:Ce,props:he,_owner:$.current}}function X(M,j){return{$$typeof:n,type:M.type,key:j,ref:M.ref,props:M.props,_owner:M._owner}}function me(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function xe(M){var j={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(re){return j[re]})}var Te=/\/+/g;function Le(M,j){return typeof M=="object"&&M!==null&&M.key!=null?xe(""+M.key):j.toString(36)}function Me(M,j,re,ce,he){var fe=typeof M;(fe==="undefined"||fe==="boolean")&&(M=null);var Ce=!1;if(M===null)Ce=!0;else switch(fe){case"string":case"number":Ce=!0;break;case"object":switch(M.$$typeof){case n:case r:Ce=!0}}if(Ce)return Ce=M,he=he(Ce),M=ce===""?"."+Le(Ce,0):ce,F(he)?(re="",M!=null&&(re=M.replace(Te,"$&/")+"/"),Me(he,j,re,"",function(mt){return mt})):he!=null&&(me(he)&&(he=X(he,re+(!he.key||Ce&&Ce.key===he.key?"":(""+he.key).replace(Te,"$&/")+"/")+M)),j.push(he)),1;if(Ce=0,ce=ce===""?".":ce+":",F(M))for(var ye=0;ye<M.length;ye++){fe=M[ye];var Ne=ce+Le(fe,ye);Ce+=Me(fe,j,re,Ne,he)}else if(Ne=w(M),typeof Ne=="function")for(M=Ne.call(M),ye=0;!(fe=M.next()).done;)fe=fe.value,Ne=ce+Le(fe,ye++),Ce+=Me(fe,j,re,Ne,he);else if(fe==="object")throw j=String(M),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return Ce}function ge(M,j,re){if(M==null)return M;var ce=[],he=0;return Me(M,ce,"","",function(fe){return j.call(re,fe,he++)}),ce}function we(M){if(M._status===-1){var j=M._result;j=j(),j.then(function(re){(M._status===0||M._status===-1)&&(M._status=1,M._result=re)},function(re){(M._status===0||M._status===-1)&&(M._status=2,M._result=re)}),M._status===-1&&(M._status=0,M._result=j)}if(M._status===1)return M._result.default;throw M._result}var ve={current:null},W={transition:null},ee={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:W,ReactCurrentOwner:$};function K(){throw Error("act(...) is not supported in production builds of React.")}return be.Children={map:ge,forEach:function(M,j,re){ge(M,function(){j.apply(this,arguments)},re)},count:function(M){var j=0;return ge(M,function(){j++}),j},toArray:function(M){return ge(M,function(j){return j})||[]},only:function(M){if(!me(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},be.Component=S,be.Fragment=o,be.Profiler=a,be.PureComponent=R,be.StrictMode=l,be.Suspense=c,be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,be.act=K,be.cloneElement=function(M,j,re){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var ce=b({},M.props),he=M.key,fe=M.ref,Ce=M._owner;if(j!=null){if(j.ref!==void 0&&(fe=j.ref,Ce=$.current),j.key!==void 0&&(he=""+j.key),M.type&&M.type.defaultProps)var ye=M.type.defaultProps;for(Ne in j)N.call(j,Ne)&&!B.hasOwnProperty(Ne)&&(ce[Ne]=j[Ne]===void 0&&ye!==void 0?ye[Ne]:j[Ne])}var Ne=arguments.length-2;if(Ne===1)ce.children=re;else if(1<Ne){ye=Array(Ne);for(var mt=0;mt<Ne;mt++)ye[mt]=arguments[mt+2];ce.children=ye}return{$$typeof:n,type:M.type,key:he,ref:fe,props:ce,_owner:Ce}},be.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:u,_context:M},M.Consumer=M},be.createElement=Q,be.createFactory=function(M){var j=Q.bind(null,M);return j.type=M,j},be.createRef=function(){return{current:null}},be.forwardRef=function(M){return{$$typeof:g,render:M}},be.isValidElement=me,be.lazy=function(M){return{$$typeof:m,_payload:{_status:-1,_result:M},_init:we}},be.memo=function(M,j){return{$$typeof:p,type:M,compare:j===void 0?null:j}},be.startTransition=function(M){var j=W.transition;W.transition={};try{M()}finally{W.transition=j}},be.unstable_act=K,be.useCallback=function(M,j){return ve.current.useCallback(M,j)},be.useContext=function(M){return ve.current.useContext(M)},be.useDebugValue=function(){},be.useDeferredValue=function(M){return ve.current.useDeferredValue(M)},be.useEffect=function(M,j){return ve.current.useEffect(M,j)},be.useId=function(){return ve.current.useId()},be.useImperativeHandle=function(M,j,re){return ve.current.useImperativeHandle(M,j,re)},be.useInsertionEffect=function(M,j){return ve.current.useInsertionEffect(M,j)},be.useLayoutEffect=function(M,j){return ve.current.useLayoutEffect(M,j)},be.useMemo=function(M,j){return ve.current.useMemo(M,j)},be.useReducer=function(M,j,re){return ve.current.useReducer(M,j,re)},be.useRef=function(M){return ve.current.useRef(M)},be.useState=function(M){return ve.current.useState(M)},be.useSyncExternalStore=function(M,j,re){return ve.current.useSyncExternalStore(M,j,re)},be.useTransition=function(){return ve.current.useTransition()},be.version="18.3.1",be}var hp;function Ju(){return hp||(hp=1,fu.exports=xv()),fu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function wv(){if(mp)return Fo;mp=1;var n=Ju(),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(g,c,p){var m,v={},w=null,k=null;p!==void 0&&(w=""+p),c.key!==void 0&&(w=""+c.key),c.ref!==void 0&&(k=c.ref);for(m in c)l.call(c,m)&&!u.hasOwnProperty(m)&&(v[m]=c[m]);if(g&&g.defaultProps)for(m in c=g.defaultProps,c)v[m]===void 0&&(v[m]=c[m]);return{$$typeof:r,type:g,key:w,ref:k,props:v,_owner:a.current}}return Fo.Fragment=o,Fo.jsx=f,Fo.jsxs=f,Fo}var gp;function Sv(){return gp||(gp=1,du.exports=wv()),du.exports}var I=Sv(),O=Ju();const oe=bv(O),vp=yv({__proto__:null,default:oe},[O]);var ya={},pu={exports:{}},kt={},hu={exports:{}},mu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function kv(){return yp||(yp=1,function(n){function r(W,ee){var K=W.length;W.push(ee);e:for(;0<K;){var M=K-1>>>1,j=W[M];if(0<a(j,ee))W[M]=ee,W[K]=j,K=M;else break e}}function o(W){return W.length===0?null:W[0]}function l(W){if(W.length===0)return null;var ee=W[0],K=W.pop();if(K!==ee){W[0]=K;e:for(var M=0,j=W.length,re=j>>>1;M<re;){var ce=2*(M+1)-1,he=W[ce],fe=ce+1,Ce=W[fe];if(0>a(he,K))fe<j&&0>a(Ce,he)?(W[M]=Ce,W[fe]=K,M=fe):(W[M]=he,W[ce]=K,M=ce);else if(fe<j&&0>a(Ce,K))W[M]=Ce,W[fe]=K,M=fe;else break e}}return ee}function a(W,ee){var K=W.sortIndex-ee.sortIndex;return K!==0?K:W.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var f=Date,g=f.now();n.unstable_now=function(){return f.now()-g}}var c=[],p=[],m=1,v=null,w=3,k=!1,b=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(W){for(var ee=o(p);ee!==null;){if(ee.callback===null)l(p);else if(ee.startTime<=W)l(p),ee.sortIndex=ee.expirationTime,r(c,ee);else break;ee=o(p)}}function F(W){if(x=!1,T(W),!b)if(o(c)!==null)b=!0,we(N);else{var ee=o(p);ee!==null&&ve(F,ee.startTime-W)}}function N(W,ee){b=!1,x&&(x=!1,E(Q),Q=-1),k=!0;var K=w;try{for(T(ee),v=o(c);v!==null&&(!(v.expirationTime>ee)||W&&!xe());){var M=v.callback;if(typeof M=="function"){v.callback=null,w=v.priorityLevel;var j=M(v.expirationTime<=ee);ee=n.unstable_now(),typeof j=="function"?v.callback=j:v===o(c)&&l(c),T(ee)}else l(c);v=o(c)}if(v!==null)var re=!0;else{var ce=o(p);ce!==null&&ve(F,ce.startTime-ee),re=!1}return re}finally{v=null,w=K,k=!1}}var $=!1,B=null,Q=-1,X=5,me=-1;function xe(){return!(n.unstable_now()-me<X)}function Te(){if(B!==null){var W=n.unstable_now();me=W;var ee=!0;try{ee=B(!0,W)}finally{ee?Le():($=!1,B=null)}}else $=!1}var Le;if(typeof R=="function")Le=function(){R(Te)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,ge=Me.port2;Me.port1.onmessage=Te,Le=function(){ge.postMessage(null)}}else Le=function(){S(Te,0)};function we(W){B=W,$||($=!0,Le())}function ve(W,ee){Q=S(function(){W(n.unstable_now())},ee)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(W){W.callback=null},n.unstable_continueExecution=function(){b||k||(b=!0,we(N))},n.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<W?Math.floor(1e3/W):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return o(c)},n.unstable_next=function(W){switch(w){case 1:case 2:case 3:var ee=3;break;default:ee=w}var K=w;w=ee;try{return W()}finally{w=K}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(W,ee){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var K=w;w=W;try{return ee()}finally{w=K}},n.unstable_scheduleCallback=function(W,ee,K){var M=n.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?M+K:M):K=M,W){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=K+j,W={id:m++,callback:ee,priorityLevel:W,startTime:K,expirationTime:j,sortIndex:-1},K>M?(W.sortIndex=K,r(p,W),o(c)===null&&W===o(p)&&(x?(E(Q),Q=-1):x=!0,ve(F,K-M))):(W.sortIndex=j,r(c,W),b||k||(b=!0,we(N))),W},n.unstable_shouldYield=xe,n.unstable_wrapCallback=function(W){var ee=w;return function(){var K=w;w=ee;try{return W.apply(this,arguments)}finally{w=K}}}}(mu)),mu}var bp;function Cv(){return bp||(bp=1,hu.exports=kv()),hu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function Ev(){if(xp)return kt;xp=1;var n=Ju(),r=Cv();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,a={};function u(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(a[e]=t,e=0;e<t.length;e++)l.add(t[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),c=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function w(e){return c.call(v,e)?!0:c.call(m,e)?!1:p.test(e)?v[e]=!0:(m[e]=!0,!1)}function k(e,t,i,s){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function b(e,t,i,s){if(t===null||typeof t>"u"||k(e,t,i,s))return!0;if(s)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function x(e,t,i,s,d,h,y){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=d,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=h,this.removeEmptyString=y}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){S[e]=new x(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];S[t]=new x(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){S[e]=new x(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){S[e]=new x(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){S[e]=new x(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){S[e]=new x(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){S[e]=new x(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){S[e]=new x(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){S[e]=new x(e,5,!1,e.toLowerCase(),null,!1,!1)});var E=/[\-:]([a-z])/g;function R(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(E,R);S[t]=new x(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(E,R);S[t]=new x(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(E,R);S[t]=new x(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){S[e]=new x(e,1,!1,e.toLowerCase(),null,!1,!1)}),S.xlinkHref=new x("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){S[e]=new x(e,1,!1,e.toLowerCase(),null,!0,!0)});function T(e,t,i,s){var d=S.hasOwnProperty(t)?S[t]:null;(d!==null?d.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(b(t,i,d,s)&&(i=null),s||d===null?w(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):d.mustUseProperty?e[d.propertyName]=i===null?d.type===3?!1:"":i:(t=d.attributeName,s=d.attributeNamespace,i===null?e.removeAttribute(t):(d=d.type,i=d===3||d===4&&i===!0?"":""+i,s?e.setAttributeNS(s,t,i):e.setAttribute(t,i))))}var F=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),$=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),me=Symbol.for("react.provider"),xe=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),Le=Symbol.for("react.suspense"),Me=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),W=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,M;function j(e){if(M===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);M=t&&t[1]||""}return`
`+M+e}var re=!1;function ce(e,t){if(!e||re)return"";re=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(A){var s=A}Reflect.construct(e,[],t)}else{try{t.call()}catch(A){s=A}e.call(t.prototype)}else{try{throw Error()}catch(A){s=A}e()}}catch(A){if(A&&s&&typeof A.stack=="string"){for(var d=A.stack.split(`
`),h=s.stack.split(`
`),y=d.length-1,C=h.length-1;1<=y&&0<=C&&d[y]!==h[C];)C--;for(;1<=y&&0<=C;y--,C--)if(d[y]!==h[C]){if(y!==1||C!==1)do if(y--,C--,0>C||d[y]!==h[C]){var P=`
`+d[y].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),P}while(1<=y&&0<=C);break}}}finally{re=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?j(e):""}function he(e){switch(e.tag){case 5:return j(e.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return e=ce(e.type,!1),e;case 11:return e=ce(e.type.render,!1),e;case 1:return e=ce(e.type,!0),e;default:return""}}function fe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case $:return"Portal";case X:return"Profiler";case Q:return"StrictMode";case Le:return"Suspense";case Me:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xe:return(e.displayName||"Context")+".Consumer";case me:return(e._context.displayName||"Context")+".Provider";case Te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ge:return t=e.displayName||null,t!==null?t:fe(e.type)||"Memo";case we:t=e._payload,e=e._init;try{return fe(e(t))}catch{}}return null}function Ce(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(t);case 8:return t===Q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ye(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ne(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mt(e){var t=Ne(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var d=i.get,h=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return d.call(this)},set:function(y){s=""+y,h.call(this,y)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kn(e){e._valueTracker||(e._valueTracker=mt(e))}function Gr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),s="";return e&&(s=Ne(e)?e.checked?"true":"false":e.value),e=s,e!==i?(t.setValue(e),!0):!1}function hr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function mr(e,t){var i=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function ui(e,t){var i=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;i=ye(t.value!=null?t.value:i),e._wrapperState={initialChecked:s,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xc(e,t){t=t.checked,t!=null&&T(e,"checked",t,!1)}function bl(e,t){xc(e,t);var i=ye(t.value),s=t.type;if(i!=null)s==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xl(e,t.type,i):t.hasOwnProperty("defaultValue")&&xl(e,t.type,ye(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wc(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function xl(e,t,i){(t!=="number"||hr(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Xr=Array.isArray;function gr(e,t,i,s){if(e=e.options,t){t={};for(var d=0;d<i.length;d++)t["$"+i[d]]=!0;for(i=0;i<e.length;i++)d=t.hasOwnProperty("$"+e[i].value),e[i].selected!==d&&(e[i].selected=d),d&&s&&(e[i].defaultSelected=!0)}else{for(i=""+ye(i),t=null,d=0;d<e.length;d++){if(e[d].value===i){e[d].selected=!0,s&&(e[d].defaultSelected=!0);return}t!==null||e[d].disabled||(t=e[d])}t!==null&&(t.selected=!0)}}function wl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sc(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(o(92));if(Xr(i)){if(1<i.length)throw Error(o(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:ye(i)}}function kc(e,t){var i=ye(t.value),s=ye(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),s!=null&&(e.defaultValue=""+s)}function Cc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ec(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ec(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ci,Pc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,s,d){MSApp.execUnsafeLocalFunction(function(){return e(t,i,s,d)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ci=ci||document.createElement("div"),ci.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ci.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jr(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var Zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},x0=["Webkit","ms","Moz","O"];Object.keys(Zr).forEach(function(e){x0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zr[t]=Zr[e]})});function Oc(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||Zr.hasOwnProperty(e)&&Zr[e]?(""+t).trim():t+"px"}function Rc(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var s=i.indexOf("--")===0,d=Oc(i,t[i],s);i==="float"&&(i="cssFloat"),s?e.setProperty(i,d):e[i]=d}}var w0=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kl(e,t){if(t){if(w0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function Cl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var El=null;function Pl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ol=null,vr=null,yr=null;function _c(e){if(e=So(e)){if(typeof Ol!="function")throw Error(o(280));var t=e.stateNode;t&&(t=Ii(t),Ol(e.stateNode,e.type,t))}}function Tc(e){vr?yr?yr.push(e):yr=[e]:vr=e}function Mc(){if(vr){var e=vr,t=yr;if(yr=vr=null,_c(e),t)for(e=0;e<t.length;e++)_c(t[e])}}function Nc(e,t){return e(t)}function Ic(){}var Rl=!1;function Lc(e,t,i){if(Rl)return e(t,i);Rl=!0;try{return Nc(e,t,i)}finally{Rl=!1,(vr!==null||yr!==null)&&(Ic(),Mc())}}function eo(e,t){var i=e.stateNode;if(i===null)return null;var s=Ii(i);if(s===null)return null;i=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(o(231,t,typeof i));return i}var _l=!1;if(g)try{var to={};Object.defineProperty(to,"passive",{get:function(){_l=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{_l=!1}function S0(e,t,i,s,d,h,y,C,P){var A=Array.prototype.slice.call(arguments,3);try{t.apply(i,A)}catch(U){this.onError(U)}}var no=!1,di=null,fi=!1,Tl=null,k0={onError:function(e){no=!0,di=e}};function C0(e,t,i,s,d,h,y,C,P){no=!1,di=null,S0.apply(k0,arguments)}function E0(e,t,i,s,d,h,y,C,P){if(C0.apply(this,arguments),no){if(no){var A=di;no=!1,di=null}else throw Error(o(198));fi||(fi=!0,Tl=A)}}function Yn(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function Dc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ac(e){if(Yn(e)!==e)throw Error(o(188))}function P0(e){var t=e.alternate;if(!t){if(t=Yn(e),t===null)throw Error(o(188));return t!==e?null:e}for(var i=e,s=t;;){var d=i.return;if(d===null)break;var h=d.alternate;if(h===null){if(s=d.return,s!==null){i=s;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===i)return Ac(d),e;if(h===s)return Ac(d),t;h=h.sibling}throw Error(o(188))}if(i.return!==s.return)i=d,s=h;else{for(var y=!1,C=d.child;C;){if(C===i){y=!0,i=d,s=h;break}if(C===s){y=!0,s=d,i=h;break}C=C.sibling}if(!y){for(C=h.child;C;){if(C===i){y=!0,i=h,s=d;break}if(C===s){y=!0,s=h,i=d;break}C=C.sibling}if(!y)throw Error(o(189))}}if(i.alternate!==s)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?e:t}function zc(e){return e=P0(e),e!==null?Fc(e):null}function Fc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fc(e);if(t!==null)return t;e=e.sibling}return null}var jc=r.unstable_scheduleCallback,Vc=r.unstable_cancelCallback,O0=r.unstable_shouldYield,R0=r.unstable_requestPaint,Ke=r.unstable_now,_0=r.unstable_getCurrentPriorityLevel,Ml=r.unstable_ImmediatePriority,$c=r.unstable_UserBlockingPriority,pi=r.unstable_NormalPriority,T0=r.unstable_LowPriority,Bc=r.unstable_IdlePriority,hi=null,Jt=null;function M0(e){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(hi,e,void 0,(e.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:L0,N0=Math.log,I0=Math.LN2;function L0(e){return e>>>=0,e===0?32:31-(N0(e)/I0|0)|0}var mi=64,gi=4194304;function ro(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vi(e,t){var i=e.pendingLanes;if(i===0)return 0;var s=0,d=e.suspendedLanes,h=e.pingedLanes,y=i&268435455;if(y!==0){var C=y&~d;C!==0?s=ro(C):(h&=y,h!==0&&(s=ro(h)))}else y=i&~d,y!==0?s=ro(y):h!==0&&(s=ro(h));if(s===0)return 0;if(t!==0&&t!==s&&!(t&d)&&(d=s&-s,h=t&-t,d>=h||d===16&&(h&4194240)!==0))return t;if(s&4&&(s|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)i=31-Vt(t),d=1<<i,s|=e[i],t&=~d;return s}function D0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function A0(e,t){for(var i=e.suspendedLanes,s=e.pingedLanes,d=e.expirationTimes,h=e.pendingLanes;0<h;){var y=31-Vt(h),C=1<<y,P=d[y];P===-1?(!(C&i)||C&s)&&(d[y]=D0(C,t)):P<=t&&(e.expiredLanes|=C),h&=~C}}function Nl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uc(){var e=mi;return mi<<=1,!(mi&4194240)&&(mi=64),e}function Il(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function oo(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Vt(t),e[t]=i}function z0(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<i;){var d=31-Vt(i),h=1<<d;t[d]=0,s[d]=-1,e[d]=-1,i&=~h}}function Ll(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var s=31-Vt(i),d=1<<s;d&t|e[s]&t&&(e[s]|=t),i&=~d}}var Ie=0;function Hc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qc,Dl,Wc,Qc,Kc,Al=!1,yi=[],En=null,Pn=null,On=null,io=new Map,ao=new Map,Rn=[],F0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yc(e,t){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":io.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(t.pointerId)}}function lo(e,t,i,s,d,h){return e===null||e.nativeEvent!==h?(e={blockedOn:t,domEventName:i,eventSystemFlags:s,nativeEvent:h,targetContainers:[d]},t!==null&&(t=So(t),t!==null&&Dl(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,d!==null&&t.indexOf(d)===-1&&t.push(d),e)}function j0(e,t,i,s,d){switch(t){case"focusin":return En=lo(En,e,t,i,s,d),!0;case"dragenter":return Pn=lo(Pn,e,t,i,s,d),!0;case"mouseover":return On=lo(On,e,t,i,s,d),!0;case"pointerover":var h=d.pointerId;return io.set(h,lo(io.get(h)||null,e,t,i,s,d)),!0;case"gotpointercapture":return h=d.pointerId,ao.set(h,lo(ao.get(h)||null,e,t,i,s,d)),!0}return!1}function Gc(e){var t=Gn(e.target);if(t!==null){var i=Yn(t);if(i!==null){if(t=i.tag,t===13){if(t=Dc(i),t!==null){e.blockedOn=t,Kc(e.priority,function(){Wc(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Fl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var s=new i.constructor(i.type,i);El=s,i.target.dispatchEvent(s),El=null}else return t=So(i),t!==null&&Dl(t),e.blockedOn=i,!1;t.shift()}return!0}function Xc(e,t,i){bi(e)&&i.delete(t)}function V0(){Al=!1,En!==null&&bi(En)&&(En=null),Pn!==null&&bi(Pn)&&(Pn=null),On!==null&&bi(On)&&(On=null),io.forEach(Xc),ao.forEach(Xc)}function so(e,t){e.blockedOn===t&&(e.blockedOn=null,Al||(Al=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,V0)))}function uo(e){function t(d){return so(d,e)}if(0<yi.length){so(yi[0],e);for(var i=1;i<yi.length;i++){var s=yi[i];s.blockedOn===e&&(s.blockedOn=null)}}for(En!==null&&so(En,e),Pn!==null&&so(Pn,e),On!==null&&so(On,e),io.forEach(t),ao.forEach(t),i=0;i<Rn.length;i++)s=Rn[i],s.blockedOn===e&&(s.blockedOn=null);for(;0<Rn.length&&(i=Rn[0],i.blockedOn===null);)Gc(i),i.blockedOn===null&&Rn.shift()}var br=F.ReactCurrentBatchConfig,xi=!0;function $0(e,t,i,s){var d=Ie,h=br.transition;br.transition=null;try{Ie=1,zl(e,t,i,s)}finally{Ie=d,br.transition=h}}function B0(e,t,i,s){var d=Ie,h=br.transition;br.transition=null;try{Ie=4,zl(e,t,i,s)}finally{Ie=d,br.transition=h}}function zl(e,t,i,s){if(xi){var d=Fl(e,t,i,s);if(d===null)ts(e,t,s,wi,i),Yc(e,s);else if(j0(d,e,t,i,s))s.stopPropagation();else if(Yc(e,s),t&4&&-1<F0.indexOf(e)){for(;d!==null;){var h=So(d);if(h!==null&&qc(h),h=Fl(e,t,i,s),h===null&&ts(e,t,s,wi,i),h===d)break;d=h}d!==null&&s.stopPropagation()}else ts(e,t,s,null,i)}}var wi=null;function Fl(e,t,i,s){if(wi=null,e=Pl(s),e=Gn(e),e!==null)if(t=Yn(e),t===null)e=null;else if(i=t.tag,i===13){if(e=Dc(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wi=e,null}function Jc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_0()){case Ml:return 1;case $c:return 4;case pi:case T0:return 16;case Bc:return 536870912;default:return 16}default:return 16}}var _n=null,jl=null,Si=null;function Zc(){if(Si)return Si;var e,t=jl,i=t.length,s,d="value"in _n?_n.value:_n.textContent,h=d.length;for(e=0;e<i&&t[e]===d[e];e++);var y=i-e;for(s=1;s<=y&&t[i-s]===d[h-s];s++);return Si=d.slice(e,1<s?1-s:void 0)}function ki(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ci(){return!0}function ed(){return!1}function Pt(e){function t(i,s,d,h,y){this._reactName=i,this._targetInst=d,this.type=s,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(i=e[C],this[C]=i?i(h):h[C]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ci:ed,this.isPropagationStopped=ed,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Ci)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Ci)},persist:function(){},isPersistent:Ci}),t}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=Pt(xr),co=K({},xr,{view:0,detail:0}),U0=Pt(co),$l,Bl,fo,Ei=K({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fo&&(fo&&e.type==="mousemove"?($l=e.screenX-fo.screenX,Bl=e.screenY-fo.screenY):Bl=$l=0,fo=e),$l)},movementY:function(e){return"movementY"in e?e.movementY:Bl}}),td=Pt(Ei),H0=K({},Ei,{dataTransfer:0}),q0=Pt(H0),W0=K({},co,{relatedTarget:0}),Ul=Pt(W0),Q0=K({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),K0=Pt(Q0),Y0=K({},xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),G0=Pt(Y0),X0=K({},xr,{data:0}),nd=Pt(X0),J0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=eg[e])?!!t[e]:!1}function Hl(){return tg}var ng=K({},co,{key:function(e){if(e.key){var t=J0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Z0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hl,charCode:function(e){return e.type==="keypress"?ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rg=Pt(ng),og=K({},Ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rd=Pt(og),ig=K({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hl}),ag=Pt(ig),lg=K({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),sg=Pt(lg),ug=K({},Ei,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cg=Pt(ug),dg=[9,13,27,32],ql=g&&"CompositionEvent"in window,po=null;g&&"documentMode"in document&&(po=document.documentMode);var fg=g&&"TextEvent"in window&&!po,od=g&&(!ql||po&&8<po&&11>=po),id=" ",ad=!1;function ld(e,t){switch(e){case"keyup":return dg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wr=!1;function pg(e,t){switch(e){case"compositionend":return sd(t);case"keypress":return t.which!==32?null:(ad=!0,id);case"textInput":return e=t.data,e===id&&ad?null:e;default:return null}}function hg(e,t){if(wr)return e==="compositionend"||!ql&&ld(e,t)?(e=Zc(),Si=jl=_n=null,wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return od&&t.locale!=="ko"?null:t.data;default:return null}}var mg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ud(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mg[e.type]:t==="textarea"}function cd(e,t,i,s){Tc(s),t=Ti(t,"onChange"),0<t.length&&(i=new Vl("onChange","change",null,i,s),e.push({event:i,listeners:t}))}var ho=null,mo=null;function gg(e){Rd(e,0)}function Pi(e){var t=Pr(e);if(Gr(t))return e}function vg(e,t){if(e==="change")return t}var dd=!1;if(g){var Wl;if(g){var Ql="oninput"in document;if(!Ql){var fd=document.createElement("div");fd.setAttribute("oninput","return;"),Ql=typeof fd.oninput=="function"}Wl=Ql}else Wl=!1;dd=Wl&&(!document.documentMode||9<document.documentMode)}function pd(){ho&&(ho.detachEvent("onpropertychange",hd),mo=ho=null)}function hd(e){if(e.propertyName==="value"&&Pi(mo)){var t=[];cd(t,mo,e,Pl(e)),Lc(gg,t)}}function yg(e,t,i){e==="focusin"?(pd(),ho=t,mo=i,ho.attachEvent("onpropertychange",hd)):e==="focusout"&&pd()}function bg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pi(mo)}function xg(e,t){if(e==="click")return Pi(t)}function wg(e,t){if(e==="input"||e==="change")return Pi(t)}function Sg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $t=typeof Object.is=="function"?Object.is:Sg;function go(e,t){if($t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),s=Object.keys(t);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var d=i[s];if(!c.call(t,d)||!$t(e[d],t[d]))return!1}return!0}function md(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gd(e,t){var i=md(e);e=0;for(var s;i;){if(i.nodeType===3){if(s=e+i.textContent.length,e<=t&&s>=t)return{node:i,offset:t-e};e=s}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=md(i)}}function vd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yd(){for(var e=window,t=hr();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=hr(e.document)}return t}function Kl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function kg(e){var t=yd(),i=e.focusedElem,s=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&vd(i.ownerDocument.documentElement,i)){if(s!==null&&Kl(i)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var d=i.textContent.length,h=Math.min(s.start,d);s=s.end===void 0?h:Math.min(s.end,d),!e.extend&&h>s&&(d=s,s=h,h=d),d=gd(i,h);var y=gd(i,s);d&&y&&(e.rangeCount!==1||e.anchorNode!==d.node||e.anchorOffset!==d.offset||e.focusNode!==y.node||e.focusOffset!==y.offset)&&(t=t.createRange(),t.setStart(d.node,d.offset),e.removeAllRanges(),h>s?(e.addRange(t),e.extend(y.node,y.offset)):(t.setEnd(y.node,y.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cg=g&&"documentMode"in document&&11>=document.documentMode,Sr=null,Yl=null,vo=null,Gl=!1;function bd(e,t,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Gl||Sr==null||Sr!==hr(s)||(s=Sr,"selectionStart"in s&&Kl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),vo&&go(vo,s)||(vo=s,s=Ti(Yl,"onSelect"),0<s.length&&(t=new Vl("onSelect","select",null,t,i),e.push({event:t,listeners:s}),t.target=Sr)))}function Oi(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var kr={animationend:Oi("Animation","AnimationEnd"),animationiteration:Oi("Animation","AnimationIteration"),animationstart:Oi("Animation","AnimationStart"),transitionend:Oi("Transition","TransitionEnd")},Xl={},xd={};g&&(xd=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function Ri(e){if(Xl[e])return Xl[e];if(!kr[e])return e;var t=kr[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in xd)return Xl[e]=t[i];return e}var wd=Ri("animationend"),Sd=Ri("animationiteration"),kd=Ri("animationstart"),Cd=Ri("transitionend"),Ed=new Map,Pd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(e,t){Ed.set(e,t),u(t,[e])}for(var Jl=0;Jl<Pd.length;Jl++){var Zl=Pd[Jl],Eg=Zl.toLowerCase(),Pg=Zl[0].toUpperCase()+Zl.slice(1);Tn(Eg,"on"+Pg)}Tn(wd,"onAnimationEnd"),Tn(Sd,"onAnimationIteration"),Tn(kd,"onAnimationStart"),Tn("dblclick","onDoubleClick"),Tn("focusin","onFocus"),Tn("focusout","onBlur"),Tn(Cd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Og=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function Od(e,t,i){var s=e.type||"unknown-event";e.currentTarget=i,E0(s,t,void 0,e),e.currentTarget=null}function Rd(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var s=e[i],d=s.event;s=s.listeners;e:{var h=void 0;if(t)for(var y=s.length-1;0<=y;y--){var C=s[y],P=C.instance,A=C.currentTarget;if(C=C.listener,P!==h&&d.isPropagationStopped())break e;Od(d,C,A),h=P}else for(y=0;y<s.length;y++){if(C=s[y],P=C.instance,A=C.currentTarget,C=C.listener,P!==h&&d.isPropagationStopped())break e;Od(d,C,A),h=P}}}if(fi)throw e=Tl,fi=!1,Tl=null,e}function ze(e,t){var i=t[ls];i===void 0&&(i=t[ls]=new Set);var s=e+"__bubble";i.has(s)||(_d(t,e,2,!1),i.add(s))}function es(e,t,i){var s=0;t&&(s|=4),_d(i,e,s,t)}var _i="_reactListening"+Math.random().toString(36).slice(2);function bo(e){if(!e[_i]){e[_i]=!0,l.forEach(function(i){i!=="selectionchange"&&(Og.has(i)||es(i,!1,e),es(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_i]||(t[_i]=!0,es("selectionchange",!1,t))}}function _d(e,t,i,s){switch(Jc(t)){case 1:var d=$0;break;case 4:d=B0;break;default:d=zl}i=d.bind(null,t,i,e),d=void 0,!_l||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(d=!0),s?d!==void 0?e.addEventListener(t,i,{capture:!0,passive:d}):e.addEventListener(t,i,!0):d!==void 0?e.addEventListener(t,i,{passive:d}):e.addEventListener(t,i,!1)}function ts(e,t,i,s,d){var h=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var y=s.tag;if(y===3||y===4){var C=s.stateNode.containerInfo;if(C===d||C.nodeType===8&&C.parentNode===d)break;if(y===4)for(y=s.return;y!==null;){var P=y.tag;if((P===3||P===4)&&(P=y.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;y=y.return}for(;C!==null;){if(y=Gn(C),y===null)return;if(P=y.tag,P===5||P===6){s=h=y;continue e}C=C.parentNode}}s=s.return}Lc(function(){var A=h,U=Pl(i),H=[];e:{var V=Ed.get(e);if(V!==void 0){var Y=Vl,J=e;switch(e){case"keypress":if(ki(i)===0)break e;case"keydown":case"keyup":Y=rg;break;case"focusin":J="focus",Y=Ul;break;case"focusout":J="blur",Y=Ul;break;case"beforeblur":case"afterblur":Y=Ul;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=q0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=ag;break;case wd:case Sd:case kd:Y=K0;break;case Cd:Y=sg;break;case"scroll":Y=U0;break;case"wheel":Y=cg;break;case"copy":case"cut":case"paste":Y=G0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=rd}var Z=(t&4)!==0,Ye=!Z&&e==="scroll",L=Z?V!==null?V+"Capture":null:V;Z=[];for(var _=A,D;_!==null;){D=_;var q=D.stateNode;if(D.tag===5&&q!==null&&(D=q,L!==null&&(q=eo(_,L),q!=null&&Z.push(xo(_,q,D)))),Ye)break;_=_.return}0<Z.length&&(V=new Y(V,J,null,i,U),H.push({event:V,listeners:Z}))}}if(!(t&7)){e:{if(V=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",V&&i!==El&&(J=i.relatedTarget||i.fromElement)&&(Gn(J)||J[cn]))break e;if((Y||V)&&(V=U.window===U?U:(V=U.ownerDocument)?V.defaultView||V.parentWindow:window,Y?(J=i.relatedTarget||i.toElement,Y=A,J=J?Gn(J):null,J!==null&&(Ye=Yn(J),J!==Ye||J.tag!==5&&J.tag!==6)&&(J=null)):(Y=null,J=A),Y!==J)){if(Z=td,q="onMouseLeave",L="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(Z=rd,q="onPointerLeave",L="onPointerEnter",_="pointer"),Ye=Y==null?V:Pr(Y),D=J==null?V:Pr(J),V=new Z(q,_+"leave",Y,i,U),V.target=Ye,V.relatedTarget=D,q=null,Gn(U)===A&&(Z=new Z(L,_+"enter",J,i,U),Z.target=D,Z.relatedTarget=Ye,q=Z),Ye=q,Y&&J)t:{for(Z=Y,L=J,_=0,D=Z;D;D=Cr(D))_++;for(D=0,q=L;q;q=Cr(q))D++;for(;0<_-D;)Z=Cr(Z),_--;for(;0<D-_;)L=Cr(L),D--;for(;_--;){if(Z===L||L!==null&&Z===L.alternate)break t;Z=Cr(Z),L=Cr(L)}Z=null}else Z=null;Y!==null&&Td(H,V,Y,Z,!1),J!==null&&Ye!==null&&Td(H,Ye,J,Z,!0)}}e:{if(V=A?Pr(A):window,Y=V.nodeName&&V.nodeName.toLowerCase(),Y==="select"||Y==="input"&&V.type==="file")var ne=vg;else if(ud(V))if(dd)ne=wg;else{ne=bg;var ae=yg}else(Y=V.nodeName)&&Y.toLowerCase()==="input"&&(V.type==="checkbox"||V.type==="radio")&&(ne=xg);if(ne&&(ne=ne(e,A))){cd(H,ne,i,U);break e}ae&&ae(e,V,A),e==="focusout"&&(ae=V._wrapperState)&&ae.controlled&&V.type==="number"&&xl(V,"number",V.value)}switch(ae=A?Pr(A):window,e){case"focusin":(ud(ae)||ae.contentEditable==="true")&&(Sr=ae,Yl=A,vo=null);break;case"focusout":vo=Yl=Sr=null;break;case"mousedown":Gl=!0;break;case"contextmenu":case"mouseup":case"dragend":Gl=!1,bd(H,i,U);break;case"selectionchange":if(Cg)break;case"keydown":case"keyup":bd(H,i,U)}var le;if(ql)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else wr?ld(e,i)&&(de="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(de="onCompositionStart");de&&(od&&i.locale!=="ko"&&(wr||de!=="onCompositionStart"?de==="onCompositionEnd"&&wr&&(le=Zc()):(_n=U,jl="value"in _n?_n.value:_n.textContent,wr=!0)),ae=Ti(A,de),0<ae.length&&(de=new nd(de,e,null,i,U),H.push({event:de,listeners:ae}),le?de.data=le:(le=sd(i),le!==null&&(de.data=le)))),(le=fg?pg(e,i):hg(e,i))&&(A=Ti(A,"onBeforeInput"),0<A.length&&(U=new nd("onBeforeInput","beforeinput",null,i,U),H.push({event:U,listeners:A}),U.data=le))}Rd(H,t)})}function xo(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Ti(e,t){for(var i=t+"Capture",s=[];e!==null;){var d=e,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=eo(e,i),h!=null&&s.unshift(xo(e,h,d)),h=eo(e,t),h!=null&&s.push(xo(e,h,d))),e=e.return}return s}function Cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Td(e,t,i,s,d){for(var h=t._reactName,y=[];i!==null&&i!==s;){var C=i,P=C.alternate,A=C.stateNode;if(P!==null&&P===s)break;C.tag===5&&A!==null&&(C=A,d?(P=eo(i,h),P!=null&&y.unshift(xo(i,P,C))):d||(P=eo(i,h),P!=null&&y.push(xo(i,P,C)))),i=i.return}y.length!==0&&e.push({event:t,listeners:y})}var Rg=/\r\n?/g,_g=/\u0000|\uFFFD/g;function Md(e){return(typeof e=="string"?e:""+e).replace(Rg,`
`).replace(_g,"")}function Mi(e,t,i){if(t=Md(t),Md(e)!==t&&i)throw Error(o(425))}function Ni(){}var ns=null,rs=null;function os(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var is=typeof setTimeout=="function"?setTimeout:void 0,Tg=typeof clearTimeout=="function"?clearTimeout:void 0,Nd=typeof Promise=="function"?Promise:void 0,Mg=typeof queueMicrotask=="function"?queueMicrotask:typeof Nd<"u"?function(e){return Nd.resolve(null).then(e).catch(Ng)}:is;function Ng(e){setTimeout(function(){throw e})}function as(e,t){var i=t,s=0;do{var d=i.nextSibling;if(e.removeChild(i),d&&d.nodeType===8)if(i=d.data,i==="/$"){if(s===0){e.removeChild(d),uo(t);return}s--}else i!=="$"&&i!=="$?"&&i!=="$!"||s++;i=d}while(i);uo(t)}function Mn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Id(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var Er=Math.random().toString(36).slice(2),Zt="__reactFiber$"+Er,wo="__reactProps$"+Er,cn="__reactContainer$"+Er,ls="__reactEvents$"+Er,Ig="__reactListeners$"+Er,Lg="__reactHandles$"+Er;function Gn(e){var t=e[Zt];if(t)return t;for(var i=e.parentNode;i;){if(t=i[cn]||i[Zt]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Id(e);e!==null;){if(i=e[Zt])return i;e=Id(e)}return t}e=i,i=e.parentNode}return null}function So(e){return e=e[Zt]||e[cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Ii(e){return e[wo]||null}var ss=[],Or=-1;function Nn(e){return{current:e}}function Fe(e){0>Or||(e.current=ss[Or],ss[Or]=null,Or--)}function De(e,t){Or++,ss[Or]=e.current,e.current=t}var In={},st=Nn(In),yt=Nn(!1),Xn=In;function Rr(e,t){var i=e.type.contextTypes;if(!i)return In;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in i)d[h]=t[h];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=d),d}function bt(e){return e=e.childContextTypes,e!=null}function Li(){Fe(yt),Fe(st)}function Ld(e,t,i){if(st.current!==In)throw Error(o(168));De(st,t),De(yt,i)}function Dd(e,t,i){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return i;s=s.getChildContext();for(var d in s)if(!(d in t))throw Error(o(108,Ce(e)||"Unknown",d));return K({},i,s)}function Di(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||In,Xn=st.current,De(st,e),De(yt,yt.current),!0}function Ad(e,t,i){var s=e.stateNode;if(!s)throw Error(o(169));i?(e=Dd(e,t,Xn),s.__reactInternalMemoizedMergedChildContext=e,Fe(yt),Fe(st),De(st,e)):Fe(yt),De(yt,i)}var dn=null,Ai=!1,us=!1;function zd(e){dn===null?dn=[e]:dn.push(e)}function Dg(e){Ai=!0,zd(e)}function Ln(){if(!us&&dn!==null){us=!0;var e=0,t=Ie;try{var i=dn;for(Ie=1;e<i.length;e++){var s=i[e];do s=s(!0);while(s!==null)}dn=null,Ai=!1}catch(d){throw dn!==null&&(dn=dn.slice(e+1)),jc(Ml,Ln),d}finally{Ie=t,us=!1}}return null}var _r=[],Tr=0,zi=null,Fi=0,Lt=[],Dt=0,Jn=null,fn=1,pn="";function Zn(e,t){_r[Tr++]=Fi,_r[Tr++]=zi,zi=e,Fi=t}function Fd(e,t,i){Lt[Dt++]=fn,Lt[Dt++]=pn,Lt[Dt++]=Jn,Jn=e;var s=fn;e=pn;var d=32-Vt(s)-1;s&=~(1<<d),i+=1;var h=32-Vt(t)+d;if(30<h){var y=d-d%5;h=(s&(1<<y)-1).toString(32),s>>=y,d-=y,fn=1<<32-Vt(t)+d|i<<d|s,pn=h+e}else fn=1<<h|i<<d|s,pn=e}function cs(e){e.return!==null&&(Zn(e,1),Fd(e,1,0))}function ds(e){for(;e===zi;)zi=_r[--Tr],_r[Tr]=null,Fi=_r[--Tr],_r[Tr]=null;for(;e===Jn;)Jn=Lt[--Dt],Lt[Dt]=null,pn=Lt[--Dt],Lt[Dt]=null,fn=Lt[--Dt],Lt[Dt]=null}var Ot=null,Rt=null,je=!1,Bt=null;function jd(e,t){var i=jt(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function Vd(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ot=e,Rt=Mn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ot=e,Rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=Jn!==null?{id:fn,overflow:pn}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=jt(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,Ot=e,Rt=null,!0):!1;default:return!1}}function fs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ps(e){if(je){var t=Rt;if(t){var i=t;if(!Vd(e,t)){if(fs(e))throw Error(o(418));t=Mn(i.nextSibling);var s=Ot;t&&Vd(e,t)?jd(s,i):(e.flags=e.flags&-4097|2,je=!1,Ot=e)}}else{if(fs(e))throw Error(o(418));e.flags=e.flags&-4097|2,je=!1,Ot=e}}}function $d(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ot=e}function ji(e){if(e!==Ot)return!1;if(!je)return $d(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!os(e.type,e.memoizedProps)),t&&(t=Rt)){if(fs(e))throw Bd(),Error(o(418));for(;t;)jd(e,t),t=Mn(t.nextSibling)}if($d(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){Rt=Mn(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}Rt=null}}else Rt=Ot?Mn(e.stateNode.nextSibling):null;return!0}function Bd(){for(var e=Rt;e;)e=Mn(e.nextSibling)}function Mr(){Rt=Ot=null,je=!1}function hs(e){Bt===null?Bt=[e]:Bt.push(e)}var Ag=F.ReactCurrentBatchConfig;function ko(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(o(309));var s=i.stateNode}if(!s)throw Error(o(147,e));var d=s,h=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===h?t.ref:(t=function(y){var C=d.refs;y===null?delete C[h]:C[h]=y},t._stringRef=h,t)}if(typeof e!="string")throw Error(o(284));if(!i._owner)throw Error(o(290,e))}return e}function Vi(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ud(e){var t=e._init;return t(e._payload)}function Hd(e){function t(L,_){if(e){var D=L.deletions;D===null?(L.deletions=[_],L.flags|=16):D.push(_)}}function i(L,_){if(!e)return null;for(;_!==null;)t(L,_),_=_.sibling;return null}function s(L,_){for(L=new Map;_!==null;)_.key!==null?L.set(_.key,_):L.set(_.index,_),_=_.sibling;return L}function d(L,_){return L=Bn(L,_),L.index=0,L.sibling=null,L}function h(L,_,D){return L.index=D,e?(D=L.alternate,D!==null?(D=D.index,D<_?(L.flags|=2,_):D):(L.flags|=2,_)):(L.flags|=1048576,_)}function y(L){return e&&L.alternate===null&&(L.flags|=2),L}function C(L,_,D,q){return _===null||_.tag!==6?(_=iu(D,L.mode,q),_.return=L,_):(_=d(_,D),_.return=L,_)}function P(L,_,D,q){var ne=D.type;return ne===B?U(L,_,D.props.children,q,D.key):_!==null&&(_.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===we&&Ud(ne)===_.type)?(q=d(_,D.props),q.ref=ko(L,_,D),q.return=L,q):(q=ca(D.type,D.key,D.props,null,L.mode,q),q.ref=ko(L,_,D),q.return=L,q)}function A(L,_,D,q){return _===null||_.tag!==4||_.stateNode.containerInfo!==D.containerInfo||_.stateNode.implementation!==D.implementation?(_=au(D,L.mode,q),_.return=L,_):(_=d(_,D.children||[]),_.return=L,_)}function U(L,_,D,q,ne){return _===null||_.tag!==7?(_=lr(D,L.mode,q,ne),_.return=L,_):(_=d(_,D),_.return=L,_)}function H(L,_,D){if(typeof _=="string"&&_!==""||typeof _=="number")return _=iu(""+_,L.mode,D),_.return=L,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case N:return D=ca(_.type,_.key,_.props,null,L.mode,D),D.ref=ko(L,null,_),D.return=L,D;case $:return _=au(_,L.mode,D),_.return=L,_;case we:var q=_._init;return H(L,q(_._payload),D)}if(Xr(_)||ee(_))return _=lr(_,L.mode,D,null),_.return=L,_;Vi(L,_)}return null}function V(L,_,D,q){var ne=_!==null?_.key:null;if(typeof D=="string"&&D!==""||typeof D=="number")return ne!==null?null:C(L,_,""+D,q);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case N:return D.key===ne?P(L,_,D,q):null;case $:return D.key===ne?A(L,_,D,q):null;case we:return ne=D._init,V(L,_,ne(D._payload),q)}if(Xr(D)||ee(D))return ne!==null?null:U(L,_,D,q,null);Vi(L,D)}return null}function Y(L,_,D,q,ne){if(typeof q=="string"&&q!==""||typeof q=="number")return L=L.get(D)||null,C(_,L,""+q,ne);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case N:return L=L.get(q.key===null?D:q.key)||null,P(_,L,q,ne);case $:return L=L.get(q.key===null?D:q.key)||null,A(_,L,q,ne);case we:var ae=q._init;return Y(L,_,D,ae(q._payload),ne)}if(Xr(q)||ee(q))return L=L.get(D)||null,U(_,L,q,ne,null);Vi(_,q)}return null}function J(L,_,D,q){for(var ne=null,ae=null,le=_,de=_=0,ot=null;le!==null&&de<D.length;de++){le.index>de?(ot=le,le=null):ot=le.sibling;var Pe=V(L,le,D[de],q);if(Pe===null){le===null&&(le=ot);break}e&&le&&Pe.alternate===null&&t(L,le),_=h(Pe,_,de),ae===null?ne=Pe:ae.sibling=Pe,ae=Pe,le=ot}if(de===D.length)return i(L,le),je&&Zn(L,de),ne;if(le===null){for(;de<D.length;de++)le=H(L,D[de],q),le!==null&&(_=h(le,_,de),ae===null?ne=le:ae.sibling=le,ae=le);return je&&Zn(L,de),ne}for(le=s(L,le);de<D.length;de++)ot=Y(le,L,de,D[de],q),ot!==null&&(e&&ot.alternate!==null&&le.delete(ot.key===null?de:ot.key),_=h(ot,_,de),ae===null?ne=ot:ae.sibling=ot,ae=ot);return e&&le.forEach(function(Un){return t(L,Un)}),je&&Zn(L,de),ne}function Z(L,_,D,q){var ne=ee(D);if(typeof ne!="function")throw Error(o(150));if(D=ne.call(D),D==null)throw Error(o(151));for(var ae=ne=null,le=_,de=_=0,ot=null,Pe=D.next();le!==null&&!Pe.done;de++,Pe=D.next()){le.index>de?(ot=le,le=null):ot=le.sibling;var Un=V(L,le,Pe.value,q);if(Un===null){le===null&&(le=ot);break}e&&le&&Un.alternate===null&&t(L,le),_=h(Un,_,de),ae===null?ne=Un:ae.sibling=Un,ae=Un,le=ot}if(Pe.done)return i(L,le),je&&Zn(L,de),ne;if(le===null){for(;!Pe.done;de++,Pe=D.next())Pe=H(L,Pe.value,q),Pe!==null&&(_=h(Pe,_,de),ae===null?ne=Pe:ae.sibling=Pe,ae=Pe);return je&&Zn(L,de),ne}for(le=s(L,le);!Pe.done;de++,Pe=D.next())Pe=Y(le,L,de,Pe.value,q),Pe!==null&&(e&&Pe.alternate!==null&&le.delete(Pe.key===null?de:Pe.key),_=h(Pe,_,de),ae===null?ne=Pe:ae.sibling=Pe,ae=Pe);return e&&le.forEach(function(mv){return t(L,mv)}),je&&Zn(L,de),ne}function Ye(L,_,D,q){if(typeof D=="object"&&D!==null&&D.type===B&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case N:e:{for(var ne=D.key,ae=_;ae!==null;){if(ae.key===ne){if(ne=D.type,ne===B){if(ae.tag===7){i(L,ae.sibling),_=d(ae,D.props.children),_.return=L,L=_;break e}}else if(ae.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===we&&Ud(ne)===ae.type){i(L,ae.sibling),_=d(ae,D.props),_.ref=ko(L,ae,D),_.return=L,L=_;break e}i(L,ae);break}else t(L,ae);ae=ae.sibling}D.type===B?(_=lr(D.props.children,L.mode,q,D.key),_.return=L,L=_):(q=ca(D.type,D.key,D.props,null,L.mode,q),q.ref=ko(L,_,D),q.return=L,L=q)}return y(L);case $:e:{for(ae=D.key;_!==null;){if(_.key===ae)if(_.tag===4&&_.stateNode.containerInfo===D.containerInfo&&_.stateNode.implementation===D.implementation){i(L,_.sibling),_=d(_,D.children||[]),_.return=L,L=_;break e}else{i(L,_);break}else t(L,_);_=_.sibling}_=au(D,L.mode,q),_.return=L,L=_}return y(L);case we:return ae=D._init,Ye(L,_,ae(D._payload),q)}if(Xr(D))return J(L,_,D,q);if(ee(D))return Z(L,_,D,q);Vi(L,D)}return typeof D=="string"&&D!==""||typeof D=="number"?(D=""+D,_!==null&&_.tag===6?(i(L,_.sibling),_=d(_,D),_.return=L,L=_):(i(L,_),_=iu(D,L.mode,q),_.return=L,L=_),y(L)):i(L,_)}return Ye}var Nr=Hd(!0),qd=Hd(!1),$i=Nn(null),Bi=null,Ir=null,ms=null;function gs(){ms=Ir=Bi=null}function vs(e){var t=$i.current;Fe($i),e._currentValue=t}function ys(e,t,i){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===i)break;e=e.return}}function Lr(e,t){Bi=e,ms=Ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xt=!0),e.firstContext=null)}function At(e){var t=e._currentValue;if(ms!==e)if(e={context:e,memoizedValue:t,next:null},Ir===null){if(Bi===null)throw Error(o(308));Ir=e,Bi.dependencies={lanes:0,firstContext:e}}else Ir=Ir.next=e;return t}var er=null;function bs(e){er===null?er=[e]:er.push(e)}function Wd(e,t,i,s){var d=t.interleaved;return d===null?(i.next=i,bs(t)):(i.next=d.next,d.next=i),t.interleaved=i,hn(e,s)}function hn(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Dn=!1;function xs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function An(e,t,i){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,Ee&2){var d=s.pending;return d===null?t.next=t:(t.next=d.next,d.next=t),s.pending=t,hn(e,i)}return d=s.interleaved,d===null?(t.next=t,bs(s)):(t.next=d.next,d.next=t),s.interleaved=t,hn(e,i)}function Ui(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,i|=s,t.lanes=i,Ll(e,i)}}function Kd(e,t){var i=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var d=null,h=null;if(i=i.firstBaseUpdate,i!==null){do{var y={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};h===null?d=h=y:h=h.next=y,i=i.next}while(i!==null);h===null?d=h=t:h=h.next=t}else d=h=t;i={baseState:s.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:s.shared,effects:s.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function Hi(e,t,i,s){var d=e.updateQueue;Dn=!1;var h=d.firstBaseUpdate,y=d.lastBaseUpdate,C=d.shared.pending;if(C!==null){d.shared.pending=null;var P=C,A=P.next;P.next=null,y===null?h=A:y.next=A,y=P;var U=e.alternate;U!==null&&(U=U.updateQueue,C=U.lastBaseUpdate,C!==y&&(C===null?U.firstBaseUpdate=A:C.next=A,U.lastBaseUpdate=P))}if(h!==null){var H=d.baseState;y=0,U=A=P=null,C=h;do{var V=C.lane,Y=C.eventTime;if((s&V)===V){U!==null&&(U=U.next={eventTime:Y,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var J=e,Z=C;switch(V=t,Y=i,Z.tag){case 1:if(J=Z.payload,typeof J=="function"){H=J.call(Y,H,V);break e}H=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=Z.payload,V=typeof J=="function"?J.call(Y,H,V):J,V==null)break e;H=K({},H,V);break e;case 2:Dn=!0}}C.callback!==null&&C.lane!==0&&(e.flags|=64,V=d.effects,V===null?d.effects=[C]:V.push(C))}else Y={eventTime:Y,lane:V,tag:C.tag,payload:C.payload,callback:C.callback,next:null},U===null?(A=U=Y,P=H):U=U.next=Y,y|=V;if(C=C.next,C===null){if(C=d.shared.pending,C===null)break;V=C,C=V.next,V.next=null,d.lastBaseUpdate=V,d.shared.pending=null}}while(!0);if(U===null&&(P=H),d.baseState=P,d.firstBaseUpdate=A,d.lastBaseUpdate=U,t=d.shared.interleaved,t!==null){d=t;do y|=d.lane,d=d.next;while(d!==t)}else h===null&&(d.shared.lanes=0);rr|=y,e.lanes=y,e.memoizedState=H}}function Yd(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],d=s.callback;if(d!==null){if(s.callback=null,s=i,typeof d!="function")throw Error(o(191,d));d.call(s)}}}var Co={},en=Nn(Co),Eo=Nn(Co),Po=Nn(Co);function tr(e){if(e===Co)throw Error(o(174));return e}function ws(e,t){switch(De(Po,t),De(Eo,e),De(en,Co),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Sl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Sl(t,e)}Fe(en),De(en,t)}function Dr(){Fe(en),Fe(Eo),Fe(Po)}function Gd(e){tr(Po.current);var t=tr(en.current),i=Sl(t,e.type);t!==i&&(De(Eo,e),De(en,i))}function Ss(e){Eo.current===e&&(Fe(en),Fe(Eo))}var $e=Nn(0);function qi(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ks=[];function Cs(){for(var e=0;e<ks.length;e++)ks[e]._workInProgressVersionPrimary=null;ks.length=0}var Wi=F.ReactCurrentDispatcher,Es=F.ReactCurrentBatchConfig,nr=0,Be=null,Ze=null,nt=null,Qi=!1,Oo=!1,Ro=0,zg=0;function ut(){throw Error(o(321))}function Ps(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!$t(e[i],t[i]))return!1;return!0}function Os(e,t,i,s,d,h){if(nr=h,Be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Wi.current=e===null||e.memoizedState===null?$g:Bg,e=i(s,d),Oo){h=0;do{if(Oo=!1,Ro=0,25<=h)throw Error(o(301));h+=1,nt=Ze=null,t.updateQueue=null,Wi.current=Ug,e=i(s,d)}while(Oo)}if(Wi.current=Gi,t=Ze!==null&&Ze.next!==null,nr=0,nt=Ze=Be=null,Qi=!1,t)throw Error(o(300));return e}function Rs(){var e=Ro!==0;return Ro=0,e}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?Be.memoizedState=nt=e:nt=nt.next=e,nt}function zt(){if(Ze===null){var e=Be.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var t=nt===null?Be.memoizedState:nt.next;if(t!==null)nt=t,Ze=e;else{if(e===null)throw Error(o(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},nt===null?Be.memoizedState=nt=e:nt=nt.next=e}return nt}function _o(e,t){return typeof t=="function"?t(e):t}function _s(e){var t=zt(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var s=Ze,d=s.baseQueue,h=i.pending;if(h!==null){if(d!==null){var y=d.next;d.next=h.next,h.next=y}s.baseQueue=d=h,i.pending=null}if(d!==null){h=d.next,s=s.baseState;var C=y=null,P=null,A=h;do{var U=A.lane;if((nr&U)===U)P!==null&&(P=P.next={lane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),s=A.hasEagerState?A.eagerState:e(s,A.action);else{var H={lane:U,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null};P===null?(C=P=H,y=s):P=P.next=H,Be.lanes|=U,rr|=U}A=A.next}while(A!==null&&A!==h);P===null?y=s:P.next=C,$t(s,t.memoizedState)||(xt=!0),t.memoizedState=s,t.baseState=y,t.baseQueue=P,i.lastRenderedState=s}if(e=i.interleaved,e!==null){d=e;do h=d.lane,Be.lanes|=h,rr|=h,d=d.next;while(d!==e)}else d===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function Ts(e){var t=zt(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var s=i.dispatch,d=i.pending,h=t.memoizedState;if(d!==null){i.pending=null;var y=d=d.next;do h=e(h,y.action),y=y.next;while(y!==d);$t(h,t.memoizedState)||(xt=!0),t.memoizedState=h,t.baseQueue===null&&(t.baseState=h),i.lastRenderedState=h}return[h,s]}function Xd(){}function Jd(e,t){var i=Be,s=zt(),d=t(),h=!$t(s.memoizedState,d);if(h&&(s.memoizedState=d,xt=!0),s=s.queue,Ms(tf.bind(null,i,s,e),[e]),s.getSnapshot!==t||h||nt!==null&&nt.memoizedState.tag&1){if(i.flags|=2048,To(9,ef.bind(null,i,s,d,t),void 0,null),rt===null)throw Error(o(349));nr&30||Zd(i,t,d)}return d}function Zd(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=Be.updateQueue,t===null?(t={lastEffect:null,stores:null},Be.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function ef(e,t,i,s){t.value=i,t.getSnapshot=s,nf(t)&&rf(e)}function tf(e,t,i){return i(function(){nf(t)&&rf(e)})}function nf(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!$t(e,i)}catch{return!0}}function rf(e){var t=hn(e,1);t!==null&&Wt(t,e,1,-1)}function of(e){var t=tn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:e},t.queue=e,e=e.dispatch=Vg.bind(null,Be,e),[t.memoizedState,e]}function To(e,t,i,s){return e={tag:e,create:t,destroy:i,deps:s,next:null},t=Be.updateQueue,t===null?(t={lastEffect:null,stores:null},Be.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(s=i.next,i.next=e,e.next=s,t.lastEffect=e)),e}function af(){return zt().memoizedState}function Ki(e,t,i,s){var d=tn();Be.flags|=e,d.memoizedState=To(1|t,i,void 0,s===void 0?null:s)}function Yi(e,t,i,s){var d=zt();s=s===void 0?null:s;var h=void 0;if(Ze!==null){var y=Ze.memoizedState;if(h=y.destroy,s!==null&&Ps(s,y.deps)){d.memoizedState=To(t,i,h,s);return}}Be.flags|=e,d.memoizedState=To(1|t,i,h,s)}function lf(e,t){return Ki(8390656,8,e,t)}function Ms(e,t){return Yi(2048,8,e,t)}function sf(e,t){return Yi(4,2,e,t)}function uf(e,t){return Yi(4,4,e,t)}function cf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function df(e,t,i){return i=i!=null?i.concat([e]):null,Yi(4,4,cf.bind(null,t,e),i)}function Ns(){}function ff(e,t){var i=zt();t=t===void 0?null:t;var s=i.memoizedState;return s!==null&&t!==null&&Ps(t,s[1])?s[0]:(i.memoizedState=[e,t],e)}function pf(e,t){var i=zt();t=t===void 0?null:t;var s=i.memoizedState;return s!==null&&t!==null&&Ps(t,s[1])?s[0]:(e=e(),i.memoizedState=[e,t],e)}function hf(e,t,i){return nr&21?($t(i,t)||(i=Uc(),Be.lanes|=i,rr|=i,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xt=!0),e.memoizedState=i)}function Fg(e,t){var i=Ie;Ie=i!==0&&4>i?i:4,e(!0);var s=Es.transition;Es.transition={};try{e(!1),t()}finally{Ie=i,Es.transition=s}}function mf(){return zt().memoizedState}function jg(e,t,i){var s=Vn(e);if(i={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null},gf(e))vf(t,i);else if(i=Wd(e,t,i,s),i!==null){var d=vt();Wt(i,e,s,d),yf(i,t,s)}}function Vg(e,t,i){var s=Vn(e),d={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null};if(gf(e))vf(t,d);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=t.lastRenderedReducer,h!==null))try{var y=t.lastRenderedState,C=h(y,i);if(d.hasEagerState=!0,d.eagerState=C,$t(C,y)){var P=t.interleaved;P===null?(d.next=d,bs(t)):(d.next=P.next,P.next=d),t.interleaved=d;return}}catch{}finally{}i=Wd(e,t,d,s),i!==null&&(d=vt(),Wt(i,e,s,d),yf(i,t,s))}}function gf(e){var t=e.alternate;return e===Be||t!==null&&t===Be}function vf(e,t){Oo=Qi=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function yf(e,t,i){if(i&4194240){var s=t.lanes;s&=e.pendingLanes,i|=s,t.lanes=i,Ll(e,i)}}var Gi={readContext:At,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},$g={readContext:At,useCallback:function(e,t){return tn().memoizedState=[e,t===void 0?null:t],e},useContext:At,useEffect:lf,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,Ki(4194308,4,cf.bind(null,t,e),i)},useLayoutEffect:function(e,t){return Ki(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ki(4,2,e,t)},useMemo:function(e,t){var i=tn();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var s=tn();return t=i!==void 0?i(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=jg.bind(null,Be,e),[s.memoizedState,e]},useRef:function(e){var t=tn();return e={current:e},t.memoizedState=e},useState:of,useDebugValue:Ns,useDeferredValue:function(e){return tn().memoizedState=e},useTransition:function(){var e=of(!1),t=e[0];return e=Fg.bind(null,e[1]),tn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var s=Be,d=tn();if(je){if(i===void 0)throw Error(o(407));i=i()}else{if(i=t(),rt===null)throw Error(o(349));nr&30||Zd(s,t,i)}d.memoizedState=i;var h={value:i,getSnapshot:t};return d.queue=h,lf(tf.bind(null,s,h,e),[e]),s.flags|=2048,To(9,ef.bind(null,s,h,i,t),void 0,null),i},useId:function(){var e=tn(),t=rt.identifierPrefix;if(je){var i=pn,s=fn;i=(s&~(1<<32-Vt(s)-1)).toString(32)+i,t=":"+t+"R"+i,i=Ro++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=zg++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Bg={readContext:At,useCallback:ff,useContext:At,useEffect:Ms,useImperativeHandle:df,useInsertionEffect:sf,useLayoutEffect:uf,useMemo:pf,useReducer:_s,useRef:af,useState:function(){return _s(_o)},useDebugValue:Ns,useDeferredValue:function(e){var t=zt();return hf(t,Ze.memoizedState,e)},useTransition:function(){var e=_s(_o)[0],t=zt().memoizedState;return[e,t]},useMutableSource:Xd,useSyncExternalStore:Jd,useId:mf,unstable_isNewReconciler:!1},Ug={readContext:At,useCallback:ff,useContext:At,useEffect:Ms,useImperativeHandle:df,useInsertionEffect:sf,useLayoutEffect:uf,useMemo:pf,useReducer:Ts,useRef:af,useState:function(){return Ts(_o)},useDebugValue:Ns,useDeferredValue:function(e){var t=zt();return Ze===null?t.memoizedState=e:hf(t,Ze.memoizedState,e)},useTransition:function(){var e=Ts(_o)[0],t=zt().memoizedState;return[e,t]},useMutableSource:Xd,useSyncExternalStore:Jd,useId:mf,unstable_isNewReconciler:!1};function Ut(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function Is(e,t,i,s){t=e.memoizedState,i=i(s,t),i=i==null?t:K({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Xi={isMounted:function(e){return(e=e._reactInternals)?Yn(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var s=vt(),d=Vn(e),h=mn(s,d);h.payload=t,i!=null&&(h.callback=i),t=An(e,h,d),t!==null&&(Wt(t,e,d,s),Ui(t,e,d))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var s=vt(),d=Vn(e),h=mn(s,d);h.tag=1,h.payload=t,i!=null&&(h.callback=i),t=An(e,h,d),t!==null&&(Wt(t,e,d,s),Ui(t,e,d))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=vt(),s=Vn(e),d=mn(i,s);d.tag=2,t!=null&&(d.callback=t),t=An(e,d,s),t!==null&&(Wt(t,e,s,i),Ui(t,e,s))}};function bf(e,t,i,s,d,h,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,h,y):t.prototype&&t.prototype.isPureReactComponent?!go(i,s)||!go(d,h):!0}function xf(e,t,i){var s=!1,d=In,h=t.contextType;return typeof h=="object"&&h!==null?h=At(h):(d=bt(t)?Xn:st.current,s=t.contextTypes,h=(s=s!=null)?Rr(e,d):In),t=new t(i,h),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xi,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=d,e.__reactInternalMemoizedMaskedChildContext=h),t}function wf(e,t,i,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,s),t.state!==e&&Xi.enqueueReplaceState(t,t.state,null)}function Ls(e,t,i,s){var d=e.stateNode;d.props=i,d.state=e.memoizedState,d.refs={},xs(e);var h=t.contextType;typeof h=="object"&&h!==null?d.context=At(h):(h=bt(t)?Xn:st.current,d.context=Rr(e,h)),d.state=e.memoizedState,h=t.getDerivedStateFromProps,typeof h=="function"&&(Is(e,t,h,i),d.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(t=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),t!==d.state&&Xi.enqueueReplaceState(d,d.state,null),Hi(e,i,d,s),d.state=e.memoizedState),typeof d.componentDidMount=="function"&&(e.flags|=4194308)}function Ar(e,t){try{var i="",s=t;do i+=he(s),s=s.return;while(s);var d=i}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:e,source:t,stack:d,digest:null}}function Ds(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function As(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var Hg=typeof WeakMap=="function"?WeakMap:Map;function Sf(e,t,i){i=mn(-1,i),i.tag=3,i.payload={element:null};var s=t.value;return i.callback=function(){oa||(oa=!0,Xs=s),As(e,t)},i}function kf(e,t,i){i=mn(-1,i),i.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var d=t.value;i.payload=function(){return s(d)},i.callback=function(){As(e,t)}}var h=e.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(i.callback=function(){As(e,t),typeof s!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var y=t.stack;this.componentDidCatch(t.value,{componentStack:y!==null?y:""})}),i}function Cf(e,t,i){var s=e.pingCache;if(s===null){s=e.pingCache=new Hg;var d=new Set;s.set(t,d)}else d=s.get(t),d===void 0&&(d=new Set,s.set(t,d));d.has(i)||(d.add(i),e=ov.bind(null,e,t,i),t.then(e,e))}function Ef(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pf(e,t,i,s,d){return e.mode&1?(e.flags|=65536,e.lanes=d,e):(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=mn(-1,1),t.tag=2,An(i,t,1))),i.lanes|=1),e)}var qg=F.ReactCurrentOwner,xt=!1;function gt(e,t,i,s){t.child=e===null?qd(t,null,i,s):Nr(t,e.child,i,s)}function Of(e,t,i,s,d){i=i.render;var h=t.ref;return Lr(t,d),s=Os(e,t,i,s,h,d),i=Rs(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~d,gn(e,t,d)):(je&&i&&cs(t),t.flags|=1,gt(e,t,s,d),t.child)}function Rf(e,t,i,s,d){if(e===null){var h=i.type;return typeof h=="function"&&!ou(h)&&h.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=h,_f(e,t,h,s,d)):(e=ca(i.type,null,s,t,t.mode,d),e.ref=t.ref,e.return=t,t.child=e)}if(h=e.child,!(e.lanes&d)){var y=h.memoizedProps;if(i=i.compare,i=i!==null?i:go,i(y,s)&&e.ref===t.ref)return gn(e,t,d)}return t.flags|=1,e=Bn(h,s),e.ref=t.ref,e.return=t,t.child=e}function _f(e,t,i,s,d){if(e!==null){var h=e.memoizedProps;if(go(h,s)&&e.ref===t.ref)if(xt=!1,t.pendingProps=s=h,(e.lanes&d)!==0)e.flags&131072&&(xt=!0);else return t.lanes=e.lanes,gn(e,t,d)}return zs(e,t,i,s,d)}function Tf(e,t,i){var s=t.pendingProps,d=s.children,h=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},De(Fr,_t),_t|=i;else{if(!(i&1073741824))return e=h!==null?h.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,De(Fr,_t),_t|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=h!==null?h.baseLanes:i,De(Fr,_t),_t|=s}else h!==null?(s=h.baseLanes|i,t.memoizedState=null):s=i,De(Fr,_t),_t|=s;return gt(e,t,d,i),t.child}function Mf(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function zs(e,t,i,s,d){var h=bt(i)?Xn:st.current;return h=Rr(t,h),Lr(t,d),i=Os(e,t,i,s,h,d),s=Rs(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~d,gn(e,t,d)):(je&&s&&cs(t),t.flags|=1,gt(e,t,i,d),t.child)}function Nf(e,t,i,s,d){if(bt(i)){var h=!0;Di(t)}else h=!1;if(Lr(t,d),t.stateNode===null)Zi(e,t),xf(t,i,s),Ls(t,i,s,d),s=!0;else if(e===null){var y=t.stateNode,C=t.memoizedProps;y.props=C;var P=y.context,A=i.contextType;typeof A=="object"&&A!==null?A=At(A):(A=bt(i)?Xn:st.current,A=Rr(t,A));var U=i.getDerivedStateFromProps,H=typeof U=="function"||typeof y.getSnapshotBeforeUpdate=="function";H||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(C!==s||P!==A)&&wf(t,y,s,A),Dn=!1;var V=t.memoizedState;y.state=V,Hi(t,s,y,d),P=t.memoizedState,C!==s||V!==P||yt.current||Dn?(typeof U=="function"&&(Is(t,i,U,s),P=t.memoizedState),(C=Dn||bf(t,i,C,s,V,P,A))?(H||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(t.flags|=4194308)):(typeof y.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=P),y.props=s,y.state=P,y.context=A,s=C):(typeof y.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{y=t.stateNode,Qd(e,t),C=t.memoizedProps,A=t.type===t.elementType?C:Ut(t.type,C),y.props=A,H=t.pendingProps,V=y.context,P=i.contextType,typeof P=="object"&&P!==null?P=At(P):(P=bt(i)?Xn:st.current,P=Rr(t,P));var Y=i.getDerivedStateFromProps;(U=typeof Y=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(C!==H||V!==P)&&wf(t,y,s,P),Dn=!1,V=t.memoizedState,y.state=V,Hi(t,s,y,d);var J=t.memoizedState;C!==H||V!==J||yt.current||Dn?(typeof Y=="function"&&(Is(t,i,Y,s),J=t.memoizedState),(A=Dn||bf(t,i,A,s,V,J,P)||!1)?(U||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(s,J,P),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(s,J,P)),typeof y.componentDidUpdate=="function"&&(t.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof y.componentDidUpdate!="function"||C===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||C===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=J),y.props=s,y.state=J,y.context=P,s=A):(typeof y.componentDidUpdate!="function"||C===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||C===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),s=!1)}return Fs(e,t,i,s,h,d)}function Fs(e,t,i,s,d,h){Mf(e,t);var y=(t.flags&128)!==0;if(!s&&!y)return d&&Ad(t,i,!1),gn(e,t,h);s=t.stateNode,qg.current=t;var C=y&&typeof i.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&y?(t.child=Nr(t,e.child,null,h),t.child=Nr(t,null,C,h)):gt(e,t,C,h),t.memoizedState=s.state,d&&Ad(t,i,!0),t.child}function If(e){var t=e.stateNode;t.pendingContext?Ld(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ld(e,t.context,!1),ws(e,t.containerInfo)}function Lf(e,t,i,s,d){return Mr(),hs(d),t.flags|=256,gt(e,t,i,s),t.child}var js={dehydrated:null,treeContext:null,retryLane:0};function Vs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Df(e,t,i){var s=t.pendingProps,d=$e.current,h=!1,y=(t.flags&128)!==0,C;if((C=y)||(C=e!==null&&e.memoizedState===null?!1:(d&2)!==0),C?(h=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(d|=1),De($e,d&1),e===null)return ps(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(y=s.children,e=s.fallback,h?(s=t.mode,h=t.child,y={mode:"hidden",children:y},!(s&1)&&h!==null?(h.childLanes=0,h.pendingProps=y):h=da(y,s,0,null),e=lr(e,s,i,null),h.return=t,e.return=t,h.sibling=e,t.child=h,t.child.memoizedState=Vs(i),t.memoizedState=js,e):$s(t,y));if(d=e.memoizedState,d!==null&&(C=d.dehydrated,C!==null))return Wg(e,t,y,s,C,d,i);if(h){h=s.fallback,y=t.mode,d=e.child,C=d.sibling;var P={mode:"hidden",children:s.children};return!(y&1)&&t.child!==d?(s=t.child,s.childLanes=0,s.pendingProps=P,t.deletions=null):(s=Bn(d,P),s.subtreeFlags=d.subtreeFlags&14680064),C!==null?h=Bn(C,h):(h=lr(h,y,i,null),h.flags|=2),h.return=t,s.return=t,s.sibling=h,t.child=s,s=h,h=t.child,y=e.child.memoizedState,y=y===null?Vs(i):{baseLanes:y.baseLanes|i,cachePool:null,transitions:y.transitions},h.memoizedState=y,h.childLanes=e.childLanes&~i,t.memoizedState=js,s}return h=e.child,e=h.sibling,s=Bn(h,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=i),s.return=t,s.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=s,t.memoizedState=null,s}function $s(e,t){return t=da({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ji(e,t,i,s){return s!==null&&hs(s),Nr(t,e.child,null,i),e=$s(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wg(e,t,i,s,d,h,y){if(i)return t.flags&256?(t.flags&=-257,s=Ds(Error(o(422))),Ji(e,t,y,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(h=s.fallback,d=t.mode,s=da({mode:"visible",children:s.children},d,0,null),h=lr(h,d,y,null),h.flags|=2,s.return=t,h.return=t,s.sibling=h,t.child=s,t.mode&1&&Nr(t,e.child,null,y),t.child.memoizedState=Vs(y),t.memoizedState=js,h);if(!(t.mode&1))return Ji(e,t,y,null);if(d.data==="$!"){if(s=d.nextSibling&&d.nextSibling.dataset,s)var C=s.dgst;return s=C,h=Error(o(419)),s=Ds(h,s,void 0),Ji(e,t,y,s)}if(C=(y&e.childLanes)!==0,xt||C){if(s=rt,s!==null){switch(y&-y){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(s.suspendedLanes|y)?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,hn(e,d),Wt(s,e,d,-1))}return ru(),s=Ds(Error(o(421))),Ji(e,t,y,s)}return d.data==="$?"?(t.flags|=128,t.child=e.child,t=iv.bind(null,e),d._reactRetry=t,null):(e=h.treeContext,Rt=Mn(d.nextSibling),Ot=t,je=!0,Bt=null,e!==null&&(Lt[Dt++]=fn,Lt[Dt++]=pn,Lt[Dt++]=Jn,fn=e.id,pn=e.overflow,Jn=t),t=$s(t,s.children),t.flags|=4096,t)}function Af(e,t,i){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),ys(e.return,t,i)}function Bs(e,t,i,s,d){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:d}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=s,h.tail=i,h.tailMode=d)}function zf(e,t,i){var s=t.pendingProps,d=s.revealOrder,h=s.tail;if(gt(e,t,s.children,i),s=$e.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Af(e,i,t);else if(e.tag===19)Af(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(De($e,s),!(t.mode&1))t.memoizedState=null;else switch(d){case"forwards":for(i=t.child,d=null;i!==null;)e=i.alternate,e!==null&&qi(e)===null&&(d=i),i=i.sibling;i=d,i===null?(d=t.child,t.child=null):(d=i.sibling,i.sibling=null),Bs(t,!1,d,i,h);break;case"backwards":for(i=null,d=t.child,t.child=null;d!==null;){if(e=d.alternate,e!==null&&qi(e)===null){t.child=d;break}e=d.sibling,d.sibling=i,i=d,d=e}Bs(t,!0,i,null,h);break;case"together":Bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gn(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),rr|=t.lanes,!(i&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,i=Bn(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=Bn(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function Qg(e,t,i){switch(t.tag){case 3:If(t),Mr();break;case 5:Gd(t);break;case 1:bt(t.type)&&Di(t);break;case 4:ws(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,d=t.memoizedProps.value;De($i,s._currentValue),s._currentValue=d;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(De($e,$e.current&1),t.flags|=128,null):i&t.child.childLanes?Df(e,t,i):(De($e,$e.current&1),e=gn(e,t,i),e!==null?e.sibling:null);De($e,$e.current&1);break;case 19:if(s=(i&t.childLanes)!==0,e.flags&128){if(s)return zf(e,t,i);t.flags|=128}if(d=t.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),De($e,$e.current),s)break;return null;case 22:case 23:return t.lanes=0,Tf(e,t,i)}return gn(e,t,i)}var Ff,Us,jf,Vf;Ff=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Us=function(){},jf=function(e,t,i,s){var d=e.memoizedProps;if(d!==s){e=t.stateNode,tr(en.current);var h=null;switch(i){case"input":d=mr(e,d),s=mr(e,s),h=[];break;case"select":d=K({},d,{value:void 0}),s=K({},s,{value:void 0}),h=[];break;case"textarea":d=wl(e,d),s=wl(e,s),h=[];break;default:typeof d.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Ni)}kl(i,s);var y;i=null;for(A in d)if(!s.hasOwnProperty(A)&&d.hasOwnProperty(A)&&d[A]!=null)if(A==="style"){var C=d[A];for(y in C)C.hasOwnProperty(y)&&(i||(i={}),i[y]="")}else A!=="dangerouslySetInnerHTML"&&A!=="children"&&A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&A!=="autoFocus"&&(a.hasOwnProperty(A)?h||(h=[]):(h=h||[]).push(A,null));for(A in s){var P=s[A];if(C=d!=null?d[A]:void 0,s.hasOwnProperty(A)&&P!==C&&(P!=null||C!=null))if(A==="style")if(C){for(y in C)!C.hasOwnProperty(y)||P&&P.hasOwnProperty(y)||(i||(i={}),i[y]="");for(y in P)P.hasOwnProperty(y)&&C[y]!==P[y]&&(i||(i={}),i[y]=P[y])}else i||(h||(h=[]),h.push(A,i)),i=P;else A==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,C=C?C.__html:void 0,P!=null&&C!==P&&(h=h||[]).push(A,P)):A==="children"?typeof P!="string"&&typeof P!="number"||(h=h||[]).push(A,""+P):A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&(a.hasOwnProperty(A)?(P!=null&&A==="onScroll"&&ze("scroll",e),h||C===P||(h=[])):(h=h||[]).push(A,P))}i&&(h=h||[]).push("style",i);var A=h;(t.updateQueue=A)&&(t.flags|=4)}},Vf=function(e,t,i,s){i!==s&&(t.flags|=4)};function Mo(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function ct(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,s=0;if(t)for(var d=e.child;d!==null;)i|=d.lanes|d.childLanes,s|=d.subtreeFlags&14680064,s|=d.flags&14680064,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)i|=d.lanes|d.childLanes,s|=d.subtreeFlags,s|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=s,e.childLanes=i,t}function Kg(e,t,i){var s=t.pendingProps;switch(ds(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(t),null;case 1:return bt(t.type)&&Li(),ct(t),null;case 3:return s=t.stateNode,Dr(),Fe(yt),Fe(st),Cs(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ji(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Bt!==null&&(eu(Bt),Bt=null))),Us(e,t),ct(t),null;case 5:Ss(t);var d=tr(Po.current);if(i=t.type,e!==null&&t.stateNode!=null)jf(e,t,i,s,d),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(o(166));return ct(t),null}if(e=tr(en.current),ji(t)){s=t.stateNode,i=t.type;var h=t.memoizedProps;switch(s[Zt]=t,s[wo]=h,e=(t.mode&1)!==0,i){case"dialog":ze("cancel",s),ze("close",s);break;case"iframe":case"object":case"embed":ze("load",s);break;case"video":case"audio":for(d=0;d<yo.length;d++)ze(yo[d],s);break;case"source":ze("error",s);break;case"img":case"image":case"link":ze("error",s),ze("load",s);break;case"details":ze("toggle",s);break;case"input":ui(s,h),ze("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!h.multiple},ze("invalid",s);break;case"textarea":Sc(s,h),ze("invalid",s)}kl(i,h),d=null;for(var y in h)if(h.hasOwnProperty(y)){var C=h[y];y==="children"?typeof C=="string"?s.textContent!==C&&(h.suppressHydrationWarning!==!0&&Mi(s.textContent,C,e),d=["children",C]):typeof C=="number"&&s.textContent!==""+C&&(h.suppressHydrationWarning!==!0&&Mi(s.textContent,C,e),d=["children",""+C]):a.hasOwnProperty(y)&&C!=null&&y==="onScroll"&&ze("scroll",s)}switch(i){case"input":Kn(s),wc(s,h,!0);break;case"textarea":Kn(s),Cc(s);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(s.onclick=Ni)}s=d,t.updateQueue=s,s!==null&&(t.flags|=4)}else{y=d.nodeType===9?d:d.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ec(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=y.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=y.createElement(i,{is:s.is}):(e=y.createElement(i),i==="select"&&(y=e,s.multiple?y.multiple=!0:s.size&&(y.size=s.size))):e=y.createElementNS(e,i),e[Zt]=t,e[wo]=s,Ff(e,t,!1,!1),t.stateNode=e;e:{switch(y=Cl(i,s),i){case"dialog":ze("cancel",e),ze("close",e),d=s;break;case"iframe":case"object":case"embed":ze("load",e),d=s;break;case"video":case"audio":for(d=0;d<yo.length;d++)ze(yo[d],e);d=s;break;case"source":ze("error",e),d=s;break;case"img":case"image":case"link":ze("error",e),ze("load",e),d=s;break;case"details":ze("toggle",e),d=s;break;case"input":ui(e,s),d=mr(e,s),ze("invalid",e);break;case"option":d=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},d=K({},s,{value:void 0}),ze("invalid",e);break;case"textarea":Sc(e,s),d=wl(e,s),ze("invalid",e);break;default:d=s}kl(i,d),C=d;for(h in C)if(C.hasOwnProperty(h)){var P=C[h];h==="style"?Rc(e,P):h==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Pc(e,P)):h==="children"?typeof P=="string"?(i!=="textarea"||P!=="")&&Jr(e,P):typeof P=="number"&&Jr(e,""+P):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?P!=null&&h==="onScroll"&&ze("scroll",e):P!=null&&T(e,h,P,y))}switch(i){case"input":Kn(e),wc(e,s,!1);break;case"textarea":Kn(e),Cc(e);break;case"option":s.value!=null&&e.setAttribute("value",""+ye(s.value));break;case"select":e.multiple=!!s.multiple,h=s.value,h!=null?gr(e,!!s.multiple,h,!1):s.defaultValue!=null&&gr(e,!!s.multiple,s.defaultValue,!0);break;default:typeof d.onClick=="function"&&(e.onclick=Ni)}switch(i){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ct(t),null;case 6:if(e&&t.stateNode!=null)Vf(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(o(166));if(i=tr(Po.current),tr(en.current),ji(t)){if(s=t.stateNode,i=t.memoizedProps,s[Zt]=t,(h=s.nodeValue!==i)&&(e=Ot,e!==null))switch(e.tag){case 3:Mi(s.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mi(s.nodeValue,i,(e.mode&1)!==0)}h&&(t.flags|=4)}else s=(i.nodeType===9?i:i.ownerDocument).createTextNode(s),s[Zt]=t,t.stateNode=s}return ct(t),null;case 13:if(Fe($e),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&Rt!==null&&t.mode&1&&!(t.flags&128))Bd(),Mr(),t.flags|=98560,h=!1;else if(h=ji(t),s!==null&&s.dehydrated!==null){if(e===null){if(!h)throw Error(o(318));if(h=t.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(o(317));h[Zt]=t}else Mr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ct(t),h=!1}else Bt!==null&&(eu(Bt),Bt=null),h=!0;if(!h)return t.flags&65536?t:null}return t.flags&128?(t.lanes=i,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||$e.current&1?et===0&&(et=3):ru())),t.updateQueue!==null&&(t.flags|=4),ct(t),null);case 4:return Dr(),Us(e,t),e===null&&bo(t.stateNode.containerInfo),ct(t),null;case 10:return vs(t.type._context),ct(t),null;case 17:return bt(t.type)&&Li(),ct(t),null;case 19:if(Fe($e),h=t.memoizedState,h===null)return ct(t),null;if(s=(t.flags&128)!==0,y=h.rendering,y===null)if(s)Mo(h,!1);else{if(et!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(y=qi(e),y!==null){for(t.flags|=128,Mo(h,!1),s=y.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=i,i=t.child;i!==null;)h=i,e=s,h.flags&=14680066,y=h.alternate,y===null?(h.childLanes=0,h.lanes=e,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=y.childLanes,h.lanes=y.lanes,h.child=y.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=y.memoizedProps,h.memoizedState=y.memoizedState,h.updateQueue=y.updateQueue,h.type=y.type,e=y.dependencies,h.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return De($e,$e.current&1|2),t.child}e=e.sibling}h.tail!==null&&Ke()>jr&&(t.flags|=128,s=!0,Mo(h,!1),t.lanes=4194304)}else{if(!s)if(e=qi(y),e!==null){if(t.flags|=128,s=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),Mo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!y.alternate&&!je)return ct(t),null}else 2*Ke()-h.renderingStartTime>jr&&i!==1073741824&&(t.flags|=128,s=!0,Mo(h,!1),t.lanes=4194304);h.isBackwards?(y.sibling=t.child,t.child=y):(i=h.last,i!==null?i.sibling=y:t.child=y,h.last=y)}return h.tail!==null?(t=h.tail,h.rendering=t,h.tail=t.sibling,h.renderingStartTime=Ke(),t.sibling=null,i=$e.current,De($e,s?i&1|2:i&1),t):(ct(t),null);case 22:case 23:return nu(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?_t&1073741824&&(ct(t),t.subtreeFlags&6&&(t.flags|=8192)):ct(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function Yg(e,t){switch(ds(t),t.tag){case 1:return bt(t.type)&&Li(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dr(),Fe(yt),Fe(st),Cs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ss(t),null;case 13:if(Fe($e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Fe($e),null;case 4:return Dr(),null;case 10:return vs(t.type._context),null;case 22:case 23:return nu(),null;case 24:return null;default:return null}}var ea=!1,dt=!1,Gg=typeof WeakSet=="function"?WeakSet:Set,G=null;function zr(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(s){He(e,t,s)}else i.current=null}function Hs(e,t,i){try{i()}catch(s){He(e,t,s)}}var $f=!1;function Xg(e,t){if(ns=xi,e=yd(),Kl(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var d=s.anchorOffset,h=s.focusNode;s=s.focusOffset;try{i.nodeType,h.nodeType}catch{i=null;break e}var y=0,C=-1,P=-1,A=0,U=0,H=e,V=null;t:for(;;){for(var Y;H!==i||d!==0&&H.nodeType!==3||(C=y+d),H!==h||s!==0&&H.nodeType!==3||(P=y+s),H.nodeType===3&&(y+=H.nodeValue.length),(Y=H.firstChild)!==null;)V=H,H=Y;for(;;){if(H===e)break t;if(V===i&&++A===d&&(C=y),V===h&&++U===s&&(P=y),(Y=H.nextSibling)!==null)break;H=V,V=H.parentNode}H=Y}i=C===-1||P===-1?null:{start:C,end:P}}else i=null}i=i||{start:0,end:0}}else i=null;for(rs={focusedElem:e,selectionRange:i},xi=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var J=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(J!==null){var Z=J.memoizedProps,Ye=J.memoizedState,L=t.stateNode,_=L.getSnapshotBeforeUpdate(t.elementType===t.type?Z:Ut(t.type,Z),Ye);L.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var D=t.stateNode.containerInfo;D.nodeType===1?D.textContent="":D.nodeType===9&&D.documentElement&&D.removeChild(D.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(q){He(t,t.return,q)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return J=$f,$f=!1,J}function No(e,t,i){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var d=s=s.next;do{if((d.tag&e)===e){var h=d.destroy;d.destroy=void 0,h!==void 0&&Hs(t,i,h)}d=d.next}while(d!==s)}}function ta(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var s=i.create;i.destroy=s()}i=i.next}while(i!==t)}}function qs(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function Bf(e){var t=e.alternate;t!==null&&(e.alternate=null,Bf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Zt],delete t[wo],delete t[ls],delete t[Ig],delete t[Lg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Uf(e){return e.tag===5||e.tag===3||e.tag===4}function Hf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ws(e,t,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Ni));else if(s!==4&&(e=e.child,e!==null))for(Ws(e,t,i),e=e.sibling;e!==null;)Ws(e,t,i),e=e.sibling}function Qs(e,t,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Qs(e,t,i),e=e.sibling;e!==null;)Qs(e,t,i),e=e.sibling}var it=null,Ht=!1;function zn(e,t,i){for(i=i.child;i!==null;)qf(e,t,i),i=i.sibling}function qf(e,t,i){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(hi,i)}catch{}switch(i.tag){case 5:dt||zr(i,t);case 6:var s=it,d=Ht;it=null,zn(e,t,i),it=s,Ht=d,it!==null&&(Ht?(e=it,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):it.removeChild(i.stateNode));break;case 18:it!==null&&(Ht?(e=it,i=i.stateNode,e.nodeType===8?as(e.parentNode,i):e.nodeType===1&&as(e,i),uo(e)):as(it,i.stateNode));break;case 4:s=it,d=Ht,it=i.stateNode.containerInfo,Ht=!0,zn(e,t,i),it=s,Ht=d;break;case 0:case 11:case 14:case 15:if(!dt&&(s=i.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){d=s=s.next;do{var h=d,y=h.destroy;h=h.tag,y!==void 0&&(h&2||h&4)&&Hs(i,t,y),d=d.next}while(d!==s)}zn(e,t,i);break;case 1:if(!dt&&(zr(i,t),s=i.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=i.memoizedProps,s.state=i.memoizedState,s.componentWillUnmount()}catch(C){He(i,t,C)}zn(e,t,i);break;case 21:zn(e,t,i);break;case 22:i.mode&1?(dt=(s=dt)||i.memoizedState!==null,zn(e,t,i),dt=s):zn(e,t,i);break;default:zn(e,t,i)}}function Wf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Gg),t.forEach(function(s){var d=av.bind(null,e,s);i.has(s)||(i.add(s),s.then(d,d))})}}function qt(e,t){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var d=i[s];try{var h=e,y=t,C=y;e:for(;C!==null;){switch(C.tag){case 5:it=C.stateNode,Ht=!1;break e;case 3:it=C.stateNode.containerInfo,Ht=!0;break e;case 4:it=C.stateNode.containerInfo,Ht=!0;break e}C=C.return}if(it===null)throw Error(o(160));qf(h,y,d),it=null,Ht=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(A){He(d,t,A)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qf(t,e),t=t.sibling}function Qf(e,t){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qt(t,e),nn(e),s&4){try{No(3,e,e.return),ta(3,e)}catch(Z){He(e,e.return,Z)}try{No(5,e,e.return)}catch(Z){He(e,e.return,Z)}}break;case 1:qt(t,e),nn(e),s&512&&i!==null&&zr(i,i.return);break;case 5:if(qt(t,e),nn(e),s&512&&i!==null&&zr(i,i.return),e.flags&32){var d=e.stateNode;try{Jr(d,"")}catch(Z){He(e,e.return,Z)}}if(s&4&&(d=e.stateNode,d!=null)){var h=e.memoizedProps,y=i!==null?i.memoizedProps:h,C=e.type,P=e.updateQueue;if(e.updateQueue=null,P!==null)try{C==="input"&&h.type==="radio"&&h.name!=null&&xc(d,h),Cl(C,y);var A=Cl(C,h);for(y=0;y<P.length;y+=2){var U=P[y],H=P[y+1];U==="style"?Rc(d,H):U==="dangerouslySetInnerHTML"?Pc(d,H):U==="children"?Jr(d,H):T(d,U,H,A)}switch(C){case"input":bl(d,h);break;case"textarea":kc(d,h);break;case"select":var V=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var Y=h.value;Y!=null?gr(d,!!h.multiple,Y,!1):V!==!!h.multiple&&(h.defaultValue!=null?gr(d,!!h.multiple,h.defaultValue,!0):gr(d,!!h.multiple,h.multiple?[]:"",!1))}d[wo]=h}catch(Z){He(e,e.return,Z)}}break;case 6:if(qt(t,e),nn(e),s&4){if(e.stateNode===null)throw Error(o(162));d=e.stateNode,h=e.memoizedProps;try{d.nodeValue=h}catch(Z){He(e,e.return,Z)}}break;case 3:if(qt(t,e),nn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{uo(t.containerInfo)}catch(Z){He(e,e.return,Z)}break;case 4:qt(t,e),nn(e);break;case 13:qt(t,e),nn(e),d=e.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(Gs=Ke())),s&4&&Wf(e);break;case 22:if(U=i!==null&&i.memoizedState!==null,e.mode&1?(dt=(A=dt)||U,qt(t,e),dt=A):qt(t,e),nn(e),s&8192){if(A=e.memoizedState!==null,(e.stateNode.isHidden=A)&&!U&&e.mode&1)for(G=e,U=e.child;U!==null;){for(H=G=U;G!==null;){switch(V=G,Y=V.child,V.tag){case 0:case 11:case 14:case 15:No(4,V,V.return);break;case 1:zr(V,V.return);var J=V.stateNode;if(typeof J.componentWillUnmount=="function"){s=V,i=V.return;try{t=s,J.props=t.memoizedProps,J.state=t.memoizedState,J.componentWillUnmount()}catch(Z){He(s,i,Z)}}break;case 5:zr(V,V.return);break;case 22:if(V.memoizedState!==null){Gf(H);continue}}Y!==null?(Y.return=V,G=Y):Gf(H)}U=U.sibling}e:for(U=null,H=e;;){if(H.tag===5){if(U===null){U=H;try{d=H.stateNode,A?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(C=H.stateNode,P=H.memoizedProps.style,y=P!=null&&P.hasOwnProperty("display")?P.display:null,C.style.display=Oc("display",y))}catch(Z){He(e,e.return,Z)}}}else if(H.tag===6){if(U===null)try{H.stateNode.nodeValue=A?"":H.memoizedProps}catch(Z){He(e,e.return,Z)}}else if((H.tag!==22&&H.tag!==23||H.memoizedState===null||H===e)&&H.child!==null){H.child.return=H,H=H.child;continue}if(H===e)break e;for(;H.sibling===null;){if(H.return===null||H.return===e)break e;U===H&&(U=null),H=H.return}U===H&&(U=null),H.sibling.return=H.return,H=H.sibling}}break;case 19:qt(t,e),nn(e),s&4&&Wf(e);break;case 21:break;default:qt(t,e),nn(e)}}function nn(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(Uf(i)){var s=i;break e}i=i.return}throw Error(o(160))}switch(s.tag){case 5:var d=s.stateNode;s.flags&32&&(Jr(d,""),s.flags&=-33);var h=Hf(e);Qs(e,h,d);break;case 3:case 4:var y=s.stateNode.containerInfo,C=Hf(e);Ws(e,C,y);break;default:throw Error(o(161))}}catch(P){He(e,e.return,P)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jg(e,t,i){G=e,Kf(e)}function Kf(e,t,i){for(var s=(e.mode&1)!==0;G!==null;){var d=G,h=d.child;if(d.tag===22&&s){var y=d.memoizedState!==null||ea;if(!y){var C=d.alternate,P=C!==null&&C.memoizedState!==null||dt;C=ea;var A=dt;if(ea=y,(dt=P)&&!A)for(G=d;G!==null;)y=G,P=y.child,y.tag===22&&y.memoizedState!==null?Xf(d):P!==null?(P.return=y,G=P):Xf(d);for(;h!==null;)G=h,Kf(h),h=h.sibling;G=d,ea=C,dt=A}Yf(e)}else d.subtreeFlags&8772&&h!==null?(h.return=d,G=h):Yf(e)}}function Yf(e){for(;G!==null;){var t=G;if(t.flags&8772){var i=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:dt||ta(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!dt)if(i===null)s.componentDidMount();else{var d=t.elementType===t.type?i.memoizedProps:Ut(t.type,i.memoizedProps);s.componentDidUpdate(d,i.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var h=t.updateQueue;h!==null&&Yd(t,h,s);break;case 3:var y=t.updateQueue;if(y!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}Yd(t,y,i)}break;case 5:var C=t.stateNode;if(i===null&&t.flags&4){i=C;var P=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&i.focus();break;case"img":P.src&&(i.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var A=t.alternate;if(A!==null){var U=A.memoizedState;if(U!==null){var H=U.dehydrated;H!==null&&uo(H)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}dt||t.flags&512&&qs(t)}catch(V){He(t,t.return,V)}}if(t===e){G=null;break}if(i=t.sibling,i!==null){i.return=t.return,G=i;break}G=t.return}}function Gf(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var i=t.sibling;if(i!==null){i.return=t.return,G=i;break}G=t.return}}function Xf(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{ta(4,t)}catch(P){He(t,i,P)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var d=t.return;try{s.componentDidMount()}catch(P){He(t,d,P)}}var h=t.return;try{qs(t)}catch(P){He(t,h,P)}break;case 5:var y=t.return;try{qs(t)}catch(P){He(t,y,P)}}}catch(P){He(t,t.return,P)}if(t===e){G=null;break}var C=t.sibling;if(C!==null){C.return=t.return,G=C;break}G=t.return}}var Zg=Math.ceil,na=F.ReactCurrentDispatcher,Ks=F.ReactCurrentOwner,Ft=F.ReactCurrentBatchConfig,Ee=0,rt=null,Ge=null,at=0,_t=0,Fr=Nn(0),et=0,Io=null,rr=0,ra=0,Ys=0,Lo=null,wt=null,Gs=0,jr=1/0,vn=null,oa=!1,Xs=null,Fn=null,ia=!1,jn=null,aa=0,Do=0,Js=null,la=-1,sa=0;function vt(){return Ee&6?Ke():la!==-1?la:la=Ke()}function Vn(e){return e.mode&1?Ee&2&&at!==0?at&-at:Ag.transition!==null?(sa===0&&(sa=Uc()),sa):(e=Ie,e!==0||(e=window.event,e=e===void 0?16:Jc(e.type)),e):1}function Wt(e,t,i,s){if(50<Do)throw Do=0,Js=null,Error(o(185));oo(e,i,s),(!(Ee&2)||e!==rt)&&(e===rt&&(!(Ee&2)&&(ra|=i),et===4&&$n(e,at)),St(e,s),i===1&&Ee===0&&!(t.mode&1)&&(jr=Ke()+500,Ai&&Ln()))}function St(e,t){var i=e.callbackNode;A0(e,t);var s=vi(e,e===rt?at:0);if(s===0)i!==null&&Vc(i),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(i!=null&&Vc(i),t===1)e.tag===0?Dg(Zf.bind(null,e)):zd(Zf.bind(null,e)),Mg(function(){!(Ee&6)&&Ln()}),i=null;else{switch(Hc(s)){case 1:i=Ml;break;case 4:i=$c;break;case 16:i=pi;break;case 536870912:i=Bc;break;default:i=pi}i=lp(i,Jf.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function Jf(e,t){if(la=-1,sa=0,Ee&6)throw Error(o(327));var i=e.callbackNode;if(Vr()&&e.callbackNode!==i)return null;var s=vi(e,e===rt?at:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=ua(e,s);else{t=s;var d=Ee;Ee|=2;var h=tp();(rt!==e||at!==t)&&(vn=null,jr=Ke()+500,ir(e,t));do try{nv();break}catch(C){ep(e,C)}while(!0);gs(),na.current=h,Ee=d,Ge!==null?t=0:(rt=null,at=0,t=et)}if(t!==0){if(t===2&&(d=Nl(e),d!==0&&(s=d,t=Zs(e,d))),t===1)throw i=Io,ir(e,0),$n(e,s),St(e,Ke()),i;if(t===6)$n(e,s);else{if(d=e.current.alternate,!(s&30)&&!ev(d)&&(t=ua(e,s),t===2&&(h=Nl(e),h!==0&&(s=h,t=Zs(e,h))),t===1))throw i=Io,ir(e,0),$n(e,s),St(e,Ke()),i;switch(e.finishedWork=d,e.finishedLanes=s,t){case 0:case 1:throw Error(o(345));case 2:ar(e,wt,vn);break;case 3:if($n(e,s),(s&130023424)===s&&(t=Gs+500-Ke(),10<t)){if(vi(e,0)!==0)break;if(d=e.suspendedLanes,(d&s)!==s){vt(),e.pingedLanes|=e.suspendedLanes&d;break}e.timeoutHandle=is(ar.bind(null,e,wt,vn),t);break}ar(e,wt,vn);break;case 4:if($n(e,s),(s&4194240)===s)break;for(t=e.eventTimes,d=-1;0<s;){var y=31-Vt(s);h=1<<y,y=t[y],y>d&&(d=y),s&=~h}if(s=d,s=Ke()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Zg(s/1960))-s,10<s){e.timeoutHandle=is(ar.bind(null,e,wt,vn),s);break}ar(e,wt,vn);break;case 5:ar(e,wt,vn);break;default:throw Error(o(329))}}}return St(e,Ke()),e.callbackNode===i?Jf.bind(null,e):null}function Zs(e,t){var i=Lo;return e.current.memoizedState.isDehydrated&&(ir(e,t).flags|=256),e=ua(e,t),e!==2&&(t=wt,wt=i,t!==null&&eu(t)),e}function eu(e){wt===null?wt=e:wt.push.apply(wt,e)}function ev(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var s=0;s<i.length;s++){var d=i[s],h=d.getSnapshot;d=d.value;try{if(!$t(h(),d))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $n(e,t){for(t&=~Ys,t&=~ra,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-Vt(t),s=1<<i;e[i]=-1,t&=~s}}function Zf(e){if(Ee&6)throw Error(o(327));Vr();var t=vi(e,0);if(!(t&1))return St(e,Ke()),null;var i=ua(e,t);if(e.tag!==0&&i===2){var s=Nl(e);s!==0&&(t=s,i=Zs(e,s))}if(i===1)throw i=Io,ir(e,0),$n(e,t),St(e,Ke()),i;if(i===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ar(e,wt,vn),St(e,Ke()),null}function tu(e,t){var i=Ee;Ee|=1;try{return e(t)}finally{Ee=i,Ee===0&&(jr=Ke()+500,Ai&&Ln())}}function or(e){jn!==null&&jn.tag===0&&!(Ee&6)&&Vr();var t=Ee;Ee|=1;var i=Ft.transition,s=Ie;try{if(Ft.transition=null,Ie=1,e)return e()}finally{Ie=s,Ft.transition=i,Ee=t,!(Ee&6)&&Ln()}}function nu(){_t=Fr.current,Fe(Fr)}function ir(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Tg(i)),Ge!==null)for(i=Ge.return;i!==null;){var s=i;switch(ds(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Li();break;case 3:Dr(),Fe(yt),Fe(st),Cs();break;case 5:Ss(s);break;case 4:Dr();break;case 13:Fe($e);break;case 19:Fe($e);break;case 10:vs(s.type._context);break;case 22:case 23:nu()}i=i.return}if(rt=e,Ge=e=Bn(e.current,null),at=_t=t,et=0,Io=null,Ys=ra=rr=0,wt=Lo=null,er!==null){for(t=0;t<er.length;t++)if(i=er[t],s=i.interleaved,s!==null){i.interleaved=null;var d=s.next,h=i.pending;if(h!==null){var y=h.next;h.next=d,s.next=y}i.pending=s}er=null}return e}function ep(e,t){do{var i=Ge;try{if(gs(),Wi.current=Gi,Qi){for(var s=Be.memoizedState;s!==null;){var d=s.queue;d!==null&&(d.pending=null),s=s.next}Qi=!1}if(nr=0,nt=Ze=Be=null,Oo=!1,Ro=0,Ks.current=null,i===null||i.return===null){et=1,Io=t,Ge=null;break}e:{var h=e,y=i.return,C=i,P=t;if(t=at,C.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var A=P,U=C,H=U.tag;if(!(U.mode&1)&&(H===0||H===11||H===15)){var V=U.alternate;V?(U.updateQueue=V.updateQueue,U.memoizedState=V.memoizedState,U.lanes=V.lanes):(U.updateQueue=null,U.memoizedState=null)}var Y=Ef(y);if(Y!==null){Y.flags&=-257,Pf(Y,y,C,h,t),Y.mode&1&&Cf(h,A,t),t=Y,P=A;var J=t.updateQueue;if(J===null){var Z=new Set;Z.add(P),t.updateQueue=Z}else J.add(P);break e}else{if(!(t&1)){Cf(h,A,t),ru();break e}P=Error(o(426))}}else if(je&&C.mode&1){var Ye=Ef(y);if(Ye!==null){!(Ye.flags&65536)&&(Ye.flags|=256),Pf(Ye,y,C,h,t),hs(Ar(P,C));break e}}h=P=Ar(P,C),et!==4&&(et=2),Lo===null?Lo=[h]:Lo.push(h),h=y;do{switch(h.tag){case 3:h.flags|=65536,t&=-t,h.lanes|=t;var L=Sf(h,P,t);Kd(h,L);break e;case 1:C=P;var _=h.type,D=h.stateNode;if(!(h.flags&128)&&(typeof _.getDerivedStateFromError=="function"||D!==null&&typeof D.componentDidCatch=="function"&&(Fn===null||!Fn.has(D)))){h.flags|=65536,t&=-t,h.lanes|=t;var q=kf(h,C,t);Kd(h,q);break e}}h=h.return}while(h!==null)}rp(i)}catch(ne){t=ne,Ge===i&&i!==null&&(Ge=i=i.return);continue}break}while(!0)}function tp(){var e=na.current;return na.current=Gi,e===null?Gi:e}function ru(){(et===0||et===3||et===2)&&(et=4),rt===null||!(rr&268435455)&&!(ra&268435455)||$n(rt,at)}function ua(e,t){var i=Ee;Ee|=2;var s=tp();(rt!==e||at!==t)&&(vn=null,ir(e,t));do try{tv();break}catch(d){ep(e,d)}while(!0);if(gs(),Ee=i,na.current=s,Ge!==null)throw Error(o(261));return rt=null,at=0,et}function tv(){for(;Ge!==null;)np(Ge)}function nv(){for(;Ge!==null&&!O0();)np(Ge)}function np(e){var t=ap(e.alternate,e,_t);e.memoizedProps=e.pendingProps,t===null?rp(e):Ge=t,Ks.current=null}function rp(e){var t=e;do{var i=t.alternate;if(e=t.return,t.flags&32768){if(i=Yg(i,t),i!==null){i.flags&=32767,Ge=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{et=6,Ge=null;return}}else if(i=Kg(i,t,_t),i!==null){Ge=i;return}if(t=t.sibling,t!==null){Ge=t;return}Ge=t=e}while(t!==null);et===0&&(et=5)}function ar(e,t,i){var s=Ie,d=Ft.transition;try{Ft.transition=null,Ie=1,rv(e,t,i,s)}finally{Ft.transition=d,Ie=s}return null}function rv(e,t,i,s){do Vr();while(jn!==null);if(Ee&6)throw Error(o(327));i=e.finishedWork;var d=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var h=i.lanes|i.childLanes;if(z0(e,h),e===rt&&(Ge=rt=null,at=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||ia||(ia=!0,lp(pi,function(){return Vr(),null})),h=(i.flags&15990)!==0,i.subtreeFlags&15990||h){h=Ft.transition,Ft.transition=null;var y=Ie;Ie=1;var C=Ee;Ee|=4,Ks.current=null,Xg(e,i),Qf(i,e),kg(rs),xi=!!ns,rs=ns=null,e.current=i,Jg(i),R0(),Ee=C,Ie=y,Ft.transition=h}else e.current=i;if(ia&&(ia=!1,jn=e,aa=d),h=e.pendingLanes,h===0&&(Fn=null),M0(i.stateNode),St(e,Ke()),t!==null)for(s=e.onRecoverableError,i=0;i<t.length;i++)d=t[i],s(d.value,{componentStack:d.stack,digest:d.digest});if(oa)throw oa=!1,e=Xs,Xs=null,e;return aa&1&&e.tag!==0&&Vr(),h=e.pendingLanes,h&1?e===Js?Do++:(Do=0,Js=e):Do=0,Ln(),null}function Vr(){if(jn!==null){var e=Hc(aa),t=Ft.transition,i=Ie;try{if(Ft.transition=null,Ie=16>e?16:e,jn===null)var s=!1;else{if(e=jn,jn=null,aa=0,Ee&6)throw Error(o(331));var d=Ee;for(Ee|=4,G=e.current;G!==null;){var h=G,y=h.child;if(G.flags&16){var C=h.deletions;if(C!==null){for(var P=0;P<C.length;P++){var A=C[P];for(G=A;G!==null;){var U=G;switch(U.tag){case 0:case 11:case 15:No(8,U,h)}var H=U.child;if(H!==null)H.return=U,G=H;else for(;G!==null;){U=G;var V=U.sibling,Y=U.return;if(Bf(U),U===A){G=null;break}if(V!==null){V.return=Y,G=V;break}G=Y}}}var J=h.alternate;if(J!==null){var Z=J.child;if(Z!==null){J.child=null;do{var Ye=Z.sibling;Z.sibling=null,Z=Ye}while(Z!==null)}}G=h}}if(h.subtreeFlags&2064&&y!==null)y.return=h,G=y;else e:for(;G!==null;){if(h=G,h.flags&2048)switch(h.tag){case 0:case 11:case 15:No(9,h,h.return)}var L=h.sibling;if(L!==null){L.return=h.return,G=L;break e}G=h.return}}var _=e.current;for(G=_;G!==null;){y=G;var D=y.child;if(y.subtreeFlags&2064&&D!==null)D.return=y,G=D;else e:for(y=_;G!==null;){if(C=G,C.flags&2048)try{switch(C.tag){case 0:case 11:case 15:ta(9,C)}}catch(ne){He(C,C.return,ne)}if(C===y){G=null;break e}var q=C.sibling;if(q!==null){q.return=C.return,G=q;break e}G=C.return}}if(Ee=d,Ln(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(hi,e)}catch{}s=!0}return s}finally{Ie=i,Ft.transition=t}}return!1}function op(e,t,i){t=Ar(i,t),t=Sf(e,t,1),e=An(e,t,1),t=vt(),e!==null&&(oo(e,1,t),St(e,t))}function He(e,t,i){if(e.tag===3)op(e,e,i);else for(;t!==null;){if(t.tag===3){op(t,e,i);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Fn===null||!Fn.has(s))){e=Ar(i,e),e=kf(t,e,1),t=An(t,e,1),e=vt(),t!==null&&(oo(t,1,e),St(t,e));break}}t=t.return}}function ov(e,t,i){var s=e.pingCache;s!==null&&s.delete(t),t=vt(),e.pingedLanes|=e.suspendedLanes&i,rt===e&&(at&i)===i&&(et===4||et===3&&(at&130023424)===at&&500>Ke()-Gs?ir(e,0):Ys|=i),St(e,t)}function ip(e,t){t===0&&(e.mode&1?(t=gi,gi<<=1,!(gi&130023424)&&(gi=4194304)):t=1);var i=vt();e=hn(e,t),e!==null&&(oo(e,t,i),St(e,i))}function iv(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),ip(e,i)}function av(e,t){var i=0;switch(e.tag){case 13:var s=e.stateNode,d=e.memoizedState;d!==null&&(i=d.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(o(314))}s!==null&&s.delete(t),ip(e,i)}var ap;ap=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||yt.current)xt=!0;else{if(!(e.lanes&i)&&!(t.flags&128))return xt=!1,Qg(e,t,i);xt=!!(e.flags&131072)}else xt=!1,je&&t.flags&1048576&&Fd(t,Fi,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Zi(e,t),e=t.pendingProps;var d=Rr(t,st.current);Lr(t,i),d=Os(null,t,s,e,d,i);var h=Rs();return t.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,bt(s)?(h=!0,Di(t)):h=!1,t.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,xs(t),d.updater=Xi,t.stateNode=d,d._reactInternals=t,Ls(t,s,e,i),t=Fs(null,t,s,!0,h,i)):(t.tag=0,je&&h&&cs(t),gt(null,t,d,i),t=t.child),t;case 16:s=t.elementType;e:{switch(Zi(e,t),e=t.pendingProps,d=s._init,s=d(s._payload),t.type=s,d=t.tag=sv(s),e=Ut(s,e),d){case 0:t=zs(null,t,s,e,i);break e;case 1:t=Nf(null,t,s,e,i);break e;case 11:t=Of(null,t,s,e,i);break e;case 14:t=Rf(null,t,s,Ut(s.type,e),i);break e}throw Error(o(306,s,""))}return t;case 0:return s=t.type,d=t.pendingProps,d=t.elementType===s?d:Ut(s,d),zs(e,t,s,d,i);case 1:return s=t.type,d=t.pendingProps,d=t.elementType===s?d:Ut(s,d),Nf(e,t,s,d,i);case 3:e:{if(If(t),e===null)throw Error(o(387));s=t.pendingProps,h=t.memoizedState,d=h.element,Qd(e,t),Hi(t,s,null,i);var y=t.memoizedState;if(s=y.element,h.isDehydrated)if(h={element:s,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},t.updateQueue.baseState=h,t.memoizedState=h,t.flags&256){d=Ar(Error(o(423)),t),t=Lf(e,t,s,i,d);break e}else if(s!==d){d=Ar(Error(o(424)),t),t=Lf(e,t,s,i,d);break e}else for(Rt=Mn(t.stateNode.containerInfo.firstChild),Ot=t,je=!0,Bt=null,i=qd(t,null,s,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Mr(),s===d){t=gn(e,t,i);break e}gt(e,t,s,i)}t=t.child}return t;case 5:return Gd(t),e===null&&ps(t),s=t.type,d=t.pendingProps,h=e!==null?e.memoizedProps:null,y=d.children,os(s,d)?y=null:h!==null&&os(s,h)&&(t.flags|=32),Mf(e,t),gt(e,t,y,i),t.child;case 6:return e===null&&ps(t),null;case 13:return Df(e,t,i);case 4:return ws(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Nr(t,null,s,i):gt(e,t,s,i),t.child;case 11:return s=t.type,d=t.pendingProps,d=t.elementType===s?d:Ut(s,d),Of(e,t,s,d,i);case 7:return gt(e,t,t.pendingProps,i),t.child;case 8:return gt(e,t,t.pendingProps.children,i),t.child;case 12:return gt(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(s=t.type._context,d=t.pendingProps,h=t.memoizedProps,y=d.value,De($i,s._currentValue),s._currentValue=y,h!==null)if($t(h.value,y)){if(h.children===d.children&&!yt.current){t=gn(e,t,i);break e}}else for(h=t.child,h!==null&&(h.return=t);h!==null;){var C=h.dependencies;if(C!==null){y=h.child;for(var P=C.firstContext;P!==null;){if(P.context===s){if(h.tag===1){P=mn(-1,i&-i),P.tag=2;var A=h.updateQueue;if(A!==null){A=A.shared;var U=A.pending;U===null?P.next=P:(P.next=U.next,U.next=P),A.pending=P}}h.lanes|=i,P=h.alternate,P!==null&&(P.lanes|=i),ys(h.return,i,t),C.lanes|=i;break}P=P.next}}else if(h.tag===10)y=h.type===t.type?null:h.child;else if(h.tag===18){if(y=h.return,y===null)throw Error(o(341));y.lanes|=i,C=y.alternate,C!==null&&(C.lanes|=i),ys(y,i,t),y=h.sibling}else y=h.child;if(y!==null)y.return=h;else for(y=h;y!==null;){if(y===t){y=null;break}if(h=y.sibling,h!==null){h.return=y.return,y=h;break}y=y.return}h=y}gt(e,t,d.children,i),t=t.child}return t;case 9:return d=t.type,s=t.pendingProps.children,Lr(t,i),d=At(d),s=s(d),t.flags|=1,gt(e,t,s,i),t.child;case 14:return s=t.type,d=Ut(s,t.pendingProps),d=Ut(s.type,d),Rf(e,t,s,d,i);case 15:return _f(e,t,t.type,t.pendingProps,i);case 17:return s=t.type,d=t.pendingProps,d=t.elementType===s?d:Ut(s,d),Zi(e,t),t.tag=1,bt(s)?(e=!0,Di(t)):e=!1,Lr(t,i),xf(t,s,d),Ls(t,s,d,i),Fs(null,t,s,!0,e,i);case 19:return zf(e,t,i);case 22:return Tf(e,t,i)}throw Error(o(156,t.tag))};function lp(e,t){return jc(e,t)}function lv(e,t,i,s){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,i,s){return new lv(e,t,i,s)}function ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sv(e){if(typeof e=="function")return ou(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Te)return 11;if(e===ge)return 14}return 2}function Bn(e,t){var i=e.alternate;return i===null?(i=jt(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function ca(e,t,i,s,d,h){var y=2;if(s=e,typeof e=="function")ou(e)&&(y=1);else if(typeof e=="string")y=5;else e:switch(e){case B:return lr(i.children,d,h,t);case Q:y=8,d|=8;break;case X:return e=jt(12,i,t,d|2),e.elementType=X,e.lanes=h,e;case Le:return e=jt(13,i,t,d),e.elementType=Le,e.lanes=h,e;case Me:return e=jt(19,i,t,d),e.elementType=Me,e.lanes=h,e;case ve:return da(i,d,h,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case me:y=10;break e;case xe:y=9;break e;case Te:y=11;break e;case ge:y=14;break e;case we:y=16,s=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=jt(y,i,t,d),t.elementType=e,t.type=s,t.lanes=h,t}function lr(e,t,i,s){return e=jt(7,e,s,t),e.lanes=i,e}function da(e,t,i,s){return e=jt(22,e,s,t),e.elementType=ve,e.lanes=i,e.stateNode={isHidden:!1},e}function iu(e,t,i){return e=jt(6,e,null,t),e.lanes=i,e}function au(e,t,i){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function uv(e,t,i,s,d){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Il(0),this.expirationTimes=Il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Il(0),this.identifierPrefix=s,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function lu(e,t,i,s,d,h,y,C,P){return e=new uv(e,t,i,C,P),t===1?(t=1,h===!0&&(t|=8)):t=0,h=jt(3,null,null,t),e.current=h,h.stateNode=e,h.memoizedState={element:s,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},xs(h),e}function cv(e,t,i){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$,key:s==null?null:""+s,children:e,containerInfo:t,implementation:i}}function sp(e){if(!e)return In;e=e._reactInternals;e:{if(Yn(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(bt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var i=e.type;if(bt(i))return Dd(e,i,t)}return t}function up(e,t,i,s,d,h,y,C,P){return e=lu(i,s,!0,e,d,h,y,C,P),e.context=sp(null),i=e.current,s=vt(),d=Vn(i),h=mn(s,d),h.callback=t??null,An(i,h,d),e.current.lanes=d,oo(e,d,s),St(e,s),e}function fa(e,t,i,s){var d=t.current,h=vt(),y=Vn(d);return i=sp(i),t.context===null?t.context=i:t.pendingContext=i,t=mn(h,y),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=An(d,t,y),e!==null&&(Wt(e,d,y,h),Ui(e,d,y)),y}function pa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function su(e,t){cp(e,t),(e=e.alternate)&&cp(e,t)}function dv(){return null}var dp=typeof reportError=="function"?reportError:function(e){console.error(e)};function uu(e){this._internalRoot=e}ha.prototype.render=uu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));fa(e,t,null,null)},ha.prototype.unmount=uu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;or(function(){fa(null,e,null,null)}),t[cn]=null}};function ha(e){this._internalRoot=e}ha.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qc();e={blockedOn:null,target:e,priority:t};for(var i=0;i<Rn.length&&t!==0&&t<Rn[i].priority;i++);Rn.splice(i,0,e),i===0&&Gc(e)}};function cu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fp(){}function fv(e,t,i,s,d){if(d){if(typeof s=="function"){var h=s;s=function(){var A=pa(y);h.call(A)}}var y=up(t,s,e,0,null,!1,!1,"",fp);return e._reactRootContainer=y,e[cn]=y.current,bo(e.nodeType===8?e.parentNode:e),or(),y}for(;d=e.lastChild;)e.removeChild(d);if(typeof s=="function"){var C=s;s=function(){var A=pa(P);C.call(A)}}var P=lu(e,0,!1,null,null,!1,!1,"",fp);return e._reactRootContainer=P,e[cn]=P.current,bo(e.nodeType===8?e.parentNode:e),or(function(){fa(t,P,i,s)}),P}function ga(e,t,i,s,d){var h=i._reactRootContainer;if(h){var y=h;if(typeof d=="function"){var C=d;d=function(){var P=pa(y);C.call(P)}}fa(t,y,e,d)}else y=fv(i,t,e,d,s);return pa(y)}qc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=ro(t.pendingLanes);i!==0&&(Ll(t,i|1),St(t,Ke()),!(Ee&6)&&(jr=Ke()+500,Ln()))}break;case 13:or(function(){var s=hn(e,1);if(s!==null){var d=vt();Wt(s,e,1,d)}}),su(e,1)}},Dl=function(e){if(e.tag===13){var t=hn(e,134217728);if(t!==null){var i=vt();Wt(t,e,134217728,i)}su(e,134217728)}},Wc=function(e){if(e.tag===13){var t=Vn(e),i=hn(e,t);if(i!==null){var s=vt();Wt(i,e,t,s)}su(e,t)}},Qc=function(){return Ie},Kc=function(e,t){var i=Ie;try{return Ie=e,t()}finally{Ie=i}},Ol=function(e,t,i){switch(t){case"input":if(bl(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var s=i[t];if(s!==e&&s.form===e.form){var d=Ii(s);if(!d)throw Error(o(90));Gr(s),bl(s,d)}}}break;case"textarea":kc(e,i);break;case"select":t=i.value,t!=null&&gr(e,!!i.multiple,t,!1)}},Nc=tu,Ic=or;var pv={usingClientEntryPoint:!1,Events:[So,Pr,Ii,Tc,Mc,tu]},Ao={findFiberByHostInstance:Gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hv={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:F.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zc(e),e===null?null:e.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance||dv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!va.isDisabled&&va.supportsFiber)try{hi=va.inject(hv),Jt=va}catch{}}return kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pv,kt.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cu(t))throw Error(o(200));return cv(e,t,null,i)},kt.createRoot=function(e,t){if(!cu(e))throw Error(o(299));var i=!1,s="",d=dp;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=lu(e,1,!1,null,null,i,!1,s,d),e[cn]=t.current,bo(e.nodeType===8?e.parentNode:e),new uu(t)},kt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=zc(t),e=e===null?null:e.stateNode,e},kt.flushSync=function(e){return or(e)},kt.hydrate=function(e,t,i){if(!ma(t))throw Error(o(200));return ga(null,e,t,!0,i)},kt.hydrateRoot=function(e,t,i){if(!cu(e))throw Error(o(405));var s=i!=null&&i.hydratedSources||null,d=!1,h="",y=dp;if(i!=null&&(i.unstable_strictMode===!0&&(d=!0),i.identifierPrefix!==void 0&&(h=i.identifierPrefix),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),t=up(t,null,e,1,i??null,d,!1,h,y),e[cn]=t.current,bo(e),s)for(e=0;e<s.length;e++)i=s[e],d=i._getVersion,d=d(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,d]:t.mutableSourceEagerHydrationData.push(i,d);return new ha(t)},kt.render=function(e,t,i){if(!ma(t))throw Error(o(200));return ga(null,e,t,!1,i)},kt.unmountComponentAtNode=function(e){if(!ma(e))throw Error(o(40));return e._reactRootContainer?(or(function(){ga(null,null,e,!1,function(){e._reactRootContainer=null,e[cn]=null})}),!0):!1},kt.unstable_batchedUpdates=tu,kt.unstable_renderSubtreeIntoContainer=function(e,t,i,s){if(!ma(i))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return ga(e,t,i,!1,s)},kt.version="18.3.1-next-f1338f8080-20240426",kt}var wp;function Th(){if(wp)return pu.exports;wp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),pu.exports=Ev(),pu.exports}var Sp;function Pv(){if(Sp)return ya;Sp=1;var n=Th();return ya.createRoot=n.createRoot,ya.hydrateRoot=n.hydrateRoot,ya}var Ov=Pv(),jo={},kp;function Rv(){if(kp)return jo;kp=1,Object.defineProperty(jo,"__esModule",{value:!0}),jo.parse=f,jo.serialize=p;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,l=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,u=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function f(w,k){const b=new u,x=w.length;if(x<2)return b;const S=(k==null?void 0:k.decode)||m;let E=0;do{const R=w.indexOf("=",E);if(R===-1)break;const T=w.indexOf(";",E),F=T===-1?x:T;if(R>F){E=w.lastIndexOf(";",R-1)+1;continue}const N=g(w,E,R),$=c(w,R,N),B=w.slice(N,$);if(b[B]===void 0){let Q=g(w,R+1,F),X=c(w,F,Q);const me=S(w.slice(Q,X));b[B]=me}E=F+1}while(E<x);return b}function g(w,k,b){do{const x=w.charCodeAt(k);if(x!==32&&x!==9)return k}while(++k<b);return b}function c(w,k,b){for(;k>b;){const x=w.charCodeAt(--k);if(x!==32&&x!==9)return k+1}return b}function p(w,k,b){const x=(b==null?void 0:b.encode)||encodeURIComponent;if(!n.test(w))throw new TypeError(`argument name is invalid: ${w}`);const S=x(k);if(!r.test(S))throw new TypeError(`argument val is invalid: ${k}`);let E=w+"="+S;if(!b)return E;if(b.maxAge!==void 0){if(!Number.isInteger(b.maxAge))throw new TypeError(`option maxAge is invalid: ${b.maxAge}`);E+="; Max-Age="+b.maxAge}if(b.domain){if(!o.test(b.domain))throw new TypeError(`option domain is invalid: ${b.domain}`);E+="; Domain="+b.domain}if(b.path){if(!l.test(b.path))throw new TypeError(`option path is invalid: ${b.path}`);E+="; Path="+b.path}if(b.expires){if(!v(b.expires)||!Number.isFinite(b.expires.valueOf()))throw new TypeError(`option expires is invalid: ${b.expires}`);E+="; Expires="+b.expires.toUTCString()}if(b.httpOnly&&(E+="; HttpOnly"),b.secure&&(E+="; Secure"),b.partitioned&&(E+="; Partitioned"),b.priority)switch(typeof b.priority=="string"?b.priority.toLowerCase():void 0){case"low":E+="; Priority=Low";break;case"medium":E+="; Priority=Medium";break;case"high":E+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${b.priority}`)}if(b.sameSite)switch(typeof b.sameSite=="string"?b.sameSite.toLowerCase():b.sameSite){case!0:case"strict":E+="; SameSite=Strict";break;case"lax":E+="; SameSite=Lax";break;case"none":E+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${b.sameSite}`)}return E}function m(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function v(w){return a.call(w)==="[object Date]"}return jo}Rv();/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Cp="popstate";function _v(n={}){function r(a,u){let{pathname:f="/",search:g="",hash:c=""}=pr(a.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Iu("",{pathname:f,search:g,hash:c},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function o(a,u){let f=a.document.querySelector("base"),g="";if(f&&f.getAttribute("href")){let c=a.location.href,p=c.indexOf("#");g=p===-1?c:c.slice(0,p)}return g+"#"+(typeof u=="string"?u:Qo(u))}function l(a,u){Gt(a.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return Mv(r,o,l,n)}function Ue(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}function Gt(n,r){if(!n){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Tv(){return Math.random().toString(36).substring(2,10)}function Ep(n,r){return{usr:n.state,key:n.key,idx:r}}function Iu(n,r,o=null,l){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof r=="string"?pr(r):r,state:o,key:r&&r.key||l||Tv()}}function Qo({pathname:n="/",search:r="",hash:o=""}){return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function pr(n){let r={};if(n){let o=n.indexOf("#");o>=0&&(r.hash=n.substring(o),n=n.substring(0,o));let l=n.indexOf("?");l>=0&&(r.search=n.substring(l),n=n.substring(0,l)),n&&(r.pathname=n)}return r}function Mv(n,r,o,l={}){let{window:a=document.defaultView,v5Compat:u=!1}=l,f=a.history,g="POP",c=null,p=m();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function m(){return(f.state||{idx:null}).idx}function v(){g="POP";let S=m(),E=S==null?null:S-p;p=S,c&&c({action:g,location:x.location,delta:E})}function w(S,E){g="PUSH";let R=Iu(x.location,S,E);o&&o(R,S),p=m()+1;let T=Ep(R,p),F=x.createHref(R);try{f.pushState(T,"",F)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;a.location.assign(F)}u&&c&&c({action:g,location:x.location,delta:1})}function k(S,E){g="REPLACE";let R=Iu(x.location,S,E);o&&o(R,S),p=m();let T=Ep(R,p),F=x.createHref(R);f.replaceState(T,"",F),u&&c&&c({action:g,location:x.location,delta:0})}function b(S){let E=a.location.origin!=="null"?a.location.origin:a.location.href,R=typeof S=="string"?S:Qo(S);return R=R.replace(/ $/,"%20"),Ue(E,`No window.location.(origin|href) available to create URL for href: ${R}`),new URL(R,E)}let x={get action(){return g},get location(){return n(a,f)},listen(S){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(Cp,v),c=S,()=>{a.removeEventListener(Cp,v),c=null}},createHref(S){return r(a,S)},createURL:b,encodeLocation(S){let E=b(S);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:w,replace:k,go(S){return f.go(S)}};return x}function Mh(n,r,o="/"){return Nv(n,r,o,!1)}function Nv(n,r,o,l){let a=typeof r=="string"?pr(r):r,u=Wn(a.pathname||"/",o);if(u==null)return null;let f=Nh(n);Iv(f);let g=null;for(let c=0;g==null&&c<f.length;++c){let p=Hv(u);g=Bv(f[c],p,l)}return g}function Nh(n,r=[],o=[],l=""){let a=(u,f,g)=>{let c={relativePath:g===void 0?u.path||"":g,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};c.relativePath.startsWith("/")&&(Ue(c.relativePath.startsWith(l),`Absolute route path "${c.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(l.length));let p=wn([l,c.relativePath]),m=o.concat(c);u.children&&u.children.length>0&&(Ue(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Nh(u.children,r,m,p)),!(u.path==null&&!u.index)&&r.push({path:p,score:Vv(p,u.index),routesMeta:m})};return n.forEach((u,f)=>{var g;if(u.path===""||!((g=u.path)!=null&&g.includes("?")))a(u,f);else for(let c of Ih(u.path))a(u,f,c)}),r}function Ih(n){let r=n.split("/");if(r.length===0)return[];let[o,...l]=r,a=o.endsWith("?"),u=o.replace(/\?$/,"");if(l.length===0)return a?[u,""]:[u];let f=Ih(l.join("/")),g=[];return g.push(...f.map(c=>c===""?u:[u,c].join("/"))),a&&g.push(...f),g.map(c=>n.startsWith("/")&&c===""?"/":c)}function Iv(n){n.sort((r,o)=>r.score!==o.score?o.score-r.score:$v(r.routesMeta.map(l=>l.childrenIndex),o.routesMeta.map(l=>l.childrenIndex)))}var Lv=/^:[\w-]+$/,Dv=3,Av=2,zv=1,Fv=10,jv=-2,Pp=n=>n==="*";function Vv(n,r){let o=n.split("/"),l=o.length;return o.some(Pp)&&(l+=jv),r&&(l+=Av),o.filter(a=>!Pp(a)).reduce((a,u)=>a+(Lv.test(u)?Dv:u===""?zv:Fv),l)}function $v(n,r){return n.length===r.length&&n.slice(0,-1).every((l,a)=>l===r[a])?n[n.length-1]-r[r.length-1]:0}function Bv(n,r,o=!1){let{routesMeta:l}=n,a={},u="/",f=[];for(let g=0;g<l.length;++g){let c=l[g],p=g===l.length-1,m=u==="/"?r:r.slice(u.length)||"/",v=$a({path:c.relativePath,caseSensitive:c.caseSensitive,end:p},m),w=c.route;if(!v&&p&&o&&!l[l.length-1].route.index&&(v=$a({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!v)return null;Object.assign(a,v.params),f.push({params:a,pathname:wn([u,v.pathname]),pathnameBase:Kv(wn([u,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(u=wn([u,v.pathnameBase]))}return f}function $a(n,r){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[o,l]=Uv(n.path,n.caseSensitive,n.end),a=r.match(o);if(!a)return null;let u=a[0],f=u.replace(/(.)\/+$/,"$1"),g=a.slice(1);return{params:l.reduce((p,{paramName:m,isOptional:v},w)=>{if(m==="*"){let b=g[w]||"";f=u.slice(0,u.length-b.length).replace(/(.)\/+$/,"$1")}const k=g[w];return v&&!k?p[m]=void 0:p[m]=(k||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:f,pattern:n}}function Uv(n,r=!1,o=!0){Gt(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let l=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,g,c)=>(l.push({paramName:g,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(l.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,r?void 0:"i"),l]}function Hv(n){try{return n.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Gt(!1,`The URL path "${n}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),n}}function Wn(n,r){if(r==="/")return n;if(!n.toLowerCase().startsWith(r.toLowerCase()))return null;let o=r.endsWith("/")?r.length-1:r.length,l=n.charAt(o);return l&&l!=="/"?null:n.slice(o)||"/"}function qv(n,r="/"){let{pathname:o,search:l="",hash:a=""}=typeof n=="string"?pr(n):n;return{pathname:o?o.startsWith("/")?o:Wv(o,r):r,search:Yv(l),hash:Gv(a)}}function Wv(n,r){let o=r.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?o.length>1&&o.pop():a!=="."&&o.push(a)}),o.length>1?o.join("/"):"/"}function gu(n,r,o,l){return`Cannot include a '${n}' character in a manually specified \`to.${r}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Qv(n){return n.filter((r,o)=>o===0||r.route.path&&r.route.path.length>0)}function Lh(n){let r=Qv(n);return r.map((o,l)=>l===r.length-1?o.pathname:o.pathnameBase)}function Dh(n,r,o,l=!1){let a;typeof n=="string"?a=pr(n):(a={...n},Ue(!a.pathname||!a.pathname.includes("?"),gu("?","pathname","search",a)),Ue(!a.pathname||!a.pathname.includes("#"),gu("#","pathname","hash",a)),Ue(!a.search||!a.search.includes("#"),gu("#","search","hash",a)));let u=n===""||a.pathname==="",f=u?"/":a.pathname,g;if(f==null)g=o;else{let v=r.length-1;if(!l&&f.startsWith("..")){let w=f.split("/");for(;w[0]==="..";)w.shift(),v-=1;a.pathname=w.join("/")}g=v>=0?r[v]:"/"}let c=qv(a,g),p=f&&f!=="/"&&f.endsWith("/"),m=(u||f===".")&&o.endsWith("/");return!c.pathname.endsWith("/")&&(p||m)&&(c.pathname+="/"),c}var wn=n=>n.join("/").replace(/\/\/+/g,"/"),Kv=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Yv=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Gv=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Xv(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Ah=["POST","PUT","PATCH","DELETE"];new Set(Ah);var Jv=["GET",...Ah];new Set(Jv);var Wr=O.createContext(null);Wr.displayName="DataRouter";var nl=O.createContext(null);nl.displayName="DataRouterState";var zh=O.createContext({isTransitioning:!1});zh.displayName="ViewTransition";var Zv=O.createContext(new Map);Zv.displayName="Fetchers";var e1=O.createContext(null);e1.displayName="Await";var sn=O.createContext(null);sn.displayName="Navigation";var Jo=O.createContext(null);Jo.displayName="Location";var un=O.createContext({outlet:null,matches:[],isDataRoute:!1});un.displayName="Route";var Zu=O.createContext(null);Zu.displayName="RouteError";function t1(n,{relative:r}={}){Ue(Zo(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:l}=O.useContext(sn),{hash:a,pathname:u,search:f}=ti(n,{relative:r}),g=u;return o!=="/"&&(g=u==="/"?o:wn([o,u])),l.createHref({pathname:g,search:f,hash:a})}function Zo(){return O.useContext(Jo)!=null}function Qn(){return Ue(Zo(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(Jo).location}var Fh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function jh(n){O.useContext(sn).static||O.useLayoutEffect(n)}function ei(){let{isDataRoute:n}=O.useContext(un);return n?g1():n1()}function n1(){Ue(Zo(),"useNavigate() may be used only in the context of a <Router> component.");let n=O.useContext(Wr),{basename:r,navigator:o}=O.useContext(sn),{matches:l}=O.useContext(un),{pathname:a}=Qn(),u=JSON.stringify(Lh(l)),f=O.useRef(!1);return jh(()=>{f.current=!0}),O.useCallback((c,p={})=>{if(Gt(f.current,Fh),!f.current)return;if(typeof c=="number"){o.go(c);return}let m=Dh(c,JSON.parse(u),a,p.relative==="path");n==null&&r!=="/"&&(m.pathname=m.pathname==="/"?r:wn([r,m.pathname])),(p.replace?o.replace:o.push)(m,p.state,p)},[r,o,u,a,n])}var r1=O.createContext(null);function o1(n){let r=O.useContext(un).outlet;return r&&O.createElement(r1.Provider,{value:n},r)}function ti(n,{relative:r}={}){let{matches:o}=O.useContext(un),{pathname:l}=Qn(),a=JSON.stringify(Lh(o));return O.useMemo(()=>Dh(n,JSON.parse(a),l,r==="path"),[n,a,l,r])}function i1(n,r){return Vh(n,r)}function Vh(n,r,o,l){var E;Ue(Zo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=O.useContext(sn),{matches:u}=O.useContext(un),f=u[u.length-1],g=f?f.params:{},c=f?f.pathname:"/",p=f?f.pathnameBase:"/",m=f&&f.route;{let R=m&&m.path||"";$h(c,!m||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let v=Qn(),w;if(r){let R=typeof r=="string"?pr(r):r;Ue(p==="/"||((E=R.pathname)==null?void 0:E.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${R.pathname}" was given in the \`location\` prop.`),w=R}else w=v;let k=w.pathname||"/",b=k;if(p!=="/"){let R=p.replace(/^\//,"").split("/");b="/"+k.replace(/^\//,"").split("/").slice(R.length).join("/")}let x=Mh(n,{pathname:b});Gt(m||x!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Gt(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=c1(x&&x.map(R=>Object.assign({},R,{params:Object.assign({},g,R.params),pathname:wn([p,a.encodeLocation?a.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?p:wn([p,a.encodeLocation?a.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),u,o,l);return r&&S?O.createElement(Jo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},S):S}function a1(){let n=m1(),r=Xv(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),o=n instanceof Error?n.stack:null,l="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:l},u={padding:"2px 4px",backgroundColor:l},f=null;return console.error("Error handled by React Router default ErrorBoundary:",n),f=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:u},"ErrorBoundary")," or"," ",O.createElement("code",{style:u},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},r),o?O.createElement("pre",{style:a},o):null,f)}var l1=O.createElement(a1,null),s1=class extends O.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,r){return r.location!==n.location||r.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:r.error,location:r.location,revalidation:n.revalidation||r.revalidation}}componentDidCatch(n,r){console.error("React Router caught the following error during render",n,r)}render(){return this.state.error!==void 0?O.createElement(un.Provider,{value:this.props.routeContext},O.createElement(Zu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function u1({routeContext:n,match:r,children:o}){let l=O.useContext(Wr);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),O.createElement(un.Provider,{value:n},o)}function c1(n,r=[],o=null,l=null){if(n==null){if(!o)return null;if(o.errors)n=o.matches;else if(r.length===0&&!o.initialized&&o.matches.length>0)n=o.matches;else return null}let a=n,u=o==null?void 0:o.errors;if(u!=null){let c=a.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id])!==void 0);Ue(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),a=a.slice(0,Math.min(a.length,c+1))}let f=!1,g=-1;if(o)for(let c=0;c<a.length;c++){let p=a[c];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(g=c),p.route.id){let{loaderData:m,errors:v}=o,w=p.route.loader&&!m.hasOwnProperty(p.route.id)&&(!v||v[p.route.id]===void 0);if(p.route.lazy||w){f=!0,g>=0?a=a.slice(0,g+1):a=[a[0]];break}}}return a.reduceRight((c,p,m)=>{let v,w=!1,k=null,b=null;o&&(v=u&&p.route.id?u[p.route.id]:void 0,k=p.route.errorElement||l1,f&&(g<0&&m===0?($h("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,b=null):g===m&&(w=!0,b=p.route.hydrateFallbackElement||null)));let x=r.concat(a.slice(0,m+1)),S=()=>{let E;return v?E=k:w?E=b:p.route.Component?E=O.createElement(p.route.Component,null):p.route.element?E=p.route.element:E=c,O.createElement(u1,{match:p,routeContext:{outlet:c,matches:x,isDataRoute:o!=null},children:E})};return o&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?O.createElement(s1,{location:o.location,revalidation:o.revalidation,component:k,error:v,children:S(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):S()},null)}function ec(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function d1(n){let r=O.useContext(Wr);return Ue(r,ec(n)),r}function f1(n){let r=O.useContext(nl);return Ue(r,ec(n)),r}function p1(n){let r=O.useContext(un);return Ue(r,ec(n)),r}function tc(n){let r=p1(n),o=r.matches[r.matches.length-1];return Ue(o.route.id,`${n} can only be used on routes that contain a unique "id"`),o.route.id}function h1(){return tc("useRouteId")}function m1(){var l;let n=O.useContext(Zu),r=f1("useRouteError"),o=tc("useRouteError");return n!==void 0?n:(l=r.errors)==null?void 0:l[o]}function g1(){let{router:n}=d1("useNavigate"),r=tc("useNavigate"),o=O.useRef(!1);return jh(()=>{o.current=!0}),O.useCallback(async(a,u={})=>{Gt(o.current,Fh),o.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:r,...u}))},[n,r])}var Op={};function $h(n,r,o){!r&&!Op[n]&&(Op[n]=!0,Gt(!1,o))}O.memo(v1);function v1({routes:n,future:r,state:o}){return Vh(n,void 0,o,r)}function y1(n){return o1(n.context)}function bn(n){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function b1({basename:n="/",children:r=null,location:o,navigationType:l="POP",navigator:a,static:u=!1}){Ue(!Zo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=n.replace(/^\/*/,"/"),g=O.useMemo(()=>({basename:f,navigator:a,static:u,future:{}}),[f,a,u]);typeof o=="string"&&(o=pr(o));let{pathname:c="/",search:p="",hash:m="",state:v=null,key:w="default"}=o,k=O.useMemo(()=>{let b=Wn(c,f);return b==null?null:{location:{pathname:b,search:p,hash:m,state:v,key:w},navigationType:l}},[f,c,p,m,v,w,l]);return Gt(k!=null,`<Router basename="${f}"> is not able to match the URL "${c}${p}${m}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:O.createElement(sn.Provider,{value:g},O.createElement(Jo.Provider,{children:r,value:k}))}function x1({children:n,location:r}){return i1(Lu(n),r)}function Lu(n,r=[]){let o=[];return O.Children.forEach(n,(l,a)=>{if(!O.isValidElement(l))return;let u=[...r,a];if(l.type===O.Fragment){o.push.apply(o,Lu(l.props.children,u));return}Ue(l.type===bn,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!l.props.index||!l.props.children,"An index route cannot have child routes.");let f={id:l.props.id||u.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(f.children=Lu(l.props.children,u)),o.push(f)}),o}var Na="get",Ia="application/x-www-form-urlencoded";function rl(n){return n!=null&&typeof n.tagName=="string"}function w1(n){return rl(n)&&n.tagName.toLowerCase()==="button"}function S1(n){return rl(n)&&n.tagName.toLowerCase()==="form"}function k1(n){return rl(n)&&n.tagName.toLowerCase()==="input"}function C1(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function E1(n,r){return n.button===0&&(!r||r==="_self")&&!C1(n)}var ba=null;function P1(){if(ba===null)try{new FormData(document.createElement("form"),0),ba=!1}catch{ba=!0}return ba}var O1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function vu(n){return n!=null&&!O1.has(n)?(Gt(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ia}"`),null):n}function R1(n,r){let o,l,a,u,f;if(S1(n)){let g=n.getAttribute("action");l=g?Wn(g,r):null,o=n.getAttribute("method")||Na,a=vu(n.getAttribute("enctype"))||Ia,u=new FormData(n)}else if(w1(n)||k1(n)&&(n.type==="submit"||n.type==="image")){let g=n.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=n.getAttribute("formaction")||g.getAttribute("action");if(l=c?Wn(c,r):null,o=n.getAttribute("formmethod")||g.getAttribute("method")||Na,a=vu(n.getAttribute("formenctype"))||vu(g.getAttribute("enctype"))||Ia,u=new FormData(g,n),!P1()){let{name:p,type:m,value:v}=n;if(m==="image"){let w=p?`${p}.`:"";u.append(`${w}x`,"0"),u.append(`${w}y`,"0")}else p&&u.append(p,v)}}else{if(rl(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Na,l=null,a=Ia,f=n}return u&&a==="text/plain"&&(f=u,u=void 0),{action:l,method:o.toLowerCase(),encType:a,formData:u,body:f}}function nc(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}async function _1(n,r){if(n.id in r)return r[n.id];try{let o=await import(n.module);return r[n.id]=o,o}catch(o){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function T1(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function M1(n,r,o){let l=await Promise.all(n.map(async a=>{let u=r.routes[a.route.id];if(u){let f=await _1(u,o);return f.links?f.links():[]}return[]}));return D1(l.flat(1).filter(T1).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Rp(n,r,o,l,a,u){let f=(c,p)=>o[p]?c.route.id!==o[p].route.id:!0,g=(c,p)=>{var m;return o[p].pathname!==c.pathname||((m=o[p].route.path)==null?void 0:m.endsWith("*"))&&o[p].params["*"]!==c.params["*"]};return u==="assets"?r.filter((c,p)=>f(c,p)||g(c,p)):u==="data"?r.filter((c,p)=>{var v;let m=l.routes[c.route.id];if(!m||!m.hasLoader)return!1;if(f(c,p)||g(c,p))return!0;if(c.route.shouldRevalidate){let w=c.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((v=o[0])==null?void 0:v.params)||{},nextUrl:new URL(n,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function N1(n,r){return I1(n.map(o=>{let l=r.routes[o.route.id];if(!l)return[];let a=[l.module];return l.imports&&(a=a.concat(l.imports)),a}).flat(1))}function I1(n){return[...new Set(n)]}function L1(n){let r={},o=Object.keys(n).sort();for(let l of o)r[l]=n[l];return r}function D1(n,r){let o=new Set;return new Set(r),n.reduce((l,a)=>{let u=JSON.stringify(L1(a));return o.has(u)||(o.add(u),l.push({key:u,link:a})),l},[])}function A1(n){let r=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return r.pathname==="/"?r.pathname="_root.data":r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function z1(){let n=O.useContext(Wr);return nc(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function F1(){let n=O.useContext(nl);return nc(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var rc=O.createContext(void 0);rc.displayName="FrameworkContext";function Bh(){let n=O.useContext(rc);return nc(n,"You must render this element inside a <HydratedRouter> element"),n}function j1(n,r){let o=O.useContext(rc),[l,a]=O.useState(!1),[u,f]=O.useState(!1),{onFocus:g,onBlur:c,onMouseEnter:p,onMouseLeave:m,onTouchStart:v}=r,w=O.useRef(null);O.useEffect(()=>{if(n==="render"&&f(!0),n==="viewport"){let x=E=>{E.forEach(R=>{f(R.isIntersecting)})},S=new IntersectionObserver(x,{threshold:.5});return w.current&&S.observe(w.current),()=>{S.disconnect()}}},[n]),O.useEffect(()=>{if(l){let x=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(x)}}},[l]);let k=()=>{a(!0)},b=()=>{a(!1),f(!1)};return o?n!=="intent"?[u,w,{}]:[u,w,{onFocus:Vo(g,k),onBlur:Vo(c,b),onMouseEnter:Vo(p,k),onMouseLeave:Vo(m,b),onTouchStart:Vo(v,k)}]:[!1,w,{}]}function Vo(n,r){return o=>{n&&n(o),o.defaultPrevented||r(o)}}function V1({page:n,...r}){let{router:o}=z1(),l=O.useMemo(()=>Mh(o.routes,n,o.basename),[o.routes,n,o.basename]);return l?O.createElement(B1,{page:n,matches:l,...r}):(console.warn(`Tried to prefetch ${n} but no routes matched.`),null)}function $1(n){let{manifest:r,routeModules:o}=Bh(),[l,a]=O.useState([]);return O.useEffect(()=>{let u=!1;return M1(n,r,o).then(f=>{u||a(f)}),()=>{u=!0}},[n,r,o]),l}function B1({page:n,matches:r,...o}){let l=Qn(),{manifest:a,routeModules:u}=Bh(),{loaderData:f,matches:g}=F1(),c=O.useMemo(()=>Rp(n,r,g,a,l,"data"),[n,r,g,a,l]),p=O.useMemo(()=>Rp(n,r,g,a,l,"assets"),[n,r,g,a,l]),m=O.useMemo(()=>{if(n===l.pathname+l.search+l.hash)return[];let k=new Set,b=!1;if(r.forEach(S=>{var R;let E=a.routes[S.route.id];!E||!E.hasLoader||(!c.some(T=>T.route.id===S.route.id)&&S.route.id in f&&((R=u[S.route.id])!=null&&R.shouldRevalidate)||E.hasClientLoader?b=!0:k.add(S.route.id))}),k.size===0)return[];let x=A1(n);return b&&k.size>0&&x.searchParams.set("_routes",r.filter(S=>k.has(S.route.id)).map(S=>S.route.id).join(",")),[x.pathname+x.search]},[f,l,a,c,r,n,u]),v=O.useMemo(()=>N1(p,a),[p,a]),w=$1(p);return O.createElement(O.Fragment,null,m.map(k=>O.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...o})),v.map(k=>O.createElement("link",{key:k,rel:"modulepreload",href:k,...o})),w.map(({key:k,link:b})=>O.createElement("link",{key:k,...b})))}function U1(...n){return r=>{n.forEach(o=>{typeof o=="function"?o(r):o!=null&&(o.current=r)})}}var Uh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Uh&&(window.__reactRouterVersion="7.0.2")}catch{}function H1({basename:n,children:r,window:o}){let l=O.useRef();l.current==null&&(l.current=_v({window:o,v5Compat:!0}));let a=l.current,[u,f]=O.useState({action:a.action,location:a.location}),g=O.useCallback(c=>{O.startTransition(()=>f(c))},[f]);return O.useLayoutEffect(()=>a.listen(g),[a,g]),O.createElement(b1,{basename:n,children:r,location:u.location,navigationType:u.action,navigator:a})}var Hh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oc=O.forwardRef(function({onClick:r,discover:o="render",prefetch:l="none",relative:a,reloadDocument:u,replace:f,state:g,target:c,to:p,preventScrollReset:m,viewTransition:v,...w},k){let{basename:b}=O.useContext(sn),x=typeof p=="string"&&Hh.test(p),S,E=!1;if(typeof p=="string"&&x&&(S=p,Uh))try{let X=new URL(window.location.href),me=p.startsWith("//")?new URL(X.protocol+p):new URL(p),xe=Wn(me.pathname,b);me.origin===X.origin&&xe!=null?p=xe+me.search+me.hash:E=!0}catch{Gt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let R=t1(p,{relative:a}),[T,F,N]=j1(l,w),$=K1(p,{replace:f,state:g,target:c,preventScrollReset:m,relative:a,viewTransition:v});function B(X){r&&r(X),X.defaultPrevented||$(X)}let Q=O.createElement("a",{...w,...N,href:S||R,onClick:E||u?r:B,ref:U1(k,F),target:c,"data-discover":!x&&o==="render"?"true":void 0});return T&&!x?O.createElement(O.Fragment,null,Q,O.createElement(V1,{page:R})):Q});oc.displayName="Link";var q1=O.forwardRef(function({"aria-current":r="page",caseSensitive:o=!1,className:l="",end:a=!1,style:u,to:f,viewTransition:g,children:c,...p},m){let v=ti(f,{relative:p.relative}),w=Qn(),k=O.useContext(nl),{navigator:b,basename:x}=O.useContext(sn),S=k!=null&&Z1(v)&&g===!0,E=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,R=w.pathname,T=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;o||(R=R.toLowerCase(),T=T?T.toLowerCase():null,E=E.toLowerCase()),T&&x&&(T=Wn(T,x)||T);const F=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let N=R===E||!a&&R.startsWith(E)&&R.charAt(F)==="/",$=T!=null&&(T===E||!a&&T.startsWith(E)&&T.charAt(E.length)==="/"),B={isActive:N,isPending:$,isTransitioning:S},Q=N?r:void 0,X;typeof l=="function"?X=l(B):X=[l,N?"active":null,$?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let me=typeof u=="function"?u(B):u;return O.createElement(oc,{...p,"aria-current":Q,className:X,ref:m,style:me,to:f,viewTransition:g},typeof c=="function"?c(B):c)});q1.displayName="NavLink";var W1=O.forwardRef(({discover:n="render",fetcherKey:r,navigate:o,reloadDocument:l,replace:a,state:u,method:f=Na,action:g,onSubmit:c,relative:p,preventScrollReset:m,viewTransition:v,...w},k)=>{let b=X1(),x=J1(g,{relative:p}),S=f.toLowerCase()==="get"?"get":"post",E=typeof g=="string"&&Hh.test(g),R=T=>{if(c&&c(T),T.defaultPrevented)return;T.preventDefault();let F=T.nativeEvent.submitter,N=(F==null?void 0:F.getAttribute("formmethod"))||f;b(F||T.currentTarget,{fetcherKey:r,method:N,navigate:o,replace:a,state:u,relative:p,preventScrollReset:m,viewTransition:v})};return O.createElement("form",{ref:k,method:S,action:x,onSubmit:l?c:R,...w,"data-discover":!E&&n==="render"?"true":void 0})});W1.displayName="Form";function Q1(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qh(n){let r=O.useContext(Wr);return Ue(r,Q1(n)),r}function K1(n,{target:r,replace:o,state:l,preventScrollReset:a,relative:u,viewTransition:f}={}){let g=ei(),c=Qn(),p=ti(n,{relative:u});return O.useCallback(m=>{if(E1(m,r)){m.preventDefault();let v=o!==void 0?o:Qo(c)===Qo(p);g(n,{replace:v,state:l,preventScrollReset:a,relative:u,viewTransition:f})}},[c,g,p,o,l,r,n,a,u,f])}var Y1=0,G1=()=>`__${String(++Y1)}__`;function X1(){let{router:n}=qh("useSubmit"),{basename:r}=O.useContext(sn),o=h1();return O.useCallback(async(l,a={})=>{let{action:u,method:f,encType:g,formData:c,body:p}=R1(l,r);if(a.navigate===!1){let m=a.fetcherKey||G1();await n.fetch(m,o,a.action||u,{preventScrollReset:a.preventScrollReset,formData:c,body:p,formMethod:a.method||f,formEncType:a.encType||g,flushSync:a.flushSync})}else await n.navigate(a.action||u,{preventScrollReset:a.preventScrollReset,formData:c,body:p,formMethod:a.method||f,formEncType:a.encType||g,replace:a.replace,state:a.state,fromRouteId:o,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,r,o])}function J1(n,{relative:r}={}){let{basename:o}=O.useContext(sn),l=O.useContext(un);Ue(l,"useFormAction must be used inside a RouteContext");let[a]=l.matches.slice(-1),u={...ti(n||".",{relative:r})},f=Qn();if(n==null){u.search=f.search;let g=new URLSearchParams(u.search),c=g.getAll("index");if(c.some(m=>m==="")){g.delete("index"),c.filter(v=>v).forEach(v=>g.append("index",v));let m=g.toString();u.search=m?`?${m}`:""}}return(!n||n===".")&&a.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(u.pathname=u.pathname==="/"?o:wn([o,u.pathname])),Qo(u)}function Z1(n,r={}){let o=O.useContext(zh);Ue(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=qh("useViewTransitionState"),a=ti(n,{relative:r.relative});if(!o.isTransitioning)return!1;let u=Wn(o.currentLocation.pathname,l)||o.currentLocation.pathname,f=Wn(o.nextLocation.pathname,l)||o.nextLocation.pathname;return $a(a.pathname,f)!=null||$a(a.pathname,u)!=null}new TextEncoder;var ey=Th(),Wh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},_p=oe.createContext&&oe.createContext(Wh),ty=["attr","size","title"];function ny(n,r){if(n==null)return{};var o=ry(n,r),l,a;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(a=0;a<u.length;a++)l=u[a],!(r.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(n,l)&&(o[l]=n[l])}return o}function ry(n,r){if(n==null)return{};var o={};for(var l in n)if(Object.prototype.hasOwnProperty.call(n,l)){if(r.indexOf(l)>=0)continue;o[l]=n[l]}return o}function Ba(){return Ba=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},Ba.apply(this,arguments)}function Tp(n,r){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);r&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),o.push.apply(o,l)}return o}function Ua(n){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?Tp(Object(o),!0).forEach(function(l){oy(n,l,o[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):Tp(Object(o)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(o,l))})}return n}function oy(n,r,o){return r=iy(r),r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n}function iy(n){var r=ay(n,"string");return typeof r=="symbol"?r:r+""}function ay(n,r){if(typeof n!="object"||!n)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var l=o.call(n,r||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function Qh(n){return n&&n.map((r,o)=>oe.createElement(r.tag,Ua({key:o},r.attr),Qh(r.child)))}function ol(n){return r=>oe.createElement(ly,Ba({attr:Ua({},n.attr)},r),Qh(n.child))}function ly(n){var r=o=>{var{attr:l,size:a,title:u}=n,f=ny(n,ty),g=a||o.size||"1em",c;return o.className&&(c=o.className),n.className&&(c=(c?c+" ":"")+n.className),oe.createElement("svg",Ba({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,l,f,{className:c,style:Ua(Ua({color:n.color||o.color},o.style),n.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),u&&oe.createElement("title",null,u),n.children)};return _p!==void 0?oe.createElement(_p.Consumer,null,o=>r(o)):r(Wh)}function sy(n){return ol({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"},child:[]}]})(n)}function uy(n){return ol({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M452.1 49L52.3 265.3c-6 3.3-5.6 12.1.6 14.9l68.2 25.7c4 1.5 7.2 4.5 9 8.4l53 109.1c1 4.8 9.9 6.1 10 1.2l-8.1-90.2c.5-6.7 3-13 7.3-18.2l207.3-203.1c1.2-1.2 2.9-1.6 4.5-1.3 3.4.8 4.8 4.9 2.6 7.6L228 338c-4 6-6 11-7 18l-10.7 77.9c.9 6.8 6.2 9.4 10.5 3.3l38.5-45.2c2.6-3.7 7.7-4.5 11.3-1.9l99.2 72.3c4.7 3.5 11.4.9 12.6-4.9L463.8 58c1.5-6.8-5.6-12.3-11.7-9z"},child:[]}]})(n)}function cy(n){return ol({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M447.8 438.3c-7.2-31.8-48.3-47.3-62.5-52.3-15.6-5.5-37.8-6.8-52.1-10-8.2-1.8-20.1-6.3-24.1-11.1s-1.6-49.3-1.6-49.3 7.4-11.5 11.4-21.7c4-10.1 8.4-37.9 8.4-37.9s8.2 0 11.1-14.4c3.1-15.7 8-21.8 7.4-33.5-.6-11.5-6.9-11.2-6.9-11.2s6.1-16.7 6.8-51.3c.9-41.1-31.3-81.6-89.6-81.6-59.1 0-90.6 40.5-89.7 81.6.8 34.6 6.7 51.3 6.7 51.3s-6.3-.3-6.9 11.2c-.6 11.7 4.3 17.8 7.4 33.5 2.8 14.4 11.1 14.4 11.1 14.4s4.4 27.8 8.4 37.9c4 10.2 11.4 21.7 11.4 21.7s2.4 44.5-1.6 49.3c-4 4.8-15.9 9.3-24.1 11.1-14.3 3.2-36.5 4.5-52.1 10-14.2 5-55.3 20.5-62.5 52.3-1.1 5 2.7 9.7 7.9 9.7H440c5.1 0 8.9-4.7 7.8-9.7z"},child:[]}]})(n)}const dy=[{title:"Home",path:"/home",icon:I.jsx(sy,{style:{fontSize:"25px",color:"#555"}}),cName:"nav-text"},{title:"Announcement",path:"announcement",icon:I.jsx(uy,{style:{fontSize:"25px",color:"#555"}}),cName:"nav-text"}],fy=()=>(ei(),I.jsxs("div",{children:[I.jsx("h2",{children:"Menu"}),I.jsx("ul",{className:"menu-list",children:dy.map((n,r)=>I.jsx("li",{className:n.cName,children:I.jsxs(oc,{to:n.path,children:[n.icon,I.jsx("span",{children:n.title})]})},r))})]})),py=()=>I.jsxs("div",{style:{display:"flex"},children:[I.jsx("aside",{style:{width:"230px",background:"#ffe4c4",padding:"10px",height:"100vh",boxShadow:"2px 0 5px rgba(0,0,0,0.1)"},children:I.jsx(fy,{})}),I.jsxs("main",{style:{flex:1,padding:"20px"},children:[I.jsx(y1,{})," "]})]}),hy=()=>I.jsx("h2",{children:"Welcome to the Home Page"});function tt(n,r){r===void 0&&(r={});var o=r.insertAt;if(n&&typeof document<"u"){var l=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",o==="top"&&l.firstChild?l.insertBefore(a,l.firstChild):l.appendChild(a),a.styleSheet?a.styleSheet.cssText=n:a.appendChild(document.createTextNode(n))}}tt(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var ke=function(){return ke=Object.assign||function(n){for(var r,o=1,l=arguments.length;o<l;o++)for(var a in r=arguments[o])Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a]);return n},ke.apply(this,arguments)};function Ha(n){return Ha=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Ha(n)}var my=/^\s+/,gy=/\s+$/;function te(n,r){if(r=r||{},(n=n||"")instanceof te)return n;if(!(this instanceof te))return new te(n,r);var o=function(l){var a={r:0,g:0,b:0},u=1,f=null,g=null,c=null,p=!1,m=!1;typeof l=="string"&&(l=function(b){b=b.replace(my,"").replace(gy,"").toLowerCase();var x,S=!1;if(Du[b])b=Du[b],S=!0;else if(b=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(x=Qt.rgb.exec(b))?{r:x[1],g:x[2],b:x[3]}:(x=Qt.rgba.exec(b))?{r:x[1],g:x[2],b:x[3],a:x[4]}:(x=Qt.hsl.exec(b))?{h:x[1],s:x[2],l:x[3]}:(x=Qt.hsla.exec(b))?{h:x[1],s:x[2],l:x[3],a:x[4]}:(x=Qt.hsv.exec(b))?{h:x[1],s:x[2],v:x[3]}:(x=Qt.hsva.exec(b))?{h:x[1],s:x[2],v:x[3],a:x[4]}:(x=Qt.hex8.exec(b))?{r:Mt(x[1]),g:Mt(x[2]),b:Mt(x[3]),a:Ap(x[4]),format:S?"name":"hex8"}:(x=Qt.hex6.exec(b))?{r:Mt(x[1]),g:Mt(x[2]),b:Mt(x[3]),format:S?"name":"hex"}:(x=Qt.hex4.exec(b))?{r:Mt(x[1]+""+x[1]),g:Mt(x[2]+""+x[2]),b:Mt(x[3]+""+x[3]),a:Ap(x[4]+""+x[4]),format:S?"name":"hex8"}:(x=Qt.hex3.exec(b))?{r:Mt(x[1]+""+x[1]),g:Mt(x[2]+""+x[2]),b:Mt(x[3]+""+x[3]),format:S?"name":"hex"}:!1}(l)),Ha(l)=="object"&&(yn(l.r)&&yn(l.g)&&yn(l.b)?(v=l.r,w=l.g,k=l.b,a={r:255*Ve(v,255),g:255*Ve(w,255),b:255*Ve(k,255)},p=!0,m=String(l.r).substr(-1)==="%"?"prgb":"rgb"):yn(l.h)&&yn(l.s)&&yn(l.v)?(f=qo(l.s),g=qo(l.v),a=function(b,x,S){b=6*Ve(b,360),x=Ve(x,100),S=Ve(S,100);var E=Math.floor(b),R=b-E,T=S*(1-x),F=S*(1-R*x),N=S*(1-(1-R)*x),$=E%6,B=[S,F,T,T,N,S][$],Q=[N,S,S,F,T,T][$],X=[T,T,N,S,S,F][$];return{r:255*B,g:255*Q,b:255*X}}(l.h,f,g),p=!0,m="hsv"):yn(l.h)&&yn(l.s)&&yn(l.l)&&(f=qo(l.s),c=qo(l.l),a=function(b,x,S){var E,R,T;function F(B,Q,X){return X<0&&(X+=1),X>1&&(X-=1),X<1/6?B+6*(Q-B)*X:X<.5?Q:X<2/3?B+(Q-B)*(2/3-X)*6:B}if(b=Ve(b,360),x=Ve(x,100),S=Ve(S,100),x===0)E=R=T=S;else{var N=S<.5?S*(1+x):S+x-S*x,$=2*S-N;E=F($,N,b+1/3),R=F($,N,b),T=F($,N,b-1/3)}return{r:255*E,g:255*R,b:255*T}}(l.h,f,c),p=!0,m="hsl"),l.hasOwnProperty("a")&&(u=l.a));var v,w,k;return u=Kh(u),{ok:p,format:l.format||m,r:Math.min(255,Math.max(a.r,0)),g:Math.min(255,Math.max(a.g,0)),b:Math.min(255,Math.max(a.b,0)),a:u}}(n);this._originalInput=n,this._r=o.r,this._g=o.g,this._b=o.b,this._a=o.a,this._roundA=Math.round(100*this._a)/100,this._format=r.format||o.format,this._gradientType=r.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=o.ok}function Mp(n,r,o){n=Ve(n,255),r=Ve(r,255),o=Ve(o,255);var l,a,u=Math.max(n,r,o),f=Math.min(n,r,o),g=(u+f)/2;if(u==f)l=a=0;else{var c=u-f;switch(a=g>.5?c/(2-u-f):c/(u+f),u){case n:l=(r-o)/c+(r<o?6:0);break;case r:l=(o-n)/c+2;break;case o:l=(n-r)/c+4}l/=6}return{h:l,s:a,l:g}}function Np(n,r,o){n=Ve(n,255),r=Ve(r,255),o=Ve(o,255);var l,a,u=Math.max(n,r,o),f=Math.min(n,r,o),g=u,c=u-f;if(a=u===0?0:c/u,u==f)l=0;else{switch(u){case n:l=(r-o)/c+(r<o?6:0);break;case r:l=(o-n)/c+2;break;case o:l=(n-r)/c+4}l/=6}return{h:l,s:a,v:g}}function Ip(n,r,o,l){var a=[Kt(Math.round(n).toString(16)),Kt(Math.round(r).toString(16)),Kt(Math.round(o).toString(16))];return l&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function Lp(n,r,o,l){return[Kt(Yh(l)),Kt(Math.round(n).toString(16)),Kt(Math.round(r).toString(16)),Kt(Math.round(o).toString(16))].join("")}function vy(n,r){r=r===0?0:r||10;var o=te(n).toHsl();return o.s-=r/100,o.s=il(o.s),te(o)}function yy(n,r){r=r===0?0:r||10;var o=te(n).toHsl();return o.s+=r/100,o.s=il(o.s),te(o)}function by(n){return te(n).desaturate(100)}function xy(n,r){r=r===0?0:r||10;var o=te(n).toHsl();return o.l+=r/100,o.l=il(o.l),te(o)}function wy(n,r){r=r===0?0:r||10;var o=te(n).toRgb();return o.r=Math.max(0,Math.min(255,o.r-Math.round(-r/100*255))),o.g=Math.max(0,Math.min(255,o.g-Math.round(-r/100*255))),o.b=Math.max(0,Math.min(255,o.b-Math.round(-r/100*255))),te(o)}function Sy(n,r){r=r===0?0:r||10;var o=te(n).toHsl();return o.l-=r/100,o.l=il(o.l),te(o)}function ky(n,r){var o=te(n).toHsl(),l=(o.h+r)%360;return o.h=l<0?360+l:l,te(o)}function Cy(n){var r=te(n).toHsl();return r.h=(r.h+180)%360,te(r)}function Dp(n,r){if(isNaN(r)||r<=0)throw new Error("Argument to polyad must be a positive number");for(var o=te(n).toHsl(),l=[te(n)],a=360/r,u=1;u<r;u++)l.push(te({h:(o.h+u*a)%360,s:o.s,l:o.l}));return l}function Ey(n){var r=te(n).toHsl(),o=r.h;return[te(n),te({h:(o+72)%360,s:r.s,l:r.l}),te({h:(o+216)%360,s:r.s,l:r.l})]}function Py(n,r,o){r=r||6,o=o||30;var l=te(n).toHsl(),a=360/o,u=[te(n)];for(l.h=(l.h-(a*r>>1)+720)%360;--r;)l.h=(l.h+a)%360,u.push(te(l));return u}function Oy(n,r){r=r||6;for(var o=te(n).toHsv(),l=o.h,a=o.s,u=o.v,f=[],g=1/r;r--;)f.push(te({h:l,s:a,v:u})),u=(u+g)%1;return f}te.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var n=this.toRgb();return(299*n.r+587*n.g+114*n.b)/1e3},getLuminance:function(){var n,r,o,l=this.toRgb();return n=l.r/255,r=l.g/255,o=l.b/255,.2126*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))},setAlpha:function(n){return this._a=Kh(n),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var n=Np(this._r,this._g,this._b);return{h:360*n.h,s:n.s,v:n.v,a:this._a}},toHsvString:function(){var n=Np(this._r,this._g,this._b),r=Math.round(360*n.h),o=Math.round(100*n.s),l=Math.round(100*n.v);return this._a==1?"hsv("+r+", "+o+"%, "+l+"%)":"hsva("+r+", "+o+"%, "+l+"%, "+this._roundA+")"},toHsl:function(){var n=Mp(this._r,this._g,this._b);return{h:360*n.h,s:n.s,l:n.l,a:this._a}},toHslString:function(){var n=Mp(this._r,this._g,this._b),r=Math.round(360*n.h),o=Math.round(100*n.s),l=Math.round(100*n.l);return this._a==1?"hsl("+r+", "+o+"%, "+l+"%)":"hsla("+r+", "+o+"%, "+l+"%, "+this._roundA+")"},toHex:function(n){return Ip(this._r,this._g,this._b,n)},toHexString:function(n){return"#"+this.toHex(n)},toHex8:function(n){return function(r,o,l,a,u){var f=[Kt(Math.round(r).toString(16)),Kt(Math.round(o).toString(16)),Kt(Math.round(l).toString(16)),Kt(Yh(a))];return u&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)&&f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")}(this._r,this._g,this._b,this._a,n)},toHex8String:function(n){return"#"+this.toHex8(n)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Ve(this._r,255))+"%",g:Math.round(100*Ve(this._g,255))+"%",b:Math.round(100*Ve(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Ve(this._r,255))+"%, "+Math.round(100*Ve(this._g,255))+"%, "+Math.round(100*Ve(this._b,255))+"%)":"rgba("+Math.round(100*Ve(this._r,255))+"%, "+Math.round(100*Ve(this._g,255))+"%, "+Math.round(100*Ve(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Ry[Ip(this._r,this._g,this._b,!0)]||!1)},toFilter:function(n){var r="#"+Lp(this._r,this._g,this._b,this._a),o=r,l=this._gradientType?"GradientType = 1, ":"";if(n){var a=te(n);o="#"+Lp(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+l+"startColorstr="+r+",endColorstr="+o+")"},toString:function(n){var r=!!n;n=n||this._format;var o=!1,l=this._a<1&&this._a>=0;return r||!l||n!=="hex"&&n!=="hex6"&&n!=="hex3"&&n!=="hex4"&&n!=="hex8"&&n!=="name"?(n==="rgb"&&(o=this.toRgbString()),n==="prgb"&&(o=this.toPercentageRgbString()),n!=="hex"&&n!=="hex6"||(o=this.toHexString()),n==="hex3"&&(o=this.toHexString(!0)),n==="hex4"&&(o=this.toHex8String(!0)),n==="hex8"&&(o=this.toHex8String()),n==="name"&&(o=this.toName()),n==="hsl"&&(o=this.toHslString()),n==="hsv"&&(o=this.toHsvString()),o||this.toHexString()):n==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return te(this.toString())},_applyModification:function(n,r){var o=n.apply(null,[this].concat([].slice.call(r)));return this._r=o._r,this._g=o._g,this._b=o._b,this.setAlpha(o._a),this},lighten:function(){return this._applyModification(xy,arguments)},brighten:function(){return this._applyModification(wy,arguments)},darken:function(){return this._applyModification(Sy,arguments)},desaturate:function(){return this._applyModification(vy,arguments)},saturate:function(){return this._applyModification(yy,arguments)},greyscale:function(){return this._applyModification(by,arguments)},spin:function(){return this._applyModification(ky,arguments)},_applyCombination:function(n,r){return n.apply(null,[this].concat([].slice.call(r)))},analogous:function(){return this._applyCombination(Py,arguments)},complement:function(){return this._applyCombination(Cy,arguments)},monochromatic:function(){return this._applyCombination(Oy,arguments)},splitcomplement:function(){return this._applyCombination(Ey,arguments)},triad:function(){return this._applyCombination(Dp,[3])},tetrad:function(){return this._applyCombination(Dp,[4])}},te.fromRatio=function(n,r){if(Ha(n)=="object"){var o={};for(var l in n)n.hasOwnProperty(l)&&(o[l]=l==="a"?n[l]:qo(n[l]));n=o}return te(n,r)},te.equals=function(n,r){return!(!n||!r)&&te(n).toRgbString()==te(r).toRgbString()},te.random=function(){return te.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},te.mix=function(n,r,o){o=o===0?0:o||50;var l=te(n).toRgb(),a=te(r).toRgb(),u=o/100;return te({r:(a.r-l.r)*u+l.r,g:(a.g-l.g)*u+l.g,b:(a.b-l.b)*u+l.b,a:(a.a-l.a)*u+l.a})},te.readability=function(n,r){var o=te(n),l=te(r);return(Math.max(o.getLuminance(),l.getLuminance())+.05)/(Math.min(o.getLuminance(),l.getLuminance())+.05)},te.isReadable=function(n,r,o){var l,a,u=te.readability(n,r);switch(a=!1,(l=function(f){var g,c;return g=((f=f||{level:"AA",size:"small"}).level||"AA").toUpperCase(),c=(f.size||"small").toLowerCase(),g!=="AA"&&g!=="AAA"&&(g="AA"),c!=="small"&&c!=="large"&&(c="small"),{level:g,size:c}}(o)).level+l.size){case"AAsmall":case"AAAlarge":a=u>=4.5;break;case"AAlarge":a=u>=3;break;case"AAAsmall":a=u>=7}return a},te.mostReadable=function(n,r,o){var l,a,u,f,g=null,c=0;a=(o=o||{}).includeFallbackColors,u=o.level,f=o.size;for(var p=0;p<r.length;p++)(l=te.readability(n,r[p]))>c&&(c=l,g=te(r[p]));return te.isReadable(n,g,{level:u,size:f})||!a?g:(o.includeFallbackColors=!1,te.mostReadable(n,["#fff","#000"],o))};var Du=te.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Ry=te.hexNames=function(n){var r={};for(var o in n)n.hasOwnProperty(o)&&(r[n[o]]=o);return r}(Du);function Kh(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function Ve(n,r){(function(l){return typeof l=="string"&&l.indexOf(".")!=-1&&parseFloat(l)===1})(n)&&(n="100%");var o=function(l){return typeof l=="string"&&l.indexOf("%")!=-1}(n);return n=Math.min(r,Math.max(0,parseFloat(n))),o&&(n=parseInt(n*r,10)/100),Math.abs(n-r)<1e-6?1:n%r/parseFloat(r)}function il(n){return Math.min(1,Math.max(0,n))}function Mt(n){return parseInt(n,16)}function Kt(n){return n.length==1?"0"+n:""+n}function qo(n){return n<=1&&(n=100*n+"%"),n}function Yh(n){return Math.round(255*parseFloat(n)).toString(16)}function Ap(n){return Mt(n)/255}var Hn,xa,wa,Qt=(xa="[\\s|\\(]+("+(Hn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Hn+")[,|\\s]+("+Hn+")\\s*\\)?",wa="[\\s|\\(]+("+Hn+")[,|\\s]+("+Hn+")[,|\\s]+("+Hn+")[,|\\s]+("+Hn+")\\s*\\)?",{CSS_UNIT:new RegExp(Hn),rgb:new RegExp("rgb"+xa),rgba:new RegExp("rgba"+wa),hsl:new RegExp("hsl"+xa),hsla:new RegExp("hsla"+wa),hsv:new RegExp("hsv"+xa),hsva:new RegExp("hsva"+wa),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function yn(n){return!!Qt.CSS_UNIT.exec(n)}var ni=function(n,r){var o=(typeof n=="string"?parseInt(n):n)||0;if(o>=-5&&o<=5){var l=o,a=parseFloat(r),u=a+l*(a/5)*-1;return(u==0||u<=Number.EPSILON)&&(u=.1),{animationPeriod:u+"s"}}return{animationPeriod:r}},ri=function(n,r){var o=n||{},l="";switch(r){case"small":l="12px";break;case"medium":l="16px";break;case"large":l="20px";break;default:l=void 0}var a={};if(o.fontSize){var u=o.fontSize;a=function(f,g){var c={};for(var p in f)Object.prototype.hasOwnProperty.call(f,p)&&g.indexOf(p)<0&&(c[p]=f[p]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function"){var m=0;for(p=Object.getOwnPropertySymbols(f);m<p.length;m++)g.indexOf(p[m])<0&&Object.prototype.propertyIsEnumerable.call(f,p[m])&&(c[p[m]]=f[p[m]])}return c}(o,["fontSize"]),l=u}return{fontSize:l,styles:a}},_y={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},oi=function(n){var r=n.className,o=n.text,l=n.textColor,a=n.staticText,u=n.style;return o?oe.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(r||"").trim(),style:ke(ke(ke({},a&&_y),l&&{color:l,mixBlendMode:"unset"}),u&&u)},typeof o=="string"&&o.length?o:"loading"):null},xn="rgb(50, 205, 50)";function ii(n,r){r===void 0&&(r=0);var o=[];return function l(a,u){return u===void 0&&(u=0),o.push.apply(o,a),o.length<u&&l(o,u),o.slice(0,u)}(n,r)}tt(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);te(xn).toRgb();Array.from({length:4},function(n,r){return"--atom-phase".concat(r+1,"-rgb")});tt(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(n,r){return"--commet-phase".concat(r+1,"-color")});tt(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);var Sa=Array.from({length:4},function(n,r){return"--OP-annulus-phase".concat(r+1,"-color")}),Ty=function(n){var r,o=ri(n==null?void 0:n.style,n==null?void 0:n.size),l=o.styles,a=o.fontSize,u=n==null?void 0:n.easing,f=ni(n==null?void 0:n.speedPlus,"1.5s").animationPeriod,g=function(p){var m={},v=Sa.length;if(p instanceof Array){for(var w=ii(p,v),k=0;k<w.length&&!(k>=4);k++)m[Sa[k]]=w[k];return m}try{if(typeof p!="string")throw new Error("Color String expected");for(var b=0;b<v;b++)m[Sa[b]]=p}catch(x){for(x instanceof Error?console.warn("[".concat(x.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),b=0;b<v;b++)m[Sa[b]]=xn}return m}((r=n==null?void 0:n.color)!==null&&r!==void 0?r:""),c=n!=null&&n.dense?4.3:2.9;return oe.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:ke(ke(ke(ke(ke({},a&&{fontSize:a}),f&&{"--rli-animation-duration":f}),u&&{"--rli-animation-function":u}),g),l),role:"status","aria-live":"polite","aria-label":"Loading"},oe.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},oe.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},oe.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:c,strokeMiterlimit:"10"})),oe.createElement(oi,{className:"OP-annulus-text",text:n==null?void 0:n.text,textColor:n==null?void 0:n.textColor})))};function yu(n){return n&&n.Math===Math&&n}tt(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);var $r=yu(typeof window=="object"&&window)||yu(typeof self=="object"&&self)||yu(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function Gh(){var n,r;return!((n=$r==null?void 0:$r.crypto)===null||n===void 0)&&n.randomUUID?$r.crypto.randomUUID():!((r=$r==null?void 0:$r.btoa)===null||r===void 0)&&r.name?$r.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var ka=Array.from({length:4},function(n,r){return"--OP-dotted-phase".concat(r+1,"-color")}),My=function(n){var r,o=ri(n==null?void 0:n.style,n==null?void 0:n.size),l=o.styles,a=o.fontSize,u=n==null?void 0:n.easing,f=ni(n==null?void 0:n.speedPlus,"1.2s").animationPeriod,g=function(p){var m={},v=ka.length;if(p instanceof Array){for(var w=ii(p,v),k=0;k<w.length&&!(k>=4);k++)m[ka[k]]=w[k];return m}try{if(typeof p!="string")throw new Error("Color String expected");for(var b=0;b<v;b++)m[ka[b]]=p}catch(x){for(x instanceof Error?console.warn("[".concat(x.message,']: Received "').concat(typeof p,'" with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),b=0;b<v;b++)m[ka[b]]=xn}return m}((r=n==null?void 0:n.color)!==null&&r!==void 0?r:""),c=n!=null&&n.dense?16:12;return oe.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:ke(ke(ke(ke(ke({},a&&{fontSize:a}),f&&{"--rli-animation-duration":f}),u&&{"--rli-animation-function":u}),g),l),role:"status","aria-live":"polite","aria-label":"Loading"},oe.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:c}).map(function(p,m){var v=function(b,x,S){if(x===16){var E=360*b/x,R=x-b,T=Number.parseFloat(S)/x*R*-1;return{transform:"rotate(".concat(E,"deg)"),animationDelay:"".concat(T,"s")}}return{transform:"",animationDelay:""}}(m,c,f),w=v.animationDelay,k=v.transform;return oe.createElement("span",{key:Gh(),className:"rli-d-i-b dot-shape-holder",style:k?{transform:k}:void 0},oe.createElement("span",{className:"dot",style:w?{animationDelay:w}:void 0}))}),oe.createElement(oi,{className:"OP-dotted-text",text:n==null?void 0:n.text,textColor:n==null?void 0:n.textColor})))};tt(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);var Ca=Array.from({length:4},function(n,r){return"--OP-spokes-phase".concat(r+1,"-color")}),Ny=function(n){var r,o=ri(n==null?void 0:n.style,n==null?void 0:n.size),l=o.styles,a=o.fontSize,u=n==null?void 0:n.easing,f=ni(n==null?void 0:n.speedPlus,"1.2s").animationPeriod,g=function(p){var m={},v=Ca.length;if(p instanceof Array){for(var w=ii(p,v),k=0;k<w.length&&!(k>=4);k++)m[Ca[k]]=w[k];return m}try{if(typeof p!="string")throw new Error("Color String expected");for(var b=0;b<v;b++)m[Ca[b]]=p}catch(x){for(x instanceof Error?console.warn("[".concat(x.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),b=0;b<v;b++)m[Ca[b]]=xn}return m}((r=n==null?void 0:n.color)!==null&&r!==void 0?r:""),c=n!=null&&n.dense?16:12;return oe.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:ke(ke(ke(ke(ke({},a&&{fontSize:a}),f&&{"--rli-animation-duration":f}),u&&{"--rli-animation-function":u}),g),l),role:"status","aria-live":"polite","aria-label":"Loading"},oe.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:c},function(p,m){return oe.createElement("span",{key:Gh(),className:"rli-d-i-b spoke",style:Iy(m,c,f)})})),oe.createElement(oi,{text:n==null?void 0:n.text,textColor:n==null?void 0:n.textColor}))};function Iy(n,r,o){if(r===16){var l=r-n,a=Number.parseFloat(o)/r;return{transform:"rotate(".concat(360*n/r,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((l-1)*a*-1,"s")}}}tt(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);var Ea=Array.from({length:4},function(n,r){return"--OP-annulus-dual-sectors-phase".concat(r+1,"-color")}),Ly=function(n){var r,o=ri(n==null?void 0:n.style,n==null?void 0:n.size),l=o.styles,a=o.fontSize,u=n==null?void 0:n.easing,f=ni(n==null?void 0:n.speedPlus,"1.2s").animationPeriod,g=function(p){var m={},v=Ea.length;if(p instanceof Array){for(var w=ii(p,v),k=0;k<w.length&&!(k>=4);k++)m[Ea[k]]=w[k];return m}try{if(typeof p!="string")throw new Error("Color String expected");for(var b=0;b<v;b++)m[Ea[b]]=p}catch(x){for(x instanceof Error?console.warn("[".concat(x.message,']: Received "').concat(typeof p,'" with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),b=0;b<v;b++)m[Ea[b]]=xn}return m}((r=n==null?void 0:n.color)!==null&&r!==void 0?r:""),c=n.dense?"0.45em":"";return oe.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:ke(ke(ke(ke(ke({},a&&{fontSize:a}),f&&{"--rli-animation-duration":f}),u&&{"--rli-animation-function":u}),g),l),role:"status","aria-live":"polite","aria-label":"Loading"},oe.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},oe.createElement("span",{className:"rli-d-i-b annulus-sectors",style:ke({},c&&{borderWidth:c})}),oe.createElement(oi,{className:"OP-annulus-dual-sectors-text",text:n==null?void 0:n.text,textColor:n==null?void 0:n.textColor})))};tt(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);var $o=Array.from({length:4},function(n,r){return["--OP-annulus-track-phase".concat(r+1,"-color"),"--OP-annulus-sector-phase".concat(r+1,"-color")]}),Pa=function(n){return n===void 0&&(n=1),.25*n},Dy=function(n){var r,o=ri(n==null?void 0:n.style,n==null?void 0:n.size),l=o.styles,a=o.fontSize,u=n==null?void 0:n.easing,f=ni(n==null?void 0:n.speedPlus,"1s").animationPeriod,g=function(p){var m={},v=$o.length;if(p instanceof Array){for(var w=ii(p,v),k=0;k<w.length&&!(k>=4);k++){var b=$o[k];try{if(!(E=te(w[k])).isValid())throw new Error("Invalid Color: ".concat(E.getOriginalInput()));var x=E.setAlpha(Pa(E.getAlpha())).toRgbString(),S=w[k];m[b[0]]=x,m[b[1]]=S}catch{S=xn,x=(E=te(xn)).setAlpha(Pa(E.getAlpha())).toRgbString(),m[b[0]]=x,m[b[1]]=S}}return m}try{var E=te(p);if(typeof p!="string")throw new Error("Color String expected");if(!E.isValid())throw new Error("Invalid Color: ".concat(E.getOriginalInput()));S=p,x=E.setAlpha(Pa(E.getAlpha())).toRgbString();for(var R=0;R<v;R++)m[(b=$o[R])[0]]=x,m[b[1]]=S}catch(T){for(T instanceof Error?console.warn("[".concat(T.message,']: Received "').concat(typeof p,'" with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),S=xn,x=(E=te(xn)).setAlpha(Pa(E.getAlpha())).toRgbString(),R=0;R<$o.length;R++)m[(b=$o[R])[0]]=x,m[b[1]]=S}return m}((r=n==null?void 0:n.color)!==null&&r!==void 0?r:""),c=n.dense?"0.45em":"";return oe.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:ke(ke(ke(ke(ke({},a&&{fontSize:a}),f&&{"--rli-animation-duration":f}),u&&{"--rli-animation-function":u}),g),l),role:"status","aria-live":"polite","aria-label":"Loading"},oe.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},oe.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:ke({},c&&{borderWidth:c})}),oe.createElement(oi,{className:"OP-annulus-sector-text",text:n==null?void 0:n.text,textColor:n==null?void 0:n.textColor})))},al=function(n){var r=Object(n).variant,o=r===void 0?"disc":r;return o==="dotted"?oe.createElement(My,ke({},n)):o==="spokes"?oe.createElement(Ny,ke({},n)):o==="disc"?oe.createElement(Ty,ke({},n)):o==="split-disc"?oe.createElement(Ly,ke({},n)):o==="track-disc"?oe.createElement(Dy,ke({},n)):null};tt(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(n,r){return"--four-square-phase".concat(r+1,"-color")});tt(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(n,r){return"--mosaic-phase".concat(r+1,"-color")});tt(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(n,r){return"--riple-phase".concat(r+1,"-color")});tt(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(n,r){return"--TD-pulsate-phase".concat(r+1,"-color")});tt(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(n,r){return"--TD-brick-stack-phase".concat(r+1,"-color")});tt(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(n,r){return"--TD-bob-phase".concat(r+1,"-color")});tt(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(n,r){return"--TD-bounce-phase".concat(r+1,"-color")});tt(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(n,r){return"--shape-phase".concat(r+1,"-color")});tt(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(n,r){return"--trophySpin-phase".concat(r+1,"-color")});tt(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(n,r){return"--slab-phase".concat(r+1,"-color")});tt(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(n,r){return"--life-line-phase".concat(r+1,"-color")});function Xh(n,r){return function(){return n.apply(r,arguments)}}const{toString:Ay}=Object.prototype,{getPrototypeOf:ic}=Object,ll=(n=>r=>{const o=Ay.call(r);return n[o]||(n[o]=o.slice(8,-1).toLowerCase())})(Object.create(null)),Xt=n=>(n=n.toLowerCase(),r=>ll(r)===n),sl=n=>r=>typeof r===n,{isArray:Qr}=Array,Ko=sl("undefined");function zy(n){return n!==null&&!Ko(n)&&n.constructor!==null&&!Ko(n.constructor)&&Nt(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Jh=Xt("ArrayBuffer");function Fy(n){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(n):r=n&&n.buffer&&Jh(n.buffer),r}const jy=sl("string"),Nt=sl("function"),Zh=sl("number"),ul=n=>n!==null&&typeof n=="object",Vy=n=>n===!0||n===!1,La=n=>{if(ll(n)!=="object")return!1;const r=ic(n);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},$y=Xt("Date"),By=Xt("File"),Uy=Xt("Blob"),Hy=Xt("FileList"),qy=n=>ul(n)&&Nt(n.pipe),Wy=n=>{let r;return n&&(typeof FormData=="function"&&n instanceof FormData||Nt(n.append)&&((r=ll(n))==="formdata"||r==="object"&&Nt(n.toString)&&n.toString()==="[object FormData]"))},Qy=Xt("URLSearchParams"),[Ky,Yy,Gy,Xy]=["ReadableStream","Request","Response","Headers"].map(Xt),Jy=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ai(n,r,{allOwnKeys:o=!1}={}){if(n===null||typeof n>"u")return;let l,a;if(typeof n!="object"&&(n=[n]),Qr(n))for(l=0,a=n.length;l<a;l++)r.call(null,n[l],l,n);else{const u=o?Object.getOwnPropertyNames(n):Object.keys(n),f=u.length;let g;for(l=0;l<f;l++)g=u[l],r.call(null,n[g],g,n)}}function em(n,r){r=r.toLowerCase();const o=Object.keys(n);let l=o.length,a;for(;l-- >0;)if(a=o[l],r===a.toLowerCase())return a;return null}const sr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,tm=n=>!Ko(n)&&n!==sr;function Au(){const{caseless:n}=tm(this)&&this||{},r={},o=(l,a)=>{const u=n&&em(r,a)||a;La(r[u])&&La(l)?r[u]=Au(r[u],l):La(l)?r[u]=Au({},l):Qr(l)?r[u]=l.slice():r[u]=l};for(let l=0,a=arguments.length;l<a;l++)arguments[l]&&ai(arguments[l],o);return r}const Zy=(n,r,o,{allOwnKeys:l}={})=>(ai(r,(a,u)=>{o&&Nt(a)?n[u]=Xh(a,o):n[u]=a},{allOwnKeys:l}),n),eb=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),tb=(n,r,o,l)=>{n.prototype=Object.create(r.prototype,l),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:r.prototype}),o&&Object.assign(n.prototype,o)},nb=(n,r,o,l)=>{let a,u,f;const g={};if(r=r||{},n==null)return r;do{for(a=Object.getOwnPropertyNames(n),u=a.length;u-- >0;)f=a[u],(!l||l(f,n,r))&&!g[f]&&(r[f]=n[f],g[f]=!0);n=o!==!1&&ic(n)}while(n&&(!o||o(n,r))&&n!==Object.prototype);return r},rb=(n,r,o)=>{n=String(n),(o===void 0||o>n.length)&&(o=n.length),o-=r.length;const l=n.indexOf(r,o);return l!==-1&&l===o},ob=n=>{if(!n)return null;if(Qr(n))return n;let r=n.length;if(!Zh(r))return null;const o=new Array(r);for(;r-- >0;)o[r]=n[r];return o},ib=(n=>r=>n&&r instanceof n)(typeof Uint8Array<"u"&&ic(Uint8Array)),ab=(n,r)=>{const l=(n&&n[Symbol.iterator]).call(n);let a;for(;(a=l.next())&&!a.done;){const u=a.value;r.call(n,u[0],u[1])}},lb=(n,r)=>{let o;const l=[];for(;(o=n.exec(r))!==null;)l.push(o);return l},sb=Xt("HTMLFormElement"),ub=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(o,l,a){return l.toUpperCase()+a}),zp=(({hasOwnProperty:n})=>(r,o)=>n.call(r,o))(Object.prototype),cb=Xt("RegExp"),nm=(n,r)=>{const o=Object.getOwnPropertyDescriptors(n),l={};ai(o,(a,u)=>{let f;(f=r(a,u,n))!==!1&&(l[u]=f||a)}),Object.defineProperties(n,l)},db=n=>{nm(n,(r,o)=>{if(Nt(n)&&["arguments","caller","callee"].indexOf(o)!==-1)return!1;const l=n[o];if(Nt(l)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+o+"'")})}})},fb=(n,r)=>{const o={},l=a=>{a.forEach(u=>{o[u]=!0})};return Qr(n)?l(n):l(String(n).split(r)),o},pb=()=>{},hb=(n,r)=>n!=null&&Number.isFinite(n=+n)?n:r,bu="abcdefghijklmnopqrstuvwxyz",Fp="0123456789",rm={DIGIT:Fp,ALPHA:bu,ALPHA_DIGIT:bu+bu.toUpperCase()+Fp},mb=(n=16,r=rm.ALPHA_DIGIT)=>{let o="";const{length:l}=r;for(;n--;)o+=r[Math.random()*l|0];return o};function gb(n){return!!(n&&Nt(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const vb=n=>{const r=new Array(10),o=(l,a)=>{if(ul(l)){if(r.indexOf(l)>=0)return;if(!("toJSON"in l)){r[a]=l;const u=Qr(l)?[]:{};return ai(l,(f,g)=>{const c=o(f,a+1);!Ko(c)&&(u[g]=c)}),r[a]=void 0,u}}return l};return o(n,0)},yb=Xt("AsyncFunction"),bb=n=>n&&(ul(n)||Nt(n))&&Nt(n.then)&&Nt(n.catch),om=((n,r)=>n?setImmediate:r?((o,l)=>(sr.addEventListener("message",({source:a,data:u})=>{a===sr&&u===o&&l.length&&l.shift()()},!1),a=>{l.push(a),sr.postMessage(o,"*")}))(`axios@${Math.random()}`,[]):o=>setTimeout(o))(typeof setImmediate=="function",Nt(sr.postMessage)),xb=typeof queueMicrotask<"u"?queueMicrotask.bind(sr):typeof process<"u"&&process.nextTick||om,z={isArray:Qr,isArrayBuffer:Jh,isBuffer:zy,isFormData:Wy,isArrayBufferView:Fy,isString:jy,isNumber:Zh,isBoolean:Vy,isObject:ul,isPlainObject:La,isReadableStream:Ky,isRequest:Yy,isResponse:Gy,isHeaders:Xy,isUndefined:Ko,isDate:$y,isFile:By,isBlob:Uy,isRegExp:cb,isFunction:Nt,isStream:qy,isURLSearchParams:Qy,isTypedArray:ib,isFileList:Hy,forEach:ai,merge:Au,extend:Zy,trim:Jy,stripBOM:eb,inherits:tb,toFlatObject:nb,kindOf:ll,kindOfTest:Xt,endsWith:rb,toArray:ob,forEachEntry:ab,matchAll:lb,isHTMLForm:sb,hasOwnProperty:zp,hasOwnProp:zp,reduceDescriptors:nm,freezeMethods:db,toObjectSet:fb,toCamelCase:ub,noop:pb,toFiniteNumber:hb,findKey:em,global:sr,isContextDefined:tm,ALPHABET:rm,generateString:mb,isSpecCompliantForm:gb,toJSONObject:vb,isAsyncFn:yb,isThenable:bb,setImmediate:om,asap:xb};function pe(n,r,o,l,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",r&&(this.code=r),o&&(this.config=o),l&&(this.request=l),a&&(this.response=a,this.status=a.status?a.status:null)}z.inherits(pe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:z.toJSONObject(this.config),code:this.code,status:this.status}}});const im=pe.prototype,am={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{am[n]={value:n}});Object.defineProperties(pe,am);Object.defineProperty(im,"isAxiosError",{value:!0});pe.from=(n,r,o,l,a,u)=>{const f=Object.create(im);return z.toFlatObject(n,f,function(c){return c!==Error.prototype},g=>g!=="isAxiosError"),pe.call(f,n.message,r,o,l,a),f.cause=n,f.name=n.name,u&&Object.assign(f,u),f};const wb=null;function zu(n){return z.isPlainObject(n)||z.isArray(n)}function lm(n){return z.endsWith(n,"[]")?n.slice(0,-2):n}function jp(n,r,o){return n?n.concat(r).map(function(a,u){return a=lm(a),!o&&u?"["+a+"]":a}).join(o?".":""):r}function Sb(n){return z.isArray(n)&&!n.some(zu)}const kb=z.toFlatObject(z,{},null,function(r){return/^is[A-Z]/.test(r)});function cl(n,r,o){if(!z.isObject(n))throw new TypeError("target must be an object");r=r||new FormData,o=z.toFlatObject(o,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,S){return!z.isUndefined(S[x])});const l=o.metaTokens,a=o.visitor||m,u=o.dots,f=o.indexes,c=(o.Blob||typeof Blob<"u"&&Blob)&&z.isSpecCompliantForm(r);if(!z.isFunction(a))throw new TypeError("visitor must be a function");function p(b){if(b===null)return"";if(z.isDate(b))return b.toISOString();if(!c&&z.isBlob(b))throw new pe("Blob is not supported. Use a Buffer instead.");return z.isArrayBuffer(b)||z.isTypedArray(b)?c&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function m(b,x,S){let E=b;if(b&&!S&&typeof b=="object"){if(z.endsWith(x,"{}"))x=l?x:x.slice(0,-2),b=JSON.stringify(b);else if(z.isArray(b)&&Sb(b)||(z.isFileList(b)||z.endsWith(x,"[]"))&&(E=z.toArray(b)))return x=lm(x),E.forEach(function(T,F){!(z.isUndefined(T)||T===null)&&r.append(f===!0?jp([x],F,u):f===null?x:x+"[]",p(T))}),!1}return zu(b)?!0:(r.append(jp(S,x,u),p(b)),!1)}const v=[],w=Object.assign(kb,{defaultVisitor:m,convertValue:p,isVisitable:zu});function k(b,x){if(!z.isUndefined(b)){if(v.indexOf(b)!==-1)throw Error("Circular reference detected in "+x.join("."));v.push(b),z.forEach(b,function(E,R){(!(z.isUndefined(E)||E===null)&&a.call(r,E,z.isString(R)?R.trim():R,x,w))===!0&&k(E,x?x.concat(R):[R])}),v.pop()}}if(!z.isObject(n))throw new TypeError("data must be an object");return k(n),r}function Vp(n){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(l){return r[l]})}function ac(n,r){this._pairs=[],n&&cl(n,this,r)}const sm=ac.prototype;sm.append=function(r,o){this._pairs.push([r,o])};sm.toString=function(r){const o=r?function(l){return r.call(this,l,Vp)}:Vp;return this._pairs.map(function(a){return o(a[0])+"="+o(a[1])},"").join("&")};function Cb(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function um(n,r,o){if(!r)return n;const l=o&&o.encode||Cb;z.isFunction(o)&&(o={serialize:o});const a=o&&o.serialize;let u;if(a?u=a(r,o):u=z.isURLSearchParams(r)?r.toString():new ac(r,o).toString(l),u){const f=n.indexOf("#");f!==-1&&(n=n.slice(0,f)),n+=(n.indexOf("?")===-1?"?":"&")+u}return n}class $p{constructor(){this.handlers=[]}use(r,o,l){return this.handlers.push({fulfilled:r,rejected:o,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){z.forEach(this.handlers,function(l){l!==null&&r(l)})}}const cm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Eb=typeof URLSearchParams<"u"?URLSearchParams:ac,Pb=typeof FormData<"u"?FormData:null,Ob=typeof Blob<"u"?Blob:null,Rb={isBrowser:!0,classes:{URLSearchParams:Eb,FormData:Pb,Blob:Ob},protocols:["http","https","file","blob","url","data"]},lc=typeof window<"u"&&typeof document<"u",Fu=typeof navigator=="object"&&navigator||void 0,_b=lc&&(!Fu||["ReactNative","NativeScript","NS"].indexOf(Fu.product)<0),Tb=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Mb=lc&&window.location.href||"http://localhost",Nb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:lc,hasStandardBrowserEnv:_b,hasStandardBrowserWebWorkerEnv:Tb,navigator:Fu,origin:Mb},Symbol.toStringTag,{value:"Module"})),ht={...Nb,...Rb};function Ib(n,r){return cl(n,new ht.classes.URLSearchParams,Object.assign({visitor:function(o,l,a,u){return ht.isNode&&z.isBuffer(o)?(this.append(l,o.toString("base64")),!1):u.defaultVisitor.apply(this,arguments)}},r))}function Lb(n){return z.matchAll(/\w+|\[(\w*)]/g,n).map(r=>r[0]==="[]"?"":r[1]||r[0])}function Db(n){const r={},o=Object.keys(n);let l;const a=o.length;let u;for(l=0;l<a;l++)u=o[l],r[u]=n[u];return r}function dm(n){function r(o,l,a,u){let f=o[u++];if(f==="__proto__")return!0;const g=Number.isFinite(+f),c=u>=o.length;return f=!f&&z.isArray(a)?a.length:f,c?(z.hasOwnProp(a,f)?a[f]=[a[f],l]:a[f]=l,!g):((!a[f]||!z.isObject(a[f]))&&(a[f]=[]),r(o,l,a[f],u)&&z.isArray(a[f])&&(a[f]=Db(a[f])),!g)}if(z.isFormData(n)&&z.isFunction(n.entries)){const o={};return z.forEachEntry(n,(l,a)=>{r(Lb(l),a,o,0)}),o}return null}function Ab(n,r,o){if(z.isString(n))try{return(r||JSON.parse)(n),z.trim(n)}catch(l){if(l.name!=="SyntaxError")throw l}return(o||JSON.stringify)(n)}const li={transitional:cm,adapter:["xhr","http","fetch"],transformRequest:[function(r,o){const l=o.getContentType()||"",a=l.indexOf("application/json")>-1,u=z.isObject(r);if(u&&z.isHTMLForm(r)&&(r=new FormData(r)),z.isFormData(r))return a?JSON.stringify(dm(r)):r;if(z.isArrayBuffer(r)||z.isBuffer(r)||z.isStream(r)||z.isFile(r)||z.isBlob(r)||z.isReadableStream(r))return r;if(z.isArrayBufferView(r))return r.buffer;if(z.isURLSearchParams(r))return o.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let g;if(u){if(l.indexOf("application/x-www-form-urlencoded")>-1)return Ib(r,this.formSerializer).toString();if((g=z.isFileList(r))||l.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return cl(g?{"files[]":r}:r,c&&new c,this.formSerializer)}}return u||a?(o.setContentType("application/json",!1),Ab(r)):r}],transformResponse:[function(r){const o=this.transitional||li.transitional,l=o&&o.forcedJSONParsing,a=this.responseType==="json";if(z.isResponse(r)||z.isReadableStream(r))return r;if(r&&z.isString(r)&&(l&&!this.responseType||a)){const f=!(o&&o.silentJSONParsing)&&a;try{return JSON.parse(r)}catch(g){if(f)throw g.name==="SyntaxError"?pe.from(g,pe.ERR_BAD_RESPONSE,this,null,this.response):g}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ht.classes.FormData,Blob:ht.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};z.forEach(["delete","get","head","post","put","patch"],n=>{li.headers[n]={}});const zb=z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Fb=n=>{const r={};let o,l,a;return n&&n.split(`
`).forEach(function(f){a=f.indexOf(":"),o=f.substring(0,a).trim().toLowerCase(),l=f.substring(a+1).trim(),!(!o||r[o]&&zb[o])&&(o==="set-cookie"?r[o]?r[o].push(l):r[o]=[l]:r[o]=r[o]?r[o]+", "+l:l)}),r},Bp=Symbol("internals");function Bo(n){return n&&String(n).trim().toLowerCase()}function Da(n){return n===!1||n==null?n:z.isArray(n)?n.map(Da):String(n)}function jb(n){const r=Object.create(null),o=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=o.exec(n);)r[l[1]]=l[2];return r}const Vb=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function xu(n,r,o,l,a){if(z.isFunction(l))return l.call(this,r,o);if(a&&(r=o),!!z.isString(r)){if(z.isString(l))return r.indexOf(l)!==-1;if(z.isRegExp(l))return l.test(r)}}function $b(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,o,l)=>o.toUpperCase()+l)}function Bb(n,r){const o=z.toCamelCase(" "+r);["get","set","has"].forEach(l=>{Object.defineProperty(n,l+o,{value:function(a,u,f){return this[l].call(this,r,a,u,f)},configurable:!0})})}class Ct{constructor(r){r&&this.set(r)}set(r,o,l){const a=this;function u(g,c,p){const m=Bo(c);if(!m)throw new Error("header name must be a non-empty string");const v=z.findKey(a,m);(!v||a[v]===void 0||p===!0||p===void 0&&a[v]!==!1)&&(a[v||c]=Da(g))}const f=(g,c)=>z.forEach(g,(p,m)=>u(p,m,c));if(z.isPlainObject(r)||r instanceof this.constructor)f(r,o);else if(z.isString(r)&&(r=r.trim())&&!Vb(r))f(Fb(r),o);else if(z.isHeaders(r))for(const[g,c]of r.entries())u(c,g,l);else r!=null&&u(o,r,l);return this}get(r,o){if(r=Bo(r),r){const l=z.findKey(this,r);if(l){const a=this[l];if(!o)return a;if(o===!0)return jb(a);if(z.isFunction(o))return o.call(this,a,l);if(z.isRegExp(o))return o.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,o){if(r=Bo(r),r){const l=z.findKey(this,r);return!!(l&&this[l]!==void 0&&(!o||xu(this,this[l],l,o)))}return!1}delete(r,o){const l=this;let a=!1;function u(f){if(f=Bo(f),f){const g=z.findKey(l,f);g&&(!o||xu(l,l[g],g,o))&&(delete l[g],a=!0)}}return z.isArray(r)?r.forEach(u):u(r),a}clear(r){const o=Object.keys(this);let l=o.length,a=!1;for(;l--;){const u=o[l];(!r||xu(this,this[u],u,r,!0))&&(delete this[u],a=!0)}return a}normalize(r){const o=this,l={};return z.forEach(this,(a,u)=>{const f=z.findKey(l,u);if(f){o[f]=Da(a),delete o[u];return}const g=r?$b(u):String(u).trim();g!==u&&delete o[u],o[g]=Da(a),l[g]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const o=Object.create(null);return z.forEach(this,(l,a)=>{l!=null&&l!==!1&&(o[a]=r&&z.isArray(l)?l.join(", "):l)}),o}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,o])=>r+": "+o).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...o){const l=new this(r);return o.forEach(a=>l.set(a)),l}static accessor(r){const l=(this[Bp]=this[Bp]={accessors:{}}).accessors,a=this.prototype;function u(f){const g=Bo(f);l[g]||(Bb(a,f),l[g]=!0)}return z.isArray(r)?r.forEach(u):u(r),this}}Ct.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);z.reduceDescriptors(Ct.prototype,({value:n},r)=>{let o=r[0].toUpperCase()+r.slice(1);return{get:()=>n,set(l){this[o]=l}}});z.freezeMethods(Ct);function wu(n,r){const o=this||li,l=r||o,a=Ct.from(l.headers);let u=l.data;return z.forEach(n,function(g){u=g.call(o,u,a.normalize(),r?r.status:void 0)}),a.normalize(),u}function fm(n){return!!(n&&n.__CANCEL__)}function Kr(n,r,o){pe.call(this,n??"canceled",pe.ERR_CANCELED,r,o),this.name="CanceledError"}z.inherits(Kr,pe,{__CANCEL__:!0});function pm(n,r,o){const l=o.config.validateStatus;!o.status||!l||l(o.status)?n(o):r(new pe("Request failed with status code "+o.status,[pe.ERR_BAD_REQUEST,pe.ERR_BAD_RESPONSE][Math.floor(o.status/100)-4],o.config,o.request,o))}function Ub(n){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return r&&r[1]||""}function Hb(n,r){n=n||10;const o=new Array(n),l=new Array(n);let a=0,u=0,f;return r=r!==void 0?r:1e3,function(c){const p=Date.now(),m=l[u];f||(f=p),o[a]=c,l[a]=p;let v=u,w=0;for(;v!==a;)w+=o[v++],v=v%n;if(a=(a+1)%n,a===u&&(u=(u+1)%n),p-f<r)return;const k=m&&p-m;return k?Math.round(w*1e3/k):void 0}}function qb(n,r){let o=0,l=1e3/r,a,u;const f=(p,m=Date.now())=>{o=m,a=null,u&&(clearTimeout(u),u=null),n.apply(null,p)};return[(...p)=>{const m=Date.now(),v=m-o;v>=l?f(p,m):(a=p,u||(u=setTimeout(()=>{u=null,f(a)},l-v)))},()=>a&&f(a)]}const qa=(n,r,o=3)=>{let l=0;const a=Hb(50,250);return qb(u=>{const f=u.loaded,g=u.lengthComputable?u.total:void 0,c=f-l,p=a(c),m=f<=g;l=f;const v={loaded:f,total:g,progress:g?f/g:void 0,bytes:c,rate:p||void 0,estimated:p&&g&&m?(g-f)/p:void 0,event:u,lengthComputable:g!=null,[r?"download":"upload"]:!0};n(v)},o)},Up=(n,r)=>{const o=n!=null;return[l=>r[0]({lengthComputable:o,total:n,loaded:l}),r[1]]},Hp=n=>(...r)=>z.asap(()=>n(...r)),Wb=ht.hasStandardBrowserEnv?((n,r)=>o=>(o=new URL(o,ht.origin),n.protocol===o.protocol&&n.host===o.host&&(r||n.port===o.port)))(new URL(ht.origin),ht.navigator&&/(msie|trident)/i.test(ht.navigator.userAgent)):()=>!0,Qb=ht.hasStandardBrowserEnv?{write(n,r,o,l,a,u){const f=[n+"="+encodeURIComponent(r)];z.isNumber(o)&&f.push("expires="+new Date(o).toGMTString()),z.isString(l)&&f.push("path="+l),z.isString(a)&&f.push("domain="+a),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Kb(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Yb(n,r){return r?n.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):n}function hm(n,r){return n&&!Kb(r)?Yb(n,r):r}const qp=n=>n instanceof Ct?{...n}:n;function cr(n,r){r=r||{};const o={};function l(p,m,v,w){return z.isPlainObject(p)&&z.isPlainObject(m)?z.merge.call({caseless:w},p,m):z.isPlainObject(m)?z.merge({},m):z.isArray(m)?m.slice():m}function a(p,m,v,w){if(z.isUndefined(m)){if(!z.isUndefined(p))return l(void 0,p,v,w)}else return l(p,m,v,w)}function u(p,m){if(!z.isUndefined(m))return l(void 0,m)}function f(p,m){if(z.isUndefined(m)){if(!z.isUndefined(p))return l(void 0,p)}else return l(void 0,m)}function g(p,m,v){if(v in r)return l(p,m);if(v in n)return l(void 0,p)}const c={url:u,method:u,data:u,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:g,headers:(p,m,v)=>a(qp(p),qp(m),v,!0)};return z.forEach(Object.keys(Object.assign({},n,r)),function(m){const v=c[m]||a,w=v(n[m],r[m],m);z.isUndefined(w)&&v!==g||(o[m]=w)}),o}const mm=n=>{const r=cr({},n);let{data:o,withXSRFToken:l,xsrfHeaderName:a,xsrfCookieName:u,headers:f,auth:g}=r;r.headers=f=Ct.from(f),r.url=um(hm(r.baseURL,r.url),n.params,n.paramsSerializer),g&&f.set("Authorization","Basic "+btoa((g.username||"")+":"+(g.password?unescape(encodeURIComponent(g.password)):"")));let c;if(z.isFormData(o)){if(ht.hasStandardBrowserEnv||ht.hasStandardBrowserWebWorkerEnv)f.setContentType(void 0);else if((c=f.getContentType())!==!1){const[p,...m]=c?c.split(";").map(v=>v.trim()).filter(Boolean):[];f.setContentType([p||"multipart/form-data",...m].join("; "))}}if(ht.hasStandardBrowserEnv&&(l&&z.isFunction(l)&&(l=l(r)),l||l!==!1&&Wb(r.url))){const p=a&&u&&Qb.read(u);p&&f.set(a,p)}return r},Gb=typeof XMLHttpRequest<"u",Xb=Gb&&function(n){return new Promise(function(o,l){const a=mm(n);let u=a.data;const f=Ct.from(a.headers).normalize();let{responseType:g,onUploadProgress:c,onDownloadProgress:p}=a,m,v,w,k,b;function x(){k&&k(),b&&b(),a.cancelToken&&a.cancelToken.unsubscribe(m),a.signal&&a.signal.removeEventListener("abort",m)}let S=new XMLHttpRequest;S.open(a.method.toUpperCase(),a.url,!0),S.timeout=a.timeout;function E(){if(!S)return;const T=Ct.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),N={data:!g||g==="text"||g==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:T,config:n,request:S};pm(function(B){o(B),x()},function(B){l(B),x()},N),S=null}"onloadend"in S?S.onloadend=E:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(E)},S.onabort=function(){S&&(l(new pe("Request aborted",pe.ECONNABORTED,n,S)),S=null)},S.onerror=function(){l(new pe("Network Error",pe.ERR_NETWORK,n,S)),S=null},S.ontimeout=function(){let F=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const N=a.transitional||cm;a.timeoutErrorMessage&&(F=a.timeoutErrorMessage),l(new pe(F,N.clarifyTimeoutError?pe.ETIMEDOUT:pe.ECONNABORTED,n,S)),S=null},u===void 0&&f.setContentType(null),"setRequestHeader"in S&&z.forEach(f.toJSON(),function(F,N){S.setRequestHeader(N,F)}),z.isUndefined(a.withCredentials)||(S.withCredentials=!!a.withCredentials),g&&g!=="json"&&(S.responseType=a.responseType),p&&([w,b]=qa(p,!0),S.addEventListener("progress",w)),c&&S.upload&&([v,k]=qa(c),S.upload.addEventListener("progress",v),S.upload.addEventListener("loadend",k)),(a.cancelToken||a.signal)&&(m=T=>{S&&(l(!T||T.type?new Kr(null,n,S):T),S.abort(),S=null)},a.cancelToken&&a.cancelToken.subscribe(m),a.signal&&(a.signal.aborted?m():a.signal.addEventListener("abort",m)));const R=Ub(a.url);if(R&&ht.protocols.indexOf(R)===-1){l(new pe("Unsupported protocol "+R+":",pe.ERR_BAD_REQUEST,n));return}S.send(u||null)})},Jb=(n,r)=>{const{length:o}=n=n?n.filter(Boolean):[];if(r||o){let l=new AbortController,a;const u=function(p){if(!a){a=!0,g();const m=p instanceof Error?p:this.reason;l.abort(m instanceof pe?m:new Kr(m instanceof Error?m.message:m))}};let f=r&&setTimeout(()=>{f=null,u(new pe(`timeout ${r} of ms exceeded`,pe.ETIMEDOUT))},r);const g=()=>{n&&(f&&clearTimeout(f),f=null,n.forEach(p=>{p.unsubscribe?p.unsubscribe(u):p.removeEventListener("abort",u)}),n=null)};n.forEach(p=>p.addEventListener("abort",u));const{signal:c}=l;return c.unsubscribe=()=>z.asap(g),c}},Zb=function*(n,r){let o=n.byteLength;if(o<r){yield n;return}let l=0,a;for(;l<o;)a=l+r,yield n.slice(l,a),l=a},ex=async function*(n,r){for await(const o of tx(n))yield*Zb(o,r)},tx=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const r=n.getReader();try{for(;;){const{done:o,value:l}=await r.read();if(o)break;yield l}}finally{await r.cancel()}},Wp=(n,r,o,l)=>{const a=ex(n,r);let u=0,f,g=c=>{f||(f=!0,l&&l(c))};return new ReadableStream({async pull(c){try{const{done:p,value:m}=await a.next();if(p){g(),c.close();return}let v=m.byteLength;if(o){let w=u+=v;o(w)}c.enqueue(new Uint8Array(m))}catch(p){throw g(p),p}},cancel(c){return g(c),a.return()}},{highWaterMark:2})},dl=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",gm=dl&&typeof ReadableStream=="function",nx=dl&&(typeof TextEncoder=="function"?(n=>r=>n.encode(r))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),vm=(n,...r)=>{try{return!!n(...r)}catch{return!1}},rx=gm&&vm(()=>{let n=!1;const r=new Request(ht.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!r}),Qp=64*1024,ju=gm&&vm(()=>z.isReadableStream(new Response("").body)),Wa={stream:ju&&(n=>n.body)};dl&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(r=>{!Wa[r]&&(Wa[r]=z.isFunction(n[r])?o=>o[r]():(o,l)=>{throw new pe(`Response type '${r}' is not supported`,pe.ERR_NOT_SUPPORT,l)})})})(new Response);const ox=async n=>{if(n==null)return 0;if(z.isBlob(n))return n.size;if(z.isSpecCompliantForm(n))return(await new Request(ht.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(z.isArrayBufferView(n)||z.isArrayBuffer(n))return n.byteLength;if(z.isURLSearchParams(n)&&(n=n+""),z.isString(n))return(await nx(n)).byteLength},ix=async(n,r)=>{const o=z.toFiniteNumber(n.getContentLength());return o??ox(r)},ax=dl&&(async n=>{let{url:r,method:o,data:l,signal:a,cancelToken:u,timeout:f,onDownloadProgress:g,onUploadProgress:c,responseType:p,headers:m,withCredentials:v="same-origin",fetchOptions:w}=mm(n);p=p?(p+"").toLowerCase():"text";let k=Jb([a,u&&u.toAbortSignal()],f),b;const x=k&&k.unsubscribe&&(()=>{k.unsubscribe()});let S;try{if(c&&rx&&o!=="get"&&o!=="head"&&(S=await ix(m,l))!==0){let N=new Request(r,{method:"POST",body:l,duplex:"half"}),$;if(z.isFormData(l)&&($=N.headers.get("content-type"))&&m.setContentType($),N.body){const[B,Q]=Up(S,qa(Hp(c)));l=Wp(N.body,Qp,B,Q)}}z.isString(v)||(v=v?"include":"omit");const E="credentials"in Request.prototype;b=new Request(r,{...w,signal:k,method:o.toUpperCase(),headers:m.normalize().toJSON(),body:l,duplex:"half",credentials:E?v:void 0});let R=await fetch(b);const T=ju&&(p==="stream"||p==="response");if(ju&&(g||T&&x)){const N={};["status","statusText","headers"].forEach(X=>{N[X]=R[X]});const $=z.toFiniteNumber(R.headers.get("content-length")),[B,Q]=g&&Up($,qa(Hp(g),!0))||[];R=new Response(Wp(R.body,Qp,B,()=>{Q&&Q(),x&&x()}),N)}p=p||"text";let F=await Wa[z.findKey(Wa,p)||"text"](R,n);return!T&&x&&x(),await new Promise((N,$)=>{pm(N,$,{data:F,headers:Ct.from(R.headers),status:R.status,statusText:R.statusText,config:n,request:b})})}catch(E){throw x&&x(),E&&E.name==="TypeError"&&/fetch/i.test(E.message)?Object.assign(new pe("Network Error",pe.ERR_NETWORK,n,b),{cause:E.cause||E}):pe.from(E,E&&E.code,n,b)}}),Vu={http:wb,xhr:Xb,fetch:ax};z.forEach(Vu,(n,r)=>{if(n){try{Object.defineProperty(n,"name",{value:r})}catch{}Object.defineProperty(n,"adapterName",{value:r})}});const Kp=n=>`- ${n}`,lx=n=>z.isFunction(n)||n===null||n===!1,ym={getAdapter:n=>{n=z.isArray(n)?n:[n];const{length:r}=n;let o,l;const a={};for(let u=0;u<r;u++){o=n[u];let f;if(l=o,!lx(o)&&(l=Vu[(f=String(o)).toLowerCase()],l===void 0))throw new pe(`Unknown adapter '${f}'`);if(l)break;a[f||"#"+u]=l}if(!l){const u=Object.entries(a).map(([g,c])=>`adapter ${g} `+(c===!1?"is not supported by the environment":"is not available in the build"));let f=r?u.length>1?`since :
`+u.map(Kp).join(`
`):" "+Kp(u[0]):"as no adapter specified";throw new pe("There is no suitable adapter to dispatch the request "+f,"ERR_NOT_SUPPORT")}return l},adapters:Vu};function Su(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Kr(null,n)}function Yp(n){return Su(n),n.headers=Ct.from(n.headers),n.data=wu.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),ym.getAdapter(n.adapter||li.adapter)(n).then(function(l){return Su(n),l.data=wu.call(n,n.transformResponse,l),l.headers=Ct.from(l.headers),l},function(l){return fm(l)||(Su(n),l&&l.response&&(l.response.data=wu.call(n,n.transformResponse,l.response),l.response.headers=Ct.from(l.response.headers))),Promise.reject(l)})}const bm="1.7.9",fl={};["object","boolean","number","function","string","symbol"].forEach((n,r)=>{fl[n]=function(l){return typeof l===n||"a"+(r<1?"n ":" ")+n}});const Gp={};fl.transitional=function(r,o,l){function a(u,f){return"[Axios v"+bm+"] Transitional option '"+u+"'"+f+(l?". "+l:"")}return(u,f,g)=>{if(r===!1)throw new pe(a(f," has been removed"+(o?" in "+o:"")),pe.ERR_DEPRECATED);return o&&!Gp[f]&&(Gp[f]=!0,console.warn(a(f," has been deprecated since v"+o+" and will be removed in the near future"))),r?r(u,f,g):!0}};fl.spelling=function(r){return(o,l)=>(console.warn(`${l} is likely a misspelling of ${r}`),!0)};function sx(n,r,o){if(typeof n!="object")throw new pe("options must be an object",pe.ERR_BAD_OPTION_VALUE);const l=Object.keys(n);let a=l.length;for(;a-- >0;){const u=l[a],f=r[u];if(f){const g=n[u],c=g===void 0||f(g,u,n);if(c!==!0)throw new pe("option "+u+" must be "+c,pe.ERR_BAD_OPTION_VALUE);continue}if(o!==!0)throw new pe("Unknown option "+u,pe.ERR_BAD_OPTION)}}const Aa={assertOptions:sx,validators:fl},rn=Aa.validators;class ur{constructor(r){this.defaults=r,this.interceptors={request:new $p,response:new $p}}async request(r,o){try{return await this._request(r,o)}catch(l){if(l instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const u=a.stack?a.stack.replace(/^.+\n/,""):"";try{l.stack?u&&!String(l.stack).endsWith(u.replace(/^.+\n.+\n/,""))&&(l.stack+=`
`+u):l.stack=u}catch{}}throw l}}_request(r,o){typeof r=="string"?(o=o||{},o.url=r):o=r||{},o=cr(this.defaults,o);const{transitional:l,paramsSerializer:a,headers:u}=o;l!==void 0&&Aa.assertOptions(l,{silentJSONParsing:rn.transitional(rn.boolean),forcedJSONParsing:rn.transitional(rn.boolean),clarifyTimeoutError:rn.transitional(rn.boolean)},!1),a!=null&&(z.isFunction(a)?o.paramsSerializer={serialize:a}:Aa.assertOptions(a,{encode:rn.function,serialize:rn.function},!0)),Aa.assertOptions(o,{baseUrl:rn.spelling("baseURL"),withXsrfToken:rn.spelling("withXSRFToken")},!0),o.method=(o.method||this.defaults.method||"get").toLowerCase();let f=u&&z.merge(u.common,u[o.method]);u&&z.forEach(["delete","get","head","post","put","patch","common"],b=>{delete u[b]}),o.headers=Ct.concat(f,u);const g=[];let c=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(o)===!1||(c=c&&x.synchronous,g.unshift(x.fulfilled,x.rejected))});const p=[];this.interceptors.response.forEach(function(x){p.push(x.fulfilled,x.rejected)});let m,v=0,w;if(!c){const b=[Yp.bind(this),void 0];for(b.unshift.apply(b,g),b.push.apply(b,p),w=b.length,m=Promise.resolve(o);v<w;)m=m.then(b[v++],b[v++]);return m}w=g.length;let k=o;for(v=0;v<w;){const b=g[v++],x=g[v++];try{k=b(k)}catch(S){x.call(this,S);break}}try{m=Yp.call(this,k)}catch(b){return Promise.reject(b)}for(v=0,w=p.length;v<w;)m=m.then(p[v++],p[v++]);return m}getUri(r){r=cr(this.defaults,r);const o=hm(r.baseURL,r.url);return um(o,r.params,r.paramsSerializer)}}z.forEach(["delete","get","head","options"],function(r){ur.prototype[r]=function(o,l){return this.request(cr(l||{},{method:r,url:o,data:(l||{}).data}))}});z.forEach(["post","put","patch"],function(r){function o(l){return function(u,f,g){return this.request(cr(g||{},{method:r,headers:l?{"Content-Type":"multipart/form-data"}:{},url:u,data:f}))}}ur.prototype[r]=o(),ur.prototype[r+"Form"]=o(!0)});class sc{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let o;this.promise=new Promise(function(u){o=u});const l=this;this.promise.then(a=>{if(!l._listeners)return;let u=l._listeners.length;for(;u-- >0;)l._listeners[u](a);l._listeners=null}),this.promise.then=a=>{let u;const f=new Promise(g=>{l.subscribe(g),u=g}).then(a);return f.cancel=function(){l.unsubscribe(u)},f},r(function(u,f,g){l.reason||(l.reason=new Kr(u,f,g),o(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const o=this._listeners.indexOf(r);o!==-1&&this._listeners.splice(o,1)}toAbortSignal(){const r=new AbortController,o=l=>{r.abort(l)};return this.subscribe(o),r.signal.unsubscribe=()=>this.unsubscribe(o),r.signal}static source(){let r;return{token:new sc(function(a){r=a}),cancel:r}}}function ux(n){return function(o){return n.apply(null,o)}}function cx(n){return z.isObject(n)&&n.isAxiosError===!0}const $u={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries($u).forEach(([n,r])=>{$u[r]=n});function xm(n){const r=new ur(n),o=Xh(ur.prototype.request,r);return z.extend(o,ur.prototype,r,{allOwnKeys:!0}),z.extend(o,r,null,{allOwnKeys:!0}),o.create=function(a){return xm(cr(n,a))},o}const Je=xm(li);Je.Axios=ur;Je.CanceledError=Kr;Je.CancelToken=sc;Je.isCancel=fm;Je.VERSION=bm;Je.toFormData=cl;Je.AxiosError=pe;Je.Cancel=Je.CanceledError;Je.all=function(r){return Promise.all(r)};Je.spread=ux;Je.isAxiosError=cx;Je.mergeConfig=cr;Je.AxiosHeaders=Ct;Je.formToJSON=n=>dm(z.isHTMLForm(n)?new FormData(n):n);Je.getAdapter=ym.getAdapter;Je.HttpStatusCode=$u;Je.default=Je;class pl{constructor(r){this.apiClient=Je.create({baseURL:r,timeout:3e4})}async get(r,o={}){try{return(await this.apiClient.get(r,{params:o})).data}catch(l){this.handleError(l)}}async post(r,o={}){try{return(await this.apiClient.post(r,o)).data}catch(l){this.handleError(l)}}handleError(r){throw r}}class Yt{}zo(Yt,"TEST_BASE_URL","https://run.mocky.io/"),zo(Yt,"TEST_REGISTER","v3/e45e52dc-c1c6-4009-88d0-d531530dd386"),zo(Yt,"BASE_URL","https://8bac-114-45-26-119.ngrok-free.app"),zo(Yt,"REGISTER","api/register");const dx=new pl(Yt.TEST_BASE_URL);function fx(){return I.jsx("div",{className:"loader-ann",children:I.jsx(al,{variant:"spokes",color:"#f10a0a",size:"medium",text:"",textColor:""})})}function px(){const[n,r]=O.useState(!1),[o,l]=O.useState({announcement:""}),a=f=>{const{name:g,value:c}=f.target;l({...o,[g]:c})},u=async f=>{f.preventDefault(),r(!0);const g=await dx.post(Yt.TEST_REGISTER,o);console.log("response: ",g);try{g.code==200?alert("Registration successful"):(console.log("code: ",g.code),alert(g.error_msg))}catch{console.log("code: ",g.code),alert(g.data.error_msg)}finally{r(!1),l({announcement:""})}};return I.jsxs("div",{children:[I.jsx("h1",{children:"Announcement"}),I.jsxs("form",{className:"form-ann",onSubmit:u,children:[I.jsx("textarea",{className:"textarea-ann",type:"text",name:"announcement",value:o.announcement,onChange:a,required:"required"}),I.jsx("button",{type:"submit",className:"btn-ann",disabled:n,children:n?"Submit...":"Submit"}),n&&I.jsx(fx,{})]})]})}function hx(n){return ol({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm-19.42,94.71a8,8,0,1,1-13,9.41L184,141.61l-7.63,10.51a8,8,0,1,1-13-9.41l7.64-10.5-12.36-4a8,8,0,1,1,5-15.21L176,117V104a8,8,0,0,1,16,0v13l12.35-4a8,8,0,0,1,5,15.21l-12.36,4Zm-72,0a8,8,0,1,1-13,9.41L112,141.61l-7.63,10.51a8,8,0,1,1-13-9.41l7.64-10.5-12.36-4a8,8,0,1,1,5-15.21L104,117V104a8,8,0,0,1,16,0v13l12.35-4a8,8,0,1,1,5,15.21l-12.36,4ZM64,88v80a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"},child:[]}]})(n)}const mx=new pl(Yt.TEST_BASE_URL);function Xp({type:n,name:r,value:o,handleChange:l,required:a}){return I.jsx("div",{className:"form-login-group",children:I.jsx("input",{className:"input-login",type:n,name:r,value:o,onChange:l,required:a})})}function gx(){return I.jsx("div",{className:"loader-container",children:I.jsx(al,{variant:"spokes",color:"#f10a0a",size:"medium",text:"",textColor:""})})}function vx(){const n=ei(),[r,o]=O.useState(!1),[l,a]=O.useState({account:"",password:""}),u=g=>{const{name:c,value:p}=g.target;a({...l,[c]:p})},f=async g=>{g.preventDefault(),console.log("code: ",l),o(!0);const c=await mx.post(Yt.TEST_REGISTER,l);try{c.code==200?(alert("Registration successful"),n("/home")):(console.log("code: ",c.code),alert(c.error_msg))}catch{console.log("code: ",c.code),alert(c.data.error_msg)}finally{o(!1)}};return I.jsxs("div",{className:"login-container",children:[I.jsx("h1",{children:"Ninja Manager Login"}),I.jsx("form",{className:"form-login",onSubmit:f,children:I.jsxs("div",{children:[I.jsxs("div",{className:"form-login-edit",children:[I.jsx(cy,{style:{fontSize:"32px",color:"#555"}}),I.jsx(Xp,{type:"text",name:"account",value:l.account,handleChange:u,required:!0})]}),I.jsxs("div",{className:"form-login-edit",children:[I.jsx(hx,{style:{fontSize:"32px",color:"#555"}}),I.jsx(Xp,{type:"password",name:"password",value:l.password,handleChange:u,required:!0})]}),I.jsx("button",{type:"submit",className:"submit-login-btn",disabled:r,children:r?"Logining...":"Login"}),r&&I.jsx(gx,{})]})})]})}var yx=Object.defineProperty,Qa=Object.getOwnPropertySymbols,wm=Object.prototype.hasOwnProperty,Sm=Object.prototype.propertyIsEnumerable,Jp=(n,r,o)=>r in n?yx(n,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[r]=o,Bu=(n,r)=>{for(var o in r||(r={}))wm.call(r,o)&&Jp(n,o,r[o]);if(Qa)for(var o of Qa(r))Sm.call(r,o)&&Jp(n,o,r[o]);return n},Uu=(n,r)=>{var o={};for(var l in n)wm.call(n,l)&&r.indexOf(l)<0&&(o[l]=n[l]);if(n!=null&&Qa)for(var l of Qa(n))r.indexOf(l)<0&&Sm.call(n,l)&&(o[l]=n[l]);return o};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var dr;(n=>{const r=class Se{constructor(c,p,m,v){if(this.version=c,this.errorCorrectionLevel=p,this.modules=[],this.isFunction=[],c<Se.MIN_VERSION||c>Se.MAX_VERSION)throw new RangeError("Version value out of range");if(v<-1||v>7)throw new RangeError("Mask value out of range");this.size=c*4+17;let w=[];for(let b=0;b<this.size;b++)w.push(!1);for(let b=0;b<this.size;b++)this.modules.push(w.slice()),this.isFunction.push(w.slice());this.drawFunctionPatterns();const k=this.addEccAndInterleave(m);if(this.drawCodewords(k),v==-1){let b=1e9;for(let x=0;x<8;x++){this.applyMask(x),this.drawFormatBits(x);const S=this.getPenaltyScore();S<b&&(v=x,b=S),this.applyMask(x)}}a(0<=v&&v<=7),this.mask=v,this.applyMask(v),this.drawFormatBits(v),this.isFunction=[]}static encodeText(c,p){const m=n.QrSegment.makeSegments(c);return Se.encodeSegments(m,p)}static encodeBinary(c,p){const m=n.QrSegment.makeBytes(c);return Se.encodeSegments([m],p)}static encodeSegments(c,p,m=1,v=40,w=-1,k=!0){if(!(Se.MIN_VERSION<=m&&m<=v&&v<=Se.MAX_VERSION)||w<-1||w>7)throw new RangeError("Invalid value");let b,x;for(b=m;;b++){const T=Se.getNumDataCodewords(b,p)*8,F=f.getTotalBits(c,b);if(F<=T){x=F;break}if(b>=v)throw new RangeError("Data too long")}for(const T of[Se.Ecc.MEDIUM,Se.Ecc.QUARTILE,Se.Ecc.HIGH])k&&x<=Se.getNumDataCodewords(b,T)*8&&(p=T);let S=[];for(const T of c){o(T.mode.modeBits,4,S),o(T.numChars,T.mode.numCharCountBits(b),S);for(const F of T.getData())S.push(F)}a(S.length==x);const E=Se.getNumDataCodewords(b,p)*8;a(S.length<=E),o(0,Math.min(4,E-S.length),S),o(0,(8-S.length%8)%8,S),a(S.length%8==0);for(let T=236;S.length<E;T^=253)o(T,8,S);let R=[];for(;R.length*8<S.length;)R.push(0);return S.forEach((T,F)=>R[F>>>3]|=T<<7-(F&7)),new Se(b,p,R,w)}getModule(c,p){return 0<=c&&c<this.size&&0<=p&&p<this.size&&this.modules[p][c]}getModules(){return this.modules}drawFunctionPatterns(){for(let m=0;m<this.size;m++)this.setFunctionModule(6,m,m%2==0),this.setFunctionModule(m,6,m%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const c=this.getAlignmentPatternPositions(),p=c.length;for(let m=0;m<p;m++)for(let v=0;v<p;v++)m==0&&v==0||m==0&&v==p-1||m==p-1&&v==0||this.drawAlignmentPattern(c[m],c[v]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(c){const p=this.errorCorrectionLevel.formatBits<<3|c;let m=p;for(let w=0;w<10;w++)m=m<<1^(m>>>9)*1335;const v=(p<<10|m)^21522;a(v>>>15==0);for(let w=0;w<=5;w++)this.setFunctionModule(8,w,l(v,w));this.setFunctionModule(8,7,l(v,6)),this.setFunctionModule(8,8,l(v,7)),this.setFunctionModule(7,8,l(v,8));for(let w=9;w<15;w++)this.setFunctionModule(14-w,8,l(v,w));for(let w=0;w<8;w++)this.setFunctionModule(this.size-1-w,8,l(v,w));for(let w=8;w<15;w++)this.setFunctionModule(8,this.size-15+w,l(v,w));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let c=this.version;for(let m=0;m<12;m++)c=c<<1^(c>>>11)*7973;const p=this.version<<12|c;a(p>>>18==0);for(let m=0;m<18;m++){const v=l(p,m),w=this.size-11+m%3,k=Math.floor(m/3);this.setFunctionModule(w,k,v),this.setFunctionModule(k,w,v)}}drawFinderPattern(c,p){for(let m=-4;m<=4;m++)for(let v=-4;v<=4;v++){const w=Math.max(Math.abs(v),Math.abs(m)),k=c+v,b=p+m;0<=k&&k<this.size&&0<=b&&b<this.size&&this.setFunctionModule(k,b,w!=2&&w!=4)}}drawAlignmentPattern(c,p){for(let m=-2;m<=2;m++)for(let v=-2;v<=2;v++)this.setFunctionModule(c+v,p+m,Math.max(Math.abs(v),Math.abs(m))!=1)}setFunctionModule(c,p,m){this.modules[p][c]=m,this.isFunction[p][c]=!0}addEccAndInterleave(c){const p=this.version,m=this.errorCorrectionLevel;if(c.length!=Se.getNumDataCodewords(p,m))throw new RangeError("Invalid argument");const v=Se.NUM_ERROR_CORRECTION_BLOCKS[m.ordinal][p],w=Se.ECC_CODEWORDS_PER_BLOCK[m.ordinal][p],k=Math.floor(Se.getNumRawDataModules(p)/8),b=v-k%v,x=Math.floor(k/v);let S=[];const E=Se.reedSolomonComputeDivisor(w);for(let T=0,F=0;T<v;T++){let N=c.slice(F,F+x-w+(T<b?0:1));F+=N.length;const $=Se.reedSolomonComputeRemainder(N,E);T<b&&N.push(0),S.push(N.concat($))}let R=[];for(let T=0;T<S[0].length;T++)S.forEach((F,N)=>{(T!=x-w||N>=b)&&R.push(F[T])});return a(R.length==k),R}drawCodewords(c){if(c.length!=Math.floor(Se.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let p=0;for(let m=this.size-1;m>=1;m-=2){m==6&&(m=5);for(let v=0;v<this.size;v++)for(let w=0;w<2;w++){const k=m-w,x=(m+1&2)==0?this.size-1-v:v;!this.isFunction[x][k]&&p<c.length*8&&(this.modules[x][k]=l(c[p>>>3],7-(p&7)),p++)}}a(p==c.length*8)}applyMask(c){if(c<0||c>7)throw new RangeError("Mask value out of range");for(let p=0;p<this.size;p++)for(let m=0;m<this.size;m++){let v;switch(c){case 0:v=(m+p)%2==0;break;case 1:v=p%2==0;break;case 2:v=m%3==0;break;case 3:v=(m+p)%3==0;break;case 4:v=(Math.floor(m/3)+Math.floor(p/2))%2==0;break;case 5:v=m*p%2+m*p%3==0;break;case 6:v=(m*p%2+m*p%3)%2==0;break;case 7:v=((m+p)%2+m*p%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[p][m]&&v&&(this.modules[p][m]=!this.modules[p][m])}}getPenaltyScore(){let c=0;for(let w=0;w<this.size;w++){let k=!1,b=0,x=[0,0,0,0,0,0,0];for(let S=0;S<this.size;S++)this.modules[w][S]==k?(b++,b==5?c+=Se.PENALTY_N1:b>5&&c++):(this.finderPenaltyAddHistory(b,x),k||(c+=this.finderPenaltyCountPatterns(x)*Se.PENALTY_N3),k=this.modules[w][S],b=1);c+=this.finderPenaltyTerminateAndCount(k,b,x)*Se.PENALTY_N3}for(let w=0;w<this.size;w++){let k=!1,b=0,x=[0,0,0,0,0,0,0];for(let S=0;S<this.size;S++)this.modules[S][w]==k?(b++,b==5?c+=Se.PENALTY_N1:b>5&&c++):(this.finderPenaltyAddHistory(b,x),k||(c+=this.finderPenaltyCountPatterns(x)*Se.PENALTY_N3),k=this.modules[S][w],b=1);c+=this.finderPenaltyTerminateAndCount(k,b,x)*Se.PENALTY_N3}for(let w=0;w<this.size-1;w++)for(let k=0;k<this.size-1;k++){const b=this.modules[w][k];b==this.modules[w][k+1]&&b==this.modules[w+1][k]&&b==this.modules[w+1][k+1]&&(c+=Se.PENALTY_N2)}let p=0;for(const w of this.modules)p=w.reduce((k,b)=>k+(b?1:0),p);const m=this.size*this.size,v=Math.ceil(Math.abs(p*20-m*10)/m)-1;return a(0<=v&&v<=9),c+=v*Se.PENALTY_N4,a(0<=c&&c<=2568888),c}getAlignmentPatternPositions(){if(this.version==1)return[];{const c=Math.floor(this.version/7)+2,p=this.version==32?26:Math.ceil((this.version*4+4)/(c*2-2))*2;let m=[6];for(let v=this.size-7;m.length<c;v-=p)m.splice(1,0,v);return m}}static getNumRawDataModules(c){if(c<Se.MIN_VERSION||c>Se.MAX_VERSION)throw new RangeError("Version number out of range");let p=(16*c+128)*c+64;if(c>=2){const m=Math.floor(c/7)+2;p-=(25*m-10)*m-55,c>=7&&(p-=36)}return a(208<=p&&p<=29648),p}static getNumDataCodewords(c,p){return Math.floor(Se.getNumRawDataModules(c)/8)-Se.ECC_CODEWORDS_PER_BLOCK[p.ordinal][c]*Se.NUM_ERROR_CORRECTION_BLOCKS[p.ordinal][c]}static reedSolomonComputeDivisor(c){if(c<1||c>255)throw new RangeError("Degree out of range");let p=[];for(let v=0;v<c-1;v++)p.push(0);p.push(1);let m=1;for(let v=0;v<c;v++){for(let w=0;w<p.length;w++)p[w]=Se.reedSolomonMultiply(p[w],m),w+1<p.length&&(p[w]^=p[w+1]);m=Se.reedSolomonMultiply(m,2)}return p}static reedSolomonComputeRemainder(c,p){let m=p.map(v=>0);for(const v of c){const w=v^m.shift();m.push(0),p.forEach((k,b)=>m[b]^=Se.reedSolomonMultiply(k,w))}return m}static reedSolomonMultiply(c,p){if(c>>>8||p>>>8)throw new RangeError("Byte out of range");let m=0;for(let v=7;v>=0;v--)m=m<<1^(m>>>7)*285,m^=(p>>>v&1)*c;return a(m>>>8==0),m}finderPenaltyCountPatterns(c){const p=c[1];a(p<=this.size*3);const m=p>0&&c[2]==p&&c[3]==p*3&&c[4]==p&&c[5]==p;return(m&&c[0]>=p*4&&c[6]>=p?1:0)+(m&&c[6]>=p*4&&c[0]>=p?1:0)}finderPenaltyTerminateAndCount(c,p,m){return c&&(this.finderPenaltyAddHistory(p,m),p=0),p+=this.size,this.finderPenaltyAddHistory(p,m),this.finderPenaltyCountPatterns(m)}finderPenaltyAddHistory(c,p){p[0]==0&&(c+=this.size),p.pop(),p.unshift(c)}};r.MIN_VERSION=1,r.MAX_VERSION=40,r.PENALTY_N1=3,r.PENALTY_N2=3,r.PENALTY_N3=40,r.PENALTY_N4=10,r.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],r.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],n.QrCode=r;function o(g,c,p){if(c<0||c>31||g>>>c)throw new RangeError("Value out of range");for(let m=c-1;m>=0;m--)p.push(g>>>m&1)}function l(g,c){return(g>>>c&1)!=0}function a(g){if(!g)throw new Error("Assertion error")}const u=class qe{constructor(c,p,m){if(this.mode=c,this.numChars=p,this.bitData=m,p<0)throw new RangeError("Invalid argument");this.bitData=m.slice()}static makeBytes(c){let p=[];for(const m of c)o(m,8,p);return new qe(qe.Mode.BYTE,c.length,p)}static makeNumeric(c){if(!qe.isNumeric(c))throw new RangeError("String contains non-numeric characters");let p=[];for(let m=0;m<c.length;){const v=Math.min(c.length-m,3);o(parseInt(c.substring(m,m+v),10),v*3+1,p),m+=v}return new qe(qe.Mode.NUMERIC,c.length,p)}static makeAlphanumeric(c){if(!qe.isAlphanumeric(c))throw new RangeError("String contains unencodable characters in alphanumeric mode");let p=[],m;for(m=0;m+2<=c.length;m+=2){let v=qe.ALPHANUMERIC_CHARSET.indexOf(c.charAt(m))*45;v+=qe.ALPHANUMERIC_CHARSET.indexOf(c.charAt(m+1)),o(v,11,p)}return m<c.length&&o(qe.ALPHANUMERIC_CHARSET.indexOf(c.charAt(m)),6,p),new qe(qe.Mode.ALPHANUMERIC,c.length,p)}static makeSegments(c){return c==""?[]:qe.isNumeric(c)?[qe.makeNumeric(c)]:qe.isAlphanumeric(c)?[qe.makeAlphanumeric(c)]:[qe.makeBytes(qe.toUtf8ByteArray(c))]}static makeEci(c){let p=[];if(c<0)throw new RangeError("ECI assignment value out of range");if(c<128)o(c,8,p);else if(c<16384)o(2,2,p),o(c,14,p);else if(c<1e6)o(6,3,p),o(c,21,p);else throw new RangeError("ECI assignment value out of range");return new qe(qe.Mode.ECI,0,p)}static isNumeric(c){return qe.NUMERIC_REGEX.test(c)}static isAlphanumeric(c){return qe.ALPHANUMERIC_REGEX.test(c)}getData(){return this.bitData.slice()}static getTotalBits(c,p){let m=0;for(const v of c){const w=v.mode.numCharCountBits(p);if(v.numChars>=1<<w)return 1/0;m+=4+w+v.bitData.length}return m}static toUtf8ByteArray(c){c=encodeURI(c);let p=[];for(let m=0;m<c.length;m++)c.charAt(m)!="%"?p.push(c.charCodeAt(m)):(p.push(parseInt(c.substring(m+1,m+3),16)),m+=2);return p}};u.NUMERIC_REGEX=/^[0-9]*$/,u.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,u.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let f=u;n.QrSegment=u})(dr||(dr={}));(n=>{(r=>{const o=class{constructor(a,u){this.ordinal=a,this.formatBits=u}};o.LOW=new o(0,1),o.MEDIUM=new o(1,0),o.QUARTILE=new o(2,3),o.HIGH=new o(3,2),r.Ecc=o})(n.QrCode||(n.QrCode={}))})(dr||(dr={}));(n=>{(r=>{const o=class{constructor(a,u){this.modeBits=a,this.numBitsCharCount=u}numCharCountBits(a){return this.numBitsCharCount[Math.floor((a+7)/17)]}};o.NUMERIC=new o(1,[10,12,14]),o.ALPHANUMERIC=new o(2,[9,11,13]),o.BYTE=new o(4,[8,16,16]),o.KANJI=new o(8,[8,10,12]),o.ECI=new o(7,[0,0,0]),r.Mode=o})(n.QrSegment||(n.QrSegment={}))})(dr||(dr={}));var Ur=dr;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var bx={L:Ur.QrCode.Ecc.LOW,M:Ur.QrCode.Ecc.MEDIUM,Q:Ur.QrCode.Ecc.QUARTILE,H:Ur.QrCode.Ecc.HIGH},km=128,Cm="L",Em="#FFFFFF",Pm="#000000",Om=!1,Rm=1,xx=4,wx=0,Sx=.1;function _m(n,r=0){const o=[];return n.forEach(function(l,a){let u=null;l.forEach(function(f,g){if(!f&&u!==null){o.push(`M${u+r} ${a+r}h${g-u}v1H${u+r}z`),u=null;return}if(g===l.length-1){if(!f)return;u===null?o.push(`M${g+r},${a+r} h1v1H${g+r}z`):o.push(`M${u+r},${a+r} h${g+1-u}v1H${u+r}z`);return}f&&u===null&&(u=g)})}),o.join("")}function Tm(n,r){return n.slice().map((o,l)=>l<r.y||l>=r.y+r.h?o:o.map((a,u)=>u<r.x||u>=r.x+r.w?a:!1))}function kx(n,r,o,l){if(l==null)return null;const a=n.length+o*2,u=Math.floor(r*Sx),f=a/r,g=(l.width||u)*f,c=(l.height||u)*f,p=l.x==null?n.length/2-g/2:l.x*f,m=l.y==null?n.length/2-c/2:l.y*f,v=l.opacity==null?1:l.opacity;let w=null;if(l.excavate){let b=Math.floor(p),x=Math.floor(m),S=Math.ceil(g+p-b),E=Math.ceil(c+m-x);w={x:b,y:x,w:S,h:E}}const k=l.crossOrigin;return{x:p,y:m,h:c,w:g,excavation:w,opacity:v,crossOrigin:k}}function Cx(n,r){return r!=null?Math.max(Math.floor(r),0):n?xx:wx}function Mm({value:n,level:r,minVersion:o,includeMargin:l,marginSize:a,imageSettings:u,size:f,boostLevel:g}){let c=oe.useMemo(()=>{const b=(Array.isArray(n)?n:[n]).reduce((x,S)=>(x.push(...Ur.QrSegment.makeSegments(S)),x),[]);return Ur.QrCode.encodeSegments(b,bx[r],o,void 0,void 0,g)},[n,r,o,g]);const{cells:p,margin:m,numCells:v,calculatedImageSettings:w}=oe.useMemo(()=>{let k=c.getModules();const b=Cx(l,a),x=k.length+b*2,S=kx(k,f,b,u);return{cells:k,margin:b,numCells:x,calculatedImageSettings:S}},[c,f,u,l,a]);return{qrcode:c,margin:m,cells:p,numCells:v,calculatedImageSettings:w}}var Ex=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),Px=oe.forwardRef(function(r,o){const l=r,{value:a,size:u=km,level:f=Cm,bgColor:g=Em,fgColor:c=Pm,includeMargin:p=Om,minVersion:m=Rm,boostLevel:v,marginSize:w,imageSettings:k}=l,x=Uu(l,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:S}=x,E=Uu(x,["style"]),R=k==null?void 0:k.src,T=oe.useRef(null),F=oe.useRef(null),N=oe.useCallback(Me=>{T.current=Me,typeof o=="function"?o(Me):o&&(o.current=Me)},[o]),[$,B]=oe.useState(!1),{margin:Q,cells:X,numCells:me,calculatedImageSettings:xe}=Mm({value:a,level:f,minVersion:m,boostLevel:v,includeMargin:p,marginSize:w,imageSettings:k,size:u});oe.useEffect(()=>{if(T.current!=null){const Me=T.current,ge=Me.getContext("2d");if(!ge)return;let we=X;const ve=F.current,W=xe!=null&&ve!==null&&ve.complete&&ve.naturalHeight!==0&&ve.naturalWidth!==0;W&&xe.excavation!=null&&(we=Tm(X,xe.excavation));const ee=window.devicePixelRatio||1;Me.height=Me.width=u*ee;const K=u/me*ee;ge.scale(K,K),ge.fillStyle=g,ge.fillRect(0,0,me,me),ge.fillStyle=c,Ex?ge.fill(new Path2D(_m(we,Q))):X.forEach(function(M,j){M.forEach(function(re,ce){re&&ge.fillRect(ce+Q,j+Q,1,1)})}),xe&&(ge.globalAlpha=xe.opacity),W&&ge.drawImage(ve,xe.x+Q,xe.y+Q,xe.w,xe.h)}}),oe.useEffect(()=>{B(!1)},[R]);const Te=Bu({height:u,width:u},S);let Le=null;return R!=null&&(Le=oe.createElement("img",{src:R,key:R,style:{display:"none"},onLoad:()=>{B(!0)},ref:F,crossOrigin:xe==null?void 0:xe.crossOrigin})),oe.createElement(oe.Fragment,null,oe.createElement("canvas",Bu({style:Te,height:u,width:u,ref:N,role:"img"},E)),Le)});Px.displayName="QRCodeCanvas";var Nm=oe.forwardRef(function(r,o){const l=r,{value:a,size:u=km,level:f=Cm,bgColor:g=Em,fgColor:c=Pm,includeMargin:p=Om,minVersion:m=Rm,boostLevel:v,title:w,marginSize:k,imageSettings:b}=l,x=Uu(l,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:S,cells:E,numCells:R,calculatedImageSettings:T}=Mm({value:a,level:f,minVersion:m,boostLevel:v,includeMargin:p,marginSize:k,imageSettings:b,size:u});let F=E,N=null;b!=null&&T!=null&&(T.excavation!=null&&(F=Tm(E,T.excavation)),N=oe.createElement("image",{href:b.src,height:T.h,width:T.w,x:T.x+S,y:T.y+S,preserveAspectRatio:"none",opacity:T.opacity,crossOrigin:T.crossOrigin}));const $=_m(F,S);return oe.createElement("svg",Bu({height:u,width:u,viewBox:`0 0 ${R} ${R}`,ref:o,role:"img"},x),!!w&&oe.createElement("title",null,w),oe.createElement("path",{fill:g,d:`M0,0 h${R}v${R}H0z`,shapeRendering:"crispEdges"}),oe.createElement("path",{fill:c,d:$,shapeRendering:"crispEdges"}),N)});Nm.displayName="QRCodeSVG";const Ox="_pageContainer_1afsg_1",Rx="_imgNinja_1afsg_11",_x="_qrcodeContainer_1afsg_26",Tx="_qrcodeSvg_1afsg_35",Mx="_url_1afsg_40",Nx="_warrningContainer_1afsg_50",Ix="_warrningTitle_1afsg_60",Lx="_imgIcon_1afsg_65",Dx="_textTitle_1afsg_73",Ax="_textWhite_1afsg_80",zx="_textRed_1afsg_87",Tt={pageContainer:Ox,imgNinja:Rx,qrcodeContainer:_x,qrcodeSvg:Tx,url:Mx,warrningContainer:Nx,warrningTitle:Ix,imgIcon:Lx,textTitle:Dx,textWhite:Ax,textRed:zx};function Fx(){const n="https://github.com/pangliu/apk-download/raw/refs/heads/main/app-dev-debug.apk";return I.jsxs("div",{className:Tt.pageContainer,children:[I.jsx("div",{className:Tt.imgNinja}),I.jsx("div",{className:Tt.qrcodeContainer,children:I.jsx("a",{href:n,style:{display:"inline-block"},children:I.jsx(Nm,{className:Tt.qrcodeSvg,value:n,bgColor:"#FFFFFF",fgColor:"#000000"})})}),I.jsxs("div",{className:Tt.warrningContainer,children:[I.jsxs("div",{className:Tt.warrningTitle,children:[I.jsx("div",{className:Tt.imgIcon}),I.jsx("div",{className:Tt.textTitle,children:"Attention"})]}),I.jsxs("p",{children:[I.jsx("span",{className:Tt.textWhite,children:"Congrats on passing the review!"}),I.jsxs("span",{className:Tt.textRed,children:[" ","Scan the QR Code on the webpage to download the APK."]})]}),I.jsxs("p",{children:[I.jsx("span",{className:Tt.textWhite,children:"Note: The link expires"}),I.jsx("span",{className:Tt.textRed,children:" in 15 minutes,"}),I.jsxs("span",{className:Tt.textWhite,children:[" ","so download it promptly."]})]})]})]})}const jx="_layoutContainer_jrcjv_4",Vx="_icTopLeft_jrcjv_7",$x="_pageTitle_jrcjv_21",Bx="_directions_jrcjv_28",Ux="_contentTextBlack_jrcjv_33",Hx="_contentTextRed_jrcjv_40",qx="_bgTop_jrcjv_47",Wx="_pendingContainer_jrcjv_59",Qx="_divider_jrcjv_69",Kx="_pendingContentText_jrcjv_75",Yx="_pendingBottom_jrcjv_85",Gx="_bgPending_jrcjv_91",Xx="_pendingBtn_jrcjv_98",ft={layoutContainer:jx,icTopLeft:Vx,pageTitle:$x,directions:Bx,contentTextBlack:Ux,contentTextRed:Hx,bgTop:qx,pendingContainer:Wx,divider:Qx,pendingContentText:Kx,pendingBottom:Yx,bgPending:Gx,pendingBtn:Xx};function Jx(){return I.jsxs("div",{className:ft.layoutContainer,children:[I.jsx("div",{className:ft.bgTop}),I.jsx("div",{className:ft.icTopLeft}),I.jsx("div",{className:ft.pageTitle,children:"Pending review"}),I.jsxs("div",{className:ft.pendingContainer,children:[I.jsxs("div",{className:ft.directions,children:[I.jsx("span",{className:ft.contentTextBlack,children:"our registration has been submitted for"}),I.jsx("span",{className:ft.contentTextRed,children:" manual review."}),I.jsx("br",{}),I.jsx("span",{className:ft.contentTextBlack,children:"You will be notified via email within"}),I.jsxs("span",{className:ft.contentTextRed,children:[" ","1-3 business days."]})]}),I.jsx("img",{className:ft.divider}),I.jsxs("div",{className:ft.pendingContentText,children:[I.jsx("span",{children:"We're working on your register"}),I.jsx("br",{}),I.jsx("span",{children:" to be sure you can become one of us"})]}),I.jsxs("div",{className:ft.pendingBottom,children:[I.jsx("div",{className:ft.bgPending}),I.jsx("img",{className:ft.divider}),I.jsx("button",{className:ft.pendingBtn,children:"OK"})]})]})]})}const Zx="_layoutContainer_ryusg_1",ew="_bgTop_ryusg_4",tw="_icTopLeft_ryusg_17",nw="_pageTitle_ryusg_30",rw="_contentTextBlack_ryusg_36",ow="_contentTextRed_ryusg_43",iw="_divider_ryusg_49",aw="_bankContainer_ryusg_54",lw="_directions_ryusg_59",sw="_labelInput_ryusg_64",uw="_formStyle_ryusg_69",cw="_forminputStyle_ryusg_78",dw="_selectStyle_ryusg_86",fw="_bankInfo_ryusg_90",pw="_bankBottom_ryusg_97",hw="_registerBtn_ryusg_103",mw="_loaderContainer_ryusg_118",Ae={layoutContainer:Zx,bgTop:ew,icTopLeft:tw,pageTitle:nw,contentTextBlack:rw,contentTextRed:ow,divider:iw,bankContainer:aw,directions:lw,labelInput:sw,formStyle:uw,forminputStyle:cw,selectStyle:dw,bankInfo:fw,bankBottom:pw,registerBtn:hw,loaderContainer:mw};function fr(n){"@babel/helpers - typeof";return fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},fr(n)}function gw(n,r){if(fr(n)!="object"||!n)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var l=o.call(n,r||"default");if(fr(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function Im(n){var r=gw(n,"string");return fr(r)=="symbol"?r:r+""}function Wo(n,r,o){return(r=Im(r))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n}function Zp(n,r){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);r&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),o.push.apply(o,l)}return o}function se(n){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?Zp(Object(o),!0).forEach(function(l){Wo(n,l,o[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):Zp(Object(o)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(o,l))})}return n}function vw(n){if(Array.isArray(n))return n}function yw(n,r){var o=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var l,a,u,f,g=[],c=!0,p=!1;try{if(u=(o=o.call(n)).next,r===0){if(Object(o)!==o)return;c=!1}else for(;!(c=(l=u.call(o)).done)&&(g.push(l.value),g.length!==r);c=!0);}catch(m){p=!0,a=m}finally{try{if(!c&&o.return!=null&&(f=o.return(),Object(f)!==f))return}finally{if(p)throw a}}return g}}function Hu(n,r){(r==null||r>n.length)&&(r=n.length);for(var o=0,l=Array(r);o<r;o++)l[o]=n[o];return l}function Lm(n,r){if(n){if(typeof n=="string")return Hu(n,r);var o={}.toString.call(n).slice(8,-1);return o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set"?Array.from(n):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Hu(n,r):void 0}}function bw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sn(n,r){return vw(n)||yw(n,r)||Lm(n,r)||bw()}function xw(n,r){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(r.includes(l))continue;o[l]=n[l]}return o}function Cn(n,r){if(n==null)return{};var o,l,a=xw(n,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(l=0;l<u.length;l++)o=u[l],r.includes(o)||{}.propertyIsEnumerable.call(n,o)&&(a[o]=n[o])}return a}var ww=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Sw(n){var r=n.defaultInputValue,o=r===void 0?"":r,l=n.defaultMenuIsOpen,a=l===void 0?!1:l,u=n.defaultValue,f=u===void 0?null:u,g=n.inputValue,c=n.menuIsOpen,p=n.onChange,m=n.onInputChange,v=n.onMenuClose,w=n.onMenuOpen,k=n.value,b=Cn(n,ww),x=O.useState(g!==void 0?g:o),S=Sn(x,2),E=S[0],R=S[1],T=O.useState(c!==void 0?c:a),F=Sn(T,2),N=F[0],$=F[1],B=O.useState(k!==void 0?k:f),Q=Sn(B,2),X=Q[0],me=Q[1],xe=O.useCallback(function(W,ee){typeof p=="function"&&p(W,ee),me(W)},[p]),Te=O.useCallback(function(W,ee){var K;typeof m=="function"&&(K=m(W,ee)),R(K!==void 0?K:W)},[m]),Le=O.useCallback(function(){typeof w=="function"&&w(),$(!0)},[w]),Me=O.useCallback(function(){typeof v=="function"&&v(),$(!1)},[v]),ge=g!==void 0?g:E,we=c!==void 0?c:N,ve=k!==void 0?k:X;return se(se({},b),{},{inputValue:ge,menuIsOpen:we,onChange:xe,onInputChange:Te,onMenuClose:Me,onMenuOpen:Le,value:ve})}function ue(){return ue=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var l in o)({}).hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},ue.apply(null,arguments)}function kw(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function eh(n,r){for(var o=0;o<r.length;o++){var l=r[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,Im(l.key),l)}}function Cw(n,r,o){return r&&eh(n.prototype,r),o&&eh(n,o),Object.defineProperty(n,"prototype",{writable:!1}),n}function qu(n,r){return qu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,l){return o.__proto__=l,o},qu(n,r)}function Ew(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),r&&qu(n,r)}function Ka(n){return Ka=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Ka(n)}function Dm(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Dm=function(){return!!n})()}function Pw(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Ow(n,r){if(r&&(fr(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Pw(n)}function Rw(n){var r=Dm();return function(){var o,l=Ka(n);if(r){var a=Ka(this).constructor;o=Reflect.construct(l,arguments,a)}else o=l.apply(this,arguments);return Ow(this,o)}}function _w(n){if(Array.isArray(n))return Hu(n)}function Tw(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Mw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function uc(n){return _w(n)||Tw(n)||Lm(n)||Mw()}var Nw=!1;function Iw(n){if(n.sheet)return n.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===n)return document.styleSheets[r]}function Lw(n){var r=document.createElement("style");return r.setAttribute("data-emotion",n.key),n.nonce!==void 0&&r.setAttribute("nonce",n.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var Dw=function(){function n(o){var l=this;this._insertTag=function(a){var u;l.tags.length===0?l.insertionPoint?u=l.insertionPoint.nextSibling:l.prepend?u=l.container.firstChild:u=l.before:u=l.tags[l.tags.length-1].nextSibling,l.container.insertBefore(a,u),l.tags.push(a)},this.isSpeedy=o.speedy===void 0?!Nw:o.speedy,this.tags=[],this.ctr=0,this.nonce=o.nonce,this.key=o.key,this.container=o.container,this.prepend=o.prepend,this.insertionPoint=o.insertionPoint,this.before=null}var r=n.prototype;return r.hydrate=function(l){l.forEach(this._insertTag)},r.insert=function(l){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Lw(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var u=Iw(a);try{u.insertRule(l,u.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(l));this.ctr++},r.flush=function(){this.tags.forEach(function(l){var a;return(a=l.parentNode)==null?void 0:a.removeChild(l)}),this.tags=[],this.ctr=0},n}(),pt="-ms-",Ya="-moz-",Oe="-webkit-",Am="comm",cc="rule",dc="decl",Aw="@import",zm="@keyframes",zw="@layer",Fw=Math.abs,hl=String.fromCharCode,jw=Object.assign;function Vw(n,r){return lt(n,0)^45?(((r<<2^lt(n,0))<<2^lt(n,1))<<2^lt(n,2))<<2^lt(n,3):0}function Fm(n){return n.trim()}function $w(n,r){return(n=r.exec(n))?n[0]:n}function Re(n,r,o){return n.replace(r,o)}function Wu(n,r){return n.indexOf(r)}function lt(n,r){return n.charCodeAt(r)|0}function Yo(n,r,o){return n.slice(r,o)}function on(n){return n.length}function fc(n){return n.length}function Oa(n,r){return r.push(n),n}function Bw(n,r){return n.map(r).join("")}var ml=1,qr=1,jm=0,Et=0,Xe=0,Yr="";function gl(n,r,o,l,a,u,f){return{value:n,root:r,parent:o,type:l,props:a,children:u,line:ml,column:qr,length:f,return:""}}function Uo(n,r){return jw(gl("",null,null,"",null,null,0),n,{length:-n.length},r)}function Uw(){return Xe}function Hw(){return Xe=Et>0?lt(Yr,--Et):0,qr--,Xe===10&&(qr=1,ml--),Xe}function It(){return Xe=Et<jm?lt(Yr,Et++):0,qr++,Xe===10&&(qr=1,ml++),Xe}function ln(){return lt(Yr,Et)}function za(){return Et}function si(n,r){return Yo(Yr,n,r)}function Go(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Vm(n){return ml=qr=1,jm=on(Yr=n),Et=0,[]}function $m(n){return Yr="",n}function Fa(n){return Fm(si(Et-1,Qu(n===91?n+2:n===40?n+1:n)))}function qw(n){for(;(Xe=ln())&&Xe<33;)It();return Go(n)>2||Go(Xe)>3?"":" "}function Ww(n,r){for(;--r&&It()&&!(Xe<48||Xe>102||Xe>57&&Xe<65||Xe>70&&Xe<97););return si(n,za()+(r<6&&ln()==32&&It()==32))}function Qu(n){for(;It();)switch(Xe){case n:return Et;case 34:case 39:n!==34&&n!==39&&Qu(Xe);break;case 40:n===41&&Qu(n);break;case 92:It();break}return Et}function Qw(n,r){for(;It()&&n+Xe!==57;)if(n+Xe===84&&ln()===47)break;return"/*"+si(r,Et-1)+"*"+hl(n===47?n:It())}function Kw(n){for(;!Go(ln());)It();return si(n,Et)}function Yw(n){return $m(ja("",null,null,null,[""],n=Vm(n),0,[0],n))}function ja(n,r,o,l,a,u,f,g,c){for(var p=0,m=0,v=f,w=0,k=0,b=0,x=1,S=1,E=1,R=0,T="",F=a,N=u,$=l,B=T;S;)switch(b=R,R=It()){case 40:if(b!=108&&lt(B,v-1)==58){Wu(B+=Re(Fa(R),"&","&\f"),"&\f")!=-1&&(E=-1);break}case 34:case 39:case 91:B+=Fa(R);break;case 9:case 10:case 13:case 32:B+=qw(b);break;case 92:B+=Ww(za()-1,7);continue;case 47:switch(ln()){case 42:case 47:Oa(Gw(Qw(It(),za()),r,o),c);break;default:B+="/"}break;case 123*x:g[p++]=on(B)*E;case 125*x:case 59:case 0:switch(R){case 0:case 125:S=0;case 59+m:E==-1&&(B=Re(B,/\f/g,"")),k>0&&on(B)-v&&Oa(k>32?nh(B+";",l,o,v-1):nh(Re(B," ","")+";",l,o,v-2),c);break;case 59:B+=";";default:if(Oa($=th(B,r,o,p,m,a,g,T,F=[],N=[],v),u),R===123)if(m===0)ja(B,r,$,$,F,u,v,g,N);else switch(w===99&&lt(B,3)===110?100:w){case 100:case 108:case 109:case 115:ja(n,$,$,l&&Oa(th(n,$,$,0,0,a,g,T,a,F=[],v),N),a,N,v,g,l?F:N);break;default:ja(B,$,$,$,[""],N,0,g,N)}}p=m=k=0,x=E=1,T=B="",v=f;break;case 58:v=1+on(B),k=b;default:if(x<1){if(R==123)--x;else if(R==125&&x++==0&&Hw()==125)continue}switch(B+=hl(R),R*x){case 38:E=m>0?1:(B+="\f",-1);break;case 44:g[p++]=(on(B)-1)*E,E=1;break;case 64:ln()===45&&(B+=Fa(It())),w=ln(),m=v=on(T=B+=Kw(za())),R++;break;case 45:b===45&&on(B)==2&&(x=0)}}return u}function th(n,r,o,l,a,u,f,g,c,p,m){for(var v=a-1,w=a===0?u:[""],k=fc(w),b=0,x=0,S=0;b<l;++b)for(var E=0,R=Yo(n,v+1,v=Fw(x=f[b])),T=n;E<k;++E)(T=Fm(x>0?w[E]+" "+R:Re(R,/&\f/g,w[E])))&&(c[S++]=T);return gl(n,r,o,a===0?cc:g,c,p,m)}function Gw(n,r,o){return gl(n,r,o,Am,hl(Uw()),Yo(n,2,-2),0)}function nh(n,r,o,l){return gl(n,r,o,dc,Yo(n,0,l),Yo(n,l+1,-1),l)}function Hr(n,r){for(var o="",l=fc(n),a=0;a<l;a++)o+=r(n[a],a,n,r)||"";return o}function Xw(n,r,o,l){switch(n.type){case zw:if(n.children.length)break;case Aw:case dc:return n.return=n.return||n.value;case Am:return"";case zm:return n.return=n.value+"{"+Hr(n.children,l)+"}";case cc:n.value=n.props.join(",")}return on(o=Hr(n.children,l))?n.return=n.value+"{"+o+"}":""}function Jw(n){var r=fc(n);return function(o,l,a,u){for(var f="",g=0;g<r;g++)f+=n[g](o,l,a,u)||"";return f}}function Zw(n){return function(r){r.root||(r=r.return)&&n(r)}}function e2(n){var r=Object.create(null);return function(o){return r[o]===void 0&&(r[o]=n(o)),r[o]}}var t2=function(r,o,l){for(var a=0,u=0;a=u,u=ln(),a===38&&u===12&&(o[l]=1),!Go(u);)It();return si(r,Et)},n2=function(r,o){var l=-1,a=44;do switch(Go(a)){case 0:a===38&&ln()===12&&(o[l]=1),r[l]+=t2(Et-1,o,l);break;case 2:r[l]+=Fa(a);break;case 4:if(a===44){r[++l]=ln()===58?"&\f":"",o[l]=r[l].length;break}default:r[l]+=hl(a)}while(a=It());return r},r2=function(r,o){return $m(n2(Vm(r),o))},rh=new WeakMap,o2=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var o=r.value,l=r.parent,a=r.column===l.column&&r.line===l.line;l.type!=="rule";)if(l=l.parent,!l)return;if(!(r.props.length===1&&o.charCodeAt(0)!==58&&!rh.get(l))&&!a){rh.set(r,!0);for(var u=[],f=r2(o,u),g=l.props,c=0,p=0;c<f.length;c++)for(var m=0;m<g.length;m++,p++)r.props[p]=u[c]?f[c].replace(/&\f/g,g[m]):g[m]+" "+f[c]}}},i2=function(r){if(r.type==="decl"){var o=r.value;o.charCodeAt(0)===108&&o.charCodeAt(2)===98&&(r.return="",r.value="")}};function Bm(n,r){switch(Vw(n,r)){case 5103:return Oe+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Oe+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Oe+n+Ya+n+pt+n+n;case 6828:case 4268:return Oe+n+pt+n+n;case 6165:return Oe+n+pt+"flex-"+n+n;case 5187:return Oe+n+Re(n,/(\w+).+(:[^]+)/,Oe+"box-$1$2"+pt+"flex-$1$2")+n;case 5443:return Oe+n+pt+"flex-item-"+Re(n,/flex-|-self/,"")+n;case 4675:return Oe+n+pt+"flex-line-pack"+Re(n,/align-content|flex-|-self/,"")+n;case 5548:return Oe+n+pt+Re(n,"shrink","negative")+n;case 5292:return Oe+n+pt+Re(n,"basis","preferred-size")+n;case 6060:return Oe+"box-"+Re(n,"-grow","")+Oe+n+pt+Re(n,"grow","positive")+n;case 4554:return Oe+Re(n,/([^-])(transform)/g,"$1"+Oe+"$2")+n;case 6187:return Re(Re(Re(n,/(zoom-|grab)/,Oe+"$1"),/(image-set)/,Oe+"$1"),n,"")+n;case 5495:case 3959:return Re(n,/(image-set\([^]*)/,Oe+"$1$`$1");case 4968:return Re(Re(n,/(.+:)(flex-)?(.*)/,Oe+"box-pack:$3"+pt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Oe+n+n;case 4095:case 3583:case 4068:case 2532:return Re(n,/(.+)-inline(.+)/,Oe+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(on(n)-1-r>6)switch(lt(n,r+1)){case 109:if(lt(n,r+4)!==45)break;case 102:return Re(n,/(.+:)(.+)-([^]+)/,"$1"+Oe+"$2-$3$1"+Ya+(lt(n,r+3)==108?"$3":"$2-$3"))+n;case 115:return~Wu(n,"stretch")?Bm(Re(n,"stretch","fill-available"),r)+n:n}break;case 4949:if(lt(n,r+1)!==115)break;case 6444:switch(lt(n,on(n)-3-(~Wu(n,"!important")&&10))){case 107:return Re(n,":",":"+Oe)+n;case 101:return Re(n,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Oe+(lt(n,14)===45?"inline-":"")+"box$3$1"+Oe+"$2$3$1"+pt+"$2box$3")+n}break;case 5936:switch(lt(n,r+11)){case 114:return Oe+n+pt+Re(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Oe+n+pt+Re(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Oe+n+pt+Re(n,/[svh]\w+-[tblr]{2}/,"lr")+n}return Oe+n+pt+n+n}return n}var a2=function(r,o,l,a){if(r.length>-1&&!r.return)switch(r.type){case dc:r.return=Bm(r.value,r.length);break;case zm:return Hr([Uo(r,{value:Re(r.value,"@","@"+Oe)})],a);case cc:if(r.length)return Bw(r.props,function(u){switch($w(u,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Hr([Uo(r,{props:[Re(u,/:(read-\w+)/,":"+Ya+"$1")]})],a);case"::placeholder":return Hr([Uo(r,{props:[Re(u,/:(plac\w+)/,":"+Oe+"input-$1")]}),Uo(r,{props:[Re(u,/:(plac\w+)/,":"+Ya+"$1")]}),Uo(r,{props:[Re(u,/:(plac\w+)/,pt+"input-$1")]})],a)}return""})}},l2=[a2],s2=function(r){var o=r.key;if(o==="css"){var l=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(l,function(x){var S=x.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(x),x.setAttribute("data-s",""))})}var a=r.stylisPlugins||l2,u={},f,g=[];f=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+o+' "]'),function(x){for(var S=x.getAttribute("data-emotion").split(" "),E=1;E<S.length;E++)u[S[E]]=!0;g.push(x)});var c,p=[o2,i2];{var m,v=[Xw,Zw(function(x){m.insert(x)})],w=Jw(p.concat(a,v)),k=function(S){return Hr(Yw(S),w)};c=function(S,E,R,T){m=R,k(S?S+"{"+E.styles+"}":E.styles),T&&(b.inserted[E.name]=!0)}}var b={key:o,sheet:new Dw({key:o,container:f,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:u,registered:{},insert:c};return b.sheet.hydrate(g),b},ku={exports:{}},_e={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh;function u2(){if(oh)return _e;oh=1;var n=typeof Symbol=="function"&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,l=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,f=n?Symbol.for("react.provider"):60109,g=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,m=n?Symbol.for("react.forward_ref"):60112,v=n?Symbol.for("react.suspense"):60113,w=n?Symbol.for("react.suspense_list"):60120,k=n?Symbol.for("react.memo"):60115,b=n?Symbol.for("react.lazy"):60116,x=n?Symbol.for("react.block"):60121,S=n?Symbol.for("react.fundamental"):60117,E=n?Symbol.for("react.responder"):60118,R=n?Symbol.for("react.scope"):60119;function T(N){if(typeof N=="object"&&N!==null){var $=N.$$typeof;switch($){case r:switch(N=N.type,N){case c:case p:case l:case u:case a:case v:return N;default:switch(N=N&&N.$$typeof,N){case g:case m:case b:case k:case f:return N;default:return $}}case o:return $}}}function F(N){return T(N)===p}return _e.AsyncMode=c,_e.ConcurrentMode=p,_e.ContextConsumer=g,_e.ContextProvider=f,_e.Element=r,_e.ForwardRef=m,_e.Fragment=l,_e.Lazy=b,_e.Memo=k,_e.Portal=o,_e.Profiler=u,_e.StrictMode=a,_e.Suspense=v,_e.isAsyncMode=function(N){return F(N)||T(N)===c},_e.isConcurrentMode=F,_e.isContextConsumer=function(N){return T(N)===g},_e.isContextProvider=function(N){return T(N)===f},_e.isElement=function(N){return typeof N=="object"&&N!==null&&N.$$typeof===r},_e.isForwardRef=function(N){return T(N)===m},_e.isFragment=function(N){return T(N)===l},_e.isLazy=function(N){return T(N)===b},_e.isMemo=function(N){return T(N)===k},_e.isPortal=function(N){return T(N)===o},_e.isProfiler=function(N){return T(N)===u},_e.isStrictMode=function(N){return T(N)===a},_e.isSuspense=function(N){return T(N)===v},_e.isValidElementType=function(N){return typeof N=="string"||typeof N=="function"||N===l||N===p||N===u||N===a||N===v||N===w||typeof N=="object"&&N!==null&&(N.$$typeof===b||N.$$typeof===k||N.$$typeof===f||N.$$typeof===g||N.$$typeof===m||N.$$typeof===S||N.$$typeof===E||N.$$typeof===R||N.$$typeof===x)},_e.typeOf=T,_e}var ih;function c2(){return ih||(ih=1,ku.exports=u2()),ku.exports}var Cu,ah;function d2(){if(ah)return Cu;ah=1;var n=c2(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};u[n.ForwardRef]=l,u[n.Memo]=a;function f(b){return n.isMemo(b)?a:u[b.$$typeof]||r}var g=Object.defineProperty,c=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,w=Object.prototype;function k(b,x,S){if(typeof x!="string"){if(w){var E=v(x);E&&E!==w&&k(b,E,S)}var R=c(x);p&&(R=R.concat(p(x)));for(var T=f(b),F=f(x),N=0;N<R.length;++N){var $=R[N];if(!o[$]&&!(S&&S[$])&&!(F&&F[$])&&!(T&&T[$])){var B=m(x,$);try{g(b,$,B)}catch{}}}}return b}return Cu=k,Cu}d2();var f2=!0;function p2(n,r,o){var l="";return o.split(" ").forEach(function(a){n[a]!==void 0?r.push(n[a]+";"):a&&(l+=a+" ")}),l}var Um=function(r,o,l){var a=r.key+"-"+o.name;(l===!1||f2===!1)&&r.registered[a]===void 0&&(r.registered[a]=o.styles)},h2=function(r,o,l){Um(r,o,l);var a=r.key+"-"+o.name;if(r.inserted[o.name]===void 0){var u=o;do r.insert(o===u?"."+a:"",u,r.sheet,!0),u=u.next;while(u!==void 0)}};function m2(n){for(var r=0,o,l=0,a=n.length;a>=4;++l,a-=4)o=n.charCodeAt(l)&255|(n.charCodeAt(++l)&255)<<8|(n.charCodeAt(++l)&255)<<16|(n.charCodeAt(++l)&255)<<24,o=(o&65535)*1540483477+((o>>>16)*59797<<16),o^=o>>>24,r=(o&65535)*1540483477+((o>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(n.charCodeAt(l+2)&255)<<16;case 2:r^=(n.charCodeAt(l+1)&255)<<8;case 1:r^=n.charCodeAt(l)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var g2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},v2=!1,y2=/[A-Z]|^ms/g,b2=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Hm=function(r){return r.charCodeAt(1)===45},lh=function(r){return r!=null&&typeof r!="boolean"},Eu=e2(function(n){return Hm(n)?n:n.replace(y2,"-$&").toLowerCase()}),sh=function(r,o){switch(r){case"animation":case"animationName":if(typeof o=="string")return o.replace(b2,function(l,a,u){return an={name:a,styles:u,next:an},a})}return g2[r]!==1&&!Hm(r)&&typeof o=="number"&&o!==0?o+"px":o},x2="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function Xo(n,r,o){if(o==null)return"";var l=o;if(l.__emotion_styles!==void 0)return l;switch(typeof o){case"boolean":return"";case"object":{var a=o;if(a.anim===1)return an={name:a.name,styles:a.styles,next:an},a.name;var u=o;if(u.styles!==void 0){var f=u.next;if(f!==void 0)for(;f!==void 0;)an={name:f.name,styles:f.styles,next:an},f=f.next;var g=u.styles+";";return g}return w2(n,r,o)}case"function":{if(n!==void 0){var c=an,p=o(n);return an=c,Xo(n,r,p)}break}}var m=o;return m}function w2(n,r,o){var l="";if(Array.isArray(o))for(var a=0;a<o.length;a++)l+=Xo(n,r,o[a])+";";else for(var u in o){var f=o[u];if(typeof f!="object"){var g=f;lh(g)&&(l+=Eu(u)+":"+sh(u,g)+";")}else{if(u==="NO_COMPONENT_SELECTOR"&&v2)throw new Error(x2);if(Array.isArray(f)&&typeof f[0]=="string"&&r==null)for(var c=0;c<f.length;c++)lh(f[c])&&(l+=Eu(u)+":"+sh(u,f[c])+";");else{var p=Xo(n,r,f);switch(u){case"animation":case"animationName":{l+=Eu(u)+":"+p+";";break}default:l+=u+"{"+p+"}"}}}}return l}var uh=/label:\s*([^\s;{]+)\s*(;|$)/g,an;function qm(n,r,o){if(n.length===1&&typeof n[0]=="object"&&n[0]!==null&&n[0].styles!==void 0)return n[0];var l=!0,a="";an=void 0;var u=n[0];if(u==null||u.raw===void 0)l=!1,a+=Xo(o,r,u);else{var f=u;a+=f[0]}for(var g=1;g<n.length;g++)if(a+=Xo(o,r,n[g]),l){var c=u;a+=c[g]}uh.lastIndex=0;for(var p="",m;(m=uh.exec(a))!==null;)p+="-"+m[1];var v=m2(a)+p;return{name:v,styles:a,next:an}}var S2=function(r){return r()},k2=vp.useInsertionEffect?vp.useInsertionEffect:!1,C2=k2||S2,E2=!1,Wm=O.createContext(typeof HTMLElement<"u"?s2({key:"css"}):null);Wm.Provider;var P2=function(r){return O.forwardRef(function(o,l){var a=O.useContext(Wm);return r(o,a,l)})},O2=O.createContext({}),pc={}.hasOwnProperty,Ku="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",R2=function(r,o){var l={};for(var a in o)pc.call(o,a)&&(l[a]=o[a]);return l[Ku]=r,l},_2=function(r){var o=r.cache,l=r.serialized,a=r.isStringTag;return Um(o,l,a),C2(function(){return h2(o,l,a)}),null},T2=P2(function(n,r,o){var l=n.css;typeof l=="string"&&r.registered[l]!==void 0&&(l=r.registered[l]);var a=n[Ku],u=[l],f="";typeof n.className=="string"?f=p2(r.registered,u,n.className):n.className!=null&&(f=n.className+" ");var g=qm(u,void 0,O.useContext(O2));f+=r.key+"-"+g.name;var c={};for(var p in n)pc.call(n,p)&&p!=="css"&&p!==Ku&&!E2&&(c[p]=n[p]);return c.className=f,o&&(c.ref=o),O.createElement(O.Fragment,null,O.createElement(_2,{cache:r,serialized:g,isStringTag:typeof a=="string"}),O.createElement(a,c))}),M2=T2,ie=function(r,o){var l=arguments;if(o==null||!pc.call(o,"css"))return O.createElement.apply(void 0,l);var a=l.length,u=new Array(a);u[0]=M2,u[1]=R2(r,o);for(var f=2;f<a;f++)u[f]=l[f];return O.createElement.apply(null,u)};(function(n){var r;r||(r=n.JSX||(n.JSX={}))})(ie||(ie={}));function hc(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return qm(r)}function N2(){var n=hc.apply(void 0,arguments),r="animation-"+n.name;return{name:r,styles:"@keyframes "+r+"{"+n.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function I2(n,r){return r||(r=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}}))}const L2=Math.min,D2=Math.max,Ga=Math.round,Ra=Math.floor,Xa=n=>({x:n,y:n});function A2(n){const{x:r,y:o,width:l,height:a}=n;return{width:l,height:a,top:o,left:r,right:r+l,bottom:o+a,x:r,y:o}}function vl(){return typeof window<"u"}function Qm(n){return Ym(n)?(n.nodeName||"").toLowerCase():"#document"}function kn(n){var r;return(n==null||(r=n.ownerDocument)==null?void 0:r.defaultView)||window}function Km(n){var r;return(r=(Ym(n)?n.ownerDocument:n.document)||window.document)==null?void 0:r.documentElement}function Ym(n){return vl()?n instanceof Node||n instanceof kn(n).Node:!1}function z2(n){return vl()?n instanceof Element||n instanceof kn(n).Element:!1}function mc(n){return vl()?n instanceof HTMLElement||n instanceof kn(n).HTMLElement:!1}function ch(n){return!vl()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof kn(n).ShadowRoot}function Gm(n){const{overflow:r,overflowX:o,overflowY:l,display:a}=gc(n);return/auto|scroll|overlay|hidden|clip/.test(r+l+o)&&!["inline","contents"].includes(a)}function F2(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function j2(n){return["html","body","#document"].includes(Qm(n))}function gc(n){return kn(n).getComputedStyle(n)}function V2(n){if(Qm(n)==="html")return n;const r=n.assignedSlot||n.parentNode||ch(n)&&n.host||Km(n);return ch(r)?r.host:r}function Xm(n){const r=V2(n);return j2(r)?n.ownerDocument?n.ownerDocument.body:n.body:mc(r)&&Gm(r)?r:Xm(r)}function Ja(n,r,o){var l;r===void 0&&(r=[]),o===void 0&&(o=!0);const a=Xm(n),u=a===((l=n.ownerDocument)==null?void 0:l.body),f=kn(a);if(u){const g=Yu(f);return r.concat(f,f.visualViewport||[],Gm(a)?a:[],g&&o?Ja(g):[])}return r.concat(a,Ja(a,[],o))}function Yu(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function $2(n){const r=gc(n);let o=parseFloat(r.width)||0,l=parseFloat(r.height)||0;const a=mc(n),u=a?n.offsetWidth:o,f=a?n.offsetHeight:l,g=Ga(o)!==u||Ga(l)!==f;return g&&(o=u,l=f),{width:o,height:l,$:g}}function vc(n){return z2(n)?n:n.contextElement}function dh(n){const r=vc(n);if(!mc(r))return Xa(1);const o=r.getBoundingClientRect(),{width:l,height:a,$:u}=$2(r);let f=(u?Ga(o.width):o.width)/l,g=(u?Ga(o.height):o.height)/a;return(!f||!Number.isFinite(f))&&(f=1),(!g||!Number.isFinite(g))&&(g=1),{x:f,y:g}}const B2=Xa(0);function U2(n){const r=kn(n);return!F2()||!r.visualViewport?B2:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function H2(n,r,o){return!1}function fh(n,r,o,l){r===void 0&&(r=!1);const a=n.getBoundingClientRect(),u=vc(n);let f=Xa(1);r&&(f=dh(n));const g=H2()?U2(u):Xa(0);let c=(a.left+g.x)/f.x,p=(a.top+g.y)/f.y,m=a.width/f.x,v=a.height/f.y;if(u){const w=kn(u),k=l;let b=w,x=Yu(b);for(;x&&l&&k!==b;){const S=dh(x),E=x.getBoundingClientRect(),R=gc(x),T=E.left+(x.clientLeft+parseFloat(R.paddingLeft))*S.x,F=E.top+(x.clientTop+parseFloat(R.paddingTop))*S.y;c*=S.x,p*=S.y,m*=S.x,v*=S.y,c+=T,p+=F,b=kn(x),x=Yu(b)}}return A2({width:m,height:v,x:c,y:p})}function q2(n,r){let o=null,l;const a=Km(n);function u(){var g;clearTimeout(l),(g=o)==null||g.disconnect(),o=null}function f(g,c){g===void 0&&(g=!1),c===void 0&&(c=1),u();const{left:p,top:m,width:v,height:w}=n.getBoundingClientRect();if(g||r(),!v||!w)return;const k=Ra(m),b=Ra(a.clientWidth-(p+v)),x=Ra(a.clientHeight-(m+w)),S=Ra(p),R={rootMargin:-k+"px "+-b+"px "+-x+"px "+-S+"px",threshold:D2(0,L2(1,c))||1};let T=!0;function F(N){const $=N[0].intersectionRatio;if($!==c){if(!T)return f();$?f(!1,$):l=setTimeout(()=>{f(!1,1e-7)},1e3)}T=!1}try{o=new IntersectionObserver(F,{...R,root:a.ownerDocument})}catch{o=new IntersectionObserver(F,R)}o.observe(n)}return f(!0),u}function W2(n,r,o,l){l===void 0&&(l={});const{ancestorScroll:a=!0,ancestorResize:u=!0,elementResize:f=typeof ResizeObserver=="function",layoutShift:g=typeof IntersectionObserver=="function",animationFrame:c=!1}=l,p=vc(n),m=a||u?[...p?Ja(p):[],...Ja(r)]:[];m.forEach(E=>{a&&E.addEventListener("scroll",o,{passive:!0}),u&&E.addEventListener("resize",o)});const v=p&&g?q2(p,o):null;let w=-1,k=null;f&&(k=new ResizeObserver(E=>{let[R]=E;R&&R.target===p&&k&&(k.unobserve(r),cancelAnimationFrame(w),w=requestAnimationFrame(()=>{var T;(T=k)==null||T.observe(r)})),o()}),p&&!c&&k.observe(p),k.observe(r));let b,x=c?fh(n):null;c&&S();function S(){const E=fh(n);x&&(E.x!==x.x||E.y!==x.y||E.width!==x.width||E.height!==x.height)&&o(),x=E,b=requestAnimationFrame(S)}return o(),()=>{var E;m.forEach(R=>{a&&R.removeEventListener("scroll",o),u&&R.removeEventListener("resize",o)}),v==null||v(),(E=k)==null||E.disconnect(),k=null,c&&cancelAnimationFrame(b)}}var Gu=O.useLayoutEffect,Q2=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Za=function(){};function K2(n,r){return r?r[0]==="-"?n+r:n+"__"+r:n}function Y2(n,r){for(var o=arguments.length,l=new Array(o>2?o-2:0),a=2;a<o;a++)l[a-2]=arguments[a];var u=[].concat(l);if(r&&n)for(var f in r)r.hasOwnProperty(f)&&r[f]&&u.push("".concat(K2(n,f)));return u.filter(function(g){return g}).map(function(g){return String(g).trim()}).join(" ")}var ph=function(r){return oS(r)?r.filter(Boolean):fr(r)==="object"&&r!==null?[r]:[]},Jm=function(r){r.className,r.clearValue,r.cx,r.getStyles,r.getClassNames,r.getValue,r.hasValue,r.isMulti,r.isRtl,r.options,r.selectOption,r.selectProps,r.setValue,r.theme;var o=Cn(r,Q2);return se({},o)},Qe=function(r,o,l){var a=r.cx,u=r.getStyles,f=r.getClassNames,g=r.className;return{css:u(o,r),className:a(l??{},f(o,r),g)}};function yl(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function G2(n){return yl(n)?window.innerHeight:n.clientHeight}function Zm(n){return yl(n)?window.pageYOffset:n.scrollTop}function el(n,r){if(yl(n)){window.scrollTo(0,r);return}n.scrollTop=r}function X2(n){var r=getComputedStyle(n),o=r.position==="absolute",l=/(auto|scroll)/;if(r.position==="fixed")return document.documentElement;for(var a=n;a=a.parentElement;)if(r=getComputedStyle(a),!(o&&r.position==="static")&&l.test(r.overflow+r.overflowY+r.overflowX))return a;return document.documentElement}function J2(n,r,o,l){return o*((n=n/l-1)*n*n+1)+r}function _a(n,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Za,a=Zm(n),u=r-a,f=10,g=0;function c(){g+=f;var p=J2(g,a,u,o);el(n,p),g<o?window.requestAnimationFrame(c):l(n)}c()}function hh(n,r){var o=n.getBoundingClientRect(),l=r.getBoundingClientRect(),a=r.offsetHeight/3;l.bottom+a>o.bottom?el(n,Math.min(r.offsetTop+r.clientHeight-n.offsetHeight+a,n.scrollHeight)):l.top-a<o.top&&el(n,Math.max(r.offsetTop-a,0))}function Z2(n){var r=n.getBoundingClientRect();return{bottom:r.bottom,height:r.height,left:r.left,right:r.right,top:r.top,width:r.width}}function mh(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function eS(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var e0=!1,tS={get passive(){return e0=!0}},Ta=typeof window<"u"?window:{};Ta.addEventListener&&Ta.removeEventListener&&(Ta.addEventListener("p",Za,tS),Ta.removeEventListener("p",Za,!1));var nS=e0;function rS(n){return n!=null}function oS(n){return Array.isArray(n)}function Ma(n,r,o){return n?r:o}var iS=function(r){for(var o=arguments.length,l=new Array(o>1?o-1:0),a=1;a<o;a++)l[a-1]=arguments[a];var u=Object.entries(r).filter(function(f){var g=Sn(f,1),c=g[0];return!l.includes(c)});return u.reduce(function(f,g){var c=Sn(g,2),p=c[0],m=c[1];return f[p]=m,f},{})},aS=["children","innerProps"],lS=["children","innerProps"];function sS(n){var r=n.maxHeight,o=n.menuEl,l=n.minHeight,a=n.placement,u=n.shouldScroll,f=n.isFixedPosition,g=n.controlHeight,c=X2(o),p={placement:"bottom",maxHeight:r};if(!o||!o.offsetParent)return p;var m=c.getBoundingClientRect(),v=m.height,w=o.getBoundingClientRect(),k=w.bottom,b=w.height,x=w.top,S=o.offsetParent.getBoundingClientRect(),E=S.top,R=f?window.innerHeight:G2(c),T=Zm(c),F=parseInt(getComputedStyle(o).marginBottom,10),N=parseInt(getComputedStyle(o).marginTop,10),$=E-N,B=R-x,Q=$+T,X=v-T-x,me=k-R+T+F,xe=T+x-N,Te=160;switch(a){case"auto":case"bottom":if(B>=b)return{placement:"bottom",maxHeight:r};if(X>=b&&!f)return u&&_a(c,me,Te),{placement:"bottom",maxHeight:r};if(!f&&X>=l||f&&B>=l){u&&_a(c,me,Te);var Le=f?B-F:X-F;return{placement:"bottom",maxHeight:Le}}if(a==="auto"||f){var Me=r,ge=f?$:Q;return ge>=l&&(Me=Math.min(ge-F-g,r)),{placement:"top",maxHeight:Me}}if(a==="bottom")return u&&el(c,me),{placement:"bottom",maxHeight:r};break;case"top":if($>=b)return{placement:"top",maxHeight:r};if(Q>=b&&!f)return u&&_a(c,xe,Te),{placement:"top",maxHeight:r};if(!f&&Q>=l||f&&$>=l){var we=r;return(!f&&Q>=l||f&&$>=l)&&(we=f?$-N:Q-N),u&&_a(c,xe,Te),{placement:"top",maxHeight:we}}return{placement:"bottom",maxHeight:r};default:throw new Error('Invalid placement provided "'.concat(a,'".'))}return p}function uS(n){var r={bottom:"top",top:"bottom"};return n?r[n]:"bottom"}var t0=function(r){return r==="auto"?"bottom":r},cS=function(r,o){var l,a=r.placement,u=r.theme,f=u.borderRadius,g=u.spacing,c=u.colors;return se((l={label:"menu"},Wo(l,uS(a),"100%"),Wo(l,"position","absolute"),Wo(l,"width","100%"),Wo(l,"zIndex",1),l),o?{}:{backgroundColor:c.neutral0,borderRadius:f,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:g.menuGutter,marginTop:g.menuGutter})},n0=O.createContext(null),dS=function(r){var o=r.children,l=r.minMenuHeight,a=r.maxMenuHeight,u=r.menuPlacement,f=r.menuPosition,g=r.menuShouldScrollIntoView,c=r.theme,p=O.useContext(n0)||{},m=p.setPortalPlacement,v=O.useRef(null),w=O.useState(a),k=Sn(w,2),b=k[0],x=k[1],S=O.useState(null),E=Sn(S,2),R=E[0],T=E[1],F=c.spacing.controlHeight;return Gu(function(){var N=v.current;if(N){var $=f==="fixed",B=g&&!$,Q=sS({maxHeight:a,menuEl:N,minHeight:l,placement:u,shouldScroll:B,isFixedPosition:$,controlHeight:F});x(Q.maxHeight),T(Q.placement),m==null||m(Q.placement)}},[a,u,f,g,l,m,F]),o({ref:v,placerProps:se(se({},r),{},{placement:R||t0(u),maxHeight:b})})},fS=function(r){var o=r.children,l=r.innerRef,a=r.innerProps;return ie("div",ue({},Qe(r,"menu",{menu:!0}),{ref:l},a),o)},pS=fS,hS=function(r,o){var l=r.maxHeight,a=r.theme.spacing.baseUnit;return se({maxHeight:l,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},o?{}:{paddingBottom:a,paddingTop:a})},mS=function(r){var o=r.children,l=r.innerProps,a=r.innerRef,u=r.isMulti;return ie("div",ue({},Qe(r,"menuList",{"menu-list":!0,"menu-list--is-multi":u}),{ref:a},l),o)},r0=function(r,o){var l=r.theme,a=l.spacing.baseUnit,u=l.colors;return se({textAlign:"center"},o?{}:{color:u.neutral40,padding:"".concat(a*2,"px ").concat(a*3,"px")})},gS=r0,vS=r0,yS=function(r){var o=r.children,l=o===void 0?"No options":o,a=r.innerProps,u=Cn(r,aS);return ie("div",ue({},Qe(se(se({},u),{},{children:l,innerProps:a}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),a),l)},bS=function(r){var o=r.children,l=o===void 0?"Loading...":o,a=r.innerProps,u=Cn(r,lS);return ie("div",ue({},Qe(se(se({},u),{},{children:l,innerProps:a}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),a),l)},xS=function(r){var o=r.rect,l=r.offset,a=r.position;return{left:o.left,position:a,top:l,width:o.width,zIndex:1}},wS=function(r){var o=r.appendTo,l=r.children,a=r.controlElement,u=r.innerProps,f=r.menuPlacement,g=r.menuPosition,c=O.useRef(null),p=O.useRef(null),m=O.useState(t0(f)),v=Sn(m,2),w=v[0],k=v[1],b=O.useMemo(function(){return{setPortalPlacement:k}},[]),x=O.useState(null),S=Sn(x,2),E=S[0],R=S[1],T=O.useCallback(function(){if(a){var B=Z2(a),Q=g==="fixed"?0:window.pageYOffset,X=B[w]+Q;(X!==(E==null?void 0:E.offset)||B.left!==(E==null?void 0:E.rect.left)||B.width!==(E==null?void 0:E.rect.width))&&R({offset:X,rect:B})}},[a,g,w,E==null?void 0:E.offset,E==null?void 0:E.rect.left,E==null?void 0:E.rect.width]);Gu(function(){T()},[T]);var F=O.useCallback(function(){typeof p.current=="function"&&(p.current(),p.current=null),a&&c.current&&(p.current=W2(a,c.current,T,{elementResize:"ResizeObserver"in window}))},[a,T]);Gu(function(){F()},[F]);var N=O.useCallback(function(B){c.current=B,F()},[F]);if(!o&&g!=="fixed"||!E)return null;var $=ie("div",ue({ref:N},Qe(se(se({},r),{},{offset:E.offset,position:g,rect:E.rect}),"menuPortal",{"menu-portal":!0}),u),l);return ie(n0.Provider,{value:b},o?ey.createPortal($,o):$)},SS=function(r){var o=r.isDisabled,l=r.isRtl;return{label:"container",direction:l?"rtl":void 0,pointerEvents:o?"none":void 0,position:"relative"}},kS=function(r){var o=r.children,l=r.innerProps,a=r.isDisabled,u=r.isRtl;return ie("div",ue({},Qe(r,"container",{"--is-disabled":a,"--is-rtl":u}),l),o)},CS=function(r,o){var l=r.theme.spacing,a=r.isMulti,u=r.hasValue,f=r.selectProps.controlShouldRenderValue;return se({alignItems:"center",display:a&&u&&f?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},o?{}:{padding:"".concat(l.baseUnit/2,"px ").concat(l.baseUnit*2,"px")})},ES=function(r){var o=r.children,l=r.innerProps,a=r.isMulti,u=r.hasValue;return ie("div",ue({},Qe(r,"valueContainer",{"value-container":!0,"value-container--is-multi":a,"value-container--has-value":u}),l),o)},PS=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},OS=function(r){var o=r.children,l=r.innerProps;return ie("div",ue({},Qe(r,"indicatorsContainer",{indicators:!0}),l),o)},gh,RS=["size"],_S=["innerProps","isRtl","size"],TS={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},o0=function(r){var o=r.size,l=Cn(r,RS);return ie("svg",ue({height:o,width:o,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:TS},l))},yc=function(r){return ie(o0,ue({size:20},r),ie("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},i0=function(r){return ie(o0,ue({size:20},r),ie("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},a0=function(r,o){var l=r.isFocused,a=r.theme,u=a.spacing.baseUnit,f=a.colors;return se({label:"indicatorContainer",display:"flex",transition:"color 150ms"},o?{}:{color:l?f.neutral60:f.neutral20,padding:u*2,":hover":{color:l?f.neutral80:f.neutral40}})},MS=a0,NS=function(r){var o=r.children,l=r.innerProps;return ie("div",ue({},Qe(r,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),l),o||ie(i0,null))},IS=a0,LS=function(r){var o=r.children,l=r.innerProps;return ie("div",ue({},Qe(r,"clearIndicator",{indicator:!0,"clear-indicator":!0}),l),o||ie(yc,null))},DS=function(r,o){var l=r.isDisabled,a=r.theme,u=a.spacing.baseUnit,f=a.colors;return se({label:"indicatorSeparator",alignSelf:"stretch",width:1},o?{}:{backgroundColor:l?f.neutral10:f.neutral20,marginBottom:u*2,marginTop:u*2})},AS=function(r){var o=r.innerProps;return ie("span",ue({},o,Qe(r,"indicatorSeparator",{"indicator-separator":!0})))},zS=N2(gh||(gh=I2([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),FS=function(r,o){var l=r.isFocused,a=r.size,u=r.theme,f=u.colors,g=u.spacing.baseUnit;return se({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:a,lineHeight:1,marginRight:a,textAlign:"center",verticalAlign:"middle"},o?{}:{color:l?f.neutral60:f.neutral20,padding:g*2})},Pu=function(r){var o=r.delay,l=r.offset;return ie("span",{css:hc({animation:"".concat(zS," 1s ease-in-out ").concat(o,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:l?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},jS=function(r){var o=r.innerProps,l=r.isRtl,a=r.size,u=a===void 0?4:a,f=Cn(r,_S);return ie("div",ue({},Qe(se(se({},f),{},{innerProps:o,isRtl:l,size:u}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),o),ie(Pu,{delay:0,offset:l}),ie(Pu,{delay:160,offset:!0}),ie(Pu,{delay:320,offset:!l}))},VS=function(r,o){var l=r.isDisabled,a=r.isFocused,u=r.theme,f=u.colors,g=u.borderRadius,c=u.spacing;return se({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:c.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},o?{}:{backgroundColor:l?f.neutral5:f.neutral0,borderColor:l?f.neutral10:a?f.primary:f.neutral20,borderRadius:g,borderStyle:"solid",borderWidth:1,boxShadow:a?"0 0 0 1px ".concat(f.primary):void 0,"&:hover":{borderColor:a?f.primary:f.neutral30}})},$S=function(r){var o=r.children,l=r.isDisabled,a=r.isFocused,u=r.innerRef,f=r.innerProps,g=r.menuIsOpen;return ie("div",ue({ref:u},Qe(r,"control",{control:!0,"control--is-disabled":l,"control--is-focused":a,"control--menu-is-open":g}),f,{"aria-disabled":l||void 0}),o)},BS=$S,US=["data"],HS=function(r,o){var l=r.theme.spacing;return o?{}:{paddingBottom:l.baseUnit*2,paddingTop:l.baseUnit*2}},qS=function(r){var o=r.children,l=r.cx,a=r.getStyles,u=r.getClassNames,f=r.Heading,g=r.headingProps,c=r.innerProps,p=r.label,m=r.theme,v=r.selectProps;return ie("div",ue({},Qe(r,"group",{group:!0}),c),ie(f,ue({},g,{selectProps:v,theme:m,getStyles:a,getClassNames:u,cx:l}),p),ie("div",null,o))},WS=function(r,o){var l=r.theme,a=l.colors,u=l.spacing;return se({label:"group",cursor:"default",display:"block"},o?{}:{color:a.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:u.baseUnit*3,paddingRight:u.baseUnit*3,textTransform:"uppercase"})},QS=function(r){var o=Jm(r);o.data;var l=Cn(o,US);return ie("div",ue({},Qe(r,"groupHeading",{"group-heading":!0}),l))},KS=qS,YS=["innerRef","isDisabled","isHidden","inputClassName"],GS=function(r,o){var l=r.isDisabled,a=r.value,u=r.theme,f=u.spacing,g=u.colors;return se(se({visibility:l?"hidden":"visible",transform:a?"translateZ(0)":""},XS),o?{}:{margin:f.baseUnit/2,paddingBottom:f.baseUnit/2,paddingTop:f.baseUnit/2,color:g.neutral80})},l0={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},XS={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":se({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},l0)},JS=function(r){return se({label:"input",color:"inherit",background:0,opacity:r?0:1,width:"100%"},l0)},ZS=function(r){var o=r.cx,l=r.value,a=Jm(r),u=a.innerRef,f=a.isDisabled,g=a.isHidden,c=a.inputClassName,p=Cn(a,YS);return ie("div",ue({},Qe(r,"input",{"input-container":!0}),{"data-value":l||""}),ie("input",ue({className:o({input:!0},c),ref:u,style:JS(g),disabled:f},p)))},e5=ZS,t5=function(r,o){var l=r.theme,a=l.spacing,u=l.borderRadius,f=l.colors;return se({label:"multiValue",display:"flex",minWidth:0},o?{}:{backgroundColor:f.neutral10,borderRadius:u/2,margin:a.baseUnit/2})},n5=function(r,o){var l=r.theme,a=l.borderRadius,u=l.colors,f=r.cropWithEllipsis;return se({overflow:"hidden",textOverflow:f||f===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},o?{}:{borderRadius:a/2,color:u.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},r5=function(r,o){var l=r.theme,a=l.spacing,u=l.borderRadius,f=l.colors,g=r.isFocused;return se({alignItems:"center",display:"flex"},o?{}:{borderRadius:u/2,backgroundColor:g?f.dangerLight:void 0,paddingLeft:a.baseUnit,paddingRight:a.baseUnit,":hover":{backgroundColor:f.dangerLight,color:f.danger}})},s0=function(r){var o=r.children,l=r.innerProps;return ie("div",l,o)},o5=s0,i5=s0;function a5(n){var r=n.children,o=n.innerProps;return ie("div",ue({role:"button"},o),r||ie(yc,{size:14}))}var l5=function(r){var o=r.children,l=r.components,a=r.data,u=r.innerProps,f=r.isDisabled,g=r.removeProps,c=r.selectProps,p=l.Container,m=l.Label,v=l.Remove;return ie(p,{data:a,innerProps:se(se({},Qe(r,"multiValue",{"multi-value":!0,"multi-value--is-disabled":f})),u),selectProps:c},ie(m,{data:a,innerProps:se({},Qe(r,"multiValueLabel",{"multi-value__label":!0})),selectProps:c},o),ie(v,{data:a,innerProps:se(se({},Qe(r,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(o||"option")},g),selectProps:c}))},s5=l5,u5=function(r,o){var l=r.isDisabled,a=r.isFocused,u=r.isSelected,f=r.theme,g=f.spacing,c=f.colors;return se({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},o?{}:{backgroundColor:u?c.primary:a?c.primary25:"transparent",color:l?c.neutral20:u?c.neutral0:"inherit",padding:"".concat(g.baseUnit*2,"px ").concat(g.baseUnit*3,"px"),":active":{backgroundColor:l?void 0:u?c.primary:c.primary50}})},c5=function(r){var o=r.children,l=r.isDisabled,a=r.isFocused,u=r.isSelected,f=r.innerRef,g=r.innerProps;return ie("div",ue({},Qe(r,"option",{option:!0,"option--is-disabled":l,"option--is-focused":a,"option--is-selected":u}),{ref:f,"aria-disabled":l},g),o)},d5=c5,f5=function(r,o){var l=r.theme,a=l.spacing,u=l.colors;return se({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},o?{}:{color:u.neutral50,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},p5=function(r){var o=r.children,l=r.innerProps;return ie("div",ue({},Qe(r,"placeholder",{placeholder:!0}),l),o)},h5=p5,m5=function(r,o){var l=r.isDisabled,a=r.theme,u=a.spacing,f=a.colors;return se({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o?{}:{color:l?f.neutral40:f.neutral80,marginLeft:u.baseUnit/2,marginRight:u.baseUnit/2})},g5=function(r){var o=r.children,l=r.isDisabled,a=r.innerProps;return ie("div",ue({},Qe(r,"singleValue",{"single-value":!0,"single-value--is-disabled":l}),a),o)},v5=g5,y5={ClearIndicator:LS,Control:BS,DropdownIndicator:NS,DownChevron:i0,CrossIcon:yc,Group:KS,GroupHeading:QS,IndicatorsContainer:OS,IndicatorSeparator:AS,Input:e5,LoadingIndicator:jS,Menu:pS,MenuList:mS,MenuPortal:wS,LoadingMessage:bS,NoOptionsMessage:yS,MultiValue:s5,MultiValueContainer:o5,MultiValueLabel:i5,MultiValueRemove:a5,Option:d5,Placeholder:h5,SelectContainer:kS,SingleValue:v5,ValueContainer:ES},b5=function(r){return se(se({},y5),r.components)},vh=Number.isNaN||function(r){return typeof r=="number"&&r!==r};function x5(n,r){return!!(n===r||vh(n)&&vh(r))}function w5(n,r){if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!x5(n[o],r[o]))return!1;return!0}function S5(n,r){r===void 0&&(r=w5);var o=null;function l(){for(var a=[],u=0;u<arguments.length;u++)a[u]=arguments[u];if(o&&o.lastThis===this&&r(a,o.lastArgs))return o.lastResult;var f=n.apply(this,a);return o={lastResult:f,lastArgs:a,lastThis:this},f}return l.clear=function(){o=null},l}var k5={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},C5=function(r){return ie("span",ue({css:k5},r))},yh=C5,E5={guidance:function(r){var o=r.isSearchable,l=r.isMulti,a=r.tabSelectsValue,u=r.context,f=r.isInitialFocus;switch(u){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(a?", press Tab to select the option and exit the menu":"",".");case"input":return f?"".concat(r["aria-label"]||"Select"," is focused ").concat(o?",type to refine list":"",", press Down to open the menu, ").concat(l?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(r){var o=r.action,l=r.label,a=l===void 0?"":l,u=r.labels,f=r.isDisabled;switch(o){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(a,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(u.length>1?"s":""," ").concat(u.join(","),", selected.");case"select-option":return f?"option ".concat(a," is disabled. Select another option."):"option ".concat(a,", selected.");default:return""}},onFocus:function(r){var o=r.context,l=r.focused,a=r.options,u=r.label,f=u===void 0?"":u,g=r.selectValue,c=r.isDisabled,p=r.isSelected,m=r.isAppleDevice,v=function(x,S){return x&&x.length?"".concat(x.indexOf(S)+1," of ").concat(x.length):""};if(o==="value"&&g)return"value ".concat(f," focused, ").concat(v(g,l),".");if(o==="menu"&&m){var w=c?" disabled":"",k="".concat(p?" selected":"").concat(w);return"".concat(f).concat(k,", ").concat(v(a,l),".")}return""},onFilter:function(r){var o=r.inputValue,l=r.resultsMessage;return"".concat(l).concat(o?" for search term "+o:"",".")}},P5=function(r){var o=r.ariaSelection,l=r.focusedOption,a=r.focusedValue,u=r.focusableOptions,f=r.isFocused,g=r.selectValue,c=r.selectProps,p=r.id,m=r.isAppleDevice,v=c.ariaLiveMessages,w=c.getOptionLabel,k=c.inputValue,b=c.isMulti,x=c.isOptionDisabled,S=c.isSearchable,E=c.menuIsOpen,R=c.options,T=c.screenReaderStatus,F=c.tabSelectsValue,N=c.isLoading,$=c["aria-label"],B=c["aria-live"],Q=O.useMemo(function(){return se(se({},E5),v||{})},[v]),X=O.useMemo(function(){var ge="";if(o&&Q.onChange){var we=o.option,ve=o.options,W=o.removedValue,ee=o.removedValues,K=o.value,M=function(ye){return Array.isArray(ye)?null:ye},j=W||we||M(K),re=j?w(j):"",ce=ve||ee||void 0,he=ce?ce.map(w):[],fe=se({isDisabled:j&&x(j,g),label:re,labels:he},o);ge=Q.onChange(fe)}return ge},[o,Q,x,g,w]),me=O.useMemo(function(){var ge="",we=l||a,ve=!!(l&&g&&g.includes(l));if(we&&Q.onFocus){var W={focused:we,label:w(we),isDisabled:x(we,g),isSelected:ve,options:u,context:we===l?"menu":"value",selectValue:g,isAppleDevice:m};ge=Q.onFocus(W)}return ge},[l,a,w,x,Q,u,g,m]),xe=O.useMemo(function(){var ge="";if(E&&R.length&&!N&&Q.onFilter){var we=T({count:u.length});ge=Q.onFilter({inputValue:k,resultsMessage:we})}return ge},[u,k,E,Q,R,T,N]),Te=(o==null?void 0:o.action)==="initial-input-focus",Le=O.useMemo(function(){var ge="";if(Q.guidance){var we=a?"value":E?"menu":"input";ge=Q.guidance({"aria-label":$,context:we,isDisabled:l&&x(l,g),isMulti:b,isSearchable:S,tabSelectsValue:F,isInitialFocus:Te})}return ge},[$,l,a,b,x,S,E,Q,g,F,Te]),Me=ie(O.Fragment,null,ie("span",{id:"aria-selection"},X),ie("span",{id:"aria-focused"},me),ie("span",{id:"aria-results"},xe),ie("span",{id:"aria-guidance"},Le));return ie(O.Fragment,null,ie(yh,{id:p},Te&&Me),ie(yh,{"aria-live":B,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},f&&!Te&&Me))},O5=P5,Xu=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],R5=new RegExp("["+Xu.map(function(n){return n.letters}).join("")+"]","g"),u0={};for(var Ou=0;Ou<Xu.length;Ou++)for(var Ru=Xu[Ou],_u=0;_u<Ru.letters.length;_u++)u0[Ru.letters[_u]]=Ru.base;var c0=function(r){return r.replace(R5,function(o){return u0[o]})},_5=S5(c0),bh=function(r){return r.replace(/^\s+|\s+$/g,"")},T5=function(r){return"".concat(r.label," ").concat(r.value)},M5=function(r){return function(o,l){if(o.data.__isNew__)return!0;var a=se({ignoreCase:!0,ignoreAccents:!0,stringify:T5,trim:!0,matchFrom:"any"},r),u=a.ignoreCase,f=a.ignoreAccents,g=a.stringify,c=a.trim,p=a.matchFrom,m=c?bh(l):l,v=c?bh(g(o)):g(o);return u&&(m=m.toLowerCase(),v=v.toLowerCase()),f&&(m=_5(m),v=c0(v)),p==="start"?v.substr(0,m.length)===m:v.indexOf(m)>-1}},N5=["innerRef"];function I5(n){var r=n.innerRef,o=Cn(n,N5),l=iS(o,"onExited","in","enter","exit","appear");return ie("input",ue({ref:r},l,{css:hc({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var L5=function(r){r.cancelable&&r.preventDefault(),r.stopPropagation()};function D5(n){var r=n.isEnabled,o=n.onBottomArrive,l=n.onBottomLeave,a=n.onTopArrive,u=n.onTopLeave,f=O.useRef(!1),g=O.useRef(!1),c=O.useRef(0),p=O.useRef(null),m=O.useCallback(function(S,E){if(p.current!==null){var R=p.current,T=R.scrollTop,F=R.scrollHeight,N=R.clientHeight,$=p.current,B=E>0,Q=F-N-T,X=!1;Q>E&&f.current&&(l&&l(S),f.current=!1),B&&g.current&&(u&&u(S),g.current=!1),B&&E>Q?(o&&!f.current&&o(S),$.scrollTop=F,X=!0,f.current=!0):!B&&-E>T&&(a&&!g.current&&a(S),$.scrollTop=0,X=!0,g.current=!0),X&&L5(S)}},[o,l,a,u]),v=O.useCallback(function(S){m(S,S.deltaY)},[m]),w=O.useCallback(function(S){c.current=S.changedTouches[0].clientY},[]),k=O.useCallback(function(S){var E=c.current-S.changedTouches[0].clientY;m(S,E)},[m]),b=O.useCallback(function(S){if(S){var E=nS?{passive:!1}:!1;S.addEventListener("wheel",v,E),S.addEventListener("touchstart",w,E),S.addEventListener("touchmove",k,E)}},[k,w,v]),x=O.useCallback(function(S){S&&(S.removeEventListener("wheel",v,!1),S.removeEventListener("touchstart",w,!1),S.removeEventListener("touchmove",k,!1))},[k,w,v]);return O.useEffect(function(){if(r){var S=p.current;return b(S),function(){x(S)}}},[r,b,x]),function(S){p.current=S}}var xh=["boxSizing","height","overflow","paddingRight","position"],wh={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Sh(n){n.cancelable&&n.preventDefault()}function kh(n){n.stopPropagation()}function Ch(){var n=this.scrollTop,r=this.scrollHeight,o=n+this.offsetHeight;n===0?this.scrollTop=1:o===r&&(this.scrollTop=n-1)}function Eh(){return"ontouchstart"in window||navigator.maxTouchPoints}var Ph=!!(typeof window<"u"&&window.document&&window.document.createElement),Ho=0,Br={capture:!1,passive:!1};function A5(n){var r=n.isEnabled,o=n.accountForScrollbars,l=o===void 0?!0:o,a=O.useRef({}),u=O.useRef(null),f=O.useCallback(function(c){if(Ph){var p=document.body,m=p&&p.style;if(l&&xh.forEach(function(b){var x=m&&m[b];a.current[b]=x}),l&&Ho<1){var v=parseInt(a.current.paddingRight,10)||0,w=document.body?document.body.clientWidth:0,k=window.innerWidth-w+v||0;Object.keys(wh).forEach(function(b){var x=wh[b];m&&(m[b]=x)}),m&&(m.paddingRight="".concat(k,"px"))}p&&Eh()&&(p.addEventListener("touchmove",Sh,Br),c&&(c.addEventListener("touchstart",Ch,Br),c.addEventListener("touchmove",kh,Br))),Ho+=1}},[l]),g=O.useCallback(function(c){if(Ph){var p=document.body,m=p&&p.style;Ho=Math.max(Ho-1,0),l&&Ho<1&&xh.forEach(function(v){var w=a.current[v];m&&(m[v]=w)}),p&&Eh()&&(p.removeEventListener("touchmove",Sh,Br),c&&(c.removeEventListener("touchstart",Ch,Br),c.removeEventListener("touchmove",kh,Br)))}},[l]);return O.useEffect(function(){if(r){var c=u.current;return f(c),function(){g(c)}}},[r,f,g]),function(c){u.current=c}}var z5=function(r){var o=r.target;return o.ownerDocument.activeElement&&o.ownerDocument.activeElement.blur()},F5={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function j5(n){var r=n.children,o=n.lockEnabled,l=n.captureEnabled,a=l===void 0?!0:l,u=n.onBottomArrive,f=n.onBottomLeave,g=n.onTopArrive,c=n.onTopLeave,p=D5({isEnabled:a,onBottomArrive:u,onBottomLeave:f,onTopArrive:g,onTopLeave:c}),m=A5({isEnabled:o}),v=function(k){p(k),m(k)};return ie(O.Fragment,null,o&&ie("div",{onClick:z5,css:F5}),r(v))}var V5={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},$5=function(r){var o=r.name,l=r.onFocus;return ie("input",{required:!0,name:o,tabIndex:-1,"aria-hidden":"true",onFocus:l,css:V5,value:"",onChange:function(){}})},B5=$5;function bc(n){var r;return typeof window<"u"&&window.navigator!=null?n.test(((r=window.navigator.userAgentData)===null||r===void 0?void 0:r.platform)||window.navigator.platform):!1}function U5(){return bc(/^iPhone/i)}function d0(){return bc(/^Mac/i)}function H5(){return bc(/^iPad/i)||d0()&&navigator.maxTouchPoints>1}function q5(){return U5()||H5()}function W5(){return d0()||q5()}var Q5=function(r){return r.label},K5=function(r){return r.label},Y5=function(r){return r.value},G5=function(r){return!!r.isDisabled},X5={clearIndicator:IS,container:SS,control:VS,dropdownIndicator:MS,group:HS,groupHeading:WS,indicatorsContainer:PS,indicatorSeparator:DS,input:GS,loadingIndicator:FS,loadingMessage:vS,menu:cS,menuList:hS,menuPortal:xS,multiValue:t5,multiValueLabel:n5,multiValueRemove:r5,noOptionsMessage:gS,option:u5,placeholder:f5,singleValue:m5,valueContainer:CS},J5={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Z5=4,f0=4,ek=38,tk=f0*2,nk={baseUnit:f0,controlHeight:ek,menuGutter:tk},Tu={borderRadius:Z5,colors:J5,spacing:nk},rk={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:mh(),captureMenuScroll:!mh(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:M5(),formatGroupLabel:Q5,getOptionLabel:K5,getOptionValue:Y5,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:G5,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!eS(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(r){var o=r.count;return"".concat(o," result").concat(o!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Oh(n,r,o,l){var a=m0(n,r,o),u=g0(n,r,o),f=h0(n,r),g=tl(n,r);return{type:"option",data:r,isDisabled:a,isSelected:u,label:f,value:g,index:l}}function Va(n,r){return n.options.map(function(o,l){if("options"in o){var a=o.options.map(function(f,g){return Oh(n,f,r,g)}).filter(function(f){return _h(n,f)});return a.length>0?{type:"group",data:o,options:a,index:l}:void 0}var u=Oh(n,o,r,l);return _h(n,u)?u:void 0}).filter(rS)}function p0(n){return n.reduce(function(r,o){return o.type==="group"?r.push.apply(r,uc(o.options.map(function(l){return l.data}))):r.push(o.data),r},[])}function Rh(n,r){return n.reduce(function(o,l){return l.type==="group"?o.push.apply(o,uc(l.options.map(function(a){return{data:a.data,id:"".concat(r,"-").concat(l.index,"-").concat(a.index)}}))):o.push({data:l.data,id:"".concat(r,"-").concat(l.index)}),o},[])}function ok(n,r){return p0(Va(n,r))}function _h(n,r){var o=n.inputValue,l=o===void 0?"":o,a=r.data,u=r.isSelected,f=r.label,g=r.value;return(!y0(n)||!u)&&v0(n,{label:f,value:g,data:a},l)}function ik(n,r){var o=n.focusedValue,l=n.selectValue,a=l.indexOf(o);if(a>-1){var u=r.indexOf(o);if(u>-1)return o;if(a<r.length)return r[a]}return null}function ak(n,r){var o=n.focusedOption;return o&&r.indexOf(o)>-1?o:r[0]}var Mu=function(r,o){var l,a=(l=r.find(function(u){return u.data===o}))===null||l===void 0?void 0:l.id;return a||null},h0=function(r,o){return r.getOptionLabel(o)},tl=function(r,o){return r.getOptionValue(o)};function m0(n,r,o){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(r,o):!1}function g0(n,r,o){if(o.indexOf(r)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(r,o);var l=tl(n,r);return o.some(function(a){return tl(n,a)===l})}function v0(n,r,o){return n.filterOption?n.filterOption(r,o):!0}var y0=function(r){var o=r.hideSelectedOptions,l=r.isMulti;return o===void 0?l:o},lk=1,b0=function(n){Ew(o,n);var r=Rw(o);function o(l){var a;if(kw(this,o),a=r.call(this,l),a.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},a.blockOptionHover=!1,a.isComposing=!1,a.commonProps=void 0,a.initialTouchX=0,a.initialTouchY=0,a.openAfterFocus=!1,a.scrollToFocusedOptionOnUpdate=!1,a.userIsDragging=void 0,a.isAppleDevice=W5(),a.controlRef=null,a.getControlRef=function(c){a.controlRef=c},a.focusedOptionRef=null,a.getFocusedOptionRef=function(c){a.focusedOptionRef=c},a.menuListRef=null,a.getMenuListRef=function(c){a.menuListRef=c},a.inputRef=null,a.getInputRef=function(c){a.inputRef=c},a.focus=a.focusInput,a.blur=a.blurInput,a.onChange=function(c,p){var m=a.props,v=m.onChange,w=m.name;p.name=w,a.ariaOnChange(c,p),v(c,p)},a.setValue=function(c,p,m){var v=a.props,w=v.closeMenuOnSelect,k=v.isMulti,b=v.inputValue;a.onInputChange("",{action:"set-value",prevInputValue:b}),w&&(a.setState({inputIsHiddenAfterUpdate:!k}),a.onMenuClose()),a.setState({clearFocusValueOnUpdate:!0}),a.onChange(c,{action:p,option:m})},a.selectOption=function(c){var p=a.props,m=p.blurInputOnSelect,v=p.isMulti,w=p.name,k=a.state.selectValue,b=v&&a.isOptionSelected(c,k),x=a.isOptionDisabled(c,k);if(b){var S=a.getOptionValue(c);a.setValue(k.filter(function(E){return a.getOptionValue(E)!==S}),"deselect-option",c)}else if(!x)v?a.setValue([].concat(uc(k),[c]),"select-option",c):a.setValue(c,"select-option");else{a.ariaOnChange(c,{action:"select-option",option:c,name:w});return}m&&a.blurInput()},a.removeValue=function(c){var p=a.props.isMulti,m=a.state.selectValue,v=a.getOptionValue(c),w=m.filter(function(b){return a.getOptionValue(b)!==v}),k=Ma(p,w,w[0]||null);a.onChange(k,{action:"remove-value",removedValue:c}),a.focusInput()},a.clearValue=function(){var c=a.state.selectValue;a.onChange(Ma(a.props.isMulti,[],null),{action:"clear",removedValues:c})},a.popValue=function(){var c=a.props.isMulti,p=a.state.selectValue,m=p[p.length-1],v=p.slice(0,p.length-1),w=Ma(c,v,v[0]||null);m&&a.onChange(w,{action:"pop-value",removedValue:m})},a.getFocusedOptionId=function(c){return Mu(a.state.focusableOptionsWithIds,c)},a.getFocusableOptionsWithIds=function(){return Rh(Va(a.props,a.state.selectValue),a.getElementId("option"))},a.getValue=function(){return a.state.selectValue},a.cx=function(){for(var c=arguments.length,p=new Array(c),m=0;m<c;m++)p[m]=arguments[m];return Y2.apply(void 0,[a.props.classNamePrefix].concat(p))},a.getOptionLabel=function(c){return h0(a.props,c)},a.getOptionValue=function(c){return tl(a.props,c)},a.getStyles=function(c,p){var m=a.props.unstyled,v=X5[c](p,m);v.boxSizing="border-box";var w=a.props.styles[c];return w?w(v,p):v},a.getClassNames=function(c,p){var m,v;return(m=(v=a.props.classNames)[c])===null||m===void 0?void 0:m.call(v,p)},a.getElementId=function(c){return"".concat(a.state.instancePrefix,"-").concat(c)},a.getComponents=function(){return b5(a.props)},a.buildCategorizedOptions=function(){return Va(a.props,a.state.selectValue)},a.getCategorizedOptions=function(){return a.props.menuIsOpen?a.buildCategorizedOptions():[]},a.buildFocusableOptions=function(){return p0(a.buildCategorizedOptions())},a.getFocusableOptions=function(){return a.props.menuIsOpen?a.buildFocusableOptions():[]},a.ariaOnChange=function(c,p){a.setState({ariaSelection:se({value:c},p)})},a.onMenuMouseDown=function(c){c.button===0&&(c.stopPropagation(),c.preventDefault(),a.focusInput())},a.onMenuMouseMove=function(c){a.blockOptionHover=!1},a.onControlMouseDown=function(c){if(!c.defaultPrevented){var p=a.props.openMenuOnClick;a.state.isFocused?a.props.menuIsOpen?c.target.tagName!=="INPUT"&&c.target.tagName!=="TEXTAREA"&&a.onMenuClose():p&&a.openMenu("first"):(p&&(a.openAfterFocus=!0),a.focusInput()),c.target.tagName!=="INPUT"&&c.target.tagName!=="TEXTAREA"&&c.preventDefault()}},a.onDropdownIndicatorMouseDown=function(c){if(!(c&&c.type==="mousedown"&&c.button!==0)&&!a.props.isDisabled){var p=a.props,m=p.isMulti,v=p.menuIsOpen;a.focusInput(),v?(a.setState({inputIsHiddenAfterUpdate:!m}),a.onMenuClose()):a.openMenu("first"),c.preventDefault()}},a.onClearIndicatorMouseDown=function(c){c&&c.type==="mousedown"&&c.button!==0||(a.clearValue(),c.preventDefault(),a.openAfterFocus=!1,c.type==="touchend"?a.focusInput():setTimeout(function(){return a.focusInput()}))},a.onScroll=function(c){typeof a.props.closeMenuOnScroll=="boolean"?c.target instanceof HTMLElement&&yl(c.target)&&a.props.onMenuClose():typeof a.props.closeMenuOnScroll=="function"&&a.props.closeMenuOnScroll(c)&&a.props.onMenuClose()},a.onCompositionStart=function(){a.isComposing=!0},a.onCompositionEnd=function(){a.isComposing=!1},a.onTouchStart=function(c){var p=c.touches,m=p&&p.item(0);m&&(a.initialTouchX=m.clientX,a.initialTouchY=m.clientY,a.userIsDragging=!1)},a.onTouchMove=function(c){var p=c.touches,m=p&&p.item(0);if(m){var v=Math.abs(m.clientX-a.initialTouchX),w=Math.abs(m.clientY-a.initialTouchY),k=5;a.userIsDragging=v>k||w>k}},a.onTouchEnd=function(c){a.userIsDragging||(a.controlRef&&!a.controlRef.contains(c.target)&&a.menuListRef&&!a.menuListRef.contains(c.target)&&a.blurInput(),a.initialTouchX=0,a.initialTouchY=0)},a.onControlTouchEnd=function(c){a.userIsDragging||a.onControlMouseDown(c)},a.onClearIndicatorTouchEnd=function(c){a.userIsDragging||a.onClearIndicatorMouseDown(c)},a.onDropdownIndicatorTouchEnd=function(c){a.userIsDragging||a.onDropdownIndicatorMouseDown(c)},a.handleInputChange=function(c){var p=a.props.inputValue,m=c.currentTarget.value;a.setState({inputIsHiddenAfterUpdate:!1}),a.onInputChange(m,{action:"input-change",prevInputValue:p}),a.props.menuIsOpen||a.onMenuOpen()},a.onInputFocus=function(c){a.props.onFocus&&a.props.onFocus(c),a.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(a.openAfterFocus||a.props.openMenuOnFocus)&&a.openMenu("first"),a.openAfterFocus=!1},a.onInputBlur=function(c){var p=a.props.inputValue;if(a.menuListRef&&a.menuListRef.contains(document.activeElement)){a.inputRef.focus();return}a.props.onBlur&&a.props.onBlur(c),a.onInputChange("",{action:"input-blur",prevInputValue:p}),a.onMenuClose(),a.setState({focusedValue:null,isFocused:!1})},a.onOptionHover=function(c){if(!(a.blockOptionHover||a.state.focusedOption===c)){var p=a.getFocusableOptions(),m=p.indexOf(c);a.setState({focusedOption:c,focusedOptionId:m>-1?a.getFocusedOptionId(c):null})}},a.shouldHideSelectedOptions=function(){return y0(a.props)},a.onValueInputFocus=function(c){c.preventDefault(),c.stopPropagation(),a.focus()},a.onKeyDown=function(c){var p=a.props,m=p.isMulti,v=p.backspaceRemovesValue,w=p.escapeClearsValue,k=p.inputValue,b=p.isClearable,x=p.isDisabled,S=p.menuIsOpen,E=p.onKeyDown,R=p.tabSelectsValue,T=p.openMenuOnFocus,F=a.state,N=F.focusedOption,$=F.focusedValue,B=F.selectValue;if(!x&&!(typeof E=="function"&&(E(c),c.defaultPrevented))){switch(a.blockOptionHover=!0,c.key){case"ArrowLeft":if(!m||k)return;a.focusValue("previous");break;case"ArrowRight":if(!m||k)return;a.focusValue("next");break;case"Delete":case"Backspace":if(k)return;if($)a.removeValue($);else{if(!v)return;m?a.popValue():b&&a.clearValue()}break;case"Tab":if(a.isComposing||c.shiftKey||!S||!R||!N||T&&a.isOptionSelected(N,B))return;a.selectOption(N);break;case"Enter":if(c.keyCode===229)break;if(S){if(!N||a.isComposing)return;a.selectOption(N);break}return;case"Escape":S?(a.setState({inputIsHiddenAfterUpdate:!1}),a.onInputChange("",{action:"menu-close",prevInputValue:k}),a.onMenuClose()):b&&w&&a.clearValue();break;case" ":if(k)return;if(!S){a.openMenu("first");break}if(!N)return;a.selectOption(N);break;case"ArrowUp":S?a.focusOption("up"):a.openMenu("last");break;case"ArrowDown":S?a.focusOption("down"):a.openMenu("first");break;case"PageUp":if(!S)return;a.focusOption("pageup");break;case"PageDown":if(!S)return;a.focusOption("pagedown");break;case"Home":if(!S)return;a.focusOption("first");break;case"End":if(!S)return;a.focusOption("last");break;default:return}c.preventDefault()}},a.state.instancePrefix="react-select-"+(a.props.instanceId||++lk),a.state.selectValue=ph(l.value),l.menuIsOpen&&a.state.selectValue.length){var u=a.getFocusableOptionsWithIds(),f=a.buildFocusableOptions(),g=f.indexOf(a.state.selectValue[0]);a.state.focusableOptionsWithIds=u,a.state.focusedOption=f[g],a.state.focusedOptionId=Mu(u,f[g])}return a}return Cw(o,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&hh(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(a){var u=this.props,f=u.isDisabled,g=u.menuIsOpen,c=this.state.isFocused;(c&&!f&&a.isDisabled||c&&g&&!a.menuIsOpen)&&this.focusInput(),c&&f&&!a.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!c&&!f&&a.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(hh(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(a,u){this.props.onInputChange(a,u)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(a){var u=this,f=this.state,g=f.selectValue,c=f.isFocused,p=this.buildFocusableOptions(),m=a==="first"?0:p.length-1;if(!this.props.isMulti){var v=p.indexOf(g[0]);v>-1&&(m=v)}this.scrollToFocusedOptionOnUpdate=!(c&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:p[m],focusedOptionId:this.getFocusedOptionId(p[m])},function(){return u.onMenuOpen()})}},{key:"focusValue",value:function(a){var u=this.state,f=u.selectValue,g=u.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var c=f.indexOf(g);g||(c=-1);var p=f.length-1,m=-1;if(f.length){switch(a){case"previous":c===0?m=0:c===-1?m=p:m=c-1;break;case"next":c>-1&&c<p&&(m=c+1);break}this.setState({inputIsHidden:m!==-1,focusedValue:f[m]})}}}},{key:"focusOption",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",u=this.props.pageSize,f=this.state.focusedOption,g=this.getFocusableOptions();if(g.length){var c=0,p=g.indexOf(f);f||(p=-1),a==="up"?c=p>0?p-1:g.length-1:a==="down"?c=(p+1)%g.length:a==="pageup"?(c=p-u,c<0&&(c=0)):a==="pagedown"?(c=p+u,c>g.length-1&&(c=g.length-1)):a==="last"&&(c=g.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:g[c],focusedValue:null,focusedOptionId:this.getFocusedOptionId(g[c])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Tu):se(se({},Tu),this.props.theme):Tu}},{key:"getCommonProps",value:function(){var a=this.clearValue,u=this.cx,f=this.getStyles,g=this.getClassNames,c=this.getValue,p=this.selectOption,m=this.setValue,v=this.props,w=v.isMulti,k=v.isRtl,b=v.options,x=this.hasValue();return{clearValue:a,cx:u,getStyles:f,getClassNames:g,getValue:c,hasValue:x,isMulti:w,isRtl:k,options:b,selectOption:p,selectProps:v,setValue:m,theme:this.getTheme()}}},{key:"hasValue",value:function(){var a=this.state.selectValue;return a.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var a=this.props,u=a.isClearable,f=a.isMulti;return u===void 0?f:u}},{key:"isOptionDisabled",value:function(a,u){return m0(this.props,a,u)}},{key:"isOptionSelected",value:function(a,u){return g0(this.props,a,u)}},{key:"filterOption",value:function(a,u){return v0(this.props,a,u)}},{key:"formatOptionLabel",value:function(a,u){if(typeof this.props.formatOptionLabel=="function"){var f=this.props.inputValue,g=this.state.selectValue;return this.props.formatOptionLabel(a,{context:u,inputValue:f,selectValue:g})}else return this.getOptionLabel(a)}},{key:"formatGroupLabel",value:function(a){return this.props.formatGroupLabel(a)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var a=this.props,u=a.isDisabled,f=a.isSearchable,g=a.inputId,c=a.inputValue,p=a.tabIndex,m=a.form,v=a.menuIsOpen,w=a.required,k=this.getComponents(),b=k.Input,x=this.state,S=x.inputIsHidden,E=x.ariaSelection,R=this.commonProps,T=g||this.getElementId("input"),F=se(se(se({"aria-autocomplete":"list","aria-expanded":v,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":w,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},v&&{"aria-controls":this.getElementId("listbox")}),!f&&{"aria-readonly":!0}),this.hasValue()?(E==null?void 0:E.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return f?O.createElement(b,ue({},R,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:T,innerRef:this.getInputRef,isDisabled:u,isHidden:S,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:p,form:m,type:"text",value:c},F)):O.createElement(I5,ue({id:T,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Za,onFocus:this.onInputFocus,disabled:u,tabIndex:p,inputMode:"none",form:m,value:""},F))}},{key:"renderPlaceholderOrValue",value:function(){var a=this,u=this.getComponents(),f=u.MultiValue,g=u.MultiValueContainer,c=u.MultiValueLabel,p=u.MultiValueRemove,m=u.SingleValue,v=u.Placeholder,w=this.commonProps,k=this.props,b=k.controlShouldRenderValue,x=k.isDisabled,S=k.isMulti,E=k.inputValue,R=k.placeholder,T=this.state,F=T.selectValue,N=T.focusedValue,$=T.isFocused;if(!this.hasValue()||!b)return E?null:O.createElement(v,ue({},w,{key:"placeholder",isDisabled:x,isFocused:$,innerProps:{id:this.getElementId("placeholder")}}),R);if(S)return F.map(function(Q,X){var me=Q===N,xe="".concat(a.getOptionLabel(Q),"-").concat(a.getOptionValue(Q));return O.createElement(f,ue({},w,{components:{Container:g,Label:c,Remove:p},isFocused:me,isDisabled:x,key:xe,index:X,removeProps:{onClick:function(){return a.removeValue(Q)},onTouchEnd:function(){return a.removeValue(Q)},onMouseDown:function(Le){Le.preventDefault()}},data:Q}),a.formatOptionLabel(Q,"value"))});if(E)return null;var B=F[0];return O.createElement(m,ue({},w,{data:B,isDisabled:x}),this.formatOptionLabel(B,"value"))}},{key:"renderClearIndicator",value:function(){var a=this.getComponents(),u=a.ClearIndicator,f=this.commonProps,g=this.props,c=g.isDisabled,p=g.isLoading,m=this.state.isFocused;if(!this.isClearable()||!u||c||!this.hasValue()||p)return null;var v={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return O.createElement(u,ue({},f,{innerProps:v,isFocused:m}))}},{key:"renderLoadingIndicator",value:function(){var a=this.getComponents(),u=a.LoadingIndicator,f=this.commonProps,g=this.props,c=g.isDisabled,p=g.isLoading,m=this.state.isFocused;if(!u||!p)return null;var v={"aria-hidden":"true"};return O.createElement(u,ue({},f,{innerProps:v,isDisabled:c,isFocused:m}))}},{key:"renderIndicatorSeparator",value:function(){var a=this.getComponents(),u=a.DropdownIndicator,f=a.IndicatorSeparator;if(!u||!f)return null;var g=this.commonProps,c=this.props.isDisabled,p=this.state.isFocused;return O.createElement(f,ue({},g,{isDisabled:c,isFocused:p}))}},{key:"renderDropdownIndicator",value:function(){var a=this.getComponents(),u=a.DropdownIndicator;if(!u)return null;var f=this.commonProps,g=this.props.isDisabled,c=this.state.isFocused,p={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return O.createElement(u,ue({},f,{innerProps:p,isDisabled:g,isFocused:c}))}},{key:"renderMenu",value:function(){var a=this,u=this.getComponents(),f=u.Group,g=u.GroupHeading,c=u.Menu,p=u.MenuList,m=u.MenuPortal,v=u.LoadingMessage,w=u.NoOptionsMessage,k=u.Option,b=this.commonProps,x=this.state.focusedOption,S=this.props,E=S.captureMenuScroll,R=S.inputValue,T=S.isLoading,F=S.loadingMessage,N=S.minMenuHeight,$=S.maxMenuHeight,B=S.menuIsOpen,Q=S.menuPlacement,X=S.menuPosition,me=S.menuPortalTarget,xe=S.menuShouldBlockScroll,Te=S.menuShouldScrollIntoView,Le=S.noOptionsMessage,Me=S.onMenuScrollToTop,ge=S.onMenuScrollToBottom;if(!B)return null;var we=function(re,ce){var he=re.type,fe=re.data,Ce=re.isDisabled,ye=re.isSelected,Ne=re.label,mt=re.value,Kn=x===fe,Gr=Ce?void 0:function(){return a.onOptionHover(fe)},hr=Ce?void 0:function(){return a.selectOption(fe)},mr="".concat(a.getElementId("option"),"-").concat(ce),ui={id:mr,onClick:hr,onMouseMove:Gr,onMouseOver:Gr,tabIndex:-1,role:"option","aria-selected":a.isAppleDevice?void 0:ye};return O.createElement(k,ue({},b,{innerProps:ui,data:fe,isDisabled:Ce,isSelected:ye,key:mr,label:Ne,type:he,value:mt,isFocused:Kn,innerRef:Kn?a.getFocusedOptionRef:void 0}),a.formatOptionLabel(re.data,"menu"))},ve;if(this.hasOptions())ve=this.getCategorizedOptions().map(function(j){if(j.type==="group"){var re=j.data,ce=j.options,he=j.index,fe="".concat(a.getElementId("group"),"-").concat(he),Ce="".concat(fe,"-heading");return O.createElement(f,ue({},b,{key:fe,data:re,options:ce,Heading:g,headingProps:{id:Ce,data:j.data},label:a.formatGroupLabel(j.data)}),j.options.map(function(ye){return we(ye,"".concat(he,"-").concat(ye.index))}))}else if(j.type==="option")return we(j,"".concat(j.index))});else if(T){var W=F({inputValue:R});if(W===null)return null;ve=O.createElement(v,b,W)}else{var ee=Le({inputValue:R});if(ee===null)return null;ve=O.createElement(w,b,ee)}var K={minMenuHeight:N,maxMenuHeight:$,menuPlacement:Q,menuPosition:X,menuShouldScrollIntoView:Te},M=O.createElement(dS,ue({},b,K),function(j){var re=j.ref,ce=j.placerProps,he=ce.placement,fe=ce.maxHeight;return O.createElement(c,ue({},b,K,{innerRef:re,innerProps:{onMouseDown:a.onMenuMouseDown,onMouseMove:a.onMenuMouseMove},isLoading:T,placement:he}),O.createElement(j5,{captureEnabled:E,onTopArrive:Me,onBottomArrive:ge,lockEnabled:xe},function(Ce){return O.createElement(p,ue({},b,{innerRef:function(Ne){a.getMenuListRef(Ne),Ce(Ne)},innerProps:{role:"listbox","aria-multiselectable":b.isMulti,id:a.getElementId("listbox")},isLoading:T,maxHeight:fe,focusedOption:x}),ve)}))});return me||X==="fixed"?O.createElement(m,ue({},b,{appendTo:me,controlElement:this.controlRef,menuPlacement:Q,menuPosition:X}),M):M}},{key:"renderFormField",value:function(){var a=this,u=this.props,f=u.delimiter,g=u.isDisabled,c=u.isMulti,p=u.name,m=u.required,v=this.state.selectValue;if(m&&!this.hasValue()&&!g)return O.createElement(B5,{name:p,onFocus:this.onValueInputFocus});if(!(!p||g))if(c)if(f){var w=v.map(function(x){return a.getOptionValue(x)}).join(f);return O.createElement("input",{name:p,type:"hidden",value:w})}else{var k=v.length>0?v.map(function(x,S){return O.createElement("input",{key:"i-".concat(S),name:p,type:"hidden",value:a.getOptionValue(x)})}):O.createElement("input",{name:p,type:"hidden",value:""});return O.createElement("div",null,k)}else{var b=v[0]?this.getOptionValue(v[0]):"";return O.createElement("input",{name:p,type:"hidden",value:b})}}},{key:"renderLiveRegion",value:function(){var a=this.commonProps,u=this.state,f=u.ariaSelection,g=u.focusedOption,c=u.focusedValue,p=u.isFocused,m=u.selectValue,v=this.getFocusableOptions();return O.createElement(O5,ue({},a,{id:this.getElementId("live-region"),ariaSelection:f,focusedOption:g,focusedValue:c,isFocused:p,selectValue:m,focusableOptions:v,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var a=this.getComponents(),u=a.Control,f=a.IndicatorsContainer,g=a.SelectContainer,c=a.ValueContainer,p=this.props,m=p.className,v=p.id,w=p.isDisabled,k=p.menuIsOpen,b=this.state.isFocused,x=this.commonProps=this.getCommonProps();return O.createElement(g,ue({},x,{className:m,innerProps:{id:v,onKeyDown:this.onKeyDown},isDisabled:w,isFocused:b}),this.renderLiveRegion(),O.createElement(u,ue({},x,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:w,isFocused:b,menuIsOpen:k}),O.createElement(c,ue({},x,{isDisabled:w}),this.renderPlaceholderOrValue(),this.renderInput()),O.createElement(f,ue({},x,{isDisabled:w}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(a,u){var f=u.prevProps,g=u.clearFocusValueOnUpdate,c=u.inputIsHiddenAfterUpdate,p=u.ariaSelection,m=u.isFocused,v=u.prevWasFocused,w=u.instancePrefix,k=a.options,b=a.value,x=a.menuIsOpen,S=a.inputValue,E=a.isMulti,R=ph(b),T={};if(f&&(b!==f.value||k!==f.options||x!==f.menuIsOpen||S!==f.inputValue)){var F=x?ok(a,R):[],N=x?Rh(Va(a,R),"".concat(w,"-option")):[],$=g?ik(u,R):null,B=ak(u,F),Q=Mu(N,B);T={selectValue:R,focusedOption:B,focusedOptionId:Q,focusableOptionsWithIds:N,focusedValue:$,clearFocusValueOnUpdate:!1}}var X=c!=null&&a!==f?{inputIsHidden:c,inputIsHiddenAfterUpdate:void 0}:{},me=p,xe=m&&v;return m&&!xe&&(me={value:Ma(E,R,R[0]||null),options:R,action:"initial-input-focus"},xe=!v),(p==null?void 0:p.action)==="initial-input-focus"&&(me=null),se(se(se({},T),X),{},{prevProps:a,ariaSelection:me,prevWasFocused:xe})}}]),o}(O.Component);b0.defaultProps=rk;var sk=O.forwardRef(function(n,r){var o=Sw(n);return O.createElement(b0,ue({ref:r},o))}),uk=sk;const ck=new pl(Yt.BASE_URL);function dk(){return I.jsx("div",{className:Ae.loaderContainer,children:I.jsx(al,{variant:"spokes",color:"#dcd6d6",size:"medium",text:"",textColor:""})})}function Nu({type:n,name:r,value:o,handleChange:l,required:a}){return I.jsx("div",{children:I.jsx("input",{className:Ae.forminputStyle,type:n,name:r,autoComplete:"new-password",value:o,onChange:l,required:a})})}function fk(){var w;const n=[{value:"1",label:"GCASH"}],o=(w=Qn().state)==null?void 0:w.registerData,l=ei(),[a,u]=O.useState(!1),[f,g]=O.useState({card_number:"",card_password:"",card_balance:"",card_payment_id:"",account:o.account,mail:o.mail,promotion_code:o.promotion_code,password:o.password,phone:o.phone,first_name:o.first_name,second_name:o.second_name}),c=f.card_number.trim()!==""&&f.card_password.trim()!==""&&f.card_balance.trim()!==""&&f.card_payment_id.trim()!=="",p=k=>{g(b=>({...b,card_payment_id:k.value}))},m=k=>{const{name:b,value:x}=k.target;g({...f,[b]:x})},v=async k=>{k.preventDefault(),u(!0);try{const b=await ck.post(Yt.REGISTER,f);b.code==200?(alert("Registration successful"),l("/download")):(console.log("code: ",b.code),alert(b.error_msg))}catch(b){alert("Registration failed. Please try again.",b)}finally{u(!1)}};return I.jsxs("div",{className:Ae.layoutContainer,children:[I.jsx("div",{className:Ae.bgTop}),I.jsx("div",{className:Ae.icTopLeft}),I.jsx("div",{className:Ae.pageTitle,children:"Register"}),I.jsxs("div",{className:Ae.bankContainer,children:[I.jsxs("div",{className:Ae.directions,children:[I.jsx("span",{className:Ae.contentTextBlack,children:"You need to"}),I.jsxs("span",{className:Ae.contentTextRed,children:[" ","link your primary payment getway"," "]}),I.jsx("br",{}),I.jsx("span",{className:Ae.contentTextBlack,children:"account during registration to start receiving tasks."}),I.jsx("br",{}),I.jsxs("span",{className:Ae.contentTextBlack,children:["Currently, you can"," "]}),I.jsxs("span",{className:Ae.contentTextRed,children:["only select one getway."," "]}),I.jsx("br",{}),I.jsx("span",{className:Ae.contentTextRed,children:"After completing registration, you can set up additional payment getway."})]}),I.jsx("img",{className:Ae.divider}),I.jsxs("form",{className:Ae.formStyle,onSubmit:v,children:[I.jsxs("div",{className:Ae.selectStyle,children:[I.jsx("label",{className:Ae.labelInput,children:"*PrimaryPayment Getway"}),I.jsx(uk,{options:n,efaultValue:n[0],onChange:p,required:!0})]}),I.jsxs("div",{className:Ae.bankInfo,children:[I.jsx("label",{className:Ae.labelInput,children:"*Gcash card number"}),I.jsx(Nu,{type:"number",name:"card_number",value:f.card_number,handleChange:m,required:!0}),I.jsx("label",{className:Ae.labelInput,children:"*MPIN"}),I.jsx(Nu,{type:"password",name:"card_password",value:f.card_password,handleChange:m,required:!0}),I.jsx("label",{className:Ae.labelInput,children:"*Your Balance"}),I.jsx(Nu,{type:"number",name:"card_balance",value:f.card_balance,handleChange:m,required:!0}),I.jsx("div",{children:I.jsx("span",{className:Ae.contentTextRed,children:"Be honest; balance updates after completion."})})]}),I.jsxs("div",{className:Ae.bankBottom,children:[I.jsx("img",{className:Ae.divider}),I.jsx("button",{type:"submit",className:Ae.registerBtn,disabled:!c,style:{backgroundColor:c?"#DF4A3B":"#BBBBBB"},children:a?"Registering...":"Register"})]})]}),a&&I.jsx(dk,{})]})]})}const pk="_layoutContainer_1crjy_1",hk="_bgTop_1crjy_4",mk="_icTopLeft_1crjy_17",gk="_pageTitle_1crjy_31",vk="_contentTextBlack_1crjy_38",yk="_contentTextRed_1crjy_45",bk="_registerContainer_1crjy_52",xk="_divider_1crjy_59",wk="_labelInput_1crjy_65",Sk="_forminputStyle_1crjy_71",kk="_submitBtn_1crjy_80",Ck="_loaderContainer_1crjy_95",Ek="_registerBtn_1crjy_112",We={layoutContainer:pk,bgTop:hk,icTopLeft:mk,pageTitle:gk,contentTextBlack:vk,contentTextRed:yk,registerContainer:bk,divider:xk,labelInput:wk,forminputStyle:Sk,submitBtn:kk,loaderContainer:Ck,registerBtn:Ek};new pl(Yt.BASE_URL);function Pk(){return I.jsx("div",{className:We.loaderContainer,children:I.jsx(al,{variant:"spokes",color:"#dcd6d6",size:"medium",text:"",textColor:""})})}function qn({type:n,name:r,value:o,handleChange:l,required:a}){return I.jsx("div",{children:I.jsx("input",{className:We.forminputStyle,type:n,name:r,value:o,autoComplete:"new-password",onChange:l,required:a})})}function Ok(){const n=ei(),[r,o]=O.useState(!1),[l,a]=O.useState({account:"",mail:"",promotion_code:"",password:"",confirm_password:"",phone:"",first_name:"",second_name:""}),u=l.account.trim()!==""&&l.password.trim()!==""&&l.confirm_password.trim()!==""&&l.mail.trim()!==""&&l.phone.trim()!==""&&l.promotion_code.trim()!=="",f=c=>{console.log("isFormValid: ",u);const{name:p,value:m}=c.target;a({...l,[p]:m})},g=async c=>{if(c.preventDefault(),l.confirm_password!=l.password){alert("The passwords do not match, please double-check.");return}n("/register_bank",{state:{registerData:l}})};return I.jsxs("div",{className:We.layoutContainer,children:[I.jsx("div",{className:We.bgTop}),I.jsx("div",{className:We.icTopLeft}),I.jsx("div",{className:We.pageTitle,children:"Register"}),I.jsxs("div",{className:We.registerContainer,children:[I.jsxs("div",{children:[I.jsx("span",{className:We.contentTextBlack,children:"Please provide complete and accurate details for"}),I.jsx("span",{className:We.contentTextRed,children:" manual review."})]}),I.jsxs("div",{children:[I.jsx("span",{className:We.contentTextRed,children:"Incomplete or incorrect"}),I.jsxs("span",{className:We.contentTextBlack,children:[" ","info may lead to"]}),I.jsxs("span",{className:We.contentTextRed,children:[" ","registration rejection."]})]}),I.jsx("img",{className:We.divider}),I.jsxs("form",{onSubmit:g,children:[I.jsx("label",{className:We.labelInput,children:"*Account"}),I.jsx(qn,{type:"text",name:"account",value:l.account,handleChange:f,required:!0}),I.jsx("label",{className:We.labelInput,children:"*Password"}),I.jsx(qn,{type:"password",name:"password",value:l.password,handleChange:f,required:!0}),I.jsx("label",{className:We.labelInput,children:"*Confirm Password"}),I.jsx(qn,{type:"password",name:"confirm_password",value:l.confirm_password,handleChange:f,required:!0}),I.jsx("label",{className:We.labelInput,children:"First Name"}),I.jsx(qn,{type:"text",name:"first_name",value:l.first_name,handleChange:f}),I.jsx("label",{className:We.labelInput,children:"Last Name"}),I.jsx(qn,{type:"text",name:"second_name",value:l.second_name,handleChange:f}),I.jsx("label",{className:We.labelInput,children:"*Email"}),I.jsx(qn,{type:"email",name:"mail",value:l.mail,handleChange:f,required:!0}),I.jsx("label",{className:We.labelInput,children:"*Phone"}),I.jsx(qn,{type:"number",name:"phone",value:l.phone,handleChange:f,required:!0}),I.jsx("label",{className:We.labelInput,children:"*Promotion Code"}),I.jsx(qn,{type:"text",name:"promotion_code",value:l.promotion_code,handleChange:f,required:!0}),I.jsx("button",{type:"submit",className:We.submitBtn,disabled:!u,style:{backgroundColor:u?"#DF4A3B":"#BBBBBB"},children:r?"Registering...":"Next"})]}),r&&I.jsx(Pk,{})]})]})}function Rk(){return I.jsx(H1,{children:I.jsxs(x1,{children:[I.jsx(bn,{path:"/register",element:I.jsx(Ok,{})}),I.jsx(bn,{path:"/pending",element:I.jsx(Jx,{})}),I.jsx(bn,{path:"/register_bank",element:I.jsx(fk,{})}),I.jsx(bn,{path:"/download",element:I.jsx(Fx,{})}),I.jsx(bn,{path:"/login",element:I.jsx(vx,{})}),I.jsxs(bn,{path:"/home",element:I.jsx(py,{}),children:[I.jsx(bn,{index:!0,element:I.jsx(hy,{})}),I.jsx(bn,{path:"announcement",element:I.jsx(px,{})})]})]})})}Ov.createRoot(document.getElementById("root")).render(I.jsx(O.StrictMode,{children:I.jsx(Rk,{})}));

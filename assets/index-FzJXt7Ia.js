var fg=Object.defineProperty;var pg=(n,r,o)=>r in n?fg(n,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[r]=o;var Lo=(n,r,o)=>pg(n,typeof r!="symbol"?r+"":r,o);function hg(n,r){for(var o=0;o<r.length;o++){const l=r[o];if(typeof l!="string"&&!Array.isArray(l)){for(const a in l)if(a!=="default"&&!(a in n)){const u=Object.getOwnPropertyDescriptor(l,a);u&&Object.defineProperty(n,a,u.get?u:{enumerable:!0,get:()=>l[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function o(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(a){if(a.ep)return;a.ep=!0;const u=o(a);fetch(a.href,u)}})();function mg(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var su={exports:{}},Io={},uu={exports:{}},be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up;function vg(){if(up)return be;up=1;var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function x(M){return M===null||typeof M!="object"?null:(M=g&&M[g]||M["@@iterator"],typeof M=="function"?M:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,w={};function S(M,j,re){this.props=M,this.context=j,this.refs=w,this.updater=re||k}S.prototype.isReactComponent={},S.prototype.setState=function(M,j){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,j,"setState")},S.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function P(){}P.prototype=S.prototype;function R(M,j,re){this.props=M,this.context=j,this.refs=w,this.updater=re||k}var T=R.prototype=new P;T.constructor=R,b(T,S.prototype),T.isPureReactComponent=!0;var F=Array.isArray,L=Object.prototype.hasOwnProperty,$={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function Q(M,j,re){var ce,he={},fe=null,Ee=null;if(j!=null)for(ce in j.ref!==void 0&&(Ee=j.ref),j.key!==void 0&&(fe=""+j.key),j)L.call(j,ce)&&!U.hasOwnProperty(ce)&&(he[ce]=j[ce]);var ye=arguments.length-2;if(ye===1)he.children=re;else if(1<ye){for(var Ne=Array(ye),ft=0;ft<ye;ft++)Ne[ft]=arguments[ft+2];he.children=Ne}if(M&&M.defaultProps)for(ce in ye=M.defaultProps,ye)he[ce]===void 0&&(he[ce]=ye[ce]);return{$$typeof:n,type:M,key:fe,ref:Ee,props:he,_owner:$.current}}function X(M,j){return{$$typeof:n,type:M.type,key:j,ref:M.ref,props:M.props,_owner:M._owner}}function me(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function we(M){var j={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(re){return j[re]})}var Te=/\/+/g;function Ie(M,j){return typeof M=="object"&&M!==null&&M.key!=null?we(""+M.key):j.toString(36)}function Me(M,j,re,ce,he){var fe=typeof M;(fe==="undefined"||fe==="boolean")&&(M=null);var Ee=!1;if(M===null)Ee=!0;else switch(fe){case"string":case"number":Ee=!0;break;case"object":switch(M.$$typeof){case n:case r:Ee=!0}}if(Ee)return Ee=M,he=he(Ee),M=ce===""?"."+Ie(Ee,0):ce,F(he)?(re="",M!=null&&(re=M.replace(Te,"$&/")+"/"),Me(he,j,re,"",function(ft){return ft})):he!=null&&(me(he)&&(he=X(he,re+(!he.key||Ee&&Ee.key===he.key?"":(""+he.key).replace(Te,"$&/")+"/")+M)),j.push(he)),1;if(Ee=0,ce=ce===""?".":ce+":",F(M))for(var ye=0;ye<M.length;ye++){fe=M[ye];var Ne=ce+Ie(fe,ye);Ee+=Me(fe,j,re,Ne,he)}else if(Ne=x(M),typeof Ne=="function")for(M=Ne.call(M),ye=0;!(fe=M.next()).done;)fe=fe.value,Ne=ce+Ie(fe,ye++),Ee+=Me(fe,j,re,Ne,he);else if(fe==="object")throw j=String(M),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return Ee}function ve(M,j,re){if(M==null)return M;var ce=[],he=0;return Me(M,ce,"","",function(fe){return j.call(re,fe,he++)}),ce}function xe(M){if(M._status===-1){var j=M._result;j=j(),j.then(function(re){(M._status===0||M._status===-1)&&(M._status=1,M._result=re)},function(re){(M._status===0||M._status===-1)&&(M._status=2,M._result=re)}),M._status===-1&&(M._status=0,M._result=j)}if(M._status===1)return M._result.default;throw M._result}var ge={current:null},W={transition:null},ee={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:W,ReactCurrentOwner:$};function K(){throw Error("act(...) is not supported in production builds of React.")}return be.Children={map:ve,forEach:function(M,j,re){ve(M,function(){j.apply(this,arguments)},re)},count:function(M){var j=0;return ve(M,function(){j++}),j},toArray:function(M){return ve(M,function(j){return j})||[]},only:function(M){if(!me(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},be.Component=S,be.Fragment=o,be.Profiler=a,be.PureComponent=R,be.StrictMode=l,be.Suspense=c,be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,be.act=K,be.cloneElement=function(M,j,re){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var ce=b({},M.props),he=M.key,fe=M.ref,Ee=M._owner;if(j!=null){if(j.ref!==void 0&&(fe=j.ref,Ee=$.current),j.key!==void 0&&(he=""+j.key),M.type&&M.type.defaultProps)var ye=M.type.defaultProps;for(Ne in j)L.call(j,Ne)&&!U.hasOwnProperty(Ne)&&(ce[Ne]=j[Ne]===void 0&&ye!==void 0?ye[Ne]:j[Ne])}var Ne=arguments.length-2;if(Ne===1)ce.children=re;else if(1<Ne){ye=Array(Ne);for(var ft=0;ft<Ne;ft++)ye[ft]=arguments[ft+2];ce.children=ye}return{$$typeof:n,type:M.type,key:he,ref:fe,props:ce,_owner:Ee}},be.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:u,_context:M},M.Consumer=M},be.createElement=Q,be.createFactory=function(M){var j=Q.bind(null,M);return j.type=M,j},be.createRef=function(){return{current:null}},be.forwardRef=function(M){return{$$typeof:v,render:M}},be.isValidElement=me,be.lazy=function(M){return{$$typeof:m,_payload:{_status:-1,_result:M},_init:xe}},be.memo=function(M,j){return{$$typeof:p,type:M,compare:j===void 0?null:j}},be.startTransition=function(M){var j=W.transition;W.transition={};try{M()}finally{W.transition=j}},be.unstable_act=K,be.useCallback=function(M,j){return ge.current.useCallback(M,j)},be.useContext=function(M){return ge.current.useContext(M)},be.useDebugValue=function(){},be.useDeferredValue=function(M){return ge.current.useDeferredValue(M)},be.useEffect=function(M,j){return ge.current.useEffect(M,j)},be.useId=function(){return ge.current.useId()},be.useImperativeHandle=function(M,j,re){return ge.current.useImperativeHandle(M,j,re)},be.useInsertionEffect=function(M,j){return ge.current.useInsertionEffect(M,j)},be.useLayoutEffect=function(M,j){return ge.current.useLayoutEffect(M,j)},be.useMemo=function(M,j){return ge.current.useMemo(M,j)},be.useReducer=function(M,j,re){return ge.current.useReducer(M,j,re)},be.useRef=function(M){return ge.current.useRef(M)},be.useState=function(M){return ge.current.useState(M)},be.useSyncExternalStore=function(M,j,re){return ge.current.useSyncExternalStore(M,j,re)},be.useTransition=function(){return ge.current.useTransition()},be.version="18.3.1",be}var cp;function Ku(){return cp||(cp=1,uu.exports=vg()),uu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function gg(){if(dp)return Io;dp=1;var n=Ku(),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(v,c,p){var m,g={},x=null,k=null;p!==void 0&&(x=""+p),c.key!==void 0&&(x=""+c.key),c.ref!==void 0&&(k=c.ref);for(m in c)l.call(c,m)&&!u.hasOwnProperty(m)&&(g[m]=c[m]);if(v&&v.defaultProps)for(m in c=v.defaultProps,c)g[m]===void 0&&(g[m]=c[m]);return{$$typeof:r,type:v,key:x,ref:k,props:g,_owner:a.current}}return Io.Fragment=o,Io.jsx=f,Io.jsxs=f,Io}var fp;function yg(){return fp||(fp=1,su.exports=gg()),su.exports}var N=yg(),O=Ku();const oe=mg(O),pp=hg({__proto__:null,default:oe},[O]);var va={},cu={exports:{}},wt={},du={exports:{}},fu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp;function bg(){return hp||(hp=1,function(n){function r(W,ee){var K=W.length;W.push(ee);e:for(;0<K;){var M=K-1>>>1,j=W[M];if(0<a(j,ee))W[M]=ee,W[K]=j,K=M;else break e}}function o(W){return W.length===0?null:W[0]}function l(W){if(W.length===0)return null;var ee=W[0],K=W.pop();if(K!==ee){W[0]=K;e:for(var M=0,j=W.length,re=j>>>1;M<re;){var ce=2*(M+1)-1,he=W[ce],fe=ce+1,Ee=W[fe];if(0>a(he,K))fe<j&&0>a(Ee,he)?(W[M]=Ee,W[fe]=K,M=fe):(W[M]=he,W[ce]=K,M=ce);else if(fe<j&&0>a(Ee,K))W[M]=Ee,W[fe]=K,M=fe;else break e}}return ee}function a(W,ee){var K=W.sortIndex-ee.sortIndex;return K!==0?K:W.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var f=Date,v=f.now();n.unstable_now=function(){return f.now()-v}}var c=[],p=[],m=1,g=null,x=3,k=!1,b=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(W){for(var ee=o(p);ee!==null;){if(ee.callback===null)l(p);else if(ee.startTime<=W)l(p),ee.sortIndex=ee.expirationTime,r(c,ee);else break;ee=o(p)}}function F(W){if(w=!1,T(W),!b)if(o(c)!==null)b=!0,xe(L);else{var ee=o(p);ee!==null&&ge(F,ee.startTime-W)}}function L(W,ee){b=!1,w&&(w=!1,P(Q),Q=-1),k=!0;var K=x;try{for(T(ee),g=o(c);g!==null&&(!(g.expirationTime>ee)||W&&!we());){var M=g.callback;if(typeof M=="function"){g.callback=null,x=g.priorityLevel;var j=M(g.expirationTime<=ee);ee=n.unstable_now(),typeof j=="function"?g.callback=j:g===o(c)&&l(c),T(ee)}else l(c);g=o(c)}if(g!==null)var re=!0;else{var ce=o(p);ce!==null&&ge(F,ce.startTime-ee),re=!1}return re}finally{g=null,x=K,k=!1}}var $=!1,U=null,Q=-1,X=5,me=-1;function we(){return!(n.unstable_now()-me<X)}function Te(){if(U!==null){var W=n.unstable_now();me=W;var ee=!0;try{ee=U(!0,W)}finally{ee?Ie():($=!1,U=null)}}else $=!1}var Ie;if(typeof R=="function")Ie=function(){R(Te)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,ve=Me.port2;Me.port1.onmessage=Te,Ie=function(){ve.postMessage(null)}}else Ie=function(){S(Te,0)};function xe(W){U=W,$||($=!0,Ie())}function ge(W,ee){Q=S(function(){W(n.unstable_now())},ee)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(W){W.callback=null},n.unstable_continueExecution=function(){b||k||(b=!0,xe(L))},n.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<W?Math.floor(1e3/W):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_getFirstCallbackNode=function(){return o(c)},n.unstable_next=function(W){switch(x){case 1:case 2:case 3:var ee=3;break;default:ee=x}var K=x;x=ee;try{return W()}finally{x=K}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(W,ee){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var K=x;x=W;try{return ee()}finally{x=K}},n.unstable_scheduleCallback=function(W,ee,K){var M=n.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?M+K:M):K=M,W){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=K+j,W={id:m++,callback:ee,priorityLevel:W,startTime:K,expirationTime:j,sortIndex:-1},K>M?(W.sortIndex=K,r(p,W),o(c)===null&&W===o(p)&&(w?(P(Q),Q=-1):w=!0,ge(F,K-M))):(W.sortIndex=j,r(c,W),b||k||(b=!0,xe(L))),W},n.unstable_shouldYield=we,n.unstable_wrapCallback=function(W){var ee=x;return function(){var K=x;x=ee;try{return W.apply(this,arguments)}finally{x=K}}}}(fu)),fu}var mp;function wg(){return mp||(mp=1,du.exports=bg()),du.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function xg(){if(vp)return wt;vp=1;var n=Ku(),r=wg();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,a={};function u(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(a[e]=t,e=0;e<t.length;e++)l.add(t[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),c=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function x(e){return c.call(g,e)?!0:c.call(m,e)?!1:p.test(e)?g[e]=!0:(m[e]=!0,!1)}function k(e,t,i,s){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function b(e,t,i,s){if(t===null||typeof t>"u"||k(e,t,i,s))return!0;if(s)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function w(e,t,i,s,d,h,y){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=d,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=h,this.removeEmptyString=y}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){S[e]=new w(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];S[t]=new w(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){S[e]=new w(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){S[e]=new w(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){S[e]=new w(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){S[e]=new w(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){S[e]=new w(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){S[e]=new w(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){S[e]=new w(e,5,!1,e.toLowerCase(),null,!1,!1)});var P=/[\-:]([a-z])/g;function R(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(P,R);S[t]=new w(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(P,R);S[t]=new w(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(P,R);S[t]=new w(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){S[e]=new w(e,1,!1,e.toLowerCase(),null,!1,!1)}),S.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){S[e]=new w(e,1,!1,e.toLowerCase(),null,!0,!0)});function T(e,t,i,s){var d=S.hasOwnProperty(t)?S[t]:null;(d!==null?d.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(b(t,i,d,s)&&(i=null),s||d===null?x(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):d.mustUseProperty?e[d.propertyName]=i===null?d.type===3?!1:"":i:(t=d.attributeName,s=d.attributeNamespace,i===null?e.removeAttribute(t):(d=d.type,i=d===3||d===4&&i===!0?"":""+i,s?e.setAttributeNS(s,t,i):e.setAttribute(t,i))))}var F=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),$=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),me=Symbol.for("react.provider"),we=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),Ie=Symbol.for("react.suspense"),Me=Symbol.for("react.suspense_list"),ve=Symbol.for("react.memo"),xe=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),W=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,M;function j(e){if(M===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);M=t&&t[1]||""}return`
`+M+e}var re=!1;function ce(e,t){if(!e||re)return"";re=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(A){var s=A}Reflect.construct(e,[],t)}else{try{t.call()}catch(A){s=A}e.call(t.prototype)}else{try{throw Error()}catch(A){s=A}e()}}catch(A){if(A&&s&&typeof A.stack=="string"){for(var d=A.stack.split(`
`),h=s.stack.split(`
`),y=d.length-1,E=h.length-1;1<=y&&0<=E&&d[y]!==h[E];)E--;for(;1<=y&&0<=E;y--,E--)if(d[y]!==h[E]){if(y!==1||E!==1)do if(y--,E--,0>E||d[y]!==h[E]){var C=`
`+d[y].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=y&&0<=E);break}}}finally{re=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?j(e):""}function he(e){switch(e.tag){case 5:return j(e.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return e=ce(e.type,!1),e;case 11:return e=ce(e.type.render,!1),e;case 1:return e=ce(e.type,!0),e;default:return""}}function fe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case $:return"Portal";case X:return"Profiler";case Q:return"StrictMode";case Ie:return"Suspense";case Me:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case we:return(e.displayName||"Context")+".Consumer";case me:return(e._context.displayName||"Context")+".Provider";case Te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ve:return t=e.displayName||null,t!==null?t:fe(e.type)||"Memo";case xe:t=e._payload,e=e._init;try{return fe(e(t))}catch{}}return null}function Ee(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(t);case 8:return t===Q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ye(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ne(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ft(e){var t=Ne(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var d=i.get,h=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return d.call(this)},set:function(y){s=""+y,h.call(this,y)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hn(e){e._valueTracker||(e._valueTracker=ft(e))}function Wr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),s="";return e&&(s=Ne(e)?e.checked?"true":"false":e.value),e=s,e!==i?(t.setValue(e),!0):!1}function cr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function dr(e,t){var i=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function li(e,t){var i=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;i=ye(t.value!=null?t.value:i),e._wrapperState={initialChecked:s,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vc(e,t){t=t.checked,t!=null&&T(e,"checked",t,!1)}function vl(e,t){vc(e,t);var i=ye(t.value),s=t.type;if(i!=null)s==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?gl(e,t.type,i):t.hasOwnProperty("defaultValue")&&gl(e,t.type,ye(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gc(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function gl(e,t,i){(t!=="number"||cr(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Qr=Array.isArray;function fr(e,t,i,s){if(e=e.options,t){t={};for(var d=0;d<i.length;d++)t["$"+i[d]]=!0;for(i=0;i<e.length;i++)d=t.hasOwnProperty("$"+e[i].value),e[i].selected!==d&&(e[i].selected=d),d&&s&&(e[i].defaultSelected=!0)}else{for(i=""+ye(i),t=null,d=0;d<e.length;d++){if(e[d].value===i){e[d].selected=!0,s&&(e[d].defaultSelected=!0);return}t!==null||e[d].disabled||(t=e[d])}t!==null&&(t.selected=!0)}}function yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yc(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(o(92));if(Qr(i)){if(1<i.length)throw Error(o(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:ye(i)}}function bc(e,t){var i=ye(t.value),s=ye(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),s!=null&&(e.defaultValue=""+s)}function wc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var si,Sc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,s,d){MSApp.execUnsafeLocalFunction(function(){return e(t,i,s,d)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(si=si||document.createElement("div"),si.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=si.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kr(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var Yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},v0=["Webkit","ms","Moz","O"];Object.keys(Yr).forEach(function(e){v0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yr[t]=Yr[e]})});function kc(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||Yr.hasOwnProperty(e)&&Yr[e]?(""+t).trim():t+"px"}function Ec(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var s=i.indexOf("--")===0,d=kc(i,t[i],s);i==="float"&&(i="cssFloat"),s?e.setProperty(i,d):e[i]=d}}var g0=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wl(e,t){if(t){if(g0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function xl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sl=null;function kl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var El=null,pr=null,hr=null;function Pc(e){if(e=yo(e)){if(typeof El!="function")throw Error(o(280));var t=e.stateNode;t&&(t=Mi(t),El(e.stateNode,e.type,t))}}function Cc(e){pr?hr?hr.push(e):hr=[e]:pr=e}function Oc(){if(pr){var e=pr,t=hr;if(hr=pr=null,Pc(e),t)for(e=0;e<t.length;e++)Pc(t[e])}}function Rc(e,t){return e(t)}function _c(){}var Pl=!1;function Tc(e,t,i){if(Pl)return e(t,i);Pl=!0;try{return Rc(e,t,i)}finally{Pl=!1,(pr!==null||hr!==null)&&(_c(),Oc())}}function Gr(e,t){var i=e.stateNode;if(i===null)return null;var s=Mi(i);if(s===null)return null;i=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(o(231,t,typeof i));return i}var Cl=!1;if(v)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){Cl=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{Cl=!1}function y0(e,t,i,s,d,h,y,E,C){var A=Array.prototype.slice.call(arguments,3);try{t.apply(i,A)}catch(B){this.onError(B)}}var Jr=!1,ui=null,ci=!1,Ol=null,b0={onError:function(e){Jr=!0,ui=e}};function w0(e,t,i,s,d,h,y,E,C){Jr=!1,ui=null,y0.apply(b0,arguments)}function x0(e,t,i,s,d,h,y,E,C){if(w0.apply(this,arguments),Jr){if(Jr){var A=ui;Jr=!1,ui=null}else throw Error(o(198));ci||(ci=!0,Ol=A)}}function qn(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function Mc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Nc(e){if(qn(e)!==e)throw Error(o(188))}function S0(e){var t=e.alternate;if(!t){if(t=qn(e),t===null)throw Error(o(188));return t!==e?null:e}for(var i=e,s=t;;){var d=i.return;if(d===null)break;var h=d.alternate;if(h===null){if(s=d.return,s!==null){i=s;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===i)return Nc(d),e;if(h===s)return Nc(d),t;h=h.sibling}throw Error(o(188))}if(i.return!==s.return)i=d,s=h;else{for(var y=!1,E=d.child;E;){if(E===i){y=!0,i=d,s=h;break}if(E===s){y=!0,s=d,i=h;break}E=E.sibling}if(!y){for(E=h.child;E;){if(E===i){y=!0,i=h,s=d;break}if(E===s){y=!0,s=h,i=d;break}E=E.sibling}if(!y)throw Error(o(189))}}if(i.alternate!==s)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?e:t}function Lc(e){return e=S0(e),e!==null?Ic(e):null}function Ic(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ic(e);if(t!==null)return t;e=e.sibling}return null}var Dc=r.unstable_scheduleCallback,Ac=r.unstable_cancelCallback,k0=r.unstable_shouldYield,E0=r.unstable_requestPaint,We=r.unstable_now,P0=r.unstable_getCurrentPriorityLevel,Rl=r.unstable_ImmediatePriority,zc=r.unstable_UserBlockingPriority,di=r.unstable_NormalPriority,C0=r.unstable_LowPriority,Fc=r.unstable_IdlePriority,fi=null,Kt=null;function O0(e){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(fi,e,void 0,(e.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:T0,R0=Math.log,_0=Math.LN2;function T0(e){return e>>>=0,e===0?32:31-(R0(e)/_0|0)|0}var pi=64,hi=4194304;function Zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function mi(e,t){var i=e.pendingLanes;if(i===0)return 0;var s=0,d=e.suspendedLanes,h=e.pingedLanes,y=i&268435455;if(y!==0){var E=y&~d;E!==0?s=Zr(E):(h&=y,h!==0&&(s=Zr(h)))}else y=i&~d,y!==0?s=Zr(y):h!==0&&(s=Zr(h));if(s===0)return 0;if(t!==0&&t!==s&&!(t&d)&&(d=s&-s,h=t&-t,d>=h||d===16&&(h&4194240)!==0))return t;if(s&4&&(s|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)i=31-At(t),d=1<<i,s|=e[i],t&=~d;return s}function M0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N0(e,t){for(var i=e.suspendedLanes,s=e.pingedLanes,d=e.expirationTimes,h=e.pendingLanes;0<h;){var y=31-At(h),E=1<<y,C=d[y];C===-1?(!(E&i)||E&s)&&(d[y]=M0(E,t)):C<=t&&(e.expiredLanes|=E),h&=~E}}function _l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jc(){var e=pi;return pi<<=1,!(pi&4194240)&&(pi=64),e}function Tl(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function eo(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-At(t),e[t]=i}function L0(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<i;){var d=31-At(i),h=1<<d;t[d]=0,s[d]=-1,e[d]=-1,i&=~h}}function Ml(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var s=31-At(i),d=1<<s;d&t|e[s]&t&&(e[s]|=t),i&=~d}}var Le=0;function Vc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $c,Nl,Uc,Bc,Hc,Ll=!1,vi=[],xn=null,Sn=null,kn=null,to=new Map,no=new Map,En=[],I0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qc(e,t){switch(e){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":to.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(t.pointerId)}}function ro(e,t,i,s,d,h){return e===null||e.nativeEvent!==h?(e={blockedOn:t,domEventName:i,eventSystemFlags:s,nativeEvent:h,targetContainers:[d]},t!==null&&(t=yo(t),t!==null&&Nl(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,d!==null&&t.indexOf(d)===-1&&t.push(d),e)}function D0(e,t,i,s,d){switch(t){case"focusin":return xn=ro(xn,e,t,i,s,d),!0;case"dragenter":return Sn=ro(Sn,e,t,i,s,d),!0;case"mouseover":return kn=ro(kn,e,t,i,s,d),!0;case"pointerover":var h=d.pointerId;return to.set(h,ro(to.get(h)||null,e,t,i,s,d)),!0;case"gotpointercapture":return h=d.pointerId,no.set(h,ro(no.get(h)||null,e,t,i,s,d)),!0}return!1}function Wc(e){var t=Wn(e.target);if(t!==null){var i=qn(t);if(i!==null){if(t=i.tag,t===13){if(t=Mc(i),t!==null){e.blockedOn=t,Hc(e.priority,function(){Uc(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Dl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var s=new i.constructor(i.type,i);Sl=s,i.target.dispatchEvent(s),Sl=null}else return t=yo(i),t!==null&&Nl(t),e.blockedOn=i,!1;t.shift()}return!0}function Qc(e,t,i){gi(e)&&i.delete(t)}function A0(){Ll=!1,xn!==null&&gi(xn)&&(xn=null),Sn!==null&&gi(Sn)&&(Sn=null),kn!==null&&gi(kn)&&(kn=null),to.forEach(Qc),no.forEach(Qc)}function oo(e,t){e.blockedOn===t&&(e.blockedOn=null,Ll||(Ll=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,A0)))}function io(e){function t(d){return oo(d,e)}if(0<vi.length){oo(vi[0],e);for(var i=1;i<vi.length;i++){var s=vi[i];s.blockedOn===e&&(s.blockedOn=null)}}for(xn!==null&&oo(xn,e),Sn!==null&&oo(Sn,e),kn!==null&&oo(kn,e),to.forEach(t),no.forEach(t),i=0;i<En.length;i++)s=En[i],s.blockedOn===e&&(s.blockedOn=null);for(;0<En.length&&(i=En[0],i.blockedOn===null);)Wc(i),i.blockedOn===null&&En.shift()}var mr=F.ReactCurrentBatchConfig,yi=!0;function z0(e,t,i,s){var d=Le,h=mr.transition;mr.transition=null;try{Le=1,Il(e,t,i,s)}finally{Le=d,mr.transition=h}}function F0(e,t,i,s){var d=Le,h=mr.transition;mr.transition=null;try{Le=4,Il(e,t,i,s)}finally{Le=d,mr.transition=h}}function Il(e,t,i,s){if(yi){var d=Dl(e,t,i,s);if(d===null)Jl(e,t,s,bi,i),qc(e,s);else if(D0(d,e,t,i,s))s.stopPropagation();else if(qc(e,s),t&4&&-1<I0.indexOf(e)){for(;d!==null;){var h=yo(d);if(h!==null&&$c(h),h=Dl(e,t,i,s),h===null&&Jl(e,t,s,bi,i),h===d)break;d=h}d!==null&&s.stopPropagation()}else Jl(e,t,s,null,i)}}var bi=null;function Dl(e,t,i,s){if(bi=null,e=kl(s),e=Wn(e),e!==null)if(t=qn(e),t===null)e=null;else if(i=t.tag,i===13){if(e=Mc(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bi=e,null}function Kc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(P0()){case Rl:return 1;case zc:return 4;case di:case C0:return 16;case Fc:return 536870912;default:return 16}default:return 16}}var Pn=null,Al=null,wi=null;function Yc(){if(wi)return wi;var e,t=Al,i=t.length,s,d="value"in Pn?Pn.value:Pn.textContent,h=d.length;for(e=0;e<i&&t[e]===d[e];e++);var y=i-e;for(s=1;s<=y&&t[i-s]===d[h-s];s++);return wi=d.slice(e,1<s?1-s:void 0)}function xi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Si(){return!0}function Gc(){return!1}function kt(e){function t(i,s,d,h,y){this._reactName=i,this._targetInst=d,this.type=s,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(i=e[E],this[E]=i?i(h):h[E]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Si:Gc,this.isPropagationStopped=Gc,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Si)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Si)},persist:function(){},isPersistent:Si}),t}var vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=kt(vr),ao=K({},vr,{view:0,detail:0}),j0=kt(ao),Fl,jl,lo,ki=K({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$l,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lo&&(lo&&e.type==="mousemove"?(Fl=e.screenX-lo.screenX,jl=e.screenY-lo.screenY):jl=Fl=0,lo=e),Fl)},movementY:function(e){return"movementY"in e?e.movementY:jl}}),Xc=kt(ki),V0=K({},ki,{dataTransfer:0}),$0=kt(V0),U0=K({},ao,{relatedTarget:0}),Vl=kt(U0),B0=K({},vr,{animationName:0,elapsedTime:0,pseudoElement:0}),H0=kt(B0),q0=K({},vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),W0=kt(q0),Q0=K({},vr,{data:0}),Jc=kt(Q0),K0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},G0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=G0[e])?!!t[e]:!1}function $l(){return X0}var J0=K({},ao,{key:function(e){if(e.key){var t=K0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Y0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$l,charCode:function(e){return e.type==="keypress"?xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Z0=kt(J0),ev=K({},ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zc=kt(ev),tv=K({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$l}),nv=kt(tv),rv=K({},vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ov=kt(rv),iv=K({},ki,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),av=kt(iv),lv=[9,13,27,32],Ul=v&&"CompositionEvent"in window,so=null;v&&"documentMode"in document&&(so=document.documentMode);var sv=v&&"TextEvent"in window&&!so,ed=v&&(!Ul||so&&8<so&&11>=so),td=" ",nd=!1;function rd(e,t){switch(e){case"keyup":return lv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function od(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gr=!1;function uv(e,t){switch(e){case"compositionend":return od(t);case"keypress":return t.which!==32?null:(nd=!0,td);case"textInput":return e=t.data,e===td&&nd?null:e;default:return null}}function cv(e,t){if(gr)return e==="compositionend"||!Ul&&rd(e,t)?(e=Yc(),wi=Al=Pn=null,gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ed&&t.locale!=="ko"?null:t.data;default:return null}}var dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function id(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dv[e.type]:t==="textarea"}function ad(e,t,i,s){Cc(s),t=Ri(t,"onChange"),0<t.length&&(i=new zl("onChange","change",null,i,s),e.push({event:i,listeners:t}))}var uo=null,co=null;function fv(e){Ed(e,0)}function Ei(e){var t=Sr(e);if(Wr(t))return e}function pv(e,t){if(e==="change")return t}var ld=!1;if(v){var Bl;if(v){var Hl="oninput"in document;if(!Hl){var sd=document.createElement("div");sd.setAttribute("oninput","return;"),Hl=typeof sd.oninput=="function"}Bl=Hl}else Bl=!1;ld=Bl&&(!document.documentMode||9<document.documentMode)}function ud(){uo&&(uo.detachEvent("onpropertychange",cd),co=uo=null)}function cd(e){if(e.propertyName==="value"&&Ei(co)){var t=[];ad(t,co,e,kl(e)),Tc(fv,t)}}function hv(e,t,i){e==="focusin"?(ud(),uo=t,co=i,uo.attachEvent("onpropertychange",cd)):e==="focusout"&&ud()}function mv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ei(co)}function vv(e,t){if(e==="click")return Ei(t)}function gv(e,t){if(e==="input"||e==="change")return Ei(t)}function yv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:yv;function fo(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),s=Object.keys(t);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var d=i[s];if(!c.call(t,d)||!zt(e[d],t[d]))return!1}return!0}function dd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fd(e,t){var i=dd(e);e=0;for(var s;i;){if(i.nodeType===3){if(s=e+i.textContent.length,e<=t&&s>=t)return{node:i,offset:t-e};e=s}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=dd(i)}}function pd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hd(){for(var e=window,t=cr();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=cr(e.document)}return t}function ql(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function bv(e){var t=hd(),i=e.focusedElem,s=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&pd(i.ownerDocument.documentElement,i)){if(s!==null&&ql(i)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var d=i.textContent.length,h=Math.min(s.start,d);s=s.end===void 0?h:Math.min(s.end,d),!e.extend&&h>s&&(d=s,s=h,h=d),d=fd(i,h);var y=fd(i,s);d&&y&&(e.rangeCount!==1||e.anchorNode!==d.node||e.anchorOffset!==d.offset||e.focusNode!==y.node||e.focusOffset!==y.offset)&&(t=t.createRange(),t.setStart(d.node,d.offset),e.removeAllRanges(),h>s?(e.addRange(t),e.extend(y.node,y.offset)):(t.setEnd(y.node,y.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wv=v&&"documentMode"in document&&11>=document.documentMode,yr=null,Wl=null,po=null,Ql=!1;function md(e,t,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Ql||yr==null||yr!==cr(s)||(s=yr,"selectionStart"in s&&ql(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),po&&fo(po,s)||(po=s,s=Ri(Wl,"onSelect"),0<s.length&&(t=new zl("onSelect","select",null,t,i),e.push({event:t,listeners:s}),t.target=yr)))}function Pi(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var br={animationend:Pi("Animation","AnimationEnd"),animationiteration:Pi("Animation","AnimationIteration"),animationstart:Pi("Animation","AnimationStart"),transitionend:Pi("Transition","TransitionEnd")},Kl={},vd={};v&&(vd=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function Ci(e){if(Kl[e])return Kl[e];if(!br[e])return e;var t=br[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in vd)return Kl[e]=t[i];return e}var gd=Ci("animationend"),yd=Ci("animationiteration"),bd=Ci("animationstart"),wd=Ci("transitionend"),xd=new Map,Sd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(e,t){xd.set(e,t),u(t,[e])}for(var Yl=0;Yl<Sd.length;Yl++){var Gl=Sd[Yl],xv=Gl.toLowerCase(),Sv=Gl[0].toUpperCase()+Gl.slice(1);Cn(xv,"on"+Sv)}Cn(gd,"onAnimationEnd"),Cn(yd,"onAnimationIteration"),Cn(bd,"onAnimationStart"),Cn("dblclick","onDoubleClick"),Cn("focusin","onFocus"),Cn("focusout","onBlur"),Cn(wd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function kd(e,t,i){var s=e.type||"unknown-event";e.currentTarget=i,x0(s,t,void 0,e),e.currentTarget=null}function Ed(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var s=e[i],d=s.event;s=s.listeners;e:{var h=void 0;if(t)for(var y=s.length-1;0<=y;y--){var E=s[y],C=E.instance,A=E.currentTarget;if(E=E.listener,C!==h&&d.isPropagationStopped())break e;kd(d,E,A),h=C}else for(y=0;y<s.length;y++){if(E=s[y],C=E.instance,A=E.currentTarget,E=E.listener,C!==h&&d.isPropagationStopped())break e;kd(d,E,A),h=C}}}if(ci)throw e=Ol,ci=!1,Ol=null,e}function Ae(e,t){var i=t[os];i===void 0&&(i=t[os]=new Set);var s=e+"__bubble";i.has(s)||(Pd(t,e,2,!1),i.add(s))}function Xl(e,t,i){var s=0;t&&(s|=4),Pd(i,e,s,t)}var Oi="_reactListening"+Math.random().toString(36).slice(2);function mo(e){if(!e[Oi]){e[Oi]=!0,l.forEach(function(i){i!=="selectionchange"&&(kv.has(i)||Xl(i,!1,e),Xl(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Oi]||(t[Oi]=!0,Xl("selectionchange",!1,t))}}function Pd(e,t,i,s){switch(Kc(t)){case 1:var d=z0;break;case 4:d=F0;break;default:d=Il}i=d.bind(null,t,i,e),d=void 0,!Cl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(d=!0),s?d!==void 0?e.addEventListener(t,i,{capture:!0,passive:d}):e.addEventListener(t,i,!0):d!==void 0?e.addEventListener(t,i,{passive:d}):e.addEventListener(t,i,!1)}function Jl(e,t,i,s,d){var h=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var y=s.tag;if(y===3||y===4){var E=s.stateNode.containerInfo;if(E===d||E.nodeType===8&&E.parentNode===d)break;if(y===4)for(y=s.return;y!==null;){var C=y.tag;if((C===3||C===4)&&(C=y.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;y=y.return}for(;E!==null;){if(y=Wn(E),y===null)return;if(C=y.tag,C===5||C===6){s=h=y;continue e}E=E.parentNode}}s=s.return}Tc(function(){var A=h,B=kl(i),H=[];e:{var V=xd.get(e);if(V!==void 0){var Y=zl,J=e;switch(e){case"keypress":if(xi(i)===0)break e;case"keydown":case"keyup":Y=Z0;break;case"focusin":J="focus",Y=Vl;break;case"focusout":J="blur",Y=Vl;break;case"beforeblur":case"afterblur":Y=Vl;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=Xc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=$0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=nv;break;case gd:case yd:case bd:Y=H0;break;case wd:Y=ov;break;case"scroll":Y=j0;break;case"wheel":Y=av;break;case"copy":case"cut":case"paste":Y=W0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=Zc}var Z=(t&4)!==0,Qe=!Z&&e==="scroll",I=Z?V!==null?V+"Capture":null:V;Z=[];for(var _=A,D;_!==null;){D=_;var q=D.stateNode;if(D.tag===5&&q!==null&&(D=q,I!==null&&(q=Gr(_,I),q!=null&&Z.push(vo(_,q,D)))),Qe)break;_=_.return}0<Z.length&&(V=new Y(V,J,null,i,B),H.push({event:V,listeners:Z}))}}if(!(t&7)){e:{if(V=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",V&&i!==Sl&&(J=i.relatedTarget||i.fromElement)&&(Wn(J)||J[ln]))break e;if((Y||V)&&(V=B.window===B?B:(V=B.ownerDocument)?V.defaultView||V.parentWindow:window,Y?(J=i.relatedTarget||i.toElement,Y=A,J=J?Wn(J):null,J!==null&&(Qe=qn(J),J!==Qe||J.tag!==5&&J.tag!==6)&&(J=null)):(Y=null,J=A),Y!==J)){if(Z=Xc,q="onMouseLeave",I="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(Z=Zc,q="onPointerLeave",I="onPointerEnter",_="pointer"),Qe=Y==null?V:Sr(Y),D=J==null?V:Sr(J),V=new Z(q,_+"leave",Y,i,B),V.target=Qe,V.relatedTarget=D,q=null,Wn(B)===A&&(Z=new Z(I,_+"enter",J,i,B),Z.target=D,Z.relatedTarget=Qe,q=Z),Qe=q,Y&&J)t:{for(Z=Y,I=J,_=0,D=Z;D;D=wr(D))_++;for(D=0,q=I;q;q=wr(q))D++;for(;0<_-D;)Z=wr(Z),_--;for(;0<D-_;)I=wr(I),D--;for(;_--;){if(Z===I||I!==null&&Z===I.alternate)break t;Z=wr(Z),I=wr(I)}Z=null}else Z=null;Y!==null&&Cd(H,V,Y,Z,!1),J!==null&&Qe!==null&&Cd(H,Qe,J,Z,!0)}}e:{if(V=A?Sr(A):window,Y=V.nodeName&&V.nodeName.toLowerCase(),Y==="select"||Y==="input"&&V.type==="file")var ne=pv;else if(id(V))if(ld)ne=gv;else{ne=mv;var ae=hv}else(Y=V.nodeName)&&Y.toLowerCase()==="input"&&(V.type==="checkbox"||V.type==="radio")&&(ne=vv);if(ne&&(ne=ne(e,A))){ad(H,ne,i,B);break e}ae&&ae(e,V,A),e==="focusout"&&(ae=V._wrapperState)&&ae.controlled&&V.type==="number"&&gl(V,"number",V.value)}switch(ae=A?Sr(A):window,e){case"focusin":(id(ae)||ae.contentEditable==="true")&&(yr=ae,Wl=A,po=null);break;case"focusout":po=Wl=yr=null;break;case"mousedown":Ql=!0;break;case"contextmenu":case"mouseup":case"dragend":Ql=!1,md(H,i,B);break;case"selectionchange":if(wv)break;case"keydown":case"keyup":md(H,i,B)}var le;if(Ul)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else gr?rd(e,i)&&(de="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(de="onCompositionStart");de&&(ed&&i.locale!=="ko"&&(gr||de!=="onCompositionStart"?de==="onCompositionEnd"&&gr&&(le=Yc()):(Pn=B,Al="value"in Pn?Pn.value:Pn.textContent,gr=!0)),ae=Ri(A,de),0<ae.length&&(de=new Jc(de,e,null,i,B),H.push({event:de,listeners:ae}),le?de.data=le:(le=od(i),le!==null&&(de.data=le)))),(le=sv?uv(e,i):cv(e,i))&&(A=Ri(A,"onBeforeInput"),0<A.length&&(B=new Jc("onBeforeInput","beforeinput",null,i,B),H.push({event:B,listeners:A}),B.data=le))}Ed(H,t)})}function vo(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Ri(e,t){for(var i=t+"Capture",s=[];e!==null;){var d=e,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=Gr(e,i),h!=null&&s.unshift(vo(e,h,d)),h=Gr(e,t),h!=null&&s.push(vo(e,h,d))),e=e.return}return s}function wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cd(e,t,i,s,d){for(var h=t._reactName,y=[];i!==null&&i!==s;){var E=i,C=E.alternate,A=E.stateNode;if(C!==null&&C===s)break;E.tag===5&&A!==null&&(E=A,d?(C=Gr(i,h),C!=null&&y.unshift(vo(i,C,E))):d||(C=Gr(i,h),C!=null&&y.push(vo(i,C,E)))),i=i.return}y.length!==0&&e.push({event:t,listeners:y})}var Ev=/\r\n?/g,Pv=/\u0000|\uFFFD/g;function Od(e){return(typeof e=="string"?e:""+e).replace(Ev,`
`).replace(Pv,"")}function _i(e,t,i){if(t=Od(t),Od(e)!==t&&i)throw Error(o(425))}function Ti(){}var Zl=null,es=null;function ts(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ns=typeof setTimeout=="function"?setTimeout:void 0,Cv=typeof clearTimeout=="function"?clearTimeout:void 0,Rd=typeof Promise=="function"?Promise:void 0,Ov=typeof queueMicrotask=="function"?queueMicrotask:typeof Rd<"u"?function(e){return Rd.resolve(null).then(e).catch(Rv)}:ns;function Rv(e){setTimeout(function(){throw e})}function rs(e,t){var i=t,s=0;do{var d=i.nextSibling;if(e.removeChild(i),d&&d.nodeType===8)if(i=d.data,i==="/$"){if(s===0){e.removeChild(d),io(t);return}s--}else i!=="$"&&i!=="$?"&&i!=="$!"||s++;i=d}while(i);io(t)}function On(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _d(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var xr=Math.random().toString(36).slice(2),Yt="__reactFiber$"+xr,go="__reactProps$"+xr,ln="__reactContainer$"+xr,os="__reactEvents$"+xr,_v="__reactListeners$"+xr,Tv="__reactHandles$"+xr;function Wn(e){var t=e[Yt];if(t)return t;for(var i=e.parentNode;i;){if(t=i[ln]||i[Yt]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=_d(e);e!==null;){if(i=e[Yt])return i;e=_d(e)}return t}e=i,i=e.parentNode}return null}function yo(e){return e=e[Yt]||e[ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Mi(e){return e[go]||null}var is=[],kr=-1;function Rn(e){return{current:e}}function ze(e){0>kr||(e.current=is[kr],is[kr]=null,kr--)}function De(e,t){kr++,is[kr]=e.current,e.current=t}var _n={},at=Rn(_n),mt=Rn(!1),Qn=_n;function Er(e,t){var i=e.type.contextTypes;if(!i)return _n;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in i)d[h]=t[h];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=d),d}function vt(e){return e=e.childContextTypes,e!=null}function Ni(){ze(mt),ze(at)}function Td(e,t,i){if(at.current!==_n)throw Error(o(168));De(at,t),De(mt,i)}function Md(e,t,i){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return i;s=s.getChildContext();for(var d in s)if(!(d in t))throw Error(o(108,Ee(e)||"Unknown",d));return K({},i,s)}function Li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_n,Qn=at.current,De(at,e),De(mt,mt.current),!0}function Nd(e,t,i){var s=e.stateNode;if(!s)throw Error(o(169));i?(e=Md(e,t,Qn),s.__reactInternalMemoizedMergedChildContext=e,ze(mt),ze(at),De(at,e)):ze(mt),De(mt,i)}var sn=null,Ii=!1,as=!1;function Ld(e){sn===null?sn=[e]:sn.push(e)}function Mv(e){Ii=!0,Ld(e)}function Tn(){if(!as&&sn!==null){as=!0;var e=0,t=Le;try{var i=sn;for(Le=1;e<i.length;e++){var s=i[e];do s=s(!0);while(s!==null)}sn=null,Ii=!1}catch(d){throw sn!==null&&(sn=sn.slice(e+1)),Dc(Rl,Tn),d}finally{Le=t,as=!1}}return null}var Pr=[],Cr=0,Di=null,Ai=0,Tt=[],Mt=0,Kn=null,un=1,cn="";function Yn(e,t){Pr[Cr++]=Ai,Pr[Cr++]=Di,Di=e,Ai=t}function Id(e,t,i){Tt[Mt++]=un,Tt[Mt++]=cn,Tt[Mt++]=Kn,Kn=e;var s=un;e=cn;var d=32-At(s)-1;s&=~(1<<d),i+=1;var h=32-At(t)+d;if(30<h){var y=d-d%5;h=(s&(1<<y)-1).toString(32),s>>=y,d-=y,un=1<<32-At(t)+d|i<<d|s,cn=h+e}else un=1<<h|i<<d|s,cn=e}function ls(e){e.return!==null&&(Yn(e,1),Id(e,1,0))}function ss(e){for(;e===Di;)Di=Pr[--Cr],Pr[Cr]=null,Ai=Pr[--Cr],Pr[Cr]=null;for(;e===Kn;)Kn=Tt[--Mt],Tt[Mt]=null,cn=Tt[--Mt],Tt[Mt]=null,un=Tt[--Mt],Tt[Mt]=null}var Et=null,Pt=null,Fe=!1,Ft=null;function Dd(e,t){var i=Dt(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function Ad(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Et=e,Pt=On(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Et=e,Pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=Kn!==null?{id:un,overflow:cn}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=Dt(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,Et=e,Pt=null,!0):!1;default:return!1}}function us(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cs(e){if(Fe){var t=Pt;if(t){var i=t;if(!Ad(e,t)){if(us(e))throw Error(o(418));t=On(i.nextSibling);var s=Et;t&&Ad(e,t)?Dd(s,i):(e.flags=e.flags&-4097|2,Fe=!1,Et=e)}}else{if(us(e))throw Error(o(418));e.flags=e.flags&-4097|2,Fe=!1,Et=e}}}function zd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Et=e}function zi(e){if(e!==Et)return!1;if(!Fe)return zd(e),Fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ts(e.type,e.memoizedProps)),t&&(t=Pt)){if(us(e))throw Fd(),Error(o(418));for(;t;)Dd(e,t),t=On(t.nextSibling)}if(zd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){Pt=On(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}Pt=null}}else Pt=Et?On(e.stateNode.nextSibling):null;return!0}function Fd(){for(var e=Pt;e;)e=On(e.nextSibling)}function Or(){Pt=Et=null,Fe=!1}function ds(e){Ft===null?Ft=[e]:Ft.push(e)}var Nv=F.ReactCurrentBatchConfig;function bo(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(o(309));var s=i.stateNode}if(!s)throw Error(o(147,e));var d=s,h=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===h?t.ref:(t=function(y){var E=d.refs;y===null?delete E[h]:E[h]=y},t._stringRef=h,t)}if(typeof e!="string")throw Error(o(284));if(!i._owner)throw Error(o(290,e))}return e}function Fi(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function jd(e){var t=e._init;return t(e._payload)}function Vd(e){function t(I,_){if(e){var D=I.deletions;D===null?(I.deletions=[_],I.flags|=16):D.push(_)}}function i(I,_){if(!e)return null;for(;_!==null;)t(I,_),_=_.sibling;return null}function s(I,_){for(I=new Map;_!==null;)_.key!==null?I.set(_.key,_):I.set(_.index,_),_=_.sibling;return I}function d(I,_){return I=Fn(I,_),I.index=0,I.sibling=null,I}function h(I,_,D){return I.index=D,e?(D=I.alternate,D!==null?(D=D.index,D<_?(I.flags|=2,_):D):(I.flags|=2,_)):(I.flags|=1048576,_)}function y(I){return e&&I.alternate===null&&(I.flags|=2),I}function E(I,_,D,q){return _===null||_.tag!==6?(_=nu(D,I.mode,q),_.return=I,_):(_=d(_,D),_.return=I,_)}function C(I,_,D,q){var ne=D.type;return ne===U?B(I,_,D.props.children,q,D.key):_!==null&&(_.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===xe&&jd(ne)===_.type)?(q=d(_,D.props),q.ref=bo(I,_,D),q.return=I,q):(q=sa(D.type,D.key,D.props,null,I.mode,q),q.ref=bo(I,_,D),q.return=I,q)}function A(I,_,D,q){return _===null||_.tag!==4||_.stateNode.containerInfo!==D.containerInfo||_.stateNode.implementation!==D.implementation?(_=ru(D,I.mode,q),_.return=I,_):(_=d(_,D.children||[]),_.return=I,_)}function B(I,_,D,q,ne){return _===null||_.tag!==7?(_=rr(D,I.mode,q,ne),_.return=I,_):(_=d(_,D),_.return=I,_)}function H(I,_,D){if(typeof _=="string"&&_!==""||typeof _=="number")return _=nu(""+_,I.mode,D),_.return=I,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case L:return D=sa(_.type,_.key,_.props,null,I.mode,D),D.ref=bo(I,null,_),D.return=I,D;case $:return _=ru(_,I.mode,D),_.return=I,_;case xe:var q=_._init;return H(I,q(_._payload),D)}if(Qr(_)||ee(_))return _=rr(_,I.mode,D,null),_.return=I,_;Fi(I,_)}return null}function V(I,_,D,q){var ne=_!==null?_.key:null;if(typeof D=="string"&&D!==""||typeof D=="number")return ne!==null?null:E(I,_,""+D,q);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case L:return D.key===ne?C(I,_,D,q):null;case $:return D.key===ne?A(I,_,D,q):null;case xe:return ne=D._init,V(I,_,ne(D._payload),q)}if(Qr(D)||ee(D))return ne!==null?null:B(I,_,D,q,null);Fi(I,D)}return null}function Y(I,_,D,q,ne){if(typeof q=="string"&&q!==""||typeof q=="number")return I=I.get(D)||null,E(_,I,""+q,ne);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case L:return I=I.get(q.key===null?D:q.key)||null,C(_,I,q,ne);case $:return I=I.get(q.key===null?D:q.key)||null,A(_,I,q,ne);case xe:var ae=q._init;return Y(I,_,D,ae(q._payload),ne)}if(Qr(q)||ee(q))return I=I.get(D)||null,B(_,I,q,ne,null);Fi(_,q)}return null}function J(I,_,D,q){for(var ne=null,ae=null,le=_,de=_=0,nt=null;le!==null&&de<D.length;de++){le.index>de?(nt=le,le=null):nt=le.sibling;var Ce=V(I,le,D[de],q);if(Ce===null){le===null&&(le=nt);break}e&&le&&Ce.alternate===null&&t(I,le),_=h(Ce,_,de),ae===null?ne=Ce:ae.sibling=Ce,ae=Ce,le=nt}if(de===D.length)return i(I,le),Fe&&Yn(I,de),ne;if(le===null){for(;de<D.length;de++)le=H(I,D[de],q),le!==null&&(_=h(le,_,de),ae===null?ne=le:ae.sibling=le,ae=le);return Fe&&Yn(I,de),ne}for(le=s(I,le);de<D.length;de++)nt=Y(le,I,de,D[de],q),nt!==null&&(e&&nt.alternate!==null&&le.delete(nt.key===null?de:nt.key),_=h(nt,_,de),ae===null?ne=nt:ae.sibling=nt,ae=nt);return e&&le.forEach(function(jn){return t(I,jn)}),Fe&&Yn(I,de),ne}function Z(I,_,D,q){var ne=ee(D);if(typeof ne!="function")throw Error(o(150));if(D=ne.call(D),D==null)throw Error(o(151));for(var ae=ne=null,le=_,de=_=0,nt=null,Ce=D.next();le!==null&&!Ce.done;de++,Ce=D.next()){le.index>de?(nt=le,le=null):nt=le.sibling;var jn=V(I,le,Ce.value,q);if(jn===null){le===null&&(le=nt);break}e&&le&&jn.alternate===null&&t(I,le),_=h(jn,_,de),ae===null?ne=jn:ae.sibling=jn,ae=jn,le=nt}if(Ce.done)return i(I,le),Fe&&Yn(I,de),ne;if(le===null){for(;!Ce.done;de++,Ce=D.next())Ce=H(I,Ce.value,q),Ce!==null&&(_=h(Ce,_,de),ae===null?ne=Ce:ae.sibling=Ce,ae=Ce);return Fe&&Yn(I,de),ne}for(le=s(I,le);!Ce.done;de++,Ce=D.next())Ce=Y(le,I,de,Ce.value,q),Ce!==null&&(e&&Ce.alternate!==null&&le.delete(Ce.key===null?de:Ce.key),_=h(Ce,_,de),ae===null?ne=Ce:ae.sibling=Ce,ae=Ce);return e&&le.forEach(function(dg){return t(I,dg)}),Fe&&Yn(I,de),ne}function Qe(I,_,D,q){if(typeof D=="object"&&D!==null&&D.type===U&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case L:e:{for(var ne=D.key,ae=_;ae!==null;){if(ae.key===ne){if(ne=D.type,ne===U){if(ae.tag===7){i(I,ae.sibling),_=d(ae,D.props.children),_.return=I,I=_;break e}}else if(ae.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===xe&&jd(ne)===ae.type){i(I,ae.sibling),_=d(ae,D.props),_.ref=bo(I,ae,D),_.return=I,I=_;break e}i(I,ae);break}else t(I,ae);ae=ae.sibling}D.type===U?(_=rr(D.props.children,I.mode,q,D.key),_.return=I,I=_):(q=sa(D.type,D.key,D.props,null,I.mode,q),q.ref=bo(I,_,D),q.return=I,I=q)}return y(I);case $:e:{for(ae=D.key;_!==null;){if(_.key===ae)if(_.tag===4&&_.stateNode.containerInfo===D.containerInfo&&_.stateNode.implementation===D.implementation){i(I,_.sibling),_=d(_,D.children||[]),_.return=I,I=_;break e}else{i(I,_);break}else t(I,_);_=_.sibling}_=ru(D,I.mode,q),_.return=I,I=_}return y(I);case xe:return ae=D._init,Qe(I,_,ae(D._payload),q)}if(Qr(D))return J(I,_,D,q);if(ee(D))return Z(I,_,D,q);Fi(I,D)}return typeof D=="string"&&D!==""||typeof D=="number"?(D=""+D,_!==null&&_.tag===6?(i(I,_.sibling),_=d(_,D),_.return=I,I=_):(i(I,_),_=nu(D,I.mode,q),_.return=I,I=_),y(I)):i(I,_)}return Qe}var Rr=Vd(!0),$d=Vd(!1),ji=Rn(null),Vi=null,_r=null,fs=null;function ps(){fs=_r=Vi=null}function hs(e){var t=ji.current;ze(ji),e._currentValue=t}function ms(e,t,i){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===i)break;e=e.return}}function Tr(e,t){Vi=e,fs=_r=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(gt=!0),e.firstContext=null)}function Nt(e){var t=e._currentValue;if(fs!==e)if(e={context:e,memoizedValue:t,next:null},_r===null){if(Vi===null)throw Error(o(308));_r=e,Vi.dependencies={lanes:0,firstContext:e}}else _r=_r.next=e;return t}var Gn=null;function vs(e){Gn===null?Gn=[e]:Gn.push(e)}function Ud(e,t,i,s){var d=t.interleaved;return d===null?(i.next=i,vs(t)):(i.next=d.next,d.next=i),t.interleaved=i,dn(e,s)}function dn(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Mn=!1;function gs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function fn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nn(e,t,i){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,Pe&2){var d=s.pending;return d===null?t.next=t:(t.next=d.next,d.next=t),s.pending=t,dn(e,i)}return d=s.interleaved,d===null?(t.next=t,vs(s)):(t.next=d.next,d.next=t),s.interleaved=t,dn(e,i)}function $i(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,i|=s,t.lanes=i,Ml(e,i)}}function Hd(e,t){var i=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var d=null,h=null;if(i=i.firstBaseUpdate,i!==null){do{var y={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};h===null?d=h=y:h=h.next=y,i=i.next}while(i!==null);h===null?d=h=t:h=h.next=t}else d=h=t;i={baseState:s.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:s.shared,effects:s.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function Ui(e,t,i,s){var d=e.updateQueue;Mn=!1;var h=d.firstBaseUpdate,y=d.lastBaseUpdate,E=d.shared.pending;if(E!==null){d.shared.pending=null;var C=E,A=C.next;C.next=null,y===null?h=A:y.next=A,y=C;var B=e.alternate;B!==null&&(B=B.updateQueue,E=B.lastBaseUpdate,E!==y&&(E===null?B.firstBaseUpdate=A:E.next=A,B.lastBaseUpdate=C))}if(h!==null){var H=d.baseState;y=0,B=A=C=null,E=h;do{var V=E.lane,Y=E.eventTime;if((s&V)===V){B!==null&&(B=B.next={eventTime:Y,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});e:{var J=e,Z=E;switch(V=t,Y=i,Z.tag){case 1:if(J=Z.payload,typeof J=="function"){H=J.call(Y,H,V);break e}H=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=Z.payload,V=typeof J=="function"?J.call(Y,H,V):J,V==null)break e;H=K({},H,V);break e;case 2:Mn=!0}}E.callback!==null&&E.lane!==0&&(e.flags|=64,V=d.effects,V===null?d.effects=[E]:V.push(E))}else Y={eventTime:Y,lane:V,tag:E.tag,payload:E.payload,callback:E.callback,next:null},B===null?(A=B=Y,C=H):B=B.next=Y,y|=V;if(E=E.next,E===null){if(E=d.shared.pending,E===null)break;V=E,E=V.next,V.next=null,d.lastBaseUpdate=V,d.shared.pending=null}}while(!0);if(B===null&&(C=H),d.baseState=C,d.firstBaseUpdate=A,d.lastBaseUpdate=B,t=d.shared.interleaved,t!==null){d=t;do y|=d.lane,d=d.next;while(d!==t)}else h===null&&(d.shared.lanes=0);Zn|=y,e.lanes=y,e.memoizedState=H}}function qd(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],d=s.callback;if(d!==null){if(s.callback=null,s=i,typeof d!="function")throw Error(o(191,d));d.call(s)}}}var wo={},Gt=Rn(wo),xo=Rn(wo),So=Rn(wo);function Xn(e){if(e===wo)throw Error(o(174));return e}function ys(e,t){switch(De(So,t),De(xo,e),De(Gt,wo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:bl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=bl(t,e)}ze(Gt),De(Gt,t)}function Mr(){ze(Gt),ze(xo),ze(So)}function Wd(e){Xn(So.current);var t=Xn(Gt.current),i=bl(t,e.type);t!==i&&(De(xo,e),De(Gt,i))}function bs(e){xo.current===e&&(ze(Gt),ze(xo))}var Ve=Rn(0);function Bi(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ws=[];function xs(){for(var e=0;e<ws.length;e++)ws[e]._workInProgressVersionPrimary=null;ws.length=0}var Hi=F.ReactCurrentDispatcher,Ss=F.ReactCurrentBatchConfig,Jn=0,$e=null,Xe=null,et=null,qi=!1,ko=!1,Eo=0,Lv=0;function lt(){throw Error(o(321))}function ks(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!zt(e[i],t[i]))return!1;return!0}function Es(e,t,i,s,d,h){if(Jn=h,$e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hi.current=e===null||e.memoizedState===null?zv:Fv,e=i(s,d),ko){h=0;do{if(ko=!1,Eo=0,25<=h)throw Error(o(301));h+=1,et=Xe=null,t.updateQueue=null,Hi.current=jv,e=i(s,d)}while(ko)}if(Hi.current=Ki,t=Xe!==null&&Xe.next!==null,Jn=0,et=Xe=$e=null,qi=!1,t)throw Error(o(300));return e}function Ps(){var e=Eo!==0;return Eo=0,e}function Xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?$e.memoizedState=et=e:et=et.next=e,et}function Lt(){if(Xe===null){var e=$e.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var t=et===null?$e.memoizedState:et.next;if(t!==null)et=t,Xe=e;else{if(e===null)throw Error(o(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},et===null?$e.memoizedState=et=e:et=et.next=e}return et}function Po(e,t){return typeof t=="function"?t(e):t}function Cs(e){var t=Lt(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var s=Xe,d=s.baseQueue,h=i.pending;if(h!==null){if(d!==null){var y=d.next;d.next=h.next,h.next=y}s.baseQueue=d=h,i.pending=null}if(d!==null){h=d.next,s=s.baseState;var E=y=null,C=null,A=h;do{var B=A.lane;if((Jn&B)===B)C!==null&&(C=C.next={lane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),s=A.hasEagerState?A.eagerState:e(s,A.action);else{var H={lane:B,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null};C===null?(E=C=H,y=s):C=C.next=H,$e.lanes|=B,Zn|=B}A=A.next}while(A!==null&&A!==h);C===null?y=s:C.next=E,zt(s,t.memoizedState)||(gt=!0),t.memoizedState=s,t.baseState=y,t.baseQueue=C,i.lastRenderedState=s}if(e=i.interleaved,e!==null){d=e;do h=d.lane,$e.lanes|=h,Zn|=h,d=d.next;while(d!==e)}else d===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function Os(e){var t=Lt(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var s=i.dispatch,d=i.pending,h=t.memoizedState;if(d!==null){i.pending=null;var y=d=d.next;do h=e(h,y.action),y=y.next;while(y!==d);zt(h,t.memoizedState)||(gt=!0),t.memoizedState=h,t.baseQueue===null&&(t.baseState=h),i.lastRenderedState=h}return[h,s]}function Qd(){}function Kd(e,t){var i=$e,s=Lt(),d=t(),h=!zt(s.memoizedState,d);if(h&&(s.memoizedState=d,gt=!0),s=s.queue,Rs(Xd.bind(null,i,s,e),[e]),s.getSnapshot!==t||h||et!==null&&et.memoizedState.tag&1){if(i.flags|=2048,Co(9,Gd.bind(null,i,s,d,t),void 0,null),tt===null)throw Error(o(349));Jn&30||Yd(i,t,d)}return d}function Yd(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function Gd(e,t,i,s){t.value=i,t.getSnapshot=s,Jd(t)&&Zd(e)}function Xd(e,t,i){return i(function(){Jd(t)&&Zd(e)})}function Jd(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!zt(e,i)}catch{return!0}}function Zd(e){var t=dn(e,1);t!==null&&Ut(t,e,1,-1)}function ef(e){var t=Xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:e},t.queue=e,e=e.dispatch=Av.bind(null,$e,e),[t.memoizedState,e]}function Co(e,t,i,s){return e={tag:e,create:t,destroy:i,deps:s,next:null},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(s=i.next,i.next=e,e.next=s,t.lastEffect=e)),e}function tf(){return Lt().memoizedState}function Wi(e,t,i,s){var d=Xt();$e.flags|=e,d.memoizedState=Co(1|t,i,void 0,s===void 0?null:s)}function Qi(e,t,i,s){var d=Lt();s=s===void 0?null:s;var h=void 0;if(Xe!==null){var y=Xe.memoizedState;if(h=y.destroy,s!==null&&ks(s,y.deps)){d.memoizedState=Co(t,i,h,s);return}}$e.flags|=e,d.memoizedState=Co(1|t,i,h,s)}function nf(e,t){return Wi(8390656,8,e,t)}function Rs(e,t){return Qi(2048,8,e,t)}function rf(e,t){return Qi(4,2,e,t)}function of(e,t){return Qi(4,4,e,t)}function af(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lf(e,t,i){return i=i!=null?i.concat([e]):null,Qi(4,4,af.bind(null,t,e),i)}function _s(){}function sf(e,t){var i=Lt();t=t===void 0?null:t;var s=i.memoizedState;return s!==null&&t!==null&&ks(t,s[1])?s[0]:(i.memoizedState=[e,t],e)}function uf(e,t){var i=Lt();t=t===void 0?null:t;var s=i.memoizedState;return s!==null&&t!==null&&ks(t,s[1])?s[0]:(e=e(),i.memoizedState=[e,t],e)}function cf(e,t,i){return Jn&21?(zt(i,t)||(i=jc(),$e.lanes|=i,Zn|=i,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,gt=!0),e.memoizedState=i)}function Iv(e,t){var i=Le;Le=i!==0&&4>i?i:4,e(!0);var s=Ss.transition;Ss.transition={};try{e(!1),t()}finally{Le=i,Ss.transition=s}}function df(){return Lt().memoizedState}function Dv(e,t,i){var s=An(e);if(i={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null},ff(e))pf(t,i);else if(i=Ud(e,t,i,s),i!==null){var d=ht();Ut(i,e,s,d),hf(i,t,s)}}function Av(e,t,i){var s=An(e),d={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null};if(ff(e))pf(t,d);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=t.lastRenderedReducer,h!==null))try{var y=t.lastRenderedState,E=h(y,i);if(d.hasEagerState=!0,d.eagerState=E,zt(E,y)){var C=t.interleaved;C===null?(d.next=d,vs(t)):(d.next=C.next,C.next=d),t.interleaved=d;return}}catch{}finally{}i=Ud(e,t,d,s),i!==null&&(d=ht(),Ut(i,e,s,d),hf(i,t,s))}}function ff(e){var t=e.alternate;return e===$e||t!==null&&t===$e}function pf(e,t){ko=qi=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function hf(e,t,i){if(i&4194240){var s=t.lanes;s&=e.pendingLanes,i|=s,t.lanes=i,Ml(e,i)}}var Ki={readContext:Nt,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},zv={readContext:Nt,useCallback:function(e,t){return Xt().memoizedState=[e,t===void 0?null:t],e},useContext:Nt,useEffect:nf,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,Wi(4194308,4,af.bind(null,t,e),i)},useLayoutEffect:function(e,t){return Wi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wi(4,2,e,t)},useMemo:function(e,t){var i=Xt();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var s=Xt();return t=i!==void 0?i(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Dv.bind(null,$e,e),[s.memoizedState,e]},useRef:function(e){var t=Xt();return e={current:e},t.memoizedState=e},useState:ef,useDebugValue:_s,useDeferredValue:function(e){return Xt().memoizedState=e},useTransition:function(){var e=ef(!1),t=e[0];return e=Iv.bind(null,e[1]),Xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var s=$e,d=Xt();if(Fe){if(i===void 0)throw Error(o(407));i=i()}else{if(i=t(),tt===null)throw Error(o(349));Jn&30||Yd(s,t,i)}d.memoizedState=i;var h={value:i,getSnapshot:t};return d.queue=h,nf(Xd.bind(null,s,h,e),[e]),s.flags|=2048,Co(9,Gd.bind(null,s,h,i,t),void 0,null),i},useId:function(){var e=Xt(),t=tt.identifierPrefix;if(Fe){var i=cn,s=un;i=(s&~(1<<32-At(s)-1)).toString(32)+i,t=":"+t+"R"+i,i=Eo++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=Lv++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Fv={readContext:Nt,useCallback:sf,useContext:Nt,useEffect:Rs,useImperativeHandle:lf,useInsertionEffect:rf,useLayoutEffect:of,useMemo:uf,useReducer:Cs,useRef:tf,useState:function(){return Cs(Po)},useDebugValue:_s,useDeferredValue:function(e){var t=Lt();return cf(t,Xe.memoizedState,e)},useTransition:function(){var e=Cs(Po)[0],t=Lt().memoizedState;return[e,t]},useMutableSource:Qd,useSyncExternalStore:Kd,useId:df,unstable_isNewReconciler:!1},jv={readContext:Nt,useCallback:sf,useContext:Nt,useEffect:Rs,useImperativeHandle:lf,useInsertionEffect:rf,useLayoutEffect:of,useMemo:uf,useReducer:Os,useRef:tf,useState:function(){return Os(Po)},useDebugValue:_s,useDeferredValue:function(e){var t=Lt();return Xe===null?t.memoizedState=e:cf(t,Xe.memoizedState,e)},useTransition:function(){var e=Os(Po)[0],t=Lt().memoizedState;return[e,t]},useMutableSource:Qd,useSyncExternalStore:Kd,useId:df,unstable_isNewReconciler:!1};function jt(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function Ts(e,t,i,s){t=e.memoizedState,i=i(s,t),i=i==null?t:K({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Yi={isMounted:function(e){return(e=e._reactInternals)?qn(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var s=ht(),d=An(e),h=fn(s,d);h.payload=t,i!=null&&(h.callback=i),t=Nn(e,h,d),t!==null&&(Ut(t,e,d,s),$i(t,e,d))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var s=ht(),d=An(e),h=fn(s,d);h.tag=1,h.payload=t,i!=null&&(h.callback=i),t=Nn(e,h,d),t!==null&&(Ut(t,e,d,s),$i(t,e,d))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=ht(),s=An(e),d=fn(i,s);d.tag=2,t!=null&&(d.callback=t),t=Nn(e,d,s),t!==null&&(Ut(t,e,s,i),$i(t,e,s))}};function mf(e,t,i,s,d,h,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,h,y):t.prototype&&t.prototype.isPureReactComponent?!fo(i,s)||!fo(d,h):!0}function vf(e,t,i){var s=!1,d=_n,h=t.contextType;return typeof h=="object"&&h!==null?h=Nt(h):(d=vt(t)?Qn:at.current,s=t.contextTypes,h=(s=s!=null)?Er(e,d):_n),t=new t(i,h),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yi,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=d,e.__reactInternalMemoizedMaskedChildContext=h),t}function gf(e,t,i,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,s),t.state!==e&&Yi.enqueueReplaceState(t,t.state,null)}function Ms(e,t,i,s){var d=e.stateNode;d.props=i,d.state=e.memoizedState,d.refs={},gs(e);var h=t.contextType;typeof h=="object"&&h!==null?d.context=Nt(h):(h=vt(t)?Qn:at.current,d.context=Er(e,h)),d.state=e.memoizedState,h=t.getDerivedStateFromProps,typeof h=="function"&&(Ts(e,t,h,i),d.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(t=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),t!==d.state&&Yi.enqueueReplaceState(d,d.state,null),Ui(e,i,d,s),d.state=e.memoizedState),typeof d.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t){try{var i="",s=t;do i+=he(s),s=s.return;while(s);var d=i}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:e,source:t,stack:d,digest:null}}function Ns(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function Ls(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var Vv=typeof WeakMap=="function"?WeakMap:Map;function yf(e,t,i){i=fn(-1,i),i.tag=3,i.payload={element:null};var s=t.value;return i.callback=function(){na||(na=!0,Ks=s),Ls(e,t)},i}function bf(e,t,i){i=fn(-1,i),i.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var d=t.value;i.payload=function(){return s(d)},i.callback=function(){Ls(e,t)}}var h=e.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(i.callback=function(){Ls(e,t),typeof s!="function"&&(In===null?In=new Set([this]):In.add(this));var y=t.stack;this.componentDidCatch(t.value,{componentStack:y!==null?y:""})}),i}function wf(e,t,i){var s=e.pingCache;if(s===null){s=e.pingCache=new Vv;var d=new Set;s.set(t,d)}else d=s.get(t),d===void 0&&(d=new Set,s.set(t,d));d.has(i)||(d.add(i),e=eg.bind(null,e,t,i),t.then(e,e))}function xf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Sf(e,t,i,s,d){return e.mode&1?(e.flags|=65536,e.lanes=d,e):(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=fn(-1,1),t.tag=2,Nn(i,t,1))),i.lanes|=1),e)}var $v=F.ReactCurrentOwner,gt=!1;function pt(e,t,i,s){t.child=e===null?$d(t,null,i,s):Rr(t,e.child,i,s)}function kf(e,t,i,s,d){i=i.render;var h=t.ref;return Tr(t,d),s=Es(e,t,i,s,h,d),i=Ps(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~d,pn(e,t,d)):(Fe&&i&&ls(t),t.flags|=1,pt(e,t,s,d),t.child)}function Ef(e,t,i,s,d){if(e===null){var h=i.type;return typeof h=="function"&&!tu(h)&&h.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=h,Pf(e,t,h,s,d)):(e=sa(i.type,null,s,t,t.mode,d),e.ref=t.ref,e.return=t,t.child=e)}if(h=e.child,!(e.lanes&d)){var y=h.memoizedProps;if(i=i.compare,i=i!==null?i:fo,i(y,s)&&e.ref===t.ref)return pn(e,t,d)}return t.flags|=1,e=Fn(h,s),e.ref=t.ref,e.return=t,t.child=e}function Pf(e,t,i,s,d){if(e!==null){var h=e.memoizedProps;if(fo(h,s)&&e.ref===t.ref)if(gt=!1,t.pendingProps=s=h,(e.lanes&d)!==0)e.flags&131072&&(gt=!0);else return t.lanes=e.lanes,pn(e,t,d)}return Is(e,t,i,s,d)}function Cf(e,t,i){var s=t.pendingProps,d=s.children,h=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},De(Ir,Ct),Ct|=i;else{if(!(i&1073741824))return e=h!==null?h.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,De(Ir,Ct),Ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=h!==null?h.baseLanes:i,De(Ir,Ct),Ct|=s}else h!==null?(s=h.baseLanes|i,t.memoizedState=null):s=i,De(Ir,Ct),Ct|=s;return pt(e,t,d,i),t.child}function Of(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function Is(e,t,i,s,d){var h=vt(i)?Qn:at.current;return h=Er(t,h),Tr(t,d),i=Es(e,t,i,s,h,d),s=Ps(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~d,pn(e,t,d)):(Fe&&s&&ls(t),t.flags|=1,pt(e,t,i,d),t.child)}function Rf(e,t,i,s,d){if(vt(i)){var h=!0;Li(t)}else h=!1;if(Tr(t,d),t.stateNode===null)Xi(e,t),vf(t,i,s),Ms(t,i,s,d),s=!0;else if(e===null){var y=t.stateNode,E=t.memoizedProps;y.props=E;var C=y.context,A=i.contextType;typeof A=="object"&&A!==null?A=Nt(A):(A=vt(i)?Qn:at.current,A=Er(t,A));var B=i.getDerivedStateFromProps,H=typeof B=="function"||typeof y.getSnapshotBeforeUpdate=="function";H||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(E!==s||C!==A)&&gf(t,y,s,A),Mn=!1;var V=t.memoizedState;y.state=V,Ui(t,s,y,d),C=t.memoizedState,E!==s||V!==C||mt.current||Mn?(typeof B=="function"&&(Ts(t,i,B,s),C=t.memoizedState),(E=Mn||mf(t,i,E,s,V,C,A))?(H||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(t.flags|=4194308)):(typeof y.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=C),y.props=s,y.state=C,y.context=A,s=E):(typeof y.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{y=t.stateNode,Bd(e,t),E=t.memoizedProps,A=t.type===t.elementType?E:jt(t.type,E),y.props=A,H=t.pendingProps,V=y.context,C=i.contextType,typeof C=="object"&&C!==null?C=Nt(C):(C=vt(i)?Qn:at.current,C=Er(t,C));var Y=i.getDerivedStateFromProps;(B=typeof Y=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(E!==H||V!==C)&&gf(t,y,s,C),Mn=!1,V=t.memoizedState,y.state=V,Ui(t,s,y,d);var J=t.memoizedState;E!==H||V!==J||mt.current||Mn?(typeof Y=="function"&&(Ts(t,i,Y,s),J=t.memoizedState),(A=Mn||mf(t,i,A,s,V,J,C)||!1)?(B||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(s,J,C),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(s,J,C)),typeof y.componentDidUpdate=="function"&&(t.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof y.componentDidUpdate!="function"||E===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=J),y.props=s,y.state=J,y.context=C,s=A):(typeof y.componentDidUpdate!="function"||E===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),s=!1)}return Ds(e,t,i,s,h,d)}function Ds(e,t,i,s,d,h){Of(e,t);var y=(t.flags&128)!==0;if(!s&&!y)return d&&Nd(t,i,!1),pn(e,t,h);s=t.stateNode,$v.current=t;var E=y&&typeof i.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&y?(t.child=Rr(t,e.child,null,h),t.child=Rr(t,null,E,h)):pt(e,t,E,h),t.memoizedState=s.state,d&&Nd(t,i,!0),t.child}function _f(e){var t=e.stateNode;t.pendingContext?Td(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Td(e,t.context,!1),ys(e,t.containerInfo)}function Tf(e,t,i,s,d){return Or(),ds(d),t.flags|=256,pt(e,t,i,s),t.child}var As={dehydrated:null,treeContext:null,retryLane:0};function zs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mf(e,t,i){var s=t.pendingProps,d=Ve.current,h=!1,y=(t.flags&128)!==0,E;if((E=y)||(E=e!==null&&e.memoizedState===null?!1:(d&2)!==0),E?(h=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(d|=1),De(Ve,d&1),e===null)return cs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(y=s.children,e=s.fallback,h?(s=t.mode,h=t.child,y={mode:"hidden",children:y},!(s&1)&&h!==null?(h.childLanes=0,h.pendingProps=y):h=ua(y,s,0,null),e=rr(e,s,i,null),h.return=t,e.return=t,h.sibling=e,t.child=h,t.child.memoizedState=zs(i),t.memoizedState=As,e):Fs(t,y));if(d=e.memoizedState,d!==null&&(E=d.dehydrated,E!==null))return Uv(e,t,y,s,E,d,i);if(h){h=s.fallback,y=t.mode,d=e.child,E=d.sibling;var C={mode:"hidden",children:s.children};return!(y&1)&&t.child!==d?(s=t.child,s.childLanes=0,s.pendingProps=C,t.deletions=null):(s=Fn(d,C),s.subtreeFlags=d.subtreeFlags&14680064),E!==null?h=Fn(E,h):(h=rr(h,y,i,null),h.flags|=2),h.return=t,s.return=t,s.sibling=h,t.child=s,s=h,h=t.child,y=e.child.memoizedState,y=y===null?zs(i):{baseLanes:y.baseLanes|i,cachePool:null,transitions:y.transitions},h.memoizedState=y,h.childLanes=e.childLanes&~i,t.memoizedState=As,s}return h=e.child,e=h.sibling,s=Fn(h,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=i),s.return=t,s.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=s,t.memoizedState=null,s}function Fs(e,t){return t=ua({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Gi(e,t,i,s){return s!==null&&ds(s),Rr(t,e.child,null,i),e=Fs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uv(e,t,i,s,d,h,y){if(i)return t.flags&256?(t.flags&=-257,s=Ns(Error(o(422))),Gi(e,t,y,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(h=s.fallback,d=t.mode,s=ua({mode:"visible",children:s.children},d,0,null),h=rr(h,d,y,null),h.flags|=2,s.return=t,h.return=t,s.sibling=h,t.child=s,t.mode&1&&Rr(t,e.child,null,y),t.child.memoizedState=zs(y),t.memoizedState=As,h);if(!(t.mode&1))return Gi(e,t,y,null);if(d.data==="$!"){if(s=d.nextSibling&&d.nextSibling.dataset,s)var E=s.dgst;return s=E,h=Error(o(419)),s=Ns(h,s,void 0),Gi(e,t,y,s)}if(E=(y&e.childLanes)!==0,gt||E){if(s=tt,s!==null){switch(y&-y){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(s.suspendedLanes|y)?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,dn(e,d),Ut(s,e,d,-1))}return eu(),s=Ns(Error(o(421))),Gi(e,t,y,s)}return d.data==="$?"?(t.flags|=128,t.child=e.child,t=tg.bind(null,e),d._reactRetry=t,null):(e=h.treeContext,Pt=On(d.nextSibling),Et=t,Fe=!0,Ft=null,e!==null&&(Tt[Mt++]=un,Tt[Mt++]=cn,Tt[Mt++]=Kn,un=e.id,cn=e.overflow,Kn=t),t=Fs(t,s.children),t.flags|=4096,t)}function Nf(e,t,i){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),ms(e.return,t,i)}function js(e,t,i,s,d){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:d}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=s,h.tail=i,h.tailMode=d)}function Lf(e,t,i){var s=t.pendingProps,d=s.revealOrder,h=s.tail;if(pt(e,t,s.children,i),s=Ve.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nf(e,i,t);else if(e.tag===19)Nf(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(De(Ve,s),!(t.mode&1))t.memoizedState=null;else switch(d){case"forwards":for(i=t.child,d=null;i!==null;)e=i.alternate,e!==null&&Bi(e)===null&&(d=i),i=i.sibling;i=d,i===null?(d=t.child,t.child=null):(d=i.sibling,i.sibling=null),js(t,!1,d,i,h);break;case"backwards":for(i=null,d=t.child,t.child=null;d!==null;){if(e=d.alternate,e!==null&&Bi(e)===null){t.child=d;break}e=d.sibling,d.sibling=i,i=d,d=e}js(t,!0,i,null,h);break;case"together":js(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pn(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Zn|=t.lanes,!(i&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,i=Fn(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=Fn(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function Bv(e,t,i){switch(t.tag){case 3:_f(t),Or();break;case 5:Wd(t);break;case 1:vt(t.type)&&Li(t);break;case 4:ys(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,d=t.memoizedProps.value;De(ji,s._currentValue),s._currentValue=d;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(De(Ve,Ve.current&1),t.flags|=128,null):i&t.child.childLanes?Mf(e,t,i):(De(Ve,Ve.current&1),e=pn(e,t,i),e!==null?e.sibling:null);De(Ve,Ve.current&1);break;case 19:if(s=(i&t.childLanes)!==0,e.flags&128){if(s)return Lf(e,t,i);t.flags|=128}if(d=t.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),De(Ve,Ve.current),s)break;return null;case 22:case 23:return t.lanes=0,Cf(e,t,i)}return pn(e,t,i)}var If,Vs,Df,Af;If=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Vs=function(){},Df=function(e,t,i,s){var d=e.memoizedProps;if(d!==s){e=t.stateNode,Xn(Gt.current);var h=null;switch(i){case"input":d=dr(e,d),s=dr(e,s),h=[];break;case"select":d=K({},d,{value:void 0}),s=K({},s,{value:void 0}),h=[];break;case"textarea":d=yl(e,d),s=yl(e,s),h=[];break;default:typeof d.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Ti)}wl(i,s);var y;i=null;for(A in d)if(!s.hasOwnProperty(A)&&d.hasOwnProperty(A)&&d[A]!=null)if(A==="style"){var E=d[A];for(y in E)E.hasOwnProperty(y)&&(i||(i={}),i[y]="")}else A!=="dangerouslySetInnerHTML"&&A!=="children"&&A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&A!=="autoFocus"&&(a.hasOwnProperty(A)?h||(h=[]):(h=h||[]).push(A,null));for(A in s){var C=s[A];if(E=d!=null?d[A]:void 0,s.hasOwnProperty(A)&&C!==E&&(C!=null||E!=null))if(A==="style")if(E){for(y in E)!E.hasOwnProperty(y)||C&&C.hasOwnProperty(y)||(i||(i={}),i[y]="");for(y in C)C.hasOwnProperty(y)&&E[y]!==C[y]&&(i||(i={}),i[y]=C[y])}else i||(h||(h=[]),h.push(A,i)),i=C;else A==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,E=E?E.__html:void 0,C!=null&&E!==C&&(h=h||[]).push(A,C)):A==="children"?typeof C!="string"&&typeof C!="number"||(h=h||[]).push(A,""+C):A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&(a.hasOwnProperty(A)?(C!=null&&A==="onScroll"&&Ae("scroll",e),h||E===C||(h=[])):(h=h||[]).push(A,C))}i&&(h=h||[]).push("style",i);var A=h;(t.updateQueue=A)&&(t.flags|=4)}},Af=function(e,t,i,s){i!==s&&(t.flags|=4)};function Oo(e,t){if(!Fe)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function st(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,s=0;if(t)for(var d=e.child;d!==null;)i|=d.lanes|d.childLanes,s|=d.subtreeFlags&14680064,s|=d.flags&14680064,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)i|=d.lanes|d.childLanes,s|=d.subtreeFlags,s|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=s,e.childLanes=i,t}function Hv(e,t,i){var s=t.pendingProps;switch(ss(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(t),null;case 1:return vt(t.type)&&Ni(),st(t),null;case 3:return s=t.stateNode,Mr(),ze(mt),ze(at),xs(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(zi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ft!==null&&(Xs(Ft),Ft=null))),Vs(e,t),st(t),null;case 5:bs(t);var d=Xn(So.current);if(i=t.type,e!==null&&t.stateNode!=null)Df(e,t,i,s,d),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(o(166));return st(t),null}if(e=Xn(Gt.current),zi(t)){s=t.stateNode,i=t.type;var h=t.memoizedProps;switch(s[Yt]=t,s[go]=h,e=(t.mode&1)!==0,i){case"dialog":Ae("cancel",s),Ae("close",s);break;case"iframe":case"object":case"embed":Ae("load",s);break;case"video":case"audio":for(d=0;d<ho.length;d++)Ae(ho[d],s);break;case"source":Ae("error",s);break;case"img":case"image":case"link":Ae("error",s),Ae("load",s);break;case"details":Ae("toggle",s);break;case"input":li(s,h),Ae("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!h.multiple},Ae("invalid",s);break;case"textarea":yc(s,h),Ae("invalid",s)}wl(i,h),d=null;for(var y in h)if(h.hasOwnProperty(y)){var E=h[y];y==="children"?typeof E=="string"?s.textContent!==E&&(h.suppressHydrationWarning!==!0&&_i(s.textContent,E,e),d=["children",E]):typeof E=="number"&&s.textContent!==""+E&&(h.suppressHydrationWarning!==!0&&_i(s.textContent,E,e),d=["children",""+E]):a.hasOwnProperty(y)&&E!=null&&y==="onScroll"&&Ae("scroll",s)}switch(i){case"input":Hn(s),gc(s,h,!0);break;case"textarea":Hn(s),wc(s);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(s.onclick=Ti)}s=d,t.updateQueue=s,s!==null&&(t.flags|=4)}else{y=d.nodeType===9?d:d.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xc(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=y.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=y.createElement(i,{is:s.is}):(e=y.createElement(i),i==="select"&&(y=e,s.multiple?y.multiple=!0:s.size&&(y.size=s.size))):e=y.createElementNS(e,i),e[Yt]=t,e[go]=s,If(e,t,!1,!1),t.stateNode=e;e:{switch(y=xl(i,s),i){case"dialog":Ae("cancel",e),Ae("close",e),d=s;break;case"iframe":case"object":case"embed":Ae("load",e),d=s;break;case"video":case"audio":for(d=0;d<ho.length;d++)Ae(ho[d],e);d=s;break;case"source":Ae("error",e),d=s;break;case"img":case"image":case"link":Ae("error",e),Ae("load",e),d=s;break;case"details":Ae("toggle",e),d=s;break;case"input":li(e,s),d=dr(e,s),Ae("invalid",e);break;case"option":d=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},d=K({},s,{value:void 0}),Ae("invalid",e);break;case"textarea":yc(e,s),d=yl(e,s),Ae("invalid",e);break;default:d=s}wl(i,d),E=d;for(h in E)if(E.hasOwnProperty(h)){var C=E[h];h==="style"?Ec(e,C):h==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Sc(e,C)):h==="children"?typeof C=="string"?(i!=="textarea"||C!=="")&&Kr(e,C):typeof C=="number"&&Kr(e,""+C):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?C!=null&&h==="onScroll"&&Ae("scroll",e):C!=null&&T(e,h,C,y))}switch(i){case"input":Hn(e),gc(e,s,!1);break;case"textarea":Hn(e),wc(e);break;case"option":s.value!=null&&e.setAttribute("value",""+ye(s.value));break;case"select":e.multiple=!!s.multiple,h=s.value,h!=null?fr(e,!!s.multiple,h,!1):s.defaultValue!=null&&fr(e,!!s.multiple,s.defaultValue,!0);break;default:typeof d.onClick=="function"&&(e.onclick=Ti)}switch(i){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return st(t),null;case 6:if(e&&t.stateNode!=null)Af(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(o(166));if(i=Xn(So.current),Xn(Gt.current),zi(t)){if(s=t.stateNode,i=t.memoizedProps,s[Yt]=t,(h=s.nodeValue!==i)&&(e=Et,e!==null))switch(e.tag){case 3:_i(s.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_i(s.nodeValue,i,(e.mode&1)!==0)}h&&(t.flags|=4)}else s=(i.nodeType===9?i:i.ownerDocument).createTextNode(s),s[Yt]=t,t.stateNode=s}return st(t),null;case 13:if(ze(Ve),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Fe&&Pt!==null&&t.mode&1&&!(t.flags&128))Fd(),Or(),t.flags|=98560,h=!1;else if(h=zi(t),s!==null&&s.dehydrated!==null){if(e===null){if(!h)throw Error(o(318));if(h=t.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(o(317));h[Yt]=t}else Or(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;st(t),h=!1}else Ft!==null&&(Xs(Ft),Ft=null),h=!0;if(!h)return t.flags&65536?t:null}return t.flags&128?(t.lanes=i,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||Ve.current&1?Je===0&&(Je=3):eu())),t.updateQueue!==null&&(t.flags|=4),st(t),null);case 4:return Mr(),Vs(e,t),e===null&&mo(t.stateNode.containerInfo),st(t),null;case 10:return hs(t.type._context),st(t),null;case 17:return vt(t.type)&&Ni(),st(t),null;case 19:if(ze(Ve),h=t.memoizedState,h===null)return st(t),null;if(s=(t.flags&128)!==0,y=h.rendering,y===null)if(s)Oo(h,!1);else{if(Je!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(y=Bi(e),y!==null){for(t.flags|=128,Oo(h,!1),s=y.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=i,i=t.child;i!==null;)h=i,e=s,h.flags&=14680066,y=h.alternate,y===null?(h.childLanes=0,h.lanes=e,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=y.childLanes,h.lanes=y.lanes,h.child=y.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=y.memoizedProps,h.memoizedState=y.memoizedState,h.updateQueue=y.updateQueue,h.type=y.type,e=y.dependencies,h.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return De(Ve,Ve.current&1|2),t.child}e=e.sibling}h.tail!==null&&We()>Dr&&(t.flags|=128,s=!0,Oo(h,!1),t.lanes=4194304)}else{if(!s)if(e=Bi(y),e!==null){if(t.flags|=128,s=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),Oo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!y.alternate&&!Fe)return st(t),null}else 2*We()-h.renderingStartTime>Dr&&i!==1073741824&&(t.flags|=128,s=!0,Oo(h,!1),t.lanes=4194304);h.isBackwards?(y.sibling=t.child,t.child=y):(i=h.last,i!==null?i.sibling=y:t.child=y,h.last=y)}return h.tail!==null?(t=h.tail,h.rendering=t,h.tail=t.sibling,h.renderingStartTime=We(),t.sibling=null,i=Ve.current,De(Ve,s?i&1|2:i&1),t):(st(t),null);case 22:case 23:return Zs(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Ct&1073741824&&(st(t),t.subtreeFlags&6&&(t.flags|=8192)):st(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function qv(e,t){switch(ss(t),t.tag){case 1:return vt(t.type)&&Ni(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mr(),ze(mt),ze(at),xs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return bs(t),null;case 13:if(ze(Ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ze(Ve),null;case 4:return Mr(),null;case 10:return hs(t.type._context),null;case 22:case 23:return Zs(),null;case 24:return null;default:return null}}var Ji=!1,ut=!1,Wv=typeof WeakSet=="function"?WeakSet:Set,G=null;function Lr(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(s){Be(e,t,s)}else i.current=null}function $s(e,t,i){try{i()}catch(s){Be(e,t,s)}}var zf=!1;function Qv(e,t){if(Zl=yi,e=hd(),ql(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var d=s.anchorOffset,h=s.focusNode;s=s.focusOffset;try{i.nodeType,h.nodeType}catch{i=null;break e}var y=0,E=-1,C=-1,A=0,B=0,H=e,V=null;t:for(;;){for(var Y;H!==i||d!==0&&H.nodeType!==3||(E=y+d),H!==h||s!==0&&H.nodeType!==3||(C=y+s),H.nodeType===3&&(y+=H.nodeValue.length),(Y=H.firstChild)!==null;)V=H,H=Y;for(;;){if(H===e)break t;if(V===i&&++A===d&&(E=y),V===h&&++B===s&&(C=y),(Y=H.nextSibling)!==null)break;H=V,V=H.parentNode}H=Y}i=E===-1||C===-1?null:{start:E,end:C}}else i=null}i=i||{start:0,end:0}}else i=null;for(es={focusedElem:e,selectionRange:i},yi=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var J=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(J!==null){var Z=J.memoizedProps,Qe=J.memoizedState,I=t.stateNode,_=I.getSnapshotBeforeUpdate(t.elementType===t.type?Z:jt(t.type,Z),Qe);I.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var D=t.stateNode.containerInfo;D.nodeType===1?D.textContent="":D.nodeType===9&&D.documentElement&&D.removeChild(D.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(q){Be(t,t.return,q)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return J=zf,zf=!1,J}function Ro(e,t,i){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var d=s=s.next;do{if((d.tag&e)===e){var h=d.destroy;d.destroy=void 0,h!==void 0&&$s(t,i,h)}d=d.next}while(d!==s)}}function Zi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var s=i.create;i.destroy=s()}i=i.next}while(i!==t)}}function Us(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function Ff(e){var t=e.alternate;t!==null&&(e.alternate=null,Ff(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Yt],delete t[go],delete t[os],delete t[_v],delete t[Tv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jf(e){return e.tag===5||e.tag===3||e.tag===4}function Vf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bs(e,t,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Ti));else if(s!==4&&(e=e.child,e!==null))for(Bs(e,t,i),e=e.sibling;e!==null;)Bs(e,t,i),e=e.sibling}function Hs(e,t,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Hs(e,t,i),e=e.sibling;e!==null;)Hs(e,t,i),e=e.sibling}var rt=null,Vt=!1;function Ln(e,t,i){for(i=i.child;i!==null;)$f(e,t,i),i=i.sibling}function $f(e,t,i){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(fi,i)}catch{}switch(i.tag){case 5:ut||Lr(i,t);case 6:var s=rt,d=Vt;rt=null,Ln(e,t,i),rt=s,Vt=d,rt!==null&&(Vt?(e=rt,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):rt.removeChild(i.stateNode));break;case 18:rt!==null&&(Vt?(e=rt,i=i.stateNode,e.nodeType===8?rs(e.parentNode,i):e.nodeType===1&&rs(e,i),io(e)):rs(rt,i.stateNode));break;case 4:s=rt,d=Vt,rt=i.stateNode.containerInfo,Vt=!0,Ln(e,t,i),rt=s,Vt=d;break;case 0:case 11:case 14:case 15:if(!ut&&(s=i.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){d=s=s.next;do{var h=d,y=h.destroy;h=h.tag,y!==void 0&&(h&2||h&4)&&$s(i,t,y),d=d.next}while(d!==s)}Ln(e,t,i);break;case 1:if(!ut&&(Lr(i,t),s=i.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=i.memoizedProps,s.state=i.memoizedState,s.componentWillUnmount()}catch(E){Be(i,t,E)}Ln(e,t,i);break;case 21:Ln(e,t,i);break;case 22:i.mode&1?(ut=(s=ut)||i.memoizedState!==null,Ln(e,t,i),ut=s):Ln(e,t,i);break;default:Ln(e,t,i)}}function Uf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Wv),t.forEach(function(s){var d=ng.bind(null,e,s);i.has(s)||(i.add(s),s.then(d,d))})}}function $t(e,t){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var d=i[s];try{var h=e,y=t,E=y;e:for(;E!==null;){switch(E.tag){case 5:rt=E.stateNode,Vt=!1;break e;case 3:rt=E.stateNode.containerInfo,Vt=!0;break e;case 4:rt=E.stateNode.containerInfo,Vt=!0;break e}E=E.return}if(rt===null)throw Error(o(160));$f(h,y,d),rt=null,Vt=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(A){Be(d,t,A)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bf(t,e),t=t.sibling}function Bf(e,t){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($t(t,e),Jt(e),s&4){try{Ro(3,e,e.return),Zi(3,e)}catch(Z){Be(e,e.return,Z)}try{Ro(5,e,e.return)}catch(Z){Be(e,e.return,Z)}}break;case 1:$t(t,e),Jt(e),s&512&&i!==null&&Lr(i,i.return);break;case 5:if($t(t,e),Jt(e),s&512&&i!==null&&Lr(i,i.return),e.flags&32){var d=e.stateNode;try{Kr(d,"")}catch(Z){Be(e,e.return,Z)}}if(s&4&&(d=e.stateNode,d!=null)){var h=e.memoizedProps,y=i!==null?i.memoizedProps:h,E=e.type,C=e.updateQueue;if(e.updateQueue=null,C!==null)try{E==="input"&&h.type==="radio"&&h.name!=null&&vc(d,h),xl(E,y);var A=xl(E,h);for(y=0;y<C.length;y+=2){var B=C[y],H=C[y+1];B==="style"?Ec(d,H):B==="dangerouslySetInnerHTML"?Sc(d,H):B==="children"?Kr(d,H):T(d,B,H,A)}switch(E){case"input":vl(d,h);break;case"textarea":bc(d,h);break;case"select":var V=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var Y=h.value;Y!=null?fr(d,!!h.multiple,Y,!1):V!==!!h.multiple&&(h.defaultValue!=null?fr(d,!!h.multiple,h.defaultValue,!0):fr(d,!!h.multiple,h.multiple?[]:"",!1))}d[go]=h}catch(Z){Be(e,e.return,Z)}}break;case 6:if($t(t,e),Jt(e),s&4){if(e.stateNode===null)throw Error(o(162));d=e.stateNode,h=e.memoizedProps;try{d.nodeValue=h}catch(Z){Be(e,e.return,Z)}}break;case 3:if($t(t,e),Jt(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{io(t.containerInfo)}catch(Z){Be(e,e.return,Z)}break;case 4:$t(t,e),Jt(e);break;case 13:$t(t,e),Jt(e),d=e.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(Qs=We())),s&4&&Uf(e);break;case 22:if(B=i!==null&&i.memoizedState!==null,e.mode&1?(ut=(A=ut)||B,$t(t,e),ut=A):$t(t,e),Jt(e),s&8192){if(A=e.memoizedState!==null,(e.stateNode.isHidden=A)&&!B&&e.mode&1)for(G=e,B=e.child;B!==null;){for(H=G=B;G!==null;){switch(V=G,Y=V.child,V.tag){case 0:case 11:case 14:case 15:Ro(4,V,V.return);break;case 1:Lr(V,V.return);var J=V.stateNode;if(typeof J.componentWillUnmount=="function"){s=V,i=V.return;try{t=s,J.props=t.memoizedProps,J.state=t.memoizedState,J.componentWillUnmount()}catch(Z){Be(s,i,Z)}}break;case 5:Lr(V,V.return);break;case 22:if(V.memoizedState!==null){Wf(H);continue}}Y!==null?(Y.return=V,G=Y):Wf(H)}B=B.sibling}e:for(B=null,H=e;;){if(H.tag===5){if(B===null){B=H;try{d=H.stateNode,A?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(E=H.stateNode,C=H.memoizedProps.style,y=C!=null&&C.hasOwnProperty("display")?C.display:null,E.style.display=kc("display",y))}catch(Z){Be(e,e.return,Z)}}}else if(H.tag===6){if(B===null)try{H.stateNode.nodeValue=A?"":H.memoizedProps}catch(Z){Be(e,e.return,Z)}}else if((H.tag!==22&&H.tag!==23||H.memoizedState===null||H===e)&&H.child!==null){H.child.return=H,H=H.child;continue}if(H===e)break e;for(;H.sibling===null;){if(H.return===null||H.return===e)break e;B===H&&(B=null),H=H.return}B===H&&(B=null),H.sibling.return=H.return,H=H.sibling}}break;case 19:$t(t,e),Jt(e),s&4&&Uf(e);break;case 21:break;default:$t(t,e),Jt(e)}}function Jt(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(jf(i)){var s=i;break e}i=i.return}throw Error(o(160))}switch(s.tag){case 5:var d=s.stateNode;s.flags&32&&(Kr(d,""),s.flags&=-33);var h=Vf(e);Hs(e,h,d);break;case 3:case 4:var y=s.stateNode.containerInfo,E=Vf(e);Bs(e,E,y);break;default:throw Error(o(161))}}catch(C){Be(e,e.return,C)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kv(e,t,i){G=e,Hf(e)}function Hf(e,t,i){for(var s=(e.mode&1)!==0;G!==null;){var d=G,h=d.child;if(d.tag===22&&s){var y=d.memoizedState!==null||Ji;if(!y){var E=d.alternate,C=E!==null&&E.memoizedState!==null||ut;E=Ji;var A=ut;if(Ji=y,(ut=C)&&!A)for(G=d;G!==null;)y=G,C=y.child,y.tag===22&&y.memoizedState!==null?Qf(d):C!==null?(C.return=y,G=C):Qf(d);for(;h!==null;)G=h,Hf(h),h=h.sibling;G=d,Ji=E,ut=A}qf(e)}else d.subtreeFlags&8772&&h!==null?(h.return=d,G=h):qf(e)}}function qf(e){for(;G!==null;){var t=G;if(t.flags&8772){var i=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ut||Zi(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!ut)if(i===null)s.componentDidMount();else{var d=t.elementType===t.type?i.memoizedProps:jt(t.type,i.memoizedProps);s.componentDidUpdate(d,i.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var h=t.updateQueue;h!==null&&qd(t,h,s);break;case 3:var y=t.updateQueue;if(y!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}qd(t,y,i)}break;case 5:var E=t.stateNode;if(i===null&&t.flags&4){i=E;var C=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&i.focus();break;case"img":C.src&&(i.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var A=t.alternate;if(A!==null){var B=A.memoizedState;if(B!==null){var H=B.dehydrated;H!==null&&io(H)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}ut||t.flags&512&&Us(t)}catch(V){Be(t,t.return,V)}}if(t===e){G=null;break}if(i=t.sibling,i!==null){i.return=t.return,G=i;break}G=t.return}}function Wf(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var i=t.sibling;if(i!==null){i.return=t.return,G=i;break}G=t.return}}function Qf(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{Zi(4,t)}catch(C){Be(t,i,C)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var d=t.return;try{s.componentDidMount()}catch(C){Be(t,d,C)}}var h=t.return;try{Us(t)}catch(C){Be(t,h,C)}break;case 5:var y=t.return;try{Us(t)}catch(C){Be(t,y,C)}}}catch(C){Be(t,t.return,C)}if(t===e){G=null;break}var E=t.sibling;if(E!==null){E.return=t.return,G=E;break}G=t.return}}var Yv=Math.ceil,ea=F.ReactCurrentDispatcher,qs=F.ReactCurrentOwner,It=F.ReactCurrentBatchConfig,Pe=0,tt=null,Ke=null,ot=0,Ct=0,Ir=Rn(0),Je=0,_o=null,Zn=0,ta=0,Ws=0,To=null,yt=null,Qs=0,Dr=1/0,hn=null,na=!1,Ks=null,In=null,ra=!1,Dn=null,oa=0,Mo=0,Ys=null,ia=-1,aa=0;function ht(){return Pe&6?We():ia!==-1?ia:ia=We()}function An(e){return e.mode&1?Pe&2&&ot!==0?ot&-ot:Nv.transition!==null?(aa===0&&(aa=jc()),aa):(e=Le,e!==0||(e=window.event,e=e===void 0?16:Kc(e.type)),e):1}function Ut(e,t,i,s){if(50<Mo)throw Mo=0,Ys=null,Error(o(185));eo(e,i,s),(!(Pe&2)||e!==tt)&&(e===tt&&(!(Pe&2)&&(ta|=i),Je===4&&zn(e,ot)),bt(e,s),i===1&&Pe===0&&!(t.mode&1)&&(Dr=We()+500,Ii&&Tn()))}function bt(e,t){var i=e.callbackNode;N0(e,t);var s=mi(e,e===tt?ot:0);if(s===0)i!==null&&Ac(i),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(i!=null&&Ac(i),t===1)e.tag===0?Mv(Yf.bind(null,e)):Ld(Yf.bind(null,e)),Ov(function(){!(Pe&6)&&Tn()}),i=null;else{switch(Vc(s)){case 1:i=Rl;break;case 4:i=zc;break;case 16:i=di;break;case 536870912:i=Fc;break;default:i=di}i=rp(i,Kf.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function Kf(e,t){if(ia=-1,aa=0,Pe&6)throw Error(o(327));var i=e.callbackNode;if(Ar()&&e.callbackNode!==i)return null;var s=mi(e,e===tt?ot:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=la(e,s);else{t=s;var d=Pe;Pe|=2;var h=Xf();(tt!==e||ot!==t)&&(hn=null,Dr=We()+500,tr(e,t));do try{Jv();break}catch(E){Gf(e,E)}while(!0);ps(),ea.current=h,Pe=d,Ke!==null?t=0:(tt=null,ot=0,t=Je)}if(t!==0){if(t===2&&(d=_l(e),d!==0&&(s=d,t=Gs(e,d))),t===1)throw i=_o,tr(e,0),zn(e,s),bt(e,We()),i;if(t===6)zn(e,s);else{if(d=e.current.alternate,!(s&30)&&!Gv(d)&&(t=la(e,s),t===2&&(h=_l(e),h!==0&&(s=h,t=Gs(e,h))),t===1))throw i=_o,tr(e,0),zn(e,s),bt(e,We()),i;switch(e.finishedWork=d,e.finishedLanes=s,t){case 0:case 1:throw Error(o(345));case 2:nr(e,yt,hn);break;case 3:if(zn(e,s),(s&130023424)===s&&(t=Qs+500-We(),10<t)){if(mi(e,0)!==0)break;if(d=e.suspendedLanes,(d&s)!==s){ht(),e.pingedLanes|=e.suspendedLanes&d;break}e.timeoutHandle=ns(nr.bind(null,e,yt,hn),t);break}nr(e,yt,hn);break;case 4:if(zn(e,s),(s&4194240)===s)break;for(t=e.eventTimes,d=-1;0<s;){var y=31-At(s);h=1<<y,y=t[y],y>d&&(d=y),s&=~h}if(s=d,s=We()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Yv(s/1960))-s,10<s){e.timeoutHandle=ns(nr.bind(null,e,yt,hn),s);break}nr(e,yt,hn);break;case 5:nr(e,yt,hn);break;default:throw Error(o(329))}}}return bt(e,We()),e.callbackNode===i?Kf.bind(null,e):null}function Gs(e,t){var i=To;return e.current.memoizedState.isDehydrated&&(tr(e,t).flags|=256),e=la(e,t),e!==2&&(t=yt,yt=i,t!==null&&Xs(t)),e}function Xs(e){yt===null?yt=e:yt.push.apply(yt,e)}function Gv(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var s=0;s<i.length;s++){var d=i[s],h=d.getSnapshot;d=d.value;try{if(!zt(h(),d))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zn(e,t){for(t&=~Ws,t&=~ta,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-At(t),s=1<<i;e[i]=-1,t&=~s}}function Yf(e){if(Pe&6)throw Error(o(327));Ar();var t=mi(e,0);if(!(t&1))return bt(e,We()),null;var i=la(e,t);if(e.tag!==0&&i===2){var s=_l(e);s!==0&&(t=s,i=Gs(e,s))}if(i===1)throw i=_o,tr(e,0),zn(e,t),bt(e,We()),i;if(i===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nr(e,yt,hn),bt(e,We()),null}function Js(e,t){var i=Pe;Pe|=1;try{return e(t)}finally{Pe=i,Pe===0&&(Dr=We()+500,Ii&&Tn())}}function er(e){Dn!==null&&Dn.tag===0&&!(Pe&6)&&Ar();var t=Pe;Pe|=1;var i=It.transition,s=Le;try{if(It.transition=null,Le=1,e)return e()}finally{Le=s,It.transition=i,Pe=t,!(Pe&6)&&Tn()}}function Zs(){Ct=Ir.current,ze(Ir)}function tr(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Cv(i)),Ke!==null)for(i=Ke.return;i!==null;){var s=i;switch(ss(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Ni();break;case 3:Mr(),ze(mt),ze(at),xs();break;case 5:bs(s);break;case 4:Mr();break;case 13:ze(Ve);break;case 19:ze(Ve);break;case 10:hs(s.type._context);break;case 22:case 23:Zs()}i=i.return}if(tt=e,Ke=e=Fn(e.current,null),ot=Ct=t,Je=0,_o=null,Ws=ta=Zn=0,yt=To=null,Gn!==null){for(t=0;t<Gn.length;t++)if(i=Gn[t],s=i.interleaved,s!==null){i.interleaved=null;var d=s.next,h=i.pending;if(h!==null){var y=h.next;h.next=d,s.next=y}i.pending=s}Gn=null}return e}function Gf(e,t){do{var i=Ke;try{if(ps(),Hi.current=Ki,qi){for(var s=$e.memoizedState;s!==null;){var d=s.queue;d!==null&&(d.pending=null),s=s.next}qi=!1}if(Jn=0,et=Xe=$e=null,ko=!1,Eo=0,qs.current=null,i===null||i.return===null){Je=1,_o=t,Ke=null;break}e:{var h=e,y=i.return,E=i,C=t;if(t=ot,E.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var A=C,B=E,H=B.tag;if(!(B.mode&1)&&(H===0||H===11||H===15)){var V=B.alternate;V?(B.updateQueue=V.updateQueue,B.memoizedState=V.memoizedState,B.lanes=V.lanes):(B.updateQueue=null,B.memoizedState=null)}var Y=xf(y);if(Y!==null){Y.flags&=-257,Sf(Y,y,E,h,t),Y.mode&1&&wf(h,A,t),t=Y,C=A;var J=t.updateQueue;if(J===null){var Z=new Set;Z.add(C),t.updateQueue=Z}else J.add(C);break e}else{if(!(t&1)){wf(h,A,t),eu();break e}C=Error(o(426))}}else if(Fe&&E.mode&1){var Qe=xf(y);if(Qe!==null){!(Qe.flags&65536)&&(Qe.flags|=256),Sf(Qe,y,E,h,t),ds(Nr(C,E));break e}}h=C=Nr(C,E),Je!==4&&(Je=2),To===null?To=[h]:To.push(h),h=y;do{switch(h.tag){case 3:h.flags|=65536,t&=-t,h.lanes|=t;var I=yf(h,C,t);Hd(h,I);break e;case 1:E=C;var _=h.type,D=h.stateNode;if(!(h.flags&128)&&(typeof _.getDerivedStateFromError=="function"||D!==null&&typeof D.componentDidCatch=="function"&&(In===null||!In.has(D)))){h.flags|=65536,t&=-t,h.lanes|=t;var q=bf(h,E,t);Hd(h,q);break e}}h=h.return}while(h!==null)}Zf(i)}catch(ne){t=ne,Ke===i&&i!==null&&(Ke=i=i.return);continue}break}while(!0)}function Xf(){var e=ea.current;return ea.current=Ki,e===null?Ki:e}function eu(){(Je===0||Je===3||Je===2)&&(Je=4),tt===null||!(Zn&268435455)&&!(ta&268435455)||zn(tt,ot)}function la(e,t){var i=Pe;Pe|=2;var s=Xf();(tt!==e||ot!==t)&&(hn=null,tr(e,t));do try{Xv();break}catch(d){Gf(e,d)}while(!0);if(ps(),Pe=i,ea.current=s,Ke!==null)throw Error(o(261));return tt=null,ot=0,Je}function Xv(){for(;Ke!==null;)Jf(Ke)}function Jv(){for(;Ke!==null&&!k0();)Jf(Ke)}function Jf(e){var t=np(e.alternate,e,Ct);e.memoizedProps=e.pendingProps,t===null?Zf(e):Ke=t,qs.current=null}function Zf(e){var t=e;do{var i=t.alternate;if(e=t.return,t.flags&32768){if(i=qv(i,t),i!==null){i.flags&=32767,Ke=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Je=6,Ke=null;return}}else if(i=Hv(i,t,Ct),i!==null){Ke=i;return}if(t=t.sibling,t!==null){Ke=t;return}Ke=t=e}while(t!==null);Je===0&&(Je=5)}function nr(e,t,i){var s=Le,d=It.transition;try{It.transition=null,Le=1,Zv(e,t,i,s)}finally{It.transition=d,Le=s}return null}function Zv(e,t,i,s){do Ar();while(Dn!==null);if(Pe&6)throw Error(o(327));i=e.finishedWork;var d=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var h=i.lanes|i.childLanes;if(L0(e,h),e===tt&&(Ke=tt=null,ot=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||ra||(ra=!0,rp(di,function(){return Ar(),null})),h=(i.flags&15990)!==0,i.subtreeFlags&15990||h){h=It.transition,It.transition=null;var y=Le;Le=1;var E=Pe;Pe|=4,qs.current=null,Qv(e,i),Bf(i,e),bv(es),yi=!!Zl,es=Zl=null,e.current=i,Kv(i),E0(),Pe=E,Le=y,It.transition=h}else e.current=i;if(ra&&(ra=!1,Dn=e,oa=d),h=e.pendingLanes,h===0&&(In=null),O0(i.stateNode),bt(e,We()),t!==null)for(s=e.onRecoverableError,i=0;i<t.length;i++)d=t[i],s(d.value,{componentStack:d.stack,digest:d.digest});if(na)throw na=!1,e=Ks,Ks=null,e;return oa&1&&e.tag!==0&&Ar(),h=e.pendingLanes,h&1?e===Ys?Mo++:(Mo=0,Ys=e):Mo=0,Tn(),null}function Ar(){if(Dn!==null){var e=Vc(oa),t=It.transition,i=Le;try{if(It.transition=null,Le=16>e?16:e,Dn===null)var s=!1;else{if(e=Dn,Dn=null,oa=0,Pe&6)throw Error(o(331));var d=Pe;for(Pe|=4,G=e.current;G!==null;){var h=G,y=h.child;if(G.flags&16){var E=h.deletions;if(E!==null){for(var C=0;C<E.length;C++){var A=E[C];for(G=A;G!==null;){var B=G;switch(B.tag){case 0:case 11:case 15:Ro(8,B,h)}var H=B.child;if(H!==null)H.return=B,G=H;else for(;G!==null;){B=G;var V=B.sibling,Y=B.return;if(Ff(B),B===A){G=null;break}if(V!==null){V.return=Y,G=V;break}G=Y}}}var J=h.alternate;if(J!==null){var Z=J.child;if(Z!==null){J.child=null;do{var Qe=Z.sibling;Z.sibling=null,Z=Qe}while(Z!==null)}}G=h}}if(h.subtreeFlags&2064&&y!==null)y.return=h,G=y;else e:for(;G!==null;){if(h=G,h.flags&2048)switch(h.tag){case 0:case 11:case 15:Ro(9,h,h.return)}var I=h.sibling;if(I!==null){I.return=h.return,G=I;break e}G=h.return}}var _=e.current;for(G=_;G!==null;){y=G;var D=y.child;if(y.subtreeFlags&2064&&D!==null)D.return=y,G=D;else e:for(y=_;G!==null;){if(E=G,E.flags&2048)try{switch(E.tag){case 0:case 11:case 15:Zi(9,E)}}catch(ne){Be(E,E.return,ne)}if(E===y){G=null;break e}var q=E.sibling;if(q!==null){q.return=E.return,G=q;break e}G=E.return}}if(Pe=d,Tn(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(fi,e)}catch{}s=!0}return s}finally{Le=i,It.transition=t}}return!1}function ep(e,t,i){t=Nr(i,t),t=yf(e,t,1),e=Nn(e,t,1),t=ht(),e!==null&&(eo(e,1,t),bt(e,t))}function Be(e,t,i){if(e.tag===3)ep(e,e,i);else for(;t!==null;){if(t.tag===3){ep(t,e,i);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(In===null||!In.has(s))){e=Nr(i,e),e=bf(t,e,1),t=Nn(t,e,1),e=ht(),t!==null&&(eo(t,1,e),bt(t,e));break}}t=t.return}}function eg(e,t,i){var s=e.pingCache;s!==null&&s.delete(t),t=ht(),e.pingedLanes|=e.suspendedLanes&i,tt===e&&(ot&i)===i&&(Je===4||Je===3&&(ot&130023424)===ot&&500>We()-Qs?tr(e,0):Ws|=i),bt(e,t)}function tp(e,t){t===0&&(e.mode&1?(t=hi,hi<<=1,!(hi&130023424)&&(hi=4194304)):t=1);var i=ht();e=dn(e,t),e!==null&&(eo(e,t,i),bt(e,i))}function tg(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),tp(e,i)}function ng(e,t){var i=0;switch(e.tag){case 13:var s=e.stateNode,d=e.memoizedState;d!==null&&(i=d.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(o(314))}s!==null&&s.delete(t),tp(e,i)}var np;np=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||mt.current)gt=!0;else{if(!(e.lanes&i)&&!(t.flags&128))return gt=!1,Bv(e,t,i);gt=!!(e.flags&131072)}else gt=!1,Fe&&t.flags&1048576&&Id(t,Ai,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Xi(e,t),e=t.pendingProps;var d=Er(t,at.current);Tr(t,i),d=Es(null,t,s,e,d,i);var h=Ps();return t.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,vt(s)?(h=!0,Li(t)):h=!1,t.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,gs(t),d.updater=Yi,t.stateNode=d,d._reactInternals=t,Ms(t,s,e,i),t=Ds(null,t,s,!0,h,i)):(t.tag=0,Fe&&h&&ls(t),pt(null,t,d,i),t=t.child),t;case 16:s=t.elementType;e:{switch(Xi(e,t),e=t.pendingProps,d=s._init,s=d(s._payload),t.type=s,d=t.tag=og(s),e=jt(s,e),d){case 0:t=Is(null,t,s,e,i);break e;case 1:t=Rf(null,t,s,e,i);break e;case 11:t=kf(null,t,s,e,i);break e;case 14:t=Ef(null,t,s,jt(s.type,e),i);break e}throw Error(o(306,s,""))}return t;case 0:return s=t.type,d=t.pendingProps,d=t.elementType===s?d:jt(s,d),Is(e,t,s,d,i);case 1:return s=t.type,d=t.pendingProps,d=t.elementType===s?d:jt(s,d),Rf(e,t,s,d,i);case 3:e:{if(_f(t),e===null)throw Error(o(387));s=t.pendingProps,h=t.memoizedState,d=h.element,Bd(e,t),Ui(t,s,null,i);var y=t.memoizedState;if(s=y.element,h.isDehydrated)if(h={element:s,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},t.updateQueue.baseState=h,t.memoizedState=h,t.flags&256){d=Nr(Error(o(423)),t),t=Tf(e,t,s,i,d);break e}else if(s!==d){d=Nr(Error(o(424)),t),t=Tf(e,t,s,i,d);break e}else for(Pt=On(t.stateNode.containerInfo.firstChild),Et=t,Fe=!0,Ft=null,i=$d(t,null,s,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Or(),s===d){t=pn(e,t,i);break e}pt(e,t,s,i)}t=t.child}return t;case 5:return Wd(t),e===null&&cs(t),s=t.type,d=t.pendingProps,h=e!==null?e.memoizedProps:null,y=d.children,ts(s,d)?y=null:h!==null&&ts(s,h)&&(t.flags|=32),Of(e,t),pt(e,t,y,i),t.child;case 6:return e===null&&cs(t),null;case 13:return Mf(e,t,i);case 4:return ys(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Rr(t,null,s,i):pt(e,t,s,i),t.child;case 11:return s=t.type,d=t.pendingProps,d=t.elementType===s?d:jt(s,d),kf(e,t,s,d,i);case 7:return pt(e,t,t.pendingProps,i),t.child;case 8:return pt(e,t,t.pendingProps.children,i),t.child;case 12:return pt(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(s=t.type._context,d=t.pendingProps,h=t.memoizedProps,y=d.value,De(ji,s._currentValue),s._currentValue=y,h!==null)if(zt(h.value,y)){if(h.children===d.children&&!mt.current){t=pn(e,t,i);break e}}else for(h=t.child,h!==null&&(h.return=t);h!==null;){var E=h.dependencies;if(E!==null){y=h.child;for(var C=E.firstContext;C!==null;){if(C.context===s){if(h.tag===1){C=fn(-1,i&-i),C.tag=2;var A=h.updateQueue;if(A!==null){A=A.shared;var B=A.pending;B===null?C.next=C:(C.next=B.next,B.next=C),A.pending=C}}h.lanes|=i,C=h.alternate,C!==null&&(C.lanes|=i),ms(h.return,i,t),E.lanes|=i;break}C=C.next}}else if(h.tag===10)y=h.type===t.type?null:h.child;else if(h.tag===18){if(y=h.return,y===null)throw Error(o(341));y.lanes|=i,E=y.alternate,E!==null&&(E.lanes|=i),ms(y,i,t),y=h.sibling}else y=h.child;if(y!==null)y.return=h;else for(y=h;y!==null;){if(y===t){y=null;break}if(h=y.sibling,h!==null){h.return=y.return,y=h;break}y=y.return}h=y}pt(e,t,d.children,i),t=t.child}return t;case 9:return d=t.type,s=t.pendingProps.children,Tr(t,i),d=Nt(d),s=s(d),t.flags|=1,pt(e,t,s,i),t.child;case 14:return s=t.type,d=jt(s,t.pendingProps),d=jt(s.type,d),Ef(e,t,s,d,i);case 15:return Pf(e,t,t.type,t.pendingProps,i);case 17:return s=t.type,d=t.pendingProps,d=t.elementType===s?d:jt(s,d),Xi(e,t),t.tag=1,vt(s)?(e=!0,Li(t)):e=!1,Tr(t,i),vf(t,s,d),Ms(t,s,d,i),Ds(null,t,s,!0,e,i);case 19:return Lf(e,t,i);case 22:return Cf(e,t,i)}throw Error(o(156,t.tag))};function rp(e,t){return Dc(e,t)}function rg(e,t,i,s){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,i,s){return new rg(e,t,i,s)}function tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function og(e){if(typeof e=="function")return tu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Te)return 11;if(e===ve)return 14}return 2}function Fn(e,t){var i=e.alternate;return i===null?(i=Dt(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function sa(e,t,i,s,d,h){var y=2;if(s=e,typeof e=="function")tu(e)&&(y=1);else if(typeof e=="string")y=5;else e:switch(e){case U:return rr(i.children,d,h,t);case Q:y=8,d|=8;break;case X:return e=Dt(12,i,t,d|2),e.elementType=X,e.lanes=h,e;case Ie:return e=Dt(13,i,t,d),e.elementType=Ie,e.lanes=h,e;case Me:return e=Dt(19,i,t,d),e.elementType=Me,e.lanes=h,e;case ge:return ua(i,d,h,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case me:y=10;break e;case we:y=9;break e;case Te:y=11;break e;case ve:y=14;break e;case xe:y=16,s=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=Dt(y,i,t,d),t.elementType=e,t.type=s,t.lanes=h,t}function rr(e,t,i,s){return e=Dt(7,e,s,t),e.lanes=i,e}function ua(e,t,i,s){return e=Dt(22,e,s,t),e.elementType=ge,e.lanes=i,e.stateNode={isHidden:!1},e}function nu(e,t,i){return e=Dt(6,e,null,t),e.lanes=i,e}function ru(e,t,i){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ig(e,t,i,s,d){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=s,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ou(e,t,i,s,d,h,y,E,C){return e=new ig(e,t,i,E,C),t===1?(t=1,h===!0&&(t|=8)):t=0,h=Dt(3,null,null,t),e.current=h,h.stateNode=e,h.memoizedState={element:s,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},gs(h),e}function ag(e,t,i){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$,key:s==null?null:""+s,children:e,containerInfo:t,implementation:i}}function op(e){if(!e)return _n;e=e._reactInternals;e:{if(qn(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(vt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var i=e.type;if(vt(i))return Md(e,i,t)}return t}function ip(e,t,i,s,d,h,y,E,C){return e=ou(i,s,!0,e,d,h,y,E,C),e.context=op(null),i=e.current,s=ht(),d=An(i),h=fn(s,d),h.callback=t??null,Nn(i,h,d),e.current.lanes=d,eo(e,d,s),bt(e,s),e}function ca(e,t,i,s){var d=t.current,h=ht(),y=An(d);return i=op(i),t.context===null?t.context=i:t.pendingContext=i,t=fn(h,y),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Nn(d,t,y),e!==null&&(Ut(e,d,y,h),$i(e,d,y)),y}function da(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ap(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function iu(e,t){ap(e,t),(e=e.alternate)&&ap(e,t)}function lg(){return null}var lp=typeof reportError=="function"?reportError:function(e){console.error(e)};function au(e){this._internalRoot=e}fa.prototype.render=au.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));ca(e,t,null,null)},fa.prototype.unmount=au.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;er(function(){ca(null,e,null,null)}),t[ln]=null}};function fa(e){this._internalRoot=e}fa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bc();e={blockedOn:null,target:e,priority:t};for(var i=0;i<En.length&&t!==0&&t<En[i].priority;i++);En.splice(i,0,e),i===0&&Wc(e)}};function lu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sp(){}function sg(e,t,i,s,d){if(d){if(typeof s=="function"){var h=s;s=function(){var A=da(y);h.call(A)}}var y=ip(t,s,e,0,null,!1,!1,"",sp);return e._reactRootContainer=y,e[ln]=y.current,mo(e.nodeType===8?e.parentNode:e),er(),y}for(;d=e.lastChild;)e.removeChild(d);if(typeof s=="function"){var E=s;s=function(){var A=da(C);E.call(A)}}var C=ou(e,0,!1,null,null,!1,!1,"",sp);return e._reactRootContainer=C,e[ln]=C.current,mo(e.nodeType===8?e.parentNode:e),er(function(){ca(t,C,i,s)}),C}function ha(e,t,i,s,d){var h=i._reactRootContainer;if(h){var y=h;if(typeof d=="function"){var E=d;d=function(){var C=da(y);E.call(C)}}ca(t,y,e,d)}else y=sg(i,t,e,d,s);return da(y)}$c=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=Zr(t.pendingLanes);i!==0&&(Ml(t,i|1),bt(t,We()),!(Pe&6)&&(Dr=We()+500,Tn()))}break;case 13:er(function(){var s=dn(e,1);if(s!==null){var d=ht();Ut(s,e,1,d)}}),iu(e,1)}},Nl=function(e){if(e.tag===13){var t=dn(e,134217728);if(t!==null){var i=ht();Ut(t,e,134217728,i)}iu(e,134217728)}},Uc=function(e){if(e.tag===13){var t=An(e),i=dn(e,t);if(i!==null){var s=ht();Ut(i,e,t,s)}iu(e,t)}},Bc=function(){return Le},Hc=function(e,t){var i=Le;try{return Le=e,t()}finally{Le=i}},El=function(e,t,i){switch(t){case"input":if(vl(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var s=i[t];if(s!==e&&s.form===e.form){var d=Mi(s);if(!d)throw Error(o(90));Wr(s),vl(s,d)}}}break;case"textarea":bc(e,i);break;case"select":t=i.value,t!=null&&fr(e,!!i.multiple,t,!1)}},Rc=Js,_c=er;var ug={usingClientEntryPoint:!1,Events:[yo,Sr,Mi,Cc,Oc,Js]},No={findFiberByHostInstance:Wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cg={bundleType:No.bundleType,version:No.version,rendererPackageName:No.rendererPackageName,rendererConfig:No.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:F.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Lc(e),e===null?null:e.stateNode},findFiberByHostInstance:No.findFiberByHostInstance||lg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ma.isDisabled&&ma.supportsFiber)try{fi=ma.inject(cg),Kt=ma}catch{}}return wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ug,wt.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lu(t))throw Error(o(200));return ag(e,t,null,i)},wt.createRoot=function(e,t){if(!lu(e))throw Error(o(299));var i=!1,s="",d=lp;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=ou(e,1,!1,null,null,i,!1,s,d),e[ln]=t.current,mo(e.nodeType===8?e.parentNode:e),new au(t)},wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=Lc(t),e=e===null?null:e.stateNode,e},wt.flushSync=function(e){return er(e)},wt.hydrate=function(e,t,i){if(!pa(t))throw Error(o(200));return ha(null,e,t,!0,i)},wt.hydrateRoot=function(e,t,i){if(!lu(e))throw Error(o(405));var s=i!=null&&i.hydratedSources||null,d=!1,h="",y=lp;if(i!=null&&(i.unstable_strictMode===!0&&(d=!0),i.identifierPrefix!==void 0&&(h=i.identifierPrefix),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),t=ip(t,null,e,1,i??null,d,!1,h,y),e[ln]=t.current,mo(e),s)for(e=0;e<s.length;e++)i=s[e],d=i._getVersion,d=d(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,d]:t.mutableSourceEagerHydrationData.push(i,d);return new fa(t)},wt.render=function(e,t,i){if(!pa(t))throw Error(o(200));return ha(null,e,t,!1,i)},wt.unmountComponentAtNode=function(e){if(!pa(e))throw Error(o(40));return e._reactRootContainer?(er(function(){ha(null,null,e,!1,function(){e._reactRootContainer=null,e[ln]=null})}),!0):!1},wt.unstable_batchedUpdates=Js,wt.unstable_renderSubtreeIntoContainer=function(e,t,i,s){if(!pa(i))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return ha(e,t,i,!1,s)},wt.version="18.3.1-next-f1338f8080-20240426",wt}var gp;function Ch(){if(gp)return cu.exports;gp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),cu.exports=xg(),cu.exports}var yp;function Sg(){if(yp)return va;yp=1;var n=Ch();return va.createRoot=n.createRoot,va.hydrateRoot=n.hydrateRoot,va}var kg=Sg(),Do={},bp;function Eg(){if(bp)return Do;bp=1,Object.defineProperty(Do,"__esModule",{value:!0}),Do.parse=f,Do.serialize=p;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,l=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,u=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function f(x,k){const b=new u,w=x.length;if(w<2)return b;const S=(k==null?void 0:k.decode)||m;let P=0;do{const R=x.indexOf("=",P);if(R===-1)break;const T=x.indexOf(";",P),F=T===-1?w:T;if(R>F){P=x.lastIndexOf(";",R-1)+1;continue}const L=v(x,P,R),$=c(x,R,L),U=x.slice(L,$);if(b[U]===void 0){let Q=v(x,R+1,F),X=c(x,F,Q);const me=S(x.slice(Q,X));b[U]=me}P=F+1}while(P<w);return b}function v(x,k,b){do{const w=x.charCodeAt(k);if(w!==32&&w!==9)return k}while(++k<b);return b}function c(x,k,b){for(;k>b;){const w=x.charCodeAt(--k);if(w!==32&&w!==9)return k+1}return b}function p(x,k,b){const w=(b==null?void 0:b.encode)||encodeURIComponent;if(!n.test(x))throw new TypeError(`argument name is invalid: ${x}`);const S=w(k);if(!r.test(S))throw new TypeError(`argument val is invalid: ${k}`);let P=x+"="+S;if(!b)return P;if(b.maxAge!==void 0){if(!Number.isInteger(b.maxAge))throw new TypeError(`option maxAge is invalid: ${b.maxAge}`);P+="; Max-Age="+b.maxAge}if(b.domain){if(!o.test(b.domain))throw new TypeError(`option domain is invalid: ${b.domain}`);P+="; Domain="+b.domain}if(b.path){if(!l.test(b.path))throw new TypeError(`option path is invalid: ${b.path}`);P+="; Path="+b.path}if(b.expires){if(!g(b.expires)||!Number.isFinite(b.expires.valueOf()))throw new TypeError(`option expires is invalid: ${b.expires}`);P+="; Expires="+b.expires.toUTCString()}if(b.httpOnly&&(P+="; HttpOnly"),b.secure&&(P+="; Secure"),b.partitioned&&(P+="; Partitioned"),b.priority)switch(typeof b.priority=="string"?b.priority.toLowerCase():void 0){case"low":P+="; Priority=Low";break;case"medium":P+="; Priority=Medium";break;case"high":P+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${b.priority}`)}if(b.sameSite)switch(typeof b.sameSite=="string"?b.sameSite.toLowerCase():b.sameSite){case!0:case"strict":P+="; SameSite=Strict";break;case"lax":P+="; SameSite=Lax";break;case"none":P+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${b.sameSite}`)}return P}function m(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function g(x){return a.call(x)==="[object Date]"}return Do}Eg();/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var wp="popstate";function Pg(n={}){function r(a,u){let{pathname:f="/",search:v="",hash:c=""}=ur(a.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),_u("",{pathname:f,search:v,hash:c},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function o(a,u){let f=a.document.querySelector("base"),v="";if(f&&f.getAttribute("href")){let c=a.location.href,p=c.indexOf("#");v=p===-1?c:c.slice(0,p)}return v+"#"+(typeof u=="string"?u:Ho(u))}function l(a,u){Wt(a.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return Og(r,o,l,n)}function Ue(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}function Wt(n,r){if(!n){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Cg(){return Math.random().toString(36).substring(2,10)}function xp(n,r){return{usr:n.state,key:n.key,idx:r}}function _u(n,r,o=null,l){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof r=="string"?ur(r):r,state:o,key:r&&r.key||l||Cg()}}function Ho({pathname:n="/",search:r="",hash:o=""}){return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function ur(n){let r={};if(n){let o=n.indexOf("#");o>=0&&(r.hash=n.substring(o),n=n.substring(0,o));let l=n.indexOf("?");l>=0&&(r.search=n.substring(l),n=n.substring(0,l)),n&&(r.pathname=n)}return r}function Og(n,r,o,l={}){let{window:a=document.defaultView,v5Compat:u=!1}=l,f=a.history,v="POP",c=null,p=m();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function m(){return(f.state||{idx:null}).idx}function g(){v="POP";let S=m(),P=S==null?null:S-p;p=S,c&&c({action:v,location:w.location,delta:P})}function x(S,P){v="PUSH";let R=_u(w.location,S,P);o&&o(R,S),p=m()+1;let T=xp(R,p),F=w.createHref(R);try{f.pushState(T,"",F)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;a.location.assign(F)}u&&c&&c({action:v,location:w.location,delta:1})}function k(S,P){v="REPLACE";let R=_u(w.location,S,P);o&&o(R,S),p=m();let T=xp(R,p),F=w.createHref(R);f.replaceState(T,"",F),u&&c&&c({action:v,location:w.location,delta:0})}function b(S){let P=a.location.origin!=="null"?a.location.origin:a.location.href,R=typeof S=="string"?S:Ho(S);return R=R.replace(/ $/,"%20"),Ue(P,`No window.location.(origin|href) available to create URL for href: ${R}`),new URL(R,P)}let w={get action(){return v},get location(){return n(a,f)},listen(S){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(wp,g),c=S,()=>{a.removeEventListener(wp,g),c=null}},createHref(S){return r(a,S)},createURL:b,encodeLocation(S){let P=b(S);return{pathname:P.pathname,search:P.search,hash:P.hash}},push:x,replace:k,go(S){return f.go(S)}};return w}function Oh(n,r,o="/"){return Rg(n,r,o,!1)}function Rg(n,r,o,l){let a=typeof r=="string"?ur(r):r,u=Un(a.pathname||"/",o);if(u==null)return null;let f=Rh(n);_g(f);let v=null;for(let c=0;v==null&&c<f.length;++c){let p=Vg(u);v=Fg(f[c],p,l)}return v}function Rh(n,r=[],o=[],l=""){let a=(u,f,v)=>{let c={relativePath:v===void 0?u.path||"":v,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};c.relativePath.startsWith("/")&&(Ue(c.relativePath.startsWith(l),`Absolute route path "${c.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(l.length));let p=gn([l,c.relativePath]),m=o.concat(c);u.children&&u.children.length>0&&(Ue(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Rh(u.children,r,m,p)),!(u.path==null&&!u.index)&&r.push({path:p,score:Ag(p,u.index),routesMeta:m})};return n.forEach((u,f)=>{var v;if(u.path===""||!((v=u.path)!=null&&v.includes("?")))a(u,f);else for(let c of _h(u.path))a(u,f,c)}),r}function _h(n){let r=n.split("/");if(r.length===0)return[];let[o,...l]=r,a=o.endsWith("?"),u=o.replace(/\?$/,"");if(l.length===0)return a?[u,""]:[u];let f=_h(l.join("/")),v=[];return v.push(...f.map(c=>c===""?u:[u,c].join("/"))),a&&v.push(...f),v.map(c=>n.startsWith("/")&&c===""?"/":c)}function _g(n){n.sort((r,o)=>r.score!==o.score?o.score-r.score:zg(r.routesMeta.map(l=>l.childrenIndex),o.routesMeta.map(l=>l.childrenIndex)))}var Tg=/^:[\w-]+$/,Mg=3,Ng=2,Lg=1,Ig=10,Dg=-2,Sp=n=>n==="*";function Ag(n,r){let o=n.split("/"),l=o.length;return o.some(Sp)&&(l+=Dg),r&&(l+=Ng),o.filter(a=>!Sp(a)).reduce((a,u)=>a+(Tg.test(u)?Mg:u===""?Lg:Ig),l)}function zg(n,r){return n.length===r.length&&n.slice(0,-1).every((l,a)=>l===r[a])?n[n.length-1]-r[r.length-1]:0}function Fg(n,r,o=!1){let{routesMeta:l}=n,a={},u="/",f=[];for(let v=0;v<l.length;++v){let c=l[v],p=v===l.length-1,m=u==="/"?r:r.slice(u.length)||"/",g=ja({path:c.relativePath,caseSensitive:c.caseSensitive,end:p},m),x=c.route;if(!g&&p&&o&&!l[l.length-1].route.index&&(g=ja({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!g)return null;Object.assign(a,g.params),f.push({params:a,pathname:gn([u,g.pathname]),pathnameBase:Hg(gn([u,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(u=gn([u,g.pathnameBase]))}return f}function ja(n,r){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[o,l]=jg(n.path,n.caseSensitive,n.end),a=r.match(o);if(!a)return null;let u=a[0],f=u.replace(/(.)\/+$/,"$1"),v=a.slice(1);return{params:l.reduce((p,{paramName:m,isOptional:g},x)=>{if(m==="*"){let b=v[x]||"";f=u.slice(0,u.length-b.length).replace(/(.)\/+$/,"$1")}const k=v[x];return g&&!k?p[m]=void 0:p[m]=(k||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:f,pattern:n}}function jg(n,r=!1,o=!0){Wt(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let l=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,v,c)=>(l.push({paramName:v,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(l.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,r?void 0:"i"),l]}function Vg(n){try{return n.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Wt(!1,`The URL path "${n}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),n}}function Un(n,r){if(r==="/")return n;if(!n.toLowerCase().startsWith(r.toLowerCase()))return null;let o=r.endsWith("/")?r.length-1:r.length,l=n.charAt(o);return l&&l!=="/"?null:n.slice(o)||"/"}function $g(n,r="/"){let{pathname:o,search:l="",hash:a=""}=typeof n=="string"?ur(n):n;return{pathname:o?o.startsWith("/")?o:Ug(o,r):r,search:qg(l),hash:Wg(a)}}function Ug(n,r){let o=r.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?o.length>1&&o.pop():a!=="."&&o.push(a)}),o.length>1?o.join("/"):"/"}function pu(n,r,o,l){return`Cannot include a '${n}' character in a manually specified \`to.${r}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Bg(n){return n.filter((r,o)=>o===0||r.route.path&&r.route.path.length>0)}function Th(n){let r=Bg(n);return r.map((o,l)=>l===r.length-1?o.pathname:o.pathnameBase)}function Mh(n,r,o,l=!1){let a;typeof n=="string"?a=ur(n):(a={...n},Ue(!a.pathname||!a.pathname.includes("?"),pu("?","pathname","search",a)),Ue(!a.pathname||!a.pathname.includes("#"),pu("#","pathname","hash",a)),Ue(!a.search||!a.search.includes("#"),pu("#","search","hash",a)));let u=n===""||a.pathname==="",f=u?"/":a.pathname,v;if(f==null)v=o;else{let g=r.length-1;if(!l&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),g-=1;a.pathname=x.join("/")}v=g>=0?r[g]:"/"}let c=$g(a,v),p=f&&f!=="/"&&f.endsWith("/"),m=(u||f===".")&&o.endsWith("/");return!c.pathname.endsWith("/")&&(p||m)&&(c.pathname+="/"),c}var gn=n=>n.join("/").replace(/\/\/+/g,"/"),Hg=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),qg=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Wg=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Qg(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Nh=["POST","PUT","PATCH","DELETE"];new Set(Nh);var Kg=["GET",...Nh];new Set(Kg);var Ur=O.createContext(null);Ur.displayName="DataRouter";var el=O.createContext(null);el.displayName="DataRouterState";var Lh=O.createContext({isTransitioning:!1});Lh.displayName="ViewTransition";var Yg=O.createContext(new Map);Yg.displayName="Fetchers";var Gg=O.createContext(null);Gg.displayName="Await";var on=O.createContext(null);on.displayName="Navigation";var Yo=O.createContext(null);Yo.displayName="Location";var an=O.createContext({outlet:null,matches:[],isDataRoute:!1});an.displayName="Route";var Yu=O.createContext(null);Yu.displayName="RouteError";function Xg(n,{relative:r}={}){Ue(Go(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:l}=O.useContext(on),{hash:a,pathname:u,search:f}=Jo(n,{relative:r}),v=u;return o!=="/"&&(v=u==="/"?o:gn([o,u])),l.createHref({pathname:v,search:f,hash:a})}function Go(){return O.useContext(Yo)!=null}function Bn(){return Ue(Go(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(Yo).location}var Ih="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Dh(n){O.useContext(on).static||O.useLayoutEffect(n)}function Xo(){let{isDataRoute:n}=O.useContext(an);return n?f1():Jg()}function Jg(){Ue(Go(),"useNavigate() may be used only in the context of a <Router> component.");let n=O.useContext(Ur),{basename:r,navigator:o}=O.useContext(on),{matches:l}=O.useContext(an),{pathname:a}=Bn(),u=JSON.stringify(Th(l)),f=O.useRef(!1);return Dh(()=>{f.current=!0}),O.useCallback((c,p={})=>{if(Wt(f.current,Ih),!f.current)return;if(typeof c=="number"){o.go(c);return}let m=Mh(c,JSON.parse(u),a,p.relative==="path");n==null&&r!=="/"&&(m.pathname=m.pathname==="/"?r:gn([r,m.pathname])),(p.replace?o.replace:o.push)(m,p.state,p)},[r,o,u,a,n])}var Zg=O.createContext(null);function e1(n){let r=O.useContext(an).outlet;return r&&O.createElement(Zg.Provider,{value:n},r)}function Jo(n,{relative:r}={}){let{matches:o}=O.useContext(an),{pathname:l}=Bn(),a=JSON.stringify(Th(o));return O.useMemo(()=>Mh(n,JSON.parse(a),l,r==="path"),[n,a,l,r])}function t1(n,r){return Ah(n,r)}function Ah(n,r,o,l){var P;Ue(Go(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=O.useContext(on),{matches:u}=O.useContext(an),f=u[u.length-1],v=f?f.params:{},c=f?f.pathname:"/",p=f?f.pathnameBase:"/",m=f&&f.route;{let R=m&&m.path||"";zh(c,!m||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let g=Bn(),x;if(r){let R=typeof r=="string"?ur(r):r;Ue(p==="/"||((P=R.pathname)==null?void 0:P.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${R.pathname}" was given in the \`location\` prop.`),x=R}else x=g;let k=x.pathname||"/",b=k;if(p!=="/"){let R=p.replace(/^\//,"").split("/");b="/"+k.replace(/^\//,"").split("/").slice(R.length).join("/")}let w=Oh(n,{pathname:b});Wt(m||w!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Wt(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=a1(w&&w.map(R=>Object.assign({},R,{params:Object.assign({},v,R.params),pathname:gn([p,a.encodeLocation?a.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?p:gn([p,a.encodeLocation?a.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),u,o,l);return r&&S?O.createElement(Yo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},S):S}function n1(){let n=d1(),r=Qg(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),o=n instanceof Error?n.stack:null,l="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:l},u={padding:"2px 4px",backgroundColor:l},f=null;return console.error("Error handled by React Router default ErrorBoundary:",n),f=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:u},"ErrorBoundary")," or"," ",O.createElement("code",{style:u},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},r),o?O.createElement("pre",{style:a},o):null,f)}var r1=O.createElement(n1,null),o1=class extends O.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,r){return r.location!==n.location||r.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:r.error,location:r.location,revalidation:n.revalidation||r.revalidation}}componentDidCatch(n,r){console.error("React Router caught the following error during render",n,r)}render(){return this.state.error!==void 0?O.createElement(an.Provider,{value:this.props.routeContext},O.createElement(Yu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function i1({routeContext:n,match:r,children:o}){let l=O.useContext(Ur);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),O.createElement(an.Provider,{value:n},o)}function a1(n,r=[],o=null,l=null){if(n==null){if(!o)return null;if(o.errors)n=o.matches;else if(r.length===0&&!o.initialized&&o.matches.length>0)n=o.matches;else return null}let a=n,u=o==null?void 0:o.errors;if(u!=null){let c=a.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id])!==void 0);Ue(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),a=a.slice(0,Math.min(a.length,c+1))}let f=!1,v=-1;if(o)for(let c=0;c<a.length;c++){let p=a[c];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(v=c),p.route.id){let{loaderData:m,errors:g}=o,x=p.route.loader&&!m.hasOwnProperty(p.route.id)&&(!g||g[p.route.id]===void 0);if(p.route.lazy||x){f=!0,v>=0?a=a.slice(0,v+1):a=[a[0]];break}}}return a.reduceRight((c,p,m)=>{let g,x=!1,k=null,b=null;o&&(g=u&&p.route.id?u[p.route.id]:void 0,k=p.route.errorElement||r1,f&&(v<0&&m===0?(zh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,b=null):v===m&&(x=!0,b=p.route.hydrateFallbackElement||null)));let w=r.concat(a.slice(0,m+1)),S=()=>{let P;return g?P=k:x?P=b:p.route.Component?P=O.createElement(p.route.Component,null):p.route.element?P=p.route.element:P=c,O.createElement(i1,{match:p,routeContext:{outlet:c,matches:w,isDataRoute:o!=null},children:P})};return o&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?O.createElement(o1,{location:o.location,revalidation:o.revalidation,component:k,error:g,children:S(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):S()},null)}function Gu(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function l1(n){let r=O.useContext(Ur);return Ue(r,Gu(n)),r}function s1(n){let r=O.useContext(el);return Ue(r,Gu(n)),r}function u1(n){let r=O.useContext(an);return Ue(r,Gu(n)),r}function Xu(n){let r=u1(n),o=r.matches[r.matches.length-1];return Ue(o.route.id,`${n} can only be used on routes that contain a unique "id"`),o.route.id}function c1(){return Xu("useRouteId")}function d1(){var l;let n=O.useContext(Yu),r=s1("useRouteError"),o=Xu("useRouteError");return n!==void 0?n:(l=r.errors)==null?void 0:l[o]}function f1(){let{router:n}=l1("useNavigate"),r=Xu("useNavigate"),o=O.useRef(!1);return Dh(()=>{o.current=!0}),O.useCallback(async(a,u={})=>{Wt(o.current,Ih),o.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:r,...u}))},[n,r])}var kp={};function zh(n,r,o){!r&&!kp[n]&&(kp[n]=!0,Wt(!1,o))}O.memo(p1);function p1({routes:n,future:r,state:o}){return Ah(n,void 0,o,r)}function h1(n){return e1(n.context)}function en(n){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function m1({basename:n="/",children:r=null,location:o,navigationType:l="POP",navigator:a,static:u=!1}){Ue(!Go(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=n.replace(/^\/*/,"/"),v=O.useMemo(()=>({basename:f,navigator:a,static:u,future:{}}),[f,a,u]);typeof o=="string"&&(o=ur(o));let{pathname:c="/",search:p="",hash:m="",state:g=null,key:x="default"}=o,k=O.useMemo(()=>{let b=Un(c,f);return b==null?null:{location:{pathname:b,search:p,hash:m,state:g,key:x},navigationType:l}},[f,c,p,m,g,x,l]);return Wt(k!=null,`<Router basename="${f}"> is not able to match the URL "${c}${p}${m}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:O.createElement(on.Provider,{value:v},O.createElement(Yo.Provider,{children:r,value:k}))}function v1({children:n,location:r}){return t1(Tu(n),r)}function Tu(n,r=[]){let o=[];return O.Children.forEach(n,(l,a)=>{if(!O.isValidElement(l))return;let u=[...r,a];if(l.type===O.Fragment){o.push.apply(o,Tu(l.props.children,u));return}Ue(l.type===en,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!l.props.index||!l.props.children,"An index route cannot have child routes.");let f={id:l.props.id||u.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(f.children=Tu(l.props.children,u)),o.push(f)}),o}var Ta="get",Ma="application/x-www-form-urlencoded";function tl(n){return n!=null&&typeof n.tagName=="string"}function g1(n){return tl(n)&&n.tagName.toLowerCase()==="button"}function y1(n){return tl(n)&&n.tagName.toLowerCase()==="form"}function b1(n){return tl(n)&&n.tagName.toLowerCase()==="input"}function w1(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function x1(n,r){return n.button===0&&(!r||r==="_self")&&!w1(n)}var ga=null;function S1(){if(ga===null)try{new FormData(document.createElement("form"),0),ga=!1}catch{ga=!0}return ga}var k1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function hu(n){return n!=null&&!k1.has(n)?(Wt(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ma}"`),null):n}function E1(n,r){let o,l,a,u,f;if(y1(n)){let v=n.getAttribute("action");l=v?Un(v,r):null,o=n.getAttribute("method")||Ta,a=hu(n.getAttribute("enctype"))||Ma,u=new FormData(n)}else if(g1(n)||b1(n)&&(n.type==="submit"||n.type==="image")){let v=n.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=n.getAttribute("formaction")||v.getAttribute("action");if(l=c?Un(c,r):null,o=n.getAttribute("formmethod")||v.getAttribute("method")||Ta,a=hu(n.getAttribute("formenctype"))||hu(v.getAttribute("enctype"))||Ma,u=new FormData(v,n),!S1()){let{name:p,type:m,value:g}=n;if(m==="image"){let x=p?`${p}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else p&&u.append(p,g)}}else{if(tl(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Ta,l=null,a=Ma,f=n}return u&&a==="text/plain"&&(f=u,u=void 0),{action:l,method:o.toLowerCase(),encType:a,formData:u,body:f}}function Ju(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}async function P1(n,r){if(n.id in r)return r[n.id];try{let o=await import(n.module);return r[n.id]=o,o}catch(o){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function C1(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function O1(n,r,o){let l=await Promise.all(n.map(async a=>{let u=r.routes[a.route.id];if(u){let f=await P1(u,o);return f.links?f.links():[]}return[]}));return M1(l.flat(1).filter(C1).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Ep(n,r,o,l,a,u){let f=(c,p)=>o[p]?c.route.id!==o[p].route.id:!0,v=(c,p)=>{var m;return o[p].pathname!==c.pathname||((m=o[p].route.path)==null?void 0:m.endsWith("*"))&&o[p].params["*"]!==c.params["*"]};return u==="assets"?r.filter((c,p)=>f(c,p)||v(c,p)):u==="data"?r.filter((c,p)=>{var g;let m=l.routes[c.route.id];if(!m||!m.hasLoader)return!1;if(f(c,p)||v(c,p))return!0;if(c.route.shouldRevalidate){let x=c.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((g=o[0])==null?void 0:g.params)||{},nextUrl:new URL(n,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function R1(n,r){return _1(n.map(o=>{let l=r.routes[o.route.id];if(!l)return[];let a=[l.module];return l.imports&&(a=a.concat(l.imports)),a}).flat(1))}function _1(n){return[...new Set(n)]}function T1(n){let r={},o=Object.keys(n).sort();for(let l of o)r[l]=n[l];return r}function M1(n,r){let o=new Set;return new Set(r),n.reduce((l,a)=>{let u=JSON.stringify(T1(a));return o.has(u)||(o.add(u),l.push({key:u,link:a})),l},[])}function N1(n){let r=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return r.pathname==="/"?r.pathname="_root.data":r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function L1(){let n=O.useContext(Ur);return Ju(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function I1(){let n=O.useContext(el);return Ju(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Zu=O.createContext(void 0);Zu.displayName="FrameworkContext";function Fh(){let n=O.useContext(Zu);return Ju(n,"You must render this element inside a <HydratedRouter> element"),n}function D1(n,r){let o=O.useContext(Zu),[l,a]=O.useState(!1),[u,f]=O.useState(!1),{onFocus:v,onBlur:c,onMouseEnter:p,onMouseLeave:m,onTouchStart:g}=r,x=O.useRef(null);O.useEffect(()=>{if(n==="render"&&f(!0),n==="viewport"){let w=P=>{P.forEach(R=>{f(R.isIntersecting)})},S=new IntersectionObserver(w,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[n]),O.useEffect(()=>{if(l){let w=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(w)}}},[l]);let k=()=>{a(!0)},b=()=>{a(!1),f(!1)};return o?n!=="intent"?[u,x,{}]:[u,x,{onFocus:Ao(v,k),onBlur:Ao(c,b),onMouseEnter:Ao(p,k),onMouseLeave:Ao(m,b),onTouchStart:Ao(g,k)}]:[!1,x,{}]}function Ao(n,r){return o=>{n&&n(o),o.defaultPrevented||r(o)}}function A1({page:n,...r}){let{router:o}=L1(),l=O.useMemo(()=>Oh(o.routes,n,o.basename),[o.routes,n,o.basename]);return l?O.createElement(F1,{page:n,matches:l,...r}):(console.warn(`Tried to prefetch ${n} but no routes matched.`),null)}function z1(n){let{manifest:r,routeModules:o}=Fh(),[l,a]=O.useState([]);return O.useEffect(()=>{let u=!1;return O1(n,r,o).then(f=>{u||a(f)}),()=>{u=!0}},[n,r,o]),l}function F1({page:n,matches:r,...o}){let l=Bn(),{manifest:a,routeModules:u}=Fh(),{loaderData:f,matches:v}=I1(),c=O.useMemo(()=>Ep(n,r,v,a,l,"data"),[n,r,v,a,l]),p=O.useMemo(()=>Ep(n,r,v,a,l,"assets"),[n,r,v,a,l]),m=O.useMemo(()=>{if(n===l.pathname+l.search+l.hash)return[];let k=new Set,b=!1;if(r.forEach(S=>{var R;let P=a.routes[S.route.id];!P||!P.hasLoader||(!c.some(T=>T.route.id===S.route.id)&&S.route.id in f&&((R=u[S.route.id])!=null&&R.shouldRevalidate)||P.hasClientLoader?b=!0:k.add(S.route.id))}),k.size===0)return[];let w=N1(n);return b&&k.size>0&&w.searchParams.set("_routes",r.filter(S=>k.has(S.route.id)).map(S=>S.route.id).join(",")),[w.pathname+w.search]},[f,l,a,c,r,n,u]),g=O.useMemo(()=>R1(p,a),[p,a]),x=z1(p);return O.createElement(O.Fragment,null,m.map(k=>O.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...o})),g.map(k=>O.createElement("link",{key:k,rel:"modulepreload",href:k,...o})),x.map(({key:k,link:b})=>O.createElement("link",{key:k,...b})))}function j1(...n){return r=>{n.forEach(o=>{typeof o=="function"?o(r):o!=null&&(o.current=r)})}}var jh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{jh&&(window.__reactRouterVersion="7.0.2")}catch{}function V1({basename:n,children:r,window:o}){let l=O.useRef();l.current==null&&(l.current=Pg({window:o,v5Compat:!0}));let a=l.current,[u,f]=O.useState({action:a.action,location:a.location}),v=O.useCallback(c=>{O.startTransition(()=>f(c))},[f]);return O.useLayoutEffect(()=>a.listen(v),[a,v]),O.createElement(m1,{basename:n,children:r,location:u.location,navigationType:u.action,navigator:a})}var Vh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ec=O.forwardRef(function({onClick:r,discover:o="render",prefetch:l="none",relative:a,reloadDocument:u,replace:f,state:v,target:c,to:p,preventScrollReset:m,viewTransition:g,...x},k){let{basename:b}=O.useContext(on),w=typeof p=="string"&&Vh.test(p),S,P=!1;if(typeof p=="string"&&w&&(S=p,jh))try{let X=new URL(window.location.href),me=p.startsWith("//")?new URL(X.protocol+p):new URL(p),we=Un(me.pathname,b);me.origin===X.origin&&we!=null?p=we+me.search+me.hash:P=!0}catch{Wt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let R=Xg(p,{relative:a}),[T,F,L]=D1(l,x),$=H1(p,{replace:f,state:v,target:c,preventScrollReset:m,relative:a,viewTransition:g});function U(X){r&&r(X),X.defaultPrevented||$(X)}let Q=O.createElement("a",{...x,...L,href:S||R,onClick:P||u?r:U,ref:j1(k,F),target:c,"data-discover":!w&&o==="render"?"true":void 0});return T&&!w?O.createElement(O.Fragment,null,Q,O.createElement(A1,{page:R})):Q});ec.displayName="Link";var $1=O.forwardRef(function({"aria-current":r="page",caseSensitive:o=!1,className:l="",end:a=!1,style:u,to:f,viewTransition:v,children:c,...p},m){let g=Jo(f,{relative:p.relative}),x=Bn(),k=O.useContext(el),{navigator:b,basename:w}=O.useContext(on),S=k!=null&&Y1(g)&&v===!0,P=b.encodeLocation?b.encodeLocation(g).pathname:g.pathname,R=x.pathname,T=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;o||(R=R.toLowerCase(),T=T?T.toLowerCase():null,P=P.toLowerCase()),T&&w&&(T=Un(T,w)||T);const F=P!=="/"&&P.endsWith("/")?P.length-1:P.length;let L=R===P||!a&&R.startsWith(P)&&R.charAt(F)==="/",$=T!=null&&(T===P||!a&&T.startsWith(P)&&T.charAt(P.length)==="/"),U={isActive:L,isPending:$,isTransitioning:S},Q=L?r:void 0,X;typeof l=="function"?X=l(U):X=[l,L?"active":null,$?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let me=typeof u=="function"?u(U):u;return O.createElement(ec,{...p,"aria-current":Q,className:X,ref:m,style:me,to:f,viewTransition:v},typeof c=="function"?c(U):c)});$1.displayName="NavLink";var U1=O.forwardRef(({discover:n="render",fetcherKey:r,navigate:o,reloadDocument:l,replace:a,state:u,method:f=Ta,action:v,onSubmit:c,relative:p,preventScrollReset:m,viewTransition:g,...x},k)=>{let b=Q1(),w=K1(v,{relative:p}),S=f.toLowerCase()==="get"?"get":"post",P=typeof v=="string"&&Vh.test(v),R=T=>{if(c&&c(T),T.defaultPrevented)return;T.preventDefault();let F=T.nativeEvent.submitter,L=(F==null?void 0:F.getAttribute("formmethod"))||f;b(F||T.currentTarget,{fetcherKey:r,method:L,navigate:o,replace:a,state:u,relative:p,preventScrollReset:m,viewTransition:g})};return O.createElement("form",{ref:k,method:S,action:w,onSubmit:l?c:R,...x,"data-discover":!P&&n==="render"?"true":void 0})});U1.displayName="Form";function B1(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $h(n){let r=O.useContext(Ur);return Ue(r,B1(n)),r}function H1(n,{target:r,replace:o,state:l,preventScrollReset:a,relative:u,viewTransition:f}={}){let v=Xo(),c=Bn(),p=Jo(n,{relative:u});return O.useCallback(m=>{if(x1(m,r)){m.preventDefault();let g=o!==void 0?o:Ho(c)===Ho(p);v(n,{replace:g,state:l,preventScrollReset:a,relative:u,viewTransition:f})}},[c,v,p,o,l,r,n,a,u,f])}var q1=0,W1=()=>`__${String(++q1)}__`;function Q1(){let{router:n}=$h("useSubmit"),{basename:r}=O.useContext(on),o=c1();return O.useCallback(async(l,a={})=>{let{action:u,method:f,encType:v,formData:c,body:p}=E1(l,r);if(a.navigate===!1){let m=a.fetcherKey||W1();await n.fetch(m,o,a.action||u,{preventScrollReset:a.preventScrollReset,formData:c,body:p,formMethod:a.method||f,formEncType:a.encType||v,flushSync:a.flushSync})}else await n.navigate(a.action||u,{preventScrollReset:a.preventScrollReset,formData:c,body:p,formMethod:a.method||f,formEncType:a.encType||v,replace:a.replace,state:a.state,fromRouteId:o,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,r,o])}function K1(n,{relative:r}={}){let{basename:o}=O.useContext(on),l=O.useContext(an);Ue(l,"useFormAction must be used inside a RouteContext");let[a]=l.matches.slice(-1),u={...Jo(n||".",{relative:r})},f=Bn();if(n==null){u.search=f.search;let v=new URLSearchParams(u.search),c=v.getAll("index");if(c.some(m=>m==="")){v.delete("index"),c.filter(g=>g).forEach(g=>v.append("index",g));let m=v.toString();u.search=m?`?${m}`:""}}return(!n||n===".")&&a.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(u.pathname=u.pathname==="/"?o:gn([o,u.pathname])),Ho(u)}function Y1(n,r={}){let o=O.useContext(Lh);Ue(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=$h("useViewTransitionState"),a=Jo(n,{relative:r.relative});if(!o.isTransitioning)return!1;let u=Un(o.currentLocation.pathname,l)||o.currentLocation.pathname,f=Un(o.nextLocation.pathname,l)||o.nextLocation.pathname;return ja(a.pathname,f)!=null||ja(a.pathname,u)!=null}new TextEncoder;var G1=Ch(),Uh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Pp=oe.createContext&&oe.createContext(Uh),X1=["attr","size","title"];function J1(n,r){if(n==null)return{};var o=Z1(n,r),l,a;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(a=0;a<u.length;a++)l=u[a],!(r.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(n,l)&&(o[l]=n[l])}return o}function Z1(n,r){if(n==null)return{};var o={};for(var l in n)if(Object.prototype.hasOwnProperty.call(n,l)){if(r.indexOf(l)>=0)continue;o[l]=n[l]}return o}function Va(){return Va=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},Va.apply(this,arguments)}function Cp(n,r){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);r&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),o.push.apply(o,l)}return o}function $a(n){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?Cp(Object(o),!0).forEach(function(l){ey(n,l,o[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):Cp(Object(o)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(o,l))})}return n}function ey(n,r,o){return r=ty(r),r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n}function ty(n){var r=ny(n,"string");return typeof r=="symbol"?r:r+""}function ny(n,r){if(typeof n!="object"||!n)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var l=o.call(n,r||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function Bh(n){return n&&n.map((r,o)=>oe.createElement(r.tag,$a({key:o},r.attr),Bh(r.child)))}function Zo(n){return r=>oe.createElement(ry,Va({attr:$a({},n.attr)},r),Bh(n.child))}function ry(n){var r=o=>{var{attr:l,size:a,title:u}=n,f=J1(n,X1),v=a||o.size||"1em",c;return o.className&&(c=o.className),n.className&&(c=(c?c+" ":"")+n.className),oe.createElement("svg",Va({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,l,f,{className:c,style:$a($a({color:n.color||o.color},o.style),n.style),height:v,width:v,xmlns:"http://www.w3.org/2000/svg"}),u&&oe.createElement("title",null,u),n.children)};return Pp!==void 0?oe.createElement(Pp.Consumer,null,o=>r(o)):r(Uh)}function oy(n){return Zo({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"},child:[]}]})(n)}function iy(n){return Zo({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M452.1 49L52.3 265.3c-6 3.3-5.6 12.1.6 14.9l68.2 25.7c4 1.5 7.2 4.5 9 8.4l53 109.1c1 4.8 9.9 6.1 10 1.2l-8.1-90.2c.5-6.7 3-13 7.3-18.2l207.3-203.1c1.2-1.2 2.9-1.6 4.5-1.3 3.4.8 4.8 4.9 2.6 7.6L228 338c-4 6-6 11-7 18l-10.7 77.9c.9 6.8 6.2 9.4 10.5 3.3l38.5-45.2c2.6-3.7 7.7-4.5 11.3-1.9l99.2 72.3c4.7 3.5 11.4.9 12.6-4.9L463.8 58c1.5-6.8-5.6-12.3-11.7-9z"},child:[]}]})(n)}function ay(n){return Zo({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M124 80v322c0 7.7-6.3 14-14 14s-14-6.3-14-14V112H80c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h353.1c17 0 30.9-13.8 30.9-30.9V80c0-17.7-14.3-32-32-32l-278 2c-17.7 0-30 12.3-30 30zm66 32h84c7.7 0 14 6.3 14 14s-6.3 14-14 14h-84c-7.7 0-14-6.3-14-14s6.3-14 14-14zm0 160h148c7.7 0 14 6.3 14 14s-6.3 14-14 14H190c-7.7 0-14-6.3-14-14s6.3-14 14-14zm196 108H190c-7.7 0-14-6.3-14-14s6.3-14 14-14h196c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-160H190c-7.7 0-14-6.3-14-14s6.3-14 14-14h196c7.7 0 14 6.3 14 14s-6.3 14-14 14z"},child:[]}]})(n)}function ly(n){return Zo({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M447.8 438.3c-7.2-31.8-48.3-47.3-62.5-52.3-15.6-5.5-37.8-6.8-52.1-10-8.2-1.8-20.1-6.3-24.1-11.1s-1.6-49.3-1.6-49.3 7.4-11.5 11.4-21.7c4-10.1 8.4-37.9 8.4-37.9s8.2 0 11.1-14.4c3.1-15.7 8-21.8 7.4-33.5-.6-11.5-6.9-11.2-6.9-11.2s6.1-16.7 6.8-51.3c.9-41.1-31.3-81.6-89.6-81.6-59.1 0-90.6 40.5-89.7 81.6.8 34.6 6.7 51.3 6.7 51.3s-6.3-.3-6.9 11.2c-.6 11.7 4.3 17.8 7.4 33.5 2.8 14.4 11.1 14.4 11.1 14.4s4.4 27.8 8.4 37.9c4 10.2 11.4 21.7 11.4 21.7s2.4 44.5-1.6 49.3c-4 4.8-15.9 9.3-24.1 11.1-14.3 3.2-36.5 4.5-52.1 10-14.2 5-55.3 20.5-62.5 52.3-1.1 5 2.7 9.7 7.9 9.7H440c5.1 0 8.9-4.7 7.8-9.7z"},child:[]}]})(n)}const sy=[{title:"Home",path:"/home",icon:N.jsx(oy,{style:{fontSize:"25px",color:"#555"}}),cName:"nav-text"},{title:"About",path:"about",icon:N.jsx(ay,{style:{fontSize:"25px",color:"#555"}}),cName:"nav-text"},{title:"Announcement",path:"announcement",icon:N.jsx(iy,{style:{fontSize:"25px",color:"#555"}}),cName:"nav-text"}],uy=()=>(Xo(),N.jsxs("div",{children:[N.jsx("h2",{children:"Menu"}),N.jsx("ul",{className:"menu-list",children:sy.map((n,r)=>N.jsx("li",{className:n.cName,children:N.jsxs(ec,{to:n.path,children:[n.icon,N.jsx("span",{children:n.title})]})},r))})]})),cy=()=>N.jsxs("div",{style:{display:"flex"},children:[N.jsx("aside",{style:{width:"230px",background:"#ffe4c4",padding:"10px",height:"100vh",boxShadow:"2px 0 5px rgba(0,0,0,0.1)"},children:N.jsx(uy,{})}),N.jsxs("main",{style:{flex:1,padding:"20px"},children:[N.jsx(h1,{})," "]})]}),dy=()=>N.jsx("h2",{children:"Welcome to the Home Page"}),fy=()=>N.jsx("h2",{children:"Welcome to the about Page"});function Ze(n,r){r===void 0&&(r={});var o=r.insertAt;if(n&&typeof document<"u"){var l=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",o==="top"&&l.firstChild?l.insertBefore(a,l.firstChild):l.appendChild(a),a.styleSheet?a.styleSheet.cssText=n:a.appendChild(document.createTextNode(n))}}Ze(`.react-loading-indicator-normalize,
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
}`);var ke=function(){return ke=Object.assign||function(n){for(var r,o=1,l=arguments.length;o<l;o++)for(var a in r=arguments[o])Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a]);return n},ke.apply(this,arguments)};function Ua(n){return Ua=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Ua(n)}var py=/^\s+/,hy=/\s+$/;function te(n,r){if(r=r||{},(n=n||"")instanceof te)return n;if(!(this instanceof te))return new te(n,r);var o=function(l){var a={r:0,g:0,b:0},u=1,f=null,v=null,c=null,p=!1,m=!1;typeof l=="string"&&(l=function(b){b=b.replace(py,"").replace(hy,"").toLowerCase();var w,S=!1;if(Mu[b])b=Mu[b],S=!0;else if(b=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(w=Bt.rgb.exec(b))?{r:w[1],g:w[2],b:w[3]}:(w=Bt.rgba.exec(b))?{r:w[1],g:w[2],b:w[3],a:w[4]}:(w=Bt.hsl.exec(b))?{h:w[1],s:w[2],l:w[3]}:(w=Bt.hsla.exec(b))?{h:w[1],s:w[2],l:w[3],a:w[4]}:(w=Bt.hsv.exec(b))?{h:w[1],s:w[2],v:w[3]}:(w=Bt.hsva.exec(b))?{h:w[1],s:w[2],v:w[3],a:w[4]}:(w=Bt.hex8.exec(b))?{r:Ot(w[1]),g:Ot(w[2]),b:Ot(w[3]),a:Np(w[4]),format:S?"name":"hex8"}:(w=Bt.hex6.exec(b))?{r:Ot(w[1]),g:Ot(w[2]),b:Ot(w[3]),format:S?"name":"hex"}:(w=Bt.hex4.exec(b))?{r:Ot(w[1]+""+w[1]),g:Ot(w[2]+""+w[2]),b:Ot(w[3]+""+w[3]),a:Np(w[4]+""+w[4]),format:S?"name":"hex8"}:(w=Bt.hex3.exec(b))?{r:Ot(w[1]+""+w[1]),g:Ot(w[2]+""+w[2]),b:Ot(w[3]+""+w[3]),format:S?"name":"hex"}:!1}(l)),Ua(l)=="object"&&(mn(l.r)&&mn(l.g)&&mn(l.b)?(g=l.r,x=l.g,k=l.b,a={r:255*je(g,255),g:255*je(x,255),b:255*je(k,255)},p=!0,m=String(l.r).substr(-1)==="%"?"prgb":"rgb"):mn(l.h)&&mn(l.s)&&mn(l.v)?(f=Uo(l.s),v=Uo(l.v),a=function(b,w,S){b=6*je(b,360),w=je(w,100),S=je(S,100);var P=Math.floor(b),R=b-P,T=S*(1-w),F=S*(1-R*w),L=S*(1-(1-R)*w),$=P%6,U=[S,F,T,T,L,S][$],Q=[L,S,S,F,T,T][$],X=[T,T,L,S,S,F][$];return{r:255*U,g:255*Q,b:255*X}}(l.h,f,v),p=!0,m="hsv"):mn(l.h)&&mn(l.s)&&mn(l.l)&&(f=Uo(l.s),c=Uo(l.l),a=function(b,w,S){var P,R,T;function F(U,Q,X){return X<0&&(X+=1),X>1&&(X-=1),X<1/6?U+6*(Q-U)*X:X<.5?Q:X<2/3?U+(Q-U)*(2/3-X)*6:U}if(b=je(b,360),w=je(w,100),S=je(S,100),w===0)P=R=T=S;else{var L=S<.5?S*(1+w):S+w-S*w,$=2*S-L;P=F($,L,b+1/3),R=F($,L,b),T=F($,L,b-1/3)}return{r:255*P,g:255*R,b:255*T}}(l.h,f,c),p=!0,m="hsl"),l.hasOwnProperty("a")&&(u=l.a));var g,x,k;return u=Hh(u),{ok:p,format:l.format||m,r:Math.min(255,Math.max(a.r,0)),g:Math.min(255,Math.max(a.g,0)),b:Math.min(255,Math.max(a.b,0)),a:u}}(n);this._originalInput=n,this._r=o.r,this._g=o.g,this._b=o.b,this._a=o.a,this._roundA=Math.round(100*this._a)/100,this._format=r.format||o.format,this._gradientType=r.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=o.ok}function Op(n,r,o){n=je(n,255),r=je(r,255),o=je(o,255);var l,a,u=Math.max(n,r,o),f=Math.min(n,r,o),v=(u+f)/2;if(u==f)l=a=0;else{var c=u-f;switch(a=v>.5?c/(2-u-f):c/(u+f),u){case n:l=(r-o)/c+(r<o?6:0);break;case r:l=(o-n)/c+2;break;case o:l=(n-r)/c+4}l/=6}return{h:l,s:a,l:v}}function Rp(n,r,o){n=je(n,255),r=je(r,255),o=je(o,255);var l,a,u=Math.max(n,r,o),f=Math.min(n,r,o),v=u,c=u-f;if(a=u===0?0:c/u,u==f)l=0;else{switch(u){case n:l=(r-o)/c+(r<o?6:0);break;case r:l=(o-n)/c+2;break;case o:l=(n-r)/c+4}l/=6}return{h:l,s:a,v}}function _p(n,r,o,l){var a=[Ht(Math.round(n).toString(16)),Ht(Math.round(r).toString(16)),Ht(Math.round(o).toString(16))];return l&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function Tp(n,r,o,l){return[Ht(qh(l)),Ht(Math.round(n).toString(16)),Ht(Math.round(r).toString(16)),Ht(Math.round(o).toString(16))].join("")}function my(n,r){r=r===0?0:r||10;var o=te(n).toHsl();return o.s-=r/100,o.s=nl(o.s),te(o)}function vy(n,r){r=r===0?0:r||10;var o=te(n).toHsl();return o.s+=r/100,o.s=nl(o.s),te(o)}function gy(n){return te(n).desaturate(100)}function yy(n,r){r=r===0?0:r||10;var o=te(n).toHsl();return o.l+=r/100,o.l=nl(o.l),te(o)}function by(n,r){r=r===0?0:r||10;var o=te(n).toRgb();return o.r=Math.max(0,Math.min(255,o.r-Math.round(-r/100*255))),o.g=Math.max(0,Math.min(255,o.g-Math.round(-r/100*255))),o.b=Math.max(0,Math.min(255,o.b-Math.round(-r/100*255))),te(o)}function wy(n,r){r=r===0?0:r||10;var o=te(n).toHsl();return o.l-=r/100,o.l=nl(o.l),te(o)}function xy(n,r){var o=te(n).toHsl(),l=(o.h+r)%360;return o.h=l<0?360+l:l,te(o)}function Sy(n){var r=te(n).toHsl();return r.h=(r.h+180)%360,te(r)}function Mp(n,r){if(isNaN(r)||r<=0)throw new Error("Argument to polyad must be a positive number");for(var o=te(n).toHsl(),l=[te(n)],a=360/r,u=1;u<r;u++)l.push(te({h:(o.h+u*a)%360,s:o.s,l:o.l}));return l}function ky(n){var r=te(n).toHsl(),o=r.h;return[te(n),te({h:(o+72)%360,s:r.s,l:r.l}),te({h:(o+216)%360,s:r.s,l:r.l})]}function Ey(n,r,o){r=r||6,o=o||30;var l=te(n).toHsl(),a=360/o,u=[te(n)];for(l.h=(l.h-(a*r>>1)+720)%360;--r;)l.h=(l.h+a)%360,u.push(te(l));return u}function Py(n,r){r=r||6;for(var o=te(n).toHsv(),l=o.h,a=o.s,u=o.v,f=[],v=1/r;r--;)f.push(te({h:l,s:a,v:u})),u=(u+v)%1;return f}te.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var n=this.toRgb();return(299*n.r+587*n.g+114*n.b)/1e3},getLuminance:function(){var n,r,o,l=this.toRgb();return n=l.r/255,r=l.g/255,o=l.b/255,.2126*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))},setAlpha:function(n){return this._a=Hh(n),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var n=Rp(this._r,this._g,this._b);return{h:360*n.h,s:n.s,v:n.v,a:this._a}},toHsvString:function(){var n=Rp(this._r,this._g,this._b),r=Math.round(360*n.h),o=Math.round(100*n.s),l=Math.round(100*n.v);return this._a==1?"hsv("+r+", "+o+"%, "+l+"%)":"hsva("+r+", "+o+"%, "+l+"%, "+this._roundA+")"},toHsl:function(){var n=Op(this._r,this._g,this._b);return{h:360*n.h,s:n.s,l:n.l,a:this._a}},toHslString:function(){var n=Op(this._r,this._g,this._b),r=Math.round(360*n.h),o=Math.round(100*n.s),l=Math.round(100*n.l);return this._a==1?"hsl("+r+", "+o+"%, "+l+"%)":"hsla("+r+", "+o+"%, "+l+"%, "+this._roundA+")"},toHex:function(n){return _p(this._r,this._g,this._b,n)},toHexString:function(n){return"#"+this.toHex(n)},toHex8:function(n){return function(r,o,l,a,u){var f=[Ht(Math.round(r).toString(16)),Ht(Math.round(o).toString(16)),Ht(Math.round(l).toString(16)),Ht(qh(a))];return u&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)&&f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")}(this._r,this._g,this._b,this._a,n)},toHex8String:function(n){return"#"+this.toHex8(n)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*je(this._r,255))+"%",g:Math.round(100*je(this._g,255))+"%",b:Math.round(100*je(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*je(this._r,255))+"%, "+Math.round(100*je(this._g,255))+"%, "+Math.round(100*je(this._b,255))+"%)":"rgba("+Math.round(100*je(this._r,255))+"%, "+Math.round(100*je(this._g,255))+"%, "+Math.round(100*je(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Cy[_p(this._r,this._g,this._b,!0)]||!1)},toFilter:function(n){var r="#"+Tp(this._r,this._g,this._b,this._a),o=r,l=this._gradientType?"GradientType = 1, ":"";if(n){var a=te(n);o="#"+Tp(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+l+"startColorstr="+r+",endColorstr="+o+")"},toString:function(n){var r=!!n;n=n||this._format;var o=!1,l=this._a<1&&this._a>=0;return r||!l||n!=="hex"&&n!=="hex6"&&n!=="hex3"&&n!=="hex4"&&n!=="hex8"&&n!=="name"?(n==="rgb"&&(o=this.toRgbString()),n==="prgb"&&(o=this.toPercentageRgbString()),n!=="hex"&&n!=="hex6"||(o=this.toHexString()),n==="hex3"&&(o=this.toHexString(!0)),n==="hex4"&&(o=this.toHex8String(!0)),n==="hex8"&&(o=this.toHex8String()),n==="name"&&(o=this.toName()),n==="hsl"&&(o=this.toHslString()),n==="hsv"&&(o=this.toHsvString()),o||this.toHexString()):n==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return te(this.toString())},_applyModification:function(n,r){var o=n.apply(null,[this].concat([].slice.call(r)));return this._r=o._r,this._g=o._g,this._b=o._b,this.setAlpha(o._a),this},lighten:function(){return this._applyModification(yy,arguments)},brighten:function(){return this._applyModification(by,arguments)},darken:function(){return this._applyModification(wy,arguments)},desaturate:function(){return this._applyModification(my,arguments)},saturate:function(){return this._applyModification(vy,arguments)},greyscale:function(){return this._applyModification(gy,arguments)},spin:function(){return this._applyModification(xy,arguments)},_applyCombination:function(n,r){return n.apply(null,[this].concat([].slice.call(r)))},analogous:function(){return this._applyCombination(Ey,arguments)},complement:function(){return this._applyCombination(Sy,arguments)},monochromatic:function(){return this._applyCombination(Py,arguments)},splitcomplement:function(){return this._applyCombination(ky,arguments)},triad:function(){return this._applyCombination(Mp,[3])},tetrad:function(){return this._applyCombination(Mp,[4])}},te.fromRatio=function(n,r){if(Ua(n)=="object"){var o={};for(var l in n)n.hasOwnProperty(l)&&(o[l]=l==="a"?n[l]:Uo(n[l]));n=o}return te(n,r)},te.equals=function(n,r){return!(!n||!r)&&te(n).toRgbString()==te(r).toRgbString()},te.random=function(){return te.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},te.mix=function(n,r,o){o=o===0?0:o||50;var l=te(n).toRgb(),a=te(r).toRgb(),u=o/100;return te({r:(a.r-l.r)*u+l.r,g:(a.g-l.g)*u+l.g,b:(a.b-l.b)*u+l.b,a:(a.a-l.a)*u+l.a})},te.readability=function(n,r){var o=te(n),l=te(r);return(Math.max(o.getLuminance(),l.getLuminance())+.05)/(Math.min(o.getLuminance(),l.getLuminance())+.05)},te.isReadable=function(n,r,o){var l,a,u=te.readability(n,r);switch(a=!1,(l=function(f){var v,c;return v=((f=f||{level:"AA",size:"small"}).level||"AA").toUpperCase(),c=(f.size||"small").toLowerCase(),v!=="AA"&&v!=="AAA"&&(v="AA"),c!=="small"&&c!=="large"&&(c="small"),{level:v,size:c}}(o)).level+l.size){case"AAsmall":case"AAAlarge":a=u>=4.5;break;case"AAlarge":a=u>=3;break;case"AAAsmall":a=u>=7}return a},te.mostReadable=function(n,r,o){var l,a,u,f,v=null,c=0;a=(o=o||{}).includeFallbackColors,u=o.level,f=o.size;for(var p=0;p<r.length;p++)(l=te.readability(n,r[p]))>c&&(c=l,v=te(r[p]));return te.isReadable(n,v,{level:u,size:f})||!a?v:(o.includeFallbackColors=!1,te.mostReadable(n,["#fff","#000"],o))};var Mu=te.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Cy=te.hexNames=function(n){var r={};for(var o in n)n.hasOwnProperty(o)&&(r[n[o]]=o);return r}(Mu);function Hh(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function je(n,r){(function(l){return typeof l=="string"&&l.indexOf(".")!=-1&&parseFloat(l)===1})(n)&&(n="100%");var o=function(l){return typeof l=="string"&&l.indexOf("%")!=-1}(n);return n=Math.min(r,Math.max(0,parseFloat(n))),o&&(n=parseInt(n*r,10)/100),Math.abs(n-r)<1e-6?1:n%r/parseFloat(r)}function nl(n){return Math.min(1,Math.max(0,n))}function Ot(n){return parseInt(n,16)}function Ht(n){return n.length==1?"0"+n:""+n}function Uo(n){return n<=1&&(n=100*n+"%"),n}function qh(n){return Math.round(255*parseFloat(n)).toString(16)}function Np(n){return Ot(n)/255}var Vn,ya,ba,Bt=(ya="[\\s|\\(]+("+(Vn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Vn+")[,|\\s]+("+Vn+")\\s*\\)?",ba="[\\s|\\(]+("+Vn+")[,|\\s]+("+Vn+")[,|\\s]+("+Vn+")[,|\\s]+("+Vn+")\\s*\\)?",{CSS_UNIT:new RegExp(Vn),rgb:new RegExp("rgb"+ya),rgba:new RegExp("rgba"+ba),hsl:new RegExp("hsl"+ya),hsla:new RegExp("hsla"+ba),hsv:new RegExp("hsv"+ya),hsva:new RegExp("hsva"+ba),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function mn(n){return!!Bt.CSS_UNIT.exec(n)}var ei=function(n,r){var o=(typeof n=="string"?parseInt(n):n)||0;if(o>=-5&&o<=5){var l=o,a=parseFloat(r),u=a+l*(a/5)*-1;return(u==0||u<=Number.EPSILON)&&(u=.1),{animationPeriod:u+"s"}}return{animationPeriod:r}},ti=function(n,r){var o=n||{},l="";switch(r){case"small":l="12px";break;case"medium":l="16px";break;case"large":l="20px";break;default:l=void 0}var a={};if(o.fontSize){var u=o.fontSize;a=function(f,v){var c={};for(var p in f)Object.prototype.hasOwnProperty.call(f,p)&&v.indexOf(p)<0&&(c[p]=f[p]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function"){var m=0;for(p=Object.getOwnPropertySymbols(f);m<p.length;m++)v.indexOf(p[m])<0&&Object.prototype.propertyIsEnumerable.call(f,p[m])&&(c[p[m]]=f[p[m]])}return c}(o,["fontSize"]),l=u}return{fontSize:l,styles:a}},Oy={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},ni=function(n){var r=n.className,o=n.text,l=n.textColor,a=n.staticText,u=n.style;return o?oe.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(r||"").trim(),style:ke(ke(ke({},a&&Oy),l&&{color:l,mixBlendMode:"unset"}),u&&u)},typeof o=="string"&&o.length?o:"loading"):null},vn="rgb(50, 205, 50)";function ri(n,r){r===void 0&&(r=0);var o=[];return function l(a,u){return u===void 0&&(u=0),o.push.apply(o,a),o.length<u&&l(o,u),o.slice(0,u)}(n,r)}Ze(`.atom-rli-bounding-box {
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
}`);te(vn).toRgb();Array.from({length:4},function(n,r){return"--atom-phase".concat(r+1,"-rgb")});Ze(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},function(n,r){return"--commet-phase".concat(r+1,"-color")});Ze(`.OP-annulus-rli-bounding-box {
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
}`);var wa=Array.from({length:4},function(n,r){return"--OP-annulus-phase".concat(r+1,"-color")}),Ry=function(n){var r,o=ti(n==null?void 0:n.style,n==null?void 0:n.size),l=o.styles,a=o.fontSize,u=n==null?void 0:n.easing,f=ei(n==null?void 0:n.speedPlus,"1.5s").animationPeriod,v=function(p){var m={},g=wa.length;if(p instanceof Array){for(var x=ri(p,g),k=0;k<x.length&&!(k>=4);k++)m[wa[k]]=x[k];return m}try{if(typeof p!="string")throw new Error("Color String expected");for(var b=0;b<g;b++)m[wa[b]]=p}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),b=0;b<g;b++)m[wa[b]]=vn}return m}((r=n==null?void 0:n.color)!==null&&r!==void 0?r:""),c=n!=null&&n.dense?4.3:2.9;return oe.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:ke(ke(ke(ke(ke({},a&&{fontSize:a}),f&&{"--rli-animation-duration":f}),u&&{"--rli-animation-function":u}),v),l),role:"status","aria-live":"polite","aria-label":"Loading"},oe.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},oe.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},oe.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:c,strokeMiterlimit:"10"})),oe.createElement(ni,{className:"OP-annulus-text",text:n==null?void 0:n.text,textColor:n==null?void 0:n.textColor})))};function mu(n){return n&&n.Math===Math&&n}Ze(`.OP-dotted-rli-bounding-box {
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
}`);var zr=mu(typeof window=="object"&&window)||mu(typeof self=="object"&&self)||mu(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function Wh(){var n,r;return!((n=zr==null?void 0:zr.crypto)===null||n===void 0)&&n.randomUUID?zr.crypto.randomUUID():!((r=zr==null?void 0:zr.btoa)===null||r===void 0)&&r.name?zr.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var xa=Array.from({length:4},function(n,r){return"--OP-dotted-phase".concat(r+1,"-color")}),_y=function(n){var r,o=ti(n==null?void 0:n.style,n==null?void 0:n.size),l=o.styles,a=o.fontSize,u=n==null?void 0:n.easing,f=ei(n==null?void 0:n.speedPlus,"1.2s").animationPeriod,v=function(p){var m={},g=xa.length;if(p instanceof Array){for(var x=ri(p,g),k=0;k<x.length&&!(k>=4);k++)m[xa[k]]=x[k];return m}try{if(typeof p!="string")throw new Error("Color String expected");for(var b=0;b<g;b++)m[xa[b]]=p}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof p,'" with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),b=0;b<g;b++)m[xa[b]]=vn}return m}((r=n==null?void 0:n.color)!==null&&r!==void 0?r:""),c=n!=null&&n.dense?16:12;return oe.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:ke(ke(ke(ke(ke({},a&&{fontSize:a}),f&&{"--rli-animation-duration":f}),u&&{"--rli-animation-function":u}),v),l),role:"status","aria-live":"polite","aria-label":"Loading"},oe.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:c}).map(function(p,m){var g=function(b,w,S){if(w===16){var P=360*b/w,R=w-b,T=Number.parseFloat(S)/w*R*-1;return{transform:"rotate(".concat(P,"deg)"),animationDelay:"".concat(T,"s")}}return{transform:"",animationDelay:""}}(m,c,f),x=g.animationDelay,k=g.transform;return oe.createElement("span",{key:Wh(),className:"rli-d-i-b dot-shape-holder",style:k?{transform:k}:void 0},oe.createElement("span",{className:"dot",style:x?{animationDelay:x}:void 0}))}),oe.createElement(ni,{className:"OP-dotted-text",text:n==null?void 0:n.text,textColor:n==null?void 0:n.textColor})))};Ze(`.OP-spokes-rli-bounding-box {
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
}`);var Sa=Array.from({length:4},function(n,r){return"--OP-spokes-phase".concat(r+1,"-color")}),Ty=function(n){var r,o=ti(n==null?void 0:n.style,n==null?void 0:n.size),l=o.styles,a=o.fontSize,u=n==null?void 0:n.easing,f=ei(n==null?void 0:n.speedPlus,"1.2s").animationPeriod,v=function(p){var m={},g=Sa.length;if(p instanceof Array){for(var x=ri(p,g),k=0;k<x.length&&!(k>=4);k++)m[Sa[k]]=x[k];return m}try{if(typeof p!="string")throw new Error("Color String expected");for(var b=0;b<g;b++)m[Sa[b]]=p}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),b=0;b<g;b++)m[Sa[b]]=vn}return m}((r=n==null?void 0:n.color)!==null&&r!==void 0?r:""),c=n!=null&&n.dense?16:12;return oe.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:ke(ke(ke(ke(ke({},a&&{fontSize:a}),f&&{"--rli-animation-duration":f}),u&&{"--rli-animation-function":u}),v),l),role:"status","aria-live":"polite","aria-label":"Loading"},oe.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:c},function(p,m){return oe.createElement("span",{key:Wh(),className:"rli-d-i-b spoke",style:My(m,c,f)})})),oe.createElement(ni,{text:n==null?void 0:n.text,textColor:n==null?void 0:n.textColor}))};function My(n,r,o){if(r===16){var l=r-n,a=Number.parseFloat(o)/r;return{transform:"rotate(".concat(360*n/r,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((l-1)*a*-1,"s")}}}Ze(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);var ka=Array.from({length:4},function(n,r){return"--OP-annulus-dual-sectors-phase".concat(r+1,"-color")}),Ny=function(n){var r,o=ti(n==null?void 0:n.style,n==null?void 0:n.size),l=o.styles,a=o.fontSize,u=n==null?void 0:n.easing,f=ei(n==null?void 0:n.speedPlus,"1.2s").animationPeriod,v=function(p){var m={},g=ka.length;if(p instanceof Array){for(var x=ri(p,g),k=0;k<x.length&&!(k>=4);k++)m[ka[k]]=x[k];return m}try{if(typeof p!="string")throw new Error("Color String expected");for(var b=0;b<g;b++)m[ka[b]]=p}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof p,'" with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),b=0;b<g;b++)m[ka[b]]=vn}return m}((r=n==null?void 0:n.color)!==null&&r!==void 0?r:""),c=n.dense?"0.45em":"";return oe.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:ke(ke(ke(ke(ke({},a&&{fontSize:a}),f&&{"--rli-animation-duration":f}),u&&{"--rli-animation-function":u}),v),l),role:"status","aria-live":"polite","aria-label":"Loading"},oe.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},oe.createElement("span",{className:"rli-d-i-b annulus-sectors",style:ke({},c&&{borderWidth:c})}),oe.createElement(ni,{className:"OP-annulus-dual-sectors-text",text:n==null?void 0:n.text,textColor:n==null?void 0:n.textColor})))};Ze(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);var zo=Array.from({length:4},function(n,r){return["--OP-annulus-track-phase".concat(r+1,"-color"),"--OP-annulus-sector-phase".concat(r+1,"-color")]}),Ea=function(n){return n===void 0&&(n=1),.25*n},Ly=function(n){var r,o=ti(n==null?void 0:n.style,n==null?void 0:n.size),l=o.styles,a=o.fontSize,u=n==null?void 0:n.easing,f=ei(n==null?void 0:n.speedPlus,"1s").animationPeriod,v=function(p){var m={},g=zo.length;if(p instanceof Array){for(var x=ri(p,g),k=0;k<x.length&&!(k>=4);k++){var b=zo[k];try{if(!(P=te(x[k])).isValid())throw new Error("Invalid Color: ".concat(P.getOriginalInput()));var w=P.setAlpha(Ea(P.getAlpha())).toRgbString(),S=x[k];m[b[0]]=w,m[b[1]]=S}catch{S=vn,w=(P=te(vn)).setAlpha(Ea(P.getAlpha())).toRgbString(),m[b[0]]=w,m[b[1]]=S}}return m}try{var P=te(p);if(typeof p!="string")throw new Error("Color String expected");if(!P.isValid())throw new Error("Invalid Color: ".concat(P.getOriginalInput()));S=p,w=P.setAlpha(Ea(P.getAlpha())).toRgbString();for(var R=0;R<g;R++)m[(b=zo[R])[0]]=w,m[b[1]]=S}catch(T){for(T instanceof Error?console.warn("[".concat(T.message,']: Received "').concat(typeof p,'" with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),S=vn,w=(P=te(vn)).setAlpha(Ea(P.getAlpha())).toRgbString(),R=0;R<zo.length;R++)m[(b=zo[R])[0]]=w,m[b[1]]=S}return m}((r=n==null?void 0:n.color)!==null&&r!==void 0?r:""),c=n.dense?"0.45em":"";return oe.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:ke(ke(ke(ke(ke({},a&&{fontSize:a}),f&&{"--rli-animation-duration":f}),u&&{"--rli-animation-function":u}),v),l),role:"status","aria-live":"polite","aria-label":"Loading"},oe.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},oe.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:ke({},c&&{borderWidth:c})}),oe.createElement(ni,{className:"OP-annulus-sector-text",text:n==null?void 0:n.text,textColor:n==null?void 0:n.textColor})))},rl=function(n){var r=Object(n).variant,o=r===void 0?"disc":r;return o==="dotted"?oe.createElement(_y,ke({},n)):o==="spokes"?oe.createElement(Ty,ke({},n)):o==="disc"?oe.createElement(Ry,ke({},n)):o==="split-disc"?oe.createElement(Ny,ke({},n)):o==="track-disc"?oe.createElement(Ly,ke({},n)):null};Ze(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},function(n,r){return"--four-square-phase".concat(r+1,"-color")});Ze(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},function(n,r){return"--mosaic-phase".concat(r+1,"-color")});Ze(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},function(n,r){return"--riple-phase".concat(r+1,"-color")});Ze(`.pulsate-rli-bounding-box {
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
}`);Array.from({length:4},function(n,r){return"--TD-pulsate-phase".concat(r+1,"-color")});Ze(`.brick-stack-rli-bounding-box {
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
}`);Array.from({length:4},function(n,r){return"--TD-brick-stack-phase".concat(r+1,"-color")});Ze(`.bob-rli-bounding-box {
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
}`);Array.from({length:4},function(n,r){return"--TD-bob-phase".concat(r+1,"-color")});Ze(`.bounce-rli-bounding-box {
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
}`);Array.from({length:4},function(n,r){return"--TD-bounce-phase".concat(r+1,"-color")});Ze(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},function(n,r){return"--shape-phase".concat(r+1,"-color")});Ze(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},function(n,r){return"--trophySpin-phase".concat(r+1,"-color")});Ze(`.slab-rli-bounding-box {
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
}`);Array.from({length:4},function(n,r){return"--slab-phase".concat(r+1,"-color")});Ze(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},function(n,r){return"--life-line-phase".concat(r+1,"-color")});function Qh(n,r){return function(){return n.apply(r,arguments)}}const{toString:Iy}=Object.prototype,{getPrototypeOf:tc}=Object,ol=(n=>r=>{const o=Iy.call(r);return n[o]||(n[o]=o.slice(8,-1).toLowerCase())})(Object.create(null)),Qt=n=>(n=n.toLowerCase(),r=>ol(r)===n),il=n=>r=>typeof r===n,{isArray:Br}=Array,qo=il("undefined");function Dy(n){return n!==null&&!qo(n)&&n.constructor!==null&&!qo(n.constructor)&&Rt(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Kh=Qt("ArrayBuffer");function Ay(n){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(n):r=n&&n.buffer&&Kh(n.buffer),r}const zy=il("string"),Rt=il("function"),Yh=il("number"),al=n=>n!==null&&typeof n=="object",Fy=n=>n===!0||n===!1,Na=n=>{if(ol(n)!=="object")return!1;const r=tc(n);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},jy=Qt("Date"),Vy=Qt("File"),$y=Qt("Blob"),Uy=Qt("FileList"),By=n=>al(n)&&Rt(n.pipe),Hy=n=>{let r;return n&&(typeof FormData=="function"&&n instanceof FormData||Rt(n.append)&&((r=ol(n))==="formdata"||r==="object"&&Rt(n.toString)&&n.toString()==="[object FormData]"))},qy=Qt("URLSearchParams"),[Wy,Qy,Ky,Yy]=["ReadableStream","Request","Response","Headers"].map(Qt),Gy=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function oi(n,r,{allOwnKeys:o=!1}={}){if(n===null||typeof n>"u")return;let l,a;if(typeof n!="object"&&(n=[n]),Br(n))for(l=0,a=n.length;l<a;l++)r.call(null,n[l],l,n);else{const u=o?Object.getOwnPropertyNames(n):Object.keys(n),f=u.length;let v;for(l=0;l<f;l++)v=u[l],r.call(null,n[v],v,n)}}function Gh(n,r){r=r.toLowerCase();const o=Object.keys(n);let l=o.length,a;for(;l-- >0;)if(a=o[l],r===a.toLowerCase())return a;return null}const or=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Xh=n=>!qo(n)&&n!==or;function Nu(){const{caseless:n}=Xh(this)&&this||{},r={},o=(l,a)=>{const u=n&&Gh(r,a)||a;Na(r[u])&&Na(l)?r[u]=Nu(r[u],l):Na(l)?r[u]=Nu({},l):Br(l)?r[u]=l.slice():r[u]=l};for(let l=0,a=arguments.length;l<a;l++)arguments[l]&&oi(arguments[l],o);return r}const Xy=(n,r,o,{allOwnKeys:l}={})=>(oi(r,(a,u)=>{o&&Rt(a)?n[u]=Qh(a,o):n[u]=a},{allOwnKeys:l}),n),Jy=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),Zy=(n,r,o,l)=>{n.prototype=Object.create(r.prototype,l),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:r.prototype}),o&&Object.assign(n.prototype,o)},eb=(n,r,o,l)=>{let a,u,f;const v={};if(r=r||{},n==null)return r;do{for(a=Object.getOwnPropertyNames(n),u=a.length;u-- >0;)f=a[u],(!l||l(f,n,r))&&!v[f]&&(r[f]=n[f],v[f]=!0);n=o!==!1&&tc(n)}while(n&&(!o||o(n,r))&&n!==Object.prototype);return r},tb=(n,r,o)=>{n=String(n),(o===void 0||o>n.length)&&(o=n.length),o-=r.length;const l=n.indexOf(r,o);return l!==-1&&l===o},nb=n=>{if(!n)return null;if(Br(n))return n;let r=n.length;if(!Yh(r))return null;const o=new Array(r);for(;r-- >0;)o[r]=n[r];return o},rb=(n=>r=>n&&r instanceof n)(typeof Uint8Array<"u"&&tc(Uint8Array)),ob=(n,r)=>{const l=(n&&n[Symbol.iterator]).call(n);let a;for(;(a=l.next())&&!a.done;){const u=a.value;r.call(n,u[0],u[1])}},ib=(n,r)=>{let o;const l=[];for(;(o=n.exec(r))!==null;)l.push(o);return l},ab=Qt("HTMLFormElement"),lb=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(o,l,a){return l.toUpperCase()+a}),Lp=(({hasOwnProperty:n})=>(r,o)=>n.call(r,o))(Object.prototype),sb=Qt("RegExp"),Jh=(n,r)=>{const o=Object.getOwnPropertyDescriptors(n),l={};oi(o,(a,u)=>{let f;(f=r(a,u,n))!==!1&&(l[u]=f||a)}),Object.defineProperties(n,l)},ub=n=>{Jh(n,(r,o)=>{if(Rt(n)&&["arguments","caller","callee"].indexOf(o)!==-1)return!1;const l=n[o];if(Rt(l)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+o+"'")})}})},cb=(n,r)=>{const o={},l=a=>{a.forEach(u=>{o[u]=!0})};return Br(n)?l(n):l(String(n).split(r)),o},db=()=>{},fb=(n,r)=>n!=null&&Number.isFinite(n=+n)?n:r,vu="abcdefghijklmnopqrstuvwxyz",Ip="0123456789",Zh={DIGIT:Ip,ALPHA:vu,ALPHA_DIGIT:vu+vu.toUpperCase()+Ip},pb=(n=16,r=Zh.ALPHA_DIGIT)=>{let o="";const{length:l}=r;for(;n--;)o+=r[Math.random()*l|0];return o};function hb(n){return!!(n&&Rt(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const mb=n=>{const r=new Array(10),o=(l,a)=>{if(al(l)){if(r.indexOf(l)>=0)return;if(!("toJSON"in l)){r[a]=l;const u=Br(l)?[]:{};return oi(l,(f,v)=>{const c=o(f,a+1);!qo(c)&&(u[v]=c)}),r[a]=void 0,u}}return l};return o(n,0)},vb=Qt("AsyncFunction"),gb=n=>n&&(al(n)||Rt(n))&&Rt(n.then)&&Rt(n.catch),em=((n,r)=>n?setImmediate:r?((o,l)=>(or.addEventListener("message",({source:a,data:u})=>{a===or&&u===o&&l.length&&l.shift()()},!1),a=>{l.push(a),or.postMessage(o,"*")}))(`axios@${Math.random()}`,[]):o=>setTimeout(o))(typeof setImmediate=="function",Rt(or.postMessage)),yb=typeof queueMicrotask<"u"?queueMicrotask.bind(or):typeof process<"u"&&process.nextTick||em,z={isArray:Br,isArrayBuffer:Kh,isBuffer:Dy,isFormData:Hy,isArrayBufferView:Ay,isString:zy,isNumber:Yh,isBoolean:Fy,isObject:al,isPlainObject:Na,isReadableStream:Wy,isRequest:Qy,isResponse:Ky,isHeaders:Yy,isUndefined:qo,isDate:jy,isFile:Vy,isBlob:$y,isRegExp:sb,isFunction:Rt,isStream:By,isURLSearchParams:qy,isTypedArray:rb,isFileList:Uy,forEach:oi,merge:Nu,extend:Xy,trim:Gy,stripBOM:Jy,inherits:Zy,toFlatObject:eb,kindOf:ol,kindOfTest:Qt,endsWith:tb,toArray:nb,forEachEntry:ob,matchAll:ib,isHTMLForm:ab,hasOwnProperty:Lp,hasOwnProp:Lp,reduceDescriptors:Jh,freezeMethods:ub,toObjectSet:cb,toCamelCase:lb,noop:db,toFiniteNumber:fb,findKey:Gh,global:or,isContextDefined:Xh,ALPHABET:Zh,generateString:pb,isSpecCompliantForm:hb,toJSONObject:mb,isAsyncFn:vb,isThenable:gb,setImmediate:em,asap:yb};function pe(n,r,o,l,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",r&&(this.code=r),o&&(this.config=o),l&&(this.request=l),a&&(this.response=a,this.status=a.status?a.status:null)}z.inherits(pe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:z.toJSONObject(this.config),code:this.code,status:this.status}}});const tm=pe.prototype,nm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{nm[n]={value:n}});Object.defineProperties(pe,nm);Object.defineProperty(tm,"isAxiosError",{value:!0});pe.from=(n,r,o,l,a,u)=>{const f=Object.create(tm);return z.toFlatObject(n,f,function(c){return c!==Error.prototype},v=>v!=="isAxiosError"),pe.call(f,n.message,r,o,l,a),f.cause=n,f.name=n.name,u&&Object.assign(f,u),f};const bb=null;function Lu(n){return z.isPlainObject(n)||z.isArray(n)}function rm(n){return z.endsWith(n,"[]")?n.slice(0,-2):n}function Dp(n,r,o){return n?n.concat(r).map(function(a,u){return a=rm(a),!o&&u?"["+a+"]":a}).join(o?".":""):r}function wb(n){return z.isArray(n)&&!n.some(Lu)}const xb=z.toFlatObject(z,{},null,function(r){return/^is[A-Z]/.test(r)});function ll(n,r,o){if(!z.isObject(n))throw new TypeError("target must be an object");r=r||new FormData,o=z.toFlatObject(o,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,S){return!z.isUndefined(S[w])});const l=o.metaTokens,a=o.visitor||m,u=o.dots,f=o.indexes,c=(o.Blob||typeof Blob<"u"&&Blob)&&z.isSpecCompliantForm(r);if(!z.isFunction(a))throw new TypeError("visitor must be a function");function p(b){if(b===null)return"";if(z.isDate(b))return b.toISOString();if(!c&&z.isBlob(b))throw new pe("Blob is not supported. Use a Buffer instead.");return z.isArrayBuffer(b)||z.isTypedArray(b)?c&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function m(b,w,S){let P=b;if(b&&!S&&typeof b=="object"){if(z.endsWith(w,"{}"))w=l?w:w.slice(0,-2),b=JSON.stringify(b);else if(z.isArray(b)&&wb(b)||(z.isFileList(b)||z.endsWith(w,"[]"))&&(P=z.toArray(b)))return w=rm(w),P.forEach(function(T,F){!(z.isUndefined(T)||T===null)&&r.append(f===!0?Dp([w],F,u):f===null?w:w+"[]",p(T))}),!1}return Lu(b)?!0:(r.append(Dp(S,w,u),p(b)),!1)}const g=[],x=Object.assign(xb,{defaultVisitor:m,convertValue:p,isVisitable:Lu});function k(b,w){if(!z.isUndefined(b)){if(g.indexOf(b)!==-1)throw Error("Circular reference detected in "+w.join("."));g.push(b),z.forEach(b,function(P,R){(!(z.isUndefined(P)||P===null)&&a.call(r,P,z.isString(R)?R.trim():R,w,x))===!0&&k(P,w?w.concat(R):[R])}),g.pop()}}if(!z.isObject(n))throw new TypeError("data must be an object");return k(n),r}function Ap(n){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(l){return r[l]})}function nc(n,r){this._pairs=[],n&&ll(n,this,r)}const om=nc.prototype;om.append=function(r,o){this._pairs.push([r,o])};om.toString=function(r){const o=r?function(l){return r.call(this,l,Ap)}:Ap;return this._pairs.map(function(a){return o(a[0])+"="+o(a[1])},"").join("&")};function Sb(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function im(n,r,o){if(!r)return n;const l=o&&o.encode||Sb;z.isFunction(o)&&(o={serialize:o});const a=o&&o.serialize;let u;if(a?u=a(r,o):u=z.isURLSearchParams(r)?r.toString():new nc(r,o).toString(l),u){const f=n.indexOf("#");f!==-1&&(n=n.slice(0,f)),n+=(n.indexOf("?")===-1?"?":"&")+u}return n}class zp{constructor(){this.handlers=[]}use(r,o,l){return this.handlers.push({fulfilled:r,rejected:o,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){z.forEach(this.handlers,function(l){l!==null&&r(l)})}}const am={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},kb=typeof URLSearchParams<"u"?URLSearchParams:nc,Eb=typeof FormData<"u"?FormData:null,Pb=typeof Blob<"u"?Blob:null,Cb={isBrowser:!0,classes:{URLSearchParams:kb,FormData:Eb,Blob:Pb},protocols:["http","https","file","blob","url","data"]},rc=typeof window<"u"&&typeof document<"u",Iu=typeof navigator=="object"&&navigator||void 0,Ob=rc&&(!Iu||["ReactNative","NativeScript","NS"].indexOf(Iu.product)<0),Rb=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",_b=rc&&window.location.href||"http://localhost",Tb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:rc,hasStandardBrowserEnv:Ob,hasStandardBrowserWebWorkerEnv:Rb,navigator:Iu,origin:_b},Symbol.toStringTag,{value:"Module"})),dt={...Tb,...Cb};function Mb(n,r){return ll(n,new dt.classes.URLSearchParams,Object.assign({visitor:function(o,l,a,u){return dt.isNode&&z.isBuffer(o)?(this.append(l,o.toString("base64")),!1):u.defaultVisitor.apply(this,arguments)}},r))}function Nb(n){return z.matchAll(/\w+|\[(\w*)]/g,n).map(r=>r[0]==="[]"?"":r[1]||r[0])}function Lb(n){const r={},o=Object.keys(n);let l;const a=o.length;let u;for(l=0;l<a;l++)u=o[l],r[u]=n[u];return r}function lm(n){function r(o,l,a,u){let f=o[u++];if(f==="__proto__")return!0;const v=Number.isFinite(+f),c=u>=o.length;return f=!f&&z.isArray(a)?a.length:f,c?(z.hasOwnProp(a,f)?a[f]=[a[f],l]:a[f]=l,!v):((!a[f]||!z.isObject(a[f]))&&(a[f]=[]),r(o,l,a[f],u)&&z.isArray(a[f])&&(a[f]=Lb(a[f])),!v)}if(z.isFormData(n)&&z.isFunction(n.entries)){const o={};return z.forEachEntry(n,(l,a)=>{r(Nb(l),a,o,0)}),o}return null}function Ib(n,r,o){if(z.isString(n))try{return(r||JSON.parse)(n),z.trim(n)}catch(l){if(l.name!=="SyntaxError")throw l}return(o||JSON.stringify)(n)}const ii={transitional:am,adapter:["xhr","http","fetch"],transformRequest:[function(r,o){const l=o.getContentType()||"",a=l.indexOf("application/json")>-1,u=z.isObject(r);if(u&&z.isHTMLForm(r)&&(r=new FormData(r)),z.isFormData(r))return a?JSON.stringify(lm(r)):r;if(z.isArrayBuffer(r)||z.isBuffer(r)||z.isStream(r)||z.isFile(r)||z.isBlob(r)||z.isReadableStream(r))return r;if(z.isArrayBufferView(r))return r.buffer;if(z.isURLSearchParams(r))return o.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let v;if(u){if(l.indexOf("application/x-www-form-urlencoded")>-1)return Mb(r,this.formSerializer).toString();if((v=z.isFileList(r))||l.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return ll(v?{"files[]":r}:r,c&&new c,this.formSerializer)}}return u||a?(o.setContentType("application/json",!1),Ib(r)):r}],transformResponse:[function(r){const o=this.transitional||ii.transitional,l=o&&o.forcedJSONParsing,a=this.responseType==="json";if(z.isResponse(r)||z.isReadableStream(r))return r;if(r&&z.isString(r)&&(l&&!this.responseType||a)){const f=!(o&&o.silentJSONParsing)&&a;try{return JSON.parse(r)}catch(v){if(f)throw v.name==="SyntaxError"?pe.from(v,pe.ERR_BAD_RESPONSE,this,null,this.response):v}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:dt.classes.FormData,Blob:dt.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};z.forEach(["delete","get","head","post","put","patch"],n=>{ii.headers[n]={}});const Db=z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ab=n=>{const r={};let o,l,a;return n&&n.split(`
`).forEach(function(f){a=f.indexOf(":"),o=f.substring(0,a).trim().toLowerCase(),l=f.substring(a+1).trim(),!(!o||r[o]&&Db[o])&&(o==="set-cookie"?r[o]?r[o].push(l):r[o]=[l]:r[o]=r[o]?r[o]+", "+l:l)}),r},Fp=Symbol("internals");function Fo(n){return n&&String(n).trim().toLowerCase()}function La(n){return n===!1||n==null?n:z.isArray(n)?n.map(La):String(n)}function zb(n){const r=Object.create(null),o=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=o.exec(n);)r[l[1]]=l[2];return r}const Fb=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function gu(n,r,o,l,a){if(z.isFunction(l))return l.call(this,r,o);if(a&&(r=o),!!z.isString(r)){if(z.isString(l))return r.indexOf(l)!==-1;if(z.isRegExp(l))return l.test(r)}}function jb(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,o,l)=>o.toUpperCase()+l)}function Vb(n,r){const o=z.toCamelCase(" "+r);["get","set","has"].forEach(l=>{Object.defineProperty(n,l+o,{value:function(a,u,f){return this[l].call(this,r,a,u,f)},configurable:!0})})}class xt{constructor(r){r&&this.set(r)}set(r,o,l){const a=this;function u(v,c,p){const m=Fo(c);if(!m)throw new Error("header name must be a non-empty string");const g=z.findKey(a,m);(!g||a[g]===void 0||p===!0||p===void 0&&a[g]!==!1)&&(a[g||c]=La(v))}const f=(v,c)=>z.forEach(v,(p,m)=>u(p,m,c));if(z.isPlainObject(r)||r instanceof this.constructor)f(r,o);else if(z.isString(r)&&(r=r.trim())&&!Fb(r))f(Ab(r),o);else if(z.isHeaders(r))for(const[v,c]of r.entries())u(c,v,l);else r!=null&&u(o,r,l);return this}get(r,o){if(r=Fo(r),r){const l=z.findKey(this,r);if(l){const a=this[l];if(!o)return a;if(o===!0)return zb(a);if(z.isFunction(o))return o.call(this,a,l);if(z.isRegExp(o))return o.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,o){if(r=Fo(r),r){const l=z.findKey(this,r);return!!(l&&this[l]!==void 0&&(!o||gu(this,this[l],l,o)))}return!1}delete(r,o){const l=this;let a=!1;function u(f){if(f=Fo(f),f){const v=z.findKey(l,f);v&&(!o||gu(l,l[v],v,o))&&(delete l[v],a=!0)}}return z.isArray(r)?r.forEach(u):u(r),a}clear(r){const o=Object.keys(this);let l=o.length,a=!1;for(;l--;){const u=o[l];(!r||gu(this,this[u],u,r,!0))&&(delete this[u],a=!0)}return a}normalize(r){const o=this,l={};return z.forEach(this,(a,u)=>{const f=z.findKey(l,u);if(f){o[f]=La(a),delete o[u];return}const v=r?jb(u):String(u).trim();v!==u&&delete o[u],o[v]=La(a),l[v]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const o=Object.create(null);return z.forEach(this,(l,a)=>{l!=null&&l!==!1&&(o[a]=r&&z.isArray(l)?l.join(", "):l)}),o}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,o])=>r+": "+o).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...o){const l=new this(r);return o.forEach(a=>l.set(a)),l}static accessor(r){const l=(this[Fp]=this[Fp]={accessors:{}}).accessors,a=this.prototype;function u(f){const v=Fo(f);l[v]||(Vb(a,f),l[v]=!0)}return z.isArray(r)?r.forEach(u):u(r),this}}xt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);z.reduceDescriptors(xt.prototype,({value:n},r)=>{let o=r[0].toUpperCase()+r.slice(1);return{get:()=>n,set(l){this[o]=l}}});z.freezeMethods(xt);function yu(n,r){const o=this||ii,l=r||o,a=xt.from(l.headers);let u=l.data;return z.forEach(n,function(v){u=v.call(o,u,a.normalize(),r?r.status:void 0)}),a.normalize(),u}function sm(n){return!!(n&&n.__CANCEL__)}function Hr(n,r,o){pe.call(this,n??"canceled",pe.ERR_CANCELED,r,o),this.name="CanceledError"}z.inherits(Hr,pe,{__CANCEL__:!0});function um(n,r,o){const l=o.config.validateStatus;!o.status||!l||l(o.status)?n(o):r(new pe("Request failed with status code "+o.status,[pe.ERR_BAD_REQUEST,pe.ERR_BAD_RESPONSE][Math.floor(o.status/100)-4],o.config,o.request,o))}function $b(n){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return r&&r[1]||""}function Ub(n,r){n=n||10;const o=new Array(n),l=new Array(n);let a=0,u=0,f;return r=r!==void 0?r:1e3,function(c){const p=Date.now(),m=l[u];f||(f=p),o[a]=c,l[a]=p;let g=u,x=0;for(;g!==a;)x+=o[g++],g=g%n;if(a=(a+1)%n,a===u&&(u=(u+1)%n),p-f<r)return;const k=m&&p-m;return k?Math.round(x*1e3/k):void 0}}function Bb(n,r){let o=0,l=1e3/r,a,u;const f=(p,m=Date.now())=>{o=m,a=null,u&&(clearTimeout(u),u=null),n.apply(null,p)};return[(...p)=>{const m=Date.now(),g=m-o;g>=l?f(p,m):(a=p,u||(u=setTimeout(()=>{u=null,f(a)},l-g)))},()=>a&&f(a)]}const Ba=(n,r,o=3)=>{let l=0;const a=Ub(50,250);return Bb(u=>{const f=u.loaded,v=u.lengthComputable?u.total:void 0,c=f-l,p=a(c),m=f<=v;l=f;const g={loaded:f,total:v,progress:v?f/v:void 0,bytes:c,rate:p||void 0,estimated:p&&v&&m?(v-f)/p:void 0,event:u,lengthComputable:v!=null,[r?"download":"upload"]:!0};n(g)},o)},jp=(n,r)=>{const o=n!=null;return[l=>r[0]({lengthComputable:o,total:n,loaded:l}),r[1]]},Vp=n=>(...r)=>z.asap(()=>n(...r)),Hb=dt.hasStandardBrowserEnv?((n,r)=>o=>(o=new URL(o,dt.origin),n.protocol===o.protocol&&n.host===o.host&&(r||n.port===o.port)))(new URL(dt.origin),dt.navigator&&/(msie|trident)/i.test(dt.navigator.userAgent)):()=>!0,qb=dt.hasStandardBrowserEnv?{write(n,r,o,l,a,u){const f=[n+"="+encodeURIComponent(r)];z.isNumber(o)&&f.push("expires="+new Date(o).toGMTString()),z.isString(l)&&f.push("path="+l),z.isString(a)&&f.push("domain="+a),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Wb(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Qb(n,r){return r?n.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):n}function cm(n,r){return n&&!Wb(r)?Qb(n,r):r}const $p=n=>n instanceof xt?{...n}:n;function ar(n,r){r=r||{};const o={};function l(p,m,g,x){return z.isPlainObject(p)&&z.isPlainObject(m)?z.merge.call({caseless:x},p,m):z.isPlainObject(m)?z.merge({},m):z.isArray(m)?m.slice():m}function a(p,m,g,x){if(z.isUndefined(m)){if(!z.isUndefined(p))return l(void 0,p,g,x)}else return l(p,m,g,x)}function u(p,m){if(!z.isUndefined(m))return l(void 0,m)}function f(p,m){if(z.isUndefined(m)){if(!z.isUndefined(p))return l(void 0,p)}else return l(void 0,m)}function v(p,m,g){if(g in r)return l(p,m);if(g in n)return l(void 0,p)}const c={url:u,method:u,data:u,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:v,headers:(p,m,g)=>a($p(p),$p(m),g,!0)};return z.forEach(Object.keys(Object.assign({},n,r)),function(m){const g=c[m]||a,x=g(n[m],r[m],m);z.isUndefined(x)&&g!==v||(o[m]=x)}),o}const dm=n=>{const r=ar({},n);let{data:o,withXSRFToken:l,xsrfHeaderName:a,xsrfCookieName:u,headers:f,auth:v}=r;r.headers=f=xt.from(f),r.url=im(cm(r.baseURL,r.url),n.params,n.paramsSerializer),v&&f.set("Authorization","Basic "+btoa((v.username||"")+":"+(v.password?unescape(encodeURIComponent(v.password)):"")));let c;if(z.isFormData(o)){if(dt.hasStandardBrowserEnv||dt.hasStandardBrowserWebWorkerEnv)f.setContentType(void 0);else if((c=f.getContentType())!==!1){const[p,...m]=c?c.split(";").map(g=>g.trim()).filter(Boolean):[];f.setContentType([p||"multipart/form-data",...m].join("; "))}}if(dt.hasStandardBrowserEnv&&(l&&z.isFunction(l)&&(l=l(r)),l||l!==!1&&Hb(r.url))){const p=a&&u&&qb.read(u);p&&f.set(a,p)}return r},Kb=typeof XMLHttpRequest<"u",Yb=Kb&&function(n){return new Promise(function(o,l){const a=dm(n);let u=a.data;const f=xt.from(a.headers).normalize();let{responseType:v,onUploadProgress:c,onDownloadProgress:p}=a,m,g,x,k,b;function w(){k&&k(),b&&b(),a.cancelToken&&a.cancelToken.unsubscribe(m),a.signal&&a.signal.removeEventListener("abort",m)}let S=new XMLHttpRequest;S.open(a.method.toUpperCase(),a.url,!0),S.timeout=a.timeout;function P(){if(!S)return;const T=xt.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),L={data:!v||v==="text"||v==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:T,config:n,request:S};um(function(U){o(U),w()},function(U){l(U),w()},L),S=null}"onloadend"in S?S.onloadend=P:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(P)},S.onabort=function(){S&&(l(new pe("Request aborted",pe.ECONNABORTED,n,S)),S=null)},S.onerror=function(){l(new pe("Network Error",pe.ERR_NETWORK,n,S)),S=null},S.ontimeout=function(){let F=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const L=a.transitional||am;a.timeoutErrorMessage&&(F=a.timeoutErrorMessage),l(new pe(F,L.clarifyTimeoutError?pe.ETIMEDOUT:pe.ECONNABORTED,n,S)),S=null},u===void 0&&f.setContentType(null),"setRequestHeader"in S&&z.forEach(f.toJSON(),function(F,L){S.setRequestHeader(L,F)}),z.isUndefined(a.withCredentials)||(S.withCredentials=!!a.withCredentials),v&&v!=="json"&&(S.responseType=a.responseType),p&&([x,b]=Ba(p,!0),S.addEventListener("progress",x)),c&&S.upload&&([g,k]=Ba(c),S.upload.addEventListener("progress",g),S.upload.addEventListener("loadend",k)),(a.cancelToken||a.signal)&&(m=T=>{S&&(l(!T||T.type?new Hr(null,n,S):T),S.abort(),S=null)},a.cancelToken&&a.cancelToken.subscribe(m),a.signal&&(a.signal.aborted?m():a.signal.addEventListener("abort",m)));const R=$b(a.url);if(R&&dt.protocols.indexOf(R)===-1){l(new pe("Unsupported protocol "+R+":",pe.ERR_BAD_REQUEST,n));return}S.send(u||null)})},Gb=(n,r)=>{const{length:o}=n=n?n.filter(Boolean):[];if(r||o){let l=new AbortController,a;const u=function(p){if(!a){a=!0,v();const m=p instanceof Error?p:this.reason;l.abort(m instanceof pe?m:new Hr(m instanceof Error?m.message:m))}};let f=r&&setTimeout(()=>{f=null,u(new pe(`timeout ${r} of ms exceeded`,pe.ETIMEDOUT))},r);const v=()=>{n&&(f&&clearTimeout(f),f=null,n.forEach(p=>{p.unsubscribe?p.unsubscribe(u):p.removeEventListener("abort",u)}),n=null)};n.forEach(p=>p.addEventListener("abort",u));const{signal:c}=l;return c.unsubscribe=()=>z.asap(v),c}},Xb=function*(n,r){let o=n.byteLength;if(o<r){yield n;return}let l=0,a;for(;l<o;)a=l+r,yield n.slice(l,a),l=a},Jb=async function*(n,r){for await(const o of Zb(n))yield*Xb(o,r)},Zb=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const r=n.getReader();try{for(;;){const{done:o,value:l}=await r.read();if(o)break;yield l}}finally{await r.cancel()}},Up=(n,r,o,l)=>{const a=Jb(n,r);let u=0,f,v=c=>{f||(f=!0,l&&l(c))};return new ReadableStream({async pull(c){try{const{done:p,value:m}=await a.next();if(p){v(),c.close();return}let g=m.byteLength;if(o){let x=u+=g;o(x)}c.enqueue(new Uint8Array(m))}catch(p){throw v(p),p}},cancel(c){return v(c),a.return()}},{highWaterMark:2})},sl=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",fm=sl&&typeof ReadableStream=="function",ew=sl&&(typeof TextEncoder=="function"?(n=>r=>n.encode(r))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),pm=(n,...r)=>{try{return!!n(...r)}catch{return!1}},tw=fm&&pm(()=>{let n=!1;const r=new Request(dt.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!r}),Bp=64*1024,Du=fm&&pm(()=>z.isReadableStream(new Response("").body)),Ha={stream:Du&&(n=>n.body)};sl&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(r=>{!Ha[r]&&(Ha[r]=z.isFunction(n[r])?o=>o[r]():(o,l)=>{throw new pe(`Response type '${r}' is not supported`,pe.ERR_NOT_SUPPORT,l)})})})(new Response);const nw=async n=>{if(n==null)return 0;if(z.isBlob(n))return n.size;if(z.isSpecCompliantForm(n))return(await new Request(dt.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(z.isArrayBufferView(n)||z.isArrayBuffer(n))return n.byteLength;if(z.isURLSearchParams(n)&&(n=n+""),z.isString(n))return(await ew(n)).byteLength},rw=async(n,r)=>{const o=z.toFiniteNumber(n.getContentLength());return o??nw(r)},ow=sl&&(async n=>{let{url:r,method:o,data:l,signal:a,cancelToken:u,timeout:f,onDownloadProgress:v,onUploadProgress:c,responseType:p,headers:m,withCredentials:g="same-origin",fetchOptions:x}=dm(n);p=p?(p+"").toLowerCase():"text";let k=Gb([a,u&&u.toAbortSignal()],f),b;const w=k&&k.unsubscribe&&(()=>{k.unsubscribe()});let S;try{if(c&&tw&&o!=="get"&&o!=="head"&&(S=await rw(m,l))!==0){let L=new Request(r,{method:"POST",body:l,duplex:"half"}),$;if(z.isFormData(l)&&($=L.headers.get("content-type"))&&m.setContentType($),L.body){const[U,Q]=jp(S,Ba(Vp(c)));l=Up(L.body,Bp,U,Q)}}z.isString(g)||(g=g?"include":"omit");const P="credentials"in Request.prototype;b=new Request(r,{...x,signal:k,method:o.toUpperCase(),headers:m.normalize().toJSON(),body:l,duplex:"half",credentials:P?g:void 0});let R=await fetch(b);const T=Du&&(p==="stream"||p==="response");if(Du&&(v||T&&w)){const L={};["status","statusText","headers"].forEach(X=>{L[X]=R[X]});const $=z.toFiniteNumber(R.headers.get("content-length")),[U,Q]=v&&jp($,Ba(Vp(v),!0))||[];R=new Response(Up(R.body,Bp,U,()=>{Q&&Q(),w&&w()}),L)}p=p||"text";let F=await Ha[z.findKey(Ha,p)||"text"](R,n);return!T&&w&&w(),await new Promise((L,$)=>{um(L,$,{data:F,headers:xt.from(R.headers),status:R.status,statusText:R.statusText,config:n,request:b})})}catch(P){throw w&&w(),P&&P.name==="TypeError"&&/fetch/i.test(P.message)?Object.assign(new pe("Network Error",pe.ERR_NETWORK,n,b),{cause:P.cause||P}):pe.from(P,P&&P.code,n,b)}}),Au={http:bb,xhr:Yb,fetch:ow};z.forEach(Au,(n,r)=>{if(n){try{Object.defineProperty(n,"name",{value:r})}catch{}Object.defineProperty(n,"adapterName",{value:r})}});const Hp=n=>`- ${n}`,iw=n=>z.isFunction(n)||n===null||n===!1,hm={getAdapter:n=>{n=z.isArray(n)?n:[n];const{length:r}=n;let o,l;const a={};for(let u=0;u<r;u++){o=n[u];let f;if(l=o,!iw(o)&&(l=Au[(f=String(o)).toLowerCase()],l===void 0))throw new pe(`Unknown adapter '${f}'`);if(l)break;a[f||"#"+u]=l}if(!l){const u=Object.entries(a).map(([v,c])=>`adapter ${v} `+(c===!1?"is not supported by the environment":"is not available in the build"));let f=r?u.length>1?`since :
`+u.map(Hp).join(`
`):" "+Hp(u[0]):"as no adapter specified";throw new pe("There is no suitable adapter to dispatch the request "+f,"ERR_NOT_SUPPORT")}return l},adapters:Au};function bu(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Hr(null,n)}function qp(n){return bu(n),n.headers=xt.from(n.headers),n.data=yu.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),hm.getAdapter(n.adapter||ii.adapter)(n).then(function(l){return bu(n),l.data=yu.call(n,n.transformResponse,l),l.headers=xt.from(l.headers),l},function(l){return sm(l)||(bu(n),l&&l.response&&(l.response.data=yu.call(n,n.transformResponse,l.response),l.response.headers=xt.from(l.response.headers))),Promise.reject(l)})}const mm="1.7.9",ul={};["object","boolean","number","function","string","symbol"].forEach((n,r)=>{ul[n]=function(l){return typeof l===n||"a"+(r<1?"n ":" ")+n}});const Wp={};ul.transitional=function(r,o,l){function a(u,f){return"[Axios v"+mm+"] Transitional option '"+u+"'"+f+(l?". "+l:"")}return(u,f,v)=>{if(r===!1)throw new pe(a(f," has been removed"+(o?" in "+o:"")),pe.ERR_DEPRECATED);return o&&!Wp[f]&&(Wp[f]=!0,console.warn(a(f," has been deprecated since v"+o+" and will be removed in the near future"))),r?r(u,f,v):!0}};ul.spelling=function(r){return(o,l)=>(console.warn(`${l} is likely a misspelling of ${r}`),!0)};function aw(n,r,o){if(typeof n!="object")throw new pe("options must be an object",pe.ERR_BAD_OPTION_VALUE);const l=Object.keys(n);let a=l.length;for(;a-- >0;){const u=l[a],f=r[u];if(f){const v=n[u],c=v===void 0||f(v,u,n);if(c!==!0)throw new pe("option "+u+" must be "+c,pe.ERR_BAD_OPTION_VALUE);continue}if(o!==!0)throw new pe("Unknown option "+u,pe.ERR_BAD_OPTION)}}const Ia={assertOptions:aw,validators:ul},Zt=Ia.validators;class ir{constructor(r){this.defaults=r,this.interceptors={request:new zp,response:new zp}}async request(r,o){try{return await this._request(r,o)}catch(l){if(l instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const u=a.stack?a.stack.replace(/^.+\n/,""):"";try{l.stack?u&&!String(l.stack).endsWith(u.replace(/^.+\n.+\n/,""))&&(l.stack+=`
`+u):l.stack=u}catch{}}throw l}}_request(r,o){typeof r=="string"?(o=o||{},o.url=r):o=r||{},o=ar(this.defaults,o);const{transitional:l,paramsSerializer:a,headers:u}=o;l!==void 0&&Ia.assertOptions(l,{silentJSONParsing:Zt.transitional(Zt.boolean),forcedJSONParsing:Zt.transitional(Zt.boolean),clarifyTimeoutError:Zt.transitional(Zt.boolean)},!1),a!=null&&(z.isFunction(a)?o.paramsSerializer={serialize:a}:Ia.assertOptions(a,{encode:Zt.function,serialize:Zt.function},!0)),Ia.assertOptions(o,{baseUrl:Zt.spelling("baseURL"),withXsrfToken:Zt.spelling("withXSRFToken")},!0),o.method=(o.method||this.defaults.method||"get").toLowerCase();let f=u&&z.merge(u.common,u[o.method]);u&&z.forEach(["delete","get","head","post","put","patch","common"],b=>{delete u[b]}),o.headers=xt.concat(f,u);const v=[];let c=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(o)===!1||(c=c&&w.synchronous,v.unshift(w.fulfilled,w.rejected))});const p=[];this.interceptors.response.forEach(function(w){p.push(w.fulfilled,w.rejected)});let m,g=0,x;if(!c){const b=[qp.bind(this),void 0];for(b.unshift.apply(b,v),b.push.apply(b,p),x=b.length,m=Promise.resolve(o);g<x;)m=m.then(b[g++],b[g++]);return m}x=v.length;let k=o;for(g=0;g<x;){const b=v[g++],w=v[g++];try{k=b(k)}catch(S){w.call(this,S);break}}try{m=qp.call(this,k)}catch(b){return Promise.reject(b)}for(g=0,x=p.length;g<x;)m=m.then(p[g++],p[g++]);return m}getUri(r){r=ar(this.defaults,r);const o=cm(r.baseURL,r.url);return im(o,r.params,r.paramsSerializer)}}z.forEach(["delete","get","head","options"],function(r){ir.prototype[r]=function(o,l){return this.request(ar(l||{},{method:r,url:o,data:(l||{}).data}))}});z.forEach(["post","put","patch"],function(r){function o(l){return function(u,f,v){return this.request(ar(v||{},{method:r,headers:l?{"Content-Type":"multipart/form-data"}:{},url:u,data:f}))}}ir.prototype[r]=o(),ir.prototype[r+"Form"]=o(!0)});class oc{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let o;this.promise=new Promise(function(u){o=u});const l=this;this.promise.then(a=>{if(!l._listeners)return;let u=l._listeners.length;for(;u-- >0;)l._listeners[u](a);l._listeners=null}),this.promise.then=a=>{let u;const f=new Promise(v=>{l.subscribe(v),u=v}).then(a);return f.cancel=function(){l.unsubscribe(u)},f},r(function(u,f,v){l.reason||(l.reason=new Hr(u,f,v),o(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const o=this._listeners.indexOf(r);o!==-1&&this._listeners.splice(o,1)}toAbortSignal(){const r=new AbortController,o=l=>{r.abort(l)};return this.subscribe(o),r.signal.unsubscribe=()=>this.unsubscribe(o),r.signal}static source(){let r;return{token:new oc(function(a){r=a}),cancel:r}}}function lw(n){return function(o){return n.apply(null,o)}}function sw(n){return z.isObject(n)&&n.isAxiosError===!0}const zu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(zu).forEach(([n,r])=>{zu[r]=n});function vm(n){const r=new ir(n),o=Qh(ir.prototype.request,r);return z.extend(o,ir.prototype,r,{allOwnKeys:!0}),z.extend(o,r,null,{allOwnKeys:!0}),o.create=function(a){return vm(ar(n,a))},o}const Ge=vm(ii);Ge.Axios=ir;Ge.CanceledError=Hr;Ge.CancelToken=oc;Ge.isCancel=sm;Ge.VERSION=mm;Ge.toFormData=ll;Ge.AxiosError=pe;Ge.Cancel=Ge.CanceledError;Ge.all=function(r){return Promise.all(r)};Ge.spread=lw;Ge.isAxiosError=sw;Ge.mergeConfig=ar;Ge.AxiosHeaders=xt;Ge.formToJSON=n=>lm(z.isHTMLForm(n)?new FormData(n):n);Ge.getAdapter=hm.getAdapter;Ge.HttpStatusCode=zu;Ge.default=Ge;class cl{constructor(r){this.apiClient=Ge.create({baseURL:r,timeout:3e4})}async get(r,o={}){try{return(await this.apiClient.get(r,{params:o})).data}catch(l){this.handleError(l)}}async post(r,o={}){try{return(await this.apiClient.post(r,o)).data}catch(l){this.handleError(l)}}handleError(r){throw r}}class qt{}Lo(qt,"TEST_BASE_URL","https://run.mocky.io/"),Lo(qt,"TEST_REGISTER","v3/e45e52dc-c1c6-4009-88d0-d531530dd386"),Lo(qt,"BASE_URL","https://0e6c-111-250-39-133.ngrok-free.app/"),Lo(qt,"REGISTER","api/register");const uw=new cl(qt.TEST_BASE_URL);function cw(){return N.jsx("div",{className:"loader-ann",children:N.jsx(rl,{variant:"spokes",color:"#f10a0a",size:"medium",text:"",textColor:""})})}function dw(){const[n,r]=O.useState(!1),[o,l]=O.useState({announcement:""}),a=f=>{const{name:v,value:c}=f.target;l({...o,[v]:c})},u=async f=>{f.preventDefault(),r(!0);const v=await uw.post(qt.TEST_REGISTER,o);console.log("response: ",v);try{v.code==200?alert("Registration successful"):(console.log("code: ",v.code),alert(v.error_msg))}catch{console.log("code: ",v.code),alert(v.data.error_msg)}finally{r(!1),l({announcement:""})}};return N.jsxs("div",{children:[N.jsx("h1",{children:"Announcement"}),N.jsxs("form",{className:"form-ann",onSubmit:u,children:[N.jsx("textarea",{className:"textarea-ann",type:"text",name:"announcement",value:o.announcement,onChange:a,required:"required"}),N.jsx("button",{type:"submit",className:"btn-ann",disabled:n,children:n?"Submit...":"Submit"}),n&&N.jsx(cw,{})]})]})}function fw(n){return Zo({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm-19.42,94.71a8,8,0,1,1-13,9.41L184,141.61l-7.63,10.51a8,8,0,1,1-13-9.41l7.64-10.5-12.36-4a8,8,0,1,1,5-15.21L176,117V104a8,8,0,0,1,16,0v13l12.35-4a8,8,0,0,1,5,15.21l-12.36,4Zm-72,0a8,8,0,1,1-13,9.41L112,141.61l-7.63,10.51a8,8,0,1,1-13-9.41l7.64-10.5-12.36-4a8,8,0,1,1,5-15.21L104,117V104a8,8,0,0,1,16,0v13l12.35-4a8,8,0,1,1,5,15.21l-12.36,4ZM64,88v80a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"},child:[]}]})(n)}const pw=new cl(qt.TEST_BASE_URL);function Qp({type:n,name:r,value:o,handleChange:l,required:a}){return N.jsx("div",{className:"form-login-group",children:N.jsx("input",{className:"input-login",type:n,name:r,value:o,onChange:l,required:a})})}function hw(){return N.jsx("div",{className:"loader-container",children:N.jsx(rl,{variant:"spokes",color:"#f10a0a",size:"medium",text:"",textColor:""})})}function mw(){const n=Xo(),[r,o]=O.useState(!1),[l,a]=O.useState({account:"",password:""}),u=v=>{const{name:c,value:p}=v.target;a({...l,[c]:p})},f=async v=>{v.preventDefault(),console.log("code: ",l),o(!0);const c=await pw.post(qt.TEST_REGISTER,l);try{c.code==200?(alert("Registration successful"),n("/home")):(console.log("code: ",c.code),alert(c.error_msg))}catch{console.log("code: ",c.code),alert(c.data.error_msg)}finally{o(!1)}};return N.jsxs("div",{className:"login-container",children:[N.jsx("h1",{children:"Ninja Manager Login"}),N.jsx("form",{className:"form-login",onSubmit:f,children:N.jsxs("div",{children:[N.jsxs("div",{className:"form-login-edit",children:[N.jsx(ly,{style:{fontSize:"32px",color:"#555"}}),N.jsx(Qp,{type:"text",name:"account",value:l.account,handleChange:u,required:!0})]}),N.jsxs("div",{className:"form-login-edit",children:[N.jsx(fw,{style:{fontSize:"32px",color:"#555"}}),N.jsx(Qp,{type:"password",name:"password",value:l.password,handleChange:u,required:!0})]}),N.jsx("button",{type:"submit",className:"submit-login-btn",disabled:r,children:r?"Logining...":"Login"}),r&&N.jsx(hw,{})]})})]})}var vw=Object.defineProperty,qa=Object.getOwnPropertySymbols,gm=Object.prototype.hasOwnProperty,ym=Object.prototype.propertyIsEnumerable,Kp=(n,r,o)=>r in n?vw(n,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[r]=o,Fu=(n,r)=>{for(var o in r||(r={}))gm.call(r,o)&&Kp(n,o,r[o]);if(qa)for(var o of qa(r))ym.call(r,o)&&Kp(n,o,r[o]);return n},ju=(n,r)=>{var o={};for(var l in n)gm.call(n,l)&&r.indexOf(l)<0&&(o[l]=n[l]);if(n!=null&&qa)for(var l of qa(n))r.indexOf(l)<0&&ym.call(n,l)&&(o[l]=n[l]);return o};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var lr;(n=>{const r=class Se{constructor(c,p,m,g){if(this.version=c,this.errorCorrectionLevel=p,this.modules=[],this.isFunction=[],c<Se.MIN_VERSION||c>Se.MAX_VERSION)throw new RangeError("Version value out of range");if(g<-1||g>7)throw new RangeError("Mask value out of range");this.size=c*4+17;let x=[];for(let b=0;b<this.size;b++)x.push(!1);for(let b=0;b<this.size;b++)this.modules.push(x.slice()),this.isFunction.push(x.slice());this.drawFunctionPatterns();const k=this.addEccAndInterleave(m);if(this.drawCodewords(k),g==-1){let b=1e9;for(let w=0;w<8;w++){this.applyMask(w),this.drawFormatBits(w);const S=this.getPenaltyScore();S<b&&(g=w,b=S),this.applyMask(w)}}a(0<=g&&g<=7),this.mask=g,this.applyMask(g),this.drawFormatBits(g),this.isFunction=[]}static encodeText(c,p){const m=n.QrSegment.makeSegments(c);return Se.encodeSegments(m,p)}static encodeBinary(c,p){const m=n.QrSegment.makeBytes(c);return Se.encodeSegments([m],p)}static encodeSegments(c,p,m=1,g=40,x=-1,k=!0){if(!(Se.MIN_VERSION<=m&&m<=g&&g<=Se.MAX_VERSION)||x<-1||x>7)throw new RangeError("Invalid value");let b,w;for(b=m;;b++){const T=Se.getNumDataCodewords(b,p)*8,F=f.getTotalBits(c,b);if(F<=T){w=F;break}if(b>=g)throw new RangeError("Data too long")}for(const T of[Se.Ecc.MEDIUM,Se.Ecc.QUARTILE,Se.Ecc.HIGH])k&&w<=Se.getNumDataCodewords(b,T)*8&&(p=T);let S=[];for(const T of c){o(T.mode.modeBits,4,S),o(T.numChars,T.mode.numCharCountBits(b),S);for(const F of T.getData())S.push(F)}a(S.length==w);const P=Se.getNumDataCodewords(b,p)*8;a(S.length<=P),o(0,Math.min(4,P-S.length),S),o(0,(8-S.length%8)%8,S),a(S.length%8==0);for(let T=236;S.length<P;T^=253)o(T,8,S);let R=[];for(;R.length*8<S.length;)R.push(0);return S.forEach((T,F)=>R[F>>>3]|=T<<7-(F&7)),new Se(b,p,R,x)}getModule(c,p){return 0<=c&&c<this.size&&0<=p&&p<this.size&&this.modules[p][c]}getModules(){return this.modules}drawFunctionPatterns(){for(let m=0;m<this.size;m++)this.setFunctionModule(6,m,m%2==0),this.setFunctionModule(m,6,m%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const c=this.getAlignmentPatternPositions(),p=c.length;for(let m=0;m<p;m++)for(let g=0;g<p;g++)m==0&&g==0||m==0&&g==p-1||m==p-1&&g==0||this.drawAlignmentPattern(c[m],c[g]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(c){const p=this.errorCorrectionLevel.formatBits<<3|c;let m=p;for(let x=0;x<10;x++)m=m<<1^(m>>>9)*1335;const g=(p<<10|m)^21522;a(g>>>15==0);for(let x=0;x<=5;x++)this.setFunctionModule(8,x,l(g,x));this.setFunctionModule(8,7,l(g,6)),this.setFunctionModule(8,8,l(g,7)),this.setFunctionModule(7,8,l(g,8));for(let x=9;x<15;x++)this.setFunctionModule(14-x,8,l(g,x));for(let x=0;x<8;x++)this.setFunctionModule(this.size-1-x,8,l(g,x));for(let x=8;x<15;x++)this.setFunctionModule(8,this.size-15+x,l(g,x));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let c=this.version;for(let m=0;m<12;m++)c=c<<1^(c>>>11)*7973;const p=this.version<<12|c;a(p>>>18==0);for(let m=0;m<18;m++){const g=l(p,m),x=this.size-11+m%3,k=Math.floor(m/3);this.setFunctionModule(x,k,g),this.setFunctionModule(k,x,g)}}drawFinderPattern(c,p){for(let m=-4;m<=4;m++)for(let g=-4;g<=4;g++){const x=Math.max(Math.abs(g),Math.abs(m)),k=c+g,b=p+m;0<=k&&k<this.size&&0<=b&&b<this.size&&this.setFunctionModule(k,b,x!=2&&x!=4)}}drawAlignmentPattern(c,p){for(let m=-2;m<=2;m++)for(let g=-2;g<=2;g++)this.setFunctionModule(c+g,p+m,Math.max(Math.abs(g),Math.abs(m))!=1)}setFunctionModule(c,p,m){this.modules[p][c]=m,this.isFunction[p][c]=!0}addEccAndInterleave(c){const p=this.version,m=this.errorCorrectionLevel;if(c.length!=Se.getNumDataCodewords(p,m))throw new RangeError("Invalid argument");const g=Se.NUM_ERROR_CORRECTION_BLOCKS[m.ordinal][p],x=Se.ECC_CODEWORDS_PER_BLOCK[m.ordinal][p],k=Math.floor(Se.getNumRawDataModules(p)/8),b=g-k%g,w=Math.floor(k/g);let S=[];const P=Se.reedSolomonComputeDivisor(x);for(let T=0,F=0;T<g;T++){let L=c.slice(F,F+w-x+(T<b?0:1));F+=L.length;const $=Se.reedSolomonComputeRemainder(L,P);T<b&&L.push(0),S.push(L.concat($))}let R=[];for(let T=0;T<S[0].length;T++)S.forEach((F,L)=>{(T!=w-x||L>=b)&&R.push(F[T])});return a(R.length==k),R}drawCodewords(c){if(c.length!=Math.floor(Se.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let p=0;for(let m=this.size-1;m>=1;m-=2){m==6&&(m=5);for(let g=0;g<this.size;g++)for(let x=0;x<2;x++){const k=m-x,w=(m+1&2)==0?this.size-1-g:g;!this.isFunction[w][k]&&p<c.length*8&&(this.modules[w][k]=l(c[p>>>3],7-(p&7)),p++)}}a(p==c.length*8)}applyMask(c){if(c<0||c>7)throw new RangeError("Mask value out of range");for(let p=0;p<this.size;p++)for(let m=0;m<this.size;m++){let g;switch(c){case 0:g=(m+p)%2==0;break;case 1:g=p%2==0;break;case 2:g=m%3==0;break;case 3:g=(m+p)%3==0;break;case 4:g=(Math.floor(m/3)+Math.floor(p/2))%2==0;break;case 5:g=m*p%2+m*p%3==0;break;case 6:g=(m*p%2+m*p%3)%2==0;break;case 7:g=((m+p)%2+m*p%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[p][m]&&g&&(this.modules[p][m]=!this.modules[p][m])}}getPenaltyScore(){let c=0;for(let x=0;x<this.size;x++){let k=!1,b=0,w=[0,0,0,0,0,0,0];for(let S=0;S<this.size;S++)this.modules[x][S]==k?(b++,b==5?c+=Se.PENALTY_N1:b>5&&c++):(this.finderPenaltyAddHistory(b,w),k||(c+=this.finderPenaltyCountPatterns(w)*Se.PENALTY_N3),k=this.modules[x][S],b=1);c+=this.finderPenaltyTerminateAndCount(k,b,w)*Se.PENALTY_N3}for(let x=0;x<this.size;x++){let k=!1,b=0,w=[0,0,0,0,0,0,0];for(let S=0;S<this.size;S++)this.modules[S][x]==k?(b++,b==5?c+=Se.PENALTY_N1:b>5&&c++):(this.finderPenaltyAddHistory(b,w),k||(c+=this.finderPenaltyCountPatterns(w)*Se.PENALTY_N3),k=this.modules[S][x],b=1);c+=this.finderPenaltyTerminateAndCount(k,b,w)*Se.PENALTY_N3}for(let x=0;x<this.size-1;x++)for(let k=0;k<this.size-1;k++){const b=this.modules[x][k];b==this.modules[x][k+1]&&b==this.modules[x+1][k]&&b==this.modules[x+1][k+1]&&(c+=Se.PENALTY_N2)}let p=0;for(const x of this.modules)p=x.reduce((k,b)=>k+(b?1:0),p);const m=this.size*this.size,g=Math.ceil(Math.abs(p*20-m*10)/m)-1;return a(0<=g&&g<=9),c+=g*Se.PENALTY_N4,a(0<=c&&c<=2568888),c}getAlignmentPatternPositions(){if(this.version==1)return[];{const c=Math.floor(this.version/7)+2,p=this.version==32?26:Math.ceil((this.version*4+4)/(c*2-2))*2;let m=[6];for(let g=this.size-7;m.length<c;g-=p)m.splice(1,0,g);return m}}static getNumRawDataModules(c){if(c<Se.MIN_VERSION||c>Se.MAX_VERSION)throw new RangeError("Version number out of range");let p=(16*c+128)*c+64;if(c>=2){const m=Math.floor(c/7)+2;p-=(25*m-10)*m-55,c>=7&&(p-=36)}return a(208<=p&&p<=29648),p}static getNumDataCodewords(c,p){return Math.floor(Se.getNumRawDataModules(c)/8)-Se.ECC_CODEWORDS_PER_BLOCK[p.ordinal][c]*Se.NUM_ERROR_CORRECTION_BLOCKS[p.ordinal][c]}static reedSolomonComputeDivisor(c){if(c<1||c>255)throw new RangeError("Degree out of range");let p=[];for(let g=0;g<c-1;g++)p.push(0);p.push(1);let m=1;for(let g=0;g<c;g++){for(let x=0;x<p.length;x++)p[x]=Se.reedSolomonMultiply(p[x],m),x+1<p.length&&(p[x]^=p[x+1]);m=Se.reedSolomonMultiply(m,2)}return p}static reedSolomonComputeRemainder(c,p){let m=p.map(g=>0);for(const g of c){const x=g^m.shift();m.push(0),p.forEach((k,b)=>m[b]^=Se.reedSolomonMultiply(k,x))}return m}static reedSolomonMultiply(c,p){if(c>>>8||p>>>8)throw new RangeError("Byte out of range");let m=0;for(let g=7;g>=0;g--)m=m<<1^(m>>>7)*285,m^=(p>>>g&1)*c;return a(m>>>8==0),m}finderPenaltyCountPatterns(c){const p=c[1];a(p<=this.size*3);const m=p>0&&c[2]==p&&c[3]==p*3&&c[4]==p&&c[5]==p;return(m&&c[0]>=p*4&&c[6]>=p?1:0)+(m&&c[6]>=p*4&&c[0]>=p?1:0)}finderPenaltyTerminateAndCount(c,p,m){return c&&(this.finderPenaltyAddHistory(p,m),p=0),p+=this.size,this.finderPenaltyAddHistory(p,m),this.finderPenaltyCountPatterns(m)}finderPenaltyAddHistory(c,p){p[0]==0&&(c+=this.size),p.pop(),p.unshift(c)}};r.MIN_VERSION=1,r.MAX_VERSION=40,r.PENALTY_N1=3,r.PENALTY_N2=3,r.PENALTY_N3=40,r.PENALTY_N4=10,r.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],r.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],n.QrCode=r;function o(v,c,p){if(c<0||c>31||v>>>c)throw new RangeError("Value out of range");for(let m=c-1;m>=0;m--)p.push(v>>>m&1)}function l(v,c){return(v>>>c&1)!=0}function a(v){if(!v)throw new Error("Assertion error")}const u=class He{constructor(c,p,m){if(this.mode=c,this.numChars=p,this.bitData=m,p<0)throw new RangeError("Invalid argument");this.bitData=m.slice()}static makeBytes(c){let p=[];for(const m of c)o(m,8,p);return new He(He.Mode.BYTE,c.length,p)}static makeNumeric(c){if(!He.isNumeric(c))throw new RangeError("String contains non-numeric characters");let p=[];for(let m=0;m<c.length;){const g=Math.min(c.length-m,3);o(parseInt(c.substring(m,m+g),10),g*3+1,p),m+=g}return new He(He.Mode.NUMERIC,c.length,p)}static makeAlphanumeric(c){if(!He.isAlphanumeric(c))throw new RangeError("String contains unencodable characters in alphanumeric mode");let p=[],m;for(m=0;m+2<=c.length;m+=2){let g=He.ALPHANUMERIC_CHARSET.indexOf(c.charAt(m))*45;g+=He.ALPHANUMERIC_CHARSET.indexOf(c.charAt(m+1)),o(g,11,p)}return m<c.length&&o(He.ALPHANUMERIC_CHARSET.indexOf(c.charAt(m)),6,p),new He(He.Mode.ALPHANUMERIC,c.length,p)}static makeSegments(c){return c==""?[]:He.isNumeric(c)?[He.makeNumeric(c)]:He.isAlphanumeric(c)?[He.makeAlphanumeric(c)]:[He.makeBytes(He.toUtf8ByteArray(c))]}static makeEci(c){let p=[];if(c<0)throw new RangeError("ECI assignment value out of range");if(c<128)o(c,8,p);else if(c<16384)o(2,2,p),o(c,14,p);else if(c<1e6)o(6,3,p),o(c,21,p);else throw new RangeError("ECI assignment value out of range");return new He(He.Mode.ECI,0,p)}static isNumeric(c){return He.NUMERIC_REGEX.test(c)}static isAlphanumeric(c){return He.ALPHANUMERIC_REGEX.test(c)}getData(){return this.bitData.slice()}static getTotalBits(c,p){let m=0;for(const g of c){const x=g.mode.numCharCountBits(p);if(g.numChars>=1<<x)return 1/0;m+=4+x+g.bitData.length}return m}static toUtf8ByteArray(c){c=encodeURI(c);let p=[];for(let m=0;m<c.length;m++)c.charAt(m)!="%"?p.push(c.charCodeAt(m)):(p.push(parseInt(c.substring(m+1,m+3),16)),m+=2);return p}};u.NUMERIC_REGEX=/^[0-9]*$/,u.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,u.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let f=u;n.QrSegment=u})(lr||(lr={}));(n=>{(r=>{const o=class{constructor(a,u){this.ordinal=a,this.formatBits=u}};o.LOW=new o(0,1),o.MEDIUM=new o(1,0),o.QUARTILE=new o(2,3),o.HIGH=new o(3,2),r.Ecc=o})(n.QrCode||(n.QrCode={}))})(lr||(lr={}));(n=>{(r=>{const o=class{constructor(a,u){this.modeBits=a,this.numBitsCharCount=u}numCharCountBits(a){return this.numBitsCharCount[Math.floor((a+7)/17)]}};o.NUMERIC=new o(1,[10,12,14]),o.ALPHANUMERIC=new o(2,[9,11,13]),o.BYTE=new o(4,[8,16,16]),o.KANJI=new o(8,[8,10,12]),o.ECI=new o(7,[0,0,0]),r.Mode=o})(n.QrSegment||(n.QrSegment={}))})(lr||(lr={}));var jr=lr;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var gw={L:jr.QrCode.Ecc.LOW,M:jr.QrCode.Ecc.MEDIUM,Q:jr.QrCode.Ecc.QUARTILE,H:jr.QrCode.Ecc.HIGH},bm=128,wm="L",xm="#FFFFFF",Sm="#000000",km=!1,Em=1,yw=4,bw=0,ww=.1;function Pm(n,r=0){const o=[];return n.forEach(function(l,a){let u=null;l.forEach(function(f,v){if(!f&&u!==null){o.push(`M${u+r} ${a+r}h${v-u}v1H${u+r}z`),u=null;return}if(v===l.length-1){if(!f)return;u===null?o.push(`M${v+r},${a+r} h1v1H${v+r}z`):o.push(`M${u+r},${a+r} h${v+1-u}v1H${u+r}z`);return}f&&u===null&&(u=v)})}),o.join("")}function Cm(n,r){return n.slice().map((o,l)=>l<r.y||l>=r.y+r.h?o:o.map((a,u)=>u<r.x||u>=r.x+r.w?a:!1))}function xw(n,r,o,l){if(l==null)return null;const a=n.length+o*2,u=Math.floor(r*ww),f=a/r,v=(l.width||u)*f,c=(l.height||u)*f,p=l.x==null?n.length/2-v/2:l.x*f,m=l.y==null?n.length/2-c/2:l.y*f,g=l.opacity==null?1:l.opacity;let x=null;if(l.excavate){let b=Math.floor(p),w=Math.floor(m),S=Math.ceil(v+p-b),P=Math.ceil(c+m-w);x={x:b,y:w,w:S,h:P}}const k=l.crossOrigin;return{x:p,y:m,h:c,w:v,excavation:x,opacity:g,crossOrigin:k}}function Sw(n,r){return r!=null?Math.max(Math.floor(r),0):n?yw:bw}function Om({value:n,level:r,minVersion:o,includeMargin:l,marginSize:a,imageSettings:u,size:f,boostLevel:v}){let c=oe.useMemo(()=>{const b=(Array.isArray(n)?n:[n]).reduce((w,S)=>(w.push(...jr.QrSegment.makeSegments(S)),w),[]);return jr.QrCode.encodeSegments(b,gw[r],o,void 0,void 0,v)},[n,r,o,v]);const{cells:p,margin:m,numCells:g,calculatedImageSettings:x}=oe.useMemo(()=>{let k=c.getModules();const b=Sw(l,a),w=k.length+b*2,S=xw(k,f,b,u);return{cells:k,margin:b,numCells:w,calculatedImageSettings:S}},[c,f,u,l,a]);return{qrcode:c,margin:m,cells:p,numCells:g,calculatedImageSettings:x}}var kw=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),Ew=oe.forwardRef(function(r,o){const l=r,{value:a,size:u=bm,level:f=wm,bgColor:v=xm,fgColor:c=Sm,includeMargin:p=km,minVersion:m=Em,boostLevel:g,marginSize:x,imageSettings:k}=l,w=ju(l,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:S}=w,P=ju(w,["style"]),R=k==null?void 0:k.src,T=oe.useRef(null),F=oe.useRef(null),L=oe.useCallback(Me=>{T.current=Me,typeof o=="function"?o(Me):o&&(o.current=Me)},[o]),[$,U]=oe.useState(!1),{margin:Q,cells:X,numCells:me,calculatedImageSettings:we}=Om({value:a,level:f,minVersion:m,boostLevel:g,includeMargin:p,marginSize:x,imageSettings:k,size:u});oe.useEffect(()=>{if(T.current!=null){const Me=T.current,ve=Me.getContext("2d");if(!ve)return;let xe=X;const ge=F.current,W=we!=null&&ge!==null&&ge.complete&&ge.naturalHeight!==0&&ge.naturalWidth!==0;W&&we.excavation!=null&&(xe=Cm(X,we.excavation));const ee=window.devicePixelRatio||1;Me.height=Me.width=u*ee;const K=u/me*ee;ve.scale(K,K),ve.fillStyle=v,ve.fillRect(0,0,me,me),ve.fillStyle=c,kw?ve.fill(new Path2D(Pm(xe,Q))):X.forEach(function(M,j){M.forEach(function(re,ce){re&&ve.fillRect(ce+Q,j+Q,1,1)})}),we&&(ve.globalAlpha=we.opacity),W&&ve.drawImage(ge,we.x+Q,we.y+Q,we.w,we.h)}}),oe.useEffect(()=>{U(!1)},[R]);const Te=Fu({height:u,width:u},S);let Ie=null;return R!=null&&(Ie=oe.createElement("img",{src:R,key:R,style:{display:"none"},onLoad:()=>{U(!0)},ref:F,crossOrigin:we==null?void 0:we.crossOrigin})),oe.createElement(oe.Fragment,null,oe.createElement("canvas",Fu({style:Te,height:u,width:u,ref:L,role:"img"},P)),Ie)});Ew.displayName="QRCodeCanvas";var Rm=oe.forwardRef(function(r,o){const l=r,{value:a,size:u=bm,level:f=wm,bgColor:v=xm,fgColor:c=Sm,includeMargin:p=km,minVersion:m=Em,boostLevel:g,title:x,marginSize:k,imageSettings:b}=l,w=ju(l,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:S,cells:P,numCells:R,calculatedImageSettings:T}=Om({value:a,level:f,minVersion:m,boostLevel:g,includeMargin:p,marginSize:k,imageSettings:b,size:u});let F=P,L=null;b!=null&&T!=null&&(T.excavation!=null&&(F=Cm(P,T.excavation)),L=oe.createElement("image",{href:b.src,height:T.h,width:T.w,x:T.x+S,y:T.y+S,preserveAspectRatio:"none",opacity:T.opacity,crossOrigin:T.crossOrigin}));const $=Pm(F,S);return oe.createElement("svg",Fu({height:u,width:u,viewBox:`0 0 ${R} ${R}`,ref:o,role:"img"},w),!!x&&oe.createElement("title",null,x),oe.createElement("path",{fill:v,d:`M0,0 h${R}v${R}H0z`,shapeRendering:"crispEdges"}),oe.createElement("path",{fill:c,d:$,shapeRendering:"crispEdges"}),L)});Rm.displayName="QRCodeSVG";function Pw(){const n="https://github.com/pangliu/apk-download/raw/refs/heads/main/app-dev-debug.apk";return N.jsxs("div",{className:"page-container",children:[N.jsx("div",{className:"img-ninja"}),N.jsx("div",{className:"qrcode-container",children:N.jsx("a",{href:n,style:{display:"inline-block"},children:N.jsx(Rm,{className:"qrcode-svg",value:n,bgColor:"#FFFFFF",fgColor:"#000000"})})}),N.jsxs("div",{className:"warrning-container",children:[N.jsxs("div",{className:"warrning-title",children:[N.jsx("div",{className:"img-icon"}),N.jsx("div",{className:"text-title",children:"Attention"})]}),N.jsxs("p",{children:[N.jsx("span",{className:"text-white",children:"Congrats on passing the review!"}),N.jsxs("span",{className:"text-red",children:[" ","Scan the QR Code on the webpage to download the APK."]})]}),N.jsxs("p",{children:[N.jsx("span",{className:"text-white",children:"Note: The link expires"}),N.jsx("span",{className:"text-red",children:" in 15 minutes,"}),N.jsxs("span",{className:"text-white",children:[" ","so download it promptly."]})]})]})]})}function Cw(){return N.jsxs("div",{className:"pending-container",children:[N.jsx("div",{className:"bg-top"}),N.jsx("div",{className:"ic-top-left"}),N.jsx("div",{className:"page-title",children:"Pending review"}),N.jsxs("div",{className:"register-container",children:[N.jsxs("div",{children:[N.jsx("span",{className:"content-text-black",children:"our registration has been submitted for"}),N.jsx("span",{className:"content-text-red ",children:" manual review."})]}),N.jsxs("div",{children:[N.jsx("span",{className:"content-text-black ",children:"You will be notified via email within"}),N.jsxs("span",{className:"content-text-red ",children:[" ","1-3 business days."]})]})]}),N.jsx("img",{className:"divider"}),N.jsxs("div",{className:"content-text",children:[N.jsx("span",{children:"We're working on your register"}),N.jsx("br",{}),N.jsx("span",{children:" to be sure you can become one of us"})]}),N.jsxs("div",{className:"container-flex",children:[N.jsx("div",{className:"bg_pending"}),N.jsx("img",{className:"divider"}),N.jsx("button",{className:"ok-btn",children:"OK"})]})]})}function sr(n){"@babel/helpers - typeof";return sr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},sr(n)}function Ow(n,r){if(sr(n)!="object"||!n)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var l=o.call(n,r||"default");if(sr(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function _m(n){var r=Ow(n,"string");return sr(r)=="symbol"?r:r+""}function Bo(n,r,o){return(r=_m(r))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n}function Yp(n,r){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);r&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),o.push.apply(o,l)}return o}function se(n){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?Yp(Object(o),!0).forEach(function(l){Bo(n,l,o[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):Yp(Object(o)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(o,l))})}return n}function Rw(n){if(Array.isArray(n))return n}function _w(n,r){var o=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var l,a,u,f,v=[],c=!0,p=!1;try{if(u=(o=o.call(n)).next,r===0){if(Object(o)!==o)return;c=!1}else for(;!(c=(l=u.call(o)).done)&&(v.push(l.value),v.length!==r);c=!0);}catch(m){p=!0,a=m}finally{try{if(!c&&o.return!=null&&(f=o.return(),Object(f)!==f))return}finally{if(p)throw a}}return v}}function Vu(n,r){(r==null||r>n.length)&&(r=n.length);for(var o=0,l=Array(r);o<r;o++)l[o]=n[o];return l}function Tm(n,r){if(n){if(typeof n=="string")return Vu(n,r);var o={}.toString.call(n).slice(8,-1);return o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set"?Array.from(n):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Vu(n,r):void 0}}function Tw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yn(n,r){return Rw(n)||_w(n,r)||Tm(n,r)||Tw()}function Mw(n,r){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(r.includes(l))continue;o[l]=n[l]}return o}function wn(n,r){if(n==null)return{};var o,l,a=Mw(n,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(l=0;l<u.length;l++)o=u[l],r.includes(o)||{}.propertyIsEnumerable.call(n,o)&&(a[o]=n[o])}return a}var Nw=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Lw(n){var r=n.defaultInputValue,o=r===void 0?"":r,l=n.defaultMenuIsOpen,a=l===void 0?!1:l,u=n.defaultValue,f=u===void 0?null:u,v=n.inputValue,c=n.menuIsOpen,p=n.onChange,m=n.onInputChange,g=n.onMenuClose,x=n.onMenuOpen,k=n.value,b=wn(n,Nw),w=O.useState(v!==void 0?v:o),S=yn(w,2),P=S[0],R=S[1],T=O.useState(c!==void 0?c:a),F=yn(T,2),L=F[0],$=F[1],U=O.useState(k!==void 0?k:f),Q=yn(U,2),X=Q[0],me=Q[1],we=O.useCallback(function(W,ee){typeof p=="function"&&p(W,ee),me(W)},[p]),Te=O.useCallback(function(W,ee){var K;typeof m=="function"&&(K=m(W,ee)),R(K!==void 0?K:W)},[m]),Ie=O.useCallback(function(){typeof x=="function"&&x(),$(!0)},[x]),Me=O.useCallback(function(){typeof g=="function"&&g(),$(!1)},[g]),ve=v!==void 0?v:P,xe=c!==void 0?c:L,ge=k!==void 0?k:X;return se(se({},b),{},{inputValue:ve,menuIsOpen:xe,onChange:we,onInputChange:Te,onMenuClose:Me,onMenuOpen:Ie,value:ge})}function ue(){return ue=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var l in o)({}).hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},ue.apply(null,arguments)}function Iw(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function Gp(n,r){for(var o=0;o<r.length;o++){var l=r[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,_m(l.key),l)}}function Dw(n,r,o){return r&&Gp(n.prototype,r),o&&Gp(n,o),Object.defineProperty(n,"prototype",{writable:!1}),n}function $u(n,r){return $u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,l){return o.__proto__=l,o},$u(n,r)}function Aw(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),r&&$u(n,r)}function Wa(n){return Wa=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Wa(n)}function Mm(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Mm=function(){return!!n})()}function zw(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Fw(n,r){if(r&&(sr(r)=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return zw(n)}function jw(n){var r=Mm();return function(){var o,l=Wa(n);if(r){var a=Wa(this).constructor;o=Reflect.construct(l,arguments,a)}else o=l.apply(this,arguments);return Fw(this,o)}}function Vw(n){if(Array.isArray(n))return Vu(n)}function $w(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Uw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ic(n){return Vw(n)||$w(n)||Tm(n)||Uw()}var Bw=!1;function Hw(n){if(n.sheet)return n.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===n)return document.styleSheets[r]}function qw(n){var r=document.createElement("style");return r.setAttribute("data-emotion",n.key),n.nonce!==void 0&&r.setAttribute("nonce",n.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var Ww=function(){function n(o){var l=this;this._insertTag=function(a){var u;l.tags.length===0?l.insertionPoint?u=l.insertionPoint.nextSibling:l.prepend?u=l.container.firstChild:u=l.before:u=l.tags[l.tags.length-1].nextSibling,l.container.insertBefore(a,u),l.tags.push(a)},this.isSpeedy=o.speedy===void 0?!Bw:o.speedy,this.tags=[],this.ctr=0,this.nonce=o.nonce,this.key=o.key,this.container=o.container,this.prepend=o.prepend,this.insertionPoint=o.insertionPoint,this.before=null}var r=n.prototype;return r.hydrate=function(l){l.forEach(this._insertTag)},r.insert=function(l){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(qw(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var u=Hw(a);try{u.insertRule(l,u.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(l));this.ctr++},r.flush=function(){this.tags.forEach(function(l){var a;return(a=l.parentNode)==null?void 0:a.removeChild(l)}),this.tags=[],this.ctr=0},n}(),ct="-ms-",Qa="-moz-",Oe="-webkit-",Nm="comm",ac="rule",lc="decl",Qw="@import",Lm="@keyframes",Kw="@layer",Yw=Math.abs,dl=String.fromCharCode,Gw=Object.assign;function Xw(n,r){return it(n,0)^45?(((r<<2^it(n,0))<<2^it(n,1))<<2^it(n,2))<<2^it(n,3):0}function Im(n){return n.trim()}function Jw(n,r){return(n=r.exec(n))?n[0]:n}function Re(n,r,o){return n.replace(r,o)}function Uu(n,r){return n.indexOf(r)}function it(n,r){return n.charCodeAt(r)|0}function Wo(n,r,o){return n.slice(r,o)}function tn(n){return n.length}function sc(n){return n.length}function Pa(n,r){return r.push(n),n}function Zw(n,r){return n.map(r).join("")}var fl=1,$r=1,Dm=0,St=0,Ye=0,qr="";function pl(n,r,o,l,a,u,f){return{value:n,root:r,parent:o,type:l,props:a,children:u,line:fl,column:$r,length:f,return:""}}function jo(n,r){return Gw(pl("",null,null,"",null,null,0),n,{length:-n.length},r)}function ex(){return Ye}function tx(){return Ye=St>0?it(qr,--St):0,$r--,Ye===10&&($r=1,fl--),Ye}function _t(){return Ye=St<Dm?it(qr,St++):0,$r++,Ye===10&&($r=1,fl++),Ye}function rn(){return it(qr,St)}function Da(){return St}function ai(n,r){return Wo(qr,n,r)}function Qo(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Am(n){return fl=$r=1,Dm=tn(qr=n),St=0,[]}function zm(n){return qr="",n}function Aa(n){return Im(ai(St-1,Bu(n===91?n+2:n===40?n+1:n)))}function nx(n){for(;(Ye=rn())&&Ye<33;)_t();return Qo(n)>2||Qo(Ye)>3?"":" "}function rx(n,r){for(;--r&&_t()&&!(Ye<48||Ye>102||Ye>57&&Ye<65||Ye>70&&Ye<97););return ai(n,Da()+(r<6&&rn()==32&&_t()==32))}function Bu(n){for(;_t();)switch(Ye){case n:return St;case 34:case 39:n!==34&&n!==39&&Bu(Ye);break;case 40:n===41&&Bu(n);break;case 92:_t();break}return St}function ox(n,r){for(;_t()&&n+Ye!==57;)if(n+Ye===84&&rn()===47)break;return"/*"+ai(r,St-1)+"*"+dl(n===47?n:_t())}function ix(n){for(;!Qo(rn());)_t();return ai(n,St)}function ax(n){return zm(za("",null,null,null,[""],n=Am(n),0,[0],n))}function za(n,r,o,l,a,u,f,v,c){for(var p=0,m=0,g=f,x=0,k=0,b=0,w=1,S=1,P=1,R=0,T="",F=a,L=u,$=l,U=T;S;)switch(b=R,R=_t()){case 40:if(b!=108&&it(U,g-1)==58){Uu(U+=Re(Aa(R),"&","&\f"),"&\f")!=-1&&(P=-1);break}case 34:case 39:case 91:U+=Aa(R);break;case 9:case 10:case 13:case 32:U+=nx(b);break;case 92:U+=rx(Da()-1,7);continue;case 47:switch(rn()){case 42:case 47:Pa(lx(ox(_t(),Da()),r,o),c);break;default:U+="/"}break;case 123*w:v[p++]=tn(U)*P;case 125*w:case 59:case 0:switch(R){case 0:case 125:S=0;case 59+m:P==-1&&(U=Re(U,/\f/g,"")),k>0&&tn(U)-g&&Pa(k>32?Jp(U+";",l,o,g-1):Jp(Re(U," ","")+";",l,o,g-2),c);break;case 59:U+=";";default:if(Pa($=Xp(U,r,o,p,m,a,v,T,F=[],L=[],g),u),R===123)if(m===0)za(U,r,$,$,F,u,g,v,L);else switch(x===99&&it(U,3)===110?100:x){case 100:case 108:case 109:case 115:za(n,$,$,l&&Pa(Xp(n,$,$,0,0,a,v,T,a,F=[],g),L),a,L,g,v,l?F:L);break;default:za(U,$,$,$,[""],L,0,v,L)}}p=m=k=0,w=P=1,T=U="",g=f;break;case 58:g=1+tn(U),k=b;default:if(w<1){if(R==123)--w;else if(R==125&&w++==0&&tx()==125)continue}switch(U+=dl(R),R*w){case 38:P=m>0?1:(U+="\f",-1);break;case 44:v[p++]=(tn(U)-1)*P,P=1;break;case 64:rn()===45&&(U+=Aa(_t())),x=rn(),m=g=tn(T=U+=ix(Da())),R++;break;case 45:b===45&&tn(U)==2&&(w=0)}}return u}function Xp(n,r,o,l,a,u,f,v,c,p,m){for(var g=a-1,x=a===0?u:[""],k=sc(x),b=0,w=0,S=0;b<l;++b)for(var P=0,R=Wo(n,g+1,g=Yw(w=f[b])),T=n;P<k;++P)(T=Im(w>0?x[P]+" "+R:Re(R,/&\f/g,x[P])))&&(c[S++]=T);return pl(n,r,o,a===0?ac:v,c,p,m)}function lx(n,r,o){return pl(n,r,o,Nm,dl(ex()),Wo(n,2,-2),0)}function Jp(n,r,o,l){return pl(n,r,o,lc,Wo(n,0,l),Wo(n,l+1,-1),l)}function Vr(n,r){for(var o="",l=sc(n),a=0;a<l;a++)o+=r(n[a],a,n,r)||"";return o}function sx(n,r,o,l){switch(n.type){case Kw:if(n.children.length)break;case Qw:case lc:return n.return=n.return||n.value;case Nm:return"";case Lm:return n.return=n.value+"{"+Vr(n.children,l)+"}";case ac:n.value=n.props.join(",")}return tn(o=Vr(n.children,l))?n.return=n.value+"{"+o+"}":""}function ux(n){var r=sc(n);return function(o,l,a,u){for(var f="",v=0;v<r;v++)f+=n[v](o,l,a,u)||"";return f}}function cx(n){return function(r){r.root||(r=r.return)&&n(r)}}function dx(n){var r=Object.create(null);return function(o){return r[o]===void 0&&(r[o]=n(o)),r[o]}}var fx=function(r,o,l){for(var a=0,u=0;a=u,u=rn(),a===38&&u===12&&(o[l]=1),!Qo(u);)_t();return ai(r,St)},px=function(r,o){var l=-1,a=44;do switch(Qo(a)){case 0:a===38&&rn()===12&&(o[l]=1),r[l]+=fx(St-1,o,l);break;case 2:r[l]+=Aa(a);break;case 4:if(a===44){r[++l]=rn()===58?"&\f":"",o[l]=r[l].length;break}default:r[l]+=dl(a)}while(a=_t());return r},hx=function(r,o){return zm(px(Am(r),o))},Zp=new WeakMap,mx=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var o=r.value,l=r.parent,a=r.column===l.column&&r.line===l.line;l.type!=="rule";)if(l=l.parent,!l)return;if(!(r.props.length===1&&o.charCodeAt(0)!==58&&!Zp.get(l))&&!a){Zp.set(r,!0);for(var u=[],f=hx(o,u),v=l.props,c=0,p=0;c<f.length;c++)for(var m=0;m<v.length;m++,p++)r.props[p]=u[c]?f[c].replace(/&\f/g,v[m]):v[m]+" "+f[c]}}},vx=function(r){if(r.type==="decl"){var o=r.value;o.charCodeAt(0)===108&&o.charCodeAt(2)===98&&(r.return="",r.value="")}};function Fm(n,r){switch(Xw(n,r)){case 5103:return Oe+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Oe+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Oe+n+Qa+n+ct+n+n;case 6828:case 4268:return Oe+n+ct+n+n;case 6165:return Oe+n+ct+"flex-"+n+n;case 5187:return Oe+n+Re(n,/(\w+).+(:[^]+)/,Oe+"box-$1$2"+ct+"flex-$1$2")+n;case 5443:return Oe+n+ct+"flex-item-"+Re(n,/flex-|-self/,"")+n;case 4675:return Oe+n+ct+"flex-line-pack"+Re(n,/align-content|flex-|-self/,"")+n;case 5548:return Oe+n+ct+Re(n,"shrink","negative")+n;case 5292:return Oe+n+ct+Re(n,"basis","preferred-size")+n;case 6060:return Oe+"box-"+Re(n,"-grow","")+Oe+n+ct+Re(n,"grow","positive")+n;case 4554:return Oe+Re(n,/([^-])(transform)/g,"$1"+Oe+"$2")+n;case 6187:return Re(Re(Re(n,/(zoom-|grab)/,Oe+"$1"),/(image-set)/,Oe+"$1"),n,"")+n;case 5495:case 3959:return Re(n,/(image-set\([^]*)/,Oe+"$1$`$1");case 4968:return Re(Re(n,/(.+:)(flex-)?(.*)/,Oe+"box-pack:$3"+ct+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Oe+n+n;case 4095:case 3583:case 4068:case 2532:return Re(n,/(.+)-inline(.+)/,Oe+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(tn(n)-1-r>6)switch(it(n,r+1)){case 109:if(it(n,r+4)!==45)break;case 102:return Re(n,/(.+:)(.+)-([^]+)/,"$1"+Oe+"$2-$3$1"+Qa+(it(n,r+3)==108?"$3":"$2-$3"))+n;case 115:return~Uu(n,"stretch")?Fm(Re(n,"stretch","fill-available"),r)+n:n}break;case 4949:if(it(n,r+1)!==115)break;case 6444:switch(it(n,tn(n)-3-(~Uu(n,"!important")&&10))){case 107:return Re(n,":",":"+Oe)+n;case 101:return Re(n,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Oe+(it(n,14)===45?"inline-":"")+"box$3$1"+Oe+"$2$3$1"+ct+"$2box$3")+n}break;case 5936:switch(it(n,r+11)){case 114:return Oe+n+ct+Re(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Oe+n+ct+Re(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Oe+n+ct+Re(n,/[svh]\w+-[tblr]{2}/,"lr")+n}return Oe+n+ct+n+n}return n}var gx=function(r,o,l,a){if(r.length>-1&&!r.return)switch(r.type){case lc:r.return=Fm(r.value,r.length);break;case Lm:return Vr([jo(r,{value:Re(r.value,"@","@"+Oe)})],a);case ac:if(r.length)return Zw(r.props,function(u){switch(Jw(u,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Vr([jo(r,{props:[Re(u,/:(read-\w+)/,":"+Qa+"$1")]})],a);case"::placeholder":return Vr([jo(r,{props:[Re(u,/:(plac\w+)/,":"+Oe+"input-$1")]}),jo(r,{props:[Re(u,/:(plac\w+)/,":"+Qa+"$1")]}),jo(r,{props:[Re(u,/:(plac\w+)/,ct+"input-$1")]})],a)}return""})}},yx=[gx],bx=function(r){var o=r.key;if(o==="css"){var l=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(l,function(w){var S=w.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(w),w.setAttribute("data-s",""))})}var a=r.stylisPlugins||yx,u={},f,v=[];f=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+o+' "]'),function(w){for(var S=w.getAttribute("data-emotion").split(" "),P=1;P<S.length;P++)u[S[P]]=!0;v.push(w)});var c,p=[mx,vx];{var m,g=[sx,cx(function(w){m.insert(w)})],x=ux(p.concat(a,g)),k=function(S){return Vr(ax(S),x)};c=function(S,P,R,T){m=R,k(S?S+"{"+P.styles+"}":P.styles),T&&(b.inserted[P.name]=!0)}}var b={key:o,sheet:new Ww({key:o,container:f,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:u,registered:{},insert:c};return b.sheet.hydrate(v),b},wu={exports:{}},_e={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eh;function wx(){if(eh)return _e;eh=1;var n=typeof Symbol=="function"&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,l=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,f=n?Symbol.for("react.provider"):60109,v=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,m=n?Symbol.for("react.forward_ref"):60112,g=n?Symbol.for("react.suspense"):60113,x=n?Symbol.for("react.suspense_list"):60120,k=n?Symbol.for("react.memo"):60115,b=n?Symbol.for("react.lazy"):60116,w=n?Symbol.for("react.block"):60121,S=n?Symbol.for("react.fundamental"):60117,P=n?Symbol.for("react.responder"):60118,R=n?Symbol.for("react.scope"):60119;function T(L){if(typeof L=="object"&&L!==null){var $=L.$$typeof;switch($){case r:switch(L=L.type,L){case c:case p:case l:case u:case a:case g:return L;default:switch(L=L&&L.$$typeof,L){case v:case m:case b:case k:case f:return L;default:return $}}case o:return $}}}function F(L){return T(L)===p}return _e.AsyncMode=c,_e.ConcurrentMode=p,_e.ContextConsumer=v,_e.ContextProvider=f,_e.Element=r,_e.ForwardRef=m,_e.Fragment=l,_e.Lazy=b,_e.Memo=k,_e.Portal=o,_e.Profiler=u,_e.StrictMode=a,_e.Suspense=g,_e.isAsyncMode=function(L){return F(L)||T(L)===c},_e.isConcurrentMode=F,_e.isContextConsumer=function(L){return T(L)===v},_e.isContextProvider=function(L){return T(L)===f},_e.isElement=function(L){return typeof L=="object"&&L!==null&&L.$$typeof===r},_e.isForwardRef=function(L){return T(L)===m},_e.isFragment=function(L){return T(L)===l},_e.isLazy=function(L){return T(L)===b},_e.isMemo=function(L){return T(L)===k},_e.isPortal=function(L){return T(L)===o},_e.isProfiler=function(L){return T(L)===u},_e.isStrictMode=function(L){return T(L)===a},_e.isSuspense=function(L){return T(L)===g},_e.isValidElementType=function(L){return typeof L=="string"||typeof L=="function"||L===l||L===p||L===u||L===a||L===g||L===x||typeof L=="object"&&L!==null&&(L.$$typeof===b||L.$$typeof===k||L.$$typeof===f||L.$$typeof===v||L.$$typeof===m||L.$$typeof===S||L.$$typeof===P||L.$$typeof===R||L.$$typeof===w)},_e.typeOf=T,_e}var th;function xx(){return th||(th=1,wu.exports=wx()),wu.exports}var xu,nh;function Sx(){if(nh)return xu;nh=1;var n=xx(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};u[n.ForwardRef]=l,u[n.Memo]=a;function f(b){return n.isMemo(b)?a:u[b.$$typeof]||r}var v=Object.defineProperty,c=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,g=Object.getPrototypeOf,x=Object.prototype;function k(b,w,S){if(typeof w!="string"){if(x){var P=g(w);P&&P!==x&&k(b,P,S)}var R=c(w);p&&(R=R.concat(p(w)));for(var T=f(b),F=f(w),L=0;L<R.length;++L){var $=R[L];if(!o[$]&&!(S&&S[$])&&!(F&&F[$])&&!(T&&T[$])){var U=m(w,$);try{v(b,$,U)}catch{}}}}return b}return xu=k,xu}Sx();var kx=!0;function Ex(n,r,o){var l="";return o.split(" ").forEach(function(a){n[a]!==void 0?r.push(n[a]+";"):a&&(l+=a+" ")}),l}var jm=function(r,o,l){var a=r.key+"-"+o.name;(l===!1||kx===!1)&&r.registered[a]===void 0&&(r.registered[a]=o.styles)},Px=function(r,o,l){jm(r,o,l);var a=r.key+"-"+o.name;if(r.inserted[o.name]===void 0){var u=o;do r.insert(o===u?"."+a:"",u,r.sheet,!0),u=u.next;while(u!==void 0)}};function Cx(n){for(var r=0,o,l=0,a=n.length;a>=4;++l,a-=4)o=n.charCodeAt(l)&255|(n.charCodeAt(++l)&255)<<8|(n.charCodeAt(++l)&255)<<16|(n.charCodeAt(++l)&255)<<24,o=(o&65535)*1540483477+((o>>>16)*59797<<16),o^=o>>>24,r=(o&65535)*1540483477+((o>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(n.charCodeAt(l+2)&255)<<16;case 2:r^=(n.charCodeAt(l+1)&255)<<8;case 1:r^=n.charCodeAt(l)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var Ox={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Rx=!1,_x=/[A-Z]|^ms/g,Tx=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Vm=function(r){return r.charCodeAt(1)===45},rh=function(r){return r!=null&&typeof r!="boolean"},Su=dx(function(n){return Vm(n)?n:n.replace(_x,"-$&").toLowerCase()}),oh=function(r,o){switch(r){case"animation":case"animationName":if(typeof o=="string")return o.replace(Tx,function(l,a,u){return nn={name:a,styles:u,next:nn},a})}return Ox[r]!==1&&!Vm(r)&&typeof o=="number"&&o!==0?o+"px":o},Mx="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function Ko(n,r,o){if(o==null)return"";var l=o;if(l.__emotion_styles!==void 0)return l;switch(typeof o){case"boolean":return"";case"object":{var a=o;if(a.anim===1)return nn={name:a.name,styles:a.styles,next:nn},a.name;var u=o;if(u.styles!==void 0){var f=u.next;if(f!==void 0)for(;f!==void 0;)nn={name:f.name,styles:f.styles,next:nn},f=f.next;var v=u.styles+";";return v}return Nx(n,r,o)}case"function":{if(n!==void 0){var c=nn,p=o(n);return nn=c,Ko(n,r,p)}break}}var m=o;return m}function Nx(n,r,o){var l="";if(Array.isArray(o))for(var a=0;a<o.length;a++)l+=Ko(n,r,o[a])+";";else for(var u in o){var f=o[u];if(typeof f!="object"){var v=f;rh(v)&&(l+=Su(u)+":"+oh(u,v)+";")}else{if(u==="NO_COMPONENT_SELECTOR"&&Rx)throw new Error(Mx);if(Array.isArray(f)&&typeof f[0]=="string"&&r==null)for(var c=0;c<f.length;c++)rh(f[c])&&(l+=Su(u)+":"+oh(u,f[c])+";");else{var p=Ko(n,r,f);switch(u){case"animation":case"animationName":{l+=Su(u)+":"+p+";";break}default:l+=u+"{"+p+"}"}}}}return l}var ih=/label:\s*([^\s;{]+)\s*(;|$)/g,nn;function $m(n,r,o){if(n.length===1&&typeof n[0]=="object"&&n[0]!==null&&n[0].styles!==void 0)return n[0];var l=!0,a="";nn=void 0;var u=n[0];if(u==null||u.raw===void 0)l=!1,a+=Ko(o,r,u);else{var f=u;a+=f[0]}for(var v=1;v<n.length;v++)if(a+=Ko(o,r,n[v]),l){var c=u;a+=c[v]}ih.lastIndex=0;for(var p="",m;(m=ih.exec(a))!==null;)p+="-"+m[1];var g=Cx(a)+p;return{name:g,styles:a,next:nn}}var Lx=function(r){return r()},Ix=pp.useInsertionEffect?pp.useInsertionEffect:!1,Dx=Ix||Lx,Ax=!1,Um=O.createContext(typeof HTMLElement<"u"?bx({key:"css"}):null);Um.Provider;var zx=function(r){return O.forwardRef(function(o,l){var a=O.useContext(Um);return r(o,a,l)})},Fx=O.createContext({}),uc={}.hasOwnProperty,Hu="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",jx=function(r,o){var l={};for(var a in o)uc.call(o,a)&&(l[a]=o[a]);return l[Hu]=r,l},Vx=function(r){var o=r.cache,l=r.serialized,a=r.isStringTag;return jm(o,l,a),Dx(function(){return Px(o,l,a)}),null},$x=zx(function(n,r,o){var l=n.css;typeof l=="string"&&r.registered[l]!==void 0&&(l=r.registered[l]);var a=n[Hu],u=[l],f="";typeof n.className=="string"?f=Ex(r.registered,u,n.className):n.className!=null&&(f=n.className+" ");var v=$m(u,void 0,O.useContext(Fx));f+=r.key+"-"+v.name;var c={};for(var p in n)uc.call(n,p)&&p!=="css"&&p!==Hu&&!Ax&&(c[p]=n[p]);return c.className=f,o&&(c.ref=o),O.createElement(O.Fragment,null,O.createElement(Vx,{cache:r,serialized:v,isStringTag:typeof a=="string"}),O.createElement(a,c))}),Ux=$x,ie=function(r,o){var l=arguments;if(o==null||!uc.call(o,"css"))return O.createElement.apply(void 0,l);var a=l.length,u=new Array(a);u[0]=Ux,u[1]=jx(r,o);for(var f=2;f<a;f++)u[f]=l[f];return O.createElement.apply(null,u)};(function(n){var r;r||(r=n.JSX||(n.JSX={}))})(ie||(ie={}));function cc(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return $m(r)}function Bx(){var n=cc.apply(void 0,arguments),r="animation-"+n.name;return{name:r,styles:"@keyframes "+r+"{"+n.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function Hx(n,r){return r||(r=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}}))}const qx=Math.min,Wx=Math.max,Ka=Math.round,Ca=Math.floor,Ya=n=>({x:n,y:n});function Qx(n){const{x:r,y:o,width:l,height:a}=n;return{width:l,height:a,top:o,left:r,right:r+l,bottom:o+a,x:r,y:o}}function hl(){return typeof window<"u"}function Bm(n){return qm(n)?(n.nodeName||"").toLowerCase():"#document"}function bn(n){var r;return(n==null||(r=n.ownerDocument)==null?void 0:r.defaultView)||window}function Hm(n){var r;return(r=(qm(n)?n.ownerDocument:n.document)||window.document)==null?void 0:r.documentElement}function qm(n){return hl()?n instanceof Node||n instanceof bn(n).Node:!1}function Kx(n){return hl()?n instanceof Element||n instanceof bn(n).Element:!1}function dc(n){return hl()?n instanceof HTMLElement||n instanceof bn(n).HTMLElement:!1}function ah(n){return!hl()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof bn(n).ShadowRoot}function Wm(n){const{overflow:r,overflowX:o,overflowY:l,display:a}=fc(n);return/auto|scroll|overlay|hidden|clip/.test(r+l+o)&&!["inline","contents"].includes(a)}function Yx(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Gx(n){return["html","body","#document"].includes(Bm(n))}function fc(n){return bn(n).getComputedStyle(n)}function Xx(n){if(Bm(n)==="html")return n;const r=n.assignedSlot||n.parentNode||ah(n)&&n.host||Hm(n);return ah(r)?r.host:r}function Qm(n){const r=Xx(n);return Gx(r)?n.ownerDocument?n.ownerDocument.body:n.body:dc(r)&&Wm(r)?r:Qm(r)}function Ga(n,r,o){var l;r===void 0&&(r=[]),o===void 0&&(o=!0);const a=Qm(n),u=a===((l=n.ownerDocument)==null?void 0:l.body),f=bn(a);if(u){const v=qu(f);return r.concat(f,f.visualViewport||[],Wm(a)?a:[],v&&o?Ga(v):[])}return r.concat(a,Ga(a,[],o))}function qu(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function Jx(n){const r=fc(n);let o=parseFloat(r.width)||0,l=parseFloat(r.height)||0;const a=dc(n),u=a?n.offsetWidth:o,f=a?n.offsetHeight:l,v=Ka(o)!==u||Ka(l)!==f;return v&&(o=u,l=f),{width:o,height:l,$:v}}function pc(n){return Kx(n)?n:n.contextElement}function lh(n){const r=pc(n);if(!dc(r))return Ya(1);const o=r.getBoundingClientRect(),{width:l,height:a,$:u}=Jx(r);let f=(u?Ka(o.width):o.width)/l,v=(u?Ka(o.height):o.height)/a;return(!f||!Number.isFinite(f))&&(f=1),(!v||!Number.isFinite(v))&&(v=1),{x:f,y:v}}const Zx=Ya(0);function e2(n){const r=bn(n);return!Yx()||!r.visualViewport?Zx:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function t2(n,r,o){return!1}function sh(n,r,o,l){r===void 0&&(r=!1);const a=n.getBoundingClientRect(),u=pc(n);let f=Ya(1);r&&(f=lh(n));const v=t2()?e2(u):Ya(0);let c=(a.left+v.x)/f.x,p=(a.top+v.y)/f.y,m=a.width/f.x,g=a.height/f.y;if(u){const x=bn(u),k=l;let b=x,w=qu(b);for(;w&&l&&k!==b;){const S=lh(w),P=w.getBoundingClientRect(),R=fc(w),T=P.left+(w.clientLeft+parseFloat(R.paddingLeft))*S.x,F=P.top+(w.clientTop+parseFloat(R.paddingTop))*S.y;c*=S.x,p*=S.y,m*=S.x,g*=S.y,c+=T,p+=F,b=bn(w),w=qu(b)}}return Qx({width:m,height:g,x:c,y:p})}function n2(n,r){let o=null,l;const a=Hm(n);function u(){var v;clearTimeout(l),(v=o)==null||v.disconnect(),o=null}function f(v,c){v===void 0&&(v=!1),c===void 0&&(c=1),u();const{left:p,top:m,width:g,height:x}=n.getBoundingClientRect();if(v||r(),!g||!x)return;const k=Ca(m),b=Ca(a.clientWidth-(p+g)),w=Ca(a.clientHeight-(m+x)),S=Ca(p),R={rootMargin:-k+"px "+-b+"px "+-w+"px "+-S+"px",threshold:Wx(0,qx(1,c))||1};let T=!0;function F(L){const $=L[0].intersectionRatio;if($!==c){if(!T)return f();$?f(!1,$):l=setTimeout(()=>{f(!1,1e-7)},1e3)}T=!1}try{o=new IntersectionObserver(F,{...R,root:a.ownerDocument})}catch{o=new IntersectionObserver(F,R)}o.observe(n)}return f(!0),u}function r2(n,r,o,l){l===void 0&&(l={});const{ancestorScroll:a=!0,ancestorResize:u=!0,elementResize:f=typeof ResizeObserver=="function",layoutShift:v=typeof IntersectionObserver=="function",animationFrame:c=!1}=l,p=pc(n),m=a||u?[...p?Ga(p):[],...Ga(r)]:[];m.forEach(P=>{a&&P.addEventListener("scroll",o,{passive:!0}),u&&P.addEventListener("resize",o)});const g=p&&v?n2(p,o):null;let x=-1,k=null;f&&(k=new ResizeObserver(P=>{let[R]=P;R&&R.target===p&&k&&(k.unobserve(r),cancelAnimationFrame(x),x=requestAnimationFrame(()=>{var T;(T=k)==null||T.observe(r)})),o()}),p&&!c&&k.observe(p),k.observe(r));let b,w=c?sh(n):null;c&&S();function S(){const P=sh(n);w&&(P.x!==w.x||P.y!==w.y||P.width!==w.width||P.height!==w.height)&&o(),w=P,b=requestAnimationFrame(S)}return o(),()=>{var P;m.forEach(R=>{a&&R.removeEventListener("scroll",o),u&&R.removeEventListener("resize",o)}),g==null||g(),(P=k)==null||P.disconnect(),k=null,c&&cancelAnimationFrame(b)}}var Wu=O.useLayoutEffect,o2=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Xa=function(){};function i2(n,r){return r?r[0]==="-"?n+r:n+"__"+r:n}function a2(n,r){for(var o=arguments.length,l=new Array(o>2?o-2:0),a=2;a<o;a++)l[a-2]=arguments[a];var u=[].concat(l);if(r&&n)for(var f in r)r.hasOwnProperty(f)&&r[f]&&u.push("".concat(i2(n,f)));return u.filter(function(v){return v}).map(function(v){return String(v).trim()}).join(" ")}var uh=function(r){return m2(r)?r.filter(Boolean):sr(r)==="object"&&r!==null?[r]:[]},Km=function(r){r.className,r.clearValue,r.cx,r.getStyles,r.getClassNames,r.getValue,r.hasValue,r.isMulti,r.isRtl,r.options,r.selectOption,r.selectProps,r.setValue,r.theme;var o=wn(r,o2);return se({},o)},qe=function(r,o,l){var a=r.cx,u=r.getStyles,f=r.getClassNames,v=r.className;return{css:u(o,r),className:a(l??{},f(o,r),v)}};function ml(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function l2(n){return ml(n)?window.innerHeight:n.clientHeight}function Ym(n){return ml(n)?window.pageYOffset:n.scrollTop}function Ja(n,r){if(ml(n)){window.scrollTo(0,r);return}n.scrollTop=r}function s2(n){var r=getComputedStyle(n),o=r.position==="absolute",l=/(auto|scroll)/;if(r.position==="fixed")return document.documentElement;for(var a=n;a=a.parentElement;)if(r=getComputedStyle(a),!(o&&r.position==="static")&&l.test(r.overflow+r.overflowY+r.overflowX))return a;return document.documentElement}function u2(n,r,o,l){return o*((n=n/l-1)*n*n+1)+r}function Oa(n,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Xa,a=Ym(n),u=r-a,f=10,v=0;function c(){v+=f;var p=u2(v,a,u,o);Ja(n,p),v<o?window.requestAnimationFrame(c):l(n)}c()}function ch(n,r){var o=n.getBoundingClientRect(),l=r.getBoundingClientRect(),a=r.offsetHeight/3;l.bottom+a>o.bottom?Ja(n,Math.min(r.offsetTop+r.clientHeight-n.offsetHeight+a,n.scrollHeight)):l.top-a<o.top&&Ja(n,Math.max(r.offsetTop-a,0))}function c2(n){var r=n.getBoundingClientRect();return{bottom:r.bottom,height:r.height,left:r.left,right:r.right,top:r.top,width:r.width}}function dh(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function d2(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Gm=!1,f2={get passive(){return Gm=!0}},Ra=typeof window<"u"?window:{};Ra.addEventListener&&Ra.removeEventListener&&(Ra.addEventListener("p",Xa,f2),Ra.removeEventListener("p",Xa,!1));var p2=Gm;function h2(n){return n!=null}function m2(n){return Array.isArray(n)}function _a(n,r,o){return n?r:o}var v2=function(r){for(var o=arguments.length,l=new Array(o>1?o-1:0),a=1;a<o;a++)l[a-1]=arguments[a];var u=Object.entries(r).filter(function(f){var v=yn(f,1),c=v[0];return!l.includes(c)});return u.reduce(function(f,v){var c=yn(v,2),p=c[0],m=c[1];return f[p]=m,f},{})},g2=["children","innerProps"],y2=["children","innerProps"];function b2(n){var r=n.maxHeight,o=n.menuEl,l=n.minHeight,a=n.placement,u=n.shouldScroll,f=n.isFixedPosition,v=n.controlHeight,c=s2(o),p={placement:"bottom",maxHeight:r};if(!o||!o.offsetParent)return p;var m=c.getBoundingClientRect(),g=m.height,x=o.getBoundingClientRect(),k=x.bottom,b=x.height,w=x.top,S=o.offsetParent.getBoundingClientRect(),P=S.top,R=f?window.innerHeight:l2(c),T=Ym(c),F=parseInt(getComputedStyle(o).marginBottom,10),L=parseInt(getComputedStyle(o).marginTop,10),$=P-L,U=R-w,Q=$+T,X=g-T-w,me=k-R+T+F,we=T+w-L,Te=160;switch(a){case"auto":case"bottom":if(U>=b)return{placement:"bottom",maxHeight:r};if(X>=b&&!f)return u&&Oa(c,me,Te),{placement:"bottom",maxHeight:r};if(!f&&X>=l||f&&U>=l){u&&Oa(c,me,Te);var Ie=f?U-F:X-F;return{placement:"bottom",maxHeight:Ie}}if(a==="auto"||f){var Me=r,ve=f?$:Q;return ve>=l&&(Me=Math.min(ve-F-v,r)),{placement:"top",maxHeight:Me}}if(a==="bottom")return u&&Ja(c,me),{placement:"bottom",maxHeight:r};break;case"top":if($>=b)return{placement:"top",maxHeight:r};if(Q>=b&&!f)return u&&Oa(c,we,Te),{placement:"top",maxHeight:r};if(!f&&Q>=l||f&&$>=l){var xe=r;return(!f&&Q>=l||f&&$>=l)&&(xe=f?$-L:Q-L),u&&Oa(c,we,Te),{placement:"top",maxHeight:xe}}return{placement:"bottom",maxHeight:r};default:throw new Error('Invalid placement provided "'.concat(a,'".'))}return p}function w2(n){var r={bottom:"top",top:"bottom"};return n?r[n]:"bottom"}var Xm=function(r){return r==="auto"?"bottom":r},x2=function(r,o){var l,a=r.placement,u=r.theme,f=u.borderRadius,v=u.spacing,c=u.colors;return se((l={label:"menu"},Bo(l,w2(a),"100%"),Bo(l,"position","absolute"),Bo(l,"width","100%"),Bo(l,"zIndex",1),l),o?{}:{backgroundColor:c.neutral0,borderRadius:f,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:v.menuGutter,marginTop:v.menuGutter})},Jm=O.createContext(null),S2=function(r){var o=r.children,l=r.minMenuHeight,a=r.maxMenuHeight,u=r.menuPlacement,f=r.menuPosition,v=r.menuShouldScrollIntoView,c=r.theme,p=O.useContext(Jm)||{},m=p.setPortalPlacement,g=O.useRef(null),x=O.useState(a),k=yn(x,2),b=k[0],w=k[1],S=O.useState(null),P=yn(S,2),R=P[0],T=P[1],F=c.spacing.controlHeight;return Wu(function(){var L=g.current;if(L){var $=f==="fixed",U=v&&!$,Q=b2({maxHeight:a,menuEl:L,minHeight:l,placement:u,shouldScroll:U,isFixedPosition:$,controlHeight:F});w(Q.maxHeight),T(Q.placement),m==null||m(Q.placement)}},[a,u,f,v,l,m,F]),o({ref:g,placerProps:se(se({},r),{},{placement:R||Xm(u),maxHeight:b})})},k2=function(r){var o=r.children,l=r.innerRef,a=r.innerProps;return ie("div",ue({},qe(r,"menu",{menu:!0}),{ref:l},a),o)},E2=k2,P2=function(r,o){var l=r.maxHeight,a=r.theme.spacing.baseUnit;return se({maxHeight:l,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},o?{}:{paddingBottom:a,paddingTop:a})},C2=function(r){var o=r.children,l=r.innerProps,a=r.innerRef,u=r.isMulti;return ie("div",ue({},qe(r,"menuList",{"menu-list":!0,"menu-list--is-multi":u}),{ref:a},l),o)},Zm=function(r,o){var l=r.theme,a=l.spacing.baseUnit,u=l.colors;return se({textAlign:"center"},o?{}:{color:u.neutral40,padding:"".concat(a*2,"px ").concat(a*3,"px")})},O2=Zm,R2=Zm,_2=function(r){var o=r.children,l=o===void 0?"No options":o,a=r.innerProps,u=wn(r,g2);return ie("div",ue({},qe(se(se({},u),{},{children:l,innerProps:a}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),a),l)},T2=function(r){var o=r.children,l=o===void 0?"Loading...":o,a=r.innerProps,u=wn(r,y2);return ie("div",ue({},qe(se(se({},u),{},{children:l,innerProps:a}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),a),l)},M2=function(r){var o=r.rect,l=r.offset,a=r.position;return{left:o.left,position:a,top:l,width:o.width,zIndex:1}},N2=function(r){var o=r.appendTo,l=r.children,a=r.controlElement,u=r.innerProps,f=r.menuPlacement,v=r.menuPosition,c=O.useRef(null),p=O.useRef(null),m=O.useState(Xm(f)),g=yn(m,2),x=g[0],k=g[1],b=O.useMemo(function(){return{setPortalPlacement:k}},[]),w=O.useState(null),S=yn(w,2),P=S[0],R=S[1],T=O.useCallback(function(){if(a){var U=c2(a),Q=v==="fixed"?0:window.pageYOffset,X=U[x]+Q;(X!==(P==null?void 0:P.offset)||U.left!==(P==null?void 0:P.rect.left)||U.width!==(P==null?void 0:P.rect.width))&&R({offset:X,rect:U})}},[a,v,x,P==null?void 0:P.offset,P==null?void 0:P.rect.left,P==null?void 0:P.rect.width]);Wu(function(){T()},[T]);var F=O.useCallback(function(){typeof p.current=="function"&&(p.current(),p.current=null),a&&c.current&&(p.current=r2(a,c.current,T,{elementResize:"ResizeObserver"in window}))},[a,T]);Wu(function(){F()},[F]);var L=O.useCallback(function(U){c.current=U,F()},[F]);if(!o&&v!=="fixed"||!P)return null;var $=ie("div",ue({ref:L},qe(se(se({},r),{},{offset:P.offset,position:v,rect:P.rect}),"menuPortal",{"menu-portal":!0}),u),l);return ie(Jm.Provider,{value:b},o?G1.createPortal($,o):$)},L2=function(r){var o=r.isDisabled,l=r.isRtl;return{label:"container",direction:l?"rtl":void 0,pointerEvents:o?"none":void 0,position:"relative"}},I2=function(r){var o=r.children,l=r.innerProps,a=r.isDisabled,u=r.isRtl;return ie("div",ue({},qe(r,"container",{"--is-disabled":a,"--is-rtl":u}),l),o)},D2=function(r,o){var l=r.theme.spacing,a=r.isMulti,u=r.hasValue,f=r.selectProps.controlShouldRenderValue;return se({alignItems:"center",display:a&&u&&f?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},o?{}:{padding:"".concat(l.baseUnit/2,"px ").concat(l.baseUnit*2,"px")})},A2=function(r){var o=r.children,l=r.innerProps,a=r.isMulti,u=r.hasValue;return ie("div",ue({},qe(r,"valueContainer",{"value-container":!0,"value-container--is-multi":a,"value-container--has-value":u}),l),o)},z2=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},F2=function(r){var o=r.children,l=r.innerProps;return ie("div",ue({},qe(r,"indicatorsContainer",{indicators:!0}),l),o)},fh,j2=["size"],V2=["innerProps","isRtl","size"],$2={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},e0=function(r){var o=r.size,l=wn(r,j2);return ie("svg",ue({height:o,width:o,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:$2},l))},hc=function(r){return ie(e0,ue({size:20},r),ie("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},t0=function(r){return ie(e0,ue({size:20},r),ie("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},n0=function(r,o){var l=r.isFocused,a=r.theme,u=a.spacing.baseUnit,f=a.colors;return se({label:"indicatorContainer",display:"flex",transition:"color 150ms"},o?{}:{color:l?f.neutral60:f.neutral20,padding:u*2,":hover":{color:l?f.neutral80:f.neutral40}})},U2=n0,B2=function(r){var o=r.children,l=r.innerProps;return ie("div",ue({},qe(r,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),l),o||ie(t0,null))},H2=n0,q2=function(r){var o=r.children,l=r.innerProps;return ie("div",ue({},qe(r,"clearIndicator",{indicator:!0,"clear-indicator":!0}),l),o||ie(hc,null))},W2=function(r,o){var l=r.isDisabled,a=r.theme,u=a.spacing.baseUnit,f=a.colors;return se({label:"indicatorSeparator",alignSelf:"stretch",width:1},o?{}:{backgroundColor:l?f.neutral10:f.neutral20,marginBottom:u*2,marginTop:u*2})},Q2=function(r){var o=r.innerProps;return ie("span",ue({},o,qe(r,"indicatorSeparator",{"indicator-separator":!0})))},K2=Bx(fh||(fh=Hx([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Y2=function(r,o){var l=r.isFocused,a=r.size,u=r.theme,f=u.colors,v=u.spacing.baseUnit;return se({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:a,lineHeight:1,marginRight:a,textAlign:"center",verticalAlign:"middle"},o?{}:{color:l?f.neutral60:f.neutral20,padding:v*2})},ku=function(r){var o=r.delay,l=r.offset;return ie("span",{css:cc({animation:"".concat(K2," 1s ease-in-out ").concat(o,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:l?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},G2=function(r){var o=r.innerProps,l=r.isRtl,a=r.size,u=a===void 0?4:a,f=wn(r,V2);return ie("div",ue({},qe(se(se({},f),{},{innerProps:o,isRtl:l,size:u}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),o),ie(ku,{delay:0,offset:l}),ie(ku,{delay:160,offset:!0}),ie(ku,{delay:320,offset:!l}))},X2=function(r,o){var l=r.isDisabled,a=r.isFocused,u=r.theme,f=u.colors,v=u.borderRadius,c=u.spacing;return se({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:c.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},o?{}:{backgroundColor:l?f.neutral5:f.neutral0,borderColor:l?f.neutral10:a?f.primary:f.neutral20,borderRadius:v,borderStyle:"solid",borderWidth:1,boxShadow:a?"0 0 0 1px ".concat(f.primary):void 0,"&:hover":{borderColor:a?f.primary:f.neutral30}})},J2=function(r){var o=r.children,l=r.isDisabled,a=r.isFocused,u=r.innerRef,f=r.innerProps,v=r.menuIsOpen;return ie("div",ue({ref:u},qe(r,"control",{control:!0,"control--is-disabled":l,"control--is-focused":a,"control--menu-is-open":v}),f,{"aria-disabled":l||void 0}),o)},Z2=J2,eS=["data"],tS=function(r,o){var l=r.theme.spacing;return o?{}:{paddingBottom:l.baseUnit*2,paddingTop:l.baseUnit*2}},nS=function(r){var o=r.children,l=r.cx,a=r.getStyles,u=r.getClassNames,f=r.Heading,v=r.headingProps,c=r.innerProps,p=r.label,m=r.theme,g=r.selectProps;return ie("div",ue({},qe(r,"group",{group:!0}),c),ie(f,ue({},v,{selectProps:g,theme:m,getStyles:a,getClassNames:u,cx:l}),p),ie("div",null,o))},rS=function(r,o){var l=r.theme,a=l.colors,u=l.spacing;return se({label:"group",cursor:"default",display:"block"},o?{}:{color:a.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:u.baseUnit*3,paddingRight:u.baseUnit*3,textTransform:"uppercase"})},oS=function(r){var o=Km(r);o.data;var l=wn(o,eS);return ie("div",ue({},qe(r,"groupHeading",{"group-heading":!0}),l))},iS=nS,aS=["innerRef","isDisabled","isHidden","inputClassName"],lS=function(r,o){var l=r.isDisabled,a=r.value,u=r.theme,f=u.spacing,v=u.colors;return se(se({visibility:l?"hidden":"visible",transform:a?"translateZ(0)":""},sS),o?{}:{margin:f.baseUnit/2,paddingBottom:f.baseUnit/2,paddingTop:f.baseUnit/2,color:v.neutral80})},r0={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},sS={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":se({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},r0)},uS=function(r){return se({label:"input",color:"inherit",background:0,opacity:r?0:1,width:"100%"},r0)},cS=function(r){var o=r.cx,l=r.value,a=Km(r),u=a.innerRef,f=a.isDisabled,v=a.isHidden,c=a.inputClassName,p=wn(a,aS);return ie("div",ue({},qe(r,"input",{"input-container":!0}),{"data-value":l||""}),ie("input",ue({className:o({input:!0},c),ref:u,style:uS(v),disabled:f},p)))},dS=cS,fS=function(r,o){var l=r.theme,a=l.spacing,u=l.borderRadius,f=l.colors;return se({label:"multiValue",display:"flex",minWidth:0},o?{}:{backgroundColor:f.neutral10,borderRadius:u/2,margin:a.baseUnit/2})},pS=function(r,o){var l=r.theme,a=l.borderRadius,u=l.colors,f=r.cropWithEllipsis;return se({overflow:"hidden",textOverflow:f||f===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},o?{}:{borderRadius:a/2,color:u.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},hS=function(r,o){var l=r.theme,a=l.spacing,u=l.borderRadius,f=l.colors,v=r.isFocused;return se({alignItems:"center",display:"flex"},o?{}:{borderRadius:u/2,backgroundColor:v?f.dangerLight:void 0,paddingLeft:a.baseUnit,paddingRight:a.baseUnit,":hover":{backgroundColor:f.dangerLight,color:f.danger}})},o0=function(r){var o=r.children,l=r.innerProps;return ie("div",l,o)},mS=o0,vS=o0;function gS(n){var r=n.children,o=n.innerProps;return ie("div",ue({role:"button"},o),r||ie(hc,{size:14}))}var yS=function(r){var o=r.children,l=r.components,a=r.data,u=r.innerProps,f=r.isDisabled,v=r.removeProps,c=r.selectProps,p=l.Container,m=l.Label,g=l.Remove;return ie(p,{data:a,innerProps:se(se({},qe(r,"multiValue",{"multi-value":!0,"multi-value--is-disabled":f})),u),selectProps:c},ie(m,{data:a,innerProps:se({},qe(r,"multiValueLabel",{"multi-value__label":!0})),selectProps:c},o),ie(g,{data:a,innerProps:se(se({},qe(r,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(o||"option")},v),selectProps:c}))},bS=yS,wS=function(r,o){var l=r.isDisabled,a=r.isFocused,u=r.isSelected,f=r.theme,v=f.spacing,c=f.colors;return se({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},o?{}:{backgroundColor:u?c.primary:a?c.primary25:"transparent",color:l?c.neutral20:u?c.neutral0:"inherit",padding:"".concat(v.baseUnit*2,"px ").concat(v.baseUnit*3,"px"),":active":{backgroundColor:l?void 0:u?c.primary:c.primary50}})},xS=function(r){var o=r.children,l=r.isDisabled,a=r.isFocused,u=r.isSelected,f=r.innerRef,v=r.innerProps;return ie("div",ue({},qe(r,"option",{option:!0,"option--is-disabled":l,"option--is-focused":a,"option--is-selected":u}),{ref:f,"aria-disabled":l},v),o)},SS=xS,kS=function(r,o){var l=r.theme,a=l.spacing,u=l.colors;return se({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},o?{}:{color:u.neutral50,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},ES=function(r){var o=r.children,l=r.innerProps;return ie("div",ue({},qe(r,"placeholder",{placeholder:!0}),l),o)},PS=ES,CS=function(r,o){var l=r.isDisabled,a=r.theme,u=a.spacing,f=a.colors;return se({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o?{}:{color:l?f.neutral40:f.neutral80,marginLeft:u.baseUnit/2,marginRight:u.baseUnit/2})},OS=function(r){var o=r.children,l=r.isDisabled,a=r.innerProps;return ie("div",ue({},qe(r,"singleValue",{"single-value":!0,"single-value--is-disabled":l}),a),o)},RS=OS,_S={ClearIndicator:q2,Control:Z2,DropdownIndicator:B2,DownChevron:t0,CrossIcon:hc,Group:iS,GroupHeading:oS,IndicatorsContainer:F2,IndicatorSeparator:Q2,Input:dS,LoadingIndicator:G2,Menu:E2,MenuList:C2,MenuPortal:N2,LoadingMessage:T2,NoOptionsMessage:_2,MultiValue:bS,MultiValueContainer:mS,MultiValueLabel:vS,MultiValueRemove:gS,Option:SS,Placeholder:PS,SelectContainer:I2,SingleValue:RS,ValueContainer:A2},TS=function(r){return se(se({},_S),r.components)},ph=Number.isNaN||function(r){return typeof r=="number"&&r!==r};function MS(n,r){return!!(n===r||ph(n)&&ph(r))}function NS(n,r){if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!MS(n[o],r[o]))return!1;return!0}function LS(n,r){r===void 0&&(r=NS);var o=null;function l(){for(var a=[],u=0;u<arguments.length;u++)a[u]=arguments[u];if(o&&o.lastThis===this&&r(a,o.lastArgs))return o.lastResult;var f=n.apply(this,a);return o={lastResult:f,lastArgs:a,lastThis:this},f}return l.clear=function(){o=null},l}var IS={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},DS=function(r){return ie("span",ue({css:IS},r))},hh=DS,AS={guidance:function(r){var o=r.isSearchable,l=r.isMulti,a=r.tabSelectsValue,u=r.context,f=r.isInitialFocus;switch(u){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(a?", press Tab to select the option and exit the menu":"",".");case"input":return f?"".concat(r["aria-label"]||"Select"," is focused ").concat(o?",type to refine list":"",", press Down to open the menu, ").concat(l?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(r){var o=r.action,l=r.label,a=l===void 0?"":l,u=r.labels,f=r.isDisabled;switch(o){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(a,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(u.length>1?"s":""," ").concat(u.join(","),", selected.");case"select-option":return f?"option ".concat(a," is disabled. Select another option."):"option ".concat(a,", selected.");default:return""}},onFocus:function(r){var o=r.context,l=r.focused,a=r.options,u=r.label,f=u===void 0?"":u,v=r.selectValue,c=r.isDisabled,p=r.isSelected,m=r.isAppleDevice,g=function(w,S){return w&&w.length?"".concat(w.indexOf(S)+1," of ").concat(w.length):""};if(o==="value"&&v)return"value ".concat(f," focused, ").concat(g(v,l),".");if(o==="menu"&&m){var x=c?" disabled":"",k="".concat(p?" selected":"").concat(x);return"".concat(f).concat(k,", ").concat(g(a,l),".")}return""},onFilter:function(r){var o=r.inputValue,l=r.resultsMessage;return"".concat(l).concat(o?" for search term "+o:"",".")}},zS=function(r){var o=r.ariaSelection,l=r.focusedOption,a=r.focusedValue,u=r.focusableOptions,f=r.isFocused,v=r.selectValue,c=r.selectProps,p=r.id,m=r.isAppleDevice,g=c.ariaLiveMessages,x=c.getOptionLabel,k=c.inputValue,b=c.isMulti,w=c.isOptionDisabled,S=c.isSearchable,P=c.menuIsOpen,R=c.options,T=c.screenReaderStatus,F=c.tabSelectsValue,L=c.isLoading,$=c["aria-label"],U=c["aria-live"],Q=O.useMemo(function(){return se(se({},AS),g||{})},[g]),X=O.useMemo(function(){var ve="";if(o&&Q.onChange){var xe=o.option,ge=o.options,W=o.removedValue,ee=o.removedValues,K=o.value,M=function(ye){return Array.isArray(ye)?null:ye},j=W||xe||M(K),re=j?x(j):"",ce=ge||ee||void 0,he=ce?ce.map(x):[],fe=se({isDisabled:j&&w(j,v),label:re,labels:he},o);ve=Q.onChange(fe)}return ve},[o,Q,w,v,x]),me=O.useMemo(function(){var ve="",xe=l||a,ge=!!(l&&v&&v.includes(l));if(xe&&Q.onFocus){var W={focused:xe,label:x(xe),isDisabled:w(xe,v),isSelected:ge,options:u,context:xe===l?"menu":"value",selectValue:v,isAppleDevice:m};ve=Q.onFocus(W)}return ve},[l,a,x,w,Q,u,v,m]),we=O.useMemo(function(){var ve="";if(P&&R.length&&!L&&Q.onFilter){var xe=T({count:u.length});ve=Q.onFilter({inputValue:k,resultsMessage:xe})}return ve},[u,k,P,Q,R,T,L]),Te=(o==null?void 0:o.action)==="initial-input-focus",Ie=O.useMemo(function(){var ve="";if(Q.guidance){var xe=a?"value":P?"menu":"input";ve=Q.guidance({"aria-label":$,context:xe,isDisabled:l&&w(l,v),isMulti:b,isSearchable:S,tabSelectsValue:F,isInitialFocus:Te})}return ve},[$,l,a,b,w,S,P,Q,v,F,Te]),Me=ie(O.Fragment,null,ie("span",{id:"aria-selection"},X),ie("span",{id:"aria-focused"},me),ie("span",{id:"aria-results"},we),ie("span",{id:"aria-guidance"},Ie));return ie(O.Fragment,null,ie(hh,{id:p},Te&&Me),ie(hh,{"aria-live":U,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},f&&!Te&&Me))},FS=zS,Qu=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],jS=new RegExp("["+Qu.map(function(n){return n.letters}).join("")+"]","g"),i0={};for(var Eu=0;Eu<Qu.length;Eu++)for(var Pu=Qu[Eu],Cu=0;Cu<Pu.letters.length;Cu++)i0[Pu.letters[Cu]]=Pu.base;var a0=function(r){return r.replace(jS,function(o){return i0[o]})},VS=LS(a0),mh=function(r){return r.replace(/^\s+|\s+$/g,"")},$S=function(r){return"".concat(r.label," ").concat(r.value)},US=function(r){return function(o,l){if(o.data.__isNew__)return!0;var a=se({ignoreCase:!0,ignoreAccents:!0,stringify:$S,trim:!0,matchFrom:"any"},r),u=a.ignoreCase,f=a.ignoreAccents,v=a.stringify,c=a.trim,p=a.matchFrom,m=c?mh(l):l,g=c?mh(v(o)):v(o);return u&&(m=m.toLowerCase(),g=g.toLowerCase()),f&&(m=VS(m),g=a0(g)),p==="start"?g.substr(0,m.length)===m:g.indexOf(m)>-1}},BS=["innerRef"];function HS(n){var r=n.innerRef,o=wn(n,BS),l=v2(o,"onExited","in","enter","exit","appear");return ie("input",ue({ref:r},l,{css:cc({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var qS=function(r){r.cancelable&&r.preventDefault(),r.stopPropagation()};function WS(n){var r=n.isEnabled,o=n.onBottomArrive,l=n.onBottomLeave,a=n.onTopArrive,u=n.onTopLeave,f=O.useRef(!1),v=O.useRef(!1),c=O.useRef(0),p=O.useRef(null),m=O.useCallback(function(S,P){if(p.current!==null){var R=p.current,T=R.scrollTop,F=R.scrollHeight,L=R.clientHeight,$=p.current,U=P>0,Q=F-L-T,X=!1;Q>P&&f.current&&(l&&l(S),f.current=!1),U&&v.current&&(u&&u(S),v.current=!1),U&&P>Q?(o&&!f.current&&o(S),$.scrollTop=F,X=!0,f.current=!0):!U&&-P>T&&(a&&!v.current&&a(S),$.scrollTop=0,X=!0,v.current=!0),X&&qS(S)}},[o,l,a,u]),g=O.useCallback(function(S){m(S,S.deltaY)},[m]),x=O.useCallback(function(S){c.current=S.changedTouches[0].clientY},[]),k=O.useCallback(function(S){var P=c.current-S.changedTouches[0].clientY;m(S,P)},[m]),b=O.useCallback(function(S){if(S){var P=p2?{passive:!1}:!1;S.addEventListener("wheel",g,P),S.addEventListener("touchstart",x,P),S.addEventListener("touchmove",k,P)}},[k,x,g]),w=O.useCallback(function(S){S&&(S.removeEventListener("wheel",g,!1),S.removeEventListener("touchstart",x,!1),S.removeEventListener("touchmove",k,!1))},[k,x,g]);return O.useEffect(function(){if(r){var S=p.current;return b(S),function(){w(S)}}},[r,b,w]),function(S){p.current=S}}var vh=["boxSizing","height","overflow","paddingRight","position"],gh={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function yh(n){n.cancelable&&n.preventDefault()}function bh(n){n.stopPropagation()}function wh(){var n=this.scrollTop,r=this.scrollHeight,o=n+this.offsetHeight;n===0?this.scrollTop=1:o===r&&(this.scrollTop=n-1)}function xh(){return"ontouchstart"in window||navigator.maxTouchPoints}var Sh=!!(typeof window<"u"&&window.document&&window.document.createElement),Vo=0,Fr={capture:!1,passive:!1};function QS(n){var r=n.isEnabled,o=n.accountForScrollbars,l=o===void 0?!0:o,a=O.useRef({}),u=O.useRef(null),f=O.useCallback(function(c){if(Sh){var p=document.body,m=p&&p.style;if(l&&vh.forEach(function(b){var w=m&&m[b];a.current[b]=w}),l&&Vo<1){var g=parseInt(a.current.paddingRight,10)||0,x=document.body?document.body.clientWidth:0,k=window.innerWidth-x+g||0;Object.keys(gh).forEach(function(b){var w=gh[b];m&&(m[b]=w)}),m&&(m.paddingRight="".concat(k,"px"))}p&&xh()&&(p.addEventListener("touchmove",yh,Fr),c&&(c.addEventListener("touchstart",wh,Fr),c.addEventListener("touchmove",bh,Fr))),Vo+=1}},[l]),v=O.useCallback(function(c){if(Sh){var p=document.body,m=p&&p.style;Vo=Math.max(Vo-1,0),l&&Vo<1&&vh.forEach(function(g){var x=a.current[g];m&&(m[g]=x)}),p&&xh()&&(p.removeEventListener("touchmove",yh,Fr),c&&(c.removeEventListener("touchstart",wh,Fr),c.removeEventListener("touchmove",bh,Fr)))}},[l]);return O.useEffect(function(){if(r){var c=u.current;return f(c),function(){v(c)}}},[r,f,v]),function(c){u.current=c}}var KS=function(r){var o=r.target;return o.ownerDocument.activeElement&&o.ownerDocument.activeElement.blur()},YS={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function GS(n){var r=n.children,o=n.lockEnabled,l=n.captureEnabled,a=l===void 0?!0:l,u=n.onBottomArrive,f=n.onBottomLeave,v=n.onTopArrive,c=n.onTopLeave,p=WS({isEnabled:a,onBottomArrive:u,onBottomLeave:f,onTopArrive:v,onTopLeave:c}),m=QS({isEnabled:o}),g=function(k){p(k),m(k)};return ie(O.Fragment,null,o&&ie("div",{onClick:KS,css:YS}),r(g))}var XS={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},JS=function(r){var o=r.name,l=r.onFocus;return ie("input",{required:!0,name:o,tabIndex:-1,"aria-hidden":"true",onFocus:l,css:XS,value:"",onChange:function(){}})},ZS=JS;function mc(n){var r;return typeof window<"u"&&window.navigator!=null?n.test(((r=window.navigator.userAgentData)===null||r===void 0?void 0:r.platform)||window.navigator.platform):!1}function e5(){return mc(/^iPhone/i)}function l0(){return mc(/^Mac/i)}function t5(){return mc(/^iPad/i)||l0()&&navigator.maxTouchPoints>1}function n5(){return e5()||t5()}function r5(){return l0()||n5()}var o5=function(r){return r.label},i5=function(r){return r.label},a5=function(r){return r.value},l5=function(r){return!!r.isDisabled},s5={clearIndicator:H2,container:L2,control:X2,dropdownIndicator:U2,group:tS,groupHeading:rS,indicatorsContainer:z2,indicatorSeparator:W2,input:lS,loadingIndicator:Y2,loadingMessage:R2,menu:x2,menuList:P2,menuPortal:M2,multiValue:fS,multiValueLabel:pS,multiValueRemove:hS,noOptionsMessage:O2,option:wS,placeholder:kS,singleValue:CS,valueContainer:D2},u5={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},c5=4,s0=4,d5=38,f5=s0*2,p5={baseUnit:s0,controlHeight:d5,menuGutter:f5},Ou={borderRadius:c5,colors:u5,spacing:p5},h5={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:dh(),captureMenuScroll:!dh(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:US(),formatGroupLabel:o5,getOptionLabel:i5,getOptionValue:a5,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:l5,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!d2(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(r){var o=r.count;return"".concat(o," result").concat(o!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function kh(n,r,o,l){var a=d0(n,r,o),u=f0(n,r,o),f=c0(n,r),v=Za(n,r);return{type:"option",data:r,isDisabled:a,isSelected:u,label:f,value:v,index:l}}function Fa(n,r){return n.options.map(function(o,l){if("options"in o){var a=o.options.map(function(f,v){return kh(n,f,r,v)}).filter(function(f){return Ph(n,f)});return a.length>0?{type:"group",data:o,options:a,index:l}:void 0}var u=kh(n,o,r,l);return Ph(n,u)?u:void 0}).filter(h2)}function u0(n){return n.reduce(function(r,o){return o.type==="group"?r.push.apply(r,ic(o.options.map(function(l){return l.data}))):r.push(o.data),r},[])}function Eh(n,r){return n.reduce(function(o,l){return l.type==="group"?o.push.apply(o,ic(l.options.map(function(a){return{data:a.data,id:"".concat(r,"-").concat(l.index,"-").concat(a.index)}}))):o.push({data:l.data,id:"".concat(r,"-").concat(l.index)}),o},[])}function m5(n,r){return u0(Fa(n,r))}function Ph(n,r){var o=n.inputValue,l=o===void 0?"":o,a=r.data,u=r.isSelected,f=r.label,v=r.value;return(!h0(n)||!u)&&p0(n,{label:f,value:v,data:a},l)}function v5(n,r){var o=n.focusedValue,l=n.selectValue,a=l.indexOf(o);if(a>-1){var u=r.indexOf(o);if(u>-1)return o;if(a<r.length)return r[a]}return null}function g5(n,r){var o=n.focusedOption;return o&&r.indexOf(o)>-1?o:r[0]}var Ru=function(r,o){var l,a=(l=r.find(function(u){return u.data===o}))===null||l===void 0?void 0:l.id;return a||null},c0=function(r,o){return r.getOptionLabel(o)},Za=function(r,o){return r.getOptionValue(o)};function d0(n,r,o){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(r,o):!1}function f0(n,r,o){if(o.indexOf(r)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(r,o);var l=Za(n,r);return o.some(function(a){return Za(n,a)===l})}function p0(n,r,o){return n.filterOption?n.filterOption(r,o):!0}var h0=function(r){var o=r.hideSelectedOptions,l=r.isMulti;return o===void 0?l:o},y5=1,m0=function(n){Aw(o,n);var r=jw(o);function o(l){var a;if(Iw(this,o),a=r.call(this,l),a.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},a.blockOptionHover=!1,a.isComposing=!1,a.commonProps=void 0,a.initialTouchX=0,a.initialTouchY=0,a.openAfterFocus=!1,a.scrollToFocusedOptionOnUpdate=!1,a.userIsDragging=void 0,a.isAppleDevice=r5(),a.controlRef=null,a.getControlRef=function(c){a.controlRef=c},a.focusedOptionRef=null,a.getFocusedOptionRef=function(c){a.focusedOptionRef=c},a.menuListRef=null,a.getMenuListRef=function(c){a.menuListRef=c},a.inputRef=null,a.getInputRef=function(c){a.inputRef=c},a.focus=a.focusInput,a.blur=a.blurInput,a.onChange=function(c,p){var m=a.props,g=m.onChange,x=m.name;p.name=x,a.ariaOnChange(c,p),g(c,p)},a.setValue=function(c,p,m){var g=a.props,x=g.closeMenuOnSelect,k=g.isMulti,b=g.inputValue;a.onInputChange("",{action:"set-value",prevInputValue:b}),x&&(a.setState({inputIsHiddenAfterUpdate:!k}),a.onMenuClose()),a.setState({clearFocusValueOnUpdate:!0}),a.onChange(c,{action:p,option:m})},a.selectOption=function(c){var p=a.props,m=p.blurInputOnSelect,g=p.isMulti,x=p.name,k=a.state.selectValue,b=g&&a.isOptionSelected(c,k),w=a.isOptionDisabled(c,k);if(b){var S=a.getOptionValue(c);a.setValue(k.filter(function(P){return a.getOptionValue(P)!==S}),"deselect-option",c)}else if(!w)g?a.setValue([].concat(ic(k),[c]),"select-option",c):a.setValue(c,"select-option");else{a.ariaOnChange(c,{action:"select-option",option:c,name:x});return}m&&a.blurInput()},a.removeValue=function(c){var p=a.props.isMulti,m=a.state.selectValue,g=a.getOptionValue(c),x=m.filter(function(b){return a.getOptionValue(b)!==g}),k=_a(p,x,x[0]||null);a.onChange(k,{action:"remove-value",removedValue:c}),a.focusInput()},a.clearValue=function(){var c=a.state.selectValue;a.onChange(_a(a.props.isMulti,[],null),{action:"clear",removedValues:c})},a.popValue=function(){var c=a.props.isMulti,p=a.state.selectValue,m=p[p.length-1],g=p.slice(0,p.length-1),x=_a(c,g,g[0]||null);m&&a.onChange(x,{action:"pop-value",removedValue:m})},a.getFocusedOptionId=function(c){return Ru(a.state.focusableOptionsWithIds,c)},a.getFocusableOptionsWithIds=function(){return Eh(Fa(a.props,a.state.selectValue),a.getElementId("option"))},a.getValue=function(){return a.state.selectValue},a.cx=function(){for(var c=arguments.length,p=new Array(c),m=0;m<c;m++)p[m]=arguments[m];return a2.apply(void 0,[a.props.classNamePrefix].concat(p))},a.getOptionLabel=function(c){return c0(a.props,c)},a.getOptionValue=function(c){return Za(a.props,c)},a.getStyles=function(c,p){var m=a.props.unstyled,g=s5[c](p,m);g.boxSizing="border-box";var x=a.props.styles[c];return x?x(g,p):g},a.getClassNames=function(c,p){var m,g;return(m=(g=a.props.classNames)[c])===null||m===void 0?void 0:m.call(g,p)},a.getElementId=function(c){return"".concat(a.state.instancePrefix,"-").concat(c)},a.getComponents=function(){return TS(a.props)},a.buildCategorizedOptions=function(){return Fa(a.props,a.state.selectValue)},a.getCategorizedOptions=function(){return a.props.menuIsOpen?a.buildCategorizedOptions():[]},a.buildFocusableOptions=function(){return u0(a.buildCategorizedOptions())},a.getFocusableOptions=function(){return a.props.menuIsOpen?a.buildFocusableOptions():[]},a.ariaOnChange=function(c,p){a.setState({ariaSelection:se({value:c},p)})},a.onMenuMouseDown=function(c){c.button===0&&(c.stopPropagation(),c.preventDefault(),a.focusInput())},a.onMenuMouseMove=function(c){a.blockOptionHover=!1},a.onControlMouseDown=function(c){if(!c.defaultPrevented){var p=a.props.openMenuOnClick;a.state.isFocused?a.props.menuIsOpen?c.target.tagName!=="INPUT"&&c.target.tagName!=="TEXTAREA"&&a.onMenuClose():p&&a.openMenu("first"):(p&&(a.openAfterFocus=!0),a.focusInput()),c.target.tagName!=="INPUT"&&c.target.tagName!=="TEXTAREA"&&c.preventDefault()}},a.onDropdownIndicatorMouseDown=function(c){if(!(c&&c.type==="mousedown"&&c.button!==0)&&!a.props.isDisabled){var p=a.props,m=p.isMulti,g=p.menuIsOpen;a.focusInput(),g?(a.setState({inputIsHiddenAfterUpdate:!m}),a.onMenuClose()):a.openMenu("first"),c.preventDefault()}},a.onClearIndicatorMouseDown=function(c){c&&c.type==="mousedown"&&c.button!==0||(a.clearValue(),c.preventDefault(),a.openAfterFocus=!1,c.type==="touchend"?a.focusInput():setTimeout(function(){return a.focusInput()}))},a.onScroll=function(c){typeof a.props.closeMenuOnScroll=="boolean"?c.target instanceof HTMLElement&&ml(c.target)&&a.props.onMenuClose():typeof a.props.closeMenuOnScroll=="function"&&a.props.closeMenuOnScroll(c)&&a.props.onMenuClose()},a.onCompositionStart=function(){a.isComposing=!0},a.onCompositionEnd=function(){a.isComposing=!1},a.onTouchStart=function(c){var p=c.touches,m=p&&p.item(0);m&&(a.initialTouchX=m.clientX,a.initialTouchY=m.clientY,a.userIsDragging=!1)},a.onTouchMove=function(c){var p=c.touches,m=p&&p.item(0);if(m){var g=Math.abs(m.clientX-a.initialTouchX),x=Math.abs(m.clientY-a.initialTouchY),k=5;a.userIsDragging=g>k||x>k}},a.onTouchEnd=function(c){a.userIsDragging||(a.controlRef&&!a.controlRef.contains(c.target)&&a.menuListRef&&!a.menuListRef.contains(c.target)&&a.blurInput(),a.initialTouchX=0,a.initialTouchY=0)},a.onControlTouchEnd=function(c){a.userIsDragging||a.onControlMouseDown(c)},a.onClearIndicatorTouchEnd=function(c){a.userIsDragging||a.onClearIndicatorMouseDown(c)},a.onDropdownIndicatorTouchEnd=function(c){a.userIsDragging||a.onDropdownIndicatorMouseDown(c)},a.handleInputChange=function(c){var p=a.props.inputValue,m=c.currentTarget.value;a.setState({inputIsHiddenAfterUpdate:!1}),a.onInputChange(m,{action:"input-change",prevInputValue:p}),a.props.menuIsOpen||a.onMenuOpen()},a.onInputFocus=function(c){a.props.onFocus&&a.props.onFocus(c),a.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(a.openAfterFocus||a.props.openMenuOnFocus)&&a.openMenu("first"),a.openAfterFocus=!1},a.onInputBlur=function(c){var p=a.props.inputValue;if(a.menuListRef&&a.menuListRef.contains(document.activeElement)){a.inputRef.focus();return}a.props.onBlur&&a.props.onBlur(c),a.onInputChange("",{action:"input-blur",prevInputValue:p}),a.onMenuClose(),a.setState({focusedValue:null,isFocused:!1})},a.onOptionHover=function(c){if(!(a.blockOptionHover||a.state.focusedOption===c)){var p=a.getFocusableOptions(),m=p.indexOf(c);a.setState({focusedOption:c,focusedOptionId:m>-1?a.getFocusedOptionId(c):null})}},a.shouldHideSelectedOptions=function(){return h0(a.props)},a.onValueInputFocus=function(c){c.preventDefault(),c.stopPropagation(),a.focus()},a.onKeyDown=function(c){var p=a.props,m=p.isMulti,g=p.backspaceRemovesValue,x=p.escapeClearsValue,k=p.inputValue,b=p.isClearable,w=p.isDisabled,S=p.menuIsOpen,P=p.onKeyDown,R=p.tabSelectsValue,T=p.openMenuOnFocus,F=a.state,L=F.focusedOption,$=F.focusedValue,U=F.selectValue;if(!w&&!(typeof P=="function"&&(P(c),c.defaultPrevented))){switch(a.blockOptionHover=!0,c.key){case"ArrowLeft":if(!m||k)return;a.focusValue("previous");break;case"ArrowRight":if(!m||k)return;a.focusValue("next");break;case"Delete":case"Backspace":if(k)return;if($)a.removeValue($);else{if(!g)return;m?a.popValue():b&&a.clearValue()}break;case"Tab":if(a.isComposing||c.shiftKey||!S||!R||!L||T&&a.isOptionSelected(L,U))return;a.selectOption(L);break;case"Enter":if(c.keyCode===229)break;if(S){if(!L||a.isComposing)return;a.selectOption(L);break}return;case"Escape":S?(a.setState({inputIsHiddenAfterUpdate:!1}),a.onInputChange("",{action:"menu-close",prevInputValue:k}),a.onMenuClose()):b&&x&&a.clearValue();break;case" ":if(k)return;if(!S){a.openMenu("first");break}if(!L)return;a.selectOption(L);break;case"ArrowUp":S?a.focusOption("up"):a.openMenu("last");break;case"ArrowDown":S?a.focusOption("down"):a.openMenu("first");break;case"PageUp":if(!S)return;a.focusOption("pageup");break;case"PageDown":if(!S)return;a.focusOption("pagedown");break;case"Home":if(!S)return;a.focusOption("first");break;case"End":if(!S)return;a.focusOption("last");break;default:return}c.preventDefault()}},a.state.instancePrefix="react-select-"+(a.props.instanceId||++y5),a.state.selectValue=uh(l.value),l.menuIsOpen&&a.state.selectValue.length){var u=a.getFocusableOptionsWithIds(),f=a.buildFocusableOptions(),v=f.indexOf(a.state.selectValue[0]);a.state.focusableOptionsWithIds=u,a.state.focusedOption=f[v],a.state.focusedOptionId=Ru(u,f[v])}return a}return Dw(o,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&ch(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(a){var u=this.props,f=u.isDisabled,v=u.menuIsOpen,c=this.state.isFocused;(c&&!f&&a.isDisabled||c&&v&&!a.menuIsOpen)&&this.focusInput(),c&&f&&!a.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!c&&!f&&a.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(ch(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(a,u){this.props.onInputChange(a,u)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(a){var u=this,f=this.state,v=f.selectValue,c=f.isFocused,p=this.buildFocusableOptions(),m=a==="first"?0:p.length-1;if(!this.props.isMulti){var g=p.indexOf(v[0]);g>-1&&(m=g)}this.scrollToFocusedOptionOnUpdate=!(c&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:p[m],focusedOptionId:this.getFocusedOptionId(p[m])},function(){return u.onMenuOpen()})}},{key:"focusValue",value:function(a){var u=this.state,f=u.selectValue,v=u.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var c=f.indexOf(v);v||(c=-1);var p=f.length-1,m=-1;if(f.length){switch(a){case"previous":c===0?m=0:c===-1?m=p:m=c-1;break;case"next":c>-1&&c<p&&(m=c+1);break}this.setState({inputIsHidden:m!==-1,focusedValue:f[m]})}}}},{key:"focusOption",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",u=this.props.pageSize,f=this.state.focusedOption,v=this.getFocusableOptions();if(v.length){var c=0,p=v.indexOf(f);f||(p=-1),a==="up"?c=p>0?p-1:v.length-1:a==="down"?c=(p+1)%v.length:a==="pageup"?(c=p-u,c<0&&(c=0)):a==="pagedown"?(c=p+u,c>v.length-1&&(c=v.length-1)):a==="last"&&(c=v.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:v[c],focusedValue:null,focusedOptionId:this.getFocusedOptionId(v[c])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Ou):se(se({},Ou),this.props.theme):Ou}},{key:"getCommonProps",value:function(){var a=this.clearValue,u=this.cx,f=this.getStyles,v=this.getClassNames,c=this.getValue,p=this.selectOption,m=this.setValue,g=this.props,x=g.isMulti,k=g.isRtl,b=g.options,w=this.hasValue();return{clearValue:a,cx:u,getStyles:f,getClassNames:v,getValue:c,hasValue:w,isMulti:x,isRtl:k,options:b,selectOption:p,selectProps:g,setValue:m,theme:this.getTheme()}}},{key:"hasValue",value:function(){var a=this.state.selectValue;return a.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var a=this.props,u=a.isClearable,f=a.isMulti;return u===void 0?f:u}},{key:"isOptionDisabled",value:function(a,u){return d0(this.props,a,u)}},{key:"isOptionSelected",value:function(a,u){return f0(this.props,a,u)}},{key:"filterOption",value:function(a,u){return p0(this.props,a,u)}},{key:"formatOptionLabel",value:function(a,u){if(typeof this.props.formatOptionLabel=="function"){var f=this.props.inputValue,v=this.state.selectValue;return this.props.formatOptionLabel(a,{context:u,inputValue:f,selectValue:v})}else return this.getOptionLabel(a)}},{key:"formatGroupLabel",value:function(a){return this.props.formatGroupLabel(a)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var a=this.props,u=a.isDisabled,f=a.isSearchable,v=a.inputId,c=a.inputValue,p=a.tabIndex,m=a.form,g=a.menuIsOpen,x=a.required,k=this.getComponents(),b=k.Input,w=this.state,S=w.inputIsHidden,P=w.ariaSelection,R=this.commonProps,T=v||this.getElementId("input"),F=se(se(se({"aria-autocomplete":"list","aria-expanded":g,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":x,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},g&&{"aria-controls":this.getElementId("listbox")}),!f&&{"aria-readonly":!0}),this.hasValue()?(P==null?void 0:P.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return f?O.createElement(b,ue({},R,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:T,innerRef:this.getInputRef,isDisabled:u,isHidden:S,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:p,form:m,type:"text",value:c},F)):O.createElement(HS,ue({id:T,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Xa,onFocus:this.onInputFocus,disabled:u,tabIndex:p,inputMode:"none",form:m,value:""},F))}},{key:"renderPlaceholderOrValue",value:function(){var a=this,u=this.getComponents(),f=u.MultiValue,v=u.MultiValueContainer,c=u.MultiValueLabel,p=u.MultiValueRemove,m=u.SingleValue,g=u.Placeholder,x=this.commonProps,k=this.props,b=k.controlShouldRenderValue,w=k.isDisabled,S=k.isMulti,P=k.inputValue,R=k.placeholder,T=this.state,F=T.selectValue,L=T.focusedValue,$=T.isFocused;if(!this.hasValue()||!b)return P?null:O.createElement(g,ue({},x,{key:"placeholder",isDisabled:w,isFocused:$,innerProps:{id:this.getElementId("placeholder")}}),R);if(S)return F.map(function(Q,X){var me=Q===L,we="".concat(a.getOptionLabel(Q),"-").concat(a.getOptionValue(Q));return O.createElement(f,ue({},x,{components:{Container:v,Label:c,Remove:p},isFocused:me,isDisabled:w,key:we,index:X,removeProps:{onClick:function(){return a.removeValue(Q)},onTouchEnd:function(){return a.removeValue(Q)},onMouseDown:function(Ie){Ie.preventDefault()}},data:Q}),a.formatOptionLabel(Q,"value"))});if(P)return null;var U=F[0];return O.createElement(m,ue({},x,{data:U,isDisabled:w}),this.formatOptionLabel(U,"value"))}},{key:"renderClearIndicator",value:function(){var a=this.getComponents(),u=a.ClearIndicator,f=this.commonProps,v=this.props,c=v.isDisabled,p=v.isLoading,m=this.state.isFocused;if(!this.isClearable()||!u||c||!this.hasValue()||p)return null;var g={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return O.createElement(u,ue({},f,{innerProps:g,isFocused:m}))}},{key:"renderLoadingIndicator",value:function(){var a=this.getComponents(),u=a.LoadingIndicator,f=this.commonProps,v=this.props,c=v.isDisabled,p=v.isLoading,m=this.state.isFocused;if(!u||!p)return null;var g={"aria-hidden":"true"};return O.createElement(u,ue({},f,{innerProps:g,isDisabled:c,isFocused:m}))}},{key:"renderIndicatorSeparator",value:function(){var a=this.getComponents(),u=a.DropdownIndicator,f=a.IndicatorSeparator;if(!u||!f)return null;var v=this.commonProps,c=this.props.isDisabled,p=this.state.isFocused;return O.createElement(f,ue({},v,{isDisabled:c,isFocused:p}))}},{key:"renderDropdownIndicator",value:function(){var a=this.getComponents(),u=a.DropdownIndicator;if(!u)return null;var f=this.commonProps,v=this.props.isDisabled,c=this.state.isFocused,p={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return O.createElement(u,ue({},f,{innerProps:p,isDisabled:v,isFocused:c}))}},{key:"renderMenu",value:function(){var a=this,u=this.getComponents(),f=u.Group,v=u.GroupHeading,c=u.Menu,p=u.MenuList,m=u.MenuPortal,g=u.LoadingMessage,x=u.NoOptionsMessage,k=u.Option,b=this.commonProps,w=this.state.focusedOption,S=this.props,P=S.captureMenuScroll,R=S.inputValue,T=S.isLoading,F=S.loadingMessage,L=S.minMenuHeight,$=S.maxMenuHeight,U=S.menuIsOpen,Q=S.menuPlacement,X=S.menuPosition,me=S.menuPortalTarget,we=S.menuShouldBlockScroll,Te=S.menuShouldScrollIntoView,Ie=S.noOptionsMessage,Me=S.onMenuScrollToTop,ve=S.onMenuScrollToBottom;if(!U)return null;var xe=function(re,ce){var he=re.type,fe=re.data,Ee=re.isDisabled,ye=re.isSelected,Ne=re.label,ft=re.value,Hn=w===fe,Wr=Ee?void 0:function(){return a.onOptionHover(fe)},cr=Ee?void 0:function(){return a.selectOption(fe)},dr="".concat(a.getElementId("option"),"-").concat(ce),li={id:dr,onClick:cr,onMouseMove:Wr,onMouseOver:Wr,tabIndex:-1,role:"option","aria-selected":a.isAppleDevice?void 0:ye};return O.createElement(k,ue({},b,{innerProps:li,data:fe,isDisabled:Ee,isSelected:ye,key:dr,label:Ne,type:he,value:ft,isFocused:Hn,innerRef:Hn?a.getFocusedOptionRef:void 0}),a.formatOptionLabel(re.data,"menu"))},ge;if(this.hasOptions())ge=this.getCategorizedOptions().map(function(j){if(j.type==="group"){var re=j.data,ce=j.options,he=j.index,fe="".concat(a.getElementId("group"),"-").concat(he),Ee="".concat(fe,"-heading");return O.createElement(f,ue({},b,{key:fe,data:re,options:ce,Heading:v,headingProps:{id:Ee,data:j.data},label:a.formatGroupLabel(j.data)}),j.options.map(function(ye){return xe(ye,"".concat(he,"-").concat(ye.index))}))}else if(j.type==="option")return xe(j,"".concat(j.index))});else if(T){var W=F({inputValue:R});if(W===null)return null;ge=O.createElement(g,b,W)}else{var ee=Ie({inputValue:R});if(ee===null)return null;ge=O.createElement(x,b,ee)}var K={minMenuHeight:L,maxMenuHeight:$,menuPlacement:Q,menuPosition:X,menuShouldScrollIntoView:Te},M=O.createElement(S2,ue({},b,K),function(j){var re=j.ref,ce=j.placerProps,he=ce.placement,fe=ce.maxHeight;return O.createElement(c,ue({},b,K,{innerRef:re,innerProps:{onMouseDown:a.onMenuMouseDown,onMouseMove:a.onMenuMouseMove},isLoading:T,placement:he}),O.createElement(GS,{captureEnabled:P,onTopArrive:Me,onBottomArrive:ve,lockEnabled:we},function(Ee){return O.createElement(p,ue({},b,{innerRef:function(Ne){a.getMenuListRef(Ne),Ee(Ne)},innerProps:{role:"listbox","aria-multiselectable":b.isMulti,id:a.getElementId("listbox")},isLoading:T,maxHeight:fe,focusedOption:w}),ge)}))});return me||X==="fixed"?O.createElement(m,ue({},b,{appendTo:me,controlElement:this.controlRef,menuPlacement:Q,menuPosition:X}),M):M}},{key:"renderFormField",value:function(){var a=this,u=this.props,f=u.delimiter,v=u.isDisabled,c=u.isMulti,p=u.name,m=u.required,g=this.state.selectValue;if(m&&!this.hasValue()&&!v)return O.createElement(ZS,{name:p,onFocus:this.onValueInputFocus});if(!(!p||v))if(c)if(f){var x=g.map(function(w){return a.getOptionValue(w)}).join(f);return O.createElement("input",{name:p,type:"hidden",value:x})}else{var k=g.length>0?g.map(function(w,S){return O.createElement("input",{key:"i-".concat(S),name:p,type:"hidden",value:a.getOptionValue(w)})}):O.createElement("input",{name:p,type:"hidden",value:""});return O.createElement("div",null,k)}else{var b=g[0]?this.getOptionValue(g[0]):"";return O.createElement("input",{name:p,type:"hidden",value:b})}}},{key:"renderLiveRegion",value:function(){var a=this.commonProps,u=this.state,f=u.ariaSelection,v=u.focusedOption,c=u.focusedValue,p=u.isFocused,m=u.selectValue,g=this.getFocusableOptions();return O.createElement(FS,ue({},a,{id:this.getElementId("live-region"),ariaSelection:f,focusedOption:v,focusedValue:c,isFocused:p,selectValue:m,focusableOptions:g,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var a=this.getComponents(),u=a.Control,f=a.IndicatorsContainer,v=a.SelectContainer,c=a.ValueContainer,p=this.props,m=p.className,g=p.id,x=p.isDisabled,k=p.menuIsOpen,b=this.state.isFocused,w=this.commonProps=this.getCommonProps();return O.createElement(v,ue({},w,{className:m,innerProps:{id:g,onKeyDown:this.onKeyDown},isDisabled:x,isFocused:b}),this.renderLiveRegion(),O.createElement(u,ue({},w,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:x,isFocused:b,menuIsOpen:k}),O.createElement(c,ue({},w,{isDisabled:x}),this.renderPlaceholderOrValue(),this.renderInput()),O.createElement(f,ue({},w,{isDisabled:x}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(a,u){var f=u.prevProps,v=u.clearFocusValueOnUpdate,c=u.inputIsHiddenAfterUpdate,p=u.ariaSelection,m=u.isFocused,g=u.prevWasFocused,x=u.instancePrefix,k=a.options,b=a.value,w=a.menuIsOpen,S=a.inputValue,P=a.isMulti,R=uh(b),T={};if(f&&(b!==f.value||k!==f.options||w!==f.menuIsOpen||S!==f.inputValue)){var F=w?m5(a,R):[],L=w?Eh(Fa(a,R),"".concat(x,"-option")):[],$=v?v5(u,R):null,U=g5(u,F),Q=Ru(L,U);T={selectValue:R,focusedOption:U,focusedOptionId:Q,focusableOptionsWithIds:L,focusedValue:$,clearFocusValueOnUpdate:!1}}var X=c!=null&&a!==f?{inputIsHidden:c,inputIsHiddenAfterUpdate:void 0}:{},me=p,we=m&&g;return m&&!we&&(me={value:_a(P,R,R[0]||null),options:R,action:"initial-input-focus"},we=!g),(p==null?void 0:p.action)==="initial-input-focus"&&(me=null),se(se(se({},T),X),{},{prevProps:a,ariaSelection:me,prevWasFocused:we})}}]),o}(O.Component);m0.defaultProps=h5;var b5=O.forwardRef(function(n,r){var o=Lw(n);return O.createElement(m0,ue({ref:r},o))}),w5=b5;const x5=new cl(qt.BASE_URL);function S5(){return N.jsx("div",{className:"loader-container",children:N.jsx(rl,{variant:"spokes",color:"#dcd6d6",size:"medium",text:"",textColor:""})})}function $o({type:n,name:r,value:o,handleChange:l,required:a}){return N.jsx("div",{children:N.jsx("input",{className:"forminput-style",type:n,name:r,autoComplete:"new-password",value:o,onChange:l,required:a})})}function k5(){var x;const n=[{value:"1",label:"GCASH"}],o=(x=Bn().state)==null?void 0:x.registerData,l=Xo(),[a,u]=O.useState(!1),[f,v]=O.useState({card_title:"",card_account:"",card_number:"",card_password:"",card_balance:"",card_payment_id:"",account:o.account,mail:o.mail,promotion_code:o.promotion_code,password:o.password,phone:o.phone,first_name:o.first_name,second_name:o.second_name}),c=f.card_title.trim()!==""&&f.card_account.trim()!==""&&f.card_number.trim()!==""&&f.card_password.trim()!==""&&f.card_balance.trim()!==""&&f.card_payment_id.trim()!=="",p=k=>{v(b=>({...b,card_payment_id:k.value}))},m=k=>{const{name:b,value:w}=k.target;v({...f,[b]:w})},g=async k=>{k.preventDefault(),u(!0);try{const b=await x5.post(qt.REGISTER,f);b.code==200?(alert("Registration successful"),l("/download")):(console.log("code: ",b.code),alert(b.error_msg))}catch(b){alert("Registration failed. Please try again.",b)}finally{u(!1)}};return N.jsxs("div",{children:[N.jsx("div",{className:"bg-top"}),N.jsx("div",{className:"ic-top-left"}),N.jsx("div",{className:"page-title",children:"Register"}),N.jsxs("div",{className:"register-container",children:[N.jsxs("div",{children:[N.jsx("span",{className:"content-text-black",children:"You need to"}),N.jsxs("span",{className:"content-text-red",children:[" ","link your primary payment getway"," "]}),N.jsx("span",{className:"content-text-black",children:"account during registration to start receiving tasks."})]}),N.jsxs("div",{children:[N.jsxs("span",{className:"content-text-black",children:["Currently, you can"," "]}),N.jsxs("span",{className:"content-text-red",children:["only select one getway."," "]})]}),N.jsx("div",{children:N.jsx("span",{className:"content-text-red",children:"After completing registration, you can set up additional payment getway."})}),N.jsx("img",{className:"divider"}),N.jsxs("form",{className:"form-register-container",onSubmit:g,children:[N.jsx("label",{className:"label-input",children:"*PrimaryPayment Getway"}),N.jsx(w5,{options:n,efaultValue:n[0],onChange:p,required:!0}),N.jsxs("div",{className:"bank-info",children:[N.jsx("label",{className:"label-input",children:"*Account Title"}),N.jsx($o,{type:"text",name:"card_title",value:f.card_title,handleChange:m,required:!0}),N.jsx("label",{className:"label-input",children:"*Gcash account"}),N.jsx($o,{type:"text",name:"card_account",value:f.card_account,handleChange:m,required:!0}),N.jsx("label",{className:"label-input",children:"*Gcash card number"}),N.jsx($o,{type:"number",name:"card_number",value:f.card_number,handleChange:m,required:!0}),N.jsx("label",{className:"label-input",children:"*MPIN"}),N.jsx($o,{type:"password",name:"card_password",value:f.card_password,handleChange:m,required:!0}),N.jsx("label",{className:"label-input",children:"*Your Balance"}),N.jsx($o,{type:"number",name:"card_balance",value:f.card_balance,handleChange:m,required:!0}),N.jsx("div",{children:N.jsx("span",{className:"content-text-red",children:"Be honest; balance updates after completion."})})]}),N.jsxs("div",{className:"container-flex",children:[N.jsx("img",{className:"divider"}),N.jsx("button",{type:"submit",className:"register-btn",disabled:!c,style:{backgroundColor:c?"#DF4A3B":"#BBBBBB"},children:a?"Registering...":"Register"})]})]}),a&&N.jsx(S5,{})]})]})}new cl(qt.BASE_URL);function E5(){return N.jsx("div",{className:"loader-container",children:N.jsx(rl,{variant:"spokes",color:"#dcd6d6",size:"medium",text:"",textColor:""})})}function $n({type:n,name:r,value:o,handleChange:l,required:a}){return N.jsx("div",{children:N.jsx("input",{className:"forminput-style",type:n,name:r,value:o,autoComplete:"new-password",onChange:l,required:a})})}function P5(){const n=Xo(),[r,o]=O.useState(!1),[l,a]=O.useState({account:"",mail:"",promotion_code:"",password:"",confirm_password:"",phone:"",first_name:"",second_name:""}),u=l.account.trim()!==""&&l.password.trim()!==""&&l.confirm_password.trim()!==""&&l.mail.trim()!==""&&l.phone.trim()!==""&&l.promotion_code.trim()!=="",f=c=>{console.log("isFormValid: ",u);const{name:p,value:m}=c.target;a({...l,[p]:m})},v=async c=>{if(c.preventDefault(),l.confirm_password!=l.password){alert("The passwords do not match, please double-check.");return}n("/register_bank",{state:{registerData:l}})};return N.jsxs("div",{children:[N.jsx("div",{className:"bg-top"}),N.jsx("div",{className:"ic-top-left"}),N.jsx("div",{className:"page-title",children:"Register"}),N.jsxs("div",{className:"register-container",children:[N.jsxs("div",{children:[N.jsx("span",{className:"content-text-black",children:"Please provide complete and accurate details for"}),N.jsx("span",{className:"content-text-red ",children:" manual review."})]}),N.jsxs("div",{children:[N.jsx("span",{className:"content-text-red ",children:"Incomplete or incorrect"}),N.jsxs("span",{className:"content-text-black",children:[" ","info may lead to"]}),N.jsxs("span",{className:"content-text-red ",children:[" ","registration rejection."]})]}),N.jsx("img",{className:"divider"}),N.jsxs("form",{className:"form-register-container",onSubmit:v,children:[N.jsx("label",{className:"label-input",children:"*Account"}),N.jsx($n,{type:"text",name:"account",value:l.account,handleChange:f,required:!0}),N.jsx("label",{className:"label-input",children:"*Password"}),N.jsx($n,{type:"password",name:"password",value:l.password,handleChange:f,required:!0}),N.jsx("label",{className:"label-input",children:"*Confirm Password"}),N.jsx($n,{type:"password",name:"confirm_password",value:l.confirm_password,handleChange:f,required:!0}),N.jsx("label",{className:"label-input",children:"First Name"}),N.jsx($n,{type:"text",name:"first_name",value:l.first_name,handleChange:f}),N.jsx("label",{className:"label-input",children:"Last Name"}),N.jsx($n,{type:"text",name:"second_name",value:l.second_name,handleChange:f}),N.jsx("label",{className:"label-input",children:"*Email"}),N.jsx($n,{type:"email",name:"mail",value:l.mail,handleChange:f,required:!0}),N.jsx("label",{className:"label-input",children:"*Phone"}),N.jsx($n,{type:"number",name:"phone",value:l.phone,handleChange:f,required:!0}),N.jsx("label",{className:"label-input",children:"*Promotion Code"}),N.jsx($n,{type:"text",name:"promotion_code",value:l.promotion_code,handleChange:f,required:!0}),N.jsx("button",{type:"submit",className:"submit-btn",disabled:!u,style:{backgroundColor:u?"#DF4A3B":"#BBBBBB"},children:r?"Registering...":"Next"})]}),r&&N.jsx(E5,{})]})]})}function C5(){return N.jsx(V1,{children:N.jsxs(v1,{children:[N.jsx(en,{path:"/register",element:N.jsx(P5,{})}),N.jsx(en,{path:"/pending",element:N.jsx(Cw,{})}),N.jsx(en,{path:"/register_bank",element:N.jsx(k5,{})}),N.jsx(en,{path:"/download",element:N.jsx(Pw,{})}),N.jsx(en,{path:"/login",element:N.jsx(mw,{})}),N.jsxs(en,{path:"/home",element:N.jsx(cy,{}),children:[N.jsx(en,{index:!0,element:N.jsx(dy,{})}),N.jsx(en,{path:"about",element:N.jsx(fy,{})}),N.jsx(en,{path:"announcement",element:N.jsx(dw,{})})]})]})})}kg.createRoot(document.getElementById("root")).render(N.jsx(O.StrictMode,{children:N.jsx(C5,{})}));

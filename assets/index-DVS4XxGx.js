var Zh=Object.defineProperty;var em=(r,i,a)=>i in r?Zh(r,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[i]=a;var no=(r,i,a)=>em(r,typeof i!="symbol"?i+"":i,a);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function a(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(c){if(c.ep)return;c.ep=!0;const d=a(c);fetch(c.href,d)}})();function nm(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var es={exports:{}},to={},ns={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od;function tm(){if(Od)return ae;Od=1;var r=Symbol.for("react.element"),i=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),O=Symbol.iterator;function C(E){return E===null||typeof E!="object"?null:(E=O&&E[O]||E["@@iterator"],typeof E=="function"?E:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,w={};function S(E,M,ie){this.props=E,this.context=M,this.refs=w,this.updater=ie||z}S.prototype.isReactComponent={},S.prototype.setState=function(E,M){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,M,"setState")},S.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function N(){}N.prototype=S.prototype;function D(E,M,ie){this.props=E,this.context=M,this.refs=w,this.updater=ie||z}var U=D.prototype=new N;U.constructor=D,b(U,S.prototype),U.isPureReactComponent=!0;var J=Array.isArray,Z=Object.prototype.hasOwnProperty,re={current:null},oe={key:!0,ref:!0,__self:!0,__source:!0};function me(E,M,ie){var se,fe={},pe=null,ye=null;if(M!=null)for(se in M.ref!==void 0&&(ye=M.ref),M.key!==void 0&&(pe=""+M.key),M)Z.call(M,se)&&!oe.hasOwnProperty(se)&&(fe[se]=M[se]);var ge=arguments.length-2;if(ge===1)fe.children=ie;else if(1<ge){for(var ke=Array(ge),an=0;an<ge;an++)ke[an]=arguments[an+2];fe.children=ke}if(E&&E.defaultProps)for(se in ge=E.defaultProps,ge)fe[se]===void 0&&(fe[se]=ge[se]);return{$$typeof:r,type:E,key:pe,ref:ye,props:fe,_owner:re.current}}function le(E,M){return{$$typeof:r,type:E.type,key:M,ref:E.ref,props:E.props,_owner:E._owner}}function je(E){return typeof E=="object"&&E!==null&&E.$$typeof===r}function zn(E){var M={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(ie){return M[ie]})}var Nn=/\/+/g;function on(E,M){return typeof E=="object"&&E!==null&&E.key!=null?zn(""+E.key):M.toString(36)}function bn(E,M,ie,se,fe){var pe=typeof E;(pe==="undefined"||pe==="boolean")&&(E=null);var ye=!1;if(E===null)ye=!0;else switch(pe){case"string":case"number":ye=!0;break;case"object":switch(E.$$typeof){case r:case i:ye=!0}}if(ye)return ye=E,fe=fe(ye),E=se===""?"."+on(ye,0):se,J(fe)?(ie="",E!=null&&(ie=E.replace(Nn,"$&/")+"/"),bn(fe,M,ie,"",function(an){return an})):fe!=null&&(je(fe)&&(fe=le(fe,ie+(!fe.key||ye&&ye.key===fe.key?"":(""+fe.key).replace(Nn,"$&/")+"/")+E)),M.push(fe)),1;if(ye=0,se=se===""?".":se+":",J(E))for(var ge=0;ge<E.length;ge++){pe=E[ge];var ke=se+on(pe,ge);ye+=bn(pe,M,ie,ke,fe)}else if(ke=C(E),typeof ke=="function")for(E=ke.call(E),ge=0;!(pe=E.next()).done;)pe=pe.value,ke=se+on(pe,ge++),ye+=bn(pe,M,ie,ke,fe);else if(pe==="object")throw M=String(E),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.");return ye}function Ln(E,M,ie){if(E==null)return E;var se=[],fe=0;return bn(E,se,"","",function(pe){return M.call(ie,pe,fe++)}),se}function Je(E){if(E._status===-1){var M=E._result;M=M(),M.then(function(ie){(E._status===0||E._status===-1)&&(E._status=1,E._result=ie)},function(ie){(E._status===0||E._status===-1)&&(E._status=2,E._result=ie)}),E._status===-1&&(E._status=0,E._result=M)}if(E._status===1)return E._result.default;throw E._result}var _e={current:null},B={transition:null},ee={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:B,ReactCurrentOwner:re};function V(){throw Error("act(...) is not supported in production builds of React.")}return ae.Children={map:Ln,forEach:function(E,M,ie){Ln(E,function(){M.apply(this,arguments)},ie)},count:function(E){var M=0;return Ln(E,function(){M++}),M},toArray:function(E){return Ln(E,function(M){return M})||[]},only:function(E){if(!je(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},ae.Component=S,ae.Fragment=a,ae.Profiler=c,ae.PureComponent=D,ae.StrictMode=s,ae.Suspense=m,ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,ae.act=V,ae.cloneElement=function(E,M,ie){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var se=b({},E.props),fe=E.key,pe=E.ref,ye=E._owner;if(M!=null){if(M.ref!==void 0&&(pe=M.ref,ye=re.current),M.key!==void 0&&(fe=""+M.key),E.type&&E.type.defaultProps)var ge=E.type.defaultProps;for(ke in M)Z.call(M,ke)&&!oe.hasOwnProperty(ke)&&(se[ke]=M[ke]===void 0&&ge!==void 0?ge[ke]:M[ke])}var ke=arguments.length-2;if(ke===1)se.children=ie;else if(1<ke){ge=Array(ke);for(var an=0;an<ke;an++)ge[an]=arguments[an+2];se.children=ge}return{$$typeof:r,type:E.type,key:fe,ref:pe,props:se,_owner:ye}},ae.createContext=function(E){return E={$$typeof:p,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:d,_context:E},E.Consumer=E},ae.createElement=me,ae.createFactory=function(E){var M=me.bind(null,E);return M.type=E,M},ae.createRef=function(){return{current:null}},ae.forwardRef=function(E){return{$$typeof:g,render:E}},ae.isValidElement=je,ae.lazy=function(E){return{$$typeof:y,_payload:{_status:-1,_result:E},_init:Je}},ae.memo=function(E,M){return{$$typeof:h,type:E,compare:M===void 0?null:M}},ae.startTransition=function(E){var M=B.transition;B.transition={};try{E()}finally{B.transition=M}},ae.unstable_act=V,ae.useCallback=function(E,M){return _e.current.useCallback(E,M)},ae.useContext=function(E){return _e.current.useContext(E)},ae.useDebugValue=function(){},ae.useDeferredValue=function(E){return _e.current.useDeferredValue(E)},ae.useEffect=function(E,M){return _e.current.useEffect(E,M)},ae.useId=function(){return _e.current.useId()},ae.useImperativeHandle=function(E,M,ie){return _e.current.useImperativeHandle(E,M,ie)},ae.useInsertionEffect=function(E,M){return _e.current.useInsertionEffect(E,M)},ae.useLayoutEffect=function(E,M){return _e.current.useLayoutEffect(E,M)},ae.useMemo=function(E,M){return _e.current.useMemo(E,M)},ae.useReducer=function(E,M,ie){return _e.current.useReducer(E,M,ie)},ae.useRef=function(E){return _e.current.useRef(E)},ae.useState=function(E){return _e.current.useState(E)},ae.useSyncExternalStore=function(E,M,ie){return _e.current.useSyncExternalStore(E,M,ie)},ae.useTransition=function(){return _e.current.useTransition()},ae.version="18.3.1",ae}var Cd;function ws(){return Cd||(Cd=1,ns.exports=tm()),ns.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d;function rm(){if(_d)return to;_d=1;var r=ws(),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(g,m,h){var y,O={},C=null,z=null;h!==void 0&&(C=""+h),m.key!==void 0&&(C=""+m.key),m.ref!==void 0&&(z=m.ref);for(y in m)s.call(m,y)&&!d.hasOwnProperty(y)&&(O[y]=m[y]);if(g&&g.defaultProps)for(y in m=g.defaultProps,m)O[y]===void 0&&(O[y]=m[y]);return{$$typeof:i,type:g,key:C,ref:z,props:O,_owner:c.current}}return to.Fragment=a,to.jsx=p,to.jsxs=p,to}var Rd;function om(){return Rd||(Rd=1,es.exports=rm()),es.exports}var q=om(),L=ws();const ce=nm(L);var zi={},ts={exports:{}},tn={},rs={exports:{}},os={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td;function im(){return Td||(Td=1,function(r){function i(B,ee){var V=B.length;B.push(ee);e:for(;0<V;){var E=V-1>>>1,M=B[E];if(0<c(M,ee))B[E]=ee,B[V]=M,V=E;else break e}}function a(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var ee=B[0],V=B.pop();if(V!==ee){B[0]=V;e:for(var E=0,M=B.length,ie=M>>>1;E<ie;){var se=2*(E+1)-1,fe=B[se],pe=se+1,ye=B[pe];if(0>c(fe,V))pe<M&&0>c(ye,fe)?(B[E]=ye,B[pe]=V,E=pe):(B[E]=fe,B[se]=V,E=se);else if(pe<M&&0>c(ye,V))B[E]=ye,B[pe]=V,E=pe;else break e}}return ee}function c(B,ee){var V=B.sortIndex-ee.sortIndex;return V!==0?V:B.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;r.unstable_now=function(){return d.now()}}else{var p=Date,g=p.now();r.unstable_now=function(){return p.now()-g}}var m=[],h=[],y=1,O=null,C=3,z=!1,b=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(B){for(var ee=a(h);ee!==null;){if(ee.callback===null)s(h);else if(ee.startTime<=B)s(h),ee.sortIndex=ee.expirationTime,i(m,ee);else break;ee=a(h)}}function J(B){if(w=!1,U(B),!b)if(a(m)!==null)b=!0,Je(Z);else{var ee=a(h);ee!==null&&_e(J,ee.startTime-B)}}function Z(B,ee){b=!1,w&&(w=!1,N(me),me=-1),z=!0;var V=C;try{for(U(ee),O=a(m);O!==null&&(!(O.expirationTime>ee)||B&&!zn());){var E=O.callback;if(typeof E=="function"){O.callback=null,C=O.priorityLevel;var M=E(O.expirationTime<=ee);ee=r.unstable_now(),typeof M=="function"?O.callback=M:O===a(m)&&s(m),U(ee)}else s(m);O=a(m)}if(O!==null)var ie=!0;else{var se=a(h);se!==null&&_e(J,se.startTime-ee),ie=!1}return ie}finally{O=null,C=V,z=!1}}var re=!1,oe=null,me=-1,le=5,je=-1;function zn(){return!(r.unstable_now()-je<le)}function Nn(){if(oe!==null){var B=r.unstable_now();je=B;var ee=!0;try{ee=oe(!0,B)}finally{ee?on():(re=!1,oe=null)}}else re=!1}var on;if(typeof D=="function")on=function(){D(Nn)};else if(typeof MessageChannel<"u"){var bn=new MessageChannel,Ln=bn.port2;bn.port1.onmessage=Nn,on=function(){Ln.postMessage(null)}}else on=function(){S(Nn,0)};function Je(B){oe=B,re||(re=!0,on())}function _e(B,ee){me=S(function(){B(r.unstable_now())},ee)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_continueExecution=function(){b||z||(b=!0,Je(Z))},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_getFirstCallbackNode=function(){return a(m)},r.unstable_next=function(B){switch(C){case 1:case 2:case 3:var ee=3;break;default:ee=C}var V=C;C=ee;try{return B()}finally{C=V}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(B,ee){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var V=C;C=B;try{return ee()}finally{C=V}},r.unstable_scheduleCallback=function(B,ee,V){var E=r.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?E+V:E):V=E,B){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=V+M,B={id:y++,callback:ee,priorityLevel:B,startTime:V,expirationTime:M,sortIndex:-1},V>E?(B.sortIndex=V,i(h,B),a(m)===null&&B===a(h)&&(w?(N(me),me=-1):w=!0,_e(J,V-E))):(B.sortIndex=M,i(m,B),b||z||(b=!0,Je(Z))),B},r.unstable_shouldYield=zn,r.unstable_wrapCallback=function(B){var ee=C;return function(){var V=C;C=ee;try{return B.apply(this,arguments)}finally{C=V}}}}(os)),os}var zd;function am(){return zd||(zd=1,rs.exports=im()),rs.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd;function lm(){if(Nd)return tn;Nd=1;var r=ws(),i=am();function a(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,c={};function d(e,n){p(e,n),p(e+"Capture",n)}function p(e,n){for(c[e]=n,e=0;e<n.length;e++)s.add(n[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},O={};function C(e){return m.call(O,e)?!0:m.call(y,e)?!1:h.test(e)?O[e]=!0:(y[e]=!0,!1)}function z(e,n,t,o){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function b(e,n,t,o){if(n===null||typeof n>"u"||z(e,n,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function w(e,n,t,o,l,u,f){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=o,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=u,this.removeEmptyString=f}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){S[e]=new w(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];S[n]=new w(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){S[e]=new w(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){S[e]=new w(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){S[e]=new w(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){S[e]=new w(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){S[e]=new w(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){S[e]=new w(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){S[e]=new w(e,5,!1,e.toLowerCase(),null,!1,!1)});var N=/[\-:]([a-z])/g;function D(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(N,D);S[n]=new w(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(N,D);S[n]=new w(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(N,D);S[n]=new w(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){S[e]=new w(e,1,!1,e.toLowerCase(),null,!1,!1)}),S.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){S[e]=new w(e,1,!1,e.toLowerCase(),null,!0,!0)});function U(e,n,t,o){var l=S.hasOwnProperty(n)?S[n]:null;(l!==null?l.type!==0:o||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(b(n,t,l,o)&&(t=null),o||l===null?C(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,o=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,o?e.setAttributeNS(o,n,t):e.setAttribute(n,t))))}var J=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Z=Symbol.for("react.element"),re=Symbol.for("react.portal"),oe=Symbol.for("react.fragment"),me=Symbol.for("react.strict_mode"),le=Symbol.for("react.profiler"),je=Symbol.for("react.provider"),zn=Symbol.for("react.context"),Nn=Symbol.for("react.forward_ref"),on=Symbol.for("react.suspense"),bn=Symbol.for("react.suspense_list"),Ln=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),_e=Symbol.for("react.offscreen"),B=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,E;function M(e){if(E===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||""}return`
`+E+e}var ie=!1;function se(e,n){if(!e||ie)return"";ie=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(R){var o=R}Reflect.construct(e,[],n)}else{try{n.call()}catch(R){o=R}e.call(n.prototype)}else{try{throw Error()}catch(R){o=R}e()}}catch(R){if(R&&o&&typeof R.stack=="string"){for(var l=R.stack.split(`
`),u=o.stack.split(`
`),f=l.length-1,v=u.length-1;1<=f&&0<=v&&l[f]!==u[v];)v--;for(;1<=f&&0<=v;f--,v--)if(l[f]!==u[v]){if(f!==1||v!==1)do if(f--,v--,0>v||l[f]!==u[v]){var x=`
`+l[f].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=f&&0<=v);break}}}finally{ie=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?M(e):""}function fe(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=se(e.type,!1),e;case 11:return e=se(e.type.render,!1),e;case 1:return e=se(e.type,!0),e;default:return""}}function pe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case oe:return"Fragment";case re:return"Portal";case le:return"Profiler";case me:return"StrictMode";case on:return"Suspense";case bn:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zn:return(e.displayName||"Context")+".Consumer";case je:return(e._context.displayName||"Context")+".Provider";case Nn:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ln:return n=e.displayName||null,n!==null?n:pe(e.type)||"Memo";case Je:n=e._payload,e=e._init;try{return pe(e(n))}catch{}}return null}function ye(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(n);case 8:return n===me?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ge(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ke(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function an(e){var n=ke(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,u=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(f){o=""+f,u.call(this,f)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(f){o=""+f},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function wo(e){e._valueTracker||(e._valueTracker=an(e))}function Ns(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),o="";return e&&(o=ke(e)?e.checked?"true":"false":e.value),e=o,e!==t?(n.setValue(e),!0):!1}function ko(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function la(e,n){var t=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ls(e,n){var t=n.defaultValue==null?"":n.defaultValue,o=n.checked!=null?n.checked:n.defaultChecked;t=ge(n.value!=null?n.value:t),e._wrapperState={initialChecked:o,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ds(e,n){n=n.checked,n!=null&&U(e,"checked",n,!1)}function sa(e,n){Ds(e,n);var t=ge(n.value),o=n.type;if(t!=null)o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ua(e,n.type,t):n.hasOwnProperty("defaultValue")&&ua(e,n.type,ge(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function As(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var o=n.type;if(!(o!=="submit"&&o!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ua(e,n,t){(n!=="number"||ko(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var gr=Array.isArray;function qt(e,n,t,o){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&o&&(e[t].defaultSelected=!0)}else{for(t=""+ge(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function ca(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(a(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ms(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(a(92));if(gr(t)){if(1<t.length)throw Error(a(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ge(t)}}function js(e,n){var t=ge(n.value),o=ge(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),o!=null&&(e.defaultValue=""+o)}function Fs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Is(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function da(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Is(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var So,Us=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,o,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,o,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(So=So||document.createElement("div"),So.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=So.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function vr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rp=["Webkit","ms","Moz","O"];Object.keys(yr).forEach(function(e){rp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),yr[n]=yr[e]})});function qs(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||yr.hasOwnProperty(e)&&yr[e]?(""+n).trim():n+"px"}function Bs(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var o=t.indexOf("--")===0,l=qs(t,n[t],o);t==="float"&&(t="cssFloat"),o?e.setProperty(t,l):e[t]=l}}var op=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fa(e,n){if(n){if(op[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(a(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(a(61))}if(n.style!=null&&typeof n.style!="object")throw Error(a(62))}}function pa(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ha=null;function ma(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ga=null,Bt=null,Ht=null;function Hs(e){if(e=Ur(e)){if(typeof ga!="function")throw Error(a(280));var n=e.stateNode;n&&(n=Wo(n),ga(e.stateNode,e.type,n))}}function $s(e){Bt?Ht?Ht.push(e):Ht=[e]:Bt=e}function Vs(){if(Bt){var e=Bt,n=Ht;if(Ht=Bt=null,Hs(e),n)for(e=0;e<n.length;e++)Hs(n[e])}}function Ws(e,n){return e(n)}function Qs(){}var va=!1;function Ks(e,n,t){if(va)return e(n,t);va=!0;try{return Ws(e,n,t)}finally{va=!1,(Bt!==null||Ht!==null)&&(Qs(),Vs())}}function br(e,n){var t=e.stateNode;if(t===null)return null;var o=Wo(t);if(o===null)return null;t=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(a(231,n,typeof t));return t}var ya=!1;if(g)try{var xr={};Object.defineProperty(xr,"passive",{get:function(){ya=!0}}),window.addEventListener("test",xr,xr),window.removeEventListener("test",xr,xr)}catch{ya=!1}function ip(e,n,t,o,l,u,f,v,x){var R=Array.prototype.slice.call(arguments,3);try{n.apply(t,R)}catch(j){this.onError(j)}}var wr=!1,Eo=null,Po=!1,ba=null,ap={onError:function(e){wr=!0,Eo=e}};function lp(e,n,t,o,l,u,f,v,x){wr=!1,Eo=null,ip.apply(ap,arguments)}function sp(e,n,t,o,l,u,f,v,x){if(lp.apply(this,arguments),wr){if(wr){var R=Eo;wr=!1,Eo=null}else throw Error(a(198));Po||(Po=!0,ba=R)}}function kt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Xs(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Js(e){if(kt(e)!==e)throw Error(a(188))}function up(e){var n=e.alternate;if(!n){if(n=kt(e),n===null)throw Error(a(188));return n!==e?null:e}for(var t=e,o=n;;){var l=t.return;if(l===null)break;var u=l.alternate;if(u===null){if(o=l.return,o!==null){t=o;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===t)return Js(l),e;if(u===o)return Js(l),n;u=u.sibling}throw Error(a(188))}if(t.return!==o.return)t=l,o=u;else{for(var f=!1,v=l.child;v;){if(v===t){f=!0,t=l,o=u;break}if(v===o){f=!0,o=l,t=u;break}v=v.sibling}if(!f){for(v=u.child;v;){if(v===t){f=!0,t=u,o=l;break}if(v===o){f=!0,o=u,t=l;break}v=v.sibling}if(!f)throw Error(a(189))}}if(t.alternate!==o)throw Error(a(190))}if(t.tag!==3)throw Error(a(188));return t.stateNode.current===t?e:n}function Ys(e){return e=up(e),e!==null?Gs(e):null}function Gs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Gs(e);if(n!==null)return n;e=e.sibling}return null}var Zs=i.unstable_scheduleCallback,eu=i.unstable_cancelCallback,cp=i.unstable_shouldYield,dp=i.unstable_requestPaint,Te=i.unstable_now,fp=i.unstable_getCurrentPriorityLevel,xa=i.unstable_ImmediatePriority,nu=i.unstable_UserBlockingPriority,Oo=i.unstable_NormalPriority,pp=i.unstable_LowPriority,tu=i.unstable_IdlePriority,Co=null,Dn=null;function hp(e){if(Dn&&typeof Dn.onCommitFiberRoot=="function")try{Dn.onCommitFiberRoot(Co,e,void 0,(e.current.flags&128)===128)}catch{}}var xn=Math.clz32?Math.clz32:vp,mp=Math.log,gp=Math.LN2;function vp(e){return e>>>=0,e===0?32:31-(mp(e)/gp|0)|0}var _o=64,Ro=4194304;function kr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function To(e,n){var t=e.pendingLanes;if(t===0)return 0;var o=0,l=e.suspendedLanes,u=e.pingedLanes,f=t&268435455;if(f!==0){var v=f&~l;v!==0?o=kr(v):(u&=f,u!==0&&(o=kr(u)))}else f=t&~l,f!==0?o=kr(f):u!==0&&(o=kr(u));if(o===0)return 0;if(n!==0&&n!==o&&!(n&l)&&(l=o&-o,u=n&-n,l>=u||l===16&&(u&4194240)!==0))return n;if(o&4&&(o|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=o;0<n;)t=31-xn(n),l=1<<t,o|=e[t],n&=~l;return o}function yp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bp(e,n){for(var t=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes;0<u;){var f=31-xn(u),v=1<<f,x=l[f];x===-1?(!(v&t)||v&o)&&(l[f]=yp(v,n)):x<=n&&(e.expiredLanes|=v),u&=~v}}function wa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ru(){var e=_o;return _o<<=1,!(_o&4194240)&&(_o=64),e}function ka(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Sr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-xn(n),e[n]=t}function xp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-xn(t),u=1<<l;n[l]=0,o[l]=-1,e[l]=-1,t&=~u}}function Sa(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var o=31-xn(t),l=1<<o;l&n|e[o]&n&&(e[o]|=n),t&=~l}}var ve=0;function ou(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var iu,Ea,au,lu,su,Pa=!1,zo=[],et=null,nt=null,tt=null,Er=new Map,Pr=new Map,rt=[],wp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uu(e,n){switch(e){case"focusin":case"focusout":et=null;break;case"dragenter":case"dragleave":nt=null;break;case"mouseover":case"mouseout":tt=null;break;case"pointerover":case"pointerout":Er.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pr.delete(n.pointerId)}}function Or(e,n,t,o,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:n,domEventName:t,eventSystemFlags:o,nativeEvent:u,targetContainers:[l]},n!==null&&(n=Ur(n),n!==null&&Ea(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function kp(e,n,t,o,l){switch(n){case"focusin":return et=Or(et,e,n,t,o,l),!0;case"dragenter":return nt=Or(nt,e,n,t,o,l),!0;case"mouseover":return tt=Or(tt,e,n,t,o,l),!0;case"pointerover":var u=l.pointerId;return Er.set(u,Or(Er.get(u)||null,e,n,t,o,l)),!0;case"gotpointercapture":return u=l.pointerId,Pr.set(u,Or(Pr.get(u)||null,e,n,t,o,l)),!0}return!1}function cu(e){var n=St(e.target);if(n!==null){var t=kt(n);if(t!==null){if(n=t.tag,n===13){if(n=Xs(t),n!==null){e.blockedOn=n,su(e.priority,function(){au(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function No(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ca(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);ha=o,t.target.dispatchEvent(o),ha=null}else return n=Ur(t),n!==null&&Ea(n),e.blockedOn=t,!1;n.shift()}return!0}function du(e,n,t){No(e)&&t.delete(n)}function Sp(){Pa=!1,et!==null&&No(et)&&(et=null),nt!==null&&No(nt)&&(nt=null),tt!==null&&No(tt)&&(tt=null),Er.forEach(du),Pr.forEach(du)}function Cr(e,n){e.blockedOn===n&&(e.blockedOn=null,Pa||(Pa=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Sp)))}function _r(e){function n(l){return Cr(l,e)}if(0<zo.length){Cr(zo[0],e);for(var t=1;t<zo.length;t++){var o=zo[t];o.blockedOn===e&&(o.blockedOn=null)}}for(et!==null&&Cr(et,e),nt!==null&&Cr(nt,e),tt!==null&&Cr(tt,e),Er.forEach(n),Pr.forEach(n),t=0;t<rt.length;t++)o=rt[t],o.blockedOn===e&&(o.blockedOn=null);for(;0<rt.length&&(t=rt[0],t.blockedOn===null);)cu(t),t.blockedOn===null&&rt.shift()}var $t=J.ReactCurrentBatchConfig,Lo=!0;function Ep(e,n,t,o){var l=ve,u=$t.transition;$t.transition=null;try{ve=1,Oa(e,n,t,o)}finally{ve=l,$t.transition=u}}function Pp(e,n,t,o){var l=ve,u=$t.transition;$t.transition=null;try{ve=4,Oa(e,n,t,o)}finally{ve=l,$t.transition=u}}function Oa(e,n,t,o){if(Lo){var l=Ca(e,n,t,o);if(l===null)$a(e,n,o,Do,t),uu(e,o);else if(kp(l,e,n,t,o))o.stopPropagation();else if(uu(e,o),n&4&&-1<wp.indexOf(e)){for(;l!==null;){var u=Ur(l);if(u!==null&&iu(u),u=Ca(e,n,t,o),u===null&&$a(e,n,o,Do,t),u===l)break;l=u}l!==null&&o.stopPropagation()}else $a(e,n,o,null,t)}}var Do=null;function Ca(e,n,t,o){if(Do=null,e=ma(o),e=St(e),e!==null)if(n=kt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Xs(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Do=e,null}function fu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fp()){case xa:return 1;case nu:return 4;case Oo:case pp:return 16;case tu:return 536870912;default:return 16}default:return 16}}var ot=null,_a=null,Ao=null;function pu(){if(Ao)return Ao;var e,n=_a,t=n.length,o,l="value"in ot?ot.value:ot.textContent,u=l.length;for(e=0;e<t&&n[e]===l[e];e++);var f=t-e;for(o=1;o<=f&&n[t-o]===l[u-o];o++);return Ao=l.slice(e,1<o?1-o:void 0)}function Mo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function jo(){return!0}function hu(){return!1}function ln(e){function n(t,o,l,u,f){this._reactName=t,this._targetInst=l,this.type=o,this.nativeEvent=u,this.target=f,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(t=e[v],this[v]=t?t(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?jo:hu,this.isPropagationStopped=hu,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),n}var Vt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ra=ln(Vt),Rr=V({},Vt,{view:0,detail:0}),Op=ln(Rr),Ta,za,Tr,Fo=V({},Rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:La,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tr&&(Tr&&e.type==="mousemove"?(Ta=e.screenX-Tr.screenX,za=e.screenY-Tr.screenY):za=Ta=0,Tr=e),Ta)},movementY:function(e){return"movementY"in e?e.movementY:za}}),mu=ln(Fo),Cp=V({},Fo,{dataTransfer:0}),_p=ln(Cp),Rp=V({},Rr,{relatedTarget:0}),Na=ln(Rp),Tp=V({},Vt,{animationName:0,elapsedTime:0,pseudoElement:0}),zp=ln(Tp),Np=V({},Vt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lp=ln(Np),Dp=V({},Vt,{data:0}),gu=ln(Dp),Ap={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=jp[e])?!!n[e]:!1}function La(){return Fp}var Ip=V({},Rr,{key:function(e){if(e.key){var n=Ap[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:La,charCode:function(e){return e.type==="keypress"?Mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Up=ln(Ip),qp=V({},Fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vu=ln(qp),Bp=V({},Rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:La}),Hp=ln(Bp),$p=V({},Vt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vp=ln($p),Wp=V({},Fo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qp=ln(Wp),Kp=[9,13,27,32],Da=g&&"CompositionEvent"in window,zr=null;g&&"documentMode"in document&&(zr=document.documentMode);var Xp=g&&"TextEvent"in window&&!zr,yu=g&&(!Da||zr&&8<zr&&11>=zr),bu=" ",xu=!1;function wu(e,n){switch(e){case"keyup":return Kp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ku(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wt=!1;function Jp(e,n){switch(e){case"compositionend":return ku(n);case"keypress":return n.which!==32?null:(xu=!0,bu);case"textInput":return e=n.data,e===bu&&xu?null:e;default:return null}}function Yp(e,n){if(Wt)return e==="compositionend"||!Da&&wu(e,n)?(e=pu(),Ao=_a=ot=null,Wt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return yu&&n.locale!=="ko"?null:n.data;default:return null}}var Gp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Su(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Gp[e.type]:n==="textarea"}function Eu(e,n,t,o){$s(o),n=Ho(n,"onChange"),0<n.length&&(t=new Ra("onChange","change",null,t,o),e.push({event:t,listeners:n}))}var Nr=null,Lr=null;function Zp(e){Bu(e,0)}function Io(e){var n=Yt(e);if(Ns(n))return e}function eh(e,n){if(e==="change")return n}var Pu=!1;if(g){var Aa;if(g){var Ma="oninput"in document;if(!Ma){var Ou=document.createElement("div");Ou.setAttribute("oninput","return;"),Ma=typeof Ou.oninput=="function"}Aa=Ma}else Aa=!1;Pu=Aa&&(!document.documentMode||9<document.documentMode)}function Cu(){Nr&&(Nr.detachEvent("onpropertychange",_u),Lr=Nr=null)}function _u(e){if(e.propertyName==="value"&&Io(Lr)){var n=[];Eu(n,Lr,e,ma(e)),Ks(Zp,n)}}function nh(e,n,t){e==="focusin"?(Cu(),Nr=n,Lr=t,Nr.attachEvent("onpropertychange",_u)):e==="focusout"&&Cu()}function th(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Io(Lr)}function rh(e,n){if(e==="click")return Io(n)}function oh(e,n){if(e==="input"||e==="change")return Io(n)}function ih(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var wn=typeof Object.is=="function"?Object.is:ih;function Dr(e,n){if(wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),o=Object.keys(n);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var l=t[o];if(!m.call(n,l)||!wn(e[l],n[l]))return!1}return!0}function Ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tu(e,n){var t=Ru(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=n&&o>=n)return{node:t,offset:n-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ru(t)}}function zu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?zu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Nu(){for(var e=window,n=ko();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ko(e.document)}return n}function ja(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function ah(e){var n=Nu(),t=e.focusedElem,o=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&zu(t.ownerDocument.documentElement,t)){if(o!==null&&ja(t)){if(n=o.start,e=o.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,u=Math.min(o.start,l);o=o.end===void 0?u:Math.min(o.end,l),!e.extend&&u>o&&(l=o,o=u,u=l),l=Tu(t,u);var f=Tu(t,o);l&&f&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==f.node||e.focusOffset!==f.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),u>o?(e.addRange(n),e.extend(f.node,f.offset)):(n.setEnd(f.node,f.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lh=g&&"documentMode"in document&&11>=document.documentMode,Qt=null,Fa=null,Ar=null,Ia=!1;function Lu(e,n,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ia||Qt==null||Qt!==ko(o)||(o=Qt,"selectionStart"in o&&ja(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ar&&Dr(Ar,o)||(Ar=o,o=Ho(Fa,"onSelect"),0<o.length&&(n=new Ra("onSelect","select",null,n,t),e.push({event:n,listeners:o}),n.target=Qt)))}function Uo(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Kt={animationend:Uo("Animation","AnimationEnd"),animationiteration:Uo("Animation","AnimationIteration"),animationstart:Uo("Animation","AnimationStart"),transitionend:Uo("Transition","TransitionEnd")},Ua={},Du={};g&&(Du=document.createElement("div").style,"AnimationEvent"in window||(delete Kt.animationend.animation,delete Kt.animationiteration.animation,delete Kt.animationstart.animation),"TransitionEvent"in window||delete Kt.transitionend.transition);function qo(e){if(Ua[e])return Ua[e];if(!Kt[e])return e;var n=Kt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Du)return Ua[e]=n[t];return e}var Au=qo("animationend"),Mu=qo("animationiteration"),ju=qo("animationstart"),Fu=qo("transitionend"),Iu=new Map,Uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function it(e,n){Iu.set(e,n),d(n,[e])}for(var qa=0;qa<Uu.length;qa++){var Ba=Uu[qa],sh=Ba.toLowerCase(),uh=Ba[0].toUpperCase()+Ba.slice(1);it(sh,"on"+uh)}it(Au,"onAnimationEnd"),it(Mu,"onAnimationIteration"),it(ju,"onAnimationStart"),it("dblclick","onDoubleClick"),it("focusin","onFocus"),it("focusout","onBlur"),it(Fu,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ch=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function qu(e,n,t){var o=e.type||"unknown-event";e.currentTarget=t,sp(o,n,void 0,e),e.currentTarget=null}function Bu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],l=o.event;o=o.listeners;e:{var u=void 0;if(n)for(var f=o.length-1;0<=f;f--){var v=o[f],x=v.instance,R=v.currentTarget;if(v=v.listener,x!==u&&l.isPropagationStopped())break e;qu(l,v,R),u=x}else for(f=0;f<o.length;f++){if(v=o[f],x=v.instance,R=v.currentTarget,v=v.listener,x!==u&&l.isPropagationStopped())break e;qu(l,v,R),u=x}}}if(Po)throw e=ba,Po=!1,ba=null,e}function xe(e,n){var t=n[Ja];t===void 0&&(t=n[Ja]=new Set);var o=e+"__bubble";t.has(o)||(Hu(n,e,2,!1),t.add(o))}function Ha(e,n,t){var o=0;n&&(o|=4),Hu(t,e,o,n)}var Bo="_reactListening"+Math.random().toString(36).slice(2);function jr(e){if(!e[Bo]){e[Bo]=!0,s.forEach(function(t){t!=="selectionchange"&&(ch.has(t)||Ha(t,!1,e),Ha(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Bo]||(n[Bo]=!0,Ha("selectionchange",!1,n))}}function Hu(e,n,t,o){switch(fu(n)){case 1:var l=Ep;break;case 4:l=Pp;break;default:l=Oa}t=l.bind(null,n,t,e),l=void 0,!ya||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),o?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function $a(e,n,t,o,l){var u=o;if(!(n&1)&&!(n&2)&&o!==null)e:for(;;){if(o===null)return;var f=o.tag;if(f===3||f===4){var v=o.stateNode.containerInfo;if(v===l||v.nodeType===8&&v.parentNode===l)break;if(f===4)for(f=o.return;f!==null;){var x=f.tag;if((x===3||x===4)&&(x=f.stateNode.containerInfo,x===l||x.nodeType===8&&x.parentNode===l))return;f=f.return}for(;v!==null;){if(f=St(v),f===null)return;if(x=f.tag,x===5||x===6){o=u=f;continue e}v=v.parentNode}}o=o.return}Ks(function(){var R=u,j=ma(t),F=[];e:{var A=Iu.get(e);if(A!==void 0){var H=Ra,W=e;switch(e){case"keypress":if(Mo(t)===0)break e;case"keydown":case"keyup":H=Up;break;case"focusin":W="focus",H=Na;break;case"focusout":W="blur",H=Na;break;case"beforeblur":case"afterblur":H=Na;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=_p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=Hp;break;case Au:case Mu:case ju:H=zp;break;case Fu:H=Vp;break;case"scroll":H=Op;break;case"wheel":H=Qp;break;case"copy":case"cut":case"paste":H=Lp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=vu}var Q=(n&4)!==0,ze=!Q&&e==="scroll",P=Q?A!==null?A+"Capture":null:A;Q=[];for(var k=R,_;k!==null;){_=k;var I=_.stateNode;if(_.tag===5&&I!==null&&(_=I,P!==null&&(I=br(k,P),I!=null&&Q.push(Fr(k,I,_)))),ze)break;k=k.return}0<Q.length&&(A=new H(A,W,null,t,j),F.push({event:A,listeners:Q}))}}if(!(n&7)){e:{if(A=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",A&&t!==ha&&(W=t.relatedTarget||t.fromElement)&&(St(W)||W[Hn]))break e;if((H||A)&&(A=j.window===j?j:(A=j.ownerDocument)?A.defaultView||A.parentWindow:window,H?(W=t.relatedTarget||t.toElement,H=R,W=W?St(W):null,W!==null&&(ze=kt(W),W!==ze||W.tag!==5&&W.tag!==6)&&(W=null)):(H=null,W=R),H!==W)){if(Q=mu,I="onMouseLeave",P="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(Q=vu,I="onPointerLeave",P="onPointerEnter",k="pointer"),ze=H==null?A:Yt(H),_=W==null?A:Yt(W),A=new Q(I,k+"leave",H,t,j),A.target=ze,A.relatedTarget=_,I=null,St(j)===R&&(Q=new Q(P,k+"enter",W,t,j),Q.target=_,Q.relatedTarget=ze,I=Q),ze=I,H&&W)n:{for(Q=H,P=W,k=0,_=Q;_;_=Xt(_))k++;for(_=0,I=P;I;I=Xt(I))_++;for(;0<k-_;)Q=Xt(Q),k--;for(;0<_-k;)P=Xt(P),_--;for(;k--;){if(Q===P||P!==null&&Q===P.alternate)break n;Q=Xt(Q),P=Xt(P)}Q=null}else Q=null;H!==null&&$u(F,A,H,Q,!1),W!==null&&ze!==null&&$u(F,ze,W,Q,!0)}}e:{if(A=R?Yt(R):window,H=A.nodeName&&A.nodeName.toLowerCase(),H==="select"||H==="input"&&A.type==="file")var X=eh;else if(Su(A))if(Pu)X=oh;else{X=th;var Y=nh}else(H=A.nodeName)&&H.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(X=rh);if(X&&(X=X(e,R))){Eu(F,X,t,j);break e}Y&&Y(e,A,R),e==="focusout"&&(Y=A._wrapperState)&&Y.controlled&&A.type==="number"&&ua(A,"number",A.value)}switch(Y=R?Yt(R):window,e){case"focusin":(Su(Y)||Y.contentEditable==="true")&&(Qt=Y,Fa=R,Ar=null);break;case"focusout":Ar=Fa=Qt=null;break;case"mousedown":Ia=!0;break;case"contextmenu":case"mouseup":case"dragend":Ia=!1,Lu(F,t,j);break;case"selectionchange":if(lh)break;case"keydown":case"keyup":Lu(F,t,j)}var G;if(Da)e:{switch(e){case"compositionstart":var ne="onCompositionStart";break e;case"compositionend":ne="onCompositionEnd";break e;case"compositionupdate":ne="onCompositionUpdate";break e}ne=void 0}else Wt?wu(e,t)&&(ne="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ne="onCompositionStart");ne&&(yu&&t.locale!=="ko"&&(Wt||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&Wt&&(G=pu()):(ot=j,_a="value"in ot?ot.value:ot.textContent,Wt=!0)),Y=Ho(R,ne),0<Y.length&&(ne=new gu(ne,e,null,t,j),F.push({event:ne,listeners:Y}),G?ne.data=G:(G=ku(t),G!==null&&(ne.data=G)))),(G=Xp?Jp(e,t):Yp(e,t))&&(R=Ho(R,"onBeforeInput"),0<R.length&&(j=new gu("onBeforeInput","beforeinput",null,t,j),F.push({event:j,listeners:R}),j.data=G))}Bu(F,n)})}function Fr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ho(e,n){for(var t=n+"Capture",o=[];e!==null;){var l=e,u=l.stateNode;l.tag===5&&u!==null&&(l=u,u=br(e,t),u!=null&&o.unshift(Fr(e,u,l)),u=br(e,n),u!=null&&o.push(Fr(e,u,l))),e=e.return}return o}function Xt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $u(e,n,t,o,l){for(var u=n._reactName,f=[];t!==null&&t!==o;){var v=t,x=v.alternate,R=v.stateNode;if(x!==null&&x===o)break;v.tag===5&&R!==null&&(v=R,l?(x=br(t,u),x!=null&&f.unshift(Fr(t,x,v))):l||(x=br(t,u),x!=null&&f.push(Fr(t,x,v)))),t=t.return}f.length!==0&&e.push({event:n,listeners:f})}var dh=/\r\n?/g,fh=/\u0000|\uFFFD/g;function Vu(e){return(typeof e=="string"?e:""+e).replace(dh,`
`).replace(fh,"")}function $o(e,n,t){if(n=Vu(n),Vu(e)!==n&&t)throw Error(a(425))}function Vo(){}var Va=null,Wa=null;function Qa(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ka=typeof setTimeout=="function"?setTimeout:void 0,ph=typeof clearTimeout=="function"?clearTimeout:void 0,Wu=typeof Promise=="function"?Promise:void 0,hh=typeof queueMicrotask=="function"?queueMicrotask:typeof Wu<"u"?function(e){return Wu.resolve(null).then(e).catch(mh)}:Ka;function mh(e){setTimeout(function(){throw e})}function Xa(e,n){var t=n,o=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(o===0){e.removeChild(l),_r(n);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=l}while(t);_r(n)}function at(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Qu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Jt=Math.random().toString(36).slice(2),An="__reactFiber$"+Jt,Ir="__reactProps$"+Jt,Hn="__reactContainer$"+Jt,Ja="__reactEvents$"+Jt,gh="__reactListeners$"+Jt,vh="__reactHandles$"+Jt;function St(e){var n=e[An];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Hn]||t[An]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Qu(e);e!==null;){if(t=e[An])return t;e=Qu(e)}return n}e=t,t=e.parentNode}return null}function Ur(e){return e=e[An]||e[Hn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function Wo(e){return e[Ir]||null}var Ya=[],Gt=-1;function lt(e){return{current:e}}function we(e){0>Gt||(e.current=Ya[Gt],Ya[Gt]=null,Gt--)}function be(e,n){Gt++,Ya[Gt]=e.current,e.current=n}var st={},He=lt(st),Ye=lt(!1),Et=st;function Zt(e,n){var t=e.type.contextTypes;if(!t)return st;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===n)return o.__reactInternalMemoizedMaskedChildContext;var l={},u;for(u in t)l[u]=n[u];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ge(e){return e=e.childContextTypes,e!=null}function Qo(){we(Ye),we(He)}function Ku(e,n,t){if(He.current!==st)throw Error(a(168));be(He,n),be(Ye,t)}function Xu(e,n,t){var o=e.stateNode;if(n=n.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var l in o)if(!(l in n))throw Error(a(108,ye(e)||"Unknown",l));return V({},t,o)}function Ko(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||st,Et=He.current,be(He,e),be(Ye,Ye.current),!0}function Ju(e,n,t){var o=e.stateNode;if(!o)throw Error(a(169));t?(e=Xu(e,n,Et),o.__reactInternalMemoizedMergedChildContext=e,we(Ye),we(He),be(He,e)):we(Ye),be(Ye,t)}var $n=null,Xo=!1,Ga=!1;function Yu(e){$n===null?$n=[e]:$n.push(e)}function yh(e){Xo=!0,Yu(e)}function ut(){if(!Ga&&$n!==null){Ga=!0;var e=0,n=ve;try{var t=$n;for(ve=1;e<t.length;e++){var o=t[e];do o=o(!0);while(o!==null)}$n=null,Xo=!1}catch(l){throw $n!==null&&($n=$n.slice(e+1)),Zs(xa,ut),l}finally{ve=n,Ga=!1}}return null}var er=[],nr=0,Jo=null,Yo=0,pn=[],hn=0,Pt=null,Vn=1,Wn="";function Ot(e,n){er[nr++]=Yo,er[nr++]=Jo,Jo=e,Yo=n}function Gu(e,n,t){pn[hn++]=Vn,pn[hn++]=Wn,pn[hn++]=Pt,Pt=e;var o=Vn;e=Wn;var l=32-xn(o)-1;o&=~(1<<l),t+=1;var u=32-xn(n)+l;if(30<u){var f=l-l%5;u=(o&(1<<f)-1).toString(32),o>>=f,l-=f,Vn=1<<32-xn(n)+l|t<<l|o,Wn=u+e}else Vn=1<<u|t<<l|o,Wn=e}function Za(e){e.return!==null&&(Ot(e,1),Gu(e,1,0))}function el(e){for(;e===Jo;)Jo=er[--nr],er[nr]=null,Yo=er[--nr],er[nr]=null;for(;e===Pt;)Pt=pn[--hn],pn[hn]=null,Wn=pn[--hn],pn[hn]=null,Vn=pn[--hn],pn[hn]=null}var sn=null,un=null,Se=!1,kn=null;function Zu(e,n){var t=yn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ec(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,sn=e,un=at(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,sn=e,un=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Pt!==null?{id:Vn,overflow:Wn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=yn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,sn=e,un=null,!0):!1;default:return!1}}function nl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function tl(e){if(Se){var n=un;if(n){var t=n;if(!ec(e,n)){if(nl(e))throw Error(a(418));n=at(t.nextSibling);var o=sn;n&&ec(e,n)?Zu(o,t):(e.flags=e.flags&-4097|2,Se=!1,sn=e)}}else{if(nl(e))throw Error(a(418));e.flags=e.flags&-4097|2,Se=!1,sn=e}}}function nc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;sn=e}function Go(e){if(e!==sn)return!1;if(!Se)return nc(e),Se=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Qa(e.type,e.memoizedProps)),n&&(n=un)){if(nl(e))throw tc(),Error(a(418));for(;n;)Zu(e,n),n=at(n.nextSibling)}if(nc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){un=at(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}un=null}}else un=sn?at(e.stateNode.nextSibling):null;return!0}function tc(){for(var e=un;e;)e=at(e.nextSibling)}function tr(){un=sn=null,Se=!1}function rl(e){kn===null?kn=[e]:kn.push(e)}var bh=J.ReactCurrentBatchConfig;function qr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(a(309));var o=t.stateNode}if(!o)throw Error(a(147,e));var l=o,u=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===u?n.ref:(n=function(f){var v=l.refs;f===null?delete v[u]:v[u]=f},n._stringRef=u,n)}if(typeof e!="string")throw Error(a(284));if(!t._owner)throw Error(a(290,e))}return e}function Zo(e,n){throw e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function rc(e){var n=e._init;return n(e._payload)}function oc(e){function n(P,k){if(e){var _=P.deletions;_===null?(P.deletions=[k],P.flags|=16):_.push(k)}}function t(P,k){if(!e)return null;for(;k!==null;)n(P,k),k=k.sibling;return null}function o(P,k){for(P=new Map;k!==null;)k.key!==null?P.set(k.key,k):P.set(k.index,k),k=k.sibling;return P}function l(P,k){return P=vt(P,k),P.index=0,P.sibling=null,P}function u(P,k,_){return P.index=_,e?(_=P.alternate,_!==null?(_=_.index,_<k?(P.flags|=2,k):_):(P.flags|=2,k)):(P.flags|=1048576,k)}function f(P){return e&&P.alternate===null&&(P.flags|=2),P}function v(P,k,_,I){return k===null||k.tag!==6?(k=Kl(_,P.mode,I),k.return=P,k):(k=l(k,_),k.return=P,k)}function x(P,k,_,I){var X=_.type;return X===oe?j(P,k,_.props.children,I,_.key):k!==null&&(k.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Je&&rc(X)===k.type)?(I=l(k,_.props),I.ref=qr(P,k,_),I.return=P,I):(I=Si(_.type,_.key,_.props,null,P.mode,I),I.ref=qr(P,k,_),I.return=P,I)}function R(P,k,_,I){return k===null||k.tag!==4||k.stateNode.containerInfo!==_.containerInfo||k.stateNode.implementation!==_.implementation?(k=Xl(_,P.mode,I),k.return=P,k):(k=l(k,_.children||[]),k.return=P,k)}function j(P,k,_,I,X){return k===null||k.tag!==7?(k=Dt(_,P.mode,I,X),k.return=P,k):(k=l(k,_),k.return=P,k)}function F(P,k,_){if(typeof k=="string"&&k!==""||typeof k=="number")return k=Kl(""+k,P.mode,_),k.return=P,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Z:return _=Si(k.type,k.key,k.props,null,P.mode,_),_.ref=qr(P,null,k),_.return=P,_;case re:return k=Xl(k,P.mode,_),k.return=P,k;case Je:var I=k._init;return F(P,I(k._payload),_)}if(gr(k)||ee(k))return k=Dt(k,P.mode,_,null),k.return=P,k;Zo(P,k)}return null}function A(P,k,_,I){var X=k!==null?k.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return X!==null?null:v(P,k,""+_,I);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Z:return _.key===X?x(P,k,_,I):null;case re:return _.key===X?R(P,k,_,I):null;case Je:return X=_._init,A(P,k,X(_._payload),I)}if(gr(_)||ee(_))return X!==null?null:j(P,k,_,I,null);Zo(P,_)}return null}function H(P,k,_,I,X){if(typeof I=="string"&&I!==""||typeof I=="number")return P=P.get(_)||null,v(k,P,""+I,X);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Z:return P=P.get(I.key===null?_:I.key)||null,x(k,P,I,X);case re:return P=P.get(I.key===null?_:I.key)||null,R(k,P,I,X);case Je:var Y=I._init;return H(P,k,_,Y(I._payload),X)}if(gr(I)||ee(I))return P=P.get(_)||null,j(k,P,I,X,null);Zo(k,I)}return null}function W(P,k,_,I){for(var X=null,Y=null,G=k,ne=k=0,Ue=null;G!==null&&ne<_.length;ne++){G.index>ne?(Ue=G,G=null):Ue=G.sibling;var he=A(P,G,_[ne],I);if(he===null){G===null&&(G=Ue);break}e&&G&&he.alternate===null&&n(P,G),k=u(he,k,ne),Y===null?X=he:Y.sibling=he,Y=he,G=Ue}if(ne===_.length)return t(P,G),Se&&Ot(P,ne),X;if(G===null){for(;ne<_.length;ne++)G=F(P,_[ne],I),G!==null&&(k=u(G,k,ne),Y===null?X=G:Y.sibling=G,Y=G);return Se&&Ot(P,ne),X}for(G=o(P,G);ne<_.length;ne++)Ue=H(G,P,ne,_[ne],I),Ue!==null&&(e&&Ue.alternate!==null&&G.delete(Ue.key===null?ne:Ue.key),k=u(Ue,k,ne),Y===null?X=Ue:Y.sibling=Ue,Y=Ue);return e&&G.forEach(function(yt){return n(P,yt)}),Se&&Ot(P,ne),X}function Q(P,k,_,I){var X=ee(_);if(typeof X!="function")throw Error(a(150));if(_=X.call(_),_==null)throw Error(a(151));for(var Y=X=null,G=k,ne=k=0,Ue=null,he=_.next();G!==null&&!he.done;ne++,he=_.next()){G.index>ne?(Ue=G,G=null):Ue=G.sibling;var yt=A(P,G,he.value,I);if(yt===null){G===null&&(G=Ue);break}e&&G&&yt.alternate===null&&n(P,G),k=u(yt,k,ne),Y===null?X=yt:Y.sibling=yt,Y=yt,G=Ue}if(he.done)return t(P,G),Se&&Ot(P,ne),X;if(G===null){for(;!he.done;ne++,he=_.next())he=F(P,he.value,I),he!==null&&(k=u(he,k,ne),Y===null?X=he:Y.sibling=he,Y=he);return Se&&Ot(P,ne),X}for(G=o(P,G);!he.done;ne++,he=_.next())he=H(G,P,ne,he.value,I),he!==null&&(e&&he.alternate!==null&&G.delete(he.key===null?ne:he.key),k=u(he,k,ne),Y===null?X=he:Y.sibling=he,Y=he);return e&&G.forEach(function(Gh){return n(P,Gh)}),Se&&Ot(P,ne),X}function ze(P,k,_,I){if(typeof _=="object"&&_!==null&&_.type===oe&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Z:e:{for(var X=_.key,Y=k;Y!==null;){if(Y.key===X){if(X=_.type,X===oe){if(Y.tag===7){t(P,Y.sibling),k=l(Y,_.props.children),k.return=P,P=k;break e}}else if(Y.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Je&&rc(X)===Y.type){t(P,Y.sibling),k=l(Y,_.props),k.ref=qr(P,Y,_),k.return=P,P=k;break e}t(P,Y);break}else n(P,Y);Y=Y.sibling}_.type===oe?(k=Dt(_.props.children,P.mode,I,_.key),k.return=P,P=k):(I=Si(_.type,_.key,_.props,null,P.mode,I),I.ref=qr(P,k,_),I.return=P,P=I)}return f(P);case re:e:{for(Y=_.key;k!==null;){if(k.key===Y)if(k.tag===4&&k.stateNode.containerInfo===_.containerInfo&&k.stateNode.implementation===_.implementation){t(P,k.sibling),k=l(k,_.children||[]),k.return=P,P=k;break e}else{t(P,k);break}else n(P,k);k=k.sibling}k=Xl(_,P.mode,I),k.return=P,P=k}return f(P);case Je:return Y=_._init,ze(P,k,Y(_._payload),I)}if(gr(_))return W(P,k,_,I);if(ee(_))return Q(P,k,_,I);Zo(P,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,k!==null&&k.tag===6?(t(P,k.sibling),k=l(k,_),k.return=P,P=k):(t(P,k),k=Kl(_,P.mode,I),k.return=P,P=k),f(P)):t(P,k)}return ze}var rr=oc(!0),ic=oc(!1),ei=lt(null),ni=null,or=null,ol=null;function il(){ol=or=ni=null}function al(e){var n=ei.current;we(ei),e._currentValue=n}function ll(e,n,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===t)break;e=e.return}}function ir(e,n){ni=e,ol=or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ze=!0),e.firstContext=null)}function mn(e){var n=e._currentValue;if(ol!==e)if(e={context:e,memoizedValue:n,next:null},or===null){if(ni===null)throw Error(a(308));or=e,ni.dependencies={lanes:0,firstContext:e}}else or=or.next=e;return n}var Ct=null;function sl(e){Ct===null?Ct=[e]:Ct.push(e)}function ac(e,n,t,o){var l=n.interleaved;return l===null?(t.next=t,sl(n)):(t.next=l.next,l.next=t),n.interleaved=t,Qn(e,o)}function Qn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var ct=!1;function ul(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function dt(e,n,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,de&2){var l=o.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),o.pending=n,Qn(e,t)}return l=o.interleaved,l===null?(n.next=n,sl(o)):(n.next=l.next,l.next=n),o.interleaved=n,Qn(e,t)}function ti(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,Sa(e,t)}}function sc(e,n){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var l=null,u=null;if(t=t.firstBaseUpdate,t!==null){do{var f={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};u===null?l=u=f:u=u.next=f,t=t.next}while(t!==null);u===null?l=u=n:u=u.next=n}else l=u=n;t={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:o.shared,effects:o.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ri(e,n,t,o){var l=e.updateQueue;ct=!1;var u=l.firstBaseUpdate,f=l.lastBaseUpdate,v=l.shared.pending;if(v!==null){l.shared.pending=null;var x=v,R=x.next;x.next=null,f===null?u=R:f.next=R,f=x;var j=e.alternate;j!==null&&(j=j.updateQueue,v=j.lastBaseUpdate,v!==f&&(v===null?j.firstBaseUpdate=R:v.next=R,j.lastBaseUpdate=x))}if(u!==null){var F=l.baseState;f=0,j=R=x=null,v=u;do{var A=v.lane,H=v.eventTime;if((o&A)===A){j!==null&&(j=j.next={eventTime:H,lane:0,tag:v.tag,payload:v.payload,callback:v.callback,next:null});e:{var W=e,Q=v;switch(A=n,H=t,Q.tag){case 1:if(W=Q.payload,typeof W=="function"){F=W.call(H,F,A);break e}F=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=Q.payload,A=typeof W=="function"?W.call(H,F,A):W,A==null)break e;F=V({},F,A);break e;case 2:ct=!0}}v.callback!==null&&v.lane!==0&&(e.flags|=64,A=l.effects,A===null?l.effects=[v]:A.push(v))}else H={eventTime:H,lane:A,tag:v.tag,payload:v.payload,callback:v.callback,next:null},j===null?(R=j=H,x=F):j=j.next=H,f|=A;if(v=v.next,v===null){if(v=l.shared.pending,v===null)break;A=v,v=A.next,A.next=null,l.lastBaseUpdate=A,l.shared.pending=null}}while(!0);if(j===null&&(x=F),l.baseState=x,l.firstBaseUpdate=R,l.lastBaseUpdate=j,n=l.shared.interleaved,n!==null){l=n;do f|=l.lane,l=l.next;while(l!==n)}else u===null&&(l.shared.lanes=0);Tt|=f,e.lanes=f,e.memoizedState=F}}function uc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var o=e[n],l=o.callback;if(l!==null){if(o.callback=null,o=t,typeof l!="function")throw Error(a(191,l));l.call(o)}}}var Br={},Mn=lt(Br),Hr=lt(Br),$r=lt(Br);function _t(e){if(e===Br)throw Error(a(174));return e}function cl(e,n){switch(be($r,n),be(Hr,e),be(Mn,Br),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:da(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=da(n,e)}we(Mn),be(Mn,n)}function ar(){we(Mn),we(Hr),we($r)}function cc(e){_t($r.current);var n=_t(Mn.current),t=da(n,e.type);n!==t&&(be(Hr,e),be(Mn,t))}function dl(e){Hr.current===e&&(we(Mn),we(Hr))}var Pe=lt(0);function oi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fl=[];function pl(){for(var e=0;e<fl.length;e++)fl[e]._workInProgressVersionPrimary=null;fl.length=0}var ii=J.ReactCurrentDispatcher,hl=J.ReactCurrentBatchConfig,Rt=0,Oe=null,De=null,Fe=null,ai=!1,Vr=!1,Wr=0,xh=0;function $e(){throw Error(a(321))}function ml(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!wn(e[t],n[t]))return!1;return!0}function gl(e,n,t,o,l,u){if(Rt=u,Oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ii.current=e===null||e.memoizedState===null?Eh:Ph,e=t(o,l),Vr){u=0;do{if(Vr=!1,Wr=0,25<=u)throw Error(a(301));u+=1,Fe=De=null,n.updateQueue=null,ii.current=Oh,e=t(o,l)}while(Vr)}if(ii.current=ui,n=De!==null&&De.next!==null,Rt=0,Fe=De=Oe=null,ai=!1,n)throw Error(a(300));return e}function vl(){var e=Wr!==0;return Wr=0,e}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Oe.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function gn(){if(De===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var n=Fe===null?Oe.memoizedState:Fe.next;if(n!==null)Fe=n,De=e;else{if(e===null)throw Error(a(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Fe===null?Oe.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Qr(e,n){return typeof n=="function"?n(e):n}function yl(e){var n=gn(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var o=De,l=o.baseQueue,u=t.pending;if(u!==null){if(l!==null){var f=l.next;l.next=u.next,u.next=f}o.baseQueue=l=u,t.pending=null}if(l!==null){u=l.next,o=o.baseState;var v=f=null,x=null,R=u;do{var j=R.lane;if((Rt&j)===j)x!==null&&(x=x.next={lane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),o=R.hasEagerState?R.eagerState:e(o,R.action);else{var F={lane:j,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null};x===null?(v=x=F,f=o):x=x.next=F,Oe.lanes|=j,Tt|=j}R=R.next}while(R!==null&&R!==u);x===null?f=o:x.next=v,wn(o,n.memoizedState)||(Ze=!0),n.memoizedState=o,n.baseState=f,n.baseQueue=x,t.lastRenderedState=o}if(e=t.interleaved,e!==null){l=e;do u=l.lane,Oe.lanes|=u,Tt|=u,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function bl(e){var n=gn(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var o=t.dispatch,l=t.pending,u=n.memoizedState;if(l!==null){t.pending=null;var f=l=l.next;do u=e(u,f.action),f=f.next;while(f!==l);wn(u,n.memoizedState)||(Ze=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),t.lastRenderedState=u}return[u,o]}function dc(){}function fc(e,n){var t=Oe,o=gn(),l=n(),u=!wn(o.memoizedState,l);if(u&&(o.memoizedState=l,Ze=!0),o=o.queue,xl(mc.bind(null,t,o,e),[e]),o.getSnapshot!==n||u||Fe!==null&&Fe.memoizedState.tag&1){if(t.flags|=2048,Kr(9,hc.bind(null,t,o,l,n),void 0,null),Ie===null)throw Error(a(349));Rt&30||pc(t,n,l)}return l}function pc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Oe.updateQueue,n===null?(n={lastEffect:null,stores:null},Oe.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function hc(e,n,t,o){n.value=t,n.getSnapshot=o,gc(n)&&vc(e)}function mc(e,n,t){return t(function(){gc(n)&&vc(e)})}function gc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!wn(e,t)}catch{return!0}}function vc(e){var n=Qn(e,1);n!==null&&On(n,e,1,-1)}function yc(e){var n=jn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:e},n.queue=e,e=e.dispatch=Sh.bind(null,Oe,e),[n.memoizedState,e]}function Kr(e,n,t,o){return e={tag:e,create:n,destroy:t,deps:o,next:null},n=Oe.updateQueue,n===null?(n={lastEffect:null,stores:null},Oe.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,n.lastEffect=e)),e}function bc(){return gn().memoizedState}function li(e,n,t,o){var l=jn();Oe.flags|=e,l.memoizedState=Kr(1|n,t,void 0,o===void 0?null:o)}function si(e,n,t,o){var l=gn();o=o===void 0?null:o;var u=void 0;if(De!==null){var f=De.memoizedState;if(u=f.destroy,o!==null&&ml(o,f.deps)){l.memoizedState=Kr(n,t,u,o);return}}Oe.flags|=e,l.memoizedState=Kr(1|n,t,u,o)}function xc(e,n){return li(8390656,8,e,n)}function xl(e,n){return si(2048,8,e,n)}function wc(e,n){return si(4,2,e,n)}function kc(e,n){return si(4,4,e,n)}function Sc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ec(e,n,t){return t=t!=null?t.concat([e]):null,si(4,4,Sc.bind(null,n,e),t)}function wl(){}function Pc(e,n){var t=gn();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&ml(n,o[1])?o[0]:(t.memoizedState=[e,n],e)}function Oc(e,n){var t=gn();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&ml(n,o[1])?o[0]:(e=e(),t.memoizedState=[e,n],e)}function Cc(e,n,t){return Rt&21?(wn(t,n)||(t=ru(),Oe.lanes|=t,Tt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=t)}function wh(e,n){var t=ve;ve=t!==0&&4>t?t:4,e(!0);var o=hl.transition;hl.transition={};try{e(!1),n()}finally{ve=t,hl.transition=o}}function _c(){return gn().memoizedState}function kh(e,n,t){var o=mt(e);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},Rc(e))Tc(n,t);else if(t=ac(e,n,t,o),t!==null){var l=Xe();On(t,e,o,l),zc(t,n,o)}}function Sh(e,n,t){var o=mt(e),l={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(Rc(e))Tc(n,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var f=n.lastRenderedState,v=u(f,t);if(l.hasEagerState=!0,l.eagerState=v,wn(v,f)){var x=n.interleaved;x===null?(l.next=l,sl(n)):(l.next=x.next,x.next=l),n.interleaved=l;return}}catch{}finally{}t=ac(e,n,l,o),t!==null&&(l=Xe(),On(t,e,o,l),zc(t,n,o))}}function Rc(e){var n=e.alternate;return e===Oe||n!==null&&n===Oe}function Tc(e,n){Vr=ai=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function zc(e,n,t){if(t&4194240){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,Sa(e,t)}}var ui={readContext:mn,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},Eh={readContext:mn,useCallback:function(e,n){return jn().memoizedState=[e,n===void 0?null:n],e},useContext:mn,useEffect:xc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,li(4194308,4,Sc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return li(4194308,4,e,n)},useInsertionEffect:function(e,n){return li(4,2,e,n)},useMemo:function(e,n){var t=jn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var o=jn();return n=t!==void 0?t(n):n,o.memoizedState=o.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=kh.bind(null,Oe,e),[o.memoizedState,e]},useRef:function(e){var n=jn();return e={current:e},n.memoizedState=e},useState:yc,useDebugValue:wl,useDeferredValue:function(e){return jn().memoizedState=e},useTransition:function(){var e=yc(!1),n=e[0];return e=wh.bind(null,e[1]),jn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var o=Oe,l=jn();if(Se){if(t===void 0)throw Error(a(407));t=t()}else{if(t=n(),Ie===null)throw Error(a(349));Rt&30||pc(o,n,t)}l.memoizedState=t;var u={value:t,getSnapshot:n};return l.queue=u,xc(mc.bind(null,o,u,e),[e]),o.flags|=2048,Kr(9,hc.bind(null,o,u,t,n),void 0,null),t},useId:function(){var e=jn(),n=Ie.identifierPrefix;if(Se){var t=Wn,o=Vn;t=(o&~(1<<32-xn(o)-1)).toString(32)+t,n=":"+n+"R"+t,t=Wr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=xh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Ph={readContext:mn,useCallback:Pc,useContext:mn,useEffect:xl,useImperativeHandle:Ec,useInsertionEffect:wc,useLayoutEffect:kc,useMemo:Oc,useReducer:yl,useRef:bc,useState:function(){return yl(Qr)},useDebugValue:wl,useDeferredValue:function(e){var n=gn();return Cc(n,De.memoizedState,e)},useTransition:function(){var e=yl(Qr)[0],n=gn().memoizedState;return[e,n]},useMutableSource:dc,useSyncExternalStore:fc,useId:_c,unstable_isNewReconciler:!1},Oh={readContext:mn,useCallback:Pc,useContext:mn,useEffect:xl,useImperativeHandle:Ec,useInsertionEffect:wc,useLayoutEffect:kc,useMemo:Oc,useReducer:bl,useRef:bc,useState:function(){return bl(Qr)},useDebugValue:wl,useDeferredValue:function(e){var n=gn();return De===null?n.memoizedState=e:Cc(n,De.memoizedState,e)},useTransition:function(){var e=bl(Qr)[0],n=gn().memoizedState;return[e,n]},useMutableSource:dc,useSyncExternalStore:fc,useId:_c,unstable_isNewReconciler:!1};function Sn(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function kl(e,n,t,o){n=e.memoizedState,t=t(o,n),t=t==null?n:V({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ci={isMounted:function(e){return(e=e._reactInternals)?kt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var o=Xe(),l=mt(e),u=Kn(o,l);u.payload=n,t!=null&&(u.callback=t),n=dt(e,u,l),n!==null&&(On(n,e,l,o),ti(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var o=Xe(),l=mt(e),u=Kn(o,l);u.tag=1,u.payload=n,t!=null&&(u.callback=t),n=dt(e,u,l),n!==null&&(On(n,e,l,o),ti(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Xe(),o=mt(e),l=Kn(t,o);l.tag=2,n!=null&&(l.callback=n),n=dt(e,l,o),n!==null&&(On(n,e,o,t),ti(n,e,o))}};function Nc(e,n,t,o,l,u,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,f):n.prototype&&n.prototype.isPureReactComponent?!Dr(t,o)||!Dr(l,u):!0}function Lc(e,n,t){var o=!1,l=st,u=n.contextType;return typeof u=="object"&&u!==null?u=mn(u):(l=Ge(n)?Et:He.current,o=n.contextTypes,u=(o=o!=null)?Zt(e,l):st),n=new n(t,u),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ci,e.stateNode=n,n._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=u),n}function Dc(e,n,t,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,o),n.state!==e&&ci.enqueueReplaceState(n,n.state,null)}function Sl(e,n,t,o){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},ul(e);var u=n.contextType;typeof u=="object"&&u!==null?l.context=mn(u):(u=Ge(n)?Et:He.current,l.context=Zt(e,u)),l.state=e.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(kl(e,n,u,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&ci.enqueueReplaceState(l,l.state,null),ri(e,t,l,o),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function lr(e,n){try{var t="",o=n;do t+=fe(o),o=o.return;while(o);var l=t}catch(u){l=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:n,stack:l,digest:null}}function El(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Pl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Ch=typeof WeakMap=="function"?WeakMap:Map;function Ac(e,n,t){t=Kn(-1,t),t.tag=3,t.payload={element:null};var o=n.value;return t.callback=function(){vi||(vi=!0,Ul=o),Pl(e,n)},t}function Mc(e,n,t){t=Kn(-1,t),t.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var l=n.value;t.payload=function(){return o(l)},t.callback=function(){Pl(e,n)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Pl(e,n),typeof o!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var f=n.stack;this.componentDidCatch(n.value,{componentStack:f!==null?f:""})}),t}function jc(e,n,t){var o=e.pingCache;if(o===null){o=e.pingCache=new Ch;var l=new Set;o.set(n,l)}else l=o.get(n),l===void 0&&(l=new Set,o.set(n,l));l.has(t)||(l.add(t),e=qh.bind(null,e,n,t),n.then(e,e))}function Fc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ic(e,n,t,o,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Kn(-1,1),n.tag=2,dt(t,n,1))),t.lanes|=1),e)}var _h=J.ReactCurrentOwner,Ze=!1;function Ke(e,n,t,o){n.child=e===null?ic(n,null,t,o):rr(n,e.child,t,o)}function Uc(e,n,t,o,l){t=t.render;var u=n.ref;return ir(n,l),o=gl(e,n,t,o,u,l),t=vl(),e!==null&&!Ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Xn(e,n,l)):(Se&&t&&Za(n),n.flags|=1,Ke(e,n,o,l),n.child)}function qc(e,n,t,o,l){if(e===null){var u=t.type;return typeof u=="function"&&!Ql(u)&&u.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=u,Bc(e,n,u,o,l)):(e=Si(t.type,null,o,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(u=e.child,!(e.lanes&l)){var f=u.memoizedProps;if(t=t.compare,t=t!==null?t:Dr,t(f,o)&&e.ref===n.ref)return Xn(e,n,l)}return n.flags|=1,e=vt(u,o),e.ref=n.ref,e.return=n,n.child=e}function Bc(e,n,t,o,l){if(e!==null){var u=e.memoizedProps;if(Dr(u,o)&&e.ref===n.ref)if(Ze=!1,n.pendingProps=o=u,(e.lanes&l)!==0)e.flags&131072&&(Ze=!0);else return n.lanes=e.lanes,Xn(e,n,l)}return Ol(e,n,t,o,l)}function Hc(e,n,t){var o=n.pendingProps,l=o.children,u=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(ur,cn),cn|=t;else{if(!(t&1073741824))return e=u!==null?u.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,be(ur,cn),cn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=u!==null?u.baseLanes:t,be(ur,cn),cn|=o}else u!==null?(o=u.baseLanes|t,n.memoizedState=null):o=t,be(ur,cn),cn|=o;return Ke(e,n,l,t),n.child}function $c(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ol(e,n,t,o,l){var u=Ge(t)?Et:He.current;return u=Zt(n,u),ir(n,l),t=gl(e,n,t,o,u,l),o=vl(),e!==null&&!Ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Xn(e,n,l)):(Se&&o&&Za(n),n.flags|=1,Ke(e,n,t,l),n.child)}function Vc(e,n,t,o,l){if(Ge(t)){var u=!0;Ko(n)}else u=!1;if(ir(n,l),n.stateNode===null)fi(e,n),Lc(n,t,o),Sl(n,t,o,l),o=!0;else if(e===null){var f=n.stateNode,v=n.memoizedProps;f.props=v;var x=f.context,R=t.contextType;typeof R=="object"&&R!==null?R=mn(R):(R=Ge(t)?Et:He.current,R=Zt(n,R));var j=t.getDerivedStateFromProps,F=typeof j=="function"||typeof f.getSnapshotBeforeUpdate=="function";F||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==o||x!==R)&&Dc(n,f,o,R),ct=!1;var A=n.memoizedState;f.state=A,ri(n,o,f,l),x=n.memoizedState,v!==o||A!==x||Ye.current||ct?(typeof j=="function"&&(kl(n,t,j,o),x=n.memoizedState),(v=ct||Nc(n,t,v,o,A,x,R))?(F||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=x),f.props=o,f.state=x,f.context=R,o=v):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,lc(e,n),v=n.memoizedProps,R=n.type===n.elementType?v:Sn(n.type,v),f.props=R,F=n.pendingProps,A=f.context,x=t.contextType,typeof x=="object"&&x!==null?x=mn(x):(x=Ge(t)?Et:He.current,x=Zt(n,x));var H=t.getDerivedStateFromProps;(j=typeof H=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==F||A!==x)&&Dc(n,f,o,x),ct=!1,A=n.memoizedState,f.state=A,ri(n,o,f,l);var W=n.memoizedState;v!==F||A!==W||Ye.current||ct?(typeof H=="function"&&(kl(n,t,H,o),W=n.memoizedState),(R=ct||Nc(n,t,R,o,A,W,x)||!1)?(j||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,W,x),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,W,x)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&A===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&A===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=W),f.props=o,f.state=W,f.context=x,o=R):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&A===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&A===e.memoizedState||(n.flags|=1024),o=!1)}return Cl(e,n,t,o,u,l)}function Cl(e,n,t,o,l,u){$c(e,n);var f=(n.flags&128)!==0;if(!o&&!f)return l&&Ju(n,t,!1),Xn(e,n,u);o=n.stateNode,_h.current=n;var v=f&&typeof t.getDerivedStateFromError!="function"?null:o.render();return n.flags|=1,e!==null&&f?(n.child=rr(n,e.child,null,u),n.child=rr(n,null,v,u)):Ke(e,n,v,u),n.memoizedState=o.state,l&&Ju(n,t,!0),n.child}function Wc(e){var n=e.stateNode;n.pendingContext?Ku(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ku(e,n.context,!1),cl(e,n.containerInfo)}function Qc(e,n,t,o,l){return tr(),rl(l),n.flags|=256,Ke(e,n,t,o),n.child}var _l={dehydrated:null,treeContext:null,retryLane:0};function Rl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Kc(e,n,t){var o=n.pendingProps,l=Pe.current,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(l&2)!==0),v?(u=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),be(Pe,l&1),e===null)return tl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(f=o.children,e=o.fallback,u?(o=n.mode,u=n.child,f={mode:"hidden",children:f},!(o&1)&&u!==null?(u.childLanes=0,u.pendingProps=f):u=Ei(f,o,0,null),e=Dt(e,o,t,null),u.return=n,e.return=n,u.sibling=e,n.child=u,n.child.memoizedState=Rl(t),n.memoizedState=_l,e):Tl(n,f));if(l=e.memoizedState,l!==null&&(v=l.dehydrated,v!==null))return Rh(e,n,f,o,v,l,t);if(u){u=o.fallback,f=n.mode,l=e.child,v=l.sibling;var x={mode:"hidden",children:o.children};return!(f&1)&&n.child!==l?(o=n.child,o.childLanes=0,o.pendingProps=x,n.deletions=null):(o=vt(l,x),o.subtreeFlags=l.subtreeFlags&14680064),v!==null?u=vt(v,u):(u=Dt(u,f,t,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,f=e.child.memoizedState,f=f===null?Rl(t):{baseLanes:f.baseLanes|t,cachePool:null,transitions:f.transitions},u.memoizedState=f,u.childLanes=e.childLanes&~t,n.memoizedState=_l,o}return u=e.child,e=u.sibling,o=vt(u,{mode:"visible",children:o.children}),!(n.mode&1)&&(o.lanes=t),o.return=n,o.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=o,n.memoizedState=null,o}function Tl(e,n){return n=Ei({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function di(e,n,t,o){return o!==null&&rl(o),rr(n,e.child,null,t),e=Tl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Rh(e,n,t,o,l,u,f){if(t)return n.flags&256?(n.flags&=-257,o=El(Error(a(422))),di(e,n,f,o)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(u=o.fallback,l=n.mode,o=Ei({mode:"visible",children:o.children},l,0,null),u=Dt(u,l,f,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,n.mode&1&&rr(n,e.child,null,f),n.child.memoizedState=Rl(f),n.memoizedState=_l,u);if(!(n.mode&1))return di(e,n,f,null);if(l.data==="$!"){if(o=l.nextSibling&&l.nextSibling.dataset,o)var v=o.dgst;return o=v,u=Error(a(419)),o=El(u,o,void 0),di(e,n,f,o)}if(v=(f&e.childLanes)!==0,Ze||v){if(o=Ie,o!==null){switch(f&-f){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(o.suspendedLanes|f)?0:l,l!==0&&l!==u.retryLane&&(u.retryLane=l,Qn(e,l),On(o,e,l,-1))}return Wl(),o=El(Error(a(421))),di(e,n,f,o)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=Bh.bind(null,e),l._reactRetry=n,null):(e=u.treeContext,un=at(l.nextSibling),sn=n,Se=!0,kn=null,e!==null&&(pn[hn++]=Vn,pn[hn++]=Wn,pn[hn++]=Pt,Vn=e.id,Wn=e.overflow,Pt=n),n=Tl(n,o.children),n.flags|=4096,n)}function Xc(e,n,t){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),ll(e.return,n,t)}function zl(e,n,t,o,l){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:l}:(u.isBackwards=n,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=t,u.tailMode=l)}function Jc(e,n,t){var o=n.pendingProps,l=o.revealOrder,u=o.tail;if(Ke(e,n,o.children,t),o=Pe.current,o&2)o=o&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xc(e,t,n);else if(e.tag===19)Xc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(be(Pe,o),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&oi(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),zl(n,!1,l,t,u);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&oi(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}zl(n,!0,t,null,u);break;case"together":zl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function fi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Xn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Tt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,t=vt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=vt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Th(e,n,t){switch(n.tag){case 3:Wc(n),tr();break;case 5:cc(n);break;case 1:Ge(n.type)&&Ko(n);break;case 4:cl(n,n.stateNode.containerInfo);break;case 10:var o=n.type._context,l=n.memoizedProps.value;be(ei,o._currentValue),o._currentValue=l;break;case 13:if(o=n.memoizedState,o!==null)return o.dehydrated!==null?(be(Pe,Pe.current&1),n.flags|=128,null):t&n.child.childLanes?Kc(e,n,t):(be(Pe,Pe.current&1),e=Xn(e,n,t),e!==null?e.sibling:null);be(Pe,Pe.current&1);break;case 19:if(o=(t&n.childLanes)!==0,e.flags&128){if(o)return Jc(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),be(Pe,Pe.current),o)break;return null;case 22:case 23:return n.lanes=0,Hc(e,n,t)}return Xn(e,n,t)}var Yc,Nl,Gc,Zc;Yc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Nl=function(){},Gc=function(e,n,t,o){var l=e.memoizedProps;if(l!==o){e=n.stateNode,_t(Mn.current);var u=null;switch(t){case"input":l=la(e,l),o=la(e,o),u=[];break;case"select":l=V({},l,{value:void 0}),o=V({},o,{value:void 0}),u=[];break;case"textarea":l=ca(e,l),o=ca(e,o),u=[];break;default:typeof l.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Vo)}fa(t,o);var f;t=null;for(R in l)if(!o.hasOwnProperty(R)&&l.hasOwnProperty(R)&&l[R]!=null)if(R==="style"){var v=l[R];for(f in v)v.hasOwnProperty(f)&&(t||(t={}),t[f]="")}else R!=="dangerouslySetInnerHTML"&&R!=="children"&&R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&R!=="autoFocus"&&(c.hasOwnProperty(R)?u||(u=[]):(u=u||[]).push(R,null));for(R in o){var x=o[R];if(v=l!=null?l[R]:void 0,o.hasOwnProperty(R)&&x!==v&&(x!=null||v!=null))if(R==="style")if(v){for(f in v)!v.hasOwnProperty(f)||x&&x.hasOwnProperty(f)||(t||(t={}),t[f]="");for(f in x)x.hasOwnProperty(f)&&v[f]!==x[f]&&(t||(t={}),t[f]=x[f])}else t||(u||(u=[]),u.push(R,t)),t=x;else R==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,v=v?v.__html:void 0,x!=null&&v!==x&&(u=u||[]).push(R,x)):R==="children"?typeof x!="string"&&typeof x!="number"||(u=u||[]).push(R,""+x):R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&(c.hasOwnProperty(R)?(x!=null&&R==="onScroll"&&xe("scroll",e),u||v===x||(u=[])):(u=u||[]).push(R,x))}t&&(u=u||[]).push("style",t);var R=u;(n.updateQueue=R)&&(n.flags|=4)}},Zc=function(e,n,t,o){t!==o&&(n.flags|=4)};function Xr(e,n){if(!Se)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ve(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,o|=l.subtreeFlags&14680064,o|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=o,e.childLanes=t,n}function zh(e,n,t){var o=n.pendingProps;switch(el(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(n),null;case 1:return Ge(n.type)&&Qo(),Ve(n),null;case 3:return o=n.stateNode,ar(),we(Ye),we(He),pl(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Go(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,kn!==null&&(Hl(kn),kn=null))),Nl(e,n),Ve(n),null;case 5:dl(n);var l=_t($r.current);if(t=n.type,e!==null&&n.stateNode!=null)Gc(e,n,t,o,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Ve(n),null}if(e=_t(Mn.current),Go(n)){o=n.stateNode,t=n.type;var u=n.memoizedProps;switch(o[An]=n,o[Ir]=u,e=(n.mode&1)!==0,t){case"dialog":xe("cancel",o),xe("close",o);break;case"iframe":case"object":case"embed":xe("load",o);break;case"video":case"audio":for(l=0;l<Mr.length;l++)xe(Mr[l],o);break;case"source":xe("error",o);break;case"img":case"image":case"link":xe("error",o),xe("load",o);break;case"details":xe("toggle",o);break;case"input":Ls(o,u),xe("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!u.multiple},xe("invalid",o);break;case"textarea":Ms(o,u),xe("invalid",o)}fa(t,u),l=null;for(var f in u)if(u.hasOwnProperty(f)){var v=u[f];f==="children"?typeof v=="string"?o.textContent!==v&&(u.suppressHydrationWarning!==!0&&$o(o.textContent,v,e),l=["children",v]):typeof v=="number"&&o.textContent!==""+v&&(u.suppressHydrationWarning!==!0&&$o(o.textContent,v,e),l=["children",""+v]):c.hasOwnProperty(f)&&v!=null&&f==="onScroll"&&xe("scroll",o)}switch(t){case"input":wo(o),As(o,u,!0);break;case"textarea":wo(o),Fs(o);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(o.onclick=Vo)}o=l,n.updateQueue=o,o!==null&&(n.flags|=4)}else{f=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Is(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=f.createElement(t,{is:o.is}):(e=f.createElement(t),t==="select"&&(f=e,o.multiple?f.multiple=!0:o.size&&(f.size=o.size))):e=f.createElementNS(e,t),e[An]=n,e[Ir]=o,Yc(e,n,!1,!1),n.stateNode=e;e:{switch(f=pa(t,o),t){case"dialog":xe("cancel",e),xe("close",e),l=o;break;case"iframe":case"object":case"embed":xe("load",e),l=o;break;case"video":case"audio":for(l=0;l<Mr.length;l++)xe(Mr[l],e);l=o;break;case"source":xe("error",e),l=o;break;case"img":case"image":case"link":xe("error",e),xe("load",e),l=o;break;case"details":xe("toggle",e),l=o;break;case"input":Ls(e,o),l=la(e,o),xe("invalid",e);break;case"option":l=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},l=V({},o,{value:void 0}),xe("invalid",e);break;case"textarea":Ms(e,o),l=ca(e,o),xe("invalid",e);break;default:l=o}fa(t,l),v=l;for(u in v)if(v.hasOwnProperty(u)){var x=v[u];u==="style"?Bs(e,x):u==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&Us(e,x)):u==="children"?typeof x=="string"?(t!=="textarea"||x!=="")&&vr(e,x):typeof x=="number"&&vr(e,""+x):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?x!=null&&u==="onScroll"&&xe("scroll",e):x!=null&&U(e,u,x,f))}switch(t){case"input":wo(e),As(e,o,!1);break;case"textarea":wo(e),Fs(e);break;case"option":o.value!=null&&e.setAttribute("value",""+ge(o.value));break;case"select":e.multiple=!!o.multiple,u=o.value,u!=null?qt(e,!!o.multiple,u,!1):o.defaultValue!=null&&qt(e,!!o.multiple,o.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Vo)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ve(n),null;case 6:if(e&&n.stateNode!=null)Zc(e,n,e.memoizedProps,o);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(t=_t($r.current),_t(Mn.current),Go(n)){if(o=n.stateNode,t=n.memoizedProps,o[An]=n,(u=o.nodeValue!==t)&&(e=sn,e!==null))switch(e.tag){case 3:$o(o.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$o(o.nodeValue,t,(e.mode&1)!==0)}u&&(n.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[An]=n,n.stateNode=o}return Ve(n),null;case 13:if(we(Pe),o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&un!==null&&n.mode&1&&!(n.flags&128))tc(),tr(),n.flags|=98560,u=!1;else if(u=Go(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[An]=n}else tr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ve(n),u=!1}else kn!==null&&(Hl(kn),kn=null),u=!0;if(!u)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(n.child.flags|=8192,n.mode&1&&(e===null||Pe.current&1?Ae===0&&(Ae=3):Wl())),n.updateQueue!==null&&(n.flags|=4),Ve(n),null);case 4:return ar(),Nl(e,n),e===null&&jr(n.stateNode.containerInfo),Ve(n),null;case 10:return al(n.type._context),Ve(n),null;case 17:return Ge(n.type)&&Qo(),Ve(n),null;case 19:if(we(Pe),u=n.memoizedState,u===null)return Ve(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)Xr(u,!1);else{if(Ae!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(f=oi(e),f!==null){for(n.flags|=128,Xr(u,!1),o=f.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),n.subtreeFlags=0,o=t,t=n.child;t!==null;)u=t,e=o,u.flags&=14680066,f=u.alternate,f===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=f.childLanes,u.lanes=f.lanes,u.child=f.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=f.memoizedProps,u.memoizedState=f.memoizedState,u.updateQueue=f.updateQueue,u.type=f.type,e=f.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return be(Pe,Pe.current&1|2),n.child}e=e.sibling}u.tail!==null&&Te()>cr&&(n.flags|=128,o=!0,Xr(u,!1),n.lanes=4194304)}else{if(!o)if(e=oi(f),e!==null){if(n.flags|=128,o=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Xr(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Se)return Ve(n),null}else 2*Te()-u.renderingStartTime>cr&&t!==1073741824&&(n.flags|=128,o=!0,Xr(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(t=u.last,t!==null?t.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Te(),n.sibling=null,t=Pe.current,be(Pe,o?t&1|2:t&1),n):(Ve(n),null);case 22:case 23:return Vl(),o=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(n.flags|=8192),o&&n.mode&1?cn&1073741824&&(Ve(n),n.subtreeFlags&6&&(n.flags|=8192)):Ve(n),null;case 24:return null;case 25:return null}throw Error(a(156,n.tag))}function Nh(e,n){switch(el(n),n.tag){case 1:return Ge(n.type)&&Qo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ar(),we(Ye),we(He),pl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return dl(n),null;case 13:if(we(Pe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));tr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return we(Pe),null;case 4:return ar(),null;case 10:return al(n.type._context),null;case 22:case 23:return Vl(),null;case 24:return null;default:return null}}var pi=!1,We=!1,Lh=typeof WeakSet=="function"?WeakSet:Set,$=null;function sr(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){Re(e,n,o)}else t.current=null}function Ll(e,n,t){try{t()}catch(o){Re(e,n,o)}}var ed=!1;function Dh(e,n){if(Va=Lo,e=Nu(),ja(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var l=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{t.nodeType,u.nodeType}catch{t=null;break e}var f=0,v=-1,x=-1,R=0,j=0,F=e,A=null;n:for(;;){for(var H;F!==t||l!==0&&F.nodeType!==3||(v=f+l),F!==u||o!==0&&F.nodeType!==3||(x=f+o),F.nodeType===3&&(f+=F.nodeValue.length),(H=F.firstChild)!==null;)A=F,F=H;for(;;){if(F===e)break n;if(A===t&&++R===l&&(v=f),A===u&&++j===o&&(x=f),(H=F.nextSibling)!==null)break;F=A,A=F.parentNode}F=H}t=v===-1||x===-1?null:{start:v,end:x}}else t=null}t=t||{start:0,end:0}}else t=null;for(Wa={focusedElem:e,selectionRange:t},Lo=!1,$=n;$!==null;)if(n=$,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,$=e;else for(;$!==null;){n=$;try{var W=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(W!==null){var Q=W.memoizedProps,ze=W.memoizedState,P=n.stateNode,k=P.getSnapshotBeforeUpdate(n.elementType===n.type?Q:Sn(n.type,Q),ze);P.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var _=n.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(I){Re(n,n.return,I)}if(e=n.sibling,e!==null){e.return=n.return,$=e;break}$=n.return}return W=ed,ed=!1,W}function Jr(e,n,t){var o=n.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&e)===e){var u=l.destroy;l.destroy=void 0,u!==void 0&&Ll(n,t,u)}l=l.next}while(l!==o)}}function hi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var o=t.create;t.destroy=o()}t=t.next}while(t!==n)}}function Dl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function nd(e){var n=e.alternate;n!==null&&(e.alternate=null,nd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[An],delete n[Ir],delete n[Ja],delete n[gh],delete n[vh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function td(e){return e.tag===5||e.tag===3||e.tag===4}function rd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||td(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Al(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Vo));else if(o!==4&&(e=e.child,e!==null))for(Al(e,n,t),e=e.sibling;e!==null;)Al(e,n,t),e=e.sibling}function Ml(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Ml(e,n,t),e=e.sibling;e!==null;)Ml(e,n,t),e=e.sibling}var qe=null,En=!1;function ft(e,n,t){for(t=t.child;t!==null;)od(e,n,t),t=t.sibling}function od(e,n,t){if(Dn&&typeof Dn.onCommitFiberUnmount=="function")try{Dn.onCommitFiberUnmount(Co,t)}catch{}switch(t.tag){case 5:We||sr(t,n);case 6:var o=qe,l=En;qe=null,ft(e,n,t),qe=o,En=l,qe!==null&&(En?(e=qe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):qe.removeChild(t.stateNode));break;case 18:qe!==null&&(En?(e=qe,t=t.stateNode,e.nodeType===8?Xa(e.parentNode,t):e.nodeType===1&&Xa(e,t),_r(e)):Xa(qe,t.stateNode));break;case 4:o=qe,l=En,qe=t.stateNode.containerInfo,En=!0,ft(e,n,t),qe=o,En=l;break;case 0:case 11:case 14:case 15:if(!We&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){l=o=o.next;do{var u=l,f=u.destroy;u=u.tag,f!==void 0&&(u&2||u&4)&&Ll(t,n,f),l=l.next}while(l!==o)}ft(e,n,t);break;case 1:if(!We&&(sr(t,n),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(v){Re(t,n,v)}ft(e,n,t);break;case 21:ft(e,n,t);break;case 22:t.mode&1?(We=(o=We)||t.memoizedState!==null,ft(e,n,t),We=o):ft(e,n,t);break;default:ft(e,n,t)}}function id(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Lh),n.forEach(function(o){var l=Hh.bind(null,e,o);t.has(o)||(t.add(o),o.then(l,l))})}}function Pn(e,n){var t=n.deletions;if(t!==null)for(var o=0;o<t.length;o++){var l=t[o];try{var u=e,f=n,v=f;e:for(;v!==null;){switch(v.tag){case 5:qe=v.stateNode,En=!1;break e;case 3:qe=v.stateNode.containerInfo,En=!0;break e;case 4:qe=v.stateNode.containerInfo,En=!0;break e}v=v.return}if(qe===null)throw Error(a(160));od(u,f,l),qe=null,En=!1;var x=l.alternate;x!==null&&(x.return=null),l.return=null}catch(R){Re(l,n,R)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ad(n,e),n=n.sibling}function ad(e,n){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pn(n,e),Fn(e),o&4){try{Jr(3,e,e.return),hi(3,e)}catch(Q){Re(e,e.return,Q)}try{Jr(5,e,e.return)}catch(Q){Re(e,e.return,Q)}}break;case 1:Pn(n,e),Fn(e),o&512&&t!==null&&sr(t,t.return);break;case 5:if(Pn(n,e),Fn(e),o&512&&t!==null&&sr(t,t.return),e.flags&32){var l=e.stateNode;try{vr(l,"")}catch(Q){Re(e,e.return,Q)}}if(o&4&&(l=e.stateNode,l!=null)){var u=e.memoizedProps,f=t!==null?t.memoizedProps:u,v=e.type,x=e.updateQueue;if(e.updateQueue=null,x!==null)try{v==="input"&&u.type==="radio"&&u.name!=null&&Ds(l,u),pa(v,f);var R=pa(v,u);for(f=0;f<x.length;f+=2){var j=x[f],F=x[f+1];j==="style"?Bs(l,F):j==="dangerouslySetInnerHTML"?Us(l,F):j==="children"?vr(l,F):U(l,j,F,R)}switch(v){case"input":sa(l,u);break;case"textarea":js(l,u);break;case"select":var A=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!u.multiple;var H=u.value;H!=null?qt(l,!!u.multiple,H,!1):A!==!!u.multiple&&(u.defaultValue!=null?qt(l,!!u.multiple,u.defaultValue,!0):qt(l,!!u.multiple,u.multiple?[]:"",!1))}l[Ir]=u}catch(Q){Re(e,e.return,Q)}}break;case 6:if(Pn(n,e),Fn(e),o&4){if(e.stateNode===null)throw Error(a(162));l=e.stateNode,u=e.memoizedProps;try{l.nodeValue=u}catch(Q){Re(e,e.return,Q)}}break;case 3:if(Pn(n,e),Fn(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{_r(n.containerInfo)}catch(Q){Re(e,e.return,Q)}break;case 4:Pn(n,e),Fn(e);break;case 13:Pn(n,e),Fn(e),l=e.child,l.flags&8192&&(u=l.memoizedState!==null,l.stateNode.isHidden=u,!u||l.alternate!==null&&l.alternate.memoizedState!==null||(Il=Te())),o&4&&id(e);break;case 22:if(j=t!==null&&t.memoizedState!==null,e.mode&1?(We=(R=We)||j,Pn(n,e),We=R):Pn(n,e),Fn(e),o&8192){if(R=e.memoizedState!==null,(e.stateNode.isHidden=R)&&!j&&e.mode&1)for($=e,j=e.child;j!==null;){for(F=$=j;$!==null;){switch(A=$,H=A.child,A.tag){case 0:case 11:case 14:case 15:Jr(4,A,A.return);break;case 1:sr(A,A.return);var W=A.stateNode;if(typeof W.componentWillUnmount=="function"){o=A,t=A.return;try{n=o,W.props=n.memoizedProps,W.state=n.memoizedState,W.componentWillUnmount()}catch(Q){Re(o,t,Q)}}break;case 5:sr(A,A.return);break;case 22:if(A.memoizedState!==null){ud(F);continue}}H!==null?(H.return=A,$=H):ud(F)}j=j.sibling}e:for(j=null,F=e;;){if(F.tag===5){if(j===null){j=F;try{l=F.stateNode,R?(u=l.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(v=F.stateNode,x=F.memoizedProps.style,f=x!=null&&x.hasOwnProperty("display")?x.display:null,v.style.display=qs("display",f))}catch(Q){Re(e,e.return,Q)}}}else if(F.tag===6){if(j===null)try{F.stateNode.nodeValue=R?"":F.memoizedProps}catch(Q){Re(e,e.return,Q)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===e)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===e)break e;for(;F.sibling===null;){if(F.return===null||F.return===e)break e;j===F&&(j=null),F=F.return}j===F&&(j=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:Pn(n,e),Fn(e),o&4&&id(e);break;case 21:break;default:Pn(n,e),Fn(e)}}function Fn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(td(t)){var o=t;break e}t=t.return}throw Error(a(160))}switch(o.tag){case 5:var l=o.stateNode;o.flags&32&&(vr(l,""),o.flags&=-33);var u=rd(e);Ml(e,u,l);break;case 3:case 4:var f=o.stateNode.containerInfo,v=rd(e);Al(e,v,f);break;default:throw Error(a(161))}}catch(x){Re(e,e.return,x)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ah(e,n,t){$=e,ld(e)}function ld(e,n,t){for(var o=(e.mode&1)!==0;$!==null;){var l=$,u=l.child;if(l.tag===22&&o){var f=l.memoizedState!==null||pi;if(!f){var v=l.alternate,x=v!==null&&v.memoizedState!==null||We;v=pi;var R=We;if(pi=f,(We=x)&&!R)for($=l;$!==null;)f=$,x=f.child,f.tag===22&&f.memoizedState!==null?cd(l):x!==null?(x.return=f,$=x):cd(l);for(;u!==null;)$=u,ld(u),u=u.sibling;$=l,pi=v,We=R}sd(e)}else l.subtreeFlags&8772&&u!==null?(u.return=l,$=u):sd(e)}}function sd(e){for(;$!==null;){var n=$;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:We||hi(5,n);break;case 1:var o=n.stateNode;if(n.flags&4&&!We)if(t===null)o.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Sn(n.type,t.memoizedProps);o.componentDidUpdate(l,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var u=n.updateQueue;u!==null&&uc(n,u,o);break;case 3:var f=n.updateQueue;if(f!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}uc(n,f,t)}break;case 5:var v=n.stateNode;if(t===null&&n.flags&4){t=v;var x=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&t.focus();break;case"img":x.src&&(t.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var R=n.alternate;if(R!==null){var j=R.memoizedState;if(j!==null){var F=j.dehydrated;F!==null&&_r(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}We||n.flags&512&&Dl(n)}catch(A){Re(n,n.return,A)}}if(n===e){$=null;break}if(t=n.sibling,t!==null){t.return=n.return,$=t;break}$=n.return}}function ud(e){for(;$!==null;){var n=$;if(n===e){$=null;break}var t=n.sibling;if(t!==null){t.return=n.return,$=t;break}$=n.return}}function cd(e){for(;$!==null;){var n=$;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{hi(4,n)}catch(x){Re(n,t,x)}break;case 1:var o=n.stateNode;if(typeof o.componentDidMount=="function"){var l=n.return;try{o.componentDidMount()}catch(x){Re(n,l,x)}}var u=n.return;try{Dl(n)}catch(x){Re(n,u,x)}break;case 5:var f=n.return;try{Dl(n)}catch(x){Re(n,f,x)}}}catch(x){Re(n,n.return,x)}if(n===e){$=null;break}var v=n.sibling;if(v!==null){v.return=n.return,$=v;break}$=n.return}}var Mh=Math.ceil,mi=J.ReactCurrentDispatcher,jl=J.ReactCurrentOwner,vn=J.ReactCurrentBatchConfig,de=0,Ie=null,Ne=null,Be=0,cn=0,ur=lt(0),Ae=0,Yr=null,Tt=0,gi=0,Fl=0,Gr=null,en=null,Il=0,cr=1/0,Jn=null,vi=!1,Ul=null,pt=null,yi=!1,ht=null,bi=0,Zr=0,ql=null,xi=-1,wi=0;function Xe(){return de&6?Te():xi!==-1?xi:xi=Te()}function mt(e){return e.mode&1?de&2&&Be!==0?Be&-Be:bh.transition!==null?(wi===0&&(wi=ru()),wi):(e=ve,e!==0||(e=window.event,e=e===void 0?16:fu(e.type)),e):1}function On(e,n,t,o){if(50<Zr)throw Zr=0,ql=null,Error(a(185));Sr(e,t,o),(!(de&2)||e!==Ie)&&(e===Ie&&(!(de&2)&&(gi|=t),Ae===4&&gt(e,Be)),nn(e,o),t===1&&de===0&&!(n.mode&1)&&(cr=Te()+500,Xo&&ut()))}function nn(e,n){var t=e.callbackNode;bp(e,n);var o=To(e,e===Ie?Be:0);if(o===0)t!==null&&eu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=o&-o,e.callbackPriority!==n){if(t!=null&&eu(t),n===1)e.tag===0?yh(fd.bind(null,e)):Yu(fd.bind(null,e)),hh(function(){!(de&6)&&ut()}),t=null;else{switch(ou(o)){case 1:t=xa;break;case 4:t=nu;break;case 16:t=Oo;break;case 536870912:t=tu;break;default:t=Oo}t=xd(t,dd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function dd(e,n){if(xi=-1,wi=0,de&6)throw Error(a(327));var t=e.callbackNode;if(dr()&&e.callbackNode!==t)return null;var o=To(e,e===Ie?Be:0);if(o===0)return null;if(o&30||o&e.expiredLanes||n)n=ki(e,o);else{n=o;var l=de;de|=2;var u=hd();(Ie!==e||Be!==n)&&(Jn=null,cr=Te()+500,Nt(e,n));do try{Ih();break}catch(v){pd(e,v)}while(!0);il(),mi.current=u,de=l,Ne!==null?n=0:(Ie=null,Be=0,n=Ae)}if(n!==0){if(n===2&&(l=wa(e),l!==0&&(o=l,n=Bl(e,l))),n===1)throw t=Yr,Nt(e,0),gt(e,o),nn(e,Te()),t;if(n===6)gt(e,o);else{if(l=e.current.alternate,!(o&30)&&!jh(l)&&(n=ki(e,o),n===2&&(u=wa(e),u!==0&&(o=u,n=Bl(e,u))),n===1))throw t=Yr,Nt(e,0),gt(e,o),nn(e,Te()),t;switch(e.finishedWork=l,e.finishedLanes=o,n){case 0:case 1:throw Error(a(345));case 2:Lt(e,en,Jn);break;case 3:if(gt(e,o),(o&130023424)===o&&(n=Il+500-Te(),10<n)){if(To(e,0)!==0)break;if(l=e.suspendedLanes,(l&o)!==o){Xe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ka(Lt.bind(null,e,en,Jn),n);break}Lt(e,en,Jn);break;case 4:if(gt(e,o),(o&4194240)===o)break;for(n=e.eventTimes,l=-1;0<o;){var f=31-xn(o);u=1<<f,f=n[f],f>l&&(l=f),o&=~u}if(o=l,o=Te()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Mh(o/1960))-o,10<o){e.timeoutHandle=Ka(Lt.bind(null,e,en,Jn),o);break}Lt(e,en,Jn);break;case 5:Lt(e,en,Jn);break;default:throw Error(a(329))}}}return nn(e,Te()),e.callbackNode===t?dd.bind(null,e):null}function Bl(e,n){var t=Gr;return e.current.memoizedState.isDehydrated&&(Nt(e,n).flags|=256),e=ki(e,n),e!==2&&(n=en,en=t,n!==null&&Hl(n)),e}function Hl(e){en===null?en=e:en.push.apply(en,e)}function jh(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var l=t[o],u=l.getSnapshot;l=l.value;try{if(!wn(u(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function gt(e,n){for(n&=~Fl,n&=~gi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-xn(n),o=1<<t;e[t]=-1,n&=~o}}function fd(e){if(de&6)throw Error(a(327));dr();var n=To(e,0);if(!(n&1))return nn(e,Te()),null;var t=ki(e,n);if(e.tag!==0&&t===2){var o=wa(e);o!==0&&(n=o,t=Bl(e,o))}if(t===1)throw t=Yr,Nt(e,0),gt(e,n),nn(e,Te()),t;if(t===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Lt(e,en,Jn),nn(e,Te()),null}function $l(e,n){var t=de;de|=1;try{return e(n)}finally{de=t,de===0&&(cr=Te()+500,Xo&&ut())}}function zt(e){ht!==null&&ht.tag===0&&!(de&6)&&dr();var n=de;de|=1;var t=vn.transition,o=ve;try{if(vn.transition=null,ve=1,e)return e()}finally{ve=o,vn.transition=t,de=n,!(de&6)&&ut()}}function Vl(){cn=ur.current,we(ur)}function Nt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,ph(t)),Ne!==null)for(t=Ne.return;t!==null;){var o=t;switch(el(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Qo();break;case 3:ar(),we(Ye),we(He),pl();break;case 5:dl(o);break;case 4:ar();break;case 13:we(Pe);break;case 19:we(Pe);break;case 10:al(o.type._context);break;case 22:case 23:Vl()}t=t.return}if(Ie=e,Ne=e=vt(e.current,null),Be=cn=n,Ae=0,Yr=null,Fl=gi=Tt=0,en=Gr=null,Ct!==null){for(n=0;n<Ct.length;n++)if(t=Ct[n],o=t.interleaved,o!==null){t.interleaved=null;var l=o.next,u=t.pending;if(u!==null){var f=u.next;u.next=l,o.next=f}t.pending=o}Ct=null}return e}function pd(e,n){do{var t=Ne;try{if(il(),ii.current=ui,ai){for(var o=Oe.memoizedState;o!==null;){var l=o.queue;l!==null&&(l.pending=null),o=o.next}ai=!1}if(Rt=0,Fe=De=Oe=null,Vr=!1,Wr=0,jl.current=null,t===null||t.return===null){Ae=1,Yr=n,Ne=null;break}e:{var u=e,f=t.return,v=t,x=n;if(n=Be,v.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var R=x,j=v,F=j.tag;if(!(j.mode&1)&&(F===0||F===11||F===15)){var A=j.alternate;A?(j.updateQueue=A.updateQueue,j.memoizedState=A.memoizedState,j.lanes=A.lanes):(j.updateQueue=null,j.memoizedState=null)}var H=Fc(f);if(H!==null){H.flags&=-257,Ic(H,f,v,u,n),H.mode&1&&jc(u,R,n),n=H,x=R;var W=n.updateQueue;if(W===null){var Q=new Set;Q.add(x),n.updateQueue=Q}else W.add(x);break e}else{if(!(n&1)){jc(u,R,n),Wl();break e}x=Error(a(426))}}else if(Se&&v.mode&1){var ze=Fc(f);if(ze!==null){!(ze.flags&65536)&&(ze.flags|=256),Ic(ze,f,v,u,n),rl(lr(x,v));break e}}u=x=lr(x,v),Ae!==4&&(Ae=2),Gr===null?Gr=[u]:Gr.push(u),u=f;do{switch(u.tag){case 3:u.flags|=65536,n&=-n,u.lanes|=n;var P=Ac(u,x,n);sc(u,P);break e;case 1:v=x;var k=u.type,_=u.stateNode;if(!(u.flags&128)&&(typeof k.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(pt===null||!pt.has(_)))){u.flags|=65536,n&=-n,u.lanes|=n;var I=Mc(u,v,n);sc(u,I);break e}}u=u.return}while(u!==null)}gd(t)}catch(X){n=X,Ne===t&&t!==null&&(Ne=t=t.return);continue}break}while(!0)}function hd(){var e=mi.current;return mi.current=ui,e===null?ui:e}function Wl(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Ie===null||!(Tt&268435455)&&!(gi&268435455)||gt(Ie,Be)}function ki(e,n){var t=de;de|=2;var o=hd();(Ie!==e||Be!==n)&&(Jn=null,Nt(e,n));do try{Fh();break}catch(l){pd(e,l)}while(!0);if(il(),de=t,mi.current=o,Ne!==null)throw Error(a(261));return Ie=null,Be=0,Ae}function Fh(){for(;Ne!==null;)md(Ne)}function Ih(){for(;Ne!==null&&!cp();)md(Ne)}function md(e){var n=bd(e.alternate,e,cn);e.memoizedProps=e.pendingProps,n===null?gd(e):Ne=n,jl.current=null}function gd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Nh(t,n),t!==null){t.flags&=32767,Ne=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Ne=null;return}}else if(t=zh(t,n,cn),t!==null){Ne=t;return}if(n=n.sibling,n!==null){Ne=n;return}Ne=n=e}while(n!==null);Ae===0&&(Ae=5)}function Lt(e,n,t){var o=ve,l=vn.transition;try{vn.transition=null,ve=1,Uh(e,n,t,o)}finally{vn.transition=l,ve=o}return null}function Uh(e,n,t,o){do dr();while(ht!==null);if(de&6)throw Error(a(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var u=t.lanes|t.childLanes;if(xp(e,u),e===Ie&&(Ne=Ie=null,Be=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||yi||(yi=!0,xd(Oo,function(){return dr(),null})),u=(t.flags&15990)!==0,t.subtreeFlags&15990||u){u=vn.transition,vn.transition=null;var f=ve;ve=1;var v=de;de|=4,jl.current=null,Dh(e,t),ad(t,e),ah(Wa),Lo=!!Va,Wa=Va=null,e.current=t,Ah(t),dp(),de=v,ve=f,vn.transition=u}else e.current=t;if(yi&&(yi=!1,ht=e,bi=l),u=e.pendingLanes,u===0&&(pt=null),hp(t.stateNode),nn(e,Te()),n!==null)for(o=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],o(l.value,{componentStack:l.stack,digest:l.digest});if(vi)throw vi=!1,e=Ul,Ul=null,e;return bi&1&&e.tag!==0&&dr(),u=e.pendingLanes,u&1?e===ql?Zr++:(Zr=0,ql=e):Zr=0,ut(),null}function dr(){if(ht!==null){var e=ou(bi),n=vn.transition,t=ve;try{if(vn.transition=null,ve=16>e?16:e,ht===null)var o=!1;else{if(e=ht,ht=null,bi=0,de&6)throw Error(a(331));var l=de;for(de|=4,$=e.current;$!==null;){var u=$,f=u.child;if($.flags&16){var v=u.deletions;if(v!==null){for(var x=0;x<v.length;x++){var R=v[x];for($=R;$!==null;){var j=$;switch(j.tag){case 0:case 11:case 15:Jr(8,j,u)}var F=j.child;if(F!==null)F.return=j,$=F;else for(;$!==null;){j=$;var A=j.sibling,H=j.return;if(nd(j),j===R){$=null;break}if(A!==null){A.return=H,$=A;break}$=H}}}var W=u.alternate;if(W!==null){var Q=W.child;if(Q!==null){W.child=null;do{var ze=Q.sibling;Q.sibling=null,Q=ze}while(Q!==null)}}$=u}}if(u.subtreeFlags&2064&&f!==null)f.return=u,$=f;else e:for(;$!==null;){if(u=$,u.flags&2048)switch(u.tag){case 0:case 11:case 15:Jr(9,u,u.return)}var P=u.sibling;if(P!==null){P.return=u.return,$=P;break e}$=u.return}}var k=e.current;for($=k;$!==null;){f=$;var _=f.child;if(f.subtreeFlags&2064&&_!==null)_.return=f,$=_;else e:for(f=k;$!==null;){if(v=$,v.flags&2048)try{switch(v.tag){case 0:case 11:case 15:hi(9,v)}}catch(X){Re(v,v.return,X)}if(v===f){$=null;break e}var I=v.sibling;if(I!==null){I.return=v.return,$=I;break e}$=v.return}}if(de=l,ut(),Dn&&typeof Dn.onPostCommitFiberRoot=="function")try{Dn.onPostCommitFiberRoot(Co,e)}catch{}o=!0}return o}finally{ve=t,vn.transition=n}}return!1}function vd(e,n,t){n=lr(t,n),n=Ac(e,n,1),e=dt(e,n,1),n=Xe(),e!==null&&(Sr(e,1,n),nn(e,n))}function Re(e,n,t){if(e.tag===3)vd(e,e,t);else for(;n!==null;){if(n.tag===3){vd(n,e,t);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(pt===null||!pt.has(o))){e=lr(t,e),e=Mc(n,e,1),n=dt(n,e,1),e=Xe(),n!==null&&(Sr(n,1,e),nn(n,e));break}}n=n.return}}function qh(e,n,t){var o=e.pingCache;o!==null&&o.delete(n),n=Xe(),e.pingedLanes|=e.suspendedLanes&t,Ie===e&&(Be&t)===t&&(Ae===4||Ae===3&&(Be&130023424)===Be&&500>Te()-Il?Nt(e,0):Fl|=t),nn(e,n)}function yd(e,n){n===0&&(e.mode&1?(n=Ro,Ro<<=1,!(Ro&130023424)&&(Ro=4194304)):n=1);var t=Xe();e=Qn(e,n),e!==null&&(Sr(e,n,t),nn(e,t))}function Bh(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),yd(e,t)}function Hh(e,n){var t=0;switch(e.tag){case 13:var o=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(a(314))}o!==null&&o.delete(n),yd(e,t)}var bd;bd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ye.current)Ze=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ze=!1,Th(e,n,t);Ze=!!(e.flags&131072)}else Ze=!1,Se&&n.flags&1048576&&Gu(n,Yo,n.index);switch(n.lanes=0,n.tag){case 2:var o=n.type;fi(e,n),e=n.pendingProps;var l=Zt(n,He.current);ir(n,t),l=gl(null,n,o,e,l,t);var u=vl();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ge(o)?(u=!0,Ko(n)):u=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ul(n),l.updater=ci,n.stateNode=l,l._reactInternals=n,Sl(n,o,e,t),n=Cl(null,n,o,!0,u,t)):(n.tag=0,Se&&u&&Za(n),Ke(null,n,l,t),n=n.child),n;case 16:o=n.elementType;e:{switch(fi(e,n),e=n.pendingProps,l=o._init,o=l(o._payload),n.type=o,l=n.tag=Vh(o),e=Sn(o,e),l){case 0:n=Ol(null,n,o,e,t);break e;case 1:n=Vc(null,n,o,e,t);break e;case 11:n=Uc(null,n,o,e,t);break e;case 14:n=qc(null,n,o,Sn(o.type,e),t);break e}throw Error(a(306,o,""))}return n;case 0:return o=n.type,l=n.pendingProps,l=n.elementType===o?l:Sn(o,l),Ol(e,n,o,l,t);case 1:return o=n.type,l=n.pendingProps,l=n.elementType===o?l:Sn(o,l),Vc(e,n,o,l,t);case 3:e:{if(Wc(n),e===null)throw Error(a(387));o=n.pendingProps,u=n.memoizedState,l=u.element,lc(e,n),ri(n,o,null,t);var f=n.memoizedState;if(o=f.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:f.cache,pendingSuspenseBoundaries:f.pendingSuspenseBoundaries,transitions:f.transitions},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){l=lr(Error(a(423)),n),n=Qc(e,n,o,t,l);break e}else if(o!==l){l=lr(Error(a(424)),n),n=Qc(e,n,o,t,l);break e}else for(un=at(n.stateNode.containerInfo.firstChild),sn=n,Se=!0,kn=null,t=ic(n,null,o,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(tr(),o===l){n=Xn(e,n,t);break e}Ke(e,n,o,t)}n=n.child}return n;case 5:return cc(n),e===null&&tl(n),o=n.type,l=n.pendingProps,u=e!==null?e.memoizedProps:null,f=l.children,Qa(o,l)?f=null:u!==null&&Qa(o,u)&&(n.flags|=32),$c(e,n),Ke(e,n,f,t),n.child;case 6:return e===null&&tl(n),null;case 13:return Kc(e,n,t);case 4:return cl(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=rr(n,null,o,t):Ke(e,n,o,t),n.child;case 11:return o=n.type,l=n.pendingProps,l=n.elementType===o?l:Sn(o,l),Uc(e,n,o,l,t);case 7:return Ke(e,n,n.pendingProps,t),n.child;case 8:return Ke(e,n,n.pendingProps.children,t),n.child;case 12:return Ke(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(o=n.type._context,l=n.pendingProps,u=n.memoizedProps,f=l.value,be(ei,o._currentValue),o._currentValue=f,u!==null)if(wn(u.value,f)){if(u.children===l.children&&!Ye.current){n=Xn(e,n,t);break e}}else for(u=n.child,u!==null&&(u.return=n);u!==null;){var v=u.dependencies;if(v!==null){f=u.child;for(var x=v.firstContext;x!==null;){if(x.context===o){if(u.tag===1){x=Kn(-1,t&-t),x.tag=2;var R=u.updateQueue;if(R!==null){R=R.shared;var j=R.pending;j===null?x.next=x:(x.next=j.next,j.next=x),R.pending=x}}u.lanes|=t,x=u.alternate,x!==null&&(x.lanes|=t),ll(u.return,t,n),v.lanes|=t;break}x=x.next}}else if(u.tag===10)f=u.type===n.type?null:u.child;else if(u.tag===18){if(f=u.return,f===null)throw Error(a(341));f.lanes|=t,v=f.alternate,v!==null&&(v.lanes|=t),ll(f,t,n),f=u.sibling}else f=u.child;if(f!==null)f.return=u;else for(f=u;f!==null;){if(f===n){f=null;break}if(u=f.sibling,u!==null){u.return=f.return,f=u;break}f=f.return}u=f}Ke(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,o=n.pendingProps.children,ir(n,t),l=mn(l),o=o(l),n.flags|=1,Ke(e,n,o,t),n.child;case 14:return o=n.type,l=Sn(o,n.pendingProps),l=Sn(o.type,l),qc(e,n,o,l,t);case 15:return Bc(e,n,n.type,n.pendingProps,t);case 17:return o=n.type,l=n.pendingProps,l=n.elementType===o?l:Sn(o,l),fi(e,n),n.tag=1,Ge(o)?(e=!0,Ko(n)):e=!1,ir(n,t),Lc(n,o,l),Sl(n,o,l,t),Cl(null,n,o,!0,e,t);case 19:return Jc(e,n,t);case 22:return Hc(e,n,t)}throw Error(a(156,n.tag))};function xd(e,n){return Zs(e,n)}function $h(e,n,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(e,n,t,o){return new $h(e,n,t,o)}function Ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vh(e){if(typeof e=="function")return Ql(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Nn)return 11;if(e===Ln)return 14}return 2}function vt(e,n){var t=e.alternate;return t===null?(t=yn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Si(e,n,t,o,l,u){var f=2;if(o=e,typeof e=="function")Ql(e)&&(f=1);else if(typeof e=="string")f=5;else e:switch(e){case oe:return Dt(t.children,l,u,n);case me:f=8,l|=8;break;case le:return e=yn(12,t,n,l|2),e.elementType=le,e.lanes=u,e;case on:return e=yn(13,t,n,l),e.elementType=on,e.lanes=u,e;case bn:return e=yn(19,t,n,l),e.elementType=bn,e.lanes=u,e;case _e:return Ei(t,l,u,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case je:f=10;break e;case zn:f=9;break e;case Nn:f=11;break e;case Ln:f=14;break e;case Je:f=16,o=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return n=yn(f,t,n,l),n.elementType=e,n.type=o,n.lanes=u,n}function Dt(e,n,t,o){return e=yn(7,e,o,n),e.lanes=t,e}function Ei(e,n,t,o){return e=yn(22,e,o,n),e.elementType=_e,e.lanes=t,e.stateNode={isHidden:!1},e}function Kl(e,n,t){return e=yn(6,e,null,n),e.lanes=t,e}function Xl(e,n,t){return n=yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Wh(e,n,t,o,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ka(0),this.expirationTimes=ka(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ka(0),this.identifierPrefix=o,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Jl(e,n,t,o,l,u,f,v,x){return e=new Wh(e,n,t,v,x),n===1?(n=1,u===!0&&(n|=8)):n=0,u=yn(3,null,null,n),e.current=u,u.stateNode=e,u.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ul(u),e}function Qh(e,n,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:re,key:o==null?null:""+o,children:e,containerInfo:n,implementation:t}}function wd(e){if(!e)return st;e=e._reactInternals;e:{if(kt(e)!==e||e.tag!==1)throw Error(a(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ge(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(a(171))}if(e.tag===1){var t=e.type;if(Ge(t))return Xu(e,t,n)}return n}function kd(e,n,t,o,l,u,f,v,x){return e=Jl(t,o,!0,e,l,u,f,v,x),e.context=wd(null),t=e.current,o=Xe(),l=mt(t),u=Kn(o,l),u.callback=n??null,dt(t,u,l),e.current.lanes=l,Sr(e,l,o),nn(e,o),e}function Pi(e,n,t,o){var l=n.current,u=Xe(),f=mt(l);return t=wd(t),n.context===null?n.context=t:n.pendingContext=t,n=Kn(u,f),n.payload={element:e},o=o===void 0?null:o,o!==null&&(n.callback=o),e=dt(l,n,f),e!==null&&(On(e,l,f,u),ti(e,l,f)),f}function Oi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Yl(e,n){Sd(e,n),(e=e.alternate)&&Sd(e,n)}function Kh(){return null}var Ed=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gl(e){this._internalRoot=e}Ci.prototype.render=Gl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));Pi(e,n,null,null)},Ci.prototype.unmount=Gl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;zt(function(){Pi(null,e,null,null)}),n[Hn]=null}};function Ci(e){this._internalRoot=e}Ci.prototype.unstable_scheduleHydration=function(e){if(e){var n=lu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<rt.length&&n!==0&&n<rt[t].priority;t++);rt.splice(t,0,e),t===0&&cu(e)}};function Zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pd(){}function Xh(e,n,t,o,l){if(l){if(typeof o=="function"){var u=o;o=function(){var R=Oi(f);u.call(R)}}var f=kd(n,o,e,0,null,!1,!1,"",Pd);return e._reactRootContainer=f,e[Hn]=f.current,jr(e.nodeType===8?e.parentNode:e),zt(),f}for(;l=e.lastChild;)e.removeChild(l);if(typeof o=="function"){var v=o;o=function(){var R=Oi(x);v.call(R)}}var x=Jl(e,0,!1,null,null,!1,!1,"",Pd);return e._reactRootContainer=x,e[Hn]=x.current,jr(e.nodeType===8?e.parentNode:e),zt(function(){Pi(n,x,t,o)}),x}function Ri(e,n,t,o,l){var u=t._reactRootContainer;if(u){var f=u;if(typeof l=="function"){var v=l;l=function(){var x=Oi(f);v.call(x)}}Pi(n,f,e,l)}else f=Xh(t,n,e,l,o);return Oi(f)}iu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=kr(n.pendingLanes);t!==0&&(Sa(n,t|1),nn(n,Te()),!(de&6)&&(cr=Te()+500,ut()))}break;case 13:zt(function(){var o=Qn(e,1);if(o!==null){var l=Xe();On(o,e,1,l)}}),Yl(e,1)}},Ea=function(e){if(e.tag===13){var n=Qn(e,134217728);if(n!==null){var t=Xe();On(n,e,134217728,t)}Yl(e,134217728)}},au=function(e){if(e.tag===13){var n=mt(e),t=Qn(e,n);if(t!==null){var o=Xe();On(t,e,n,o)}Yl(e,n)}},lu=function(){return ve},su=function(e,n){var t=ve;try{return ve=e,n()}finally{ve=t}},ga=function(e,n,t){switch(n){case"input":if(sa(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var o=t[n];if(o!==e&&o.form===e.form){var l=Wo(o);if(!l)throw Error(a(90));Ns(o),sa(o,l)}}}break;case"textarea":js(e,t);break;case"select":n=t.value,n!=null&&qt(e,!!t.multiple,n,!1)}},Ws=$l,Qs=zt;var Jh={usingClientEntryPoint:!1,Events:[Ur,Yt,Wo,$s,Vs,$l]},eo={findFiberByHostInstance:St,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yh={bundleType:eo.bundleType,version:eo.version,rendererPackageName:eo.rendererPackageName,rendererConfig:eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:J.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ys(e),e===null?null:e.stateNode},findFiberByHostInstance:eo.findFiberByHostInstance||Kh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ti=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ti.isDisabled&&Ti.supportsFiber)try{Co=Ti.inject(Yh),Dn=Ti}catch{}}return tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jh,tn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zl(n))throw Error(a(200));return Qh(e,n,null,t)},tn.createRoot=function(e,n){if(!Zl(e))throw Error(a(299));var t=!1,o="",l=Ed;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Jl(e,1,!1,null,null,t,!1,o,l),e[Hn]=n.current,jr(e.nodeType===8?e.parentNode:e),new Gl(n)},tn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=Ys(n),e=e===null?null:e.stateNode,e},tn.flushSync=function(e){return zt(e)},tn.hydrate=function(e,n,t){if(!_i(n))throw Error(a(200));return Ri(null,e,n,!0,t)},tn.hydrateRoot=function(e,n,t){if(!Zl(e))throw Error(a(405));var o=t!=null&&t.hydratedSources||null,l=!1,u="",f=Ed;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(u=t.identifierPrefix),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),n=kd(n,null,e,1,t??null,l,!1,u,f),e[Hn]=n.current,jr(e),o)for(e=0;e<o.length;e++)t=o[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new Ci(n)},tn.render=function(e,n,t){if(!_i(n))throw Error(a(200));return Ri(null,e,n,!1,t)},tn.unmountComponentAtNode=function(e){if(!_i(e))throw Error(a(40));return e._reactRootContainer?(zt(function(){Ri(null,null,e,!1,function(){e._reactRootContainer=null,e[Hn]=null})}),!0):!1},tn.unstable_batchedUpdates=$l,tn.unstable_renderSubtreeIntoContainer=function(e,n,t,o){if(!_i(t))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return Ri(e,n,t,!1,o)},tn.version="18.3.1-next-f1338f8080-20240426",tn}var Ld;function sm(){if(Ld)return ts.exports;Ld=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(i){console.error(i)}}return r(),ts.exports=lm(),ts.exports}var Dd;function um(){if(Dd)return zi;Dd=1;var r=sm();return zi.createRoot=r.createRoot,zi.hydrateRoot=r.hydrateRoot,zi}var cm=um(),ro={},Ad;function dm(){if(Ad)return ro;Ad=1,Object.defineProperty(ro,"__esModule",{value:!0}),ro.parse=p,ro.serialize=h;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,a=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,c=Object.prototype.toString,d=(()=>{const C=function(){};return C.prototype=Object.create(null),C})();function p(C,z){const b=new d,w=C.length;if(w<2)return b;const S=(z==null?void 0:z.decode)||y;let N=0;do{const D=C.indexOf("=",N);if(D===-1)break;const U=C.indexOf(";",N),J=U===-1?w:U;if(D>J){N=C.lastIndexOf(";",D-1)+1;continue}const Z=g(C,N,D),re=m(C,D,Z),oe=C.slice(Z,re);if(b[oe]===void 0){let me=g(C,D+1,J),le=m(C,J,me);const je=S(C.slice(me,le));b[oe]=je}N=J+1}while(N<w);return b}function g(C,z,b){do{const w=C.charCodeAt(z);if(w!==32&&w!==9)return z}while(++z<b);return b}function m(C,z,b){for(;z>b;){const w=C.charCodeAt(--z);if(w!==32&&w!==9)return z+1}return b}function h(C,z,b){const w=(b==null?void 0:b.encode)||encodeURIComponent;if(!r.test(C))throw new TypeError(`argument name is invalid: ${C}`);const S=w(z);if(!i.test(S))throw new TypeError(`argument val is invalid: ${z}`);let N=C+"="+S;if(!b)return N;if(b.maxAge!==void 0){if(!Number.isInteger(b.maxAge))throw new TypeError(`option maxAge is invalid: ${b.maxAge}`);N+="; Max-Age="+b.maxAge}if(b.domain){if(!a.test(b.domain))throw new TypeError(`option domain is invalid: ${b.domain}`);N+="; Domain="+b.domain}if(b.path){if(!s.test(b.path))throw new TypeError(`option path is invalid: ${b.path}`);N+="; Path="+b.path}if(b.expires){if(!O(b.expires)||!Number.isFinite(b.expires.valueOf()))throw new TypeError(`option expires is invalid: ${b.expires}`);N+="; Expires="+b.expires.toUTCString()}if(b.httpOnly&&(N+="; HttpOnly"),b.secure&&(N+="; Secure"),b.partitioned&&(N+="; Partitioned"),b.priority)switch(typeof b.priority=="string"?b.priority.toLowerCase():void 0){case"low":N+="; Priority=Low";break;case"medium":N+="; Priority=Medium";break;case"high":N+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${b.priority}`)}if(b.sameSite)switch(typeof b.sameSite=="string"?b.sameSite.toLowerCase():b.sameSite){case!0:case"strict":N+="; SameSite=Strict";break;case"lax":N+="; SameSite=Lax";break;case"none":N+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${b.sameSite}`)}return N}function y(C){if(C.indexOf("%")===-1)return C;try{return decodeURIComponent(C)}catch{return C}}function O(C){return c.call(C)==="[object Date]"}return ro}dm();/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Md="popstate";function fm(r={}){function i(c,d){let{pathname:p="/",search:g="",hash:m=""}=It(c.location.hash.substring(1));return!p.startsWith("/")&&!p.startsWith(".")&&(p="/"+p),fs("",{pathname:p,search:g,hash:m},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function a(c,d){let p=c.document.querySelector("base"),g="";if(p&&p.getAttribute("href")){let m=c.location.href,h=m.indexOf("#");g=h===-1?m:m.slice(0,h)}return g+"#"+(typeof d=="string"?d:so(d))}function s(c,d){Rn(c.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(d)})`)}return hm(i,a,s,r)}function Ce(r,i){if(r===!1||r===null||typeof r>"u")throw new Error(i)}function Rn(r,i){if(!r){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function pm(){return Math.random().toString(36).substring(2,10)}function jd(r,i){return{usr:r.state,key:r.key,idx:i}}function fs(r,i,a=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof i=="string"?It(i):i,state:a,key:i&&i.key||s||pm()}}function so({pathname:r="/",search:i="",hash:a=""}){return i&&i!=="?"&&(r+=i.charAt(0)==="?"?i:"?"+i),a&&a!=="#"&&(r+=a.charAt(0)==="#"?a:"#"+a),r}function It(r){let i={};if(r){let a=r.indexOf("#");a>=0&&(i.hash=r.substring(a),r=r.substring(0,a));let s=r.indexOf("?");s>=0&&(i.search=r.substring(s),r=r.substring(0,s)),r&&(i.pathname=r)}return i}function hm(r,i,a,s={}){let{window:c=document.defaultView,v5Compat:d=!1}=s,p=c.history,g="POP",m=null,h=y();h==null&&(h=0,p.replaceState({...p.state,idx:h},""));function y(){return(p.state||{idx:null}).idx}function O(){g="POP";let S=y(),N=S==null?null:S-h;h=S,m&&m({action:g,location:w.location,delta:N})}function C(S,N){g="PUSH";let D=fs(w.location,S,N);a&&a(D,S),h=y()+1;let U=jd(D,h),J=w.createHref(D);try{p.pushState(U,"",J)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;c.location.assign(J)}d&&m&&m({action:g,location:w.location,delta:1})}function z(S,N){g="REPLACE";let D=fs(w.location,S,N);a&&a(D,S),h=y();let U=jd(D,h),J=w.createHref(D);p.replaceState(U,"",J),d&&m&&m({action:g,location:w.location,delta:0})}function b(S){let N=c.location.origin!=="null"?c.location.origin:c.location.href,D=typeof S=="string"?S:so(S);return D=D.replace(/ $/,"%20"),Ce(N,`No window.location.(origin|href) available to create URL for href: ${D}`),new URL(D,N)}let w={get action(){return g},get location(){return r(c,p)},listen(S){if(m)throw new Error("A history only accepts one active listener");return c.addEventListener(Md,O),m=S,()=>{c.removeEventListener(Md,O),m=null}},createHref(S){return i(c,S)},createURL:b,encodeLocation(S){let N=b(S);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:C,replace:z,go(S){return p.go(S)}};return w}function df(r,i,a="/"){return mm(r,i,a,!1)}function mm(r,i,a,s){let c=typeof i=="string"?It(i):i,d=wt(c.pathname||"/",a);if(d==null)return null;let p=ff(r);gm(p);let g=null;for(let m=0;g==null&&m<p.length;++m){let h=Cm(d);g=Pm(p[m],h,s)}return g}function ff(r,i=[],a=[],s=""){let c=(d,p,g)=>{let m={relativePath:g===void 0?d.path||"":g,caseSensitive:d.caseSensitive===!0,childrenIndex:p,route:d};m.relativePath.startsWith("/")&&(Ce(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length));let h=Zn([s,m.relativePath]),y=a.concat(m);d.children&&d.children.length>0&&(Ce(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),ff(d.children,i,y,h)),!(d.path==null&&!d.index)&&i.push({path:h,score:Sm(h,d.index),routesMeta:y})};return r.forEach((d,p)=>{var g;if(d.path===""||!((g=d.path)!=null&&g.includes("?")))c(d,p);else for(let m of pf(d.path))c(d,p,m)}),i}function pf(r){let i=r.split("/");if(i.length===0)return[];let[a,...s]=i,c=a.endsWith("?"),d=a.replace(/\?$/,"");if(s.length===0)return c?[d,""]:[d];let p=pf(s.join("/")),g=[];return g.push(...p.map(m=>m===""?d:[d,m].join("/"))),c&&g.push(...p),g.map(m=>r.startsWith("/")&&m===""?"/":m)}function gm(r){r.sort((i,a)=>i.score!==a.score?a.score-i.score:Em(i.routesMeta.map(s=>s.childrenIndex),a.routesMeta.map(s=>s.childrenIndex)))}var vm=/^:[\w-]+$/,ym=3,bm=2,xm=1,wm=10,km=-2,Fd=r=>r==="*";function Sm(r,i){let a=r.split("/"),s=a.length;return a.some(Fd)&&(s+=km),i&&(s+=bm),a.filter(c=>!Fd(c)).reduce((c,d)=>c+(vm.test(d)?ym:d===""?xm:wm),s)}function Em(r,i){return r.length===i.length&&r.slice(0,-1).every((s,c)=>s===i[c])?r[r.length-1]-i[i.length-1]:0}function Pm(r,i,a=!1){let{routesMeta:s}=r,c={},d="/",p=[];for(let g=0;g<s.length;++g){let m=s[g],h=g===s.length-1,y=d==="/"?i:i.slice(d.length)||"/",O=Vi({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},y),C=m.route;if(!O&&h&&a&&!s[s.length-1].route.index&&(O=Vi({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!O)return null;Object.assign(c,O.params),p.push({params:c,pathname:Zn([d,O.pathname]),pathnameBase:zm(Zn([d,O.pathnameBase])),route:C}),O.pathnameBase!=="/"&&(d=Zn([d,O.pathnameBase]))}return p}function Vi(r,i){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[a,s]=Om(r.path,r.caseSensitive,r.end),c=i.match(a);if(!c)return null;let d=c[0],p=d.replace(/(.)\/+$/,"$1"),g=c.slice(1);return{params:s.reduce((h,{paramName:y,isOptional:O},C)=>{if(y==="*"){let b=g[C]||"";p=d.slice(0,d.length-b.length).replace(/(.)\/+$/,"$1")}const z=g[C];return O&&!z?h[y]=void 0:h[y]=(z||"").replace(/%2F/g,"/"),h},{}),pathname:d,pathnameBase:p,pattern:r}}function Om(r,i=!1,a=!0){Rn(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],c="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,g,m)=>(s.push({paramName:g,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),c+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?c+="\\/*$":r!==""&&r!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,i?void 0:"i"),s]}function Cm(r){try{return r.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Rn(!1,`The URL path "${r}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),r}}function wt(r,i){if(i==="/")return r;if(!r.toLowerCase().startsWith(i.toLowerCase()))return null;let a=i.endsWith("/")?i.length-1:i.length,s=r.charAt(a);return s&&s!=="/"?null:r.slice(a)||"/"}function _m(r,i="/"){let{pathname:a,search:s="",hash:c=""}=typeof r=="string"?It(r):r;return{pathname:a?a.startsWith("/")?a:Rm(a,i):i,search:Nm(s),hash:Lm(c)}}function Rm(r,i){let a=i.replace(/\/+$/,"").split("/");return r.split("/").forEach(c=>{c===".."?a.length>1&&a.pop():c!=="."&&a.push(c)}),a.length>1?a.join("/"):"/"}function is(r,i,a,s){return`Cannot include a '${r}' character in a manually specified \`to.${i}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Tm(r){return r.filter((i,a)=>a===0||i.route.path&&i.route.path.length>0)}function hf(r){let i=Tm(r);return i.map((a,s)=>s===i.length-1?a.pathname:a.pathnameBase)}function mf(r,i,a,s=!1){let c;typeof r=="string"?c=It(r):(c={...r},Ce(!c.pathname||!c.pathname.includes("?"),is("?","pathname","search",c)),Ce(!c.pathname||!c.pathname.includes("#"),is("#","pathname","hash",c)),Ce(!c.search||!c.search.includes("#"),is("#","search","hash",c)));let d=r===""||c.pathname==="",p=d?"/":c.pathname,g;if(p==null)g=a;else{let O=i.length-1;if(!s&&p.startsWith("..")){let C=p.split("/");for(;C[0]==="..";)C.shift(),O-=1;c.pathname=C.join("/")}g=O>=0?i[O]:"/"}let m=_m(c,g),h=p&&p!=="/"&&p.endsWith("/"),y=(d||p===".")&&a.endsWith("/");return!m.pathname.endsWith("/")&&(h||y)&&(m.pathname+="/"),m}var Zn=r=>r.join("/").replace(/\/\/+/g,"/"),zm=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Nm=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Lm=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Dm(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var gf=["POST","PUT","PATCH","DELETE"];new Set(gf);var Am=["GET",...gf];new Set(Am);var pr=L.createContext(null);pr.displayName="DataRouter";var Yi=L.createContext(null);Yi.displayName="DataRouterState";var vf=L.createContext({isTransitioning:!1});vf.displayName="ViewTransition";var Mm=L.createContext(new Map);Mm.displayName="Fetchers";var jm=L.createContext(null);jm.displayName="Await";var qn=L.createContext(null);qn.displayName="Navigation";var co=L.createContext(null);co.displayName="Location";var Bn=L.createContext({outlet:null,matches:[],isDataRoute:!1});Bn.displayName="Route";var ks=L.createContext(null);ks.displayName="RouteError";function Fm(r,{relative:i}={}){Ce(fo(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:s}=L.useContext(qn),{hash:c,pathname:d,search:p}=po(r,{relative:i}),g=d;return a!=="/"&&(g=d==="/"?a:Zn([a,d])),s.createHref({pathname:g,search:p,hash:c})}function fo(){return L.useContext(co)!=null}function Ut(){return Ce(fo(),"useLocation() may be used only in the context of a <Router> component."),L.useContext(co).location}var yf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function bf(r){L.useContext(qn).static||L.useLayoutEffect(r)}function Gi(){let{isDataRoute:r}=L.useContext(Bn);return r?Zm():Im()}function Im(){Ce(fo(),"useNavigate() may be used only in the context of a <Router> component.");let r=L.useContext(pr),{basename:i,navigator:a}=L.useContext(qn),{matches:s}=L.useContext(Bn),{pathname:c}=Ut(),d=JSON.stringify(hf(s)),p=L.useRef(!1);return bf(()=>{p.current=!0}),L.useCallback((m,h={})=>{if(Rn(p.current,yf),!p.current)return;if(typeof m=="number"){a.go(m);return}let y=mf(m,JSON.parse(d),c,h.relative==="path");r==null&&i!=="/"&&(y.pathname=y.pathname==="/"?i:Zn([i,y.pathname])),(h.replace?a.replace:a.push)(y,h.state,h)},[i,a,d,c,r])}var Um=L.createContext(null);function qm(r){let i=L.useContext(Bn).outlet;return i&&L.createElement(Um.Provider,{value:r},i)}function po(r,{relative:i}={}){let{matches:a}=L.useContext(Bn),{pathname:s}=Ut(),c=JSON.stringify(hf(a));return L.useMemo(()=>mf(r,JSON.parse(c),s,i==="path"),[r,c,s,i])}function Bm(r,i){return xf(r,i)}function xf(r,i,a,s){var N;Ce(fo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=L.useContext(qn),{matches:d}=L.useContext(Bn),p=d[d.length-1],g=p?p.params:{},m=p?p.pathname:"/",h=p?p.pathnameBase:"/",y=p&&p.route;{let D=y&&y.path||"";wf(m,!y||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let O=Ut(),C;if(i){let D=typeof i=="string"?It(i):i;Ce(h==="/"||((N=D.pathname)==null?void 0:N.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${D.pathname}" was given in the \`location\` prop.`),C=D}else C=O;let z=C.pathname||"/",b=z;if(h!=="/"){let D=h.replace(/^\//,"").split("/");b="/"+z.replace(/^\//,"").split("/").slice(D.length).join("/")}let w=df(r,{pathname:b});Rn(y||w!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),Rn(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=Qm(w&&w.map(D=>Object.assign({},D,{params:Object.assign({},g,D.params),pathname:Zn([h,c.encodeLocation?c.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?h:Zn([h,c.encodeLocation?c.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),d,a,s);return i&&S?L.createElement(co.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...C},navigationType:"POP"}},S):S}function Hm(){let r=Gm(),i=Dm(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),a=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:s},d={padding:"2px 4px",backgroundColor:s},p=null;return console.error("Error handled by React Router default ErrorBoundary:",r),p=L.createElement(L.Fragment,null,L.createElement("p",null,"💿 Hey developer 👋"),L.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",L.createElement("code",{style:d},"ErrorBoundary")," or"," ",L.createElement("code",{style:d},"errorElement")," prop on your route.")),L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},i),a?L.createElement("pre",{style:c},a):null,p)}var $m=L.createElement(Hm,null),Vm=class extends L.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,i){return i.location!==r.location||i.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:i.error,location:i.location,revalidation:r.revalidation||i.revalidation}}componentDidCatch(r,i){console.error("React Router caught the following error during render",r,i)}render(){return this.state.error!==void 0?L.createElement(Bn.Provider,{value:this.props.routeContext},L.createElement(ks.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Wm({routeContext:r,match:i,children:a}){let s=L.useContext(pr);return s&&s.static&&s.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=i.route.id),L.createElement(Bn.Provider,{value:r},a)}function Qm(r,i=[],a=null,s=null){if(r==null){if(!a)return null;if(a.errors)r=a.matches;else if(i.length===0&&!a.initialized&&a.matches.length>0)r=a.matches;else return null}let c=r,d=a==null?void 0:a.errors;if(d!=null){let m=c.findIndex(h=>h.route.id&&(d==null?void 0:d[h.route.id])!==void 0);Ce(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),c=c.slice(0,Math.min(c.length,m+1))}let p=!1,g=-1;if(a)for(let m=0;m<c.length;m++){let h=c[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(g=m),h.route.id){let{loaderData:y,errors:O}=a,C=h.route.loader&&!y.hasOwnProperty(h.route.id)&&(!O||O[h.route.id]===void 0);if(h.route.lazy||C){p=!0,g>=0?c=c.slice(0,g+1):c=[c[0]];break}}}return c.reduceRight((m,h,y)=>{let O,C=!1,z=null,b=null;a&&(O=d&&h.route.id?d[h.route.id]:void 0,z=h.route.errorElement||$m,p&&(g<0&&y===0?(wf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,b=null):g===y&&(C=!0,b=h.route.hydrateFallbackElement||null)));let w=i.concat(c.slice(0,y+1)),S=()=>{let N;return O?N=z:C?N=b:h.route.Component?N=L.createElement(h.route.Component,null):h.route.element?N=h.route.element:N=m,L.createElement(Wm,{match:h,routeContext:{outlet:m,matches:w,isDataRoute:a!=null},children:N})};return a&&(h.route.ErrorBoundary||h.route.errorElement||y===0)?L.createElement(Vm,{location:a.location,revalidation:a.revalidation,component:z,error:O,children:S(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):S()},null)}function Ss(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Km(r){let i=L.useContext(pr);return Ce(i,Ss(r)),i}function Xm(r){let i=L.useContext(Yi);return Ce(i,Ss(r)),i}function Jm(r){let i=L.useContext(Bn);return Ce(i,Ss(r)),i}function Es(r){let i=Jm(r),a=i.matches[i.matches.length-1];return Ce(a.route.id,`${r} can only be used on routes that contain a unique "id"`),a.route.id}function Ym(){return Es("useRouteId")}function Gm(){var s;let r=L.useContext(ks),i=Xm("useRouteError"),a=Es("useRouteError");return r!==void 0?r:(s=i.errors)==null?void 0:s[a]}function Zm(){let{router:r}=Km("useNavigate"),i=Es("useNavigate"),a=L.useRef(!1);return bf(()=>{a.current=!0}),L.useCallback(async(c,d={})=>{Rn(a.current,yf),a.current&&(typeof c=="number"?r.navigate(c):await r.navigate(c,{fromRouteId:i,...d}))},[r,i])}var Id={};function wf(r,i,a){!i&&!Id[r]&&(Id[r]=!0,Rn(!1,a))}L.memo(e0);function e0({routes:r,future:i,state:a}){return xf(r,void 0,a,i)}function n0(r){return qm(r.context)}function At(r){Ce(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function t0({basename:r="/",children:i=null,location:a,navigationType:s="POP",navigator:c,static:d=!1}){Ce(!fo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=r.replace(/^\/*/,"/"),g=L.useMemo(()=>({basename:p,navigator:c,static:d,future:{}}),[p,c,d]);typeof a=="string"&&(a=It(a));let{pathname:m="/",search:h="",hash:y="",state:O=null,key:C="default"}=a,z=L.useMemo(()=>{let b=wt(m,p);return b==null?null:{location:{pathname:b,search:h,hash:y,state:O,key:C},navigationType:s}},[p,m,h,y,O,C,s]);return Rn(z!=null,`<Router basename="${p}"> is not able to match the URL "${m}${h}${y}" because it does not start with the basename, so the <Router> won't render anything.`),z==null?null:L.createElement(qn.Provider,{value:g},L.createElement(co.Provider,{children:i,value:z}))}function r0({children:r,location:i}){return Bm(ps(r),i)}function ps(r,i=[]){let a=[];return L.Children.forEach(r,(s,c)=>{if(!L.isValidElement(s))return;let d=[...i,c];if(s.type===L.Fragment){a.push.apply(a,ps(s.props.children,d));return}Ce(s.type===At,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ce(!s.props.index||!s.props.children,"An index route cannot have child routes.");let p={id:s.props.id||d.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(p.children=ps(s.props.children,d)),a.push(p)}),a}var Ui="get",qi="application/x-www-form-urlencoded";function Zi(r){return r!=null&&typeof r.tagName=="string"}function o0(r){return Zi(r)&&r.tagName.toLowerCase()==="button"}function i0(r){return Zi(r)&&r.tagName.toLowerCase()==="form"}function a0(r){return Zi(r)&&r.tagName.toLowerCase()==="input"}function l0(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function s0(r,i){return r.button===0&&(!i||i==="_self")&&!l0(r)}var Ni=null;function u0(){if(Ni===null)try{new FormData(document.createElement("form"),0),Ni=!1}catch{Ni=!0}return Ni}var c0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function as(r){return r!=null&&!c0.has(r)?(Rn(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qi}"`),null):r}function d0(r,i){let a,s,c,d,p;if(i0(r)){let g=r.getAttribute("action");s=g?wt(g,i):null,a=r.getAttribute("method")||Ui,c=as(r.getAttribute("enctype"))||qi,d=new FormData(r)}else if(o0(r)||a0(r)&&(r.type==="submit"||r.type==="image")){let g=r.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||g.getAttribute("action");if(s=m?wt(m,i):null,a=r.getAttribute("formmethod")||g.getAttribute("method")||Ui,c=as(r.getAttribute("formenctype"))||as(g.getAttribute("enctype"))||qi,d=new FormData(g,r),!u0()){let{name:h,type:y,value:O}=r;if(y==="image"){let C=h?`${h}.`:"";d.append(`${C}x`,"0"),d.append(`${C}y`,"0")}else h&&d.append(h,O)}}else{if(Zi(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=Ui,s=null,c=qi,p=r}return d&&c==="text/plain"&&(p=d,d=void 0),{action:s,method:a.toLowerCase(),encType:c,formData:d,body:p}}function Ps(r,i){if(r===!1||r===null||typeof r>"u")throw new Error(i)}async function f0(r,i){if(r.id in i)return i[r.id];try{let a=await import(r.module);return i[r.id]=a,a}catch(a){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function p0(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function h0(r,i,a){let s=await Promise.all(r.map(async c=>{let d=i.routes[c.route.id];if(d){let p=await f0(d,a);return p.links?p.links():[]}return[]}));return y0(s.flat(1).filter(p0).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Ud(r,i,a,s,c,d){let p=(m,h)=>a[h]?m.route.id!==a[h].route.id:!0,g=(m,h)=>{var y;return a[h].pathname!==m.pathname||((y=a[h].route.path)==null?void 0:y.endsWith("*"))&&a[h].params["*"]!==m.params["*"]};return d==="assets"?i.filter((m,h)=>p(m,h)||g(m,h)):d==="data"?i.filter((m,h)=>{var O;let y=s.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(p(m,h)||g(m,h))return!0;if(m.route.shouldRevalidate){let C=m.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((O=a[0])==null?void 0:O.params)||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof C=="boolean")return C}return!0}):[]}function m0(r,i){return g0(r.map(a=>{let s=i.routes[a.route.id];if(!s)return[];let c=[s.module];return s.imports&&(c=c.concat(s.imports)),c}).flat(1))}function g0(r){return[...new Set(r)]}function v0(r){let i={},a=Object.keys(r).sort();for(let s of a)i[s]=r[s];return i}function y0(r,i){let a=new Set;return new Set(i),r.reduce((s,c)=>{let d=JSON.stringify(v0(c));return a.has(d)||(a.add(d),s.push({key:d,link:c})),s},[])}function b0(r){let i=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i.pathname==="/"?i.pathname="_root.data":i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function x0(){let r=L.useContext(pr);return Ps(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function w0(){let r=L.useContext(Yi);return Ps(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Os=L.createContext(void 0);Os.displayName="FrameworkContext";function kf(){let r=L.useContext(Os);return Ps(r,"You must render this element inside a <HydratedRouter> element"),r}function k0(r,i){let a=L.useContext(Os),[s,c]=L.useState(!1),[d,p]=L.useState(!1),{onFocus:g,onBlur:m,onMouseEnter:h,onMouseLeave:y,onTouchStart:O}=i,C=L.useRef(null);L.useEffect(()=>{if(r==="render"&&p(!0),r==="viewport"){let w=N=>{N.forEach(D=>{p(D.isIntersecting)})},S=new IntersectionObserver(w,{threshold:.5});return C.current&&S.observe(C.current),()=>{S.disconnect()}}},[r]),L.useEffect(()=>{if(s){let w=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(w)}}},[s]);let z=()=>{c(!0)},b=()=>{c(!1),p(!1)};return a?r!=="intent"?[d,C,{}]:[d,C,{onFocus:oo(g,z),onBlur:oo(m,b),onMouseEnter:oo(h,z),onMouseLeave:oo(y,b),onTouchStart:oo(O,z)}]:[!1,C,{}]}function oo(r,i){return a=>{r&&r(a),a.defaultPrevented||i(a)}}function S0({page:r,...i}){let{router:a}=x0(),s=L.useMemo(()=>df(a.routes,r,a.basename),[a.routes,r,a.basename]);return s?L.createElement(P0,{page:r,matches:s,...i}):(console.warn(`Tried to prefetch ${r} but no routes matched.`),null)}function E0(r){let{manifest:i,routeModules:a}=kf(),[s,c]=L.useState([]);return L.useEffect(()=>{let d=!1;return h0(r,i,a).then(p=>{d||c(p)}),()=>{d=!0}},[r,i,a]),s}function P0({page:r,matches:i,...a}){let s=Ut(),{manifest:c,routeModules:d}=kf(),{loaderData:p,matches:g}=w0(),m=L.useMemo(()=>Ud(r,i,g,c,s,"data"),[r,i,g,c,s]),h=L.useMemo(()=>Ud(r,i,g,c,s,"assets"),[r,i,g,c,s]),y=L.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let z=new Set,b=!1;if(i.forEach(S=>{var D;let N=c.routes[S.route.id];!N||!N.hasLoader||(!m.some(U=>U.route.id===S.route.id)&&S.route.id in p&&((D=d[S.route.id])!=null&&D.shouldRevalidate)||N.hasClientLoader?b=!0:z.add(S.route.id))}),z.size===0)return[];let w=b0(r);return b&&z.size>0&&w.searchParams.set("_routes",i.filter(S=>z.has(S.route.id)).map(S=>S.route.id).join(",")),[w.pathname+w.search]},[p,s,c,m,i,r,d]),O=L.useMemo(()=>m0(h,c),[h,c]),C=E0(h);return L.createElement(L.Fragment,null,y.map(z=>L.createElement("link",{key:z,rel:"prefetch",as:"fetch",href:z,...a})),O.map(z=>L.createElement("link",{key:z,rel:"modulepreload",href:z,...a})),C.map(({key:z,link:b})=>L.createElement("link",{key:z,...b})))}function O0(...r){return i=>{r.forEach(a=>{typeof a=="function"?a(i):a!=null&&(a.current=i)})}}var Sf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Sf&&(window.__reactRouterVersion="7.0.2")}catch{}function C0({basename:r,children:i,window:a}){let s=L.useRef();s.current==null&&(s.current=fm({window:a,v5Compat:!0}));let c=s.current,[d,p]=L.useState({action:c.action,location:c.location}),g=L.useCallback(m=>{L.startTransition(()=>p(m))},[p]);return L.useLayoutEffect(()=>c.listen(g),[c,g]),L.createElement(t0,{basename:r,children:i,location:d.location,navigationType:d.action,navigator:c})}var Ef=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cs=L.forwardRef(function({onClick:i,discover:a="render",prefetch:s="none",relative:c,reloadDocument:d,replace:p,state:g,target:m,to:h,preventScrollReset:y,viewTransition:O,...C},z){let{basename:b}=L.useContext(qn),w=typeof h=="string"&&Ef.test(h),S,N=!1;if(typeof h=="string"&&w&&(S=h,Sf))try{let le=new URL(window.location.href),je=h.startsWith("//")?new URL(le.protocol+h):new URL(h),zn=wt(je.pathname,b);je.origin===le.origin&&zn!=null?h=zn+je.search+je.hash:N=!0}catch{Rn(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let D=Fm(h,{relative:c}),[U,J,Z]=k0(s,C),re=z0(h,{replace:p,state:g,target:m,preventScrollReset:y,relative:c,viewTransition:O});function oe(le){i&&i(le),le.defaultPrevented||re(le)}let me=L.createElement("a",{...C,...Z,href:S||D,onClick:N||d?i:oe,ref:O0(z,J),target:m,"data-discover":!w&&a==="render"?"true":void 0});return U&&!w?L.createElement(L.Fragment,null,me,L.createElement(S0,{page:D})):me});Cs.displayName="Link";var _0=L.forwardRef(function({"aria-current":i="page",caseSensitive:a=!1,className:s="",end:c=!1,style:d,to:p,viewTransition:g,children:m,...h},y){let O=po(p,{relative:h.relative}),C=Ut(),z=L.useContext(Yi),{navigator:b,basename:w}=L.useContext(qn),S=z!=null&&M0(O)&&g===!0,N=b.encodeLocation?b.encodeLocation(O).pathname:O.pathname,D=C.pathname,U=z&&z.navigation&&z.navigation.location?z.navigation.location.pathname:null;a||(D=D.toLowerCase(),U=U?U.toLowerCase():null,N=N.toLowerCase()),U&&w&&(U=wt(U,w)||U);const J=N!=="/"&&N.endsWith("/")?N.length-1:N.length;let Z=D===N||!c&&D.startsWith(N)&&D.charAt(J)==="/",re=U!=null&&(U===N||!c&&U.startsWith(N)&&U.charAt(N.length)==="/"),oe={isActive:Z,isPending:re,isTransitioning:S},me=Z?i:void 0,le;typeof s=="function"?le=s(oe):le=[s,Z?"active":null,re?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let je=typeof d=="function"?d(oe):d;return L.createElement(Cs,{...h,"aria-current":me,className:le,ref:y,style:je,to:p,viewTransition:g},typeof m=="function"?m(oe):m)});_0.displayName="NavLink";var R0=L.forwardRef(({discover:r="render",fetcherKey:i,navigate:a,reloadDocument:s,replace:c,state:d,method:p=Ui,action:g,onSubmit:m,relative:h,preventScrollReset:y,viewTransition:O,...C},z)=>{let b=D0(),w=A0(g,{relative:h}),S=p.toLowerCase()==="get"?"get":"post",N=typeof g=="string"&&Ef.test(g),D=U=>{if(m&&m(U),U.defaultPrevented)return;U.preventDefault();let J=U.nativeEvent.submitter,Z=(J==null?void 0:J.getAttribute("formmethod"))||p;b(J||U.currentTarget,{fetcherKey:i,method:Z,navigate:a,replace:c,state:d,relative:h,preventScrollReset:y,viewTransition:O})};return L.createElement("form",{ref:z,method:S,action:w,onSubmit:s?m:D,...C,"data-discover":!N&&r==="render"?"true":void 0})});R0.displayName="Form";function T0(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Pf(r){let i=L.useContext(pr);return Ce(i,T0(r)),i}function z0(r,{target:i,replace:a,state:s,preventScrollReset:c,relative:d,viewTransition:p}={}){let g=Gi(),m=Ut(),h=po(r,{relative:d});return L.useCallback(y=>{if(s0(y,i)){y.preventDefault();let O=a!==void 0?a:so(m)===so(h);g(r,{replace:O,state:s,preventScrollReset:c,relative:d,viewTransition:p})}},[m,g,h,a,s,i,r,c,d,p])}var N0=0,L0=()=>`__${String(++N0)}__`;function D0(){let{router:r}=Pf("useSubmit"),{basename:i}=L.useContext(qn),a=Ym();return L.useCallback(async(s,c={})=>{let{action:d,method:p,encType:g,formData:m,body:h}=d0(s,i);if(c.navigate===!1){let y=c.fetcherKey||L0();await r.fetch(y,a,c.action||d,{preventScrollReset:c.preventScrollReset,formData:m,body:h,formMethod:c.method||p,formEncType:c.encType||g,flushSync:c.flushSync})}else await r.navigate(c.action||d,{preventScrollReset:c.preventScrollReset,formData:m,body:h,formMethod:c.method||p,formEncType:c.encType||g,replace:c.replace,state:c.state,fromRouteId:a,flushSync:c.flushSync,viewTransition:c.viewTransition})},[r,i,a])}function A0(r,{relative:i}={}){let{basename:a}=L.useContext(qn),s=L.useContext(Bn);Ce(s,"useFormAction must be used inside a RouteContext");let[c]=s.matches.slice(-1),d={...po(r||".",{relative:i})},p=Ut();if(r==null){d.search=p.search;let g=new URLSearchParams(d.search),m=g.getAll("index");if(m.some(y=>y==="")){g.delete("index"),m.filter(O=>O).forEach(O=>g.append("index",O));let y=g.toString();d.search=y?`?${y}`:""}}return(!r||r===".")&&c.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(d.pathname=d.pathname==="/"?a:Zn([a,d.pathname])),so(d)}function M0(r,i={}){let a=L.useContext(vf);Ce(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Pf("useViewTransitionState"),c=po(r,{relative:i.relative});if(!a.isTransitioning)return!1;let d=wt(a.currentLocation.pathname,s)||a.currentLocation.pathname,p=wt(a.nextLocation.pathname,s)||a.nextLocation.pathname;return Vi(c.pathname,p)!=null||Vi(c.pathname,d)!=null}new TextEncoder;var Of={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},qd=ce.createContext&&ce.createContext(Of),j0=["attr","size","title"];function F0(r,i){if(r==null)return{};var a=I0(r,i),s,c;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(r);for(c=0;c<d.length;c++)s=d[c],!(i.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(a[s]=r[s])}return a}function I0(r,i){if(r==null)return{};var a={};for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){if(i.indexOf(s)>=0)continue;a[s]=r[s]}return a}function Wi(){return Wi=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(r[s]=a[s])}return r},Wi.apply(this,arguments)}function Bd(r,i){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);i&&(s=s.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),a.push.apply(a,s)}return a}function Qi(r){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?Bd(Object(a),!0).forEach(function(s){U0(r,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):Bd(Object(a)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(a,s))})}return r}function U0(r,i,a){return i=q0(i),i in r?Object.defineProperty(r,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[i]=a,r}function q0(r){var i=B0(r,"string");return typeof i=="symbol"?i:i+""}function B0(r,i){if(typeof r!="object"||!r)return r;var a=r[Symbol.toPrimitive];if(a!==void 0){var s=a.call(r,i||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(r)}function Cf(r){return r&&r.map((i,a)=>ce.createElement(i.tag,Qi({key:a},i.attr),Cf(i.child)))}function ho(r){return i=>ce.createElement(H0,Wi({attr:Qi({},r.attr)},i),Cf(r.child))}function H0(r){var i=a=>{var{attr:s,size:c,title:d}=r,p=F0(r,j0),g=c||a.size||"1em",m;return a.className&&(m=a.className),r.className&&(m=(m?m+" ":"")+r.className),ce.createElement("svg",Wi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,s,p,{className:m,style:Qi(Qi({color:r.color||a.color},a.style),r.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),d&&ce.createElement("title",null,d),r.children)};return qd!==void 0?ce.createElement(qd.Consumer,null,a=>i(a)):i(Of)}function $0(r){return ho({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"},child:[]}]})(r)}function V0(r){return ho({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M452.1 49L52.3 265.3c-6 3.3-5.6 12.1.6 14.9l68.2 25.7c4 1.5 7.2 4.5 9 8.4l53 109.1c1 4.8 9.9 6.1 10 1.2l-8.1-90.2c.5-6.7 3-13 7.3-18.2l207.3-203.1c1.2-1.2 2.9-1.6 4.5-1.3 3.4.8 4.8 4.9 2.6 7.6L228 338c-4 6-6 11-7 18l-10.7 77.9c.9 6.8 6.2 9.4 10.5 3.3l38.5-45.2c2.6-3.7 7.7-4.5 11.3-1.9l99.2 72.3c4.7 3.5 11.4.9 12.6-4.9L463.8 58c1.5-6.8-5.6-12.3-11.7-9z"},child:[]}]})(r)}function W0(r){return ho({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M124 80v322c0 7.7-6.3 14-14 14s-14-6.3-14-14V112H80c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h353.1c17 0 30.9-13.8 30.9-30.9V80c0-17.7-14.3-32-32-32l-278 2c-17.7 0-30 12.3-30 30zm66 32h84c7.7 0 14 6.3 14 14s-6.3 14-14 14h-84c-7.7 0-14-6.3-14-14s6.3-14 14-14zm0 160h148c7.7 0 14 6.3 14 14s-6.3 14-14 14H190c-7.7 0-14-6.3-14-14s6.3-14 14-14zm196 108H190c-7.7 0-14-6.3-14-14s6.3-14 14-14h196c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-160H190c-7.7 0-14-6.3-14-14s6.3-14 14-14h196c7.7 0 14 6.3 14 14s-6.3 14-14 14z"},child:[]}]})(r)}function Q0(r){return ho({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M447.8 438.3c-7.2-31.8-48.3-47.3-62.5-52.3-15.6-5.5-37.8-6.8-52.1-10-8.2-1.8-20.1-6.3-24.1-11.1s-1.6-49.3-1.6-49.3 7.4-11.5 11.4-21.7c4-10.1 8.4-37.9 8.4-37.9s8.2 0 11.1-14.4c3.1-15.7 8-21.8 7.4-33.5-.6-11.5-6.9-11.2-6.9-11.2s6.1-16.7 6.8-51.3c.9-41.1-31.3-81.6-89.6-81.6-59.1 0-90.6 40.5-89.7 81.6.8 34.6 6.7 51.3 6.7 51.3s-6.3-.3-6.9 11.2c-.6 11.7 4.3 17.8 7.4 33.5 2.8 14.4 11.1 14.4 11.1 14.4s4.4 27.8 8.4 37.9c4 10.2 11.4 21.7 11.4 21.7s2.4 44.5-1.6 49.3c-4 4.8-15.9 9.3-24.1 11.1-14.3 3.2-36.5 4.5-52.1 10-14.2 5-55.3 20.5-62.5 52.3-1.1 5 2.7 9.7 7.9 9.7H440c5.1 0 8.9-4.7 7.8-9.7z"},child:[]}]})(r)}const K0=[{title:"Home",path:"/home",icon:q.jsx($0,{style:{fontSize:"25px",color:"#555"}}),cName:"nav-text"},{title:"About",path:"about",icon:q.jsx(W0,{style:{fontSize:"25px",color:"#555"}}),cName:"nav-text"},{title:"Announcement",path:"announcement",icon:q.jsx(V0,{style:{fontSize:"25px",color:"#555"}}),cName:"nav-text"}],X0=()=>(Gi(),q.jsxs("div",{children:[q.jsx("h2",{children:"Menu"}),q.jsx("ul",{className:"menu-list",children:K0.map((r,i)=>q.jsx("li",{className:r.cName,children:q.jsxs(Cs,{to:r.path,children:[r.icon,q.jsx("span",{children:r.title})]})},i))})]})),J0=()=>q.jsxs("div",{style:{display:"flex"},children:[q.jsx("aside",{style:{width:"230px",background:"#ffe4c4",padding:"10px",height:"100vh",boxShadow:"2px 0 5px rgba(0,0,0,0.1)"},children:q.jsx(X0,{})}),q.jsxs("main",{style:{flex:1,padding:"20px"},children:[q.jsx(n0,{})," "]})]}),Y0=()=>q.jsx("h2",{children:"Welcome to the Home Page"}),G0=()=>q.jsx("h2",{children:"Welcome to the about Page"}),Z0=()=>q.jsx("h2",{children:"Our Announcement"});function _f(r,i){return function(){return r.apply(i,arguments)}}const{toString:eg}=Object.prototype,{getPrototypeOf:_s}=Object,ea=(r=>i=>{const a=eg.call(i);return r[a]||(r[a]=a.slice(8,-1).toLowerCase())})(Object.create(null)),Tn=r=>(r=r.toLowerCase(),i=>ea(i)===r),na=r=>i=>typeof i===r,{isArray:hr}=Array,uo=na("undefined");function ng(r){return r!==null&&!uo(r)&&r.constructor!==null&&!uo(r.constructor)&&fn(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const Rf=Tn("ArrayBuffer");function tg(r){let i;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?i=ArrayBuffer.isView(r):i=r&&r.buffer&&Rf(r.buffer),i}const rg=na("string"),fn=na("function"),Tf=na("number"),ta=r=>r!==null&&typeof r=="object",og=r=>r===!0||r===!1,Bi=r=>{if(ea(r)!=="object")return!1;const i=_s(r);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)},ig=Tn("Date"),ag=Tn("File"),lg=Tn("Blob"),sg=Tn("FileList"),ug=r=>ta(r)&&fn(r.pipe),cg=r=>{let i;return r&&(typeof FormData=="function"&&r instanceof FormData||fn(r.append)&&((i=ea(r))==="formdata"||i==="object"&&fn(r.toString)&&r.toString()==="[object FormData]"))},dg=Tn("URLSearchParams"),[fg,pg,hg,mg]=["ReadableStream","Request","Response","Headers"].map(Tn),gg=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function mo(r,i,{allOwnKeys:a=!1}={}){if(r===null||typeof r>"u")return;let s,c;if(typeof r!="object"&&(r=[r]),hr(r))for(s=0,c=r.length;s<c;s++)i.call(null,r[s],s,r);else{const d=a?Object.getOwnPropertyNames(r):Object.keys(r),p=d.length;let g;for(s=0;s<p;s++)g=d[s],i.call(null,r[g],g,r)}}function zf(r,i){i=i.toLowerCase();const a=Object.keys(r);let s=a.length,c;for(;s-- >0;)if(c=a[s],i===c.toLowerCase())return c;return null}const Mt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Nf=r=>!uo(r)&&r!==Mt;function hs(){const{caseless:r}=Nf(this)&&this||{},i={},a=(s,c)=>{const d=r&&zf(i,c)||c;Bi(i[d])&&Bi(s)?i[d]=hs(i[d],s):Bi(s)?i[d]=hs({},s):hr(s)?i[d]=s.slice():i[d]=s};for(let s=0,c=arguments.length;s<c;s++)arguments[s]&&mo(arguments[s],a);return i}const vg=(r,i,a,{allOwnKeys:s}={})=>(mo(i,(c,d)=>{a&&fn(c)?r[d]=_f(c,a):r[d]=c},{allOwnKeys:s}),r),yg=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),bg=(r,i,a,s)=>{r.prototype=Object.create(i.prototype,s),r.prototype.constructor=r,Object.defineProperty(r,"super",{value:i.prototype}),a&&Object.assign(r.prototype,a)},xg=(r,i,a,s)=>{let c,d,p;const g={};if(i=i||{},r==null)return i;do{for(c=Object.getOwnPropertyNames(r),d=c.length;d-- >0;)p=c[d],(!s||s(p,r,i))&&!g[p]&&(i[p]=r[p],g[p]=!0);r=a!==!1&&_s(r)}while(r&&(!a||a(r,i))&&r!==Object.prototype);return i},wg=(r,i,a)=>{r=String(r),(a===void 0||a>r.length)&&(a=r.length),a-=i.length;const s=r.indexOf(i,a);return s!==-1&&s===a},kg=r=>{if(!r)return null;if(hr(r))return r;let i=r.length;if(!Tf(i))return null;const a=new Array(i);for(;i-- >0;)a[i]=r[i];return a},Sg=(r=>i=>r&&i instanceof r)(typeof Uint8Array<"u"&&_s(Uint8Array)),Eg=(r,i)=>{const s=(r&&r[Symbol.iterator]).call(r);let c;for(;(c=s.next())&&!c.done;){const d=c.value;i.call(r,d[0],d[1])}},Pg=(r,i)=>{let a;const s=[];for(;(a=r.exec(i))!==null;)s.push(a);return s},Og=Tn("HTMLFormElement"),Cg=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(a,s,c){return s.toUpperCase()+c}),Hd=(({hasOwnProperty:r})=>(i,a)=>r.call(i,a))(Object.prototype),_g=Tn("RegExp"),Lf=(r,i)=>{const a=Object.getOwnPropertyDescriptors(r),s={};mo(a,(c,d)=>{let p;(p=i(c,d,r))!==!1&&(s[d]=p||c)}),Object.defineProperties(r,s)},Rg=r=>{Lf(r,(i,a)=>{if(fn(r)&&["arguments","caller","callee"].indexOf(a)!==-1)return!1;const s=r[a];if(fn(s)){if(i.enumerable=!1,"writable"in i){i.writable=!1;return}i.set||(i.set=()=>{throw Error("Can not rewrite read-only method '"+a+"'")})}})},Tg=(r,i)=>{const a={},s=c=>{c.forEach(d=>{a[d]=!0})};return hr(r)?s(r):s(String(r).split(i)),a},zg=()=>{},Ng=(r,i)=>r!=null&&Number.isFinite(r=+r)?r:i,ls="abcdefghijklmnopqrstuvwxyz",$d="0123456789",Df={DIGIT:$d,ALPHA:ls,ALPHA_DIGIT:ls+ls.toUpperCase()+$d},Lg=(r=16,i=Df.ALPHA_DIGIT)=>{let a="";const{length:s}=i;for(;r--;)a+=i[Math.random()*s|0];return a};function Dg(r){return!!(r&&fn(r.append)&&r[Symbol.toStringTag]==="FormData"&&r[Symbol.iterator])}const Ag=r=>{const i=new Array(10),a=(s,c)=>{if(ta(s)){if(i.indexOf(s)>=0)return;if(!("toJSON"in s)){i[c]=s;const d=hr(s)?[]:{};return mo(s,(p,g)=>{const m=a(p,c+1);!uo(m)&&(d[g]=m)}),i[c]=void 0,d}}return s};return a(r,0)},Mg=Tn("AsyncFunction"),jg=r=>r&&(ta(r)||fn(r))&&fn(r.then)&&fn(r.catch),Af=((r,i)=>r?setImmediate:i?((a,s)=>(Mt.addEventListener("message",({source:c,data:d})=>{c===Mt&&d===a&&s.length&&s.shift()()},!1),c=>{s.push(c),Mt.postMessage(a,"*")}))(`axios@${Math.random()}`,[]):a=>setTimeout(a))(typeof setImmediate=="function",fn(Mt.postMessage)),Fg=typeof queueMicrotask<"u"?queueMicrotask.bind(Mt):typeof process<"u"&&process.nextTick||Af,T={isArray:hr,isArrayBuffer:Rf,isBuffer:ng,isFormData:cg,isArrayBufferView:tg,isString:rg,isNumber:Tf,isBoolean:og,isObject:ta,isPlainObject:Bi,isReadableStream:fg,isRequest:pg,isResponse:hg,isHeaders:mg,isUndefined:uo,isDate:ig,isFile:ag,isBlob:lg,isRegExp:_g,isFunction:fn,isStream:ug,isURLSearchParams:dg,isTypedArray:Sg,isFileList:sg,forEach:mo,merge:hs,extend:vg,trim:gg,stripBOM:yg,inherits:bg,toFlatObject:xg,kindOf:ea,kindOfTest:Tn,endsWith:wg,toArray:kg,forEachEntry:Eg,matchAll:Pg,isHTMLForm:Og,hasOwnProperty:Hd,hasOwnProp:Hd,reduceDescriptors:Lf,freezeMethods:Rg,toObjectSet:Tg,toCamelCase:Cg,noop:zg,toFiniteNumber:Ng,findKey:zf,global:Mt,isContextDefined:Nf,ALPHABET:Df,generateString:Lg,isSpecCompliantForm:Dg,toJSONObject:Ag,isAsyncFn:Mg,isThenable:jg,setImmediate:Af,asap:Fg};function te(r,i,a,s,c){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=r,this.name="AxiosError",i&&(this.code=i),a&&(this.config=a),s&&(this.request=s),c&&(this.response=c,this.status=c.status?c.status:null)}T.inherits(te,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:T.toJSONObject(this.config),code:this.code,status:this.status}}});const Mf=te.prototype,jf={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(r=>{jf[r]={value:r}});Object.defineProperties(te,jf);Object.defineProperty(Mf,"isAxiosError",{value:!0});te.from=(r,i,a,s,c,d)=>{const p=Object.create(Mf);return T.toFlatObject(r,p,function(m){return m!==Error.prototype},g=>g!=="isAxiosError"),te.call(p,r.message,i,a,s,c),p.cause=r,p.name=r.name,d&&Object.assign(p,d),p};const Ig=null;function ms(r){return T.isPlainObject(r)||T.isArray(r)}function Ff(r){return T.endsWith(r,"[]")?r.slice(0,-2):r}function Vd(r,i,a){return r?r.concat(i).map(function(c,d){return c=Ff(c),!a&&d?"["+c+"]":c}).join(a?".":""):i}function Ug(r){return T.isArray(r)&&!r.some(ms)}const qg=T.toFlatObject(T,{},null,function(i){return/^is[A-Z]/.test(i)});function ra(r,i,a){if(!T.isObject(r))throw new TypeError("target must be an object");i=i||new FormData,a=T.toFlatObject(a,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,S){return!T.isUndefined(S[w])});const s=a.metaTokens,c=a.visitor||y,d=a.dots,p=a.indexes,m=(a.Blob||typeof Blob<"u"&&Blob)&&T.isSpecCompliantForm(i);if(!T.isFunction(c))throw new TypeError("visitor must be a function");function h(b){if(b===null)return"";if(T.isDate(b))return b.toISOString();if(!m&&T.isBlob(b))throw new te("Blob is not supported. Use a Buffer instead.");return T.isArrayBuffer(b)||T.isTypedArray(b)?m&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function y(b,w,S){let N=b;if(b&&!S&&typeof b=="object"){if(T.endsWith(w,"{}"))w=s?w:w.slice(0,-2),b=JSON.stringify(b);else if(T.isArray(b)&&Ug(b)||(T.isFileList(b)||T.endsWith(w,"[]"))&&(N=T.toArray(b)))return w=Ff(w),N.forEach(function(U,J){!(T.isUndefined(U)||U===null)&&i.append(p===!0?Vd([w],J,d):p===null?w:w+"[]",h(U))}),!1}return ms(b)?!0:(i.append(Vd(S,w,d),h(b)),!1)}const O=[],C=Object.assign(qg,{defaultVisitor:y,convertValue:h,isVisitable:ms});function z(b,w){if(!T.isUndefined(b)){if(O.indexOf(b)!==-1)throw Error("Circular reference detected in "+w.join("."));O.push(b),T.forEach(b,function(N,D){(!(T.isUndefined(N)||N===null)&&c.call(i,N,T.isString(D)?D.trim():D,w,C))===!0&&z(N,w?w.concat(D):[D])}),O.pop()}}if(!T.isObject(r))throw new TypeError("data must be an object");return z(r),i}function Wd(r){const i={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g,function(s){return i[s]})}function Rs(r,i){this._pairs=[],r&&ra(r,this,i)}const If=Rs.prototype;If.append=function(i,a){this._pairs.push([i,a])};If.toString=function(i){const a=i?function(s){return i.call(this,s,Wd)}:Wd;return this._pairs.map(function(c){return a(c[0])+"="+a(c[1])},"").join("&")};function Bg(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Uf(r,i,a){if(!i)return r;const s=a&&a.encode||Bg;T.isFunction(a)&&(a={serialize:a});const c=a&&a.serialize;let d;if(c?d=c(i,a):d=T.isURLSearchParams(i)?i.toString():new Rs(i,a).toString(s),d){const p=r.indexOf("#");p!==-1&&(r=r.slice(0,p)),r+=(r.indexOf("?")===-1?"?":"&")+d}return r}class Qd{constructor(){this.handlers=[]}use(i,a,s){return this.handlers.push({fulfilled:i,rejected:a,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(i){this.handlers[i]&&(this.handlers[i]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(i){T.forEach(this.handlers,function(s){s!==null&&i(s)})}}const qf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Hg=typeof URLSearchParams<"u"?URLSearchParams:Rs,$g=typeof FormData<"u"?FormData:null,Vg=typeof Blob<"u"?Blob:null,Wg={isBrowser:!0,classes:{URLSearchParams:Hg,FormData:$g,Blob:Vg},protocols:["http","https","file","blob","url","data"]},Ts=typeof window<"u"&&typeof document<"u",gs=typeof navigator=="object"&&navigator||void 0,Qg=Ts&&(!gs||["ReactNative","NativeScript","NS"].indexOf(gs.product)<0),Kg=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Xg=Ts&&window.location.href||"http://localhost",Jg=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ts,hasStandardBrowserEnv:Qg,hasStandardBrowserWebWorkerEnv:Kg,navigator:gs,origin:Xg},Symbol.toStringTag,{value:"Module"})),Qe={...Jg,...Wg};function Yg(r,i){return ra(r,new Qe.classes.URLSearchParams,Object.assign({visitor:function(a,s,c,d){return Qe.isNode&&T.isBuffer(a)?(this.append(s,a.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)}},i))}function Gg(r){return T.matchAll(/\w+|\[(\w*)]/g,r).map(i=>i[0]==="[]"?"":i[1]||i[0])}function Zg(r){const i={},a=Object.keys(r);let s;const c=a.length;let d;for(s=0;s<c;s++)d=a[s],i[d]=r[d];return i}function Bf(r){function i(a,s,c,d){let p=a[d++];if(p==="__proto__")return!0;const g=Number.isFinite(+p),m=d>=a.length;return p=!p&&T.isArray(c)?c.length:p,m?(T.hasOwnProp(c,p)?c[p]=[c[p],s]:c[p]=s,!g):((!c[p]||!T.isObject(c[p]))&&(c[p]=[]),i(a,s,c[p],d)&&T.isArray(c[p])&&(c[p]=Zg(c[p])),!g)}if(T.isFormData(r)&&T.isFunction(r.entries)){const a={};return T.forEachEntry(r,(s,c)=>{i(Gg(s),c,a,0)}),a}return null}function e1(r,i,a){if(T.isString(r))try{return(i||JSON.parse)(r),T.trim(r)}catch(s){if(s.name!=="SyntaxError")throw s}return(a||JSON.stringify)(r)}const go={transitional:qf,adapter:["xhr","http","fetch"],transformRequest:[function(i,a){const s=a.getContentType()||"",c=s.indexOf("application/json")>-1,d=T.isObject(i);if(d&&T.isHTMLForm(i)&&(i=new FormData(i)),T.isFormData(i))return c?JSON.stringify(Bf(i)):i;if(T.isArrayBuffer(i)||T.isBuffer(i)||T.isStream(i)||T.isFile(i)||T.isBlob(i)||T.isReadableStream(i))return i;if(T.isArrayBufferView(i))return i.buffer;if(T.isURLSearchParams(i))return a.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),i.toString();let g;if(d){if(s.indexOf("application/x-www-form-urlencoded")>-1)return Yg(i,this.formSerializer).toString();if((g=T.isFileList(i))||s.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return ra(g?{"files[]":i}:i,m&&new m,this.formSerializer)}}return d||c?(a.setContentType("application/json",!1),e1(i)):i}],transformResponse:[function(i){const a=this.transitional||go.transitional,s=a&&a.forcedJSONParsing,c=this.responseType==="json";if(T.isResponse(i)||T.isReadableStream(i))return i;if(i&&T.isString(i)&&(s&&!this.responseType||c)){const p=!(a&&a.silentJSONParsing)&&c;try{return JSON.parse(i)}catch(g){if(p)throw g.name==="SyntaxError"?te.from(g,te.ERR_BAD_RESPONSE,this,null,this.response):g}}return i}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Qe.classes.FormData,Blob:Qe.classes.Blob},validateStatus:function(i){return i>=200&&i<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};T.forEach(["delete","get","head","post","put","patch"],r=>{go.headers[r]={}});const n1=T.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),t1=r=>{const i={};let a,s,c;return r&&r.split(`
`).forEach(function(p){c=p.indexOf(":"),a=p.substring(0,c).trim().toLowerCase(),s=p.substring(c+1).trim(),!(!a||i[a]&&n1[a])&&(a==="set-cookie"?i[a]?i[a].push(s):i[a]=[s]:i[a]=i[a]?i[a]+", "+s:s)}),i},Kd=Symbol("internals");function io(r){return r&&String(r).trim().toLowerCase()}function Hi(r){return r===!1||r==null?r:T.isArray(r)?r.map(Hi):String(r)}function r1(r){const i=Object.create(null),a=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=a.exec(r);)i[s[1]]=s[2];return i}const o1=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function ss(r,i,a,s,c){if(T.isFunction(s))return s.call(this,i,a);if(c&&(i=a),!!T.isString(i)){if(T.isString(s))return i.indexOf(s)!==-1;if(T.isRegExp(s))return s.test(i)}}function i1(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(i,a,s)=>a.toUpperCase()+s)}function a1(r,i){const a=T.toCamelCase(" "+i);["get","set","has"].forEach(s=>{Object.defineProperty(r,s+a,{value:function(c,d,p){return this[s].call(this,i,c,d,p)},configurable:!0})})}class rn{constructor(i){i&&this.set(i)}set(i,a,s){const c=this;function d(g,m,h){const y=io(m);if(!y)throw new Error("header name must be a non-empty string");const O=T.findKey(c,y);(!O||c[O]===void 0||h===!0||h===void 0&&c[O]!==!1)&&(c[O||m]=Hi(g))}const p=(g,m)=>T.forEach(g,(h,y)=>d(h,y,m));if(T.isPlainObject(i)||i instanceof this.constructor)p(i,a);else if(T.isString(i)&&(i=i.trim())&&!o1(i))p(t1(i),a);else if(T.isHeaders(i))for(const[g,m]of i.entries())d(m,g,s);else i!=null&&d(a,i,s);return this}get(i,a){if(i=io(i),i){const s=T.findKey(this,i);if(s){const c=this[s];if(!a)return c;if(a===!0)return r1(c);if(T.isFunction(a))return a.call(this,c,s);if(T.isRegExp(a))return a.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(i,a){if(i=io(i),i){const s=T.findKey(this,i);return!!(s&&this[s]!==void 0&&(!a||ss(this,this[s],s,a)))}return!1}delete(i,a){const s=this;let c=!1;function d(p){if(p=io(p),p){const g=T.findKey(s,p);g&&(!a||ss(s,s[g],g,a))&&(delete s[g],c=!0)}}return T.isArray(i)?i.forEach(d):d(i),c}clear(i){const a=Object.keys(this);let s=a.length,c=!1;for(;s--;){const d=a[s];(!i||ss(this,this[d],d,i,!0))&&(delete this[d],c=!0)}return c}normalize(i){const a=this,s={};return T.forEach(this,(c,d)=>{const p=T.findKey(s,d);if(p){a[p]=Hi(c),delete a[d];return}const g=i?i1(d):String(d).trim();g!==d&&delete a[d],a[g]=Hi(c),s[g]=!0}),this}concat(...i){return this.constructor.concat(this,...i)}toJSON(i){const a=Object.create(null);return T.forEach(this,(s,c)=>{s!=null&&s!==!1&&(a[c]=i&&T.isArray(s)?s.join(", "):s)}),a}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([i,a])=>i+": "+a).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(i){return i instanceof this?i:new this(i)}static concat(i,...a){const s=new this(i);return a.forEach(c=>s.set(c)),s}static accessor(i){const s=(this[Kd]=this[Kd]={accessors:{}}).accessors,c=this.prototype;function d(p){const g=io(p);s[g]||(a1(c,p),s[g]=!0)}return T.isArray(i)?i.forEach(d):d(i),this}}rn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);T.reduceDescriptors(rn.prototype,({value:r},i)=>{let a=i[0].toUpperCase()+i.slice(1);return{get:()=>r,set(s){this[a]=s}}});T.freezeMethods(rn);function us(r,i){const a=this||go,s=i||a,c=rn.from(s.headers);let d=s.data;return T.forEach(r,function(g){d=g.call(a,d,c.normalize(),i?i.status:void 0)}),c.normalize(),d}function Hf(r){return!!(r&&r.__CANCEL__)}function mr(r,i,a){te.call(this,r??"canceled",te.ERR_CANCELED,i,a),this.name="CanceledError"}T.inherits(mr,te,{__CANCEL__:!0});function $f(r,i,a){const s=a.config.validateStatus;!a.status||!s||s(a.status)?r(a):i(new te("Request failed with status code "+a.status,[te.ERR_BAD_REQUEST,te.ERR_BAD_RESPONSE][Math.floor(a.status/100)-4],a.config,a.request,a))}function l1(r){const i=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return i&&i[1]||""}function s1(r,i){r=r||10;const a=new Array(r),s=new Array(r);let c=0,d=0,p;return i=i!==void 0?i:1e3,function(m){const h=Date.now(),y=s[d];p||(p=h),a[c]=m,s[c]=h;let O=d,C=0;for(;O!==c;)C+=a[O++],O=O%r;if(c=(c+1)%r,c===d&&(d=(d+1)%r),h-p<i)return;const z=y&&h-y;return z?Math.round(C*1e3/z):void 0}}function u1(r,i){let a=0,s=1e3/i,c,d;const p=(h,y=Date.now())=>{a=y,c=null,d&&(clearTimeout(d),d=null),r.apply(null,h)};return[(...h)=>{const y=Date.now(),O=y-a;O>=s?p(h,y):(c=h,d||(d=setTimeout(()=>{d=null,p(c)},s-O)))},()=>c&&p(c)]}const Ki=(r,i,a=3)=>{let s=0;const c=s1(50,250);return u1(d=>{const p=d.loaded,g=d.lengthComputable?d.total:void 0,m=p-s,h=c(m),y=p<=g;s=p;const O={loaded:p,total:g,progress:g?p/g:void 0,bytes:m,rate:h||void 0,estimated:h&&g&&y?(g-p)/h:void 0,event:d,lengthComputable:g!=null,[i?"download":"upload"]:!0};r(O)},a)},Xd=(r,i)=>{const a=r!=null;return[s=>i[0]({lengthComputable:a,total:r,loaded:s}),i[1]]},Jd=r=>(...i)=>T.asap(()=>r(...i)),c1=Qe.hasStandardBrowserEnv?((r,i)=>a=>(a=new URL(a,Qe.origin),r.protocol===a.protocol&&r.host===a.host&&(i||r.port===a.port)))(new URL(Qe.origin),Qe.navigator&&/(msie|trident)/i.test(Qe.navigator.userAgent)):()=>!0,d1=Qe.hasStandardBrowserEnv?{write(r,i,a,s,c,d){const p=[r+"="+encodeURIComponent(i)];T.isNumber(a)&&p.push("expires="+new Date(a).toGMTString()),T.isString(s)&&p.push("path="+s),T.isString(c)&&p.push("domain="+c),d===!0&&p.push("secure"),document.cookie=p.join("; ")},read(r){const i=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove(r){this.write(r,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function f1(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function p1(r,i){return i?r.replace(/\/?\/$/,"")+"/"+i.replace(/^\/+/,""):r}function Vf(r,i){return r&&!f1(i)?p1(r,i):i}const Yd=r=>r instanceof rn?{...r}:r;function Ft(r,i){i=i||{};const a={};function s(h,y,O,C){return T.isPlainObject(h)&&T.isPlainObject(y)?T.merge.call({caseless:C},h,y):T.isPlainObject(y)?T.merge({},y):T.isArray(y)?y.slice():y}function c(h,y,O,C){if(T.isUndefined(y)){if(!T.isUndefined(h))return s(void 0,h,O,C)}else return s(h,y,O,C)}function d(h,y){if(!T.isUndefined(y))return s(void 0,y)}function p(h,y){if(T.isUndefined(y)){if(!T.isUndefined(h))return s(void 0,h)}else return s(void 0,y)}function g(h,y,O){if(O in i)return s(h,y);if(O in r)return s(void 0,h)}const m={url:d,method:d,data:d,baseURL:p,transformRequest:p,transformResponse:p,paramsSerializer:p,timeout:p,timeoutMessage:p,withCredentials:p,withXSRFToken:p,adapter:p,responseType:p,xsrfCookieName:p,xsrfHeaderName:p,onUploadProgress:p,onDownloadProgress:p,decompress:p,maxContentLength:p,maxBodyLength:p,beforeRedirect:p,transport:p,httpAgent:p,httpsAgent:p,cancelToken:p,socketPath:p,responseEncoding:p,validateStatus:g,headers:(h,y,O)=>c(Yd(h),Yd(y),O,!0)};return T.forEach(Object.keys(Object.assign({},r,i)),function(y){const O=m[y]||c,C=O(r[y],i[y],y);T.isUndefined(C)&&O!==g||(a[y]=C)}),a}const Wf=r=>{const i=Ft({},r);let{data:a,withXSRFToken:s,xsrfHeaderName:c,xsrfCookieName:d,headers:p,auth:g}=i;i.headers=p=rn.from(p),i.url=Uf(Vf(i.baseURL,i.url),r.params,r.paramsSerializer),g&&p.set("Authorization","Basic "+btoa((g.username||"")+":"+(g.password?unescape(encodeURIComponent(g.password)):"")));let m;if(T.isFormData(a)){if(Qe.hasStandardBrowserEnv||Qe.hasStandardBrowserWebWorkerEnv)p.setContentType(void 0);else if((m=p.getContentType())!==!1){const[h,...y]=m?m.split(";").map(O=>O.trim()).filter(Boolean):[];p.setContentType([h||"multipart/form-data",...y].join("; "))}}if(Qe.hasStandardBrowserEnv&&(s&&T.isFunction(s)&&(s=s(i)),s||s!==!1&&c1(i.url))){const h=c&&d&&d1.read(d);h&&p.set(c,h)}return i},h1=typeof XMLHttpRequest<"u",m1=h1&&function(r){return new Promise(function(a,s){const c=Wf(r);let d=c.data;const p=rn.from(c.headers).normalize();let{responseType:g,onUploadProgress:m,onDownloadProgress:h}=c,y,O,C,z,b;function w(){z&&z(),b&&b(),c.cancelToken&&c.cancelToken.unsubscribe(y),c.signal&&c.signal.removeEventListener("abort",y)}let S=new XMLHttpRequest;S.open(c.method.toUpperCase(),c.url,!0),S.timeout=c.timeout;function N(){if(!S)return;const U=rn.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),Z={data:!g||g==="text"||g==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:U,config:r,request:S};$f(function(oe){a(oe),w()},function(oe){s(oe),w()},Z),S=null}"onloadend"in S?S.onloadend=N:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(N)},S.onabort=function(){S&&(s(new te("Request aborted",te.ECONNABORTED,r,S)),S=null)},S.onerror=function(){s(new te("Network Error",te.ERR_NETWORK,r,S)),S=null},S.ontimeout=function(){let J=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const Z=c.transitional||qf;c.timeoutErrorMessage&&(J=c.timeoutErrorMessage),s(new te(J,Z.clarifyTimeoutError?te.ETIMEDOUT:te.ECONNABORTED,r,S)),S=null},d===void 0&&p.setContentType(null),"setRequestHeader"in S&&T.forEach(p.toJSON(),function(J,Z){S.setRequestHeader(Z,J)}),T.isUndefined(c.withCredentials)||(S.withCredentials=!!c.withCredentials),g&&g!=="json"&&(S.responseType=c.responseType),h&&([C,b]=Ki(h,!0),S.addEventListener("progress",C)),m&&S.upload&&([O,z]=Ki(m),S.upload.addEventListener("progress",O),S.upload.addEventListener("loadend",z)),(c.cancelToken||c.signal)&&(y=U=>{S&&(s(!U||U.type?new mr(null,r,S):U),S.abort(),S=null)},c.cancelToken&&c.cancelToken.subscribe(y),c.signal&&(c.signal.aborted?y():c.signal.addEventListener("abort",y)));const D=l1(c.url);if(D&&Qe.protocols.indexOf(D)===-1){s(new te("Unsupported protocol "+D+":",te.ERR_BAD_REQUEST,r));return}S.send(d||null)})},g1=(r,i)=>{const{length:a}=r=r?r.filter(Boolean):[];if(i||a){let s=new AbortController,c;const d=function(h){if(!c){c=!0,g();const y=h instanceof Error?h:this.reason;s.abort(y instanceof te?y:new mr(y instanceof Error?y.message:y))}};let p=i&&setTimeout(()=>{p=null,d(new te(`timeout ${i} of ms exceeded`,te.ETIMEDOUT))},i);const g=()=>{r&&(p&&clearTimeout(p),p=null,r.forEach(h=>{h.unsubscribe?h.unsubscribe(d):h.removeEventListener("abort",d)}),r=null)};r.forEach(h=>h.addEventListener("abort",d));const{signal:m}=s;return m.unsubscribe=()=>T.asap(g),m}},v1=function*(r,i){let a=r.byteLength;if(a<i){yield r;return}let s=0,c;for(;s<a;)c=s+i,yield r.slice(s,c),s=c},y1=async function*(r,i){for await(const a of b1(r))yield*v1(a,i)},b1=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const i=r.getReader();try{for(;;){const{done:a,value:s}=await i.read();if(a)break;yield s}}finally{await i.cancel()}},Gd=(r,i,a,s)=>{const c=y1(r,i);let d=0,p,g=m=>{p||(p=!0,s&&s(m))};return new ReadableStream({async pull(m){try{const{done:h,value:y}=await c.next();if(h){g(),m.close();return}let O=y.byteLength;if(a){let C=d+=O;a(C)}m.enqueue(new Uint8Array(y))}catch(h){throw g(h),h}},cancel(m){return g(m),c.return()}},{highWaterMark:2})},oa=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Qf=oa&&typeof ReadableStream=="function",x1=oa&&(typeof TextEncoder=="function"?(r=>i=>r.encode(i))(new TextEncoder):async r=>new Uint8Array(await new Response(r).arrayBuffer())),Kf=(r,...i)=>{try{return!!r(...i)}catch{return!1}},w1=Qf&&Kf(()=>{let r=!1;const i=new Request(Qe.origin,{body:new ReadableStream,method:"POST",get duplex(){return r=!0,"half"}}).headers.has("Content-Type");return r&&!i}),Zd=64*1024,vs=Qf&&Kf(()=>T.isReadableStream(new Response("").body)),Xi={stream:vs&&(r=>r.body)};oa&&(r=>{["text","arrayBuffer","blob","formData","stream"].forEach(i=>{!Xi[i]&&(Xi[i]=T.isFunction(r[i])?a=>a[i]():(a,s)=>{throw new te(`Response type '${i}' is not supported`,te.ERR_NOT_SUPPORT,s)})})})(new Response);const k1=async r=>{if(r==null)return 0;if(T.isBlob(r))return r.size;if(T.isSpecCompliantForm(r))return(await new Request(Qe.origin,{method:"POST",body:r}).arrayBuffer()).byteLength;if(T.isArrayBufferView(r)||T.isArrayBuffer(r))return r.byteLength;if(T.isURLSearchParams(r)&&(r=r+""),T.isString(r))return(await x1(r)).byteLength},S1=async(r,i)=>{const a=T.toFiniteNumber(r.getContentLength());return a??k1(i)},E1=oa&&(async r=>{let{url:i,method:a,data:s,signal:c,cancelToken:d,timeout:p,onDownloadProgress:g,onUploadProgress:m,responseType:h,headers:y,withCredentials:O="same-origin",fetchOptions:C}=Wf(r);h=h?(h+"").toLowerCase():"text";let z=g1([c,d&&d.toAbortSignal()],p),b;const w=z&&z.unsubscribe&&(()=>{z.unsubscribe()});let S;try{if(m&&w1&&a!=="get"&&a!=="head"&&(S=await S1(y,s))!==0){let Z=new Request(i,{method:"POST",body:s,duplex:"half"}),re;if(T.isFormData(s)&&(re=Z.headers.get("content-type"))&&y.setContentType(re),Z.body){const[oe,me]=Xd(S,Ki(Jd(m)));s=Gd(Z.body,Zd,oe,me)}}T.isString(O)||(O=O?"include":"omit");const N="credentials"in Request.prototype;b=new Request(i,{...C,signal:z,method:a.toUpperCase(),headers:y.normalize().toJSON(),body:s,duplex:"half",credentials:N?O:void 0});let D=await fetch(b);const U=vs&&(h==="stream"||h==="response");if(vs&&(g||U&&w)){const Z={};["status","statusText","headers"].forEach(le=>{Z[le]=D[le]});const re=T.toFiniteNumber(D.headers.get("content-length")),[oe,me]=g&&Xd(re,Ki(Jd(g),!0))||[];D=new Response(Gd(D.body,Zd,oe,()=>{me&&me(),w&&w()}),Z)}h=h||"text";let J=await Xi[T.findKey(Xi,h)||"text"](D,r);return!U&&w&&w(),await new Promise((Z,re)=>{$f(Z,re,{data:J,headers:rn.from(D.headers),status:D.status,statusText:D.statusText,config:r,request:b})})}catch(N){throw w&&w(),N&&N.name==="TypeError"&&/fetch/i.test(N.message)?Object.assign(new te("Network Error",te.ERR_NETWORK,r,b),{cause:N.cause||N}):te.from(N,N&&N.code,r,b)}}),ys={http:Ig,xhr:m1,fetch:E1};T.forEach(ys,(r,i)=>{if(r){try{Object.defineProperty(r,"name",{value:i})}catch{}Object.defineProperty(r,"adapterName",{value:i})}});const ef=r=>`- ${r}`,P1=r=>T.isFunction(r)||r===null||r===!1,Xf={getAdapter:r=>{r=T.isArray(r)?r:[r];const{length:i}=r;let a,s;const c={};for(let d=0;d<i;d++){a=r[d];let p;if(s=a,!P1(a)&&(s=ys[(p=String(a)).toLowerCase()],s===void 0))throw new te(`Unknown adapter '${p}'`);if(s)break;c[p||"#"+d]=s}if(!s){const d=Object.entries(c).map(([g,m])=>`adapter ${g} `+(m===!1?"is not supported by the environment":"is not available in the build"));let p=i?d.length>1?`since :
`+d.map(ef).join(`
`):" "+ef(d[0]):"as no adapter specified";throw new te("There is no suitable adapter to dispatch the request "+p,"ERR_NOT_SUPPORT")}return s},adapters:ys};function cs(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new mr(null,r)}function nf(r){return cs(r),r.headers=rn.from(r.headers),r.data=us.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),Xf.getAdapter(r.adapter||go.adapter)(r).then(function(s){return cs(r),s.data=us.call(r,r.transformResponse,s),s.headers=rn.from(s.headers),s},function(s){return Hf(s)||(cs(r),s&&s.response&&(s.response.data=us.call(r,r.transformResponse,s.response),s.response.headers=rn.from(s.response.headers))),Promise.reject(s)})}const Jf="1.7.9",ia={};["object","boolean","number","function","string","symbol"].forEach((r,i)=>{ia[r]=function(s){return typeof s===r||"a"+(i<1?"n ":" ")+r}});const tf={};ia.transitional=function(i,a,s){function c(d,p){return"[Axios v"+Jf+"] Transitional option '"+d+"'"+p+(s?". "+s:"")}return(d,p,g)=>{if(i===!1)throw new te(c(p," has been removed"+(a?" in "+a:"")),te.ERR_DEPRECATED);return a&&!tf[p]&&(tf[p]=!0,console.warn(c(p," has been deprecated since v"+a+" and will be removed in the near future"))),i?i(d,p,g):!0}};ia.spelling=function(i){return(a,s)=>(console.warn(`${s} is likely a misspelling of ${i}`),!0)};function O1(r,i,a){if(typeof r!="object")throw new te("options must be an object",te.ERR_BAD_OPTION_VALUE);const s=Object.keys(r);let c=s.length;for(;c-- >0;){const d=s[c],p=i[d];if(p){const g=r[d],m=g===void 0||p(g,d,r);if(m!==!0)throw new te("option "+d+" must be "+m,te.ERR_BAD_OPTION_VALUE);continue}if(a!==!0)throw new te("Unknown option "+d,te.ERR_BAD_OPTION)}}const $i={assertOptions:O1,validators:ia},In=$i.validators;class jt{constructor(i){this.defaults=i,this.interceptors={request:new Qd,response:new Qd}}async request(i,a){try{return await this._request(i,a)}catch(s){if(s instanceof Error){let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const d=c.stack?c.stack.replace(/^.+\n/,""):"";try{s.stack?d&&!String(s.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+d):s.stack=d}catch{}}throw s}}_request(i,a){typeof i=="string"?(a=a||{},a.url=i):a=i||{},a=Ft(this.defaults,a);const{transitional:s,paramsSerializer:c,headers:d}=a;s!==void 0&&$i.assertOptions(s,{silentJSONParsing:In.transitional(In.boolean),forcedJSONParsing:In.transitional(In.boolean),clarifyTimeoutError:In.transitional(In.boolean)},!1),c!=null&&(T.isFunction(c)?a.paramsSerializer={serialize:c}:$i.assertOptions(c,{encode:In.function,serialize:In.function},!0)),$i.assertOptions(a,{baseUrl:In.spelling("baseURL"),withXsrfToken:In.spelling("withXSRFToken")},!0),a.method=(a.method||this.defaults.method||"get").toLowerCase();let p=d&&T.merge(d.common,d[a.method]);d&&T.forEach(["delete","get","head","post","put","patch","common"],b=>{delete d[b]}),a.headers=rn.concat(p,d);const g=[];let m=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(a)===!1||(m=m&&w.synchronous,g.unshift(w.fulfilled,w.rejected))});const h=[];this.interceptors.response.forEach(function(w){h.push(w.fulfilled,w.rejected)});let y,O=0,C;if(!m){const b=[nf.bind(this),void 0];for(b.unshift.apply(b,g),b.push.apply(b,h),C=b.length,y=Promise.resolve(a);O<C;)y=y.then(b[O++],b[O++]);return y}C=g.length;let z=a;for(O=0;O<C;){const b=g[O++],w=g[O++];try{z=b(z)}catch(S){w.call(this,S);break}}try{y=nf.call(this,z)}catch(b){return Promise.reject(b)}for(O=0,C=h.length;O<C;)y=y.then(h[O++],h[O++]);return y}getUri(i){i=Ft(this.defaults,i);const a=Vf(i.baseURL,i.url);return Uf(a,i.params,i.paramsSerializer)}}T.forEach(["delete","get","head","options"],function(i){jt.prototype[i]=function(a,s){return this.request(Ft(s||{},{method:i,url:a,data:(s||{}).data}))}});T.forEach(["post","put","patch"],function(i){function a(s){return function(d,p,g){return this.request(Ft(g||{},{method:i,headers:s?{"Content-Type":"multipart/form-data"}:{},url:d,data:p}))}}jt.prototype[i]=a(),jt.prototype[i+"Form"]=a(!0)});class zs{constructor(i){if(typeof i!="function")throw new TypeError("executor must be a function.");let a;this.promise=new Promise(function(d){a=d});const s=this;this.promise.then(c=>{if(!s._listeners)return;let d=s._listeners.length;for(;d-- >0;)s._listeners[d](c);s._listeners=null}),this.promise.then=c=>{let d;const p=new Promise(g=>{s.subscribe(g),d=g}).then(c);return p.cancel=function(){s.unsubscribe(d)},p},i(function(d,p,g){s.reason||(s.reason=new mr(d,p,g),a(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]}unsubscribe(i){if(!this._listeners)return;const a=this._listeners.indexOf(i);a!==-1&&this._listeners.splice(a,1)}toAbortSignal(){const i=new AbortController,a=s=>{i.abort(s)};return this.subscribe(a),i.signal.unsubscribe=()=>this.unsubscribe(a),i.signal}static source(){let i;return{token:new zs(function(c){i=c}),cancel:i}}}function C1(r){return function(a){return r.apply(null,a)}}function _1(r){return T.isObject(r)&&r.isAxiosError===!0}const bs={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(bs).forEach(([r,i])=>{bs[i]=r});function Yf(r){const i=new jt(r),a=_f(jt.prototype.request,i);return T.extend(a,jt.prototype,i,{allOwnKeys:!0}),T.extend(a,i,null,{allOwnKeys:!0}),a.create=function(c){return Yf(Ft(r,c))},a}const Le=Yf(go);Le.Axios=jt;Le.CanceledError=mr;Le.CancelToken=zs;Le.isCancel=Hf;Le.VERSION=Jf;Le.toFormData=ra;Le.AxiosError=te;Le.Cancel=Le.CanceledError;Le.all=function(i){return Promise.all(i)};Le.spread=C1;Le.isAxiosError=_1;Le.mergeConfig=Ft;Le.AxiosHeaders=rn;Le.formToJSON=r=>Bf(T.isHTMLForm(r)?new FormData(r):r);Le.getAdapter=Xf.getAdapter;Le.HttpStatusCode=bs;Le.default=Le;class Gf{constructor(i){this.apiClient=Le.create({baseURL:i,timeout:3e4})}async get(i,a={}){try{return(await this.apiClient.get(i,{params:a})).data}catch(s){this.handleError(s)}}async post(i,a={}){try{return(await this.apiClient.post(i,a)).data}catch(s){this.handleError(s)}}handleError(i){throw i}}class xt{}no(xt,"TEST_BASE_URL","https://run.mocky.io/"),no(xt,"TEST_REGISTER","v3/e45e52dc-c1c6-4009-88d0-d531530dd386"),no(xt,"BASE_URL","https://0e6c-111-250-39-133.ngrok-free.app/"),no(xt,"REGISTER","api/register");function Me(r,i){i===void 0&&(i={});var a=i.insertAt;if(r&&typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",a==="top"&&s.firstChild?s.insertBefore(c,s.firstChild):s.appendChild(c),c.styleSheet?c.styleSheet.cssText=r:c.appendChild(document.createTextNode(r))}}Me(`.react-loading-indicator-normalize,
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
}`);var ue=function(){return ue=Object.assign||function(r){for(var i,a=1,s=arguments.length;a<s;a++)for(var c in i=arguments[a])Object.prototype.hasOwnProperty.call(i,c)&&(r[c]=i[c]);return r},ue.apply(this,arguments)};function Ji(r){return Ji=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Ji(r)}var R1=/^\s+/,T1=/\s+$/;function K(r,i){if(i=i||{},(r=r||"")instanceof K)return r;if(!(this instanceof K))return new K(r,i);var a=function(s){var c={r:0,g:0,b:0},d=1,p=null,g=null,m=null,h=!1,y=!1;typeof s=="string"&&(s=function(b){b=b.replace(R1,"").replace(T1,"").toLowerCase();var w,S=!1;if(xs[b])b=xs[b],S=!0;else if(b=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(w=Cn.rgb.exec(b))?{r:w[1],g:w[2],b:w[3]}:(w=Cn.rgba.exec(b))?{r:w[1],g:w[2],b:w[3],a:w[4]}:(w=Cn.hsl.exec(b))?{h:w[1],s:w[2],l:w[3]}:(w=Cn.hsla.exec(b))?{h:w[1],s:w[2],l:w[3],a:w[4]}:(w=Cn.hsv.exec(b))?{h:w[1],s:w[2],v:w[3]}:(w=Cn.hsva.exec(b))?{h:w[1],s:w[2],v:w[3],a:w[4]}:(w=Cn.hex8.exec(b))?{r:dn(w[1]),g:dn(w[2]),b:dn(w[3]),a:uf(w[4]),format:S?"name":"hex8"}:(w=Cn.hex6.exec(b))?{r:dn(w[1]),g:dn(w[2]),b:dn(w[3]),format:S?"name":"hex"}:(w=Cn.hex4.exec(b))?{r:dn(w[1]+""+w[1]),g:dn(w[2]+""+w[2]),b:dn(w[3]+""+w[3]),a:uf(w[4]+""+w[4]),format:S?"name":"hex8"}:(w=Cn.hex3.exec(b))?{r:dn(w[1]+""+w[1]),g:dn(w[2]+""+w[2]),b:dn(w[3]+""+w[3]),format:S?"name":"hex"}:!1}(s)),Ji(s)=="object"&&(Yn(s.r)&&Yn(s.g)&&Yn(s.b)?(O=s.r,C=s.g,z=s.b,c={r:255*Ee(O,255),g:255*Ee(C,255),b:255*Ee(z,255)},h=!0,y=String(s.r).substr(-1)==="%"?"prgb":"rgb"):Yn(s.h)&&Yn(s.s)&&Yn(s.v)?(p=lo(s.s),g=lo(s.v),c=function(b,w,S){b=6*Ee(b,360),w=Ee(w,100),S=Ee(S,100);var N=Math.floor(b),D=b-N,U=S*(1-w),J=S*(1-D*w),Z=S*(1-(1-D)*w),re=N%6,oe=[S,J,U,U,Z,S][re],me=[Z,S,S,J,U,U][re],le=[U,U,Z,S,S,J][re];return{r:255*oe,g:255*me,b:255*le}}(s.h,p,g),h=!0,y="hsv"):Yn(s.h)&&Yn(s.s)&&Yn(s.l)&&(p=lo(s.s),m=lo(s.l),c=function(b,w,S){var N,D,U;function J(oe,me,le){return le<0&&(le+=1),le>1&&(le-=1),le<1/6?oe+6*(me-oe)*le:le<.5?me:le<2/3?oe+(me-oe)*(2/3-le)*6:oe}if(b=Ee(b,360),w=Ee(w,100),S=Ee(S,100),w===0)N=D=U=S;else{var Z=S<.5?S*(1+w):S+w-S*w,re=2*S-Z;N=J(re,Z,b+1/3),D=J(re,Z,b),U=J(re,Z,b-1/3)}return{r:255*N,g:255*D,b:255*U}}(s.h,p,m),h=!0,y="hsl"),s.hasOwnProperty("a")&&(d=s.a));var O,C,z;return d=Zf(d),{ok:h,format:s.format||y,r:Math.min(255,Math.max(c.r,0)),g:Math.min(255,Math.max(c.g,0)),b:Math.min(255,Math.max(c.b,0)),a:d}}(r);this._originalInput=r,this._r=a.r,this._g=a.g,this._b=a.b,this._a=a.a,this._roundA=Math.round(100*this._a)/100,this._format=i.format||a.format,this._gradientType=i.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=a.ok}function rf(r,i,a){r=Ee(r,255),i=Ee(i,255),a=Ee(a,255);var s,c,d=Math.max(r,i,a),p=Math.min(r,i,a),g=(d+p)/2;if(d==p)s=c=0;else{var m=d-p;switch(c=g>.5?m/(2-d-p):m/(d+p),d){case r:s=(i-a)/m+(i<a?6:0);break;case i:s=(a-r)/m+2;break;case a:s=(r-i)/m+4}s/=6}return{h:s,s:c,l:g}}function of(r,i,a){r=Ee(r,255),i=Ee(i,255),a=Ee(a,255);var s,c,d=Math.max(r,i,a),p=Math.min(r,i,a),g=d,m=d-p;if(c=d===0?0:m/d,d==p)s=0;else{switch(d){case r:s=(i-a)/m+(i<a?6:0);break;case i:s=(a-r)/m+2;break;case a:s=(r-i)/m+4}s/=6}return{h:s,s:c,v:g}}function af(r,i,a,s){var c=[_n(Math.round(r).toString(16)),_n(Math.round(i).toString(16)),_n(Math.round(a).toString(16))];return s&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0):c.join("")}function lf(r,i,a,s){return[_n(ep(s)),_n(Math.round(r).toString(16)),_n(Math.round(i).toString(16)),_n(Math.round(a).toString(16))].join("")}function z1(r,i){i=i===0?0:i||10;var a=K(r).toHsl();return a.s-=i/100,a.s=aa(a.s),K(a)}function N1(r,i){i=i===0?0:i||10;var a=K(r).toHsl();return a.s+=i/100,a.s=aa(a.s),K(a)}function L1(r){return K(r).desaturate(100)}function D1(r,i){i=i===0?0:i||10;var a=K(r).toHsl();return a.l+=i/100,a.l=aa(a.l),K(a)}function A1(r,i){i=i===0?0:i||10;var a=K(r).toRgb();return a.r=Math.max(0,Math.min(255,a.r-Math.round(-i/100*255))),a.g=Math.max(0,Math.min(255,a.g-Math.round(-i/100*255))),a.b=Math.max(0,Math.min(255,a.b-Math.round(-i/100*255))),K(a)}function M1(r,i){i=i===0?0:i||10;var a=K(r).toHsl();return a.l-=i/100,a.l=aa(a.l),K(a)}function j1(r,i){var a=K(r).toHsl(),s=(a.h+i)%360;return a.h=s<0?360+s:s,K(a)}function F1(r){var i=K(r).toHsl();return i.h=(i.h+180)%360,K(i)}function sf(r,i){if(isNaN(i)||i<=0)throw new Error("Argument to polyad must be a positive number");for(var a=K(r).toHsl(),s=[K(r)],c=360/i,d=1;d<i;d++)s.push(K({h:(a.h+d*c)%360,s:a.s,l:a.l}));return s}function I1(r){var i=K(r).toHsl(),a=i.h;return[K(r),K({h:(a+72)%360,s:i.s,l:i.l}),K({h:(a+216)%360,s:i.s,l:i.l})]}function U1(r,i,a){i=i||6,a=a||30;var s=K(r).toHsl(),c=360/a,d=[K(r)];for(s.h=(s.h-(c*i>>1)+720)%360;--i;)s.h=(s.h+c)%360,d.push(K(s));return d}function q1(r,i){i=i||6;for(var a=K(r).toHsv(),s=a.h,c=a.s,d=a.v,p=[],g=1/i;i--;)p.push(K({h:s,s:c,v:d})),d=(d+g)%1;return p}K.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var r=this.toRgb();return(299*r.r+587*r.g+114*r.b)/1e3},getLuminance:function(){var r,i,a,s=this.toRgb();return r=s.r/255,i=s.g/255,a=s.b/255,.2126*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))},setAlpha:function(r){return this._a=Zf(r),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var r=of(this._r,this._g,this._b);return{h:360*r.h,s:r.s,v:r.v,a:this._a}},toHsvString:function(){var r=of(this._r,this._g,this._b),i=Math.round(360*r.h),a=Math.round(100*r.s),s=Math.round(100*r.v);return this._a==1?"hsv("+i+", "+a+"%, "+s+"%)":"hsva("+i+", "+a+"%, "+s+"%, "+this._roundA+")"},toHsl:function(){var r=rf(this._r,this._g,this._b);return{h:360*r.h,s:r.s,l:r.l,a:this._a}},toHslString:function(){var r=rf(this._r,this._g,this._b),i=Math.round(360*r.h),a=Math.round(100*r.s),s=Math.round(100*r.l);return this._a==1?"hsl("+i+", "+a+"%, "+s+"%)":"hsla("+i+", "+a+"%, "+s+"%, "+this._roundA+")"},toHex:function(r){return af(this._r,this._g,this._b,r)},toHexString:function(r){return"#"+this.toHex(r)},toHex8:function(r){return function(i,a,s,c,d){var p=[_n(Math.round(i).toString(16)),_n(Math.round(a).toString(16)),_n(Math.round(s).toString(16)),_n(ep(c))];return d&&p[0].charAt(0)==p[0].charAt(1)&&p[1].charAt(0)==p[1].charAt(1)&&p[2].charAt(0)==p[2].charAt(1)&&p[3].charAt(0)==p[3].charAt(1)?p[0].charAt(0)+p[1].charAt(0)+p[2].charAt(0)+p[3].charAt(0):p.join("")}(this._r,this._g,this._b,this._a,r)},toHex8String:function(r){return"#"+this.toHex8(r)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Ee(this._r,255))+"%",g:Math.round(100*Ee(this._g,255))+"%",b:Math.round(100*Ee(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Ee(this._r,255))+"%, "+Math.round(100*Ee(this._g,255))+"%, "+Math.round(100*Ee(this._b,255))+"%)":"rgba("+Math.round(100*Ee(this._r,255))+"%, "+Math.round(100*Ee(this._g,255))+"%, "+Math.round(100*Ee(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(B1[af(this._r,this._g,this._b,!0)]||!1)},toFilter:function(r){var i="#"+lf(this._r,this._g,this._b,this._a),a=i,s=this._gradientType?"GradientType = 1, ":"";if(r){var c=K(r);a="#"+lf(c._r,c._g,c._b,c._a)}return"progid:DXImageTransform.Microsoft.gradient("+s+"startColorstr="+i+",endColorstr="+a+")"},toString:function(r){var i=!!r;r=r||this._format;var a=!1,s=this._a<1&&this._a>=0;return i||!s||r!=="hex"&&r!=="hex6"&&r!=="hex3"&&r!=="hex4"&&r!=="hex8"&&r!=="name"?(r==="rgb"&&(a=this.toRgbString()),r==="prgb"&&(a=this.toPercentageRgbString()),r!=="hex"&&r!=="hex6"||(a=this.toHexString()),r==="hex3"&&(a=this.toHexString(!0)),r==="hex4"&&(a=this.toHex8String(!0)),r==="hex8"&&(a=this.toHex8String()),r==="name"&&(a=this.toName()),r==="hsl"&&(a=this.toHslString()),r==="hsv"&&(a=this.toHsvString()),a||this.toHexString()):r==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return K(this.toString())},_applyModification:function(r,i){var a=r.apply(null,[this].concat([].slice.call(i)));return this._r=a._r,this._g=a._g,this._b=a._b,this.setAlpha(a._a),this},lighten:function(){return this._applyModification(D1,arguments)},brighten:function(){return this._applyModification(A1,arguments)},darken:function(){return this._applyModification(M1,arguments)},desaturate:function(){return this._applyModification(z1,arguments)},saturate:function(){return this._applyModification(N1,arguments)},greyscale:function(){return this._applyModification(L1,arguments)},spin:function(){return this._applyModification(j1,arguments)},_applyCombination:function(r,i){return r.apply(null,[this].concat([].slice.call(i)))},analogous:function(){return this._applyCombination(U1,arguments)},complement:function(){return this._applyCombination(F1,arguments)},monochromatic:function(){return this._applyCombination(q1,arguments)},splitcomplement:function(){return this._applyCombination(I1,arguments)},triad:function(){return this._applyCombination(sf,[3])},tetrad:function(){return this._applyCombination(sf,[4])}},K.fromRatio=function(r,i){if(Ji(r)=="object"){var a={};for(var s in r)r.hasOwnProperty(s)&&(a[s]=s==="a"?r[s]:lo(r[s]));r=a}return K(r,i)},K.equals=function(r,i){return!(!r||!i)&&K(r).toRgbString()==K(i).toRgbString()},K.random=function(){return K.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},K.mix=function(r,i,a){a=a===0?0:a||50;var s=K(r).toRgb(),c=K(i).toRgb(),d=a/100;return K({r:(c.r-s.r)*d+s.r,g:(c.g-s.g)*d+s.g,b:(c.b-s.b)*d+s.b,a:(c.a-s.a)*d+s.a})},K.readability=function(r,i){var a=K(r),s=K(i);return(Math.max(a.getLuminance(),s.getLuminance())+.05)/(Math.min(a.getLuminance(),s.getLuminance())+.05)},K.isReadable=function(r,i,a){var s,c,d=K.readability(r,i);switch(c=!1,(s=function(p){var g,m;return g=((p=p||{level:"AA",size:"small"}).level||"AA").toUpperCase(),m=(p.size||"small").toLowerCase(),g!=="AA"&&g!=="AAA"&&(g="AA"),m!=="small"&&m!=="large"&&(m="small"),{level:g,size:m}}(a)).level+s.size){case"AAsmall":case"AAAlarge":c=d>=4.5;break;case"AAlarge":c=d>=3;break;case"AAAsmall":c=d>=7}return c},K.mostReadable=function(r,i,a){var s,c,d,p,g=null,m=0;c=(a=a||{}).includeFallbackColors,d=a.level,p=a.size;for(var h=0;h<i.length;h++)(s=K.readability(r,i[h]))>m&&(m=s,g=K(i[h]));return K.isReadable(r,g,{level:d,size:p})||!c?g:(a.includeFallbackColors=!1,K.mostReadable(r,["#fff","#000"],a))};var xs=K.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},B1=K.hexNames=function(r){var i={};for(var a in r)r.hasOwnProperty(a)&&(i[r[a]]=a);return i}(xs);function Zf(r){return r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1),r}function Ee(r,i){(function(s){return typeof s=="string"&&s.indexOf(".")!=-1&&parseFloat(s)===1})(r)&&(r="100%");var a=function(s){return typeof s=="string"&&s.indexOf("%")!=-1}(r);return r=Math.min(i,Math.max(0,parseFloat(r))),a&&(r=parseInt(r*i,10)/100),Math.abs(r-i)<1e-6?1:r%i/parseFloat(i)}function aa(r){return Math.min(1,Math.max(0,r))}function dn(r){return parseInt(r,16)}function _n(r){return r.length==1?"0"+r:""+r}function lo(r){return r<=1&&(r=100*r+"%"),r}function ep(r){return Math.round(255*parseFloat(r)).toString(16)}function uf(r){return dn(r)/255}var bt,Li,Di,Cn=(Li="[\\s|\\(]+("+(bt="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+bt+")[,|\\s]+("+bt+")\\s*\\)?",Di="[\\s|\\(]+("+bt+")[,|\\s]+("+bt+")[,|\\s]+("+bt+")[,|\\s]+("+bt+")\\s*\\)?",{CSS_UNIT:new RegExp(bt),rgb:new RegExp("rgb"+Li),rgba:new RegExp("rgba"+Di),hsl:new RegExp("hsl"+Li),hsla:new RegExp("hsla"+Di),hsv:new RegExp("hsv"+Li),hsva:new RegExp("hsva"+Di),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Yn(r){return!!Cn.CSS_UNIT.exec(r)}var vo=function(r,i){var a=(typeof r=="string"?parseInt(r):r)||0;if(a>=-5&&a<=5){var s=a,c=parseFloat(i),d=c+s*(c/5)*-1;return(d==0||d<=Number.EPSILON)&&(d=.1),{animationPeriod:d+"s"}}return{animationPeriod:i}},yo=function(r,i){var a=r||{},s="";switch(i){case"small":s="12px";break;case"medium":s="16px";break;case"large":s="20px";break;default:s=void 0}var c={};if(a.fontSize){var d=a.fontSize;c=function(p,g){var m={};for(var h in p)Object.prototype.hasOwnProperty.call(p,h)&&g.indexOf(h)<0&&(m[h]=p[h]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function"){var y=0;for(h=Object.getOwnPropertySymbols(p);y<h.length;y++)g.indexOf(h[y])<0&&Object.prototype.propertyIsEnumerable.call(p,h[y])&&(m[h[y]]=p[h[y]])}return m}(a,["fontSize"]),s=d}return{fontSize:s,styles:c}},H1={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},bo=function(r){var i=r.className,a=r.text,s=r.textColor,c=r.staticText,d=r.style;return a?ce.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(i||"").trim(),style:ue(ue(ue({},c&&H1),s&&{color:s,mixBlendMode:"unset"}),d&&d)},typeof a=="string"&&a.length?a:"loading"):null},Gn="rgb(50, 205, 50)";function xo(r,i){i===void 0&&(i=0);var a=[];return function s(c,d){return d===void 0&&(d=0),a.push.apply(a,c),a.length<d&&s(a,d),a.slice(0,d)}(r,i)}Me(`.atom-rli-bounding-box {
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
}`);K(Gn).toRgb();Array.from({length:4},function(r,i){return"--atom-phase".concat(i+1,"-rgb")});Me(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},function(r,i){return"--commet-phase".concat(i+1,"-color")});Me(`.OP-annulus-rli-bounding-box {
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
}`);var Ai=Array.from({length:4},function(r,i){return"--OP-annulus-phase".concat(i+1,"-color")}),$1=function(r){var i,a=yo(r==null?void 0:r.style,r==null?void 0:r.size),s=a.styles,c=a.fontSize,d=r==null?void 0:r.easing,p=vo(r==null?void 0:r.speedPlus,"1.5s").animationPeriod,g=function(h){var y={},O=Ai.length;if(h instanceof Array){for(var C=xo(h,O),z=0;z<C.length&&!(z>=4);z++)y[Ai[z]]=C[z];return y}try{if(typeof h!="string")throw new Error("Color String expected");for(var b=0;b<O;b++)y[Ai[b]]=h}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof h,'" instead with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),b=0;b<O;b++)y[Ai[b]]=Gn}return y}((i=r==null?void 0:r.color)!==null&&i!==void 0?i:""),m=r!=null&&r.dense?4.3:2.9;return ce.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:ue(ue(ue(ue(ue({},c&&{fontSize:c}),p&&{"--rli-animation-duration":p}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},ce.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},ce.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},ce.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:m,strokeMiterlimit:"10"})),ce.createElement(bo,{className:"OP-annulus-text",text:r==null?void 0:r.text,textColor:r==null?void 0:r.textColor})))};function ds(r){return r&&r.Math===Math&&r}Me(`.OP-dotted-rli-bounding-box {
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
}`);var fr=ds(typeof window=="object"&&window)||ds(typeof self=="object"&&self)||ds(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function np(){var r,i;return!((r=fr==null?void 0:fr.crypto)===null||r===void 0)&&r.randomUUID?fr.crypto.randomUUID():!((i=fr==null?void 0:fr.btoa)===null||i===void 0)&&i.name?fr.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var Mi=Array.from({length:4},function(r,i){return"--OP-dotted-phase".concat(i+1,"-color")}),V1=function(r){var i,a=yo(r==null?void 0:r.style,r==null?void 0:r.size),s=a.styles,c=a.fontSize,d=r==null?void 0:r.easing,p=vo(r==null?void 0:r.speedPlus,"1.2s").animationPeriod,g=function(h){var y={},O=Mi.length;if(h instanceof Array){for(var C=xo(h,O),z=0;z<C.length&&!(z>=4);z++)y[Mi[z]]=C[z];return y}try{if(typeof h!="string")throw new Error("Color String expected");for(var b=0;b<O;b++)y[Mi[b]]=h}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof h,'" with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),b=0;b<O;b++)y[Mi[b]]=Gn}return y}((i=r==null?void 0:r.color)!==null&&i!==void 0?i:""),m=r!=null&&r.dense?16:12;return ce.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:ue(ue(ue(ue(ue({},c&&{fontSize:c}),p&&{"--rli-animation-duration":p}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},ce.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:m}).map(function(h,y){var O=function(b,w,S){if(w===16){var N=360*b/w,D=w-b,U=Number.parseFloat(S)/w*D*-1;return{transform:"rotate(".concat(N,"deg)"),animationDelay:"".concat(U,"s")}}return{transform:"",animationDelay:""}}(y,m,p),C=O.animationDelay,z=O.transform;return ce.createElement("span",{key:np(),className:"rli-d-i-b dot-shape-holder",style:z?{transform:z}:void 0},ce.createElement("span",{className:"dot",style:C?{animationDelay:C}:void 0}))}),ce.createElement(bo,{className:"OP-dotted-text",text:r==null?void 0:r.text,textColor:r==null?void 0:r.textColor})))};Me(`.OP-spokes-rli-bounding-box {
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
}`);var ji=Array.from({length:4},function(r,i){return"--OP-spokes-phase".concat(i+1,"-color")}),W1=function(r){var i,a=yo(r==null?void 0:r.style,r==null?void 0:r.size),s=a.styles,c=a.fontSize,d=r==null?void 0:r.easing,p=vo(r==null?void 0:r.speedPlus,"1.2s").animationPeriod,g=function(h){var y={},O=ji.length;if(h instanceof Array){for(var C=xo(h,O),z=0;z<C.length&&!(z>=4);z++)y[ji[z]]=C[z];return y}try{if(typeof h!="string")throw new Error("Color String expected");for(var b=0;b<O;b++)y[ji[b]]=h}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof h,'" instead with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),b=0;b<O;b++)y[ji[b]]=Gn}return y}((i=r==null?void 0:r.color)!==null&&i!==void 0?i:""),m=r!=null&&r.dense?16:12;return ce.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:ue(ue(ue(ue(ue({},c&&{fontSize:c}),p&&{"--rli-animation-duration":p}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},ce.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:m},function(h,y){return ce.createElement("span",{key:np(),className:"rli-d-i-b spoke",style:Q1(y,m,p)})})),ce.createElement(bo,{text:r==null?void 0:r.text,textColor:r==null?void 0:r.textColor}))};function Q1(r,i,a){if(i===16){var s=i-r,c=Number.parseFloat(a)/i;return{transform:"rotate(".concat(360*r/i,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((s-1)*c*-1,"s")}}}Me(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);var Fi=Array.from({length:4},function(r,i){return"--OP-annulus-dual-sectors-phase".concat(i+1,"-color")}),K1=function(r){var i,a=yo(r==null?void 0:r.style,r==null?void 0:r.size),s=a.styles,c=a.fontSize,d=r==null?void 0:r.easing,p=vo(r==null?void 0:r.speedPlus,"1.2s").animationPeriod,g=function(h){var y={},O=Fi.length;if(h instanceof Array){for(var C=xo(h,O),z=0;z<C.length&&!(z>=4);z++)y[Fi[z]]=C[z];return y}try{if(typeof h!="string")throw new Error("Color String expected");for(var b=0;b<O;b++)y[Fi[b]]=h}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof h,'" with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),b=0;b<O;b++)y[Fi[b]]=Gn}return y}((i=r==null?void 0:r.color)!==null&&i!==void 0?i:""),m=r.dense?"0.45em":"";return ce.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:ue(ue(ue(ue(ue({},c&&{fontSize:c}),p&&{"--rli-animation-duration":p}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},ce.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},ce.createElement("span",{className:"rli-d-i-b annulus-sectors",style:ue({},m&&{borderWidth:m})}),ce.createElement(bo,{className:"OP-annulus-dual-sectors-text",text:r==null?void 0:r.text,textColor:r==null?void 0:r.textColor})))};Me(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);var ao=Array.from({length:4},function(r,i){return["--OP-annulus-track-phase".concat(i+1,"-color"),"--OP-annulus-sector-phase".concat(i+1,"-color")]}),Ii=function(r){return r===void 0&&(r=1),.25*r},X1=function(r){var i,a=yo(r==null?void 0:r.style,r==null?void 0:r.size),s=a.styles,c=a.fontSize,d=r==null?void 0:r.easing,p=vo(r==null?void 0:r.speedPlus,"1s").animationPeriod,g=function(h){var y={},O=ao.length;if(h instanceof Array){for(var C=xo(h,O),z=0;z<C.length&&!(z>=4);z++){var b=ao[z];try{if(!(N=K(C[z])).isValid())throw new Error("Invalid Color: ".concat(N.getOriginalInput()));var w=N.setAlpha(Ii(N.getAlpha())).toRgbString(),S=C[z];y[b[0]]=w,y[b[1]]=S}catch{S=Gn,w=(N=K(Gn)).setAlpha(Ii(N.getAlpha())).toRgbString(),y[b[0]]=w,y[b[1]]=S}}return y}try{var N=K(h);if(typeof h!="string")throw new Error("Color String expected");if(!N.isValid())throw new Error("Invalid Color: ".concat(N.getOriginalInput()));S=h,w=N.setAlpha(Ii(N.getAlpha())).toRgbString();for(var D=0;D<O;D++)y[(b=ao[D])[0]]=w,y[b[1]]=S}catch(U){for(U instanceof Error?console.warn("[".concat(U.message,']: Received "').concat(typeof h,'" with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),S=Gn,w=(N=K(Gn)).setAlpha(Ii(N.getAlpha())).toRgbString(),D=0;D<ao.length;D++)y[(b=ao[D])[0]]=w,y[b[1]]=S}return y}((i=r==null?void 0:r.color)!==null&&i!==void 0?i:""),m=r.dense?"0.45em":"";return ce.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:ue(ue(ue(ue(ue({},c&&{fontSize:c}),p&&{"--rli-animation-duration":p}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},ce.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},ce.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:ue({},m&&{borderWidth:m})}),ce.createElement(bo,{className:"OP-annulus-sector-text",text:r==null?void 0:r.text,textColor:r==null?void 0:r.textColor})))},tp=function(r){var i=Object(r).variant,a=i===void 0?"disc":i;return a==="dotted"?ce.createElement(V1,ue({},r)):a==="spokes"?ce.createElement(W1,ue({},r)):a==="disc"?ce.createElement($1,ue({},r)):a==="split-disc"?ce.createElement(K1,ue({},r)):a==="track-disc"?ce.createElement(X1,ue({},r)):null};Me(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},function(r,i){return"--four-square-phase".concat(i+1,"-color")});Me(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},function(r,i){return"--mosaic-phase".concat(i+1,"-color")});Me(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},function(r,i){return"--riple-phase".concat(i+1,"-color")});Me(`.pulsate-rli-bounding-box {
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
}`);Array.from({length:4},function(r,i){return"--TD-pulsate-phase".concat(i+1,"-color")});Me(`.brick-stack-rli-bounding-box {
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
}`);Array.from({length:4},function(r,i){return"--TD-brick-stack-phase".concat(i+1,"-color")});Me(`.bob-rli-bounding-box {
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
}`);Array.from({length:4},function(r,i){return"--TD-bob-phase".concat(i+1,"-color")});Me(`.bounce-rli-bounding-box {
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
}`);Array.from({length:4},function(r,i){return"--TD-bounce-phase".concat(i+1,"-color")});Me(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},function(r,i){return"--shape-phase".concat(i+1,"-color")});Me(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},function(r,i){return"--trophySpin-phase".concat(i+1,"-color")});Me(`.slab-rli-bounding-box {
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
}`);Array.from({length:4},function(r,i){return"--slab-phase".concat(i+1,"-color")});Me(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},function(r,i){return"--life-line-phase".concat(i+1,"-color")});const J1=new Gf(xt.TEST_BASE_URL);function Y1({formData:r,handleChange:i,handleSubmit:a,isLoading:s}){return q.jsxs("div",{className:"form-container",children:[q.jsxs("form",{onSubmit:a,children:[q.jsx("label",{className:"label-title",children:"User Information"}),q.jsxs("div",{className:"form-type",children:[q.jsx(Un,{label:"*Account",type:"text",id:"account",name:"account",value:r.account,handleChange:i,required:!0}),q.jsx(Un,{label:"*Email",type:"email",id:"mail",name:"mail",value:r.mail,handleChange:i,required:!0}),q.jsx(Un,{label:"*Promotion Code",type:"text",id:"promotion_code",name:"promotion_code",value:r.promotion_code,handleChange:i,required:!0}),q.jsx(Un,{label:"*Password",type:"password",id:"password",name:"password",value:r.password,handleChange:i,required:!0}),q.jsx(Un,{label:"*Confirm Password",type:"password",id:"confirm_password",name:"confirm_password",value:r.confirm_password,handleChange:i,required:!0}),q.jsx(Un,{label:"*phone",type:"number",id:"phone",name:"phone",value:r.phone,handleChange:i,required:!0}),q.jsx(Un,{label:"First Name",type:"text",id:"first_name",name:"first_name",value:r.first_name,handleChange:i}),q.jsx(Un,{label:"Second Name",type:"text",id:"second_name",name:"second_name",value:r.second_name,handleChange:i})]}),q.jsx("label",{className:"label-title",hidden:!0,children:"Bank Information"}),q.jsxs("div",{className:"form-type",hidden:!0,children:[q.jsx(Un,{label:"card No.",type:"number",id:"card_no",name:"card_no",value:r.card_no,handleChange:i}),q.jsx(Un,{label:"mpin",type:"number",id:"mpin",name:"mpin",value:r.mpin,handleChange:i})]}),q.jsx("button",{type:"submit",className:"submit-btn",disabled:s,children:s?"Registering...":"Register"})]}),s&&q.jsx(G1,{})]})}function Un({label:r,type:i,id:a,name:s,value:c,handleChange:d,required:p}){return q.jsxs("div",{className:"form-group",children:[q.jsx("label",{htmlFor:a,children:r}),q.jsx("input",{type:i,id:a,name:s,value:c,onChange:d,required:p})]})}function G1(){return q.jsx("div",{className:"loader-container",children:q.jsx(tp,{variant:"spokes",color:"#dcd6d6",size:"medium",text:"",textColor:""})})}function Z1(){const r=Gi(),[i,a]=L.useState(!1),[s,c]=L.useState({account:"",mail:"",promotion_code:"",password:"",confirm_password:"",phone:"",first_name:"",second_name:"",card_no:"",mpin:""});L.useState({code:"",error_msg:"",result:{regist:""}});const d=m=>Object.fromEntries(Object.entries(m).filter(([h,y])=>y.trim()!=="")),p=m=>{const{name:h,value:y}=m.target;c({...s,[h]:y})},g=async m=>{if(m.preventDefault(),s.confirm_password!=s.password){alert("The passwords do not match, please double-check.");return}a(!0);try{const h=d(s),{confirm_password:y,...O}=h,C=await J1.post(xt.TEST_REGISTER,O);C.code==200?(alert("Registration successful"),r("/home")):(console.log("code: ",C.code),alert(C.data.error_msg))}catch(h){alert("Registration failed. Please try again.",h)}finally{a(!1)}};return q.jsxs("div",{className:"registration-container",children:[q.jsx("h1",{children:"Register"}),q.jsx(Y1,{formData:s,handleChange:p,handleSubmit:g,isLoading:i})]})}function ev(r){return ho({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm-19.42,94.71a8,8,0,1,1-13,9.41L184,141.61l-7.63,10.51a8,8,0,1,1-13-9.41l7.64-10.5-12.36-4a8,8,0,1,1,5-15.21L176,117V104a8,8,0,0,1,16,0v13l12.35-4a8,8,0,0,1,5,15.21l-12.36,4Zm-72,0a8,8,0,1,1-13,9.41L112,141.61l-7.63,10.51a8,8,0,1,1-13-9.41l7.64-10.5-12.36-4a8,8,0,1,1,5-15.21L104,117V104a8,8,0,0,1,16,0v13l12.35-4a8,8,0,1,1,5,15.21l-12.36,4ZM64,88v80a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"},child:[]}]})(r)}const nv=new Gf(xt.TEST_BASE_URL);function cf({type:r,name:i,value:a,handleChange:s,required:c}){return q.jsx("div",{className:"form-login-group",children:q.jsx("input",{type:r,name:i,value:a,onChange:s,required:c})})}function tv(){return q.jsx("div",{className:"loader-container",children:q.jsx(tp,{variant:"spokes",color:"#f10a0a",size:"medium",text:"",textColor:""})})}function rv(){const r=Gi(),[i,a]=L.useState(!1),[s,c]=L.useState({account:"",password:""}),d=g=>{const{name:m,value:h}=g.target;c({...s,[m]:h})},p=async g=>{g.preventDefault(),console.log("code: ",s),a(!0);const m=await nv.post(xt.TEST_REGISTER,s);try{m.code==200?(alert("Registration successful"),r("/home")):(console.log("code: ",m.code),alert(m.error_msg))}catch{}finally{a(!1)}};return q.jsxs("div",{className:"login-container",children:[q.jsx("h1",{children:"Ninja Manager Login"}),q.jsx("form",{className:"form-login",onSubmit:p,children:q.jsxs("div",{children:[q.jsxs("div",{className:"form-login-edit",children:[q.jsx(Q0,{style:{fontSize:"32px",color:"#555"}}),q.jsx(cf,{type:"text",name:"account",value:s.account,handleChange:d,required:!0})]}),q.jsxs("div",{className:"form-login-edit",children:[q.jsx(ev,{style:{fontSize:"32px",color:"#555"}}),q.jsx(cf,{type:"password",name:"password",value:s.password,handleChange:d,required:!0})]}),q.jsx("button",{type:"submit",className:"submit-login-btn",disabled:i,children:i?"Logining...":"Login"}),i&&q.jsx(tv,{})]})})]})}function ov(){return q.jsx(C0,{children:q.jsxs(r0,{children:[q.jsx(At,{path:"/register",element:q.jsx(Z1,{})}),q.jsx(At,{path:"/login",element:q.jsx(rv,{})}),q.jsxs(At,{path:"/home",element:q.jsx(J0,{}),children:[q.jsx(At,{index:!0,element:q.jsx(Y0,{})}),q.jsx(At,{path:"about",element:q.jsx(G0,{})}),q.jsx(At,{path:"announcement",element:q.jsx(Z0,{})})]})]})})}cm.createRoot(document.getElementById("root")).render(q.jsx(L.StrictMode,{children:q.jsx(ov,{})}));

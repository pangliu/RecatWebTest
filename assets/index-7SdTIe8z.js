var bm=Object.defineProperty;var xm=(r,o,a)=>o in r?bm(r,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[o]=a;var io=(r,o,a)=>xm(r,typeof o!="symbol"?o+"":o,a);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function a(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(c){if(c.ep)return;c.ep=!0;const d=a(c);fetch(c.href,d)}})();function wm(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var is={exports:{}},ao={},as={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md;function km(){if(Md)return ue;Md=1;var r=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),h=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),b=Symbol.iterator;function k(O){return O===null||typeof O!="object"?null:(O=b&&O[b]||O["@@iterator"],typeof O=="function"?O:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,w={};function S(O,j,le){this.props=O,this.context=j,this.refs=w,this.updater=le||C}S.prototype.isReactComponent={},S.prototype.setState=function(O,j){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,j,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function T(){}T.prototype=S.prototype;function A(O,j,le){this.props=O,this.context=j,this.refs=w,this.updater=le||C}var D=A.prototype=new T;D.constructor=A,y(D,S.prototype),D.isPureReactComponent=!0;var H=Array.isArray,K=Object.prototype.hasOwnProperty,re={current:null},oe={key:!0,ref:!0,__self:!0,__source:!0};function ce(O,j,le){var se,he={},me=null,xe=null;if(j!=null)for(se in j.ref!==void 0&&(xe=j.ref),j.key!==void 0&&(me=""+j.key),j)K.call(j,se)&&!oe.hasOwnProperty(se)&&(he[se]=j[se]);var ve=arguments.length-2;if(ve===1)he.children=le;else if(1<ve){for(var Ee=Array(ve),dn=0;dn<ve;dn++)Ee[dn]=arguments[dn+2];he.children=Ee}if(O&&O.defaultProps)for(se in ve=O.defaultProps,ve)he[se]===void 0&&(he[se]=ve[se]);return{$$typeof:r,type:O,key:me,ref:xe,props:he,_owner:re.current}}function ae(O,j){return{$$typeof:r,type:O.type,key:j,ref:O.ref,props:O.props,_owner:O._owner}}function Ne(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function Te(O){var j={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(le){return j[le]})}var yn=/\/+/g;function Xe(O,j){return typeof O=="object"&&O!==null&&O.key!=null?Te(""+O.key):j.toString(36)}function Ie(O,j,le,se,he){var me=typeof O;(me==="undefined"||me==="boolean")&&(O=null);var xe=!1;if(O===null)xe=!0;else switch(me){case"string":case"number":xe=!0;break;case"object":switch(O.$$typeof){case r:case o:xe=!0}}if(xe)return xe=O,he=he(xe),O=se===""?"."+Xe(xe,0):se,H(he)?(le="",O!=null&&(le=O.replace(yn,"$&/")+"/"),Ie(he,j,le,"",function(dn){return dn})):he!=null&&(Ne(he)&&(he=ae(he,le+(!he.key||xe&&xe.key===he.key?"":(""+he.key).replace(yn,"$&/")+"/")+O)),j.push(he)),1;if(xe=0,se=se===""?".":se+":",H(O))for(var ve=0;ve<O.length;ve++){me=O[ve];var Ee=se+Xe(me,ve);xe+=Ie(me,j,le,Ee,he)}else if(Ee=k(O),typeof Ee=="function")for(O=Ee.call(O),ve=0;!(me=O.next()).done;)me=me.value,Ee=se+Xe(me,ve++),xe+=Ie(me,j,le,Ee,he);else if(me==="object")throw j=String(O),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return xe}function De(O,j,le){if(O==null)return O;var se=[],he=0;return Ie(O,se,"","",function(me){return j.call(le,me,he++)}),se}function We(O){if(O._status===-1){var j=O._result;j=j(),j.then(function(le){(O._status===0||O._status===-1)&&(O._status=1,O._result=le)},function(le){(O._status===0||O._status===-1)&&(O._status=2,O._result=le)}),O._status===-1&&(O._status=0,O._result=j)}if(O._status===1)return O._result.default;throw O._result}var be={current:null},q={transition:null},Z={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:q,ReactCurrentOwner:re};function V(){throw Error("act(...) is not supported in production builds of React.")}return ue.Children={map:De,forEach:function(O,j,le){De(O,function(){j.apply(this,arguments)},le)},count:function(O){var j=0;return De(O,function(){j++}),j},toArray:function(O){return De(O,function(j){return j})||[]},only:function(O){if(!Ne(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ue.Component=S,ue.Fragment=a,ue.Profiler=c,ue.PureComponent=A,ue.StrictMode=l,ue.Suspense=p,ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,ue.act=V,ue.cloneElement=function(O,j,le){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var se=y({},O.props),he=O.key,me=O.ref,xe=O._owner;if(j!=null){if(j.ref!==void 0&&(me=j.ref,xe=re.current),j.key!==void 0&&(he=""+j.key),O.type&&O.type.defaultProps)var ve=O.type.defaultProps;for(Ee in j)K.call(j,Ee)&&!oe.hasOwnProperty(Ee)&&(se[Ee]=j[Ee]===void 0&&ve!==void 0?ve[Ee]:j[Ee])}var Ee=arguments.length-2;if(Ee===1)se.children=le;else if(1<Ee){ve=Array(Ee);for(var dn=0;dn<Ee;dn++)ve[dn]=arguments[dn+2];se.children=ve}return{$$typeof:r,type:O.type,key:he,ref:me,props:se,_owner:xe}},ue.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:d,_context:O},O.Consumer=O},ue.createElement=ce,ue.createFactory=function(O){var j=ce.bind(null,O);return j.type=O,j},ue.createRef=function(){return{current:null}},ue.forwardRef=function(O){return{$$typeof:v,render:O}},ue.isValidElement=Ne,ue.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:We}},ue.memo=function(O,j){return{$$typeof:f,type:O,compare:j===void 0?null:j}},ue.startTransition=function(O){var j=q.transition;q.transition={};try{O()}finally{q.transition=j}},ue.unstable_act=V,ue.useCallback=function(O,j){return be.current.useCallback(O,j)},ue.useContext=function(O){return be.current.useContext(O)},ue.useDebugValue=function(){},ue.useDeferredValue=function(O){return be.current.useDeferredValue(O)},ue.useEffect=function(O,j){return be.current.useEffect(O,j)},ue.useId=function(){return be.current.useId()},ue.useImperativeHandle=function(O,j,le){return be.current.useImperativeHandle(O,j,le)},ue.useInsertionEffect=function(O,j){return be.current.useInsertionEffect(O,j)},ue.useLayoutEffect=function(O,j){return be.current.useLayoutEffect(O,j)},ue.useMemo=function(O,j){return be.current.useMemo(O,j)},ue.useReducer=function(O,j,le){return be.current.useReducer(O,j,le)},ue.useRef=function(O){return be.current.useRef(O)},ue.useState=function(O){return be.current.useState(O)},ue.useSyncExternalStore=function(O,j,le){return be.current.useSyncExternalStore(O,j,le)},ue.useTransition=function(){return be.current.useTransition()},ue.version="18.3.1",ue}var Dd;function Rs(){return Dd||(Dd=1,as.exports=km()),as.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd;function Sm(){if(jd)return ao;jd=1;var r=Rs(),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(v,p,f){var g,b={},k=null,C=null;f!==void 0&&(k=""+f),p.key!==void 0&&(k=""+p.key),p.ref!==void 0&&(C=p.ref);for(g in p)l.call(p,g)&&!d.hasOwnProperty(g)&&(b[g]=p[g]);if(v&&v.defaultProps)for(g in p=v.defaultProps,p)b[g]===void 0&&(b[g]=p[g]);return{$$typeof:o,type:v,key:k,ref:C,props:b,_owner:c.current}}return ao.Fragment=a,ao.jsx=h,ao.jsxs=h,ao}var Fd;function Em(){return Fd||(Fd=1,is.exports=Sm()),is.exports}var L=Em(),M=Rs();const J=wm(M);var Mi={},ls={exports:{}},un={},ss={exports:{}},us={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id;function Pm(){return Id||(Id=1,function(r){function o(q,Z){var V=q.length;q.push(Z);e:for(;0<V;){var O=V-1>>>1,j=q[O];if(0<c(j,Z))q[O]=Z,q[V]=j,V=O;else break e}}function a(q){return q.length===0?null:q[0]}function l(q){if(q.length===0)return null;var Z=q[0],V=q.pop();if(V!==Z){q[0]=V;e:for(var O=0,j=q.length,le=j>>>1;O<le;){var se=2*(O+1)-1,he=q[se],me=se+1,xe=q[me];if(0>c(he,V))me<j&&0>c(xe,he)?(q[O]=xe,q[me]=V,O=me):(q[O]=he,q[se]=V,O=se);else if(me<j&&0>c(xe,V))q[O]=xe,q[me]=V,O=me;else break e}}return Z}function c(q,Z){var V=q.sortIndex-Z.sortIndex;return V!==0?V:q.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;r.unstable_now=function(){return d.now()}}else{var h=Date,v=h.now();r.unstable_now=function(){return h.now()-v}}var p=[],f=[],g=1,b=null,k=3,C=!1,y=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(q){for(var Z=a(f);Z!==null;){if(Z.callback===null)l(f);else if(Z.startTime<=q)l(f),Z.sortIndex=Z.expirationTime,o(p,Z);else break;Z=a(f)}}function H(q){if(w=!1,D(q),!y)if(a(p)!==null)y=!0,We(K);else{var Z=a(f);Z!==null&&be(H,Z.startTime-q)}}function K(q,Z){y=!1,w&&(w=!1,T(ce),ce=-1),C=!0;var V=k;try{for(D(Z),b=a(p);b!==null&&(!(b.expirationTime>Z)||q&&!Te());){var O=b.callback;if(typeof O=="function"){b.callback=null,k=b.priorityLevel;var j=O(b.expirationTime<=Z);Z=r.unstable_now(),typeof j=="function"?b.callback=j:b===a(p)&&l(p),D(Z)}else l(p);b=a(p)}if(b!==null)var le=!0;else{var se=a(f);se!==null&&be(H,se.startTime-Z),le=!1}return le}finally{b=null,k=V,C=!1}}var re=!1,oe=null,ce=-1,ae=5,Ne=-1;function Te(){return!(r.unstable_now()-Ne<ae)}function yn(){if(oe!==null){var q=r.unstable_now();Ne=q;var Z=!0;try{Z=oe(!0,q)}finally{Z?Xe():(re=!1,oe=null)}}else re=!1}var Xe;if(typeof A=="function")Xe=function(){A(yn)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,De=Ie.port2;Ie.port1.onmessage=yn,Xe=function(){De.postMessage(null)}}else Xe=function(){S(yn,0)};function We(q){oe=q,re||(re=!0,Xe())}function be(q,Z){ce=S(function(){q(r.unstable_now())},Z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(q){q.callback=null},r.unstable_continueExecution=function(){y||C||(y=!0,We(K))},r.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<q?Math.floor(1e3/q):5},r.unstable_getCurrentPriorityLevel=function(){return k},r.unstable_getFirstCallbackNode=function(){return a(p)},r.unstable_next=function(q){switch(k){case 1:case 2:case 3:var Z=3;break;default:Z=k}var V=k;k=Z;try{return q()}finally{k=V}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(q,Z){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var V=k;k=q;try{return Z()}finally{k=V}},r.unstable_scheduleCallback=function(q,Z,V){var O=r.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?O+V:O):V=O,q){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=V+j,q={id:g++,callback:Z,priorityLevel:q,startTime:V,expirationTime:j,sortIndex:-1},V>O?(q.sortIndex=V,o(f,q),a(p)===null&&q===a(f)&&(w?(T(ce),ce=-1):w=!0,be(H,V-O))):(q.sortIndex=j,o(p,q),y||C||(y=!0,We(K))),q},r.unstable_shouldYield=Te,r.unstable_wrapCallback=function(q){var Z=k;return function(){var V=k;k=Z;try{return q.apply(this,arguments)}finally{k=V}}}}(us)),us}var Ud;function Cm(){return Ud||(Ud=1,ss.exports=Pm()),ss.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function Om(){if(Bd)return un;Bd=1;var r=Rs(),o=Cm();function a(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,c={};function d(e,n){h(e,n),h(e+"Capture",n)}function h(e,n){for(c[e]=n,e=0;e<n.length;e++)l.add(n[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},b={};function k(e){return p.call(b,e)?!0:p.call(g,e)?!1:f.test(e)?b[e]=!0:(g[e]=!0,!1)}function C(e,n,t,i){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function y(e,n,t,i){if(n===null||typeof n>"u"||C(e,n,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function w(e,n,t,i,s,u,m){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=u,this.removeEmptyString=m}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){S[e]=new w(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];S[n]=new w(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){S[e]=new w(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){S[e]=new w(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){S[e]=new w(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){S[e]=new w(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){S[e]=new w(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){S[e]=new w(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){S[e]=new w(e,5,!1,e.toLowerCase(),null,!1,!1)});var T=/[\-:]([a-z])/g;function A(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(T,A);S[n]=new w(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(T,A);S[n]=new w(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(T,A);S[n]=new w(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){S[e]=new w(e,1,!1,e.toLowerCase(),null,!1,!1)}),S.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){S[e]=new w(e,1,!1,e.toLowerCase(),null,!0,!0)});function D(e,n,t,i){var s=S.hasOwnProperty(n)?S[n]:null;(s!==null?s.type!==0:i||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(y(n,t,s,i)&&(t=null),i||s===null?k(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):s.mustUseProperty?e[s.propertyName]=t===null?s.type===3?!1:"":t:(n=s.attributeName,i=s.attributeNamespace,t===null?e.removeAttribute(n):(s=s.type,t=s===3||s===4&&t===!0?"":""+t,i?e.setAttributeNS(i,n,t):e.setAttribute(n,t))))}var H=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,K=Symbol.for("react.element"),re=Symbol.for("react.portal"),oe=Symbol.for("react.fragment"),ce=Symbol.for("react.strict_mode"),ae=Symbol.for("react.profiler"),Ne=Symbol.for("react.provider"),Te=Symbol.for("react.context"),yn=Symbol.for("react.forward_ref"),Xe=Symbol.for("react.suspense"),Ie=Symbol.for("react.suspense_list"),De=Symbol.for("react.memo"),We=Symbol.for("react.lazy"),be=Symbol.for("react.offscreen"),q=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=q&&e[q]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,O;function j(e){if(O===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);O=n&&n[1]||""}return`
`+O+e}var le=!1;function se(e,n){if(!e||le)return"";le=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(N){var i=N}Reflect.construct(e,[],n)}else{try{n.call()}catch(N){i=N}e.call(n.prototype)}else{try{throw Error()}catch(N){i=N}e()}}catch(N){if(N&&i&&typeof N.stack=="string"){for(var s=N.stack.split(`
`),u=i.stack.split(`
`),m=s.length-1,x=u.length-1;1<=m&&0<=x&&s[m]!==u[x];)x--;for(;1<=m&&0<=x;m--,x--)if(s[m]!==u[x]){if(m!==1||x!==1)do if(m--,x--,0>x||s[m]!==u[x]){var E=`
`+s[m].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=m&&0<=x);break}}}finally{le=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?j(e):""}function he(e){switch(e.tag){case 5:return j(e.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return e=se(e.type,!1),e;case 11:return e=se(e.type.render,!1),e;case 1:return e=se(e.type,!0),e;default:return""}}function me(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case oe:return"Fragment";case re:return"Portal";case ae:return"Profiler";case ce:return"StrictMode";case Xe:return"Suspense";case Ie:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Te:return(e.displayName||"Context")+".Consumer";case Ne:return(e._context.displayName||"Context")+".Provider";case yn:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case De:return n=e.displayName||null,n!==null?n:me(e.type)||"Memo";case We:n=e._payload,e=e._init;try{return me(e(n))}catch{}}return null}function xe(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(n);case 8:return n===ce?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ve(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ee(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function dn(e){var n=Ee(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),i=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var s=t.get,u=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(m){i=""+m,u.call(this,m)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(m){i=""+m},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Po(e){e._valueTracker||(e._valueTracker=dn(e))}function Bs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),i="";return e&&(i=Ee(e)?e.checked?"true":"false":e.value),e=i,e!==t?(n.setValue(e),!0):!1}function Co(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fa(e,n){var t=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function qs(e,n){var t=n.defaultValue==null?"":n.defaultValue,i=n.checked!=null?n.checked:n.defaultChecked;t=ve(n.value!=null?n.value:t),e._wrapperState={initialChecked:i,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Hs(e,n){n=n.checked,n!=null&&D(e,"checked",n,!1)}function pa(e,n){Hs(e,n);var t=ve(n.value),i=n.type;if(t!=null)i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ha(e,n.type,t):n.hasOwnProperty("defaultValue")&&ha(e,n.type,ve(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function $s(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var i=n.type;if(!(i!=="submit"&&i!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ha(e,n,t){(n!=="number"||Co(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var xr=Array.isArray;function $t(e,n,t,i){if(e=e.options,n){n={};for(var s=0;s<t.length;s++)n["$"+t[s]]=!0;for(t=0;t<e.length;t++)s=n.hasOwnProperty("$"+e[t].value),e[t].selected!==s&&(e[t].selected=s),s&&i&&(e[t].defaultSelected=!0)}else{for(t=""+ve(t),n=null,s=0;s<e.length;s++){if(e[s].value===t){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function ma(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(a(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(a(92));if(xr(t)){if(1<t.length)throw Error(a(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ve(t)}}function Ws(e,n){var t=ve(n.value),i=ve(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),i!=null&&(e.defaultValue=""+i)}function Qs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Ks(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ga(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Ks(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Oo,Xs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,i,s){MSApp.execUnsafeLocalFunction(function(){return e(n,t,i,s)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Oo=Oo||document.createElement("div"),Oo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Oo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function wr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sp=["Webkit","ms","Moz","O"];Object.keys(kr).forEach(function(e){Sp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),kr[n]=kr[e]})});function Ys(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||kr.hasOwnProperty(e)&&kr[e]?(""+n).trim():n+"px"}function Gs(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var i=t.indexOf("--")===0,s=Ys(t,n[t],i);t==="float"&&(t="cssFloat"),i?e.setProperty(t,s):e[t]=s}}var Ep=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function va(e,n){if(n){if(Ep[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(a(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(a(61))}if(n.style!=null&&typeof n.style!="object")throw Error(a(62))}}function ya(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ba=null;function xa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wa=null,Vt=null,Wt=null;function Js(e){if(e=$r(e)){if(typeof wa!="function")throw Error(a(280));var n=e.stateNode;n&&(n=Yo(n),wa(e.stateNode,e.type,n))}}function Zs(e){Vt?Wt?Wt.push(e):Wt=[e]:Vt=e}function eu(){if(Vt){var e=Vt,n=Wt;if(Wt=Vt=null,Js(e),n)for(e=0;e<n.length;e++)Js(n[e])}}function nu(e,n){return e(n)}function tu(){}var ka=!1;function ru(e,n,t){if(ka)return e(n,t);ka=!0;try{return nu(e,n,t)}finally{ka=!1,(Vt!==null||Wt!==null)&&(tu(),eu())}}function Sr(e,n){var t=e.stateNode;if(t===null)return null;var i=Yo(t);if(i===null)return null;t=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(a(231,n,typeof t));return t}var Sa=!1;if(v)try{var Er={};Object.defineProperty(Er,"passive",{get:function(){Sa=!0}}),window.addEventListener("test",Er,Er),window.removeEventListener("test",Er,Er)}catch{Sa=!1}function Pp(e,n,t,i,s,u,m,x,E){var N=Array.prototype.slice.call(arguments,3);try{n.apply(t,N)}catch(I){this.onError(I)}}var Pr=!1,Ro=null,_o=!1,Ea=null,Cp={onError:function(e){Pr=!0,Ro=e}};function Op(e,n,t,i,s,u,m,x,E){Pr=!1,Ro=null,Pp.apply(Cp,arguments)}function Rp(e,n,t,i,s,u,m,x,E){if(Op.apply(this,arguments),Pr){if(Pr){var N=Ro;Pr=!1,Ro=null}else throw Error(a(198));_o||(_o=!0,Ea=N)}}function Pt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ou(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function iu(e){if(Pt(e)!==e)throw Error(a(188))}function _p(e){var n=e.alternate;if(!n){if(n=Pt(e),n===null)throw Error(a(188));return n!==e?null:e}for(var t=e,i=n;;){var s=t.return;if(s===null)break;var u=s.alternate;if(u===null){if(i=s.return,i!==null){t=i;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===t)return iu(s),e;if(u===i)return iu(s),n;u=u.sibling}throw Error(a(188))}if(t.return!==i.return)t=s,i=u;else{for(var m=!1,x=s.child;x;){if(x===t){m=!0,t=s,i=u;break}if(x===i){m=!0,i=s,t=u;break}x=x.sibling}if(!m){for(x=u.child;x;){if(x===t){m=!0,t=u,i=s;break}if(x===i){m=!0,i=u,t=s;break}x=x.sibling}if(!m)throw Error(a(189))}}if(t.alternate!==i)throw Error(a(190))}if(t.tag!==3)throw Error(a(188));return t.stateNode.current===t?e:n}function au(e){return e=_p(e),e!==null?lu(e):null}function lu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=lu(e);if(n!==null)return n;e=e.sibling}return null}var su=o.unstable_scheduleCallback,uu=o.unstable_cancelCallback,Np=o.unstable_shouldYield,Tp=o.unstable_requestPaint,Ae=o.unstable_now,zp=o.unstable_getCurrentPriorityLevel,Pa=o.unstable_ImmediatePriority,cu=o.unstable_UserBlockingPriority,No=o.unstable_NormalPriority,Lp=o.unstable_LowPriority,du=o.unstable_IdlePriority,To=null,Dn=null;function Ap(e){if(Dn&&typeof Dn.onCommitFiberRoot=="function")try{Dn.onCommitFiberRoot(To,e,void 0,(e.current.flags&128)===128)}catch{}}var Pn=Math.clz32?Math.clz32:jp,Mp=Math.log,Dp=Math.LN2;function jp(e){return e>>>=0,e===0?32:31-(Mp(e)/Dp|0)|0}var zo=64,Lo=4194304;function Cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ao(e,n){var t=e.pendingLanes;if(t===0)return 0;var i=0,s=e.suspendedLanes,u=e.pingedLanes,m=t&268435455;if(m!==0){var x=m&~s;x!==0?i=Cr(x):(u&=m,u!==0&&(i=Cr(u)))}else m=t&~s,m!==0?i=Cr(m):u!==0&&(i=Cr(u));if(i===0)return 0;if(n!==0&&n!==i&&!(n&s)&&(s=i&-i,u=n&-n,s>=u||s===16&&(u&4194240)!==0))return n;if(i&4&&(i|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=i;0<n;)t=31-Pn(n),s=1<<t,i|=e[t],n&=~s;return i}function Fp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ip(e,n){for(var t=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,u=e.pendingLanes;0<u;){var m=31-Pn(u),x=1<<m,E=s[m];E===-1?(!(x&t)||x&i)&&(s[m]=Fp(x,n)):E<=n&&(e.expiredLanes|=x),u&=~x}}function Ca(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fu(){var e=zo;return zo<<=1,!(zo&4194240)&&(zo=64),e}function Oa(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Or(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Pn(n),e[n]=t}function Up(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<t;){var s=31-Pn(t),u=1<<s;n[s]=0,i[s]=-1,e[s]=-1,t&=~u}}function Ra(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var i=31-Pn(t),s=1<<i;s&n|e[i]&n&&(e[i]|=n),t&=~s}}var ye=0;function pu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hu,_a,mu,gu,vu,Na=!1,Mo=[],rt=null,ot=null,it=null,Rr=new Map,_r=new Map,at=[],Bp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yu(e,n){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":ot=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":Rr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_r.delete(n.pointerId)}}function Nr(e,n,t,i,s,u){return e===null||e.nativeEvent!==u?(e={blockedOn:n,domEventName:t,eventSystemFlags:i,nativeEvent:u,targetContainers:[s]},n!==null&&(n=$r(n),n!==null&&_a(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function qp(e,n,t,i,s){switch(n){case"focusin":return rt=Nr(rt,e,n,t,i,s),!0;case"dragenter":return ot=Nr(ot,e,n,t,i,s),!0;case"mouseover":return it=Nr(it,e,n,t,i,s),!0;case"pointerover":var u=s.pointerId;return Rr.set(u,Nr(Rr.get(u)||null,e,n,t,i,s)),!0;case"gotpointercapture":return u=s.pointerId,_r.set(u,Nr(_r.get(u)||null,e,n,t,i,s)),!0}return!1}function bu(e){var n=Ct(e.target);if(n!==null){var t=Pt(n);if(t!==null){if(n=t.tag,n===13){if(n=ou(t),n!==null){e.blockedOn=n,vu(e.priority,function(){mu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Do(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=za(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var i=new t.constructor(t.type,t);ba=i,t.target.dispatchEvent(i),ba=null}else return n=$r(t),n!==null&&_a(n),e.blockedOn=t,!1;n.shift()}return!0}function xu(e,n,t){Do(e)&&t.delete(n)}function Hp(){Na=!1,rt!==null&&Do(rt)&&(rt=null),ot!==null&&Do(ot)&&(ot=null),it!==null&&Do(it)&&(it=null),Rr.forEach(xu),_r.forEach(xu)}function Tr(e,n){e.blockedOn===n&&(e.blockedOn=null,Na||(Na=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Hp)))}function zr(e){function n(s){return Tr(s,e)}if(0<Mo.length){Tr(Mo[0],e);for(var t=1;t<Mo.length;t++){var i=Mo[t];i.blockedOn===e&&(i.blockedOn=null)}}for(rt!==null&&Tr(rt,e),ot!==null&&Tr(ot,e),it!==null&&Tr(it,e),Rr.forEach(n),_r.forEach(n),t=0;t<at.length;t++)i=at[t],i.blockedOn===e&&(i.blockedOn=null);for(;0<at.length&&(t=at[0],t.blockedOn===null);)bu(t),t.blockedOn===null&&at.shift()}var Qt=H.ReactCurrentBatchConfig,jo=!0;function $p(e,n,t,i){var s=ye,u=Qt.transition;Qt.transition=null;try{ye=1,Ta(e,n,t,i)}finally{ye=s,Qt.transition=u}}function Vp(e,n,t,i){var s=ye,u=Qt.transition;Qt.transition=null;try{ye=4,Ta(e,n,t,i)}finally{ye=s,Qt.transition=u}}function Ta(e,n,t,i){if(jo){var s=za(e,n,t,i);if(s===null)Xa(e,n,i,Fo,t),yu(e,i);else if(qp(s,e,n,t,i))i.stopPropagation();else if(yu(e,i),n&4&&-1<Bp.indexOf(e)){for(;s!==null;){var u=$r(s);if(u!==null&&hu(u),u=za(e,n,t,i),u===null&&Xa(e,n,i,Fo,t),u===s)break;s=u}s!==null&&i.stopPropagation()}else Xa(e,n,i,null,t)}}var Fo=null;function za(e,n,t,i){if(Fo=null,e=xa(i),e=Ct(e),e!==null)if(n=Pt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ou(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Fo=e,null}function wu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zp()){case Pa:return 1;case cu:return 4;case No:case Lp:return 16;case du:return 536870912;default:return 16}default:return 16}}var lt=null,La=null,Io=null;function ku(){if(Io)return Io;var e,n=La,t=n.length,i,s="value"in lt?lt.value:lt.textContent,u=s.length;for(e=0;e<t&&n[e]===s[e];e++);var m=t-e;for(i=1;i<=m&&n[t-i]===s[u-i];i++);return Io=s.slice(e,1<i?1-i:void 0)}function Uo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Bo(){return!0}function Su(){return!1}function fn(e){function n(t,i,s,u,m){this._reactName=t,this._targetInst=s,this.type=i,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(t=e[x],this[x]=t?t(u):u[x]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Bo:Su,this.isPropagationStopped=Su,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),n}var Kt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Aa=fn(Kt),Lr=V({},Kt,{view:0,detail:0}),Wp=fn(Lr),Ma,Da,Ar,qo=V({},Lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ar&&(Ar&&e.type==="mousemove"?(Ma=e.screenX-Ar.screenX,Da=e.screenY-Ar.screenY):Da=Ma=0,Ar=e),Ma)},movementY:function(e){return"movementY"in e?e.movementY:Da}}),Eu=fn(qo),Qp=V({},qo,{dataTransfer:0}),Kp=fn(Qp),Xp=V({},Lr,{relatedTarget:0}),ja=fn(Xp),Yp=V({},Kt,{animationName:0,elapsedTime:0,pseudoElement:0}),Gp=fn(Yp),Jp=V({},Kt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zp=fn(Jp),eh=V({},Kt,{data:0}),Pu=fn(eh),nh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},th={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=rh[e])?!!n[e]:!1}function Fa(){return oh}var ih=V({},Lr,{key:function(e){if(e.key){var n=nh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Uo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?th[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fa,charCode:function(e){return e.type==="keypress"?Uo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Uo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ah=fn(ih),lh=V({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cu=fn(lh),sh=V({},Lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fa}),uh=fn(sh),ch=V({},Kt,{propertyName:0,elapsedTime:0,pseudoElement:0}),dh=fn(ch),fh=V({},qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ph=fn(fh),hh=[9,13,27,32],Ia=v&&"CompositionEvent"in window,Mr=null;v&&"documentMode"in document&&(Mr=document.documentMode);var mh=v&&"TextEvent"in window&&!Mr,Ou=v&&(!Ia||Mr&&8<Mr&&11>=Mr),Ru=" ",_u=!1;function Nu(e,n){switch(e){case"keyup":return hh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xt=!1;function gh(e,n){switch(e){case"compositionend":return Tu(n);case"keypress":return n.which!==32?null:(_u=!0,Ru);case"textInput":return e=n.data,e===Ru&&_u?null:e;default:return null}}function vh(e,n){if(Xt)return e==="compositionend"||!Ia&&Nu(e,n)?(e=ku(),Io=La=lt=null,Xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ou&&n.locale!=="ko"?null:n.data;default:return null}}var yh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!yh[e.type]:n==="textarea"}function Lu(e,n,t,i){Zs(i),n=Qo(n,"onChange"),0<n.length&&(t=new Aa("onChange","change",null,t,i),e.push({event:t,listeners:n}))}var Dr=null,jr=null;function bh(e){Gu(e,0)}function Ho(e){var n=er(e);if(Bs(n))return e}function xh(e,n){if(e==="change")return n}var Au=!1;if(v){var Ua;if(v){var Ba="oninput"in document;if(!Ba){var Mu=document.createElement("div");Mu.setAttribute("oninput","return;"),Ba=typeof Mu.oninput=="function"}Ua=Ba}else Ua=!1;Au=Ua&&(!document.documentMode||9<document.documentMode)}function Du(){Dr&&(Dr.detachEvent("onpropertychange",ju),jr=Dr=null)}function ju(e){if(e.propertyName==="value"&&Ho(jr)){var n=[];Lu(n,jr,e,xa(e)),ru(bh,n)}}function wh(e,n,t){e==="focusin"?(Du(),Dr=n,jr=t,Dr.attachEvent("onpropertychange",ju)):e==="focusout"&&Du()}function kh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ho(jr)}function Sh(e,n){if(e==="click")return Ho(n)}function Eh(e,n){if(e==="input"||e==="change")return Ho(n)}function Ph(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Cn=typeof Object.is=="function"?Object.is:Ph;function Fr(e,n){if(Cn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),i=Object.keys(n);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var s=t[i];if(!p.call(n,s)||!Cn(e[s],n[s]))return!1}return!0}function Fu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Iu(e,n){var t=Fu(e);e=0;for(var i;t;){if(t.nodeType===3){if(i=e+t.textContent.length,e<=n&&i>=n)return{node:t,offset:n-e};e=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Fu(t)}}function Uu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Uu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Bu(){for(var e=window,n=Co();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Co(e.document)}return n}function qa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Ch(e){var n=Bu(),t=e.focusedElem,i=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Uu(t.ownerDocument.documentElement,t)){if(i!==null&&qa(t)){if(n=i.start,e=i.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var s=t.textContent.length,u=Math.min(i.start,s);i=i.end===void 0?u:Math.min(i.end,s),!e.extend&&u>i&&(s=i,i=u,u=s),s=Iu(t,u);var m=Iu(t,i);s&&m&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==m.node||e.focusOffset!==m.offset)&&(n=n.createRange(),n.setStart(s.node,s.offset),e.removeAllRanges(),u>i?(e.addRange(n),e.extend(m.node,m.offset)):(n.setEnd(m.node,m.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Oh=v&&"documentMode"in document&&11>=document.documentMode,Yt=null,Ha=null,Ir=null,$a=!1;function qu(e,n,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;$a||Yt==null||Yt!==Co(i)||(i=Yt,"selectionStart"in i&&qa(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ir&&Fr(Ir,i)||(Ir=i,i=Qo(Ha,"onSelect"),0<i.length&&(n=new Aa("onSelect","select",null,n,t),e.push({event:n,listeners:i}),n.target=Yt)))}function $o(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Gt={animationend:$o("Animation","AnimationEnd"),animationiteration:$o("Animation","AnimationIteration"),animationstart:$o("Animation","AnimationStart"),transitionend:$o("Transition","TransitionEnd")},Va={},Hu={};v&&(Hu=document.createElement("div").style,"AnimationEvent"in window||(delete Gt.animationend.animation,delete Gt.animationiteration.animation,delete Gt.animationstart.animation),"TransitionEvent"in window||delete Gt.transitionend.transition);function Vo(e){if(Va[e])return Va[e];if(!Gt[e])return e;var n=Gt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Hu)return Va[e]=n[t];return e}var $u=Vo("animationend"),Vu=Vo("animationiteration"),Wu=Vo("animationstart"),Qu=Vo("transitionend"),Ku=new Map,Xu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function st(e,n){Ku.set(e,n),d(n,[e])}for(var Wa=0;Wa<Xu.length;Wa++){var Qa=Xu[Wa],Rh=Qa.toLowerCase(),_h=Qa[0].toUpperCase()+Qa.slice(1);st(Rh,"on"+_h)}st($u,"onAnimationEnd"),st(Vu,"onAnimationIteration"),st(Wu,"onAnimationStart"),st("dblclick","onDoubleClick"),st("focusin","onFocus"),st("focusout","onBlur"),st(Qu,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));function Yu(e,n,t){var i=e.type||"unknown-event";e.currentTarget=t,Rp(i,n,void 0,e),e.currentTarget=null}function Gu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var i=e[t],s=i.event;i=i.listeners;e:{var u=void 0;if(n)for(var m=i.length-1;0<=m;m--){var x=i[m],E=x.instance,N=x.currentTarget;if(x=x.listener,E!==u&&s.isPropagationStopped())break e;Yu(s,x,N),u=E}else for(m=0;m<i.length;m++){if(x=i[m],E=x.instance,N=x.currentTarget,x=x.listener,E!==u&&s.isPropagationStopped())break e;Yu(s,x,N),u=E}}}if(_o)throw e=Ea,_o=!1,Ea=null,e}function ke(e,n){var t=n[nl];t===void 0&&(t=n[nl]=new Set);var i=e+"__bubble";t.has(i)||(Ju(n,e,2,!1),t.add(i))}function Ka(e,n,t){var i=0;n&&(i|=4),Ju(t,e,i,n)}var Wo="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[Wo]){e[Wo]=!0,l.forEach(function(t){t!=="selectionchange"&&(Nh.has(t)||Ka(t,!1,e),Ka(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Wo]||(n[Wo]=!0,Ka("selectionchange",!1,n))}}function Ju(e,n,t,i){switch(wu(n)){case 1:var s=$p;break;case 4:s=Vp;break;default:s=Ta}t=s.bind(null,n,t,e),s=void 0,!Sa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(n,t,{capture:!0,passive:s}):e.addEventListener(n,t,!0):s!==void 0?e.addEventListener(n,t,{passive:s}):e.addEventListener(n,t,!1)}function Xa(e,n,t,i,s){var u=i;if(!(n&1)&&!(n&2)&&i!==null)e:for(;;){if(i===null)return;var m=i.tag;if(m===3||m===4){var x=i.stateNode.containerInfo;if(x===s||x.nodeType===8&&x.parentNode===s)break;if(m===4)for(m=i.return;m!==null;){var E=m.tag;if((E===3||E===4)&&(E=m.stateNode.containerInfo,E===s||E.nodeType===8&&E.parentNode===s))return;m=m.return}for(;x!==null;){if(m=Ct(x),m===null)return;if(E=m.tag,E===5||E===6){i=u=m;continue e}x=x.parentNode}}i=i.return}ru(function(){var N=u,I=xa(t),U=[];e:{var F=Ku.get(e);if(F!==void 0){var $=Aa,Q=e;switch(e){case"keypress":if(Uo(t)===0)break e;case"keydown":case"keyup":$=ah;break;case"focusin":Q="focus",$=ja;break;case"focusout":Q="blur",$=ja;break;case"beforeblur":case"afterblur":$=ja;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=Eu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=Kp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=uh;break;case $u:case Vu:case Wu:$=Gp;break;case Qu:$=dh;break;case"scroll":$=Wp;break;case"wheel":$=ph;break;case"copy":case"cut":case"paste":$=Zp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Cu}var X=(n&4)!==0,Me=!X&&e==="scroll",R=X?F!==null?F+"Capture":null:F;X=[];for(var P=N,_;P!==null;){_=P;var B=_.stateNode;if(_.tag===5&&B!==null&&(_=B,R!==null&&(B=Sr(P,R),B!=null&&X.push(qr(P,B,_)))),Me)break;P=P.return}0<X.length&&(F=new $(F,Q,null,t,I),U.push({event:F,listeners:X}))}}if(!(n&7)){e:{if(F=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",F&&t!==ba&&(Q=t.relatedTarget||t.fromElement)&&(Ct(Q)||Q[Vn]))break e;if(($||F)&&(F=I.window===I?I:(F=I.ownerDocument)?F.defaultView||F.parentWindow:window,$?(Q=t.relatedTarget||t.toElement,$=N,Q=Q?Ct(Q):null,Q!==null&&(Me=Pt(Q),Q!==Me||Q.tag!==5&&Q.tag!==6)&&(Q=null)):($=null,Q=N),$!==Q)){if(X=Eu,B="onMouseLeave",R="onMouseEnter",P="mouse",(e==="pointerout"||e==="pointerover")&&(X=Cu,B="onPointerLeave",R="onPointerEnter",P="pointer"),Me=$==null?F:er($),_=Q==null?F:er(Q),F=new X(B,P+"leave",$,t,I),F.target=Me,F.relatedTarget=_,B=null,Ct(I)===N&&(X=new X(R,P+"enter",Q,t,I),X.target=_,X.relatedTarget=Me,B=X),Me=B,$&&Q)n:{for(X=$,R=Q,P=0,_=X;_;_=Jt(_))P++;for(_=0,B=R;B;B=Jt(B))_++;for(;0<P-_;)X=Jt(X),P--;for(;0<_-P;)R=Jt(R),_--;for(;P--;){if(X===R||R!==null&&X===R.alternate)break n;X=Jt(X),R=Jt(R)}X=null}else X=null;$!==null&&Zu(U,F,$,X,!1),Q!==null&&Me!==null&&Zu(U,Me,Q,X,!0)}}e:{if(F=N?er(N):window,$=F.nodeName&&F.nodeName.toLowerCase(),$==="select"||$==="input"&&F.type==="file")var G=xh;else if(zu(F))if(Au)G=Eh;else{G=kh;var ee=wh}else($=F.nodeName)&&$.toLowerCase()==="input"&&(F.type==="checkbox"||F.type==="radio")&&(G=Sh);if(G&&(G=G(e,N))){Lu(U,G,t,I);break e}ee&&ee(e,F,N),e==="focusout"&&(ee=F._wrapperState)&&ee.controlled&&F.type==="number"&&ha(F,"number",F.value)}switch(ee=N?er(N):window,e){case"focusin":(zu(ee)||ee.contentEditable==="true")&&(Yt=ee,Ha=N,Ir=null);break;case"focusout":Ir=Ha=Yt=null;break;case"mousedown":$a=!0;break;case"contextmenu":case"mouseup":case"dragend":$a=!1,qu(U,t,I);break;case"selectionchange":if(Oh)break;case"keydown":case"keyup":qu(U,t,I)}var ne;if(Ia)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else Xt?Nu(e,t)&&(te="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(te="onCompositionStart");te&&(Ou&&t.locale!=="ko"&&(Xt||te!=="onCompositionStart"?te==="onCompositionEnd"&&Xt&&(ne=ku()):(lt=I,La="value"in lt?lt.value:lt.textContent,Xt=!0)),ee=Qo(N,te),0<ee.length&&(te=new Pu(te,e,null,t,I),U.push({event:te,listeners:ee}),ne?te.data=ne:(ne=Tu(t),ne!==null&&(te.data=ne)))),(ne=mh?gh(e,t):vh(e,t))&&(N=Qo(N,"onBeforeInput"),0<N.length&&(I=new Pu("onBeforeInput","beforeinput",null,t,I),U.push({event:I,listeners:N}),I.data=ne))}Gu(U,n)})}function qr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Qo(e,n){for(var t=n+"Capture",i=[];e!==null;){var s=e,u=s.stateNode;s.tag===5&&u!==null&&(s=u,u=Sr(e,t),u!=null&&i.unshift(qr(e,u,s)),u=Sr(e,n),u!=null&&i.push(qr(e,u,s))),e=e.return}return i}function Jt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zu(e,n,t,i,s){for(var u=n._reactName,m=[];t!==null&&t!==i;){var x=t,E=x.alternate,N=x.stateNode;if(E!==null&&E===i)break;x.tag===5&&N!==null&&(x=N,s?(E=Sr(t,u),E!=null&&m.unshift(qr(t,E,x))):s||(E=Sr(t,u),E!=null&&m.push(qr(t,E,x)))),t=t.return}m.length!==0&&e.push({event:n,listeners:m})}var Th=/\r\n?/g,zh=/\u0000|\uFFFD/g;function ec(e){return(typeof e=="string"?e:""+e).replace(Th,`
`).replace(zh,"")}function Ko(e,n,t){if(n=ec(n),ec(e)!==n&&t)throw Error(a(425))}function Xo(){}var Ya=null,Ga=null;function Ja(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Za=typeof setTimeout=="function"?setTimeout:void 0,Lh=typeof clearTimeout=="function"?clearTimeout:void 0,nc=typeof Promise=="function"?Promise:void 0,Ah=typeof queueMicrotask=="function"?queueMicrotask:typeof nc<"u"?function(e){return nc.resolve(null).then(e).catch(Mh)}:Za;function Mh(e){setTimeout(function(){throw e})}function el(e,n){var t=n,i=0;do{var s=t.nextSibling;if(e.removeChild(t),s&&s.nodeType===8)if(t=s.data,t==="/$"){if(i===0){e.removeChild(s),zr(n);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=s}while(t);zr(n)}function ut(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function tc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Zt=Math.random().toString(36).slice(2),jn="__reactFiber$"+Zt,Hr="__reactProps$"+Zt,Vn="__reactContainer$"+Zt,nl="__reactEvents$"+Zt,Dh="__reactListeners$"+Zt,jh="__reactHandles$"+Zt;function Ct(e){var n=e[jn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Vn]||t[jn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=tc(e);e!==null;){if(t=e[jn])return t;e=tc(e)}return n}e=t,t=e.parentNode}return null}function $r(e){return e=e[jn]||e[Vn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function Yo(e){return e[Hr]||null}var tl=[],nr=-1;function ct(e){return{current:e}}function Se(e){0>nr||(e.current=tl[nr],tl[nr]=null,nr--)}function we(e,n){nr++,tl[nr]=e.current,e.current=n}var dt={},Ye=ct(dt),rn=ct(!1),Ot=dt;function tr(e,n){var t=e.type.contextTypes;if(!t)return dt;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===n)return i.__reactInternalMemoizedMaskedChildContext;var s={},u;for(u in t)s[u]=n[u];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=s),s}function on(e){return e=e.childContextTypes,e!=null}function Go(){Se(rn),Se(Ye)}function rc(e,n,t){if(Ye.current!==dt)throw Error(a(168));we(Ye,n),we(rn,t)}function oc(e,n,t){var i=e.stateNode;if(n=n.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var s in i)if(!(s in n))throw Error(a(108,xe(e)||"Unknown",s));return V({},t,i)}function Jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dt,Ot=Ye.current,we(Ye,e),we(rn,rn.current),!0}function ic(e,n,t){var i=e.stateNode;if(!i)throw Error(a(169));t?(e=oc(e,n,Ot),i.__reactInternalMemoizedMergedChildContext=e,Se(rn),Se(Ye),we(Ye,e)):Se(rn),we(rn,t)}var Wn=null,Zo=!1,rl=!1;function ac(e){Wn===null?Wn=[e]:Wn.push(e)}function Fh(e){Zo=!0,ac(e)}function ft(){if(!rl&&Wn!==null){rl=!0;var e=0,n=ye;try{var t=Wn;for(ye=1;e<t.length;e++){var i=t[e];do i=i(!0);while(i!==null)}Wn=null,Zo=!1}catch(s){throw Wn!==null&&(Wn=Wn.slice(e+1)),su(Pa,ft),s}finally{ye=n,rl=!1}}return null}var rr=[],or=0,ei=null,ni=0,bn=[],xn=0,Rt=null,Qn=1,Kn="";function _t(e,n){rr[or++]=ni,rr[or++]=ei,ei=e,ni=n}function lc(e,n,t){bn[xn++]=Qn,bn[xn++]=Kn,bn[xn++]=Rt,Rt=e;var i=Qn;e=Kn;var s=32-Pn(i)-1;i&=~(1<<s),t+=1;var u=32-Pn(n)+s;if(30<u){var m=s-s%5;u=(i&(1<<m)-1).toString(32),i>>=m,s-=m,Qn=1<<32-Pn(n)+s|t<<s|i,Kn=u+e}else Qn=1<<u|t<<s|i,Kn=e}function ol(e){e.return!==null&&(_t(e,1),lc(e,1,0))}function il(e){for(;e===ei;)ei=rr[--or],rr[or]=null,ni=rr[--or],rr[or]=null;for(;e===Rt;)Rt=bn[--xn],bn[xn]=null,Kn=bn[--xn],bn[xn]=null,Qn=bn[--xn],bn[xn]=null}var pn=null,hn=null,Pe=!1,On=null;function sc(e,n){var t=En(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function uc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,pn=e,hn=ut(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,pn=e,hn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Rt!==null?{id:Qn,overflow:Kn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=En(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,pn=e,hn=null,!0):!1;default:return!1}}function al(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ll(e){if(Pe){var n=hn;if(n){var t=n;if(!uc(e,n)){if(al(e))throw Error(a(418));n=ut(t.nextSibling);var i=pn;n&&uc(e,n)?sc(i,t):(e.flags=e.flags&-4097|2,Pe=!1,pn=e)}}else{if(al(e))throw Error(a(418));e.flags=e.flags&-4097|2,Pe=!1,pn=e}}}function cc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pn=e}function ti(e){if(e!==pn)return!1;if(!Pe)return cc(e),Pe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ja(e.type,e.memoizedProps)),n&&(n=hn)){if(al(e))throw dc(),Error(a(418));for(;n;)sc(e,n),n=ut(n.nextSibling)}if(cc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){hn=ut(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}hn=null}}else hn=pn?ut(e.stateNode.nextSibling):null;return!0}function dc(){for(var e=hn;e;)e=ut(e.nextSibling)}function ir(){hn=pn=null,Pe=!1}function sl(e){On===null?On=[e]:On.push(e)}var Ih=H.ReactCurrentBatchConfig;function Vr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(a(309));var i=t.stateNode}if(!i)throw Error(a(147,e));var s=i,u=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===u?n.ref:(n=function(m){var x=s.refs;m===null?delete x[u]:x[u]=m},n._stringRef=u,n)}if(typeof e!="string")throw Error(a(284));if(!t._owner)throw Error(a(290,e))}return e}function ri(e,n){throw e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function fc(e){var n=e._init;return n(e._payload)}function pc(e){function n(R,P){if(e){var _=R.deletions;_===null?(R.deletions=[P],R.flags|=16):_.push(P)}}function t(R,P){if(!e)return null;for(;P!==null;)n(R,P),P=P.sibling;return null}function i(R,P){for(R=new Map;P!==null;)P.key!==null?R.set(P.key,P):R.set(P.index,P),P=P.sibling;return R}function s(R,P){return R=xt(R,P),R.index=0,R.sibling=null,R}function u(R,P,_){return R.index=_,e?(_=R.alternate,_!==null?(_=_.index,_<P?(R.flags|=2,P):_):(R.flags|=2,P)):(R.flags|=1048576,P)}function m(R){return e&&R.alternate===null&&(R.flags|=2),R}function x(R,P,_,B){return P===null||P.tag!==6?(P=Zl(_,R.mode,B),P.return=R,P):(P=s(P,_),P.return=R,P)}function E(R,P,_,B){var G=_.type;return G===oe?I(R,P,_.props.children,B,_.key):P!==null&&(P.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===We&&fc(G)===P.type)?(B=s(P,_.props),B.ref=Vr(R,P,_),B.return=R,B):(B=Oi(_.type,_.key,_.props,null,R.mode,B),B.ref=Vr(R,P,_),B.return=R,B)}function N(R,P,_,B){return P===null||P.tag!==4||P.stateNode.containerInfo!==_.containerInfo||P.stateNode.implementation!==_.implementation?(P=es(_,R.mode,B),P.return=R,P):(P=s(P,_.children||[]),P.return=R,P)}function I(R,P,_,B,G){return P===null||P.tag!==7?(P=jt(_,R.mode,B,G),P.return=R,P):(P=s(P,_),P.return=R,P)}function U(R,P,_){if(typeof P=="string"&&P!==""||typeof P=="number")return P=Zl(""+P,R.mode,_),P.return=R,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case K:return _=Oi(P.type,P.key,P.props,null,R.mode,_),_.ref=Vr(R,null,P),_.return=R,_;case re:return P=es(P,R.mode,_),P.return=R,P;case We:var B=P._init;return U(R,B(P._payload),_)}if(xr(P)||Z(P))return P=jt(P,R.mode,_,null),P.return=R,P;ri(R,P)}return null}function F(R,P,_,B){var G=P!==null?P.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return G!==null?null:x(R,P,""+_,B);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case K:return _.key===G?E(R,P,_,B):null;case re:return _.key===G?N(R,P,_,B):null;case We:return G=_._init,F(R,P,G(_._payload),B)}if(xr(_)||Z(_))return G!==null?null:I(R,P,_,B,null);ri(R,_)}return null}function $(R,P,_,B,G){if(typeof B=="string"&&B!==""||typeof B=="number")return R=R.get(_)||null,x(P,R,""+B,G);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case K:return R=R.get(B.key===null?_:B.key)||null,E(P,R,B,G);case re:return R=R.get(B.key===null?_:B.key)||null,N(P,R,B,G);case We:var ee=B._init;return $(R,P,_,ee(B._payload),G)}if(xr(B)||Z(B))return R=R.get(_)||null,I(P,R,B,G,null);ri(P,B)}return null}function Q(R,P,_,B){for(var G=null,ee=null,ne=P,te=P=0,Ve=null;ne!==null&&te<_.length;te++){ne.index>te?(Ve=ne,ne=null):Ve=ne.sibling;var ge=F(R,ne,_[te],B);if(ge===null){ne===null&&(ne=Ve);break}e&&ne&&ge.alternate===null&&n(R,ne),P=u(ge,P,te),ee===null?G=ge:ee.sibling=ge,ee=ge,ne=Ve}if(te===_.length)return t(R,ne),Pe&&_t(R,te),G;if(ne===null){for(;te<_.length;te++)ne=U(R,_[te],B),ne!==null&&(P=u(ne,P,te),ee===null?G=ne:ee.sibling=ne,ee=ne);return Pe&&_t(R,te),G}for(ne=i(R,ne);te<_.length;te++)Ve=$(ne,R,te,_[te],B),Ve!==null&&(e&&Ve.alternate!==null&&ne.delete(Ve.key===null?te:Ve.key),P=u(Ve,P,te),ee===null?G=Ve:ee.sibling=Ve,ee=Ve);return e&&ne.forEach(function(wt){return n(R,wt)}),Pe&&_t(R,te),G}function X(R,P,_,B){var G=Z(_);if(typeof G!="function")throw Error(a(150));if(_=G.call(_),_==null)throw Error(a(151));for(var ee=G=null,ne=P,te=P=0,Ve=null,ge=_.next();ne!==null&&!ge.done;te++,ge=_.next()){ne.index>te?(Ve=ne,ne=null):Ve=ne.sibling;var wt=F(R,ne,ge.value,B);if(wt===null){ne===null&&(ne=Ve);break}e&&ne&&wt.alternate===null&&n(R,ne),P=u(wt,P,te),ee===null?G=wt:ee.sibling=wt,ee=wt,ne=Ve}if(ge.done)return t(R,ne),Pe&&_t(R,te),G;if(ne===null){for(;!ge.done;te++,ge=_.next())ge=U(R,ge.value,B),ge!==null&&(P=u(ge,P,te),ee===null?G=ge:ee.sibling=ge,ee=ge);return Pe&&_t(R,te),G}for(ne=i(R,ne);!ge.done;te++,ge=_.next())ge=$(ne,R,te,ge.value,B),ge!==null&&(e&&ge.alternate!==null&&ne.delete(ge.key===null?te:ge.key),P=u(ge,P,te),ee===null?G=ge:ee.sibling=ge,ee=ge);return e&&ne.forEach(function(ym){return n(R,ym)}),Pe&&_t(R,te),G}function Me(R,P,_,B){if(typeof _=="object"&&_!==null&&_.type===oe&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case K:e:{for(var G=_.key,ee=P;ee!==null;){if(ee.key===G){if(G=_.type,G===oe){if(ee.tag===7){t(R,ee.sibling),P=s(ee,_.props.children),P.return=R,R=P;break e}}else if(ee.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===We&&fc(G)===ee.type){t(R,ee.sibling),P=s(ee,_.props),P.ref=Vr(R,ee,_),P.return=R,R=P;break e}t(R,ee);break}else n(R,ee);ee=ee.sibling}_.type===oe?(P=jt(_.props.children,R.mode,B,_.key),P.return=R,R=P):(B=Oi(_.type,_.key,_.props,null,R.mode,B),B.ref=Vr(R,P,_),B.return=R,R=B)}return m(R);case re:e:{for(ee=_.key;P!==null;){if(P.key===ee)if(P.tag===4&&P.stateNode.containerInfo===_.containerInfo&&P.stateNode.implementation===_.implementation){t(R,P.sibling),P=s(P,_.children||[]),P.return=R,R=P;break e}else{t(R,P);break}else n(R,P);P=P.sibling}P=es(_,R.mode,B),P.return=R,R=P}return m(R);case We:return ee=_._init,Me(R,P,ee(_._payload),B)}if(xr(_))return Q(R,P,_,B);if(Z(_))return X(R,P,_,B);ri(R,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,P!==null&&P.tag===6?(t(R,P.sibling),P=s(P,_),P.return=R,R=P):(t(R,P),P=Zl(_,R.mode,B),P.return=R,R=P),m(R)):t(R,P)}return Me}var ar=pc(!0),hc=pc(!1),oi=ct(null),ii=null,lr=null,ul=null;function cl(){ul=lr=ii=null}function dl(e){var n=oi.current;Se(oi),e._currentValue=n}function fl(e,n,t){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===t)break;e=e.return}}function sr(e,n){ii=e,ul=lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(an=!0),e.firstContext=null)}function wn(e){var n=e._currentValue;if(ul!==e)if(e={context:e,memoizedValue:n,next:null},lr===null){if(ii===null)throw Error(a(308));lr=e,ii.dependencies={lanes:0,firstContext:e}}else lr=lr.next=e;return n}var Nt=null;function pl(e){Nt===null?Nt=[e]:Nt.push(e)}function mc(e,n,t,i){var s=n.interleaved;return s===null?(t.next=t,pl(n)):(t.next=s.next,s.next=t),n.interleaved=t,Xn(e,i)}function Xn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var pt=!1;function hl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function ht(e,n,t){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,pe&2){var s=i.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),i.pending=n,Xn(e,t)}return s=i.interleaved,s===null?(n.next=n,pl(i)):(n.next=s.next,s.next=n),i.interleaved=n,Xn(e,t)}function ai(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,Ra(e,t)}}function vc(e,n){var t=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var s=null,u=null;if(t=t.firstBaseUpdate,t!==null){do{var m={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};u===null?s=u=m:u=u.next=m,t=t.next}while(t!==null);u===null?s=u=n:u=u.next=n}else s=u=n;t={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:i.shared,effects:i.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function li(e,n,t,i){var s=e.updateQueue;pt=!1;var u=s.firstBaseUpdate,m=s.lastBaseUpdate,x=s.shared.pending;if(x!==null){s.shared.pending=null;var E=x,N=E.next;E.next=null,m===null?u=N:m.next=N,m=E;var I=e.alternate;I!==null&&(I=I.updateQueue,x=I.lastBaseUpdate,x!==m&&(x===null?I.firstBaseUpdate=N:x.next=N,I.lastBaseUpdate=E))}if(u!==null){var U=s.baseState;m=0,I=N=E=null,x=u;do{var F=x.lane,$=x.eventTime;if((i&F)===F){I!==null&&(I=I.next={eventTime:$,lane:0,tag:x.tag,payload:x.payload,callback:x.callback,next:null});e:{var Q=e,X=x;switch(F=n,$=t,X.tag){case 1:if(Q=X.payload,typeof Q=="function"){U=Q.call($,U,F);break e}U=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=X.payload,F=typeof Q=="function"?Q.call($,U,F):Q,F==null)break e;U=V({},U,F);break e;case 2:pt=!0}}x.callback!==null&&x.lane!==0&&(e.flags|=64,F=s.effects,F===null?s.effects=[x]:F.push(x))}else $={eventTime:$,lane:F,tag:x.tag,payload:x.payload,callback:x.callback,next:null},I===null?(N=I=$,E=U):I=I.next=$,m|=F;if(x=x.next,x===null){if(x=s.shared.pending,x===null)break;F=x,x=F.next,F.next=null,s.lastBaseUpdate=F,s.shared.pending=null}}while(!0);if(I===null&&(E=U),s.baseState=E,s.firstBaseUpdate=N,s.lastBaseUpdate=I,n=s.shared.interleaved,n!==null){s=n;do m|=s.lane,s=s.next;while(s!==n)}else u===null&&(s.shared.lanes=0);Lt|=m,e.lanes=m,e.memoizedState=U}}function yc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var i=e[n],s=i.callback;if(s!==null){if(i.callback=null,i=t,typeof s!="function")throw Error(a(191,s));s.call(i)}}}var Wr={},Fn=ct(Wr),Qr=ct(Wr),Kr=ct(Wr);function Tt(e){if(e===Wr)throw Error(a(174));return e}function ml(e,n){switch(we(Kr,n),we(Qr,e),we(Fn,Wr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ga(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ga(n,e)}Se(Fn),we(Fn,n)}function ur(){Se(Fn),Se(Qr),Se(Kr)}function bc(e){Tt(Kr.current);var n=Tt(Fn.current),t=ga(n,e.type);n!==t&&(we(Qr,e),we(Fn,t))}function gl(e){Qr.current===e&&(Se(Fn),Se(Qr))}var Oe=ct(0);function si(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var vl=[];function yl(){for(var e=0;e<vl.length;e++)vl[e]._workInProgressVersionPrimary=null;vl.length=0}var ui=H.ReactCurrentDispatcher,bl=H.ReactCurrentBatchConfig,zt=0,Re=null,Ue=null,He=null,ci=!1,Xr=!1,Yr=0,Uh=0;function Ge(){throw Error(a(321))}function xl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Cn(e[t],n[t]))return!1;return!0}function wl(e,n,t,i,s,u){if(zt=u,Re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ui.current=e===null||e.memoizedState===null?$h:Vh,e=t(i,s),Xr){u=0;do{if(Xr=!1,Yr=0,25<=u)throw Error(a(301));u+=1,He=Ue=null,n.updateQueue=null,ui.current=Wh,e=t(i,s)}while(Xr)}if(ui.current=pi,n=Ue!==null&&Ue.next!==null,zt=0,He=Ue=Re=null,ci=!1,n)throw Error(a(300));return e}function kl(){var e=Yr!==0;return Yr=0,e}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Re.memoizedState=He=e:He=He.next=e,He}function kn(){if(Ue===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var n=He===null?Re.memoizedState:He.next;if(n!==null)He=n,Ue=e;else{if(e===null)throw Error(a(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},He===null?Re.memoizedState=He=e:He=He.next=e}return He}function Gr(e,n){return typeof n=="function"?n(e):n}function Sl(e){var n=kn(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var i=Ue,s=i.baseQueue,u=t.pending;if(u!==null){if(s!==null){var m=s.next;s.next=u.next,u.next=m}i.baseQueue=s=u,t.pending=null}if(s!==null){u=s.next,i=i.baseState;var x=m=null,E=null,N=u;do{var I=N.lane;if((zt&I)===I)E!==null&&(E=E.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),i=N.hasEagerState?N.eagerState:e(i,N.action);else{var U={lane:I,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};E===null?(x=E=U,m=i):E=E.next=U,Re.lanes|=I,Lt|=I}N=N.next}while(N!==null&&N!==u);E===null?m=i:E.next=x,Cn(i,n.memoizedState)||(an=!0),n.memoizedState=i,n.baseState=m,n.baseQueue=E,t.lastRenderedState=i}if(e=t.interleaved,e!==null){s=e;do u=s.lane,Re.lanes|=u,Lt|=u,s=s.next;while(s!==e)}else s===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function El(e){var n=kn(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var i=t.dispatch,s=t.pending,u=n.memoizedState;if(s!==null){t.pending=null;var m=s=s.next;do u=e(u,m.action),m=m.next;while(m!==s);Cn(u,n.memoizedState)||(an=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),t.lastRenderedState=u}return[u,i]}function xc(){}function wc(e,n){var t=Re,i=kn(),s=n(),u=!Cn(i.memoizedState,s);if(u&&(i.memoizedState=s,an=!0),i=i.queue,Pl(Ec.bind(null,t,i,e),[e]),i.getSnapshot!==n||u||He!==null&&He.memoizedState.tag&1){if(t.flags|=2048,Jr(9,Sc.bind(null,t,i,s,n),void 0,null),$e===null)throw Error(a(349));zt&30||kc(t,n,s)}return s}function kc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Re.updateQueue,n===null?(n={lastEffect:null,stores:null},Re.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Sc(e,n,t,i){n.value=t,n.getSnapshot=i,Pc(n)&&Cc(e)}function Ec(e,n,t){return t(function(){Pc(n)&&Cc(e)})}function Pc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Cn(e,t)}catch{return!0}}function Cc(e){var n=Xn(e,1);n!==null&&Tn(n,e,1,-1)}function Oc(e){var n=In();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gr,lastRenderedState:e},n.queue=e,e=e.dispatch=Hh.bind(null,Re,e),[n.memoizedState,e]}function Jr(e,n,t,i){return e={tag:e,create:n,destroy:t,deps:i,next:null},n=Re.updateQueue,n===null?(n={lastEffect:null,stores:null},Re.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(i=t.next,t.next=e,e.next=i,n.lastEffect=e)),e}function Rc(){return kn().memoizedState}function di(e,n,t,i){var s=In();Re.flags|=e,s.memoizedState=Jr(1|n,t,void 0,i===void 0?null:i)}function fi(e,n,t,i){var s=kn();i=i===void 0?null:i;var u=void 0;if(Ue!==null){var m=Ue.memoizedState;if(u=m.destroy,i!==null&&xl(i,m.deps)){s.memoizedState=Jr(n,t,u,i);return}}Re.flags|=e,s.memoizedState=Jr(1|n,t,u,i)}function _c(e,n){return di(8390656,8,e,n)}function Pl(e,n){return fi(2048,8,e,n)}function Nc(e,n){return fi(4,2,e,n)}function Tc(e,n){return fi(4,4,e,n)}function zc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Lc(e,n,t){return t=t!=null?t.concat([e]):null,fi(4,4,zc.bind(null,n,e),t)}function Cl(){}function Ac(e,n){var t=kn();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&xl(n,i[1])?i[0]:(t.memoizedState=[e,n],e)}function Mc(e,n){var t=kn();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&xl(n,i[1])?i[0]:(e=e(),t.memoizedState=[e,n],e)}function Dc(e,n,t){return zt&21?(Cn(t,n)||(t=fu(),Re.lanes|=t,Lt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,an=!0),e.memoizedState=t)}function Bh(e,n){var t=ye;ye=t!==0&&4>t?t:4,e(!0);var i=bl.transition;bl.transition={};try{e(!1),n()}finally{ye=t,bl.transition=i}}function jc(){return kn().memoizedState}function qh(e,n,t){var i=yt(e);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Fc(e))Ic(n,t);else if(t=mc(e,n,t,i),t!==null){var s=tn();Tn(t,e,i,s),Uc(t,n,i)}}function Hh(e,n,t){var i=yt(e),s={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Fc(e))Ic(n,s);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var m=n.lastRenderedState,x=u(m,t);if(s.hasEagerState=!0,s.eagerState=x,Cn(x,m)){var E=n.interleaved;E===null?(s.next=s,pl(n)):(s.next=E.next,E.next=s),n.interleaved=s;return}}catch{}finally{}t=mc(e,n,s,i),t!==null&&(s=tn(),Tn(t,e,i,s),Uc(t,n,i))}}function Fc(e){var n=e.alternate;return e===Re||n!==null&&n===Re}function Ic(e,n){Xr=ci=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Uc(e,n,t){if(t&4194240){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,Ra(e,t)}}var pi={readContext:wn,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},$h={readContext:wn,useCallback:function(e,n){return In().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:_c,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,di(4194308,4,zc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return di(4194308,4,e,n)},useInsertionEffect:function(e,n){return di(4,2,e,n)},useMemo:function(e,n){var t=In();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var i=In();return n=t!==void 0?t(n):n,i.memoizedState=i.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=qh.bind(null,Re,e),[i.memoizedState,e]},useRef:function(e){var n=In();return e={current:e},n.memoizedState=e},useState:Oc,useDebugValue:Cl,useDeferredValue:function(e){return In().memoizedState=e},useTransition:function(){var e=Oc(!1),n=e[0];return e=Bh.bind(null,e[1]),In().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var i=Re,s=In();if(Pe){if(t===void 0)throw Error(a(407));t=t()}else{if(t=n(),$e===null)throw Error(a(349));zt&30||kc(i,n,t)}s.memoizedState=t;var u={value:t,getSnapshot:n};return s.queue=u,_c(Ec.bind(null,i,u,e),[e]),i.flags|=2048,Jr(9,Sc.bind(null,i,u,t,n),void 0,null),t},useId:function(){var e=In(),n=$e.identifierPrefix;if(Pe){var t=Kn,i=Qn;t=(i&~(1<<32-Pn(i)-1)).toString(32)+t,n=":"+n+"R"+t,t=Yr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Uh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Vh={readContext:wn,useCallback:Ac,useContext:wn,useEffect:Pl,useImperativeHandle:Lc,useInsertionEffect:Nc,useLayoutEffect:Tc,useMemo:Mc,useReducer:Sl,useRef:Rc,useState:function(){return Sl(Gr)},useDebugValue:Cl,useDeferredValue:function(e){var n=kn();return Dc(n,Ue.memoizedState,e)},useTransition:function(){var e=Sl(Gr)[0],n=kn().memoizedState;return[e,n]},useMutableSource:xc,useSyncExternalStore:wc,useId:jc,unstable_isNewReconciler:!1},Wh={readContext:wn,useCallback:Ac,useContext:wn,useEffect:Pl,useImperativeHandle:Lc,useInsertionEffect:Nc,useLayoutEffect:Tc,useMemo:Mc,useReducer:El,useRef:Rc,useState:function(){return El(Gr)},useDebugValue:Cl,useDeferredValue:function(e){var n=kn();return Ue===null?n.memoizedState=e:Dc(n,Ue.memoizedState,e)},useTransition:function(){var e=El(Gr)[0],n=kn().memoizedState;return[e,n]},useMutableSource:xc,useSyncExternalStore:wc,useId:jc,unstable_isNewReconciler:!1};function Rn(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ol(e,n,t,i){n=e.memoizedState,t=t(i,n),t=t==null?n:V({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var hi={isMounted:function(e){return(e=e._reactInternals)?Pt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var i=tn(),s=yt(e),u=Yn(i,s);u.payload=n,t!=null&&(u.callback=t),n=ht(e,u,s),n!==null&&(Tn(n,e,s,i),ai(n,e,s))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var i=tn(),s=yt(e),u=Yn(i,s);u.tag=1,u.payload=n,t!=null&&(u.callback=t),n=ht(e,u,s),n!==null&&(Tn(n,e,s,i),ai(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=tn(),i=yt(e),s=Yn(t,i);s.tag=2,n!=null&&(s.callback=n),n=ht(e,s,i),n!==null&&(Tn(n,e,i,t),ai(n,e,i))}};function Bc(e,n,t,i,s,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,m):n.prototype&&n.prototype.isPureReactComponent?!Fr(t,i)||!Fr(s,u):!0}function qc(e,n,t){var i=!1,s=dt,u=n.contextType;return typeof u=="object"&&u!==null?u=wn(u):(s=on(n)?Ot:Ye.current,i=n.contextTypes,u=(i=i!=null)?tr(e,s):dt),n=new n(t,u),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=hi,e.stateNode=n,n._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=u),n}function Hc(e,n,t,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,i),n.state!==e&&hi.enqueueReplaceState(n,n.state,null)}function Rl(e,n,t,i){var s=e.stateNode;s.props=t,s.state=e.memoizedState,s.refs={},hl(e);var u=n.contextType;typeof u=="object"&&u!==null?s.context=wn(u):(u=on(n)?Ot:Ye.current,s.context=tr(e,u)),s.state=e.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(Ol(e,n,u,t),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(n=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),n!==s.state&&hi.enqueueReplaceState(s,s.state,null),li(e,t,s,i),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function cr(e,n){try{var t="",i=n;do t+=he(i),i=i.return;while(i);var s=t}catch(u){s=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:n,stack:s,digest:null}}function _l(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Nl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Qh=typeof WeakMap=="function"?WeakMap:Map;function $c(e,n,t){t=Yn(-1,t),t.tag=3,t.payload={element:null};var i=n.value;return t.callback=function(){wi||(wi=!0,Vl=i),Nl(e,n)},t}function Vc(e,n,t){t=Yn(-1,t),t.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var s=n.value;t.payload=function(){return i(s)},t.callback=function(){Nl(e,n)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Nl(e,n),typeof i!="function"&&(gt===null?gt=new Set([this]):gt.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})}),t}function Wc(e,n,t){var i=e.pingCache;if(i===null){i=e.pingCache=new Qh;var s=new Set;i.set(n,s)}else s=i.get(n),s===void 0&&(s=new Set,i.set(n,s));s.has(t)||(s.add(t),e=lm.bind(null,e,n,t),n.then(e,e))}function Qc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Kc(e,n,t,i,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Yn(-1,1),n.tag=2,ht(t,n,1))),t.lanes|=1),e)}var Kh=H.ReactCurrentOwner,an=!1;function nn(e,n,t,i){n.child=e===null?hc(n,null,t,i):ar(n,e.child,t,i)}function Xc(e,n,t,i,s){t=t.render;var u=n.ref;return sr(n,s),i=wl(e,n,t,i,u,s),t=kl(),e!==null&&!an?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,Gn(e,n,s)):(Pe&&t&&ol(n),n.flags|=1,nn(e,n,i,s),n.child)}function Yc(e,n,t,i,s){if(e===null){var u=t.type;return typeof u=="function"&&!Jl(u)&&u.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=u,Gc(e,n,u,i,s)):(e=Oi(t.type,null,i,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(u=e.child,!(e.lanes&s)){var m=u.memoizedProps;if(t=t.compare,t=t!==null?t:Fr,t(m,i)&&e.ref===n.ref)return Gn(e,n,s)}return n.flags|=1,e=xt(u,i),e.ref=n.ref,e.return=n,n.child=e}function Gc(e,n,t,i,s){if(e!==null){var u=e.memoizedProps;if(Fr(u,i)&&e.ref===n.ref)if(an=!1,n.pendingProps=i=u,(e.lanes&s)!==0)e.flags&131072&&(an=!0);else return n.lanes=e.lanes,Gn(e,n,s)}return Tl(e,n,t,i,s)}function Jc(e,n,t){var i=n.pendingProps,s=i.children,u=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(fr,mn),mn|=t;else{if(!(t&1073741824))return e=u!==null?u.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,we(fr,mn),mn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=u!==null?u.baseLanes:t,we(fr,mn),mn|=i}else u!==null?(i=u.baseLanes|t,n.memoizedState=null):i=t,we(fr,mn),mn|=i;return nn(e,n,s,t),n.child}function Zc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Tl(e,n,t,i,s){var u=on(t)?Ot:Ye.current;return u=tr(n,u),sr(n,s),t=wl(e,n,t,i,u,s),i=kl(),e!==null&&!an?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,Gn(e,n,s)):(Pe&&i&&ol(n),n.flags|=1,nn(e,n,t,s),n.child)}function ed(e,n,t,i,s){if(on(t)){var u=!0;Jo(n)}else u=!1;if(sr(n,s),n.stateNode===null)gi(e,n),qc(n,t,i),Rl(n,t,i,s),i=!0;else if(e===null){var m=n.stateNode,x=n.memoizedProps;m.props=x;var E=m.context,N=t.contextType;typeof N=="object"&&N!==null?N=wn(N):(N=on(t)?Ot:Ye.current,N=tr(n,N));var I=t.getDerivedStateFromProps,U=typeof I=="function"||typeof m.getSnapshotBeforeUpdate=="function";U||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(x!==i||E!==N)&&Hc(n,m,i,N),pt=!1;var F=n.memoizedState;m.state=F,li(n,i,m,s),E=n.memoizedState,x!==i||F!==E||rn.current||pt?(typeof I=="function"&&(Ol(n,t,I,i),E=n.memoizedState),(x=pt||Bc(n,t,x,i,F,E,N))?(U||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(n.flags|=4194308)):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=E),m.props=i,m.state=E,m.context=N,i=x):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{m=n.stateNode,gc(e,n),x=n.memoizedProps,N=n.type===n.elementType?x:Rn(n.type,x),m.props=N,U=n.pendingProps,F=m.context,E=t.contextType,typeof E=="object"&&E!==null?E=wn(E):(E=on(t)?Ot:Ye.current,E=tr(n,E));var $=t.getDerivedStateFromProps;(I=typeof $=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(x!==U||F!==E)&&Hc(n,m,i,E),pt=!1,F=n.memoizedState,m.state=F,li(n,i,m,s);var Q=n.memoizedState;x!==U||F!==Q||rn.current||pt?(typeof $=="function"&&(Ol(n,t,$,i),Q=n.memoizedState),(N=pt||Bc(n,t,N,i,F,Q,E)||!1)?(I||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(i,Q,E),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(i,Q,E)),typeof m.componentDidUpdate=="function"&&(n.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof m.componentDidUpdate!="function"||x===e.memoizedProps&&F===e.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&F===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=Q),m.props=i,m.state=Q,m.context=E,i=N):(typeof m.componentDidUpdate!="function"||x===e.memoizedProps&&F===e.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&F===e.memoizedState||(n.flags|=1024),i=!1)}return zl(e,n,t,i,u,s)}function zl(e,n,t,i,s,u){Zc(e,n);var m=(n.flags&128)!==0;if(!i&&!m)return s&&ic(n,t,!1),Gn(e,n,u);i=n.stateNode,Kh.current=n;var x=m&&typeof t.getDerivedStateFromError!="function"?null:i.render();return n.flags|=1,e!==null&&m?(n.child=ar(n,e.child,null,u),n.child=ar(n,null,x,u)):nn(e,n,x,u),n.memoizedState=i.state,s&&ic(n,t,!0),n.child}function nd(e){var n=e.stateNode;n.pendingContext?rc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&rc(e,n.context,!1),ml(e,n.containerInfo)}function td(e,n,t,i,s){return ir(),sl(s),n.flags|=256,nn(e,n,t,i),n.child}var Ll={dehydrated:null,treeContext:null,retryLane:0};function Al(e){return{baseLanes:e,cachePool:null,transitions:null}}function rd(e,n,t){var i=n.pendingProps,s=Oe.current,u=!1,m=(n.flags&128)!==0,x;if((x=m)||(x=e!==null&&e.memoizedState===null?!1:(s&2)!==0),x?(u=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),we(Oe,s&1),e===null)return ll(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(m=i.children,e=i.fallback,u?(i=n.mode,u=n.child,m={mode:"hidden",children:m},!(i&1)&&u!==null?(u.childLanes=0,u.pendingProps=m):u=Ri(m,i,0,null),e=jt(e,i,t,null),u.return=n,e.return=n,u.sibling=e,n.child=u,n.child.memoizedState=Al(t),n.memoizedState=Ll,e):Ml(n,m));if(s=e.memoizedState,s!==null&&(x=s.dehydrated,x!==null))return Xh(e,n,m,i,x,s,t);if(u){u=i.fallback,m=n.mode,s=e.child,x=s.sibling;var E={mode:"hidden",children:i.children};return!(m&1)&&n.child!==s?(i=n.child,i.childLanes=0,i.pendingProps=E,n.deletions=null):(i=xt(s,E),i.subtreeFlags=s.subtreeFlags&14680064),x!==null?u=xt(x,u):(u=jt(u,m,t,null),u.flags|=2),u.return=n,i.return=n,i.sibling=u,n.child=i,i=u,u=n.child,m=e.child.memoizedState,m=m===null?Al(t):{baseLanes:m.baseLanes|t,cachePool:null,transitions:m.transitions},u.memoizedState=m,u.childLanes=e.childLanes&~t,n.memoizedState=Ll,i}return u=e.child,e=u.sibling,i=xt(u,{mode:"visible",children:i.children}),!(n.mode&1)&&(i.lanes=t),i.return=n,i.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=i,n.memoizedState=null,i}function Ml(e,n){return n=Ri({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function mi(e,n,t,i){return i!==null&&sl(i),ar(n,e.child,null,t),e=Ml(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Xh(e,n,t,i,s,u,m){if(t)return n.flags&256?(n.flags&=-257,i=_l(Error(a(422))),mi(e,n,m,i)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(u=i.fallback,s=n.mode,i=Ri({mode:"visible",children:i.children},s,0,null),u=jt(u,s,m,null),u.flags|=2,i.return=n,u.return=n,i.sibling=u,n.child=i,n.mode&1&&ar(n,e.child,null,m),n.child.memoizedState=Al(m),n.memoizedState=Ll,u);if(!(n.mode&1))return mi(e,n,m,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var x=i.dgst;return i=x,u=Error(a(419)),i=_l(u,i,void 0),mi(e,n,m,i)}if(x=(m&e.childLanes)!==0,an||x){if(i=$e,i!==null){switch(m&-m){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(i.suspendedLanes|m)?0:s,s!==0&&s!==u.retryLane&&(u.retryLane=s,Xn(e,s),Tn(i,e,s,-1))}return Gl(),i=_l(Error(a(421))),mi(e,n,m,i)}return s.data==="$?"?(n.flags|=128,n.child=e.child,n=sm.bind(null,e),s._reactRetry=n,null):(e=u.treeContext,hn=ut(s.nextSibling),pn=n,Pe=!0,On=null,e!==null&&(bn[xn++]=Qn,bn[xn++]=Kn,bn[xn++]=Rt,Qn=e.id,Kn=e.overflow,Rt=n),n=Ml(n,i.children),n.flags|=4096,n)}function od(e,n,t){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),fl(e.return,n,t)}function Dl(e,n,t,i,s){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:s}:(u.isBackwards=n,u.rendering=null,u.renderingStartTime=0,u.last=i,u.tail=t,u.tailMode=s)}function id(e,n,t){var i=n.pendingProps,s=i.revealOrder,u=i.tail;if(nn(e,n,i.children,t),i=Oe.current,i&2)i=i&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&od(e,t,n);else if(e.tag===19)od(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(we(Oe,i),!(n.mode&1))n.memoizedState=null;else switch(s){case"forwards":for(t=n.child,s=null;t!==null;)e=t.alternate,e!==null&&si(e)===null&&(s=t),t=t.sibling;t=s,t===null?(s=n.child,n.child=null):(s=t.sibling,t.sibling=null),Dl(n,!1,s,t,u);break;case"backwards":for(t=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&si(e)===null){n.child=s;break}e=s.sibling,s.sibling=t,t=s,s=e}Dl(n,!0,t,null,u);break;case"together":Dl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function gi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Gn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Lt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,t=xt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=xt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Yh(e,n,t){switch(n.tag){case 3:nd(n),ir();break;case 5:bc(n);break;case 1:on(n.type)&&Jo(n);break;case 4:ml(n,n.stateNode.containerInfo);break;case 10:var i=n.type._context,s=n.memoizedProps.value;we(oi,i._currentValue),i._currentValue=s;break;case 13:if(i=n.memoizedState,i!==null)return i.dehydrated!==null?(we(Oe,Oe.current&1),n.flags|=128,null):t&n.child.childLanes?rd(e,n,t):(we(Oe,Oe.current&1),e=Gn(e,n,t),e!==null?e.sibling:null);we(Oe,Oe.current&1);break;case 19:if(i=(t&n.childLanes)!==0,e.flags&128){if(i)return id(e,n,t);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),we(Oe,Oe.current),i)break;return null;case 22:case 23:return n.lanes=0,Jc(e,n,t)}return Gn(e,n,t)}var ad,jl,ld,sd;ad=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},jl=function(){},ld=function(e,n,t,i){var s=e.memoizedProps;if(s!==i){e=n.stateNode,Tt(Fn.current);var u=null;switch(t){case"input":s=fa(e,s),i=fa(e,i),u=[];break;case"select":s=V({},s,{value:void 0}),i=V({},i,{value:void 0}),u=[];break;case"textarea":s=ma(e,s),i=ma(e,i),u=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Xo)}va(t,i);var m;t=null;for(N in s)if(!i.hasOwnProperty(N)&&s.hasOwnProperty(N)&&s[N]!=null)if(N==="style"){var x=s[N];for(m in x)x.hasOwnProperty(m)&&(t||(t={}),t[m]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(c.hasOwnProperty(N)?u||(u=[]):(u=u||[]).push(N,null));for(N in i){var E=i[N];if(x=s!=null?s[N]:void 0,i.hasOwnProperty(N)&&E!==x&&(E!=null||x!=null))if(N==="style")if(x){for(m in x)!x.hasOwnProperty(m)||E&&E.hasOwnProperty(m)||(t||(t={}),t[m]="");for(m in E)E.hasOwnProperty(m)&&x[m]!==E[m]&&(t||(t={}),t[m]=E[m])}else t||(u||(u=[]),u.push(N,t)),t=E;else N==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,x=x?x.__html:void 0,E!=null&&x!==E&&(u=u||[]).push(N,E)):N==="children"?typeof E!="string"&&typeof E!="number"||(u=u||[]).push(N,""+E):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(c.hasOwnProperty(N)?(E!=null&&N==="onScroll"&&ke("scroll",e),u||x===E||(u=[])):(u=u||[]).push(N,E))}t&&(u=u||[]).push("style",t);var N=u;(n.updateQueue=N)&&(n.flags|=4)}},sd=function(e,n,t,i){t!==i&&(n.flags|=4)};function Zr(e,n){if(!Pe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Je(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,i=0;if(n)for(var s=e.child;s!==null;)t|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)t|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=t,n}function Gh(e,n,t){var i=n.pendingProps;switch(il(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return on(n.type)&&Go(),Je(n),null;case 3:return i=n.stateNode,ur(),Se(rn),Se(Ye),yl(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(ti(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,On!==null&&(Kl(On),On=null))),jl(e,n),Je(n),null;case 5:gl(n);var s=Tt(Kr.current);if(t=n.type,e!==null&&n.stateNode!=null)ld(e,n,t,i,s),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!i){if(n.stateNode===null)throw Error(a(166));return Je(n),null}if(e=Tt(Fn.current),ti(n)){i=n.stateNode,t=n.type;var u=n.memoizedProps;switch(i[jn]=n,i[Hr]=u,e=(n.mode&1)!==0,t){case"dialog":ke("cancel",i),ke("close",i);break;case"iframe":case"object":case"embed":ke("load",i);break;case"video":case"audio":for(s=0;s<Ur.length;s++)ke(Ur[s],i);break;case"source":ke("error",i);break;case"img":case"image":case"link":ke("error",i),ke("load",i);break;case"details":ke("toggle",i);break;case"input":qs(i,u),ke("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!u.multiple},ke("invalid",i);break;case"textarea":Vs(i,u),ke("invalid",i)}va(t,u),s=null;for(var m in u)if(u.hasOwnProperty(m)){var x=u[m];m==="children"?typeof x=="string"?i.textContent!==x&&(u.suppressHydrationWarning!==!0&&Ko(i.textContent,x,e),s=["children",x]):typeof x=="number"&&i.textContent!==""+x&&(u.suppressHydrationWarning!==!0&&Ko(i.textContent,x,e),s=["children",""+x]):c.hasOwnProperty(m)&&x!=null&&m==="onScroll"&&ke("scroll",i)}switch(t){case"input":Po(i),$s(i,u,!0);break;case"textarea":Po(i),Qs(i);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(i.onclick=Xo)}i=s,n.updateQueue=i,i!==null&&(n.flags|=4)}else{m=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ks(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=m.createElement(t,{is:i.is}):(e=m.createElement(t),t==="select"&&(m=e,i.multiple?m.multiple=!0:i.size&&(m.size=i.size))):e=m.createElementNS(e,t),e[jn]=n,e[Hr]=i,ad(e,n,!1,!1),n.stateNode=e;e:{switch(m=ya(t,i),t){case"dialog":ke("cancel",e),ke("close",e),s=i;break;case"iframe":case"object":case"embed":ke("load",e),s=i;break;case"video":case"audio":for(s=0;s<Ur.length;s++)ke(Ur[s],e);s=i;break;case"source":ke("error",e),s=i;break;case"img":case"image":case"link":ke("error",e),ke("load",e),s=i;break;case"details":ke("toggle",e),s=i;break;case"input":qs(e,i),s=fa(e,i),ke("invalid",e);break;case"option":s=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},s=V({},i,{value:void 0}),ke("invalid",e);break;case"textarea":Vs(e,i),s=ma(e,i),ke("invalid",e);break;default:s=i}va(t,s),x=s;for(u in x)if(x.hasOwnProperty(u)){var E=x[u];u==="style"?Gs(e,E):u==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&Xs(e,E)):u==="children"?typeof E=="string"?(t!=="textarea"||E!=="")&&wr(e,E):typeof E=="number"&&wr(e,""+E):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?E!=null&&u==="onScroll"&&ke("scroll",e):E!=null&&D(e,u,E,m))}switch(t){case"input":Po(e),$s(e,i,!1);break;case"textarea":Po(e),Qs(e);break;case"option":i.value!=null&&e.setAttribute("value",""+ve(i.value));break;case"select":e.multiple=!!i.multiple,u=i.value,u!=null?$t(e,!!i.multiple,u,!1):i.defaultValue!=null&&$t(e,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Xo)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Je(n),null;case 6:if(e&&n.stateNode!=null)sd(e,n,e.memoizedProps,i);else{if(typeof i!="string"&&n.stateNode===null)throw Error(a(166));if(t=Tt(Kr.current),Tt(Fn.current),ti(n)){if(i=n.stateNode,t=n.memoizedProps,i[jn]=n,(u=i.nodeValue!==t)&&(e=pn,e!==null))switch(e.tag){case 3:Ko(i.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ko(i.nodeValue,t,(e.mode&1)!==0)}u&&(n.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[jn]=n,n.stateNode=i}return Je(n),null;case 13:if(Se(Oe),i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&hn!==null&&n.mode&1&&!(n.flags&128))dc(),ir(),n.flags|=98560,u=!1;else if(u=ti(n),i!==null&&i.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[jn]=n}else ir(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Je(n),u=!1}else On!==null&&(Kl(On),On=null),u=!0;if(!u)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(n.child.flags|=8192,n.mode&1&&(e===null||Oe.current&1?Be===0&&(Be=3):Gl())),n.updateQueue!==null&&(n.flags|=4),Je(n),null);case 4:return ur(),jl(e,n),e===null&&Br(n.stateNode.containerInfo),Je(n),null;case 10:return dl(n.type._context),Je(n),null;case 17:return on(n.type)&&Go(),Je(n),null;case 19:if(Se(Oe),u=n.memoizedState,u===null)return Je(n),null;if(i=(n.flags&128)!==0,m=u.rendering,m===null)if(i)Zr(u,!1);else{if(Be!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(m=si(e),m!==null){for(n.flags|=128,Zr(u,!1),i=m.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),n.subtreeFlags=0,i=t,t=n.child;t!==null;)u=t,e=i,u.flags&=14680066,m=u.alternate,m===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=m.childLanes,u.lanes=m.lanes,u.child=m.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=m.memoizedProps,u.memoizedState=m.memoizedState,u.updateQueue=m.updateQueue,u.type=m.type,e=m.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return we(Oe,Oe.current&1|2),n.child}e=e.sibling}u.tail!==null&&Ae()>pr&&(n.flags|=128,i=!0,Zr(u,!1),n.lanes=4194304)}else{if(!i)if(e=si(m),e!==null){if(n.flags|=128,i=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Zr(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!Pe)return Je(n),null}else 2*Ae()-u.renderingStartTime>pr&&t!==1073741824&&(n.flags|=128,i=!0,Zr(u,!1),n.lanes=4194304);u.isBackwards?(m.sibling=n.child,n.child=m):(t=u.last,t!==null?t.sibling=m:n.child=m,u.last=m)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ae(),n.sibling=null,t=Oe.current,we(Oe,i?t&1|2:t&1),n):(Je(n),null);case 22:case 23:return Yl(),i=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(n.flags|=8192),i&&n.mode&1?mn&1073741824&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),null;case 24:return null;case 25:return null}throw Error(a(156,n.tag))}function Jh(e,n){switch(il(n),n.tag){case 1:return on(n.type)&&Go(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ur(),Se(rn),Se(Ye),yl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return gl(n),null;case 13:if(Se(Oe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));ir()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Se(Oe),null;case 4:return ur(),null;case 10:return dl(n.type._context),null;case 22:case 23:return Yl(),null;case 24:return null;default:return null}}var vi=!1,Ze=!1,Zh=typeof WeakSet=="function"?WeakSet:Set,W=null;function dr(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){ze(e,n,i)}else t.current=null}function Fl(e,n,t){try{t()}catch(i){ze(e,n,i)}}var ud=!1;function em(e,n){if(Ya=jo,e=Bu(),qa(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var s=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{t.nodeType,u.nodeType}catch{t=null;break e}var m=0,x=-1,E=-1,N=0,I=0,U=e,F=null;n:for(;;){for(var $;U!==t||s!==0&&U.nodeType!==3||(x=m+s),U!==u||i!==0&&U.nodeType!==3||(E=m+i),U.nodeType===3&&(m+=U.nodeValue.length),($=U.firstChild)!==null;)F=U,U=$;for(;;){if(U===e)break n;if(F===t&&++N===s&&(x=m),F===u&&++I===i&&(E=m),($=U.nextSibling)!==null)break;U=F,F=U.parentNode}U=$}t=x===-1||E===-1?null:{start:x,end:E}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ga={focusedElem:e,selectionRange:t},jo=!1,W=n;W!==null;)if(n=W,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,W=e;else for(;W!==null;){n=W;try{var Q=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(Q!==null){var X=Q.memoizedProps,Me=Q.memoizedState,R=n.stateNode,P=R.getSnapshotBeforeUpdate(n.elementType===n.type?X:Rn(n.type,X),Me);R.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var _=n.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(B){ze(n,n.return,B)}if(e=n.sibling,e!==null){e.return=n.return,W=e;break}W=n.return}return Q=ud,ud=!1,Q}function eo(e,n,t){var i=n.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&e)===e){var u=s.destroy;s.destroy=void 0,u!==void 0&&Fl(n,t,u)}s=s.next}while(s!==i)}}function yi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var i=t.create;t.destroy=i()}t=t.next}while(t!==n)}}function Il(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function cd(e){var n=e.alternate;n!==null&&(e.alternate=null,cd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[jn],delete n[Hr],delete n[nl],delete n[Dh],delete n[jh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dd(e){return e.tag===5||e.tag===3||e.tag===4}function fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ul(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Xo));else if(i!==4&&(e=e.child,e!==null))for(Ul(e,n,t),e=e.sibling;e!==null;)Ul(e,n,t),e=e.sibling}function Bl(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Bl(e,n,t),e=e.sibling;e!==null;)Bl(e,n,t),e=e.sibling}var Qe=null,_n=!1;function mt(e,n,t){for(t=t.child;t!==null;)pd(e,n,t),t=t.sibling}function pd(e,n,t){if(Dn&&typeof Dn.onCommitFiberUnmount=="function")try{Dn.onCommitFiberUnmount(To,t)}catch{}switch(t.tag){case 5:Ze||dr(t,n);case 6:var i=Qe,s=_n;Qe=null,mt(e,n,t),Qe=i,_n=s,Qe!==null&&(_n?(e=Qe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Qe.removeChild(t.stateNode));break;case 18:Qe!==null&&(_n?(e=Qe,t=t.stateNode,e.nodeType===8?el(e.parentNode,t):e.nodeType===1&&el(e,t),zr(e)):el(Qe,t.stateNode));break;case 4:i=Qe,s=_n,Qe=t.stateNode.containerInfo,_n=!0,mt(e,n,t),Qe=i,_n=s;break;case 0:case 11:case 14:case 15:if(!Ze&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var u=s,m=u.destroy;u=u.tag,m!==void 0&&(u&2||u&4)&&Fl(t,n,m),s=s.next}while(s!==i)}mt(e,n,t);break;case 1:if(!Ze&&(dr(t,n),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(x){ze(t,n,x)}mt(e,n,t);break;case 21:mt(e,n,t);break;case 22:t.mode&1?(Ze=(i=Ze)||t.memoizedState!==null,mt(e,n,t),Ze=i):mt(e,n,t);break;default:mt(e,n,t)}}function hd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Zh),n.forEach(function(i){var s=um.bind(null,e,i);t.has(i)||(t.add(i),i.then(s,s))})}}function Nn(e,n){var t=n.deletions;if(t!==null)for(var i=0;i<t.length;i++){var s=t[i];try{var u=e,m=n,x=m;e:for(;x!==null;){switch(x.tag){case 5:Qe=x.stateNode,_n=!1;break e;case 3:Qe=x.stateNode.containerInfo,_n=!0;break e;case 4:Qe=x.stateNode.containerInfo,_n=!0;break e}x=x.return}if(Qe===null)throw Error(a(160));pd(u,m,s),Qe=null,_n=!1;var E=s.alternate;E!==null&&(E.return=null),s.return=null}catch(N){ze(s,n,N)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)md(n,e),n=n.sibling}function md(e,n){var t=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nn(n,e),Un(e),i&4){try{eo(3,e,e.return),yi(3,e)}catch(X){ze(e,e.return,X)}try{eo(5,e,e.return)}catch(X){ze(e,e.return,X)}}break;case 1:Nn(n,e),Un(e),i&512&&t!==null&&dr(t,t.return);break;case 5:if(Nn(n,e),Un(e),i&512&&t!==null&&dr(t,t.return),e.flags&32){var s=e.stateNode;try{wr(s,"")}catch(X){ze(e,e.return,X)}}if(i&4&&(s=e.stateNode,s!=null)){var u=e.memoizedProps,m=t!==null?t.memoizedProps:u,x=e.type,E=e.updateQueue;if(e.updateQueue=null,E!==null)try{x==="input"&&u.type==="radio"&&u.name!=null&&Hs(s,u),ya(x,m);var N=ya(x,u);for(m=0;m<E.length;m+=2){var I=E[m],U=E[m+1];I==="style"?Gs(s,U):I==="dangerouslySetInnerHTML"?Xs(s,U):I==="children"?wr(s,U):D(s,I,U,N)}switch(x){case"input":pa(s,u);break;case"textarea":Ws(s,u);break;case"select":var F=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!u.multiple;var $=u.value;$!=null?$t(s,!!u.multiple,$,!1):F!==!!u.multiple&&(u.defaultValue!=null?$t(s,!!u.multiple,u.defaultValue,!0):$t(s,!!u.multiple,u.multiple?[]:"",!1))}s[Hr]=u}catch(X){ze(e,e.return,X)}}break;case 6:if(Nn(n,e),Un(e),i&4){if(e.stateNode===null)throw Error(a(162));s=e.stateNode,u=e.memoizedProps;try{s.nodeValue=u}catch(X){ze(e,e.return,X)}}break;case 3:if(Nn(n,e),Un(e),i&4&&t!==null&&t.memoizedState.isDehydrated)try{zr(n.containerInfo)}catch(X){ze(e,e.return,X)}break;case 4:Nn(n,e),Un(e);break;case 13:Nn(n,e),Un(e),s=e.child,s.flags&8192&&(u=s.memoizedState!==null,s.stateNode.isHidden=u,!u||s.alternate!==null&&s.alternate.memoizedState!==null||($l=Ae())),i&4&&hd(e);break;case 22:if(I=t!==null&&t.memoizedState!==null,e.mode&1?(Ze=(N=Ze)||I,Nn(n,e),Ze=N):Nn(n,e),Un(e),i&8192){if(N=e.memoizedState!==null,(e.stateNode.isHidden=N)&&!I&&e.mode&1)for(W=e,I=e.child;I!==null;){for(U=W=I;W!==null;){switch(F=W,$=F.child,F.tag){case 0:case 11:case 14:case 15:eo(4,F,F.return);break;case 1:dr(F,F.return);var Q=F.stateNode;if(typeof Q.componentWillUnmount=="function"){i=F,t=F.return;try{n=i,Q.props=n.memoizedProps,Q.state=n.memoizedState,Q.componentWillUnmount()}catch(X){ze(i,t,X)}}break;case 5:dr(F,F.return);break;case 22:if(F.memoizedState!==null){yd(U);continue}}$!==null?($.return=F,W=$):yd(U)}I=I.sibling}e:for(I=null,U=e;;){if(U.tag===5){if(I===null){I=U;try{s=U.stateNode,N?(u=s.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(x=U.stateNode,E=U.memoizedProps.style,m=E!=null&&E.hasOwnProperty("display")?E.display:null,x.style.display=Ys("display",m))}catch(X){ze(e,e.return,X)}}}else if(U.tag===6){if(I===null)try{U.stateNode.nodeValue=N?"":U.memoizedProps}catch(X){ze(e,e.return,X)}}else if((U.tag!==22&&U.tag!==23||U.memoizedState===null||U===e)&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===e)break e;for(;U.sibling===null;){if(U.return===null||U.return===e)break e;I===U&&(I=null),U=U.return}I===U&&(I=null),U.sibling.return=U.return,U=U.sibling}}break;case 19:Nn(n,e),Un(e),i&4&&hd(e);break;case 21:break;default:Nn(n,e),Un(e)}}function Un(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(dd(t)){var i=t;break e}t=t.return}throw Error(a(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(wr(s,""),i.flags&=-33);var u=fd(e);Bl(e,u,s);break;case 3:case 4:var m=i.stateNode.containerInfo,x=fd(e);Ul(e,x,m);break;default:throw Error(a(161))}}catch(E){ze(e,e.return,E)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function nm(e,n,t){W=e,gd(e)}function gd(e,n,t){for(var i=(e.mode&1)!==0;W!==null;){var s=W,u=s.child;if(s.tag===22&&i){var m=s.memoizedState!==null||vi;if(!m){var x=s.alternate,E=x!==null&&x.memoizedState!==null||Ze;x=vi;var N=Ze;if(vi=m,(Ze=E)&&!N)for(W=s;W!==null;)m=W,E=m.child,m.tag===22&&m.memoizedState!==null?bd(s):E!==null?(E.return=m,W=E):bd(s);for(;u!==null;)W=u,gd(u),u=u.sibling;W=s,vi=x,Ze=N}vd(e)}else s.subtreeFlags&8772&&u!==null?(u.return=s,W=u):vd(e)}}function vd(e){for(;W!==null;){var n=W;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ze||yi(5,n);break;case 1:var i=n.stateNode;if(n.flags&4&&!Ze)if(t===null)i.componentDidMount();else{var s=n.elementType===n.type?t.memoizedProps:Rn(n.type,t.memoizedProps);i.componentDidUpdate(s,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var u=n.updateQueue;u!==null&&yc(n,u,i);break;case 3:var m=n.updateQueue;if(m!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}yc(n,m,t)}break;case 5:var x=n.stateNode;if(t===null&&n.flags&4){t=x;var E=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&t.focus();break;case"img":E.src&&(t.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var N=n.alternate;if(N!==null){var I=N.memoizedState;if(I!==null){var U=I.dehydrated;U!==null&&zr(U)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Ze||n.flags&512&&Il(n)}catch(F){ze(n,n.return,F)}}if(n===e){W=null;break}if(t=n.sibling,t!==null){t.return=n.return,W=t;break}W=n.return}}function yd(e){for(;W!==null;){var n=W;if(n===e){W=null;break}var t=n.sibling;if(t!==null){t.return=n.return,W=t;break}W=n.return}}function bd(e){for(;W!==null;){var n=W;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{yi(4,n)}catch(E){ze(n,t,E)}break;case 1:var i=n.stateNode;if(typeof i.componentDidMount=="function"){var s=n.return;try{i.componentDidMount()}catch(E){ze(n,s,E)}}var u=n.return;try{Il(n)}catch(E){ze(n,u,E)}break;case 5:var m=n.return;try{Il(n)}catch(E){ze(n,m,E)}}}catch(E){ze(n,n.return,E)}if(n===e){W=null;break}var x=n.sibling;if(x!==null){x.return=n.return,W=x;break}W=n.return}}var tm=Math.ceil,bi=H.ReactCurrentDispatcher,ql=H.ReactCurrentOwner,Sn=H.ReactCurrentBatchConfig,pe=0,$e=null,je=null,Ke=0,mn=0,fr=ct(0),Be=0,no=null,Lt=0,xi=0,Hl=0,to=null,ln=null,$l=0,pr=1/0,Jn=null,wi=!1,Vl=null,gt=null,ki=!1,vt=null,Si=0,ro=0,Wl=null,Ei=-1,Pi=0;function tn(){return pe&6?Ae():Ei!==-1?Ei:Ei=Ae()}function yt(e){return e.mode&1?pe&2&&Ke!==0?Ke&-Ke:Ih.transition!==null?(Pi===0&&(Pi=fu()),Pi):(e=ye,e!==0||(e=window.event,e=e===void 0?16:wu(e.type)),e):1}function Tn(e,n,t,i){if(50<ro)throw ro=0,Wl=null,Error(a(185));Or(e,t,i),(!(pe&2)||e!==$e)&&(e===$e&&(!(pe&2)&&(xi|=t),Be===4&&bt(e,Ke)),sn(e,i),t===1&&pe===0&&!(n.mode&1)&&(pr=Ae()+500,Zo&&ft()))}function sn(e,n){var t=e.callbackNode;Ip(e,n);var i=Ao(e,e===$e?Ke:0);if(i===0)t!==null&&uu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=i&-i,e.callbackPriority!==n){if(t!=null&&uu(t),n===1)e.tag===0?Fh(wd.bind(null,e)):ac(wd.bind(null,e)),Ah(function(){!(pe&6)&&ft()}),t=null;else{switch(pu(i)){case 1:t=Pa;break;case 4:t=cu;break;case 16:t=No;break;case 536870912:t=du;break;default:t=No}t=_d(t,xd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function xd(e,n){if(Ei=-1,Pi=0,pe&6)throw Error(a(327));var t=e.callbackNode;if(hr()&&e.callbackNode!==t)return null;var i=Ao(e,e===$e?Ke:0);if(i===0)return null;if(i&30||i&e.expiredLanes||n)n=Ci(e,i);else{n=i;var s=pe;pe|=2;var u=Sd();($e!==e||Ke!==n)&&(Jn=null,pr=Ae()+500,Mt(e,n));do try{im();break}catch(x){kd(e,x)}while(!0);cl(),bi.current=u,pe=s,je!==null?n=0:($e=null,Ke=0,n=Be)}if(n!==0){if(n===2&&(s=Ca(e),s!==0&&(i=s,n=Ql(e,s))),n===1)throw t=no,Mt(e,0),bt(e,i),sn(e,Ae()),t;if(n===6)bt(e,i);else{if(s=e.current.alternate,!(i&30)&&!rm(s)&&(n=Ci(e,i),n===2&&(u=Ca(e),u!==0&&(i=u,n=Ql(e,u))),n===1))throw t=no,Mt(e,0),bt(e,i),sn(e,Ae()),t;switch(e.finishedWork=s,e.finishedLanes=i,n){case 0:case 1:throw Error(a(345));case 2:Dt(e,ln,Jn);break;case 3:if(bt(e,i),(i&130023424)===i&&(n=$l+500-Ae(),10<n)){if(Ao(e,0)!==0)break;if(s=e.suspendedLanes,(s&i)!==i){tn(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Za(Dt.bind(null,e,ln,Jn),n);break}Dt(e,ln,Jn);break;case 4:if(bt(e,i),(i&4194240)===i)break;for(n=e.eventTimes,s=-1;0<i;){var m=31-Pn(i);u=1<<m,m=n[m],m>s&&(s=m),i&=~u}if(i=s,i=Ae()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*tm(i/1960))-i,10<i){e.timeoutHandle=Za(Dt.bind(null,e,ln,Jn),i);break}Dt(e,ln,Jn);break;case 5:Dt(e,ln,Jn);break;default:throw Error(a(329))}}}return sn(e,Ae()),e.callbackNode===t?xd.bind(null,e):null}function Ql(e,n){var t=to;return e.current.memoizedState.isDehydrated&&(Mt(e,n).flags|=256),e=Ci(e,n),e!==2&&(n=ln,ln=t,n!==null&&Kl(n)),e}function Kl(e){ln===null?ln=e:ln.push.apply(ln,e)}function rm(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var s=t[i],u=s.getSnapshot;s=s.value;try{if(!Cn(u(),s))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function bt(e,n){for(n&=~Hl,n&=~xi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Pn(n),i=1<<t;e[t]=-1,n&=~i}}function wd(e){if(pe&6)throw Error(a(327));hr();var n=Ao(e,0);if(!(n&1))return sn(e,Ae()),null;var t=Ci(e,n);if(e.tag!==0&&t===2){var i=Ca(e);i!==0&&(n=i,t=Ql(e,i))}if(t===1)throw t=no,Mt(e,0),bt(e,n),sn(e,Ae()),t;if(t===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Dt(e,ln,Jn),sn(e,Ae()),null}function Xl(e,n){var t=pe;pe|=1;try{return e(n)}finally{pe=t,pe===0&&(pr=Ae()+500,Zo&&ft())}}function At(e){vt!==null&&vt.tag===0&&!(pe&6)&&hr();var n=pe;pe|=1;var t=Sn.transition,i=ye;try{if(Sn.transition=null,ye=1,e)return e()}finally{ye=i,Sn.transition=t,pe=n,!(pe&6)&&ft()}}function Yl(){mn=fr.current,Se(fr)}function Mt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Lh(t)),je!==null)for(t=je.return;t!==null;){var i=t;switch(il(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Go();break;case 3:ur(),Se(rn),Se(Ye),yl();break;case 5:gl(i);break;case 4:ur();break;case 13:Se(Oe);break;case 19:Se(Oe);break;case 10:dl(i.type._context);break;case 22:case 23:Yl()}t=t.return}if($e=e,je=e=xt(e.current,null),Ke=mn=n,Be=0,no=null,Hl=xi=Lt=0,ln=to=null,Nt!==null){for(n=0;n<Nt.length;n++)if(t=Nt[n],i=t.interleaved,i!==null){t.interleaved=null;var s=i.next,u=t.pending;if(u!==null){var m=u.next;u.next=s,i.next=m}t.pending=i}Nt=null}return e}function kd(e,n){do{var t=je;try{if(cl(),ui.current=pi,ci){for(var i=Re.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}ci=!1}if(zt=0,He=Ue=Re=null,Xr=!1,Yr=0,ql.current=null,t===null||t.return===null){Be=1,no=n,je=null;break}e:{var u=e,m=t.return,x=t,E=n;if(n=Ke,x.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var N=E,I=x,U=I.tag;if(!(I.mode&1)&&(U===0||U===11||U===15)){var F=I.alternate;F?(I.updateQueue=F.updateQueue,I.memoizedState=F.memoizedState,I.lanes=F.lanes):(I.updateQueue=null,I.memoizedState=null)}var $=Qc(m);if($!==null){$.flags&=-257,Kc($,m,x,u,n),$.mode&1&&Wc(u,N,n),n=$,E=N;var Q=n.updateQueue;if(Q===null){var X=new Set;X.add(E),n.updateQueue=X}else Q.add(E);break e}else{if(!(n&1)){Wc(u,N,n),Gl();break e}E=Error(a(426))}}else if(Pe&&x.mode&1){var Me=Qc(m);if(Me!==null){!(Me.flags&65536)&&(Me.flags|=256),Kc(Me,m,x,u,n),sl(cr(E,x));break e}}u=E=cr(E,x),Be!==4&&(Be=2),to===null?to=[u]:to.push(u),u=m;do{switch(u.tag){case 3:u.flags|=65536,n&=-n,u.lanes|=n;var R=$c(u,E,n);vc(u,R);break e;case 1:x=E;var P=u.type,_=u.stateNode;if(!(u.flags&128)&&(typeof P.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(gt===null||!gt.has(_)))){u.flags|=65536,n&=-n,u.lanes|=n;var B=Vc(u,x,n);vc(u,B);break e}}u=u.return}while(u!==null)}Pd(t)}catch(G){n=G,je===t&&t!==null&&(je=t=t.return);continue}break}while(!0)}function Sd(){var e=bi.current;return bi.current=pi,e===null?pi:e}function Gl(){(Be===0||Be===3||Be===2)&&(Be=4),$e===null||!(Lt&268435455)&&!(xi&268435455)||bt($e,Ke)}function Ci(e,n){var t=pe;pe|=2;var i=Sd();($e!==e||Ke!==n)&&(Jn=null,Mt(e,n));do try{om();break}catch(s){kd(e,s)}while(!0);if(cl(),pe=t,bi.current=i,je!==null)throw Error(a(261));return $e=null,Ke=0,Be}function om(){for(;je!==null;)Ed(je)}function im(){for(;je!==null&&!Np();)Ed(je)}function Ed(e){var n=Rd(e.alternate,e,mn);e.memoizedProps=e.pendingProps,n===null?Pd(e):je=n,ql.current=null}function Pd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Jh(t,n),t!==null){t.flags&=32767,je=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,je=null;return}}else if(t=Gh(t,n,mn),t!==null){je=t;return}if(n=n.sibling,n!==null){je=n;return}je=n=e}while(n!==null);Be===0&&(Be=5)}function Dt(e,n,t){var i=ye,s=Sn.transition;try{Sn.transition=null,ye=1,am(e,n,t,i)}finally{Sn.transition=s,ye=i}return null}function am(e,n,t,i){do hr();while(vt!==null);if(pe&6)throw Error(a(327));t=e.finishedWork;var s=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var u=t.lanes|t.childLanes;if(Up(e,u),e===$e&&(je=$e=null,Ke=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ki||(ki=!0,_d(No,function(){return hr(),null})),u=(t.flags&15990)!==0,t.subtreeFlags&15990||u){u=Sn.transition,Sn.transition=null;var m=ye;ye=1;var x=pe;pe|=4,ql.current=null,em(e,t),md(t,e),Ch(Ga),jo=!!Ya,Ga=Ya=null,e.current=t,nm(t),Tp(),pe=x,ye=m,Sn.transition=u}else e.current=t;if(ki&&(ki=!1,vt=e,Si=s),u=e.pendingLanes,u===0&&(gt=null),Ap(t.stateNode),sn(e,Ae()),n!==null)for(i=e.onRecoverableError,t=0;t<n.length;t++)s=n[t],i(s.value,{componentStack:s.stack,digest:s.digest});if(wi)throw wi=!1,e=Vl,Vl=null,e;return Si&1&&e.tag!==0&&hr(),u=e.pendingLanes,u&1?e===Wl?ro++:(ro=0,Wl=e):ro=0,ft(),null}function hr(){if(vt!==null){var e=pu(Si),n=Sn.transition,t=ye;try{if(Sn.transition=null,ye=16>e?16:e,vt===null)var i=!1;else{if(e=vt,vt=null,Si=0,pe&6)throw Error(a(331));var s=pe;for(pe|=4,W=e.current;W!==null;){var u=W,m=u.child;if(W.flags&16){var x=u.deletions;if(x!==null){for(var E=0;E<x.length;E++){var N=x[E];for(W=N;W!==null;){var I=W;switch(I.tag){case 0:case 11:case 15:eo(8,I,u)}var U=I.child;if(U!==null)U.return=I,W=U;else for(;W!==null;){I=W;var F=I.sibling,$=I.return;if(cd(I),I===N){W=null;break}if(F!==null){F.return=$,W=F;break}W=$}}}var Q=u.alternate;if(Q!==null){var X=Q.child;if(X!==null){Q.child=null;do{var Me=X.sibling;X.sibling=null,X=Me}while(X!==null)}}W=u}}if(u.subtreeFlags&2064&&m!==null)m.return=u,W=m;else e:for(;W!==null;){if(u=W,u.flags&2048)switch(u.tag){case 0:case 11:case 15:eo(9,u,u.return)}var R=u.sibling;if(R!==null){R.return=u.return,W=R;break e}W=u.return}}var P=e.current;for(W=P;W!==null;){m=W;var _=m.child;if(m.subtreeFlags&2064&&_!==null)_.return=m,W=_;else e:for(m=P;W!==null;){if(x=W,x.flags&2048)try{switch(x.tag){case 0:case 11:case 15:yi(9,x)}}catch(G){ze(x,x.return,G)}if(x===m){W=null;break e}var B=x.sibling;if(B!==null){B.return=x.return,W=B;break e}W=x.return}}if(pe=s,ft(),Dn&&typeof Dn.onPostCommitFiberRoot=="function")try{Dn.onPostCommitFiberRoot(To,e)}catch{}i=!0}return i}finally{ye=t,Sn.transition=n}}return!1}function Cd(e,n,t){n=cr(t,n),n=$c(e,n,1),e=ht(e,n,1),n=tn(),e!==null&&(Or(e,1,n),sn(e,n))}function ze(e,n,t){if(e.tag===3)Cd(e,e,t);else for(;n!==null;){if(n.tag===3){Cd(n,e,t);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(gt===null||!gt.has(i))){e=cr(t,e),e=Vc(n,e,1),n=ht(n,e,1),e=tn(),n!==null&&(Or(n,1,e),sn(n,e));break}}n=n.return}}function lm(e,n,t){var i=e.pingCache;i!==null&&i.delete(n),n=tn(),e.pingedLanes|=e.suspendedLanes&t,$e===e&&(Ke&t)===t&&(Be===4||Be===3&&(Ke&130023424)===Ke&&500>Ae()-$l?Mt(e,0):Hl|=t),sn(e,n)}function Od(e,n){n===0&&(e.mode&1?(n=Lo,Lo<<=1,!(Lo&130023424)&&(Lo=4194304)):n=1);var t=tn();e=Xn(e,n),e!==null&&(Or(e,n,t),sn(e,t))}function sm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Od(e,t)}function um(e,n){var t=0;switch(e.tag){case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(t=s.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(a(314))}i!==null&&i.delete(n),Od(e,t)}var Rd;Rd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||rn.current)an=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return an=!1,Yh(e,n,t);an=!!(e.flags&131072)}else an=!1,Pe&&n.flags&1048576&&lc(n,ni,n.index);switch(n.lanes=0,n.tag){case 2:var i=n.type;gi(e,n),e=n.pendingProps;var s=tr(n,Ye.current);sr(n,t),s=wl(null,n,i,e,s,t);var u=kl();return n.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,on(i)?(u=!0,Jo(n)):u=!1,n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,hl(n),s.updater=hi,n.stateNode=s,s._reactInternals=n,Rl(n,i,e,t),n=zl(null,n,i,!0,u,t)):(n.tag=0,Pe&&u&&ol(n),nn(null,n,s,t),n=n.child),n;case 16:i=n.elementType;e:{switch(gi(e,n),e=n.pendingProps,s=i._init,i=s(i._payload),n.type=i,s=n.tag=dm(i),e=Rn(i,e),s){case 0:n=Tl(null,n,i,e,t);break e;case 1:n=ed(null,n,i,e,t);break e;case 11:n=Xc(null,n,i,e,t);break e;case 14:n=Yc(null,n,i,Rn(i.type,e),t);break e}throw Error(a(306,i,""))}return n;case 0:return i=n.type,s=n.pendingProps,s=n.elementType===i?s:Rn(i,s),Tl(e,n,i,s,t);case 1:return i=n.type,s=n.pendingProps,s=n.elementType===i?s:Rn(i,s),ed(e,n,i,s,t);case 3:e:{if(nd(n),e===null)throw Error(a(387));i=n.pendingProps,u=n.memoizedState,s=u.element,gc(e,n),li(n,i,null,t);var m=n.memoizedState;if(i=m.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){s=cr(Error(a(423)),n),n=td(e,n,i,t,s);break e}else if(i!==s){s=cr(Error(a(424)),n),n=td(e,n,i,t,s);break e}else for(hn=ut(n.stateNode.containerInfo.firstChild),pn=n,Pe=!0,On=null,t=hc(n,null,i,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ir(),i===s){n=Gn(e,n,t);break e}nn(e,n,i,t)}n=n.child}return n;case 5:return bc(n),e===null&&ll(n),i=n.type,s=n.pendingProps,u=e!==null?e.memoizedProps:null,m=s.children,Ja(i,s)?m=null:u!==null&&Ja(i,u)&&(n.flags|=32),Zc(e,n),nn(e,n,m,t),n.child;case 6:return e===null&&ll(n),null;case 13:return rd(e,n,t);case 4:return ml(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=ar(n,null,i,t):nn(e,n,i,t),n.child;case 11:return i=n.type,s=n.pendingProps,s=n.elementType===i?s:Rn(i,s),Xc(e,n,i,s,t);case 7:return nn(e,n,n.pendingProps,t),n.child;case 8:return nn(e,n,n.pendingProps.children,t),n.child;case 12:return nn(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(i=n.type._context,s=n.pendingProps,u=n.memoizedProps,m=s.value,we(oi,i._currentValue),i._currentValue=m,u!==null)if(Cn(u.value,m)){if(u.children===s.children&&!rn.current){n=Gn(e,n,t);break e}}else for(u=n.child,u!==null&&(u.return=n);u!==null;){var x=u.dependencies;if(x!==null){m=u.child;for(var E=x.firstContext;E!==null;){if(E.context===i){if(u.tag===1){E=Yn(-1,t&-t),E.tag=2;var N=u.updateQueue;if(N!==null){N=N.shared;var I=N.pending;I===null?E.next=E:(E.next=I.next,I.next=E),N.pending=E}}u.lanes|=t,E=u.alternate,E!==null&&(E.lanes|=t),fl(u.return,t,n),x.lanes|=t;break}E=E.next}}else if(u.tag===10)m=u.type===n.type?null:u.child;else if(u.tag===18){if(m=u.return,m===null)throw Error(a(341));m.lanes|=t,x=m.alternate,x!==null&&(x.lanes|=t),fl(m,t,n),m=u.sibling}else m=u.child;if(m!==null)m.return=u;else for(m=u;m!==null;){if(m===n){m=null;break}if(u=m.sibling,u!==null){u.return=m.return,m=u;break}m=m.return}u=m}nn(e,n,s.children,t),n=n.child}return n;case 9:return s=n.type,i=n.pendingProps.children,sr(n,t),s=wn(s),i=i(s),n.flags|=1,nn(e,n,i,t),n.child;case 14:return i=n.type,s=Rn(i,n.pendingProps),s=Rn(i.type,s),Yc(e,n,i,s,t);case 15:return Gc(e,n,n.type,n.pendingProps,t);case 17:return i=n.type,s=n.pendingProps,s=n.elementType===i?s:Rn(i,s),gi(e,n),n.tag=1,on(i)?(e=!0,Jo(n)):e=!1,sr(n,t),qc(n,i,s),Rl(n,i,s,t),zl(null,n,i,!0,e,t);case 19:return id(e,n,t);case 22:return Jc(e,n,t)}throw Error(a(156,n.tag))};function _d(e,n){return su(e,n)}function cm(e,n,t,i){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(e,n,t,i){return new cm(e,n,t,i)}function Jl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dm(e){if(typeof e=="function")return Jl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yn)return 11;if(e===De)return 14}return 2}function xt(e,n){var t=e.alternate;return t===null?(t=En(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Oi(e,n,t,i,s,u){var m=2;if(i=e,typeof e=="function")Jl(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case oe:return jt(t.children,s,u,n);case ce:m=8,s|=8;break;case ae:return e=En(12,t,n,s|2),e.elementType=ae,e.lanes=u,e;case Xe:return e=En(13,t,n,s),e.elementType=Xe,e.lanes=u,e;case Ie:return e=En(19,t,n,s),e.elementType=Ie,e.lanes=u,e;case be:return Ri(t,s,u,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ne:m=10;break e;case Te:m=9;break e;case yn:m=11;break e;case De:m=14;break e;case We:m=16,i=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return n=En(m,t,n,s),n.elementType=e,n.type=i,n.lanes=u,n}function jt(e,n,t,i){return e=En(7,e,i,n),e.lanes=t,e}function Ri(e,n,t,i){return e=En(22,e,i,n),e.elementType=be,e.lanes=t,e.stateNode={isHidden:!1},e}function Zl(e,n,t){return e=En(6,e,null,n),e.lanes=t,e}function es(e,n,t){return n=En(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function fm(e,n,t,i,s){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oa(0),this.expirationTimes=Oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oa(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function ns(e,n,t,i,s,u,m,x,E){return e=new fm(e,n,t,x,E),n===1?(n=1,u===!0&&(n|=8)):n=0,u=En(3,null,null,n),e.current=u,u.stateNode=e,u.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},hl(u),e}function pm(e,n,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:re,key:i==null?null:""+i,children:e,containerInfo:n,implementation:t}}function Nd(e){if(!e)return dt;e=e._reactInternals;e:{if(Pt(e)!==e||e.tag!==1)throw Error(a(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(on(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(a(171))}if(e.tag===1){var t=e.type;if(on(t))return oc(e,t,n)}return n}function Td(e,n,t,i,s,u,m,x,E){return e=ns(t,i,!0,e,s,u,m,x,E),e.context=Nd(null),t=e.current,i=tn(),s=yt(t),u=Yn(i,s),u.callback=n??null,ht(t,u,s),e.current.lanes=s,Or(e,s,i),sn(e,i),e}function _i(e,n,t,i){var s=n.current,u=tn(),m=yt(s);return t=Nd(t),n.context===null?n.context=t:n.pendingContext=t,n=Yn(u,m),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=ht(s,n,m),e!==null&&(Tn(e,s,m,u),ai(e,s,m)),m}function Ni(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ts(e,n){zd(e,n),(e=e.alternate)&&zd(e,n)}function hm(){return null}var Ld=typeof reportError=="function"?reportError:function(e){console.error(e)};function rs(e){this._internalRoot=e}Ti.prototype.render=rs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));_i(e,n,null,null)},Ti.prototype.unmount=rs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;At(function(){_i(null,e,null,null)}),n[Vn]=null}};function Ti(e){this._internalRoot=e}Ti.prototype.unstable_scheduleHydration=function(e){if(e){var n=gu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<at.length&&n!==0&&n<at[t].priority;t++);at.splice(t,0,e),t===0&&bu(e)}};function os(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ad(){}function mm(e,n,t,i,s){if(s){if(typeof i=="function"){var u=i;i=function(){var N=Ni(m);u.call(N)}}var m=Td(n,i,e,0,null,!1,!1,"",Ad);return e._reactRootContainer=m,e[Vn]=m.current,Br(e.nodeType===8?e.parentNode:e),At(),m}for(;s=e.lastChild;)e.removeChild(s);if(typeof i=="function"){var x=i;i=function(){var N=Ni(E);x.call(N)}}var E=ns(e,0,!1,null,null,!1,!1,"",Ad);return e._reactRootContainer=E,e[Vn]=E.current,Br(e.nodeType===8?e.parentNode:e),At(function(){_i(n,E,t,i)}),E}function Li(e,n,t,i,s){var u=t._reactRootContainer;if(u){var m=u;if(typeof s=="function"){var x=s;s=function(){var E=Ni(m);x.call(E)}}_i(n,m,e,s)}else m=mm(t,n,e,s,i);return Ni(m)}hu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Cr(n.pendingLanes);t!==0&&(Ra(n,t|1),sn(n,Ae()),!(pe&6)&&(pr=Ae()+500,ft()))}break;case 13:At(function(){var i=Xn(e,1);if(i!==null){var s=tn();Tn(i,e,1,s)}}),ts(e,1)}},_a=function(e){if(e.tag===13){var n=Xn(e,134217728);if(n!==null){var t=tn();Tn(n,e,134217728,t)}ts(e,134217728)}},mu=function(e){if(e.tag===13){var n=yt(e),t=Xn(e,n);if(t!==null){var i=tn();Tn(t,e,n,i)}ts(e,n)}},gu=function(){return ye},vu=function(e,n){var t=ye;try{return ye=e,n()}finally{ye=t}},wa=function(e,n,t){switch(n){case"input":if(pa(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var i=t[n];if(i!==e&&i.form===e.form){var s=Yo(i);if(!s)throw Error(a(90));Bs(i),pa(i,s)}}}break;case"textarea":Ws(e,t);break;case"select":n=t.value,n!=null&&$t(e,!!t.multiple,n,!1)}},nu=Xl,tu=At;var gm={usingClientEntryPoint:!1,Events:[$r,er,Yo,Zs,eu,Xl]},oo={findFiberByHostInstance:Ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vm={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:H.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=au(e),e===null?null:e.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||hm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ai.isDisabled&&Ai.supportsFiber)try{To=Ai.inject(vm),Dn=Ai}catch{}}return un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gm,un.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!os(n))throw Error(a(200));return pm(e,n,null,t)},un.createRoot=function(e,n){if(!os(e))throw Error(a(299));var t=!1,i="",s=Ld;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=ns(e,1,!1,null,null,t,!1,i,s),e[Vn]=n.current,Br(e.nodeType===8?e.parentNode:e),new rs(n)},un.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=au(n),e=e===null?null:e.stateNode,e},un.flushSync=function(e){return At(e)},un.hydrate=function(e,n,t){if(!zi(n))throw Error(a(200));return Li(null,e,n,!0,t)},un.hydrateRoot=function(e,n,t){if(!os(e))throw Error(a(405));var i=t!=null&&t.hydratedSources||null,s=!1,u="",m=Ld;if(t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(u=t.identifierPrefix),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),n=Td(n,null,e,1,t??null,s,!1,u,m),e[Vn]=n.current,Br(e),i)for(e=0;e<i.length;e++)t=i[e],s=t._getVersion,s=s(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,s]:n.mutableSourceEagerHydrationData.push(t,s);return new Ti(n)},un.render=function(e,n,t){if(!zi(n))throw Error(a(200));return Li(null,e,n,!1,t)},un.unmountComponentAtNode=function(e){if(!zi(e))throw Error(a(40));return e._reactRootContainer?(At(function(){Li(null,null,e,!1,function(){e._reactRootContainer=null,e[Vn]=null})}),!0):!1},un.unstable_batchedUpdates=Xl,un.unstable_renderSubtreeIntoContainer=function(e,n,t,i){if(!zi(t))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return Li(e,n,t,!1,i)},un.version="18.3.1-next-f1338f8080-20240426",un}var qd;function Rm(){if(qd)return ls.exports;qd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),ls.exports=Om(),ls.exports}var Hd;function _m(){if(Hd)return Mi;Hd=1;var r=Rm();return Mi.createRoot=r.createRoot,Mi.hydrateRoot=r.hydrateRoot,Mi}var Nm=_m(),lo={},$d;function Tm(){if($d)return lo;$d=1,Object.defineProperty(lo,"__esModule",{value:!0}),lo.parse=h,lo.serialize=f;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,o=/^[\u0021-\u003A\u003C-\u007E]*$/,a=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,l=/^[\u0020-\u003A\u003D-\u007E]*$/,c=Object.prototype.toString,d=(()=>{const k=function(){};return k.prototype=Object.create(null),k})();function h(k,C){const y=new d,w=k.length;if(w<2)return y;const S=(C==null?void 0:C.decode)||g;let T=0;do{const A=k.indexOf("=",T);if(A===-1)break;const D=k.indexOf(";",T),H=D===-1?w:D;if(A>H){T=k.lastIndexOf(";",A-1)+1;continue}const K=v(k,T,A),re=p(k,A,K),oe=k.slice(K,re);if(y[oe]===void 0){let ce=v(k,A+1,H),ae=p(k,H,ce);const Ne=S(k.slice(ce,ae));y[oe]=Ne}T=H+1}while(T<w);return y}function v(k,C,y){do{const w=k.charCodeAt(C);if(w!==32&&w!==9)return C}while(++C<y);return y}function p(k,C,y){for(;C>y;){const w=k.charCodeAt(--C);if(w!==32&&w!==9)return C+1}return y}function f(k,C,y){const w=(y==null?void 0:y.encode)||encodeURIComponent;if(!r.test(k))throw new TypeError(`argument name is invalid: ${k}`);const S=w(C);if(!o.test(S))throw new TypeError(`argument val is invalid: ${C}`);let T=k+"="+S;if(!y)return T;if(y.maxAge!==void 0){if(!Number.isInteger(y.maxAge))throw new TypeError(`option maxAge is invalid: ${y.maxAge}`);T+="; Max-Age="+y.maxAge}if(y.domain){if(!a.test(y.domain))throw new TypeError(`option domain is invalid: ${y.domain}`);T+="; Domain="+y.domain}if(y.path){if(!l.test(y.path))throw new TypeError(`option path is invalid: ${y.path}`);T+="; Path="+y.path}if(y.expires){if(!b(y.expires)||!Number.isFinite(y.expires.valueOf()))throw new TypeError(`option expires is invalid: ${y.expires}`);T+="; Expires="+y.expires.toUTCString()}if(y.httpOnly&&(T+="; HttpOnly"),y.secure&&(T+="; Secure"),y.partitioned&&(T+="; Partitioned"),y.priority)switch(typeof y.priority=="string"?y.priority.toLowerCase():void 0){case"low":T+="; Priority=Low";break;case"medium":T+="; Priority=Medium";break;case"high":T+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${y.priority}`)}if(y.sameSite)switch(typeof y.sameSite=="string"?y.sameSite.toLowerCase():y.sameSite){case!0:case"strict":T+="; SameSite=Strict";break;case"lax":T+="; SameSite=Lax";break;case"none":T+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${y.sameSite}`)}return T}function g(k){if(k.indexOf("%")===-1)return k;try{return decodeURIComponent(k)}catch{return k}}function b(k){return c.call(k)==="[object Date]"}return lo}Tm();/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Vd="popstate";function zm(r={}){function o(c,d){let{pathname:h="/",search:v="",hash:p=""}=qt(c.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),vs("",{pathname:h,search:v,hash:p},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function a(c,d){let h=c.document.querySelector("base"),v="";if(h&&h.getAttribute("href")){let p=c.location.href,f=p.indexOf("#");v=f===-1?p:p.slice(0,f)}return v+"#"+(typeof d=="string"?d:po(d))}function l(c,d){An(c.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(d)})`)}return Am(o,a,l,r)}function _e(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}function An(r,o){if(!r){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Lm(){return Math.random().toString(36).substring(2,10)}function Wd(r,o){return{usr:r.state,key:r.key,idx:o}}function vs(r,o,a=null,l){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof o=="string"?qt(o):o,state:a,key:o&&o.key||l||Lm()}}function po({pathname:r="/",search:o="",hash:a=""}){return o&&o!=="?"&&(r+=o.charAt(0)==="?"?o:"?"+o),a&&a!=="#"&&(r+=a.charAt(0)==="#"?a:"#"+a),r}function qt(r){let o={};if(r){let a=r.indexOf("#");a>=0&&(o.hash=r.substring(a),r=r.substring(0,a));let l=r.indexOf("?");l>=0&&(o.search=r.substring(l),r=r.substring(0,l)),r&&(o.pathname=r)}return o}function Am(r,o,a,l={}){let{window:c=document.defaultView,v5Compat:d=!1}=l,h=c.history,v="POP",p=null,f=g();f==null&&(f=0,h.replaceState({...h.state,idx:f},""));function g(){return(h.state||{idx:null}).idx}function b(){v="POP";let S=g(),T=S==null?null:S-f;f=S,p&&p({action:v,location:w.location,delta:T})}function k(S,T){v="PUSH";let A=vs(w.location,S,T);a&&a(A,S),f=g()+1;let D=Wd(A,f),H=w.createHref(A);try{h.pushState(D,"",H)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;c.location.assign(H)}d&&p&&p({action:v,location:w.location,delta:1})}function C(S,T){v="REPLACE";let A=vs(w.location,S,T);a&&a(A,S),f=g();let D=Wd(A,f),H=w.createHref(A);h.replaceState(D,"",H),d&&p&&p({action:v,location:w.location,delta:0})}function y(S){let T=c.location.origin!=="null"?c.location.origin:c.location.href,A=typeof S=="string"?S:po(S);return A=A.replace(/ $/,"%20"),_e(T,`No window.location.(origin|href) available to create URL for href: ${A}`),new URL(A,T)}let w={get action(){return v},get location(){return r(c,h)},listen(S){if(p)throw new Error("A history only accepts one active listener");return c.addEventListener(Vd,b),p=S,()=>{c.removeEventListener(Vd,b),p=null}},createHref(S){return o(c,S)},createURL:y,encodeLocation(S){let T=y(S);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:k,replace:C,go(S){return h.go(S)}};return w}function wf(r,o,a="/"){return Mm(r,o,a,!1)}function Mm(r,o,a,l){let c=typeof o=="string"?qt(o):o,d=Et(c.pathname||"/",a);if(d==null)return null;let h=kf(r);Dm(h);let v=null;for(let p=0;v==null&&p<h.length;++p){let f=Qm(d);v=Vm(h[p],f,l)}return v}function kf(r,o=[],a=[],l=""){let c=(d,h,v)=>{let p={relativePath:v===void 0?d.path||"":v,caseSensitive:d.caseSensitive===!0,childrenIndex:h,route:d};p.relativePath.startsWith("/")&&(_e(p.relativePath.startsWith(l),`Absolute route path "${p.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(l.length));let f=tt([l,p.relativePath]),g=a.concat(p);d.children&&d.children.length>0&&(_e(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),kf(d.children,o,g,f)),!(d.path==null&&!d.index)&&o.push({path:f,score:Hm(f,d.index),routesMeta:g})};return r.forEach((d,h)=>{var v;if(d.path===""||!((v=d.path)!=null&&v.includes("?")))c(d,h);else for(let p of Sf(d.path))c(d,h,p)}),o}function Sf(r){let o=r.split("/");if(o.length===0)return[];let[a,...l]=o,c=a.endsWith("?"),d=a.replace(/\?$/,"");if(l.length===0)return c?[d,""]:[d];let h=Sf(l.join("/")),v=[];return v.push(...h.map(p=>p===""?d:[d,p].join("/"))),c&&v.push(...h),v.map(p=>r.startsWith("/")&&p===""?"/":p)}function Dm(r){r.sort((o,a)=>o.score!==a.score?a.score-o.score:$m(o.routesMeta.map(l=>l.childrenIndex),a.routesMeta.map(l=>l.childrenIndex)))}var jm=/^:[\w-]+$/,Fm=3,Im=2,Um=1,Bm=10,qm=-2,Qd=r=>r==="*";function Hm(r,o){let a=r.split("/"),l=a.length;return a.some(Qd)&&(l+=qm),o&&(l+=Im),a.filter(c=>!Qd(c)).reduce((c,d)=>c+(jm.test(d)?Fm:d===""?Um:Bm),l)}function $m(r,o){return r.length===o.length&&r.slice(0,-1).every((l,c)=>l===o[c])?r[r.length-1]-o[o.length-1]:0}function Vm(r,o,a=!1){let{routesMeta:l}=r,c={},d="/",h=[];for(let v=0;v<l.length;++v){let p=l[v],f=v===l.length-1,g=d==="/"?o:o.slice(d.length)||"/",b=Xi({path:p.relativePath,caseSensitive:p.caseSensitive,end:f},g),k=p.route;if(!b&&f&&a&&!l[l.length-1].route.index&&(b=Xi({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!b)return null;Object.assign(c,b.params),h.push({params:c,pathname:tt([d,b.pathname]),pathnameBase:Gm(tt([d,b.pathnameBase])),route:k}),b.pathnameBase!=="/"&&(d=tt([d,b.pathnameBase]))}return h}function Xi(r,o){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[a,l]=Wm(r.path,r.caseSensitive,r.end),c=o.match(a);if(!c)return null;let d=c[0],h=d.replace(/(.)\/+$/,"$1"),v=c.slice(1);return{params:l.reduce((f,{paramName:g,isOptional:b},k)=>{if(g==="*"){let y=v[k]||"";h=d.slice(0,d.length-y.length).replace(/(.)\/+$/,"$1")}const C=v[k];return b&&!C?f[g]=void 0:f[g]=(C||"").replace(/%2F/g,"/"),f},{}),pathname:d,pathnameBase:h,pattern:r}}function Wm(r,o=!1,a=!0){An(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let l=[],c="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,v,p)=>(l.push({paramName:v,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(l.push({paramName:"*"}),c+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?c+="\\/*$":r!==""&&r!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,o?void 0:"i"),l]}function Qm(r){try{return r.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return An(!1,`The URL path "${r}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),r}}function Et(r,o){if(o==="/")return r;if(!r.toLowerCase().startsWith(o.toLowerCase()))return null;let a=o.endsWith("/")?o.length-1:o.length,l=r.charAt(a);return l&&l!=="/"?null:r.slice(a)||"/"}function Km(r,o="/"){let{pathname:a,search:l="",hash:c=""}=typeof r=="string"?qt(r):r;return{pathname:a?a.startsWith("/")?a:Xm(a,o):o,search:Jm(l),hash:Zm(c)}}function Xm(r,o){let a=o.replace(/\/+$/,"").split("/");return r.split("/").forEach(c=>{c===".."?a.length>1&&a.pop():c!=="."&&a.push(c)}),a.length>1?a.join("/"):"/"}function cs(r,o,a,l){return`Cannot include a '${r}' character in a manually specified \`to.${o}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ym(r){return r.filter((o,a)=>a===0||o.route.path&&o.route.path.length>0)}function Ef(r){let o=Ym(r);return o.map((a,l)=>l===o.length-1?a.pathname:a.pathnameBase)}function Pf(r,o,a,l=!1){let c;typeof r=="string"?c=qt(r):(c={...r},_e(!c.pathname||!c.pathname.includes("?"),cs("?","pathname","search",c)),_e(!c.pathname||!c.pathname.includes("#"),cs("#","pathname","hash",c)),_e(!c.search||!c.search.includes("#"),cs("#","search","hash",c)));let d=r===""||c.pathname==="",h=d?"/":c.pathname,v;if(h==null)v=a;else{let b=o.length-1;if(!l&&h.startsWith("..")){let k=h.split("/");for(;k[0]==="..";)k.shift(),b-=1;c.pathname=k.join("/")}v=b>=0?o[b]:"/"}let p=Km(c,v),f=h&&h!=="/"&&h.endsWith("/"),g=(d||h===".")&&a.endsWith("/");return!p.pathname.endsWith("/")&&(f||g)&&(p.pathname+="/"),p}var tt=r=>r.join("/").replace(/\/\/+/g,"/"),Gm=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Jm=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Zm=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function e0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Cf=["POST","PUT","PATCH","DELETE"];new Set(Cf);var n0=["GET",...Cf];new Set(n0);var vr=M.createContext(null);vr.displayName="DataRouter";var ta=M.createContext(null);ta.displayName="DataRouterState";var Of=M.createContext({isTransitioning:!1});Of.displayName="ViewTransition";var t0=M.createContext(new Map);t0.displayName="Fetchers";var r0=M.createContext(null);r0.displayName="Await";var Hn=M.createContext(null);Hn.displayName="Navigation";var mo=M.createContext(null);mo.displayName="Location";var $n=M.createContext({outlet:null,matches:[],isDataRoute:!1});$n.displayName="Route";var _s=M.createContext(null);_s.displayName="RouteError";function o0(r,{relative:o}={}){_e(go(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:l}=M.useContext(Hn),{hash:c,pathname:d,search:h}=vo(r,{relative:o}),v=d;return a!=="/"&&(v=d==="/"?a:tt([a,d])),l.createHref({pathname:v,search:h,hash:c})}function go(){return M.useContext(mo)!=null}function Ht(){return _e(go(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(mo).location}var Rf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function _f(r){M.useContext(Hn).static||M.useLayoutEffect(r)}function ra(){let{isDataRoute:r}=M.useContext($n);return r?b0():i0()}function i0(){_e(go(),"useNavigate() may be used only in the context of a <Router> component.");let r=M.useContext(vr),{basename:o,navigator:a}=M.useContext(Hn),{matches:l}=M.useContext($n),{pathname:c}=Ht(),d=JSON.stringify(Ef(l)),h=M.useRef(!1);return _f(()=>{h.current=!0}),M.useCallback((p,f={})=>{if(An(h.current,Rf),!h.current)return;if(typeof p=="number"){a.go(p);return}let g=Pf(p,JSON.parse(d),c,f.relative==="path");r==null&&o!=="/"&&(g.pathname=g.pathname==="/"?o:tt([o,g.pathname])),(f.replace?a.replace:a.push)(g,f.state,f)},[o,a,d,c,r])}var a0=M.createContext(null);function l0(r){let o=M.useContext($n).outlet;return o&&M.createElement(a0.Provider,{value:r},o)}function vo(r,{relative:o}={}){let{matches:a}=M.useContext($n),{pathname:l}=Ht(),c=JSON.stringify(Ef(a));return M.useMemo(()=>Pf(r,JSON.parse(c),l,o==="path"),[r,c,l,o])}function s0(r,o){return Nf(r,o)}function Nf(r,o,a,l){var T;_e(go(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=M.useContext(Hn),{matches:d}=M.useContext($n),h=d[d.length-1],v=h?h.params:{},p=h?h.pathname:"/",f=h?h.pathnameBase:"/",g=h&&h.route;{let A=g&&g.path||"";Tf(p,!g||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let b=Ht(),k;if(o){let A=typeof o=="string"?qt(o):o;_e(f==="/"||((T=A.pathname)==null?void 0:T.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${A.pathname}" was given in the \`location\` prop.`),k=A}else k=b;let C=k.pathname||"/",y=C;if(f!=="/"){let A=f.replace(/^\//,"").split("/");y="/"+C.replace(/^\//,"").split("/").slice(A.length).join("/")}let w=wf(r,{pathname:y});An(g||w!=null,`No routes matched location "${k.pathname}${k.search}${k.hash}" `),An(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${k.pathname}${k.search}${k.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=p0(w&&w.map(A=>Object.assign({},A,{params:Object.assign({},v,A.params),pathname:tt([f,c.encodeLocation?c.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?f:tt([f,c.encodeLocation?c.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),d,a,l);return o&&S?M.createElement(mo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...k},navigationType:"POP"}},S):S}function u0(){let r=y0(),o=e0(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),a=r instanceof Error?r.stack:null,l="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:l},d={padding:"2px 4px",backgroundColor:l},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:d},"ErrorBoundary")," or"," ",M.createElement("code",{style:d},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},o),a?M.createElement("pre",{style:c},a):null,h)}var c0=M.createElement(u0,null),d0=class extends M.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,o){return o.location!==r.location||o.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:o.error,location:o.location,revalidation:r.revalidation||o.revalidation}}componentDidCatch(r,o){console.error("React Router caught the following error during render",r,o)}render(){return this.state.error!==void 0?M.createElement($n.Provider,{value:this.props.routeContext},M.createElement(_s.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function f0({routeContext:r,match:o,children:a}){let l=M.useContext(vr);return l&&l.static&&l.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=o.route.id),M.createElement($n.Provider,{value:r},a)}function p0(r,o=[],a=null,l=null){if(r==null){if(!a)return null;if(a.errors)r=a.matches;else if(o.length===0&&!a.initialized&&a.matches.length>0)r=a.matches;else return null}let c=r,d=a==null?void 0:a.errors;if(d!=null){let p=c.findIndex(f=>f.route.id&&(d==null?void 0:d[f.route.id])!==void 0);_e(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),c=c.slice(0,Math.min(c.length,p+1))}let h=!1,v=-1;if(a)for(let p=0;p<c.length;p++){let f=c[p];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(v=p),f.route.id){let{loaderData:g,errors:b}=a,k=f.route.loader&&!g.hasOwnProperty(f.route.id)&&(!b||b[f.route.id]===void 0);if(f.route.lazy||k){h=!0,v>=0?c=c.slice(0,v+1):c=[c[0]];break}}}return c.reduceRight((p,f,g)=>{let b,k=!1,C=null,y=null;a&&(b=d&&f.route.id?d[f.route.id]:void 0,C=f.route.errorElement||c0,h&&(v<0&&g===0?(Tf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,y=null):v===g&&(k=!0,y=f.route.hydrateFallbackElement||null)));let w=o.concat(c.slice(0,g+1)),S=()=>{let T;return b?T=C:k?T=y:f.route.Component?T=M.createElement(f.route.Component,null):f.route.element?T=f.route.element:T=p,M.createElement(f0,{match:f,routeContext:{outlet:p,matches:w,isDataRoute:a!=null},children:T})};return a&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?M.createElement(d0,{location:a.location,revalidation:a.revalidation,component:C,error:b,children:S(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):S()},null)}function Ns(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function h0(r){let o=M.useContext(vr);return _e(o,Ns(r)),o}function m0(r){let o=M.useContext(ta);return _e(o,Ns(r)),o}function g0(r){let o=M.useContext($n);return _e(o,Ns(r)),o}function Ts(r){let o=g0(r),a=o.matches[o.matches.length-1];return _e(a.route.id,`${r} can only be used on routes that contain a unique "id"`),a.route.id}function v0(){return Ts("useRouteId")}function y0(){var l;let r=M.useContext(_s),o=m0("useRouteError"),a=Ts("useRouteError");return r!==void 0?r:(l=o.errors)==null?void 0:l[a]}function b0(){let{router:r}=h0("useNavigate"),o=Ts("useNavigate"),a=M.useRef(!1);return _f(()=>{a.current=!0}),M.useCallback(async(c,d={})=>{An(a.current,Rf),a.current&&(typeof c=="number"?r.navigate(c):await r.navigate(c,{fromRouteId:o,...d}))},[r,o])}var Kd={};function Tf(r,o,a){!o&&!Kd[r]&&(Kd[r]=!0,An(!1,a))}M.memo(x0);function x0({routes:r,future:o,state:a}){return Nf(r,void 0,a,o)}function w0(r){return l0(r.context)}function et(r){_e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function k0({basename:r="/",children:o=null,location:a,navigationType:l="POP",navigator:c,static:d=!1}){_e(!go(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),v=M.useMemo(()=>({basename:h,navigator:c,static:d,future:{}}),[h,c,d]);typeof a=="string"&&(a=qt(a));let{pathname:p="/",search:f="",hash:g="",state:b=null,key:k="default"}=a,C=M.useMemo(()=>{let y=Et(p,h);return y==null?null:{location:{pathname:y,search:f,hash:g,state:b,key:k},navigationType:l}},[h,p,f,g,b,k,l]);return An(C!=null,`<Router basename="${h}"> is not able to match the URL "${p}${f}${g}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:M.createElement(Hn.Provider,{value:v},M.createElement(mo.Provider,{children:o,value:C}))}function S0({children:r,location:o}){return s0(ys(r),o)}function ys(r,o=[]){let a=[];return M.Children.forEach(r,(l,c)=>{if(!M.isValidElement(l))return;let d=[...o,c];if(l.type===M.Fragment){a.push.apply(a,ys(l.props.children,d));return}_e(l.type===et,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_e(!l.props.index||!l.props.children,"An index route cannot have child routes.");let h={id:l.props.id||d.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(h.children=ys(l.props.children,d)),a.push(h)}),a}var $i="get",Vi="application/x-www-form-urlencoded";function oa(r){return r!=null&&typeof r.tagName=="string"}function E0(r){return oa(r)&&r.tagName.toLowerCase()==="button"}function P0(r){return oa(r)&&r.tagName.toLowerCase()==="form"}function C0(r){return oa(r)&&r.tagName.toLowerCase()==="input"}function O0(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function R0(r,o){return r.button===0&&(!o||o==="_self")&&!O0(r)}var Di=null;function _0(){if(Di===null)try{new FormData(document.createElement("form"),0),Di=!1}catch{Di=!0}return Di}var N0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ds(r){return r!=null&&!N0.has(r)?(An(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vi}"`),null):r}function T0(r,o){let a,l,c,d,h;if(P0(r)){let v=r.getAttribute("action");l=v?Et(v,o):null,a=r.getAttribute("method")||$i,c=ds(r.getAttribute("enctype"))||Vi,d=new FormData(r)}else if(E0(r)||C0(r)&&(r.type==="submit"||r.type==="image")){let v=r.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||v.getAttribute("action");if(l=p?Et(p,o):null,a=r.getAttribute("formmethod")||v.getAttribute("method")||$i,c=ds(r.getAttribute("formenctype"))||ds(v.getAttribute("enctype"))||Vi,d=new FormData(v,r),!_0()){let{name:f,type:g,value:b}=r;if(g==="image"){let k=f?`${f}.`:"";d.append(`${k}x`,"0"),d.append(`${k}y`,"0")}else f&&d.append(f,b)}}else{if(oa(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=$i,l=null,c=Vi,h=r}return d&&c==="text/plain"&&(h=d,d=void 0),{action:l,method:a.toLowerCase(),encType:c,formData:d,body:h}}function zs(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}async function z0(r,o){if(r.id in o)return o[r.id];try{let a=await import(r.module);return o[r.id]=a,a}catch(a){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function L0(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function A0(r,o,a){let l=await Promise.all(r.map(async c=>{let d=o.routes[c.route.id];if(d){let h=await z0(d,a);return h.links?h.links():[]}return[]}));return F0(l.flat(1).filter(L0).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Xd(r,o,a,l,c,d){let h=(p,f)=>a[f]?p.route.id!==a[f].route.id:!0,v=(p,f)=>{var g;return a[f].pathname!==p.pathname||((g=a[f].route.path)==null?void 0:g.endsWith("*"))&&a[f].params["*"]!==p.params["*"]};return d==="assets"?o.filter((p,f)=>h(p,f)||v(p,f)):d==="data"?o.filter((p,f)=>{var b;let g=l.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(h(p,f)||v(p,f))return!0;if(p.route.shouldRevalidate){let k=p.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((b=a[0])==null?void 0:b.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof k=="boolean")return k}return!0}):[]}function M0(r,o){return D0(r.map(a=>{let l=o.routes[a.route.id];if(!l)return[];let c=[l.module];return l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function D0(r){return[...new Set(r)]}function j0(r){let o={},a=Object.keys(r).sort();for(let l of a)o[l]=r[l];return o}function F0(r,o){let a=new Set;return new Set(o),r.reduce((l,c)=>{let d=JSON.stringify(j0(c));return a.has(d)||(a.add(d),l.push({key:d,link:c})),l},[])}function I0(r){let o=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return o.pathname==="/"?o.pathname="_root.data":o.pathname=`${o.pathname.replace(/\/$/,"")}.data`,o}function U0(){let r=M.useContext(vr);return zs(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function B0(){let r=M.useContext(ta);return zs(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Ls=M.createContext(void 0);Ls.displayName="FrameworkContext";function zf(){let r=M.useContext(Ls);return zs(r,"You must render this element inside a <HydratedRouter> element"),r}function q0(r,o){let a=M.useContext(Ls),[l,c]=M.useState(!1),[d,h]=M.useState(!1),{onFocus:v,onBlur:p,onMouseEnter:f,onMouseLeave:g,onTouchStart:b}=o,k=M.useRef(null);M.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let w=T=>{T.forEach(A=>{h(A.isIntersecting)})},S=new IntersectionObserver(w,{threshold:.5});return k.current&&S.observe(k.current),()=>{S.disconnect()}}},[r]),M.useEffect(()=>{if(l){let w=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(w)}}},[l]);let C=()=>{c(!0)},y=()=>{c(!1),h(!1)};return a?r!=="intent"?[d,k,{}]:[d,k,{onFocus:so(v,C),onBlur:so(p,y),onMouseEnter:so(f,C),onMouseLeave:so(g,y),onTouchStart:so(b,C)}]:[!1,k,{}]}function so(r,o){return a=>{r&&r(a),a.defaultPrevented||o(a)}}function H0({page:r,...o}){let{router:a}=U0(),l=M.useMemo(()=>wf(a.routes,r,a.basename),[a.routes,r,a.basename]);return l?M.createElement(V0,{page:r,matches:l,...o}):(console.warn(`Tried to prefetch ${r} but no routes matched.`),null)}function $0(r){let{manifest:o,routeModules:a}=zf(),[l,c]=M.useState([]);return M.useEffect(()=>{let d=!1;return A0(r,o,a).then(h=>{d||c(h)}),()=>{d=!0}},[r,o,a]),l}function V0({page:r,matches:o,...a}){let l=Ht(),{manifest:c,routeModules:d}=zf(),{loaderData:h,matches:v}=B0(),p=M.useMemo(()=>Xd(r,o,v,c,l,"data"),[r,o,v,c,l]),f=M.useMemo(()=>Xd(r,o,v,c,l,"assets"),[r,o,v,c,l]),g=M.useMemo(()=>{if(r===l.pathname+l.search+l.hash)return[];let C=new Set,y=!1;if(o.forEach(S=>{var A;let T=c.routes[S.route.id];!T||!T.hasLoader||(!p.some(D=>D.route.id===S.route.id)&&S.route.id in h&&((A=d[S.route.id])!=null&&A.shouldRevalidate)||T.hasClientLoader?y=!0:C.add(S.route.id))}),C.size===0)return[];let w=I0(r);return y&&C.size>0&&w.searchParams.set("_routes",o.filter(S=>C.has(S.route.id)).map(S=>S.route.id).join(",")),[w.pathname+w.search]},[h,l,c,p,o,r,d]),b=M.useMemo(()=>M0(f,c),[f,c]),k=$0(f);return M.createElement(M.Fragment,null,g.map(C=>M.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...a})),b.map(C=>M.createElement("link",{key:C,rel:"modulepreload",href:C,...a})),k.map(({key:C,link:y})=>M.createElement("link",{key:C,...y})))}function W0(...r){return o=>{r.forEach(a=>{typeof a=="function"?a(o):a!=null&&(a.current=o)})}}var Lf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Lf&&(window.__reactRouterVersion="7.0.2")}catch{}function Q0({basename:r,children:o,window:a}){let l=M.useRef();l.current==null&&(l.current=zm({window:a,v5Compat:!0}));let c=l.current,[d,h]=M.useState({action:c.action,location:c.location}),v=M.useCallback(p=>{M.startTransition(()=>h(p))},[h]);return M.useLayoutEffect(()=>c.listen(v),[c,v]),M.createElement(k0,{basename:r,children:o,location:d.location,navigationType:d.action,navigator:c})}var Af=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,As=M.forwardRef(function({onClick:o,discover:a="render",prefetch:l="none",relative:c,reloadDocument:d,replace:h,state:v,target:p,to:f,preventScrollReset:g,viewTransition:b,...k},C){let{basename:y}=M.useContext(Hn),w=typeof f=="string"&&Af.test(f),S,T=!1;if(typeof f=="string"&&w&&(S=f,Lf))try{let ae=new URL(window.location.href),Ne=f.startsWith("//")?new URL(ae.protocol+f):new URL(f),Te=Et(Ne.pathname,y);Ne.origin===ae.origin&&Te!=null?f=Te+Ne.search+Ne.hash:T=!0}catch{An(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let A=o0(f,{relative:c}),[D,H,K]=q0(l,k),re=G0(f,{replace:h,state:v,target:p,preventScrollReset:g,relative:c,viewTransition:b});function oe(ae){o&&o(ae),ae.defaultPrevented||re(ae)}let ce=M.createElement("a",{...k,...K,href:S||A,onClick:T||d?o:oe,ref:W0(C,H),target:p,"data-discover":!w&&a==="render"?"true":void 0});return D&&!w?M.createElement(M.Fragment,null,ce,M.createElement(H0,{page:A})):ce});As.displayName="Link";var K0=M.forwardRef(function({"aria-current":o="page",caseSensitive:a=!1,className:l="",end:c=!1,style:d,to:h,viewTransition:v,children:p,...f},g){let b=vo(h,{relative:f.relative}),k=Ht(),C=M.useContext(ta),{navigator:y,basename:w}=M.useContext(Hn),S=C!=null&&tg(b)&&v===!0,T=y.encodeLocation?y.encodeLocation(b).pathname:b.pathname,A=k.pathname,D=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;a||(A=A.toLowerCase(),D=D?D.toLowerCase():null,T=T.toLowerCase()),D&&w&&(D=Et(D,w)||D);const H=T!=="/"&&T.endsWith("/")?T.length-1:T.length;let K=A===T||!c&&A.startsWith(T)&&A.charAt(H)==="/",re=D!=null&&(D===T||!c&&D.startsWith(T)&&D.charAt(T.length)==="/"),oe={isActive:K,isPending:re,isTransitioning:S},ce=K?o:void 0,ae;typeof l=="function"?ae=l(oe):ae=[l,K?"active":null,re?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let Ne=typeof d=="function"?d(oe):d;return M.createElement(As,{...f,"aria-current":ce,className:ae,ref:g,style:Ne,to:h,viewTransition:v},typeof p=="function"?p(oe):p)});K0.displayName="NavLink";var X0=M.forwardRef(({discover:r="render",fetcherKey:o,navigate:a,reloadDocument:l,replace:c,state:d,method:h=$i,action:v,onSubmit:p,relative:f,preventScrollReset:g,viewTransition:b,...k},C)=>{let y=eg(),w=ng(v,{relative:f}),S=h.toLowerCase()==="get"?"get":"post",T=typeof v=="string"&&Af.test(v),A=D=>{if(p&&p(D),D.defaultPrevented)return;D.preventDefault();let H=D.nativeEvent.submitter,K=(H==null?void 0:H.getAttribute("formmethod"))||h;y(H||D.currentTarget,{fetcherKey:o,method:K,navigate:a,replace:c,state:d,relative:f,preventScrollReset:g,viewTransition:b})};return M.createElement("form",{ref:C,method:S,action:w,onSubmit:l?p:A,...k,"data-discover":!T&&r==="render"?"true":void 0})});X0.displayName="Form";function Y0(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mf(r){let o=M.useContext(vr);return _e(o,Y0(r)),o}function G0(r,{target:o,replace:a,state:l,preventScrollReset:c,relative:d,viewTransition:h}={}){let v=ra(),p=Ht(),f=vo(r,{relative:d});return M.useCallback(g=>{if(R0(g,o)){g.preventDefault();let b=a!==void 0?a:po(p)===po(f);v(r,{replace:b,state:l,preventScrollReset:c,relative:d,viewTransition:h})}},[p,v,f,a,l,o,r,c,d,h])}var J0=0,Z0=()=>`__${String(++J0)}__`;function eg(){let{router:r}=Mf("useSubmit"),{basename:o}=M.useContext(Hn),a=v0();return M.useCallback(async(l,c={})=>{let{action:d,method:h,encType:v,formData:p,body:f}=T0(l,o);if(c.navigate===!1){let g=c.fetcherKey||Z0();await r.fetch(g,a,c.action||d,{preventScrollReset:c.preventScrollReset,formData:p,body:f,formMethod:c.method||h,formEncType:c.encType||v,flushSync:c.flushSync})}else await r.navigate(c.action||d,{preventScrollReset:c.preventScrollReset,formData:p,body:f,formMethod:c.method||h,formEncType:c.encType||v,replace:c.replace,state:c.state,fromRouteId:a,flushSync:c.flushSync,viewTransition:c.viewTransition})},[r,o,a])}function ng(r,{relative:o}={}){let{basename:a}=M.useContext(Hn),l=M.useContext($n);_e(l,"useFormAction must be used inside a RouteContext");let[c]=l.matches.slice(-1),d={...vo(r||".",{relative:o})},h=Ht();if(r==null){d.search=h.search;let v=new URLSearchParams(d.search),p=v.getAll("index");if(p.some(g=>g==="")){v.delete("index"),p.filter(b=>b).forEach(b=>v.append("index",b));let g=v.toString();d.search=g?`?${g}`:""}}return(!r||r===".")&&c.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(d.pathname=d.pathname==="/"?a:tt([a,d.pathname])),po(d)}function tg(r,o={}){let a=M.useContext(Of);_e(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=Mf("useViewTransitionState"),c=vo(r,{relative:o.relative});if(!a.isTransitioning)return!1;let d=Et(a.currentLocation.pathname,l)||a.currentLocation.pathname,h=Et(a.nextLocation.pathname,l)||a.nextLocation.pathname;return Xi(c.pathname,h)!=null||Xi(c.pathname,d)!=null}new TextEncoder;var Df={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Yd=J.createContext&&J.createContext(Df),rg=["attr","size","title"];function og(r,o){if(r==null)return{};var a=ig(r,o),l,c;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(r);for(c=0;c<d.length;c++)l=d[c],!(o.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(r,l)&&(a[l]=r[l])}return a}function ig(r,o){if(r==null)return{};var a={};for(var l in r)if(Object.prototype.hasOwnProperty.call(r,l)){if(o.indexOf(l)>=0)continue;a[l]=r[l]}return a}function Yi(){return Yi=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(r[l]=a[l])}return r},Yi.apply(this,arguments)}function Gd(r,o){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);o&&(l=l.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),a.push.apply(a,l)}return a}function Gi(r){for(var o=1;o<arguments.length;o++){var a=arguments[o]!=null?arguments[o]:{};o%2?Gd(Object(a),!0).forEach(function(l){ag(r,l,a[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):Gd(Object(a)).forEach(function(l){Object.defineProperty(r,l,Object.getOwnPropertyDescriptor(a,l))})}return r}function ag(r,o,a){return o=lg(o),o in r?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,r}function lg(r){var o=sg(r,"string");return typeof o=="symbol"?o:o+""}function sg(r,o){if(typeof r!="object"||!r)return r;var a=r[Symbol.toPrimitive];if(a!==void 0){var l=a.call(r,o||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(r)}function jf(r){return r&&r.map((o,a)=>J.createElement(o.tag,Gi({key:a},o.attr),jf(o.child)))}function yo(r){return o=>J.createElement(ug,Yi({attr:Gi({},r.attr)},o),jf(r.child))}function ug(r){var o=a=>{var{attr:l,size:c,title:d}=r,h=og(r,rg),v=c||a.size||"1em",p;return a.className&&(p=a.className),r.className&&(p=(p?p+" ":"")+r.className),J.createElement("svg",Yi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,l,h,{className:p,style:Gi(Gi({color:r.color||a.color},a.style),r.style),height:v,width:v,xmlns:"http://www.w3.org/2000/svg"}),d&&J.createElement("title",null,d),r.children)};return Yd!==void 0?J.createElement(Yd.Consumer,null,a=>o(a)):o(Df)}function cg(r){return yo({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"},child:[]}]})(r)}function dg(r){return yo({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M452.1 49L52.3 265.3c-6 3.3-5.6 12.1.6 14.9l68.2 25.7c4 1.5 7.2 4.5 9 8.4l53 109.1c1 4.8 9.9 6.1 10 1.2l-8.1-90.2c.5-6.7 3-13 7.3-18.2l207.3-203.1c1.2-1.2 2.9-1.6 4.5-1.3 3.4.8 4.8 4.9 2.6 7.6L228 338c-4 6-6 11-7 18l-10.7 77.9c.9 6.8 6.2 9.4 10.5 3.3l38.5-45.2c2.6-3.7 7.7-4.5 11.3-1.9l99.2 72.3c4.7 3.5 11.4.9 12.6-4.9L463.8 58c1.5-6.8-5.6-12.3-11.7-9z"},child:[]}]})(r)}function fg(r){return yo({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M124 80v322c0 7.7-6.3 14-14 14s-14-6.3-14-14V112H80c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h353.1c17 0 30.9-13.8 30.9-30.9V80c0-17.7-14.3-32-32-32l-278 2c-17.7 0-30 12.3-30 30zm66 32h84c7.7 0 14 6.3 14 14s-6.3 14-14 14h-84c-7.7 0-14-6.3-14-14s6.3-14 14-14zm0 160h148c7.7 0 14 6.3 14 14s-6.3 14-14 14H190c-7.7 0-14-6.3-14-14s6.3-14 14-14zm196 108H190c-7.7 0-14-6.3-14-14s6.3-14 14-14h196c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-160H190c-7.7 0-14-6.3-14-14s6.3-14 14-14h196c7.7 0 14 6.3 14 14s-6.3 14-14 14z"},child:[]}]})(r)}function pg(r){return yo({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M447.8 438.3c-7.2-31.8-48.3-47.3-62.5-52.3-15.6-5.5-37.8-6.8-52.1-10-8.2-1.8-20.1-6.3-24.1-11.1s-1.6-49.3-1.6-49.3 7.4-11.5 11.4-21.7c4-10.1 8.4-37.9 8.4-37.9s8.2 0 11.1-14.4c3.1-15.7 8-21.8 7.4-33.5-.6-11.5-6.9-11.2-6.9-11.2s6.1-16.7 6.8-51.3c.9-41.1-31.3-81.6-89.6-81.6-59.1 0-90.6 40.5-89.7 81.6.8 34.6 6.7 51.3 6.7 51.3s-6.3-.3-6.9 11.2c-.6 11.7 4.3 17.8 7.4 33.5 2.8 14.4 11.1 14.4 11.1 14.4s4.4 27.8 8.4 37.9c4 10.2 11.4 21.7 11.4 21.7s2.4 44.5-1.6 49.3c-4 4.8-15.9 9.3-24.1 11.1-14.3 3.2-36.5 4.5-52.1 10-14.2 5-55.3 20.5-62.5 52.3-1.1 5 2.7 9.7 7.9 9.7H440c5.1 0 8.9-4.7 7.8-9.7z"},child:[]}]})(r)}const hg=[{title:"Home",path:"/home",icon:L.jsx(cg,{style:{fontSize:"25px",color:"#555"}}),cName:"nav-text"},{title:"About",path:"about",icon:L.jsx(fg,{style:{fontSize:"25px",color:"#555"}}),cName:"nav-text"},{title:"Announcement",path:"announcement",icon:L.jsx(dg,{style:{fontSize:"25px",color:"#555"}}),cName:"nav-text"}],mg=()=>(ra(),L.jsxs("div",{children:[L.jsx("h2",{children:"Menu"}),L.jsx("ul",{className:"menu-list",children:hg.map((r,o)=>L.jsx("li",{className:r.cName,children:L.jsxs(As,{to:r.path,children:[r.icon,L.jsx("span",{children:r.title})]})},o))})]})),gg=()=>L.jsxs("div",{style:{display:"flex"},children:[L.jsx("aside",{style:{width:"230px",background:"#ffe4c4",padding:"10px",height:"100vh",boxShadow:"2px 0 5px rgba(0,0,0,0.1)"},children:L.jsx(mg,{})}),L.jsxs("main",{style:{flex:1,padding:"20px"},children:[L.jsx(w0,{})," "]})]}),vg=()=>L.jsx("h2",{children:"Welcome to the Home Page"}),yg=()=>L.jsx("h2",{children:"Welcome to the about Page"});function qe(r,o){o===void 0&&(o={});var a=o.insertAt;if(r&&typeof document<"u"){var l=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",a==="top"&&l.firstChild?l.insertBefore(c,l.firstChild):l.appendChild(c),c.styleSheet?c.styleSheet.cssText=r:c.appendChild(document.createTextNode(r))}}qe(`.react-loading-indicator-normalize,
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
}`);var fe=function(){return fe=Object.assign||function(r){for(var o,a=1,l=arguments.length;a<l;a++)for(var c in o=arguments[a])Object.prototype.hasOwnProperty.call(o,c)&&(r[c]=o[c]);return r},fe.apply(this,arguments)};function Ji(r){return Ji=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Ji(r)}var bg=/^\s+/,xg=/\s+$/;function Y(r,o){if(o=o||{},(r=r||"")instanceof Y)return r;if(!(this instanceof Y))return new Y(r,o);var a=function(l){var c={r:0,g:0,b:0},d=1,h=null,v=null,p=null,f=!1,g=!1;typeof l=="string"&&(l=function(y){y=y.replace(bg,"").replace(xg,"").toLowerCase();var w,S=!1;if(bs[y])y=bs[y],S=!0;else if(y=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(w=zn.rgb.exec(y))?{r:w[1],g:w[2],b:w[3]}:(w=zn.rgba.exec(y))?{r:w[1],g:w[2],b:w[3],a:w[4]}:(w=zn.hsl.exec(y))?{h:w[1],s:w[2],l:w[3]}:(w=zn.hsla.exec(y))?{h:w[1],s:w[2],l:w[3],a:w[4]}:(w=zn.hsv.exec(y))?{h:w[1],s:w[2],v:w[3]}:(w=zn.hsva.exec(y))?{h:w[1],s:w[2],v:w[3],a:w[4]}:(w=zn.hex8.exec(y))?{r:gn(w[1]),g:gn(w[2]),b:gn(w[3]),a:rf(w[4]),format:S?"name":"hex8"}:(w=zn.hex6.exec(y))?{r:gn(w[1]),g:gn(w[2]),b:gn(w[3]),format:S?"name":"hex"}:(w=zn.hex4.exec(y))?{r:gn(w[1]+""+w[1]),g:gn(w[2]+""+w[2]),b:gn(w[3]+""+w[3]),a:rf(w[4]+""+w[4]),format:S?"name":"hex8"}:(w=zn.hex3.exec(y))?{r:gn(w[1]+""+w[1]),g:gn(w[2]+""+w[2]),b:gn(w[3]+""+w[3]),format:S?"name":"hex"}:!1}(l)),Ji(l)=="object"&&(Zn(l.r)&&Zn(l.g)&&Zn(l.b)?(b=l.r,k=l.g,C=l.b,c={r:255*Ce(b,255),g:255*Ce(k,255),b:255*Ce(C,255)},f=!0,g=String(l.r).substr(-1)==="%"?"prgb":"rgb"):Zn(l.h)&&Zn(l.s)&&Zn(l.v)?(h=fo(l.s),v=fo(l.v),c=function(y,w,S){y=6*Ce(y,360),w=Ce(w,100),S=Ce(S,100);var T=Math.floor(y),A=y-T,D=S*(1-w),H=S*(1-A*w),K=S*(1-(1-A)*w),re=T%6,oe=[S,H,D,D,K,S][re],ce=[K,S,S,H,D,D][re],ae=[D,D,K,S,S,H][re];return{r:255*oe,g:255*ce,b:255*ae}}(l.h,h,v),f=!0,g="hsv"):Zn(l.h)&&Zn(l.s)&&Zn(l.l)&&(h=fo(l.s),p=fo(l.l),c=function(y,w,S){var T,A,D;function H(oe,ce,ae){return ae<0&&(ae+=1),ae>1&&(ae-=1),ae<1/6?oe+6*(ce-oe)*ae:ae<.5?ce:ae<2/3?oe+(ce-oe)*(2/3-ae)*6:oe}if(y=Ce(y,360),w=Ce(w,100),S=Ce(S,100),w===0)T=A=D=S;else{var K=S<.5?S*(1+w):S+w-S*w,re=2*S-K;T=H(re,K,y+1/3),A=H(re,K,y),D=H(re,K,y-1/3)}return{r:255*T,g:255*A,b:255*D}}(l.h,h,p),f=!0,g="hsl"),l.hasOwnProperty("a")&&(d=l.a));var b,k,C;return d=Ff(d),{ok:f,format:l.format||g,r:Math.min(255,Math.max(c.r,0)),g:Math.min(255,Math.max(c.g,0)),b:Math.min(255,Math.max(c.b,0)),a:d}}(r);this._originalInput=r,this._r=a.r,this._g=a.g,this._b=a.b,this._a=a.a,this._roundA=Math.round(100*this._a)/100,this._format=o.format||a.format,this._gradientType=o.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=a.ok}function Jd(r,o,a){r=Ce(r,255),o=Ce(o,255),a=Ce(a,255);var l,c,d=Math.max(r,o,a),h=Math.min(r,o,a),v=(d+h)/2;if(d==h)l=c=0;else{var p=d-h;switch(c=v>.5?p/(2-d-h):p/(d+h),d){case r:l=(o-a)/p+(o<a?6:0);break;case o:l=(a-r)/p+2;break;case a:l=(r-o)/p+4}l/=6}return{h:l,s:c,l:v}}function Zd(r,o,a){r=Ce(r,255),o=Ce(o,255),a=Ce(a,255);var l,c,d=Math.max(r,o,a),h=Math.min(r,o,a),v=d,p=d-h;if(c=d===0?0:p/d,d==h)l=0;else{switch(d){case r:l=(o-a)/p+(o<a?6:0);break;case o:l=(a-r)/p+2;break;case a:l=(r-o)/p+4}l/=6}return{h:l,s:c,v}}function ef(r,o,a,l){var c=[Ln(Math.round(r).toString(16)),Ln(Math.round(o).toString(16)),Ln(Math.round(a).toString(16))];return l&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0):c.join("")}function nf(r,o,a,l){return[Ln(If(l)),Ln(Math.round(r).toString(16)),Ln(Math.round(o).toString(16)),Ln(Math.round(a).toString(16))].join("")}function wg(r,o){o=o===0?0:o||10;var a=Y(r).toHsl();return a.s-=o/100,a.s=ia(a.s),Y(a)}function kg(r,o){o=o===0?0:o||10;var a=Y(r).toHsl();return a.s+=o/100,a.s=ia(a.s),Y(a)}function Sg(r){return Y(r).desaturate(100)}function Eg(r,o){o=o===0?0:o||10;var a=Y(r).toHsl();return a.l+=o/100,a.l=ia(a.l),Y(a)}function Pg(r,o){o=o===0?0:o||10;var a=Y(r).toRgb();return a.r=Math.max(0,Math.min(255,a.r-Math.round(-o/100*255))),a.g=Math.max(0,Math.min(255,a.g-Math.round(-o/100*255))),a.b=Math.max(0,Math.min(255,a.b-Math.round(-o/100*255))),Y(a)}function Cg(r,o){o=o===0?0:o||10;var a=Y(r).toHsl();return a.l-=o/100,a.l=ia(a.l),Y(a)}function Og(r,o){var a=Y(r).toHsl(),l=(a.h+o)%360;return a.h=l<0?360+l:l,Y(a)}function Rg(r){var o=Y(r).toHsl();return o.h=(o.h+180)%360,Y(o)}function tf(r,o){if(isNaN(o)||o<=0)throw new Error("Argument to polyad must be a positive number");for(var a=Y(r).toHsl(),l=[Y(r)],c=360/o,d=1;d<o;d++)l.push(Y({h:(a.h+d*c)%360,s:a.s,l:a.l}));return l}function _g(r){var o=Y(r).toHsl(),a=o.h;return[Y(r),Y({h:(a+72)%360,s:o.s,l:o.l}),Y({h:(a+216)%360,s:o.s,l:o.l})]}function Ng(r,o,a){o=o||6,a=a||30;var l=Y(r).toHsl(),c=360/a,d=[Y(r)];for(l.h=(l.h-(c*o>>1)+720)%360;--o;)l.h=(l.h+c)%360,d.push(Y(l));return d}function Tg(r,o){o=o||6;for(var a=Y(r).toHsv(),l=a.h,c=a.s,d=a.v,h=[],v=1/o;o--;)h.push(Y({h:l,s:c,v:d})),d=(d+v)%1;return h}Y.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var r=this.toRgb();return(299*r.r+587*r.g+114*r.b)/1e3},getLuminance:function(){var r,o,a,l=this.toRgb();return r=l.r/255,o=l.g/255,a=l.b/255,.2126*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.7152*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))+.0722*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))},setAlpha:function(r){return this._a=Ff(r),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var r=Zd(this._r,this._g,this._b);return{h:360*r.h,s:r.s,v:r.v,a:this._a}},toHsvString:function(){var r=Zd(this._r,this._g,this._b),o=Math.round(360*r.h),a=Math.round(100*r.s),l=Math.round(100*r.v);return this._a==1?"hsv("+o+", "+a+"%, "+l+"%)":"hsva("+o+", "+a+"%, "+l+"%, "+this._roundA+")"},toHsl:function(){var r=Jd(this._r,this._g,this._b);return{h:360*r.h,s:r.s,l:r.l,a:this._a}},toHslString:function(){var r=Jd(this._r,this._g,this._b),o=Math.round(360*r.h),a=Math.round(100*r.s),l=Math.round(100*r.l);return this._a==1?"hsl("+o+", "+a+"%, "+l+"%)":"hsla("+o+", "+a+"%, "+l+"%, "+this._roundA+")"},toHex:function(r){return ef(this._r,this._g,this._b,r)},toHexString:function(r){return"#"+this.toHex(r)},toHex8:function(r){return function(o,a,l,c,d){var h=[Ln(Math.round(o).toString(16)),Ln(Math.round(a).toString(16)),Ln(Math.round(l).toString(16)),Ln(If(c))];return d&&h[0].charAt(0)==h[0].charAt(1)&&h[1].charAt(0)==h[1].charAt(1)&&h[2].charAt(0)==h[2].charAt(1)&&h[3].charAt(0)==h[3].charAt(1)?h[0].charAt(0)+h[1].charAt(0)+h[2].charAt(0)+h[3].charAt(0):h.join("")}(this._r,this._g,this._b,this._a,r)},toHex8String:function(r){return"#"+this.toHex8(r)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Ce(this._r,255))+"%",g:Math.round(100*Ce(this._g,255))+"%",b:Math.round(100*Ce(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Ce(this._r,255))+"%, "+Math.round(100*Ce(this._g,255))+"%, "+Math.round(100*Ce(this._b,255))+"%)":"rgba("+Math.round(100*Ce(this._r,255))+"%, "+Math.round(100*Ce(this._g,255))+"%, "+Math.round(100*Ce(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(zg[ef(this._r,this._g,this._b,!0)]||!1)},toFilter:function(r){var o="#"+nf(this._r,this._g,this._b,this._a),a=o,l=this._gradientType?"GradientType = 1, ":"";if(r){var c=Y(r);a="#"+nf(c._r,c._g,c._b,c._a)}return"progid:DXImageTransform.Microsoft.gradient("+l+"startColorstr="+o+",endColorstr="+a+")"},toString:function(r){var o=!!r;r=r||this._format;var a=!1,l=this._a<1&&this._a>=0;return o||!l||r!=="hex"&&r!=="hex6"&&r!=="hex3"&&r!=="hex4"&&r!=="hex8"&&r!=="name"?(r==="rgb"&&(a=this.toRgbString()),r==="prgb"&&(a=this.toPercentageRgbString()),r!=="hex"&&r!=="hex6"||(a=this.toHexString()),r==="hex3"&&(a=this.toHexString(!0)),r==="hex4"&&(a=this.toHex8String(!0)),r==="hex8"&&(a=this.toHex8String()),r==="name"&&(a=this.toName()),r==="hsl"&&(a=this.toHslString()),r==="hsv"&&(a=this.toHsvString()),a||this.toHexString()):r==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return Y(this.toString())},_applyModification:function(r,o){var a=r.apply(null,[this].concat([].slice.call(o)));return this._r=a._r,this._g=a._g,this._b=a._b,this.setAlpha(a._a),this},lighten:function(){return this._applyModification(Eg,arguments)},brighten:function(){return this._applyModification(Pg,arguments)},darken:function(){return this._applyModification(Cg,arguments)},desaturate:function(){return this._applyModification(wg,arguments)},saturate:function(){return this._applyModification(kg,arguments)},greyscale:function(){return this._applyModification(Sg,arguments)},spin:function(){return this._applyModification(Og,arguments)},_applyCombination:function(r,o){return r.apply(null,[this].concat([].slice.call(o)))},analogous:function(){return this._applyCombination(Ng,arguments)},complement:function(){return this._applyCombination(Rg,arguments)},monochromatic:function(){return this._applyCombination(Tg,arguments)},splitcomplement:function(){return this._applyCombination(_g,arguments)},triad:function(){return this._applyCombination(tf,[3])},tetrad:function(){return this._applyCombination(tf,[4])}},Y.fromRatio=function(r,o){if(Ji(r)=="object"){var a={};for(var l in r)r.hasOwnProperty(l)&&(a[l]=l==="a"?r[l]:fo(r[l]));r=a}return Y(r,o)},Y.equals=function(r,o){return!(!r||!o)&&Y(r).toRgbString()==Y(o).toRgbString()},Y.random=function(){return Y.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},Y.mix=function(r,o,a){a=a===0?0:a||50;var l=Y(r).toRgb(),c=Y(o).toRgb(),d=a/100;return Y({r:(c.r-l.r)*d+l.r,g:(c.g-l.g)*d+l.g,b:(c.b-l.b)*d+l.b,a:(c.a-l.a)*d+l.a})},Y.readability=function(r,o){var a=Y(r),l=Y(o);return(Math.max(a.getLuminance(),l.getLuminance())+.05)/(Math.min(a.getLuminance(),l.getLuminance())+.05)},Y.isReadable=function(r,o,a){var l,c,d=Y.readability(r,o);switch(c=!1,(l=function(h){var v,p;return v=((h=h||{level:"AA",size:"small"}).level||"AA").toUpperCase(),p=(h.size||"small").toLowerCase(),v!=="AA"&&v!=="AAA"&&(v="AA"),p!=="small"&&p!=="large"&&(p="small"),{level:v,size:p}}(a)).level+l.size){case"AAsmall":case"AAAlarge":c=d>=4.5;break;case"AAlarge":c=d>=3;break;case"AAAsmall":c=d>=7}return c},Y.mostReadable=function(r,o,a){var l,c,d,h,v=null,p=0;c=(a=a||{}).includeFallbackColors,d=a.level,h=a.size;for(var f=0;f<o.length;f++)(l=Y.readability(r,o[f]))>p&&(p=l,v=Y(o[f]));return Y.isReadable(r,v,{level:d,size:h})||!c?v:(a.includeFallbackColors=!1,Y.mostReadable(r,["#fff","#000"],a))};var bs=Y.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},zg=Y.hexNames=function(r){var o={};for(var a in r)r.hasOwnProperty(a)&&(o[r[a]]=a);return o}(bs);function Ff(r){return r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1),r}function Ce(r,o){(function(l){return typeof l=="string"&&l.indexOf(".")!=-1&&parseFloat(l)===1})(r)&&(r="100%");var a=function(l){return typeof l=="string"&&l.indexOf("%")!=-1}(r);return r=Math.min(o,Math.max(0,parseFloat(r))),a&&(r=parseInt(r*o,10)/100),Math.abs(r-o)<1e-6?1:r%o/parseFloat(o)}function ia(r){return Math.min(1,Math.max(0,r))}function gn(r){return parseInt(r,16)}function Ln(r){return r.length==1?"0"+r:""+r}function fo(r){return r<=1&&(r=100*r+"%"),r}function If(r){return Math.round(255*parseFloat(r)).toString(16)}function rf(r){return gn(r)/255}var kt,ji,Fi,zn=(ji="[\\s|\\(]+("+(kt="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+kt+")[,|\\s]+("+kt+")\\s*\\)?",Fi="[\\s|\\(]+("+kt+")[,|\\s]+("+kt+")[,|\\s]+("+kt+")[,|\\s]+("+kt+")\\s*\\)?",{CSS_UNIT:new RegExp(kt),rgb:new RegExp("rgb"+ji),rgba:new RegExp("rgba"+Fi),hsl:new RegExp("hsl"+ji),hsla:new RegExp("hsla"+Fi),hsv:new RegExp("hsv"+ji),hsva:new RegExp("hsva"+Fi),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Zn(r){return!!zn.CSS_UNIT.exec(r)}var bo=function(r,o){var a=(typeof r=="string"?parseInt(r):r)||0;if(a>=-5&&a<=5){var l=a,c=parseFloat(o),d=c+l*(c/5)*-1;return(d==0||d<=Number.EPSILON)&&(d=.1),{animationPeriod:d+"s"}}return{animationPeriod:o}},xo=function(r,o){var a=r||{},l="";switch(o){case"small":l="12px";break;case"medium":l="16px";break;case"large":l="20px";break;default:l=void 0}var c={};if(a.fontSize){var d=a.fontSize;c=function(h,v){var p={};for(var f in h)Object.prototype.hasOwnProperty.call(h,f)&&v.indexOf(f)<0&&(p[f]=h[f]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function"){var g=0;for(f=Object.getOwnPropertySymbols(h);g<f.length;g++)v.indexOf(f[g])<0&&Object.prototype.propertyIsEnumerable.call(h,f[g])&&(p[f[g]]=h[f[g]])}return p}(a,["fontSize"]),l=d}return{fontSize:l,styles:c}},Lg={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},wo=function(r){var o=r.className,a=r.text,l=r.textColor,c=r.staticText,d=r.style;return a?J.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(o||"").trim(),style:fe(fe(fe({},c&&Lg),l&&{color:l,mixBlendMode:"unset"}),d&&d)},typeof a=="string"&&a.length?a:"loading"):null},nt="rgb(50, 205, 50)";function ko(r,o){o===void 0&&(o=0);var a=[];return function l(c,d){return d===void 0&&(d=0),a.push.apply(a,c),a.length<d&&l(a,d),a.slice(0,d)}(r,o)}qe(`.atom-rli-bounding-box {
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
}`);Y(nt).toRgb();Array.from({length:4},function(r,o){return"--atom-phase".concat(o+1,"-rgb")});qe(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--commet-phase".concat(o+1,"-color")});qe(`.OP-annulus-rli-bounding-box {
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
}`);var Ii=Array.from({length:4},function(r,o){return"--OP-annulus-phase".concat(o+1,"-color")}),Ag=function(r){var o,a=xo(r==null?void 0:r.style,r==null?void 0:r.size),l=a.styles,c=a.fontSize,d=r==null?void 0:r.easing,h=bo(r==null?void 0:r.speedPlus,"1.5s").animationPeriod,v=function(f){var g={},b=Ii.length;if(f instanceof Array){for(var k=ko(f,b),C=0;C<k.length&&!(C>=4);C++)g[Ii[C]]=k[C];return g}try{if(typeof f!="string")throw new Error("Color String expected");for(var y=0;y<b;y++)g[Ii[y]]=f}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof f,'" instead with value, ').concat(JSON.stringify(f))):console.warn("".concat(JSON.stringify(f),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),y=0;y<b;y++)g[Ii[y]]=nt}return g}((o=r==null?void 0:r.color)!==null&&o!==void 0?o:""),p=r!=null&&r.dense?4.3:2.9;return J.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:fe(fe(fe(fe(fe({},c&&{fontSize:c}),h&&{"--rli-animation-duration":h}),d&&{"--rli-animation-function":d}),v),l),role:"status","aria-live":"polite","aria-label":"Loading"},J.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},J.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},J.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:p,strokeMiterlimit:"10"})),J.createElement(wo,{className:"OP-annulus-text",text:r==null?void 0:r.text,textColor:r==null?void 0:r.textColor})))};function fs(r){return r&&r.Math===Math&&r}qe(`.OP-dotted-rli-bounding-box {
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
}`);var mr=fs(typeof window=="object"&&window)||fs(typeof self=="object"&&self)||fs(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function Uf(){var r,o;return!((r=mr==null?void 0:mr.crypto)===null||r===void 0)&&r.randomUUID?mr.crypto.randomUUID():!((o=mr==null?void 0:mr.btoa)===null||o===void 0)&&o.name?mr.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var Ui=Array.from({length:4},function(r,o){return"--OP-dotted-phase".concat(o+1,"-color")}),Mg=function(r){var o,a=xo(r==null?void 0:r.style,r==null?void 0:r.size),l=a.styles,c=a.fontSize,d=r==null?void 0:r.easing,h=bo(r==null?void 0:r.speedPlus,"1.2s").animationPeriod,v=function(f){var g={},b=Ui.length;if(f instanceof Array){for(var k=ko(f,b),C=0;C<k.length&&!(C>=4);C++)g[Ui[C]]=k[C];return g}try{if(typeof f!="string")throw new Error("Color String expected");for(var y=0;y<b;y++)g[Ui[y]]=f}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof f,'" with value, ').concat(JSON.stringify(f))):console.warn("".concat(JSON.stringify(f),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),y=0;y<b;y++)g[Ui[y]]=nt}return g}((o=r==null?void 0:r.color)!==null&&o!==void 0?o:""),p=r!=null&&r.dense?16:12;return J.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:fe(fe(fe(fe(fe({},c&&{fontSize:c}),h&&{"--rli-animation-duration":h}),d&&{"--rli-animation-function":d}),v),l),role:"status","aria-live":"polite","aria-label":"Loading"},J.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:p}).map(function(f,g){var b=function(y,w,S){if(w===16){var T=360*y/w,A=w-y,D=Number.parseFloat(S)/w*A*-1;return{transform:"rotate(".concat(T,"deg)"),animationDelay:"".concat(D,"s")}}return{transform:"",animationDelay:""}}(g,p,h),k=b.animationDelay,C=b.transform;return J.createElement("span",{key:Uf(),className:"rli-d-i-b dot-shape-holder",style:C?{transform:C}:void 0},J.createElement("span",{className:"dot",style:k?{animationDelay:k}:void 0}))}),J.createElement(wo,{className:"OP-dotted-text",text:r==null?void 0:r.text,textColor:r==null?void 0:r.textColor})))};qe(`.OP-spokes-rli-bounding-box {
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
}`);var Bi=Array.from({length:4},function(r,o){return"--OP-spokes-phase".concat(o+1,"-color")}),Dg=function(r){var o,a=xo(r==null?void 0:r.style,r==null?void 0:r.size),l=a.styles,c=a.fontSize,d=r==null?void 0:r.easing,h=bo(r==null?void 0:r.speedPlus,"1.2s").animationPeriod,v=function(f){var g={},b=Bi.length;if(f instanceof Array){for(var k=ko(f,b),C=0;C<k.length&&!(C>=4);C++)g[Bi[C]]=k[C];return g}try{if(typeof f!="string")throw new Error("Color String expected");for(var y=0;y<b;y++)g[Bi[y]]=f}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof f,'" instead with value, ').concat(JSON.stringify(f))):console.warn("".concat(JSON.stringify(f),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),y=0;y<b;y++)g[Bi[y]]=nt}return g}((o=r==null?void 0:r.color)!==null&&o!==void 0?o:""),p=r!=null&&r.dense?16:12;return J.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:fe(fe(fe(fe(fe({},c&&{fontSize:c}),h&&{"--rli-animation-duration":h}),d&&{"--rli-animation-function":d}),v),l),role:"status","aria-live":"polite","aria-label":"Loading"},J.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:p},function(f,g){return J.createElement("span",{key:Uf(),className:"rli-d-i-b spoke",style:jg(g,p,h)})})),J.createElement(wo,{text:r==null?void 0:r.text,textColor:r==null?void 0:r.textColor}))};function jg(r,o,a){if(o===16){var l=o-r,c=Number.parseFloat(a)/o;return{transform:"rotate(".concat(360*r/o,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((l-1)*c*-1,"s")}}}qe(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);var qi=Array.from({length:4},function(r,o){return"--OP-annulus-dual-sectors-phase".concat(o+1,"-color")}),Fg=function(r){var o,a=xo(r==null?void 0:r.style,r==null?void 0:r.size),l=a.styles,c=a.fontSize,d=r==null?void 0:r.easing,h=bo(r==null?void 0:r.speedPlus,"1.2s").animationPeriod,v=function(f){var g={},b=qi.length;if(f instanceof Array){for(var k=ko(f,b),C=0;C<k.length&&!(C>=4);C++)g[qi[C]]=k[C];return g}try{if(typeof f!="string")throw new Error("Color String expected");for(var y=0;y<b;y++)g[qi[y]]=f}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof f,'" with value, ').concat(JSON.stringify(f))):console.warn("".concat(JSON.stringify(f),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),y=0;y<b;y++)g[qi[y]]=nt}return g}((o=r==null?void 0:r.color)!==null&&o!==void 0?o:""),p=r.dense?"0.45em":"";return J.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:fe(fe(fe(fe(fe({},c&&{fontSize:c}),h&&{"--rli-animation-duration":h}),d&&{"--rli-animation-function":d}),v),l),role:"status","aria-live":"polite","aria-label":"Loading"},J.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},J.createElement("span",{className:"rli-d-i-b annulus-sectors",style:fe({},p&&{borderWidth:p})}),J.createElement(wo,{className:"OP-annulus-dual-sectors-text",text:r==null?void 0:r.text,textColor:r==null?void 0:r.textColor})))};qe(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);var uo=Array.from({length:4},function(r,o){return["--OP-annulus-track-phase".concat(o+1,"-color"),"--OP-annulus-sector-phase".concat(o+1,"-color")]}),Hi=function(r){return r===void 0&&(r=1),.25*r},Ig=function(r){var o,a=xo(r==null?void 0:r.style,r==null?void 0:r.size),l=a.styles,c=a.fontSize,d=r==null?void 0:r.easing,h=bo(r==null?void 0:r.speedPlus,"1s").animationPeriod,v=function(f){var g={},b=uo.length;if(f instanceof Array){for(var k=ko(f,b),C=0;C<k.length&&!(C>=4);C++){var y=uo[C];try{if(!(T=Y(k[C])).isValid())throw new Error("Invalid Color: ".concat(T.getOriginalInput()));var w=T.setAlpha(Hi(T.getAlpha())).toRgbString(),S=k[C];g[y[0]]=w,g[y[1]]=S}catch{S=nt,w=(T=Y(nt)).setAlpha(Hi(T.getAlpha())).toRgbString(),g[y[0]]=w,g[y[1]]=S}}return g}try{var T=Y(f);if(typeof f!="string")throw new Error("Color String expected");if(!T.isValid())throw new Error("Invalid Color: ".concat(T.getOriginalInput()));S=f,w=T.setAlpha(Hi(T.getAlpha())).toRgbString();for(var A=0;A<b;A++)g[(y=uo[A])[0]]=w,g[y[1]]=S}catch(D){for(D instanceof Error?console.warn("[".concat(D.message,']: Received "').concat(typeof f,'" with value, ').concat(JSON.stringify(f))):console.warn("".concat(JSON.stringify(f),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),S=nt,w=(T=Y(nt)).setAlpha(Hi(T.getAlpha())).toRgbString(),A=0;A<uo.length;A++)g[(y=uo[A])[0]]=w,g[y[1]]=S}return g}((o=r==null?void 0:r.color)!==null&&o!==void 0?o:""),p=r.dense?"0.45em":"";return J.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:fe(fe(fe(fe(fe({},c&&{fontSize:c}),h&&{"--rli-animation-duration":h}),d&&{"--rli-animation-function":d}),v),l),role:"status","aria-live":"polite","aria-label":"Loading"},J.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},J.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:fe({},p&&{borderWidth:p})}),J.createElement(wo,{className:"OP-annulus-sector-text",text:r==null?void 0:r.text,textColor:r==null?void 0:r.textColor})))},Ms=function(r){var o=Object(r).variant,a=o===void 0?"disc":o;return a==="dotted"?J.createElement(Mg,fe({},r)):a==="spokes"?J.createElement(Dg,fe({},r)):a==="disc"?J.createElement(Ag,fe({},r)):a==="split-disc"?J.createElement(Fg,fe({},r)):a==="track-disc"?J.createElement(Ig,fe({},r)):null};qe(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--four-square-phase".concat(o+1,"-color")});qe(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--mosaic-phase".concat(o+1,"-color")});qe(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--riple-phase".concat(o+1,"-color")});qe(`.pulsate-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--TD-pulsate-phase".concat(o+1,"-color")});qe(`.brick-stack-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--TD-brick-stack-phase".concat(o+1,"-color")});qe(`.bob-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--TD-bob-phase".concat(o+1,"-color")});qe(`.bounce-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--TD-bounce-phase".concat(o+1,"-color")});qe(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--shape-phase".concat(o+1,"-color")});qe(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--trophySpin-phase".concat(o+1,"-color")});qe(`.slab-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--slab-phase".concat(o+1,"-color")});qe(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},function(r,o){return"--life-line-phase".concat(o+1,"-color")});function Bf(r,o){return function(){return r.apply(o,arguments)}}const{toString:Ug}=Object.prototype,{getPrototypeOf:Ds}=Object,aa=(r=>o=>{const a=Ug.call(o);return r[a]||(r[a]=a.slice(8,-1).toLowerCase())})(Object.create(null)),Mn=r=>(r=r.toLowerCase(),o=>aa(o)===r),la=r=>o=>typeof o===r,{isArray:yr}=Array,ho=la("undefined");function Bg(r){return r!==null&&!ho(r)&&r.constructor!==null&&!ho(r.constructor)&&vn(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const qf=Mn("ArrayBuffer");function qg(r){let o;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?o=ArrayBuffer.isView(r):o=r&&r.buffer&&qf(r.buffer),o}const Hg=la("string"),vn=la("function"),Hf=la("number"),sa=r=>r!==null&&typeof r=="object",$g=r=>r===!0||r===!1,Wi=r=>{if(aa(r)!=="object")return!1;const o=Ds(r);return(o===null||o===Object.prototype||Object.getPrototypeOf(o)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)},Vg=Mn("Date"),Wg=Mn("File"),Qg=Mn("Blob"),Kg=Mn("FileList"),Xg=r=>sa(r)&&vn(r.pipe),Yg=r=>{let o;return r&&(typeof FormData=="function"&&r instanceof FormData||vn(r.append)&&((o=aa(r))==="formdata"||o==="object"&&vn(r.toString)&&r.toString()==="[object FormData]"))},Gg=Mn("URLSearchParams"),[Jg,Zg,e1,n1]=["ReadableStream","Request","Response","Headers"].map(Mn),t1=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function So(r,o,{allOwnKeys:a=!1}={}){if(r===null||typeof r>"u")return;let l,c;if(typeof r!="object"&&(r=[r]),yr(r))for(l=0,c=r.length;l<c;l++)o.call(null,r[l],l,r);else{const d=a?Object.getOwnPropertyNames(r):Object.keys(r),h=d.length;let v;for(l=0;l<h;l++)v=d[l],o.call(null,r[v],v,r)}}function $f(r,o){o=o.toLowerCase();const a=Object.keys(r);let l=a.length,c;for(;l-- >0;)if(c=a[l],o===c.toLowerCase())return c;return null}const Ft=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Vf=r=>!ho(r)&&r!==Ft;function xs(){const{caseless:r}=Vf(this)&&this||{},o={},a=(l,c)=>{const d=r&&$f(o,c)||c;Wi(o[d])&&Wi(l)?o[d]=xs(o[d],l):Wi(l)?o[d]=xs({},l):yr(l)?o[d]=l.slice():o[d]=l};for(let l=0,c=arguments.length;l<c;l++)arguments[l]&&So(arguments[l],a);return o}const r1=(r,o,a,{allOwnKeys:l}={})=>(So(o,(c,d)=>{a&&vn(c)?r[d]=Bf(c,a):r[d]=c},{allOwnKeys:l}),r),o1=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),i1=(r,o,a,l)=>{r.prototype=Object.create(o.prototype,l),r.prototype.constructor=r,Object.defineProperty(r,"super",{value:o.prototype}),a&&Object.assign(r.prototype,a)},a1=(r,o,a,l)=>{let c,d,h;const v={};if(o=o||{},r==null)return o;do{for(c=Object.getOwnPropertyNames(r),d=c.length;d-- >0;)h=c[d],(!l||l(h,r,o))&&!v[h]&&(o[h]=r[h],v[h]=!0);r=a!==!1&&Ds(r)}while(r&&(!a||a(r,o))&&r!==Object.prototype);return o},l1=(r,o,a)=>{r=String(r),(a===void 0||a>r.length)&&(a=r.length),a-=o.length;const l=r.indexOf(o,a);return l!==-1&&l===a},s1=r=>{if(!r)return null;if(yr(r))return r;let o=r.length;if(!Hf(o))return null;const a=new Array(o);for(;o-- >0;)a[o]=r[o];return a},u1=(r=>o=>r&&o instanceof r)(typeof Uint8Array<"u"&&Ds(Uint8Array)),c1=(r,o)=>{const l=(r&&r[Symbol.iterator]).call(r);let c;for(;(c=l.next())&&!c.done;){const d=c.value;o.call(r,d[0],d[1])}},d1=(r,o)=>{let a;const l=[];for(;(a=r.exec(o))!==null;)l.push(a);return l},f1=Mn("HTMLFormElement"),p1=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(a,l,c){return l.toUpperCase()+c}),of=(({hasOwnProperty:r})=>(o,a)=>r.call(o,a))(Object.prototype),h1=Mn("RegExp"),Wf=(r,o)=>{const a=Object.getOwnPropertyDescriptors(r),l={};So(a,(c,d)=>{let h;(h=o(c,d,r))!==!1&&(l[d]=h||c)}),Object.defineProperties(r,l)},m1=r=>{Wf(r,(o,a)=>{if(vn(r)&&["arguments","caller","callee"].indexOf(a)!==-1)return!1;const l=r[a];if(vn(l)){if(o.enumerable=!1,"writable"in o){o.writable=!1;return}o.set||(o.set=()=>{throw Error("Can not rewrite read-only method '"+a+"'")})}})},g1=(r,o)=>{const a={},l=c=>{c.forEach(d=>{a[d]=!0})};return yr(r)?l(r):l(String(r).split(o)),a},v1=()=>{},y1=(r,o)=>r!=null&&Number.isFinite(r=+r)?r:o,ps="abcdefghijklmnopqrstuvwxyz",af="0123456789",Qf={DIGIT:af,ALPHA:ps,ALPHA_DIGIT:ps+ps.toUpperCase()+af},b1=(r=16,o=Qf.ALPHA_DIGIT)=>{let a="";const{length:l}=o;for(;r--;)a+=o[Math.random()*l|0];return a};function x1(r){return!!(r&&vn(r.append)&&r[Symbol.toStringTag]==="FormData"&&r[Symbol.iterator])}const w1=r=>{const o=new Array(10),a=(l,c)=>{if(sa(l)){if(o.indexOf(l)>=0)return;if(!("toJSON"in l)){o[c]=l;const d=yr(l)?[]:{};return So(l,(h,v)=>{const p=a(h,c+1);!ho(p)&&(d[v]=p)}),o[c]=void 0,d}}return l};return a(r,0)},k1=Mn("AsyncFunction"),S1=r=>r&&(sa(r)||vn(r))&&vn(r.then)&&vn(r.catch),Kf=((r,o)=>r?setImmediate:o?((a,l)=>(Ft.addEventListener("message",({source:c,data:d})=>{c===Ft&&d===a&&l.length&&l.shift()()},!1),c=>{l.push(c),Ft.postMessage(a,"*")}))(`axios@${Math.random()}`,[]):a=>setTimeout(a))(typeof setImmediate=="function",vn(Ft.postMessage)),E1=typeof queueMicrotask<"u"?queueMicrotask.bind(Ft):typeof process<"u"&&process.nextTick||Kf,z={isArray:yr,isArrayBuffer:qf,isBuffer:Bg,isFormData:Yg,isArrayBufferView:qg,isString:Hg,isNumber:Hf,isBoolean:$g,isObject:sa,isPlainObject:Wi,isReadableStream:Jg,isRequest:Zg,isResponse:e1,isHeaders:n1,isUndefined:ho,isDate:Vg,isFile:Wg,isBlob:Qg,isRegExp:h1,isFunction:vn,isStream:Xg,isURLSearchParams:Gg,isTypedArray:u1,isFileList:Kg,forEach:So,merge:xs,extend:r1,trim:t1,stripBOM:o1,inherits:i1,toFlatObject:a1,kindOf:aa,kindOfTest:Mn,endsWith:l1,toArray:s1,forEachEntry:c1,matchAll:d1,isHTMLForm:f1,hasOwnProperty:of,hasOwnProp:of,reduceDescriptors:Wf,freezeMethods:m1,toObjectSet:g1,toCamelCase:p1,noop:v1,toFiniteNumber:y1,findKey:$f,global:Ft,isContextDefined:Vf,ALPHABET:Qf,generateString:b1,isSpecCompliantForm:x1,toJSONObject:w1,isAsyncFn:k1,isThenable:S1,setImmediate:Kf,asap:E1};function ie(r,o,a,l,c){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=r,this.name="AxiosError",o&&(this.code=o),a&&(this.config=a),l&&(this.request=l),c&&(this.response=c,this.status=c.status?c.status:null)}z.inherits(ie,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:z.toJSONObject(this.config),code:this.code,status:this.status}}});const Xf=ie.prototype,Yf={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(r=>{Yf[r]={value:r}});Object.defineProperties(ie,Yf);Object.defineProperty(Xf,"isAxiosError",{value:!0});ie.from=(r,o,a,l,c,d)=>{const h=Object.create(Xf);return z.toFlatObject(r,h,function(p){return p!==Error.prototype},v=>v!=="isAxiosError"),ie.call(h,r.message,o,a,l,c),h.cause=r,h.name=r.name,d&&Object.assign(h,d),h};const P1=null;function ws(r){return z.isPlainObject(r)||z.isArray(r)}function Gf(r){return z.endsWith(r,"[]")?r.slice(0,-2):r}function lf(r,o,a){return r?r.concat(o).map(function(c,d){return c=Gf(c),!a&&d?"["+c+"]":c}).join(a?".":""):o}function C1(r){return z.isArray(r)&&!r.some(ws)}const O1=z.toFlatObject(z,{},null,function(o){return/^is[A-Z]/.test(o)});function ua(r,o,a){if(!z.isObject(r))throw new TypeError("target must be an object");o=o||new FormData,a=z.toFlatObject(a,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,S){return!z.isUndefined(S[w])});const l=a.metaTokens,c=a.visitor||g,d=a.dots,h=a.indexes,p=(a.Blob||typeof Blob<"u"&&Blob)&&z.isSpecCompliantForm(o);if(!z.isFunction(c))throw new TypeError("visitor must be a function");function f(y){if(y===null)return"";if(z.isDate(y))return y.toISOString();if(!p&&z.isBlob(y))throw new ie("Blob is not supported. Use a Buffer instead.");return z.isArrayBuffer(y)||z.isTypedArray(y)?p&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function g(y,w,S){let T=y;if(y&&!S&&typeof y=="object"){if(z.endsWith(w,"{}"))w=l?w:w.slice(0,-2),y=JSON.stringify(y);else if(z.isArray(y)&&C1(y)||(z.isFileList(y)||z.endsWith(w,"[]"))&&(T=z.toArray(y)))return w=Gf(w),T.forEach(function(D,H){!(z.isUndefined(D)||D===null)&&o.append(h===!0?lf([w],H,d):h===null?w:w+"[]",f(D))}),!1}return ws(y)?!0:(o.append(lf(S,w,d),f(y)),!1)}const b=[],k=Object.assign(O1,{defaultVisitor:g,convertValue:f,isVisitable:ws});function C(y,w){if(!z.isUndefined(y)){if(b.indexOf(y)!==-1)throw Error("Circular reference detected in "+w.join("."));b.push(y),z.forEach(y,function(T,A){(!(z.isUndefined(T)||T===null)&&c.call(o,T,z.isString(A)?A.trim():A,w,k))===!0&&C(T,w?w.concat(A):[A])}),b.pop()}}if(!z.isObject(r))throw new TypeError("data must be an object");return C(r),o}function sf(r){const o={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g,function(l){return o[l]})}function js(r,o){this._pairs=[],r&&ua(r,this,o)}const Jf=js.prototype;Jf.append=function(o,a){this._pairs.push([o,a])};Jf.toString=function(o){const a=o?function(l){return o.call(this,l,sf)}:sf;return this._pairs.map(function(c){return a(c[0])+"="+a(c[1])},"").join("&")};function R1(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Zf(r,o,a){if(!o)return r;const l=a&&a.encode||R1;z.isFunction(a)&&(a={serialize:a});const c=a&&a.serialize;let d;if(c?d=c(o,a):d=z.isURLSearchParams(o)?o.toString():new js(o,a).toString(l),d){const h=r.indexOf("#");h!==-1&&(r=r.slice(0,h)),r+=(r.indexOf("?")===-1?"?":"&")+d}return r}class uf{constructor(){this.handlers=[]}use(o,a,l){return this.handlers.push({fulfilled:o,rejected:a,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null}),this.handlers.length-1}eject(o){this.handlers[o]&&(this.handlers[o]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(o){z.forEach(this.handlers,function(l){l!==null&&o(l)})}}const ep={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},_1=typeof URLSearchParams<"u"?URLSearchParams:js,N1=typeof FormData<"u"?FormData:null,T1=typeof Blob<"u"?Blob:null,z1={isBrowser:!0,classes:{URLSearchParams:_1,FormData:N1,Blob:T1},protocols:["http","https","file","blob","url","data"]},Fs=typeof window<"u"&&typeof document<"u",ks=typeof navigator=="object"&&navigator||void 0,L1=Fs&&(!ks||["ReactNative","NativeScript","NS"].indexOf(ks.product)<0),A1=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",M1=Fs&&window.location.href||"http://localhost",D1=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Fs,hasStandardBrowserEnv:L1,hasStandardBrowserWebWorkerEnv:A1,navigator:ks,origin:M1},Symbol.toStringTag,{value:"Module"})),en={...D1,...z1};function j1(r,o){return ua(r,new en.classes.URLSearchParams,Object.assign({visitor:function(a,l,c,d){return en.isNode&&z.isBuffer(a)?(this.append(l,a.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)}},o))}function F1(r){return z.matchAll(/\w+|\[(\w*)]/g,r).map(o=>o[0]==="[]"?"":o[1]||o[0])}function I1(r){const o={},a=Object.keys(r);let l;const c=a.length;let d;for(l=0;l<c;l++)d=a[l],o[d]=r[d];return o}function np(r){function o(a,l,c,d){let h=a[d++];if(h==="__proto__")return!0;const v=Number.isFinite(+h),p=d>=a.length;return h=!h&&z.isArray(c)?c.length:h,p?(z.hasOwnProp(c,h)?c[h]=[c[h],l]:c[h]=l,!v):((!c[h]||!z.isObject(c[h]))&&(c[h]=[]),o(a,l,c[h],d)&&z.isArray(c[h])&&(c[h]=I1(c[h])),!v)}if(z.isFormData(r)&&z.isFunction(r.entries)){const a={};return z.forEachEntry(r,(l,c)=>{o(F1(l),c,a,0)}),a}return null}function U1(r,o,a){if(z.isString(r))try{return(o||JSON.parse)(r),z.trim(r)}catch(l){if(l.name!=="SyntaxError")throw l}return(a||JSON.stringify)(r)}const Eo={transitional:ep,adapter:["xhr","http","fetch"],transformRequest:[function(o,a){const l=a.getContentType()||"",c=l.indexOf("application/json")>-1,d=z.isObject(o);if(d&&z.isHTMLForm(o)&&(o=new FormData(o)),z.isFormData(o))return c?JSON.stringify(np(o)):o;if(z.isArrayBuffer(o)||z.isBuffer(o)||z.isStream(o)||z.isFile(o)||z.isBlob(o)||z.isReadableStream(o))return o;if(z.isArrayBufferView(o))return o.buffer;if(z.isURLSearchParams(o))return a.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),o.toString();let v;if(d){if(l.indexOf("application/x-www-form-urlencoded")>-1)return j1(o,this.formSerializer).toString();if((v=z.isFileList(o))||l.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return ua(v?{"files[]":o}:o,p&&new p,this.formSerializer)}}return d||c?(a.setContentType("application/json",!1),U1(o)):o}],transformResponse:[function(o){const a=this.transitional||Eo.transitional,l=a&&a.forcedJSONParsing,c=this.responseType==="json";if(z.isResponse(o)||z.isReadableStream(o))return o;if(o&&z.isString(o)&&(l&&!this.responseType||c)){const h=!(a&&a.silentJSONParsing)&&c;try{return JSON.parse(o)}catch(v){if(h)throw v.name==="SyntaxError"?ie.from(v,ie.ERR_BAD_RESPONSE,this,null,this.response):v}}return o}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:en.classes.FormData,Blob:en.classes.Blob},validateStatus:function(o){return o>=200&&o<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};z.forEach(["delete","get","head","post","put","patch"],r=>{Eo.headers[r]={}});const B1=z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),q1=r=>{const o={};let a,l,c;return r&&r.split(`
`).forEach(function(h){c=h.indexOf(":"),a=h.substring(0,c).trim().toLowerCase(),l=h.substring(c+1).trim(),!(!a||o[a]&&B1[a])&&(a==="set-cookie"?o[a]?o[a].push(l):o[a]=[l]:o[a]=o[a]?o[a]+", "+l:l)}),o},cf=Symbol("internals");function co(r){return r&&String(r).trim().toLowerCase()}function Qi(r){return r===!1||r==null?r:z.isArray(r)?r.map(Qi):String(r)}function H1(r){const o=Object.create(null),a=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=a.exec(r);)o[l[1]]=l[2];return o}const $1=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function hs(r,o,a,l,c){if(z.isFunction(l))return l.call(this,o,a);if(c&&(o=a),!!z.isString(o)){if(z.isString(l))return o.indexOf(l)!==-1;if(z.isRegExp(l))return l.test(o)}}function V1(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(o,a,l)=>a.toUpperCase()+l)}function W1(r,o){const a=z.toCamelCase(" "+o);["get","set","has"].forEach(l=>{Object.defineProperty(r,l+a,{value:function(c,d,h){return this[l].call(this,o,c,d,h)},configurable:!0})})}class cn{constructor(o){o&&this.set(o)}set(o,a,l){const c=this;function d(v,p,f){const g=co(p);if(!g)throw new Error("header name must be a non-empty string");const b=z.findKey(c,g);(!b||c[b]===void 0||f===!0||f===void 0&&c[b]!==!1)&&(c[b||p]=Qi(v))}const h=(v,p)=>z.forEach(v,(f,g)=>d(f,g,p));if(z.isPlainObject(o)||o instanceof this.constructor)h(o,a);else if(z.isString(o)&&(o=o.trim())&&!$1(o))h(q1(o),a);else if(z.isHeaders(o))for(const[v,p]of o.entries())d(p,v,l);else o!=null&&d(a,o,l);return this}get(o,a){if(o=co(o),o){const l=z.findKey(this,o);if(l){const c=this[l];if(!a)return c;if(a===!0)return H1(c);if(z.isFunction(a))return a.call(this,c,l);if(z.isRegExp(a))return a.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(o,a){if(o=co(o),o){const l=z.findKey(this,o);return!!(l&&this[l]!==void 0&&(!a||hs(this,this[l],l,a)))}return!1}delete(o,a){const l=this;let c=!1;function d(h){if(h=co(h),h){const v=z.findKey(l,h);v&&(!a||hs(l,l[v],v,a))&&(delete l[v],c=!0)}}return z.isArray(o)?o.forEach(d):d(o),c}clear(o){const a=Object.keys(this);let l=a.length,c=!1;for(;l--;){const d=a[l];(!o||hs(this,this[d],d,o,!0))&&(delete this[d],c=!0)}return c}normalize(o){const a=this,l={};return z.forEach(this,(c,d)=>{const h=z.findKey(l,d);if(h){a[h]=Qi(c),delete a[d];return}const v=o?V1(d):String(d).trim();v!==d&&delete a[d],a[v]=Qi(c),l[v]=!0}),this}concat(...o){return this.constructor.concat(this,...o)}toJSON(o){const a=Object.create(null);return z.forEach(this,(l,c)=>{l!=null&&l!==!1&&(a[c]=o&&z.isArray(l)?l.join(", "):l)}),a}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([o,a])=>o+": "+a).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(o){return o instanceof this?o:new this(o)}static concat(o,...a){const l=new this(o);return a.forEach(c=>l.set(c)),l}static accessor(o){const l=(this[cf]=this[cf]={accessors:{}}).accessors,c=this.prototype;function d(h){const v=co(h);l[v]||(W1(c,h),l[v]=!0)}return z.isArray(o)?o.forEach(d):d(o),this}}cn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);z.reduceDescriptors(cn.prototype,({value:r},o)=>{let a=o[0].toUpperCase()+o.slice(1);return{get:()=>r,set(l){this[a]=l}}});z.freezeMethods(cn);function ms(r,o){const a=this||Eo,l=o||a,c=cn.from(l.headers);let d=l.data;return z.forEach(r,function(v){d=v.call(a,d,c.normalize(),o?o.status:void 0)}),c.normalize(),d}function tp(r){return!!(r&&r.__CANCEL__)}function br(r,o,a){ie.call(this,r??"canceled",ie.ERR_CANCELED,o,a),this.name="CanceledError"}z.inherits(br,ie,{__CANCEL__:!0});function rp(r,o,a){const l=a.config.validateStatus;!a.status||!l||l(a.status)?r(a):o(new ie("Request failed with status code "+a.status,[ie.ERR_BAD_REQUEST,ie.ERR_BAD_RESPONSE][Math.floor(a.status/100)-4],a.config,a.request,a))}function Q1(r){const o=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return o&&o[1]||""}function K1(r,o){r=r||10;const a=new Array(r),l=new Array(r);let c=0,d=0,h;return o=o!==void 0?o:1e3,function(p){const f=Date.now(),g=l[d];h||(h=f),a[c]=p,l[c]=f;let b=d,k=0;for(;b!==c;)k+=a[b++],b=b%r;if(c=(c+1)%r,c===d&&(d=(d+1)%r),f-h<o)return;const C=g&&f-g;return C?Math.round(k*1e3/C):void 0}}function X1(r,o){let a=0,l=1e3/o,c,d;const h=(f,g=Date.now())=>{a=g,c=null,d&&(clearTimeout(d),d=null),r.apply(null,f)};return[(...f)=>{const g=Date.now(),b=g-a;b>=l?h(f,g):(c=f,d||(d=setTimeout(()=>{d=null,h(c)},l-b)))},()=>c&&h(c)]}const Zi=(r,o,a=3)=>{let l=0;const c=K1(50,250);return X1(d=>{const h=d.loaded,v=d.lengthComputable?d.total:void 0,p=h-l,f=c(p),g=h<=v;l=h;const b={loaded:h,total:v,progress:v?h/v:void 0,bytes:p,rate:f||void 0,estimated:f&&v&&g?(v-h)/f:void 0,event:d,lengthComputable:v!=null,[o?"download":"upload"]:!0};r(b)},a)},df=(r,o)=>{const a=r!=null;return[l=>o[0]({lengthComputable:a,total:r,loaded:l}),o[1]]},ff=r=>(...o)=>z.asap(()=>r(...o)),Y1=en.hasStandardBrowserEnv?((r,o)=>a=>(a=new URL(a,en.origin),r.protocol===a.protocol&&r.host===a.host&&(o||r.port===a.port)))(new URL(en.origin),en.navigator&&/(msie|trident)/i.test(en.navigator.userAgent)):()=>!0,G1=en.hasStandardBrowserEnv?{write(r,o,a,l,c,d){const h=[r+"="+encodeURIComponent(o)];z.isNumber(a)&&h.push("expires="+new Date(a).toGMTString()),z.isString(l)&&h.push("path="+l),z.isString(c)&&h.push("domain="+c),d===!0&&h.push("secure"),document.cookie=h.join("; ")},read(r){const o=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return o?decodeURIComponent(o[3]):null},remove(r){this.write(r,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function J1(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function Z1(r,o){return o?r.replace(/\/?\/$/,"")+"/"+o.replace(/^\/+/,""):r}function op(r,o){return r&&!J1(o)?Z1(r,o):o}const pf=r=>r instanceof cn?{...r}:r;function Ut(r,o){o=o||{};const a={};function l(f,g,b,k){return z.isPlainObject(f)&&z.isPlainObject(g)?z.merge.call({caseless:k},f,g):z.isPlainObject(g)?z.merge({},g):z.isArray(g)?g.slice():g}function c(f,g,b,k){if(z.isUndefined(g)){if(!z.isUndefined(f))return l(void 0,f,b,k)}else return l(f,g,b,k)}function d(f,g){if(!z.isUndefined(g))return l(void 0,g)}function h(f,g){if(z.isUndefined(g)){if(!z.isUndefined(f))return l(void 0,f)}else return l(void 0,g)}function v(f,g,b){if(b in o)return l(f,g);if(b in r)return l(void 0,f)}const p={url:d,method:d,data:d,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,withXSRFToken:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:v,headers:(f,g,b)=>c(pf(f),pf(g),b,!0)};return z.forEach(Object.keys(Object.assign({},r,o)),function(g){const b=p[g]||c,k=b(r[g],o[g],g);z.isUndefined(k)&&b!==v||(a[g]=k)}),a}const ip=r=>{const o=Ut({},r);let{data:a,withXSRFToken:l,xsrfHeaderName:c,xsrfCookieName:d,headers:h,auth:v}=o;o.headers=h=cn.from(h),o.url=Zf(op(o.baseURL,o.url),r.params,r.paramsSerializer),v&&h.set("Authorization","Basic "+btoa((v.username||"")+":"+(v.password?unescape(encodeURIComponent(v.password)):"")));let p;if(z.isFormData(a)){if(en.hasStandardBrowserEnv||en.hasStandardBrowserWebWorkerEnv)h.setContentType(void 0);else if((p=h.getContentType())!==!1){const[f,...g]=p?p.split(";").map(b=>b.trim()).filter(Boolean):[];h.setContentType([f||"multipart/form-data",...g].join("; "))}}if(en.hasStandardBrowserEnv&&(l&&z.isFunction(l)&&(l=l(o)),l||l!==!1&&Y1(o.url))){const f=c&&d&&G1.read(d);f&&h.set(c,f)}return o},ev=typeof XMLHttpRequest<"u",nv=ev&&function(r){return new Promise(function(a,l){const c=ip(r);let d=c.data;const h=cn.from(c.headers).normalize();let{responseType:v,onUploadProgress:p,onDownloadProgress:f}=c,g,b,k,C,y;function w(){C&&C(),y&&y(),c.cancelToken&&c.cancelToken.unsubscribe(g),c.signal&&c.signal.removeEventListener("abort",g)}let S=new XMLHttpRequest;S.open(c.method.toUpperCase(),c.url,!0),S.timeout=c.timeout;function T(){if(!S)return;const D=cn.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),K={data:!v||v==="text"||v==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:D,config:r,request:S};rp(function(oe){a(oe),w()},function(oe){l(oe),w()},K),S=null}"onloadend"in S?S.onloadend=T:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(T)},S.onabort=function(){S&&(l(new ie("Request aborted",ie.ECONNABORTED,r,S)),S=null)},S.onerror=function(){l(new ie("Network Error",ie.ERR_NETWORK,r,S)),S=null},S.ontimeout=function(){let H=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const K=c.transitional||ep;c.timeoutErrorMessage&&(H=c.timeoutErrorMessage),l(new ie(H,K.clarifyTimeoutError?ie.ETIMEDOUT:ie.ECONNABORTED,r,S)),S=null},d===void 0&&h.setContentType(null),"setRequestHeader"in S&&z.forEach(h.toJSON(),function(H,K){S.setRequestHeader(K,H)}),z.isUndefined(c.withCredentials)||(S.withCredentials=!!c.withCredentials),v&&v!=="json"&&(S.responseType=c.responseType),f&&([k,y]=Zi(f,!0),S.addEventListener("progress",k)),p&&S.upload&&([b,C]=Zi(p),S.upload.addEventListener("progress",b),S.upload.addEventListener("loadend",C)),(c.cancelToken||c.signal)&&(g=D=>{S&&(l(!D||D.type?new br(null,r,S):D),S.abort(),S=null)},c.cancelToken&&c.cancelToken.subscribe(g),c.signal&&(c.signal.aborted?g():c.signal.addEventListener("abort",g)));const A=Q1(c.url);if(A&&en.protocols.indexOf(A)===-1){l(new ie("Unsupported protocol "+A+":",ie.ERR_BAD_REQUEST,r));return}S.send(d||null)})},tv=(r,o)=>{const{length:a}=r=r?r.filter(Boolean):[];if(o||a){let l=new AbortController,c;const d=function(f){if(!c){c=!0,v();const g=f instanceof Error?f:this.reason;l.abort(g instanceof ie?g:new br(g instanceof Error?g.message:g))}};let h=o&&setTimeout(()=>{h=null,d(new ie(`timeout ${o} of ms exceeded`,ie.ETIMEDOUT))},o);const v=()=>{r&&(h&&clearTimeout(h),h=null,r.forEach(f=>{f.unsubscribe?f.unsubscribe(d):f.removeEventListener("abort",d)}),r=null)};r.forEach(f=>f.addEventListener("abort",d));const{signal:p}=l;return p.unsubscribe=()=>z.asap(v),p}},rv=function*(r,o){let a=r.byteLength;if(a<o){yield r;return}let l=0,c;for(;l<a;)c=l+o,yield r.slice(l,c),l=c},ov=async function*(r,o){for await(const a of iv(r))yield*rv(a,o)},iv=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const o=r.getReader();try{for(;;){const{done:a,value:l}=await o.read();if(a)break;yield l}}finally{await o.cancel()}},hf=(r,o,a,l)=>{const c=ov(r,o);let d=0,h,v=p=>{h||(h=!0,l&&l(p))};return new ReadableStream({async pull(p){try{const{done:f,value:g}=await c.next();if(f){v(),p.close();return}let b=g.byteLength;if(a){let k=d+=b;a(k)}p.enqueue(new Uint8Array(g))}catch(f){throw v(f),f}},cancel(p){return v(p),c.return()}},{highWaterMark:2})},ca=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",ap=ca&&typeof ReadableStream=="function",av=ca&&(typeof TextEncoder=="function"?(r=>o=>r.encode(o))(new TextEncoder):async r=>new Uint8Array(await new Response(r).arrayBuffer())),lp=(r,...o)=>{try{return!!r(...o)}catch{return!1}},lv=ap&&lp(()=>{let r=!1;const o=new Request(en.origin,{body:new ReadableStream,method:"POST",get duplex(){return r=!0,"half"}}).headers.has("Content-Type");return r&&!o}),mf=64*1024,Ss=ap&&lp(()=>z.isReadableStream(new Response("").body)),ea={stream:Ss&&(r=>r.body)};ca&&(r=>{["text","arrayBuffer","blob","formData","stream"].forEach(o=>{!ea[o]&&(ea[o]=z.isFunction(r[o])?a=>a[o]():(a,l)=>{throw new ie(`Response type '${o}' is not supported`,ie.ERR_NOT_SUPPORT,l)})})})(new Response);const sv=async r=>{if(r==null)return 0;if(z.isBlob(r))return r.size;if(z.isSpecCompliantForm(r))return(await new Request(en.origin,{method:"POST",body:r}).arrayBuffer()).byteLength;if(z.isArrayBufferView(r)||z.isArrayBuffer(r))return r.byteLength;if(z.isURLSearchParams(r)&&(r=r+""),z.isString(r))return(await av(r)).byteLength},uv=async(r,o)=>{const a=z.toFiniteNumber(r.getContentLength());return a??sv(o)},cv=ca&&(async r=>{let{url:o,method:a,data:l,signal:c,cancelToken:d,timeout:h,onDownloadProgress:v,onUploadProgress:p,responseType:f,headers:g,withCredentials:b="same-origin",fetchOptions:k}=ip(r);f=f?(f+"").toLowerCase():"text";let C=tv([c,d&&d.toAbortSignal()],h),y;const w=C&&C.unsubscribe&&(()=>{C.unsubscribe()});let S;try{if(p&&lv&&a!=="get"&&a!=="head"&&(S=await uv(g,l))!==0){let K=new Request(o,{method:"POST",body:l,duplex:"half"}),re;if(z.isFormData(l)&&(re=K.headers.get("content-type"))&&g.setContentType(re),K.body){const[oe,ce]=df(S,Zi(ff(p)));l=hf(K.body,mf,oe,ce)}}z.isString(b)||(b=b?"include":"omit");const T="credentials"in Request.prototype;y=new Request(o,{...k,signal:C,method:a.toUpperCase(),headers:g.normalize().toJSON(),body:l,duplex:"half",credentials:T?b:void 0});let A=await fetch(y);const D=Ss&&(f==="stream"||f==="response");if(Ss&&(v||D&&w)){const K={};["status","statusText","headers"].forEach(ae=>{K[ae]=A[ae]});const re=z.toFiniteNumber(A.headers.get("content-length")),[oe,ce]=v&&df(re,Zi(ff(v),!0))||[];A=new Response(hf(A.body,mf,oe,()=>{ce&&ce(),w&&w()}),K)}f=f||"text";let H=await ea[z.findKey(ea,f)||"text"](A,r);return!D&&w&&w(),await new Promise((K,re)=>{rp(K,re,{data:H,headers:cn.from(A.headers),status:A.status,statusText:A.statusText,config:r,request:y})})}catch(T){throw w&&w(),T&&T.name==="TypeError"&&/fetch/i.test(T.message)?Object.assign(new ie("Network Error",ie.ERR_NETWORK,r,y),{cause:T.cause||T}):ie.from(T,T&&T.code,r,y)}}),Es={http:P1,xhr:nv,fetch:cv};z.forEach(Es,(r,o)=>{if(r){try{Object.defineProperty(r,"name",{value:o})}catch{}Object.defineProperty(r,"adapterName",{value:o})}});const gf=r=>`- ${r}`,dv=r=>z.isFunction(r)||r===null||r===!1,sp={getAdapter:r=>{r=z.isArray(r)?r:[r];const{length:o}=r;let a,l;const c={};for(let d=0;d<o;d++){a=r[d];let h;if(l=a,!dv(a)&&(l=Es[(h=String(a)).toLowerCase()],l===void 0))throw new ie(`Unknown adapter '${h}'`);if(l)break;c[h||"#"+d]=l}if(!l){const d=Object.entries(c).map(([v,p])=>`adapter ${v} `+(p===!1?"is not supported by the environment":"is not available in the build"));let h=o?d.length>1?`since :
`+d.map(gf).join(`
`):" "+gf(d[0]):"as no adapter specified";throw new ie("There is no suitable adapter to dispatch the request "+h,"ERR_NOT_SUPPORT")}return l},adapters:Es};function gs(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new br(null,r)}function vf(r){return gs(r),r.headers=cn.from(r.headers),r.data=ms.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),sp.getAdapter(r.adapter||Eo.adapter)(r).then(function(l){return gs(r),l.data=ms.call(r,r.transformResponse,l),l.headers=cn.from(l.headers),l},function(l){return tp(l)||(gs(r),l&&l.response&&(l.response.data=ms.call(r,r.transformResponse,l.response),l.response.headers=cn.from(l.response.headers))),Promise.reject(l)})}const up="1.7.9",da={};["object","boolean","number","function","string","symbol"].forEach((r,o)=>{da[r]=function(l){return typeof l===r||"a"+(o<1?"n ":" ")+r}});const yf={};da.transitional=function(o,a,l){function c(d,h){return"[Axios v"+up+"] Transitional option '"+d+"'"+h+(l?". "+l:"")}return(d,h,v)=>{if(o===!1)throw new ie(c(h," has been removed"+(a?" in "+a:"")),ie.ERR_DEPRECATED);return a&&!yf[h]&&(yf[h]=!0,console.warn(c(h," has been deprecated since v"+a+" and will be removed in the near future"))),o?o(d,h,v):!0}};da.spelling=function(o){return(a,l)=>(console.warn(`${l} is likely a misspelling of ${o}`),!0)};function fv(r,o,a){if(typeof r!="object")throw new ie("options must be an object",ie.ERR_BAD_OPTION_VALUE);const l=Object.keys(r);let c=l.length;for(;c-- >0;){const d=l[c],h=o[d];if(h){const v=r[d],p=v===void 0||h(v,d,r);if(p!==!0)throw new ie("option "+d+" must be "+p,ie.ERR_BAD_OPTION_VALUE);continue}if(a!==!0)throw new ie("Unknown option "+d,ie.ERR_BAD_OPTION)}}const Ki={assertOptions:fv,validators:da},Bn=Ki.validators;class It{constructor(o){this.defaults=o,this.interceptors={request:new uf,response:new uf}}async request(o,a){try{return await this._request(o,a)}catch(l){if(l instanceof Error){let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const d=c.stack?c.stack.replace(/^.+\n/,""):"";try{l.stack?d&&!String(l.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(l.stack+=`
`+d):l.stack=d}catch{}}throw l}}_request(o,a){typeof o=="string"?(a=a||{},a.url=o):a=o||{},a=Ut(this.defaults,a);const{transitional:l,paramsSerializer:c,headers:d}=a;l!==void 0&&Ki.assertOptions(l,{silentJSONParsing:Bn.transitional(Bn.boolean),forcedJSONParsing:Bn.transitional(Bn.boolean),clarifyTimeoutError:Bn.transitional(Bn.boolean)},!1),c!=null&&(z.isFunction(c)?a.paramsSerializer={serialize:c}:Ki.assertOptions(c,{encode:Bn.function,serialize:Bn.function},!0)),Ki.assertOptions(a,{baseUrl:Bn.spelling("baseURL"),withXsrfToken:Bn.spelling("withXSRFToken")},!0),a.method=(a.method||this.defaults.method||"get").toLowerCase();let h=d&&z.merge(d.common,d[a.method]);d&&z.forEach(["delete","get","head","post","put","patch","common"],y=>{delete d[y]}),a.headers=cn.concat(h,d);const v=[];let p=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(a)===!1||(p=p&&w.synchronous,v.unshift(w.fulfilled,w.rejected))});const f=[];this.interceptors.response.forEach(function(w){f.push(w.fulfilled,w.rejected)});let g,b=0,k;if(!p){const y=[vf.bind(this),void 0];for(y.unshift.apply(y,v),y.push.apply(y,f),k=y.length,g=Promise.resolve(a);b<k;)g=g.then(y[b++],y[b++]);return g}k=v.length;let C=a;for(b=0;b<k;){const y=v[b++],w=v[b++];try{C=y(C)}catch(S){w.call(this,S);break}}try{g=vf.call(this,C)}catch(y){return Promise.reject(y)}for(b=0,k=f.length;b<k;)g=g.then(f[b++],f[b++]);return g}getUri(o){o=Ut(this.defaults,o);const a=op(o.baseURL,o.url);return Zf(a,o.params,o.paramsSerializer)}}z.forEach(["delete","get","head","options"],function(o){It.prototype[o]=function(a,l){return this.request(Ut(l||{},{method:o,url:a,data:(l||{}).data}))}});z.forEach(["post","put","patch"],function(o){function a(l){return function(d,h,v){return this.request(Ut(v||{},{method:o,headers:l?{"Content-Type":"multipart/form-data"}:{},url:d,data:h}))}}It.prototype[o]=a(),It.prototype[o+"Form"]=a(!0)});class Is{constructor(o){if(typeof o!="function")throw new TypeError("executor must be a function.");let a;this.promise=new Promise(function(d){a=d});const l=this;this.promise.then(c=>{if(!l._listeners)return;let d=l._listeners.length;for(;d-- >0;)l._listeners[d](c);l._listeners=null}),this.promise.then=c=>{let d;const h=new Promise(v=>{l.subscribe(v),d=v}).then(c);return h.cancel=function(){l.unsubscribe(d)},h},o(function(d,h,v){l.reason||(l.reason=new br(d,h,v),a(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(o){if(this.reason){o(this.reason);return}this._listeners?this._listeners.push(o):this._listeners=[o]}unsubscribe(o){if(!this._listeners)return;const a=this._listeners.indexOf(o);a!==-1&&this._listeners.splice(a,1)}toAbortSignal(){const o=new AbortController,a=l=>{o.abort(l)};return this.subscribe(a),o.signal.unsubscribe=()=>this.unsubscribe(a),o.signal}static source(){let o;return{token:new Is(function(c){o=c}),cancel:o}}}function pv(r){return function(a){return r.apply(null,a)}}function hv(r){return z.isObject(r)&&r.isAxiosError===!0}const Ps={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ps).forEach(([r,o])=>{Ps[o]=r});function cp(r){const o=new It(r),a=Bf(It.prototype.request,o);return z.extend(a,It.prototype,o,{allOwnKeys:!0}),z.extend(a,o,null,{allOwnKeys:!0}),a.create=function(c){return cp(Ut(r,c))},a}const Fe=cp(Eo);Fe.Axios=It;Fe.CanceledError=br;Fe.CancelToken=Is;Fe.isCancel=tp;Fe.VERSION=up;Fe.toFormData=ua;Fe.AxiosError=ie;Fe.Cancel=Fe.CanceledError;Fe.all=function(o){return Promise.all(o)};Fe.spread=pv;Fe.isAxiosError=hv;Fe.mergeConfig=Ut;Fe.AxiosHeaders=cn;Fe.formToJSON=r=>np(z.isHTMLForm(r)?new FormData(r):r);Fe.getAdapter=sp.getAdapter;Fe.HttpStatusCode=Ps;Fe.default=Fe;class Us{constructor(o){this.apiClient=Fe.create({baseURL:o,timeout:3e4})}async get(o,a={}){try{return(await this.apiClient.get(o,{params:a})).data}catch(l){this.handleError(l)}}async post(o,a={}){try{return(await this.apiClient.post(o,a)).data}catch(l){this.handleError(l)}}handleError(o){throw o}}class qn{}io(qn,"TEST_BASE_URL","https://run.mocky.io/"),io(qn,"TEST_REGISTER","v3/e45e52dc-c1c6-4009-88d0-d531530dd386"),io(qn,"BASE_URL","https://0e6c-111-250-39-133.ngrok-free.app/"),io(qn,"REGISTER","api/register");const mv=new Us(qn.TEST_BASE_URL);function gv(){return L.jsx("div",{className:"loader-ann",children:L.jsx(Ms,{variant:"spokes",color:"#f10a0a",size:"medium",text:"",textColor:""})})}function vv(){const[r,o]=M.useState(!1),[a,l]=M.useState({announcement:""}),c=h=>{const{name:v,value:p}=h.target;l({...a,[v]:p})},d=async h=>{h.preventDefault(),o(!0);const v=await mv.post(qn.TEST_REGISTER,a);console.log("response: ",v);try{v.code==200?alert("Registration successful"):(console.log("code: ",v.code),alert(v.error_msg))}catch{console.log("code: ",v.code),alert(v.data.error_msg)}finally{o(!1),l({announcement:""})}};return L.jsxs("div",{children:[L.jsx("h1",{children:"Announcement"}),L.jsxs("form",{className:"form-ann",onSubmit:d,children:[L.jsx("textarea",{className:"textarea-ann",type:"text",name:"announcement",value:a.announcement,onChange:c,required:"required"}),L.jsx("button",{type:"submit",className:"btn-ann",disabled:r,children:r?"Submit...":"Submit"}),r&&L.jsx(gv,{})]})]})}const yv=new Us(qn.BASE_URL);function bv(){return L.jsx("div",{className:"loader-container",children:L.jsx(Ms,{variant:"spokes",color:"#dcd6d6",size:"medium",text:"",textColor:""})})}function St({type:r,name:o,value:a,handleChange:l,required:c}){return L.jsx("div",{children:L.jsx("input",{className:"forminput-style",type:r,name:o,value:a,onChange:l,required:c})})}function xv(){const r=ra(),[o,a]=M.useState(!1),[l,c]=M.useState({account:"",mail:"",promotion_code:"",password:"",confirm_password:"",phone:"",first_name:"",second_name:""}),d=l.account.trim()!==""&&l.password.trim()!==""&&l.confirm_password.trim()!==""&&l.mail.trim()!==""&&l.phone.trim()!==""&&l.promotion_code.trim()!=="",h=f=>{console.log("isFormValid: ",d);const{name:g,value:b}=f.target;c({...l,[g]:b})},v=f=>Object.fromEntries(Object.entries(f).filter(([g,b])=>b.trim()!=="")),p=async f=>{if(f.preventDefault(),l.confirm_password!=l.password){alert("The passwords do not match, please double-check.");return}a(!0);try{const g=v(l),{confirm_password:b,...k}=g,C=await yv.post(qn.REGISTER,k);console.log("response: ",C),C.code==200?(alert("Registration successful"),r("/pending")):(console.log("code: ",C.code),alert(C.error_msg))}catch(g){alert("Registration failed. Please try again.",g)}finally{a(!1)}};return L.jsxs("div",{children:[L.jsx("div",{className:"bg-top"}),L.jsx("div",{className:"ic-top-left"}),L.jsx("div",{className:"page-title",children:"Register"}),L.jsxs("div",{className:"register-container",children:[L.jsxs("div",{children:[L.jsx("span",{className:"content-text-black",children:"Please provide complete and accurate details for"}),L.jsx("span",{className:"content-text-red ",children:" manual review."})]}),L.jsxs("div",{children:[L.jsx("span",{className:"content-text-red ",children:"Incomplete or incorrect"}),L.jsxs("span",{className:"content-text-black",children:[" ","info may lead to"]}),L.jsxs("span",{className:"content-text-red ",children:[" ","registration rejection."]})]}),L.jsx("img",{className:"divider"}),L.jsxs("form",{className:"form-register-container",onSubmit:p,children:[L.jsx("label",{className:"label-input",children:"*Account"}),L.jsx(St,{type:"text",name:"account",value:l.account,handleChange:h,required:!0}),L.jsx("label",{className:"label-input",children:"*Password"}),L.jsx(St,{type:"password",name:"password",value:l.password,handleChange:h,required:!0}),L.jsx("label",{className:"label-input",children:"*Confirm Password"}),L.jsx(St,{type:"password",name:"confirm_password",value:l.confirm_password,handleChange:h,required:!0}),L.jsx("label",{className:"label-input",children:"First Name"}),L.jsx(St,{type:"text",name:"first_name",value:l.first_name,handleChange:h}),L.jsx("label",{className:"label-input",children:"Last Name"}),L.jsx(St,{type:"text",name:"second_name",value:l.second_name,handleChange:h}),L.jsx("label",{className:"label-input",children:"*Email"}),L.jsx(St,{type:"email",name:"mail",value:l.mail,handleChange:h,required:!0}),L.jsx("label",{className:"label-input",children:"*Phone"}),L.jsx(St,{type:"number",name:"phone",value:l.phone,handleChange:h,required:!0}),L.jsx("label",{className:"label-input",children:"*Promotion Code"}),L.jsx(St,{type:"text",name:"promotion_code",value:l.promotion_code,handleChange:h,required:!0}),L.jsx("button",{type:"submit",className:"submit-btn",disabled:!d,style:{backgroundColor:d?"#DF4A3B":"#BBBBBB"},children:o?"Registering...":"Register"})]}),o&&L.jsx(bv,{})]})]})}function wv(r){return yo({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm-19.42,94.71a8,8,0,1,1-13,9.41L184,141.61l-7.63,10.51a8,8,0,1,1-13-9.41l7.64-10.5-12.36-4a8,8,0,1,1,5-15.21L176,117V104a8,8,0,0,1,16,0v13l12.35-4a8,8,0,0,1,5,15.21l-12.36,4Zm-72,0a8,8,0,1,1-13,9.41L112,141.61l-7.63,10.51a8,8,0,1,1-13-9.41l7.64-10.5-12.36-4a8,8,0,1,1,5-15.21L104,117V104a8,8,0,0,1,16,0v13l12.35-4a8,8,0,1,1,5,15.21l-12.36,4ZM64,88v80a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"},child:[]}]})(r)}const kv=new Us(qn.TEST_BASE_URL);function bf({type:r,name:o,value:a,handleChange:l,required:c}){return L.jsx("div",{className:"form-login-group",children:L.jsx("input",{className:"input-login",type:r,name:o,value:a,onChange:l,required:c})})}function Sv(){return L.jsx("div",{className:"loader-container",children:L.jsx(Ms,{variant:"spokes",color:"#f10a0a",size:"medium",text:"",textColor:""})})}function Ev(){const r=ra(),[o,a]=M.useState(!1),[l,c]=M.useState({account:"",password:""}),d=v=>{const{name:p,value:f}=v.target;c({...l,[p]:f})},h=async v=>{v.preventDefault(),console.log("code: ",l),a(!0);const p=await kv.post(qn.TEST_REGISTER,l);try{p.code==200?(alert("Registration successful"),r("/home")):(console.log("code: ",p.code),alert(p.error_msg))}catch{console.log("code: ",p.code),alert(p.data.error_msg)}finally{a(!1)}};return L.jsxs("div",{className:"login-container",children:[L.jsx("h1",{children:"Ninja Manager Login"}),L.jsx("form",{className:"form-login",onSubmit:h,children:L.jsxs("div",{children:[L.jsxs("div",{className:"form-login-edit",children:[L.jsx(pg,{style:{fontSize:"32px",color:"#555"}}),L.jsx(bf,{type:"text",name:"account",value:l.account,handleChange:d,required:!0})]}),L.jsxs("div",{className:"form-login-edit",children:[L.jsx(wv,{style:{fontSize:"32px",color:"#555"}}),L.jsx(bf,{type:"password",name:"password",value:l.password,handleChange:d,required:!0})]}),L.jsx("button",{type:"submit",className:"submit-login-btn",disabled:o,children:o?"Logining...":"Login"}),o&&L.jsx(Sv,{})]})})]})}var Pv=Object.defineProperty,na=Object.getOwnPropertySymbols,dp=Object.prototype.hasOwnProperty,fp=Object.prototype.propertyIsEnumerable,xf=(r,o,a)=>o in r?Pv(r,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[o]=a,Cs=(r,o)=>{for(var a in o||(o={}))dp.call(o,a)&&xf(r,a,o[a]);if(na)for(var a of na(o))fp.call(o,a)&&xf(r,a,o[a]);return r},Os=(r,o)=>{var a={};for(var l in r)dp.call(r,l)&&o.indexOf(l)<0&&(a[l]=r[l]);if(r!=null&&na)for(var l of na(r))o.indexOf(l)<0&&fp.call(r,l)&&(a[l]=r[l]);return a};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Bt;(r=>{const o=class de{constructor(p,f,g,b){if(this.version=p,this.errorCorrectionLevel=f,this.modules=[],this.isFunction=[],p<de.MIN_VERSION||p>de.MAX_VERSION)throw new RangeError("Version value out of range");if(b<-1||b>7)throw new RangeError("Mask value out of range");this.size=p*4+17;let k=[];for(let y=0;y<this.size;y++)k.push(!1);for(let y=0;y<this.size;y++)this.modules.push(k.slice()),this.isFunction.push(k.slice());this.drawFunctionPatterns();const C=this.addEccAndInterleave(g);if(this.drawCodewords(C),b==-1){let y=1e9;for(let w=0;w<8;w++){this.applyMask(w),this.drawFormatBits(w);const S=this.getPenaltyScore();S<y&&(b=w,y=S),this.applyMask(w)}}c(0<=b&&b<=7),this.mask=b,this.applyMask(b),this.drawFormatBits(b),this.isFunction=[]}static encodeText(p,f){const g=r.QrSegment.makeSegments(p);return de.encodeSegments(g,f)}static encodeBinary(p,f){const g=r.QrSegment.makeBytes(p);return de.encodeSegments([g],f)}static encodeSegments(p,f,g=1,b=40,k=-1,C=!0){if(!(de.MIN_VERSION<=g&&g<=b&&b<=de.MAX_VERSION)||k<-1||k>7)throw new RangeError("Invalid value");let y,w;for(y=g;;y++){const D=de.getNumDataCodewords(y,f)*8,H=h.getTotalBits(p,y);if(H<=D){w=H;break}if(y>=b)throw new RangeError("Data too long")}for(const D of[de.Ecc.MEDIUM,de.Ecc.QUARTILE,de.Ecc.HIGH])C&&w<=de.getNumDataCodewords(y,D)*8&&(f=D);let S=[];for(const D of p){a(D.mode.modeBits,4,S),a(D.numChars,D.mode.numCharCountBits(y),S);for(const H of D.getData())S.push(H)}c(S.length==w);const T=de.getNumDataCodewords(y,f)*8;c(S.length<=T),a(0,Math.min(4,T-S.length),S),a(0,(8-S.length%8)%8,S),c(S.length%8==0);for(let D=236;S.length<T;D^=253)a(D,8,S);let A=[];for(;A.length*8<S.length;)A.push(0);return S.forEach((D,H)=>A[H>>>3]|=D<<7-(H&7)),new de(y,f,A,k)}getModule(p,f){return 0<=p&&p<this.size&&0<=f&&f<this.size&&this.modules[f][p]}getModules(){return this.modules}drawFunctionPatterns(){for(let g=0;g<this.size;g++)this.setFunctionModule(6,g,g%2==0),this.setFunctionModule(g,6,g%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const p=this.getAlignmentPatternPositions(),f=p.length;for(let g=0;g<f;g++)for(let b=0;b<f;b++)g==0&&b==0||g==0&&b==f-1||g==f-1&&b==0||this.drawAlignmentPattern(p[g],p[b]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(p){const f=this.errorCorrectionLevel.formatBits<<3|p;let g=f;for(let k=0;k<10;k++)g=g<<1^(g>>>9)*1335;const b=(f<<10|g)^21522;c(b>>>15==0);for(let k=0;k<=5;k++)this.setFunctionModule(8,k,l(b,k));this.setFunctionModule(8,7,l(b,6)),this.setFunctionModule(8,8,l(b,7)),this.setFunctionModule(7,8,l(b,8));for(let k=9;k<15;k++)this.setFunctionModule(14-k,8,l(b,k));for(let k=0;k<8;k++)this.setFunctionModule(this.size-1-k,8,l(b,k));for(let k=8;k<15;k++)this.setFunctionModule(8,this.size-15+k,l(b,k));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let p=this.version;for(let g=0;g<12;g++)p=p<<1^(p>>>11)*7973;const f=this.version<<12|p;c(f>>>18==0);for(let g=0;g<18;g++){const b=l(f,g),k=this.size-11+g%3,C=Math.floor(g/3);this.setFunctionModule(k,C,b),this.setFunctionModule(C,k,b)}}drawFinderPattern(p,f){for(let g=-4;g<=4;g++)for(let b=-4;b<=4;b++){const k=Math.max(Math.abs(b),Math.abs(g)),C=p+b,y=f+g;0<=C&&C<this.size&&0<=y&&y<this.size&&this.setFunctionModule(C,y,k!=2&&k!=4)}}drawAlignmentPattern(p,f){for(let g=-2;g<=2;g++)for(let b=-2;b<=2;b++)this.setFunctionModule(p+b,f+g,Math.max(Math.abs(b),Math.abs(g))!=1)}setFunctionModule(p,f,g){this.modules[f][p]=g,this.isFunction[f][p]=!0}addEccAndInterleave(p){const f=this.version,g=this.errorCorrectionLevel;if(p.length!=de.getNumDataCodewords(f,g))throw new RangeError("Invalid argument");const b=de.NUM_ERROR_CORRECTION_BLOCKS[g.ordinal][f],k=de.ECC_CODEWORDS_PER_BLOCK[g.ordinal][f],C=Math.floor(de.getNumRawDataModules(f)/8),y=b-C%b,w=Math.floor(C/b);let S=[];const T=de.reedSolomonComputeDivisor(k);for(let D=0,H=0;D<b;D++){let K=p.slice(H,H+w-k+(D<y?0:1));H+=K.length;const re=de.reedSolomonComputeRemainder(K,T);D<y&&K.push(0),S.push(K.concat(re))}let A=[];for(let D=0;D<S[0].length;D++)S.forEach((H,K)=>{(D!=w-k||K>=y)&&A.push(H[D])});return c(A.length==C),A}drawCodewords(p){if(p.length!=Math.floor(de.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let f=0;for(let g=this.size-1;g>=1;g-=2){g==6&&(g=5);for(let b=0;b<this.size;b++)for(let k=0;k<2;k++){const C=g-k,w=(g+1&2)==0?this.size-1-b:b;!this.isFunction[w][C]&&f<p.length*8&&(this.modules[w][C]=l(p[f>>>3],7-(f&7)),f++)}}c(f==p.length*8)}applyMask(p){if(p<0||p>7)throw new RangeError("Mask value out of range");for(let f=0;f<this.size;f++)for(let g=0;g<this.size;g++){let b;switch(p){case 0:b=(g+f)%2==0;break;case 1:b=f%2==0;break;case 2:b=g%3==0;break;case 3:b=(g+f)%3==0;break;case 4:b=(Math.floor(g/3)+Math.floor(f/2))%2==0;break;case 5:b=g*f%2+g*f%3==0;break;case 6:b=(g*f%2+g*f%3)%2==0;break;case 7:b=((g+f)%2+g*f%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[f][g]&&b&&(this.modules[f][g]=!this.modules[f][g])}}getPenaltyScore(){let p=0;for(let k=0;k<this.size;k++){let C=!1,y=0,w=[0,0,0,0,0,0,0];for(let S=0;S<this.size;S++)this.modules[k][S]==C?(y++,y==5?p+=de.PENALTY_N1:y>5&&p++):(this.finderPenaltyAddHistory(y,w),C||(p+=this.finderPenaltyCountPatterns(w)*de.PENALTY_N3),C=this.modules[k][S],y=1);p+=this.finderPenaltyTerminateAndCount(C,y,w)*de.PENALTY_N3}for(let k=0;k<this.size;k++){let C=!1,y=0,w=[0,0,0,0,0,0,0];for(let S=0;S<this.size;S++)this.modules[S][k]==C?(y++,y==5?p+=de.PENALTY_N1:y>5&&p++):(this.finderPenaltyAddHistory(y,w),C||(p+=this.finderPenaltyCountPatterns(w)*de.PENALTY_N3),C=this.modules[S][k],y=1);p+=this.finderPenaltyTerminateAndCount(C,y,w)*de.PENALTY_N3}for(let k=0;k<this.size-1;k++)for(let C=0;C<this.size-1;C++){const y=this.modules[k][C];y==this.modules[k][C+1]&&y==this.modules[k+1][C]&&y==this.modules[k+1][C+1]&&(p+=de.PENALTY_N2)}let f=0;for(const k of this.modules)f=k.reduce((C,y)=>C+(y?1:0),f);const g=this.size*this.size,b=Math.ceil(Math.abs(f*20-g*10)/g)-1;return c(0<=b&&b<=9),p+=b*de.PENALTY_N4,c(0<=p&&p<=2568888),p}getAlignmentPatternPositions(){if(this.version==1)return[];{const p=Math.floor(this.version/7)+2,f=this.version==32?26:Math.ceil((this.version*4+4)/(p*2-2))*2;let g=[6];for(let b=this.size-7;g.length<p;b-=f)g.splice(1,0,b);return g}}static getNumRawDataModules(p){if(p<de.MIN_VERSION||p>de.MAX_VERSION)throw new RangeError("Version number out of range");let f=(16*p+128)*p+64;if(p>=2){const g=Math.floor(p/7)+2;f-=(25*g-10)*g-55,p>=7&&(f-=36)}return c(208<=f&&f<=29648),f}static getNumDataCodewords(p,f){return Math.floor(de.getNumRawDataModules(p)/8)-de.ECC_CODEWORDS_PER_BLOCK[f.ordinal][p]*de.NUM_ERROR_CORRECTION_BLOCKS[f.ordinal][p]}static reedSolomonComputeDivisor(p){if(p<1||p>255)throw new RangeError("Degree out of range");let f=[];for(let b=0;b<p-1;b++)f.push(0);f.push(1);let g=1;for(let b=0;b<p;b++){for(let k=0;k<f.length;k++)f[k]=de.reedSolomonMultiply(f[k],g),k+1<f.length&&(f[k]^=f[k+1]);g=de.reedSolomonMultiply(g,2)}return f}static reedSolomonComputeRemainder(p,f){let g=f.map(b=>0);for(const b of p){const k=b^g.shift();g.push(0),f.forEach((C,y)=>g[y]^=de.reedSolomonMultiply(C,k))}return g}static reedSolomonMultiply(p,f){if(p>>>8||f>>>8)throw new RangeError("Byte out of range");let g=0;for(let b=7;b>=0;b--)g=g<<1^(g>>>7)*285,g^=(f>>>b&1)*p;return c(g>>>8==0),g}finderPenaltyCountPatterns(p){const f=p[1];c(f<=this.size*3);const g=f>0&&p[2]==f&&p[3]==f*3&&p[4]==f&&p[5]==f;return(g&&p[0]>=f*4&&p[6]>=f?1:0)+(g&&p[6]>=f*4&&p[0]>=f?1:0)}finderPenaltyTerminateAndCount(p,f,g){return p&&(this.finderPenaltyAddHistory(f,g),f=0),f+=this.size,this.finderPenaltyAddHistory(f,g),this.finderPenaltyCountPatterns(g)}finderPenaltyAddHistory(p,f){f[0]==0&&(p+=this.size),f.pop(),f.unshift(p)}};o.MIN_VERSION=1,o.MAX_VERSION=40,o.PENALTY_N1=3,o.PENALTY_N2=3,o.PENALTY_N3=40,o.PENALTY_N4=10,o.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],o.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],r.QrCode=o;function a(v,p,f){if(p<0||p>31||v>>>p)throw new RangeError("Value out of range");for(let g=p-1;g>=0;g--)f.push(v>>>g&1)}function l(v,p){return(v>>>p&1)!=0}function c(v){if(!v)throw new Error("Assertion error")}const d=class Le{constructor(p,f,g){if(this.mode=p,this.numChars=f,this.bitData=g,f<0)throw new RangeError("Invalid argument");this.bitData=g.slice()}static makeBytes(p){let f=[];for(const g of p)a(g,8,f);return new Le(Le.Mode.BYTE,p.length,f)}static makeNumeric(p){if(!Le.isNumeric(p))throw new RangeError("String contains non-numeric characters");let f=[];for(let g=0;g<p.length;){const b=Math.min(p.length-g,3);a(parseInt(p.substring(g,g+b),10),b*3+1,f),g+=b}return new Le(Le.Mode.NUMERIC,p.length,f)}static makeAlphanumeric(p){if(!Le.isAlphanumeric(p))throw new RangeError("String contains unencodable characters in alphanumeric mode");let f=[],g;for(g=0;g+2<=p.length;g+=2){let b=Le.ALPHANUMERIC_CHARSET.indexOf(p.charAt(g))*45;b+=Le.ALPHANUMERIC_CHARSET.indexOf(p.charAt(g+1)),a(b,11,f)}return g<p.length&&a(Le.ALPHANUMERIC_CHARSET.indexOf(p.charAt(g)),6,f),new Le(Le.Mode.ALPHANUMERIC,p.length,f)}static makeSegments(p){return p==""?[]:Le.isNumeric(p)?[Le.makeNumeric(p)]:Le.isAlphanumeric(p)?[Le.makeAlphanumeric(p)]:[Le.makeBytes(Le.toUtf8ByteArray(p))]}static makeEci(p){let f=[];if(p<0)throw new RangeError("ECI assignment value out of range");if(p<128)a(p,8,f);else if(p<16384)a(2,2,f),a(p,14,f);else if(p<1e6)a(6,3,f),a(p,21,f);else throw new RangeError("ECI assignment value out of range");return new Le(Le.Mode.ECI,0,f)}static isNumeric(p){return Le.NUMERIC_REGEX.test(p)}static isAlphanumeric(p){return Le.ALPHANUMERIC_REGEX.test(p)}getData(){return this.bitData.slice()}static getTotalBits(p,f){let g=0;for(const b of p){const k=b.mode.numCharCountBits(f);if(b.numChars>=1<<k)return 1/0;g+=4+k+b.bitData.length}return g}static toUtf8ByteArray(p){p=encodeURI(p);let f=[];for(let g=0;g<p.length;g++)p.charAt(g)!="%"?f.push(p.charCodeAt(g)):(f.push(parseInt(p.substring(g+1,g+3),16)),g+=2);return f}};d.NUMERIC_REGEX=/^[0-9]*$/,d.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,d.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let h=d;r.QrSegment=d})(Bt||(Bt={}));(r=>{(o=>{const a=class{constructor(c,d){this.ordinal=c,this.formatBits=d}};a.LOW=new a(0,1),a.MEDIUM=new a(1,0),a.QUARTILE=new a(2,3),a.HIGH=new a(3,2),o.Ecc=a})(r.QrCode||(r.QrCode={}))})(Bt||(Bt={}));(r=>{(o=>{const a=class{constructor(c,d){this.modeBits=c,this.numBitsCharCount=d}numCharCountBits(c){return this.numBitsCharCount[Math.floor((c+7)/17)]}};a.NUMERIC=new a(1,[10,12,14]),a.ALPHANUMERIC=new a(2,[9,11,13]),a.BYTE=new a(4,[8,16,16]),a.KANJI=new a(8,[8,10,12]),a.ECI=new a(7,[0,0,0]),o.Mode=a})(r.QrSegment||(r.QrSegment={}))})(Bt||(Bt={}));var gr=Bt;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var Cv={L:gr.QrCode.Ecc.LOW,M:gr.QrCode.Ecc.MEDIUM,Q:gr.QrCode.Ecc.QUARTILE,H:gr.QrCode.Ecc.HIGH},pp=128,hp="L",mp="#FFFFFF",gp="#000000",vp=!1,yp=1,Ov=4,Rv=0,_v=.1;function bp(r,o=0){const a=[];return r.forEach(function(l,c){let d=null;l.forEach(function(h,v){if(!h&&d!==null){a.push(`M${d+o} ${c+o}h${v-d}v1H${d+o}z`),d=null;return}if(v===l.length-1){if(!h)return;d===null?a.push(`M${v+o},${c+o} h1v1H${v+o}z`):a.push(`M${d+o},${c+o} h${v+1-d}v1H${d+o}z`);return}h&&d===null&&(d=v)})}),a.join("")}function xp(r,o){return r.slice().map((a,l)=>l<o.y||l>=o.y+o.h?a:a.map((c,d)=>d<o.x||d>=o.x+o.w?c:!1))}function Nv(r,o,a,l){if(l==null)return null;const c=r.length+a*2,d=Math.floor(o*_v),h=c/o,v=(l.width||d)*h,p=(l.height||d)*h,f=l.x==null?r.length/2-v/2:l.x*h,g=l.y==null?r.length/2-p/2:l.y*h,b=l.opacity==null?1:l.opacity;let k=null;if(l.excavate){let y=Math.floor(f),w=Math.floor(g),S=Math.ceil(v+f-y),T=Math.ceil(p+g-w);k={x:y,y:w,w:S,h:T}}const C=l.crossOrigin;return{x:f,y:g,h:p,w:v,excavation:k,opacity:b,crossOrigin:C}}function Tv(r,o){return o!=null?Math.max(Math.floor(o),0):r?Ov:Rv}function wp({value:r,level:o,minVersion:a,includeMargin:l,marginSize:c,imageSettings:d,size:h,boostLevel:v}){let p=J.useMemo(()=>{const y=(Array.isArray(r)?r:[r]).reduce((w,S)=>(w.push(...gr.QrSegment.makeSegments(S)),w),[]);return gr.QrCode.encodeSegments(y,Cv[o],a,void 0,void 0,v)},[r,o,a,v]);const{cells:f,margin:g,numCells:b,calculatedImageSettings:k}=J.useMemo(()=>{let C=p.getModules();const y=Tv(l,c),w=C.length+y*2,S=Nv(C,h,y,d);return{cells:C,margin:y,numCells:w,calculatedImageSettings:S}},[p,h,d,l,c]);return{qrcode:p,margin:g,cells:f,numCells:b,calculatedImageSettings:k}}var zv=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),Lv=J.forwardRef(function(o,a){const l=o,{value:c,size:d=pp,level:h=hp,bgColor:v=mp,fgColor:p=gp,includeMargin:f=vp,minVersion:g=yp,boostLevel:b,marginSize:k,imageSettings:C}=l,w=Os(l,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:S}=w,T=Os(w,["style"]),A=C==null?void 0:C.src,D=J.useRef(null),H=J.useRef(null),K=J.useCallback(Ie=>{D.current=Ie,typeof a=="function"?a(Ie):a&&(a.current=Ie)},[a]),[re,oe]=J.useState(!1),{margin:ce,cells:ae,numCells:Ne,calculatedImageSettings:Te}=wp({value:c,level:h,minVersion:g,boostLevel:b,includeMargin:f,marginSize:k,imageSettings:C,size:d});J.useEffect(()=>{if(D.current!=null){const Ie=D.current,De=Ie.getContext("2d");if(!De)return;let We=ae;const be=H.current,q=Te!=null&&be!==null&&be.complete&&be.naturalHeight!==0&&be.naturalWidth!==0;q&&Te.excavation!=null&&(We=xp(ae,Te.excavation));const Z=window.devicePixelRatio||1;Ie.height=Ie.width=d*Z;const V=d/Ne*Z;De.scale(V,V),De.fillStyle=v,De.fillRect(0,0,Ne,Ne),De.fillStyle=p,zv?De.fill(new Path2D(bp(We,ce))):ae.forEach(function(O,j){O.forEach(function(le,se){le&&De.fillRect(se+ce,j+ce,1,1)})}),Te&&(De.globalAlpha=Te.opacity),q&&De.drawImage(be,Te.x+ce,Te.y+ce,Te.w,Te.h)}}),J.useEffect(()=>{oe(!1)},[A]);const yn=Cs({height:d,width:d},S);let Xe=null;return A!=null&&(Xe=J.createElement("img",{src:A,key:A,style:{display:"none"},onLoad:()=>{oe(!0)},ref:H,crossOrigin:Te==null?void 0:Te.crossOrigin})),J.createElement(J.Fragment,null,J.createElement("canvas",Cs({style:yn,height:d,width:d,ref:K,role:"img"},T)),Xe)});Lv.displayName="QRCodeCanvas";var kp=J.forwardRef(function(o,a){const l=o,{value:c,size:d=pp,level:h=hp,bgColor:v=mp,fgColor:p=gp,includeMargin:f=vp,minVersion:g=yp,boostLevel:b,title:k,marginSize:C,imageSettings:y}=l,w=Os(l,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:S,cells:T,numCells:A,calculatedImageSettings:D}=wp({value:c,level:h,minVersion:g,boostLevel:b,includeMargin:f,marginSize:C,imageSettings:y,size:d});let H=T,K=null;y!=null&&D!=null&&(D.excavation!=null&&(H=xp(T,D.excavation)),K=J.createElement("image",{href:y.src,height:D.h,width:D.w,x:D.x+S,y:D.y+S,preserveAspectRatio:"none",opacity:D.opacity,crossOrigin:D.crossOrigin}));const re=bp(H,S);return J.createElement("svg",Cs({height:d,width:d,viewBox:`0 0 ${A} ${A}`,ref:a,role:"img"},w),!!k&&J.createElement("title",null,k),J.createElement("path",{fill:v,d:`M0,0 h${A}v${A}H0z`,shapeRendering:"crispEdges"}),J.createElement("path",{fill:p,d:re,shapeRendering:"crispEdges"}),K)});kp.displayName="QRCodeSVG";function Av(){const r="https://www.example.com";return L.jsxs("div",{className:"page-container",children:[L.jsx("div",{className:"img-ninja"}),L.jsxs("div",{className:"qrcode-container",children:[L.jsx(kp,{className:"qrcode-svg",value:r,bgColor:"#FFFFFF",fgColor:"#000000"}),L.jsx("a",{className:"url",href:r,children:"click it to download APK"})]}),L.jsxs("div",{className:"warrning-container",children:[L.jsxs("div",{className:"warrning-title",children:[L.jsx("div",{className:"img-icon"}),L.jsx("div",{className:"text-title",children:"Attention"})]}),L.jsxs("p",{children:[L.jsx("span",{className:"text-white",children:"Congrats on passing the review!"}),L.jsxs("span",{className:"text-red",children:[" ","Scan the QR Code on the webpage to download the APK."]})]}),L.jsxs("p",{children:[L.jsx("span",{className:"text-white",children:"Note: The link expires"}),L.jsx("span",{className:"text-red",children:" in 15 minutes,"}),L.jsxs("span",{className:"text-white",children:[" ","so download it promptly."]})]})]})]})}function Mv(){return L.jsxs("div",{className:"pending-container",children:[L.jsx("div",{className:"bg-top"}),L.jsx("div",{className:"ic-top-left"}),L.jsx("div",{className:"page-title",children:"Pending review"}),L.jsxs("div",{className:"register-container",children:[L.jsxs("div",{children:[L.jsx("span",{className:"content-text-black",children:"our registration has been submitted for"}),L.jsx("span",{className:"content-text-red ",children:" manual review."})]}),L.jsxs("div",{children:[L.jsx("span",{className:"content-text-black ",children:"You will be notified via email within"}),L.jsxs("span",{className:"content-text-red ",children:[" ","1-3 business days."]})]})]}),L.jsx("img",{className:"divider"}),L.jsxs("div",{className:"content-text",children:[L.jsx("span",{children:"We're working on your register"}),L.jsx("br",{}),L.jsx("span",{children:" to be sure you can become one of us"})]}),L.jsxs("div",{className:"container-flex",children:[L.jsx("div",{className:"bg_pending"}),L.jsx("img",{className:"divider"}),L.jsx("button",{className:"ok-btn",children:"OK"})]})]})}function Dv(){return L.jsx(Q0,{children:L.jsxs(S0,{children:[L.jsx(et,{path:"/register",element:L.jsx(xv,{})}),L.jsx(et,{path:"/pending",element:L.jsx(Mv,{})}),L.jsx(et,{path:"/download",element:L.jsx(Av,{})}),L.jsx(et,{path:"/login",element:L.jsx(Ev,{})}),L.jsxs(et,{path:"/home",element:L.jsx(gg,{}),children:[L.jsx(et,{index:!0,element:L.jsx(vg,{})}),L.jsx(et,{path:"about",element:L.jsx(yg,{})}),L.jsx(et,{path:"announcement",element:L.jsx(vv,{})})]})]})})}Nm.createRoot(document.getElementById("root")).render(L.jsx(M.StrictMode,{children:L.jsx(Dv,{})}));

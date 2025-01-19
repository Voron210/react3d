(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Ic={exports:{}},Go={},Nc={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function Fv(){if($p)return dt;$p=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function v(I){return I===null||typeof I!="object"?null:(I=x&&I[x]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(I,ne,Ne){this.props=I,this.context=ne,this.refs=T,this.updater=Ne||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,ne){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ne,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function g(){}g.prototype=y.prototype;function D(I,ne,Ne){this.props=I,this.context=ne,this.refs=T,this.updater=Ne||S}var L=D.prototype=new g;L.constructor=D,E(L,y.prototype),L.isPureReactComponent=!0;var C=Array.isArray,V=Object.prototype.hasOwnProperty,k={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function X(I,ne,Ne){var Z,he={},Ee=null,xe=null;if(ne!=null)for(Z in ne.ref!==void 0&&(xe=ne.ref),ne.key!==void 0&&(Ee=""+ne.key),ne)V.call(ne,Z)&&!N.hasOwnProperty(Z)&&(he[Z]=ne[Z]);var we=arguments.length-2;if(we===1)he.children=Ne;else if(1<we){for(var Ie=Array(we),Qe=0;Qe<we;Qe++)Ie[Qe]=arguments[Qe+2];he.children=Ie}if(I&&I.defaultProps)for(Z in we=I.defaultProps,we)he[Z]===void 0&&(he[Z]=we[Z]);return{$$typeof:r,type:I,key:Ee,ref:xe,props:he,_owner:k.current}}function P(I,ne){return{$$typeof:r,type:I.type,key:ne,ref:I.ref,props:I.props,_owner:I._owner}}function R(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function B(I){var ne={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ne){return ne[Ne]})}var oe=/\/+/g;function te(I,ne){return typeof I=="object"&&I!==null&&I.key!=null?B(""+I.key):ne.toString(36)}function ce(I,ne,Ne,Z,he){var Ee=typeof I;(Ee==="undefined"||Ee==="boolean")&&(I=null);var xe=!1;if(I===null)xe=!0;else switch(Ee){case"string":case"number":xe=!0;break;case"object":switch(I.$$typeof){case r:case e:xe=!0}}if(xe)return xe=I,he=he(xe),I=Z===""?"."+te(xe,0):Z,C(he)?(Ne="",I!=null&&(Ne=I.replace(oe,"$&/")+"/"),ce(he,ne,Ne,"",function(Qe){return Qe})):he!=null&&(R(he)&&(he=P(he,Ne+(!he.key||xe&&xe.key===he.key?"":(""+he.key).replace(oe,"$&/")+"/")+I)),ne.push(he)),1;if(xe=0,Z=Z===""?".":Z+":",C(I))for(var we=0;we<I.length;we++){Ee=I[we];var Ie=Z+te(Ee,we);xe+=ce(Ee,ne,Ne,Ie,he)}else if(Ie=v(I),typeof Ie=="function")for(I=Ie.call(I),we=0;!(Ee=I.next()).done;)Ee=Ee.value,Ie=Z+te(Ee,we++),xe+=ce(Ee,ne,Ne,Ie,he);else if(Ee==="object")throw ne=String(I),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return xe}function pe(I,ne,Ne){if(I==null)return I;var Z=[],he=0;return ce(I,Z,"","",function(Ee){return ne.call(Ne,Ee,he++)}),Z}function se(I){if(I._status===-1){var ne=I._result;ne=ne(),ne.then(function(Ne){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ne)},function(Ne){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ne)}),I._status===-1&&(I._status=0,I._result=ne)}if(I._status===1)return I._result.default;throw I._result}var le={current:null},z={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:z,ReactCurrentOwner:k};function re(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:pe,forEach:function(I,ne,Ne){pe(I,function(){ne.apply(this,arguments)},Ne)},count:function(I){var ne=0;return pe(I,function(){ne++}),ne},toArray:function(I){return pe(I,function(ne){return ne})||[]},only:function(I){if(!R(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},dt.Component=y,dt.Fragment=t,dt.Profiler=a,dt.PureComponent=D,dt.StrictMode=s,dt.Suspense=h,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,dt.act=re,dt.cloneElement=function(I,ne,Ne){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Z=E({},I.props),he=I.key,Ee=I.ref,xe=I._owner;if(ne!=null){if(ne.ref!==void 0&&(Ee=ne.ref,xe=k.current),ne.key!==void 0&&(he=""+ne.key),I.type&&I.type.defaultProps)var we=I.type.defaultProps;for(Ie in ne)V.call(ne,Ie)&&!N.hasOwnProperty(Ie)&&(Z[Ie]=ne[Ie]===void 0&&we!==void 0?we[Ie]:ne[Ie])}var Ie=arguments.length-2;if(Ie===1)Z.children=Ne;else if(1<Ie){we=Array(Ie);for(var Qe=0;Qe<Ie;Qe++)we[Qe]=arguments[Qe+2];Z.children=we}return{$$typeof:r,type:I.type,key:he,ref:Ee,props:Z,_owner:xe}},dt.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},dt.createElement=X,dt.createFactory=function(I){var ne=X.bind(null,I);return ne.type=I,ne},dt.createRef=function(){return{current:null}},dt.forwardRef=function(I){return{$$typeof:f,render:I}},dt.isValidElement=R,dt.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:se}},dt.memo=function(I,ne){return{$$typeof:p,type:I,compare:ne===void 0?null:ne}},dt.startTransition=function(I){var ne=z.transition;z.transition={};try{I()}finally{z.transition=ne}},dt.unstable_act=re,dt.useCallback=function(I,ne){return le.current.useCallback(I,ne)},dt.useContext=function(I){return le.current.useContext(I)},dt.useDebugValue=function(){},dt.useDeferredValue=function(I){return le.current.useDeferredValue(I)},dt.useEffect=function(I,ne){return le.current.useEffect(I,ne)},dt.useId=function(){return le.current.useId()},dt.useImperativeHandle=function(I,ne,Ne){return le.current.useImperativeHandle(I,ne,Ne)},dt.useInsertionEffect=function(I,ne){return le.current.useInsertionEffect(I,ne)},dt.useLayoutEffect=function(I,ne){return le.current.useLayoutEffect(I,ne)},dt.useMemo=function(I,ne){return le.current.useMemo(I,ne)},dt.useReducer=function(I,ne,Ne){return le.current.useReducer(I,ne,Ne)},dt.useRef=function(I){return le.current.useRef(I)},dt.useState=function(I){return le.current.useState(I)},dt.useSyncExternalStore=function(I,ne,Ne){return le.current.useSyncExternalStore(I,ne,Ne)},dt.useTransition=function(){return le.current.useTransition()},dt.version="18.3.1",dt}var qp;function od(){return qp||(qp=1,Nc.exports=Fv()),Nc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function Ov(){if(Kp)return Go;Kp=1;var r=od(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var _,x={},v=null,S=null;p!==void 0&&(v=""+p),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(S=h.ref);for(_ in h)s.call(h,_)&&!l.hasOwnProperty(_)&&(x[_]=h[_]);if(f&&f.defaultProps)for(_ in h=f.defaultProps,h)x[_]===void 0&&(x[_]=h[_]);return{$$typeof:e,type:f,key:v,ref:S,props:x,_owner:a.current}}return Go.Fragment=t,Go.jsx=c,Go.jsxs=c,Go}var Zp;function kv(){return Zp||(Zp=1,Ic.exports=Ov()),Ic.exports}var Ft=kv(),de=od(),pl={},Fc={exports:{}},In={},Oc={exports:{}},kc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function Bv(){return Qp||(Qp=1,function(r){function e(z,ae){var re=z.length;z.push(ae);e:for(;0<re;){var I=re-1>>>1,ne=z[I];if(0<a(ne,ae))z[I]=ae,z[re]=ne,re=I;else break e}}function t(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var ae=z[0],re=z.pop();if(re!==ae){z[0]=re;e:for(var I=0,ne=z.length,Ne=ne>>>1;I<Ne;){var Z=2*(I+1)-1,he=z[Z],Ee=Z+1,xe=z[Ee];if(0>a(he,re))Ee<ne&&0>a(xe,he)?(z[I]=xe,z[Ee]=re,I=Ee):(z[I]=he,z[Z]=re,I=Z);else if(Ee<ne&&0>a(xe,re))z[I]=xe,z[Ee]=re,I=Ee;else break e}}return ae}function a(z,ae){var re=z.sortIndex-ae.sortIndex;return re!==0?re:z.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var h=[],p=[],_=1,x=null,v=3,S=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(z){for(var ae=t(p);ae!==null;){if(ae.callback===null)s(p);else if(ae.startTime<=z)s(p),ae.sortIndex=ae.expirationTime,e(h,ae);else break;ae=t(p)}}function C(z){if(T=!1,L(z),!E)if(t(h)!==null)E=!0,se(V);else{var ae=t(p);ae!==null&&le(C,ae.startTime-z)}}function V(z,ae){E=!1,T&&(T=!1,g(X),X=-1),S=!0;var re=v;try{for(L(ae),x=t(h);x!==null&&(!(x.expirationTime>ae)||z&&!B());){var I=x.callback;if(typeof I=="function"){x.callback=null,v=x.priorityLevel;var ne=I(x.expirationTime<=ae);ae=r.unstable_now(),typeof ne=="function"?x.callback=ne:x===t(h)&&s(h),L(ae)}else s(h);x=t(h)}if(x!==null)var Ne=!0;else{var Z=t(p);Z!==null&&le(C,Z.startTime-ae),Ne=!1}return Ne}finally{x=null,v=re,S=!1}}var k=!1,N=null,X=-1,P=5,R=-1;function B(){return!(r.unstable_now()-R<P)}function oe(){if(N!==null){var z=r.unstable_now();R=z;var ae=!0;try{ae=N(!0,z)}finally{ae?te():(k=!1,N=null)}}else k=!1}var te;if(typeof D=="function")te=function(){D(oe)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,pe=ce.port2;ce.port1.onmessage=oe,te=function(){pe.postMessage(null)}}else te=function(){y(oe,0)};function se(z){N=z,k||(k=!0,te())}function le(z,ae){X=y(function(){z(r.unstable_now())},ae)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){E||S||(E=!0,se(V))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(z){switch(v){case 1:case 2:case 3:var ae=3;break;default:ae=v}var re=v;v=ae;try{return z()}finally{v=re}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,ae){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var re=v;v=z;try{return ae()}finally{v=re}},r.unstable_scheduleCallback=function(z,ae,re){var I=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?I+re:I):re=I,z){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,z={id:_++,callback:ae,priorityLevel:z,startTime:re,expirationTime:ne,sortIndex:-1},re>I?(z.sortIndex=re,e(p,z),t(h)===null&&z===t(p)&&(T?(g(X),X=-1):T=!0,le(C,re-I))):(z.sortIndex=ne,e(h,z),E||S||(E=!0,se(V))),z},r.unstable_shouldYield=B,r.unstable_wrapCallback=function(z){var ae=v;return function(){var re=v;v=ae;try{return z.apply(this,arguments)}finally{v=re}}}}(kc)),kc}var Jp;function zv(){return Jp||(Jp=1,Oc.exports=Bv()),Oc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function Hv(){if(em)return In;em=1;var r=od(),e=zv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},x={};function v(n){return h.call(x,n)?!0:h.call(_,n)?!1:p.test(n)?x[n]=!0:(_[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,o,u,d,m,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(g,D);y[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(g,D);y[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(g,D);y[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,o,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,d,u)&&(o=null),u||d===null?v(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var C=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),k=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),B=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),z=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,I;function ne(n){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+n}var Ne=!1;function Z(n,i){if(!n||Ne)return"";Ne=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var u=ee}Reflect.construct(n,[],i)}else{try{i.call()}catch(ee){u=ee}n.call(i.prototype)}else{try{throw Error()}catch(ee){u=ee}n()}}catch(ee){if(ee&&u&&typeof ee.stack=="string"){for(var d=ee.stack.split(`
`),m=u.stack.split(`
`),M=d.length-1,U=m.length-1;1<=M&&0<=U&&d[M]!==m[U];)U--;for(;1<=M&&0<=U;M--,U--)if(d[M]!==m[U]){if(M!==1||U!==1)do if(M--,U--,0>U||d[M]!==m[U]){var F=`
`+d[M].replace(" at new "," at ");return n.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",n.displayName)),F}while(1<=M&&0<=U);break}}}finally{Ne=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?ne(n):""}function he(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function Ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case k:return"Portal";case P:return"Profiler";case X:return"StrictMode";case te:return"Suspense";case ce:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case oe:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case pe:return i=n.displayName||null,i!==null?i:Ee(n.type)||"Memo";case se:i=n._payload,n=n._init;try{return Ee(n(i))}catch{}}return null}function xe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(n){var i=Ie(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){u=""+M,m.call(this,M)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function At(n){n._valueTracker||(n._valueTracker=Qe(n))}function mt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Ie(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function Dt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function O(n,i){var o=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function yn(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=we(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function ct(n,i){pt(n,i);var o=we(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?wt(n,i.type,o):i.hasOwnProperty("defaultValue")&&wt(n,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function je(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function wt(n,i,o){(i!=="number"||Dt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var We=Array.isArray;function b(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+we(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function w(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function K(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(We(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:we(o)}}function me(n,i){var o=we(i.value),u=we(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function _e(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ue(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ue(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ae,Fe=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function lt(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){ke.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function qe(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function et(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=qe(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var Be=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(n,i){if(i){if(Be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function it(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,ie=null,fe=null;function De(n){if(n=Co(n)){if(typeof Re!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Pa(i),Re(n.stateNode,n.type,i))}}function be(n){ie?fe?fe.push(n):fe=[n]:ie=n}function rt(){if(ie){var n=ie,i=fe;if(fe=ie=null,De(n),i)for(n=0;n<i.length;n++)De(i[n])}}function Ut(n,i){return n(i)}function Kt(){}var xt=!1;function Cn(n,i,o){if(xt)return n(i,o);xt=!0;try{return Ut(n,i,o)}finally{xt=!1,(ie!==null||fe!==null)&&(Kt(),rt())}}function Sn(n,i){var o=n.stateNode;if(o===null)return null;var u=Pa(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var as=!1;if(f)try{var $i={};Object.defineProperty($i,"passive",{get:function(){as=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{as=!1}function Mi(n,i,o,u,d,m,M,U,F){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(o,ee)}catch(ve){this.onError(ve)}}var Ti=!1,br=null,Dr=!1,qi=null,aa={onError:function(n){Ti=!0,br=n}};function ls(n,i,o,u,d,m,M,U,F){Ti=!1,br=null,Mi.apply(aa,arguments)}function la(n,i,o,u,d,m,M,U,F){if(ls.apply(this,arguments),Ti){if(Ti){var ee=br;Ti=!1,br=null}else throw Error(t(198));Dr||(Dr=!0,qi=ee)}}function fi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function ua(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ca(n){if(fi(n)!==n)throw Error(t(188))}function iu(n){var i=n.alternate;if(!i){if(i=fi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return ca(d),n;if(m===u)return ca(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=m;else{for(var M=!1,U=d.child;U;){if(U===o){M=!0,o=d,u=m;break}if(U===u){M=!0,u=d,o=m;break}U=U.sibling}if(!M){for(U=m.child;U;){if(U===o){M=!0,o=m,u=d;break}if(U===u){M=!0,u=m,o=d;break}U=U.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function fa(n){return n=iu(n),n!==null?da(n):null}function da(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=da(n);if(i!==null)return i;n=n.sibling}return null}var ha=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,W=e.unstable_shouldYield,Q=e.unstable_requestPaint,$=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,Se=e.unstable_ImmediatePriority,Ce=e.unstable_UserBlockingPriority,Le=e.unstable_NormalPriority,ze=e.unstable_LowPriority,tt=e.unstable_IdlePriority,Je=null,Ve=null;function _t(n){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(Je,n,void 0,(n.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:vt,Vt=Math.log,Ot=Math.LN2;function vt(n){return n>>>=0,n===0?32:31-(Vt(n)/Ot|0)|0}var $e=64,Gt=4194304;function gt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function dn(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,M=o&268435455;if(M!==0){var U=M&~d;U!==0?u=gt(U):(m&=M,m!==0&&(u=gt(m)))}else M=o&~d,M!==0?u=gt(M):m!==0&&(u=gt(m));if(u===0)return 0;if(i!==0&&i!==u&&!(i&d)&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if(u&4&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-st(i),d=1<<o,u|=n[o],i&=~d;return u}function Ki(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function En(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var M=31-st(m),U=1<<M,F=d[M];F===-1?(!(U&o)||U&u)&&(d[M]=Ki(U,i)):F<=i&&(n.expiredLanes|=U),m&=~U}}function wi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function bt(){var n=$e;return $e<<=1,!($e&4194240)&&($e=64),n}function hn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function nn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-st(i),n[i]=o}function un(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-st(o),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~m}}function rn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-st(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var yt=0;function di(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Rd,ru,Cd,Pd,bd,su=!1,pa=[],Zi=null,Qi=null,Ji=null,fo=new Map,ho=new Map,er=[],s_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dd(n,i){switch(n){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":fo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(i.pointerId)}}function po(n,i,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Co(i),i!==null&&ru(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function o_(n,i,o,u,d){switch(i){case"focusin":return Zi=po(Zi,n,i,o,u,d),!0;case"dragenter":return Qi=po(Qi,n,i,o,u,d),!0;case"mouseover":return Ji=po(Ji,n,i,o,u,d),!0;case"pointerover":var m=d.pointerId;return fo.set(m,po(fo.get(m)||null,n,i,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,ho.set(m,po(ho.get(m)||null,n,i,o,u,d)),!0}return!1}function Ld(n){var i=Lr(n.target);if(i!==null){var o=fi(i);if(o!==null){if(i=o.tag,i===13){if(i=ua(o),i!==null){n.blockedOn=i,bd(n.priority,function(){Cd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ma(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=au(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Tt=u,o.target.dispatchEvent(u),Tt=null}else return i=Co(o),i!==null&&ru(i),n.blockedOn=o,!1;i.shift()}return!0}function Ud(n,i,o){ma(n)&&o.delete(i)}function a_(){su=!1,Zi!==null&&ma(Zi)&&(Zi=null),Qi!==null&&ma(Qi)&&(Qi=null),Ji!==null&&ma(Ji)&&(Ji=null),fo.forEach(Ud),ho.forEach(Ud)}function mo(n,i){n.blockedOn===i&&(n.blockedOn=null,su||(su=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,a_)))}function go(n){function i(d){return mo(d,n)}if(0<pa.length){mo(pa[0],n);for(var o=1;o<pa.length;o++){var u=pa[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Zi!==null&&mo(Zi,n),Qi!==null&&mo(Qi,n),Ji!==null&&mo(Ji,n),fo.forEach(i),ho.forEach(i),o=0;o<er.length;o++)u=er[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<er.length&&(o=er[0],o.blockedOn===null);)Ld(o),o.blockedOn===null&&er.shift()}var us=C.ReactCurrentBatchConfig,ga=!0;function l_(n,i,o,u){var d=yt,m=us.transition;us.transition=null;try{yt=1,ou(n,i,o,u)}finally{yt=d,us.transition=m}}function u_(n,i,o,u){var d=yt,m=us.transition;us.transition=null;try{yt=4,ou(n,i,o,u)}finally{yt=d,us.transition=m}}function ou(n,i,o,u){if(ga){var d=au(n,i,o,u);if(d===null)Tu(n,i,u,_a,o),Dd(n,u);else if(o_(d,n,i,o,u))u.stopPropagation();else if(Dd(n,u),i&4&&-1<s_.indexOf(n)){for(;d!==null;){var m=Co(d);if(m!==null&&Rd(m),m=au(n,i,o,u),m===null&&Tu(n,i,u,_a,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else Tu(n,i,u,null,o)}}var _a=null;function au(n,i,o,u){if(_a=null,n=G(u),n=Lr(n),n!==null)if(i=fi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=ua(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return _a=n,null}function Id(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case Se:return 1;case Ce:return 4;case Le:case ze:return 16;case tt:return 536870912;default:return 16}default:return 16}}var tr=null,lu=null,va=null;function Nd(){if(va)return va;var n,i=lu,o=i.length,u,d="value"in tr?tr.value:tr.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var M=o-n;for(u=1;u<=M&&i[o-u]===d[m-u];u++);return va=d.slice(n,1<u?1-u:void 0)}function xa(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ya(){return!0}function Fd(){return!1}function On(n){function i(o,u,d,m,M){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(o=n[U],this[U]=o?o(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ya:Fd,this.isPropagationStopped=Fd,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ya)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ya)},persist:function(){},isPersistent:ya}),i}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uu=On(cs),_o=re({},cs,{view:0,detail:0}),c_=On(_o),cu,fu,vo,Sa=re({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==vo&&(vo&&n.type==="mousemove"?(cu=n.screenX-vo.screenX,fu=n.screenY-vo.screenY):fu=cu=0,vo=n),cu)},movementY:function(n){return"movementY"in n?n.movementY:fu}}),Od=On(Sa),f_=re({},Sa,{dataTransfer:0}),d_=On(f_),h_=re({},_o,{relatedTarget:0}),du=On(h_),p_=re({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),m_=On(p_),g_=re({},cs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),__=On(g_),v_=re({},cs,{data:0}),kd=On(v_),x_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},y_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=S_[n])?!!i[n]:!1}function hu(){return E_}var M_=re({},_o,{key:function(n){if(n.key){var i=x_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=xa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?y_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hu,charCode:function(n){return n.type==="keypress"?xa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?xa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),T_=On(M_),w_=re({},Sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=On(w_),A_=re({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hu}),R_=On(A_),C_=re({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),P_=On(C_),b_=re({},Sa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),D_=On(b_),L_=[9,13,27,32],pu=f&&"CompositionEvent"in window,xo=null;f&&"documentMode"in document&&(xo=document.documentMode);var U_=f&&"TextEvent"in window&&!xo,zd=f&&(!pu||xo&&8<xo&&11>=xo),Hd=" ",Vd=!1;function Gd(n,i){switch(n){case"keyup":return L_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var fs=!1;function I_(n,i){switch(n){case"compositionend":return Wd(i);case"keypress":return i.which!==32?null:(Vd=!0,Hd);case"textInput":return n=i.data,n===Hd&&Vd?null:n;default:return null}}function N_(n,i){if(fs)return n==="compositionend"||!pu&&Gd(n,i)?(n=Nd(),va=lu=tr=null,fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return zd&&i.locale!=="ko"?null:i.data;default:return null}}var F_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!F_[n.type]:i==="textarea"}function Yd(n,i,o,u){be(u),i=Aa(i,"onChange"),0<i.length&&(o=new uu("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var yo=null,So=null;function O_(n){ch(n,0)}function Ea(n){var i=gs(n);if(mt(i))return n}function k_(n,i){if(n==="change")return i}var jd=!1;if(f){var mu;if(f){var gu="oninput"in document;if(!gu){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),gu=typeof $d.oninput=="function"}mu=gu}else mu=!1;jd=mu&&(!document.documentMode||9<document.documentMode)}function qd(){yo&&(yo.detachEvent("onpropertychange",Kd),So=yo=null)}function Kd(n){if(n.propertyName==="value"&&Ea(So)){var i=[];Yd(i,So,n,G(n)),Cn(O_,i)}}function B_(n,i,o){n==="focusin"?(qd(),yo=i,So=o,yo.attachEvent("onpropertychange",Kd)):n==="focusout"&&qd()}function z_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ea(So)}function H_(n,i){if(n==="click")return Ea(i)}function V_(n,i){if(n==="input"||n==="change")return Ea(i)}function G_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Jn=typeof Object.is=="function"?Object.is:G_;function Eo(n,i){if(Jn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!Jn(n[d],i[d]))return!1}return!0}function Zd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Qd(n,i){var o=Zd(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Zd(o)}}function Jd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Jd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function eh(){for(var n=window,i=Dt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Dt(n.document)}return i}function _u(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function W_(n){var i=eh(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Jd(o.ownerDocument.documentElement,o)){if(u!==null&&_u(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=Qd(o,m);var M=Qd(o,u);d&&M&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var X_=f&&"documentMode"in document&&11>=document.documentMode,ds=null,vu=null,Mo=null,xu=!1;function th(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;xu||ds==null||ds!==Dt(u)||(u=ds,"selectionStart"in u&&_u(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Mo&&Eo(Mo,u)||(Mo=u,u=Aa(vu,"onSelect"),0<u.length&&(i=new uu("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=ds)))}function Ma(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var hs={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},yu={},nh={};f&&(nh=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function Ta(n){if(yu[n])return yu[n];if(!hs[n])return n;var i=hs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in nh)return yu[n]=i[o];return n}var ih=Ta("animationend"),rh=Ta("animationiteration"),sh=Ta("animationstart"),oh=Ta("transitionend"),ah=new Map,lh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(n,i){ah.set(n,i),l(i,[n])}for(var Su=0;Su<lh.length;Su++){var Eu=lh[Su],Y_=Eu.toLowerCase(),j_=Eu[0].toUpperCase()+Eu.slice(1);nr(Y_,"on"+j_)}nr(ih,"onAnimationEnd"),nr(rh,"onAnimationIteration"),nr(sh,"onAnimationStart"),nr("dblclick","onDoubleClick"),nr("focusin","onFocus"),nr("focusout","onBlur"),nr(oh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$_=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function uh(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,la(u,i,void 0,n),n.currentTarget=null}function ch(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var M=u.length-1;0<=M;M--){var U=u[M],F=U.instance,ee=U.currentTarget;if(U=U.listener,F!==m&&d.isPropagationStopped())break e;uh(d,U,ee),m=F}else for(M=0;M<u.length;M++){if(U=u[M],F=U.instance,ee=U.currentTarget,U=U.listener,F!==m&&d.isPropagationStopped())break e;uh(d,U,ee),m=F}}}if(Dr)throw n=qi,Dr=!1,qi=null,n}function It(n,i){var o=i[bu];o===void 0&&(o=i[bu]=new Set);var u=n+"__bubble";o.has(u)||(fh(i,n,2,!1),o.add(u))}function Mu(n,i,o){var u=0;i&&(u|=4),fh(o,n,u,i)}var wa="_reactListening"+Math.random().toString(36).slice(2);function wo(n){if(!n[wa]){n[wa]=!0,s.forEach(function(o){o!=="selectionchange"&&($_.has(o)||Mu(o,!1,n),Mu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[wa]||(i[wa]=!0,Mu("selectionchange",!1,i))}}function fh(n,i,o,u){switch(Id(i)){case 1:var d=l_;break;case 4:d=u_;break;default:d=ou}o=d.bind(null,i,o,n),d=void 0,!as||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Tu(n,i,o,u,d){var m=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var U=u.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(M===4)for(M=u.return;M!==null;){var F=M.tag;if((F===3||F===4)&&(F=M.stateNode.containerInfo,F===d||F.nodeType===8&&F.parentNode===d))return;M=M.return}for(;U!==null;){if(M=Lr(U),M===null)return;if(F=M.tag,F===5||F===6){u=m=M;continue e}U=U.parentNode}}u=u.return}Cn(function(){var ee=m,ve=G(o),ye=[];e:{var ge=ah.get(n);if(ge!==void 0){var Ue=uu,He=n;switch(n){case"keypress":if(xa(o)===0)break e;case"keydown":case"keyup":Ue=T_;break;case"focusin":He="focus",Ue=du;break;case"focusout":He="blur",Ue=du;break;case"beforeblur":case"afterblur":Ue=du;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=Od;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=d_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=R_;break;case ih:case rh:case sh:Ue=m_;break;case oh:Ue=P_;break;case"scroll":Ue=c_;break;case"wheel":Ue=D_;break;case"copy":case"cut":case"paste":Ue=__;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=Bd}var Ge=(i&4)!==0,Xt=!Ge&&n==="scroll",j=Ge?ge!==null?ge+"Capture":null:ge;Ge=[];for(var H=ee,q;H!==null;){q=H;var Te=q.stateNode;if(q.tag===5&&Te!==null&&(q=Te,j!==null&&(Te=Sn(H,j),Te!=null&&Ge.push(Ao(H,Te,q)))),Xt)break;H=H.return}0<Ge.length&&(ge=new Ue(ge,He,null,o,ve),ye.push({event:ge,listeners:Ge}))}}if(!(i&7)){e:{if(ge=n==="mouseover"||n==="pointerover",Ue=n==="mouseout"||n==="pointerout",ge&&o!==Tt&&(He=o.relatedTarget||o.fromElement)&&(Lr(He)||He[Ai]))break e;if((Ue||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ue?(He=o.relatedTarget||o.toElement,Ue=ee,He=He?Lr(He):null,He!==null&&(Xt=fi(He),He!==Xt||He.tag!==5&&He.tag!==6)&&(He=null)):(Ue=null,He=ee),Ue!==He)){if(Ge=Od,Te="onMouseLeave",j="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(Ge=Bd,Te="onPointerLeave",j="onPointerEnter",H="pointer"),Xt=Ue==null?ge:gs(Ue),q=He==null?ge:gs(He),ge=new Ge(Te,H+"leave",Ue,o,ve),ge.target=Xt,ge.relatedTarget=q,Te=null,Lr(ve)===ee&&(Ge=new Ge(j,H+"enter",He,o,ve),Ge.target=q,Ge.relatedTarget=Xt,Te=Ge),Xt=Te,Ue&&He)t:{for(Ge=Ue,j=He,H=0,q=Ge;q;q=ps(q))H++;for(q=0,Te=j;Te;Te=ps(Te))q++;for(;0<H-q;)Ge=ps(Ge),H--;for(;0<q-H;)j=ps(j),q--;for(;H--;){if(Ge===j||j!==null&&Ge===j.alternate)break t;Ge=ps(Ge),j=ps(j)}Ge=null}else Ge=null;Ue!==null&&dh(ye,ge,Ue,Ge,!1),He!==null&&Xt!==null&&dh(ye,Xt,He,Ge,!0)}}e:{if(ge=ee?gs(ee):window,Ue=ge.nodeName&&ge.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ge.type==="file")var Ye=k_;else if(Xd(ge))if(jd)Ye=V_;else{Ye=z_;var Ke=B_}else(Ue=ge.nodeName)&&Ue.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ye=H_);if(Ye&&(Ye=Ye(n,ee))){Yd(ye,Ye,o,ve);break e}Ke&&Ke(n,ge,ee),n==="focusout"&&(Ke=ge._wrapperState)&&Ke.controlled&&ge.type==="number"&&wt(ge,"number",ge.value)}switch(Ke=ee?gs(ee):window,n){case"focusin":(Xd(Ke)||Ke.contentEditable==="true")&&(ds=Ke,vu=ee,Mo=null);break;case"focusout":Mo=vu=ds=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,th(ye,o,ve);break;case"selectionchange":if(X_)break;case"keydown":case"keyup":th(ye,o,ve)}var Ze;if(pu)e:{switch(n){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else fs?Gd(n,o)&&(nt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(zd&&o.locale!=="ko"&&(fs||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&fs&&(Ze=Nd()):(tr=ve,lu="value"in tr?tr.value:tr.textContent,fs=!0)),Ke=Aa(ee,nt),0<Ke.length&&(nt=new kd(nt,n,null,o,ve),ye.push({event:nt,listeners:Ke}),Ze?nt.data=Ze:(Ze=Wd(o),Ze!==null&&(nt.data=Ze)))),(Ze=U_?I_(n,o):N_(n,o))&&(ee=Aa(ee,"onBeforeInput"),0<ee.length&&(ve=new kd("onBeforeInput","beforeinput",null,o,ve),ye.push({event:ve,listeners:ee}),ve.data=Ze))}ch(ye,i)})}function Ao(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Aa(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Sn(n,o),m!=null&&u.unshift(Ao(n,m,d)),m=Sn(n,i),m!=null&&u.push(Ao(n,m,d))),n=n.return}return u}function ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function dh(n,i,o,u,d){for(var m=i._reactName,M=[];o!==null&&o!==u;){var U=o,F=U.alternate,ee=U.stateNode;if(F!==null&&F===u)break;U.tag===5&&ee!==null&&(U=ee,d?(F=Sn(o,m),F!=null&&M.unshift(Ao(o,F,U))):d||(F=Sn(o,m),F!=null&&M.push(Ao(o,F,U)))),o=o.return}M.length!==0&&n.push({event:i,listeners:M})}var q_=/\r\n?/g,K_=/\u0000|\uFFFD/g;function hh(n){return(typeof n=="string"?n:""+n).replace(q_,`
`).replace(K_,"")}function Ra(n,i,o){if(i=hh(i),hh(n)!==i&&o)throw Error(t(425))}function Ca(){}var wu=null,Au=null;function Ru(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Cu=typeof setTimeout=="function"?setTimeout:void 0,Z_=typeof clearTimeout=="function"?clearTimeout:void 0,ph=typeof Promise=="function"?Promise:void 0,Q_=typeof queueMicrotask=="function"?queueMicrotask:typeof ph<"u"?function(n){return ph.resolve(null).then(n).catch(J_)}:Cu;function J_(n){setTimeout(function(){throw n})}function Pu(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),go(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);go(i)}function ir(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function mh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var ms=Math.random().toString(36).slice(2),hi="__reactFiber$"+ms,Ro="__reactProps$"+ms,Ai="__reactContainer$"+ms,bu="__reactEvents$"+ms,ev="__reactListeners$"+ms,tv="__reactHandles$"+ms;function Lr(n){var i=n[hi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ai]||o[hi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=mh(n);n!==null;){if(o=n[hi])return o;n=mh(n)}return i}n=o,o=n.parentNode}return null}function Co(n){return n=n[hi]||n[Ai],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function gs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Pa(n){return n[Ro]||null}var Du=[],_s=-1;function rr(n){return{current:n}}function Nt(n){0>_s||(n.current=Du[_s],Du[_s]=null,_s--)}function Lt(n,i){_s++,Du[_s]=n.current,n.current=i}var sr={},pn=rr(sr),Pn=rr(!1),Ur=sr;function vs(n,i){var o=n.type.contextTypes;if(!o)return sr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function bn(n){return n=n.childContextTypes,n!=null}function ba(){Nt(Pn),Nt(pn)}function gh(n,i,o){if(pn.current!==sr)throw Error(t(168));Lt(pn,i),Lt(Pn,o)}function _h(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,xe(n)||"Unknown",d));return re({},o,u)}function Da(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||sr,Ur=pn.current,Lt(pn,n),Lt(Pn,Pn.current),!0}function vh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=_h(n,i,Ur),u.__reactInternalMemoizedMergedChildContext=n,Nt(Pn),Nt(pn),Lt(pn,n)):Nt(Pn),Lt(Pn,o)}var Ri=null,La=!1,Lu=!1;function xh(n){Ri===null?Ri=[n]:Ri.push(n)}function nv(n){La=!0,xh(n)}function or(){if(!Lu&&Ri!==null){Lu=!0;var n=0,i=yt;try{var o=Ri;for(yt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Ri=null,La=!1}catch(d){throw Ri!==null&&(Ri=Ri.slice(n+1)),ha(Se,or),d}finally{yt=i,Lu=!1}}return null}var xs=[],ys=0,Ua=null,Ia=0,Wn=[],Xn=0,Ir=null,Ci=1,Pi="";function Nr(n,i){xs[ys++]=Ia,xs[ys++]=Ua,Ua=n,Ia=i}function yh(n,i,o){Wn[Xn++]=Ci,Wn[Xn++]=Pi,Wn[Xn++]=Ir,Ir=n;var u=Ci;n=Pi;var d=32-st(u)-1;u&=~(1<<d),o+=1;var m=32-st(i)+d;if(30<m){var M=d-d%5;m=(u&(1<<M)-1).toString(32),u>>=M,d-=M,Ci=1<<32-st(i)+d|o<<d|u,Pi=m+n}else Ci=1<<m|o<<d|u,Pi=n}function Uu(n){n.return!==null&&(Nr(n,1),yh(n,1,0))}function Iu(n){for(;n===Ua;)Ua=xs[--ys],xs[ys]=null,Ia=xs[--ys],xs[ys]=null;for(;n===Ir;)Ir=Wn[--Xn],Wn[Xn]=null,Pi=Wn[--Xn],Wn[Xn]=null,Ci=Wn[--Xn],Wn[Xn]=null}var kn=null,Bn=null,kt=!1,ei=null;function Sh(n,i){var o=qn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Eh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,kn=n,Bn=ir(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,kn=n,Bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Ir!==null?{id:Ci,overflow:Pi}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=qn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,kn=n,Bn=null,!0):!1;default:return!1}}function Nu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Fu(n){if(kt){var i=Bn;if(i){var o=i;if(!Eh(n,i)){if(Nu(n))throw Error(t(418));i=ir(o.nextSibling);var u=kn;i&&Eh(n,i)?Sh(u,o):(n.flags=n.flags&-4097|2,kt=!1,kn=n)}}else{if(Nu(n))throw Error(t(418));n.flags=n.flags&-4097|2,kt=!1,kn=n}}}function Mh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;kn=n}function Na(n){if(n!==kn)return!1;if(!kt)return Mh(n),kt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Ru(n.type,n.memoizedProps)),i&&(i=Bn)){if(Nu(n))throw Th(),Error(t(418));for(;i;)Sh(n,i),i=ir(i.nextSibling)}if(Mh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Bn=ir(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Bn=null}}else Bn=kn?ir(n.stateNode.nextSibling):null;return!0}function Th(){for(var n=Bn;n;)n=ir(n.nextSibling)}function Ss(){Bn=kn=null,kt=!1}function Ou(n){ei===null?ei=[n]:ei.push(n)}var iv=C.ReactCurrentBatchConfig;function Po(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(M){var U=d.refs;M===null?delete U[m]:U[m]=M},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Fa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function wh(n){var i=n._init;return i(n._payload)}function Ah(n){function i(j,H){if(n){var q=j.deletions;q===null?(j.deletions=[H],j.flags|=16):q.push(H)}}function o(j,H){if(!n)return null;for(;H!==null;)i(j,H),H=H.sibling;return null}function u(j,H){for(j=new Map;H!==null;)H.key!==null?j.set(H.key,H):j.set(H.index,H),H=H.sibling;return j}function d(j,H){return j=pr(j,H),j.index=0,j.sibling=null,j}function m(j,H,q){return j.index=q,n?(q=j.alternate,q!==null?(q=q.index,q<H?(j.flags|=2,H):q):(j.flags|=2,H)):(j.flags|=1048576,H)}function M(j){return n&&j.alternate===null&&(j.flags|=2),j}function U(j,H,q,Te){return H===null||H.tag!==6?(H=Cc(q,j.mode,Te),H.return=j,H):(H=d(H,q),H.return=j,H)}function F(j,H,q,Te){var Ye=q.type;return Ye===N?ve(j,H,q.props.children,Te,q.key):H!==null&&(H.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===se&&wh(Ye)===H.type)?(Te=d(H,q.props),Te.ref=Po(j,H,q),Te.return=j,Te):(Te=ol(q.type,q.key,q.props,null,j.mode,Te),Te.ref=Po(j,H,q),Te.return=j,Te)}function ee(j,H,q,Te){return H===null||H.tag!==4||H.stateNode.containerInfo!==q.containerInfo||H.stateNode.implementation!==q.implementation?(H=Pc(q,j.mode,Te),H.return=j,H):(H=d(H,q.children||[]),H.return=j,H)}function ve(j,H,q,Te,Ye){return H===null||H.tag!==7?(H=Gr(q,j.mode,Te,Ye),H.return=j,H):(H=d(H,q),H.return=j,H)}function ye(j,H,q){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Cc(""+H,j.mode,q),H.return=j,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case V:return q=ol(H.type,H.key,H.props,null,j.mode,q),q.ref=Po(j,null,H),q.return=j,q;case k:return H=Pc(H,j.mode,q),H.return=j,H;case se:var Te=H._init;return ye(j,Te(H._payload),q)}if(We(H)||ae(H))return H=Gr(H,j.mode,q,null),H.return=j,H;Fa(j,H)}return null}function ge(j,H,q,Te){var Ye=H!==null?H.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return Ye!==null?null:U(j,H,""+q,Te);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case V:return q.key===Ye?F(j,H,q,Te):null;case k:return q.key===Ye?ee(j,H,q,Te):null;case se:return Ye=q._init,ge(j,H,Ye(q._payload),Te)}if(We(q)||ae(q))return Ye!==null?null:ve(j,H,q,Te,null);Fa(j,q)}return null}function Ue(j,H,q,Te,Ye){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return j=j.get(q)||null,U(H,j,""+Te,Ye);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case V:return j=j.get(Te.key===null?q:Te.key)||null,F(H,j,Te,Ye);case k:return j=j.get(Te.key===null?q:Te.key)||null,ee(H,j,Te,Ye);case se:var Ke=Te._init;return Ue(j,H,q,Ke(Te._payload),Ye)}if(We(Te)||ae(Te))return j=j.get(q)||null,ve(H,j,Te,Ye,null);Fa(H,Te)}return null}function He(j,H,q,Te){for(var Ye=null,Ke=null,Ze=H,nt=H=0,an=null;Ze!==null&&nt<q.length;nt++){Ze.index>nt?(an=Ze,Ze=null):an=Ze.sibling;var Et=ge(j,Ze,q[nt],Te);if(Et===null){Ze===null&&(Ze=an);break}n&&Ze&&Et.alternate===null&&i(j,Ze),H=m(Et,H,nt),Ke===null?Ye=Et:Ke.sibling=Et,Ke=Et,Ze=an}if(nt===q.length)return o(j,Ze),kt&&Nr(j,nt),Ye;if(Ze===null){for(;nt<q.length;nt++)Ze=ye(j,q[nt],Te),Ze!==null&&(H=m(Ze,H,nt),Ke===null?Ye=Ze:Ke.sibling=Ze,Ke=Ze);return kt&&Nr(j,nt),Ye}for(Ze=u(j,Ze);nt<q.length;nt++)an=Ue(Ze,j,nt,q[nt],Te),an!==null&&(n&&an.alternate!==null&&Ze.delete(an.key===null?nt:an.key),H=m(an,H,nt),Ke===null?Ye=an:Ke.sibling=an,Ke=an);return n&&Ze.forEach(function(mr){return i(j,mr)}),kt&&Nr(j,nt),Ye}function Ge(j,H,q,Te){var Ye=ae(q);if(typeof Ye!="function")throw Error(t(150));if(q=Ye.call(q),q==null)throw Error(t(151));for(var Ke=Ye=null,Ze=H,nt=H=0,an=null,Et=q.next();Ze!==null&&!Et.done;nt++,Et=q.next()){Ze.index>nt?(an=Ze,Ze=null):an=Ze.sibling;var mr=ge(j,Ze,Et.value,Te);if(mr===null){Ze===null&&(Ze=an);break}n&&Ze&&mr.alternate===null&&i(j,Ze),H=m(mr,H,nt),Ke===null?Ye=mr:Ke.sibling=mr,Ke=mr,Ze=an}if(Et.done)return o(j,Ze),kt&&Nr(j,nt),Ye;if(Ze===null){for(;!Et.done;nt++,Et=q.next())Et=ye(j,Et.value,Te),Et!==null&&(H=m(Et,H,nt),Ke===null?Ye=Et:Ke.sibling=Et,Ke=Et);return kt&&Nr(j,nt),Ye}for(Ze=u(j,Ze);!Et.done;nt++,Et=q.next())Et=Ue(Ze,j,nt,Et.value,Te),Et!==null&&(n&&Et.alternate!==null&&Ze.delete(Et.key===null?nt:Et.key),H=m(Et,H,nt),Ke===null?Ye=Et:Ke.sibling=Et,Ke=Et);return n&&Ze.forEach(function(Nv){return i(j,Nv)}),kt&&Nr(j,nt),Ye}function Xt(j,H,q,Te){if(typeof q=="object"&&q!==null&&q.type===N&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case V:e:{for(var Ye=q.key,Ke=H;Ke!==null;){if(Ke.key===Ye){if(Ye=q.type,Ye===N){if(Ke.tag===7){o(j,Ke.sibling),H=d(Ke,q.props.children),H.return=j,j=H;break e}}else if(Ke.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===se&&wh(Ye)===Ke.type){o(j,Ke.sibling),H=d(Ke,q.props),H.ref=Po(j,Ke,q),H.return=j,j=H;break e}o(j,Ke);break}else i(j,Ke);Ke=Ke.sibling}q.type===N?(H=Gr(q.props.children,j.mode,Te,q.key),H.return=j,j=H):(Te=ol(q.type,q.key,q.props,null,j.mode,Te),Te.ref=Po(j,H,q),Te.return=j,j=Te)}return M(j);case k:e:{for(Ke=q.key;H!==null;){if(H.key===Ke)if(H.tag===4&&H.stateNode.containerInfo===q.containerInfo&&H.stateNode.implementation===q.implementation){o(j,H.sibling),H=d(H,q.children||[]),H.return=j,j=H;break e}else{o(j,H);break}else i(j,H);H=H.sibling}H=Pc(q,j.mode,Te),H.return=j,j=H}return M(j);case se:return Ke=q._init,Xt(j,H,Ke(q._payload),Te)}if(We(q))return He(j,H,q,Te);if(ae(q))return Ge(j,H,q,Te);Fa(j,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,H!==null&&H.tag===6?(o(j,H.sibling),H=d(H,q),H.return=j,j=H):(o(j,H),H=Cc(q,j.mode,Te),H.return=j,j=H),M(j)):o(j,H)}return Xt}var Es=Ah(!0),Rh=Ah(!1),Oa=rr(null),ka=null,Ms=null,ku=null;function Bu(){ku=Ms=ka=null}function zu(n){var i=Oa.current;Nt(Oa),n._currentValue=i}function Hu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function Ts(n,i){ka=n,ku=Ms=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Dn=!0),n.firstContext=null)}function Yn(n){var i=n._currentValue;if(ku!==n)if(n={context:n,memoizedValue:i,next:null},Ms===null){if(ka===null)throw Error(t(308));Ms=n,ka.dependencies={lanes:0,firstContext:n}}else Ms=Ms.next=n;return i}var Fr=null;function Vu(n){Fr===null?Fr=[n]:Fr.push(n)}function Ch(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,Vu(i)):(o.next=d.next,d.next=o),i.interleaved=o,bi(n,u)}function bi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var ar=!1;function Gu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ph(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Di(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function lr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,St&2){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,bi(n,o)}return d=u.interleaved,d===null?(i.next=i,Vu(u)):(i.next=d.next,d.next=i),u.interleaved=i,bi(n,o)}function Ba(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,rn(n,o)}}function bh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=M:m=m.next=M,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function za(n,i,o,u){var d=n.updateQueue;ar=!1;var m=d.firstBaseUpdate,M=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var F=U,ee=F.next;F.next=null,M===null?m=ee:M.next=ee,M=F;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,U=ve.lastBaseUpdate,U!==M&&(U===null?ve.firstBaseUpdate=ee:U.next=ee,ve.lastBaseUpdate=F))}if(m!==null){var ye=d.baseState;M=0,ve=ee=F=null,U=m;do{var ge=U.lane,Ue=U.eventTime;if((u&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Ue,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var He=n,Ge=U;switch(ge=i,Ue=o,Ge.tag){case 1:if(He=Ge.payload,typeof He=="function"){ye=He.call(Ue,ye,ge);break e}ye=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ge.payload,ge=typeof He=="function"?He.call(Ue,ye,ge):He,ge==null)break e;ye=re({},ye,ge);break e;case 2:ar=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,ge=d.effects,ge===null?d.effects=[U]:ge.push(U))}else Ue={eventTime:Ue,lane:ge,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ve===null?(ee=ve=Ue,F=ye):ve=ve.next=Ue,M|=ge;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;ge=U,U=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(ve===null&&(F=ye),d.baseState=F,d.firstBaseUpdate=ee,d.lastBaseUpdate=ve,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Br|=M,n.lanes=M,n.memoizedState=ye}}function Dh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var bo={},pi=rr(bo),Do=rr(bo),Lo=rr(bo);function Or(n){if(n===bo)throw Error(t(174));return n}function Wu(n,i){switch(Lt(Lo,i),Lt(Do,n),Lt(pi,bo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Xe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Xe(i,n)}Nt(pi),Lt(pi,i)}function ws(){Nt(pi),Nt(Do),Nt(Lo)}function Lh(n){Or(Lo.current);var i=Or(pi.current),o=Xe(i,n.type);i!==o&&(Lt(Do,n),Lt(pi,o))}function Xu(n){Do.current===n&&(Nt(pi),Nt(Do))}var Bt=rr(0);function Ha(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Yu=[];function ju(){for(var n=0;n<Yu.length;n++)Yu[n]._workInProgressVersionPrimary=null;Yu.length=0}var Va=C.ReactCurrentDispatcher,$u=C.ReactCurrentBatchConfig,kr=0,zt=null,Zt=null,sn=null,Ga=!1,Uo=!1,Io=0,rv=0;function mn(){throw Error(t(321))}function qu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Jn(n[o],i[o]))return!1;return!0}function Ku(n,i,o,u,d,m){if(kr=m,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Va.current=n===null||n.memoizedState===null?lv:uv,n=o(u,d),Uo){m=0;do{if(Uo=!1,Io=0,25<=m)throw Error(t(301));m+=1,sn=Zt=null,i.updateQueue=null,Va.current=cv,n=o(u,d)}while(Uo)}if(Va.current=Ya,i=Zt!==null&&Zt.next!==null,kr=0,sn=Zt=zt=null,Ga=!1,i)throw Error(t(300));return n}function Zu(){var n=Io!==0;return Io=0,n}function mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?zt.memoizedState=sn=n:sn=sn.next=n,sn}function jn(){if(Zt===null){var n=zt.alternate;n=n!==null?n.memoizedState:null}else n=Zt.next;var i=sn===null?zt.memoizedState:sn.next;if(i!==null)sn=i,Zt=n;else{if(n===null)throw Error(t(310));Zt=n,n={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},sn===null?zt.memoizedState=sn=n:sn=sn.next=n}return sn}function No(n,i){return typeof i=="function"?i(n):i}function Qu(n){var i=jn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=Zt,d=u.baseQueue,m=o.pending;if(m!==null){if(d!==null){var M=d.next;d.next=m.next,m.next=M}u.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,u=u.baseState;var U=M=null,F=null,ee=m;do{var ve=ee.lane;if((kr&ve)===ve)F!==null&&(F=F.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),u=ee.hasEagerState?ee.eagerState:n(u,ee.action);else{var ye={lane:ve,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};F===null?(U=F=ye,M=u):F=F.next=ye,zt.lanes|=ve,Br|=ve}ee=ee.next}while(ee!==null&&ee!==m);F===null?M=u:F.next=U,Jn(u,i.memoizedState)||(Dn=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=F,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do m=d.lane,zt.lanes|=m,Br|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Ju(n){var i=jn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do m=n(m,M.action),M=M.next;while(M!==d);Jn(m,i.memoizedState)||(Dn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function Uh(){}function Ih(n,i){var o=zt,u=jn(),d=i(),m=!Jn(u.memoizedState,d);if(m&&(u.memoizedState=d,Dn=!0),u=u.queue,ec(Oh.bind(null,o,u,n),[n]),u.getSnapshot!==i||m||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,Fo(9,Fh.bind(null,o,u,d,i),void 0,null),on===null)throw Error(t(349));kr&30||Nh(o,i,d)}return d}function Nh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Fh(n,i,o,u){i.value=o,i.getSnapshot=u,kh(i)&&Bh(n)}function Oh(n,i,o){return o(function(){kh(i)&&Bh(n)})}function kh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Jn(n,o)}catch{return!0}}function Bh(n){var i=bi(n,1);i!==null&&ri(i,n,1,-1)}function zh(n){var i=mi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:n},i.queue=n,n=n.dispatch=av.bind(null,zt,n),[i.memoizedState,n]}function Fo(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function Hh(){return jn().memoizedState}function Wa(n,i,o,u){var d=mi();zt.flags|=n,d.memoizedState=Fo(1|i,o,void 0,u===void 0?null:u)}function Xa(n,i,o,u){var d=jn();u=u===void 0?null:u;var m=void 0;if(Zt!==null){var M=Zt.memoizedState;if(m=M.destroy,u!==null&&qu(u,M.deps)){d.memoizedState=Fo(i,o,m,u);return}}zt.flags|=n,d.memoizedState=Fo(1|i,o,m,u)}function Vh(n,i){return Wa(8390656,8,n,i)}function ec(n,i){return Xa(2048,8,n,i)}function Gh(n,i){return Xa(4,2,n,i)}function Wh(n,i){return Xa(4,4,n,i)}function Xh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Yh(n,i,o){return o=o!=null?o.concat([n]):null,Xa(4,4,Xh.bind(null,i,n),o)}function tc(){}function jh(n,i){var o=jn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&qu(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function $h(n,i){var o=jn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&qu(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function qh(n,i,o){return kr&21?(Jn(o,i)||(o=bt(),zt.lanes|=o,Br|=o,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Dn=!0),n.memoizedState=o)}function sv(n,i){var o=yt;yt=o!==0&&4>o?o:4,n(!0);var u=$u.transition;$u.transition={};try{n(!1),i()}finally{yt=o,$u.transition=u}}function Kh(){return jn().memoizedState}function ov(n,i,o){var u=dr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Zh(n))Qh(i,o);else if(o=Ch(n,i,o,u),o!==null){var d=Tn();ri(o,n,u,d),Jh(o,i,u)}}function av(n,i,o){var u=dr(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Zh(n))Qh(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,U=m(M,o);if(d.hasEagerState=!0,d.eagerState=U,Jn(U,M)){var F=i.interleaved;F===null?(d.next=d,Vu(i)):(d.next=F.next,F.next=d),i.interleaved=d;return}}catch{}finally{}o=Ch(n,i,d,u),o!==null&&(d=Tn(),ri(o,n,u,d),Jh(o,i,u))}}function Zh(n){var i=n.alternate;return n===zt||i!==null&&i===zt}function Qh(n,i){Uo=Ga=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Jh(n,i,o){if(o&4194240){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,rn(n,o)}}var Ya={readContext:Yn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},lv={readContext:Yn,useCallback:function(n,i){return mi().memoizedState=[n,i===void 0?null:i],n},useContext:Yn,useEffect:Vh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Wa(4194308,4,Xh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Wa(4194308,4,n,i)},useInsertionEffect:function(n,i){return Wa(4,2,n,i)},useMemo:function(n,i){var o=mi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=mi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=ov.bind(null,zt,n),[u.memoizedState,n]},useRef:function(n){var i=mi();return n={current:n},i.memoizedState=n},useState:zh,useDebugValue:tc,useDeferredValue:function(n){return mi().memoizedState=n},useTransition:function(){var n=zh(!1),i=n[0];return n=sv.bind(null,n[1]),mi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=zt,d=mi();if(kt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),on===null)throw Error(t(349));kr&30||Nh(u,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,Vh(Oh.bind(null,u,m,n),[n]),u.flags|=2048,Fo(9,Fh.bind(null,u,m,o,i),void 0,null),o},useId:function(){var n=mi(),i=on.identifierPrefix;if(kt){var o=Pi,u=Ci;o=(u&~(1<<32-st(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Io++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=rv++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},uv={readContext:Yn,useCallback:jh,useContext:Yn,useEffect:ec,useImperativeHandle:Yh,useInsertionEffect:Gh,useLayoutEffect:Wh,useMemo:$h,useReducer:Qu,useRef:Hh,useState:function(){return Qu(No)},useDebugValue:tc,useDeferredValue:function(n){var i=jn();return qh(i,Zt.memoizedState,n)},useTransition:function(){var n=Qu(No)[0],i=jn().memoizedState;return[n,i]},useMutableSource:Uh,useSyncExternalStore:Ih,useId:Kh,unstable_isNewReconciler:!1},cv={readContext:Yn,useCallback:jh,useContext:Yn,useEffect:ec,useImperativeHandle:Yh,useInsertionEffect:Gh,useLayoutEffect:Wh,useMemo:$h,useReducer:Ju,useRef:Hh,useState:function(){return Ju(No)},useDebugValue:tc,useDeferredValue:function(n){var i=jn();return Zt===null?i.memoizedState=n:qh(i,Zt.memoizedState,n)},useTransition:function(){var n=Ju(No)[0],i=jn().memoizedState;return[n,i]},useMutableSource:Uh,useSyncExternalStore:Ih,useId:Kh,unstable_isNewReconciler:!1};function ti(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function nc(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:re({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var ja={isMounted:function(n){return(n=n._reactInternals)?fi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Tn(),d=dr(n),m=Di(u,d);m.payload=i,o!=null&&(m.callback=o),i=lr(n,m,d),i!==null&&(ri(i,n,d,u),Ba(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Tn(),d=dr(n),m=Di(u,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=lr(n,m,d),i!==null&&(ri(i,n,d,u),Ba(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Tn(),u=dr(n),d=Di(o,u);d.tag=2,i!=null&&(d.callback=i),i=lr(n,d,u),i!==null&&(ri(i,n,u,o),Ba(i,n,u))}};function ep(n,i,o,u,d,m,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,M):i.prototype&&i.prototype.isPureReactComponent?!Eo(o,u)||!Eo(d,m):!0}function tp(n,i,o){var u=!1,d=sr,m=i.contextType;return typeof m=="object"&&m!==null?m=Yn(m):(d=bn(i)?Ur:pn.current,u=i.contextTypes,m=(u=u!=null)?vs(n,d):sr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ja,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function np(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&ja.enqueueReplaceState(i,i.state,null)}function ic(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Gu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Yn(m):(m=bn(i)?Ur:pn.current,d.context=vs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(nc(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ja.enqueueReplaceState(d,d.state,null),za(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function As(n,i){try{var o="",u=i;do o+=he(u),u=u.return;while(u);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function rc(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function sc(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var fv=typeof WeakMap=="function"?WeakMap:Map;function ip(n,i,o){o=Di(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){el||(el=!0,yc=u),sc(n,i)},o}function rp(n,i,o){o=Di(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){sc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){sc(n,i),typeof u!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function sp(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new fv;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=wv.bind(null,n,i,o),i.then(n,n))}function op(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function ap(n,i,o,u,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Di(-1,1),i.tag=2,lr(o,i,1))),o.lanes|=1),n)}var dv=C.ReactCurrentOwner,Dn=!1;function Mn(n,i,o,u){i.child=n===null?Rh(i,null,o,u):Es(i,n.child,o,u)}function lp(n,i,o,u,d){o=o.render;var m=i.ref;return Ts(i,d),u=Ku(n,i,o,u,m,d),o=Zu(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Li(n,i,d)):(kt&&o&&Uu(i),i.flags|=1,Mn(n,i,u,d),i.child)}function up(n,i,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!Rc(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,cp(n,i,m,u,d)):(n=ol(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!(n.lanes&d)){var M=m.memoizedProps;if(o=o.compare,o=o!==null?o:Eo,o(M,u)&&n.ref===i.ref)return Li(n,i,d)}return i.flags|=1,n=pr(m,u),n.ref=i.ref,n.return=i,i.child=n}function cp(n,i,o,u,d){if(n!==null){var m=n.memoizedProps;if(Eo(m,u)&&n.ref===i.ref)if(Dn=!1,i.pendingProps=u=m,(n.lanes&d)!==0)n.flags&131072&&(Dn=!0);else return i.lanes=n.lanes,Li(n,i,d)}return oc(n,i,o,u,d)}function fp(n,i,o){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(Cs,zn),zn|=o;else{if(!(o&1073741824))return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Lt(Cs,zn),zn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,Lt(Cs,zn),zn|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,Lt(Cs,zn),zn|=u;return Mn(n,i,d,o),i.child}function dp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function oc(n,i,o,u,d){var m=bn(o)?Ur:pn.current;return m=vs(i,m),Ts(i,d),o=Ku(n,i,o,u,m,d),u=Zu(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Li(n,i,d)):(kt&&u&&Uu(i),i.flags|=1,Mn(n,i,o,d),i.child)}function hp(n,i,o,u,d){if(bn(o)){var m=!0;Da(i)}else m=!1;if(Ts(i,d),i.stateNode===null)qa(n,i),tp(i,o,u),ic(i,o,u,d),u=!0;else if(n===null){var M=i.stateNode,U=i.memoizedProps;M.props=U;var F=M.context,ee=o.contextType;typeof ee=="object"&&ee!==null?ee=Yn(ee):(ee=bn(o)?Ur:pn.current,ee=vs(i,ee));var ve=o.getDerivedStateFromProps,ye=typeof ve=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==u||F!==ee)&&np(i,M,u,ee),ar=!1;var ge=i.memoizedState;M.state=ge,za(i,u,M,d),F=i.memoizedState,U!==u||ge!==F||Pn.current||ar?(typeof ve=="function"&&(nc(i,o,ve,u),F=i.memoizedState),(U=ar||ep(i,o,U,u,ge,F,ee))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=F),M.props=u,M.state=F,M.context=ee,u=U):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,Ph(n,i),U=i.memoizedProps,ee=i.type===i.elementType?U:ti(i.type,U),M.props=ee,ye=i.pendingProps,ge=M.context,F=o.contextType,typeof F=="object"&&F!==null?F=Yn(F):(F=bn(o)?Ur:pn.current,F=vs(i,F));var Ue=o.getDerivedStateFromProps;(ve=typeof Ue=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==ye||ge!==F)&&np(i,M,u,F),ar=!1,ge=i.memoizedState,M.state=ge,za(i,u,M,d);var He=i.memoizedState;U!==ye||ge!==He||Pn.current||ar?(typeof Ue=="function"&&(nc(i,o,Ue,u),He=i.memoizedState),(ee=ar||ep(i,o,ee,u,ge,He,F)||!1)?(ve||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,He,F),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,He,F)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=He),M.props=u,M.state=He,M.context=F,u=ee):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),u=!1)}return ac(n,i,o,u,m,d)}function ac(n,i,o,u,d,m){dp(n,i);var M=(i.flags&128)!==0;if(!u&&!M)return d&&vh(i,o,!1),Li(n,i,m);u=i.stateNode,dv.current=i;var U=M&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&M?(i.child=Es(i,n.child,null,m),i.child=Es(i,null,U,m)):Mn(n,i,U,m),i.memoizedState=u.state,d&&vh(i,o,!0),i.child}function pp(n){var i=n.stateNode;i.pendingContext?gh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&gh(n,i.context,!1),Wu(n,i.containerInfo)}function mp(n,i,o,u,d){return Ss(),Ou(d),i.flags|=256,Mn(n,i,o,u),i.child}var lc={dehydrated:null,treeContext:null,retryLane:0};function uc(n){return{baseLanes:n,cachePool:null,transitions:null}}function gp(n,i,o){var u=i.pendingProps,d=Bt.current,m=!1,M=(i.flags&128)!==0,U;if((U=M)||(U=n!==null&&n.memoizedState===null?!1:(d&2)!==0),U?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Lt(Bt,d&1),n===null)return Fu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(M=u.children,n=u.fallback,m?(u=i.mode,m=i.child,M={mode:"hidden",children:M},!(u&1)&&m!==null?(m.childLanes=0,m.pendingProps=M):m=al(M,u,0,null),n=Gr(n,u,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=uc(o),i.memoizedState=lc,n):cc(i,M));if(d=n.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return hv(n,i,M,u,U,d,o);if(m){m=u.fallback,M=i.mode,d=n.child,U=d.sibling;var F={mode:"hidden",children:u.children};return!(M&1)&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=F,i.deletions=null):(u=pr(d,F),u.subtreeFlags=d.subtreeFlags&14680064),U!==null?m=pr(U,m):(m=Gr(m,M,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,M=n.child.memoizedState,M=M===null?uc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},m.memoizedState=M,m.childLanes=n.childLanes&~o,i.memoizedState=lc,u}return m=n.child,n=m.sibling,u=pr(m,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function cc(n,i){return i=al({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function $a(n,i,o,u){return u!==null&&Ou(u),Es(i,n.child,null,o),n=cc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function hv(n,i,o,u,d,m,M){if(o)return i.flags&256?(i.flags&=-257,u=rc(Error(t(422))),$a(n,i,M,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=al({mode:"visible",children:u.children},d,0,null),m=Gr(m,d,M,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,i.mode&1&&Es(i,n.child,null,M),i.child.memoizedState=uc(M),i.memoizedState=lc,m);if(!(i.mode&1))return $a(n,i,M,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var U=u.dgst;return u=U,m=Error(t(419)),u=rc(m,u,void 0),$a(n,i,M,u)}if(U=(M&n.childLanes)!==0,Dn||U){if(u=on,u!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|M)?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,bi(n,d),ri(u,n,d,-1))}return Ac(),u=rc(Error(t(421))),$a(n,i,M,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Av.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Bn=ir(d.nextSibling),kn=i,kt=!0,ei=null,n!==null&&(Wn[Xn++]=Ci,Wn[Xn++]=Pi,Wn[Xn++]=Ir,Ci=n.id,Pi=n.overflow,Ir=i),i=cc(i,u.children),i.flags|=4096,i)}function _p(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Hu(n.return,i,o)}function fc(n,i,o,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=d)}function vp(n,i,o){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(Mn(n,i,u.children,o),u=Bt.current,u&2)u=u&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&_p(n,o,i);else if(n.tag===19)_p(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Lt(Bt,u),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Ha(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),fc(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Ha(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}fc(i,!0,o,null,m);break;case"together":fc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function qa(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Li(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Br|=i.lanes,!(o&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=pr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=pr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function pv(n,i,o){switch(i.tag){case 3:pp(i),Ss();break;case 5:Lh(i);break;case 1:bn(i.type)&&Da(i);break;case 4:Wu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Lt(Oa,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Lt(Bt,Bt.current&1),i.flags|=128,null):o&i.child.childLanes?gp(n,i,o):(Lt(Bt,Bt.current&1),n=Li(n,i,o),n!==null?n.sibling:null);Lt(Bt,Bt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,n.flags&128){if(u)return vp(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Lt(Bt,Bt.current),u)break;return null;case 22:case 23:return i.lanes=0,fp(n,i,o)}return Li(n,i,o)}var xp,dc,yp,Sp;xp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},dc=function(){},yp=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Or(pi.current);var m=null;switch(o){case"input":d=O(n,d),u=O(n,u),m=[];break;case"select":d=re({},d,{value:void 0}),u=re({},u,{value:void 0}),m=[];break;case"textarea":d=w(n,d),u=w(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ca)}ft(o,u);var M;o=null;for(ee in d)if(!u.hasOwnProperty(ee)&&d.hasOwnProperty(ee)&&d[ee]!=null)if(ee==="style"){var U=d[ee];for(M in U)U.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(a.hasOwnProperty(ee)?m||(m=[]):(m=m||[]).push(ee,null));for(ee in u){var F=u[ee];if(U=d!=null?d[ee]:void 0,u.hasOwnProperty(ee)&&F!==U&&(F!=null||U!=null))if(ee==="style")if(U){for(M in U)!U.hasOwnProperty(M)||F&&F.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in F)F.hasOwnProperty(M)&&U[M]!==F[M]&&(o||(o={}),o[M]=F[M])}else o||(m||(m=[]),m.push(ee,o)),o=F;else ee==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,U=U?U.__html:void 0,F!=null&&U!==F&&(m=m||[]).push(ee,F)):ee==="children"?typeof F!="string"&&typeof F!="number"||(m=m||[]).push(ee,""+F):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(a.hasOwnProperty(ee)?(F!=null&&ee==="onScroll"&&It("scroll",n),m||U===F||(m=[])):(m=m||[]).push(ee,F))}o&&(m=m||[]).push("style",o);var ee=m;(i.updateQueue=ee)&&(i.flags|=4)}},Sp=function(n,i,o,u){o!==u&&(i.flags|=4)};function Oo(n,i){if(!kt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function gn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function mv(n,i,o){var u=i.pendingProps;switch(Iu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return bn(i.type)&&ba(),gn(i),null;case 3:return u=i.stateNode,ws(),Nt(Pn),Nt(pn),ju(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Na(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,ei!==null&&(Mc(ei),ei=null))),dc(n,i),gn(i),null;case 5:Xu(i);var d=Or(Lo.current);if(o=i.type,n!==null&&i.stateNode!=null)yp(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return gn(i),null}if(n=Or(pi.current),Na(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[hi]=i,u[Ro]=m,n=(i.mode&1)!==0,o){case"dialog":It("cancel",u),It("close",u);break;case"iframe":case"object":case"embed":It("load",u);break;case"video":case"audio":for(d=0;d<To.length;d++)It(To[d],u);break;case"source":It("error",u);break;case"img":case"image":case"link":It("error",u),It("load",u);break;case"details":It("toggle",u);break;case"input":yn(u,m),It("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},It("invalid",u);break;case"textarea":K(u,m),It("invalid",u)}ft(o,m),d=null;for(var M in m)if(m.hasOwnProperty(M)){var U=m[M];M==="children"?typeof U=="string"?u.textContent!==U&&(m.suppressHydrationWarning!==!0&&Ra(u.textContent,U,n),d=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(m.suppressHydrationWarning!==!0&&Ra(u.textContent,U,n),d=["children",""+U]):a.hasOwnProperty(M)&&U!=null&&M==="onScroll"&&It("scroll",u)}switch(o){case"input":At(u),je(u,m,!0);break;case"textarea":At(u),_e(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Ca)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ue(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(o,{is:u.is}):(n=M.createElement(o),o==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,o),n[hi]=i,n[Ro]=u,xp(n,i,!1,!1),i.stateNode=n;e:{switch(M=it(o,u),o){case"dialog":It("cancel",n),It("close",n),d=u;break;case"iframe":case"object":case"embed":It("load",n),d=u;break;case"video":case"audio":for(d=0;d<To.length;d++)It(To[d],n);d=u;break;case"source":It("error",n),d=u;break;case"img":case"image":case"link":It("error",n),It("load",n),d=u;break;case"details":It("toggle",n),d=u;break;case"input":yn(n,u),d=O(n,u),It("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=re({},u,{value:void 0}),It("invalid",n);break;case"textarea":K(n,u),d=w(n,u),It("invalid",n);break;default:d=u}ft(o,d),U=d;for(m in U)if(U.hasOwnProperty(m)){var F=U[m];m==="style"?et(n,F):m==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Fe(n,F)):m==="children"?typeof F=="string"?(o!=="textarea"||F!=="")&&lt(n,F):typeof F=="number"&&lt(n,""+F):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?F!=null&&m==="onScroll"&&It("scroll",n):F!=null&&L(n,m,F,M))}switch(o){case"input":At(n),je(n,u,!1);break;case"textarea":At(n),_e(n);break;case"option":u.value!=null&&n.setAttribute("value",""+we(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?b(n,!!u.multiple,m,!1):u.defaultValue!=null&&b(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ca)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(n&&i.stateNode!=null)Sp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Or(Lo.current),Or(pi.current),Na(i)){if(u=i.stateNode,o=i.memoizedProps,u[hi]=i,(m=u.nodeValue!==o)&&(n=kn,n!==null))switch(n.tag){case 3:Ra(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ra(u.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[hi]=i,i.stateNode=u}return gn(i),null;case 13:if(Nt(Bt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(kt&&Bn!==null&&i.mode&1&&!(i.flags&128))Th(),Ss(),i.flags|=98560,m=!1;else if(m=Na(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[hi]=i}else Ss(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;gn(i),m=!1}else ei!==null&&(Mc(ei),ei=null),m=!0;if(!m)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(n===null||Bt.current&1?Qt===0&&(Qt=3):Ac())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return ws(),dc(n,i),n===null&&wo(i.stateNode.containerInfo),gn(i),null;case 10:return zu(i.type._context),gn(i),null;case 17:return bn(i.type)&&ba(),gn(i),null;case 19:if(Nt(Bt),m=i.memoizedState,m===null)return gn(i),null;if(u=(i.flags&128)!==0,M=m.rendering,M===null)if(u)Oo(m,!1);else{if(Qt!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(M=Ha(n),M!==null){for(i.flags|=128,Oo(m,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,n=u,m.flags&=14680066,M=m.alternate,M===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=M.childLanes,m.lanes=M.lanes,m.child=M.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=M.memoizedProps,m.memoizedState=M.memoizedState,m.updateQueue=M.updateQueue,m.type=M.type,n=M.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Lt(Bt,Bt.current&1|2),i.child}n=n.sibling}m.tail!==null&&$()>Ps&&(i.flags|=128,u=!0,Oo(m,!1),i.lanes=4194304)}else{if(!u)if(n=Ha(M),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Oo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!M.alternate&&!kt)return gn(i),null}else 2*$()-m.renderingStartTime>Ps&&o!==1073741824&&(i.flags|=128,u=!0,Oo(m,!1),i.lanes=4194304);m.isBackwards?(M.sibling=i.child,i.child=M):(o=m.last,o!==null?o.sibling=M:i.child=M,m.last=M)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=$(),i.sibling=null,o=Bt.current,Lt(Bt,u?o&1|2:o&1),i):(gn(i),null);case 22:case 23:return wc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?zn&1073741824&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function gv(n,i){switch(Iu(i),i.tag){case 1:return bn(i.type)&&ba(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ws(),Nt(Pn),Nt(pn),ju(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return Xu(i),null;case 13:if(Nt(Bt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ss()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Nt(Bt),null;case 4:return ws(),null;case 10:return zu(i.type._context),null;case 22:case 23:return wc(),null;case 24:return null;default:return null}}var Ka=!1,_n=!1,_v=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Rs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Wt(n,i,u)}else o.current=null}function hc(n,i,o){try{o()}catch(u){Wt(n,i,u)}}var Ep=!1;function vv(n,i){if(wu=ga,n=eh(),_u(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var M=0,U=-1,F=-1,ee=0,ve=0,ye=n,ge=null;t:for(;;){for(var Ue;ye!==o||d!==0&&ye.nodeType!==3||(U=M+d),ye!==m||u!==0&&ye.nodeType!==3||(F=M+u),ye.nodeType===3&&(M+=ye.nodeValue.length),(Ue=ye.firstChild)!==null;)ge=ye,ye=Ue;for(;;){if(ye===n)break t;if(ge===o&&++ee===d&&(U=M),ge===m&&++ve===u&&(F=M),(Ue=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Ue}o=U===-1||F===-1?null:{start:U,end:F}}else o=null}o=o||{start:0,end:0}}else o=null;for(Au={focusedElem:n,selectionRange:o},ga=!1,Oe=i;Oe!==null;)if(i=Oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Oe=n;else for(;Oe!==null;){i=Oe;try{var He=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ge=He.memoizedProps,Xt=He.memoizedState,j=i.stateNode,H=j.getSnapshotBeforeUpdate(i.elementType===i.type?Ge:ti(i.type,Ge),Xt);j.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var q=i.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Wt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,Oe=n;break}Oe=i.return}return He=Ep,Ep=!1,He}function ko(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&hc(i,o,m)}d=d.next}while(d!==u)}}function Za(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function pc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Mp(n){var i=n.alternate;i!==null&&(n.alternate=null,Mp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[hi],delete i[Ro],delete i[bu],delete i[ev],delete i[tv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Tp(n){return n.tag===5||n.tag===3||n.tag===4}function wp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Tp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function mc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ca));else if(u!==4&&(n=n.child,n!==null))for(mc(n,i,o),n=n.sibling;n!==null;)mc(n,i,o),n=n.sibling}function gc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(gc(n,i,o),n=n.sibling;n!==null;)gc(n,i,o),n=n.sibling}var cn=null,ni=!1;function ur(n,i,o){for(o=o.child;o!==null;)Ap(n,i,o),o=o.sibling}function Ap(n,i,o){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(Je,o)}catch{}switch(o.tag){case 5:_n||Rs(o,i);case 6:var u=cn,d=ni;cn=null,ur(n,i,o),cn=u,ni=d,cn!==null&&(ni?(n=cn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):cn.removeChild(o.stateNode));break;case 18:cn!==null&&(ni?(n=cn,o=o.stateNode,n.nodeType===8?Pu(n.parentNode,o):n.nodeType===1&&Pu(n,o),go(n)):Pu(cn,o.stateNode));break;case 4:u=cn,d=ni,cn=o.stateNode.containerInfo,ni=!0,ur(n,i,o),cn=u,ni=d;break;case 0:case 11:case 14:case 15:if(!_n&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,M=m.destroy;m=m.tag,M!==void 0&&(m&2||m&4)&&hc(o,i,M),d=d.next}while(d!==u)}ur(n,i,o);break;case 1:if(!_n&&(Rs(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(U){Wt(o,i,U)}ur(n,i,o);break;case 21:ur(n,i,o);break;case 22:o.mode&1?(_n=(u=_n)||o.memoizedState!==null,ur(n,i,o),_n=u):ur(n,i,o);break;default:ur(n,i,o)}}function Rp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new _v),i.forEach(function(u){var d=Rv.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function ii(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var m=n,M=i,U=M;e:for(;U!==null;){switch(U.tag){case 5:cn=U.stateNode,ni=!1;break e;case 3:cn=U.stateNode.containerInfo,ni=!0;break e;case 4:cn=U.stateNode.containerInfo,ni=!0;break e}U=U.return}if(cn===null)throw Error(t(160));Ap(m,M,d),cn=null,ni=!1;var F=d.alternate;F!==null&&(F.return=null),d.return=null}catch(ee){Wt(d,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Cp(i,n),i=i.sibling}function Cp(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ii(i,n),gi(n),u&4){try{ko(3,n,n.return),Za(3,n)}catch(Ge){Wt(n,n.return,Ge)}try{ko(5,n,n.return)}catch(Ge){Wt(n,n.return,Ge)}}break;case 1:ii(i,n),gi(n),u&512&&o!==null&&Rs(o,o.return);break;case 5:if(ii(i,n),gi(n),u&512&&o!==null&&Rs(o,o.return),n.flags&32){var d=n.stateNode;try{lt(d,"")}catch(Ge){Wt(n,n.return,Ge)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,M=o!==null?o.memoizedProps:m,U=n.type,F=n.updateQueue;if(n.updateQueue=null,F!==null)try{U==="input"&&m.type==="radio"&&m.name!=null&&pt(d,m),it(U,M);var ee=it(U,m);for(M=0;M<F.length;M+=2){var ve=F[M],ye=F[M+1];ve==="style"?et(d,ye):ve==="dangerouslySetInnerHTML"?Fe(d,ye):ve==="children"?lt(d,ye):L(d,ve,ye,ee)}switch(U){case"input":ct(d,m);break;case"textarea":me(d,m);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Ue=m.value;Ue!=null?b(d,!!m.multiple,Ue,!1):ge!==!!m.multiple&&(m.defaultValue!=null?b(d,!!m.multiple,m.defaultValue,!0):b(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ro]=m}catch(Ge){Wt(n,n.return,Ge)}}break;case 6:if(ii(i,n),gi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Ge){Wt(n,n.return,Ge)}}break;case 3:if(ii(i,n),gi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{go(i.containerInfo)}catch(Ge){Wt(n,n.return,Ge)}break;case 4:ii(i,n),gi(n);break;case 13:ii(i,n),gi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(xc=$())),u&4&&Rp(n);break;case 22:if(ve=o!==null&&o.memoizedState!==null,n.mode&1?(_n=(ee=_n)||ve,ii(i,n),_n=ee):ii(i,n),gi(n),u&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!ve&&n.mode&1)for(Oe=n,ve=n.child;ve!==null;){for(ye=Oe=ve;Oe!==null;){switch(ge=Oe,Ue=ge.child,ge.tag){case 0:case 11:case 14:case 15:ko(4,ge,ge.return);break;case 1:Rs(ge,ge.return);var He=ge.stateNode;if(typeof He.componentWillUnmount=="function"){u=ge,o=ge.return;try{i=u,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ge){Wt(u,o,Ge)}}break;case 5:Rs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Dp(ye);continue}}Ue!==null?(Ue.return=ge,Oe=Ue):Dp(ye)}ve=ve.sibling}e:for(ve=null,ye=n;;){if(ye.tag===5){if(ve===null){ve=ye;try{d=ye.stateNode,ee?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(U=ye.stateNode,F=ye.memoizedProps.style,M=F!=null&&F.hasOwnProperty("display")?F.display:null,U.style.display=qe("display",M))}catch(Ge){Wt(n,n.return,Ge)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=ee?"":ye.memoizedProps}catch(Ge){Wt(n,n.return,Ge)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ii(i,n),gi(n),u&4&&Rp(n);break;case 21:break;default:ii(i,n),gi(n)}}function gi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Tp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(lt(d,""),u.flags&=-33);var m=wp(n);gc(n,m,d);break;case 3:case 4:var M=u.stateNode.containerInfo,U=wp(n);mc(n,U,M);break;default:throw Error(t(161))}}catch(F){Wt(n,n.return,F)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function xv(n,i,o){Oe=n,Pp(n)}function Pp(n,i,o){for(var u=(n.mode&1)!==0;Oe!==null;){var d=Oe,m=d.child;if(d.tag===22&&u){var M=d.memoizedState!==null||Ka;if(!M){var U=d.alternate,F=U!==null&&U.memoizedState!==null||_n;U=Ka;var ee=_n;if(Ka=M,(_n=F)&&!ee)for(Oe=d;Oe!==null;)M=Oe,F=M.child,M.tag===22&&M.memoizedState!==null?Lp(d):F!==null?(F.return=M,Oe=F):Lp(d);for(;m!==null;)Oe=m,Pp(m),m=m.sibling;Oe=d,Ka=U,_n=ee}bp(n)}else d.subtreeFlags&8772&&m!==null?(m.return=d,Oe=m):bp(n)}}function bp(n){for(;Oe!==null;){var i=Oe;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:_n||Za(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!_n)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ti(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Dh(i,m,u);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Dh(i,M,o)}break;case 5:var U=i.stateNode;if(o===null&&i.flags&4){o=U;var F=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&o.focus();break;case"img":F.src&&(o.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var ve=ee.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&go(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}_n||i.flags&512&&pc(i)}catch(ge){Wt(i,i.return,ge)}}if(i===n){Oe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function Dp(n){for(;Oe!==null;){var i=Oe;if(i===n){Oe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function Lp(n){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Za(4,i)}catch(F){Wt(i,o,F)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(F){Wt(i,d,F)}}var m=i.return;try{pc(i)}catch(F){Wt(i,m,F)}break;case 5:var M=i.return;try{pc(i)}catch(F){Wt(i,M,F)}}}catch(F){Wt(i,i.return,F)}if(i===n){Oe=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Oe=U;break}Oe=i.return}}var yv=Math.ceil,Qa=C.ReactCurrentDispatcher,_c=C.ReactCurrentOwner,$n=C.ReactCurrentBatchConfig,St=0,on=null,$t=null,fn=0,zn=0,Cs=rr(0),Qt=0,Bo=null,Br=0,Ja=0,vc=0,zo=null,Ln=null,xc=0,Ps=1/0,Ui=null,el=!1,yc=null,cr=null,tl=!1,fr=null,nl=0,Ho=0,Sc=null,il=-1,rl=0;function Tn(){return St&6?$():il!==-1?il:il=$()}function dr(n){return n.mode&1?St&2&&fn!==0?fn&-fn:iv.transition!==null?(rl===0&&(rl=bt()),rl):(n=yt,n!==0||(n=window.event,n=n===void 0?16:Id(n.type)),n):1}function ri(n,i,o,u){if(50<Ho)throw Ho=0,Sc=null,Error(t(185));nn(n,o,u),(!(St&2)||n!==on)&&(n===on&&(!(St&2)&&(Ja|=o),Qt===4&&hr(n,fn)),Un(n,u),o===1&&St===0&&!(i.mode&1)&&(Ps=$()+500,La&&or()))}function Un(n,i){var o=n.callbackNode;En(n,i);var u=dn(n,n===on?fn:0);if(u===0)o!==null&&A(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&A(o),i===1)n.tag===0?nv(Ip.bind(null,n)):xh(Ip.bind(null,n)),Q_(function(){!(St&6)&&or()}),o=null;else{switch(di(u)){case 1:o=Se;break;case 4:o=Ce;break;case 16:o=Le;break;case 536870912:o=tt;break;default:o=Le}o=Vp(o,Up.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Up(n,i){if(il=-1,rl=0,St&6)throw Error(t(327));var o=n.callbackNode;if(bs()&&n.callbackNode!==o)return null;var u=dn(n,n===on?fn:0);if(u===0)return null;if(u&30||u&n.expiredLanes||i)i=sl(n,u);else{i=u;var d=St;St|=2;var m=Fp();(on!==n||fn!==i)&&(Ui=null,Ps=$()+500,Hr(n,i));do try{Mv();break}catch(U){Np(n,U)}while(!0);Bu(),Qa.current=m,St=d,$t!==null?i=0:(on=null,fn=0,i=Qt)}if(i!==0){if(i===2&&(d=wi(n),d!==0&&(u=d,i=Ec(n,d))),i===1)throw o=Bo,Hr(n,0),hr(n,u),Un(n,$()),o;if(i===6)hr(n,u);else{if(d=n.current.alternate,!(u&30)&&!Sv(d)&&(i=sl(n,u),i===2&&(m=wi(n),m!==0&&(u=m,i=Ec(n,m))),i===1))throw o=Bo,Hr(n,0),hr(n,u),Un(n,$()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Vr(n,Ln,Ui);break;case 3:if(hr(n,u),(u&130023424)===u&&(i=xc+500-$(),10<i)){if(dn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Tn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Cu(Vr.bind(null,n,Ln,Ui),i);break}Vr(n,Ln,Ui);break;case 4:if(hr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var M=31-st(u);m=1<<M,M=i[M],M>d&&(d=M),u&=~m}if(u=d,u=$()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*yv(u/1960))-u,10<u){n.timeoutHandle=Cu(Vr.bind(null,n,Ln,Ui),u);break}Vr(n,Ln,Ui);break;case 5:Vr(n,Ln,Ui);break;default:throw Error(t(329))}}}return Un(n,$()),n.callbackNode===o?Up.bind(null,n):null}function Ec(n,i){var o=zo;return n.current.memoizedState.isDehydrated&&(Hr(n,i).flags|=256),n=sl(n,i),n!==2&&(i=Ln,Ln=o,i!==null&&Mc(i)),n}function Mc(n){Ln===null?Ln=n:Ln.push.apply(Ln,n)}function Sv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!Jn(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hr(n,i){for(i&=~vc,i&=~Ja,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-st(i),u=1<<o;n[o]=-1,i&=~u}}function Ip(n){if(St&6)throw Error(t(327));bs();var i=dn(n,0);if(!(i&1))return Un(n,$()),null;var o=sl(n,i);if(n.tag!==0&&o===2){var u=wi(n);u!==0&&(i=u,o=Ec(n,u))}if(o===1)throw o=Bo,Hr(n,0),hr(n,i),Un(n,$()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Vr(n,Ln,Ui),Un(n,$()),null}function Tc(n,i){var o=St;St|=1;try{return n(i)}finally{St=o,St===0&&(Ps=$()+500,La&&or())}}function zr(n){fr!==null&&fr.tag===0&&!(St&6)&&bs();var i=St;St|=1;var o=$n.transition,u=yt;try{if($n.transition=null,yt=1,n)return n()}finally{yt=u,$n.transition=o,St=i,!(St&6)&&or()}}function wc(){zn=Cs.current,Nt(Cs)}function Hr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Z_(o)),$t!==null)for(o=$t.return;o!==null;){var u=o;switch(Iu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ba();break;case 3:ws(),Nt(Pn),Nt(pn),ju();break;case 5:Xu(u);break;case 4:ws();break;case 13:Nt(Bt);break;case 19:Nt(Bt);break;case 10:zu(u.type._context);break;case 22:case 23:wc()}o=o.return}if(on=n,$t=n=pr(n.current,null),fn=zn=i,Qt=0,Bo=null,vc=Ja=Br=0,Ln=zo=null,Fr!==null){for(i=0;i<Fr.length;i++)if(o=Fr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,m=o.pending;if(m!==null){var M=m.next;m.next=d,u.next=M}o.pending=u}Fr=null}return n}function Np(n,i){do{var o=$t;try{if(Bu(),Va.current=Ya,Ga){for(var u=zt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Ga=!1}if(kr=0,sn=Zt=zt=null,Uo=!1,Io=0,_c.current=null,o===null||o.return===null){Qt=1,Bo=i,$t=null;break}e:{var m=n,M=o.return,U=o,F=i;if(i=fn,U.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var ee=F,ve=U,ye=ve.tag;if(!(ve.mode&1)&&(ye===0||ye===11||ye===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ue=op(M);if(Ue!==null){Ue.flags&=-257,ap(Ue,M,U,m,i),Ue.mode&1&&sp(m,ee,i),i=Ue,F=ee;var He=i.updateQueue;if(He===null){var Ge=new Set;Ge.add(F),i.updateQueue=Ge}else He.add(F);break e}else{if(!(i&1)){sp(m,ee,i),Ac();break e}F=Error(t(426))}}else if(kt&&U.mode&1){var Xt=op(M);if(Xt!==null){!(Xt.flags&65536)&&(Xt.flags|=256),ap(Xt,M,U,m,i),Ou(As(F,U));break e}}m=F=As(F,U),Qt!==4&&(Qt=2),zo===null?zo=[m]:zo.push(m),m=M;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var j=ip(m,F,i);bh(m,j);break e;case 1:U=F;var H=m.type,q=m.stateNode;if(!(m.flags&128)&&(typeof H.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&(cr===null||!cr.has(q)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=rp(m,U,i);bh(m,Te);break e}}m=m.return}while(m!==null)}kp(o)}catch(Ye){i=Ye,$t===o&&o!==null&&($t=o=o.return);continue}break}while(!0)}function Fp(){var n=Qa.current;return Qa.current=Ya,n===null?Ya:n}function Ac(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),on===null||!(Br&268435455)&&!(Ja&268435455)||hr(on,fn)}function sl(n,i){var o=St;St|=2;var u=Fp();(on!==n||fn!==i)&&(Ui=null,Hr(n,i));do try{Ev();break}catch(d){Np(n,d)}while(!0);if(Bu(),St=o,Qa.current=u,$t!==null)throw Error(t(261));return on=null,fn=0,Qt}function Ev(){for(;$t!==null;)Op($t)}function Mv(){for(;$t!==null&&!W();)Op($t)}function Op(n){var i=Hp(n.alternate,n,zn);n.memoizedProps=n.pendingProps,i===null?kp(n):$t=i,_c.current=null}function kp(n){var i=n;do{var o=i.alternate;if(n=i.return,i.flags&32768){if(o=gv(o,i),o!==null){o.flags&=32767,$t=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qt=6,$t=null;return}}else if(o=mv(o,i,zn),o!==null){$t=o;return}if(i=i.sibling,i!==null){$t=i;return}$t=i=n}while(i!==null);Qt===0&&(Qt=5)}function Vr(n,i,o){var u=yt,d=$n.transition;try{$n.transition=null,yt=1,Tv(n,i,o,u)}finally{$n.transition=d,yt=u}return null}function Tv(n,i,o,u){do bs();while(fr!==null);if(St&6)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(un(n,m),n===on&&($t=on=null,fn=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||tl||(tl=!0,Vp(Le,function(){return bs(),null})),m=(o.flags&15990)!==0,o.subtreeFlags&15990||m){m=$n.transition,$n.transition=null;var M=yt;yt=1;var U=St;St|=4,_c.current=null,vv(n,o),Cp(o,n),W_(Au),ga=!!wu,Au=wu=null,n.current=o,xv(o),Q(),St=U,yt=M,$n.transition=m}else n.current=o;if(tl&&(tl=!1,fr=n,nl=d),m=n.pendingLanes,m===0&&(cr=null),_t(o.stateNode),Un(n,$()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(el)throw el=!1,n=yc,yc=null,n;return nl&1&&n.tag!==0&&bs(),m=n.pendingLanes,m&1?n===Sc?Ho++:(Ho=0,Sc=n):Ho=0,or(),null}function bs(){if(fr!==null){var n=di(nl),i=$n.transition,o=yt;try{if($n.transition=null,yt=16>n?16:n,fr===null)var u=!1;else{if(n=fr,fr=null,nl=0,St&6)throw Error(t(331));var d=St;for(St|=4,Oe=n.current;Oe!==null;){var m=Oe,M=m.child;if(Oe.flags&16){var U=m.deletions;if(U!==null){for(var F=0;F<U.length;F++){var ee=U[F];for(Oe=ee;Oe!==null;){var ve=Oe;switch(ve.tag){case 0:case 11:case 15:ko(8,ve,m)}var ye=ve.child;if(ye!==null)ye.return=ve,Oe=ye;else for(;Oe!==null;){ve=Oe;var ge=ve.sibling,Ue=ve.return;if(Mp(ve),ve===ee){Oe=null;break}if(ge!==null){ge.return=Ue,Oe=ge;break}Oe=Ue}}}var He=m.alternate;if(He!==null){var Ge=He.child;if(Ge!==null){He.child=null;do{var Xt=Ge.sibling;Ge.sibling=null,Ge=Xt}while(Ge!==null)}}Oe=m}}if(m.subtreeFlags&2064&&M!==null)M.return=m,Oe=M;else e:for(;Oe!==null;){if(m=Oe,m.flags&2048)switch(m.tag){case 0:case 11:case 15:ko(9,m,m.return)}var j=m.sibling;if(j!==null){j.return=m.return,Oe=j;break e}Oe=m.return}}var H=n.current;for(Oe=H;Oe!==null;){M=Oe;var q=M.child;if(M.subtreeFlags&2064&&q!==null)q.return=M,Oe=q;else e:for(M=H;Oe!==null;){if(U=Oe,U.flags&2048)try{switch(U.tag){case 0:case 11:case 15:Za(9,U)}}catch(Ye){Wt(U,U.return,Ye)}if(U===M){Oe=null;break e}var Te=U.sibling;if(Te!==null){Te.return=U.return,Oe=Te;break e}Oe=U.return}}if(St=d,or(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(Je,n)}catch{}u=!0}return u}finally{yt=o,$n.transition=i}}return!1}function Bp(n,i,o){i=As(o,i),i=ip(n,i,1),n=lr(n,i,1),i=Tn(),n!==null&&(nn(n,1,i),Un(n,i))}function Wt(n,i,o){if(n.tag===3)Bp(n,n,o);else for(;i!==null;){if(i.tag===3){Bp(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(cr===null||!cr.has(u))){n=As(o,n),n=rp(i,n,1),i=lr(i,n,1),n=Tn(),i!==null&&(nn(i,1,n),Un(i,n));break}}i=i.return}}function wv(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=Tn(),n.pingedLanes|=n.suspendedLanes&o,on===n&&(fn&o)===o&&(Qt===4||Qt===3&&(fn&130023424)===fn&&500>$()-xc?Hr(n,0):vc|=o),Un(n,i)}function zp(n,i){i===0&&(n.mode&1?(i=Gt,Gt<<=1,!(Gt&130023424)&&(Gt=4194304)):i=1);var o=Tn();n=bi(n,i),n!==null&&(nn(n,i,o),Un(n,o))}function Av(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),zp(n,o)}function Rv(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),zp(n,o)}var Hp;Hp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Pn.current)Dn=!0;else{if(!(n.lanes&o)&&!(i.flags&128))return Dn=!1,pv(n,i,o);Dn=!!(n.flags&131072)}else Dn=!1,kt&&i.flags&1048576&&yh(i,Ia,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;qa(n,i),n=i.pendingProps;var d=vs(i,pn.current);Ts(i,o),d=Ku(null,i,u,n,d,o);var m=Zu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,bn(u)?(m=!0,Da(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Gu(i),d.updater=ja,i.stateNode=d,d._reactInternals=i,ic(i,u,n,o),i=ac(null,i,u,!0,m,o)):(i.tag=0,kt&&m&&Uu(i),Mn(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(qa(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=Pv(u),n=ti(u,n),d){case 0:i=oc(null,i,u,n,o);break e;case 1:i=hp(null,i,u,n,o);break e;case 11:i=lp(null,i,u,n,o);break e;case 14:i=up(null,i,u,ti(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ti(u,d),oc(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ti(u,d),hp(n,i,u,d,o);case 3:e:{if(pp(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,Ph(n,i),za(i,u,null,o);var M=i.memoizedState;if(u=M.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=As(Error(t(423)),i),i=mp(n,i,u,o,d);break e}else if(u!==d){d=As(Error(t(424)),i),i=mp(n,i,u,o,d);break e}else for(Bn=ir(i.stateNode.containerInfo.firstChild),kn=i,kt=!0,ei=null,o=Rh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ss(),u===d){i=Li(n,i,o);break e}Mn(n,i,u,o)}i=i.child}return i;case 5:return Lh(i),n===null&&Fu(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,M=d.children,Ru(u,d)?M=null:m!==null&&Ru(u,m)&&(i.flags|=32),dp(n,i),Mn(n,i,M,o),i.child;case 6:return n===null&&Fu(i),null;case 13:return gp(n,i,o);case 4:return Wu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Es(i,null,u,o):Mn(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ti(u,d),lp(n,i,u,d,o);case 7:return Mn(n,i,i.pendingProps,o),i.child;case 8:return Mn(n,i,i.pendingProps.children,o),i.child;case 12:return Mn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,M=d.value,Lt(Oa,u._currentValue),u._currentValue=M,m!==null)if(Jn(m.value,M)){if(m.children===d.children&&!Pn.current){i=Li(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var U=m.dependencies;if(U!==null){M=m.child;for(var F=U.firstContext;F!==null;){if(F.context===u){if(m.tag===1){F=Di(-1,o&-o),F.tag=2;var ee=m.updateQueue;if(ee!==null){ee=ee.shared;var ve=ee.pending;ve===null?F.next=F:(F.next=ve.next,ve.next=F),ee.pending=F}}m.lanes|=o,F=m.alternate,F!==null&&(F.lanes|=o),Hu(m.return,o,i),U.lanes|=o;break}F=F.next}}else if(m.tag===10)M=m.type===i.type?null:m.child;else if(m.tag===18){if(M=m.return,M===null)throw Error(t(341));M.lanes|=o,U=M.alternate,U!==null&&(U.lanes|=o),Hu(M,o,i),M=m.sibling}else M=m.child;if(M!==null)M.return=m;else for(M=m;M!==null;){if(M===i){M=null;break}if(m=M.sibling,m!==null){m.return=M.return,M=m;break}M=M.return}m=M}Mn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Ts(i,o),d=Yn(d),u=u(d),i.flags|=1,Mn(n,i,u,o),i.child;case 14:return u=i.type,d=ti(u,i.pendingProps),d=ti(u.type,d),up(n,i,u,d,o);case 15:return cp(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ti(u,d),qa(n,i),i.tag=1,bn(u)?(n=!0,Da(i)):n=!1,Ts(i,o),tp(i,u,d),ic(i,u,d,o),ac(null,i,u,!0,n,o);case 19:return vp(n,i,o);case 22:return fp(n,i,o)}throw Error(t(156,i.tag))};function Vp(n,i){return ha(n,i)}function Cv(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(n,i,o,u){return new Cv(n,i,o,u)}function Rc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Pv(n){if(typeof n=="function")return Rc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===oe)return 11;if(n===pe)return 14}return 2}function pr(n,i){var o=n.alternate;return o===null?(o=qn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function ol(n,i,o,u,d,m){var M=2;if(u=n,typeof n=="function")Rc(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case N:return Gr(o.children,d,m,i);case X:M=8,d|=8;break;case P:return n=qn(12,o,i,d|2),n.elementType=P,n.lanes=m,n;case te:return n=qn(13,o,i,d),n.elementType=te,n.lanes=m,n;case ce:return n=qn(19,o,i,d),n.elementType=ce,n.lanes=m,n;case le:return al(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:M=10;break e;case B:M=9;break e;case oe:M=11;break e;case pe:M=14;break e;case se:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=qn(M,o,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function Gr(n,i,o,u){return n=qn(7,n,u,i),n.lanes=o,n}function al(n,i,o,u){return n=qn(22,n,u,i),n.elementType=le,n.lanes=o,n.stateNode={isHidden:!1},n}function Cc(n,i,o){return n=qn(6,n,null,i),n.lanes=o,n}function Pc(n,i,o){return i=qn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function bv(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function bc(n,i,o,u,d,m,M,U,F){return n=new bv(n,i,o,U,F),i===1?(i=1,m===!0&&(i|=8)):i=0,m=qn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gu(m),n}function Dv(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Gp(n){if(!n)return sr;n=n._reactInternals;e:{if(fi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(bn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(bn(o))return _h(n,o,i)}return i}function Wp(n,i,o,u,d,m,M,U,F){return n=bc(o,u,!0,n,d,m,M,U,F),n.context=Gp(null),o=n.current,u=Tn(),d=dr(o),m=Di(u,d),m.callback=i??null,lr(o,m,d),n.current.lanes=d,nn(n,d,u),Un(n,u),n}function ll(n,i,o,u){var d=i.current,m=Tn(),M=dr(d);return o=Gp(o),i.context===null?i.context=o:i.pendingContext=o,i=Di(m,M),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=lr(d,i,M),n!==null&&(ri(n,d,M,m),Ba(n,d,M)),M}function ul(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Xp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Dc(n,i){Xp(n,i),(n=n.alternate)&&Xp(n,i)}var Yp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Lc(n){this._internalRoot=n}cl.prototype.render=Lc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ll(n,i,null,null)},cl.prototype.unmount=Lc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;zr(function(){ll(null,n,null,null)}),i[Ai]=null}};function cl(n){this._internalRoot=n}cl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Pd();n={blockedOn:null,target:n,priority:i};for(var o=0;o<er.length&&i!==0&&i<er[o].priority;o++);er.splice(o,0,n),o===0&&Ld(n)}};function Uc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function fl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function jp(){}function Lv(n,i,o,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var ee=ul(M);m.call(ee)}}var M=Wp(i,u,n,0,null,!1,!1,"",jp);return n._reactRootContainer=M,n[Ai]=M.current,wo(n.nodeType===8?n.parentNode:n),zr(),M}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var U=u;u=function(){var ee=ul(F);U.call(ee)}}var F=bc(n,0,!1,null,null,!1,!1,"",jp);return n._reactRootContainer=F,n[Ai]=F.current,wo(n.nodeType===8?n.parentNode:n),zr(function(){ll(i,F,o,u)}),F}function dl(n,i,o,u,d){var m=o._reactRootContainer;if(m){var M=m;if(typeof d=="function"){var U=d;d=function(){var F=ul(M);U.call(F)}}ll(i,M,n,d)}else M=Lv(o,i,n,d,u);return ul(M)}Rd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=gt(i.pendingLanes);o!==0&&(rn(i,o|1),Un(i,$()),!(St&6)&&(Ps=$()+500,or()))}break;case 13:zr(function(){var u=bi(n,1);if(u!==null){var d=Tn();ri(u,n,1,d)}}),Dc(n,1)}},ru=function(n){if(n.tag===13){var i=bi(n,134217728);if(i!==null){var o=Tn();ri(i,n,134217728,o)}Dc(n,134217728)}},Cd=function(n){if(n.tag===13){var i=dr(n),o=bi(n,i);if(o!==null){var u=Tn();ri(o,n,i,u)}Dc(n,i)}},Pd=function(){return yt},bd=function(n,i){var o=yt;try{return yt=n,i()}finally{yt=o}},Re=function(n,i,o){switch(i){case"input":if(ct(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=Pa(u);if(!d)throw Error(t(90));mt(u),ct(u,d)}}}break;case"textarea":me(n,o);break;case"select":i=o.value,i!=null&&b(n,!!o.multiple,i,!1)}},Ut=Tc,Kt=zr;var Uv={usingClientEntryPoint:!1,Events:[Co,gs,Pa,be,rt,Tc]},Vo={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Iv={bundleType:Vo.bundleType,version:Vo.version,rendererPackageName:Vo.rendererPackageName,rendererConfig:Vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=fa(n),n===null?null:n.stateNode},findFiberByHostInstance:Vo.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{Je=hl.inject(Iv),Ve=hl}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uv,In.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uc(i))throw Error(t(200));return Dv(n,i,null,o)},In.createRoot=function(n,i){if(!Uc(n))throw Error(t(299));var o=!1,u="",d=Yp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=bc(n,1,!1,null,null,o,!1,u,d),n[Ai]=i.current,wo(n.nodeType===8?n.parentNode:n),new Lc(i)},In.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=fa(i),n=n===null?null:n.stateNode,n},In.flushSync=function(n){return zr(n)},In.hydrate=function(n,i,o){if(!fl(i))throw Error(t(200));return dl(null,n,i,!0,o)},In.hydrateRoot=function(n,i,o){if(!Uc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,m="",M=Yp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Wp(i,null,n,1,o??null,d,!1,m,M),n[Ai]=i.current,wo(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new cl(i)},In.render=function(n,i,o){if(!fl(i))throw Error(t(200));return dl(null,n,i,!1,o)},In.unmountComponentAtNode=function(n){if(!fl(n))throw Error(t(40));return n._reactRootContainer?(zr(function(){dl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ai]=null})}),!0):!1},In.unstable_batchedUpdates=Tc,In.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!fl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return dl(n,i,o,!1,u)},In.version="18.3.1-next-f1338f8080-20240426",In}var tm;function Vv(){if(tm)return Fc.exports;tm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Fc.exports=Hv(),Fc.exports}var nm;function Gv(){if(nm)return pl;nm=1;var r=Vv();return pl.createRoot=r.createRoot,pl.hydrateRoot=r.hydrateRoot,pl}var Wv=Gv(),Wo={},im;function Xv(){if(im)return Wo;im=1,Object.defineProperty(Wo,"__esModule",{value:!0}),Wo.parse=c,Wo.serialize=p;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,l=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function c(v,S){const E=new l,T=v.length;if(T<2)return E;const y=(S==null?void 0:S.decode)||_;let g=0;do{const D=v.indexOf("=",g);if(D===-1)break;const L=v.indexOf(";",g),C=L===-1?T:L;if(D>C){g=v.lastIndexOf(";",D-1)+1;continue}const V=f(v,g,D),k=h(v,D,V),N=v.slice(V,k);if(E[N]===void 0){let X=f(v,D+1,C),P=h(v,C,X);const R=y(v.slice(X,P));E[N]=R}g=C+1}while(g<T);return E}function f(v,S,E){do{const T=v.charCodeAt(S);if(T!==32&&T!==9)return S}while(++S<E);return E}function h(v,S,E){for(;S>E;){const T=v.charCodeAt(--S);if(T!==32&&T!==9)return S+1}return E}function p(v,S,E){const T=(E==null?void 0:E.encode)||encodeURIComponent;if(!r.test(v))throw new TypeError(`argument name is invalid: ${v}`);const y=T(S);if(!e.test(y))throw new TypeError(`argument val is invalid: ${S}`);let g=v+"="+y;if(!E)return g;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);g+="; Max-Age="+E.maxAge}if(E.domain){if(!t.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);g+="; Domain="+E.domain}if(E.path){if(!s.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);g+="; Path="+E.path}if(E.expires){if(!x(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);g+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(g+="; HttpOnly"),E.secure&&(g+="; Secure"),E.partitioned&&(g+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":g+="; Priority=Low";break;case"medium":g+="; Priority=Medium";break;case"high":g+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":g+="; SameSite=Strict";break;case"lax":g+="; SameSite=Lax";break;case"none":g+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return g}function _(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function x(v){return a.call(v)==="[object Date]"}return Wo}Xv();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var rm="popstate";function Yv(r={}){function e(s,a){let{pathname:l,search:c,hash:f}=s.location;return _f("",{pathname:l,search:c,hash:f},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(s,a){return typeof a=="string"?a:Jo(a)}return $v(e,t,null,r)}function Ht(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Si(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function jv(){return Math.random().toString(36).substring(2,10)}function sm(r,e){return{usr:r.state,key:r.key,idx:e}}function _f(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?oo(e):e,state:t,key:e&&e.key||s||jv()}}function Jo({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function oo(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function $v(r,e,t,s={}){let{window:a=document.defaultView,v5Compat:l=!1}=s,c=a.history,f="POP",h=null,p=_();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function _(){return(c.state||{idx:null}).idx}function x(){f="POP";let y=_(),g=y==null?null:y-p;p=y,h&&h({action:f,location:T.location,delta:g})}function v(y,g){f="PUSH";let D=_f(T.location,y,g);p=_()+1;let L=sm(D,p),C=T.createHref(D);try{c.pushState(L,"",C)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;a.location.assign(C)}l&&h&&h({action:f,location:T.location,delta:1})}function S(y,g){f="REPLACE";let D=_f(T.location,y,g);p=_();let L=sm(D,p),C=T.createHref(D);c.replaceState(L,"",C),l&&h&&h({action:f,location:T.location,delta:0})}function E(y){let g=a.location.origin!=="null"?a.location.origin:a.location.href,D=typeof y=="string"?y:Jo(y);return D=D.replace(/ $/,"%20"),Ht(g,`No window.location.(origin|href) available to create URL for href: ${D}`),new URL(D,g)}let T={get action(){return f},get location(){return r(a,c)},listen(y){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(rm,x),h=y,()=>{a.removeEventListener(rm,x),h=null}},createHref(y){return e(a,y)},createURL:E,encodeLocation(y){let g=E(y);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:v,replace:S,go(y){return c.go(y)}};return T}function fg(r,e,t="/"){return qv(r,e,t,!1)}function qv(r,e,t,s){let a=typeof e=="string"?oo(e):e,l=Ar(a.pathname||"/",t);if(l==null)return null;let c=dg(r);Kv(c);let f=null;for(let h=0;f==null&&h<c.length;++h){let p=a0(l);f=s0(c[h],p,s)}return f}function dg(r,e=[],t=[],s=""){let a=(l,c,f)=>{let h={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};h.relativePath.startsWith("/")&&(Ht(h.relativePath.startsWith(s),`Absolute route path "${h.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(s.length));let p=Gi([s,h.relativePath]),_=t.concat(h);l.children&&l.children.length>0&&(Ht(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),dg(l.children,e,_,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:i0(p,l.index),routesMeta:_})};return r.forEach((l,c)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))a(l,c);else for(let h of hg(l.path))a(l,c,h)}),e}function hg(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return a?[l,""]:[l];let c=hg(s.join("/")),f=[];return f.push(...c.map(h=>h===""?l:[l,h].join("/"))),a&&f.push(...c),f.map(h=>r.startsWith("/")&&h===""?"/":h)}function Kv(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:r0(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var Zv=/^:[\w-]+$/,Qv=3,Jv=2,e0=1,t0=10,n0=-2,om=r=>r==="*";function i0(r,e){let t=r.split("/"),s=t.length;return t.some(om)&&(s+=n0),e&&(s+=Jv),t.filter(a=>!om(a)).reduce((a,l)=>a+(Zv.test(l)?Qv:l===""?e0:t0),s)}function r0(r,e){return r.length===e.length&&r.slice(0,-1).every((s,a)=>s===e[a])?r[r.length-1]-e[e.length-1]:0}function s0(r,e,t=!1){let{routesMeta:s}=r,a={},l="/",c=[];for(let f=0;f<s.length;++f){let h=s[f],p=f===s.length-1,_=l==="/"?e:e.slice(l.length)||"/",x=jl({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},_),v=h.route;if(!x&&p&&t&&!s[s.length-1].route.index&&(x=jl({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},_)),!x)return null;Object.assign(a,x.params),c.push({params:a,pathname:Gi([l,x.pathname]),pathnameBase:f0(Gi([l,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(l=Gi([l,x.pathnameBase]))}return c}function jl(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=o0(r.path,r.caseSensitive,r.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:s.reduce((p,{paramName:_,isOptional:x},v)=>{if(_==="*"){let E=f[v]||"";c=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const S=f[v];return x&&!S?p[_]=void 0:p[_]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:r}}function o0(r,e=!1,t=!0){Si(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],a="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,h)=>(s.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),a+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":r!==""&&r!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function a0(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Si(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Ar(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function l0(r,e="/"){let{pathname:t,search:s="",hash:a=""}=typeof r=="string"?oo(r):r;return{pathname:t?t.startsWith("/")?t:u0(t,e):e,search:d0(s),hash:h0(a)}}function u0(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Bc(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function c0(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function pg(r){let e=c0(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function mg(r,e,t,s=!1){let a;typeof r=="string"?a=oo(r):(a={...r},Ht(!a.pathname||!a.pathname.includes("?"),Bc("?","pathname","search",a)),Ht(!a.pathname||!a.pathname.includes("#"),Bc("#","pathname","hash",a)),Ht(!a.search||!a.search.includes("#"),Bc("#","search","hash",a)));let l=r===""||a.pathname==="",c=l?"/":a.pathname,f;if(c==null)f=t;else{let x=e.length-1;if(!s&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),x-=1;a.pathname=v.join("/")}f=x>=0?e[x]:"/"}let h=l0(a,f),p=c&&c!=="/"&&c.endsWith("/"),_=(l||c===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(p||_)&&(h.pathname+="/"),h}var Gi=r=>r.join("/").replace(/\/\/+/g,"/"),f0=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),d0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,h0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function p0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var gg=["POST","PUT","PATCH","DELETE"];new Set(gg);var m0=["GET",...gg];new Set(m0);var ao=de.createContext(null);ao.displayName="DataRouter";var Zl=de.createContext(null);Zl.displayName="DataRouterState";var _g=de.createContext({isTransitioning:!1});_g.displayName="ViewTransition";var g0=de.createContext(new Map);g0.displayName="Fetchers";var _0=de.createContext(null);_0.displayName="Await";var Ei=de.createContext(null);Ei.displayName="Navigation";var na=de.createContext(null);na.displayName="Location";var ji=de.createContext({outlet:null,matches:[],isDataRoute:!1});ji.displayName="Route";var ad=de.createContext(null);ad.displayName="RouteError";function v0(r,{relative:e}={}){Ht(ia(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=de.useContext(Ei),{hash:a,pathname:l,search:c}=ra(r,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:Gi([t,l])),s.createHref({pathname:f,search:c,hash:a})}function ia(){return de.useContext(na)!=null}function Pr(){return Ht(ia(),"useLocation() may be used only in the context of a <Router> component."),de.useContext(na).location}var vg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function xg(r){de.useContext(Ei).static||de.useLayoutEffect(r)}function ld(){let{isDataRoute:r}=de.useContext(ji);return r?D0():x0()}function x0(){Ht(ia(),"useNavigate() may be used only in the context of a <Router> component.");let r=de.useContext(ao),{basename:e,navigator:t}=de.useContext(Ei),{matches:s}=de.useContext(ji),{pathname:a}=Pr(),l=JSON.stringify(pg(s)),c=de.useRef(!1);return xg(()=>{c.current=!0}),de.useCallback((h,p={})=>{if(Si(c.current,vg),!c.current)return;if(typeof h=="number"){t.go(h);return}let _=mg(h,JSON.parse(l),a,p.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Gi([e,_.pathname])),(p.replace?t.replace:t.push)(_,p.state,p)},[e,t,l,a,r])}de.createContext(null);function ra(r,{relative:e}={}){let{matches:t}=de.useContext(ji),{pathname:s}=Pr(),a=JSON.stringify(pg(t));return de.useMemo(()=>mg(r,JSON.parse(a),s,e==="path"),[r,a,s,e])}function y0(r,e){return yg(r,e)}function yg(r,e,t,s){var g;Ht(ia(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=de.useContext(Ei),{matches:l}=de.useContext(ji),c=l[l.length-1],f=c?c.params:{},h=c?c.pathname:"/",p=c?c.pathnameBase:"/",_=c&&c.route;{let D=_&&_.path||"";Sg(h,!_||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let x=Pr(),v;if(e){let D=typeof e=="string"?oo(e):e;Ht(p==="/"||((g=D.pathname)==null?void 0:g.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${D.pathname}" was given in the \`location\` prop.`),v=D}else v=x;let S=v.pathname||"/",E=S;if(p!=="/"){let D=p.replace(/^\//,"").split("/");E="/"+S.replace(/^\//,"").split("/").slice(D.length).join("/")}let T=fg(r,{pathname:E});Si(_||T!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Si(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=w0(T&&T.map(D=>Object.assign({},D,{params:Object.assign({},f,D.params),pathname:Gi([p,a.encodeLocation?a.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?p:Gi([p,a.encodeLocation?a.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),l,t,s);return e&&y?de.createElement(na.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},y):y}function S0(){let r=b0(),e=p0(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=de.createElement(de.Fragment,null,de.createElement("p",null,"💿 Hey developer 👋"),de.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",de.createElement("code",{style:l},"ErrorBoundary")," or"," ",de.createElement("code",{style:l},"errorElement")," prop on your route.")),de.createElement(de.Fragment,null,de.createElement("h2",null,"Unexpected Application Error!"),de.createElement("h3",{style:{fontStyle:"italic"}},e),t?de.createElement("pre",{style:a},t):null,c)}var E0=de.createElement(S0,null),M0=class extends de.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?de.createElement(ji.Provider,{value:this.props.routeContext},de.createElement(ad.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function T0({routeContext:r,match:e,children:t}){let s=de.useContext(ao);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),de.createElement(ji.Provider,{value:r},t)}function w0(r,e=[],t=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let a=r,l=t==null?void 0:t.errors;if(l!=null){let h=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);Ht(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,h+1))}let c=!1,f=-1;if(t)for(let h=0;h<a.length;h++){let p=a[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(f=h),p.route.id){let{loaderData:_,errors:x}=t,v=p.route.loader&&!_.hasOwnProperty(p.route.id)&&(!x||x[p.route.id]===void 0);if(p.route.lazy||v){c=!0,f>=0?a=a.slice(0,f+1):a=[a[0]];break}}}return a.reduceRight((h,p,_)=>{let x,v=!1,S=null,E=null;t&&(x=l&&p.route.id?l[p.route.id]:void 0,S=p.route.errorElement||E0,c&&(f<0&&_===0?(Sg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,E=null):f===_&&(v=!0,E=p.route.hydrateFallbackElement||null)));let T=e.concat(a.slice(0,_+1)),y=()=>{let g;return x?g=S:v?g=E:p.route.Component?g=de.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=h,de.createElement(T0,{match:p,routeContext:{outlet:h,matches:T,isDataRoute:t!=null},children:g})};return t&&(p.route.ErrorBoundary||p.route.errorElement||_===0)?de.createElement(M0,{location:t.location,revalidation:t.revalidation,component:S,error:x,children:y(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):y()},null)}function ud(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function A0(r){let e=de.useContext(ao);return Ht(e,ud(r)),e}function R0(r){let e=de.useContext(Zl);return Ht(e,ud(r)),e}function C0(r){let e=de.useContext(ji);return Ht(e,ud(r)),e}function cd(r){let e=C0(r),t=e.matches[e.matches.length-1];return Ht(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function P0(){return cd("useRouteId")}function b0(){var s;let r=de.useContext(ad),e=R0("useRouteError"),t=cd("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function D0(){let{router:r}=A0("useNavigate"),e=cd("useNavigate"),t=de.useRef(!1);return xg(()=>{t.current=!0}),de.useCallback(async(a,l={})=>{Si(t.current,vg),t.current&&(typeof a=="number"?r.navigate(a):await r.navigate(a,{fromRouteId:e,...l}))},[r,e])}var am={};function Sg(r,e,t){!e&&!am[r]&&(am[r]=!0,Si(!1,t))}de.memo(L0);function L0({routes:r,future:e,state:t}){return yg(r,void 0,t,e)}function Eg(r){Ht(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function U0({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:a,static:l=!1}){Ht(!ia(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=r.replace(/^\/*/,"/"),f=de.useMemo(()=>({basename:c,navigator:a,static:l,future:{}}),[c,a,l]);typeof t=="string"&&(t=oo(t));let{pathname:h="/",search:p="",hash:_="",state:x=null,key:v="default"}=t,S=de.useMemo(()=>{let E=Ar(h,c);return E==null?null:{location:{pathname:E,search:p,hash:_,state:x,key:v},navigationType:s}},[c,h,p,_,x,v,s]);return Si(S!=null,`<Router basename="${c}"> is not able to match the URL "${h}${p}${_}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:de.createElement(Ei.Provider,{value:f},de.createElement(na.Provider,{children:e,value:S}))}function I0({children:r,location:e}){return y0(vf(r),e)}function vf(r,e=[]){let t=[];return de.Children.forEach(r,(s,a)=>{if(!de.isValidElement(s))return;let l=[...e,a];if(s.type===de.Fragment){t.push.apply(t,vf(s.props.children,l));return}Ht(s.type===Eg,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ht(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=vf(s.props.children,l)),t.push(c)}),t}var Bl="get",zl="application/x-www-form-urlencoded";function Ql(r){return r!=null&&typeof r.tagName=="string"}function N0(r){return Ql(r)&&r.tagName.toLowerCase()==="button"}function F0(r){return Ql(r)&&r.tagName.toLowerCase()==="form"}function O0(r){return Ql(r)&&r.tagName.toLowerCase()==="input"}function k0(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function B0(r,e){return r.button===0&&(!e||e==="_self")&&!k0(r)}var ml=null;function z0(){if(ml===null)try{new FormData(document.createElement("form"),0),ml=!1}catch{ml=!0}return ml}var H0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function zc(r){return r!=null&&!H0.has(r)?(Si(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zl}"`),null):r}function V0(r,e){let t,s,a,l,c;if(F0(r)){let f=r.getAttribute("action");s=f?Ar(f,e):null,t=r.getAttribute("method")||Bl,a=zc(r.getAttribute("enctype"))||zl,l=new FormData(r)}else if(N0(r)||O0(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=r.getAttribute("formaction")||f.getAttribute("action");if(s=h?Ar(h,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||Bl,a=zc(r.getAttribute("formenctype"))||zc(f.getAttribute("enctype"))||zl,l=new FormData(f,r),!z0()){let{name:p,type:_,value:x}=r;if(_==="image"){let v=p?`${p}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else p&&l.append(p,x)}}else{if(Ql(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Bl,s=null,a=zl,c=r}return l&&a==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:a,formData:l,body:c}}function fd(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function G0(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function W0(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function X0(r,e,t){let s=await Promise.all(r.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await G0(l,t);return c.links?c.links():[]}return[]}));return q0(s.flat(1).filter(W0).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function lm(r,e,t,s,a,l){let c=(h,p)=>t[p]?h.route.id!==t[p].route.id:!0,f=(h,p)=>{var _;return t[p].pathname!==h.pathname||((_=t[p].route.path)==null?void 0:_.endsWith("*"))&&t[p].params["*"]!==h.params["*"]};return l==="assets"?e.filter((h,p)=>c(h,p)||f(h,p)):l==="data"?e.filter((h,p)=>{var x;let _=s.routes[h.route.id];if(!_||!_.hasLoader)return!1;if(c(h,p)||f(h,p))return!0;if(h.route.shouldRevalidate){let v=h.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((x=t[0])==null?void 0:x.params)||{},nextUrl:new URL(r,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Y0(r,e){return j0(r.map(t=>{let s=e.routes[t.route.id];if(!s)return[];let a=[s.module];return s.imports&&(a=a.concat(s.imports)),a}).flat(1))}function j0(r){return[...new Set(r)]}function $0(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function q0(r,e){let t=new Set;return new Set(e),r.reduce((s,a)=>{let l=JSON.stringify($0(a));return t.has(l)||(t.add(l),s.push({key:l,link:a})),s},[])}function K0(r){let e=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function Z0(){let r=de.useContext(ao);return fd(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Q0(){let r=de.useContext(Zl);return fd(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var dd=de.createContext(void 0);dd.displayName="FrameworkContext";function Mg(){let r=de.useContext(dd);return fd(r,"You must render this element inside a <HydratedRouter> element"),r}function J0(r,e){let t=de.useContext(dd),[s,a]=de.useState(!1),[l,c]=de.useState(!1),{onFocus:f,onBlur:h,onMouseEnter:p,onMouseLeave:_,onTouchStart:x}=e,v=de.useRef(null);de.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let T=g=>{g.forEach(D=>{c(D.isIntersecting)})},y=new IntersectionObserver(T,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[r]),de.useEffect(()=>{if(s){let T=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(T)}}},[s]);let S=()=>{a(!0)},E=()=>{a(!1),c(!1)};return t?r!=="intent"?[l,v,{}]:[l,v,{onFocus:Xo(f,S),onBlur:Xo(h,E),onMouseEnter:Xo(p,S),onMouseLeave:Xo(_,E),onTouchStart:Xo(x,S)}]:[!1,v,{}]}function Xo(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function ex({page:r,...e}){let{router:t}=Z0(),s=de.useMemo(()=>fg(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?de.createElement(nx,{page:r,matches:s,...e}):null}function tx(r){let{manifest:e,routeModules:t}=Mg(),[s,a]=de.useState([]);return de.useEffect(()=>{let l=!1;return X0(r,e,t).then(c=>{l||a(c)}),()=>{l=!0}},[r,e,t]),s}function nx({page:r,matches:e,...t}){let s=Pr(),{manifest:a,routeModules:l}=Mg(),{loaderData:c,matches:f}=Q0(),h=de.useMemo(()=>lm(r,e,f,a,s,"data"),[r,e,f,a,s]),p=de.useMemo(()=>lm(r,e,f,a,s,"assets"),[r,e,f,a,s]),_=de.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let S=new Set,E=!1;if(e.forEach(y=>{var D;let g=a.routes[y.route.id];!g||!g.hasLoader||(!h.some(L=>L.route.id===y.route.id)&&y.route.id in c&&((D=l[y.route.id])!=null&&D.shouldRevalidate)||g.hasClientLoader?E=!0:S.add(y.route.id))}),S.size===0)return[];let T=K0(r);return E&&S.size>0&&T.searchParams.set("_routes",e.filter(y=>S.has(y.route.id)).map(y=>y.route.id).join(",")),[T.pathname+T.search]},[c,s,a,h,e,r,l]),x=de.useMemo(()=>Y0(p,a),[p,a]),v=tx(p);return de.createElement(de.Fragment,null,_.map(S=>de.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...t})),x.map(S=>de.createElement("link",{key:S,rel:"modulepreload",href:S,...t})),v.map(({key:S,link:E})=>de.createElement("link",{key:S,...E})))}function ix(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Tg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Tg&&(window.__reactRouterVersion="7.1.3")}catch{}function rx({basename:r,children:e,window:t}){let s=de.useRef();s.current==null&&(s.current=Yv({window:t,v5Compat:!0}));let a=s.current,[l,c]=de.useState({action:a.action,location:a.location}),f=de.useCallback(h=>{de.startTransition(()=>c(h))},[c]);return de.useLayoutEffect(()=>a.listen(f),[a,f]),de.createElement(U0,{basename:r,children:e,location:l.location,navigationType:l.action,navigator:a})}var wg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ag=de.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:a,reloadDocument:l,replace:c,state:f,target:h,to:p,preventScrollReset:_,viewTransition:x,...v},S){let{basename:E}=de.useContext(Ei),T=typeof p=="string"&&wg.test(p),y,g=!1;if(typeof p=="string"&&T&&(y=p,Tg))try{let P=new URL(window.location.href),R=p.startsWith("//")?new URL(P.protocol+p):new URL(p),B=Ar(R.pathname,E);R.origin===P.origin&&B!=null?p=B+R.search+R.hash:g=!0}catch{Si(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let D=v0(p,{relative:a}),[L,C,V]=J0(s,v),k=lx(p,{replace:c,state:f,target:h,preventScrollReset:_,relative:a,viewTransition:x});function N(P){e&&e(P),P.defaultPrevented||k(P)}let X=de.createElement("a",{...v,...V,href:y||D,onClick:g||l?e:N,ref:ix(S,C),target:h,"data-discover":!T&&t==="render"?"true":void 0});return L&&!T?de.createElement(de.Fragment,null,X,de.createElement(ex,{page:D})):X});Ag.displayName="Link";var sx=de.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:a=!1,style:l,to:c,viewTransition:f,children:h,...p},_){let x=ra(c,{relative:p.relative}),v=Pr(),S=de.useContext(Zl),{navigator:E,basename:T}=de.useContext(Ei),y=S!=null&&hx(x)&&f===!0,g=E.encodeLocation?E.encodeLocation(x).pathname:x.pathname,D=v.pathname,L=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(D=D.toLowerCase(),L=L?L.toLowerCase():null,g=g.toLowerCase()),L&&T&&(L=Ar(L,T)||L);const C=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let V=D===g||!a&&D.startsWith(g)&&D.charAt(C)==="/",k=L!=null&&(L===g||!a&&L.startsWith(g)&&L.charAt(g.length)==="/"),N={isActive:V,isPending:k,isTransitioning:y},X=V?e:void 0,P;typeof s=="function"?P=s(N):P=[s,V?"active":null,k?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let R=typeof l=="function"?l(N):l;return de.createElement(Ag,{...p,"aria-current":X,className:P,ref:_,style:R,to:c,viewTransition:f},typeof h=="function"?h(N):h)});sx.displayName="NavLink";var ox=de.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:a,state:l,method:c=Bl,action:f,onSubmit:h,relative:p,preventScrollReset:_,viewTransition:x,...v},S)=>{let E=fx(),T=dx(f,{relative:p}),y=c.toLowerCase()==="get"?"get":"post",g=typeof f=="string"&&wg.test(f),D=L=>{if(h&&h(L),L.defaultPrevented)return;L.preventDefault();let C=L.nativeEvent.submitter,V=(C==null?void 0:C.getAttribute("formmethod"))||c;E(C||L.currentTarget,{fetcherKey:e,method:V,navigate:t,replace:a,state:l,relative:p,preventScrollReset:_,viewTransition:x})};return de.createElement("form",{ref:S,method:y,action:T,onSubmit:s?h:D,...v,"data-discover":!g&&r==="render"?"true":void 0})});ox.displayName="Form";function ax(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rg(r){let e=de.useContext(ao);return Ht(e,ax(r)),e}function lx(r,{target:e,replace:t,state:s,preventScrollReset:a,relative:l,viewTransition:c}={}){let f=ld(),h=Pr(),p=ra(r,{relative:l});return de.useCallback(_=>{if(B0(_,e)){_.preventDefault();let x=t!==void 0?t:Jo(h)===Jo(p);f(r,{replace:x,state:s,preventScrollReset:a,relative:l,viewTransition:c})}},[h,f,p,t,s,e,r,a,l,c])}var ux=0,cx=()=>`__${String(++ux)}__`;function fx(){let{router:r}=Rg("useSubmit"),{basename:e}=de.useContext(Ei),t=P0();return de.useCallback(async(s,a={})=>{let{action:l,method:c,encType:f,formData:h,body:p}=V0(s,e);if(a.navigate===!1){let _=a.fetcherKey||cx();await r.fetch(_,t,a.action||l,{preventScrollReset:a.preventScrollReset,formData:h,body:p,formMethod:a.method||c,formEncType:a.encType||f,flushSync:a.flushSync})}else await r.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:h,body:p,formMethod:a.method||c,formEncType:a.encType||f,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,e,t])}function dx(r,{relative:e}={}){let{basename:t}=de.useContext(Ei),s=de.useContext(ji);Ht(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),l={...ra(r||".",{relative:e})},c=Pr();if(r==null){l.search=c.search;let f=new URLSearchParams(l.search),h=f.getAll("index");if(h.some(_=>_==="")){f.delete("index"),h.filter(x=>x).forEach(x=>f.append("index",x));let _=f.toString();l.search=_?`?${_}`:""}}return(!r||r===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Gi([t,l.pathname])),Jo(l)}function hx(r,e={}){let t=de.useContext(_g);Ht(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Rg("useViewTransitionState"),a=ra(r,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Ar(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=Ar(t.nextLocation.pathname,s)||t.nextLocation.pathname;return jl(a.pathname,c)!=null||jl(a.pathname,l)!=null}new TextEncoder;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hd="172",qs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},js={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},px=0,um=1,mx=2,Cg=1,gx=2,Bi=3,Rr=0,Fn=1,zi=2,Tr=0,Ks=1,cm=2,fm=3,dm=4,_x=5,Zr=100,vx=101,xx=102,yx=103,Sx=104,Ex=200,Mx=201,Tx=202,wx=203,xf=204,yf=205,Ax=206,Rx=207,Cx=208,Px=209,bx=210,Dx=211,Lx=212,Ux=213,Ix=214,Sf=0,Ef=1,Mf=2,Js=3,Tf=4,wf=5,Af=6,Rf=7,Pg=0,Nx=1,Fx=2,wr=0,Ox=1,kx=2,Bx=3,zx=4,Hx=5,Vx=6,Gx=7,bg=300,eo=301,to=302,Cf=303,Pf=304,Jl=306,bf=1e3,Jr=1001,Df=1002,ci=1003,Wx=1004,gl=1005,vi=1006,Hc=1007,es=1008,Xi=1009,Dg=1010,Lg=1011,ea=1012,pd=1013,ns=1014,Hi=1015,sa=1016,md=1017,gd=1018,no=1020,Ug=35902,Ig=1021,Ng=1022,ui=1023,Fg=1024,Og=1025,Zs=1026,io=1027,kg=1028,_d=1029,Bg=1030,vd=1031,xd=1033,Hl=33776,Vl=33777,Gl=33778,Wl=33779,Lf=35840,Uf=35841,If=35842,Nf=35843,Ff=36196,Of=37492,kf=37496,Bf=37808,zf=37809,Hf=37810,Vf=37811,Gf=37812,Wf=37813,Xf=37814,Yf=37815,jf=37816,$f=37817,qf=37818,Kf=37819,Zf=37820,Qf=37821,Xl=36492,Jf=36494,ed=36495,zg=36283,td=36284,nd=36285,id=36286,Xx=3200,Yx=3201,jx=0,$x=1,Mr="",Zn="srgb",ro="srgb-linear",$l="linear",Rt="srgb",Ds=7680,hm=519,qx=512,Kx=513,Zx=514,Hg=515,Qx=516,Jx=517,ey=518,ty=519,pm=35044,mm="300 es",Vi=2e3,ql=2001;class ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gm=1234567;const Zo=Math.PI/180,ta=180/Math.PI;function lo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]).toLowerCase()}function ht(r,e,t){return Math.max(e,Math.min(t,r))}function yd(r,e){return(r%e+e)%e}function ny(r,e,t,s,a){return s+(r-e)*(a-s)/(t-e)}function iy(r,e,t){return r!==e?(t-r)/(e-r):0}function Qo(r,e,t){return(1-t)*r+t*e}function ry(r,e,t,s){return Qo(r,e,1-Math.exp(-t*s))}function sy(r,e=1){return e-Math.abs(yd(r,e*2)-e)}function oy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function ay(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ly(r,e){return r+Math.floor(Math.random()*(e-r+1))}function uy(r,e){return r+Math.random()*(e-r)}function cy(r){return r*(.5-Math.random())}function fy(r){r!==void 0&&(gm=r);let e=gm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dy(r){return r*Zo}function hy(r){return r*ta}function py(r){return(r&r-1)===0&&r!==0}function my(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function gy(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function _y(r,e,t,s,a){const l=Math.cos,c=Math.sin,f=l(t/2),h=c(t/2),p=l((e+s)/2),_=c((e+s)/2),x=l((e-s)/2),v=c((e-s)/2),S=l((s-e)/2),E=c((s-e)/2);switch(a){case"XYX":r.set(f*_,h*x,h*v,f*p);break;case"YZY":r.set(h*v,f*_,h*x,f*p);break;case"ZXZ":r.set(h*x,h*v,f*_,f*p);break;case"XZX":r.set(f*_,h*E,h*S,f*p);break;case"YXY":r.set(h*S,f*_,h*E,f*p);break;case"ZYZ":r.set(h*E,h*S,f*_,f*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Xs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function wn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const vy={DEG2RAD:Zo,RAD2DEG:ta,generateUUID:lo,clamp:ht,euclideanModulo:yd,mapLinear:ny,inverseLerp:iy,lerp:Qo,damp:ry,pingpong:sy,smoothstep:oy,smootherstep:ay,randInt:ly,randFloat:uy,randFloatSpread:cy,seededRandom:fy,degToRad:dy,radToDeg:hy,isPowerOfTwo:py,ceilPowerOfTwo:my,floorPowerOfTwo:gy,setQuaternionFromProperEuler:_y,normalize:wn,denormalize:Xs};class ut{constructor(e=0,t=0){ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ht(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(ht(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*a+e.x,this.y=l*a+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,s,a,l,c,f,h,p){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,h,p)}set(e,t,s,a,l,c,f,h,p){const _=this.elements;return _[0]=e,_[1]=a,_[2]=f,_[3]=t,_[4]=l,_[5]=h,_[6]=s,_[7]=c,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[3],h=s[6],p=s[1],_=s[4],x=s[7],v=s[2],S=s[5],E=s[8],T=a[0],y=a[3],g=a[6],D=a[1],L=a[4],C=a[7],V=a[2],k=a[5],N=a[8];return l[0]=c*T+f*D+h*V,l[3]=c*y+f*L+h*k,l[6]=c*g+f*C+h*N,l[1]=p*T+_*D+x*V,l[4]=p*y+_*L+x*k,l[7]=p*g+_*C+x*N,l[2]=v*T+S*D+E*V,l[5]=v*y+S*L+E*k,l[8]=v*g+S*C+E*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],_=e[8];return t*c*_-t*f*p-s*l*_+s*f*h+a*l*p-a*c*h}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],_=e[8],x=_*c-f*p,v=f*h-_*l,S=p*l-c*h,E=t*x+s*v+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=x*T,e[1]=(a*p-_*s)*T,e[2]=(f*s-a*c)*T,e[3]=v*T,e[4]=(_*t-a*h)*T,e[5]=(a*l-f*t)*T,e[6]=S*T,e[7]=(s*h-p*t)*T,e[8]=(c*t-s*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*c+p*f)+c+e,-a*p,a*h,-a*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Vc.makeScale(e,t)),this}rotate(e){return this.premultiply(Vc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vc=new ot;function Vg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Kl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function xy(){const r=Kl("canvas");return r.style.display="block",r}const _m={};function Ys(r){r in _m||(_m[r]=!0,console.warn(r))}function yy(r,e,t){return new Promise(function(s,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function Sy(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ey(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vm=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xm=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function My(){const r={enabled:!0,workingColorSpace:ro,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Rt&&(a.r=Wi(a.r),a.g=Wi(a.g),a.b=Wi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Rt&&(a.r=Qs(a.r),a.g=Qs(a.g),a.b=Qs(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Mr?$l:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[ro]:{primaries:e,whitePoint:s,transfer:$l,toXYZ:vm,fromXYZ:xm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:e,whitePoint:s,transfer:Rt,toXYZ:vm,fromXYZ:xm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),r}const Mt=My();function Wi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Qs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ls;class Ty{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ls===void 0&&(Ls=Kl("canvas")),Ls.width=e.width,Ls.height=e.height;const s=Ls.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Kl("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Wi(l[c]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Wi(t[s]/255)*255):t[s]=Wi(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wy=0;class Gg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=lo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(Gc(a[c].image)):l.push(Gc(a[c]))}else l=Gc(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function Gc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ty.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ay=0;class Rn extends ss{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,s=Jr,a=Jr,l=vi,c=es,f=ui,h=Xi,p=Rn.DEFAULT_ANISOTROPY,_=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=lo(),this.name="",this.source=new Gg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bf:e.x=e.x-Math.floor(e.x);break;case Jr:e.x=e.x<0?0:1;break;case Df:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bf:e.y=e.y-Math.floor(e.y);break;case Jr:e.y=e.y<0?0:1;break;case Df:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=bg;Rn.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,t=0,s=0,a=1){Yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const h=e.elements,p=h[0],_=h[4],x=h[8],v=h[1],S=h[5],E=h[9],T=h[2],y=h[6],g=h[10];if(Math.abs(_-v)<.01&&Math.abs(x-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(x+T)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(p+1)/2,C=(S+1)/2,V=(g+1)/2,k=(_+v)/4,N=(x+T)/4,X=(E+y)/4;return L>C&&L>V?L<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(L),a=k/s,l=N/s):C>V?C<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(C),s=k/a,l=X/a):V<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(V),s=N/l,a=X/l),this.set(s,a,l,t),this}let D=Math.sqrt((y-E)*(y-E)+(x-T)*(x-T)+(v-_)*(v-_));return Math.abs(D)<.001&&(D=1),this.x=(y-E)/D,this.y=(x-T)/D,this.z=(v-_)/D,this.w=Math.acos((p+S+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ht(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ry extends ss{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);const a={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new Rn(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,a=e.textures.length;s<a;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Gg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends Ry{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Wg extends Rn{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cy extends Rn{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,c,f){let h=s[a+0],p=s[a+1],_=s[a+2],x=s[a+3];const v=l[c+0],S=l[c+1],E=l[c+2],T=l[c+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(f===1){e[t+0]=v,e[t+1]=S,e[t+2]=E,e[t+3]=T;return}if(x!==T||h!==v||p!==S||_!==E){let y=1-f;const g=h*v+p*S+_*E+x*T,D=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const V=Math.sqrt(L),k=Math.atan2(V,g*D);y=Math.sin(y*k)/V,f=Math.sin(f*k)/V}const C=f*D;if(h=h*y+v*C,p=p*y+S*C,_=_*y+E*C,x=x*y+T*C,y===1-f){const V=1/Math.sqrt(h*h+p*p+_*_+x*x);h*=V,p*=V,_*=V,x*=V}}e[t]=h,e[t+1]=p,e[t+2]=_,e[t+3]=x}static multiplyQuaternionsFlat(e,t,s,a,l,c){const f=s[a],h=s[a+1],p=s[a+2],_=s[a+3],x=l[c],v=l[c+1],S=l[c+2],E=l[c+3];return e[t]=f*E+_*x+h*S-p*v,e[t+1]=h*E+_*v+p*x-f*S,e[t+2]=p*E+_*S+f*v-h*x,e[t+3]=_*E-f*x-h*v-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(s/2),_=f(a/2),x=f(l/2),v=h(s/2),S=h(a/2),E=h(l/2);switch(c){case"XYZ":this._x=v*_*x+p*S*E,this._y=p*S*x-v*_*E,this._z=p*_*E+v*S*x,this._w=p*_*x-v*S*E;break;case"YXZ":this._x=v*_*x+p*S*E,this._y=p*S*x-v*_*E,this._z=p*_*E-v*S*x,this._w=p*_*x+v*S*E;break;case"ZXY":this._x=v*_*x-p*S*E,this._y=p*S*x+v*_*E,this._z=p*_*E+v*S*x,this._w=p*_*x-v*S*E;break;case"ZYX":this._x=v*_*x-p*S*E,this._y=p*S*x+v*_*E,this._z=p*_*E-v*S*x,this._w=p*_*x+v*S*E;break;case"YZX":this._x=v*_*x+p*S*E,this._y=p*S*x+v*_*E,this._z=p*_*E-v*S*x,this._w=p*_*x-v*S*E;break;case"XZY":this._x=v*_*x-p*S*E,this._y=p*S*x-v*_*E,this._z=p*_*E+v*S*x,this._w=p*_*x+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],_=t[6],x=t[10],v=s+f+x;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-h)*S,this._y=(l-p)*S,this._z=(c-a)*S}else if(s>f&&s>x){const S=2*Math.sqrt(1+s-f-x);this._w=(_-h)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+p)/S}else if(f>x){const S=2*Math.sqrt(1+f-s-x);this._w=(l-p)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+x-s-f);this._w=(c-a)/S,this._x=(l+p)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,_=t._w;return this._x=s*_+c*f+a*p-l*h,this._y=a*_+c*h+l*f-s*p,this._z=l*_+c*p+s*h-a*f,this._w=c*_-s*f-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+s*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=s,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),_=Math.atan2(p,f),x=Math.sin((1-t)*_)/p,v=Math.sin(t*_)/p;return this._w=c*x+this._w*v,this._x=s*x+this._x*v,this._y=a*x+this._y*v,this._z=l*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,s=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ym.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ym.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*a-f*s),_=2*(f*t-l*a),x=2*(l*s-c*t);return this.x=t+h*p+c*x-f*_,this.y=s+h*_+f*p-l*x,this.z=a+h*x+l*_-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ht(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*c-s*h,this.z=s*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Wc.copy(this).projectOnVector(e),this.sub(Wc)}reflect(e){return this.sub(Wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(ht(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wc=new J,ym=new rs;class oa{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,si):si.fromBufferAttribute(l,c),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_l.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),_l.copy(s.boundingBox)),_l.applyMatrix4(e.matrixWorld),this.union(_l)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yo),vl.subVectors(this.max,Yo),Us.subVectors(e.a,Yo),Is.subVectors(e.b,Yo),Ns.subVectors(e.c,Yo),gr.subVectors(Is,Us),_r.subVectors(Ns,Is),Wr.subVectors(Us,Ns);let t=[0,-gr.z,gr.y,0,-_r.z,_r.y,0,-Wr.z,Wr.y,gr.z,0,-gr.x,_r.z,0,-_r.x,Wr.z,0,-Wr.x,-gr.y,gr.x,0,-_r.y,_r.x,0,-Wr.y,Wr.x,0];return!Xc(t,Us,Is,Ns,vl)||(t=[1,0,0,0,1,0,0,0,1],!Xc(t,Us,Is,Ns,vl))?!1:(xl.crossVectors(gr,_r),t=[xl.x,xl.y,xl.z],Xc(t,Us,Is,Ns,vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ii=[new J,new J,new J,new J,new J,new J,new J,new J],si=new J,_l=new oa,Us=new J,Is=new J,Ns=new J,gr=new J,_r=new J,Wr=new J,Yo=new J,vl=new J,xl=new J,Xr=new J;function Xc(r,e,t,s,a){for(let l=0,c=r.length-3;l<=c;l+=3){Xr.fromArray(r,l);const f=a.x*Math.abs(Xr.x)+a.y*Math.abs(Xr.y)+a.z*Math.abs(Xr.z),h=e.dot(Xr),p=t.dot(Xr),_=s.dot(Xr);if(Math.max(-Math.max(h,p,_),Math.min(h,p,_))>f)return!1}return!0}const Py=new oa,jo=new J,Yc=new J;class Sd{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):Py.setFromPoints(e).getCenter(s);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);const t=jo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(jo,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(Yc)),this.expandByPoint(jo.copy(e.center).sub(Yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new J,jc=new J,yl=new J,vr=new J,$c=new J,Sl=new J,qc=new J;class Ed{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){jc.copy(e).add(t).multiplyScalar(.5),yl.copy(t).sub(e).normalize(),vr.copy(this.origin).sub(jc);const l=e.distanceTo(t)*.5,c=-this.direction.dot(yl),f=vr.dot(this.direction),h=-vr.dot(yl),p=vr.lengthSq(),_=Math.abs(1-c*c);let x,v,S,E;if(_>0)if(x=c*h-f,v=c*f-h,E=l*_,x>=0)if(v>=-E)if(v<=E){const T=1/_;x*=T,v*=T,S=x*(x+c*v+2*f)+v*(c*x+v+2*h)+p}else v=l,x=Math.max(0,-(c*v+f)),S=-x*x+v*(v+2*h)+p;else v=-l,x=Math.max(0,-(c*v+f)),S=-x*x+v*(v+2*h)+p;else v<=-E?(x=Math.max(0,-(-c*l+f)),v=x>0?-l:Math.min(Math.max(-l,-h),l),S=-x*x+v*(v+2*h)+p):v<=E?(x=0,v=Math.min(Math.max(-l,-h),l),S=v*(v+2*h)+p):(x=Math.max(0,-(c*l+f)),v=x>0?l:Math.min(Math.max(-l,-h),l),S=-x*x+v*(v+2*h)+p);else v=c>0?-l:l,x=Math.max(0,-(c*v+f)),S=-x*x+v*(v+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(jc).addScaledVector(yl,v),S}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const s=Ni.dot(this.direction),a=Ni.dot(Ni)-s*s,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=s-c,h=s+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,c,f,h;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,v=this.origin;return p>=0?(s=(e.min.x-v.x)*p,a=(e.max.x-v.x)*p):(s=(e.max.x-v.x)*p,a=(e.min.x-v.x)*p),_>=0?(l=(e.min.y-v.y)*_,c=(e.max.y-v.y)*_):(l=(e.max.y-v.y)*_,c=(e.min.y-v.y)*_),s>c||l>a||((l>s||isNaN(s))&&(s=l),(c<a||isNaN(a))&&(a=c),x>=0?(f=(e.min.z-v.z)*x,h=(e.max.z-v.z)*x):(f=(e.max.z-v.z)*x,h=(e.min.z-v.z)*x),s>h||f>a)||((f>s||s!==s)&&(s=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,s,a,l){$c.subVectors(t,e),Sl.subVectors(s,e),qc.crossVectors($c,Sl);let c=this.direction.dot(qc),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;vr.subVectors(this.origin,e);const h=f*this.direction.dot(Sl.crossVectors(vr,Sl));if(h<0)return null;const p=f*this.direction.dot($c.cross(vr));if(p<0||h+p>c)return null;const _=-f*vr.dot(qc);return _<0?null:this.at(_/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,t,s,a,l,c,f,h,p,_,x,v,S,E,T,y){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,h,p,_,x,v,S,E,T,y)}set(e,t,s,a,l,c,f,h,p,_,x,v,S,E,T,y){const g=this.elements;return g[0]=e,g[4]=t,g[8]=s,g[12]=a,g[1]=l,g[5]=c,g[9]=f,g[13]=h,g[2]=p,g[6]=_,g[10]=x,g[14]=v,g[3]=S,g[7]=E,g[11]=T,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/Fs.setFromMatrixColumn(e,0).length(),l=1/Fs.setFromMatrixColumn(e,1).length(),c=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),h=Math.cos(a),p=Math.sin(a),_=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const v=c*_,S=c*x,E=f*_,T=f*x;t[0]=h*_,t[4]=-h*x,t[8]=p,t[1]=S+E*p,t[5]=v-T*p,t[9]=-f*h,t[2]=T-v*p,t[6]=E+S*p,t[10]=c*h}else if(e.order==="YXZ"){const v=h*_,S=h*x,E=p*_,T=p*x;t[0]=v+T*f,t[4]=E*f-S,t[8]=c*p,t[1]=c*x,t[5]=c*_,t[9]=-f,t[2]=S*f-E,t[6]=T+v*f,t[10]=c*h}else if(e.order==="ZXY"){const v=h*_,S=h*x,E=p*_,T=p*x;t[0]=v-T*f,t[4]=-c*x,t[8]=E+S*f,t[1]=S+E*f,t[5]=c*_,t[9]=T-v*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const v=c*_,S=c*x,E=f*_,T=f*x;t[0]=h*_,t[4]=E*p-S,t[8]=v*p+T,t[1]=h*x,t[5]=T*p+v,t[9]=S*p-E,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const v=c*h,S=c*p,E=f*h,T=f*p;t[0]=h*_,t[4]=T-v*x,t[8]=E*x+S,t[1]=x,t[5]=c*_,t[9]=-f*_,t[2]=-p*_,t[6]=S*x+E,t[10]=v-T*x}else if(e.order==="XZY"){const v=c*h,S=c*p,E=f*h,T=f*p;t[0]=h*_,t[4]=-x,t[8]=p*_,t[1]=v*x+T,t[5]=c*_,t[9]=S*x-E,t[2]=E*x-S,t[6]=f*_,t[10]=T*x+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(by,e,Dy)}lookAt(e,t,s){const a=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),xr.crossVectors(s,Hn),xr.lengthSq()===0&&(Math.abs(s.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),xr.crossVectors(s,Hn)),xr.normalize(),El.crossVectors(Hn,xr),a[0]=xr.x,a[4]=El.x,a[8]=Hn.x,a[1]=xr.y,a[5]=El.y,a[9]=Hn.y,a[2]=xr.z,a[6]=El.z,a[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[4],h=s[8],p=s[12],_=s[1],x=s[5],v=s[9],S=s[13],E=s[2],T=s[6],y=s[10],g=s[14],D=s[3],L=s[7],C=s[11],V=s[15],k=a[0],N=a[4],X=a[8],P=a[12],R=a[1],B=a[5],oe=a[9],te=a[13],ce=a[2],pe=a[6],se=a[10],le=a[14],z=a[3],ae=a[7],re=a[11],I=a[15];return l[0]=c*k+f*R+h*ce+p*z,l[4]=c*N+f*B+h*pe+p*ae,l[8]=c*X+f*oe+h*se+p*re,l[12]=c*P+f*te+h*le+p*I,l[1]=_*k+x*R+v*ce+S*z,l[5]=_*N+x*B+v*pe+S*ae,l[9]=_*X+x*oe+v*se+S*re,l[13]=_*P+x*te+v*le+S*I,l[2]=E*k+T*R+y*ce+g*z,l[6]=E*N+T*B+y*pe+g*ae,l[10]=E*X+T*oe+y*se+g*re,l[14]=E*P+T*te+y*le+g*I,l[3]=D*k+L*R+C*ce+V*z,l[7]=D*N+L*B+C*pe+V*ae,l[11]=D*X+L*oe+C*se+V*re,l[15]=D*P+L*te+C*le+V*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],_=e[2],x=e[6],v=e[10],S=e[14],E=e[3],T=e[7],y=e[11],g=e[15];return E*(+l*h*x-a*p*x-l*f*v+s*p*v+a*f*S-s*h*S)+T*(+t*h*S-t*p*v+l*c*v-a*c*S+a*p*_-l*h*_)+y*(+t*p*x-t*f*S-l*c*x+s*c*S+l*f*_-s*p*_)+g*(-a*f*_-t*h*x+t*f*v+a*c*x-s*c*v+s*h*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],_=e[8],x=e[9],v=e[10],S=e[11],E=e[12],T=e[13],y=e[14],g=e[15],D=x*y*p-T*v*p+T*h*S-f*y*S-x*h*g+f*v*g,L=E*v*p-_*y*p-E*h*S+c*y*S+_*h*g-c*v*g,C=_*T*p-E*x*p+E*f*S-c*T*S-_*f*g+c*x*g,V=E*x*h-_*T*h-E*f*v+c*T*v+_*f*y-c*x*y,k=t*D+s*L+a*C+l*V;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/k;return e[0]=D*N,e[1]=(T*v*l-x*y*l-T*a*S+s*y*S+x*a*g-s*v*g)*N,e[2]=(f*y*l-T*h*l+T*a*p-s*y*p-f*a*g+s*h*g)*N,e[3]=(x*h*l-f*v*l-x*a*p+s*v*p+f*a*S-s*h*S)*N,e[4]=L*N,e[5]=(_*y*l-E*v*l+E*a*S-t*y*S-_*a*g+t*v*g)*N,e[6]=(E*h*l-c*y*l-E*a*p+t*y*p+c*a*g-t*h*g)*N,e[7]=(c*v*l-_*h*l+_*a*p-t*v*p-c*a*S+t*h*S)*N,e[8]=C*N,e[9]=(E*x*l-_*T*l-E*s*S+t*T*S+_*s*g-t*x*g)*N,e[10]=(c*T*l-E*f*l+E*s*p-t*T*p-c*s*g+t*f*g)*N,e[11]=(_*f*l-c*x*l-_*s*p+t*x*p+c*s*S-t*f*S)*N,e[12]=V*N,e[13]=(_*T*a-E*x*a+E*s*v-t*T*v-_*s*y+t*x*y)*N,e[14]=(E*f*a-c*T*a-E*s*h+t*T*h+c*s*y-t*f*y)*N,e[15]=(c*x*a-_*f*a+_*s*h-t*x*h-c*s*v+t*f*v)*N,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,c=e.x,f=e.y,h=e.z,p=l*c,_=l*f;return this.set(p*c+s,p*f-a*h,p*h+a*f,0,p*f+a*h,_*f+s,_*h-a*c,0,p*h-a*f,_*h+a*c,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,c){return this.set(1,s,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,_=c+c,x=f+f,v=l*p,S=l*_,E=l*x,T=c*_,y=c*x,g=f*x,D=h*p,L=h*_,C=h*x,V=s.x,k=s.y,N=s.z;return a[0]=(1-(T+g))*V,a[1]=(S+C)*V,a[2]=(E-L)*V,a[3]=0,a[4]=(S-C)*k,a[5]=(1-(v+g))*k,a[6]=(y+D)*k,a[7]=0,a[8]=(E+L)*N,a[9]=(y-D)*N,a[10]=(1-(v+T))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=Fs.set(a[0],a[1],a[2]).length();const c=Fs.set(a[4],a[5],a[6]).length(),f=Fs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],oi.copy(this);const p=1/l,_=1/c,x=1/f;return oi.elements[0]*=p,oi.elements[1]*=p,oi.elements[2]*=p,oi.elements[4]*=_,oi.elements[5]*=_,oi.elements[6]*=_,oi.elements[8]*=x,oi.elements[9]*=x,oi.elements[10]*=x,t.setFromRotationMatrix(oi),s.x=l,s.y=c,s.z=f,this}makePerspective(e,t,s,a,l,c,f=Vi){const h=this.elements,p=2*l/(t-e),_=2*l/(s-a),x=(t+e)/(t-e),v=(s+a)/(s-a);let S,E;if(f===Vi)S=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===ql)S=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=_,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,a,l,c,f=Vi){const h=this.elements,p=1/(t-e),_=1/(s-a),x=1/(c-l),v=(t+e)*p,S=(s+a)*_;let E,T;if(f===Vi)E=(c+l)*x,T=-2*x;else if(f===ql)E=l*x,T=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=T,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Fs=new J,oi=new jt,by=new J(0,0,0),Dy=new J(1,1,1),xr=new J,El=new J,Hn=new J,Sm=new jt,Em=new rs;class Yi{constructor(e=0,t=0,s=0,a=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],h=a[1],p=a[5],_=a[9],x=a[2],v=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(ht(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-ht(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Em.setFromEuler(this),this.setFromQuaternion(Em,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class Md{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ly=0;const Mm=new J,Os=new rs,Fi=new jt,Ml=new J,$o=new J,Uy=new J,Iy=new rs,Tm=new J(1,0,0),wm=new J(0,1,0),Am=new J(0,0,1),Rm={type:"added"},Ny={type:"removed"},ks={type:"childadded",child:null},Kc={type:"childremoved",child:null};class Gn extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const e=new J,t=new Yi,s=new rs,a=new J(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new jt},normalMatrix:{value:new ot}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Md,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(Tm,e)}rotateY(e){return this.rotateOnAxis(wm,e)}rotateZ(e){return this.rotateOnAxis(Am,e)}translateOnAxis(e,t){return Mm.copy(e).applyQuaternion(this.quaternion),this.position.add(Mm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tm,e)}translateY(e){return this.translateOnAxis(wm,e)}translateZ(e){return this.translateOnAxis(Am,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Ml.copy(e):Ml.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt($o,Ml,this.up):Fi.lookAt(Ml,$o,this.up),this.quaternion.setFromRotationMatrix(Fi),a&&(Fi.extractRotation(a.matrixWorld),Os.setFromRotationMatrix(Fi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rm),ks.child=e,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ny),Kc.child=e,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rm),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,Uy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,Iy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,_=h.length;p<_;p++){const x=h[p];l(e.shapes,x)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),_=c(e.images),x=c(e.shapes),v=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),v.length>0&&(s.skeletons=v),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=a,s;function c(f){const h=[];for(const p in f){const _=f[p];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}Gn.DEFAULT_UP=new J(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new J,Oi=new J,Zc=new J,ki=new J,Bs=new J,zs=new J,Cm=new J,Qc=new J,Jc=new J,ef=new J,tf=new Yt,nf=new Yt,rf=new Yt;class li{constructor(e=new J,t=new J,s=new J){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),ai.subVectors(e,t),a.cross(ai);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){ai.subVectors(a,t),Oi.subVectors(s,t),Zc.subVectors(e,t);const c=ai.dot(ai),f=ai.dot(Oi),h=ai.dot(Zc),p=Oi.dot(Oi),_=Oi.dot(Zc),x=c*p-f*f;if(x===0)return l.set(0,0,0),null;const v=1/x,S=(p*h-f*_)*v,E=(c*_-f*h)*v;return l.set(1-S-E,E,S)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,s,a,l,c,f,h){return this.getBarycoord(e,t,s,a,ki)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,ki.x),h.addScaledVector(c,ki.y),h.addScaledVector(f,ki.z),h)}static getInterpolatedAttribute(e,t,s,a,l,c){return tf.setScalar(0),nf.setScalar(0),rf.setScalar(0),tf.fromBufferAttribute(e,t),nf.fromBufferAttribute(e,s),rf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(tf,l.x),c.addScaledVector(nf,l.y),c.addScaledVector(rf,l.z),c}static isFrontFacing(e,t,s,a){return ai.subVectors(s,t),Oi.subVectors(e,t),ai.cross(Oi).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ai.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return li.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let c,f;Bs.subVectors(a,s),zs.subVectors(l,s),Qc.subVectors(e,s);const h=Bs.dot(Qc),p=zs.dot(Qc);if(h<=0&&p<=0)return t.copy(s);Jc.subVectors(e,a);const _=Bs.dot(Jc),x=zs.dot(Jc);if(_>=0&&x<=_)return t.copy(a);const v=h*x-_*p;if(v<=0&&h>=0&&_<=0)return c=h/(h-_),t.copy(s).addScaledVector(Bs,c);ef.subVectors(e,l);const S=Bs.dot(ef),E=zs.dot(ef);if(E>=0&&S<=E)return t.copy(l);const T=S*p-h*E;if(T<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(s).addScaledVector(zs,f);const y=_*E-S*x;if(y<=0&&x-_>=0&&S-E>=0)return Cm.subVectors(l,a),f=(x-_)/(x-_+(S-E)),t.copy(a).addScaledVector(Cm,f);const g=1/(y+T+v);return c=T*g,f=v*g,t.copy(s).addScaledVector(Bs,c).addScaledVector(zs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function sf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Pt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,a=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Mt.toWorkingColorSpace(this,a),this}setHSL(e,t,s,a=Mt.workingColorSpace){if(e=yd(e,1),t=ht(t,0,1),s=ht(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=sf(c,l,e+1/3),this.g=sf(c,l,e),this.b=sf(c,l,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,t=Zn){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zn){const s=Xg[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return Mt.fromWorkingColorSpace(xn.copy(this),e),Math.round(ht(xn.r*255,0,255))*65536+Math.round(ht(xn.g*255,0,255))*256+Math.round(ht(xn.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(xn.copy(this),t);const s=xn.r,a=xn.g,l=xn.b,c=Math.max(s,a,l),f=Math.min(s,a,l);let h,p;const _=(f+c)/2;if(f===c)h=0,p=0;else{const x=c-f;switch(p=_<=.5?x/(c+f):x/(2-c-f),c){case s:h=(a-l)/x+(a<l?6:0);break;case a:h=(l-s)/x+2;break;case l:h=(s-a)/x+4;break}h/=6}return e.h=h,e.s=p,e.l=_,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Zn){Mt.fromWorkingColorSpace(xn.copy(this),e);const t=xn.r,s=xn.g,a=xn.b;return e!==Zn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(Tl);const s=Qo(yr.h,Tl.h,t),a=Qo(yr.s,Tl.s,t),l=Qo(yr.l,Tl.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Pt;Pt.NAMES=Xg;let Fy=0;class eu extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=lo(),this.name="",this.type="Material",this.blending=Ks,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xf,this.blendDst=yf,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(s.blending=this.blending),this.side!==Rr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==xf&&(s.blendSrc=this.blendSrc),this.blendDst!==yf&&(s.blendDst=this.blendDst),this.blendEquation!==Zr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Td extends eu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=Pg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new J,wl=new ut;class yi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=pm,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)wl.fromBufferAttribute(this,t),wl.applyMatrix3(e),this.setXY(t,wl.x,wl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Xs(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=wn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xs(t,this.array)),t}setX(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xs(t,this.array)),t}setY(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xs(t,this.array)),t}setW(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),s=wn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),s=wn(s,this.array),a=wn(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),s=wn(s,this.array),a=wn(a,this.array),l=wn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pm&&(e.usage=this.usage),e}}class Yg extends yi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class jg extends yi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class ts extends yi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let Oy=0;const Kn=new jt,of=new Gn,Hs=new J,Vn=new oa,qo=new oa,ln=new J;class os extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vg(e)?jg:Yg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ot().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,s){return Kn.makeTranslation(e,t,s),this.applyMatrix4(Kn),this}scale(e,t,s){return Kn.makeScale(e,t,s),this.applyMatrix4(Kn),this}lookAt(e){return of.lookAt(e),of.updateMatrix(),this.applyMatrix4(of.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new ts(s,3))}else{const s=Math.min(e.length,t.count);for(let a=0;a<s;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Vn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const s=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];qo.setFromBufferAttribute(f),this.morphTargetsRelative?(ln.addVectors(Vn.min,qo.min),Vn.expandByPoint(ln),ln.addVectors(Vn.max,qo.max),Vn.expandByPoint(ln)):(Vn.expandByPoint(qo.min),Vn.expandByPoint(qo.max))}Vn.getCenter(s);let a=0;for(let l=0,c=e.count;l<c;l++)ln.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(ln));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,_=f.count;p<_;p++)ln.fromBufferAttribute(f,p),h&&(Hs.fromBufferAttribute(e,p),ln.add(Hs)),a=Math.max(a,s.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let X=0;X<s.count;X++)f[X]=new J,h[X]=new J;const p=new J,_=new J,x=new J,v=new ut,S=new ut,E=new ut,T=new J,y=new J;function g(X,P,R){p.fromBufferAttribute(s,X),_.fromBufferAttribute(s,P),x.fromBufferAttribute(s,R),v.fromBufferAttribute(l,X),S.fromBufferAttribute(l,P),E.fromBufferAttribute(l,R),_.sub(p),x.sub(p),S.sub(v),E.sub(v);const B=1/(S.x*E.y-E.x*S.y);isFinite(B)&&(T.copy(_).multiplyScalar(E.y).addScaledVector(x,-S.y).multiplyScalar(B),y.copy(x).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(B),f[X].add(T),f[P].add(T),f[R].add(T),h[X].add(y),h[P].add(y),h[R].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let X=0,P=D.length;X<P;++X){const R=D[X],B=R.start,oe=R.count;for(let te=B,ce=B+oe;te<ce;te+=3)g(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const L=new J,C=new J,V=new J,k=new J;function N(X){V.fromBufferAttribute(a,X),k.copy(V);const P=f[X];L.copy(P),L.sub(V.multiplyScalar(V.dot(P))).normalize(),C.crossVectors(k,P);const B=C.dot(h[X])<0?-1:1;c.setXYZW(X,L.x,L.y,L.z,B)}for(let X=0,P=D.length;X<P;++X){const R=D[X],B=R.start,oe=R.count;for(let te=B,ce=B+oe;te<ce;te+=3)N(e.getX(te+0)),N(e.getX(te+1)),N(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new yi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let v=0,S=s.count;v<S;v++)s.setXYZ(v,0,0,0);const a=new J,l=new J,c=new J,f=new J,h=new J,p=new J,_=new J,x=new J;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),T=e.getX(v+1),y=e.getX(v+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,T),c.fromBufferAttribute(t,y),_.subVectors(c,l),x.subVectors(a,l),_.cross(x),f.fromBufferAttribute(s,E),h.fromBufferAttribute(s,T),p.fromBufferAttribute(s,y),f.add(_),h.add(_),p.add(_),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,S=t.count;v<S;v+=3)a.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),_.subVectors(c,l),x.subVectors(a,l),_.cross(x),s.setXYZ(v+0,_.x,_.y,_.z),s.setXYZ(v+1,_.x,_.y,_.z),s.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(f,h){const p=f.array,_=f.itemSize,x=f.normalized,v=new p.constructor(h.length*_);let S=0,E=0;for(let T=0,y=h.length;T<y;T++){f.isInterleavedBufferAttribute?S=h[T]*f.data.stride+f.offset:S=h[T]*_;for(let g=0;g<_;g++)v[E++]=p[S++]}return new yi(v,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new os,s=this.index.array,a=this.attributes;for(const f in a){const h=a[f],p=e(h,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let _=0,x=p.length;_<x;_++){const v=p[_],S=e(v,s);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],_=[];for(let x=0,v=p.length;x<v;x++){const S=p[x];_.push(S.toJSON(e.data))}_.length>0&&(a[h]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const a=e.attributes;for(const p in a){const _=a[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],x=l[p];for(let v=0,S=x.length;v<S;v++)_.push(x[v].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,_=c.length;p<_;p++){const x=c[p];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pm=new jt,Yr=new Ed,Al=new Sd,bm=new J,Rl=new J,Cl=new J,Pl=new J,af=new J,bl=new J,Dm=new J,Dl=new J;class xi extends Gn{constructor(e=new os,t=new Td){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){bl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const _=f[h],x=l[h];_!==0&&(af.fromBufferAttribute(x,e),c?bl.addScaledVector(af,_):bl.addScaledVector(af.sub(t),_))}t.add(bl)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Al.copy(s.boundingSphere),Al.applyMatrix4(l),Yr.copy(e.ray).recast(e.near),!(Al.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(Al,bm)===null||Yr.origin.distanceToSquared(bm)>(e.far-e.near)**2))&&(Pm.copy(l).invert(),Yr.copy(e.ray).applyMatrix4(Pm),!(s.boundingBox!==null&&Yr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Yr)))}_computeIntersections(e,t,s){let a;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,x=l.attributes.normal,v=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,T=v.length;E<T;E++){const y=v[E],g=c[y.materialIndex],D=Math.max(y.start,S.start),L=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let C=D,V=L;C<V;C+=3){const k=f.getX(C),N=f.getX(C+1),X=f.getX(C+2);a=Ll(this,g,e,s,p,_,x,k,N,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(f.count,S.start+S.count);for(let y=E,g=T;y<g;y+=3){const D=f.getX(y),L=f.getX(y+1),C=f.getX(y+2);a=Ll(this,c,e,s,p,_,x,D,L,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,T=v.length;E<T;E++){const y=v[E],g=c[y.materialIndex],D=Math.max(y.start,S.start),L=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let C=D,V=L;C<V;C+=3){const k=C,N=C+1,X=C+2;a=Ll(this,g,e,s,p,_,x,k,N,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let y=E,g=T;y<g;y+=3){const D=y,L=y+1,C=y+2;a=Ll(this,c,e,s,p,_,x,D,L,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function ky(r,e,t,s,a,l,c,f){let h;if(e.side===Fn?h=s.intersectTriangle(c,l,a,!0,f):h=s.intersectTriangle(a,l,c,e.side===Rr,f),h===null)return null;Dl.copy(f),Dl.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Dl);return p<t.near||p>t.far?null:{distance:p,point:Dl.clone(),object:r}}function Ll(r,e,t,s,a,l,c,f,h,p){r.getVertexPosition(f,Rl),r.getVertexPosition(h,Cl),r.getVertexPosition(p,Pl);const _=ky(r,e,t,s,Rl,Cl,Pl,Dm);if(_){const x=new J;li.getBarycoord(Dm,Rl,Cl,Pl,x),a&&(_.uv=li.getInterpolatedAttribute(a,f,h,p,x,new ut)),l&&(_.uv1=li.getInterpolatedAttribute(l,f,h,p,x,new ut)),c&&(_.normal=li.getInterpolatedAttribute(c,f,h,p,x,new J),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const v={a:f,b:h,c:p,normal:new J,materialIndex:0};li.getNormal(Rl,Cl,Pl,v.normal),_.face=v,_.barycoord=x}return _}class uo extends os{constructor(e=1,t=1,s=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],_=[],x=[];let v=0,S=0;E("z","y","x",-1,-1,s,t,e,c,l,0),E("z","y","x",1,-1,s,t,-e,c,l,1),E("x","z","y",1,1,e,s,t,a,c,2),E("x","z","y",1,-1,e,s,-t,a,c,3),E("x","y","z",1,-1,e,t,s,a,l,4),E("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(h),this.setAttribute("position",new ts(p,3)),this.setAttribute("normal",new ts(_,3)),this.setAttribute("uv",new ts(x,2));function E(T,y,g,D,L,C,V,k,N,X,P){const R=C/N,B=V/X,oe=C/2,te=V/2,ce=k/2,pe=N+1,se=X+1;let le=0,z=0;const ae=new J;for(let re=0;re<se;re++){const I=re*B-te;for(let ne=0;ne<pe;ne++){const Ne=ne*R-oe;ae[T]=Ne*D,ae[y]=I*L,ae[g]=ce,p.push(ae.x,ae.y,ae.z),ae[T]=0,ae[y]=0,ae[g]=k>0?1:-1,_.push(ae.x,ae.y,ae.z),x.push(ne/N),x.push(1-re/X),le+=1}}for(let re=0;re<X;re++)for(let I=0;I<N;I++){const ne=v+I+pe*re,Ne=v+I+pe*(re+1),Z=v+(I+1)+pe*(re+1),he=v+(I+1)+pe*re;h.push(ne,Ne,he),h.push(Ne,Z,he),z+=6}f.addGroup(S,z,P),S+=z,v+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function so(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const a=r[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function An(r){const e={};for(let t=0;t<r.length;t++){const s=so(r[t]);for(const a in s)e[a]=s[a]}return e}function By(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function $g(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const zy={clone:so,merge:An};var Hy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cr extends eu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hy,this.fragmentShader=Vy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=By(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class qg extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new J,Lm=new ut,Um=new ut;class Qn extends qg{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ta*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,t){return this.getViewBounds(e,Lm,Um),t.subVectors(Um,Lm)}setViewOffset(e,t,s,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zo*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/h,t-=c.offsetY*s/p,a*=c.width/h,s*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vs=-90,Gs=1;class Gy extends Gn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Qn(Vs,Gs,e,t);a.layers=this.layers,this.add(a);const l=new Qn(Vs,Gs,e,t);l.layers=this.layers,this.add(l);const c=new Qn(Vs,Gs,e,t);c.layers=this.layers,this.add(c);const f=new Qn(Vs,Gs,e,t);f.layers=this.layers,this.add(f);const h=new Qn(Vs,Gs,e,t);h.layers=this.layers,this.add(h);const p=new Qn(Vs,Gs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===Vi)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ql)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,_]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,c),e.setRenderTarget(s,2,a),e.render(t,f),e.setRenderTarget(s,3,a),e.render(t,h),e.setRenderTarget(s,4,a),e.render(t,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,a),e.render(t,_),e.setRenderTarget(x,v,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Kg extends Rn{constructor(e,t,s,a,l,c,f,h,p,_){e=e!==void 0?e:[],t=t!==void 0?t:eo,super(e,t,s,a,l,c,f,h,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wy extends is{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new Kg(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new uo(5,5,5),l=new Cr({name:"CubemapFromEquirect",uniforms:so(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Fn,blending:Tr});l.uniforms.tEquirect.value=t;const c=new xi(a,l),f=t.minFilter;return t.minFilter===es&&(t.minFilter=vi),new Gy(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,s,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,a);e.setRenderTarget(l)}}class Xy extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const lf=new J,Yy=new J,jy=new ot;class Er{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=lf.subVectors(s,t).cross(Yy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(lf),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||jy.getNormalMatrix(e),a=this.coplanarPoint(lf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new Sd,Ul=new J;class Zg{constructor(e=new Er,t=new Er,s=new Er,a=new Er,l=new Er,c=new Er){this.planes=[e,t,s,a,l,c]}set(e,t,s,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Vi){const s=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],h=a[3],p=a[4],_=a[5],x=a[6],v=a[7],S=a[8],E=a[9],T=a[10],y=a[11],g=a[12],D=a[13],L=a[14],C=a[15];if(s[0].setComponents(h-l,v-p,y-S,C-g).normalize(),s[1].setComponents(h+l,v+p,y+S,C+g).normalize(),s[2].setComponents(h+c,v+_,y+E,C+D).normalize(),s[3].setComponents(h-c,v-_,y-E,C-D).normalize(),s[4].setComponents(h-f,v-x,y-T,C-L).normalize(),t===Vi)s[5].setComponents(h+f,v+x,y+T,C+L).normalize();else if(t===ql)s[5].setComponents(f,x,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(Ul.x=a.normal.x>0?e.max.x:e.min.x,Ul.y=a.normal.y>0?e.max.y:e.min.y,Ul.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Il extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class $y extends Rn{constructor(e,t,s,a,l,c,f,h,p){super(e,t,s,a,l,c,f,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qg extends Rn{constructor(e,t,s,a,l,c,f,h,p,_=Zs){if(_!==Zs&&_!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===Zs&&(s=ns),s===void 0&&_===io&&(s=no),super(null,a,l,c,f,h,_,s,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:ci,this.minFilter=h!==void 0?h:ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class tu extends os{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(s),h=Math.floor(a),p=f+1,_=h+1,x=e/f,v=t/h,S=[],E=[],T=[],y=[];for(let g=0;g<_;g++){const D=g*v-c;for(let L=0;L<p;L++){const C=L*x-l;E.push(C,-D,0),T.push(0,0,1),y.push(L/f),y.push(1-g/h)}}for(let g=0;g<h;g++)for(let D=0;D<f;D++){const L=D+p*g,C=D+p*(g+1),V=D+1+p*(g+1),k=D+1+p*g;S.push(L,C,k),S.push(C,V,k)}this.setIndex(S),this.setAttribute("position",new ts(E,3)),this.setAttribute("normal",new ts(T,3)),this.setAttribute("uv",new ts(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tu(e.width,e.height,e.widthSegments,e.heightSegments)}}class qy extends eu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ky extends eu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Zy extends qg{constructor(e=-1,t=1,s=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=_*this.view.offsetY,h=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Qy extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const Im=new jt;class Jy{constructor(e,t,s=0,a=1/0){this.ray=new Ed(e,t),this.near=s,this.far=a,this.camera=null,this.layers=new Md,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Im.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Im),this}intersectObject(e,t=!0,s=[]){return rd(e,this,s,t),s.sort(Nm),s}intersectObjects(e,t=!0,s=[]){for(let a=0,l=e.length;a<l;a++)rd(e[a],this,s,t);return s.sort(Nm),s}}function Nm(r,e){return r.distance-e.distance}function rd(r,e,t,s){let a=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(a=!1),a===!0&&s===!0){const l=r.children;for(let c=0,f=l.length;c<f;c++)rd(l[c],e,t,!0)}}class Fm{constructor(e=1,t=0,s=0){return this.radius=e,this.phi=t,this.theta=s,this}set(e,t,s){return this.radius=e,this.phi=t,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ht(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,s){return this.radius=Math.sqrt(e*e+t*t+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class eS extends ss{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Om(r,e,t,s){const a=tS(s);switch(t){case Ig:return r*e;case Fg:return r*e;case Og:return r*e*2;case kg:return r*e/a.components*a.byteLength;case _d:return r*e/a.components*a.byteLength;case Bg:return r*e*2/a.components*a.byteLength;case vd:return r*e*2/a.components*a.byteLength;case Ng:return r*e*3/a.components*a.byteLength;case ui:return r*e*4/a.components*a.byteLength;case xd:return r*e*4/a.components*a.byteLength;case Hl:case Vl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Gl:case Wl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Uf:case Nf:return Math.max(r,16)*Math.max(e,8)/4;case Lf:case If:return Math.max(r,8)*Math.max(e,8)/2;case Ff:case Of:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Hf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Yf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case jf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case $f:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case qf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Kf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Zf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Qf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Xl:case Jf:case ed:return Math.ceil(r/4)*Math.ceil(e/4)*16;case zg:case td:return Math.ceil(r/4)*Math.ceil(e/4)*8;case nd:case id:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tS(r){switch(r){case Xi:case Dg:return{byteLength:1,components:1};case ea:case Lg:case sa:return{byteLength:2,components:1};case md:case gd:return{byteLength:2,components:4};case ns:case pd:case Hi:return{byteLength:4,components:1};case Ug:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jg(){let r=null,e=!1,t=null,s=null;function a(l,c){t(l,c),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function nS(r){const e=new WeakMap;function t(f,h){const p=f.array,_=f.usage,x=p.byteLength,v=r.createBuffer();r.bindBuffer(h,v),r.bufferData(h,p,_),f.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:x}}function s(f,h,p){const _=h.array,x=h.updateRanges;if(r.bindBuffer(p,f),x.length===0)r.bufferSubData(p,0,_);else{x.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<x.length;S++){const E=x[v],T=x[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,x[v]=T)}x.length=v+1;for(let S=0,E=x.length;S<E;S++){const T=x[S];r.bufferSubData(p,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,h),p.version=f.version}}return{get:a,remove:l,update:c}}var iS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_S=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ES=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,MS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,AS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,RS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,CS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,PS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,US="gl_FragColor = linearToOutputTexel( gl_FragColor );",IS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,FS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,OS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,XS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$S=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,KS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_E=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,SE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,EE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ME=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,AE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,LE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,BE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,HE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,VE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,WE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,YE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$E=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,KE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_M=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,SM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,MM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,DM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,IM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:iS,alphahash_pars_fragment:rS,alphamap_fragment:sS,alphamap_pars_fragment:oS,alphatest_fragment:aS,alphatest_pars_fragment:lS,aomap_fragment:uS,aomap_pars_fragment:cS,batching_pars_vertex:fS,batching_vertex:dS,begin_vertex:hS,beginnormal_vertex:pS,bsdfs:mS,iridescence_fragment:gS,bumpmap_pars_fragment:_S,clipping_planes_fragment:vS,clipping_planes_pars_fragment:xS,clipping_planes_pars_vertex:yS,clipping_planes_vertex:SS,color_fragment:ES,color_pars_fragment:MS,color_pars_vertex:TS,color_vertex:wS,common:AS,cube_uv_reflection_fragment:RS,defaultnormal_vertex:CS,displacementmap_pars_vertex:PS,displacementmap_vertex:bS,emissivemap_fragment:DS,emissivemap_pars_fragment:LS,colorspace_fragment:US,colorspace_pars_fragment:IS,envmap_fragment:NS,envmap_common_pars_fragment:FS,envmap_pars_fragment:OS,envmap_pars_vertex:kS,envmap_physical_pars_fragment:qS,envmap_vertex:BS,fog_vertex:zS,fog_pars_vertex:HS,fog_fragment:VS,fog_pars_fragment:GS,gradientmap_pars_fragment:WS,lightmap_pars_fragment:XS,lights_lambert_fragment:YS,lights_lambert_pars_fragment:jS,lights_pars_begin:$S,lights_toon_fragment:KS,lights_toon_pars_fragment:ZS,lights_phong_fragment:QS,lights_phong_pars_fragment:JS,lights_physical_fragment:eE,lights_physical_pars_fragment:tE,lights_fragment_begin:nE,lights_fragment_maps:iE,lights_fragment_end:rE,logdepthbuf_fragment:sE,logdepthbuf_pars_fragment:oE,logdepthbuf_pars_vertex:aE,logdepthbuf_vertex:lE,map_fragment:uE,map_pars_fragment:cE,map_particle_fragment:fE,map_particle_pars_fragment:dE,metalnessmap_fragment:hE,metalnessmap_pars_fragment:pE,morphinstance_vertex:mE,morphcolor_vertex:gE,morphnormal_vertex:_E,morphtarget_pars_vertex:vE,morphtarget_vertex:xE,normal_fragment_begin:yE,normal_fragment_maps:SE,normal_pars_fragment:EE,normal_pars_vertex:ME,normal_vertex:TE,normalmap_pars_fragment:wE,clearcoat_normal_fragment_begin:AE,clearcoat_normal_fragment_maps:RE,clearcoat_pars_fragment:CE,iridescence_pars_fragment:PE,opaque_fragment:bE,packing:DE,premultiplied_alpha_fragment:LE,project_vertex:UE,dithering_fragment:IE,dithering_pars_fragment:NE,roughnessmap_fragment:FE,roughnessmap_pars_fragment:OE,shadowmap_pars_fragment:kE,shadowmap_pars_vertex:BE,shadowmap_vertex:zE,shadowmask_pars_fragment:HE,skinbase_vertex:VE,skinning_pars_vertex:GE,skinning_vertex:WE,skinnormal_vertex:XE,specularmap_fragment:YE,specularmap_pars_fragment:jE,tonemapping_fragment:$E,tonemapping_pars_fragment:qE,transmission_fragment:KE,transmission_pars_fragment:ZE,uv_pars_fragment:QE,uv_pars_vertex:JE,uv_vertex:eM,worldpos_vertex:tM,background_vert:nM,background_frag:iM,backgroundCube_vert:rM,backgroundCube_frag:sM,cube_vert:oM,cube_frag:aM,depth_vert:lM,depth_frag:uM,distanceRGBA_vert:cM,distanceRGBA_frag:fM,equirect_vert:dM,equirect_frag:hM,linedashed_vert:pM,linedashed_frag:mM,meshbasic_vert:gM,meshbasic_frag:_M,meshlambert_vert:vM,meshlambert_frag:xM,meshmatcap_vert:yM,meshmatcap_frag:SM,meshnormal_vert:EM,meshnormal_frag:MM,meshphong_vert:TM,meshphong_frag:wM,meshphysical_vert:AM,meshphysical_frag:RM,meshtoon_vert:CM,meshtoon_frag:PM,points_vert:bM,points_frag:DM,shadow_vert:LM,shadow_frag:UM,sprite_vert:IM,sprite_frag:NM},Pe={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},_i={basic:{uniforms:An([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:An([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Pt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:An([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:An([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:An([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Pt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:An([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:An([Pe.points,Pe.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:An([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:An([Pe.common,Pe.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:An([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:An([Pe.sprite,Pe.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:An([Pe.common,Pe.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:An([Pe.lights,Pe.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};_i.physical={uniforms:An([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Nl={r:0,b:0,g:0},$r=new Yi,FM=new jt;function OM(r,e,t,s,a,l,c){const f=new Pt(0);let h=l===!0?0:1,p,_,x=null,v=0,S=null;function E(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?t:e).get(C)),C}function T(L){let C=!1;const V=E(L);V===null?g(f,h):V&&V.isColor&&(g(V,1),C=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?s.buffers.color.setClear(0,0,0,1,c):k==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(r.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(L,C){const V=E(C);V&&(V.isCubeTexture||V.mapping===Jl)?(_===void 0&&(_=new xi(new uo(1,1,1),new Cr({name:"BackgroundCubeMaterial",uniforms:so(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(k,N,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),$r.copy(C.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),_.material.uniforms.envMap.value=V,_.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(FM.makeRotationFromEuler($r)),_.material.toneMapped=Mt.getTransfer(V.colorSpace)!==Rt,(x!==V||v!==V.version||S!==r.toneMapping)&&(_.material.needsUpdate=!0,x=V,v=V.version,S=r.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new xi(new tu(2,2),new Cr({name:"BackgroundMaterial",uniforms:so(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=Mt.getTransfer(V.colorSpace)!==Rt,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(x!==V||v!==V.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,x=V,v=V.version,S=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function g(L,C){L.getRGB(Nl,$g(r)),s.buffers.color.setClear(Nl.r,Nl.g,Nl.b,C,c)}function D(){_!==void 0&&(_.geometry.dispose(),_.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(L,C=1){f.set(L),h=C,g(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,g(f,h)},render:T,addToRenderList:y,dispose:D}}function kM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=v(null);let l=a,c=!1;function f(R,B,oe,te,ce){let pe=!1;const se=x(te,oe,B);l!==se&&(l=se,p(l.object)),pe=S(R,te,oe,ce),pe&&E(R,te,oe,ce),ce!==null&&e.update(ce,r.ELEMENT_ARRAY_BUFFER),(pe||c)&&(c=!1,C(R,B,oe,te),ce!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function h(){return r.createVertexArray()}function p(R){return r.bindVertexArray(R)}function _(R){return r.deleteVertexArray(R)}function x(R,B,oe){const te=oe.wireframe===!0;let ce=s[R.id];ce===void 0&&(ce={},s[R.id]=ce);let pe=ce[B.id];pe===void 0&&(pe={},ce[B.id]=pe);let se=pe[te];return se===void 0&&(se=v(h()),pe[te]=se),se}function v(R){const B=[],oe=[],te=[];for(let ce=0;ce<t;ce++)B[ce]=0,oe[ce]=0,te[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:oe,attributeDivisors:te,object:R,attributes:{},index:null}}function S(R,B,oe,te){const ce=l.attributes,pe=B.attributes;let se=0;const le=oe.getAttributes();for(const z in le)if(le[z].location>=0){const re=ce[z];let I=pe[z];if(I===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(I=R.instanceColor)),re===void 0||re.attribute!==I||I&&re.data!==I.data)return!0;se++}return l.attributesNum!==se||l.index!==te}function E(R,B,oe,te){const ce={},pe=B.attributes;let se=0;const le=oe.getAttributes();for(const z in le)if(le[z].location>=0){let re=pe[z];re===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const I={};I.attribute=re,re&&re.data&&(I.data=re.data),ce[z]=I,se++}l.attributes=ce,l.attributesNum=se,l.index=te}function T(){const R=l.newAttributes;for(let B=0,oe=R.length;B<oe;B++)R[B]=0}function y(R){g(R,0)}function g(R,B){const oe=l.newAttributes,te=l.enabledAttributes,ce=l.attributeDivisors;oe[R]=1,te[R]===0&&(r.enableVertexAttribArray(R),te[R]=1),ce[R]!==B&&(r.vertexAttribDivisor(R,B),ce[R]=B)}function D(){const R=l.newAttributes,B=l.enabledAttributes;for(let oe=0,te=B.length;oe<te;oe++)B[oe]!==R[oe]&&(r.disableVertexAttribArray(oe),B[oe]=0)}function L(R,B,oe,te,ce,pe,se){se===!0?r.vertexAttribIPointer(R,B,oe,ce,pe):r.vertexAttribPointer(R,B,oe,te,ce,pe)}function C(R,B,oe,te){T();const ce=te.attributes,pe=oe.getAttributes(),se=B.defaultAttributeValues;for(const le in pe){const z=pe[le];if(z.location>=0){let ae=ce[le];if(ae===void 0&&(le==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),le==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const re=ae.normalized,I=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const Ne=ne.buffer,Z=ne.type,he=ne.bytesPerElement,Ee=Z===r.INT||Z===r.UNSIGNED_INT||ae.gpuType===pd;if(ae.isInterleavedBufferAttribute){const xe=ae.data,we=xe.stride,Ie=ae.offset;if(xe.isInstancedInterleavedBuffer){for(let Qe=0;Qe<z.locationSize;Qe++)g(z.location+Qe,xe.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Qe=0;Qe<z.locationSize;Qe++)y(z.location+Qe);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let Qe=0;Qe<z.locationSize;Qe++)L(z.location+Qe,I/z.locationSize,Z,re,we*he,(Ie+I/z.locationSize*Qe)*he,Ee)}else{if(ae.isInstancedBufferAttribute){for(let xe=0;xe<z.locationSize;xe++)g(z.location+xe,ae.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let xe=0;xe<z.locationSize;xe++)y(z.location+xe);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let xe=0;xe<z.locationSize;xe++)L(z.location+xe,I/z.locationSize,Z,re,I*he,I/z.locationSize*xe*he,Ee)}}else if(se!==void 0){const re=se[le];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(z.location,re);break;case 3:r.vertexAttrib3fv(z.location,re);break;case 4:r.vertexAttrib4fv(z.location,re);break;default:r.vertexAttrib1fv(z.location,re)}}}}D()}function V(){X();for(const R in s){const B=s[R];for(const oe in B){const te=B[oe];for(const ce in te)_(te[ce].object),delete te[ce];delete B[oe]}delete s[R]}}function k(R){if(s[R.id]===void 0)return;const B=s[R.id];for(const oe in B){const te=B[oe];for(const ce in te)_(te[ce].object),delete te[ce];delete B[oe]}delete s[R.id]}function N(R){for(const B in s){const oe=s[B];if(oe[R.id]===void 0)continue;const te=oe[R.id];for(const ce in te)_(te[ce].object),delete te[ce];delete oe[R.id]}}function X(){P(),c=!0,l!==a&&(l=a,p(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:X,resetDefaultState:P,dispose:V,releaseStatesOfGeometry:k,releaseStatesOfProgram:N,initAttributes:T,enableAttribute:y,disableUnusedAttributes:D}}function BM(r,e,t){let s;function a(p){s=p}function l(p,_){r.drawArrays(s,p,_),t.update(_,s,1)}function c(p,_,x){x!==0&&(r.drawArraysInstanced(s,p,_,x),t.update(_,s,x))}function f(p,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,x);let S=0;for(let E=0;E<x;E++)S+=_[E];t.update(S,s,1)}function h(p,_,x,v){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)c(p[E],_[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,_,0,v,0,x);let E=0;for(let T=0;T<x;T++)E+=_[T]*v[T];t.update(E,s,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function zM(r,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(N){return!(N!==ui&&s.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(N){const X=N===sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Xi&&s.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Hi&&!X)}function h(N){if(N==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=h(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,k=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:V,maxSamples:k}}function HM(r){const e=this;let t=null,s=0,a=!1,l=!1;const c=new Er,f=new ot,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const S=x.length!==0||v||s!==0||a;return a=v,s=x.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,v){t=_(x,v,0)},this.setState=function(x,v,S){const E=x.clippingPlanes,T=x.clipIntersection,y=x.clipShadows,g=r.get(x);if(!a||E===null||E.length===0||l&&!y)l?_(null):p();else{const D=l?0:s,L=D*4;let C=g.clippingState||null;h.value=C,C=_(E,v,L,S);for(let V=0;V!==L;++V)C[V]=t[V];g.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(x,v,S,E){const T=x!==null?x.length:0;let y=null;if(T!==0){if(y=h.value,E!==!0||y===null){const g=S+T*4,D=v.matrixWorldInverse;f.getNormalMatrix(D),(y===null||y.length<g)&&(y=new Float32Array(g));for(let L=0,C=S;L!==T;++L,C+=4)c.copy(x[L]).applyMatrix4(D,f),c.normal.toArray(y,C),y[C+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function VM(r){let e=new WeakMap;function t(c,f){return f===Cf?c.mapping=eo:f===Pf&&(c.mapping=to),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===Cf||f===Pf)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new Wy(h.height);return p.fromEquirectangularTexture(r,c),e.set(c,p),c.addEventListener("dispose",a),t(p.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const $s=4,km=[.125,.215,.35,.446,.526,.582],Qr=20,uf=new Zy,Bm=new Pt;let cf=null,ff=0,df=0,hf=!1;const Kr=(1+Math.sqrt(5))/2,Ws=1/Kr,zm=[new J(-Kr,Ws,0),new J(Kr,Ws,0),new J(-Ws,0,Kr),new J(Ws,0,Kr),new J(0,Kr,-Ws),new J(0,Kr,Ws),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class Hm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100){cf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cf,ff,df),this._renderer.xr.enabled=hf,e.scissorTest=!1,Fl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===eo||e.mapping===to?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:sa,format:ui,colorSpace:ro,depthBuffer:!1},a=Vm(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vm(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GM(l)),this._blurMaterial=WM(l,e,t)}return a}_compileMaterial(e){const t=new xi(this._lodPlanes[0],e);this._renderer.compile(t,uf)}_sceneToCubeUV(e,t,s,a){const f=new Qn(90,1,t,s),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,v=_.toneMapping;_.getClearColor(Bm),_.toneMapping=wr,_.autoClear=!1;const S=new Td({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),E=new xi(new uo,S);let T=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,T=!0):(S.color.copy(Bm),T=!0);for(let g=0;g<6;g++){const D=g%3;D===0?(f.up.set(0,h[g],0),f.lookAt(p[g],0,0)):D===1?(f.up.set(0,0,h[g]),f.lookAt(0,p[g],0)):(f.up.set(0,h[g],0),f.lookAt(0,0,p[g]));const L=this._cubeSize;Fl(a,D*L,g>2?L:0,L,L),_.setRenderTarget(a),T&&_.render(E,f),_.render(e,f)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=v,_.autoClear=x,e.background=y}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===eo||e.mapping===to;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gm());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new xi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Fl(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(c,uf)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=zm[(a-l-1)%zm.length];this._blur(e,l-1,l,c,f)}t.autoClear=s}_blur(e,t,s,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,a,"latitudinal",l),this._halfBlur(c,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new xi(this._lodPlanes[a],p),v=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Qr-1),T=l/E,y=isFinite(l)?1+Math.floor(_*T):Qr;y>Qr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Qr}`);const g=[];let D=0;for(let N=0;N<Qr;++N){const X=N/T,P=Math.exp(-X*X/2);g.push(P),N===0?D+=P:N<y&&(D+=2*P)}for(let N=0;N<g.length;N++)g[N]=g[N]/D;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=g,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-s;const C=this._sizeLods[a],V=3*C*(a>L-$s?a-L+$s:0),k=4*(this._cubeSize-C);Fl(t,V,k,3*C,2*C),h.setRenderTarget(t),h.render(x,uf)}}function GM(r){const e=[],t=[],s=[];let a=r;const l=r-$s+1+km.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let h=1/f;c>r-$s?h=km[c-r+$s-1]:c===0&&(h=0),s.push(h);const p=1/(f-2),_=-p,x=1+p,v=[_,_,x,_,x,x,_,_,x,x,_,x],S=6,E=6,T=3,y=2,g=1,D=new Float32Array(T*E*S),L=new Float32Array(y*E*S),C=new Float32Array(g*E*S);for(let k=0;k<S;k++){const N=k%3*2/3-1,X=k>2?0:-1,P=[N,X,0,N+2/3,X,0,N+2/3,X+1,0,N,X,0,N+2/3,X+1,0,N,X+1,0];D.set(P,T*E*k),L.set(v,y*E*k);const R=[k,k,k,k,k,k];C.set(R,g*E*k)}const V=new os;V.setAttribute("position",new yi(D,T)),V.setAttribute("uv",new yi(L,y)),V.setAttribute("faceIndex",new yi(C,g)),e.push(V),a>$s&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Vm(r,e,t){const s=new is(r,e,t);return s.texture.mapping=Jl,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Fl(r,e,t,s,a){r.viewport.set(e,t,s,a),r.scissor.set(e,t,s,a)}function WM(r,e,t){const s=new Float32Array(Qr),a=new J(0,1,0);return new Cr({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Gm(){return new Cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Wm(){return new Cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function wd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function XM(r){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const h=f.mapping,p=h===Cf||h===Pf,_=h===eo||h===to;if(p||_){let x=e.get(f);const v=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return t===null&&(t=new Hm(r)),x=p?t.fromEquirectangular(f,x):t.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const S=f.image;return p&&S&&S.height>0||_&&S&&a(S)?(t===null&&(t=new Hm(r)),x=p?t.fromEquirectangular(f):t.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",l),x.texture):null}}}return f}function a(f){let h=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function YM(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&Ys("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function jM(r,e,t,s){const a={},l=new WeakMap;function c(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete a[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(x,v){return a[v.id]===!0||(v.addEventListener("dispose",c),a[v.id]=!0,t.memory.geometries++),v}function h(x){const v=x.attributes;for(const S in v)e.update(v[S],r.ARRAY_BUFFER)}function p(x){const v=[],S=x.index,E=x.attributes.position;let T=0;if(S!==null){const D=S.array;T=S.version;for(let L=0,C=D.length;L<C;L+=3){const V=D[L+0],k=D[L+1],N=D[L+2];v.push(V,k,k,N,N,V)}}else if(E!==void 0){const D=E.array;T=E.version;for(let L=0,C=D.length/3-1;L<C;L+=3){const V=L+0,k=L+1,N=L+2;v.push(V,k,k,N,N,V)}}else return;const y=new(Vg(v)?jg:Yg)(v,1);y.version=T;const g=l.get(x);g&&e.remove(g),l.set(x,y)}function _(x){const v=l.get(x);if(v){const S=x.index;S!==null&&v.version<S.version&&p(x)}else p(x);return l.get(x)}return{get:f,update:h,getWireframeAttribute:_}}function $M(r,e,t){let s;function a(v){s=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function h(v,S){r.drawElements(s,S,l,v*c),t.update(S,s,1)}function p(v,S,E){E!==0&&(r.drawElementsInstanced(s,S,l,v*c,E),t.update(S,s,E))}function _(v,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,v,0,E);let y=0;for(let g=0;g<E;g++)y+=S[g];t.update(y,s,1)}function x(v,S,E,T){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<v.length;g++)p(v[g]/c,S[g],T[g]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,v,0,T,0,E);let g=0;for(let D=0;D<E;D++)g+=S[D]*T[D];t.update(g,s,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function qM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function KM(r,e,t){const s=new WeakMap,a=new Yt;function l(c,f,h){const p=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=_!==void 0?_.length:0;let v=s.get(f);if(v===void 0||v.count!==x){let R=function(){X.dispose(),s.delete(f),f.removeEventListener("dispose",R)};var S=R;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let C=0;E===!0&&(C=1),T===!0&&(C=2),y===!0&&(C=3);let V=f.attributes.position.count*C,k=1;V>e.maxTextureSize&&(k=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const N=new Float32Array(V*k*4*x),X=new Wg(N,V,k,x);X.type=Hi,X.needsUpdate=!0;const P=C*4;for(let B=0;B<x;B++){const oe=g[B],te=D[B],ce=L[B],pe=V*k*4*B;for(let se=0;se<oe.count;se++){const le=se*P;E===!0&&(a.fromBufferAttribute(oe,se),N[pe+le+0]=a.x,N[pe+le+1]=a.y,N[pe+le+2]=a.z,N[pe+le+3]=0),T===!0&&(a.fromBufferAttribute(te,se),N[pe+le+4]=a.x,N[pe+le+5]=a.y,N[pe+le+6]=a.z,N[pe+le+7]=0),y===!0&&(a.fromBufferAttribute(ce,se),N[pe+le+8]=a.x,N[pe+le+9]=a.y,N[pe+le+10]=a.z,N[pe+le+11]=ce.itemSize===4?a.w:1)}}v={count:x,texture:X,size:new ut(V,k)},s.set(f,v),f.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const T=f.morphTargetsRelative?1:1-E;h.getUniforms().setValue(r,"morphTargetBaseInfluence",T),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:l}}function ZM(r,e,t,s){let a=new WeakMap;function l(h){const p=s.render.frame,_=h.geometry,x=e.get(h,_);if(a.get(x)!==p&&(e.update(x),a.set(x,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==p&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const v=h.skeleton;a.get(v)!==p&&(v.update(),a.set(v,p))}return x}function c(){a=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const e_=new Rn,Xm=new Qg(1,1),t_=new Wg,n_=new Cy,i_=new Kg,Ym=[],jm=[],$m=new Float32Array(16),qm=new Float32Array(9),Km=new Float32Array(4);function co(r,e,t){const s=r[0];if(s<=0||s>0)return r;const a=e*t;let l=Ym[a];if(l===void 0&&(l=new Float32Array(a),Ym[a]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function en(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function tn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function nu(r,e){let t=jm[e];t===void 0&&(t=new Int32Array(e),jm[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function QM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function JM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2fv(this.addr,e),tn(t,e)}}function eT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;r.uniform3fv(this.addr,e),tn(t,e)}}function tT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4fv(this.addr,e),tn(t,e)}}function nT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(en(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,s))return;Km.set(s),r.uniformMatrix2fv(this.addr,!1,Km),tn(t,s)}}function iT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(en(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,s))return;qm.set(s),r.uniformMatrix3fv(this.addr,!1,qm),tn(t,s)}}function rT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(en(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,s))return;$m.set(s),r.uniformMatrix4fv(this.addr,!1,$m),tn(t,s)}}function sT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function oT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2iv(this.addr,e),tn(t,e)}}function aT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3iv(this.addr,e),tn(t,e)}}function lT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4iv(this.addr,e),tn(t,e)}}function uT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function cT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2uiv(this.addr,e),tn(t,e)}}function fT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3uiv(this.addr,e),tn(t,e)}}function dT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4uiv(this.addr,e),tn(t,e)}}function hT(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(Xm.compareFunction=Hg,l=Xm):l=e_,t.setTexture2D(e||l,a)}function pT(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||n_,a)}function mT(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||i_,a)}function gT(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||t_,a)}function _T(r){switch(r){case 5126:return QM;case 35664:return JM;case 35665:return eT;case 35666:return tT;case 35674:return nT;case 35675:return iT;case 35676:return rT;case 5124:case 35670:return sT;case 35667:case 35671:return oT;case 35668:case 35672:return aT;case 35669:case 35673:return lT;case 5125:return uT;case 36294:return cT;case 36295:return fT;case 36296:return dT;case 35678:case 36198:case 36298:case 36306:case 35682:return hT;case 35679:case 36299:case 36307:return pT;case 35680:case 36300:case 36308:case 36293:return mT;case 36289:case 36303:case 36311:case 36292:return gT}}function vT(r,e){r.uniform1fv(this.addr,e)}function xT(r,e){const t=co(e,this.size,2);r.uniform2fv(this.addr,t)}function yT(r,e){const t=co(e,this.size,3);r.uniform3fv(this.addr,t)}function ST(r,e){const t=co(e,this.size,4);r.uniform4fv(this.addr,t)}function ET(r,e){const t=co(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function MT(r,e){const t=co(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function TT(r,e){const t=co(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function wT(r,e){r.uniform1iv(this.addr,e)}function AT(r,e){r.uniform2iv(this.addr,e)}function RT(r,e){r.uniform3iv(this.addr,e)}function CT(r,e){r.uniform4iv(this.addr,e)}function PT(r,e){r.uniform1uiv(this.addr,e)}function bT(r,e){r.uniform2uiv(this.addr,e)}function DT(r,e){r.uniform3uiv(this.addr,e)}function LT(r,e){r.uniform4uiv(this.addr,e)}function UT(r,e,t){const s=this.cache,a=e.length,l=nu(t,a);en(s,l)||(r.uniform1iv(this.addr,l),tn(s,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||e_,l[c])}function IT(r,e,t){const s=this.cache,a=e.length,l=nu(t,a);en(s,l)||(r.uniform1iv(this.addr,l),tn(s,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||n_,l[c])}function NT(r,e,t){const s=this.cache,a=e.length,l=nu(t,a);en(s,l)||(r.uniform1iv(this.addr,l),tn(s,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||i_,l[c])}function FT(r,e,t){const s=this.cache,a=e.length,l=nu(t,a);en(s,l)||(r.uniform1iv(this.addr,l),tn(s,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||t_,l[c])}function OT(r){switch(r){case 5126:return vT;case 35664:return xT;case 35665:return yT;case 35666:return ST;case 35674:return ET;case 35675:return MT;case 35676:return TT;case 5124:case 35670:return wT;case 35667:case 35671:return AT;case 35668:case 35672:return RT;case 35669:case 35673:return CT;case 5125:return PT;case 36294:return bT;case 36295:return DT;case 36296:return LT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return IT;case 35680:case 36300:case 36308:case 36293:return NT;case 36289:case 36303:case 36311:case 36292:return FT}}class kT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=_T(t.type)}}class BT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=OT(t.type)}}class zT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],s)}}}const pf=/(\w+)(\])?(\[|\.)?/g;function Zm(r,e){r.seq.push(e),r.map[e.id]=e}function HT(r,e,t){const s=r.name,a=s.length;for(pf.lastIndex=0;;){const l=pf.exec(s),c=pf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===a){Zm(t,p===void 0?new kT(f,r,e):new BT(f,r,e));break}else{let x=t.map[f];x===void 0&&(x=new zT(f),Zm(t,x)),t=x}}}class Yl{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);HT(l,c,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&s.push(c)}return s}}function Qm(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const VT=37297;let GT=0;function WT(r,e){const t=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}const Jm=new ot;function XT(r){Mt._getMatrix(Jm,Mt.workingColorSpace,r);const e=`mat3( ${Jm.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(r)){case $l:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function eg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+WT(r.getShaderSource(e),c)}else return a}function YT(r,e){const t=XT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function jT(r,e){let t;switch(e){case Ox:t="Linear";break;case kx:t="Reinhard";break;case Bx:t="Cineon";break;case zx:t="ACESFilmic";break;case Vx:t="AgX";break;case Gx:t="Neutral";break;case Hx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ol=new J;function $T(){Mt.getLuminanceCoefficients(Ol);const r=Ol.x.toFixed(4),e=Ol.y.toFixed(4),t=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function KT(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function ZT(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function Ko(r){return r!==""}function tg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ng(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QT=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(r){return r.replace(QT,ew)}const JT=new Map;function ew(r,e){let t=at[e];if(t===void 0){const s=JT.get(e);if(s!==void 0)t=at[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return sd(t)}const tw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ig(r){return r.replace(tw,nw)}function nw(r,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function rg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Cg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===gx?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function rw(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case eo:case to:e="ENVMAP_TYPE_CUBE";break;case Jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case to:e="ENVMAP_MODE_REFRACTION";break}return e}function ow(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Pg:e="ENVMAP_BLENDING_MULTIPLY";break;case Nx:e="ENVMAP_BLENDING_MIX";break;case Fx:e="ENVMAP_BLENDING_ADD";break}return e}function aw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function lw(r,e,t,s){const a=r.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=iw(t),p=rw(t),_=sw(t),x=ow(t),v=aw(t),S=qT(t),E=KT(l),T=a.createProgram();let y,g,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ko).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ko).join(`
`),g.length>0&&(g+=`
`)):(y=[rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),g=[rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wr?"#define TONE_MAPPING":"",t.toneMapping!==wr?at.tonemapping_pars_fragment:"",t.toneMapping!==wr?jT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,YT("linearToOutputTexel",t.outputColorSpace),$T(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ko).join(`
`)),c=sd(c),c=tg(c,t),c=ng(c,t),f=sd(f),f=tg(f,t),f=ng(f,t),c=ig(c),f=ig(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===mm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=D+y+c,C=D+g+f,V=Qm(a,a.VERTEX_SHADER,L),k=Qm(a,a.FRAGMENT_SHADER,C);a.attachShader(T,V),a.attachShader(T,k),t.index0AttributeName!==void 0?a.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function N(B){if(r.debug.checkShaderErrors){const oe=a.getProgramInfoLog(T).trim(),te=a.getShaderInfoLog(V).trim(),ce=a.getShaderInfoLog(k).trim();let pe=!0,se=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(pe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,T,V,k);else{const le=eg(a,V,"vertex"),z=eg(a,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+oe+`
`+le+`
`+z)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(te===""||ce==="")&&(se=!1);se&&(B.diagnostics={runnable:pe,programLog:oe,vertexShader:{log:te,prefix:y},fragmentShader:{log:ce,prefix:g}})}a.deleteShader(V),a.deleteShader(k),X=new Yl(a,T),P=ZT(a,T)}let X;this.getUniforms=function(){return X===void 0&&N(this),X};let P;this.getAttributes=function(){return P===void 0&&N(this),P};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(T,VT)),R},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=GT++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=V,this.fragmentShader=k,this}let uw=0;class cw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new fw(e),t.set(e,s)),s}}class fw{constructor(e){this.id=uw++,this.code=e,this.usedTimes=0}}function dw(r,e,t,s,a,l,c){const f=new Md,h=new cw,p=new Set,_=[],x=a.logarithmicDepthBuffer,v=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return p.add(P),P===0?"uv":`uv${P}`}function y(P,R,B,oe,te){const ce=oe.fog,pe=te.geometry,se=P.isMeshStandardMaterial?oe.environment:null,le=(P.isMeshStandardMaterial?t:e).get(P.envMap||se),z=le&&le.mapping===Jl?le.image.height:null,ae=E[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const re=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,I=re!==void 0?re.length:0;let ne=0;pe.morphAttributes.position!==void 0&&(ne=1),pe.morphAttributes.normal!==void 0&&(ne=2),pe.morphAttributes.color!==void 0&&(ne=3);let Ne,Z,he,Ee;if(ae){const xt=_i[ae];Ne=xt.vertexShader,Z=xt.fragmentShader}else Ne=P.vertexShader,Z=P.fragmentShader,h.update(P),he=h.getVertexShaderID(P),Ee=h.getFragmentShaderID(P);const xe=r.getRenderTarget(),we=r.state.buffers.depth.getReversed(),Ie=te.isInstancedMesh===!0,Qe=te.isBatchedMesh===!0,At=!!P.map,mt=!!P.matcap,Dt=!!le,O=!!P.aoMap,yn=!!P.lightMap,pt=!!P.bumpMap,ct=!!P.normalMap,je=!!P.displacementMap,wt=!!P.emissiveMap,We=!!P.metalnessMap,b=!!P.roughnessMap,w=P.anisotropy>0,K=P.clearcoat>0,me=P.dispersion>0,_e=P.iridescence>0,ue=P.sheen>0,Xe=P.transmission>0,Ae=w&&!!P.anisotropyMap,Fe=K&&!!P.clearcoatMap,lt=K&&!!P.clearcoatNormalMap,Me=K&&!!P.clearcoatRoughnessMap,ke=_e&&!!P.iridescenceMap,qe=_e&&!!P.iridescenceThicknessMap,et=ue&&!!P.sheenColorMap,Be=ue&&!!P.sheenRoughnessMap,ft=!!P.specularMap,it=!!P.specularColorMap,Tt=!!P.specularIntensityMap,G=Xe&&!!P.transmissionMap,Re=Xe&&!!P.thicknessMap,ie=!!P.gradientMap,fe=!!P.alphaMap,De=P.alphaTest>0,be=!!P.alphaHash,rt=!!P.extensions;let Ut=wr;P.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Ut=r.toneMapping);const Kt={shaderID:ae,shaderType:P.type,shaderName:P.name,vertexShader:Ne,fragmentShader:Z,defines:P.defines,customVertexShaderID:he,customFragmentShaderID:Ee,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Qe,batchingColor:Qe&&te._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&te.instanceColor!==null,instancingMorph:Ie&&te.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:xe===null?r.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:ro,alphaToCoverage:!!P.alphaToCoverage,map:At,matcap:mt,envMap:Dt,envMapMode:Dt&&le.mapping,envMapCubeUVHeight:z,aoMap:O,lightMap:yn,bumpMap:pt,normalMap:ct,displacementMap:v&&je,emissiveMap:wt,normalMapObjectSpace:ct&&P.normalMapType===$x,normalMapTangentSpace:ct&&P.normalMapType===jx,metalnessMap:We,roughnessMap:b,anisotropy:w,anisotropyMap:Ae,clearcoat:K,clearcoatMap:Fe,clearcoatNormalMap:lt,clearcoatRoughnessMap:Me,dispersion:me,iridescence:_e,iridescenceMap:ke,iridescenceThicknessMap:qe,sheen:ue,sheenColorMap:et,sheenRoughnessMap:Be,specularMap:ft,specularColorMap:it,specularIntensityMap:Tt,transmission:Xe,transmissionMap:G,thicknessMap:Re,gradientMap:ie,opaque:P.transparent===!1&&P.blending===Ks&&P.alphaToCoverage===!1,alphaMap:fe,alphaTest:De,alphaHash:be,combine:P.combine,mapUv:At&&T(P.map.channel),aoMapUv:O&&T(P.aoMap.channel),lightMapUv:yn&&T(P.lightMap.channel),bumpMapUv:pt&&T(P.bumpMap.channel),normalMapUv:ct&&T(P.normalMap.channel),displacementMapUv:je&&T(P.displacementMap.channel),emissiveMapUv:wt&&T(P.emissiveMap.channel),metalnessMapUv:We&&T(P.metalnessMap.channel),roughnessMapUv:b&&T(P.roughnessMap.channel),anisotropyMapUv:Ae&&T(P.anisotropyMap.channel),clearcoatMapUv:Fe&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:lt&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:et&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:Be&&T(P.sheenRoughnessMap.channel),specularMapUv:ft&&T(P.specularMap.channel),specularColorMapUv:it&&T(P.specularColorMap.channel),specularIntensityMapUv:Tt&&T(P.specularIntensityMap.channel),transmissionMapUv:G&&T(P.transmissionMap.channel),thicknessMapUv:Re&&T(P.thicknessMap.channel),alphaMapUv:fe&&T(P.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(ct||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!pe.attributes.uv&&(At||fe),fog:!!ce,useFog:P.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:we,skinning:te.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ut,decodeVideoTexture:At&&P.map.isVideoTexture===!0&&Mt.getTransfer(P.map.colorSpace)===Rt,decodeVideoTextureEmissive:wt&&P.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(P.emissiveMap.colorSpace)===Rt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===zi,flipSided:P.side===Fn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:rt&&P.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&P.extensions.multiDraw===!0||Qe)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Kt.vertexUv1s=p.has(1),Kt.vertexUv2s=p.has(2),Kt.vertexUv3s=p.has(3),p.clear(),Kt}function g(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const B in P.defines)R.push(B),R.push(P.defines[B]);return P.isRawShaderMaterial===!1&&(D(R,P),L(R,P),R.push(r.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function D(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function L(P,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),P.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),P.push(f.mask)}function C(P){const R=E[P.type];let B;if(R){const oe=_i[R];B=zy.clone(oe.uniforms)}else B=P.uniforms;return B}function V(P,R){let B;for(let oe=0,te=_.length;oe<te;oe++){const ce=_[oe];if(ce.cacheKey===R){B=ce,++B.usedTimes;break}}return B===void 0&&(B=new lw(r,R,P,l),_.push(B)),B}function k(P){if(--P.usedTimes===0){const R=_.indexOf(P);_[R]=_[_.length-1],_.pop(),P.destroy()}}function N(P){h.remove(P)}function X(){h.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:C,acquireProgram:V,releaseProgram:k,releaseShaderCache:N,programs:_,dispose:X}}function hw(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function s(c){r.delete(c)}function a(c,f,h){r.get(c)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:l}}function pw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function sg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function og(){const r=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function c(x,v,S,E,T,y){let g=r[e];return g===void 0?(g={id:x.id,object:x,geometry:v,material:S,groupOrder:E,renderOrder:x.renderOrder,z:T,group:y},r[e]=g):(g.id=x.id,g.object=x,g.geometry=v,g.material=S,g.groupOrder=E,g.renderOrder=x.renderOrder,g.z=T,g.group=y),e++,g}function f(x,v,S,E,T,y){const g=c(x,v,S,E,T,y);S.transmission>0?s.push(g):S.transparent===!0?a.push(g):t.push(g)}function h(x,v,S,E,T,y){const g=c(x,v,S,E,T,y);S.transmission>0?s.unshift(g):S.transparent===!0?a.unshift(g):t.unshift(g)}function p(x,v){t.length>1&&t.sort(x||pw),s.length>1&&s.sort(v||sg),a.length>1&&a.sort(v||sg)}function _(){for(let x=e,v=r.length;x<v;x++){const S=r[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:f,unshift:h,finish:_,sort:p}}function mw(){let r=new WeakMap;function e(s,a){const l=r.get(s);let c;return l===void 0?(c=new og,r.set(s,[c])):a>=l.length?(c=new og,l.push(c)):c=l[a],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function gw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new Pt};break;case"SpotLight":t={position:new J,direction:new J,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":t={color:new Pt,position:new J,halfWidth:new J,halfHeight:new J};break}return r[e.id]=t,t}}}function _w(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let vw=0;function xw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function yw(r){const e=new gw,t=_w(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const a=new J,l=new jt,c=new jt;function f(p){let _=0,x=0,v=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let S=0,E=0,T=0,y=0,g=0,D=0,L=0,C=0,V=0,k=0,N=0;p.sort(xw);for(let P=0,R=p.length;P<R;P++){const B=p[P],oe=B.color,te=B.intensity,ce=B.distance,pe=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)_+=oe.r*te,x+=oe.g*te,v+=oe.b*te;else if(B.isLightProbe){for(let se=0;se<9;se++)s.probe[se].addScaledVector(B.sh.coefficients[se],te);N++}else if(B.isDirectionalLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const le=B.shadow,z=t.get(B);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,s.directionalShadow[S]=z,s.directionalShadowMap[S]=pe,s.directionalShadowMatrix[S]=B.shadow.matrix,D++}s.directional[S]=se,S++}else if(B.isSpotLight){const se=e.get(B);se.position.setFromMatrixPosition(B.matrixWorld),se.color.copy(oe).multiplyScalar(te),se.distance=ce,se.coneCos=Math.cos(B.angle),se.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),se.decay=B.decay,s.spot[T]=se;const le=B.shadow;if(B.map&&(s.spotLightMap[V]=B.map,V++,le.updateMatrices(B),B.castShadow&&k++),s.spotLightMatrix[T]=le.matrix,B.castShadow){const z=t.get(B);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,s.spotShadow[T]=z,s.spotShadowMap[T]=pe,C++}T++}else if(B.isRectAreaLight){const se=e.get(B);se.color.copy(oe).multiplyScalar(te),se.halfWidth.set(B.width*.5,0,0),se.halfHeight.set(0,B.height*.5,0),s.rectArea[y]=se,y++}else if(B.isPointLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),se.distance=B.distance,se.decay=B.decay,B.castShadow){const le=B.shadow,z=t.get(B);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,z.shadowCameraNear=le.camera.near,z.shadowCameraFar=le.camera.far,s.pointShadow[E]=z,s.pointShadowMap[E]=pe,s.pointShadowMatrix[E]=B.shadow.matrix,L++}s.point[E]=se,E++}else if(B.isHemisphereLight){const se=e.get(B);se.skyColor.copy(B.color).multiplyScalar(te),se.groundColor.copy(B.groundColor).multiplyScalar(te),s.hemi[g]=se,g++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=v;const X=s.hash;(X.directionalLength!==S||X.pointLength!==E||X.spotLength!==T||X.rectAreaLength!==y||X.hemiLength!==g||X.numDirectionalShadows!==D||X.numPointShadows!==L||X.numSpotShadows!==C||X.numSpotMaps!==V||X.numLightProbes!==N)&&(s.directional.length=S,s.spot.length=T,s.rectArea.length=y,s.point.length=E,s.hemi.length=g,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=C+V-k,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=N,X.directionalLength=S,X.pointLength=E,X.spotLength=T,X.rectAreaLength=y,X.hemiLength=g,X.numDirectionalShadows=D,X.numPointShadows=L,X.numSpotShadows=C,X.numSpotMaps=V,X.numLightProbes=N,s.version=vw++)}function h(p,_){let x=0,v=0,S=0,E=0,T=0;const y=_.matrixWorldInverse;for(let g=0,D=p.length;g<D;g++){const L=p[g];if(L.isDirectionalLight){const C=s.directional[x];C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),x++}else if(L.isSpotLight){const C=s.spot[S];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const C=s.rectArea[E];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),c.identity(),l.copy(L.matrixWorld),l.premultiply(y),c.extractRotation(l),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),E++}else if(L.isPointLight){const C=s.point[v];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),v++}else if(L.isHemisphereLight){const C=s.hemi[T];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(y),T++}}}return{setup:f,setupView:h,state:s}}function ag(r){const e=new yw(r),t=[],s=[];function a(_){p.camera=_,t.length=0,s.length=0}function l(_){t.push(_)}function c(_){s.push(_)}function f(){e.setup(t)}function h(_){e.setupView(t,_)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function Sw(r){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new ag(r),e.set(a,[f])):l>=c.length?(f=new ag(r),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const Ew=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tw(r,e,t){let s=new Zg;const a=new ut,l=new ut,c=new Yt,f=new qy({depthPacking:Yx}),h=new Ky,p={},_=t.maxTextureSize,x={[Rr]:Fn,[Fn]:Rr,[zi]:zi},v=new Cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Ew,fragmentShader:Mw}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new os;E.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new xi(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cg;let g=this.type;this.render=function(k,N,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;const P=r.getRenderTarget(),R=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),oe=r.state;oe.setBlending(Tr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const te=g!==Bi&&this.type===Bi,ce=g===Bi&&this.type!==Bi;for(let pe=0,se=k.length;pe<se;pe++){const le=k[pe],z=le.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const ae=z.getFrameExtents();if(a.multiply(ae),l.copy(z.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/ae.x),a.x=l.x*ae.x,z.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/ae.y),a.y=l.y*ae.y,z.mapSize.y=l.y)),z.map===null||te===!0||ce===!0){const I=this.type!==Bi?{minFilter:ci,magFilter:ci}:{};z.map!==null&&z.map.dispose(),z.map=new is(a.x,a.y,I),z.map.texture.name=le.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const re=z.getViewportCount();for(let I=0;I<re;I++){const ne=z.getViewport(I);c.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),oe.viewport(c),z.updateMatrices(le,I),s=z.getFrustum(),C(N,X,z.camera,le,this.type)}z.isPointLightShadow!==!0&&this.type===Bi&&D(z,X),z.needsUpdate=!1}g=this.type,y.needsUpdate=!1,r.setRenderTarget(P,R,B)};function D(k,N){const X=e.update(T);v.defines.VSM_SAMPLES!==k.blurSamples&&(v.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new is(a.x,a.y)),v.uniforms.shadow_pass.value=k.map.texture,v.uniforms.resolution.value=k.mapSize,v.uniforms.radius.value=k.radius,r.setRenderTarget(k.mapPass),r.clear(),r.renderBufferDirect(N,null,X,v,T,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,r.setRenderTarget(k.map),r.clear(),r.renderBufferDirect(N,null,X,S,T,null)}function L(k,N,X,P){let R=null;const B=X.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(B!==void 0)R=B;else if(R=X.isPointLight===!0?h:f,r.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const oe=R.uuid,te=N.uuid;let ce=p[oe];ce===void 0&&(ce={},p[oe]=ce);let pe=ce[te];pe===void 0&&(pe=R.clone(),ce[te]=pe,N.addEventListener("dispose",V)),R=pe}if(R.visible=N.visible,R.wireframe=N.wireframe,P===Bi?R.side=N.shadowSide!==null?N.shadowSide:N.side:R.side=N.shadowSide!==null?N.shadowSide:x[N.side],R.alphaMap=N.alphaMap,R.alphaTest=N.alphaTest,R.map=N.map,R.clipShadows=N.clipShadows,R.clippingPlanes=N.clippingPlanes,R.clipIntersection=N.clipIntersection,R.displacementMap=N.displacementMap,R.displacementScale=N.displacementScale,R.displacementBias=N.displacementBias,R.wireframeLinewidth=N.wireframeLinewidth,R.linewidth=N.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const oe=r.properties.get(R);oe.light=X}return R}function C(k,N,X,P,R){if(k.visible===!1)return;if(k.layers.test(N.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&R===Bi)&&(!k.frustumCulled||s.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,k.matrixWorld);const te=e.update(k),ce=k.material;if(Array.isArray(ce)){const pe=te.groups;for(let se=0,le=pe.length;se<le;se++){const z=pe[se],ae=ce[z.materialIndex];if(ae&&ae.visible){const re=L(k,ae,P,R);k.onBeforeShadow(r,k,N,X,te,re,z),r.renderBufferDirect(X,null,te,re,k,z),k.onAfterShadow(r,k,N,X,te,re,z)}}}else if(ce.visible){const pe=L(k,ce,P,R);k.onBeforeShadow(r,k,N,X,te,pe,null),r.renderBufferDirect(X,null,te,pe,k,null),k.onAfterShadow(r,k,N,X,te,pe,null)}}const oe=k.children;for(let te=0,ce=oe.length;te<ce;te++)C(oe[te],N,X,P,R)}function V(k){k.target.removeEventListener("dispose",V);for(const X in p){const P=p[X],R=k.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const ww={[Sf]:Ef,[Mf]:Af,[Tf]:Rf,[Js]:wf,[Ef]:Sf,[Af]:Mf,[Rf]:Tf,[wf]:Js};function Aw(r,e){function t(){let G=!1;const Re=new Yt;let ie=null;const fe=new Yt(0,0,0,0);return{setMask:function(De){ie!==De&&!G&&(r.colorMask(De,De,De,De),ie=De)},setLocked:function(De){G=De},setClear:function(De,be,rt,Ut,Kt){Kt===!0&&(De*=Ut,be*=Ut,rt*=Ut),Re.set(De,be,rt,Ut),fe.equals(Re)===!1&&(r.clearColor(De,be,rt,Ut),fe.copy(Re))},reset:function(){G=!1,ie=null,fe.set(-1,0,0,0)}}}function s(){let G=!1,Re=!1,ie=null,fe=null,De=null;return{setReversed:function(be){if(Re!==be){const rt=e.get("EXT_clip_control");Re?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Ut=De;De=null,this.setClear(Ut)}Re=be},getReversed:function(){return Re},setTest:function(be){be?xe(r.DEPTH_TEST):we(r.DEPTH_TEST)},setMask:function(be){ie!==be&&!G&&(r.depthMask(be),ie=be)},setFunc:function(be){if(Re&&(be=ww[be]),fe!==be){switch(be){case Sf:r.depthFunc(r.NEVER);break;case Ef:r.depthFunc(r.ALWAYS);break;case Mf:r.depthFunc(r.LESS);break;case Js:r.depthFunc(r.LEQUAL);break;case Tf:r.depthFunc(r.EQUAL);break;case wf:r.depthFunc(r.GEQUAL);break;case Af:r.depthFunc(r.GREATER);break;case Rf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}fe=be}},setLocked:function(be){G=be},setClear:function(be){De!==be&&(Re&&(be=1-be),r.clearDepth(be),De=be)},reset:function(){G=!1,ie=null,fe=null,De=null,Re=!1}}}function a(){let G=!1,Re=null,ie=null,fe=null,De=null,be=null,rt=null,Ut=null,Kt=null;return{setTest:function(xt){G||(xt?xe(r.STENCIL_TEST):we(r.STENCIL_TEST))},setMask:function(xt){Re!==xt&&!G&&(r.stencilMask(xt),Re=xt)},setFunc:function(xt,Cn,Sn){(ie!==xt||fe!==Cn||De!==Sn)&&(r.stencilFunc(xt,Cn,Sn),ie=xt,fe=Cn,De=Sn)},setOp:function(xt,Cn,Sn){(be!==xt||rt!==Cn||Ut!==Sn)&&(r.stencilOp(xt,Cn,Sn),be=xt,rt=Cn,Ut=Sn)},setLocked:function(xt){G=xt},setClear:function(xt){Kt!==xt&&(r.clearStencil(xt),Kt=xt)},reset:function(){G=!1,Re=null,ie=null,fe=null,De=null,be=null,rt=null,Ut=null,Kt=null}}}const l=new t,c=new s,f=new a,h=new WeakMap,p=new WeakMap;let _={},x={},v=new WeakMap,S=[],E=null,T=!1,y=null,g=null,D=null,L=null,C=null,V=null,k=null,N=new Pt(0,0,0),X=0,P=!1,R=null,B=null,oe=null,te=null,ce=null;const pe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,le=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(z)[1]),se=le>=1):z.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),se=le>=2);let ae=null,re={};const I=r.getParameter(r.SCISSOR_BOX),ne=r.getParameter(r.VIEWPORT),Ne=new Yt().fromArray(I),Z=new Yt().fromArray(ne);function he(G,Re,ie,fe){const De=new Uint8Array(4),be=r.createTexture();r.bindTexture(G,be),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let rt=0;rt<ie;rt++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,fe,0,r.RGBA,r.UNSIGNED_BYTE,De):r.texImage2D(Re+rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,De);return be}const Ee={};Ee[r.TEXTURE_2D]=he(r.TEXTURE_2D,r.TEXTURE_2D,1),Ee[r.TEXTURE_CUBE_MAP]=he(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[r.TEXTURE_2D_ARRAY]=he(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ee[r.TEXTURE_3D]=he(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),xe(r.DEPTH_TEST),c.setFunc(Js),pt(!1),ct(um),xe(r.CULL_FACE),O(Tr);function xe(G){_[G]!==!0&&(r.enable(G),_[G]=!0)}function we(G){_[G]!==!1&&(r.disable(G),_[G]=!1)}function Ie(G,Re){return x[G]!==Re?(r.bindFramebuffer(G,Re),x[G]=Re,G===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Re),G===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function Qe(G,Re){let ie=S,fe=!1;if(G){ie=v.get(Re),ie===void 0&&(ie=[],v.set(Re,ie));const De=G.textures;if(ie.length!==De.length||ie[0]!==r.COLOR_ATTACHMENT0){for(let be=0,rt=De.length;be<rt;be++)ie[be]=r.COLOR_ATTACHMENT0+be;ie.length=De.length,fe=!0}}else ie[0]!==r.BACK&&(ie[0]=r.BACK,fe=!0);fe&&r.drawBuffers(ie)}function At(G){return E!==G?(r.useProgram(G),E=G,!0):!1}const mt={[Zr]:r.FUNC_ADD,[vx]:r.FUNC_SUBTRACT,[xx]:r.FUNC_REVERSE_SUBTRACT};mt[yx]=r.MIN,mt[Sx]=r.MAX;const Dt={[Ex]:r.ZERO,[Mx]:r.ONE,[Tx]:r.SRC_COLOR,[xf]:r.SRC_ALPHA,[bx]:r.SRC_ALPHA_SATURATE,[Cx]:r.DST_COLOR,[Ax]:r.DST_ALPHA,[wx]:r.ONE_MINUS_SRC_COLOR,[yf]:r.ONE_MINUS_SRC_ALPHA,[Px]:r.ONE_MINUS_DST_COLOR,[Rx]:r.ONE_MINUS_DST_ALPHA,[Dx]:r.CONSTANT_COLOR,[Lx]:r.ONE_MINUS_CONSTANT_COLOR,[Ux]:r.CONSTANT_ALPHA,[Ix]:r.ONE_MINUS_CONSTANT_ALPHA};function O(G,Re,ie,fe,De,be,rt,Ut,Kt,xt){if(G===Tr){T===!0&&(we(r.BLEND),T=!1);return}if(T===!1&&(xe(r.BLEND),T=!0),G!==_x){if(G!==y||xt!==P){if((g!==Zr||C!==Zr)&&(r.blendEquation(r.FUNC_ADD),g=Zr,C=Zr),xt)switch(G){case Ks:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cm:r.blendFunc(r.ONE,r.ONE);break;case fm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case dm:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ks:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cm:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case fm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case dm:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}D=null,L=null,V=null,k=null,N.set(0,0,0),X=0,y=G,P=xt}return}De=De||Re,be=be||ie,rt=rt||fe,(Re!==g||De!==C)&&(r.blendEquationSeparate(mt[Re],mt[De]),g=Re,C=De),(ie!==D||fe!==L||be!==V||rt!==k)&&(r.blendFuncSeparate(Dt[ie],Dt[fe],Dt[be],Dt[rt]),D=ie,L=fe,V=be,k=rt),(Ut.equals(N)===!1||Kt!==X)&&(r.blendColor(Ut.r,Ut.g,Ut.b,Kt),N.copy(Ut),X=Kt),y=G,P=!1}function yn(G,Re){G.side===zi?we(r.CULL_FACE):xe(r.CULL_FACE);let ie=G.side===Fn;Re&&(ie=!ie),pt(ie),G.blending===Ks&&G.transparent===!1?O(Tr):O(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),l.setMask(G.colorWrite);const fe=G.stencilWrite;f.setTest(fe),fe&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),wt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?xe(r.SAMPLE_ALPHA_TO_COVERAGE):we(r.SAMPLE_ALPHA_TO_COVERAGE)}function pt(G){R!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),R=G)}function ct(G){G!==px?(xe(r.CULL_FACE),G!==B&&(G===um?r.cullFace(r.BACK):G===mx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):we(r.CULL_FACE),B=G}function je(G){G!==oe&&(se&&r.lineWidth(G),oe=G)}function wt(G,Re,ie){G?(xe(r.POLYGON_OFFSET_FILL),(te!==Re||ce!==ie)&&(r.polygonOffset(Re,ie),te=Re,ce=ie)):we(r.POLYGON_OFFSET_FILL)}function We(G){G?xe(r.SCISSOR_TEST):we(r.SCISSOR_TEST)}function b(G){G===void 0&&(G=r.TEXTURE0+pe-1),ae!==G&&(r.activeTexture(G),ae=G)}function w(G,Re,ie){ie===void 0&&(ae===null?ie=r.TEXTURE0+pe-1:ie=ae);let fe=re[ie];fe===void 0&&(fe={type:void 0,texture:void 0},re[ie]=fe),(fe.type!==G||fe.texture!==Re)&&(ae!==ie&&(r.activeTexture(ie),ae=ie),r.bindTexture(G,Re||Ee[G]),fe.type=G,fe.texture=Re)}function K(){const G=re[ae];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function me(){try{r.compressedTexImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{r.compressedTexImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{r.texSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xe(){try{r.texSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{r.texStorage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{r.texStorage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(){try{r.texImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(){try{r.texImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(G){Ne.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),Ne.copy(G))}function Be(G){Z.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),Z.copy(G))}function ft(G,Re){let ie=p.get(Re);ie===void 0&&(ie=new WeakMap,p.set(Re,ie));let fe=ie.get(G);fe===void 0&&(fe=r.getUniformBlockIndex(Re,G.name),ie.set(G,fe))}function it(G,Re){const fe=p.get(Re).get(G);h.get(Re)!==fe&&(r.uniformBlockBinding(Re,fe,G.__bindingPointIndex),h.set(Re,fe))}function Tt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},ae=null,re={},x={},v=new WeakMap,S=[],E=null,T=!1,y=null,g=null,D=null,L=null,C=null,V=null,k=null,N=new Pt(0,0,0),X=0,P=!1,R=null,B=null,oe=null,te=null,ce=null,Ne.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:xe,disable:we,bindFramebuffer:Ie,drawBuffers:Qe,useProgram:At,setBlending:O,setMaterial:yn,setFlipSided:pt,setCullFace:ct,setLineWidth:je,setPolygonOffset:wt,setScissorTest:We,activeTexture:b,bindTexture:w,unbindTexture:K,compressedTexImage2D:me,compressedTexImage3D:_e,texImage2D:ke,texImage3D:qe,updateUBOMapping:ft,uniformBlockBinding:it,texStorage2D:lt,texStorage3D:Me,texSubImage2D:ue,texSubImage3D:Xe,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Fe,scissor:et,viewport:Be,reset:Tt}}function Rw(r,e,t,s,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ut,_=new WeakMap;let x;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(b,w){return S?new OffscreenCanvas(b,w):Kl("canvas")}function T(b,w,K){let me=1;const _e=We(b);if((_e.width>K||_e.height>K)&&(me=K/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ue=Math.floor(me*_e.width),Xe=Math.floor(me*_e.height);x===void 0&&(x=E(ue,Xe));const Ae=w?E(ue,Xe):x;return Ae.width=ue,Ae.height=Xe,Ae.getContext("2d").drawImage(b,0,0,ue,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+ue+"x"+Xe+")."),Ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),b;return b}function y(b){return b.generateMipmaps}function g(b){r.generateMipmap(b)}function D(b){return b.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?r.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(b,w,K,me,_e=!1){if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ue=w;if(w===r.RED&&(K===r.FLOAT&&(ue=r.R32F),K===r.HALF_FLOAT&&(ue=r.R16F),K===r.UNSIGNED_BYTE&&(ue=r.R8)),w===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(ue=r.R8UI),K===r.UNSIGNED_SHORT&&(ue=r.R16UI),K===r.UNSIGNED_INT&&(ue=r.R32UI),K===r.BYTE&&(ue=r.R8I),K===r.SHORT&&(ue=r.R16I),K===r.INT&&(ue=r.R32I)),w===r.RG&&(K===r.FLOAT&&(ue=r.RG32F),K===r.HALF_FLOAT&&(ue=r.RG16F),K===r.UNSIGNED_BYTE&&(ue=r.RG8)),w===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(ue=r.RG8UI),K===r.UNSIGNED_SHORT&&(ue=r.RG16UI),K===r.UNSIGNED_INT&&(ue=r.RG32UI),K===r.BYTE&&(ue=r.RG8I),K===r.SHORT&&(ue=r.RG16I),K===r.INT&&(ue=r.RG32I)),w===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(ue=r.RGB8UI),K===r.UNSIGNED_SHORT&&(ue=r.RGB16UI),K===r.UNSIGNED_INT&&(ue=r.RGB32UI),K===r.BYTE&&(ue=r.RGB8I),K===r.SHORT&&(ue=r.RGB16I),K===r.INT&&(ue=r.RGB32I)),w===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(ue=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(ue=r.RGBA16UI),K===r.UNSIGNED_INT&&(ue=r.RGBA32UI),K===r.BYTE&&(ue=r.RGBA8I),K===r.SHORT&&(ue=r.RGBA16I),K===r.INT&&(ue=r.RGBA32I)),w===r.RGB&&K===r.UNSIGNED_INT_5_9_9_9_REV&&(ue=r.RGB9_E5),w===r.RGBA){const Xe=_e?$l:Mt.getTransfer(me);K===r.FLOAT&&(ue=r.RGBA32F),K===r.HALF_FLOAT&&(ue=r.RGBA16F),K===r.UNSIGNED_BYTE&&(ue=Xe===Rt?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(ue=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(ue=r.RGB5_A1)}return(ue===r.R16F||ue===r.R32F||ue===r.RG16F||ue===r.RG32F||ue===r.RGBA16F||ue===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function C(b,w){let K;return b?w===null||w===ns||w===no?K=r.DEPTH24_STENCIL8:w===Hi?K=r.DEPTH32F_STENCIL8:w===ea&&(K=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ns||w===no?K=r.DEPTH_COMPONENT24:w===Hi?K=r.DEPTH_COMPONENT32F:w===ea&&(K=r.DEPTH_COMPONENT16),K}function V(b,w){return y(b)===!0||b.isFramebufferTexture&&b.minFilter!==ci&&b.minFilter!==vi?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function k(b){const w=b.target;w.removeEventListener("dispose",k),X(w),w.isVideoTexture&&_.delete(w)}function N(b){const w=b.target;w.removeEventListener("dispose",N),R(w)}function X(b){const w=s.get(b);if(w.__webglInit===void 0)return;const K=b.source,me=v.get(K);if(me){const _e=me[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&P(b),Object.keys(me).length===0&&v.delete(K)}s.remove(b)}function P(b){const w=s.get(b);r.deleteTexture(w.__webglTexture);const K=b.source,me=v.get(K);delete me[w.__cacheKey],c.memory.textures--}function R(b){const w=s.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),s.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let _e=0;_e<w.__webglFramebuffer[me].length;_e++)r.deleteFramebuffer(w.__webglFramebuffer[me][_e]);else r.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)r.deleteFramebuffer(w.__webglFramebuffer[me]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const K=b.textures;for(let me=0,_e=K.length;me<_e;me++){const ue=s.get(K[me]);ue.__webglTexture&&(r.deleteTexture(ue.__webglTexture),c.memory.textures--),s.remove(K[me])}s.remove(b)}let B=0;function oe(){B=0}function te(){const b=B;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),B+=1,b}function ce(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.colorSpace),w.join()}function pe(b,w){const K=s.get(b);if(b.isVideoTexture&&je(b),b.isRenderTargetTexture===!1&&b.version>0&&K.__version!==b.version){const me=b.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(K,b,w);return}}t.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+w)}function se(b,w){const K=s.get(b);if(b.version>0&&K.__version!==b.version){Z(K,b,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+w)}function le(b,w){const K=s.get(b);if(b.version>0&&K.__version!==b.version){Z(K,b,w);return}t.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+w)}function z(b,w){const K=s.get(b);if(b.version>0&&K.__version!==b.version){he(K,b,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+w)}const ae={[bf]:r.REPEAT,[Jr]:r.CLAMP_TO_EDGE,[Df]:r.MIRRORED_REPEAT},re={[ci]:r.NEAREST,[Wx]:r.NEAREST_MIPMAP_NEAREST,[gl]:r.NEAREST_MIPMAP_LINEAR,[vi]:r.LINEAR,[Hc]:r.LINEAR_MIPMAP_NEAREST,[es]:r.LINEAR_MIPMAP_LINEAR},I={[qx]:r.NEVER,[ty]:r.ALWAYS,[Kx]:r.LESS,[Hg]:r.LEQUAL,[Zx]:r.EQUAL,[ey]:r.GEQUAL,[Qx]:r.GREATER,[Jx]:r.NOTEQUAL};function ne(b,w){if(w.type===Hi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===vi||w.magFilter===Hc||w.magFilter===gl||w.magFilter===es||w.minFilter===vi||w.minFilter===Hc||w.minFilter===gl||w.minFilter===es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(b,r.TEXTURE_WRAP_S,ae[w.wrapS]),r.texParameteri(b,r.TEXTURE_WRAP_T,ae[w.wrapT]),(b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY)&&r.texParameteri(b,r.TEXTURE_WRAP_R,ae[w.wrapR]),r.texParameteri(b,r.TEXTURE_MAG_FILTER,re[w.magFilter]),r.texParameteri(b,r.TEXTURE_MIN_FILTER,re[w.minFilter]),w.compareFunction&&(r.texParameteri(b,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(b,r.TEXTURE_COMPARE_FUNC,I[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ci||w.minFilter!==gl&&w.minFilter!==es||w.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(b,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function Ne(b,w){let K=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",k));const me=w.source;let _e=v.get(me);_e===void 0&&(_e={},v.set(me,_e));const ue=ce(w);if(ue!==b.__cacheKey){_e[ue]===void 0&&(_e[ue]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,K=!0),_e[ue].usedTimes++;const Xe=_e[b.__cacheKey];Xe!==void 0&&(_e[b.__cacheKey].usedTimes--,Xe.usedTimes===0&&P(w)),b.__cacheKey=ue,b.__webglTexture=_e[ue].texture}return K}function Z(b,w,K){let me=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=r.TEXTURE_3D);const _e=Ne(b,w),ue=w.source;t.bindTexture(me,b.__webglTexture,r.TEXTURE0+K);const Xe=s.get(ue);if(ue.version!==Xe.__version||_e===!0){t.activeTexture(r.TEXTURE0+K);const Ae=Mt.getPrimaries(Mt.workingColorSpace),Fe=w.colorSpace===Mr?null:Mt.getPrimaries(w.colorSpace),lt=w.colorSpace===Mr||Ae===Fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Me=T(w.image,!1,a.maxTextureSize);Me=wt(w,Me);const ke=l.convert(w.format,w.colorSpace),qe=l.convert(w.type);let et=L(w.internalFormat,ke,qe,w.colorSpace,w.isVideoTexture);ne(me,w);let Be;const ft=w.mipmaps,it=w.isVideoTexture!==!0,Tt=Xe.__version===void 0||_e===!0,G=ue.dataReady,Re=V(w,Me);if(w.isDepthTexture)et=C(w.format===io,w.type),Tt&&(it?t.texStorage2D(r.TEXTURE_2D,1,et,Me.width,Me.height):t.texImage2D(r.TEXTURE_2D,0,et,Me.width,Me.height,0,ke,qe,null));else if(w.isDataTexture)if(ft.length>0){it&&Tt&&t.texStorage2D(r.TEXTURE_2D,Re,et,ft[0].width,ft[0].height);for(let ie=0,fe=ft.length;ie<fe;ie++)Be=ft[ie],it?G&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,Be.width,Be.height,ke,qe,Be.data):t.texImage2D(r.TEXTURE_2D,ie,et,Be.width,Be.height,0,ke,qe,Be.data);w.generateMipmaps=!1}else it?(Tt&&t.texStorage2D(r.TEXTURE_2D,Re,et,Me.width,Me.height),G&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me.width,Me.height,ke,qe,Me.data)):t.texImage2D(r.TEXTURE_2D,0,et,Me.width,Me.height,0,ke,qe,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){it&&Tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,et,ft[0].width,ft[0].height,Me.depth);for(let ie=0,fe=ft.length;ie<fe;ie++)if(Be=ft[ie],w.format!==ui)if(ke!==null)if(it){if(G)if(w.layerUpdates.size>0){const De=Om(Be.width,Be.height,w.format,w.type);for(const be of w.layerUpdates){const rt=Be.data.subarray(be*De/Be.data.BYTES_PER_ELEMENT,(be+1)*De/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,be,Be.width,Be.height,1,ke,rt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,Be.width,Be.height,Me.depth,ke,Be.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ie,et,Be.width,Be.height,Me.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?G&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,Be.width,Be.height,Me.depth,ke,qe,Be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ie,et,Be.width,Be.height,Me.depth,0,ke,qe,Be.data)}else{it&&Tt&&t.texStorage2D(r.TEXTURE_2D,Re,et,ft[0].width,ft[0].height);for(let ie=0,fe=ft.length;ie<fe;ie++)Be=ft[ie],w.format!==ui?ke!==null?it?G&&t.compressedTexSubImage2D(r.TEXTURE_2D,ie,0,0,Be.width,Be.height,ke,Be.data):t.compressedTexImage2D(r.TEXTURE_2D,ie,et,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?G&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,Be.width,Be.height,ke,qe,Be.data):t.texImage2D(r.TEXTURE_2D,ie,et,Be.width,Be.height,0,ke,qe,Be.data)}else if(w.isDataArrayTexture)if(it){if(Tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,et,Me.width,Me.height,Me.depth),G)if(w.layerUpdates.size>0){const ie=Om(Me.width,Me.height,w.format,w.type);for(const fe of w.layerUpdates){const De=Me.data.subarray(fe*ie/Me.data.BYTES_PER_ELEMENT,(fe+1)*ie/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,fe,Me.width,Me.height,1,ke,qe,De)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,ke,qe,Me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,et,Me.width,Me.height,Me.depth,0,ke,qe,Me.data);else if(w.isData3DTexture)it?(Tt&&t.texStorage3D(r.TEXTURE_3D,Re,et,Me.width,Me.height,Me.depth),G&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,ke,qe,Me.data)):t.texImage3D(r.TEXTURE_3D,0,et,Me.width,Me.height,Me.depth,0,ke,qe,Me.data);else if(w.isFramebufferTexture){if(Tt)if(it)t.texStorage2D(r.TEXTURE_2D,Re,et,Me.width,Me.height);else{let ie=Me.width,fe=Me.height;for(let De=0;De<Re;De++)t.texImage2D(r.TEXTURE_2D,De,et,ie,fe,0,ke,qe,null),ie>>=1,fe>>=1}}else if(ft.length>0){if(it&&Tt){const ie=We(ft[0]);t.texStorage2D(r.TEXTURE_2D,Re,et,ie.width,ie.height)}for(let ie=0,fe=ft.length;ie<fe;ie++)Be=ft[ie],it?G&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,ke,qe,Be):t.texImage2D(r.TEXTURE_2D,ie,et,ke,qe,Be);w.generateMipmaps=!1}else if(it){if(Tt){const ie=We(Me);t.texStorage2D(r.TEXTURE_2D,Re,et,ie.width,ie.height)}G&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ke,qe,Me)}else t.texImage2D(r.TEXTURE_2D,0,et,ke,qe,Me);y(w)&&g(me),Xe.__version=ue.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function he(b,w,K){if(w.image.length!==6)return;const me=Ne(b,w),_e=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,b.__webglTexture,r.TEXTURE0+K);const ue=s.get(_e);if(_e.version!==ue.__version||me===!0){t.activeTexture(r.TEXTURE0+K);const Xe=Mt.getPrimaries(Mt.workingColorSpace),Ae=w.colorSpace===Mr?null:Mt.getPrimaries(w.colorSpace),Fe=w.colorSpace===Mr||Xe===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const lt=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,ke=[];for(let fe=0;fe<6;fe++)!lt&&!Me?ke[fe]=T(w.image[fe],!0,a.maxCubemapSize):ke[fe]=Me?w.image[fe].image:w.image[fe],ke[fe]=wt(w,ke[fe]);const qe=ke[0],et=l.convert(w.format,w.colorSpace),Be=l.convert(w.type),ft=L(w.internalFormat,et,Be,w.colorSpace),it=w.isVideoTexture!==!0,Tt=ue.__version===void 0||me===!0,G=_e.dataReady;let Re=V(w,qe);ne(r.TEXTURE_CUBE_MAP,w);let ie;if(lt){it&&Tt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,ft,qe.width,qe.height);for(let fe=0;fe<6;fe++){ie=ke[fe].mipmaps;for(let De=0;De<ie.length;De++){const be=ie[De];w.format!==ui?et!==null?it?G&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De,0,0,be.width,be.height,et,be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De,ft,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De,0,0,be.width,be.height,et,Be,be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De,ft,be.width,be.height,0,et,Be,be.data)}}}else{if(ie=w.mipmaps,it&&Tt){ie.length>0&&Re++;const fe=We(ke[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,ft,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Me){it?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ke[fe].width,ke[fe].height,et,Be,ke[fe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ft,ke[fe].width,ke[fe].height,0,et,Be,ke[fe].data);for(let De=0;De<ie.length;De++){const rt=ie[De].image[fe].image;it?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De+1,0,0,rt.width,rt.height,et,Be,rt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De+1,ft,rt.width,rt.height,0,et,Be,rt.data)}}else{it?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,et,Be,ke[fe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ft,et,Be,ke[fe]);for(let De=0;De<ie.length;De++){const be=ie[De];it?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De+1,0,0,et,Be,be.image[fe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De+1,ft,et,Be,be.image[fe])}}}y(w)&&g(r.TEXTURE_CUBE_MAP),ue.__version=_e.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function Ee(b,w,K,me,_e,ue){const Xe=l.convert(K.format,K.colorSpace),Ae=l.convert(K.type),Fe=L(K.internalFormat,Xe,Ae,K.colorSpace),lt=s.get(w),Me=s.get(K);if(Me.__renderTarget=w,!lt.__hasExternalTextures){const ke=Math.max(1,w.width>>ue),qe=Math.max(1,w.height>>ue);_e===r.TEXTURE_3D||_e===r.TEXTURE_2D_ARRAY?t.texImage3D(_e,ue,Fe,ke,qe,w.depth,0,Xe,Ae,null):t.texImage2D(_e,ue,Fe,ke,qe,0,Xe,Ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,b),ct(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,_e,Me.__webglTexture,0,pt(w)):(_e===r.TEXTURE_2D||_e>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,_e,Me.__webglTexture,ue),t.bindFramebuffer(r.FRAMEBUFFER,null)}function xe(b,w,K){if(r.bindRenderbuffer(r.RENDERBUFFER,b),w.depthBuffer){const me=w.depthTexture,_e=me&&me.isDepthTexture?me.type:null,ue=C(w.stencilBuffer,_e),Xe=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=pt(w);ct(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ae,ue,w.width,w.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae,ue,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,ue,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Xe,r.RENDERBUFFER,b)}else{const me=w.textures;for(let _e=0;_e<me.length;_e++){const ue=me[_e],Xe=l.convert(ue.format,ue.colorSpace),Ae=l.convert(ue.type),Fe=L(ue.internalFormat,Xe,Ae,ue.colorSpace),lt=pt(w);K&&ct(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,lt,Fe,w.width,w.height):ct(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,lt,Fe,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Fe,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function we(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=s.get(w.depthTexture);me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),pe(w.depthTexture,0);const _e=me.__webglTexture,ue=pt(w);if(w.depthTexture.format===Zs)ct(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0);else if(w.depthTexture.format===io)ct(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ie(b){const w=s.get(b),K=b.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==b.depthTexture){const me=b.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const _e=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),w.__depthDisposeCallback=_e}w.__boundDepthTexture=me}if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");we(w.__webglFramebuffer,b)}else if(K){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=r.createRenderbuffer(),xe(w.__webglDepthbuffer[me],b,!1);else{const _e=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,ue)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),xe(w.__webglDepthbuffer,b,!1);else{const me=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,_e),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,_e)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(b,w,K){const me=s.get(b);w!==void 0&&Ee(me.__webglFramebuffer,b,b.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&Ie(b)}function At(b){const w=b.texture,K=s.get(b),me=s.get(w);b.addEventListener("dispose",N);const _e=b.textures,ue=b.isWebGLCubeRenderTarget===!0,Xe=_e.length>1;if(Xe||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=w.version,c.memory.textures++),ue){K.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[Ae]=[];for(let Fe=0;Fe<w.mipmaps.length;Fe++)K.__webglFramebuffer[Ae][Fe]=r.createFramebuffer()}else K.__webglFramebuffer[Ae]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)K.__webglFramebuffer[Ae]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Xe)for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const lt=s.get(_e[Ae]);lt.__webglTexture===void 0&&(lt.__webglTexture=r.createTexture(),c.memory.textures++)}if(b.samples>0&&ct(b)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ae=0;Ae<_e.length;Ae++){const Fe=_e[Ae];K.__webglColorRenderbuffer[Ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[Ae]);const lt=l.convert(Fe.format,Fe.colorSpace),Me=l.convert(Fe.type),ke=L(Fe.internalFormat,lt,Me,Fe.colorSpace,b.isXRRenderTarget===!0),qe=pt(b);r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,ke,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,K.__webglColorRenderbuffer[Ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),b.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),xe(K.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ue){t.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),ne(r.TEXTURE_CUBE_MAP,w);for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Ee(K.__webglFramebuffer[Ae][Fe],b,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Fe);else Ee(K.__webglFramebuffer[Ae],b,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(w)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const lt=_e[Ae],Me=s.get(lt);t.bindTexture(r.TEXTURE_2D,Me.__webglTexture),ne(r.TEXTURE_2D,lt),Ee(K.__webglFramebuffer,b,lt,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,0),y(lt)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let Ae=r.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ae=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ae,me.__webglTexture),ne(Ae,w),w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Ee(K.__webglFramebuffer[Fe],b,w,r.COLOR_ATTACHMENT0,Ae,Fe);else Ee(K.__webglFramebuffer,b,w,r.COLOR_ATTACHMENT0,Ae,0);y(w)&&g(Ae),t.unbindTexture()}b.depthBuffer&&Ie(b)}function mt(b){const w=b.textures;for(let K=0,me=w.length;K<me;K++){const _e=w[K];if(y(_e)){const ue=D(b),Xe=s.get(_e).__webglTexture;t.bindTexture(ue,Xe),g(ue),t.unbindTexture()}}}const Dt=[],O=[];function yn(b){if(b.samples>0){if(ct(b)===!1){const w=b.textures,K=b.width,me=b.height;let _e=r.COLOR_BUFFER_BIT;const ue=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Xe=s.get(b),Ae=w.length>1;if(Ae)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(_e|=r.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(_e|=r.STENCIL_BUFFER_BIT)),Ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[Fe]);const lt=s.get(w[Fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,lt,0)}r.blitFramebuffer(0,0,K,me,0,0,K,me,_e,r.NEAREST),h===!0&&(Dt.length=0,O.length=0,Dt.push(r.COLOR_ATTACHMENT0+Fe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Dt.push(ue),O.push(ue),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,O)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Dt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ae)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[Fe]);const lt=s.get(w[Fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,lt,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&h){const w=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function pt(b){return Math.min(a.maxSamples,b.samples)}function ct(b){const w=s.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function je(b){const w=c.render.frame;_.get(b)!==w&&(_.set(b,w),b.update())}function wt(b,w){const K=b.colorSpace,me=b.format,_e=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||K!==ro&&K!==Mr&&(Mt.getTransfer(K)===Rt?(me!==ui||_e!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),w}function We(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(p.width=b.naturalWidth||b.width,p.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(p.width=b.displayWidth,p.height=b.displayHeight):(p.width=b.width,p.height=b.height),p}this.allocateTextureUnit=te,this.resetTextureUnits=oe,this.setTexture2D=pe,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=z,this.rebindTextures=Qe,this.setupRenderTarget=At,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=yn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ct}function Cw(r,e){function t(s,a=Mr){let l;const c=Mt.getTransfer(a);if(s===Xi)return r.UNSIGNED_BYTE;if(s===md)return r.UNSIGNED_SHORT_4_4_4_4;if(s===gd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Ug)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Dg)return r.BYTE;if(s===Lg)return r.SHORT;if(s===ea)return r.UNSIGNED_SHORT;if(s===pd)return r.INT;if(s===ns)return r.UNSIGNED_INT;if(s===Hi)return r.FLOAT;if(s===sa)return r.HALF_FLOAT;if(s===Ig)return r.ALPHA;if(s===Ng)return r.RGB;if(s===ui)return r.RGBA;if(s===Fg)return r.LUMINANCE;if(s===Og)return r.LUMINANCE_ALPHA;if(s===Zs)return r.DEPTH_COMPONENT;if(s===io)return r.DEPTH_STENCIL;if(s===kg)return r.RED;if(s===_d)return r.RED_INTEGER;if(s===Bg)return r.RG;if(s===vd)return r.RG_INTEGER;if(s===xd)return r.RGBA_INTEGER;if(s===Hl||s===Vl||s===Gl||s===Wl)if(c===Rt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Hl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Vl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Hl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Vl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Lf||s===Uf||s===If||s===Nf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Lf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Uf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===If)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Nf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ff||s===Of||s===kf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Ff||s===Of)return c===Rt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===kf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Bf||s===zf||s===Hf||s===Vf||s===Gf||s===Wf||s===Xf||s===Yf||s===jf||s===$f||s===qf||s===Kf||s===Zf||s===Qf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Bf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===zf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Hf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Gf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Xf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Yf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===jf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===$f)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===qf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Kf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Zf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Qf)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xl||s===Jf||s===ed)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Xl)return c===Rt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Jf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ed)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===zg||s===td||s===nd||s===id)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Xl)return l.COMPRESSED_RED_RGTC1_EXT;if(s===td)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===nd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===id)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===no?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const Pw={type:"move"};class mf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Il,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Il,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Il,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,s),g=this._getHandJoint(p,T);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],v=_.position.distanceTo(x.position),S=.02,E=.005;p.inputState.pinching&&v>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Pw)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Il;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const bw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Lw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new Rn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!==s.depthNear||t.depthFar!==s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Cr({vertexShader:bw,fragmentShader:Dw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xi(new tu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Uw extends ss{constructor(e,t){super();const s=this;let a=null,l=1,c=null,f="local-floor",h=1,p=null,_=null,x=null,v=null,S=null,E=null;const T=new Lw,y=t.getContextAttributes();let g=null,D=null;const L=[],C=[],V=new ut;let k=null;const N=new Qn;N.viewport=new Yt;const X=new Qn;X.viewport=new Yt;const P=[N,X],R=new Qy;let B=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let he=L[Z];return he===void 0&&(he=new mf,L[Z]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Z){let he=L[Z];return he===void 0&&(he=new mf,L[Z]=he),he.getGripSpace()},this.getHand=function(Z){let he=L[Z];return he===void 0&&(he=new mf,L[Z]=he),he.getHandSpace()};function te(Z){const he=C.indexOf(Z.inputSource);if(he===-1)return;const Ee=L[he];Ee!==void 0&&(Ee.update(Z.inputSource,Z.frame,p||c),Ee.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ce(){a.removeEventListener("select",te),a.removeEventListener("selectstart",te),a.removeEventListener("selectend",te),a.removeEventListener("squeeze",te),a.removeEventListener("squeezestart",te),a.removeEventListener("squeezeend",te),a.removeEventListener("end",ce),a.removeEventListener("inputsourceschange",pe);for(let Z=0;Z<L.length;Z++){const he=C[Z];he!==null&&(C[Z]=null,L[Z].disconnect(he))}B=null,oe=null,T.reset(),e.setRenderTarget(g),S=null,v=null,x=null,a=null,D=null,Ne.stop(),s.isPresenting=!1,e.setPixelRatio(k),e.setSize(V.width,V.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){l=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){f=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",te),a.addEventListener("selectstart",te),a.addEventListener("selectend",te),a.addEventListener("squeeze",te),a.addEventListener("squeezestart",te),a.addEventListener("squeezeend",te),a.addEventListener("end",ce),a.addEventListener("inputsourceschange",pe),y.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(V),a.enabledFeatures!==void 0&&a.enabledFeatures.includes("layers")){let Ee=null,xe=null,we=null;y.depth&&(we=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=y.stencil?io:Zs,xe=y.stencil?no:ns);const Ie={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:l};x=new XRWebGLBinding(a,t),v=x.createProjectionLayer(Ie),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new is(v.textureWidth,v.textureHeight,{format:ui,type:Xi,depthTexture:new Qg(v.textureWidth,v.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}else{const Ee={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,Ee),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new is(S.framebufferWidth,S.framebufferHeight,{format:ui,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}D.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await a.requestReferenceSpace(f),Ne.setContext(a),Ne.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function pe(Z){for(let he=0;he<Z.removed.length;he++){const Ee=Z.removed[he],xe=C.indexOf(Ee);xe>=0&&(C[xe]=null,L[xe].disconnect(Ee))}for(let he=0;he<Z.added.length;he++){const Ee=Z.added[he];let xe=C.indexOf(Ee);if(xe===-1){for(let Ie=0;Ie<L.length;Ie++)if(Ie>=C.length){C.push(Ee),xe=Ie;break}else if(C[Ie]===null){C[Ie]=Ee,xe=Ie;break}if(xe===-1)break}const we=L[xe];we&&we.connect(Ee)}}const se=new J,le=new J;function z(Z,he,Ee){se.setFromMatrixPosition(he.matrixWorld),le.setFromMatrixPosition(Ee.matrixWorld);const xe=se.distanceTo(le),we=he.projectionMatrix.elements,Ie=Ee.projectionMatrix.elements,Qe=we[14]/(we[10]-1),At=we[14]/(we[10]+1),mt=(we[9]+1)/we[5],Dt=(we[9]-1)/we[5],O=(we[8]-1)/we[0],yn=(Ie[8]+1)/Ie[0],pt=Qe*O,ct=Qe*yn,je=xe/(-O+yn),wt=je*-O;if(he.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(wt),Z.translateZ(je),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),we[10]===-1)Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const We=Qe+je,b=At+je,w=pt-wt,K=ct+(xe-wt),me=mt*At/b*We,_e=Dt*At/b*We;Z.projectionMatrix.makePerspective(w,K,me,_e,We,b),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ae(Z,he){he===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(he.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let he=Z.near,Ee=Z.far;T.texture!==null&&(T.depthNear>0&&(he=T.depthNear),T.depthFar>0&&(Ee=T.depthFar)),R.near=X.near=N.near=he,R.far=X.far=N.far=Ee,(B!==R.near||oe!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,oe=R.far),N.layers.mask=Z.layers.mask|2,X.layers.mask=Z.layers.mask|4,R.layers.mask=N.layers.mask|X.layers.mask;const xe=Z.parent,we=R.cameras;ae(R,xe);for(let Ie=0;Ie<we.length;Ie++)ae(we[Ie],xe);we.length===2?z(R,N,X):R.projectionMatrix.copy(N.projectionMatrix),re(Z,R,xe)};function re(Z,he,Ee){Ee===null?Z.matrix.copy(he.matrixWorld):(Z.matrix.copy(Ee.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(he.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ta*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&S===null))return h},this.setFoveation=function(Z){h=Z,v!==null&&(v.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let I=null;function ne(Z,he){if(_=he.getViewerPose(p||c),E=he,_!==null){const Ee=_.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let xe=!1;Ee.length!==R.cameras.length&&(R.cameras.length=0,xe=!0);for(let Ie=0;Ie<Ee.length;Ie++){const Qe=Ee[Ie];let At=null;if(S!==null)At=S.getViewport(Qe);else{const Dt=x.getViewSubImage(v,Qe);At=Dt.viewport,Ie===0&&(e.setRenderTargetTextures(D,Dt.colorTexture,v.ignoreDepthValues?void 0:Dt.depthStencilTexture),e.setRenderTarget(D))}let mt=P[Ie];mt===void 0&&(mt=new Qn,mt.layers.enable(Ie),mt.viewport=new Yt,P[Ie]=mt),mt.matrix.fromArray(Qe.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Qe.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(At.x,At.y,At.width,At.height),Ie===0&&(R.matrix.copy(mt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),xe===!0&&R.cameras.push(mt)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")){const Ie=x.getDepthInformation(Ee[0]);Ie&&Ie.isValid&&Ie.texture&&T.init(e,Ie,a.renderState)}}for(let Ee=0;Ee<L.length;Ee++){const xe=C[Ee],we=L[Ee];xe!==null&&we!==void 0&&we.update(xe,he,p||c)}I&&I(Z,he),he.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:he}),E=null}const Ne=new Jg;Ne.setAnimationLoop(ne),this.setAnimationLoop=function(Z){I=Z},this.dispose=function(){}}}const qr=new Yi,Iw=new jt;function Nw(r,e){function t(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function s(y,g){g.color.getRGB(y.fogColor.value,$g(r)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,D,L,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?l(y,g):g.isMeshToonMaterial?(l(y,g),x(y,g)):g.isMeshPhongMaterial?(l(y,g),_(y,g)):g.isMeshStandardMaterial?(l(y,g),v(y,g),g.isMeshPhysicalMaterial&&S(y,g,C)):g.isMeshMatcapMaterial?(l(y,g),E(y,g)):g.isMeshDepthMaterial?l(y,g):g.isMeshDistanceMaterial?(l(y,g),T(y,g)):g.isMeshNormalMaterial?l(y,g):g.isLineBasicMaterial?(c(y,g),g.isLineDashedMaterial&&f(y,g)):g.isPointsMaterial?h(y,g,D,L):g.isSpriteMaterial?p(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,t(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Fn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,t(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Fn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,t(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,t(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const D=e.get(g),L=D.envMap,C=D.envMapRotation;L&&(y.envMap.value=L,qr.copy(C),qr.x*=-1,qr.y*=-1,qr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),y.envMapRotation.value.setFromMatrix4(Iw.makeRotationFromEuler(qr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,y.aoMapTransform))}function c(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform))}function f(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function h(y,g,D,L){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*D,y.scale.value=L*.5,g.map&&(y.map.value=g.map,t(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function x(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function v(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,D){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Fn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,g){g.matcap&&(y.matcap.value=g.matcap)}function T(y,g){const D=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function Fw(r,e,t,s){let a={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,L){const C=L.program;s.uniformBlockBinding(D,C)}function p(D,L){let C=a[D.id];C===void 0&&(E(D),C=_(D),a[D.id]=C,D.addEventListener("dispose",y));const V=L.program;s.updateUBOMapping(D,V);const k=e.render.frame;l[D.id]!==k&&(v(D),l[D.id]=k)}function _(D){const L=x();D.__bindingPointIndex=L;const C=r.createBuffer(),V=D.__size,k=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,V,k),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,C),C}function x(){for(let D=0;D<f;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const L=a[D.id],C=D.uniforms,V=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let k=0,N=C.length;k<N;k++){const X=Array.isArray(C[k])?C[k]:[C[k]];for(let P=0,R=X.length;P<R;P++){const B=X[P];if(S(B,k,P,V)===!0){const oe=B.__offset,te=Array.isArray(B.value)?B.value:[B.value];let ce=0;for(let pe=0;pe<te.length;pe++){const se=te[pe],le=T(se);typeof se=="number"||typeof se=="boolean"?(B.__data[0]=se,r.bufferSubData(r.UNIFORM_BUFFER,oe+ce,B.__data)):se.isMatrix3?(B.__data[0]=se.elements[0],B.__data[1]=se.elements[1],B.__data[2]=se.elements[2],B.__data[3]=0,B.__data[4]=se.elements[3],B.__data[5]=se.elements[4],B.__data[6]=se.elements[5],B.__data[7]=0,B.__data[8]=se.elements[6],B.__data[9]=se.elements[7],B.__data[10]=se.elements[8],B.__data[11]=0):(se.toArray(B.__data,ce),ce+=le.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,oe,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(D,L,C,V){const k=D.value,N=L+"_"+C;if(V[N]===void 0)return typeof k=="number"||typeof k=="boolean"?V[N]=k:V[N]=k.clone(),!0;{const X=V[N];if(typeof k=="number"||typeof k=="boolean"){if(X!==k)return V[N]=k,!0}else if(X.equals(k)===!1)return X.copy(k),!0}return!1}function E(D){const L=D.uniforms;let C=0;const V=16;for(let N=0,X=L.length;N<X;N++){const P=Array.isArray(L[N])?L[N]:[L[N]];for(let R=0,B=P.length;R<B;R++){const oe=P[R],te=Array.isArray(oe.value)?oe.value:[oe.value];for(let ce=0,pe=te.length;ce<pe;ce++){const se=te[ce],le=T(se),z=C%V,ae=z%le.boundary,re=z+ae;C+=ae,re!==0&&V-re<le.storage&&(C+=V-re),oe.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=C,C+=le.storage}}}const k=C%V;return k>0&&(C+=V-k),D.__size=C,D.__cache={},this}function T(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function y(D){const L=D.target;L.removeEventListener("dispose",y);const C=c.indexOf(L.__bindingPointIndex);c.splice(C,1),r.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function g(){for(const D in a)r.deleteBuffer(a[D]);c=[],a={},l={}}return{bind:h,update:p,dispose:g}}class Ow{constructor(e={}){const{canvas:t=xy(),context:s=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,g=null;const D=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zn,this.toneMapping=wr,this.toneMappingExposure=1;const C=this;let V=!1,k=0,N=0,X=null,P=-1,R=null;const B=new Yt,oe=new Yt;let te=null;const ce=new Pt(0);let pe=0,se=t.width,le=t.height,z=1,ae=null,re=null;const I=new Yt(0,0,se,le),ne=new Yt(0,0,se,le);let Ne=!1;const Z=new Zg;let he=!1,Ee=!1;this.transmissionResolutionScale=1;const xe=new jt,we=new jt,Ie=new J,Qe=new Yt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Dt(){return X===null?z:1}let O=s;function yn(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hd}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",be,!1),O===null){const W="webgl2";if(O=yn(W,A),O===null)throw yn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let pt,ct,je,wt,We,b,w,K,me,_e,ue,Xe,Ae,Fe,lt,Me,ke,qe,et,Be,ft,it,Tt,G;function Re(){pt=new YM(O),pt.init(),it=new Cw(O,pt),ct=new zM(O,pt,e,it),je=new Aw(O,pt),ct.reverseDepthBuffer&&v&&je.buffers.depth.setReversed(!0),wt=new qM(O),We=new hw,b=new Rw(O,pt,je,We,ct,it,wt),w=new VM(C),K=new XM(C),me=new nS(O),Tt=new kM(O,me),_e=new jM(O,me,wt,Tt),ue=new ZM(O,_e,me,wt),et=new KM(O,ct,b),Me=new HM(We),Xe=new dw(C,w,K,pt,ct,Tt,Me),Ae=new Nw(C,We),Fe=new mw,lt=new Sw(pt),qe=new OM(C,w,K,je,ue,S,h),ke=new Tw(C,ue,ct),G=new Fw(O,wt,ct,je),Be=new BM(O,pt,wt),ft=new $M(O,pt,wt),wt.programs=Xe.programs,C.capabilities=ct,C.extensions=pt,C.properties=We,C.renderLists=Fe,C.shadowMap=ke,C.state=je,C.info=wt}Re();const ie=new Uw(C,O);this.xr=ie,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(se,le,!1))},this.getSize=function(A){return A.set(se,le)},this.setSize=function(A,W,Q=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,le=W,t.width=Math.floor(A*z),t.height=Math.floor(W*z),Q===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(se*z,le*z).floor()},this.setDrawingBufferSize=function(A,W,Q){se=A,le=W,z=Q,t.width=Math.floor(A*Q),t.height=Math.floor(W*Q),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,W,Q,$){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,W,Q,$),je.viewport(B.copy(I).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,W,Q,$){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,W,Q,$),je.scissor(oe.copy(ne).multiplyScalar(z).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(A){je.setScissorTest(Ne=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){re=A},this.getClearColor=function(A){return A.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(A=!0,W=!0,Q=!0){let $=0;if(A){let Y=!1;if(X!==null){const Se=X.texture.format;Y=Se===xd||Se===vd||Se===_d}if(Y){const Se=X.texture.type,Ce=Se===Xi||Se===ns||Se===ea||Se===no||Se===md||Se===gd,Le=qe.getClearColor(),ze=qe.getClearAlpha(),tt=Le.r,Je=Le.g,Ve=Le.b;Ce?(E[0]=tt,E[1]=Je,E[2]=Ve,E[3]=ze,O.clearBufferuiv(O.COLOR,0,E)):(T[0]=tt,T[1]=Je,T[2]=Ve,T[3]=ze,O.clearBufferiv(O.COLOR,0,T))}else $|=O.COLOR_BUFFER_BIT}W&&($|=O.DEPTH_BUFFER_BIT),Q&&($|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",be,!1),qe.dispose(),Fe.dispose(),lt.dispose(),We.dispose(),w.dispose(),K.dispose(),ue.dispose(),Tt.dispose(),G.dispose(),Xe.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",as),ie.removeEventListener("sessionend",$i),Mi.stop()};function fe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const A=wt.autoReset,W=ke.enabled,Q=ke.autoUpdate,$=ke.needsUpdate,Y=ke.type;Re(),wt.autoReset=A,ke.enabled=W,ke.autoUpdate=Q,ke.needsUpdate=$,ke.type=Y}function be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function rt(A){const W=A.target;W.removeEventListener("dispose",rt),Ut(W)}function Ut(A){Kt(A),We.remove(A)}function Kt(A){const W=We.get(A).programs;W!==void 0&&(W.forEach(function(Q){Xe.releaseProgram(Q)}),A.isShaderMaterial&&Xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,Q,$,Y,Se){W===null&&(W=At);const Ce=Y.isMesh&&Y.matrixWorld.determinant()<0,Le=ua(A,W,Q,$,Y);je.setMaterial($,Ce);let ze=Q.index,tt=1;if($.wireframe===!0){if(ze=_e.getWireframeAttribute(Q),ze===void 0)return;tt=2}const Je=Q.drawRange,Ve=Q.attributes.position;let _t=Je.start*tt,st=(Je.start+Je.count)*tt;Se!==null&&(_t=Math.max(_t,Se.start*tt),st=Math.min(st,(Se.start+Se.count)*tt)),ze!==null?(_t=Math.max(_t,0),st=Math.min(st,ze.count)):Ve!=null&&(_t=Math.max(_t,0),st=Math.min(st,Ve.count));const Vt=st-_t;if(Vt<0||Vt===1/0)return;Tt.setup(Y,$,Le,Q,ze);let Ot,vt=Be;if(ze!==null&&(Ot=me.get(ze),vt=ft,vt.setIndex(Ot)),Y.isMesh)$.wireframe===!0?(je.setLineWidth($.wireframeLinewidth*Dt()),vt.setMode(O.LINES)):vt.setMode(O.TRIANGLES);else if(Y.isLine){let $e=$.linewidth;$e===void 0&&($e=1),je.setLineWidth($e*Dt()),Y.isLineSegments?vt.setMode(O.LINES):Y.isLineLoop?vt.setMode(O.LINE_LOOP):vt.setMode(O.LINE_STRIP)}else Y.isPoints?vt.setMode(O.POINTS):Y.isSprite&&vt.setMode(O.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)vt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))vt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const $e=Y._multiDrawStarts,Gt=Y._multiDrawCounts,gt=Y._multiDrawCount,dn=ze?me.get(ze).bytesPerElement:1,Ki=We.get($).currentProgram.getUniforms();for(let En=0;En<gt;En++)Ki.setValue(O,"_gl_DrawID",En),vt.render($e[En]/dn,Gt[En])}else if(Y.isInstancedMesh)vt.renderInstances(_t,Vt,Y.count);else if(Q.isInstancedBufferGeometry){const $e=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Gt=Math.min(Q.instanceCount,$e);vt.renderInstances(_t,Vt,Gt)}else vt.render(_t,Vt)};function xt(A,W,Q){A.transparent===!0&&A.side===zi&&A.forceSinglePass===!1?(A.side=Fn,A.needsUpdate=!0,ls(A,W,Q),A.side=Rr,A.needsUpdate=!0,ls(A,W,Q),A.side=zi):ls(A,W,Q)}this.compile=function(A,W,Q=null){Q===null&&(Q=A),g=lt.get(Q),g.init(W),L.push(g),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),A!==Q&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const $=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Se=Y.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){const Le=Se[Ce];xt(Le,Q,Y),$.add(Le)}else xt(Se,Q,Y),$.add(Se)}),L.pop(),g=null,$},this.compileAsync=function(A,W,Q=null){const $=this.compile(A,W,Q);return new Promise(Y=>{function Se(){if($.forEach(function(Ce){We.get(Ce).currentProgram.isReady()&&$.delete(Ce)}),$.size===0){Y(A);return}setTimeout(Se,10)}pt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Cn=null;function Sn(A){Cn&&Cn(A)}function as(){Mi.stop()}function $i(){Mi.start()}const Mi=new Jg;Mi.setAnimationLoop(Sn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(A){Cn=A,ie.setAnimationLoop(A),A===null?Mi.stop():Mi.start()},ie.addEventListener("sessionstart",as),ie.addEventListener("sessionend",$i),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(W),W=ie.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,W,X),g=lt.get(A,L.length),g.init(W),L.push(g),we.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(we),Ee=this.localClippingEnabled,he=Me.init(this.clippingPlanes,Ee),y=Fe.get(A,D.length),y.init(),D.push(y),ie.enabled===!0&&ie.isPresenting===!0){const Se=C.xr.getDepthSensingMesh();Se!==null&&Ti(Se,W,-1/0,C.sortObjects)}Ti(A,W,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(ae,re),mt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,mt&&qe.addToRenderList(y,A),this.info.render.frame++,he===!0&&Me.beginShadows();const Q=g.state.shadowsArray;ke.render(Q,A,W),he===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=y.opaque,Y=y.transmissive;if(g.setupLights(),W.isArrayCamera){const Se=W.cameras;if(Y.length>0)for(let Ce=0,Le=Se.length;Ce<Le;Ce++){const ze=Se[Ce];Dr($,Y,A,ze)}mt&&qe.render(A);for(let Ce=0,Le=Se.length;Ce<Le;Ce++){const ze=Se[Ce];br(y,A,ze,ze.viewport)}}else Y.length>0&&Dr($,Y,A,W),mt&&qe.render(A),br(y,A,W);X!==null&&N===0&&(b.updateMultisampleRenderTarget(X),b.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(C,A,W),Tt.resetDefaultState(),P=-1,R=null,L.pop(),L.length>0?(g=L[L.length-1],he===!0&&Me.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function Ti(A,W,Q,$){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){$&&Qe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);const Ce=ue.update(A),Le=A.material;Le.visible&&y.push(A,Ce,Le,Q,Qe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Z.intersectsObject(A))){const Ce=ue.update(A),Le=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Qe.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Qe.copy(Ce.boundingSphere.center)),Qe.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(Le)){const ze=Ce.groups;for(let tt=0,Je=ze.length;tt<Je;tt++){const Ve=ze[tt],_t=Le[Ve.materialIndex];_t&&_t.visible&&y.push(A,Ce,_t,Q,Qe.z,Ve)}}else Le.visible&&y.push(A,Ce,Le,Q,Qe.z,null)}}const Se=A.children;for(let Ce=0,Le=Se.length;Ce<Le;Ce++)Ti(Se[Ce],W,Q,$)}function br(A,W,Q,$){const Y=A.opaque,Se=A.transmissive,Ce=A.transparent;g.setupLightsView(Q),he===!0&&Me.setGlobalState(C.clippingPlanes,Q),$&&je.viewport(B.copy($)),Y.length>0&&qi(Y,W,Q),Se.length>0&&qi(Se,W,Q),Ce.length>0&&qi(Ce,W,Q),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Dr(A,W,Q,$){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[$.id]===void 0&&(g.state.transmissionRenderTarget[$.id]=new is(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?sa:Xi,minFilter:es,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Se=g.state.transmissionRenderTarget[$.id],Ce=$.viewport||B;Se.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);const Le=C.getRenderTarget();C.setRenderTarget(Se),C.getClearColor(ce),pe=C.getClearAlpha(),pe<1&&C.setClearColor(16777215,.5),C.clear(),mt&&qe.render(Q);const ze=C.toneMapping;C.toneMapping=wr;const tt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),g.setupLightsView($),he===!0&&Me.setGlobalState(C.clippingPlanes,$),qi(A,Q,$),b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Ve=0,_t=W.length;Ve<_t;Ve++){const st=W[Ve],Vt=st.object,Ot=st.geometry,vt=st.material,$e=st.group;if(vt.side===zi&&Vt.layers.test($.layers)){const Gt=vt.side;vt.side=Fn,vt.needsUpdate=!0,aa(Vt,Q,$,Ot,vt,$e),vt.side=Gt,vt.needsUpdate=!0,Je=!0}}Je===!0&&(b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se))}C.setRenderTarget(Le),C.setClearColor(ce,pe),tt!==void 0&&($.viewport=tt),C.toneMapping=ze}function qi(A,W,Q){const $=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,Se=A.length;Y<Se;Y++){const Ce=A[Y],Le=Ce.object,ze=Ce.geometry,tt=$===null?Ce.material:$,Je=Ce.group;Le.layers.test(Q.layers)&&aa(Le,W,Q,ze,tt,Je)}}function aa(A,W,Q,$,Y,Se){A.onBeforeRender(C,W,Q,$,Y,Se),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(C,W,Q,$,A,Se),Y.transparent===!0&&Y.side===zi&&Y.forceSinglePass===!1?(Y.side=Fn,Y.needsUpdate=!0,C.renderBufferDirect(Q,W,$,Y,A,Se),Y.side=Rr,Y.needsUpdate=!0,C.renderBufferDirect(Q,W,$,Y,A,Se),Y.side=zi):C.renderBufferDirect(Q,W,$,Y,A,Se),A.onAfterRender(C,W,Q,$,Y,Se)}function ls(A,W,Q){W.isScene!==!0&&(W=At);const $=We.get(A),Y=g.state.lights,Se=g.state.shadowsArray,Ce=Y.state.version,Le=Xe.getParameters(A,Y.state,Se,W,Q),ze=Xe.getProgramCacheKey(Le);let tt=$.programs;$.environment=A.isMeshStandardMaterial?W.environment:null,$.fog=W.fog,$.envMap=(A.isMeshStandardMaterial?K:w).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,tt===void 0&&(A.addEventListener("dispose",rt),tt=new Map,$.programs=tt);let Je=tt.get(ze);if(Je!==void 0){if($.currentProgram===Je&&$.lightsStateVersion===Ce)return fi(A,Le),Je}else Le.uniforms=Xe.getUniforms(A),A.onBeforeCompile(Le,C),Je=Xe.acquireProgram(Le,ze),tt.set(ze,Je),$.uniforms=Le.uniforms;const Ve=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ve.clippingPlanes=Me.uniform),fi(A,Le),$.needsLights=iu(A),$.lightsStateVersion=Ce,$.needsLights&&(Ve.ambientLightColor.value=Y.state.ambient,Ve.lightProbe.value=Y.state.probe,Ve.directionalLights.value=Y.state.directional,Ve.directionalLightShadows.value=Y.state.directionalShadow,Ve.spotLights.value=Y.state.spot,Ve.spotLightShadows.value=Y.state.spotShadow,Ve.rectAreaLights.value=Y.state.rectArea,Ve.ltc_1.value=Y.state.rectAreaLTC1,Ve.ltc_2.value=Y.state.rectAreaLTC2,Ve.pointLights.value=Y.state.point,Ve.pointLightShadows.value=Y.state.pointShadow,Ve.hemisphereLights.value=Y.state.hemi,Ve.directionalShadowMap.value=Y.state.directionalShadowMap,Ve.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ve.spotShadowMap.value=Y.state.spotShadowMap,Ve.spotLightMatrix.value=Y.state.spotLightMatrix,Ve.spotLightMap.value=Y.state.spotLightMap,Ve.pointShadowMap.value=Y.state.pointShadowMap,Ve.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.currentProgram=Je,$.uniformsList=null,Je}function la(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Yl.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function fi(A,W){const Q=We.get(A);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.batchingColor=W.batchingColor,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function ua(A,W,Q,$,Y){W.isScene!==!0&&(W=At),b.resetTextureUnits();const Se=W.fog,Ce=$.isMeshStandardMaterial?W.environment:null,Le=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ro,ze=($.isMeshStandardMaterial?K:w).get($.envMap||Ce),tt=$.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Je=!!Q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ve=!!Q.morphAttributes.position,_t=!!Q.morphAttributes.normal,st=!!Q.morphAttributes.color;let Vt=wr;$.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Vt=C.toneMapping);const Ot=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,vt=Ot!==void 0?Ot.length:0,$e=We.get($),Gt=g.state.lights;if(he===!0&&(Ee===!0||A!==R)){const un=A===R&&$.id===P;Me.setState($,A,un)}let gt=!1;$.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Gt.state.version||$e.outputColorSpace!==Le||Y.isBatchedMesh&&$e.batching===!1||!Y.isBatchedMesh&&$e.batching===!0||Y.isBatchedMesh&&$e.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&$e.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&$e.instancing===!1||!Y.isInstancedMesh&&$e.instancing===!0||Y.isSkinnedMesh&&$e.skinning===!1||!Y.isSkinnedMesh&&$e.skinning===!0||Y.isInstancedMesh&&$e.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&$e.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&$e.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&$e.instancingMorph===!1&&Y.morphTexture!==null||$e.envMap!==ze||$.fog===!0&&$e.fog!==Se||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Me.numPlanes||$e.numIntersection!==Me.numIntersection)||$e.vertexAlphas!==tt||$e.vertexTangents!==Je||$e.morphTargets!==Ve||$e.morphNormals!==_t||$e.morphColors!==st||$e.toneMapping!==Vt||$e.morphTargetsCount!==vt)&&(gt=!0):(gt=!0,$e.__version=$.version);let dn=$e.currentProgram;gt===!0&&(dn=ls($,W,Y));let Ki=!1,En=!1,wi=!1;const bt=dn.getUniforms(),hn=$e.uniforms;if(je.useProgram(dn.program)&&(Ki=!0,En=!0,wi=!0),$.id!==P&&(P=$.id,En=!0),Ki||R!==A){je.buffers.depth.getReversed()?(xe.copy(A.projectionMatrix),Sy(xe),Ey(xe),bt.setValue(O,"projectionMatrix",xe)):bt.setValue(O,"projectionMatrix",A.projectionMatrix),bt.setValue(O,"viewMatrix",A.matrixWorldInverse);const rn=bt.map.cameraPosition;rn!==void 0&&rn.setValue(O,Ie.setFromMatrixPosition(A.matrixWorld)),ct.logarithmicDepthBuffer&&bt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&bt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,En=!0,wi=!0)}if(Y.isSkinnedMesh){bt.setOptional(O,Y,"bindMatrix"),bt.setOptional(O,Y,"bindMatrixInverse");const un=Y.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),bt.setValue(O,"boneTexture",un.boneTexture,b))}Y.isBatchedMesh&&(bt.setOptional(O,Y,"batchingTexture"),bt.setValue(O,"batchingTexture",Y._matricesTexture,b),bt.setOptional(O,Y,"batchingIdTexture"),bt.setValue(O,"batchingIdTexture",Y._indirectTexture,b),bt.setOptional(O,Y,"batchingColorTexture"),Y._colorsTexture!==null&&bt.setValue(O,"batchingColorTexture",Y._colorsTexture,b));const nn=Q.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&et.update(Y,Q,dn),(En||$e.receiveShadow!==Y.receiveShadow)&&($e.receiveShadow=Y.receiveShadow,bt.setValue(O,"receiveShadow",Y.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(hn.envMap.value=ze,hn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&W.environment!==null&&(hn.envMapIntensity.value=W.environmentIntensity),En&&(bt.setValue(O,"toneMappingExposure",C.toneMappingExposure),$e.needsLights&&ca(hn,wi),Se&&$.fog===!0&&Ae.refreshFogUniforms(hn,Se),Ae.refreshMaterialUniforms(hn,$,z,le,g.state.transmissionRenderTarget[A.id]),Yl.upload(O,la($e),hn,b)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Yl.upload(O,la($e),hn,b),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&bt.setValue(O,"center",Y.center),bt.setValue(O,"modelViewMatrix",Y.modelViewMatrix),bt.setValue(O,"normalMatrix",Y.normalMatrix),bt.setValue(O,"modelMatrix",Y.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const un=$.uniformsGroups;for(let rn=0,yt=un.length;rn<yt;rn++){const di=un[rn];G.update(di,dn),G.bind(di,dn)}}return dn}function ca(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function iu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,W,Q){We.get(A.texture).__webglTexture=W,We.get(A.depthTexture).__webglTexture=Q;const $=We.get(A);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Q===void 0,$.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const Q=We.get(A);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0};const fa=O.createFramebuffer();this.setRenderTarget=function(A,W=0,Q=0){X=A,k=W,N=Q;let $=!0,Y=null,Se=!1,Ce=!1;if(A){const ze=We.get(A);if(ze.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(O.FRAMEBUFFER,null),$=!1;else if(ze.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(ze.__hasExternalTextures)b.rebindTextures(A,We.get(A.texture).__webglTexture,We.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ve=A.depthTexture;if(ze.__boundDepthTexture!==Ve){if(Ve!==null&&We.has(Ve)&&(A.width!==Ve.image.width||A.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const tt=A.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ce=!0);const Je=We.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[W])?Y=Je[W][Q]:Y=Je[W],Se=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?Y=We.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?Y=Je[Q]:Y=Je,B.copy(A.viewport),oe.copy(A.scissor),te=A.scissorTest}else B.copy(I).multiplyScalar(z).floor(),oe.copy(ne).multiplyScalar(z).floor(),te=Ne;if(Q!==0&&(Y=fa),je.bindFramebuffer(O.FRAMEBUFFER,Y)&&$&&je.drawBuffers(A,Y),je.viewport(B),je.scissor(oe),je.setScissorTest(te),Se){const ze=We.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,ze.__webglTexture,Q)}else if(Ce){const ze=We.get(A.texture),tt=W;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,ze.__webglTexture,Q,tt)}else if(A!==null&&Q!==0){const ze=We.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ze.__webglTexture,Q)}P=-1},this.readRenderTargetPixels=function(A,W,Q,$,Y,Se,Ce){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){je.bindFramebuffer(O.FRAMEBUFFER,Le);try{const ze=A.texture,tt=ze.format,Je=ze.type;if(!ct.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-$&&Q>=0&&Q<=A.height-Y&&O.readPixels(W,Q,$,Y,it.convert(tt),it.convert(Je),Se)}finally{const ze=X!==null?We.get(X).__webglFramebuffer:null;je.bindFramebuffer(O.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,W,Q,$,Y,Se,Ce){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){const ze=A.texture,tt=ze.format,Je=ze.type;if(!ct.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-$&&Q>=0&&Q<=A.height-Y){je.bindFramebuffer(O.FRAMEBUFFER,Le);const Ve=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ve),O.bufferData(O.PIXEL_PACK_BUFFER,Se.byteLength,O.STREAM_READ),O.readPixels(W,Q,$,Y,it.convert(tt),it.convert(Je),0);const _t=X!==null?We.get(X).__webglFramebuffer:null;je.bindFramebuffer(O.FRAMEBUFFER,_t);const st=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await yy(O,st,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ve),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Se),O.deleteBuffer(Ve),O.deleteSync(st),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,Q=0){A.isTexture!==!0&&(Ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const $=Math.pow(2,-Q),Y=Math.floor(A.image.width*$),Se=Math.floor(A.image.height*$),Ce=W!==null?W.x:0,Le=W!==null?W.y:0;b.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,Ce,Le,Y,Se),je.unbindTexture()};const da=O.createFramebuffer(),ha=O.createFramebuffer();this.copyTextureToTexture=function(A,W,Q=null,$=null,Y=0,Se=null){A.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1],W=arguments[2],Se=arguments[3]||0,Q=null),Se===null&&(Y!==0?(Ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=Y,Y=0):Se=0);let Ce,Le,ze,tt,Je,Ve,_t,st,Vt;const Ot=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(Q!==null)Ce=Q.max.x-Q.min.x,Le=Q.max.y-Q.min.y,ze=Q.isBox3?Q.max.z-Q.min.z:1,tt=Q.min.x,Je=Q.min.y,Ve=Q.isBox3?Q.min.z:0;else{const nn=Math.pow(2,-Y);Ce=Math.floor(Ot.width*nn),Le=Math.floor(Ot.height*nn),A.isDataArrayTexture?ze=Ot.depth:A.isData3DTexture?ze=Math.floor(Ot.depth*nn):ze=1,tt=0,Je=0,Ve=0}$!==null?(_t=$.x,st=$.y,Vt=$.z):(_t=0,st=0,Vt=0);const vt=it.convert(W.format),$e=it.convert(W.type);let Gt;W.isData3DTexture?(b.setTexture3D(W,0),Gt=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(b.setTexture2DArray(W,0),Gt=O.TEXTURE_2D_ARRAY):(b.setTexture2D(W,0),Gt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const gt=O.getParameter(O.UNPACK_ROW_LENGTH),dn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ki=O.getParameter(O.UNPACK_SKIP_PIXELS),En=O.getParameter(O.UNPACK_SKIP_ROWS),wi=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ot.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ot.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,tt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Je),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ve);const bt=A.isDataArrayTexture||A.isData3DTexture,hn=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const nn=We.get(A),un=We.get(W),rn=We.get(nn.__renderTarget),yt=We.get(un.__renderTarget);je.bindFramebuffer(O.READ_FRAMEBUFFER,rn.__webglFramebuffer),je.bindFramebuffer(O.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let di=0;di<ze;di++)bt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,We.get(A).__webglTexture,Y,Ve+di),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,We.get(W).__webglTexture,Se,Vt+di)),O.blitFramebuffer(tt,Je,Ce,Le,_t,st,Ce,Le,O.DEPTH_BUFFER_BIT,O.NEAREST);je.bindFramebuffer(O.READ_FRAMEBUFFER,null),je.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||We.has(A)){const nn=We.get(A),un=We.get(W);je.bindFramebuffer(O.READ_FRAMEBUFFER,da),je.bindFramebuffer(O.DRAW_FRAMEBUFFER,ha);for(let rn=0;rn<ze;rn++)bt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,nn.__webglTexture,Y,Ve+rn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,nn.__webglTexture,Y),hn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,un.__webglTexture,Se,Vt+rn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,un.__webglTexture,Se),Y!==0?O.blitFramebuffer(tt,Je,Ce,Le,_t,st,Ce,Le,O.COLOR_BUFFER_BIT,O.NEAREST):hn?O.copyTexSubImage3D(Gt,Se,_t,st,Vt+rn,tt,Je,Ce,Le):O.copyTexSubImage2D(Gt,Se,_t,st,tt,Je,Ce,Le);je.bindFramebuffer(O.READ_FRAMEBUFFER,null),je.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else hn?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Gt,Se,_t,st,Vt,Ce,Le,ze,vt,$e,Ot.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(Gt,Se,_t,st,Vt,Ce,Le,ze,vt,Ot.data):O.texSubImage3D(Gt,Se,_t,st,Vt,Ce,Le,ze,vt,$e,Ot):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Se,_t,st,Ce,Le,vt,$e,Ot.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Se,_t,st,Ot.width,Ot.height,vt,Ot.data):O.texSubImage2D(O.TEXTURE_2D,Se,_t,st,Ce,Le,vt,$e,Ot);O.pixelStorei(O.UNPACK_ROW_LENGTH,gt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,dn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ki),O.pixelStorei(O.UNPACK_SKIP_ROWS,En),O.pixelStorei(O.UNPACK_SKIP_IMAGES,wi),Se===0&&W.generateMipmaps&&O.generateMipmap(Gt),je.unbindTexture()},this.copyTextureToTexture3D=function(A,W,Q=null,$=null,Y=0){return A.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,$=arguments[1]||null,A=arguments[2],W=arguments[3],Y=arguments[4]||0),Ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,Q,$,Y)},this.initRenderTarget=function(A){We.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),je.unbindTexture()},this.resetState=function(){k=0,N=0,X=null,je.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}const lg={type:"change"},Ad={type:"start"},r_={type:"end"},kl=new Ed,ug=new Er,kw=Math.cos(70*vy.DEG2RAD),Jt=new J,Nn=2*Math.PI,Ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gf=1e-6;class Bw extends eS{constructor(e,t=null){super(e,t),this.state=Ct.NONE,this.enabled=!0,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qs.ROTATE,MIDDLE:qs.DOLLY,RIGHT:qs.PAN},this.touches={ONE:js.ROTATE,TWO:js.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new rs,this._lastTargetPosition=new J,this._quat=new rs().setFromUnitVectors(e.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fm,this._sphericalDelta=new Fm,this._scale=1,this._panOffset=new J,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new J,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Hw.bind(this),this._onPointerDown=zw.bind(this),this._onPointerUp=Vw.bind(this),this._onContextMenu=qw.bind(this),this._onMouseWheel=Xw.bind(this),this._onKeyDown=Yw.bind(this),this._onTouchStart=jw.bind(this),this._onTouchMove=$w.bind(this),this._onMouseDown=Gw.bind(this),this._onMouseMove=Ww.bind(this),this._interceptControlDown=Kw.bind(this),this._interceptControlUp=Zw.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lg),this.update(),this.state=Ct.NONE}update(e=null){const t=this.object.position;Jt.copy(t).sub(this.target),Jt.applyQuaternion(this._quat),this._spherical.setFromVector3(Jt),this.autoRotate&&this.state===Ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(s)&&isFinite(a)&&(s<-Math.PI?s+=Nn:s>Math.PI&&(s-=Nn),a<-Math.PI?a+=Nn:a>Math.PI&&(a-=Nn),s<=a?this._spherical.theta=Math.max(s,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+a)/2?Math.max(s,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=c!=this._spherical.radius}if(Jt.setFromSpherical(this._spherical),Jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const f=Jt.length();c=this._clampDistance(f*this._scale);const h=f-c;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),l=!!h}else if(this.object.isOrthographicCamera){const f=new J(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=h!==this.object.zoom;const p=new J(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(f),this.object.updateMatrixWorld(),c=Jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(kl.origin.copy(this.object.position),kl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(kl.direction))<kw?this.object.lookAt(this.target):(ug.setFromNormalAndCoplanarPoint(this.object.up,this.target),kl.intersectPlane(ug,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>gf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gf||this._lastTargetPosition.distanceToSquared(this.target)>gf?(this.dispatchEvent(lg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Nn/60*this.autoRotateSpeed*e:Nn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Jt.setFromMatrixColumn(t,0),Jt.multiplyScalar(-e),this._panOffset.add(Jt)}_panUp(e,t){this.screenSpacePanning===!0?Jt.setFromMatrixColumn(t,1):(Jt.setFromMatrixColumn(t,0),Jt.crossVectors(this.object.up,Jt)),Jt.multiplyScalar(e),this._panOffset.add(Jt)}_pan(e,t){const s=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Jt.copy(a).sub(this.target);let l=Jt.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/s.clientHeight,this.object.matrix),this._panUp(2*t*l/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),a=e-s.left,l=t-s.top,c=s.width,f=s.height;this._mouse.x=a/c*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(s,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(s,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(s*s+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),a=.5*(e.pageX+s.x),l=.5*(e.pageY+s.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(s,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(s*s+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,f=(e.pageY+t.y)*.5;this._updateZoomParameters(c,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ut,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function zw(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function Hw(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Vw(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(r_),this.state=Ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Gw(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case qs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ct.DOLLY;break;case qs.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ct.ROTATE}break;case qs.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ct.PAN}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(Ad)}function Ww(r){switch(this.state){case Ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Xw(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ct.NONE||(r.preventDefault(),this.dispatchEvent(Ad),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(r_))}function Yw(r){this.enabled!==!1&&this._handleKeyDown(r)}function jw(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case js.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ct.TOUCH_ROTATE;break;case js.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ct.TOUCH_PAN;break;default:this.state=Ct.NONE}break;case 2:switch(this.touches.TWO){case js.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ct.TOUCH_DOLLY_PAN;break;case js.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ct.TOUCH_DOLLY_ROTATE;break;default:this.state=Ct.NONE}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(Ad)}function $w(r){switch(this._trackPointer(r),this.state){case Ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ct.NONE}}function qw(r){this.enabled!==!1&&r.preventDefault()}function Kw(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zw(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Qw=75,Jw=1.5,e1=.1,t1=5,n1=1,i1=1,r1=1,cg=new Map([["Сторона 1","#4DA9C2"],["Сторона 2","#00A86B"],["Сторона 3","#A496BE"],["Сторона 4","#D6ADCC"],["Сторона 5","#D19C7C"],["Сторона 6","#E37E5E"]]),s1=(r,e)=>{const t=document.createElement("canvas"),s=t.getContext("2d"),a=512;return t.width=a,t.height=a,s.fillStyle=e,s.fillRect(0,0,a,a),s.fillStyle="#000000",s.font="bold 48px Arial",s.textAlign="center",s.textBaseline="middle",s.fillText(r,a/2,a/2),new $y(t)},o1=({setData:r})=>{const e=de.useRef(null),t=ld(),s=de.useRef(null);return de.useEffect(()=>{const a=new Xy,l=document.getElementById("c");e.current||(e.current=new Ow({canvas:l}));const c=new Qn(Qw,Jw,e1,t1),f=new Bw(c,e.current.domElement);f.enableZoom=!1,f.enablePan=!1;const h=new Jy,p=new ut,_=()=>{if(s.current&&e.current){const{width:y,height:g}=s.current.getBoundingClientRect();e.current.setSize(y,g)}};_(),window.addEventListener("resize",_);function x(y){const g=e.current.domElement.getBoundingClientRect();p.x=(y.clientX-g.left)/g.width*2-1,p.y=-((y.clientY-g.top)/g.height)*2+1,h.setFromCamera(p,c);const D=h.intersectObjects(a.children);if(D.length>0){const L=Math.floor(D[0].face.materialIndex),C=Array.from(cg.keys())[L],V={id:L,UUID:`${D[0].object.uuid}`,text:`${C}`,top:y.clientY-g.top,left:y.clientX-g.left};localStorage.setItem("cubeData",JSON.stringify(V)),r(V),t(`/side/:${L}`)}}window.addEventListener("dblclick",x),e.current.setClearColor(0,0);const v=[];cg.forEach((y,g)=>{v.push(new Td({map:s1(g,y)}))});const S=new uo(n1,i1,r1),E=new xi(S,v);a.add(E),c.position.z=2;function T(y){y*=2e-4,E.rotation.x=y,E.rotation.y=y;const g=e.current.domElement;c.aspect=g.clientWidth/g.clientHeight,c.updateProjectionMatrix(),e.current.render(a,c),requestAnimationFrame(T)}return requestAnimationFrame(T),()=>{window.removeEventListener("resize",_)}},[]),Ft.jsx("div",{className:"three",ref:s,children:Ft.jsx("canvas",{id:"c"})})};function a1({data:r}){return Ft.jsxs("div",{className:"info-star",children:[Ft.jsxs("p",{children:["ID элемента: ",r.id]}),Ft.jsxs("p",{children:["UUID стороны: ",r.UUID]}),Ft.jsxs("p",{children:["Текст на стороне кубика: ",r.text]}),Ft.jsxs("p",{children:["Верхний отступ от родителя: ",Math.round(r.top)," px"]}),Ft.jsxs("p",{children:["Левый отступ от родителя: ",Math.round(r.left)," px"]})]})}function l1(){const r=localStorage.getItem("cubeData"),[e,t]=de.useState(r?JSON.parse(r):{id:0,UUID:"",text:"",top:0,left:0}),s=ld(),a=Pr();return Ft.jsxs("div",{className:"for-task",children:[Ft.jsx("div",{className:"btn-box_links",children:a.pathname!=="/"?Ft.jsx("button",{className:"btn-back",onClick:()=>s("/"),children:"Назад"}):Ft.jsx(Ft.Fragment,{})}),Ft.jsx("div",{className:"container",children:a.pathname==="/"?Ft.jsx(o1,{setData:t}):Ft.jsxs(Ft.Fragment,{children:[Ft.jsx("div",{className:"shema",style:{left:`${e.left-15}px`,top:`${e.top-15}px`}}),Ft.jsx(a1,{data:e})]})})]})}function u1(){return Ft.jsx(rx,{basename:"/react3d/",children:Ft.jsx(I0,{children:Ft.jsx(Eg,{path:"/*",element:Ft.jsx(l1,{})})})})}Wv.createRoot(document.getElementById("root")).render(Ft.jsx(de.StrictMode,{children:Ft.jsx(u1,{})}));

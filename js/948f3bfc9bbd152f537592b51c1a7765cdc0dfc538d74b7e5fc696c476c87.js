!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=477)}({19:function(e,t){e.exports=jQuery},477:function(e,t,n){"use strict";n.r(t);var o=n(19),r=n.n(o);function i(e,t){return"storage."+e+"_"+t}function a(){return S.IsAvailable()}var s,u,l,c,f,m,d,g,b,I,x,v,p,w,S={IsAvailable:function(){return function(){var e="roblox";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}()},Subscribe:function(t,e,n){var o=i(t,e);r()(window).unbind(o).bind(o,function(e){e.originalEvent.key===t&&n(e.originalEvent.newValue)})},Unsubscribe:function(e,t){var n=i(e,t);r()(window).unbind(n)},Publish:function(e,t){localStorage.removeItem(e),localStorage.setItem(e,t)}},h="Roblox.CrossTabCommunication.Kingmaker",y={masterId:h+".masterId",electionInProgress:h+".electionInProgress",masterIdRequest:h+".masterIdRequest",masterIdResponse:h+".masterIdResponse",masterLastResponseTime:h+".masterLastResponseTime"},R="q",P=[],T=[];function M(e){for(var t=T.slice(0),n=0;n<t.length;n++)try{t[n](e)}catch(e){}}function D(){return Date.now().toString()}function O(){M("Master is:"+u)}function j(e){M("Announcing: Is this tab the master? "+e);for(var t=P.slice(0),n=0;n<t.length;n++)try{t[n](e)}catch(e){M("Error running subscribed election result handler: "+JSON.stringify(e))}}function C(){M("Declaring myself as the master"+u),u=p,l=!0,S.Publish(y.masterId,u),localStorage.removeItem(y.electionInProgress),j(!0),r()(window).unbind("unload."+h).bind("unload."+h,function(){localStorage.getItem(y.masterId)})}function _(){var e=localStorage.getItem(y.electionInProgress),t=parseInt(e);e&&Date.now()-t>b&&localStorage.removeItem(y.electionInProgress),window.setTimeout(_,b)}function L(){var e=localStorage.getItem(y.electionInProgress);u="",e?(M("Election already in progress"),window.setTimeout(function(){0===u.length?C():u!==p&&j(!1),O()},v)):(M("Election not in progress"),localStorage.setItem(y.electionInProgress,D()),0===u.length?C():u!==p&&j(!1),O())}function q(){M("Checking if Master still active"),!0===l||Date.now()-f<=m||(s="",S.Publish(y.masterIdRequest,R),window.setTimeout(function(){if(0===s.length){if(!0===l||Date.now()-f<=m)return void C();M("Master did not respond. Initiating election"),L()}else u!==s&&(j(!1),u=s,O())},x))}function A(){c&&clearTimeout(c),c=window.setTimeout(function(){!1===l?q():localStorage.setItem(y.masterLastResponseTime,D()),A()},I)}w=(new Date).getTime(),p="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=(w+16*Math.random())%16|0;return w=Math.floor(w/16),("x"===e?t:3&t|8).toString(16)}),s="",l=!1,c=u=null,f=Date.now()-1e4,m=2500,d=2e4,g=Math.floor(100*Math.random()+1),b=500,I=2e3+g,x=1500+g,v=400+g,r()(function(){a()&&function(){var e=localStorage.getItem(y.masterId);M("Binding to events"),S.Subscribe(y.masterIdRequest,h,function(e){!0===l&&e===R&&(M("Query Received - Confirming Still Master"),S.Publish(y.masterIdResponse,p),localStorage.setItem(y.masterLastResponseTime,D()))}),S.Subscribe(y.masterId,h,function(e){if(e){M("Received Notice Of Master"),f=Date.now();var t=l;0==(l=(u=e)===p)&&t&&(j(!1),A()),!0!==l||t||C(),localStorage.removeItem(y.electionInProgress),O()}}),S.Subscribe(y.masterIdResponse,h,function(e){e?(M("Master Responded to Query"),f=Date.now(),s=e,A()):M("Master Responded to Query - no message")});var t=localStorage.getItem(y.masterLastResponseTime);f=t&&0!==t.length?parseInt(t):0,e?e===p?l=!0:0<f&&Date.now()-f>d?L():q():L(),window.setTimeout(function(){_()},b),A()}()});var E={IsAvailable:a,IsMasterTab:function(){return l},SubscribeToMasterChange:function(e){P.push(e)},AttachLogger:function(e){T.push(e)}};window.Roblox=window.Roblox||{},window.Roblox.CrossTabCommunication={PubSub:S,Kingmaker:E}}});
//# sourceMappingURL=https://js.rbxcdn.com/c57ccb57cd4224a8387d-crossTabCommunication.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("CrossTabCommunication");
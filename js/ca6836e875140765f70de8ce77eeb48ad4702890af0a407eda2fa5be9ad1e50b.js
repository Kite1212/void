!function(){var n={907:function(e,t,n){var r={"./2dThumbnailComponent.js":401};function a(e){e=i(e);return n(e)}function i(e){if(n.o(r,e))return r[e];e=new Error("Cannot find module '"+e+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=function(){return Object.keys(r)},a.resolve=i,(e.exports=a).id=907},441:function(e,t,n){var r={"./thumbnailConstants.js":846};function a(e){e=i(e);return n(e)}function i(e){if(n.o(r,e))return r[e];e=new Error("Cannot find module '"+e+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=function(){return Object.keys(r)},a.resolve=i,(e.exports=a).id=441},297:function(e,t,n){var r={"./2dThumbnailController.js":162};function a(e){e=i(e);return n(e)}function i(e){if(n.o(r,e))return r[e];e=new Error("Cannot find module '"+e+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=function(){return Object.keys(r)},a.resolve=i,(e.exports=a).id=297},484:function(e,t,n){var r={"./imageLoadDirective.js":912,"./thumbnailErrorDirective.js":906};function a(e){e=i(e);return n(e)}function i(e){if(n.o(r,e))return r[e];e=new Error("Cannot find module '"+e+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=function(){return Object.keys(r)},a.resolve=i,(e.exports=a).id=484},44:function(e,t,n){var r={"./thumbnailService.js":270};function a(e){e=i(e);return n(e)}function i(e){if(n.o(r,e))return r[e];e=new Error("Cannot find module '"+e+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=function(){return Object.keys(r)},a.resolve=i,(e.exports=a).id=44},671:function(e,t,n){var r={"./components/templates/2dThumbnail.html":393};function a(e){e=i(e);return n(e)}function i(e){if(n.o(r,e))return r[e];e=new Error("Cannot find module '"+e+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=function(){return Object.keys(r)},a.resolve=i,(e.exports=a).id=671},544:function(e){function i(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function o(e){return e.split("/").pop().replace(".html","")}var t={importFilesUnderPath:function(e){e.keys().forEach(e)},templateCacheGenerator:function(e,t,r,a){return e.module(t,[]).run(["$templateCache",function(n){r&&r.keys().forEach(function(e){var t=i(o(e));n.put(t,r(e))}),a&&a.keys().forEach(function(e){var t=i(o(e));n.put(t,a(e).replace(/<\/?script[^>]*>/gi,""))})}])}};e.exports=t},401:function(e,t,n){"use strict";n.r(t);var r={templateUrl:"2d-thumbnail",bindings:{thumbnailType:"<",thumbnailTargetId:"<",thumbnailOptions:"<?",onSuccess:"<",onFailure:"<",altName:"<"},controller:"2dThumbnailController"};n(809).Z.component("thumbnail2d",r),t.default=r},846:function(e,t,n){"use strict";n.r(t);var r=n(613),n=n(809),r={thumbnailTypes:r.ThumbnailTypes,thumbnailStates:r.ThumbnailStates,formats:r.ThumbnailFormat,avatarHeadshotSize:r.ThumbnailAvatarHeadshotSize,gameIconSize:r.ThumbnailGameIconSize,thumbnailAvatarsSize:r.ThumbnailAvatarsSize};n.Z.constant("thumbnailConstants",r),t.default=r},162:function(e,t,n){"use strict";n.r(t);var o=n(613),n=n(809);function r(e,n){var r=this,a="",i=o.ThumbnailStates;r.getCssClasses=function(){return r.isThumbnailRequestSending?"shimmer":n.getCssClass(r.thumbnailState)},r.setThumbnailLoadFailed=function(){},r.isLazyLoadingEnabled=function(){return r.thumbnailOptions&&r.thumbnailOptions.isLazyLoading};function t(){var e,t="".concat(r.thumbnailType,":").concat(r.thumbnailTargetId);a!==t&&(a=t,r.thumbnailState=i.loading,t=(null===(e=r.thumbnailOptions)||void 0===e?void 0:e.size)||o.DefaultThumbnailSize,e=(null===(e=r.thumbnailOptions)||void 0===e?void 0:e.format)||o.DefaultThumbnailFormat,r.isThumbnailRequestSending=!0,n.getThumbnailImage(r.thumbnailType,r.thumbnailTargetId,t,e).then(function(e){var t=e.thumbnail,n=t.state,t=t.imageUrl,e=e.performance;r.thumbnailState=n,r.thumbnailUrl=t,r.onSuccess&&r.onSuccess(e)}).catch(function(e){r.thumbnailState=i.error,r.onFailure&&r.onFailure(e)}).finally(function(){r.isThumbnailRequestSending=!1}))}r.$onInit=t,r.$onChanges=t}r.$inject=["$scope","thumbnailService"],n.Z.controller("2dThumbnailController",r),t.default=r},912:function(e,t,n){"use strict";function r(){return{restrict:"A",link:function(e,t){t.bind("load",function(){e.$evalAsync(function(){e.isLoaded=!0})})}}}n.r(t),n(809).Z.directive("imageLoad",r),t.default=r},906:function(e,t,n){"use strict";function r(){return{scope:{thumbnailError:"<"},link:function(e,t){t.on("error",e.thumbnailError)}}}n.r(t),n(809).Z.directive("thumbnailError",r),t.default=r},270:function(e,t,n){"use strict";n.r(t);var i=n(394),n=n(809);function r(e){return{getThumbnailImage:function(n,r,a){return e(function(t,e){i.Z.getThumbnailImage(n,a,null,r).then(function(e){t(e)}).catch(e)})},getCssClass:function(e){return i.Z.getCssClass(e)},reloadThumbnailImage:function(n,r,a){return e(function(t,e){i.Z.reloadThumbnailImage(n,a,null,r).then(function(e){t(e)}).catch(e)})}}}r.$inject=["$q"],n.Z.factory("thumbnailService",r),t.default=r},809:function(e,t,n){"use strict";var r=n(734),r=n.n(r)().module("thumbnails",["robloxApp","thumbnailsTemplates","angularLazyImg"]);t.Z=r},999:function(){angular.module("angularLazyImg",[]).factory("LazyImgMagic",["$window","$rootScope","lazyImgConfig","lazyImgHelpers",function(e,r,t,n){"use strict";var a,i,o,u,s,l,c,m;function h(){for(var e=o.length-1;0<=e;e--){var t=o[e];t&&n.isElementInView(t.$elem[0],s.offset,a)&&(function(n){var e=new Image;e.onerror=function(){s.errorClass&&n.$elem.addClass(s.errorClass),r.$emit("lazyImg:error",n),s.onError(n)},e.onload=function(){var e,t;e=n.$elem,t=n.src,"img"===e[0].nodeName.toLowerCase()?e[0].src=t:e.css("background-image",'url("'+t+'")'),n.$elem.removeClass(s.loadingClass),s.successClass&&n.$elem.addClass(s.successClass),r.$emit("lazyImg:success",n),s.onSuccess(n)},e.src=n.src}(t),o.splice(e,1))}0===o.length&&d()}function f(t){m.forEach(function(e){e[t]("scroll",l),e[t]("touchmove",l)}),i[t]("resize",l),i[t]("resize",c)}function b(){u=!0,setTimeout(function(){h(),f("on")},1)}function d(){u=!1,f("off")}function p(e){e.addClass(s.loadingClass),this.$elem=e}return u=!(o=[]),s=t.getOptions(),i=angular.element(e),a=n.getWinDimensions(),c=n.throttle(function(){a=n.getWinDimensions()},60),m=[s.container||i],l=n.throttle(h,30),p.prototype.setSource=function(e){this.src=e,o.unshift(this),u||b()},p.prototype.removeImage=function(){var e;e=this,-1!==(e=o.indexOf(e))&&o.splice(e,1),0===o.length&&d()},p.prototype.checkImages=function(){h()},p.addContainer=function(e){d(),m.push(e),b()},p.removeContainer=function(e){d(),m.splice(m.indexOf(e),1),b()},p}]).provider("lazyImgConfig",function(){"use strict";this.options={offset:100,errorClass:null,successClass:null,onError:function(){},onSuccess:function(){},loadingClass:"icon-placeholder-game"},this.$get=function(){var e=this.options;return{getOptions:function(){return e}}},this.setOptions=function(e){angular.extend(this.options,e)}}).factory("lazyImgHelpers",["$window",function(e){"use strict";return{isElementInView:function(e,t,n){var r=e.getBoundingClientRect(),a=n.height+t;return e.offsetParent&&0<=r.left&&r.right<=n.width+t&&(0<=r.top&&r.top<=a||r.bottom<=a&&r.bottom>=0-t)},getWinDimensions:function(){return{height:e.innerHeight,width:e.innerWidth}},throttle:function(r,a,i){var o,u;return function(){var e=i||this,t=+new Date,n=arguments;o&&t<o+a?(clearTimeout(u),u=setTimeout(function(){o=t,r.apply(e,n)},a)):(o=t,r.apply(e,n))}}}}]).directive("lazyImg",["$rootScope","LazyImgMagic",function(a,i){"use strict";return{link:function(e,t,n){var r=new i(t);n.$observe("lazyImg",function(e){e&&r.setSource(e)}),e.$on("$destroy",function(){r.removeImage()}),a.$on("lazyImg.runCheck",function(){r.checkImages()}),a.$on("lazyImg:refresh",function(){r.checkImages()})},restrict:"A"}}]).directive("lazyImgContainer",["LazyImgMagic",function(n){"use strict";return{link:function(e,t){n.addContainer(t),e.$on("$destroy",function(){n.removeContainer(t)})},restrict:"A"}}])},779:function(e,t){var n;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
!function(){"use strict";var o={}.hasOwnProperty;function u(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r,a=typeof n;if("string"==a||"number"==a)e.push(n);else if(Array.isArray(n))!n.length||(r=u.apply(null,n))&&e.push(r);else if("object"==a)if(n.toString===Object.prototype.toString||n.toString.toString().includes("[native code]"))for(var i in n)o.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(u.default=u,e.exports=u):void 0===(n=function(){return u}.apply(t,[]))||(e.exports=n)}()},393:function(e){e.exports='<span ng-class="$ctrl.getCssClasses()" class="thumbnail-2d-container" thumbnail-type="{{ $ctrl.thumbnailType }}" thumbnail-target-id="{{ $ctrl.thumbnailTargetId }}"> <img ng-if="$ctrl.thumbnailUrl && !$ctrl.isLazyLoadingEnabled()" ng-src="{{ $ctrl.thumbnailUrl }}" thumbnail-error="$ctrl.setThumbnailLoadFailed" ng-class="{\'loading\': $ctrl.thumbnailUrl && !isLoaded }" image-load alt="{{$ctrl.altName}}" title="{{$ctrl.altName}}"/> <img ng-if="$ctrl.thumbnailUrl && $ctrl.isLazyLoadingEnabled()" lazy-img="{{ $ctrl.thumbnailUrl }}" thumbnail-error="$ctrl.setThumbnailLoadFailed"/> </span> '},613:function(e,t,n){"use strict";n.r(t),n.d(t,{BatchRequestError:function(){return r},DEFAULT_META_DATA:function(){return P},DefaultBatchSize:function(){return s},DefaultThumbnailFormat:function(){return w},DefaultThumbnailSize:function(){return C},FeatureName:function(){return I},LoadFailureMetricsType:function(){return E},LoadFailureName:function(){return z},LoadRetrySuccessName:function(){return O},LoadSuccessMetricsType:function(){return A},LoadSuccessName:function(){return x},RetryPerThumbnailType:function(){return R},ReturnPolicy:function(){return S},RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum:function(){return a},ThumbnailAssetsSize:function(){return m},ThumbnailAvatarHeadshotSize:function(){return f},ThumbnailAvatarsSize:function(){return h},ThumbnailBadgeIconSize:function(){return d},ThumbnailCooldown:function(){return u},ThumbnailDeveloperProductIconSize:function(){return p},ThumbnailFormat:function(){return v},ThumbnailGameIconSize:function(){return l},ThumbnailGamePassIconSize:function(){return c},ThumbnailGameThumbnailSize:function(){return g},ThumbnailGroupIconSize:function(){return b},ThumbnailMetadataUrl:function(){return o},ThumbnailStates:function(){return T},ThumbnailTypes:function(){return i},ThumbnailUniverseThumbnailSize:function(){return y}});var r,a,i,o=Roblox.EnvironmentUrls.thumbnailsApi+"/v1/metadata";(t=r=r||{}).processFailure="processFailure",t.unretriableFailure="unretriableFailure",t.maxAttemptsReached="maxAttemptsReached",(t=a=a||{}).Avatar="Avatar",t.AvatarHeadShot="AvatarHeadShot",t.GameIcon="GameIcon",t.BadgeIcon="BadgeIcon",t.GameThumbnail="GameThumbnail",t.GamePass="GamePass",t.Asset="Asset",t.BundleThumbnail="BundleThumbnail",t.Outfit="Outfit",t.GroupIcon="GroupIcon",t.DeveloperProduct="DeveloperProduct",t.PlaceIcon="PlaceIcon",(t=i=i||{}).avatar="Avatar",t.avatarHeadshot="AvatarHeadshot",t.gameIcon="GameIcon",t.gameThumbnail="GameThumbnail",t.badgeIcon="BadgeIcon",t.gamePassIcon="GamePass",t.assetThumbnail="Asset",t.bundleThumbnail="BundleThumbnail",t.userOutfit="Outfit",t.groupIcon="GroupIcon",t.developerProductIcon="DeveloperProduct",t.universeThumbnail="UniverseThumbnail",t.universeThumbnails="UniverseThumbnails",t.placeGameIcon="PlaceGameIcon";var u,s=100;(t=u=u||{})[t.maxRetryAttempts=10]="maxRetryAttempts",t[t.minCooldown=1e3]="minCooldown",t[t.maxCooldown=3e4]="maxCooldown";var l,c,m,h,f,b,d,p,g,y,T,v,S,C="150x150",w="png";(t=l=l||{}).size50="50x50",t.size150="150x150",t.size512="512x512",(c=c||{}).size150="150x150",(t=m=m||{}).size150="150x150",t.size420="420x420",(t=h=h||{}).size100="100x100",t.size352="352x352",t.size720="720x720",(t=f=f||{}).size48="48x48",t.size60="60x60",t.size150="150x150",(t=b=b||{}).size150="150x150",t.size420="420x420",(d=d||{}).size150="150x150",(p=p||{}).size150="150x150",(t=g=g||{}).width768="768x432",t.width576="576x324",t.width480="480x270",t.width384="384x216",t.width256="256x144",(t=y=y||{}).width768="768x432",t.width576="576x324",t.width480="480x270",t.width384="384x216",t.width256="256x144",(t=T=T||{}).error="Error",t.complete="Completed",t.inReview="InReview",t.pending="Pending",t.blocked="Blocked",(t=v=v||{}).png="png",t.jpg="jpg",t.jpeg="jpeg",(t=S=S||{}).PlaceHolder="PlaceHolder",t.AutoGenerated="AutoGenerated",t.ForceAutoGenerated="ForceAutoGenerated";var I="Thumbnail2DWeb",x="LoadSuccess",O="RetryLoadSuccess",R="RetryPerThumbnailType",A="Sequence",z="LoadFailure",E="Counter",P={thumbnailMetricsSampleSize:10,isWebappUseCacheEnabled:!1,webappCacheExpirationTimespan:"00:00:00",requestMinCooldown:1e3,requestMaxCooldown:3e3,requestMaxRetryAttempts:5,requestBatchSize:100,concurrentThumbnailRequestCount:1}},394:function(e,t,n){"use strict";function i(t,e,n,r,a,i){return void 0===n&&(n=o.ThumbnailFormat.jpeg),r||a?t?(t!==o.ThumbnailTypes.gameIcon&&t!==o.ThumbnailTypes.gameThumbnail&&t!==o.ThumbnailTypes.placeGameIcon&&t!==o.ThumbnailTypes.universeThumbnail||(n=o.ThumbnailFormat.png),n={targetId:r,token:a,type:t,format:n,size:e},e=[o.ThumbnailTypes.universeThumbnails,o.ThumbnailTypes.universeThumbnail].includes(t)?"universeThumbnailProcessor":"thumbnail2dProcessor",l.processThumbnailBatchRequest(n,function(e){return t===o.ThumbnailTypes.universeThumbnail?s.handle(e,1):t===o.ThumbnailTypes.universeThumbnails?s.handle(e,10):u.handle(e)},e,i)):new Promise(function(e,t){t(new Error("ThumbnailType can not be empty."))}):new Promise(function(e,t){t(new Error("TargetId or token can not be empty."))})}var r=n(618),a=n(580),o=n(613),u=a.Z.batchRequestHandler,s=a.Z.universeThumbnailHandler,l=r.Z.defaultThumbnailRequester;t.Z=(null===(t=window.RobloxThumbnails)||void 0===t?void 0:t.thumbnailService)||{getThumbnailImage:function(e,t,n,r,a){return void 0===n&&(n=o.ThumbnailFormat.jpeg),i(e,t,n,r,a,!1)},getCssClass:function(e){return{"icon-broken":e===o.ThumbnailStates.error,"icon-in-review":e===o.ThumbnailStates.inReview,"icon-blocked":e===o.ThumbnailStates.blocked,"icon-pending":e===o.ThumbnailStates.pending}},reloadThumbnailImage:function(e,t,n,r,a){return void 0===n&&(n=o.ThumbnailFormat.jpeg),i(e,t,n,r,a,!0)}}},580:function(e,t,n){"use strict";n.d(t,{o:function(){return m}});var r=n(292),a=n(979),u=n(613),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=function(e,t){var n={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},o=a.Z.transformThumbnailType,l=r.dataStores.thumbnailsDataStore,c=r.dataStores.gameThumbnailsDataStore,m=(h.prototype.handle=function(a,i){var o=this;return new Promise(function(t){o.storeInstance(a,i).then(function(e){var n=new Map,r={};(null!==(e=null===(e=null==e?void 0:e.data)||void 0===e?void 0:e.data)&&void 0!==e?e:new Array).forEach(function(e){n.set(o.keySetter(e),e)}),a.forEach(function(e){var t,e=o.keyGetter(e);n.has(e)?(t=n.get(e))&&o.validator(t)&&(r[e]=o.resultSetter(t,i)):(t={},t=i&&1<i?{thumbnails:[]}:{thumbnail:{targetId:e,state:u.ThumbnailStates.error}},r[e]=s(s({},t),{errorcode:3,errorMessage:"id doesn't exist"}))}),t(r)}).catch(function(){t({})})})},h);function h(e,t,n,r,a){this.storeInstance=e,this.keySetter=t,this.keyGetter=n,this.validator=r,this.resultSetter=a}t.Z={batchRequestHandler:new m(function(e){var n=e.map(function(e){var t=e.data,n=t.type,t=i(t,["type"]),e=e.key;return s({requestId:e,type:o(n)},t)});return new Promise(function(e,t){l.getBatchThumbnails(n).then(e).catch(t)})},function(e){return e.requestId||""},function(e){return e.key},function(e){return e.state!==u.ThumbnailStates.pending},function(e){return{thumbnail:e}}),universeThumbnailHandler:new m(function(r,a){return new Promise(function(e,t){var n;c.getAllUniverseThumbnails(r.map(function(e){return e.data.targetId||0}),null===(n=r[0])||void 0===n?void 0:n.data.size,null===(n=r[0])||void 0===n?void 0:n.data.format,null===(n=r[0])||void 0===n?void 0:n.data.isCircular,a).then(e).catch(t)})},function(e){return e.universeId.toString()},function(e){return e.data.targetId?e.data.targetId.toString():""},function(e){return!e.error},function(e,t){return 1===t?{thumbnail:e.thumbnails[0]}:{thumbnails:e.thumbnails}})}},618:function(e,t,n){"use strict";n.d(t,{x:function(){return a},Z:function(){return h}});var r=CoreUtilities,u=n(292),s=n(613);var t=function(){var e=null===(e=document.getElementsByName("thumbnail-meta-data")[0])||void 0===e?void 0:e.dataset;return e?{thumbnailMetricsSampleSize:parseInt(e.thumbnailMetricsSampleSize||"",10),isWebappUseCacheEnabled:"True"===e.isWebappCacheEnabled,webappCacheExpirationTimespan:e.webappCacheExpirationsTimespan||"",requestMinCooldown:parseInt(e.requestMinCooldown||"",10),requestMaxCooldown:parseInt(e.requestMaxCooldown||"",10),requestMaxRetryAttempts:parseInt(e.requestMaxRetryAttempts||"",10),requestBatchSize:parseInt(e.requestBatchSize||"",10),concurrentThumbnailRequestCount:parseInt(e.concurrentThumbnailRequestCount||"",10)}:s.DEFAULT_META_DATA},n=n(979),l=t,c=n.Z.getCachePropertiesFromMetaData,m=n.Z.shouldLogMetrics,a=(i.prototype.getThumbnailRequesterProperties=function(e){return e?{getFailureCooldown:this.batchRequestFactory.createExponentialBackoffCooldown(e.requestMinCooldown,e.requestMaxCooldown),maxRetryAttempts:e.requestMaxRetryAttempts,batchSize:e.requestBatchSize,concurrentRequestCount:e.concurrentThumbnailRequestCount,debugMode:!0}:{getFailureCooldown:this.batchRequestFactory.createExponentialBackoffCooldown(s.ThumbnailCooldown.minCooldown,s.ThumbnailCooldown.maxCooldown),maxRetryAttempts:s.ThumbnailCooldown.maxRetryAttempts,batchSize:s.DefaultBatchSize,debugMode:!0}},i.prototype.getThumbnailRequester=function(e,t,n){var r=this;if(t in this.thumbnailRequesters)return this.thumbnailRequesters[t];n=this.batchRequestFactory.createRequestProcessor(e,function(e){return r.thumbnailItemIdSerializer(e)},this.getThumbnailRequesterProperties(n));return this.thumbnailRequesters[t]=n},i.prototype.processThumbnailBatchRequest=function(e,t,n,r){void 0===n&&(n=this.thumbnailProcessorKeySerializer(e));var a=e.type,i=void 0===a?"custom":a,o=l(),n=this.getThumbnailRequester(t,n,o);r&&n.invalidateItem(e);r=c(o);return n.queueItem(e,void 0,r).then(function(e){var t,n;return u.metricsService&&e.performance&&m(o)&&(t=(n=e.performance).duration,0<(n=n.retryAttempts)?(u.metricsService.logMeasurement({featureName:s.FeatureName,measureName:s.LoadRetrySuccessName,metricsType:s.LoadSuccessMetricsType,excludeCountry:!0,value:t}).catch(console.debug),u.metricsService.logMeasurement({featureName:s.FeatureName,measureName:i+"_"+s.RetryPerThumbnailType,metricsType:s.LoadSuccessMetricsType,excludeCountry:!0,value:n}).catch(console.debug)):u.metricsService.logMeasurement({featureName:s.FeatureName,measureName:s.LoadSuccessName,metricsType:s.LoadSuccessMetricsType,excludeCountry:!0,value:t}).catch(console.debug)),e}).catch(function(e){return console.debug({error:e}),u.metricsService&&m(o)&&e===s.BatchRequestError.maxAttemptsReached&&u.metricsService.logMeasurement({featureName:s.FeatureName,measureName:s.LoadFailureName,metricsType:s.LoadFailureMetricsType,excludeCountry:!0}).catch(console.debug),Promise.reject(e)})},i);function i(e,t){this.thumbnailRequesters={},this.batchRequestFactory=new r.BatchRequestFactory,this.thumbnailItemIdSerializer=e,this.thumbnailProcessorKeySerializer=t}function o(e){var t=e.targetId,n=void 0===t?0:t,r=e.token,a=e.type,i=e.size,t=e.format,e=e.isCircular;return n.toString()+":"+r+":"+a+":"+i+":"+t+":"+(e?"circular":"regular")}var h={defaultThumbnailRequester:new a(function(e){var t=e.type,n=e.targetId,n=void 0===n?0:n;return t===s.ThumbnailTypes.universeThumbnail||t===s.ThumbnailTypes.universeThumbnails?n.toString():o(e)},o),customThumbnailRequester:new a(function(e){return e.key},function(){return"customThumbnailRequester"})}},979:function(e,t,n){"use strict";var r=n(613),a=((n={})[r.ThumbnailTypes.avatar]=r.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.Avatar,n[r.ThumbnailTypes.avatarHeadshot]=r.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.AvatarHeadShot,n[r.ThumbnailTypes.gameIcon]=r.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.GameIcon,n[r.ThumbnailTypes.badgeIcon]=r.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.BadgeIcon,n[r.ThumbnailTypes.gamePassIcon]=r.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.GamePass,n[r.ThumbnailTypes.assetThumbnail]=r.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.Asset,n[r.ThumbnailTypes.bundleThumbnail]=r.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.BundleThumbnail,n[r.ThumbnailTypes.userOutfit]=r.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.Outfit,n[r.ThumbnailTypes.groupIcon]=r.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.GroupIcon,n[r.ThumbnailTypes.placeGameIcon]=r.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.PlaceIcon,n[r.ThumbnailTypes.developerProductIcon]=r.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.DeveloperProduct,n[r.ThumbnailTypes.gameThumbnail]=r.RobloxThumbnailsApisModelsThumbnailBatchRequestTypeEnum.GameThumbnail,n);function i(e){e=e.split(":");return 1e3*(60*parseInt(e[0],10)*60+60*parseInt(e[1],10)+parseInt(e[2],10))}t.Z={transformThumbnailType:function(e){return a[e]},getExpirationMsFromString:i,getThumbnailRequesterProperties:function(e,t){return t?{getFailureCooldown:e.createExponentialBackoffCooldown(t.requestMinCooldown,t.requestMaxCooldown),maxRetryAttempts:t.requestMaxRetryAttempts,batchSize:t.requestBatchSize,concurrentRequestCount:t.concurrentThumbnailRequestCount,debugMode:!0}:{getFailureCooldown:e.createExponentialBackoffCooldown(r.ThumbnailCooldown.minCooldown,r.ThumbnailCooldown.maxCooldown),maxRetryAttempts:r.ThumbnailCooldown.maxRetryAttempts,batchSize:r.DefaultBatchSize,debugMode:!0}},getCachePropertiesFromMetaData:function(e){if(e)return{useCache:e.isWebappUseCacheEnabled,expirationWindowMS:i(e.webappCacheExpirationTimespan)}},shouldLogMetrics:function(e){return!e||(e=e.thumbnailMetricsSampleSize,Math.floor(100*Math.random())<=e)}}},292:function(e){"use strict";e.exports=CoreRobloxUtilities},734:function(e){"use strict";e.exports=angular}},r={};function f(e){if(r[e])return r[e].exports;var t=r[e]={exports:{}};return n[e](t,t.exports,f),t.exports}f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,{a:t}),t},f.d=function(e,t){for(var n in t)f.o(t,n)&&!f.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){"use strict";var e=f(734),t=f.n(e),n=f(544),y=f(613),T=React,v=f.n(T),r=f(779),S=f.n(r),e=PropTypes,r=f.n(e),C=f(394),e=f(618),w=f(580);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){var t=e.onLoad,n=e.errorIconClass,r=e.thumbnailUrl,a=e.imgClassName,i=e.containerClass,o=e.altName,e=S()("thumbnail-2d-container",n,i),n=s((0,T.useState)(S()(a,"loading")),2),i=n[0],u=n[1];(0,T.useEffect)(function(){null===r&&u(S()(a,"loading"))},[r,a]);return v().createElement("span",{className:e},r&&v().createElement("img",{className:i,src:r,alt:o,title:o,onLoad:function(){t(),u(a)}}))}i.defaultProps={errorIconClass:"",thumbnailUrl:"",imgClassName:"",containerClass:"",altName:"",onLoad:function(){}},i.propTypes={errorIconClass:r().string,thumbnailUrl:r().string,imgClassName:r().string,containerClass:r().string,altName:r().string,onLoad:r().func};var I=i;function o(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function x(r){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach(function(e){var t,n;t=r,e=a[n=e],n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))})}return r}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var R=new e.x(function(e){return e.targetId},function(){return"customThumbnailRequester"});function l(e){var t=e.type,r=e.targetId,a=e.token,i=e.size,n=e.imgClassName,o=e.containerClass,u=e.format,s=e.altName,l=e.onLoad,c=e.getThumbnail,m=O((0,T.useState)(null),2),h=m[0],f=m[1],b=O((0,T.useState)(null),2),e=b[0],d=b[1],m=S()(C.Z.getCssClass(h)),b=O((0,T.useState)("shimmer"),2),h=b[0],p=b[1],g=(0,T.useMemo)(function(){return new w.o(function(){return new Promise(function(t,e){c().then(function(e){t({data:{data:[x(x({},e.data),{},{targetId:r})]}})}).catch(e)})},function(e){return e.targetId},function(e){return e.key},function(e){return e.state!==y.ThumbnailStates.pending},function(e){return{thumbnail:e}})},[r,c]);return(0,T.useEffect)(function(){p("shimmer"),f(null),d(null);var n=!1,e=C.Z.getThumbnailImage(t,i,u,r,a);return c&&(e=R.processThumbnailBatchRequest({targetId:r},function(e){return g.handle(e)})),e.then(function(e){var t=e.thumbnail,e=t.state,t=t.imageUrl;n||(f(e),d(t),p(""))}).catch(function(e){console.debug(e),n||p("")}),function(){n=!0}},[t,r,a,i,n,c]),v().createElement(I,{thumbnailUrl:e,errorIconClass:m,imgClassName:n,altName:s,onLoad:l,containerClass:S()(h,o)})}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e){function n(){var e=(e=g)>=c.length-1?0:e+1;y(e)}var r=e.type,a=e.targetId,i=e.size,t=e.imgClassName,o=e.containerClass,u=e.format,s=e.altName,l=A((0,T.useState)(null),2),c=l[0],m=l[1],h=A((0,T.useState)(null),2),f=h[0],b=h[1],e=A((0,T.useState)(null),2),l=e[0],d=e[1],h=A((0,T.useState)("shimmer"),2),e=h[0],p=h[1],h=A((0,T.useState)(0),2),g=h[0],y=h[1];return(0,T.useEffect)(function(){var e,t;return c&&(t=c[g],b(t.state),d(t.imageUrl),p(""),e=setInterval(n,4e3)),function(){clearInterval(e)}},[c,g]),(0,T.useEffect)(function(){var t=!1;return C.Z.getThumbnailImage(r,i,u,a).then(function(e){t||m(e.thumbnails)}).catch(function(){t||p("")}),function(){t=!0}},[r,a,i,t,u]),v().createElement(I,{thumbnailUrl:l,errorIconClass:S()(C.Z.getCssClass(f)),imgClassName:t,altName:s,containerClass:S()(e,o)})}function h(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}l.defaultProps={targetId:0,token:"",size:"150x150",imgClassName:"",containerClass:"",format:"png",altName:"",onLoad:function(){},getThumbnail:null},l.propTypes={type:r().string.isRequired,targetId:r().number,token:r().string,size:r().string,format:r().string,imgClassName:r().string,containerClass:r().string,altName:r().string,onLoad:r().func,getThumbnail:r().func},e=l,m.defaultProps={size:"576x324",imgClassName:"",containerClass:"",format:"png",altName:""},m.propTypes={type:r().string.isRequired,targetId:r().number.isRequired,size:r().string,format:r().string,imgClassName:r().string,containerClass:r().string,altName:r().string},r=m,f(999),f(809),window.RobloxThumbnails=function(r){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?h(Object(a),!0).forEach(function(e){var t,n;t=r,e=a[n=e],n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))})}return r}({Thumbnail2d:e,Thumbnail2dCarouselContainer:r,thumbnailService:C.Z},y),(0,n.importFilesUnderPath)(f(907)),(0,n.importFilesUnderPath)(f(441)),(0,n.importFilesUnderPath)(f(297)),(0,n.importFilesUnderPath)(f(484)),(0,n.importFilesUnderPath)(f(44)),r=f(671),(0,n.templateCacheGenerator)(t(),"thumbnailsTemplates",r,null)}()}();
//# sourceMappingURL=https://js.rbxcdn.com/cbf32a74baffc3603aa2fc5e5a54dc29-thumbnails.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Thumbnails");
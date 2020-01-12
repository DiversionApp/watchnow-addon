!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("ng.common"),require("tslib"),require("ng.forms"),require("ng.router"),require("ngx-translate.core"),require("rxjs"),require("wako-app.mobile-sdk"),require("ng.core"),require("ionic.angular")):"function"==typeof define&&define.amd?define(["ng.common","tslib","ng.forms","ng.router","ngx-translate.core","rxjs","wako-app.mobile-sdk","ng.core","ionic.angular"],t):"object"==typeof exports?exports.plugin=t(require("ng.common"),require("tslib"),require("ng.forms"),require("ng.router"),require("ngx-translate.core"),require("rxjs"),require("wako-app.mobile-sdk"),require("ng.core"),require("ionic.angular")):n.plugin=t(n["ng.common"],n.tslib,n["ng.forms"],n["ng.router"],n["ngx-translate.core"],n.rxjs,n["wako-app.mobile-sdk"],n["ng.core"],n["ionic.angular"])}("undefined"!=typeof self?self:this,function(n,t,e,r,o,i,u,s,l){return function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,(function(t){return n[t]}).bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}({0:function(n,t,e){n.exports=e("zUnb")},"0S4P":function(t,e){t.exports=n},"17wl":function(n,e){n.exports=t},"3xDq":function(n,t){n.exports=e},FsH7:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("17wl"),o=e("vOrQ"),i=e("z1lQ"),u=e("TGDj");t.ToastService=function(){function n(n,t){this.toastCtrl=n,this.translateService=t}return n.prototype.simpleMessage=function(n,t,e,r){var o=this;void 0===e&&(e=2e3),void 0===r&&(r="top"),this.translateService.get(n,t).subscribe(function(n){o.toastCtrl.create({message:n,mode:"ios",position:r,duration:e}).then(function(n){n.present()})})},r.__decorate([o.Injectable(),r.__metadata("design:paramtypes",[i.ToastController,u.TranslateService])],n)}()},GoKE:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("17wl"),o=e("vOrQ"),i=e("z1lQ");t.BrowserService=function(){function n(n){this.platform=n}return n.prototype.open=function(n,t){if(void 0===t&&(t=!0),!1!==this.platform.is("cordova")&&t){var e=document.body.classList.contains("dark");SafariViewController.isAvailable(function(t){t?SafariViewController.show({url:n,hidden:!1,animated:!0,transition:"curl",enterReaderModeIfAvailable:!1,barColor:e?"#000000":"#1f2d3f",tintColor:e?"#000000":"#1f2d3f",controlTintColor:"#ffffff"}):window.open(n,"_system","location=yes")})}else window.open(n,"_system","location=yes")},r.__decorate([o.Injectable(),r.__metadata("design:paramtypes",[i.Platform])],n)}()},JAnZ:function(n,t){n.exports=r},TGDj:function(n,t){n.exports=o},Vgaj:function(n,t){n.exports=i},doF0:function(n,t){n.exports=u},vOrQ:function(n,t){n.exports=s},z1lQ:function(n,t){n.exports=l},zUnb:function(n,t,e){"use strict";e.r(t);var r=e("17wl"),o=e("doF0"),i=e("TGDj");function u(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];Object(o.wakoLog)("plugin.tmdb",n)}var s=function(n){function t(t){var e=n.call(this)||this;return e.translate=t,e}return r.__extends(t,n),t.prototype.initialize=function(){u("plugin initialized")},t.prototype.afterInstall=function(){u("plugin installed")},t.prototype.afterUpdate=function(){u("plugin updated")},t.prototype.setTranslation=function(n,t){this.translate.setDefaultLang(n),this.translate.use(n),this.translate.setTranslation(n,t)},t.prototype.customAction=function(n,t){},t}(o.PluginBaseService),l=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return r.__extends(t,n),t.prototype.setMovie=function(n){this.movie=n},t}(o.MovieDetailBaseComponent),c=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return r.__extends(t,n),t.prototype.setShowEpisode=function(n,t){this.show=n,this.episode=t},t}(o.EpisodeDetailBaseComponent),a=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return r.__extends(t,n),t.prototype.setShow=function(n){this.show=n},t}(o.ShowDetailBaseComponent),p=e("vOrQ");function f(n){return"function"==typeof n}var d=!1,h={Promise:void 0,set useDeprecatedSynchronousErrorHandling(n){d=n},get useDeprecatedSynchronousErrorHandling(){return d}};function b(n){setTimeout(function(){throw n},0)}var y={closed:!0,next:function(n){},error:function(n){if(h.useDeprecatedSynchronousErrorHandling)throw n;b(n)},complete:function(){}},m=Array.isArray||function(n){return n&&"number"==typeof n.length};function v(n){return null!==n&&"object"==typeof n}function g(n){return Error.call(this),this.message=n?n.length+" errors occurred during unsubscription:\n"+n.map(function(n,t){return t+1+") "+n.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=n,this}g.prototype=Object.create(Error.prototype);var _=g,w=function(){function n(n){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,n&&(this._unsubscribe=n)}return n.prototype.unsubscribe=function(){var t;if(!this.closed){var e=this._parentOrParents,r=this._unsubscribe,o=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,e instanceof n)e.remove(this);else if(null!==e)for(var i=0;i<e.length;++i)e[i].remove(this);if(f(r))try{r.call(this)}catch(l){t=l instanceof _?S(l.errors):[l]}if(m(o)){i=-1;for(var u=o.length;++i<u;){var s=o[i];if(v(s))try{s.unsubscribe()}catch(l){t=t||[],l instanceof _?t=t.concat(S(l.errors)):t.push(l)}}}if(t)throw new _(t)}},n.prototype.add=function(t){var e=t;if(!t)return n.EMPTY;switch(typeof t){case"function":e=new n(t);case"object":if(e===this||e.closed||"function"!=typeof e.unsubscribe)return e;if(this.closed)return e.unsubscribe(),e;if(!(e instanceof n)){var r=e;(e=new n)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}var o=e._parentOrParents;if(null===o)e._parentOrParents=this;else if(o instanceof n){if(o===this)return e;e._parentOrParents=[o,this]}else{if(-1!==o.indexOf(this))return e;o.push(this)}var i=this._subscriptions;return null===i?this._subscriptions=[e]:i.push(e),e},n.prototype.remove=function(n){var t=this._subscriptions;if(t){var e=t.indexOf(n);-1!==e&&t.splice(e,1)}},n.EMPTY=function(n){return n.closed=!0,n}(new n),n}();function S(n){return n.reduce(function(n,t){return n.concat(t instanceof _?t.errors:t)},[])}var x="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random(),T=function(n){function t(e,r,o){var i=n.call(this)||this;switch(i.syncErrorValue=null,i.syncErrorThrown=!1,i.syncErrorThrowable=!1,i.isStopped=!1,arguments.length){case 0:i.destination=y;break;case 1:if(!e){i.destination=y;break}if("object"==typeof e){e instanceof t?(i.syncErrorThrowable=e.syncErrorThrowable,i.destination=e,e.add(i)):(i.syncErrorThrowable=!0,i.destination=new E(i,e));break}default:i.syncErrorThrowable=!0,i.destination=new E(i,e,r,o)}return i}return r.__extends(t,n),t.prototype[x]=function(){return this},t.create=function(n,e,r){var o=new t(n,e,r);return o.syncErrorThrowable=!1,o},t.prototype.next=function(n){this.isStopped||this._next(n)},t.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,n.prototype.unsubscribe.call(this))},t.prototype._next=function(n){this.destination.next(n)},t.prototype._error=function(n){this.destination.error(n),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var n=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=n,this},t}(w),E=function(n){function t(t,e,r,o){var i,u=n.call(this)||this;u._parentSubscriber=t;var s=u;return f(e)?i=e:e&&(i=e.next,r=e.error,o=e.complete,e!==y&&(f((s=Object.create(e)).unsubscribe)&&u.add(s.unsubscribe.bind(s)),s.unsubscribe=u.unsubscribe.bind(u))),u._context=s,u._next=i,u._error=r,u._complete=o,u}return r.__extends(t,n),t.prototype.next=function(n){if(!this.isStopped&&this._next){var t=this._parentSubscriber;h.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,n)&&this.unsubscribe():this.__tryOrUnsub(this._next,n)}},t.prototype.error=function(n){if(!this.isStopped){var t=this._parentSubscriber,e=h.useDeprecatedSynchronousErrorHandling;if(this._error)e&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,n),this.unsubscribe()):(this.__tryOrUnsub(this._error,n),this.unsubscribe());else if(t.syncErrorThrowable)e?(t.syncErrorValue=n,t.syncErrorThrown=!0):b(n),this.unsubscribe();else{if(this.unsubscribe(),e)throw n;b(n)}}},t.prototype.complete=function(){var n=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var e=function(){return n._complete.call(n._context)};h.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,e),this.unsubscribe()):(this.__tryOrUnsub(e),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(n,t){try{n.call(this._context,t)}catch(e){if(this.unsubscribe(),h.useDeprecatedSynchronousErrorHandling)throw e;b(e)}},t.prototype.__tryOrSetError=function(n,t,e){if(!h.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,e)}catch(r){return h.useDeprecatedSynchronousErrorHandling?(n.syncErrorValue=r,n.syncErrorThrown=!0,!0):(b(r),!0)}return!1},t.prototype._unsubscribe=function(){var n=this._parentSubscriber;this._context=null,this._parentSubscriber=null,n.unsubscribe()},t}(T);function O(n,t){return function(e){if("function"!=typeof n)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return e.lift(new P(n,t))}}var P=function(){function n(n,t){this.project=n,this.thisArg=t}return n.prototype.call=function(n,t){return t.subscribe(new k(n,this.project,this.thisArg))},n}(),k=function(n){function t(t,e,r){var o=n.call(this,t)||this;return o.project=e,o.count=0,o.thisArg=r||o,o}return r.__extends(t,n),t.prototype._next=function(n){var t;try{t=this.project.call(this.thisArg,n,this.count++)}catch(e){return void this.destination.error(e)}this.destination.next(t)},t}(T),C=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return r.__extends(t,n),t.prototype.notifyNext=function(n,t,e,r,o){this.destination.next(t)},t.prototype.notifyError=function(n,t){this.destination.error(n)},t.prototype.notifyComplete=function(n){this.destination.complete()},t}(T),j=function(n){function t(t,e,r){var o=n.call(this)||this;return o.parent=t,o.outerValue=e,o.outerIndex=r,o.index=0,o}return r.__extends(t,n),t.prototype._next=function(n){this.parent.notifyNext(this.outerValue,n,this.outerIndex,this.index++,this)},t.prototype._error=function(n){this.parent.notifyError(n,this),this.unsubscribe()},t.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},t}(T);function M(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var D=M(),A="function"==typeof Symbol&&Symbol.observable||"@@observable";var I=function(n){if(n&&"function"==typeof n[A])return i=n,function(n){var t=i[A]();if("function"!=typeof t.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return t.subscribe(n)};if((t=n)&&"number"==typeof t.length&&"function"!=typeof t)return o=n,function(n){for(var t=0,e=o.length;t<e&&!n.closed;t++)n.next(o[t]);n.complete()};var t;if(function(n){return!!n&&"function"!=typeof n.subscribe&&"function"==typeof n.then}(n))return r=n,function(n){return r.then(function(t){n.closed||(n.next(t),n.complete())},function(t){return n.error(t)}).then(null,b),n};if(n&&"function"==typeof n[D])return e=n,function(n){for(var t=e[D]();;){var r=t.next();if(r.done){n.complete();break}if(n.next(r.value),n.closed)break}return"function"==typeof t.return&&n.add(function(){t.return&&t.return()}),n};var e,r,o,i,u=v(n)?"an invalid object":"'"+n+"'";throw new TypeError("You provided "+u+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")};function F(){}function N(n){return n?1===n.length?n[0]:function(t){return n.reduce(function(n,t){return t(n)},t)}:F}var R=function(){function n(n){this._isScalar=!1,n&&(this._subscribe=n)}return n.prototype.lift=function(t){var e=new n;return e.source=this,e.operator=t,e},n.prototype.subscribe=function(n,t,e){var r=this.operator,o=function(n,t,e){if(n){if(n instanceof T)return n;if(n[x])return n[x]()}return n||t||e?new T(n,t,e):new T(y)}(n,t,e);if(o.add(r?r.call(o,this.source):this.source||h.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),h.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},n.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(t){h.useDeprecatedSynchronousErrorHandling&&(n.syncErrorThrown=!0,n.syncErrorValue=t),function(n){for(;n;){var t=n.destination;if(n.closed||n.isStopped)return!1;n=t&&t instanceof T?t:null}return!0}(n)?n.error(t):console.warn(t)}},n.prototype.forEach=function(n,t){var e=this;return new(t=q(t))(function(t,r){var o;o=e.subscribe(function(t){try{n(t)}catch(e){r(e),o&&o.unsubscribe()}},r,t)})},n.prototype._subscribe=function(n){var t=this.source;return t&&t.subscribe(n)},n.prototype[A]=function(){return this},n.prototype.pipe=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return 0===n.length?this:N(n)(this)},n.prototype.toPromise=function(n){var t=this;return new(n=q(n))(function(n,e){var r;t.subscribe(function(n){return r=n},function(n){return e(n)},function(){return n(r)})})},n.create=function(t){return new n(t)},n}();function q(n){if(n||(n=h.Promise||Promise),!n)throw new Error("no Promise impl found");return n}var H=function(){function n(n){this.project=n}return n.prototype.call=function(n,t){return t.subscribe(new U(n,this.project))},n}(),U=function(n){function t(t,e){var r=n.call(this,t)||this;return r.project=e,r.index=0,r}return r.__extends(t,n),t.prototype._next=function(n){var t,e=this.index++;try{t=this.project(n,e)}catch(r){return void this.destination.error(r)}this._innerSub(t,n,e)},t.prototype._innerSub=function(n,t,e){var r=this.innerSubscription;r&&r.unsubscribe();var o=new j(this,void 0,void 0);this.destination.add(o),this.innerSubscription=function(n,r,o,i,u){if(void 0===u&&(u=new j(n,t,e)),!u.closed)return r instanceof R?r.subscribe(u):I(r)(u)}(this,n,0,0,o)},t.prototype._complete=function(){var t=this.innerSubscription;t&&!t.closed||n.prototype._complete.call(this),this.unsubscribe()},t.prototype._unsubscribe=function(){this.innerSubscription=null},t.prototype.notifyComplete=function(t){this.destination.remove(t),this.innerSubscription=null,this.isStopped&&n.prototype._complete.call(this)},t.prototype.notifyNext=function(n,t,e,r,o){this.destination.next(t)},t}(C),L=e("Vgaj"),V=function(){function n(){}return n.prototype.getNameFromId=function(n){switch(n){case"apple_itunes":return"Itunes";case"google_play_movies":return"Google Play";case"netflix":return"Netflix";default:return n.replace(/_/gi," ")}},n.prototype.getNetflixUrl=function(n){return o.WakoHttpRequestService.get(n.url,null,"3d").pipe(O(function(t){var e=(new DOMParser).parseFromString(t,"text/html").querySelector('meta[property="al:ios:url"]');return e&&e.getAttribute("content")?"http://www.netflix.com/watch/"+e.getAttribute("content").split("/").pop().split("?").shift():n.url}))},n.prototype.getSources=function(n){var t=this,e=null;return n.movie?e="/movies/"+n.movie.traktId:n.show&&n.episode&&(e="/shows/"+n.show.traktId+"/seasons/"+n.episode.traktSeasonNumber+"/episodes/"+n.episode.traktNumber),o.WakoHttpRequestService.get("https://trakt.tv"+e,null,"3d").pipe(O(function(n){var e=[];try{(new DOMParser).parseFromString(n,"text/html").querySelectorAll(".sources a").forEach(function(n){e.push({id:n.getAttribute("data-source").trim(),name:t.getNameFromId(n.getAttribute("data-source").trim()),country:n.getAttribute("data-country").trim(),url:"https://trakt.tv"+n.getAttribute("link").trim(),logoUrl:"https://trakt.tv"+n.querySelector("img").getAttribute("data-original")})})}catch(r){}return e}),function n(t,e){return"function"==typeof e?function(r){return r.pipe(n(function(n,r){return(o=t(n,r),o instanceof R?o:new R(I(o))).pipe(O(function(t,o){return e(n,t,r,o)}));var o}))}:function(n){return n.lift(new H(t))}}(function(n){return 1===n.length&&"netflix"===n[0].id?t.getNetflixUrl(n[0]).pipe(O(function(t){return n[0].url=t,n})):Object(L.of)(n)}))},n}(),B=function(){function n(n){this.callback=n}return n.prototype.call=function(n,t){return t.subscribe(new z(n,this.callback))},n}(),z=function(n){function t(t,e){var r=n.call(this,t)||this;return r.add(new w(e)),r}return r.__extends(t,n),t}(T),G=function(){function n(n,t){this.browserService=n,this.watchnowService=t,this.type="button",this.sources=[],this.loading=!0}return n.prototype.ngOnInit=function(){var n,t=this;this.watchnowService.getSources({movie:this.movie,show:this.show,episode:this.episode}).pipe((n=function(){return t.loading=!1},function(t){return t.lift(new B(n))})).subscribe(function(n){t.sources=n,console.log({sources:n})})},n.prototype.goTo=function(n){"FirebasePlugin"in window&&window.FirebasePlugin.logEvent("addon_watchnow",{type:this.type,source:n.id}),this.browserService.open(n.url,!1)},n}(),Q=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return r.__extends(t,n),t.pluginService=s,t.movieComponent=l,t.episodeComponent=c,t.showComponent=a,t}(o.PluginBaseModule),Z=e("z1lQ"),Y=e("0S4P");e("JAnZ");var $=p["\u0275crt"]({encapsulation:2,styles:[],data:{}});function J(n){return p["\u0275vid"](2,[p["\u0275ncd"](null,0)],null,null)}var K=p["\u0275crt"]({encapsulation:2,styles:[],data:{}});function W(n){return p["\u0275vid"](2,[p["\u0275ncd"](null,0)],null,null)}var X=p["\u0275crt"]({encapsulation:2,styles:[],data:{}});function nn(n){return p["\u0275vid"](2,[p["\u0275ncd"](null,0)],null,null)}var tn=e("GoKE"),en=p["\u0275crt"]({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:space-evenly;justify-content:space-evenly}.container[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]   .button.netflix[_ngcontent-%COMP%]{--background:#e50914}.container[_ngcontent-%COMP%]   .button.apple_itunes[_ngcontent-%COMP%]{--background:#999}.container[_ngcontent-%COMP%]   .button.google_play_movies[_ngcontent-%COMP%]{--background:#607d8b}"]],data:{}});function rn(n){return p["\u0275vid"](0,[(n()(),p["\u0275eld"](0,0,null,null,1,"ion-spinner",[],null,null,null,W,K)),p["\u0275did"](1,49152,null,0,Z.IonSpinner,[p.ChangeDetectorRef,p.ElementRef,p.NgZone],null,null)],null,null)}function on(n){return p["\u0275vid"](0,[(n()(),p["\u0275eld"](0,0,null,null,3,"ion-text",[],null,null,null,nn,X)),p["\u0275did"](1,49152,null,0,Z.IonText,[p.ChangeDetectorRef,p.ElementRef,p.NgZone],null,null),(n()(),p["\u0275ted"](2,0,["",""])),p["\u0275pid"](131072,i.TranslatePipe,[i.TranslateService,p.ChangeDetectorRef])],null,function(n,t){n(t,2,0,p["\u0275unv"](t,2,0,p["\u0275nov"](t,3).transform("noSourceFound")))})}function un(n){return p["\u0275vid"](0,[(n()(),p["\u0275eld"](0,0,null,null,3,"ion-button",[["expand","block"]],[[8,"className",0]],[[null,"click"]],function(n,t,e){var r=!0;return"click"===t&&(r=!1!==n.component.goTo(n.context.$implicit)&&r),r},J,$)),p["\u0275did"](1,49152,null,0,Z.IonButton,[p.ChangeDetectorRef,p.ElementRef,p.NgZone],{expand:[0,"expand"]},null),(n()(),p["\u0275ted"](2,0,[" "," "])),p["\u0275ppd"](3,1)],function(n,t){n(t,1,0,"block")},function(n,t){n(t,0,0,p["\u0275inlineInterpolate"](1,"",t.context.$implicit.id,""));var e=p["\u0275unv"](t,2,0,n(t,3,0,p["\u0275nov"](t.parent,0),t.context.$implicit.name));n(t,2,0,e)})}function sn(n){return p["\u0275vid"](0,[p["\u0275pid"](0,Y.TitleCasePipe,[]),(n()(),p["\u0275eld"](1,0,null,null,6,"div",[["class","container"]],null,null,null,null,null)),(n()(),p["\u0275and"](16777216,null,null,1,null,rn)),p["\u0275did"](3,16384,null,0,Y.NgIf,[p.ViewContainerRef,p.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),p["\u0275and"](16777216,null,null,1,null,on)),p["\u0275did"](5,16384,null,0,Y.NgIf,[p.ViewContainerRef,p.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),p["\u0275and"](16777216,null,null,1,null,un)),p["\u0275did"](7,278528,null,0,Y.NgForOf,[p.ViewContainerRef,p.TemplateRef,p.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,t){var e=t.component;n(t,3,0,e.loading),n(t,5,0,!e.loading&&0===e.sources.length),n(t,7,0,e.sources)},null)}function ln(n){return p["\u0275vid"](0,[(n()(),p["\u0275eld"](0,0,null,null,1,"wk-open-button",[],null,null,null,sn,en)),p["\u0275did"](1,114688,null,0,G,[tn.BrowserService,V],null,null)],function(n,t){n(t,1,0)},null)}var cn=p["\u0275ccf"]("wk-open-button",G,ln,{movie:"movie",show:"show",episode:"episode",type:"type"},{},[]),an=p["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function pn(n){return p["\u0275vid"](0,[(n()(),p["\u0275eld"](0,0,null,null,1,"wk-open-button",[],null,null,null,sn,en)),p["\u0275did"](1,114688,null,0,G,[tn.BrowserService,V],{movie:[0,"movie"]},null)],function(n,t){n(t,1,0,t.component.movie)},null)}function fn(n){return p["\u0275vid"](0,[(n()(),p["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,pn,an)),p["\u0275did"](1,49152,null,0,l,[],null,null)],null,null)}var dn=p["\u0275ccf"]("ng-component",l,fn,{},{},[]),hn=p["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function bn(n){return p["\u0275vid"](0,[(n()(),p["\u0275eld"](0,0,null,null,1,"wk-open-button",[],null,null,null,sn,en)),p["\u0275did"](1,114688,null,0,G,[tn.BrowserService,V],{show:[0,"show"],episode:[1,"episode"]},null)],function(n,t){var e=t.component;n(t,1,0,e.show,e.episode)},null)}function yn(n){return p["\u0275vid"](0,[(n()(),p["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,bn,hn)),p["\u0275did"](1,49152,null,0,c,[],null,null)],null,null)}var mn=p["\u0275ccf"]("ng-component",c,yn,{},{},[]),vn=p["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function gn(n){return p["\u0275vid"](0,[(n()(),p["\u0275eld"](0,0,null,null,1,"wk-open-button",[],null,null,null,sn,en)),p["\u0275did"](1,114688,null,0,G,[tn.BrowserService,V],{show:[0,"show"]},null)],function(n,t){n(t,1,0,t.component.show)},null)}function _n(n){return p["\u0275vid"](0,[(n()(),p["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,gn,vn)),p["\u0275did"](1,49152,null,0,a,[],null,null)],null,null)}var wn=p["\u0275ccf"]("ng-component",a,_n,{},{},[]),Sn=e("3xDq"),xn=e("FsH7"),Tn=p["\u0275cmf"](Q,[],function(n){return p["\u0275mod"]([p["\u0275mpd"](512,p.ComponentFactoryResolver,p["\u0275CodegenComponentFactoryResolver"],[[8,[dn,mn,wn,cn]],[3,p.ComponentFactoryResolver],p.NgModuleRef]),p["\u0275mpd"](4608,Y.NgLocalization,Y.NgLocaleLocalization,[p.LOCALE_ID,[2,Y["\u0275angular_packages_common_common_a"]]]),p["\u0275mpd"](4608,Sn["\u0275angular_packages_forms_forms_o"],Sn["\u0275angular_packages_forms_forms_o"],[]),p["\u0275mpd"](4608,Z.AngularDelegate,Z.AngularDelegate,[p.NgZone,p.ApplicationRef]),p["\u0275mpd"](4608,Z.ModalController,Z.ModalController,[Z.AngularDelegate,p.ComponentFactoryResolver,p.Injector]),p["\u0275mpd"](4608,Z.PopoverController,Z.PopoverController,[Z.AngularDelegate,p.ComponentFactoryResolver,p.Injector]),p["\u0275mpd"](5120,p.APP_INITIALIZER,function(n,t,e){return[Z["\u0275e"](n,t,e)]},[Z["\u0275a"],Y.DOCUMENT,p.NgZone]),p["\u0275mpd"](4608,i.TranslateLoader,i.TranslateFakeLoader,[]),p["\u0275mpd"](4608,i.TranslateCompiler,i.TranslateFakeCompiler,[]),p["\u0275mpd"](4608,i.TranslateParser,i.TranslateDefaultParser,[]),p["\u0275mpd"](4608,i.MissingTranslationHandler,i.FakeMissingTranslationHandler,[]),p["\u0275mpd"](4608,i.TranslateStore,i.TranslateStore,[]),p["\u0275mpd"](4608,i.TranslateService,i.TranslateService,[i.TranslateStore,i.TranslateLoader,i.TranslateCompiler,i.TranslateParser,i.MissingTranslationHandler,i.USE_DEFAULT_LANG,i.USE_STORE]),p["\u0275mpd"](4608,s,s,[i.TranslateService]),p["\u0275mpd"](4608,tn.BrowserService,tn.BrowserService,[Z.Platform]),p["\u0275mpd"](4608,xn.ToastService,xn.ToastService,[Z.ToastController,i.TranslateService]),p["\u0275mpd"](4608,V,V,[]),p["\u0275mpd"](1073742336,Y.CommonModule,Y.CommonModule,[]),p["\u0275mpd"](1073742336,Sn["\u0275angular_packages_forms_forms_d"],Sn["\u0275angular_packages_forms_forms_d"],[]),p["\u0275mpd"](1073742336,Sn.FormsModule,Sn.FormsModule,[]),p["\u0275mpd"](1073742336,Z.IonicModule,Z.IonicModule,[]),p["\u0275mpd"](1073742336,i.TranslateModule,i.TranslateModule,[]),p["\u0275mpd"](1073742336,Q,Q,[]),p["\u0275mpd"](256,Z["\u0275a"],void 0,[]),p["\u0275mpd"](256,i.USE_STORE,void 0,[]),p["\u0275mpd"](256,i.USE_DEFAULT_LANG,void 0,[])])});e.d(t,"PluginModule",function(){return Q}),e.d(t,"PluginModuleNgFactory",function(){return Tn}),t.default=Tn}})});
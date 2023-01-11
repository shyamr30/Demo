"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["optimizely","optimizely-utils","uuid"],{82664(a,b,c){function d(a){let b=document.querySelectorAll(a);if(b.length>0)return b[b.length-1]}function e(){return`${window.location.protocol}//${window.location.host}${function(){let a=d("meta[name=analytics-location]");return a?a.content:window.location.pathname}()+function(){let a=d("meta[name=analytics-location-query-strip]"),b="";a||(b=window.location.search);let c=d("meta[name=analytics-location-params]");for(let e of(c&&(b+=(b?"&":"?")+c.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let f=e.content.split(":",2);b=b.replace(RegExp(`(^|[?&])${f[0]}($|=)`,"g"),`$1${f[1]}$2`)}return b}()}`}c.d(b,{S:()=>e})},86975(a,b,c){c.d(b,{AU:()=>j,Ap:()=>w,DT:()=>o,HN:()=>i,Lq:()=>g,T2:()=>u,Yg:()=>t,ag:()=>s,ck:()=>k,po:()=>r,q3:()=>l,uL:()=>v,wz:()=>n,xc:()=>h,xk:()=>p,zH:()=>f});var d=c(64707);let e="data-turbo-loaded";function f(){document.documentElement.setAttribute(e,"")}function g(){return document.documentElement.hasAttribute(e)}let h=()=>!(0,d.c)("PJAX_ENABLED"),i=a=>a?.tagName==="TURBO-FRAME";function j(a,b){let c=a.split("/",3).join("/"),d=b.split("/",3).join("/");return c===d}function k(a,b){let c=a.split("/",2).join("/"),d=b.split("/",2).join("/");return c===d}async function l(){let a=document.head.querySelectorAll("link[rel=stylesheet]"),b=new Set([...document.styleSheets].map(a=>a.href)),c=[];for(let d of a)""===d.href||b.has(d.href)||c.push(m(d));await Promise.all(c)}let m=(a,b=2e3)=>new Promise(c=>{let d=()=>{a.removeEventListener("error",d),a.removeEventListener("load",d),c()};a.addEventListener("load",d,{once:!0}),a.addEventListener("error",d,{once:!0}),setTimeout(d,b)}),n=(a,b)=>{let c=b||a.querySelectorAll("[data-turbo-replace]"),d=[...document.querySelectorAll("[data-turbo-replace]")];for(let e of c){let f=d.find(a=>a.id===e.id);f&&f.replaceWith(e)}},o=a=>{for(let b of a.querySelectorAll("link[rel=stylesheet]"))document.head.querySelector(`link[href="${b.getAttribute("href")}"],
           link[data-href="${b.getAttribute("data-href")}"]`)||document.head.append(b)},p=a=>{for(let b of a.querySelectorAll("script"))document.head.querySelector(`script[src="${b.getAttribute("src")}"]`)||q(b)},q=a=>{let{src:b}=a;if(!b)return;let c=document.createElement("script"),d=a.getAttribute("type");d&&(c.type=d),c.src=b,document.head&&document.head.appendChild(c)},r=a=>{let b=[];for(let c of a.querySelectorAll('meta[data-turbo-track="reload"]'))document.querySelector(`meta[http-equiv="${c.getAttribute("http-equiv")}"]`)?.content!==c.content&&b.push(u(c.getAttribute("http-equiv")));return b},s=a=>{let b=a.querySelector("[data-turbo-head]")||a.head;return{title:b.querySelector("title")?.textContent,transients:[...b.querySelectorAll("[data-turbo-transient]")].map(a=>a.cloneNode(!0)),bodyClasses:a.querySelector("meta[name=turbo-body-classes]")?.content,replacedElements:[...a.querySelectorAll("[data-turbo-replace]")].map(a=>a.cloneNode(!0))}},t=()=>[...document.documentElement.attributes],u=a=>a.replace(/^x-/,"").replaceAll("-","_"),v=a=>document.dispatchEvent(new CustomEvent("turbo:reload",{detail:{reason:a}})),w=(a,b)=>{for(let c of a.attributes)b.hasAttribute(c.nodeName)||"aria-busy"===c.nodeName||a.removeAttribute(c.nodeName);for(let d of b.attributes)a.getAttribute(d.nodeName)!==d.nodeValue&&a.setAttribute(d.nodeName,d.nodeValue)}},67404(a,b,c){function d(a){return e(a)[0]}function e(a){let b=[];for(let c of f()){let[d,e]=c.trim().split("=");a===d&& void 0!==e&&b.push({key:d,value:e})}return b}function f(){try{return document.cookie.split(";")}catch{return[]}}function g(a,b,c=null,d=!1,e="lax"){let f=document.domain;if(null==f)throw Error("Unable to get document domain");f.endsWith(".github.com")&&(f="github.com");let g="https:"===location.protocol?"; secure":"",h=c?`; expires=${c}`:"";!1===d&&(f=`.${f}`);try{document.cookie=`${a}=${b}; path=/; domain=${f}${h}${g}; samesite=${e}`}catch{}}function h(a,b=!1){let c=document.domain;if(null==c)throw Error("Unable to get document domain");c.endsWith(".github.com")&&(c="github.com");let d=new Date().getTime(),e=new Date(d-1).toUTCString(),f="https:"===location.protocol?"; secure":"",g=`; expires=${e}`;!1===b&&(c=`.${c}`);try{document.cookie=`${a}=''; path=/; domain=${c}${g}${f}`}catch{}}c.d(b,{"$1":()=>e,d8:()=>g,ej:()=>d,kT:()=>h})},25019(a,b,c){c.d(b,{aJ:()=>u,cI:()=>r,eK:()=>n});var d=c(82918),e=c(45341),f=c(28382),g=c(82664),h=c(86975),i=c(58843),j=c(8704);let k=!1,l=0,m=Date.now();function n(a,b={}){var c;"AbortError"!==(c=a).name&&("TypeError"!==c.name||"Failed to fetch"!==c.message)&&o(q(p(a),b))}async function o(a){if(!w())return;let b=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(b){if(t(a.error.stacktrace)){k=!0;return}l++;try{await fetch(b,{method:"post",body:JSON.stringify(a)})}catch{}}}function p(a){return{type:a.name,value:a.message,stacktrace:r(a)}}function q(a,b={}){return Object.assign({error:a,sanitizedUrl:(0,g.S)()||window.location.href,readyState:document.readyState,referrer:(0,i.wP)(),timeSinceLoad:Math.round(Date.now()-m),user:u()||void 0,turbo:(0,h.xc)(),bundler:j.A7,ui:Boolean(document.querySelector('meta[name="ui"]'))},b)}function r(a){return(0,f.Q)(a.stack||"").map(a=>({filename:a.file||"",function:String(a.methodName),lineno:(a.lineNumber||0).toString(),colno:(a.column||0).toString()}))}let s=/(chrome|moz|safari)-extension:\/\//;function t(a){return a.some(a=>s.test(a.filename)||s.test(a.function))}function u(){let a=document.head?.querySelector('meta[name="user-login"]')?.content;if(a)return a;let b=(0,d.b)();return`anonymous-${b}`}let v=!1;function w(){return!v&&!k&&l<10&&(0,e.Gb)()}if(window.addEventListener("pageshow",()=>v=!1),window.addEventListener("pagehide",()=>v=!0),"function"==typeof BroadcastChannel){let x=new BroadcastChannel("shared-worker-error");x.addEventListener("message",a=>{n(a.data.error)})}},64707(a,b,c){c.d(b,{"$":()=>g,c:()=>f});var d=c(15205);let e=(0,d.Z)(function(){return(document.head?.querySelector('meta[name="enabled-features"]')?.content||"").split(",")}),f=(0,d.Z)(function(a){return -1!==e().indexOf(a)}),g={isFeatureEnabled:f}},8704(a,b,c){c.d(b,{A7:()=>d.A7,ko:()=>d.ko,q1:()=>d.q1});var d=c(53729)},86702(a,b,c){c.d(b,{Z:()=>g,"_":()=>h});var d=c(86283),e=c(60958);let f=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function g(a,b={throwQuotaErrorsOnSet:!1},c=d.iG,g=a=>a,h=a=>a){let i;try{if(!c)throw Error();i=c[a]||new f}catch{i=new f}let{throwQuotaErrorsOnSet:j}=b;function k(a){b.sendCacheStats&&(0,e.b)({incrementKey:a})}function l(a){try{if(i.removeItem(a),b.ttl){let c=`${a}:expiry`;i.removeItem(c)}}catch(d){}}return{getItem:function(a,b=new Date().getTime()){try{let c=i.getItem(a);if(!c)return null;let d=`${a}:expiry`,e=Number(i.getItem(d));if(e&&b>e)return l(a),l(d),k("SAFE_STORAGE_VALUE_EXPIRED"),null;return k("SAFE_STORAGE_VALUE_WITHIN_TTL"),g(c)}catch(f){return null}},setItem:function(a,c,d=new Date().getTime()){try{if(i.setItem(a,h(c)),b.ttl){let e=`${a}:expiry`,f=d+b.ttl;i.setItem(e,f.toString())}}catch(g){if(j&&g.message.toLowerCase().includes("quota"))throw g}},removeItem:l,clear:i.clear,key:i.key,get length(){return i.length}}}function h(a){return g(a,{throwQuotaErrorsOnSet:!1},window,JSON.parse,JSON.stringify)}},25811(a,b,c){c.d(b,{LS:()=>f,cl:()=>g,rV:()=>e});var d=c(86702);let{getItem:e,setItem:f,removeItem:g}=(0,d.Z)("sessionStorage")},55065(a,b,c){c.d(b,{"$g":()=>SoftNavSuccessEvent,OV:()=>SoftNavStartEvent,QW:()=>SoftNavErrorEvent,Xr:()=>SoftNavEndEvent});var d=c(31167);let e=class SoftNavEvent extends Event{constructor(a,b){super(b),this.mechanism=a}};class SoftNavStartEvent extends e{constructor(a){super(a,d.QE.START)}}class SoftNavSuccessEvent extends e{constructor(a,b){super(a,d.QE.SUCCESS),this.visitCount=b}}class SoftNavErrorEvent extends e{constructor(a,b){super(a,d.QE.ERROR),this.error=b}}class SoftNavEndEvent extends e{constructor(a){super(a,d.QE.END)}}},31167(a,b,c){c.d(b,{BT:()=>l,FP:()=>n,LD:()=>k,QE:()=>g,TL:()=>o,Yl:()=>j,jN:()=>h,r_:()=>m,u5:()=>p});var d=c(55065),e=c(29573),f=c(58843);let g=Object.freeze({INITIAL:"soft-nav:initial",START:"soft-nav:start",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error",FRAME_UPDATE:"soft-nav:frame-update",END:"soft-nav:end",RENDER:"soft-nav:render",PROGRESS_BAR:{START:"soft-nav:progress-bar:start",END:"soft-nav:progress-bar:end"}}),h="reload",i=0;function j(){i=0,document.dispatchEvent(new Event(g.INITIAL)),(0,f.XL)()}function k(a){(0,f.sj)()||(q(),document.dispatchEvent(new d.OV(a)),(0,f.U6)(a),(0,f.J$)(),(0,f.Nt)(),(0,e.hY)())}function l(a={}){s(a)&&(i+=1,document.dispatchEvent(new d.$g((0,f.Gj)(),i)),n(a))}function m(a={}){if(!s(a))return;i=0;let b=(0,f.Wl)()||h;document.dispatchEvent(new d.QW((0,f.Gj)(),b)),r(),(0,e.t3)(b),(0,f.XL)()}function n(a={}){s(a)&&(r(),document.dispatchEvent(new d.Xr((0,f.Gj)())),(0,f.pS)())}function o(a={}){s(a)&&((0,e.mr)(),document.dispatchEvent(new Event(g.RENDER)))}function p(){document.dispatchEvent(new Event(g.FRAME_UPDATE))}function q(){document.dispatchEvent(new Event(g.PROGRESS_BAR.START))}function r(){document.dispatchEvent(new Event(g.PROGRESS_BAR.END))}function s({skipIfGoingToReactApp:a,allowedMechanisms:b=[]}={}){return(0,f.sj)()&&(0===b.length||b.includes((0,f.Gj)()))&&(!a||!(0,f.Nb)())}},29573(a,b,c){c.d(b,{CF:()=>g,hY:()=>h,mr:()=>j,t3:()=>i});var d=c(60958),e=c(58843);let f="stats:soft-nav-duration",g={turbo:"TURBO",react:"REACT","turbo.frame":"FRAME",ui:"UI",hard:"HARD"};function h(){performance.mark(f)}function i(a){(0,d.b)({turboFailureReason:a,turboStartUrl:(0,e.wP)(),turboEndUrl:window.location.href})}function j(){let a=function(){if(0===performance.getEntriesByName(f).length)return null;performance.measure(f,f);let a=performance.getEntriesByName(f),b=a.pop();return b?b.duration:null}();if(!a)return;let b=g[(0,e.Gj)()],c=Math.round(a);b===g.react&&document.dispatchEvent(new CustomEvent("staffbar-update",{detail:{duration:c}})),(0,d.b)({requestUrl:window.location.href,softNavigationTiming:{mechanism:b,destination:(0,e.Nb)()||"rails",duration:c,initiator:(0,e.CI)()||"rails"}})}},58843(a,b,c){c.d(b,{Ak:()=>r,CI:()=>v,Gj:()=>o,"J$":()=>u,Nb:()=>w,Nt:()=>s,OE:()=>p,U6:()=>l,Wl:()=>q,XL:()=>k,pS:()=>m,sj:()=>n,wP:()=>t});var d=c(25811),e=c(31167);let f="soft-nav:fail",g="soft-nav:fail-referrer",h="soft-nav:referrer",i="soft-nav:marker",j="soft-nav:react-app-name";function k(){(0,d.LS)(i,"0"),(0,d.cl)(h),(0,d.cl)(f),(0,d.cl)(g),(0,d.cl)(j)}function l(a){(0,d.LS)(i,a)}function m(){(0,d.LS)(i,"0")}function n(){let a=(0,d.rV)(i);return a&&"0"!==a}function o(){return(0,d.rV)(i)}function p(){return Boolean(q())}function q(){return(0,d.rV)(f)}function r(a){(0,d.LS)(f,a||e.jN),(0,d.LS)(g,window.location.href)}function s(){(0,d.LS)(h,window.location.href)}function t(){return(0,d.rV)(h)||document.referrer}function u(){let a=w();a?(0,d.LS)(j,a):(0,d.cl)(j)}function v(){return(0,d.rV)(j)}function w(){return document.querySelector('meta[name="ui"]')?"ui":document.querySelector("react-app")?.getAttribute("app-name")}},60958(a,b,c){c.d(b,{B:()=>m,b:()=>h});var d=c(86283),e=c(4412),f=c(53729);let g=[];function h(a,b=!1){void 0===a.timestamp&&(a.timestamp=new Date().getTime()),a.loggedIn=l(),a.staff=m(),a.bundler=f.A7,g.push(a),b?k():j()}let i=null;async function j(){await e.C,null==i&&(i=window.requestIdleCallback(k))}function k(){if(i=null,!g.length)return;let a=d.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!a)return;let b=JSON.stringify({stats:g});try{navigator.sendBeacon&&navigator.sendBeacon(a,b)}catch{}g=[]}function l(){return!!d.n4?.head?.querySelector('meta[name="user-login"]')?.content}function m(){return!!d.n4?.head?.querySelector('meta[name="user-staff"]')?.content}d.n4?.addEventListener("pagehide",k),d.n4?.addEventListener("visibilitychange",k)},31063(a,b,c){function d(a){return a.toLowerCase().replace(/-(.)/g,function(a,b){return b.toUpperCase()})}function e(a){let b={};for(let{name:c,value:e}of a.attributes)if(c.startsWith("data-optimizely-meta-")){let f=c.replace("data-optimizely-meta-","");e&&e.trim().length&&(b[d(f)]=e)}return b}c.d(b,{t:()=>e})},68379(a,b,c){var d=c(25019),e=c(82664),f=c(48266),g=c(45341);let h={handleError(a){j(a)}};function i(a){try{return window.localStorage?.getItem(a)}catch(b){return null}}async function j(a){if(!g.Gb||a.message.startsWith("Optimizely::InvalidExperimentError:"))return;let b=document.head?.querySelector('meta[name="browser-optimizely-client-errors-url"]')?.content;if(!b)return;let c={message:a.message,stack:a.stack,stacktrace:(0,d.cI)(a),sanitizedUrl:(0,e.S)()||window.location.href,user:(0,d.aJ)()||void 0};try{await fetch(b,{method:"post",body:JSON.stringify(c)})}catch{}}var k=c(67404),l=c(82918),m=c(64463),n=c(59753),o=c(31063);let p;!async function(){await (p=function(){(function a(){let b=i("optimizely.logLevel");b?f.ZP.setLogLevel(b):f.ZP.setLogger(null)})();let a=document.head.querySelector("meta[name=optimizely-datafile]")?.content;return f.ZP.createInstance({datafile:a,errorHandler:h})}()).onReady()}(),(0,n.on)("click","[data-optimizely-event]",function(a){if(!p)return;let b=a.currentTarget,c=b.getAttribute("data-optimizely-event")||"",[d,e]=c.trim().split(/\s*,\s*/),f=(0,o.t)(b);d&&e?p.track(d,e,f):d&&p.track(d,(0,l.b)(),f)}),(0,m.N7)("[data-optimizely-experiment]",a=>{if(!p)return;let b=a.getAttribute("data-optimizely-experiment");if(!b||a.hidden)return;let c=(0,o.t)(a),d=p.activate(b,(0,l.b)(),c);if(!d)return;let e=a.querySelectorAll("[data-optimizely-variation]");for(let f of e){let g=f.getAttribute("data-optimizely-variation");f.hidden=g!==d}});let q=document.querySelector('meta[name="enabled-homepage-translation-languages"]')?.getAttribute("content")?.split(",")||[],r=(0,k.$1)("_locale_experiment").length>0&&"ko"===(0,k.$1)("_locale_experiment")[0].value&&q.includes("ko");async function s(){let a="ko_homepage_translation",b=(0,l.b)(),c=k.$1("_locale")[0]?.value?.slice(0,2);p.setForcedVariation(a,b,c),p.activate(a,b);let d=document.querySelectorAll("[data-optimizely-variation]");for(let e of d)e.hidden=c!==e.getAttribute("data-optimizely-variation");for(let f of document.querySelectorAll('form[action^="/join"]'))f.addEventListener("submit",()=>{p.track("submit.homepage_signup",b)});for(let g of document.querySelectorAll('a[href^="/join"]'))g.addEventListener("click",()=>{p.track("click.homepage_signup",b)})}async function t(){document.getElementById("signup-form")?.addEventListener("submit",()=>{let a=(0,l.b)();p.activate("ko_homepage_translation",a),p.track("submit.create_account",a)})}async function u(){if(!p)return;let a=(0,l.b)();p.activate("test_experiment",a),p.track("test_event",a)}r&&"/"===window.location.pathname&&s(),r&&"/join"===window.location.pathname&&t(),"/settings/profile"===window.location.pathname&&u()},328(a,b,c){function d(){return crypto.randomUUID()}c.r(b),c.d(b,{v4:()=>d})},4412(a,b,c){c.d(b,{C:()=>f,x:()=>e});var d=c(86283);let e=d.n4?.readyState==="interactive"||d.n4?.readyState==="complete"?Promise.resolve():new Promise(a=>{d.n4?.addEventListener("DOMContentLoaded",()=>{a()})}),f=d.n4?.readyState==="complete"?Promise.resolve():new Promise(a=>{d.iG?.addEventListener("load",a)})},53729(a,b,c){c.d(b,{A7:()=>i,ko:()=>h,q1:()=>g});var d=c(15205),e=c(86283);let f=(0,d.Z)(function(){return e.n4?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}),g=(0,d.Z)(function(){return e.n4?.head?.querySelector('meta[name="is-private-instance"]')?.content==="true"}),h=(0,d.Z)(function(){return"enterprise"===f()}),i="webpack"},86283(a,b,c){c.d(b,{Qg:()=>d.Qg,iG:()=>e.iG,jX:()=>e.jX,n4:()=>e.n4,yF:()=>d.yF});var d=c(35647),e=c(73614)},73614(a,b,c){c.d(b,{iG:()=>e,jX:()=>f,n4:()=>d});let d="undefined"==typeof document?void 0:document,e="undefined"==typeof window?void 0:window,f="undefined"==typeof location?{pathname:"",origin:"",search:""}:location},35647(a,b,c){c.d(b,{Qg:()=>f,yF:()=>g});var d=c(73614);let e=void 0===d.n4,f=!e;function g(){return!!e||Boolean(d.n4.querySelector('react-app[data-ssr="true"]'))}}},a=>{var b=b=>a(a.s=b);a.O(0,["vendors-node_modules_selector-observer_dist_index_esm_js","vendors-node_modules_optimizely_optimizely-sdk_dist_optimizely_browser_es_min_js-node_modules-77839b"],()=>b(68379));var c=a.O()}])
//# sourceMappingURL=optimizely-b346b8fc5dbf.js.map
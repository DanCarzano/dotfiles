!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));const r=(e,t,n)=>{if(e.length<t.length)return"";const r=e.indexOf(t);if(-1===r)return"";const s=r+t.length,o=e.indexOf(n,s);let i="";return o!==s?i=-1!==o&&o>s||-1!==o?e.substring(s,o):e.substring(s):""===n&&(i=e.substring(s)),i},s=(e,t)=>{const n=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(t);if(n.length!==r.length)return!1;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==t[s])return!1}return!0}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(e,t)=>chrome.i18n?chrome.i18n.getMessage(e,t):e},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r="jidkidbbcafjabdphckchenhfomhnfma"},,function(e,t,n){"use strict";n.r(t);const r=["authorization","x-csrf-token","x-guest-token"],s=/[; ]_twitter_sess=([^\s;]*)/;let o=null,i={};const a=e=>{if(!e)return null;const t=e.match(s);return t?unescape(t[1]):null};var l=n(2),c=n(0),u=n(1);const d=e=>e?"twitter#channel:"+e:"",p=(e,t)=>e?t?`https://twitter.com/intent/user?user_id=${t}&screen_name=${e}`:`https://twitter.com/${e}/`:"",m=(e,t)=>{if(!e)return null;if(!t)return e.getAttribute("data-tweet-id");const n=e.querySelector("a[href*='/status/']");if(!n||!n.href)return null;const r=n.href.match(/status\/(\d+)/);return!r||r.length<2?null:r[1]},f=["https://api.twitter.com/1.1/*"],g=["requestHeaders","extraHeaders"];let y=null,h=!1,w=!1,b=null,v={},x=!0;const _=(e,t)=>new Promise((n,r)=>{e&&t?0!==Object.keys(v).length?y?(y.postMessage({type:"OnAPIRequest",mediaType:"twitter",data:{name:e,url:t,init:{credentials:"include",headers:{...v},referrerPolicy:"no-referrer-when-downgrade",method:"GET",redirect:"follow"}}}),y.onMessage.addListener((function t(s){if(y){if(!s||!s.data)return y.onMessage.removeListener(t),void r(new Error("Invalid message"));if("OnAPIResponse"===s.type){if(!s.data.name||!s.data.response&&!s.data.error)return y.onMessage.removeListener(t),void r(new Error("Invalid message"));if(s.data.name===e)return y.onMessage.removeListener(t),s.data.error?void r(new Error(s.data.error)):void n(s.data.response)}}else r(new Error("Invalid port"))}))):r(new Error("Invalid port")):r(new Error("Missing credential headers")):r(new Error("Invalid parameters"))}),T=(e,t)=>e&&t?(async e=>{if(!e)return Promise.reject(new Error("Invalid parameters"));return _("GetTweetDetails","https://api.twitter.com/1.1/statuses/show.json?id="+e)})(t).then(e=>({user:{id:e.user.id_str,screenName:e.user.screen_name,fullName:e.user.name,favIconUrl:e.user.profile_image_url_https.replace("_normal","")},post:{id:t,timestamp:e.created_at,text:e.text}})).catch(e=>(console.error(`Failed to fetch tweet details for ${t}: ${e.message}`),Promise.reject(e))):Promise.reject(new Error("Invalid parameters")),P=e=>{if("Enter"!==e.key&&"Space"!==e.code)return;const t=e.target;if(!t)return;const n=t.shadowRoot;if(!n)return;const r=n.querySelector(".js-actionButton");r&&r.click()},S=(e,t,n)=>{const r=document.createElement("div");r.className="ProfileTweet-action js-tooltip action-brave-tip",r.style.display="inline-block",r.style.minWidth="80px",r.style.textAlign=n?"right":"start",r.setAttribute("role","button"),r.setAttribute("tabindex","0"),r.setAttribute("data-original-title",u.a("twitterTipsHoverText")),r.addEventListener("keydown",P);const s=document.createElement("button");s.className="ProfileTweet-actionButton u-textUserColorHover js-actionButton",s.style.background="transparent",s.style.border="0",s.style.color="#657786",s.style.cursor="pointer",s.style.display="inline-block",s.style.fontSize="16px",s.style.lineHeight="1",s.style.outline="0",s.style.padding="0 2px",s.style.position="relative",s.type="button",s.onclick=function(n){if(x)T(e,t).then(e=>{e&&O(e)}).catch(t=>{console.error(`Failed to fetch tweet metadata for ${e}:`,t)});else{const n=((e,t)=>{if(!e)return null;const n=e.getElementsByClassName("tweet-text");if(!n||0===n.length)return null;const r=n[0],s=e.getElementsByClassName("js-short-timestamp");if(!s||0===s.length)return null;const o=s[0].getAttribute("data-time")||"";return{user:{id:e.getAttribute("data-user-id")||"",screenName:e.getAttribute("data-screen-name")||"",fullName:e.getAttribute("data-name")||"",favIconUrl:""},post:{id:t,timestamp:o,text:r.innerText||""}}})(e,t);n&&O(n)}n.stopPropagation()},x&&e&&(e=>{if(!e||!location.pathname.includes("/status/"))return!1;return!!e.querySelector("a[href*='how-to-tweet']")})(e)&&(s.style.marginTop="12px");const o=document.createElement("div");o.className="IconContainer js-tooltip",o.style.display="inline-block",o.style.lineHeight="0",o.style.position="relative",o.style.verticalAlign="middle",s.appendChild(o);const i=document.createElement("span");i.className="Icon Icon--medium",i.style.background="transparent",i.style.content='url(\'data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 105 100" style="enable-background:new 0 0 105 100;" xml:space="preserve"><style type="text/css">.st1{fill:%23662D91;}.st2{fill:%239E1F63;}.st3{fill:%23FF5000;}.st4{fill:%23FFFFFF;stroke:%23FF5000;stroke-width:0.83;stroke-miterlimit:10;}</style><title>BAT_icon</title><g id="Layer_2_1_"><g id="Layer_1-2"><polygon class="st1" points="94.8,82.6 47.4,55.4 0,82.9 "/><polygon class="st2" points="47.4,0 47.1,55.4 94.8,82.6 "/><polygon class="st3" points="0,82.9 47.2,55.9 47.4,0 "/><polygon class="st4" points="47.1,33.7 28,66.5 66.7,66.5 "/></g></g></svg>\')',i.style.display="inline-block",i.style.fontSize="18px",i.style.fontStyle="normal",i.style.height="16px",i.style.marginTop="5px",i.style.position="relative",i.style.verticalAlign="baseline",i.style.width="16px",o.appendChild(i);const a=document.createElement("span");a.className="ProfileTweet-actionCount",a.style.color="#657786",a.style.display="inline-block",a.style.fontSize="12px",a.style.fontWeight="bold",a.style.lineHeight="1",a.style.marginLeft="6px",a.style.position="relative",a.style.verticalAlign="text-bottom",s.appendChild(a);const l=document.createElement("span");l.className="ProfileTweet-actionCountForPresentation",l.textContent=u.a("twitterTipsIconLabel"),a.appendChild(l);const c=r.attachShadow({mode:"open"});c.appendChild(s);const d=document.createElement("style");return d.appendChild(document.createTextNode(".ProfileTweet-actionButton :hover { color: #FB542B }")),c.appendChild(d),r},E=()=>{clearTimeout(b),x=!0;let e=document.querySelectorAll('[role="article"]');0===e.length&&(e=document.querySelectorAll(".tweet"),x=!1);for(let t=0;t<e.length;++t){const n=m(e[t],x);if(!n)continue;let r;if(r=x?e[t].querySelector('[role="group"]'):e[t].querySelector(".js-actions"),!r)continue;if(0===r.getElementsByClassName("action-brave-tip").length){const s=(r.querySelectorAll(":scope > div").length||0)>3,o=S(e[t],n,s);r.appendChild(o)}}b=setTimeout(E,3e3)},j=(e,t)=>{if("twitter"!==e||!t||!t.requestHeaders)return;const n=(e=>{if(!e)return{};for(const t of e)if("Cookie"===t.name){const e=a(t.value);e!==o&&(o=e,i={})}else(r.includes(t.name)||t.name.startsWith("x-twitter-"))&&(i[t.name]=t.value);return i})(t.requestHeaders);c.a(n,v)||(v=n,N(),E())},k=()=>{w||(w=!0,y&&(y.postMessage({type:"RegisterOnUpdatedTab",mediaType:"twitter"}),y.onMessage.addListener((function(e){var t;if(e.data)switch(e.type){case"OnUpdatedTab":(t=e.data.changeInfo)&&t.url&&N()}}))))},I=e=>{const t=(e=>{const t=new URLSearchParams(e.search);if(!t)return"";const n=t.get("screen_name");if(n)return unescape(n);if(!e.pathname)return"";const r=e.pathname.split("/").filter(e=>e);return r&&0!==r.length?r[0]:""})(e);t&&(async e=>{if(!e)return Promise.reject(new Error("Invalid parameters"));return _("GetUserDetails","https://api.twitter.com/1.1/users/show.json?screen_name="+e)})(t).then(e=>{const n=e.id_str,r=d(n),s=t,o=e.profile_image_url_https.replace("_normal",""),i=p(t,n);y&&y.postMessage({type:"SavePublisherVisit",mediaType:"twitter",data:{url:i,publisherKey:r,publisherName:s,mediaKey:"",favIconUrl:o}})}).catch(e=>{console.error(`Failed to fetch user details for ${t}: ${e.message}`)})},N=()=>{const e=new URL(location.href);(e=>{if(["/","/about","/home","/login","/logout","/messages","/privacy","/search","/settings","/tos"].includes(e))return!0;const t=["/account/","/compose/","/explore","/hashtag/","/i/","/messages/","/notifications","/settings/","/who_to_follow/","/?login","/?logout"];for(const n of t)if(e.startsWith(n))return!0;return!1})(e.pathname)?y&&y.postMessage({type:"SavePublisherVisit",mediaType:"",data:{url:"https://twitter.com",publisherKey:"twitter.com",publisherName:"twitter.com",mediaKey:"",favIconUrl:""}}):I(e)},O=e=>{if(!e)return;const t=p(e.user.screenName,e.user.id),n=d(e.user.id),r=e.user.screenName,s=e.user.screenName;y&&y.postMessage({type:"TipUser",mediaType:"twitter",data:{url:t,publisherKey:n,publisherName:r,publisherScreenName:s,favIconUrl:e.user.favIconUrl,postId:e.post.id,postTimestamp:e.post.timestamp,postText:e.post.text}})};chrome.extension.inIncognitoContext||(y=chrome.runtime.connect(l.a,{name:"Greaselion"}),document.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState&&(console.debug("visibilitychange event triggered"),N(),E())})),h||(h=!0,y&&(y.postMessage({type:"RegisterOnSendHeadersWebRequest",mediaType:"twitter",data:{urlPatterns:f,extra:g}}),y.onMessage.addListener((function(e){if(e.data)switch(e.type){case"OnSendHeadersWebRequest":j(e.mediaType,e.data.details)}})))),k(),console.info("Greaselion script loaded: twitter.ts"))}]);
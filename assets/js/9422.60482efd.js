/*! For license information please see 9422.60482efd.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9422],{6279:(t,e,s)=>{s.d(e,{a:()=>n,b:()=>a});var r=s(1137),i=s(927),n=class extends Error{static{(0,i.a)(this,"OramaClientNotInitializedError")}constructor(){super("Orama Client is not initialized")}},a=class{static{(0,i.a)(this,"ChatService")}constructor(t){this.sendQuestion=t=>{if(!this.oramaClient)throw new n;return this.answerSession||(this.answerSession=this.oramaClient.createAnswerSession({events:{onStateChange:(0,i.a)((t=>{let e=t.filter((t=>!!t.query));r.b.interactions=e.map(((e,s)=>{var i;let n=r.a.loading;e.aborted?n=r.a.aborted:e.loading&&e.sources?n=r.a.rendering:e.loading&&e.response?n=r.a.streaming:!e.loading&&e.response&&(n=r.a.done);let a=null===(i=e.sources)||void 0===i?void 0:i.map((t=>t.document));return{query:e.query,interactionId:e.interactionId,response:e.response,relatedQueries:e.relatedQueries,status:n,latest:t.length-1===s,sources:a}}))}),"onStateChange")}})),this.answerSession.ask({term:t,related:{howMany:3,format:"question"}}).catch((t=>{r.b.interactions=r.b.interactions.map(((t,e)=>e===r.b.interactions.length-1?Object.assign(Object.assign({},t),{status:r.a.error}):t)),console.error(t)}))},this.abortAnswer=()=>{if(!this.answerSession)throw new n;this.answerSession.abortAnswer()},this.regenerateLatest=async()=>{if(!this.answerSession)throw new n;this.answerSession.regenerateLast({stream:!1})},this.resetChat=async()=>{if(!this.answerSession)throw new n;r.b.interactions.length<1||(["loading","rendering","streaming"].includes(r.b.interactions[r.b.interactions.length-1].status)&&this.answerSession.abortAnswer(),this.answerSession.clearSession())},this.oramaClient=t}}},210:(t,e,s)=>{s.d(e,{a:()=>u});var r=s(4218),i=s(927),n=(0,i.a)(((t,e,s)=>{let r=t.get(e);r?r.includes(s)||r.push(s):t.set(e,[s])}),"appendToMap"),a=(0,i.a)(((t,e)=>{let s;return(...r)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,t(...r)}),e)}}),"debounce"),o=(0,i.a)((t=>!("isConnected"in t)||t.isConnected),"isConnected"),l=a((t=>{for(let e of t.keys())t.set(e,t.get(e).filter(o))}),2e3),h=(0,i.a)((()=>{if("function"!=typeof r.f)return{};let t=new Map;return{dispose:(0,i.a)((()=>t.clear()),"dispose"),get:(0,i.a)((e=>{let s=(0,r.f)();s&&n(t,e,s)}),"get"),set:(0,i.a)((e=>{let s=t.get(e);s&&t.set(e,s.filter(r.g)),l(t)}),"set"),reset:(0,i.a)((()=>{t.forEach((t=>t.forEach(r.g))),l(t)}),"reset")}}),"stencilSubscription"),c=(0,i.a)((t=>"function"==typeof t?t():t),"unwrap"),d=(0,i.a)(((t,e=(t,e)=>t!==e)=>{let s=c(t),r=new Map(Object.entries(s??{})),n={dispose:[],get:[],set:[],reset:[]},a=(0,i.a)((()=>{var e;r=new Map(Object.entries(null!==(e=c(t))&&void 0!==e?e:{})),n.reset.forEach((t=>t()))}),"reset"),o=(0,i.a)((()=>{n.dispose.forEach((t=>t())),a()}),"dispose"),l=(0,i.a)((t=>(n.get.forEach((e=>e(t))),r.get(t))),"get"),h=(0,i.a)(((t,s)=>{let i=r.get(t);e(s,i,t)&&(r.set(t,s),n.set.forEach((e=>e(t,s,i))))}),"set"),d=typeof Proxy>"u"?{}:new Proxy(s,{get:(t,e)=>l(e),ownKeys:t=>Array.from(r.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(t,e)=>r.has(e),set:(t,e,s)=>(h(e,s),!0)}),u=(0,i.a)(((t,e)=>(n[t].push(e),()=>{p(n[t],e)})),"on");return{state:d,get:l,set:h,on:u,onChange:(0,i.a)(((e,s)=>{let r=u("set",((t,r)=>{t===e&&s(r)})),i=u("reset",(()=>s(c(t)[e])));return()=>{r(),i()}}),"onChange"),use:(0,i.a)(((...t)=>{let e=t.reduce(((t,e)=>(e.set&&t.push(u("set",e.set)),e.get&&t.push(u("get",e.get)),e.reset&&t.push(u("reset",e.reset)),e.dispose&&t.push(u("dispose",e.dispose)),t)),[]);return()=>e.forEach((t=>t()))}),"use"),dispose:o,reset:a,forceUpdate:(0,i.a)((t=>{let e=r.get(t);n.set.forEach((s=>s(t,e,e)))}),"forceUpdate")}}),"createObservableMap"),p=(0,i.a)(((t,e)=>{let s=t.indexOf(e);s>=0&&(t[s]=t[t.length-1],t.length--)}),"removeFromArray"),u=(0,i.a)(((t,e)=>{let s=d(t,e);return s.use(h()),s}),"createStore")},1137:(t,e,s)=>{s.d(e,{a:()=>r,b:()=>o,c:()=>l});var r,i,n=s(210);(i=r||(r={})).idle="idle",i.loading="loading",i.rendering="rendering",i.streaming="streaming",i.error="error",i.aborted="aborted",i.done="done";var a=(0,n.a)({chatService:null,interactions:[],sourceBaseURL:"",sourcesMap:{title:"title",description:"description",path:"path"}}),{state:o}=a,l=function(t,e){var s={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(s[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(s[r[i]]=t[r[i]])}return s}(a,["state"])},5326:(t,e,s)=>{s.d(e,{a:()=>c,b:()=>F,c:()=>G,d:()=>$t,e:()=>yt,f:()=>Ht});var r=s(927),i=globalThis,n=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap,l=class{static{(0,r.a)(this,"l$2")}constructor(t,e,s){if(this._$cssResult$=!0,s!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(n&&void 0===t){let s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}},h=(0,r.a)((t=>new l("string"==typeof t?t:t+"",void 0,a)),"h$1"),c=(0,r.a)(((t,...e)=>{let s=1===t.length?t[0]:e.reduce(((e,s,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1]),t[0]);return new l(s,t,a)}),"p$3"),d=(0,r.a)(((t,e)=>{if(n)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(let s of e){let e=document.createElement("style"),r=i.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=s.cssText,t.appendChild(e)}}),"d$2"),p=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return h(e)})(t):t,{is:u,defineProperty:f,getOwnPropertyDescriptor:g,getOwnPropertyNames:v,getOwnPropertySymbols:$,getPrototypeOf:m}=Object,_=globalThis,y=_.trustedTypes,b=y?y.emptyScript:"",A=_.reactiveElementPolyfillSupport,w=(0,r.a)(((t,e)=>t),"l$1"),S={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},E=(0,r.a)(((t,e)=>!u(t,e)),"y$2"),C={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:E};null!=Symbol.metadata||(Symbol.metadata=Symbol("metadata")),null!=_.litPropertyMetadata||(_.litPropertyMetadata=new WeakMap);var x,P=class extends HTMLElement{static{(0,r.a)(this,"c")}static addInitializer(t){var e;this._$Ei(),(null!=(e=this.l)?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=C){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);void 0!==r&&f(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){var r;let{get:i,set:n}=null!=(r=g(this.prototype,t))?r:{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){let r=i?.call(this);n.call(this,e),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return null!=(e=this.elementProperties.get(t))?e:C}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;let t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){let t=this.properties,e=[...v(t),...$(t)];for(let s of e)this.createProperty(s,t[s])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let t=this._$Eu(e,s);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let t of s)e.unshift(p(t))}else void 0!==t&&e.push(p(t));return e}static _$Eu(t,e){let s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((t=>t(this)))}addController(t){var e,s;(null!=(e=this._$EO)?e:this._$EO=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(s=t.hostConnected)||s.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var t;let e=null!=(t=this.shadowRoot)?t:this.attachShadow(this.constructor.shadowRootOptions);return d(e,this.constructor.elementStyles),e}connectedCallback(){var t;null!=this.renderRoot||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var s;let r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(void 0!==i&&!0===r.reflect){let n=(void 0!==(null==(s=r.converter)?void 0:s.toAttribute)?r.converter:S).toAttribute(e,r.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var s;let r=this.constructor,i=r._$Eh.get(t);if(void 0!==i&&this._$Em!==i){let t=r.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(s=t.converter)?void 0:s.fromAttribute)?t.converter:S;this._$Em=i,this[i]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){var r;if(void 0!==t){if(null!=s||(s=this.constructor.getPropertyOptions(t)),!(null!=(r=s.hasChanged)?r:E)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){var r;this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(null!=(r=this._$Ej)?r:this._$Ej=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(null!=this.renderRoot||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach((t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EC(t,this[t])))),this._$EU()}updated(t){}firstUpdated(t){}};P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[w("elementProperties")]=new Map,P[w("finalized")]=new Map,A?.({ReactiveElement:P}),(null!=(x=_.reactiveElementVersions)?x:_.reactiveElementVersions=[]).push("2.0.4");var O=globalThis,U=O.trustedTypes,M=U?U.createPolicy("lit-html",{createHTML:(0,r.a)((t=>t),"createHTML")}):void 0,H="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+T,z=`<${k}>`,N=document,R=(0,r.a)((()=>N.createComment("")),"x"),j=(0,r.a)((t=>null===t||"object"!=typeof t&&"function"!=typeof t),"H"),L=Array.isArray,I=(0,r.a)((t=>L(t)||"function"==typeof t?.[Symbol.iterator]),"Z"),B="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,q=/>/g,Z=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,K=/"/g,Q=/^(?:script|style|textarea|title)$/i,J=(0,r.a)((t=>(e,...s)=>({_$litType$:t,strings:e,values:s})),"O$1"),F=J(1),G=J(2),X=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),tt=new WeakMap,et=N.createTreeWalker(N,129);function st(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==M?M.createHTML(e):e}(0,r.a)(st,"z");var rt=(0,r.a)(((t,e)=>{let s,r=t.length-1,i=[],n=2===e?"<svg>":"",a=D;for(let o=0;o<r;o++){let e,r,l=t[o],h=-1,c=0;for(;c<l.length&&(a.lastIndex=c,r=a.exec(l),null!==r);)c=a.lastIndex,a===D?"!--"===r[1]?a=V:void 0!==r[1]?a=q:void 0!==r[2]?(Q.test(r[2])&&(s=RegExp("</"+r[2],"g")),a=Z):void 0!==r[3]&&(a=Z):a===Z?">"===r[0]?(a=s??D,h=-1):void 0===r[1]?h=-2:(h=a.lastIndex-r[2].length,e=r[1],a=void 0===r[3]?Z:'"'===r[3]?K:W):a===K||a===W?a=Z:a===V||a===q?a=D:(a=Z,s=void 0);let d=a===Z&&t[o+1].startsWith("/>")?" ":"";n+=a===D?l+z:h>=0?(i.push(e),l.slice(0,h)+H+l.slice(h)+T+d):l+T+(-2===h?o:d)}return[st(t,n+(t[r]||"<?>")+(2===e?"</svg>":"")),i]}),"q"),it=class t{static{(0,r.a)(this,"T")}constructor({strings:e,_$litType$:s},r){let i;this.parts=[];let n=0,a=0,o=e.length-1,l=this.parts,[h,c]=rt(e,s);if(this.el=t.createElement(h,r),et.currentNode=this.el.content,2===s){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=et.nextNode())&&l.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(let t of i.getAttributeNames())if(t.endsWith(H)){let e=c[a++],s=i.getAttribute(t).split(T),r=/([.?@])?(.*)/.exec(e);l.push({type:1,index:n,name:r[2],strings:s,ctor:"."===r[1]?ct:"?"===r[1]?dt:"@"===r[1]?pt:ht}),i.removeAttribute(t)}else t.startsWith(T)&&(l.push({type:6,index:n}),i.removeAttribute(t));if(Q.test(i.tagName)){let t=i.textContent.split(T),e=t.length-1;if(e>0){i.textContent=U?U.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],R()),et.nextNode(),l.push({type:2,index:++n});i.append(t[e],R())}}}else if(8===i.nodeType)if(i.data===k)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(T,t+1));)l.push({type:7,index:n}),t+=T.length-1}n++}}static createElement(t,e){let s=N.createElement("template");return s.innerHTML=t,s}};function nt(t,e,s=t,r){var i,n,a;if(e===X)return e;let o=void 0!==r?null==(i=s._$Co)?void 0:i[r]:s._$Cl,l=j(e)?void 0:e._$litDirective$;return o?.constructor!==l&&(null==(n=o?._$AO)||n.call(o,!1),void 0===l?o=void 0:(o=new l(t),o._$AT(t,s,r)),void 0!==r?(null!=(a=s._$Co)?a:s._$Co=[])[r]=o:s._$Cl=o),void 0!==o&&(e=nt(t,o._$AS(t,e.values),o,r)),e}(0,r.a)(nt,"f$1");var at,ot=class{static{(0,r.a)(this,"G")}constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:s},parts:r}=this._$AD,i=(null!=(e=t?.creationScope)?e:N).importNode(s,!0);et.currentNode=i;let n=et.nextNode(),a=0,o=0,l=r[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new lt(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new ut(n,this,t)),this._$AV.push(e),l=r[++o]}a!==l?.index&&(n=et.nextNode(),a++)}return et.currentNode=N,i}p(t){let e=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},lt=class t{static{(0,r.a)(this,"b$1")}get _$AU(){var t,e;return null!=(e=null==(t=this._$AM)?void 0:t._$AU)?e:this._$Cv}constructor(t,e,s,r){var i;this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=null==(i=r?.isConnected)||i}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=nt(this,t,e),j(t)?t===Y||null==t||""===t?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==X&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):I(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==Y&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){var e;let{values:s,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=it.createElement(st(r.h,r.h[0]),this.options)),r);if((null==(e=this._$AH)?void 0:e._$AD)===i)this._$AH.p(s);else{let t=new ot(i,this),e=t.u(this.options);t.p(s),this.T(e),this._$AH=t}}_$AC(t){let e=tt.get(t.strings);return void 0===e&&tt.set(t.strings,e=new it(t)),e}k(e){L(this._$AH)||(this._$AH=[],this._$AR());let s,r=this._$AH,i=0;for(let n of e)i===r.length?r.push(s=new t(this.S(R()),this.S(R()),this,this.options)):s=r[i],s._$AI(n),i++;i<r.length&&(this._$AR(s&&s._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null==(s=this._$AP)||s.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}},ht=class{static{(0,r.a)(this,"M")}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,i){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Y}_$AI(t,e=this,s,r){let i=this.strings,n=!1;if(void 0===i)t=nt(this,t,e,0),n=!j(t)||t!==this._$AH&&t!==X,n&&(this._$AH=t);else{let r,a,o=t;for(t=i[0],r=0;r<i.length-1;r++)a=nt(this,o[s+r],e,r),a===X&&(a=this._$AH[r]),n||(n=!j(a)||a!==this._$AH[r]),a===Y?t=Y:t!==Y&&(t+=(a??"")+i[r+1]),this._$AH[r]=a}n&&!r&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ct=class extends ht{static{(0,r.a)(this,"J")}constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}},dt=class extends ht{static{(0,r.a)(this,"K")}constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Y)}},pt=class extends ht{static{(0,r.a)(this,"Q")}constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){var s;if((t=null!=(s=nt(this,t,e,0))?s:Y)===X)return;let r=this._$AH,i=t===Y&&r!==Y||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==Y&&(r===Y||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!=(s=null==(e=this.options)?void 0:e.host)?s:this.element,t):this._$AH.handleEvent(t)}},ut=class{static{(0,r.a)(this,"X")}constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){nt(this,t)}},ft=O.litHtmlPolyfillSupport;ft?.(it,lt),(null!=(at=O.litHtmlVersions)?at:O.litHtmlVersions=[]).push("3.1.4");var gt,vt=(0,r.a)(((t,e,s)=>{var r,i;let n=null!=(r=s?.renderBefore)?r:e,a=n._$litPart$;if(void 0===a){let t=null!=(i=s?.renderBefore)?i:null;n._$litPart$=a=new lt(e.insertBefore(R(),t),t,void 0,s??{})}return a._$AI(t),a}),"et"),$t=class extends P{static{(0,r.a)(this,"n")}constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;let e=super.createRenderRoot();return null!=(t=this.renderOptions).renderBefore||(t.renderBefore=e.firstChild),e}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=vt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return X}};$t._$litElement$=!0,$t.finalized=!0,null==(gt=globalThis.litElementHydrateSupport)||gt.call(globalThis,{LitElement:$t});var mt,_t=globalThis.litElementPolyfillSupport;_t?.({LitElement:$t}),(null!=(mt=globalThis.litElementVersions)?mt:globalThis.litElementVersions=[]).push("4.0.6");var yt=(0,r.a)((t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}),"s"),bt=Object.defineProperty,At=Object.defineProperties,wt=Object.getOwnPropertyDescriptors,St=Object.getOwnPropertySymbols,Et=Object.prototype.hasOwnProperty,Ct=Object.prototype.propertyIsEnumerable,xt=(0,r.a)(((t,e,s)=>e in t?bt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s),"d"),Pt=(0,r.a)(((t,e)=>{for(var s in e||(e={}))Et.call(e,s)&&xt(t,s,e[s]);if(St)for(var s of St(e))Ct.call(e,s)&&xt(t,s,e[s]);return t}),"l"),Ot=(0,r.a)(((t,e)=>At(t,wt(e))),"u"),Ut={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:E},Mt=(0,r.a)(((t=Ut,e,s)=>{let{kind:r,metadata:i}=s,n=globalThis.litPropertyMetadata.get(i);if(void 0===n&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(s.name,t),"accessor"===r){let{name:r}=s;return{set(s){let i=e.get.call(this);e.set.call(this,s),this.requestUpdate(r,i,t)},init(e){return void 0!==e&&this.P(r,void 0,t),e}}}if("setter"===r){let{name:r}=s;return function(s){let i=this[r];e.call(this,s),this.requestUpdate(r,i,t)}}throw Error("Unsupported decorator location: "+r)}),"w");function Ht(t){return(e,s)=>"object"==typeof s?Mt(t,e,s):((t,e,s)=>{let r=e.hasOwnProperty(s);return e.constructor.createProperty(s,r?Ot(Pt({},t),{wrapped:!0}):t),r?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}(0,r.a)(Ht,"O")},9422:(t,e,s)=>{s.r(e),s.d(e,{orama_chat_box:()=>u});var r=s(6279),i=s(2511),n=s(1137),a=s(5326),o=(s(210),s(4218)),l=s(927),h=Object.defineProperty,c=Object.getOwnPropertyDescriptor,d=(0,l.a)(((t,e,s,r)=>{for(var i,n=r>1?void 0:r?c(e,s):e,a=t.length-1;a>=0;a--)(i=t[a])&&(n=(r?i(e,s,n):i(n))||n);return r&&n&&h(e,s,n),n}),"o"),p=class extends a.d{static{(0,l.a)(this,"t")}constructor(){super(...arguments),this.size="1em",this.weight="regular",this.color="currentColor",this.mirrored=!1}render(){var t;return a.b`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored?"scale(-1, 1)":null}
    >
      ${p.weightsMap.get(null!=(t=this.weight)?t:"regular")}
    </svg>`}};p.weightsMap=new Map([["thin",a.c`<path d="M236,56v48a4,4,0,0,1-4,4H184a4,4,0,0,1,0-8h37.7L187.53,68.69l-.13-.12a84,84,0,1,0-1.75,120.51,4,4,0,0,1,5.5,5.82A91.43,91.43,0,0,1,128,220h-1.26A92,92,0,1,1,193,62.84l35,32.05V56a4,4,0,1,1,8,0Z"/>`],["light",a.c`<path d="M238,56v48a6,6,0,0,1-6,6H184a6,6,0,0,1,0-12h32.55l-30.38-27.8c-.06-.06-.12-.13-.19-.19a82,82,0,1,0-1.7,117.65,6,6,0,0,1,8.24,8.73A93.46,93.46,0,0,1,128,222h-1.28A94,94,0,1,1,194.37,61.4L226,90.35V56a6,6,0,1,1,12,0Z"/>`],["regular",a.c`<path d="M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z"/>`],["bold",a.c`<path d="M244,56v48a12,12,0,0,1-12,12H184a12,12,0,1,1,0-24H201.1l-19-17.38c-.13-.12-.26-.24-.38-.37A76,76,0,1,0,127,204h1a75.53,75.53,0,0,0,52.15-20.72,12,12,0,0,1,16.49,17.45A99.45,99.45,0,0,1,128,228h-1.37A100,100,0,1,1,198.51,57.06L220,76.72V56a12,12,0,0,1,24,0Z"/>`],["fill",a.c`<path d="M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1-5.66-13.66l17-17-10.55-9.65-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,1,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60l10.93,10L226.34,50.3A8,8,0,0,1,240,56Z"/>`],["duotone",a.c`<path d="M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z" opacity="0.2"/><path d="M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z"/>`]]),p.styles=a.a`
    :host {
      display: contents;
    }
  `,d([(0,a.f)({type:String,reflect:!0})],p.prototype,"size",2),d([(0,a.f)({type:String,reflect:!0})],p.prototype,"weight",2),d([(0,a.f)({type:String,reflect:!0})],p.prototype,"color",2),d([(0,a.f)({type:Boolean,reflect:!0})],p.prototype,"mirrored",2),p=d([(0,a.e)("ph-arrow-clockwise")],p);var u=class{static{(0,l.a)(this,"ChatBox")}constructor(t){(0,o.a)(this,t),this.index=void 0,this.clientInstance=void 0,this.sourceBaseUrl=void 0,this.placeholder=void 0,this.sourcesMap=void 0,this.suggestions=void 0,this.oramaClient=void 0,this.componentID=(0,i.e)("chat-box")}indexChanged(){this.startChatService()}componentWillLoad(){this.el.id=this.componentID,this.startChatService()}startChatService(){(0,i.c)(this.el,this.index,this.clientInstance),this.oramaClient=this.clientInstance||(0,i.d)(this.index),n.b.chatService=new r.b(this.oramaClient)}render(){return n.b.chatService?(0,o.b)(o.c,{class:"theme-dark"},(0,o.b)("orama-chat",{placeholder:this.placeholder,sourceBaseUrl:this.sourceBaseUrl,sourcesMap:this.sourcesMap,suggestions:this.suggestions})):(0,o.b)("orama-text",{as:"p"},"Unable to initialize chat service")}get el(){return(0,o.d)(this)}static get watchers(){return{index:["indexChanged"]}}};u.style=":host{display:flex;flex-grow:1}.header{background:#fbfbfb;background:var(--background-color-primary,#fbfbfb);padding:.75rem 1rem;padding:var(--spacing-m,calc(12rem/var(--orama-base-font-size, 16))) var(--spacing-l,calc(16rem/var(--orama-base-font-size, 16)));text-align:end;transition:opacity .2s}.header.hidden button{opacity:0;pointer-events:none}.header button{align-items:center;background-color:transparent;border:none;border-radius:.5rem;border-radius:var(--radius-s,calc(8rem/var(--orama-base-font-size, 16)));cursor:pointer;display:inline-flex;font-size:.875rem;font-size:var(--font-size-sm,calc(14rem/var(--orama-base-font-size, 16)));gap:.25rem;gap:var(--spacing-xs,calc(4rem/var(--orama-base-font-size, 16)));padding:.125rem .25rem;padding:var(--spacing-2xs,calc(2rem/var(--orama-base-font-size, 16))) var(--spacing-xs,calc(4rem/var(--orama-base-font-size, 16)));transition:color .2s;transition:background-color .2s}.header button,.header button:hover{color:#99989d;color:var(--text-color-tertiary,#99989d)}.header button:hover{background-color:#eee9f6;background-color:var(--background-color-tertiary,#eee9f6)}"}}]);
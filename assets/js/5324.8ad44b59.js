/*! For license information please see 5324.8ad44b59.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5324],{4437:(t,e,s)=>{s.d(e,{a:()=>u});var r=s(7613),i=s(8364),a=(0,i.a)(((t,e,s)=>{let r=t.get(e);r?r.includes(s)||r.push(s):t.set(e,[s])}),"appendToMap"),n=(0,i.a)(((t,e)=>{let s;return(...r)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,t(...r)}),e)}}),"debounce"),o=(0,i.a)((t=>!("isConnected"in t)||t.isConnected),"isConnected"),l=n((t=>{for(let e of t.keys())t.set(e,t.get(e).filter(o))}),2e3),h=(0,i.a)((()=>{if("function"!=typeof r.f)return{};let t=new Map;return{dispose:(0,i.a)((()=>t.clear()),"dispose"),get:(0,i.a)((e=>{let s=(0,r.f)();s&&a(t,e,s)}),"get"),set:(0,i.a)((e=>{let s=t.get(e);s&&t.set(e,s.filter(r.g)),l(t)}),"set"),reset:(0,i.a)((()=>{t.forEach((t=>t.forEach(r.g))),l(t)}),"reset")}}),"stencilSubscription"),c=(0,i.a)((t=>"function"==typeof t?t():t),"unwrap"),d=(0,i.a)(((t,e=(t,e)=>t!==e)=>{let s=c(t),r=new Map(Object.entries(s??{})),a={dispose:[],get:[],set:[],reset:[]},n=(0,i.a)((()=>{var e;r=new Map(Object.entries(null!==(e=c(t))&&void 0!==e?e:{})),a.reset.forEach((t=>t()))}),"reset"),o=(0,i.a)((()=>{a.dispose.forEach((t=>t())),n()}),"dispose"),l=(0,i.a)((t=>(a.get.forEach((e=>e(t))),r.get(t))),"get"),h=(0,i.a)(((t,s)=>{let i=r.get(t);e(s,i,t)&&(r.set(t,s),a.set.forEach((e=>e(t,s,i))))}),"set"),d=typeof Proxy>"u"?{}:new Proxy(s,{get:(t,e)=>l(e),ownKeys:t=>Array.from(r.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(t,e)=>r.has(e),set:(t,e,s)=>(h(e,s),!0)}),u=(0,i.a)(((t,e)=>(a[t].push(e),()=>{p(a[t],e)})),"on");return{state:d,get:l,set:h,on:u,onChange:(0,i.a)(((e,s)=>{let r=u("set",((t,r)=>{t===e&&s(r)})),i=u("reset",(()=>s(c(t)[e])));return()=>{r(),i()}}),"onChange"),use:(0,i.a)(((...t)=>{let e=t.reduce(((t,e)=>(e.set&&t.push(u("set",e.set)),e.get&&t.push(u("get",e.get)),e.reset&&t.push(u("reset",e.reset)),e.dispose&&t.push(u("dispose",e.dispose)),t)),[]);return()=>e.forEach((t=>t()))}),"use"),dispose:o,reset:n,forceUpdate:(0,i.a)((t=>{let e=r.get(t);a.set.forEach((s=>s(t,e,e)))}),"forceUpdate")}}),"createObservableMap"),p=(0,i.a)(((t,e)=>{let s=t.indexOf(e);s>=0&&(t[s]=t[t.length-1],t.length--)}),"removeFromArray"),u=(0,i.a)(((t,e)=>{let s=d(t,e);return s.use(h()),s}),"createStore")},9660:(t,e,s)=>{var r=s(945),i=s(8364),a=Object.defineProperty,n=Object.getOwnPropertyDescriptor,o=(0,i.a)(((t,e,s,r)=>{for(var i,o=r>1?void 0:r?n(e,s):e,l=t.length-1;l>=0;l--)(i=t[l])&&(o=(r?i(e,s,o):i(o))||o);return r&&o&&a(e,s,o),o}),"s"),l=class extends r.d{static{(0,i.a)(this,"t")}constructor(){super(...arguments),this.size="1em",this.weight="regular",this.color="currentColor",this.mirrored=!1}render(){var t;return r.b`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored?"scale(-1, 1)":null}
    >
      ${l.weightsMap.get(null!=(t=this.weight)?t:"regular")}
    </svg>`}};l.weightsMap=new Map([["thin",r.c`<path d="M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"/>`],["light",r.c`<path d="M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"/>`],["regular",r.c`<path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"/>`],["bold",r.c`<path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"/>`],["fill",r.c`<path d="M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"/>`],["duotone",r.c`<path d="M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z" opacity="0.2"/><path d="M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"/>`]]),l.styles=r.a`
    :host {
      display: contents;
    }
  `,o([(0,r.f)({type:String,reflect:!0})],l.prototype,"size",2),o([(0,r.f)({type:String,reflect:!0})],l.prototype,"weight",2),o([(0,r.f)({type:String,reflect:!0})],l.prototype,"color",2),o([(0,r.f)({type:Boolean,reflect:!0})],l.prototype,"mirrored",2),l=o([(0,r.e)("ph-magnifying-glass")],l)},7712:(t,e,s)=>{s.d(e,{a:()=>i,b:()=>a});var r=(0,s(4437).a)({open:!1,currentTask:"search",currentTerm:""}),{state:i}=r,a=function(t,e){var s={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(s[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(s[r[i]]=t[r[i]])}return s}(r,["state"])},945:(t,e,s)=>{s.d(e,{a:()=>c,b:()=>F,c:()=>G,d:()=>yt,e:()=>_t,f:()=>Tt});var r=s(8364),i=globalThis,a=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap,l=class{static{(0,r.a)(this,"l$2")}constructor(t,e,s){if(this._$cssResult$=!0,s!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(a&&void 0===t){let s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}},h=(0,r.a)((t=>new l("string"==typeof t?t:t+"",void 0,n)),"h$1"),c=(0,r.a)(((t,...e)=>{let s=1===t.length?t[0]:e.reduce(((e,s,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1]),t[0]);return new l(s,t,n)}),"p$3"),d=(0,r.a)(((t,e)=>{if(a)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(let s of e){let e=document.createElement("style"),r=i.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=s.cssText,t.appendChild(e)}}),"d$2"),p=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return h(e)})(t):t,{is:u,defineProperty:f,getOwnPropertyDescriptor:$,getOwnPropertyNames:m,getOwnPropertySymbols:y,getPrototypeOf:g}=Object,v=globalThis,_=v.trustedTypes,b=_?_.emptyScript:"",A=v.reactiveElementPolyfillSupport,S=(0,r.a)(((t,e)=>t),"l$1"),E={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},w=(0,r.a)(((t,e)=>!u(t,e)),"y$2"),C={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:w};null!=Symbol.metadata||(Symbol.metadata=Symbol("metadata")),null!=v.litPropertyMetadata||(v.litPropertyMetadata=new WeakMap);var P,O=class extends HTMLElement{static{(0,r.a)(this,"c")}static addInitializer(t){var e;this._$Ei(),(null!=(e=this.l)?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=C){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);void 0!==r&&f(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){var r;let{get:i,set:a}=null!=(r=$(this.prototype,t))?r:{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){let r=i?.call(this);a.call(this,e),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return null!=(e=this.elementProperties.get(t))?e:C}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;let t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){let t=this.properties,e=[...m(t),...y(t)];for(let s of e)this.createProperty(s,t[s])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let t=this._$Eu(e,s);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let t of s)e.unshift(p(t))}else void 0!==t&&e.push(p(t));return e}static _$Eu(t,e){let s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((t=>t(this)))}addController(t){var e,s;(null!=(e=this._$EO)?e:this._$EO=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(s=t.hostConnected)||s.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var t;let e=null!=(t=this.shadowRoot)?t:this.attachShadow(this.constructor.shadowRootOptions);return d(e,this.constructor.elementStyles),e}connectedCallback(){var t;null!=this.renderRoot||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var s;let r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(void 0!==i&&!0===r.reflect){let a=(void 0!==(null==(s=r.converter)?void 0:s.toAttribute)?r.converter:E).toAttribute(e,r.type);this._$Em=t,null==a?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,e){var s;let r=this.constructor,i=r._$Eh.get(t);if(void 0!==i&&this._$Em!==i){let t=r.getPropertyOptions(i),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(s=t.converter)?void 0:s.fromAttribute)?t.converter:E;this._$Em=i,this[i]=a.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){var r;if(void 0!==t){if(null!=s||(s=this.constructor.getPropertyOptions(t)),!(null!=(r=s.hasChanged)?r:w)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){var r;this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(null!=(r=this._$Ej)?r:this._$Ej=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(null!=this.renderRoot||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach((t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EC(t,this[t])))),this._$EU()}updated(t){}firstUpdated(t){}};O.elementStyles=[],O.shadowRootOptions={mode:"open"},O[S("elementProperties")]=new Map,O[S("finalized")]=new Map,A?.({ReactiveElement:O}),(null!=(P=v.reactiveElementVersions)?P:v.reactiveElementVersions=[]).push("2.0.4");var M=globalThis,k=M.trustedTypes,x=k?k.createPolicy("lit-html",{createHTML:(0,r.a)((t=>t),"createHTML")}):void 0,T="$lit$",U=`lit$${Math.random().toFixed(9).slice(2)}$`,H="?"+U,R=`<${H}>`,j=document,N=(0,r.a)((()=>j.createComment("")),"x"),z=(0,r.a)((t=>null===t||"object"!=typeof t&&"function"!=typeof t),"H"),L=Array.isArray,D=(0,r.a)((t=>L(t)||"function"==typeof t?.[Symbol.iterator]),"Z"),I="[ \t\n\f\r]",Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,V=/>/g,K=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,q=/"/g,Q=/^(?:script|style|textarea|title)$/i,J=(0,r.a)((t=>(e,...s)=>({_$litType$:t,strings:e,values:s})),"O$1"),F=J(1),G=J(2),X=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),tt=new WeakMap,et=j.createTreeWalker(j,129);function st(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}(0,r.a)(st,"z");var rt=(0,r.a)(((t,e)=>{let s,r=t.length-1,i=[],a=2===e?"<svg>":"",n=Z;for(let o=0;o<r;o++){let e,r,l=t[o],h=-1,c=0;for(;c<l.length&&(n.lastIndex=c,r=n.exec(l),null!==r);)c=n.lastIndex,n===Z?"!--"===r[1]?n=B:void 0!==r[1]?n=V:void 0!==r[2]?(Q.test(r[2])&&(s=RegExp("</"+r[2],"g")),n=K):void 0!==r[3]&&(n=K):n===K?">"===r[0]?(n=s??Z,h=-1):void 0===r[1]?h=-2:(h=n.lastIndex-r[2].length,e=r[1],n=void 0===r[3]?K:'"'===r[3]?q:W):n===q||n===W?n=K:n===B||n===V?n=Z:(n=K,s=void 0);let d=n===K&&t[o+1].startsWith("/>")?" ":"";a+=n===Z?l+R:h>=0?(i.push(e),l.slice(0,h)+T+l.slice(h)+U+d):l+U+(-2===h?o:d)}return[st(t,a+(t[r]||"<?>")+(2===e?"</svg>":"")),i]}),"q"),it=class t{static{(0,r.a)(this,"T")}constructor({strings:e,_$litType$:s},r){let i;this.parts=[];let a=0,n=0,o=e.length-1,l=this.parts,[h,c]=rt(e,s);if(this.el=t.createElement(h,r),et.currentNode=this.el.content,2===s){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=et.nextNode())&&l.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(let t of i.getAttributeNames())if(t.endsWith(T)){let e=c[n++],s=i.getAttribute(t).split(U),r=/([.?@])?(.*)/.exec(e);l.push({type:1,index:a,name:r[2],strings:s,ctor:"."===r[1]?ct:"?"===r[1]?dt:"@"===r[1]?pt:ht}),i.removeAttribute(t)}else t.startsWith(U)&&(l.push({type:6,index:a}),i.removeAttribute(t));if(Q.test(i.tagName)){let t=i.textContent.split(U),e=t.length-1;if(e>0){i.textContent=k?k.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],N()),et.nextNode(),l.push({type:2,index:++a});i.append(t[e],N())}}}else if(8===i.nodeType)if(i.data===H)l.push({type:2,index:a});else{let t=-1;for(;-1!==(t=i.data.indexOf(U,t+1));)l.push({type:7,index:a}),t+=U.length-1}a++}}static createElement(t,e){let s=j.createElement("template");return s.innerHTML=t,s}};function at(t,e,s=t,r){var i,a,n;if(e===X)return e;let o=void 0!==r?null==(i=s._$Co)?void 0:i[r]:s._$Cl,l=z(e)?void 0:e._$litDirective$;return o?.constructor!==l&&(null==(a=o?._$AO)||a.call(o,!1),void 0===l?o=void 0:(o=new l(t),o._$AT(t,s,r)),void 0!==r?(null!=(n=s._$Co)?n:s._$Co=[])[r]=o:s._$Cl=o),void 0!==o&&(e=at(t,o._$AS(t,e.values),o,r)),e}(0,r.a)(at,"f$1");var nt,ot=class{static{(0,r.a)(this,"G")}constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:s},parts:r}=this._$AD,i=(null!=(e=t?.creationScope)?e:j).importNode(s,!0);et.currentNode=i;let a=et.nextNode(),n=0,o=0,l=r[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new lt(a,a.nextSibling,this,t):1===l.type?e=new l.ctor(a,l.name,l.strings,this,t):6===l.type&&(e=new ut(a,this,t)),this._$AV.push(e),l=r[++o]}n!==l?.index&&(a=et.nextNode(),n++)}return et.currentNode=j,i}p(t){let e=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},lt=class t{static{(0,r.a)(this,"b$1")}get _$AU(){var t,e;return null!=(e=null==(t=this._$AM)?void 0:t._$AU)?e:this._$Cv}constructor(t,e,s,r){var i;this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=null==(i=r?.isConnected)||i}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=at(this,t,e),z(t)?t===Y||null==t||""===t?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==X&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):D(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==Y&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(j.createTextNode(t)),this._$AH=t}$(t){var e;let{values:s,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=it.createElement(st(r.h,r.h[0]),this.options)),r);if((null==(e=this._$AH)?void 0:e._$AD)===i)this._$AH.p(s);else{let t=new ot(i,this),e=t.u(this.options);t.p(s),this.T(e),this._$AH=t}}_$AC(t){let e=tt.get(t.strings);return void 0===e&&tt.set(t.strings,e=new it(t)),e}k(e){L(this._$AH)||(this._$AH=[],this._$AR());let s,r=this._$AH,i=0;for(let a of e)i===r.length?r.push(s=new t(this.S(N()),this.S(N()),this,this.options)):s=r[i],s._$AI(a),i++;i<r.length&&(this._$AR(s&&s._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null==(s=this._$AP)||s.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}},ht=class{static{(0,r.a)(this,"M")}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,i){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Y}_$AI(t,e=this,s,r){let i=this.strings,a=!1;if(void 0===i)t=at(this,t,e,0),a=!z(t)||t!==this._$AH&&t!==X,a&&(this._$AH=t);else{let r,n,o=t;for(t=i[0],r=0;r<i.length-1;r++)n=at(this,o[s+r],e,r),n===X&&(n=this._$AH[r]),a||(a=!z(n)||n!==this._$AH[r]),n===Y?t=Y:t!==Y&&(t+=(n??"")+i[r+1]),this._$AH[r]=n}a&&!r&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ct=class extends ht{static{(0,r.a)(this,"J")}constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}},dt=class extends ht{static{(0,r.a)(this,"K")}constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Y)}},pt=class extends ht{static{(0,r.a)(this,"Q")}constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){var s;if((t=null!=(s=at(this,t,e,0))?s:Y)===X)return;let r=this._$AH,i=t===Y&&r!==Y||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,a=t!==Y&&(r===Y||i);i&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!=(s=null==(e=this.options)?void 0:e.host)?s:this.element,t):this._$AH.handleEvent(t)}},ut=class{static{(0,r.a)(this,"X")}constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){at(this,t)}},ft=M.litHtmlPolyfillSupport;ft?.(it,lt),(null!=(nt=M.litHtmlVersions)?nt:M.litHtmlVersions=[]).push("3.1.4");var $t,mt=(0,r.a)(((t,e,s)=>{var r,i;let a=null!=(r=s?.renderBefore)?r:e,n=a._$litPart$;if(void 0===n){let t=null!=(i=s?.renderBefore)?i:null;a._$litPart$=n=new lt(e.insertBefore(N(),t),t,void 0,s??{})}return n._$AI(t),n}),"et"),yt=class extends O{static{(0,r.a)(this,"n")}constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;let e=super.createRenderRoot();return null!=(t=this.renderOptions).renderBefore||(t.renderBefore=e.firstChild),e}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=mt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return X}};yt._$litElement$=!0,yt.finalized=!0,null==($t=globalThis.litElementHydrateSupport)||$t.call(globalThis,{LitElement:yt});var gt,vt=globalThis.litElementPolyfillSupport;vt?.({LitElement:yt}),(null!=(gt=globalThis.litElementVersions)?gt:globalThis.litElementVersions=[]).push("4.0.6");var _t=(0,r.a)((t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}),"s"),bt=Object.defineProperty,At=Object.defineProperties,St=Object.getOwnPropertyDescriptors,Et=Object.getOwnPropertySymbols,wt=Object.prototype.hasOwnProperty,Ct=Object.prototype.propertyIsEnumerable,Pt=(0,r.a)(((t,e,s)=>e in t?bt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s),"d"),Ot=(0,r.a)(((t,e)=>{for(var s in e||(e={}))wt.call(e,s)&&Pt(t,s,e[s]);if(Et)for(var s of Et(e))Ct.call(e,s)&&Pt(t,s,e[s]);return t}),"l"),Mt=(0,r.a)(((t,e)=>At(t,St(e))),"u"),kt={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:w},xt=(0,r.a)(((t=kt,e,s)=>{let{kind:r,metadata:i}=s,a=globalThis.litPropertyMetadata.get(i);if(void 0===a&&globalThis.litPropertyMetadata.set(i,a=new Map),a.set(s.name,t),"accessor"===r){let{name:r}=s;return{set(s){let i=e.get.call(this);e.set.call(this,s),this.requestUpdate(r,i,t)},init(e){return void 0!==e&&this.P(r,void 0,t),e}}}if("setter"===r){let{name:r}=s;return function(s){let i=this[r];e.call(this,s),this.requestUpdate(r,i,t)}}throw Error("Unsupported decorator location: "+r)}),"w");function Tt(t){return(e,s)=>"object"==typeof s?xt(t,e,s):((t,e,s)=>{let r=e.hasOwnProperty(s);return e.constructor.createProperty(s,r?Mt(Ot({},t),{wrapped:!0}):t),r?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}(0,r.a)(Tt,"O")},5324:(t,e,s)=>{s.r(e),s.d(e,{orama_search_button:()=>o});s(9660);var r=s(5192),i=s(7712),a=(s(945),s(4437),s(7613)),n=s(8364),o=class{static{(0,n.a)(this,"OramaSearchButton")}constructor(t){(0,a.a)(this,t),this.onPrefersColorSchemeChange=t=>{this.systemScheme=t.matches?"dark":"light",this.updateTheme()},this.size="medium",this.themeConfig=void 0,this.colorScheme="light",this.systemScheme="light",this.shortcutLabel="",this.componentID=(0,r.e)("search-button")}watchHandler(){this.updateTheme()}handleSearchboxClosed(t){this.buttonRef.querySelector("button").focus()}handleKeyDown(t){"k"===t.key&&(t.metaKey||t.ctrlKey)&&(t.preventDefault(),this.buttonRef.click())}updateTheme(){let t="system"===this.colorScheme?this.systemScheme:this.colorScheme,e=this.htmlElement;e&&t&&(e.classList.remove("theme-light","theme-dark"),e.classList.add(`theme-${t}`)),this.updateCssVariables(t)}updateCssVariables(t){var e;let s=this.themeConfig,r=this.htmlElement;if(r&&s&&t){if(null!==(e=s.colors)&&void 0!==e&&e[t])for(let e of Object.keys(s.colors[t]))r.style.setProperty(`${e}`,s.colors[t][e]);if(s.typography)for(let t of Object.keys(s.typography))r.style.setProperty(`${t}`,s.typography[t])}}handleShortcutLabel(){return navigator.userAgent.includes("Mac")?"\u2318 K":"Ctrl + K"}connectedCallback(){this.htmlElement.id=this.componentID,this.shortcutLabel=this.handleShortcutLabel(),this.schemaQuery=window.matchMedia("(prefers-color-scheme: dark)"),this.systemScheme=this.schemaQuery.matches?"dark":"light",this.updateTheme(),this.schemaQuery.addEventListener("change",this.onPrefersColorSchemeChange)}disconnectedCallback(){this.schemaQuery.removeEventListener("change",this.onPrefersColorSchemeChange)}render(){return(0,a.b)(a.c,{key:"0de36da389270a1ff08edb048c6eb3b5d1cee67c"},(0,a.b)("orama-button",{key:"5953b318379d9dba5d49822930fba59b84c6062a",type:"button",variant:"secondary",ref:(0,n.a)((t=>this.buttonRef=t),"ref"),size:this.size,onClick:(0,n.a)((()=>{i.a.open=!0}),"onClick")},(0,a.b)("span",{key:"945a888665316a4873428f41d3ac2ffaf4bdf0e2",slot:"adorment-start"},(0,a.b)("ph-magnifying-glass",{key:"c26fae6356951fde05dfccba6ae2373c93f030b2"})),(0,a.b)("slot",{key:"a35860b064c9d6002a10d39881f30ddcdd1669c0"}),(0,a.b)("span",{key:"59ad0141de8493ee3fa368dd2f3b0a45a72fd4e9",slot:"adorment-end",class:"kyb-shortcut"},this.shortcutLabel)))}get htmlElement(){return(0,a.d)(this)}static get watchers(){return{themeConfig:["watchHandler"],colorScheme:["watchHandler"]}}};o.style=":host{display:block}.kyb-shortcut{background-color:#eee9f6;background-color:var(--background-color-tertiary,#eee9f6);border-radius:.5rem;border-radius:var(--radius-s,calc(8rem/var(--orama-base-font-size, 16)));padding:.25rem;padding:var(--spacing-xs,calc(4rem/var(--orama-base-font-size, 16))) var(--spacing-s,calc(4rem/var(--orama-base-font-size, 16)))}"}}]);
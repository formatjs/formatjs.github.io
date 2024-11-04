/*! For license information please see 9297.fd0ec906.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9297],{210:(t,e,r)=>{r.d(e,{a:()=>u});var s=r(4218),i=r(927),a=(0,i.a)(((t,e,r)=>{let s=t.get(e);s?s.includes(r)||s.push(r):t.set(e,[r])}),"appendToMap"),o=(0,i.a)(((t,e)=>{let r;return(...s)=>{r&&clearTimeout(r),r=setTimeout((()=>{r=0,t(...s)}),e)}}),"debounce"),n=(0,i.a)((t=>!("isConnected"in t)||t.isConnected),"isConnected"),l=o((t=>{for(let e of t.keys())t.set(e,t.get(e).filter(n))}),2e3),h=(0,i.a)((()=>{if("function"!=typeof s.f)return{};let t=new Map;return{dispose:(0,i.a)((()=>t.clear()),"dispose"),get:(0,i.a)((e=>{let r=(0,s.f)();r&&a(t,e,r)}),"get"),set:(0,i.a)((e=>{let r=t.get(e);r&&t.set(e,r.filter(s.g)),l(t)}),"set"),reset:(0,i.a)((()=>{t.forEach((t=>t.forEach(s.g))),l(t)}),"reset")}}),"stencilSubscription"),c=(0,i.a)((t=>"function"==typeof t?t():t),"unwrap"),d=(0,i.a)(((t,e=(t,e)=>t!==e)=>{let r=c(t),s=new Map(Object.entries(r??{})),a={dispose:[],get:[],set:[],reset:[]},o=(0,i.a)((()=>{var e;s=new Map(Object.entries(null!==(e=c(t))&&void 0!==e?e:{})),a.reset.forEach((t=>t()))}),"reset"),n=(0,i.a)((()=>{a.dispose.forEach((t=>t())),o()}),"dispose"),l=(0,i.a)((t=>(a.get.forEach((e=>e(t))),s.get(t))),"get"),h=(0,i.a)(((t,r)=>{let i=s.get(t);e(r,i,t)&&(s.set(t,r),a.set.forEach((e=>e(t,r,i))))}),"set"),d=typeof Proxy>"u"?{}:new Proxy(r,{get:(t,e)=>l(e),ownKeys:t=>Array.from(s.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(t,e)=>s.has(e),set:(t,e,r)=>(h(e,r),!0)}),u=(0,i.a)(((t,e)=>(a[t].push(e),()=>{p(a[t],e)})),"on");return{state:d,get:l,set:h,on:u,onChange:(0,i.a)(((e,r)=>{let s=u("set",((t,s)=>{t===e&&r(s)})),i=u("reset",(()=>r(c(t)[e])));return()=>{s(),i()}}),"onChange"),use:(0,i.a)(((...t)=>{let e=t.reduce(((t,e)=>(e.set&&t.push(u("set",e.set)),e.get&&t.push(u("get",e.get)),e.reset&&t.push(u("reset",e.reset)),e.dispose&&t.push(u("dispose",e.dispose)),t)),[]);return()=>e.forEach((t=>t()))}),"use"),dispose:n,reset:o,forceUpdate:(0,i.a)((t=>{let e=s.get(t);a.set.forEach((r=>r(t,e,e)))}),"forceUpdate")}}),"createObservableMap"),p=(0,i.a)(((t,e)=>{let r=t.indexOf(e);r>=0&&(t[r]=t[t.length-1],t.length--)}),"removeFromArray"),u=(0,i.a)(((t,e)=>{let r=d(t,e);return r.use(h()),r}),"createStore")},8923:(t,e,r)=>{var s=r(5326),i=r(927),a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,n=(0,i.a)(((t,e,r,s)=>{for(var i,n=s>1?void 0:s?o(e,r):e,l=t.length-1;l>=0;l--)(i=t[l])&&(n=(s?i(e,r,n):i(n))||n);return s&&n&&a(e,r,n),n}),"s"),l=class extends s.d{static{(0,i.a)(this,"t")}constructor(){super(...arguments),this.size="1em",this.weight="regular",this.color="currentColor",this.mirrored=!1}render(){var t;return s.b`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored?"scale(-1, 1)":null}
    >
      ${l.weightsMap.get(null!=(t=this.weight)?t:"regular")}
    </svg>`}};l.weightsMap=new Map([["thin",s.c`<path d="M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"/>`],["light",s.c`<path d="M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"/>`],["regular",s.c`<path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"/>`],["bold",s.c`<path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"/>`],["fill",s.c`<path d="M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"/>`],["duotone",s.c`<path d="M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z" opacity="0.2"/><path d="M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"/>`]]),l.styles=s.a`
    :host {
      display: contents;
    }
  `,n([(0,s.f)({type:String,reflect:!0})],l.prototype,"size",2),n([(0,s.f)({type:String,reflect:!0})],l.prototype,"weight",2),n([(0,s.f)({type:String,reflect:!0})],l.prototype,"color",2),n([(0,s.f)({type:Boolean,reflect:!0})],l.prototype,"mirrored",2),l=n([(0,s.e)("ph-magnifying-glass")],l)},4328:(t,e,r)=>{r.d(e,{a:()=>i,b:()=>a});var s=(0,r(210).a)({open:!1,currentTask:"search",currentTerm:""}),{state:i}=s,a=function(t,e){var r={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(r[s]=t[s]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(r[s[i]]=t[s[i]])}return r}(s,["state"])},5326:(t,e,r)=>{r.d(e,{a:()=>c,b:()=>F,c:()=>G,d:()=>$t,e:()=>_t,f:()=>Tt});var s=r(927),i=globalThis,a=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap,l=class{static{(0,s.a)(this,"l$2")}constructor(t,e,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(a&&void 0===t){let r=void 0!==e&&1===e.length;r&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&n.set(e,t))}return t}toString(){return this.cssText}},h=(0,s.a)((t=>new l("string"==typeof t?t:t+"",void 0,o)),"h$1"),c=(0,s.a)(((t,...e)=>{let r=1===t.length?t[0]:e.reduce(((e,r,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1]),t[0]);return new l(r,t,o)}),"p$3"),d=(0,s.a)(((t,e)=>{if(a)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(let r of e){let e=document.createElement("style"),s=i.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=r.cssText,t.appendChild(e)}}),"d$2"),p=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return h(e)})(t):t,{is:u,defineProperty:f,getOwnPropertyDescriptor:g,getOwnPropertyNames:m,getOwnPropertySymbols:$,getPrototypeOf:v}=Object,y=globalThis,_=y.trustedTypes,b=_?_.emptyScript:"",A=y.reactiveElementPolyfillSupport,w=(0,s.a)(((t,e)=>t),"l$1"),E={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},S=(0,s.a)(((t,e)=>!u(t,e)),"y$2"),M={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:S};null!=Symbol.metadata||(Symbol.metadata=Symbol("metadata")),null!=y.litPropertyMetadata||(y.litPropertyMetadata=new WeakMap);var P,C=class extends HTMLElement{static{(0,s.a)(this,"c")}static addInitializer(t){var e;this._$Ei(),(null!=(e=this.l)?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=M){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),s=this.getPropertyDescriptor(t,r,e);void 0!==s&&f(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){var s;let{get:i,set:a}=null!=(s=g(this.prototype,t))?s:{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){let s=i?.call(this);a.call(this,e),this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return null!=(e=this.elementProperties.get(t))?e:M}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;let t=v(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){let t=this.properties,e=[...m(t),...$(t)];for(let r of e)this.createProperty(r,t[r])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let t=this._$Eu(e,r);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let t of r)e.unshift(p(t))}else void 0!==t&&e.push(p(t));return e}static _$Eu(t,e){let r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((t=>t(this)))}addController(t){var e,r;(null!=(e=this._$EO)?e:this._$EO=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(r=t.hostConnected)||r.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var t;let e=null!=(t=this.shadowRoot)?t:this.attachShadow(this.constructor.shadowRootOptions);return d(e,this.constructor.elementStyles),e}connectedCallback(){var t;null!=this.renderRoot||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){var r;let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){let a=(void 0!==(null==(r=s.converter)?void 0:r.toAttribute)?s.converter:E).toAttribute(e,s.type);this._$Em=t,null==a?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,e){var r;let s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){let t=s.getPropertyOptions(i),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(r=t.converter)?void 0:r.fromAttribute)?t.converter:E;this._$Em=i,this[i]=a.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,r){var s;if(void 0!==t){if(null!=r||(r=this.constructor.getPropertyOptions(t)),!(null!=(s=r.hasChanged)?s:S)(this[t],e))return;this.P(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,r){var s;this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Em!==t&&(null!=(s=this._$Ej)?s:this._$Ej=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(null!=this.renderRoot||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,r]of t)!0!==r.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],r)}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(r)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach((t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EC(t,this[t])))),this._$EU()}updated(t){}firstUpdated(t){}};C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[w("elementProperties")]=new Map,C[w("finalized")]=new Map,A?.({ReactiveElement:C}),(null!=(P=y.reactiveElementVersions)?P:y.reactiveElementVersions=[]).push("2.0.4");var O=globalThis,x=O.trustedTypes,L=x?x.createPolicy("lit-html",{createHTML:(0,s.a)((t=>t),"createHTML")}):void 0,T="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,H="?"+k,U=`<${H}>`,V=document,Z=(0,s.a)((()=>V.createComment("")),"x"),R=(0,s.a)((t=>null===t||"object"!=typeof t&&"function"!=typeof t),"H"),z=Array.isArray,j=(0,s.a)((t=>z(t)||"function"==typeof t?.[Symbol.iterator]),"Z"),N="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,B=/>/g,W=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),q=/'/g,X=/"/g,K=/^(?:script|style|textarea|title)$/i,J=(0,s.a)((t=>(e,...r)=>({_$litType$:t,strings:e,values:r})),"O$1"),F=J(1),G=J(2),Q=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),tt=new WeakMap,et=V.createTreeWalker(V,129);function rt(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==L?L.createHTML(e):e}(0,s.a)(rt,"z");var st=(0,s.a)(((t,e)=>{let r,s=t.length-1,i=[],a=2===e?"<svg>":"",o=I;for(let n=0;n<s;n++){let e,s,l=t[n],h=-1,c=0;for(;c<l.length&&(o.lastIndex=c,s=o.exec(l),null!==s);)c=o.lastIndex,o===I?"!--"===s[1]?o=D:void 0!==s[1]?o=B:void 0!==s[2]?(K.test(s[2])&&(r=RegExp("</"+s[2],"g")),o=W):void 0!==s[3]&&(o=W):o===W?">"===s[0]?(o=r??I,h=-1):void 0===s[1]?h=-2:(h=o.lastIndex-s[2].length,e=s[1],o=void 0===s[3]?W:'"'===s[3]?X:q):o===X||o===q?o=W:o===D||o===B?o=I:(o=W,r=void 0);let d=o===W&&t[n+1].startsWith("/>")?" ":"";a+=o===I?l+U:h>=0?(i.push(e),l.slice(0,h)+T+l.slice(h)+k+d):l+k+(-2===h?n:d)}return[rt(t,a+(t[s]||"<?>")+(2===e?"</svg>":"")),i]}),"q"),it=class t{static{(0,s.a)(this,"T")}constructor({strings:e,_$litType$:r},s){let i;this.parts=[];let a=0,o=0,n=e.length-1,l=this.parts,[h,c]=st(e,r);if(this.el=t.createElement(h,s),et.currentNode=this.el.content,2===r){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=et.nextNode())&&l.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(let t of i.getAttributeNames())if(t.endsWith(T)){let e=c[o++],r=i.getAttribute(t).split(k),s=/([.?@])?(.*)/.exec(e);l.push({type:1,index:a,name:s[2],strings:r,ctor:"."===s[1]?ct:"?"===s[1]?dt:"@"===s[1]?pt:ht}),i.removeAttribute(t)}else t.startsWith(k)&&(l.push({type:6,index:a}),i.removeAttribute(t));if(K.test(i.tagName)){let t=i.textContent.split(k),e=t.length-1;if(e>0){i.textContent=x?x.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],Z()),et.nextNode(),l.push({type:2,index:++a});i.append(t[e],Z())}}}else if(8===i.nodeType)if(i.data===H)l.push({type:2,index:a});else{let t=-1;for(;-1!==(t=i.data.indexOf(k,t+1));)l.push({type:7,index:a}),t+=k.length-1}a++}}static createElement(t,e){let r=V.createElement("template");return r.innerHTML=t,r}};function at(t,e,r=t,s){var i,a,o;if(e===Q)return e;let n=void 0!==s?null==(i=r._$Co)?void 0:i[s]:r._$Cl,l=R(e)?void 0:e._$litDirective$;return n?.constructor!==l&&(null==(a=n?._$AO)||a.call(n,!1),void 0===l?n=void 0:(n=new l(t),n._$AT(t,r,s)),void 0!==s?(null!=(o=r._$Co)?o:r._$Co=[])[s]=n:r._$Cl=n),void 0!==n&&(e=at(t,n._$AS(t,e.values),n,s)),e}(0,s.a)(at,"f$1");var ot,nt=class{static{(0,s.a)(this,"G")}constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:r},parts:s}=this._$AD,i=(null!=(e=t?.creationScope)?e:V).importNode(r,!0);et.currentNode=i;let a=et.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new lt(a,a.nextSibling,this,t):1===l.type?e=new l.ctor(a,l.name,l.strings,this,t):6===l.type&&(e=new ut(a,this,t)),this._$AV.push(e),l=s[++n]}o!==l?.index&&(a=et.nextNode(),o++)}return et.currentNode=V,i}p(t){let e=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},lt=class t{static{(0,s.a)(this,"b$1")}get _$AU(){var t,e;return null!=(e=null==(t=this._$AM)?void 0:t._$AU)?e:this._$Cv}constructor(t,e,r,s){var i;this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=null==(i=s?.isConnected)||i}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=at(this,t,e),R(t)?t===Y||null==t||""===t?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==Q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):j(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==Y&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(V.createTextNode(t)),this._$AH=t}$(t){var e;let{values:r,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=it.createElement(rt(s.h,s.h[0]),this.options)),s);if((null==(e=this._$AH)?void 0:e._$AD)===i)this._$AH.p(r);else{let t=new nt(i,this),e=t.u(this.options);t.p(r),this.T(e),this._$AH=t}}_$AC(t){let e=tt.get(t.strings);return void 0===e&&tt.set(t.strings,e=new it(t)),e}k(e){z(this._$AH)||(this._$AH=[],this._$AR());let r,s=this._$AH,i=0;for(let a of e)i===s.length?s.push(r=new t(this.S(Z()),this.S(Z()),this,this.options)):r=s[i],r._$AI(a),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(t=this._$AA.nextSibling,e){var r;for(null==(r=this._$AP)||r.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}},ht=class{static{(0,s.a)(this,"M")}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,i){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Y}_$AI(t,e=this,r,s){let i=this.strings,a=!1;if(void 0===i)t=at(this,t,e,0),a=!R(t)||t!==this._$AH&&t!==Q,a&&(this._$AH=t);else{let s,o,n=t;for(t=i[0],s=0;s<i.length-1;s++)o=at(this,n[r+s],e,s),o===Q&&(o=this._$AH[s]),a||(a=!R(o)||o!==this._$AH[s]),o===Y?t=Y:t!==Y&&(t+=(o??"")+i[s+1]),this._$AH[s]=o}a&&!s&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ct=class extends ht{static{(0,s.a)(this,"J")}constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}},dt=class extends ht{static{(0,s.a)(this,"K")}constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Y)}},pt=class extends ht{static{(0,s.a)(this,"Q")}constructor(t,e,r,s,i){super(t,e,r,s,i),this.type=5}_$AI(t,e=this){var r;if((t=null!=(r=at(this,t,e,0))?r:Y)===Q)return;let s=this._$AH,i=t===Y&&s!==Y||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==Y&&(s===Y||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!=(r=null==(e=this.options)?void 0:e.host)?r:this.element,t):this._$AH.handleEvent(t)}},ut=class{static{(0,s.a)(this,"X")}constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){at(this,t)}},ft=O.litHtmlPolyfillSupport;ft?.(it,lt),(null!=(ot=O.litHtmlVersions)?ot:O.litHtmlVersions=[]).push("3.1.4");var gt,mt=(0,s.a)(((t,e,r)=>{var s,i;let a=null!=(s=r?.renderBefore)?s:e,o=a._$litPart$;if(void 0===o){let t=null!=(i=r?.renderBefore)?i:null;a._$litPart$=o=new lt(e.insertBefore(Z(),t),t,void 0,r??{})}return o._$AI(t),o}),"et"),$t=class extends C{static{(0,s.a)(this,"n")}constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;let e=super.createRenderRoot();return null!=(t=this.renderOptions).renderBefore||(t.renderBefore=e.firstChild),e}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=mt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return Q}};$t._$litElement$=!0,$t.finalized=!0,null==(gt=globalThis.litElementHydrateSupport)||gt.call(globalThis,{LitElement:$t});var vt,yt=globalThis.litElementPolyfillSupport;yt?.({LitElement:$t}),(null!=(vt=globalThis.litElementVersions)?vt:globalThis.litElementVersions=[]).push("4.0.6");var _t=(0,s.a)((t=>(e,r)=>{void 0!==r?r.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}),"s"),bt=Object.defineProperty,At=Object.defineProperties,wt=Object.getOwnPropertyDescriptors,Et=Object.getOwnPropertySymbols,St=Object.prototype.hasOwnProperty,Mt=Object.prototype.propertyIsEnumerable,Pt=(0,s.a)(((t,e,r)=>e in t?bt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r),"d"),Ct=(0,s.a)(((t,e)=>{for(var r in e||(e={}))St.call(e,r)&&Pt(t,r,e[r]);if(Et)for(var r of Et(e))Mt.call(e,r)&&Pt(t,r,e[r]);return t}),"l"),Ot=(0,s.a)(((t,e)=>At(t,wt(e))),"u"),xt={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:S},Lt=(0,s.a)(((t=xt,e,r)=>{let{kind:s,metadata:i}=r,a=globalThis.litPropertyMetadata.get(i);if(void 0===a&&globalThis.litPropertyMetadata.set(i,a=new Map),a.set(r.name,t),"accessor"===s){let{name:s}=r;return{set(r){let i=e.get.call(this);e.set.call(this,r),this.requestUpdate(s,i,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){let{name:s}=r;return function(r){let i=this[s];e.call(this,r),this.requestUpdate(s,i,t)}}throw Error("Unsupported decorator location: "+s)}),"w");function Tt(t){return(e,r)=>"object"==typeof r?Lt(t,e,r):((t,e,r)=>{let s=e.hasOwnProperty(r);return e.constructor.createProperty(r,s?Ot(Ct({},t),{wrapped:!0}):t),s?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}(0,s.a)(Tt,"O")},9297:(t,e,r)=>{r.r(e),r.d(e,{orama_toggler:()=>d});r(8923);var s=r(4328),i=r(5326),a=(r(210),r(4218)),o=r(927),n=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h=(0,o.a)(((t,e,r,s)=>{for(var i,a=s>1?void 0:s?l(e,r):e,o=t.length-1;o>=0;o--)(i=t[o])&&(a=(s?i(e,r,a):i(a))||a);return s&&a&&n(e,r,a),a}),"l"),c=class extends i.d{static{(0,o.a)(this,"a")}constructor(){super(...arguments),this.size="1em",this.weight="regular",this.color="currentColor",this.mirrored=!1}render(){var t;return i.b`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored?"scale(-1, 1)":null}
    >
      ${c.weightsMap.get(null!=(t=this.weight)?t:"regular")}
    </svg>`}};c.weightsMap=new Map([["thin",i.c`<path d="M196.2,132.81l-53.36-19.65L123.19,59.8a11.93,11.93,0,0,0-22.38,0L81.16,113.16,27.8,132.81a11.93,11.93,0,0,0,0,22.38l53.36,19.65,19.65,53.36a11.93,11.93,0,0,0,22.38,0l19.65-53.36,53.36-19.65a11.93,11.93,0,0,0,0-22.38Zm-2.77,14.87L138.35,168a4,4,0,0,0-2.37,2.37l-20.3,55.08a3.92,3.92,0,0,1-7.36,0L88,170.35A4,4,0,0,0,85.65,168l-55.08-20.3a3.92,3.92,0,0,1,0-7.36L85.65,120A4,4,0,0,0,88,117.65l20.3-55.08a3.92,3.92,0,0,1,7.36,0L136,117.65a4,4,0,0,0,2.37,2.37l55.08,20.3a3.92,3.92,0,0,1,0,7.36ZM148,40a4,4,0,0,1,4-4h20V16a4,4,0,0,1,8,0V36h20a4,4,0,0,1,0,8H180V64a4,4,0,0,1-8,0V44H152A4,4,0,0,1,148,40Zm96,48a4,4,0,0,1-4,4H228v12a4,4,0,0,1-8,0V92H208a4,4,0,0,1,0-8h12V72a4,4,0,0,1,8,0V84h12A4,4,0,0,1,244,88Z"/>`],["light",i.c`<path d="M196.89,130.94,144.4,111.6,125.06,59.11a13.92,13.92,0,0,0-26.12,0L79.6,111.6,27.11,130.94a13.92,13.92,0,0,0,0,26.12L79.6,176.4l19.34,52.49a13.92,13.92,0,0,0,26.12,0L144.4,176.4l52.49-19.34a13.92,13.92,0,0,0,0-26.12Zm-4.15,14.86-55.08,20.3a6,6,0,0,0-3.56,3.56l-20.3,55.08a1.92,1.92,0,0,1-3.6,0L89.9,169.66a6,6,0,0,0-3.56-3.56L31.26,145.8a1.92,1.92,0,0,1,0-3.6l55.08-20.3a6,6,0,0,0,3.56-3.56l20.3-55.08a1.92,1.92,0,0,1,3.6,0l20.3,55.08a6,6,0,0,0,3.56,3.56l55.08,20.3a1.92,1.92,0,0,1,0,3.6ZM146,40a6,6,0,0,1,6-6h18V16a6,6,0,0,1,12,0V34h18a6,6,0,0,1,0,12H182V64a6,6,0,0,1-12,0V46H152A6,6,0,0,1,146,40ZM246,88a6,6,0,0,1-6,6H230v10a6,6,0,0,1-12,0V94H208a6,6,0,0,1,0-12h10V72a6,6,0,0,1,12,0V82h10A6,6,0,0,1,246,88Z"/>`],["regular",i.c`<path d="M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"/>`],["bold",i.c`<path d="M199,125.31l-49.88-18.39L130.69,57a19.92,19.92,0,0,0-37.38,0L74.92,106.92,25,125.31a19.92,19.92,0,0,0,0,37.38l49.88,18.39L93.31,231a19.92,19.92,0,0,0,37.38,0l18.39-49.88L199,162.69a19.92,19.92,0,0,0,0-37.38Zm-63.38,35.16a12,12,0,0,0-7.11,7.11L112,212.28l-16.47-44.7a12,12,0,0,0-7.11-7.11L43.72,144l44.7-16.47a12,12,0,0,0,7.11-7.11L112,75.72l16.47,44.7a12,12,0,0,0,7.11,7.11L180.28,144ZM140,40a12,12,0,0,1,12-12h12V16a12,12,0,0,1,24,0V28h12a12,12,0,0,1,0,24H188V64a12,12,0,0,1-24,0V52H152A12,12,0,0,1,140,40ZM252,88a12,12,0,0,1-12,12h-4v4a12,12,0,0,1-24,0v-4h-4a12,12,0,0,1,0-24h4V72a12,12,0,0,1,24,0v4h4A12,12,0,0,1,252,88Z"/>`],["fill",i.c`<path d="M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"/>`],["duotone",i.c`<path d="M194.82,151.43l-55.09,20.3-20.3,55.09a7.92,7.92,0,0,1-14.86,0l-20.3-55.09-55.09-20.3a7.92,7.92,0,0,1,0-14.86l55.09-20.3,20.3-55.09a7.92,7.92,0,0,1,14.86,0l20.3,55.09,55.09,20.3A7.92,7.92,0,0,1,194.82,151.43Z" opacity="0.2"/><path d="M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"/>`]]),c.styles=i.a`
    :host {
      display: contents;
    }
  `,h([(0,i.f)({type:String,reflect:!0})],c.prototype,"size",2),h([(0,i.f)({type:String,reflect:!0})],c.prototype,"weight",2),h([(0,i.f)({type:String,reflect:!0})],c.prototype,"color",2),h([(0,i.f)({type:Boolean,reflect:!0})],c.prototype,"mirrored",2),c=h([(0,i.e)("ph-sparkle")],c);var d=class{static{(0,o.a)(this,"OramaToggler")}constructor(t){(0,a.a)(this,t),this.firstRender=!0,this.performInitialAnimation=!1}componentWillLoad(){this.performInitialAnimation&&(this.firstRender=!1)}componentDidLoad(){this.firstRender&&(this.firstRender=!1)}render(){return(0,a.b)(a.c,{key:"e3ae874addd4108342e18e6378f4c841350495f3"},(0,a.b)("button",{key:"e6f2eb9734460d6b36f3dd1572a9b5877ec9365c",type:"button",class:{selected:"search"===s.a.currentTask,animate:!this.firstRender||this.performInitialAnimation},onClick:(0,o.a)((()=>s.a.currentTask="search"),"onClick")},(0,a.b)("span",{key:"3d69efb6d42cce9d9c2bb05e5984ad3a55771563"},"Search"),(0,a.b)("ph-magnifying-glass",{key:"2de2f0adbf9018f61487f5d0974c4c7f8c6c9428",size:16})),(0,a.b)("button",{key:"e53cc71144bf4938cea8bff319c22bd6d64c3ef0",type:"button",class:{selected:"chat"===s.a.currentTask,animate:!this.firstRender||this.performInitialAnimation},onClick:(0,o.a)((()=>s.a.currentTask="chat"),"onClick")},(0,a.b)("ph-sparkle",{key:"ba4eb3aca7057da45dbbd4fc7e47764b510cd84d",size:16}),(0,a.b)("span",{key:"a589c79ed288e7310bdb57a1927e3d96e4eb84c9"},"Ask AI")))}};d.style='.sc-orama-toggler-h{align-items:center;background:#efefef;background:var(--background-color-fourth,#efefef);border-radius:2.5rem;border-radius:var(--radius-3xl,calc(40rem/var(--orama-base-font-size, 16)));display:inline-flex;overflow:hidden;padding:.125rem;padding:var(--spacing-2xs,calc(2rem/var(--orama-base-font-size, 16)))}.sc-orama-toggler-h button.sc-orama-toggler{align-items:center;background-color:transparent;border:none;color:#151515;color:var(--text-color-primary,#151515);cursor:pointer;display:flex;gap:.25rem;gap:var(--spacing-xs,calc(4rem/var(--orama-base-font-size, 16)));padding:.5rem .75rem;padding:var(--spacing-s,calc(8rem/var(--orama-base-font-size, 16))) var(--spacing-m,calc(12rem/var(--orama-base-font-size, 16)));position:relative}.sc-orama-toggler-h button.selected.sc-orama-toggler{color:#fff;color:var(--text-color-reverse,#fff);transition:color .3s ease-in-out;z-index:1}.sc-orama-toggler-h button.selected.sc-orama-toggler:after{background-color:#000;background-color:var(--background-color-reverse,#000);border-radius:2.5rem;border-radius:var(--radius-3xl,calc(40rem/var(--orama-base-font-size, 16)));content:"";inset:0;padding:.5rem .75rem;padding:var(--spacing-s,calc(8rem/var(--orama-base-font-size, 16))) var(--spacing-m,calc(12rem/var(--orama-base-font-size, 16)));position:absolute;z-index:-1}.sc-orama-toggler-h button.selected.animate.sc-orama-toggler:after{animation:slideToLeft .3s ease-in-out}.sc-orama-toggler-h button.selected.animate.sc-orama-toggler:first-child:after{animation:slideToRight .3s ease-in-out}@keyframes slideToRight{0%{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes slideToLeft{0%{transform:translateX(-100%)}to{transform:translateX(0)}}'}}]);
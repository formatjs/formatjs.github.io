/*! For license information please see 7261.ca44927a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7261],{4437:(t,e,s)=>{s.d(e,{a:()=>u});var i=s(7613),r=s(8364),n=(0,r.a)(((t,e,s)=>{let i=t.get(e);i?i.includes(s)||i.push(s):t.set(e,[s])}),"appendToMap"),o=(0,r.a)(((t,e)=>{let s;return(...i)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,t(...i)}),e)}}),"debounce"),l=(0,r.a)((t=>!("isConnected"in t)||t.isConnected),"isConnected"),a=o((t=>{for(let e of t.keys())t.set(e,t.get(e).filter(l))}),2e3),h=(0,r.a)((()=>{if("function"!=typeof i.f)return{};let t=new Map;return{dispose:(0,r.a)((()=>t.clear()),"dispose"),get:(0,r.a)((e=>{let s=(0,i.f)();s&&n(t,e,s)}),"get"),set:(0,r.a)((e=>{let s=t.get(e);s&&t.set(e,s.filter(i.g)),a(t)}),"set"),reset:(0,r.a)((()=>{t.forEach((t=>t.forEach(i.g))),a(t)}),"reset")}}),"stencilSubscription"),c=(0,r.a)((t=>"function"==typeof t?t():t),"unwrap"),d=(0,r.a)(((t,e=(t,e)=>t!==e)=>{let s=c(t),i=new Map(Object.entries(s??{})),n={dispose:[],get:[],set:[],reset:[]},o=(0,r.a)((()=>{var e;i=new Map(Object.entries(null!==(e=c(t))&&void 0!==e?e:{})),n.reset.forEach((t=>t()))}),"reset"),l=(0,r.a)((()=>{n.dispose.forEach((t=>t())),o()}),"dispose"),a=(0,r.a)((t=>(n.get.forEach((e=>e(t))),i.get(t))),"get"),h=(0,r.a)(((t,s)=>{let r=i.get(t);e(s,r,t)&&(i.set(t,s),n.set.forEach((e=>e(t,s,r))))}),"set"),d=typeof Proxy>"u"?{}:new Proxy(s,{get:(t,e)=>a(e),ownKeys:t=>Array.from(i.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(t,e)=>i.has(e),set:(t,e,s)=>(h(e,s),!0)}),u=(0,r.a)(((t,e)=>(n[t].push(e),()=>{p(n[t],e)})),"on");return{state:d,get:a,set:h,on:u,onChange:(0,r.a)(((e,s)=>{let i=u("set",((t,i)=>{t===e&&s(i)})),r=u("reset",(()=>s(c(t)[e])));return()=>{i(),r()}}),"onChange"),use:(0,r.a)(((...t)=>{let e=t.reduce(((t,e)=>(e.set&&t.push(u("set",e.set)),e.get&&t.push(u("get",e.get)),e.reset&&t.push(u("reset",e.reset)),e.dispose&&t.push(u("dispose",e.dispose)),t)),[]);return()=>e.forEach((t=>t()))}),"use"),dispose:l,reset:o,forceUpdate:(0,r.a)((t=>{let e=i.get(t);n.set.forEach((s=>s(t,e,e)))}),"forceUpdate")}}),"createObservableMap"),p=(0,r.a)(((t,e)=>{let s=t.indexOf(e);s>=0&&(t[s]=t[t.length-1],t.length--)}),"removeFromArray"),u=(0,r.a)(((t,e)=>{let s=d(t,e);return s.use(h()),s}),"createStore")},3752:(t,e,s)=>{var i=s(945),r=s(8364),n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,l=(0,r.a)(((t,e,s,i)=>{for(var r,l=i>1?void 0:i?o(e,s):e,a=t.length-1;a>=0;a--)(r=t[a])&&(l=(i?r(e,s,l):r(l))||l);return i&&l&&n(e,s,l),l}),"s"),a=class extends i.d{static{(0,r.a)(this,"t")}constructor(){super(...arguments),this.size="1em",this.weight="regular",this.color="currentColor",this.mirrored=!1}render(){var t;return i.b`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored?"scale(-1, 1)":null}
    >
      ${a.weightsMap.get(null!=(t=this.weight)?t:"regular")}
    </svg>`}};a.weightsMap=new Map([["thin",i.c`<path d="M162.83,205.17a4,4,0,0,1-5.66,5.66l-80-80a4,4,0,0,1,0-5.66l80-80a4,4,0,1,1,5.66,5.66L85.66,128Z"/>`],["light",i.c`<path d="M164.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L88.49,128Z"/>`],["regular",i.c`<path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"/>`],["bold",i.c`<path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"/>`],["fill",i.c`<path d="M168,48V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,168,48Z"/>`],["duotone",i.c`<path d="M160,48V208L80,128Z" opacity="0.2"/><path d="M163.06,40.61a8,8,0,0,0-8.72,1.73l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,168,208V48A8,8,0,0,0,163.06,40.61ZM152,188.69,91.31,128,152,67.31Z"/>`]]),a.styles=i.a`
    :host {
      display: contents;
    }
  `,l([(0,i.f)({type:String,reflect:!0})],a.prototype,"size",2),l([(0,i.f)({type:String,reflect:!0})],a.prototype,"weight",2),l([(0,i.f)({type:String,reflect:!0})],a.prototype,"color",2),l([(0,i.f)({type:Boolean,reflect:!0})],a.prototype,"mirrored",2),a=l([(0,i.e)("ph-caret-left")],a)},9062:(t,e,s)=>{s.d(e,{a:()=>i,b:()=>l,c:()=>a});var i,r,n=s(4437);(r=i||(i={})).idle="idle",r.loading="loading",r.rendering="rendering",r.streaming="streaming",r.error="error",r.aborted="aborted",r.done="done";var o=(0,n.a)({chatService:null,interactions:[],sourceBaseURL:"",sourcesMap:{title:"title",description:"description",path:"path"}}),{state:l}=o,a=function(t,e){var s={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(s[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(s[i[r]]=t[i[r]])}return s}(o,["state"])},945:(t,e,s)=>{s.d(e,{a:()=>c,b:()=>G,c:()=>Q,d:()=>gt,e:()=>mt,f:()=>Tt});var i=s(8364),r=globalThis,n=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),l=new WeakMap,a=class{static{(0,i.a)(this,"l$2")}constructor(t,e,s){if(this._$cssResult$=!0,s!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(n&&void 0===t){let s=void 0!==e&&1===e.length;s&&(t=l.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&l.set(e,t))}return t}toString(){return this.cssText}},h=(0,i.a)((t=>new a("string"==typeof t?t:t+"",void 0,o)),"h$1"),c=(0,i.a)(((t,...e)=>{let s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new a(s,t,o)}),"p$3"),d=(0,i.a)(((t,e)=>{if(n)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(let s of e){let e=document.createElement("style"),i=r.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=s.cssText,t.appendChild(e)}}),"d$2"),p=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return h(e)})(t):t,{is:u,defineProperty:$,getOwnPropertyDescriptor:f,getOwnPropertyNames:_,getOwnPropertySymbols:g,getPrototypeOf:v}=Object,y=globalThis,m=y.trustedTypes,A=m?m.emptyScript:"",b=y.reactiveElementPolyfillSupport,E=(0,i.a)(((t,e)=>t),"l$1"),S={toAttribute(t,e){switch(e){case Boolean:t=t?A:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},w=(0,i.a)(((t,e)=>!u(t,e)),"y$2"),P={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:w};null!=Symbol.metadata||(Symbol.metadata=Symbol("metadata")),null!=y.litPropertyMetadata||(y.litPropertyMetadata=new WeakMap);var C,O=class extends HTMLElement{static{(0,i.a)(this,"c")}static addInitializer(t){var e;this._$Ei(),(null!=(e=this.l)?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=P){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&$(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){var i;let{get:r,set:n}=null!=(i=f(this.prototype,t))?i:{get(){return this[e]},set(t){this[e]=t}};return{get(){return r?.call(this)},set(e){let i=r?.call(this);n.call(this,e),this.requestUpdate(t,i,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return null!=(e=this.elementProperties.get(t))?e:P}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;let t=v(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){let t=this.properties,e=[..._(t),...g(t)];for(let s of e)this.createProperty(s,t[s])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let t=this._$Eu(e,s);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let t of s)e.unshift(p(t))}else void 0!==t&&e.push(p(t));return e}static _$Eu(t,e){let s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((t=>t(this)))}addController(t){var e,s;(null!=(e=this._$EO)?e:this._$EO=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(s=t.hostConnected)||s.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var t;let e=null!=(t=this.shadowRoot)?t:this.attachShadow(this.constructor.shadowRootOptions);return d(e,this.constructor.elementStyles),e}connectedCallback(){var t;null!=this.renderRoot||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var s;let i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){let n=(void 0!==(null==(s=i.converter)?void 0:s.toAttribute)?i.converter:S).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){var s;let i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){let t=i.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(s=t.converter)?void 0:s.fromAttribute)?t.converter:S;this._$Em=r,this[r]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){var i;if(void 0!==t){if(null!=s||(s=this.constructor.getPropertyOptions(t)),!(null!=(i=s.hasChanged)?i:w)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){var i;this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(null!=(i=this._$Ej)?i:this._$Ej=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(null!=this.renderRoot||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null==(t=this._$EO)||t.forEach((t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach((t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EC(t,this[t])))),this._$EU()}updated(t){}firstUpdated(t){}};O.elementStyles=[],O.shadowRootOptions={mode:"open"},O[E("elementProperties")]=new Map,O[E("finalized")]=new Map,b?.({ReactiveElement:O}),(null!=(C=y.reactiveElementVersions)?C:y.reactiveElementVersions=[]).push("2.0.4");var M=globalThis,U=M.trustedTypes,x=U?U.createPolicy("lit-html",{createHTML:(0,i.a)((t=>t),"createHTML")}):void 0,T="$lit$",H=`lit$${Math.random().toFixed(9).slice(2)}$`,R="?"+H,N=`<${R}>`,j=document,k=(0,i.a)((()=>j.createComment("")),"x"),L=(0,i.a)((t=>null===t||"object"!=typeof t&&"function"!=typeof t),"H"),z=Array.isArray,D=(0,i.a)((t=>z(t)||"function"==typeof t?.[Symbol.iterator]),"Z"),B="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,Z=/>/g,W=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),q=/'/g,K=/"/g,J=/^(?:script|style|textarea|title)$/i,F=(0,i.a)((t=>(e,...s)=>({_$litType$:t,strings:e,values:s})),"O$1"),G=F(1),Q=F(2),X=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),tt=new WeakMap,et=j.createTreeWalker(j,129);function st(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}(0,i.a)(st,"z");var it=(0,i.a)(((t,e)=>{let s,i=t.length-1,r=[],n=2===e?"<svg>":"",o=I;for(let l=0;l<i;l++){let e,i,a=t[l],h=-1,c=0;for(;c<a.length&&(o.lastIndex=c,i=o.exec(a),null!==i);)c=o.lastIndex,o===I?"!--"===i[1]?o=V:void 0!==i[1]?o=Z:void 0!==i[2]?(J.test(i[2])&&(s=RegExp("</"+i[2],"g")),o=W):void 0!==i[3]&&(o=W):o===W?">"===i[0]?(o=s??I,h=-1):void 0===i[1]?h=-2:(h=o.lastIndex-i[2].length,e=i[1],o=void 0===i[3]?W:'"'===i[3]?K:q):o===K||o===q?o=W:o===V||o===Z?o=I:(o=W,s=void 0);let d=o===W&&t[l+1].startsWith("/>")?" ":"";n+=o===I?a+N:h>=0?(r.push(e),a.slice(0,h)+T+a.slice(h)+H+d):a+H+(-2===h?l:d)}return[st(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),r]}),"q"),rt=class t{static{(0,i.a)(this,"T")}constructor({strings:e,_$litType$:s},i){let r;this.parts=[];let n=0,o=0,l=e.length-1,a=this.parts,[h,c]=it(e,s);if(this.el=t.createElement(h,i),et.currentNode=this.el.content,2===s){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=et.nextNode())&&a.length<l;){if(1===r.nodeType){if(r.hasAttributes())for(let t of r.getAttributeNames())if(t.endsWith(T)){let e=c[o++],s=r.getAttribute(t).split(H),i=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:i[2],strings:s,ctor:"."===i[1]?ct:"?"===i[1]?dt:"@"===i[1]?pt:ht}),r.removeAttribute(t)}else t.startsWith(H)&&(a.push({type:6,index:n}),r.removeAttribute(t));if(J.test(r.tagName)){let t=r.textContent.split(H),e=t.length-1;if(e>0){r.textContent=U?U.emptyScript:"";for(let s=0;s<e;s++)r.append(t[s],k()),et.nextNode(),a.push({type:2,index:++n});r.append(t[e],k())}}}else if(8===r.nodeType)if(r.data===R)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(H,t+1));)a.push({type:7,index:n}),t+=H.length-1}n++}}static createElement(t,e){let s=j.createElement("template");return s.innerHTML=t,s}};function nt(t,e,s=t,i){var r,n,o;if(e===X)return e;let l=void 0!==i?null==(r=s._$Co)?void 0:r[i]:s._$Cl,a=L(e)?void 0:e._$litDirective$;return l?.constructor!==a&&(null==(n=l?._$AO)||n.call(l,!1),void 0===a?l=void 0:(l=new a(t),l._$AT(t,s,i)),void 0!==i?(null!=(o=s._$Co)?o:s._$Co=[])[i]=l:s._$Cl=l),void 0!==l&&(e=nt(t,l._$AS(t,e.values),l,i)),e}(0,i.a)(nt,"f$1");var ot,lt=class{static{(0,i.a)(this,"G")}constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:s},parts:i}=this._$AD,r=(null!=(e=t?.creationScope)?e:j).importNode(s,!0);et.currentNode=r;let n=et.nextNode(),o=0,l=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new at(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new ut(n,this,t)),this._$AV.push(e),a=i[++l]}o!==a?.index&&(n=et.nextNode(),o++)}return et.currentNode=j,r}p(t){let e=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},at=class t{static{(0,i.a)(this,"b$1")}get _$AU(){var t,e;return null!=(e=null==(t=this._$AM)?void 0:t._$AU)?e:this._$Cv}constructor(t,e,s,i){var r;this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=null==(r=i?.isConnected)||r}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=nt(this,t,e),L(t)?t===Y||null==t||""===t?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==X&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):D(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==Y&&L(this._$AH)?this._$AA.nextSibling.data=t:this.T(j.createTextNode(t)),this._$AH=t}$(t){var e;let{values:s,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=rt.createElement(st(i.h,i.h[0]),this.options)),i);if((null==(e=this._$AH)?void 0:e._$AD)===r)this._$AH.p(s);else{let t=new lt(r,this),e=t.u(this.options);t.p(s),this.T(e),this._$AH=t}}_$AC(t){let e=tt.get(t.strings);return void 0===e&&tt.set(t.strings,e=new rt(t)),e}k(e){z(this._$AH)||(this._$AH=[],this._$AR());let s,i=this._$AH,r=0;for(let n of e)r===i.length?i.push(s=new t(this.S(k()),this.S(k()),this,this.options)):s=i[r],s._$AI(n),r++;r<i.length&&(this._$AR(s&&s._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for(null==(s=this._$AP)||s.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}},ht=class{static{(0,i.a)(this,"M")}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Y}_$AI(t,e=this,s,i){let r=this.strings,n=!1;if(void 0===r)t=nt(this,t,e,0),n=!L(t)||t!==this._$AH&&t!==X,n&&(this._$AH=t);else{let i,o,l=t;for(t=r[0],i=0;i<r.length-1;i++)o=nt(this,l[s+i],e,i),o===X&&(o=this._$AH[i]),n||(n=!L(o)||o!==this._$AH[i]),o===Y?t=Y:t!==Y&&(t+=(o??"")+r[i+1]),this._$AH[i]=o}n&&!i&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ct=class extends ht{static{(0,i.a)(this,"J")}constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}},dt=class extends ht{static{(0,i.a)(this,"K")}constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Y)}},pt=class extends ht{static{(0,i.a)(this,"Q")}constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=null!=(s=nt(this,t,e,0))?s:Y)===X)return;let i=this._$AH,r=t===Y&&i!==Y||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==Y&&(i===Y||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!=(s=null==(e=this.options)?void 0:e.host)?s:this.element,t):this._$AH.handleEvent(t)}},ut=class{static{(0,i.a)(this,"X")}constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){nt(this,t)}},$t=M.litHtmlPolyfillSupport;$t?.(rt,at),(null!=(ot=M.litHtmlVersions)?ot:M.litHtmlVersions=[]).push("3.1.4");var ft,_t=(0,i.a)(((t,e,s)=>{var i,r;let n=null!=(i=s?.renderBefore)?i:e,o=n._$litPart$;if(void 0===o){let t=null!=(r=s?.renderBefore)?r:null;n._$litPart$=o=new at(e.insertBefore(k(),t),t,void 0,s??{})}return o._$AI(t),o}),"et"),gt=class extends O{static{(0,i.a)(this,"n")}constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;let e=super.createRenderRoot();return null!=(t=this.renderOptions).renderBefore||(t.renderBefore=e.firstChild),e}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=_t(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return X}};gt._$litElement$=!0,gt.finalized=!0,null==(ft=globalThis.litElementHydrateSupport)||ft.call(globalThis,{LitElement:gt});var vt,yt=globalThis.litElementPolyfillSupport;yt?.({LitElement:gt}),(null!=(vt=globalThis.litElementVersions)?vt:globalThis.litElementVersions=[]).push("4.0.6");var mt=(0,i.a)((t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}),"s"),At=Object.defineProperty,bt=Object.defineProperties,Et=Object.getOwnPropertyDescriptors,St=Object.getOwnPropertySymbols,wt=Object.prototype.hasOwnProperty,Pt=Object.prototype.propertyIsEnumerable,Ct=(0,i.a)(((t,e,s)=>e in t?At(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s),"d"),Ot=(0,i.a)(((t,e)=>{for(var s in e||(e={}))wt.call(e,s)&&Ct(t,s,e[s]);if(St)for(var s of St(e))Pt.call(e,s)&&Ct(t,s,e[s]);return t}),"l"),Mt=(0,i.a)(((t,e)=>bt(t,Et(e))),"u"),Ut={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:w},xt=(0,i.a)(((t=Ut,e,s)=>{let{kind:i,metadata:r}=s,n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(s.name,t),"accessor"===i){let{name:i}=s;return{set(s){let r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){let{name:i}=s;return function(s){let r=this[i];e.call(this,s),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)}),"w");function Tt(t){return(e,s)=>"object"==typeof s?xt(t,e,s):((t,e,s)=>{let i=e.hasOwnProperty(s);return e.constructor.createProperty(s,i?Mt(Ot({},t),{wrapped:!0}):t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}(0,i.a)(Tt,"O")}}]);
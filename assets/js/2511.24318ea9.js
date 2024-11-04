/*! For license information please see 2511.24318ea9.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2511],{2511:(t,e,r)=>{r.d(e,{a:()=>q,b:()=>H,c:()=>R,d:()=>J,e:()=>F});var s=r(927),n=Object.create,a=Object.defineProperty,i=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,h=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,c=(0,s.a)(((t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports)),"I"),d=(0,s.a)(((t,e,r,n)=>{if(e&&"object"==typeof e||"function"==typeof e)for(let h of o(e))!l.call(t,h)&&h!==r&&a(t,h,{get:(0,s.a)((()=>e[h]),"get"),enumerable:!(n=i(e,h))||n.enumerable});return t}),"Ot"),u=(0,s.a)(((t,e,r)=>(r=null!=t?n(h(t)):{},d(!e&&t&&t.__esModule?r:a(r,"default",{value:t,enumerable:!0}),t))),"W"),p=c((t=>{function e(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function r(t){if("boolean"!=typeof t)throw new Error(`Expected boolean, not ${t}`)}function n(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function a(t){if("function"!=typeof t||"function"!=typeof t.create)throw new Error("Hash should be wrapped by utils.wrapConstructor");e(t.outputLen),e(t.blockLen)}function i(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function o(t,e){n(t);let r=e.outputLen;if(t.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}Object.defineProperty(t,"__esModule",{value:!0}),t.output=t.exists=t.hash=t.bytes=t.bool=t.number=void 0,(0,s.a)(e,"N"),t.number=e,(0,s.a)(r,"pe"),t.bool=r,(0,s.a)(n,"V"),t.bytes=n,(0,s.a)(a,"de"),t.hash=a,(0,s.a)(i,"he"),t.exists=i,(0,s.a)(o,"fe"),t.output=o;var h={number:e,bool:r,bytes:n,hash:a,exists:i,output:o};t.default=h})),f=c((t=>{Object.defineProperty(t,"__esModule",{value:!0}),t.add=t.toBig=t.split=t.fromBig=void 0;var e=BigInt(2**32-1),r=BigInt(32);function n(t,s=!1){return s?{h:Number(t&e),l:Number(t>>r&e)}:{h:0|Number(t>>r&e),l:0|Number(t&e)}}function a(t,e=!1){let r=new Uint32Array(t.length),s=new Uint32Array(t.length);for(let a=0;a<t.length;a++){let{h:i,l:o}=n(t[a],e);[r[a],s[a]]=[i,o]}return[r,s]}(0,s.a)(n,"X"),t.fromBig=n,(0,s.a)(a,"me"),t.split=a;var i=(0,s.a)(((t,e)=>BigInt(t>>>0)<<r|BigInt(e>>>0)),"Ct");t.toBig=i;var o=(0,s.a)(((t,e,r)=>t>>>r),"Tt"),h=(0,s.a)(((t,e,r)=>t<<32-r|e>>>r),"_t"),l=(0,s.a)(((t,e,r)=>t>>>r|e<<32-r),"Pt"),c=(0,s.a)(((t,e,r)=>t<<32-r|e>>>r),"vt"),d=(0,s.a)(((t,e,r)=>t<<64-r|e>>>r-32),"Nt"),u=(0,s.a)(((t,e,r)=>t>>>r-32|e<<64-r),"Dt"),p=(0,s.a)(((t,e)=>e),"kt"),f=(0,s.a)(((t,e)=>t),"Mt"),g=(0,s.a)(((t,e,r)=>t<<r|e>>>32-r),"Rt"),y=(0,s.a)(((t,e,r)=>e<<r|t>>>32-r),"Lt"),w=(0,s.a)(((t,e,r)=>e<<r-32|t>>>64-r),"Bt"),m=(0,s.a)(((t,e,r)=>t<<r-32|e>>>64-r),"Ut");function b(t,e,r,s){let n=(e>>>0)+(s>>>0);return{h:t+r+(n/2**32|0)|0,l:0|n}}(0,s.a)(b,"ge"),t.add=b;var v=(0,s.a)(((t,e,r)=>(t>>>0)+(e>>>0)+(r>>>0)),"$t"),I=(0,s.a)(((t,e,r,s)=>e+r+s+(t/2**32|0)|0),"jt"),k=(0,s.a)(((t,e,r,s)=>(t>>>0)+(e>>>0)+(r>>>0)+(s>>>0)),"Ht"),C=(0,s.a)(((t,e,r,s,n)=>e+r+s+n+(t/2**32|0)|0),"Gt"),x=(0,s.a)(((t,e,r,s,n)=>(t>>>0)+(e>>>0)+(r>>>0)+(s>>>0)+(n>>>0)),"Ft"),S=(0,s.a)(((t,e,r,s,n,a)=>e+r+s+n+a+(t/2**32|0)|0),"qt"),O={fromBig:n,split:a,toBig:t.toBig,shrSH:o,shrSL:h,rotrSH:l,rotrSL:c,rotrBH:d,rotrBL:u,rotr32H:p,rotr32L:f,rotlSH:g,rotlSL:y,rotlBH:w,rotlBL:m,add:b,add3L:v,add3H:I,add4L:k,add4H:C,add5H:S,add5L:x};t.default=O})),g=c((t=>{Object.defineProperty(t,"__esModule",{value:!0}),t.crypto=void 0,t.crypto="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0})),y=c((t=>{Object.defineProperty(t,"__esModule",{value:!0}),t.randomBytes=t.wrapXOFConstructorWithOpts=t.wrapConstructorWithOpts=t.wrapConstructor=t.checkOpts=t.Hash=t.concatBytes=t.toBytes=t.utf8ToBytes=t.asyncLoop=t.nextTick=t.hexToBytes=t.bytesToHex=t.isLE=t.rotr=t.createView=t.u32=t.u8=void 0;var e=g(),r=(0,s.a)((t=>t instanceof Uint8Array),"J"),n=(0,s.a)((t=>new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),"Kt");t.u8=n;var a=(0,s.a)((t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4))),"Vt");t.u32=a;var i=(0,s.a)((t=>new DataView(t.buffer,t.byteOffset,t.byteLength)),"Yt");t.createView=i;var o=(0,s.a)(((t,e)=>t<<32-e|t>>>e),"Xt");if(t.rotr=o,t.isLE=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0],!t.isLE)throw new Error("Non little-endian hardware is not supported");var h=Array.from({length:256},((t,e)=>e.toString(16).padStart(2,"0")));function l(t){if(!r(t))throw new Error("Uint8Array expected");let e="";for(let r=0;r<t.length;r++)e+=h[t[r]];return e}function c(t){if("string"!=typeof t)throw new Error("hex string expected, got "+typeof t);let e=t.length;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);let r=new Uint8Array(e/2);for(let s=0;s<r.length;s++){let e=2*s,n=t.slice(e,e+2),a=Number.parseInt(n,16);if(Number.isNaN(a)||a<0)throw new Error("Invalid byte sequence");r[s]=a}return r}(0,s.a)(l,"Qt"),t.bytesToHex=l,(0,s.a)(c,"Jt"),t.hexToBytes=c;var d=(0,s.a)((async()=>{}),"Zt");async function u(e,r,s){let n=Date.now();for(let a=0;a<e;a++){s(a);let e=Date.now()-n;e>=0&&e<r||(await(0,t.nextTick)(),n+=e)}}function p(t){if("string"!=typeof t)throw new Error("utf8ToBytes expected string, got "+typeof t);return new Uint8Array((new TextEncoder).encode(t))}function f(t){if("string"==typeof t&&(t=p(t)),!r(t))throw new Error("expected Uint8Array, got "+typeof t);return t}function y(...t){let e=new Uint8Array(t.reduce(((t,e)=>t+e.length),0)),s=0;return t.forEach((t=>{if(!r(t))throw new Error("Uint8Array expected");e.set(t,s),s+=t.length})),e}t.nextTick=d,(0,s.a)(u,"en"),t.asyncLoop=u,(0,s.a)(p,"Se"),t.utf8ToBytes=p,(0,s.a)(f,"M"),t.toBytes=f,(0,s.a)(y,"tn"),t.concatBytes=y;var w=class{static{(0,s.a)(this,"Q")}clone(){return this._cloneInto()}};t.Hash=w;var m=(0,s.a)((t=>"[object Object]"===Object.prototype.toString.call(t)&&t.constructor===Object),"nn");function b(t,e){if(void 0!==e&&("object"!=typeof e||!m(e)))throw new Error("Options should be object or undefined");return Object.assign(t,e)}function v(t){let e=(0,s.a)((e=>t().update(f(e)).digest()),"e"),r=t();return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=()=>t(),e}function I(t){let e=(0,s.a)(((e,r)=>t(r).update(f(e)).digest()),"e"),r=t({});return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=e=>t(e),e}function k(t){let e=(0,s.a)(((e,r)=>t(r).update(f(e)).digest()),"e"),r=t({});return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=e=>t(e),e}function C(t=32){if(e.crypto&&"function"==typeof e.crypto.getRandomValues)return e.crypto.getRandomValues(new Uint8Array(t));throw new Error("crypto.getRandomValues must be defined")}(0,s.a)(b,"rn"),t.checkOpts=b,(0,s.a)(v,"on"),t.wrapConstructor=v,(0,s.a)(I,"sn"),t.wrapConstructorWithOpts=I,(0,s.a)(k,"an"),t.wrapXOFConstructorWithOpts=k,(0,s.a)(C,"cn"),t.randomBytes=C})),w=c((t=>{Object.defineProperty(t,"__esModule",{value:!0}),t.shake256=t.shake128=t.keccak_512=t.keccak_384=t.keccak_256=t.keccak_224=t.sha3_512=t.sha3_384=t.sha3_256=t.sha3_224=t.Keccak=t.keccakP=void 0;var e=p(),r=f(),n=y(),[a,i,o]=[[],[],[]],h=BigInt(0),l=BigInt(1),c=BigInt(2),d=BigInt(7),u=BigInt(256),g=BigInt(113);for(let s=0,p=l,f=1,y=0;s<24;s++){[f,y]=[y,(2*f+3*y)%5],a.push(2*(5*y+f)),i.push((s+1)*(s+2)/2%64);let t=h;for(let e=0;e<7;e++)p=(p<<l^(p>>d)*g)%u,p&c&&(t^=l<<(l<<BigInt(e))-l);o.push(t)}var[w,m]=r.default.split(o,!0),b=(0,s.a)(((t,e,s)=>s>32?r.default.rotlBH(t,e,s):r.default.rotlSH(t,e,s)),"xe"),v=(0,s.a)(((t,e,s)=>s>32?r.default.rotlBL(t,e,s):r.default.rotlSL(t,e,s)),"Ee");function I(t,e=24){let r=new Uint32Array(10);for(let s=24-e;s<24;s++){for(let s=0;s<10;s++)r[s]=t[s]^t[s+10]^t[s+20]^t[s+30]^t[s+40];for(let s=0;s<10;s+=2){let e=(s+8)%10,n=(s+2)%10,a=r[n],i=r[n+1],o=b(a,i,1)^r[e],h=v(a,i,1)^r[e+1];for(let r=0;r<50;r+=10)t[s+r]^=o,t[s+r+1]^=h}let e=t[2],n=t[3];for(let r=0;r<24;r++){let s=i[r],o=b(e,n,s),h=v(e,n,s),l=a[r];e=t[l],n=t[l+1],t[l]=o,t[l+1]=h}for(let s=0;s<50;s+=10){for(let e=0;e<10;e++)r[e]=t[s+e];for(let e=0;e<10;e++)t[s+e]^=~r[(e+2)%10]&r[(e+4)%10]}t[0]^=w[s],t[1]^=m[s]}r.fill(0)}(0,s.a)(I,"Te"),t.keccakP=I;var k=class t extends n.Hash{static{(0,s.a)(this,"t")}constructor(t,r,s,a=!1,i=24){if(super(),this.blockLen=t,this.suffix=r,this.outputLen=s,this.enableXOF=a,this.rounds=i,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,e.default.number(s),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,n.u32)(this.state)}keccak(){I(this.state32,this.rounds),this.posOut=0,this.pos=0}update(t){e.default.exists(this);let{blockLen:r,state:s}=this,a=(t=(0,n.toBytes)(t)).length;for(let e=0;e<a;){let n=Math.min(r-this.pos,a-e);for(let r=0;r<n;r++)s[this.pos++]^=t[e++];this.pos===r&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:t,suffix:e,pos:r,blockLen:s}=this;t[r]^=e,128&e&&r===s-1&&this.keccak(),t[s-1]^=128,this.keccak()}writeInto(t){e.default.exists(this,!1),e.default.bytes(t),this.finish();let r=this.state,{blockLen:s}=this;for(let e=0,n=t.length;e<n;){this.posOut>=s&&this.keccak();let a=Math.min(s-this.posOut,n-e);t.set(r.subarray(this.posOut,this.posOut+a),e),this.posOut+=a,e+=a}return t}xofInto(t){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return e.default.number(t),this.xofInto(new Uint8Array(t))}digestInto(t){if(e.default.output(t,this),this.finished)throw new Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){let{blockLen:r,suffix:s,outputLen:n,rounds:a,enableXOF:i}=this;return e||(e=new t(r,s,n,i,a)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=a,e.suffix=s,e.outputLen=n,e.enableXOF=i,e.destroyed=this.destroyed,e}};t.Keccak=k;var C=(0,s.a)(((t,e,r)=>(0,n.wrapConstructor)((()=>new k(e,t,r)))),"b");t.sha3_224=C(6,144,28),t.sha3_256=C(6,136,32),t.sha3_384=C(6,104,48),t.sha3_512=C(6,72,64),t.keccak_224=C(1,144,28),t.keccak_256=C(1,136,32),t.keccak_384=C(1,104,48),t.keccak_512=C(1,72,64);var x=(0,s.a)(((t,e,r)=>(0,n.wrapXOFConstructorWithOpts)(((s={})=>new k(e,t,void 0===s.dkLen?r:s.dkLen,!0)))),"_e");t.shake128=x(31,168,16),t.shake256=x(31,136,32)})),m=c(((t,e)=>{var{sha3_512:r}=w(),n=(0,s.a)(((t=4,e=Math.random)=>{let r="";for(;r.length<t;)r+=Math.floor(36*e()).toString(36);return r}),"Z");function a(t){let e=0n;for(let r of t.values()){e=(e<<8n)+BigInt(r)}return e}(0,s.a)(a,"De");var i=(0,s.a)(((t="")=>a(r(t)).toString(36).slice(1)),"ke"),o=Array.from({length:26},((t,e)=>String.fromCharCode(e+97))),h=(0,s.a)((t=>o[Math.floor(t()*o.length)]),"gn"),l=(0,s.a)((({globalObj:t=(typeof global<"u"?global:typeof window<"u"?window:{}),random:e=Math.random}={})=>{let r=Object.keys(t).toString(),s=r.length?r+n(32,e):n(32,e);return i(s).substring(0,32)}),"Me"),c=(0,s.a)((t=>()=>t++),"Re"),d=(0,s.a)((({random:t=Math.random,counter:e=c(Math.floor(476782367*t())),length:r=24,fingerprint:s=l({random:t})}={})=>function(){let a=h(t),o=Date.now().toString(36),l=e().toString(36),c=n(r,t);return`${a+i(`${o+c+l+s}`).substring(1,r)}`}),"Le"),u=d(),p=(0,s.a)(((t,{minLength:e=2,maxLength:r=32}={})=>{let s=t.length,n=/^[0-9a-z]+$/;try{if("string"==typeof t&&s>=e&&s<=r&&n.test(t))return!0}finally{}return!1}),"Sn");e.exports.getConstants=()=>({defaultLength:24,bigLength:32}),e.exports.init=d,e.exports.createId=u,e.exports.bufToBigInt=a,e.exports.createCounter=c,e.exports.createFingerprint=l,e.exports.isCuid=p})),b=c(((t,e)=>{var{createId:r,init:s,getConstants:n,isCuid:a}=m();e.exports.createId=r,e.exports.init=s,e.exports.getConstants=n,e.exports.isCuid=a}));Date.now().toString().slice(5);var v=BigInt(1e3),I=BigInt(1e6),k=BigInt(1e9);async function C(t){return"number"==typeof t&&(t=BigInt(t)),t<v?`${t}ns`:t<I?t/v+"\u03bcs":t<k?t/I+"ms":t/k+"s"}async function x(t){return{raw:Number(t),formatted:await C(t)}}(0,s.a)(C,"ue"),(0,s.a)(x,"K");var S=u(b(),1),O=u(b(),1),L="orama_user_id";function A(t){let[e,...r]=t.split("\n"),s=r.join("\n").replace("data: ","");return{event:e.replace("event: ",""),data:s}}function E(t){return"object"==typeof t?JSON.stringify(t):`${t}`}(0,s.a)(A,"Fe"),(0,s.a)(E,"te");var B=class{static{(0,s.a)(this,"L")}messages;inferenceType;oramaClient;endpoint;abortController;events;userContext;conversationID;lastInteractionParams;state=[];constructor(t){let e=t.oramaClient.answersApiBaseURL||"https://answer.api.orama.com";this.messages=t.initialMessages||[],this.inferenceType=t.inferenceType,this.oramaClient=t.oramaClient,this.endpoint=`${e}/v1/answer?api-key=${this.oramaClient.api_key}`,this.events=t.events,this.conversationID=(0,O.createId)(),this.userContext=t.userContext}async askStream(t){return this.messages.push({role:"user",content:t.term??""}),this.fetchAnswer(t)}async ask(t){let e=await this.askStream(t),r="";for await(let s of e)r=s;return this.events?.onMessageChange&&this.events.onMessageChange(this.messages),r}getMessages(){return this.messages}clearSession(){this.messages=[],this.state=[],this.events?.onMessageChange&&this.events.onMessageChange(this.messages),this.events?.onStateChange&&this.events.onStateChange(this.state)}abortAnswer(){if(!this.abortController)throw new Error("AbortController is not ready");this.abortController.abort(),this.abortController=void 0,this.state[this.state.length-1].aborted=!0}async regenerateLast({stream:t=!0}={}){if(0===this.state.length||0===this.messages.length)throw new Error("No messages to regenerate");if("assistant"!==this.messages.at(-1)?.role)throw new Error("Last message is not an assistant message");return this.messages.pop(),this.state.pop(),t?this.askStream(this.lastInteractionParams):this.ask(this.lastInteractionParams)}addNewEmptyAssistantMessage(){this.messages.push({role:"assistant",content:""})}async*fetchAnswer(t){this.abortController=new AbortController,this.lastInteractionParams=t;let e=(0,O.createId)(),r=null,s=this.state.length;this.state.push({interactionId:e,query:t.term??"",response:"",relatedQueries:null,sources:null,translatedQuery:null,aborted:!1,loading:!0,error:!1,errorMessage:null});try{this.events?.onNewInteractionStarted&&this.events.onNewInteractionStarted(e),this.events?.onStateChange&&this.events.onStateChange(this.state);let a=new URLSearchParams;if(a.append("type",this.inferenceType),a.append("messages",JSON.stringify(this.messages)),a.append("query",t.term??""),a.append("conversationId",this.conversationID),a.append("userId",this.oramaClient.getUserId()),a.append("endpoint",this.oramaClient.endpoint),a.append("searchParams",JSON.stringify(t)),a.append("identity",this.oramaClient.getIdentity()??""),a.append("interactionId",e),a.append("alias",this.oramaClient.getAlias()??""),this.userContext&&a.append("userContext",E(this.userContext)),t.userData&&a.append("userData",E(t.userData)),t.related){if(t.related?.howMany&&t.related?.howMany>5)throw new Error("Can generate at most 5 related queries");a.append("related",JSON.stringify({enabled:!0,howMany:t.related.howMany??3,format:t.related.format??"question"}))}let i=await fetch(this.endpoint,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a.toString(),signal:this.abortController.signal});if(!i.ok||!i.body)throw new Error(i.statusText);r=i.body.getReader();let o=new TextDecoder,h=[],l="";this.events?.onMessageLoading&&this.events.onMessageLoading(!0),this.addNewEmptyAssistantMessage();let c=this.messages.at(-1);for(;;){let t,{value:e,done:a}=await r.read();if(a)break;for(l+=o.decode(e,{stream:!0});-1!==(t=l.indexOf("\n\n"));){let e=l.slice(0,t);l=l.slice(t+2);try{let t=A(e),r=JSON.parse(t.data);if("sources"===r.type)this.state[s].sources=r.message,this.events?.onSourceChange&&this.events.onSourceChange(r.message),this.events?.onStateChange&&this.events.onStateChange(this.state);else if("query-translated"===r.type)this.state[s].translatedQuery=r.message,this.events?.onQueryTranslated&&this.events.onQueryTranslated(r.message),this.events?.onStateChange&&this.events.onStateChange(this.state);else if("related-queries"===r.type)this.state[s].relatedQueries=r.message,this.events?.onRelatedQueries&&this.events.onRelatedQueries(r.message),this.events?.onStateChange&&this.events.onStateChange(this.state);else if("text"===r.type)for(h.push(r.message);h.length>0;)c.content+=h.shift(),this.state[s].response=c.content,this.events?.onStateChange&&this.events.onStateChange(this.state),this.events?.onMessageChange&&this.events.onMessageChange(this.messages),yield c.content}catch(n){console.error("Error parsing SSE event:",n),console.error("Raw message:",e)}}}}catch(a){if("AbortError"!==a.name)throw this.state[s].error=!0,this.state[s].errorMessage=a.message??"Unknown error",a;this.state[s].aborted=!0,this.events?.onAnswerAborted&&this.events.onAnswerAborted(!0)}finally{r?.releaseLock(),this.state[s].loading=!1,this.events?.onStateChange&&this.events.onStateChange(this.state),this.events?.onMessageLoading&&this.events.onMessageLoading(!1)}}},T=class{static{(0,s.a)(this,"B")}cache;config;constructor(t){this.cache=new Map,this.config=t}set(t,e){this.cache.set(t,e)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){return this.cache.delete(t)}clear(){this.cache.clear()}size(){return this.cache.size}},_="1.3.14",P=_;function U(t,e){typeof navigator<"u"?typeof navigator.sendBeacon<"u"&&navigator.sendBeacon(t,e):fetch(t,{method:"POST",body:e,headers:{"Content-Type":"application/json"}}).then((()=>{}),(t=>console.log(t)))}(0,s.a)(U,"x");var M=class t{static{(0,s.a)(this,"t")}data;params;config;profile;constructor(t,e){this.data=[],this.config=t,this.profile=e}setParams(t){this.params=t}static create(e,r){let s=new t(e,r);return s.start(),s}add(t){this.data.push({rawSearchString:t.rawSearchString,query:t.query,resultsCount:t.resultsCount,roundTripTime:t.roundTripTime,searchedAt:t.searchedAt,userId:this.profile.getUserId(),identity:this.profile.getIdentity(),alias:this.profile.getAlias(),referer:typeof location<"u"?location.toString():void 0}),null!=this.params&&this.data.length>=this.config.flushSize&&this.flush()}flush(){if(null==this.params||0===this.data.length)return;let t=this.data;this.data=[];let e={source:"fe",deploymentID:this.params.deploymentID,index:this.params.index,oramaId:this.config.id,oramaVersion:P,userAgent:typeof navigator<"u"?navigator.userAgent:void 0,events:t};U(this.params.endpoint+`?api-key=${this.config.api_key}`,JSON.stringify(e))?.catch((t=>console.log(t)))}start(){let t=setInterval(this.flush.bind(this),this.config.flushInterval);null!=t.unref&&t.unref()}},$=class{static{(0,s.a)(this,"$")}constructor(t){this.params=t}intervalId;start(){this.stop(),this.intervalId=setInterval(this.beat.bind(this),this.params.frequency)}stop(){void 0!==this.intervalId&&clearInterval(this.intervalId)}beat(){U(this.params.endpoint)?.catch((t=>console.log(t)))}},D=u(b(),1),N=class{static{(0,s.a)(this,"H")}endpoint;apiKey;userId;identity;userAlias;params;constructor({endpoint:t,apiKey:e}){if(!t||!e)throw new Error("Endpoint and API Key are required to create a Profile");if("string"!=typeof t||"string"!=typeof e)throw new Error("Endpoint and API Key must be strings");if(typeof localStorage<"u"){let t=localStorage.getItem(L);t?this.userId=t:(this.userId=(0,D.createId)(),localStorage.setItem(L,this.userId))}else this.userId=(0,D.createId)();this.endpoint=t,this.apiKey=e}setParams(t){let{protocol:e,host:r}=new URL(t.identifyUrl),s=`${e}//${r}/identify`;this.params={identifyUrl:s,index:t.index}}getIdentity(){return this.identity}getUserId(){return this.userId}getAlias(){return this.userAlias}async sendProfileData(t){if(!this.params)throw new Error("Orama Profile is not initialized");let e=JSON.stringify({...t,visitorId:this.getUserId(),index:this.params.index});await U(`${this.params?.identifyUrl}?api-key=${this.apiKey}`,e)}async identify(t,e){if("string"!=typeof e)throw new Error("Identity must be a string");await t,await this.sendProfileData({entity:"identity",id:e}),this.identity=e}async alias(t,e){if("string"!=typeof e)throw new Error("Identity must be a string");await t,await this.sendProfileData({entity:"alias",id:e}),this.userAlias=e}reset(){this.userId=(0,D.createId)(),this.identity=void 0,this.userAlias=void 0}},j=class{static{(0,s.a)(this,"Ve")}id=(0,S.createId)();api_key;endpoint;answersApiBaseURL;collector;cache;profile;searchDebounceTimer;searchRequestCounter=0;heartbeat;initPromise;constructor(t){if(this.api_key=t.api_key,this.endpoint=t.endpoint,this.answersApiBaseURL=t.answersApiBaseURL,this.profile=new N({endpoint:this.endpoint,apiKey:this.api_key}),!1!==t.telemetry){let e={id:this.id,api_key:this.api_key,flushInterval:t.telemetry?.flushInterval??5e3,flushSize:t.telemetry?.flushSize??25};this.collector=M.create(e,this.profile)}if(!1!==t.cache){let t={};this.cache=new T(t)}this.init()}async search(t,e){await this.initPromise;let r,n=++this.searchRequestCounter,a=`search-${JSON.stringify(t)}`,i=null,o=!1,h=!0!==e?.fresh&&this.cache?.has(a),l=(0,s.a)((async()=>{try{let s=Date.now();i=await this.fetch("search","POST",{q:t},e?.abortController);let n=Date.now();i.elapsed=await x(BigInt(1e6*n-1e6*s)),r=n-s,this.cache?.set(a,i)}catch(s){if("AbortError"!==s.name)throw console.error("Search request failed",s),s}return this.collector&&this.collector.add({rawSearchString:t.term,resultsCount:i?.hits?.length??0,roundTripTime:r,query:t,cached:o,searchedAt:new Date,userId:this.profile.getUserId()}),i}),"p");return h&&this.cache?(r=0,i=this.cache.get(a),o=!0,this.collector&&this.collector.add({rawSearchString:t.term,resultsCount:i?.hits?.length??0,roundTripTime:r,query:t,cached:o,searchedAt:new Date,userId:this.profile.getUserId()}),n===this.searchRequestCounter?i:null):e?.debounce?new Promise(((t,r)=>{clearTimeout(this.searchDebounceTimer),this.searchDebounceTimer=setTimeout((async()=>{try{await l(),t(i)}catch(e){"AbortError"!==e.name&&(console.error("Search request failed",e),r(e))}}),e?.debounce||300)})):l()}async vectorSearch(t,e){await this.initPromise;let r,s,n=`vectorSearch-${JSON.stringify(t)}`,a=!1;if(!0===(!0!==e?.fresh&&this.cache?.has(n))&&null!=this.cache)r=0,s=this.cache.get(n),a=!0;else{let a=Date.now();s=await this.fetch("vector-search2","POST",{q:t},e?.abortController);let i=Date.now();s.elapsed=await x(BigInt(1e6*i-1e6*a)),r=i-a,this.cache?.set(n,s)}return null!=this.collector&&this.collector.add({rawSearchString:t.term,resultsCount:s.hits?.length??0,roundTripTime:r,query:t,cached:a,searchedAt:new Date,userId:this.profile.getUserId()}),s}createAnswerSession(t){return new B({inferenceType:t?.inferenceType||"documentation",initialMessages:t?.initialMessages||[],oramaClient:this,events:t?.events,userContext:t?.userContext})}startHeartBeat(t){this.heartbeat?.stop(),this.heartbeat=new $({...t,endpoint:this.endpoint+`/health?api-key=${this.api_key}`}),this.heartbeat.start()}stopHeartBeat(){this.heartbeat?.stop()}async getPop(){return(await this.initPromise)?.pop??""}init(){this.initPromise=this.fetch("init","GET").then((t=>(this.collector?.setParams({endpoint:t.collectUrl,deploymentID:t.deploymentID,index:t.index}),this.profile?.setParams({identifyUrl:t.collectUrl,index:t.index}),t))).catch((t=>(console.log(t),null)))}async fetch(t,e,r,s){if(!0===s?.signal.aborted)throw new Error("Request aborted");let n={method:e,headers:{"Content-Type":"application/x-www-form-urlencoded"},signal:s?.signal};if("POST"===e&&void 0!==r){let t=r;t.version=_,t.id=this.id,t.visitorId=this.profile.getUserId(),n.body=Object.entries(t).map((([t,e])=>`${t}=${encodeURIComponent(JSON.stringify(e))}`)).join("&")}let a=await fetch(`${this.endpoint}/${t}?api-key=${this.api_key}`,n);if(!a.ok){let t=new Error;throw t.httpResponse=a,t}return await a.json()}getIdentity(){return this.profile.getIdentity()}getUserId(){return this.profile.getUserId()}getAlias(){return this.profile.getAlias()}async identify(t){if(void 0===this.initPromise)throw new Error("OramaClient not initialized");await this.profile.identify(this.initPromise,t)}async alias(t){if(void 0===this.initPromise)throw new Error("OramaClient not initialized");await this.profile.alias(this.initPromise,t)}reset(){this.profile.reset()}};function q(t){var e;if(null!==(e=navigator.clipboard)&&void 0!==e&&e.writeText)navigator.clipboard.writeText(t).catch((t=>{console.error("Could not copy text: ",t)}));else{let e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}}function H(t,e){return Array.from(t.attributes).reduce(((t,r)=>(e.includes(r.name)||(t[r.name]=r.value),t)),{})}function R(t,e,r){let s=`\n    Component: ${t.tagName.toLowerCase()}\n    Id: ${t.id}\n  `;if(!e&&!r)throw new Error(`Invalid component configuration. Please provide a valid index or instance prop. ${s}`);if(r&&!e&&r.search({term:"test"}).catch((()=>{throw new Error(`Invalid cloud instance configuration. Please provide a valid api_key and endpoint ${s}`)})),!e||r)e&&r&&console.warn(`Both index and instance props are provided. Instance prop will be used. ${s}`);else if(!e.api_key||!e.endpoint)throw new Error(`Invalid cloud index configuration. Please provide a valid api_key and endpoint ${s}`)}function J(t){return new j({api_key:t.api_key,endpoint:t.endpoint})}function F(t){return`orama-ui-${t}-${Math.random().toString(36).substring(2,15)}`}(0,s.a)(q,"copyToClipboard"),(0,s.a)(H,"getNonExplicitAttributes"),(0,s.a)(R,"validateCloudIndexConfig"),(0,s.a)(J,"initOramaClient"),(0,s.a)(F,"generateRandomID")}}]);
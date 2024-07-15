"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7516,1446],{1446:(e,t,n)=>{n.r(t),n.d(t,{formatElapsedTime:()=>s,getDocumentIndexId:()=>i,getDocumentProperties:()=>o.JN,getInnerType:()=>h,getVectorSize:()=>p,isArrayType:()=>d,isGeoPointType:()=>u,isVectorType:()=>f,validateSchema:()=>c});var r=n(4918),o=n(7916);async function s(e){return{raw:Number(e),formatted:await(0,o.j7)(e)}}async function i(e){if(e.id){if("string"!=typeof e.id)throw(0,r.$)("DOCUMENT_ID_MUST_BE_STRING",typeof e.id);return e.id}return await(0,o.NF)()}async function c(e,t){for(const[n,o]of Object.entries(t)){const t=e[n];if(void 0!==t&&(("geopoint"!==o||"object"!=typeof t||"number"!=typeof t.lon||"number"!=typeof t.lat)&&("enum"!==o||"string"!=typeof t&&"number"!=typeof t)))if("enum[]"===o&&Array.isArray(t)){const e=t.length;for(let r=0;r<e;r++)if("string"!=typeof t[r]&&"number"!=typeof t[r])return n+"."+r}else if(f(o)){const e=p(o);if(!Array.isArray(t)||t.length!==e)throw(0,r.$)("INVALID_INPUT_VECTOR",n,e,t.length)}else if(d(o)){if(!Array.isArray(t))return n;const e=h(o),r=t.length;for(let o=0;o<r;o++)if(typeof t[o]!==e)return n+"."+o}else if("object"!=typeof o){if(typeof t!==o)return n}else{if(!t||"object"!=typeof t)return n;const e=await c(t,o);if(e)return n+"."+e}}}const a={string:!1,number:!1,boolean:!1,enum:!1,geopoint:!1,"string[]":!0,"number[]":!0,"boolean[]":!0,"enum[]":!0},l={"string[]":"string","number[]":"number","boolean[]":"boolean","enum[]":"enum"};function u(e){return"geopoint"===e}function f(e){return"string"==typeof e&&/^vector\[\d+\]$/.test(e)}function d(e){return"string"==typeof e&&a[e]}function h(e){return l[e]}function p(e){const t=Number(e.slice(7,-1));switch(!0){case isNaN(t):throw(0,r.$)("INVALID_VECTOR_VALUE",e);case t<=0:throw(0,r.$)("INVALID_VECTOR_SIZE",e);default:return t}}},6897:(e,t,n)=>{function r(e,t,n){if(e===t)return 0;const r=e;e.length>t.length&&(e=t,t=r);let o=e.length,s=t.length,i=0;for(;i<o&&e.charCodeAt(i)===t.charCodeAt(i);)i++;if(i===o)return 0;for(;o>0&&e.charCodeAt(~-o)===t.charCodeAt(~-s);)o--,s--;if(!o)return s>n?-1:s;if(o-=i,s-=i,o<=n&&s<=n)return o>s?o:s;const c=s-o;if(n>s)n=s;else if(c>n)return-1;let a=0;const l=[],u=[];for(;a<n;)u[a]=t.charCodeAt(i+a),l[a]=++a;for(;a<s;)u[a]=t.charCodeAt(i+a),l[a++]=n+1;const f=n-c,d=n<s;let h=0,p=n,g=0,m=0,y=0,b=0,v=0;for(a=0;a<o;a++){for(m=a,g=a+1,b=e.charCodeAt(i+a),h+=a>f?1:0,p+=p<s?1:0,v=h;v<p;v++)y=g,g=m,m=l[v],b!==u[v]&&(m<g&&(g=m),y<g&&(g=y),g++),l[v]=g;if(d&&l[a+c]>n)return-1}return g<=n?g:-1}async function o(e,t,n){const o=r(e,t,n);return{distance:o,isBounded:o>=0}}function s(e,t,n){const o=r(e,t,n);return{distance:o,isBounded:o>=0}}n.d(t,{Gd:()=>s,X1:()=>o})},2051:(e,t,n)=>{n.d(t,{e:()=>w,J:()=>b});var r=n(4918);const o=192,s=383,i=[65,65,65,65,65,65,65,67,69,69,69,69,73,73,73,73,69,78,79,79,79,79,79,null,79,85,85,85,85,89,80,115,97,97,97,97,97,97,97,99,101,101,101,101,105,105,105,105,101,110,111,111,111,111,111,null,111,117,117,117,117,121,112,121,65,97,65,97,65,97,67,99,67,99,67,99,67,99,68,100,68,100,69,101,69,101,69,101,69,101,69,101,71,103,71,103,71,103,71,103,72,104,72,104,73,105,73,105,73,105,73,105,73,105,73,105,74,106,75,107,107,76,108,76,108,76,108,76,108,76,108,78,110,78,110,78,110,110,78,110,79,111,79,111,79,111,79,111,82,114,82,114,82,114,83,115,83,115,83,115,83,115,84,116,84,116,84,116,85,117,85,117,85,117,85,117,85,117,85,117,87,119,89,121,89,90,122,90,122,90,122,115];var c=n(1239);const a={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},l={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},u="[aeiouy]",f="[^aeiou][^aeiouy]*",d=u+"[aeiou]*",h="^("+f+")?"+d+f,p="^("+f+")?"+d+f+"("+d+")?$",g="^("+f+")?"+d+f+d+f,m="^("+f+")?"+u;function y(e){let t,n,r,o,s,i;if(e.length<3)return e;const c=e.substring(0,1);if("y"==c&&(e=c.toUpperCase()+e.substring(1)),r=/^(.+?)(ss|i)es$/,o=/^(.+?)([^s])s$/,r.test(e)?e=e.replace(r,"$1$2"):o.test(e)&&(e=e.replace(o,"$1$2")),r=/^(.+?)eed$/,o=/^(.+?)(ed|ing)$/,r.test(e)){const t=r.exec(e);r=new RegExp(h),r.test(t[1])&&(r=/.$/,e=e.replace(r,""))}else if(o.test(e)){t=o.exec(e)[1],o=new RegExp(m),o.test(t)&&(e=t,o=/(at|bl|iz)$/,s=new RegExp("([^aeiouylsz])\\1$"),i=new RegExp("^"+f+u+"[^aeiouwxy]$"),o.test(e)?e+="e":s.test(e)?(r=/.$/,e=e.replace(r,"")):i.test(e)&&(e+="e"))}if(r=/^(.+?)y$/,r.test(e)){const n=r.exec(e);t=null==n?void 0:n[1],r=new RegExp(m),t&&r.test(t)&&(e=t+"i")}if(r=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,r.test(e)){const o=r.exec(e);t=null==o?void 0:o[1],n=null==o?void 0:o[2],r=new RegExp(h),t&&r.test(t)&&(e=t+a[n])}if(r=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,r.test(e)){const o=r.exec(e);t=null==o?void 0:o[1],n=null==o?void 0:o[2],r=new RegExp(h),t&&r.test(t)&&(e=t+l[n])}if(r=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,o=/^(.+?)(s|t)(ion)$/,r.test(e)){const n=r.exec(e);t=null==n?void 0:n[1],r=new RegExp(g),t&&r.test(t)&&(e=t)}else if(o.test(e)){const n=o.exec(e);t=(null==n?void 0:n[1])??""+(null==n?void 0:n[2])??"",o=new RegExp(g),o.test(t)&&(e=t)}if(r=/^(.+?)e$/,r.test(e)){const n=r.exec(e);t=null==n?void 0:n[1],r=new RegExp(g),o=new RegExp(p),s=new RegExp("^"+f+u+"[^aeiouwxy]$"),t&&(r.test(t)||o.test(t)&&!s.test(t))&&(e=t)}return r=/ll$/,o=new RegExp(g),r.test(e)&&o.test(e)&&(r=/.$/,e=e.replace(r,"")),"y"==c&&(e=c.toLowerCase()+e.substring(1)),e}function b(e,t){var n;const r=`${this.language}:${e}:${t}`;return this.normalizationCache.has(r)?this.normalizationCache.get(r):(null===(n=this.stopWords)||void 0===n?void 0:n.includes(t))?(this.normalizationCache.set(r,""),""):(this.stemmer&&!this.stemmerSkipProperties.has(e)&&(t=this.stemmer(t)),t=function(e){const t=[];for(let r=0;r<e.length;r++)t[r]=(n=e.charCodeAt(r))<o||n>s?n:i[n-o]||n;var n;return String.fromCharCode(...t)}(t),this.normalizationCache.set(r,t),t)}function v(e,t,n){if(t&&t!==this.language)throw(0,r.$)("LANGUAGE_NOT_SUPPORTED",t);if("string"!=typeof e)return[e];let o;if(n&&this.tokenizeSkipProperties.has(n))o=[this.normalizeToken.bind(this,n??"")(e)];else{const t=c.DO[this.language];o=e.toLowerCase().split(t).map(this.normalizeToken.bind(this,n??"")).filter(Boolean)}const s=function(e){for(;""===e[e.length-1];)e.pop();for(;""===e[0];)e.shift();return e}(o);return this.allowDuplicates?s:Array.from(new Set(s))}async function w(e={}){if(e.language){if(!c.Fc.includes(e.language))throw(0,r.$)("LANGUAGE_NOT_SUPPORTED",e.language)}else e.language="english";let t,n;if(e.stemming||e.stemmer&&!("stemming"in e))if(e.stemmer){if("function"!=typeof e.stemmer)throw(0,r.$)("INVALID_STEMMER_FUNCTION_TYPE");t=e.stemmer}else{if("english"!==e.language)throw(0,r.$)("MISSING_STEMMER",e.language);t=y}if(!1!==e.stopWords){if(n=[],Array.isArray(e.stopWords))n=e.stopWords;else if("function"==typeof e.stopWords)n=await e.stopWords(n);else if(e.stopWords)throw(0,r.$)("CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY");if(!Array.isArray(n))throw(0,r.$)("CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY");for(const e of n)if("string"!=typeof e)throw(0,r.$)("CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY")}const o={tokenize:v,language:e.language,stemmer:t,stemmerSkipProperties:new Set(e.stemmerSkipProperties?[e.stemmerSkipProperties].flat():[]),tokenizeSkipProperties:new Set(e.tokenizeSkipProperties?[e.tokenizeSkipProperties].flat():[]),stopWords:n,allowDuplicates:Boolean(e.allowDuplicates),normalizeToken:b,normalizationCache:new Map};return o.tokenize=v.bind(o),o.normalizeToken=b,o}},7516:(e,t,n)=>{n.r(t),n.d(t,{create:()=>Ee});var r=n(1446),o=n(7916),s=n(5533);async function i(e,t){return{sharedInternalDocumentStore:t,docs:{},count:0}}async function c(e,t){const n=(0,s.Kj)(e.sharedInternalDocumentStore,t);return e.docs[n]}async function a(e,t){const n=t.length,r=Array.from({length:n});for(let o=0;o<n;o++){const n=(0,s.Kj)(e.sharedInternalDocumentStore,t[o]);r[o]=e.docs[n]}return r}async function l(e){return e.docs}async function u(e,t,n){const r=(0,s.Kj)(e.sharedInternalDocumentStore,t);return void 0===e.docs[r]&&(e.docs[r]=n,e.count++,!0)}async function f(e,t){const n=(0,s.Kj)(e.sharedInternalDocumentStore,t);return void 0!==e.docs[n]&&(delete e.docs[n],e.count--,!0)}async function d(e){return e.count}async function h(e,t){const n=t;return{docs:n.docs,count:n.count,sharedInternalDocumentStore:e}}async function p(e){return{docs:e.docs,count:e.count}}var g=n(4918);const m=["beforeInsert","afterInsert","beforeRemove","afterRemove","beforeUpdate","afterUpdate","beforeSearch","afterSearch","beforeInsertMultiple","afterInsertMultiple","beforeRemoveMultiple","afterRemoveMultiple","beforeUpdateMultiple","afterUpdateMultiple","beforeLoad","afterLoad","afterCreate"];async function y(e,t){var n;const r=[],o=null===(n=e.plugins)||void 0===n?void 0:n.length;if(!o)return r;for(let i=0;i<o;i++)try{const n=await e.plugins[i];"function"==typeof n[t]&&r.push(n[t])}catch(s){throw console.error("Caught error in getAllPluginsByHook:",s),(0,g.$)("PLUGIN_CRASHED")}return r}var b=n(8598);function v(e){const t=e.r;return e.r=t.l,t.l=e,e.h=Math.max(S(e.l),S(e.r))+1,t.h=Math.max(S(t.l),S(t.r))+1,t}function w(e){const t=e.l;return e.l=t.r,t.r=e,e.h=Math.max(S(e.l),S(e.r))+1,t.h=Math.max(S(t.l),S(t.r))+1,t}function I(e,t,n){const r=[];return function e(s){null!==s&&(t<s.k&&e(s.l),s.k>=t&&s.k<=n&&(0,o.h)(r,s.v),n>s.k&&e(s.r))}(e.root),r}function T(e,t,n=!1){const r=[];if(null===e)return r;const s=[e.root];for(;s.length>0;){const e=s.pop();e&&(n&&e.k>=t&&(0,o.h)(r,e.v),!n&&e.k>t&&(0,o.h)(r,e.v),s.push(e.r),s.push(e.l))}return r}function k(e,t,n=!1){const r=[];if(null===e)return r;const s=[e.root];for(;s.length>0;){const e=s.pop();e&&(n&&e.k<=t&&(0,o.h)(r,e.v),!n&&e.k<t&&(0,o.h)(r,e.v),s.push(e.r),s.push(e.l))}return r}function D(e,t){for(;null!==e;)if(t<e.k)e=e.l;else{if(!(t>e.k))return e;e=e.r}return null}function S(e){return null!==e?e.h:-1}function A(e,t){const n=D(e.root,t);return null===n?null:n.v}function P(e,t){const n=Object.keys(t);if(1!==n.length)throw new Error("Invalid operation");const r=n[0];switch(r){case"eq":{const n=t[r];return e.numberToDocumentId.get(n)??[]}case"in":{const n=t[r],s=[];for(const t of n){const n=e.numberToDocumentId.get(t);null!=n&&(0,o.h)(s,n)}return s}case"nin":{const n=t[r],s=[],i=e.numberToDocumentId.keys();for(const t of i){if(n.includes(t))continue;const r=e.numberToDocumentId.get(t);null!=r&&(0,o.h)(s,r)}return s}}throw new Error("Invalid operation")}function O(e,t){const n=Object.keys(t);if(1!==n.length)throw new Error("Invalid operation");const r=n[0];if("containsAll"===r){const n=t[r].map((t=>e.numberToDocumentId.get(t)??[]));return(0,o.y$)(n)}throw new Error("Invalid operation")}var x=n(6897);class M{constructor(e,t,n){this.k=e,this.s=t,this.e=n}c={};d=[];w="";toJSON(){return{w:this.w,s:this.s,c:this.c,d:this.d,e:this.e}}}function R(e,t){e.w=t.w+e.s}function E(e,t){e.d.push(t)}function _(e,t){const n=e.d.indexOf(t);return-1!==n&&(e.d.splice(n,1),!0)}function $(e,t,n,r,s){if(e.e){const{w:i,d:c}=e;if(r&&i!==n)return{};if(null==(0,o.g5)(t,i))if(s){Math.abs(n.length-i.length)<=s&&(0,x.Gd)(n,i,s).isBounded&&(t[i]=[])}else t[i]=[];if(null!=(0,o.g5)(t,i)&&c.length>0){const e=new Set(t[i]),n=c.length;for(let t=0;t<n;t++)e.add(c[t]);t[i]=Array.from(e)}}for(const o of Object.keys(e.c))$(e.c[o],t,n,r,s);return t}function N(e,t){let n="";const r=Math.min(e.length,t.length);for(let o=0;o<r;o++){if(e[o]!==t[o])return n;n+=e[o]}return n}function C(e=!1,t="",n=""){return new M(n,t,e)}function L(e,t,n){const r=t.length;for(let o=0;o<r;o++){const r=t[o],s=t.substring(o),i=e.c[r];if(!i){const t=C(!0,s,r);return E(t,n),e.c[r]=t,void R(t,e)}{const c=i.s,a=c.length,l=N(c,s),u=l.length;if(c===s)return E(i,n),void(i.e=!0);const f=c[u];if(u<a&&u===s.length){const t=C(!0,s,r);t.c[f]=i;const o=t.c[f];return o.s=c.substring(u),o.k=f,e.c[r]=t,R(t,e),R(o,t),void E(t,n)}if(u<a&&u<s.length){const a=C(!1,l,r);a.c[f]=i,e.c[r]=a;const d=a.c[f];d.s=c.substring(u),d.k=f;const h=s[u],p=C(!0,t.substring(o+u),h);return E(p,n),a.c[h]=p,R(a,e),R(p,a),void R(d,a)}o+=a-1,e=i}}}function j(e,t,n,r,s,i){if(!(r<0))if(e.w.startsWith(t))$(e,i,t,!1,0);else{if(e.e){const{w:n,d:r}=e;if(n&&((0,x.Gd)(t,n,s).isBounded&&(i[n]=[]),null!=(0,o.g5)(i,n)&&r.length>0)){const e=new Set(i[n]),t=r.length;for(let n=0;n<t;n++)e.add(r[n]);i[n]=Array.from(e)}}if(!(n>=t.length)){t[n]in e.c&&j(e.c[t[n]],t,n+1,r,s,i),j(e,t,n+1,r-1,s,i);for(const o in e.c)j(e.c[o],t,n,r-1,s,i);for(const o in e.c)o!==t[n]&&j(e.c[o],t,n+1,r-1,s,i)}}}function z(e,{term:t,exact:n,tolerance:r}){if(r&&!n){const n={};return j(e,t,0,(r=r||0)||0,r,n),n}{const o=t.length;for(let n=0;n<o;n++){const o=t[n];if(!(o in e.c))return{};{const s=e.c[o],i=s.s,c=t.substring(n),a=N(i,c).length;if(a!==i.length&&a!==c.length){if(r)break;return{}}n+=s.s.length-1,e=s}}const s={};return $(e,s,t,n,r),s}}function W(e,t,n,r=!0){if(!t)return!0;const o=t.length;for(let s=0;s<o;s++){const o=t[s];if(!(o in e.c))return!1;{const i=e.c[o];s+=i.s.length-1,e=i,r&&e.w!==t||_(e,n)}}return!0}const U=2,F=6371e3;function B(e,t,n,r=!0,o="asc",s=!1){const i=s?G:q,c=[{node:e,depth:0}],a=[];for(;c.length>0;){const{node:e,depth:o}=c.pop();if(null===e)continue;const s=i(t,e.point);(r?s<=n:s>n)&&a.push({point:e.point,docIDs:e.docIDs??[]}),null!=e.left&&c.push({node:e.left,depth:o+1}),null!=e.right&&c.push({node:e.right,depth:o+1})}return o&&a.sort(((e,n)=>{const r=i(t,e.point),s=i(t,n.point);return"asc"===o.toLowerCase()?r-s:s-r})),a}function V(e,t,n=!0,r=null,o=!1){const s=[{node:e,depth:0}],i=[];for(;s.length>0;){const e=s.pop();if(null==e||null==e.node)continue;const{node:r,depth:o}=e,c=o+1;null!=r.left&&s.push({node:r.left,depth:c}),null!=r.right&&s.push({node:r.right,depth:c});const a=K(t,r.point);a&&n?i.push({point:r.point,docIDs:r.docIDs??[]}):a||n||i.push({point:r.point,docIDs:r.docIDs??[]})}const c=function(e){let t=0,n=0,r=0;const o=e.length;for(let i=0,c=o-1;i<o;c=i++){const o=e[i].lon,s=e[i].lat,a=e[c].lon,l=e[c].lat,u=o*l-a*s;t+=u,n+=(o+a)*u,r+=(s+l)*u}t/=2;const s=6*t;return n/=s,r/=s,{lon:n,lat:r}}(t);if(r){const e=o?G:q;i.sort(((t,n)=>{const o=e(c,t.point),s=e(c,n.point);return"asc"===r.toLowerCase()?o-s:s-o}))}return i}function K(e,t){let n=!1;const r=t.lon,o=t.lat,s=e.length;for(let i=0,c=s-1;i<s;c=i++){const t=e[i].lon,s=e[i].lat,a=e[c].lon,l=e[c].lat;s>o!=l>o&&r<(a-t)*(o-s)/(l-s)+t&&(n=!n)}return n}function q(e,t){const n=Math.PI/180,r=e.lat*n,o=t.lat*n,s=(t.lat-e.lat)*n,i=(t.lon-e.lon)*n,c=Math.sin(s/2)*Math.sin(s/2)+Math.cos(r)*Math.cos(o)*Math.sin(i/2)*Math.sin(i/2),a=2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c));return F*a}function G(e,t){const n=6378137,r=1/298.257223563,o=(1-r)*n,s=Math.PI/180,i=e.lat*s,c=t.lat*s,a=(t.lon-e.lon)*s,l=Math.atan((1-r)*Math.tan(i)),u=Math.atan((1-r)*Math.tan(c)),f=Math.sin(l),d=Math.cos(l),h=Math.sin(u),p=Math.cos(u);let g,m,y,b,v,w,I=a,T=1e3;do{const e=Math.sin(I),t=Math.cos(I);b=Math.sqrt(p*e*(p*e)+(d*h-f*p*t)*(d*h-f*p*t)),v=f*h+d*p*t,w=Math.atan2(b,v),m=d*p*e/b,y=1-m*m;const n=v-2*f*h/y,o=r/16*y*(4+r*(4-3*y));g=I,I=a+(1-o)*r*m*(w+o*b*(n+o*v*(2*n*n-1)))}while(Math.abs(I-g)>1e-12&&--T>0);const k=y*(n*n-o*o)/(o*o),D=k/1024*(256+k*(k*(74-47*k)-128));return o*(1+k/16384*(4096+k*(k*(320-175*k)-768)))*(w-D*b*(v-2*f*h/y+D/4*(v*(2*b*b-1)-D/6*w*(4*b*b-3)*(4*w*w-3))))}var Y=n(9290),H=n(2343);async function J(e,t,n,r,o){const i=(0,s.Kj)(e.sharedInternalDocumentStore,n);e.avgFieldLength[t]=((e.avgFieldLength[t]??0)*(o-1)+r.length)/o,e.fieldLengths[t][i]=r.length,e.frequencies[t][i]={}}async function Z(e,t,n,r,o){let i=0;for(const s of r)s===o&&i++;const c=(0,s.Kj)(e.sharedInternalDocumentStore,n),a=i/r.length;e.frequencies[t][c][o]=a,o in e.tokenOccurrences[t]||(e.tokenOccurrences[t][o]=0),e.tokenOccurrences[t][o]=(e.tokenOccurrences[t][o]??0)+1}async function Q(e,t,n,r){const o=(0,s.Kj)(e.sharedInternalDocumentStore,n);e.avgFieldLength[t]=(e.avgFieldLength[t]*r-e.fieldLengths[t][o])/(r-1),e.fieldLengths[t][o]=void 0,e.frequencies[t][o]=void 0}async function X(e,t,n){e.tokenOccurrences[t][n]--}async function ee(e,t,n,r,o){const i=Array.from(o),c=t.avgFieldLength[n],a=t.fieldLengths[n],l=t.tokenOccurrences[n],u=t.frequencies[n],f="number"==typeof l[r]?l[r]??0:0,d=[],h=i.length;for(let g=0;g<h;g++){var p;const n=(0,s.Kj)(t.sharedInternalDocumentStore,i[g]),o=(null==u||null===(p=u[n])||void 0===p?void 0:p[r])??0,l=(0,Y.B)(o,f,e.docsCount,a[n],c,e.params.relevance);d.push([n,l])}return d}async function te(e,t,n,o,s=""){o||(o={sharedInternalDocumentStore:t,indexes:{},vectorIndexes:{},searchableProperties:[],searchablePropertiesWithTypes:{},frequencies:{},tokenOccurrences:{},avgFieldLength:{},fieldLengths:{}});for(const[a,l]of Object.entries(n)){const n=`${s}${s?".":""}${a}`;if("object"!=typeof l||Array.isArray(l))if((0,r.isVectorType)(l))o.searchableProperties.push(n),o.searchablePropertiesWithTypes[n]=l,o.vectorIndexes[n]={size:(0,r.getVectorSize)(l),vectors:{}};else{const e=/\[/.test(l);switch(l){case"boolean":case"boolean[]":o.indexes[n]={type:"Bool",node:{true:[],false:[]},isArray:e};break;case"number":case"number[]":o.indexes[n]={type:"AVL",node:(i=0,c=[],{root:{k:i,v:c,l:null,r:null,h:0}}),isArray:e};break;case"string":case"string[]":o.indexes[n]={type:"Radix",node:C(),isArray:e},o.avgFieldLength[n]=0,o.frequencies[n]={},o.tokenOccurrences[n]={},o.fieldLengths[n]={};break;case"enum":case"enum[]":o.indexes[n]={type:"Flat",node:{numberToDocumentId:new Map},isArray:e};break;case"geopoint":o.indexes[n]={type:"BKD",node:{root:null},isArray:e};break;default:throw(0,g.$)("INVALID_SCHEMA_TYPE",Array.isArray(l)?"array":l,n)}o.searchableProperties.push(n),o.searchablePropertiesWithTypes[n]=l}else te(e,t,l,o,n)}var i,c;return o}function ne(e,t,n,r,o,i,c){return async a=>{const l=(0,s.Kj)(t.sharedInternalDocumentStore,r),{type:u,node:f}=t.indexes[n];switch(u){case"Bool":f[a?"true":"false"].push(l);break;case"AVL":h=a,p=[l],(d=f).root=function e(t,n,r){if(null===t)return{k:n,v:r,l:null,r:null,h:0};if(n<t.k)t.l=e(t.l,n,r);else{if(!(n>t.k)){for(const e of r)t.v.push(e);return t}t.r=e(t.r,n,r)}t.h=1+Math.max(S(t.l),S(t.r));const o=S(t.l)-S(t.r);return o>1&&n<t.l.k?w(t):o<-1&&n>t.r.k?v(t):o>1&&n>t.l.k?(t.l=v(t.l),w(t)):o<-1&&n<t.r.k?(t.r=w(t.r),v(t)):t}(d.root,h,p);break;case"Radix":{const r=await i.tokenize(a,o,n);await e.insertDocumentScoreParameters(t,n,l,r,c);for(const o of r)await e.insertTokenScoreParameters(t,n,l,r,o),L(f,o,l);break}case"Flat":!function(e,t,n){e.numberToDocumentId.has(t)?e.numberToDocumentId.get(t).push(n):e.numberToDocumentId.set(t,[n])}(f,a,l);break;case"BKD":!function(e,t,n){const r={point:t,docIDs:n};if(null==e.root)return void(e.root=r);let o=e.root,s=0;for(;null!==o;){if(o.point.lon===t.lon&&o.point.lat===t.lat){const e=o.docIDs??[];return void(o.docIDs=Array.from(new Set([...e,...n||[]])))}if(0==s%U)if(t.lon<o.point.lon){if(null==o.left)return void(o.left=r);o=o.left}else{if(null==o.right)return void(o.right=r);o=o.right}else if(t.lat<o.point.lat){if(null==o.left)return void(o.left=r);o=o.left}else{if(null==o.right)return void(o.right=r);o=o.right}s++}}(f,a,[l])}var d,h,p}}async function re(e,t,n,o,s,i,c,a,l){if((0,r.isVectorType)(i))return function(e,t,n,r){n instanceof Float32Array||(n=new Float32Array(n));const o=e.vectorIndexes[t].size,s=(0,H.V)(n,o);e.vectorIndexes[t].vectors[r]=[s,n]}(t,n,s,o);const u=ne(e,t,n,o,c,a,l);if(!(0,r.isArrayType)(i))return u(s);const f=s,d=f.length;for(let r=0;r<d;r++)await u(f[r])}async function oe(e,t,n,o,i,c,a,l,u){const f=(0,s.Kj)(t.sharedInternalDocumentStore,o);if((0,r.isVectorType)(c))return delete t.vectorIndexes[n].vectors[o],!0;const{type:d,node:h}=t.indexes[n];switch(d){case"AVL":return function(e,t,n){const r=D(e.root,n);r&&(1!==r.v.length?r.v.splice(r.v.indexOf(t),1):function(e,t){if(null===e||null===e.root)return;let n=e.root,r=null;for(;null!=n&&n.k!==t;)r=n,n=t<n.k?n.l:n.r;null!==n&&(()=>{if(null===n.l&&null===n.r)null===r?e.root=null:r.l===n?r.l=null:r.r=null;else if(null!=n.l&&null!=n.r){let e=n.r,t=n;for(;null!=e.l;)t=e,e=e.l;n.k=e.k,t===n?t.r=e.r:t.l=e.r}else{const t=null!=n.l?n.l:n.r;null===r?e.root=t:r.l===n?r.l=t:r.r=t}})()}(e,n))}(h,f,i),!0;case"Bool":{const e=h[i?"true":"false"].indexOf(f);return h[i?"true":"false"].splice(e,1),!0}case"Radix":{const r=await l.tokenize(i,a,n);await e.removeDocumentScoreParameters(t,n,o,u);for(const o of r)await e.removeTokenScoreParameters(t,n,o),W(h,o,f);return!0}case"Flat":return function(e,t,n){var r,o;null==e||e.numberToDocumentId.set(n,(null===(r=null==e?void 0:e.numberToDocumentId.get(n))||void 0===r?void 0:r.filter((e=>e!==t)))??[]),0===(null===(o=null==e?void 0:e.numberToDocumentId.get(n))||void 0===o?void 0:o.length)&&(null==e||e.numberToDocumentId.delete(n))}(h,f,i),!0;case"BKD":return function(e,t,n){let r=e.root,o=0,s=null,i=null;for(;null!==r;){if((null==r?void 0:r.point.lon)===t.lon&&r.point.lat===t.lat){var c;const t=null===(c=r.docIDs)||void 0===c?void 0:c.indexOf(n);var a;if(void 0!==t&&t>-1)return null===(a=r.docIDs)||void 0===a||a.splice(t,1),void(null!=r.docIDs&&0!==r.docIDs.length||(null!=s?"left"===i?s.left=null!==r.left?r.left:r.right:"right"===i&&(s.right=null!==r.right?r.right:r.left):e.root=null!==r.left?r.left:r.right))}s=r,0==o%U?t.lon<r.point.lon?(r=null==r?void 0:r.left,i="left"):(r=null==r?void 0:r.right,i="right"):t.lat<r.point.lat?(r=null==r?void 0:r.left,i="left"):(r=null==r?void 0:r.right,i="right"),o++}}(h,i,f),!1}}async function se(e,t,n,o,s,i,c,a,l){if(!(0,r.isArrayType)(i))return oe(e,t,n,o,s,i,c,a,l);const u=(0,r.getInnerType)(i),f=s,d=f.length;for(let r=0;r<d;r++)await oe(e,t,n,o,f[r],u,c,a,l);return!0}async function ie(e,t,n,r){if(!(n in t.tokenOccurrences))return[];const{node:s,type:i}=t.indexes[n];if("Radix"!==i)throw(0,g.$)("WRONG_SEARCH_PROPERTY_TYPE",n);const{exact:c,tolerance:a}=e.params,l=z(s,{term:r,exact:c,tolerance:a}),u=new Set;for(const f in l){if((0,o.g5)(l,f))for(const e of l[f])u.add(e)}return e.index.calculateResultScores(e,t,n,r,Array.from(u))}async function ce(e,t,n){const r=Object.keys(n),s=r.reduce(((e,t)=>({[t]:[],...e})),{});for(const i of r){const r=n[i];if(void 0===t.indexes[i])throw(0,g.$)("UNKNOWN_FILTER_PROPERTY",i);const{node:c,type:a,isArray:l}=t.indexes[i];if("Bool"===a){const e=c[r.toString()];(0,o.h)(s[i],e);continue}if("BKD"===a){let e;if("radius"in r)e="radius";else{if(!("polygon"in r))throw new Error(`Invalid operation ${r}`);e="polygon"}if("radius"===e){const{value:t,coordinates:n,unit:a="m",inside:l=!0,highPrecision:u=!1}=r[e],f=(0,o.O6)(t,a),d=B(c.root,n,f,l,void 0,u);(0,o.h)(s[i],d.flatMap((({docIDs:e})=>e)))}else{const{coordinates:t,inside:n=!0,highPrecision:a=!1}=r[e],l=V(c.root,t,n,void 0,a);(0,o.h)(s[i],l.flatMap((({docIDs:e})=>e)))}continue}if("Radix"===a&&("string"==typeof r||Array.isArray(r))){for(const t of[r].flat()){const n=await e.tokenizer.tokenize(t,e.language,i);for(const e of n){const t=z(c,{term:e,exact:!0});(0,o.h)(s[i],Object.values(t).flat())}}continue}const u=Object.keys(r);if(u.length>1)throw(0,g.$)("INVALID_FILTER_OPERATION",u.length);if("Flat"!==a){if("AVL"===a){const e=u[0],t=r[e];let n=[];switch(e){case"gt":n=T(c,t,!1);break;case"gte":n=T(c,t,!0);break;case"lt":n=k(c,t,!1);break;case"lte":n=k(c,t,!0);break;case"eq":n=A(c,t)??[];break;case"between":{const[e,r]=t;n=I(c,e,r);break}}(0,o.h)(s[i],n)}}else{const e=l?O:P;(0,o.h)(s[i],e(c,r))}}return(0,o.y$)(Object.values(s))}async function ae(e){return e.searchableProperties}async function le(e){return e.searchablePropertiesWithTypes}function ue(e){const t=C(e.e,e.s,e.k);t.d=e.d,t.w=e.w;for(const n of Object.keys(e.c))t.c[n]=ue(e.c[n]);return t}function fe(e){return{numberToDocumentId:new Map(e)}}function de(e){return Array.from(e.numberToDocumentId.entries())}async function he(e,t){const{indexes:n,vectorIndexes:r,searchableProperties:o,searchablePropertiesWithTypes:s,frequencies:i,tokenOccurrences:c,avgFieldLength:a,fieldLengths:l}=t,u={},f={};for(const d of Object.keys(n)){const{node:e,type:t,isArray:r}=n[d];switch(t){case"Radix":u[d]={type:"Radix",node:ue(e),isArray:r};break;case"Flat":u[d]={type:"Flat",node:fe(e),isArray:r};break;default:u[d]=n[d]}}for(const d of Object.keys(r)){const e=r[d].vectors;for(const t in e)e[t]=[e[t][0],new Float32Array(e[t][1])];f[d]={size:r[d].size,vectors:e}}return{sharedInternalDocumentStore:e,indexes:u,vectorIndexes:f,searchableProperties:o,searchablePropertiesWithTypes:s,frequencies:i,tokenOccurrences:c,avgFieldLength:a,fieldLengths:l}}async function pe(e){const{indexes:t,vectorIndexes:n,searchableProperties:r,searchablePropertiesWithTypes:o,frequencies:s,tokenOccurrences:i,avgFieldLength:c,fieldLengths:a}=e,l={};for(const f of Object.keys(n)){const e=n[f].vectors;for(const t in e)e[t]=[e[t][0],Array.from(e[t][1])];l[f]={size:n[f].size,vectors:e}}const u={};for(const f of Object.keys(t)){const{type:e,node:n,isArray:r}=t[f];"Flat"===e?u[f]={type:"Flat",node:de(n),isArray:r}:u[f]=t[f]}return{indexes:u,vectorIndexes:l,searchableProperties:r,searchablePropertiesWithTypes:o,frequencies:s,tokenOccurrences:i,avgFieldLength:c,fieldLengths:a}}var ge=n(1239);function me(e,t,n,s,i){const c={language:e.tokenizer.language,sharedInternalDocumentStore:t,enabled:!0,isSorted:!0,sortableProperties:[],sortablePropertiesWithTypes:{},sorts:{}};for(const[a,l]of Object.entries(n)){const n=`${i}${i?".":""}${a}`;if(!s.includes(n))if("object"!=typeof l||Array.isArray(l)){if(!(0,r.isVectorType)(l))switch(l){case"boolean":case"number":case"string":c.sortableProperties.push(n),c.sortablePropertiesWithTypes[n]=l,c.sorts[n]={docs:new Map,orderedDocsToRemove:new Map,orderedDocs:[],type:l};break;case"geopoint":case"enum":case"enum[]":case"boolean[]":case"number[]":case"string[]":continue;default:throw(0,g.$)("INVALID_SORT_SCHEMA_TYPE",Array.isArray(l)?"array":l,n)}}else{const r=me(e,t,l,s,n);(0,o.h)(c.sortableProperties,r.sortableProperties),c.sorts={...c.sorts,...r.sorts},c.sortablePropertiesWithTypes={...c.sortablePropertiesWithTypes,...r.sortablePropertiesWithTypes}}}return c}async function ye(e,t,n,r){return!1!==(null==r?void 0:r.enabled)?me(e,t,n,(r||{}).unsortableProperties||[],""):{disabled:!0}}async function be(e,t,n,r){if(!e.enabled)return;e.isSorted=!1;const o=(0,s.Kj)(e.sharedInternalDocumentStore,n),i=e.sorts[t];i.orderedDocsToRemove.has(o)&&De(e,t),i.docs.set(o,i.orderedDocs.length),i.orderedDocs.push([o,r])}function ve(e){if(e.isSorted||!e.enabled)return;const t=Object.keys(e.sorts);for(const n of t)ke(e,n);e.isSorted=!0}function we(e,t,n){return t[1].localeCompare(n[1],(0,ge.JK)(e))}function Ie(e,t){return e[1]-t[1]}function Te(e,t){return t[1]?-1:1}function ke(e,t){const n=e.sorts[t];let r;switch(n.type){case"string":r=we.bind(null,e.language);break;case"number":r=Ie.bind(null);break;case"boolean":r=Te.bind(null)}n.orderedDocs.sort(r);const o=n.orderedDocs.length;for(let s=0;s<o;s++){const e=n.orderedDocs[s][0];n.docs.set(e,s)}}function De(e,t){const n=e.sorts[t];n.orderedDocsToRemove.size&&(n.orderedDocs=n.orderedDocs.filter((e=>!n.orderedDocsToRemove.has(e[0]))),n.orderedDocsToRemove.clear())}async function Se(e,t,n){if(!e.enabled)return;const r=e.sorts[t],o=(0,s.Kj)(e.sharedInternalDocumentStore,n);r.docs.get(o)&&(r.docs.delete(o),r.orderedDocsToRemove.set(o,!0))}async function Ae(e,t,n){if(!e.enabled)throw(0,g.$)("SORT_DISABLED");const r=n.property,o="DESC"===n.order,i=e.sorts[r];if(!i)throw(0,g.$)("UNABLE_TO_SORT_ON_UNKNOWN_FIELD",r,e.sortableProperties.join(", "));return De(e,r),ve(e),t.sort(((t,n)=>{const r=i.docs.get((0,s.Kj)(e.sharedInternalDocumentStore,t[0])),c=i.docs.get((0,s.Kj)(e.sharedInternalDocumentStore,n[0])),a=void 0!==r,l=void 0!==c;return a||l?a?l?o?c-r:r-c:-1:1:0})),t}async function Pe(e){return e.enabled?e.sortableProperties:[]}async function Oe(e){return e.enabled?e.sortablePropertiesWithTypes:{}}async function xe(e,t){const n=t;if(!n.enabled)return{enabled:!1};const r=Object.keys(n.sorts).reduce(((e,t)=>{const{docs:r,orderedDocs:o,type:s}=n.sorts[t];return e[t]={docs:new Map(Object.entries(r).map((([e,t])=>[+e,t]))),orderedDocsToRemove:new Map,orderedDocs:o,type:s},e}),{});return{sharedInternalDocumentStore:e,language:n.language,sortableProperties:n.sortableProperties,sortablePropertiesWithTypes:n.sortablePropertiesWithTypes,sorts:r,enabled:!0,isSorted:n.isSorted}}async function Me(e){if(!e.enabled)return{enabled:!1};!function(e){const t=Object.keys(e.sorts);for(const n of t)De(e,n)}(e),ve(e);const t=Object.keys(e.sorts).reduce(((t,n)=>{const{docs:r,orderedDocs:o,type:s}=e.sorts[n];return t[n]={docs:Object.fromEntries(r.entries()),orderedDocs:o,type:s},t}),{});return{language:e.language,sortableProperties:e.sortableProperties,sortablePropertiesWithTypes:e.sortablePropertiesWithTypes,sorts:t,enabled:e.enabled,isSorted:e.isSorted}}var Re=n(2051);async function Ee({schema:e,sort:t,language:n,components:v,id:w,plugins:I}){v||(v={}),w||(w=await(0,o.NF)());let T=v.tokenizer,k=v.index,D=v.documentsStore,S=v.sorter;if(T)if(T.tokenize){T=T}else T=await(0,Re.e)(T);else T=await(0,Re.e)({language:n??"english"});if(v.tokenizer&&n)throw(0,g.$)("NO_LANGUAGE_WITH_CUSTOM_TOKENIZER");const A=(0,s.JA)();k||=await async function(){return{create:te,insert:re,remove:se,insertDocumentScoreParameters:J,insertTokenScoreParameters:Z,removeDocumentScoreParameters:Q,removeTokenScoreParameters:X,calculateResultScores:ee,search:ie,searchByWhereClause:ce,getSearchableProperties:ae,getSearchablePropertiesWithTypes:le,load:he,save:pe}}(),S||=await async function(){return{create:ye,insert:be,remove:Se,save:Me,load:xe,sortBy:Ae,getSortableProperties:Pe,getSortablePropertiesWithTypes:Oe}}(),D||=await async function(){return{create:i,get:c,getMultiple:a,getAll:l,store:u,remove:f,count:d,load:h,save:p}}(),function(e){const t={formatElapsedTime:r.formatElapsedTime,getDocumentIndexId:r.getDocumentIndexId,getDocumentProperties:o.JN,validateSchema:r.validateSchema};for(const n of b.mj){const r=n;if(e[r]){if("function"!=typeof e[r])throw(0,g.$)("COMPONENT_MUST_BE_FUNCTION",r)}else e[r]=t[r]}for(const n of Object.keys(e))if(!b.To.includes(n)&&!b.mj.includes(n))throw(0,g.$)("UNSUPPORTED_COMPONENT",n)}(v);const{getDocumentProperties:P,getDocumentIndexId:O,validateSchema:x,formatElapsedTime:M}=v,R={data:{},caches:{},schema:e,tokenizer:T,index:k,sorter:S,documentsStore:D,internalDocumentIDStore:A,getDocumentProperties:P,getDocumentIndexId:O,validateSchema:x,beforeInsert:[],afterInsert:[],beforeRemove:[],afterRemove:[],beforeUpdate:[],afterUpdate:[],beforeSearch:[],afterSearch:[],beforeInsertMultiple:[],afterInsertMultiple:[],beforeRemoveMultiple:[],afterRemoveMultiple:[],afterUpdateMultiple:[],beforeUpdateMultiple:[],afterCreate:[],formatElapsedTime:M,id:w,plugins:I,version:"2.0.19"};R.data={index:await R.index.create(R,A,e),docs:await R.documentsStore.create(R,A),sorting:await R.sorter.create(R,A,e,t)};for(const r of m)R[r]=(R[r]??[]).concat(await y(R,r));const E=R.afterCreate;return E&&await(0,b.WQ)(E,R),R}}}]);
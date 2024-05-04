"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2167],{3776:(e,t,n)=>{n.d(t,{v:()=>s,_:()=>c});const o=Symbol("orama.insertions"),i=Symbol("orama.removals");var a;const r=(null===(a=globalThis.process)||void 0===a?void 0:a.emitWarning)??function(e,t){console.warn(`[WARNING] [${t.code}] ${e}`)};function s(e){"number"!=typeof e[o]&&(queueMicrotask((()=>{e[o]=void 0})),e[o]=0),e[o]>1e3?(r("Orama's insert operation is synchronous. Please avoid inserting a large number of document in a single operation in order not to block the main thread or, in alternative, please use insertMultiple.",{code:"ORAMA0001"}),e[o]=-1):e[o]>=0&&e[o]++}function c(e){"number"!=typeof e[i]&&(queueMicrotask((()=>{e[i]=void 0})),e[i]=0),e[i]>1e3?(r("Orama's remove operation is synchronous. Please avoid removing a large number of document in a single operation in order not to block the main thread, in alternative, please use updateMultiple.",{code:"ORAMA0002"}),e[i]=-1):e[i]>=0&&e[i]++}},2167:(e,t,n)=>{n.r(t),n.d(t,{innerInsertMultiple:()=>d,insert:()=>s,insertMultiple:()=>l});var o=n(4442),i=n(6456),a=n(3776),r=n(1801);async function s(e,t,n,s){const l=await e.validateSchema(t,e.schema);if(l)throw(0,r.T)("SCHEMA_VALIDATION_FAILURE",l);return async function(e,t,n,s){const{index:l,docs:d}=e.data,f=await e.getDocumentIndexId(t);if("string"!=typeof f)throw(0,r.T)("DOCUMENT_ID_MUST_BE_STRING",typeof f);if(!await e.documentsStore.store(d,f,t))throw(0,r.T)("DOCUMENT_ALREADY_EXISTS",f);const p=await e.documentsStore.count(d);s||await(0,i.rf)(e.beforeInsert,e,f,t);const m=await e.index.getSearchableProperties(l),w=await e.index.getSearchablePropertiesWithTypes(l),h=await e.getDocumentProperties(t,m);for(const[i,a]of Object.entries(h)){if(void 0===a)continue;const e=typeof a,t=w[i];if((!(0,o.isGeoPointType)(t)||"object"!=typeof a||"number"!=typeof a.lon||"number"!=typeof a.lat)&&!((0,o.isVectorType)(t)&&Array.isArray(a)||(0,o.isArrayType)(t)&&Array.isArray(a)||c.has(t)&&u.has(e)||e===t))throw(0,r.T)("INVALID_DOCUMENT_PROPERTY",i,t,e)}for(const o of m){var y,b,v,I;const t=h[o];if(void 0===t)continue;const i=w[o];await(null===(b=(y=e.index).beforeInsert)||void 0===b?void 0:b.call(y,e.data.index,o,f,t,i,n,e.tokenizer,p)),await e.index.insert(e.index,e.data.index,o,f,t,i,n,e.tokenizer,p),await(null===(I=(v=e.index).afterInsert)||void 0===I?void 0:I.call(v,e.data.index,o,f,t,i,n,e.tokenizer,p))}const g=await e.sorter.getSortableProperties(e.data.sorting),T=await e.sorter.getSortablePropertiesWithTypes(e.data.sorting),A=await e.getDocumentProperties(t,g);for(const o of g){const t=A[o];if(void 0===t)continue;const i=T[o];await e.sorter.insert(e.data.sorting,o,f,t,i,n)}s||await(0,i.rf)(e.afterInsert,e,f,t);return(0,a.v)(e),f}(e,t,n,s)}const c=new Set(["enum","enum[]"]),u=new Set(["string","number"]);async function l(e,t,n,o,a,s){a||await(0,i.ZI)(e.beforeInsertMultiple,e,t);const c=t.length,u=e.schema;for(let i=0;i<c;i++){const n=await e.validateSchema(t[i],u);if(n)throw(0,r.T)("SCHEMA_VALIDATION_FAILURE",n)}return d(e,t,n,o,a,s)}async function d(e,t,n,o,a,r){n||(n=1e3),r??=0;const c=[];return await new Promise(((i,u)=>{let l=0;setTimeout((async function d(){const f=t.slice(l*n,++l*n);if(!f.length)return i();for(const t of f)try{const n=await s(e,t,o,a);c.push(n)}catch(p){u(p)}setTimeout(d,r)}),r)})),a||await(0,i.ZI)(e.afterInsertMultiple,e,t),c}}}]);
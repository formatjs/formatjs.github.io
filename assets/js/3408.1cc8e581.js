"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3408],{3408:(n,t,e)=>{e.r(t),e.d(t,{count:()=>l,create:()=>c,createDocumentsStore:()=>h,get:()=>r,getAll:()=>u,getMultiple:()=>s,load:()=>i,remove:()=>d,save:()=>f,store:()=>a});var o=e(4033);async function c(n,t){return{sharedInternalDocumentStore:t,docs:{},count:0}}async function r(n,t){const e=(0,o.HM)(n.sharedInternalDocumentStore,t);return n.docs[e]}async function s(n,t){const e=t.length,c=Array.from({length:e});for(let r=0;r<e;r++){const e=(0,o.HM)(n.sharedInternalDocumentStore,t[r]);c[r]=n.docs[e]}return c}async function u(n){return n.docs}async function a(n,t,e){const c=(0,o.HM)(n.sharedInternalDocumentStore,t);return void 0===n.docs[c]&&(n.docs[c]=e,n.count++,!0)}async function d(n,t){const e=(0,o.HM)(n.sharedInternalDocumentStore,t);return void 0!==n.docs[e]&&(delete n.docs[e],n.count--,!0)}async function l(n){return n.count}async function i(n,t){const e=t;return{docs:e.docs,count:e.count,sharedInternalDocumentStore:n}}async function f(n){return{docs:n.docs,count:n.count}}async function h(){return{create:c,get:r,getMultiple:s,getAll:u,store:a,remove:d,count:l,load:i,save:f}}}}]);
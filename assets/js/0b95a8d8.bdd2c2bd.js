"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5880],{4041:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"polyfills/intl-getcanonicallocales","title":"Intl.getCanonicalLocales","description":"A spec-compliant polyfill/ponyfill for Intl.getCanonicalLocales tested by the official ECMAScript Conformance test suite","source":"@site/docs/polyfills/intl-getcanonicallocales.md","sourceDirName":"polyfills","slug":"/polyfills/intl-getcanonicallocales","permalink":"/docs/polyfills/intl-getcanonicallocales","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-getcanonicallocales.md","tags":[],"version":"current","lastUpdatedBy":"Long Ho","lastUpdatedAt":1738592882000,"frontMatter":{"id":"intl-getcanonicallocales","title":"Intl.getCanonicalLocales"},"sidebar":"polyfills","previous":{"title":"Intl.DurationFormat","permalink":"/docs/polyfills/intl-durationformat"},"next":{"title":"Intl.ListFormat","permalink":"/docs/polyfills/intl-listformat"}}');var a=t(6106),s=t(972),i=t(288),r=t(4083);const o={id:"intl-getcanonicallocales",title:"Intl.getCanonicalLocales"},c=void 0,u={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Via polyfill-fastly.io",id:"via-polyfill-fastlyio",level:3},{value:"Simple",id:"simple",level:3},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",level:3},{value:"Tests",id:"tests",level:2}];function p(e){const l={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.p,{children:["A spec-compliant polyfill/ponyfill for ",(0,a.jsx)(l.code,{children:"Intl.getCanonicalLocales"})," tested by the ",(0,a.jsx)(l.a,{href:"https://github.com/tc39/test262",children:"official ECMAScript Conformance test suite"})]}),"\n",(0,a.jsxs)(l.p,{children:[(0,a.jsx)(l.a,{href:"https://www.npmjs.org/package/@formatjs/intl-getcanonicallocales",children:(0,a.jsx)(l.img,{src:"https://img.shields.io/npm/v/@formatjs/intl-getcanonicallocales.svg?style=flat-square",alt:"npm Version"})}),"\n",(0,a.jsx)(l.img,{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-getcanonicallocales",alt:"size"})]}),"\n",(0,a.jsx)(l.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,a.jsxs)(i.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,a.jsx)(r.A,{value:"npm",children:(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-sh",children:"npm i @formatjs/intl-getcanonicallocales\n"})})}),(0,a.jsx)(r.A,{value:"yarn",children:(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-sh",children:"yarn add @formatjs/intl-getcanonicallocales\n"})})})]}),"\n",(0,a.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(l.h3,{id:"via-polyfill-fastlyio",children:"Via polyfill-fastly.io"}),"\n",(0,a.jsxs)(l.p,{children:["You can use ",(0,a.jsx)(l.a,{href:"https://polyfill-fastly.io/",children:"polyfill-fastly.io URL Builder"})," to create a polyfill script tag for ",(0,a.jsx)(l.code,{children:"Intl.GetCanonicalLocales"}),". For example:"]}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-html",children:'\x3c!-- Polyfill Intl.GetCanonicalLocales & its dependencies --\x3e\n<script src="https://polyfill-fastly.io/v3/polyfill.min.js?features=Intl.GetCanonicalLocales"><\/script>\n'})}),"\n",(0,a.jsx)(l.h3,{id:"simple",children:"Simple"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-tsx",children:"import '@formatjs/intl-getcanonicallocales/polyfill'\n"})}),"\n",(0,a.jsx)(l.h3,{id:"dynamic-import--capability-detection",children:"Dynamic import + capability detection"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-tsx",children:"import {shouldPolyfill} from '@formatjs/intl-getcanonicallocales/should-polyfill'\nasync function polyfill() {\n  // This platform already supports Intl.getCanonicalLocales\n  if (shouldPolyfill()) {\n    await import('@formatjs/intl-getcanonicallocales/polyfill')\n  }\n  // Alternatively, force the polyfill regardless of support\n  await import('@formatjs/intl-getcanonicallocales/polyfill-force')\n}\n"})}),"\n",(0,a.jsx)(l.h2,{id:"tests",children:"Tests"}),"\n",(0,a.jsxs)(l.p,{children:["This library is ",(0,a.jsx)(l.a,{href:"https://github.com/tc39/test262/tree/master/test/intl402/Intl/getCanonicalLocales",children:"test262"}),"-compliant."]})]})}function f(e={}){const{wrapper:l}={...(0,s.R)(),...e.components};return l?(0,a.jsx)(l,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},4083:(e,l,t)=>{t.d(l,{A:()=>i});t(7378);var n=t(3372);const a={tabItem:"tabItem_GNoz"};var s=t(6106);function i(e){let{children:l,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:t,children:l})}},288:(e,l,t)=>{t.d(l,{A:()=>I});var n=t(7378),a=t(3372),s=t(229),i=t(1654),r=t(8890),o=t(7710),c=t(6940),u=t(9834);function d(e){var l,t;return null!=(l=null==(t=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:l}=e;return!!l&&"object"==typeof l&&"value"in l}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?l:[]}function p(e){const{values:l,children:t}=e;return(0,n.useMemo)((()=>{const e=null!=l?l:function(e){return d(e).map((e=>{let{props:{value:l,label:t,attributes:n,default:a}}=e;return{value:l,label:t,attributes:n,default:a}}))}(t);return function(e){const l=(0,c.XI)(e,((e,l)=>e.value===l.value));if(l.length>0)throw new Error('Docusaurus error: Duplicate values "'+l.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[l,t])}function f(e){let{value:l,tabValues:t}=e;return t.some((e=>e.value===l))}function m(e){let{queryString:l=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:l=!1,groupId:t}=e;if("string"==typeof l)return l;if(!1===l)return null;if(!0===l&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:l,groupId:t});return[(0,o.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const l=new URLSearchParams(a.location.search);l.set(s,e),a.replace(Object.assign({},a.location,{search:l.toString()}))}),[s,a])]}function h(e){const{defaultValue:l,queryString:t=!1,groupId:a}=e,s=p(e),[i,o]=(0,n.useState)((()=>function(e){var l;let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const a=null!=(l=n.find((e=>e.default)))?l:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:s}))),[c,d]=m({queryString:t,groupId:a}),[h,g]=function(e){let{groupId:l}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(l),[a,s]=(0,u.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=null!=c?c:h;return f({value:e,tabValues:s})?e:null})();(0,r.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);o(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=t(1682);const b={tabList:"tabList_DGQs",tabItem:"tabItem_k9HR"};var y=t(6106);function v(e){let{className:l,block:t,selectedValue:n,selectValue:i,tabValues:r}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const l=e.currentTarget,t=o.indexOf(l),a=r[t].value;a!==n&&(c(l),i(a))},d=e=>{var l;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var n;const l=o.indexOf(e.currentTarget)+1;t=null!=(n=o[l])?n:o[0];break}case"ArrowLeft":{var a;const l=o.indexOf(e.currentTarget)-1;t=null!=(a=o[l])?a:o[o.length-1];break}}null==(l=t)||l.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},l),children:r.map((e=>{let{value:l,label:t,attributes:s}=e;return(0,y.jsx)("li",Object.assign({role:"tab",tabIndex:n===l?0:-1,"aria-selected":n===l,ref:e=>{o.push(e)},onKeyDown:d,onClick:u},s,{className:(0,a.A)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":n===l}),children:null!=t?t:l}),l)}))})}function j(e){let{lazy:l,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(l){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,l)=>(0,n.cloneElement)(e,{key:l,hidden:e.props.value!==s})))})}function x(e){const l=h(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,y.jsx)(v,Object.assign({},l,e)),(0,y.jsx)(j,Object.assign({},l,e))]})}function I(e){const l=(0,g.A)();return(0,y.jsx)(x,Object.assign({},e,{children:d(e.children)}),String(l))}},972:(e,l,t)=>{t.d(l,{R:()=>i,x:()=>r});var n=t(7378);const a={},s=n.createContext(a);function i(e){const l=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function r(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:l},e.children)}}}]);
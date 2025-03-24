"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[176],{9638:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"polyfills/intl-segmenter","title":"Intl.Segmenter","description":"A polyfill for Intl.Segmenter.","source":"@site/docs/polyfills/intl-segmenter.md","sourceDirName":"polyfills","slug":"/polyfills/intl-segmenter","permalink":"/docs/polyfills/intl-segmenter","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-segmenter.md","tags":[],"version":"current","lastUpdatedBy":"Long Ho","lastUpdatedAt":1742782209000,"frontMatter":{"id":"intl-segmenter","title":"Intl.Segmenter"},"sidebar":"polyfills","previous":{"title":"Intl.RelativeTimeFormat","permalink":"/docs/polyfills/intl-relativetimeformat"},"next":{"title":"Intl.supportedValuesOf","permalink":"/docs/polyfills/intl-supportedvaluesof"}}');var r=l(6106),a=l(7389),s=l(5516),i=l(8846);const o={id:"intl-segmenter",title:"Intl.Segmenter"},u=void 0,c={},d=[{value:"Installation",id:"installation",level:2},{value:"Features",id:"features",level:2},{value:"Usage",id:"usage",level:2},{value:"Via polyfill-fastly.io",id:"via-polyfill-fastlyio",level:3},{value:"Simple",id:"simple",level:3},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",level:3}];function p(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["A polyfill for ",(0,r.jsx)(t.a,{href:"https://tc39.es/proposal-intl-segmenter",children:(0,r.jsx)(t.code,{children:"Intl.Segmenter"})}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://www.npmjs.org/package/@formatjs/intl-segmenter",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/npm/v/@formatjs/intl-segmenter.svg?style=flat-square",alt:"npm Version"})}),"\n",(0,r.jsx)(t.img,{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-segmenter",alt:"size"})]}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,r.jsxs)(s.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,r.jsx)(i.A,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"npm i @formatjs/intl-segmenter\n"})})}),(0,r.jsx)(i.A,{value:"yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"yarn add @formatjs/intl-segmenter\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(t.p,{children:["Everything in ",(0,r.jsx)(t.a,{href:"https://tc39.es/proposal-intl-segmenter",children:"intl-segmenter proposal"})]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.h3,{id:"via-polyfill-fastlyio",children:"Via polyfill-fastly.io"}),"\n",(0,r.jsxs)(t.p,{children:["You can use ",(0,r.jsx)(t.a,{href:"https://polyfill-fastly.io/",children:"polyfill-fastly.io URL Builder"})," to create a polyfill script tag for ",(0,r.jsx)(t.code,{children:"Intl.Segmenter"}),".\nFor example:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'\x3c!-- Polyfill Intl.Segmenter--\x3e\n<script src="https://polyfill-fastly.io/v3/polyfill.min.js?features=Intl.Segmenter"><\/script>\n'})}),"\n",(0,r.jsx)(t.h3,{id:"simple",children:"Simple"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import '@formatjs/intl-segmenter/polyfill'\n"})}),"\n",(0,r.jsx)(t.h3,{id:"dynamic-import--capability-detection",children:"Dynamic import + capability detection"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import {shouldPolyfill} from '@formatjs/intl-segmenter/should-polyfill'\nasync function polyfill(locale: string) {\n  if (shouldPolyfill()) {\n    await import('@formatjs/intl-segmenter/polyfill-force')\n  }\n}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8846:(e,t,l)=>{l.d(t,{A:()=>s});l(7378);var n=l(3372);const r={tabItem:"tabItem_HWzn"};var a=l(6106);function s(e){let{children:t,hidden:l,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,s),hidden:l,children:t})}},5516:(e,t,l)=>{l.d(t,{A:()=>I});var n=l(7378),r=l(3372),a=l(485),s=l(1654),i=l(645),o=l(414),u=l(9615),c=l(4928);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:l}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:l,attributes:n,default:r}}=e;return{value:t,label:l,attributes:n,default:r}}))}(l);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,l])}function m(e){let{value:t,tabValues:l}=e;return l.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:l}=e;const r=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:l}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:t,groupId:l});return[(0,o.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function h(e){const{defaultValue:t,queryString:l=!1,groupId:r}=e,a=p(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=l.find((e=>e.default))??l[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[u,d]=f({queryString:l,groupId:r}),[h,g]=function(e){let{groupId:t}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Dv)(l);return[r,(0,n.useCallback)((e=>{l&&a.set(e)}),[l,a])]}({groupId:r}),b=(()=>{const e=u??h;return m({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=l(1751);const b={tabList:"tabList_YESZ",tabItem:"tabItem_xkch"};var y=l(6106);function v(e){let{className:t,block:l,selectedValue:n,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const t=e.currentTarget,l=o.indexOf(t),r=i[l].value;r!==n&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const l=o.indexOf(e.currentTarget)+1;t=o[l]??o[0];break}case"ArrowLeft":{const l=o.indexOf(e.currentTarget)-1;t=o[l]??o[o.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":l},t),children:i.map((e=>{let{value:t,label:l,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{o.push(e)},onKeyDown:d,onClick:c,...a,className:(0,r.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":n===t}),children:l??t},t)}))})}function x(e){let{lazy:t,children:l,selectedValue:a}=e;const s=(Array.isArray(l)?l:[l]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=h(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,y.jsx)(v,{...t,...e}),(0,y.jsx)(x,{...t,...e})]})}function I(e){const t=(0,g.A)();return(0,y.jsx)(j,{...e,children:d(e.children)},String(t))}},7389:(e,t,l)=>{l.d(t,{R:()=>s,x:()=>i});var n=l(7378);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
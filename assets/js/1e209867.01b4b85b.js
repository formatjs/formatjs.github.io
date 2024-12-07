"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8557],{8876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"guides/develop","title":"Develop with formatjs","description":"Aside from a strong focus on facilitating i18n production pipeline, formatjs also aims to improve i18n DevEx with our eslint-plugin-formatjs.","source":"@site/docs/guides/develop.md","sourceDirName":"guides","slug":"/guides/develop","permalink":"/docs/guides/develop","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/guides/develop.md","tags":[],"version":"current","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1733589457000,"frontMatter":{"id":"develop","title":"Develop with formatjs"},"sidebar":"docs","previous":{"title":"Message Distribution","permalink":"/docs/getting-started/message-distribution"},"next":{"title":"Bundling with formatjs","permalink":"/docs/guides/bundler-plugins"}}');var s=n(7557),a=n(2887),o=n(9883),i=n(4706);const l={id:"develop",title:"Develop with formatjs"},c=void 0,u={},d=[{value:"Linter Installation",id:"linter-installation",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"<code>FORMAT_ERROR</code>",id:"format_error",level:3},{value:"<code>UNSUPPORTED_FORMATTER</code>",id:"unsupported_formatter",level:3},{value:"<code>INVALID_CONFIG</code>",id:"invalid_config",level:3},{value:"<code>MISSING_DATA</code>",id:"missing_data",level:3},{value:"<code>MISSING_TRANSLATION</code>",id:"missing_translation",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Aside from a strong focus on facilitating i18n production pipeline, ",(0,s.jsx)(t.code,{children:"formatjs"})," also aims to improve i18n DevEx with our ",(0,s.jsx)(t.a,{href:"/docs/tooling/linter",children:"eslint-plugin-formatjs"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"linter-installation",children:"Linter Installation"}),"\n","\n",(0,s.jsxs)(o.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,s.jsx)(i.A,{value:"npm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"npm i -D eslint-plugin-formatjs eslint\n"})})}),(0,s.jsx)(i.A,{value:"yarn",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"yarn add -D eslint-plugin-formatjs eslint\n"})})})]}),"\n",(0,s.jsx)(t.p,{children:"Then in your eslint config:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "plugins": ["formatjs"],\n  "rules": {\n    "formatjs/no-offset": "error"\n  }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Head over to ",(0,s.jsx)(t.a,{href:"/docs/tooling/linter",children:"eslint-plugin-formatjs"})," for more details on our rules."]}),"\n",(0,s.jsx)(t.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"react-intl"})," is designed to fail fast when there's a configuration issue but fall back to ",(0,s.jsx)(t.code,{children:"defaultLocale"})," when there's a translation issues. Below are the list of errors that we emit out that can be caught during testing:"]}),"\n",(0,s.jsx)(t.h3,{id:"format_error",children:(0,s.jsx)(t.code,{children:"FORMAT_ERROR"})}),"\n",(0,s.jsxs)(t.p,{children:["Issue when we try to format a sentence but some of the placeholder values are malformed, e.g passing in a ",(0,s.jsx)(t.code,{children:"string"})," for a ",(0,s.jsx)(t.code,{children:"Date"})," or such."]}),"\n",(0,s.jsx)(t.h3,{id:"unsupported_formatter",children:(0,s.jsx)(t.code,{children:"UNSUPPORTED_FORMATTER"})}),"\n",(0,s.jsx)(t.p,{children:"We trigger this error when a custom format is being declared but there's no corresponding formatter with it. For example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"intl.formatMessage({\n  defaultMessage: 'the price is {p, number, customCurrency}',\n})\n"})}),"\n",(0,s.jsxs)(t.p,{children:["and there's no formatter for ",(0,s.jsx)(t.code,{children:"customCurrency"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"invalid_config",children:(0,s.jsx)(t.code,{children:"INVALID_CONFIG"})}),"\n",(0,s.jsxs)(t.p,{children:["When some config values are misconfigured such as missing ",(0,s.jsx)(t.code,{children:"locale"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"missing_data",children:(0,s.jsx)(t.code,{children:"MISSING_DATA"})}),"\n",(0,s.jsxs)(t.p,{children:["When some native Intl APIs don't support certain locales, or missing ",(0,s.jsx)(t.code,{children:"locale-data"})," when polyfills are setup. This typically happens when you're running on an older browsers/Node, or try to use newer APIs in browsers that have not supported them."]}),"\n",(0,s.jsx)(t.h3,{id:"missing_translation",children:(0,s.jsx)(t.code,{children:"MISSING_TRANSLATION"})}),"\n",(0,s.jsxs)(t.p,{children:["This gets triggered whenever we try to look up a translated message in ",(0,s.jsx)(t.code,{children:"messages"})," for a given ",(0,s.jsx)(t.code,{children:"id"})," and it's not there and there is no fallback ",(0,s.jsx)(t.code,{children:"defaultMessage"})," for the given ",(0,s.jsx)(t.code,{children:"id"}),"."]}),"\n",(0,s.jsx)(t.admonition,{title:"verbosity",type:"caution",children:(0,s.jsx)(t.p,{children:"This error will be triggered very often since it happens for every message that does not have a translation. Therefore if you do log it remotely there should be throttling in place."})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4706:(e,t,n)=>{n.d(t,{A:()=>o});n(8225);var r=n(3372);const s={tabItem:"tabItem_L5fe"};var a=n(7557);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:n,children:t})}},9883:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(8225),s=n(3372),a=n(5086),o=n(1654),i=n(2735),l=n(7571),c=n(4928),u=n(6393);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=f({queryString:n,groupId:s}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),v=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=n(9213);const v={tabList:"tabList_z0Yg",tabItem:"tabItem_Kbbm"};var b=n(7557);function j(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==r&&(c(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,b.jsx)(j,{...t,...e}),(0,b.jsx)(x,{...t,...e})]})}function y(e){const t=(0,g.default)();return(0,b.jsx)(w,{...e,children:d(e.children)},String(t))}},2887:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(8225);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);
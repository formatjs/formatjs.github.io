"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7924],{1286:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"getting-started/installation","title":"Installation","description":"formatjs is a set of libraries that help you setup internationalization in any project whether it\'s React or not.","source":"@site/docs/getting-started/installation.md","sourceDirName":"getting-started","slug":"/getting-started/installation","permalink":"/docs/getting-started/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/getting-started/installation.md","tags":[],"version":"current","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1737383016000,"frontMatter":{"id":"installation","title":"Installation"},"sidebar":"docs","next":{"title":"Application Workflow","permalink":"/docs/getting-started/application-workflow"}}');var r=a(6106),s=a(5809),l=a(9911),o=a(6423);const i={id:"installation",title:"Installation"},c=void 0,u={},d=[{value:"Installation",id:"installation",level:2},{value:"Minimal Application",id:"minimal-application",level:2},{value:"Adding our babel-plugin/TypeScript Transformer for compilation",id:"adding-our-babel-plugintypescript-transformer-for-compilation",level:2},{value:"Babel",id:"babel",level:3},{value:"<code>ts-loader</code>",id:"ts-loader",level:3},{value:"<code>ts-jest</code> in <code>jest.config.js</code>",id:"ts-jest-in-jestconfigjs",level:3},{value:"<code>ts-patch</code>",id:"ts-patch",level:3},{value:"<code>rollup-plugin-typescript2</code>",id:"rollup-plugin-typescript2",level:3}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"formatjs is a set of libraries that help you setup internationalization in any project whether it's React or not."}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,r.jsxs)(l.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,r.jsx)(o.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"npm i -S react react-intl\n"})})}),(0,r.jsx)(o.A,{value:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yarn add react react-intl\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"minimal-application",children:"Minimal Application"}),"\n",(0,r.jsx)(n.p,{children:"After following the step above, you should be able to get a minimal application like this running:"}),"\n",(0,r.jsxs)(l.A,{groupId:"engine",defaultValue:"react",values:[{label:"Node",value:"node"},{label:"React",value:"react"},{label:"Vue3",value:"vue"}],children:[(0,r.jsx)(o.A,{value:"node",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import {createIntl, createIntlCache} from '@formatjs/intl'\n\n// Translated messages in French with matching IDs to what you declared\nconst messagesInFrench = {\n  myMessage: \"Aujourd'hui, nous sommes le {ts, date, ::yyyyMMdd}\",\n}\n\n// This is optional but highly recommended\n// since it prevents memory leak\nconst cache = createIntlCache()\n\n// Create the `intl` object\nconst intl = createIntl(\n  {\n    // Locale of the application\n    locale: 'fr',\n    // Locale of the fallback defaultMessage\n    defaultLocale: 'en',\n    messages: messagesInFrench,\n  },\n  cache\n)\n\n// Aujourd'hui, nous sommes le 23/07/2020\nconsole.log(\n  intl.formatMessage(\n    {\n      // Matching ID as above\n      id: 'myMessage',\n      // Default Message in English\n      defaultMessage: 'Today is {ts, date, ::yyyyMMdd}',\n    },\n    {ts: Date.now()}\n  )\n)\n\n// 19,00\xa0\u20ac\nconsole.log(intl.formatNumber(19, {style: 'currency', currency: 'EUR'}))\n"})})}),(0,r.jsxs)(o.A,{value:"react",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import * as React from \'react\'\nimport {IntlProvider, FormattedMessage, FormattedNumber} from \'react-intl\'\n\n// Translated messages in French with matching IDs to what you declared\nconst messagesInFrench = {\n  myMessage: "Aujourd\'hui, nous sommes le {ts, date, ::yyyyMMdd}",\n}\n\nexport default function App() {\n  return (\n    <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">\n      <p>\n        <FormattedMessage\n          id="myMessage"\n          defaultMessage="Today is {ts, date, ::yyyyMMdd}"\n          values={{ts: Date.now()}}\n        />\n        <br />\n        <FormattedNumber value={19} style="currency" currency="EUR" />\n      </p>\n    </IntlProvider>\n  )\n}\n'})}),(0,r.jsx)(n.p,{children:"Output"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<p>\n  Aujourd'hui, nous sommes le 23/07/2020\n  <br />\n  19,00\xa0\u20ac\n</p>\n"})})]}),(0,r.jsxs)(o.A,{value:"vue",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import VueIntl from 'vue-intl'\nimport {createApp} from 'vue'\n\nconst app = createApp(App)\napp.use(VueIntl, {\n  locale: 'fr',\n  defaultLocale: 'en',\n  messages: {\n    myMessage: \"Aujourd'hui, nous sommes le {ts, date, ::yyyyMMdd}\",\n  },\n})\n"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-vue",children:"<template>\n  <p>\n    {{\n      $formatMessage(\n        {id: 'myMessage', defaultMessage: 'Today is {ts, date, ::yyyyMMdd}'},\n        {ts: Date.now()}\n      )\n    }}\n    <br />\n    {{ $formatNumber(19, {style: 'currency', currency: 'EUR'}) }}\n  </p>\n</template>\n"})}),(0,r.jsx)(n.p,{children:"Output"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<p>\n  Aujourd'hui, nous sommes le 23/07/2020\n  <br />\n  19,00\xa0\u20ac\n</p>\n"})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"adding-our-babel-plugintypescript-transformer-for-compilation",children:"Adding our babel-plugin/TypeScript Transformer for compilation"}),"\n",(0,r.jsxs)(n.p,{children:["Our tooling supports ",(0,r.jsx)(n.code,{children:"babel"}),", ",(0,r.jsx)(n.code,{children:"ts-loader"}),", ",(0,r.jsx)(n.code,{children:"ts-jest"}),", ",(0,r.jsx)(n.code,{children:"rollup-plugin-typescript2"})," & ",(0,r.jsx)(n.code,{children:"ts-patch"})," for message compilation:"]}),"\n",(0,r.jsx)(n.h3,{id:"babel",children:"Babel"}),"\n",(0,r.jsxs)(n.p,{children:["If you're using ",(0,r.jsx)(n.code,{children:"babel"}),", add ",(0,r.jsx)(n.code,{children:"babel-plugin-formatjs"})," to your dependencies:"]}),"\n",(0,r.jsxs)(l.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,r.jsx)(o.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"npm i -D babel-plugin-formatjs\n"})})}),(0,r.jsx)(o.A,{value:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yarn add -D babel-plugin-formatjs\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["and add it to your ",(0,r.jsx)(n.code,{children:"babel.config.js"})," or ",(0,r.jsx)(n.code,{children:".babelrc"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "plugins": [\n    [\n      "formatjs",\n      {\n        "idInterpolationPattern": "[sha512:contenthash:base64:6]",\n        "ast": true\n      }\n    ]\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"ts-loader",children:(0,r.jsx)(n.code,{children:"ts-loader"})}),"\n",(0,r.jsxs)(l.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,r.jsx)(o.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"npm i -D @formatjs/ts-transformer\n"})})}),(0,r.jsx)(o.A,{value:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yarn add -D @formatjs/ts-transformer\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import {transform} from '@formatjs/ts-transformer'\n\nmodule.exports = {\n  ...otherConfigs,\n  module: {\n    rules: [\n      {\n        test: /\\.tsx?$/,\n        use: [\n          {\n            loader: 'ts-loader',\n            options: {\n              getCustomTransformers() {\n                return {\n                  before: [\n                    transform({\n                      overrideIdFn: '[sha512:contenthash:base64:6]',\n                    }),\n                  ],\n                }\n              },\n            },\n          },\n        ],\n      },\n    ],\n  },\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"ts-jest-in-jestconfigjs",children:[(0,r.jsx)(n.code,{children:"ts-jest"})," in ",(0,r.jsx)(n.code,{children:"jest.config.js"})]}),"\n",(0,r.jsxs)(l.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,r.jsx)(o.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"npm i -D @formatjs/ts-transformer\n"})})}),(0,r.jsx)(o.A,{value:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yarn add -D @formatjs/ts-transformer\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Take a look at ",(0,r.jsxs)(n.a,{href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/options/astTransformers",children:[(0,r.jsx)(n.code,{children:"ts-jest"})," guide"]})," on how to incorporate custom AST Transformers."]}),"\n",(0,r.jsx)(n.h3,{id:"ts-patch",children:(0,r.jsx)(n.code,{children:"ts-patch"})}),"\n",(0,r.jsxs)(l.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,r.jsx)(o.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"npm i -D @formatjs/ts-transformer\n"})})}),(0,r.jsx)(o.A,{value:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yarn add -D @formatjs/ts-transformer\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "plugins": [\n      {\n        "transform": "@formatjs/ts-transformer",\n        "import": "transform",\n        "type": "config",\n        "overrideIdFn": "[sha512:contenthash:base64:6]",\n        "ast": true\n      }\n    ]\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"rollup-plugin-typescript2",children:(0,r.jsx)(n.code,{children:"rollup-plugin-typescript2"})}),"\n",(0,r.jsxs)(l.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,r.jsx)(o.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"npm i -D @formatjs/ts-transformer\n"})})}),(0,r.jsx)(o.A,{value:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yarn add -D @formatjs/ts-transformer\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// rollup.config.js\nimport typescript from 'rollup-plugin-typescript2'\nimport {transform} from '@formatjs/ts-transformer'\n\nexport default {\n  input: './main.ts',\n\n  plugins: [\n    typescript({\n      transformers: () => ({\n        before: [\n          transform({\n            overrideIdFn: '[sha512:contenthash:base64:6]',\n            ast: true,\n          }),\n        ],\n      }),\n    }),\n  ],\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},6423:(e,n,a)=>{a.d(n,{A:()=>l});a(7378);var t=a(3372);const r={tabItem:"tabItem_vxlI"};var s=a(6106);function l(e){let{children:n,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,l),hidden:a,children:n})}},9911:(e,n,a)=>{a.d(n,{A:()=>A});var t=a(7378),r=a(3372),s=a(7864),l=a(1654),o=a(5034),i=a(1717),c=a(4506),u=a(6982);function d(e){var n,a;return null!=(n=null==(a=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?n:[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:a}=e;const r=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,i.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}),[s,r])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,s=p(e),[l,i]=(0,t.useState)((()=>function(e){var n;let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+t.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}const r=null!=(n=t.find((e=>e.default)))?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=h({queryString:a,groupId:r}),[f,g]=function(e){let{groupId:n}=e;const a=function(e){return e?"docusaurus.tab."+e:null}(n),[r,s]=(0,u.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),j=(()=>{const e=null!=c?c:f;return m({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{j&&i(j)}),[j]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);i(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=a(642);const j={tabList:"tabList_h3K6",tabItem:"tabItem_EuYH"};var b=a(6106);function x(e){let{className:n,block:a,selectedValue:t,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,a=i.indexOf(n),r=o[a].value;r!==t&&(c(n),l(r))},d=e=>{var n;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var t;const n=i.indexOf(e.currentTarget)+1;a=null!=(t=i[n])?t:i[0];break}case"ArrowLeft":{var r;const n=i.indexOf(e.currentTarget)-1;a=null!=(r=i[n])?r:i[i.length-1];break}}null==(n=a)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{i.push(e)},onKeyDown:d,onClick:u},s,{className:(0,r.A)("tabs__item",j.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===n}),children:null!=a?a:n}),n)}))})}function v(e){let{lazy:n,children:a,selectedValue:s}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,b.jsx)(x,Object.assign({},n,e)),(0,b.jsx)(v,Object.assign({},n,e))]})}function A(e){const n=(0,g.default)();return(0,b.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},5809:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>o});var t=a(7378);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
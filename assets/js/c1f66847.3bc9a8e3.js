"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9950],{414:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"guides/bundler-plugins","title":"Bundling with formatjs","description":"Now that you\'ve had a working pipeline. It\'s time to dive deeper on how to optimize the build with formatjs. From Message Extraction guide, we explicitly recommend against explicit ID due to potential collision in large application. While our extractor can insert IDs in the extracted JSON file, you\'d need to also insert those IDs into the compiled JS output. This guide will cover how to do that.","source":"@site/docs/guides/bundler-plugins.mdx","sourceDirName":"guides","slug":"/guides/bundler-plugins","permalink":"/docs/guides/bundler-plugins","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/guides/bundler-plugins.mdx","tags":[],"version":"current","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1739680656000,"frontMatter":{"id":"bundler-plugins","title":"Bundling with formatjs"},"sidebar":"docs","previous":{"title":"Develop with formatjs","permalink":"/docs/guides/develop"},"next":{"title":"Testing with formatjs","permalink":"/docs/guides/testing"}}');var a=t(6106),s=t(972),l=t(2047),o=t(1516);const i={id:"bundler-plugins",title:"Bundling with formatjs"},u=void 0,c={},d=[{value:"Using babel-plugin-formatjs",id:"using-babel-plugin-formatjs",level:2},{value:"Using @formatjs/ts-transformer",id:"using-formatjsts-transformer",level:2},{value:"ts-loader",id:"ts-loader",level:3}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Now that you've had a working pipeline. It's time to dive deeper on how to optimize the build with ",(0,a.jsx)(n.code,{children:"formatjs"}),". From ",(0,a.jsx)(n.a,{href:"/docs/getting-started/message-extraction",children:"Message Extraction"})," guide, we explicitly recommend against explicit ID due to potential collision in large application. While our extractor can insert IDs in the extracted JSON file, you'd need to also insert those IDs into the compiled JS output. This guide will cover how to do that."]}),"\n",(0,a.jsx)(n.h2,{id:"using-babel-plugin-formatjs",children:"Using babel-plugin-formatjs"}),"\n","\n",(0,a.jsxs)(l.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,a.jsx)(o.A,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"npm i -D babel-plugin-formatjs\n"})})}),(0,a.jsx)(o.A,{value:"yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"yarn add -D babel-plugin-formatjs\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"Let's take this simple example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import {FormattedMessage} from \'react-intl\'\n\n<FormattedMessage\n  description="A message"\n  defaultMessage="My name is {name}"\n  values={{\n    name: userName,\n  }}\n/>\n'})}),"\n",(0,a.jsxs)(n.p,{children:["During runtime this will throw an ",(0,a.jsx)(n.code,{children:"Error"})," saying ",(0,a.jsx)(n.code,{children:"ID is required"}),". In order to inject an ID in the transpiled JS, you can use our ",(0,a.jsx)(n.a,{href:"/docs/tooling/babel-plugin",children:"babel-plugin-formatjs"})," similarly as below:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"babel.config.json"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "plugins": [\n    [\n      "formatjs",\n      {\n        "idInterpolationPattern": "[sha512:contenthash:base64:6]",\n        "ast": true\n      }\n    ]\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"This will produce the following JS"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const {FormattedMessage} = require('react-intl')\n\nReact.createElement(FormattedMessage, {\n  id: '179jda',\n  defaultMessage: 'My name is {name}',\n  values: {\n    name: userName,\n  },\n})\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"description",type:"info",children:(0,a.jsxs)(n.p,{children:["Our plugin also removes ",(0,a.jsx)(n.code,{children:"description"})," because it's only for translator, not end-user."]})}),"\n",(0,a.jsx)(n.h2,{id:"using-formatjsts-transformer",children:"Using @formatjs/ts-transformer"}),"\n",(0,a.jsxs)(l.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,a.jsx)(o.A,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"npm i -D @formatjs/ts-transformer\n"})})}),(0,a.jsx)(o.A,{value:"yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"yarn add -D @formatjs/ts-transformer\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["If you're using TypeScript, in order to enable custom AST transformer you should consider using ",(0,a.jsx)(n.a,{href:"https://github.com/nonara/ts-patch",children:"ts-patch"}),", ",(0,a.jsx)(n.a,{href:"https://github.com/TypeStrong/ts-loader",children:"ts-loader"})," or similar."]}),"\n",(0,a.jsx)(n.p,{children:"Let's take this simple example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import {FormattedMessage} from \'react-intl\'\n\n<FormattedMessage\n  description="A message"\n  defaultMessage="My name is {name}"\n  values={{\n    name: userName,\n  }}\n/>\n'})}),"\n",(0,a.jsx)(n.h3,{id:"ts-loader",children:"ts-loader"}),"\n",(0,a.jsxs)(n.p,{children:["You can add this in your webpack config ",(0,a.jsx)(n.code,{children:"ts-loader"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import {transform} from '@formatjs/ts-transformer'\n// webpack config\nmodule.exports = {\n  rules: [\n    {\n      test: /\\.tsx?$/,\n      use: [\n        {\n          loader: 'ts-loader',\n          options: {\n            getCustomTransformers() {\n              return {\n                before: [\n                  transform({\n                    overrideIdFn: '[sha512:contenthash:base64:6]',\n                  }),\n                ],\n              }\n            },\n          },\n        },\n      ],\n      exclude: /node_modules/,\n    },\n  ],\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"This will produce the following JS"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const {FormattedMessage} = require('react-intl')\n\nReact.createElement(FormattedMessage, {\n  id: '179jda',\n  defaultMessage: 'My name is {name}',\n  values: {\n    name: userName,\n  },\n})\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"description",type:"info",children:(0,a.jsxs)(n.p,{children:["Our transformer also removes ",(0,a.jsx)(n.code,{children:"description"})," because it's only for translator, not end-user."]})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},1516:(e,n,t)=>{t.d(n,{A:()=>l});t(7378);var r=t(3372);const a={tabItem:"tabItem_kWfR"};var s=t(6106);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},2047:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(7378),a=t(3372),s=t(7786),l=t(1654),o=t(135),i=t(7023),u=t(6436),c=t(8618);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=h({queryString:t,groupId:a}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=u??g;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(373);const b={tabList:"tabList_VoPX",tabItem:"tabItem_x220"};var j=t(6106);function x(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),a=o[t].value;a!==r&&(u(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{i.push(e)},onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,j.jsx)(x,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(n))}},972:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(7378);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
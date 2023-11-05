"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6036],{7255:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=t(5250),a=t(7449),s=t(8331),l=t(5376);const o={id:"bundler-plugins",title:"Bundling with formatjs"},i=void 0,u={id:"guides/bundler-plugins",title:"Bundling with formatjs",description:"Now that you've had a working pipeline. It's time to dive deeper on how to optimize the build with formatjs. From Message Extraction guide, we explicitly recommend against explicit ID due to potential collision in large application. While our extractor can insert IDs in the extracted JSON file, you'd need to also insert those IDs into the compiled JS output. This guide will cover how to do that.",source:"@site/docs/guides/bundler-plugins.mdx",sourceDirName:"guides",slug:"/guides/bundler-plugins",permalink:"/docs/guides/bundler-plugins",draft:!1,unlisted:!1,editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/guides/bundler-plugins.mdx",tags:[],version:"current",lastUpdatedBy:"Long Ho",lastUpdatedAt:1609778068,formattedLastUpdatedAt:"Jan 4, 2021",frontMatter:{id:"bundler-plugins",title:"Bundling with formatjs"},sidebar:"docs",previous:{title:"Develop with formatjs",permalink:"/docs/guides/develop"},next:{title:"Testing with formatjs",permalink:"/docs/guides/testing"}},c={},d=[{value:"Using babel-plugin-formatjs",id:"using-babel-plugin-formatjs",level:2},{value:"Using @formatjs/ts-transformer",id:"using-formatjsts-transformer",level:2},{value:"ts-loader",id:"ts-loader",level:3}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Now that you've had a working pipeline. It's time to dive deeper on how to optimize the build with ",(0,r.jsx)(n.code,{children:"formatjs"}),". From ",(0,r.jsx)(n.a,{href:"/docs/getting-started/message-extraction",children:"Message Extraction"})," guide, we explicitly recommend against explicit ID due to potential collision in large application. While our extractor can insert IDs in the extracted JSON file, you'd need to also insert those IDs into the compiled JS output. This guide will cover how to do that."]}),"\n",(0,r.jsx)(n.h2,{id:"using-babel-plugin-formatjs",children:"Using babel-plugin-formatjs"}),"\n","\n","\n",(0,r.jsxs)(s.Z,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,r.jsx)(l.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"npm i -D babel-plugin-formatjs\n"})})}),(0,r.jsx)(l.Z,{value:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yarn add -D babel-plugin-formatjs\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Let's take this simple example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import {FormattedMessage} from \'react-intl\'\n\n<FormattedMessage\n  description="A message"\n  defaultMessage="My name is {name}"\n  values={{\n    name: userName,\n  }}\n/>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["During runtime this will throw an ",(0,r.jsx)(n.code,{children:"Error"})," saying ",(0,r.jsx)(n.code,{children:"ID is required"}),". In order to inject an ID in the transpiled JS, you can use our ",(0,r.jsx)(n.a,{href:"/docs/tooling/babel-plugin",children:"babel-plugin-formatjs"})," similarly as below:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"babel.config.json"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "plugins": [\n    [\n      "formatjs",\n      {\n        "idInterpolationPattern": "[sha512:contenthash:base64:6]",\n        "ast": true\n      }\n    ]\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"This will produce the following JS"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const {FormattedMessage} = require('react-intl')\n\nReact.createElement(FormattedMessage, {\n  id: '179jda',\n  defaultMessage: 'My name is {name}',\n  values: {\n    name: userName,\n  },\n})\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"description",type:"info",children:(0,r.jsxs)(n.p,{children:["Our plugin also removes ",(0,r.jsx)(n.code,{children:"description"})," because it's only for translator, not end-user."]})}),"\n",(0,r.jsx)(n.h2,{id:"using-formatjsts-transformer",children:"Using @formatjs/ts-transformer"}),"\n",(0,r.jsxs)(s.Z,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,r.jsx)(l.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"npm i -D @formatjs/ts-transformer\n"})})}),(0,r.jsx)(l.Z,{value:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yarn add -D @formatjs/ts-transformer\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["If you're using TypeScript, in order to enable custom AST transformer you should consider using ",(0,r.jsx)(n.a,{href:"https://github.com/cevek/ttypescript",children:"ttypescript"}),", ",(0,r.jsx)(n.a,{href:"https://github.com/TypeStrong/ts-loader",children:"ts-loader"})," or similar."]}),"\n",(0,r.jsx)(n.p,{children:"Let's take this simple example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import {FormattedMessage} from \'react-intl\'\n\n<FormattedMessage\n  description="A message"\n  defaultMessage="My name is {name}"\n  values={{\n    name: userName,\n  }}\n/>\n'})}),"\n",(0,r.jsx)(n.h3,{id:"ts-loader",children:"ts-loader"}),"\n",(0,r.jsxs)(n.p,{children:["You can add this in your webpack config ",(0,r.jsx)(n.code,{children:"ts-loader"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import {transform} from '@formatjs/ts-transformer'\n// webpack config\nmodule.exports = {\n  rules: [\n    {\n      test: /\\.tsx?$/,\n      use: [\n        {\n          loader: 'ts-loader',\n          options: {\n            getCustomTransformers() {\n              return {\n                before: [\n                  transform({\n                    overrideIdFn: '[sha512:contenthash:base64:6]',\n                  }),\n                ],\n              }\n            },\n          },\n        },\n      ],\n      exclude: /node_modules/,\n    },\n  ],\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"This will produce the following JS"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const {FormattedMessage} = require('react-intl')\n\nReact.createElement(FormattedMessage, {\n  id: '179jda',\n  defaultMessage: 'My name is {name}',\n  values: {\n    name: userName,\n  },\n})\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"description",type:"info",children:(0,r.jsxs)(n.p,{children:["Our transformer also removes ",(0,r.jsx)(n.code,{children:"description"})," because it's only for translator, not end-user."]})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},5376:(e,n,t)=>{t.d(n,{Z:()=>l});t(79);var r=t(9841);const a="tabItem_RPGj";var s=t(5250);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a,l),hidden:t,children:n})}},8331:(e,n,t)=>{t.d(n,{Z:()=>I});var r=t(79),a=t(9841),s=t(1450),l=t(7911),o=t(2743),i=t(1286),u=t(8434),c=t(5496);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))?void 0:t.filter(Boolean))?n:[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)(()=>{const e=null!=n?n:function(e){return d(e).map(e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}})}(t);return function(e){const n=(0,u.l)(e,(e,n)=>e.value===n.value);if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map(e=>e.value).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e},[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,i._X)(s),(0,r.useCallback)(e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})},[s,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=m(e),[l,i]=(0,r.useState)(()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map(e=>e.value).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const a=null!=(n=r.find(e=>e.default))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s})),[u,d]=h({queryString:t,groupId:a}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[a,s]=(0,c.Nk)(t);return[a,(0,r.useCallback)(e=>{t&&s.set(e)},[t,s])]}({groupId:a}),b=(()=>{const e=null!=u?u:g;return p({value:e,tabValues:s})?e:null})();(0,o.Z)(()=>{b&&i(b)},[b]);return{selectedValue:l,selectValue:(0,r.useCallback)(e=>{if(!p({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);i(e),d(e),f(e)},[d,f,s]),tabValues:s}}var f=t(7570);const b="tabList_CFtg",j="tabItem_TF0o";var x=t(5250);function v(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),a=o[t].value;a!==r&&(u(n),l(a))},d=e=>{var n;let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var r;const n=i.indexOf(e.currentTarget)+1;t=null!=(r=i[n])?r:i[0];break}case"ArrowLeft":{var a;const n=i.indexOf(e.currentTarget)-1;t=null!=(a=i[n])?a:i[i.length-1];break}}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map(e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",j,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n},n)})})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find(e=>e.props.value===a);return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))})}function w(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",b),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(y,{...e,...n})]})}function I(e){const n=(0,f.Z)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(n))}},7449:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var r=t(79);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
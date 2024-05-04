"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1827],{544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var s=n(5250),r=n(7449),a=n(5109),i=n(1226);const o={id:"swc-plugin",title:"swc-plugin"},l=void 0,c={id:"tooling/swc-plugin",title:"swc-plugin",description:"npm version",source:"@site/docs/tooling/swc-plugin.md",sourceDirName:"tooling",slug:"/tooling/swc-plugin",permalink:"/docs/tooling/swc-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/tooling/swc-plugin.md",tags:[],version:"current",lastUpdatedBy:"Sam Magura",lastUpdatedAt:1665501473e3,frontMatter:{id:"swc-plugin",title:"swc-plugin"},sidebar:"tooling",previous:{title:"ts-transformer",permalink:"/docs/tooling/ts-transformer"}},d={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"<strong><code>overrideIdFn</code></strong>",id:"overrideidfn",level:3},{value:"<strong><code>removeDefaultMessage</code></strong>",id:"removedefaultmessage",level:3},{value:"<strong><code>extractSourceLocation</code></strong>",id:"extractsourcelocation",level:3},{value:"<strong><code>additionalComponentNames</code></strong>",id:"additionalcomponentnames",level:3},{value:"<strong><code>additionalFunctionNames</code></strong>",id:"additionalfunctionnames",level:3},{value:"<strong><code>ast</code></strong>",id:"ast",level:3},{value:"<strong><code>onMsgExtracted(filePath: string, msgs: MessageDescriptor[])</code></strong>",id:"onmsgextractedfilepath-string-msgs-messagedescriptor",level:3},{value:"<strong><code>preserveWhitespace</code></strong>",id:"preservewhitespace",level:3},{value:"<strong><code>filename</code></strong>",id:"filename",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://badgen.net/npm/v/@formatjs/swc-plugin",children:(0,s.jsx)(t.img,{src:"https://badgen.net/npm/v/@formatjs/swc-plugin",alt:"npm version"})})}),"\n",(0,s.jsx)(t.p,{children:"Process string messages for translation from modules that use react-intl, specifically:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Parse and verify that messages are ICU-compliant w/o any syntax issues."}),"\n",(0,s.jsxs)(t.li,{children:["Remove ",(0,s.jsx)(t.code,{children:"description"})," from message descriptor to save bytes since it isn't used at runtime."]}),"\n",(0,s.jsxs)(t.li,{children:["Option to remove ",(0,s.jsx)(t.code,{children:"defaultMessage"})," from message descriptor to save bytes since it isn't used at runtime."]}),"\n",(0,s.jsx)(t.li,{children:"Automatically inject message ID based on specific pattern."}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"@formatjs/swc-plugin"})," is not currently compatible with TypeScript due to ",(0,s.jsx)(t.a,{href:"https://github.com/swc-project/swc/issues/4648",children:"swc-project/swc#4648"}),'. Attempting to compile a TypeScript codebase with the swc plugin will likely result in the error "Method visitTsType not implemented."']})}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,s.jsxs)(a.Z,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,s.jsx)(i.Z,{value:"npm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"npm i @formatjs/swc-plugin\n"})})}),(0,s.jsx)(i.Z,{value:"yarn",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"yarn add @formatjs/swc-plugin\n"})})})]}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(t.p,{children:["The default message descriptors for the app's default language will be processed from: ",(0,s.jsx)(t.code,{children:"defineMessages()"}),", ",(0,s.jsx)(t.code,{children:"defineMessage()"}),", ",(0,s.jsx)(t.code,{children:"intl.formatMessage"})," and ",(0,s.jsx)(t.code,{children:"<FormattedMessage>"}),"; all of which are named exports of the React Intl package."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import {transform} from '@swc/core'\nimport {FormatJSTransformer, Opts} from '@formatjs/swc-plugin'\n\nconst opts: Opts = {\n  overrideIdFn: '[hash:base64:10]',\n}\n\nconst output = await transform(input, {\n  filename: filePath,\n  jsc: {\n    parser: {\n      syntax: 'typescript',\n      tsx: true,\n      decorators: true,\n      dynamicImport: true,\n    },\n  },\n  plugin: m => new FormatJSTransformer(opts).visitProgram(m),\n})\n"})}),"\n",(0,s.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(t.h3,{id:"overrideidfn",children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"overrideIdFn"})})}),"\n",(0,s.jsxs)(t.p,{children:["A function with the signature ",(0,s.jsx)(t.code,{children:"(id: string, defaultMessage: string, description?: string|object, filePath: string) => string"})," which allows you to override the ID both in the extracted javascript and messages."]}),"\n",(0,s.jsxs)(t.p,{children:["Alternatively, ",(0,s.jsx)(t.code,{children:"overrideIdFn"})," can be a template string, which is used only if the message ID is empty."]}),"\n",(0,s.jsx)(t.h3,{id:"removedefaultmessage",children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"removeDefaultMessage"})})}),"\n",(0,s.jsxs)(t.p,{children:["Remove ",(0,s.jsx)(t.code,{children:"defaultMessage"})," field in generated js after extraction."]}),"\n",(0,s.jsx)(t.h3,{id:"extractsourcelocation",children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"extractSourceLocation"})})}),"\n",(0,s.jsxs)(t.p,{children:["Whether the metadata about the location of the message in the source file should be extracted. If ",(0,s.jsx)(t.code,{children:"true"}),", then ",(0,s.jsx)(t.code,{children:"file"}),", ",(0,s.jsx)(t.code,{children:"start"}),", and ",(0,s.jsx)(t.code,{children:"end"})," fields will exist for each extracted message descriptors. Defaults to ",(0,s.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"additionalcomponentnames",children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"additionalComponentNames"})})}),"\n",(0,s.jsxs)(t.p,{children:["Additional component names to extract messages from, e.g: ",(0,s.jsx)(t.code,{children:"['FormattedFooBarMessage']"}),". ",(0,s.jsx)(t.strong,{children:"NOTE"}),": By default we check for the fact that ",(0,s.jsx)(t.code,{children:"FormattedMessage"})," are imported from ",(0,s.jsx)(t.code,{children:"moduleSourceName"})," to make sure variable alias works. This option does not do that so it's less safe."]}),"\n",(0,s.jsx)(t.h3,{id:"additionalfunctionnames",children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"additionalFunctionNames"})})}),"\n",(0,s.jsxs)(t.p,{children:["Additional function names to extract messages from, e.g: ",(0,s.jsx)(t.code,{children:"['$formatMessage']"}),". Use this if you prefer to alias ",(0,s.jsx)(t.code,{children:"formatMessage"})," to something shorter like ",(0,s.jsx)(t.code,{children:"$t"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"ast",children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"ast"})})}),"\n",(0,s.jsxs)(t.p,{children:["Pre-parse ",(0,s.jsx)(t.code,{children:"defaultMessage"})," into AST for faster runtime perf. This flag doesn't do anything when ",(0,s.jsx)(t.code,{children:"removeDefaultMessage"})," is ",(0,s.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"onmsgextractedfilepath-string-msgs-messagedescriptor",children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"onMsgExtracted(filePath: string, msgs: MessageDescriptor[])"})})}),"\n",(0,s.jsx)(t.p,{children:"Callback that gets triggered whenever a message is encountered."}),"\n",(0,s.jsx)(t.h3,{id:"preservewhitespace",children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"preserveWhitespace"})})}),"\n",(0,s.jsx)(t.p,{children:"Whether to preserve whitespace and newlines."}),"\n",(0,s.jsx)(t.h3,{id:"filename",children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"filename"})})}),"\n",(0,s.jsx)(t.p,{children:"Path of the source file"}),"\n",(0,s.jsxs)(t.p,{children:["Take a look at out tests ",(0,s.jsx)(t.a,{href:"https://github.com/formatjs/formatjs/blob/main/packages/swc-plugin/tests/utils.ts",children:(0,s.jsx)(t.code,{children:"utils.ts"})})," for example in integration."]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1226:(e,t,n)=>{n.d(t,{Z:()=>i});n(79);var s=n(3230);const r={tabItem:"tabItem_u3V1"};var a=n(5250);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,i),hidden:n,children:t})}},5109:(e,t,n)=>{n.d(t,{Z:()=>y});var s=n(79),r=n(3230),a=n(7989),i=n(7911),o=n(1907),l=n(4752),c=n(688),d=n(5148);function u(e){var t,n;return null!=(t=null==(n=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=null!=t?t:function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[i,l]=(0,s.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(t=s.find((e=>e.default)))?t:s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,u]=m({queryString:n,groupId:r}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[r,a]=(0,d.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),x=(()=>{const e=null!=c?c:g;return p({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);l(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var f=n(2228);const x={tabList:"tabList_UgiR",tabItem:"tabItem_Sx8T"};var j=n(5250);function v(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==s&&(c(t),i(r))},u=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var s;const t=l.indexOf(e.currentTarget)+1;n=null!=(s=l[t])?s:l[0];break}case"ArrowLeft":{var r;const t=l.indexOf(e.currentTarget)-1;n=null!=(r=l[t])?r:l[l.length-1];break}}null==(t=n)||t.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,r.Z)("tabs__item",x.tabItem,null==a?void 0:a.className,{"tabs__item--active":s===t}),children:null!=n?n:t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=g(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...t,...e}),(0,j.jsx)(b,{...t,...e})]})}function y(e){const t=(0,f.default)();return(0,j.jsx)(w,{...e,children:u(e.children)},String(t))}},7449:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var s=n(79);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);
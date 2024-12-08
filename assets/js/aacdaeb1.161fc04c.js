"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[241],{2077:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"tooling/babel-plugin","title":"babel-plugin-formatjs","description":"Process string messages for translation from modules that use react-intl, specifically:","source":"@site/docs/tooling/babel-plugin.md","sourceDirName":"tooling","slug":"/tooling/babel-plugin","permalink":"/docs/tooling/babel-plugin","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/tooling/babel-plugin.md","tags":[],"version":"current","lastUpdatedBy":"longlho","lastUpdatedAt":1733629912000,"frontMatter":{"id":"babel-plugin","title":"babel-plugin-formatjs"},"sidebar":"tooling","previous":{"title":"eslint-plugin-formatjs","permalink":"/docs/tooling/linter"},"next":{"title":"ts-transformer","permalink":"/docs/tooling/ts-transformer"}}');var s=t(7557),r=t(2887),o=t(1994),l=t(2225);const i={id:"babel-plugin",title:"babel-plugin-formatjs"},c=void 0,d={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Via <code>babel.config.json</code> (Recommended)",id:"via-babelconfigjson-recommended",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Options",id:"options",level:2},{value:"<strong><code>overrideIdFn</code></strong>",id:"overrideidfn",level:3},{value:"<strong><code>idInterpolationPattern</code></strong>",id:"idinterpolationpattern",level:3},{value:"<strong><code>removeDefaultMessage</code></strong>",id:"removedefaultmessage",level:3},{value:"<strong><code>additionalComponentNames</code></strong>",id:"additionalcomponentnames",level:3},{value:"<strong><code>additionalFunctionNames</code></strong>",id:"additionalfunctionnames",level:3},{value:"<strong><code>pragma</code></strong>",id:"pragma",level:3},{value:"<strong><code>ast</code></strong>",id:"ast",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Process string messages for translation from modules that use react-intl, specifically:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Parse and verify that messages are ICU-compliant w/o any syntax issues."}),"\n",(0,s.jsxs)(n.li,{children:["Remove ",(0,s.jsx)(n.code,{children:"description"})," from message descriptor to save bytes since it isn't used at runtime."]}),"\n",(0,s.jsxs)(n.li,{children:["Option to remove ",(0,s.jsx)(n.code,{children:"defaultMessage"})," from message descriptor to save bytes since it isn't used at runtime."]}),"\n",(0,s.jsx)(n.li,{children:"Automatically inject message ID based on specific pattern."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,s.jsxs)(o.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,s.jsx)(l.A,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm i babel-plugin-formatjs\n"})})}),(0,s.jsx)(l.A,{value:"yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"yarn add babel-plugin-formatjs\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["This Babel plugin only visits ES6 modules which ",(0,s.jsx)(n.code,{children:"import"})," React Intl."]})}),"\n",(0,s.jsxs)(n.p,{children:["The default message descriptors for the app's default language will be processed from: ",(0,s.jsx)(n.code,{children:"defineMessages()"}),", ",(0,s.jsx)(n.code,{children:"defineMessage()"}),", ",(0,s.jsx)(n.code,{children:"intl.formatMessage"})," and ",(0,s.jsx)(n.code,{children:"<FormattedMessage>"}),"; all of which are named exports of the React Intl package."]}),"\n",(0,s.jsxs)(n.h3,{id:"via-babelconfigjson-recommended",children:["Via ",(0,s.jsx)(n.code,{children:"babel.config.json"})," (Recommended)"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"babel.config.json"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "plugins": [\n    [\n      "formatjs",\n      {\n        "idInterpolationPattern": "[sha512:contenthash:base64:6]",\n        "ast": true\n      }\n    ]\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,s.jsxs)(n.p,{children:["The extract message descriptors are available via the ",(0,s.jsx)(n.code,{children:"metadata"})," property on the object returned from Babel's ",(0,s.jsx)(n.code,{children:"transform()"})," API:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"require('@babel/core').transform('code', {\n  plugins: ['formatjs'],\n}) // => { code, map, ast, metadata['formatjs'].messages, metadata['formatjs'].meta };\n"})}),"\n",(0,s.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(n.h3,{id:"overrideidfn",children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"overrideIdFn"})})}),"\n",(0,s.jsxs)(n.p,{children:["A function with the signature ",(0,s.jsx)(n.code,{children:"(id: string, defaultMessage: string, description: string|object) => string"})," which allows you to override the ID both in the extracted javascript and messages."]}),"\n",(0,s.jsx)(n.h3,{id:"idinterpolationpattern",children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"idInterpolationPattern"})})}),"\n",(0,s.jsxs)(n.p,{children:["If certain message descriptors don't have id, this ",(0,s.jsx)(n.code,{children:"pattern"})," will be used to automaticallygenerate IDs for them. Default to ",(0,s.jsx)(n.code,{children:"[sha512:contenthash:base64:6]"}),". See ",(0,s.jsx)(n.a,{href:"https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options",children:"nodejs crypto createHash"})," for hash algorithms & ",(0,s.jsx)(n.a,{href:"https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings",children:"nodejs buffer docs"})," for digest encodings."]}),"\n",(0,s.jsx)(n.h3,{id:"removedefaultmessage",children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"removeDefaultMessage"})})}),"\n",(0,s.jsxs)(n.p,{children:["Remove ",(0,s.jsx)(n.code,{children:"defaultMessage"})," field in generated js after extraction."]}),"\n",(0,s.jsx)(n.h3,{id:"additionalcomponentnames",children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"additionalComponentNames"})})}),"\n",(0,s.jsxs)(n.p,{children:["Additional component names to extract messages from, e.g: ",(0,s.jsx)(n.code,{children:"['FormattedFooBarMessage']"}),". ",(0,s.jsx)(n.strong,{children:"NOTE"}),": By default we check for the fact that ",(0,s.jsx)(n.code,{children:"FormattedMessage"})," are imported from ",(0,s.jsx)(n.code,{children:"moduleSourceName"})," to make sure variable alias works. This option does not do that so it's less safe."]}),"\n",(0,s.jsx)(n.h3,{id:"additionalfunctionnames",children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"additionalFunctionNames"})})}),"\n",(0,s.jsxs)(n.p,{children:["Additional function names to extract messages from, e.g: ",(0,s.jsx)(n.code,{children:"['$formatMessage']"}),". Use this if you prefer to alias ",(0,s.jsx)(n.code,{children:"formatMessage"})," to something shorter like ",(0,s.jsx)(n.code,{children:"$t"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"pragma",children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"pragma"})})}),"\n",(0,s.jsxs)(n.p,{children:["parse specific additional custom pragma. This allows you to tag certain file with metadata such as ",(0,s.jsx)(n.code,{children:"project"}),". For example with this file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'// @intl-meta project:my-custom-project\nimport {FormattedMessage} from \'react-intl\'\n;<FormattedMessage defaultMessage="foo" id="bar" />\n'})}),"\n",(0,s.jsxs)(n.p,{children:["and with option ",(0,s.jsx)(n.code,{children:'{pragma: "@intl-meta"}'}),", we'll parse out ",(0,s.jsx)(n.code,{children:"// @intl-meta project:my-custom-project"})," into ",(0,s.jsx)(n.code,{children:"{project: 'my-custom-project'}"})," in the result file."]}),"\n",(0,s.jsx)(n.h3,{id:"ast",children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"ast"})})}),"\n",(0,s.jsxs)(n.p,{children:["Pre-parse ",(0,s.jsx)(n.code,{children:"defaultMessage"})," into AST for faster runtime perf. This flag doesn't do anything when ",(0,s.jsx)(n.code,{children:"removeDefaultMessage"})," is ",(0,s.jsx)(n.code,{children:"true"}),"."]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},2225:(e,n,t)=>{t.d(n,{A:()=>o});t(8225);var a=t(3372);const s={tabItem:"tabItem_eZab"};var r=t(7557);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,o),hidden:t,children:n})}},1994:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(8225),s=t(3372),r=t(4244),o=t(1654),l=t(6562),i=t(3921),c=t(3502),d=t(1218);function u(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,i.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}),[r,s])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=h(e),[o,i]=(0,a.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const s=null!=(n=a.find((e=>e.default)))?n:a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[c,u]=p({queryString:t,groupId:s}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[s,r]=(0,d.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),j=(()=>{const e=null!=c?c:g;return m({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{j&&i(j)}),[j]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);i(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=t(4698);const j={tabList:"tabList_RKXE",tabItem:"tabItem_ohdL"};var b=t(7557);function x(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),s=l[t].value;s!==a&&(c(n),o(s))},u=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var a;const n=i.indexOf(e.currentTarget)+1;t=null!=(a=i[n])?a:i[0];break}case"ArrowLeft":{var s;const n=i.indexOf(e.currentTarget)-1;t=null!=(s=i[n])?s:i[i.length-1];break}}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:u,onClick:d},r,{className:(0,s.A)("tabs__item",j.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=g(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,b.jsx)(x,Object.assign({},n,e)),(0,b.jsx)(v,Object.assign({},n,e))]})}function w(e){const n=(0,f.default)();return(0,b.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(n))}},2887:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var a=t(8225);const s={},r=a.createContext(s);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);
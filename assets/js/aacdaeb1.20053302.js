"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[241],{4225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"tooling/babel-plugin","title":"babel-plugin-formatjs","description":"Process string messages for translation from modules that use react-intl, specifically:","source":"@site/docs/tooling/babel-plugin.md","sourceDirName":"tooling","slug":"/tooling/babel-plugin","permalink":"/docs/tooling/babel-plugin","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/tooling/babel-plugin.md","tags":[],"version":"current","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1742953423000,"frontMatter":{"id":"babel-plugin","title":"babel-plugin-formatjs"},"sidebar":"tooling","previous":{"title":"eslint-plugin-formatjs","permalink":"/docs/tooling/linter"},"next":{"title":"ts-transformer","permalink":"/docs/tooling/ts-transformer"}}');var s=n(6106),r=n(7389),o=n(5516),i=n(8846);const l={id:"babel-plugin",title:"babel-plugin-formatjs"},c=void 0,d={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Via <code>babel.config.json</code> (Recommended)",id:"via-babelconfigjson-recommended",level:3},{value:"Via Node API",id:"via-node-api",level:3},{value:"Options",id:"options",level:2},{value:"<strong><code>overrideIdFn</code></strong>",id:"overrideidfn",level:3},{value:"<strong><code>idInterpolationPattern</code></strong>",id:"idinterpolationpattern",level:3},{value:"<strong><code>removeDefaultMessage</code></strong>",id:"removedefaultmessage",level:3},{value:"<strong><code>additionalComponentNames</code></strong>",id:"additionalcomponentnames",level:3},{value:"<strong><code>additionalFunctionNames</code></strong>",id:"additionalfunctionnames",level:3},{value:"<strong><code>pragma</code></strong>",id:"pragma",level:3},{value:"<strong><code>ast</code></strong>",id:"ast",level:3}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Process string messages for translation from modules that use react-intl, specifically:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Parse and verify that messages are ICU-compliant w/o any syntax issues."}),"\n",(0,s.jsxs)(t.li,{children:["Remove ",(0,s.jsx)(t.code,{children:"description"})," from message descriptor to save bytes since it isn't used at runtime."]}),"\n",(0,s.jsxs)(t.li,{children:["Option to remove ",(0,s.jsx)(t.code,{children:"defaultMessage"})," from message descriptor to save bytes since it isn't used at runtime."]}),"\n",(0,s.jsx)(t.li,{children:"Automatically inject message ID based on specific pattern."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,s.jsxs)(o.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,s.jsx)(i.A,{value:"npm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"npm i babel-plugin-formatjs\n"})})}),(0,s.jsx)(i.A,{value:"yarn",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"yarn add babel-plugin-formatjs\n"})})})]}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["This Babel plugin only visits ES6 modules which ",(0,s.jsx)(t.code,{children:"import"})," React Intl."]})}),"\n",(0,s.jsxs)(t.p,{children:["The default message descriptors for the app's default language will be processed from: ",(0,s.jsx)(t.code,{children:"defineMessages()"}),", ",(0,s.jsx)(t.code,{children:"defineMessage()"}),", ",(0,s.jsx)(t.code,{children:"intl.formatMessage"})," and ",(0,s.jsx)(t.code,{children:"<FormattedMessage>"}),"; all of which are named exports of the React Intl package."]}),"\n",(0,s.jsxs)(t.h3,{id:"via-babelconfigjson-recommended",children:["Via ",(0,s.jsx)(t.code,{children:"babel.config.json"})," (Recommended)"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"babel.config.json"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "plugins": [\n    [\n      "formatjs",\n      {\n        "idInterpolationPattern": "[sha512:contenthash:base64:6]",\n        "ast": true\n      }\n    ]\n  ]\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"via-node-api",children:"Via Node API"}),"\n",(0,s.jsxs)(t.p,{children:["The extract message descriptors are available via the ",(0,s.jsx)(t.code,{children:"metadata"})," property on the object returned from Babel's ",(0,s.jsx)(t.code,{children:"transform()"})," API:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"require('@babel/core').transform('code', {\n  plugins: ['formatjs'],\n}) // => { code, map, ast, metadata['formatjs'].messages, metadata['formatjs'].meta };\n"})}),"\n",(0,s.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(t.h3,{id:"overrideidfn",children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"overrideIdFn"})})}),"\n",(0,s.jsxs)(t.p,{children:["A function with the signature ",(0,s.jsx)(t.code,{children:"(id: string, defaultMessage: string, description: string|object) => string"})," which allows you to override the ID both in the extracted javascript and messages."]}),"\n",(0,s.jsx)(t.h3,{id:"idinterpolationpattern",children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"idInterpolationPattern"})})}),"\n",(0,s.jsxs)(t.p,{children:["If certain message descriptors don't have id, this ",(0,s.jsx)(t.code,{children:"pattern"})," will be used to automaticallygenerate IDs for them. Default to ",(0,s.jsx)(t.code,{children:"[sha512:contenthash:base64:6]"}),". See ",(0,s.jsx)(t.a,{href:"https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options",children:"nodejs crypto createHash"})," for hash algorithms & ",(0,s.jsx)(t.a,{href:"https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings",children:"nodejs buffer docs"})," for digest encodings."]}),"\n",(0,s.jsx)(t.h3,{id:"removedefaultmessage",children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"removeDefaultMessage"})})}),"\n",(0,s.jsxs)(t.p,{children:["Remove ",(0,s.jsx)(t.code,{children:"defaultMessage"})," field in generated js after extraction."]}),"\n",(0,s.jsx)(t.h3,{id:"additionalcomponentnames",children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"additionalComponentNames"})})}),"\n",(0,s.jsxs)(t.p,{children:["Additional component names to extract messages from, e.g: ",(0,s.jsx)(t.code,{children:"['FormattedFooBarMessage']"}),". ",(0,s.jsx)(t.strong,{children:"NOTE"}),": By default we check for the fact that ",(0,s.jsx)(t.code,{children:"FormattedMessage"})," are imported from ",(0,s.jsx)(t.code,{children:"moduleSourceName"})," to make sure variable alias works. This option does not do that so it's less safe."]}),"\n",(0,s.jsx)(t.h3,{id:"additionalfunctionnames",children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"additionalFunctionNames"})})}),"\n",(0,s.jsxs)(t.p,{children:["Additional function names to extract messages from, e.g: ",(0,s.jsx)(t.code,{children:"['$formatMessage']"}),". Use this if you prefer to alias ",(0,s.jsx)(t.code,{children:"formatMessage"})," to something shorter like ",(0,s.jsx)(t.code,{children:"$t"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"pragma",children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"pragma"})})}),"\n",(0,s.jsxs)(t.p,{children:["parse specific additional custom pragma. This allows you to tag certain file with metadata such as ",(0,s.jsx)(t.code,{children:"project"}),". For example with this file:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'// @intl-meta project:my-custom-project\nimport {FormattedMessage} from \'react-intl\'\n;<FormattedMessage defaultMessage="foo" id="bar" />\n'})}),"\n",(0,s.jsxs)(t.p,{children:["and with option ",(0,s.jsx)(t.code,{children:'{pragma: "@intl-meta"}'}),", we'll parse out ",(0,s.jsx)(t.code,{children:"// @intl-meta project:my-custom-project"})," into ",(0,s.jsx)(t.code,{children:"{project: 'my-custom-project'}"})," in the result file."]}),"\n",(0,s.jsx)(t.h3,{id:"ast",children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"ast"})})}),"\n",(0,s.jsxs)(t.p,{children:["Pre-parse ",(0,s.jsx)(t.code,{children:"defaultMessage"})," into AST for faster runtime perf. This flag doesn't do anything when ",(0,s.jsx)(t.code,{children:"removeDefaultMessage"})," is ",(0,s.jsx)(t.code,{children:"true"}),"."]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8846:(e,t,n)=>{n.d(t,{A:()=>o});n(7378);var a=n(3372);const s={tabItem:"tabItem_HWzn"};var r=n(6106);function o(e){let{children:t,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,o),hidden:n,children:t})}},5516:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(7378),s=n(3372),r=n(485),o=n(1654),i=n(645),l=n(414),c=n(9615),d=n(4928);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,u]=p({queryString:n,groupId:s}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,d.Dv)(n);return[s,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),j=(()=>{const e=c??f;return m({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{j&&l(j)}),[j]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var g=n(1751);const j={tabList:"tabList_YESZ",tabItem:"tabItem_xkch"};var b=n(6106);function x(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==a&&(c(t),o(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{l.push(e)},onKeyDown:u,onClick:d,...r,className:(0,s.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,b.jsx)(x,{...t,...e}),(0,b.jsx)(v,{...t,...e})]})}function w(e){const t=(0,g.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(t))}},7389:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(7378);const s={},r=a.createContext(s);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);
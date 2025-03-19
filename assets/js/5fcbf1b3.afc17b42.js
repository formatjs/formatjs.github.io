"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1123],{8944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tooling/ts-transformer","title":"ts-transformer","description":"npm version","source":"@site/docs/tooling/ts-transformer.md","sourceDirName":"tooling","slug":"/tooling/ts-transformer","permalink":"/docs/tooling/ts-transformer","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/tooling/ts-transformer.md","tags":[],"version":"current","lastUpdatedBy":"Long Ho","lastUpdatedAt":1742400092000,"frontMatter":{"id":"ts-transformer","title":"ts-transformer"},"sidebar":"tooling","previous":{"title":"babel-plugin-formatjs","permalink":"/docs/tooling/babel-plugin"},"next":{"title":"swc-plugin","permalink":"/docs/tooling/swc-plugin"}}');var r=n(6106),a=n(7389),o=n(892),i=n(4122);const l={id:"ts-transformer",title:"ts-transformer"},c=void 0,d={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Via <code>ts-loader</code>",id:"via-ts-loader",level:3},{value:"Via <code>ts-jest</code> in <code>jest.config.js</code>",id:"via-ts-jest-in-jestconfigjs",level:3},{value:"Via <code>ts-patch</code>",id:"via-ts-patch",level:3},{value:"Via <code>rollup-plugin-typescript2</code>",id:"via-rollup-plugin-typescript2",level:3},{value:"Options",id:"options",level:2},{value:"<strong><code>overrideIdFn</code></strong>",id:"overrideidfn",level:3},{value:"<strong><code>removeDefaultMessage</code></strong>",id:"removedefaultmessage",level:3},{value:"<strong><code>extractSourceLocation</code></strong>",id:"extractsourcelocation",level:3},{value:"<strong><code>additionalComponentNames</code></strong>",id:"additionalcomponentnames",level:3},{value:"<strong><code>additionalFunctionNames</code></strong>",id:"additionalfunctionnames",level:3},{value:"<strong><code>pragma</code></strong>",id:"pragma",level:3},{value:"<strong><code>ast</code></strong>",id:"ast",level:3},{value:"<strong><code>onMsgExtracted(filePath: string, msgs: MessageDescriptor[])</code></strong>",id:"onmsgextractedfilepath-string-msgs-messagedescriptor",level:3},{value:"<strong><code>onMetaExtracted(filePath: string, meta: Record&lt;string, string&gt;)</code></strong>",id:"onmetaextractedfilepath-string-meta-recordstring-string",level:3},{value:"<strong><code>preserveWhitespace</code></strong>",id:"preservewhitespace",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://badgen.net/npm/v/@formatjs/ts-transformer",children:(0,r.jsx)(t.img,{src:"https://badgen.net/npm/v/@formatjs/ts-transformer",alt:"npm version"})})}),"\n",(0,r.jsx)(t.p,{children:"Process string messages for translation from modules that use react-intl, specifically:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Parse and verify that messages are ICU-compliant w/o any syntax issues."}),"\n",(0,r.jsxs)(t.li,{children:["Remove ",(0,r.jsx)(t.code,{children:"description"})," from message descriptor to save bytes since it isn't used at runtime."]}),"\n",(0,r.jsxs)(t.li,{children:["Option to remove ",(0,r.jsx)(t.code,{children:"defaultMessage"})," from message descriptor to save bytes since it isn't used at runtime."]}),"\n",(0,r.jsx)(t.li,{children:"Automatically inject message ID based on specific pattern."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,r.jsxs)(o.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,r.jsx)(i.A,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"npm i @formatjs/ts-transformer\n"})})}),(0,r.jsx)(i.A,{value:"yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"yarn add @formatjs/ts-transformer\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:["The default message descriptors for the app's default language will be processed from: ",(0,r.jsx)(t.code,{children:"defineMessages()"}),", ",(0,r.jsx)(t.code,{children:"defineMessage()"}),", ",(0,r.jsx)(t.code,{children:"intl.formatMessage"})," and ",(0,r.jsx)(t.code,{children:"<FormattedMessage>"}),"; all of which are named exports of the React Intl package."]}),"\n",(0,r.jsxs)(t.h3,{id:"via-ts-loader",children:["Via ",(0,r.jsx)(t.code,{children:"ts-loader"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import {transform} from '@formatjs/ts-transformer'\n\nmodule.exports = {\n  ...otherConfigs,\n  module: {\n    rules: [\n      {\n        test: /\\.tsx?$/,\n        use: [\n          {\n            loader: 'ts-loader',\n            options: {\n              getCustomTransformers() {\n                return {\n                  before: [\n                    transform({\n                      overrideIdFn: '[sha512:contenthash:base64:6]',\n                    }),\n                  ],\n                }\n              },\n            },\n          },\n        ],\n      },\n    ],\n  },\n}\n"})}),"\n",(0,r.jsxs)(t.h3,{id:"via-ts-jest-in-jestconfigjs",children:["Via ",(0,r.jsx)(t.code,{children:"ts-jest"})," in ",(0,r.jsx)(t.code,{children:"jest.config.js"})]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["This requires ",(0,r.jsx)(t.code,{children:"ts-jest@26.4.0"})," or later"]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      astTransformers: {\n        before: [\n          {\n            path: '@formatjs/ts-transformer/ts-jest-integration',\n            options: {\n              // options\n              overrideIdFn: '[sha512:contenthash:base64:6]',\n              ast: true,\n            },\n          },\n        ],\n      },\n    },\n  },\n}\n"})}),"\n",(0,r.jsxs)(t.h3,{id:"via-ts-patch",children:["Via ",(0,r.jsx)(t.code,{children:"ts-patch"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "plugins": [\n      {\n        "transform": "@formatjs/ts-transformer",\n        "import": "transform",\n        "type": "config",\n        "overrideIdFn": "[sha512:contenthash:base64:6]",\n        "ast": true\n      }\n    ]\n  }\n}\n'})}),"\n",(0,r.jsxs)(t.h3,{id:"via-rollup-plugin-typescript2",children:["Via ",(0,r.jsx)(t.code,{children:"rollup-plugin-typescript2"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// rollup.config.js\nimport typescript from 'rollup-plugin-typescript2'\nimport {transform} from '@formatjs/ts-transformer'\n\nexport default {\n  input: './main.ts',\n\n  plugins: [\n    typescript({\n      transformers: () => ({\n        before: [\n          transform({\n            overrideIdFn: '[sha512:contenthash:base64:6]',\n            ast: true,\n          }),\n        ],\n      }),\n    }),\n  ],\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,r.jsx)(t.h3,{id:"overrideidfn",children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"overrideIdFn"})})}),"\n",(0,r.jsxs)(t.p,{children:["A function with the signature ",(0,r.jsx)(t.code,{children:"(id: string, defaultMessage: string, description: string|object) => string"})," which allows you to override the ID both in the extracted javascript and messages."]}),"\n",(0,r.jsxs)(t.p,{children:["Alternatively, ",(0,r.jsx)(t.code,{children:"overrideIdFn"})," can be a template string, which is used only if the message ID is empty."]}),"\n",(0,r.jsx)(t.h3,{id:"removedefaultmessage",children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"removeDefaultMessage"})})}),"\n",(0,r.jsxs)(t.p,{children:["Remove ",(0,r.jsx)(t.code,{children:"defaultMessage"})," field in generated js after extraction."]}),"\n",(0,r.jsx)(t.h3,{id:"extractsourcelocation",children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"extractSourceLocation"})})}),"\n",(0,r.jsxs)(t.p,{children:["Whether the metadata about the location of the message in the source file should be extracted. If ",(0,r.jsx)(t.code,{children:"true"}),", then ",(0,r.jsx)(t.code,{children:"file"}),", ",(0,r.jsx)(t.code,{children:"start"}),", and ",(0,r.jsx)(t.code,{children:"end"})," fields will exist for each extracted message descriptors. Defaults to ",(0,r.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"additionalcomponentnames",children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"additionalComponentNames"})})}),"\n",(0,r.jsxs)(t.p,{children:["Additional component names to extract messages from, e.g: ",(0,r.jsx)(t.code,{children:"['FormattedFooBarMessage']"}),". ",(0,r.jsx)(t.strong,{children:"NOTE"}),": By default we check for the fact that ",(0,r.jsx)(t.code,{children:"FormattedMessage"})," are imported from ",(0,r.jsx)(t.code,{children:"moduleSourceName"})," to make sure variable alias works. This option does not do that so it's less safe."]}),"\n",(0,r.jsx)(t.h3,{id:"additionalfunctionnames",children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"additionalFunctionNames"})})}),"\n",(0,r.jsxs)(t.p,{children:["Additional function names to extract messages from, e.g: ",(0,r.jsx)(t.code,{children:"['$formatMessage']"}),". Use this if you prefer to alias ",(0,r.jsx)(t.code,{children:"formatMessage"})," to something shorter like ",(0,r.jsx)(t.code,{children:"$t"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"pragma",children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"pragma"})})}),"\n",(0,r.jsxs)(t.p,{children:["parse specific additional custom pragma. This allows you to tag certain file with metadata such as ",(0,r.jsx)(t.code,{children:"project"}),". For example with this file:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'// @intl-meta project:my-custom-project\nimport {FormattedMessage} from \'react-intl\'\n;<FormattedMessage defaultMessage="foo" id="bar" />\n'})}),"\n",(0,r.jsxs)(t.p,{children:["and with option ",(0,r.jsx)(t.code,{children:'{pragma: "@intl-meta"}'}),", we'll parse out ",(0,r.jsx)(t.code,{children:"// @intl-meta project:my-custom-project"})," into ",(0,r.jsx)(t.code,{children:"{project: 'my-custom-project'}"})," in the result file."]}),"\n",(0,r.jsx)(t.h3,{id:"ast",children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"ast"})})}),"\n",(0,r.jsxs)(t.p,{children:["Pre-parse ",(0,r.jsx)(t.code,{children:"defaultMessage"})," into AST for faster runtime perf. This flag doesn't do anything when ",(0,r.jsx)(t.code,{children:"removeDefaultMessage"})," is ",(0,r.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"onmsgextractedfilepath-string-msgs-messagedescriptor",children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"onMsgExtracted(filePath: string, msgs: MessageDescriptor[])"})})}),"\n",(0,r.jsx)(t.p,{children:"Callback that gets triggered whenever a message is encountered."}),"\n",(0,r.jsx)(t.h3,{id:"onmetaextractedfilepath-string-meta-recordstring-string",children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"onMetaExtracted(filePath: string, meta: Record<string, string>)"})})}),"\n",(0,r.jsxs)(t.p,{children:["Callback that gets triggered whenever a ",(0,r.jsx)(t.code,{children:"pragme"})," meta is encountered."]}),"\n",(0,r.jsx)(t.h3,{id:"preservewhitespace",children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"preserveWhitespace"})})}),"\n",(0,r.jsx)(t.p,{children:"Whether to preserve whitespace and newlines."}),"\n",(0,r.jsxs)(t.p,{children:["Take a look at ",(0,r.jsx)(t.a,{href:"https://github.com/formatjs/formatjs/blob/main/packages/ts-transformer/examples/compile.ts",children:(0,r.jsx)(t.code,{children:"compile.ts"})})," for example in integration."]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},4122:(e,t,n)=>{n.d(t,{A:()=>o});n(7378);var s=n(3372);const r={tabItem:"tabItem_kAcU"};var a=n(6106);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,o),hidden:n,children:t})}},892:(e,t,n)=>{n.d(t,{A:()=>w});var s=n(7378),r=n(3372),a=n(19),o=n(1654),i=n(7140),l=n(9268),c=n(6061),d=n(5326);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[c,u]=p({queryString:n,groupId:r}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,d.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),j=(()=>{const e=c??g;return m({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{j&&l(j)}),[j]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var f=n(6160);const j={tabList:"tabList_Pzm8",tabItem:"tabItem_TTcV"};var x=n(6106);function v(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==s&&(c(t),o(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>{l.push(e)},onKeyDown:u,onClick:d,...a,className:(0,r.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=g(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(b,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(t))}},7389:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(7378);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);
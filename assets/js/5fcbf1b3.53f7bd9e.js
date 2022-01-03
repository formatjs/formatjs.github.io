"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,g=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),o=n(2389),i=n(9443);const s=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=n(3616),p=n(6010);const d="tabItem_1uMI";function m(e){var t,n,o,i=e.lazy,m=e.block,c=e.defaultValue,u=e.values,g=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=u?u:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===c?c:null!=(t=null!=c?c:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==N&&!v.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=s(),y=b.tabGroupChoices,C=b.setTabGroupChoices,j=(0,r.useState)(N),w=j[0],x=j[1],T=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var M=y[g];null!=M&&M!==w&&v.some((function(e){return e.value===M}))&&x(M)}var E=function(e){var t=e.currentTarget,n=T.indexOf(t),a=v[n].value;a!==w&&(O(t),x(a),null!=g&&C(g,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":m},f)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:E,onClick:E},o,{className:(0,p.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function c(e){var t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},3750:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>d,metadata:()=>m,toc:()=>c,default:()=>g});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(6396),s=n(8215),l=["components"],p={id:"ts-transformer",title:"ts-transformer"},d=void 0,m={unversionedId:"tooling/ts-transformer",id:"tooling/ts-transformer",title:"ts-transformer",description:"npm version",source:"@site/docs/tooling/ts-transformer.md",sourceDirName:"tooling",slug:"/tooling/ts-transformer",permalink:"/docs/tooling/ts-transformer",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/tooling/ts-transformer.md",tags:[],version:"current",frontMatter:{id:"ts-transformer",title:"ts-transformer"},sidebar:"tooling",previous:{title:"babel-plugin-formatjs",permalink:"/docs/tooling/babel-plugin"},next:{title:"swc-plugin",permalink:"/docs/tooling/swc-plugin"}},c=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Via <code>ts-loader</code>",id:"via-ts-loader",children:[],level:3},{value:"Via <code>ts-jest</code> in <code>jest.config.js</code>",id:"via-ts-jest-in-jestconfigjs",children:[],level:3},{value:"Via <code>ttypescript</code>",id:"via-ttypescript",children:[],level:3},{value:"Via <code>rollup-plugin-typescript2</code>",id:"via-rollup-plugin-typescript2",children:[],level:3}],level:2},{value:"Options",id:"options",children:[{value:"<strong><code>overrideIdFn</code></strong>",id:"overrideidfn",children:[],level:3},{value:"<strong><code>removeDefaultMessage</code></strong>",id:"removedefaultmessage",children:[],level:3},{value:"<strong><code>extractSourceLocation</code></strong>",id:"extractsourcelocation",children:[],level:3},{value:"<strong><code>additionalComponentNames</code></strong>",id:"additionalcomponentnames",children:[],level:3},{value:"<strong><code>additionalFunctionNames</code></strong>",id:"additionalfunctionnames",children:[],level:3},{value:"<strong><code>pragma</code></strong>",id:"pragma",children:[],level:3},{value:"<strong><code>ast</code></strong>",id:"ast",children:[],level:3},{value:"<strong><code>onMsgExtracted(filePath: string, msgs: MessageDescriptor[])</code></strong>",id:"onmsgextractedfilepath-string-msgs-messagedescriptor",children:[],level:3},{value:"<strong><code>onMetaExtracted(filePath: string, meta: Record&lt;string, string&gt;)</code></strong>",id:"onmetaextractedfilepath-string-meta-recordstring-string",children:[],level:3},{value:"<strong><code>preserveWhitespace</code></strong>",id:"preservewhitespace",children:[],level:3}],level:2}],u={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://badgen.net/npm/v/@formatjs/ts-transformer"},(0,o.kt)("img",{parentName:"a",src:"https://badgen.net/npm/v/@formatjs/ts-transformer",alt:"npm version"}))),(0,o.kt)("p",null,"Process string messages for translation from modules that use react-intl, specifically:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Parse and verify that messages are ICU-compliant w/o any syntax issues."),(0,o.kt)("li",{parentName:"ul"},"Remove ",(0,o.kt)("inlineCode",{parentName:"li"},"description")," from message descriptor to save bytes since it isn't used at runtime."),(0,o.kt)("li",{parentName:"ul"},"Option to remove ",(0,o.kt)("inlineCode",{parentName:"li"},"defaultMessage")," from message descriptor to save bytes since it isn't used at runtime."),(0,o.kt)("li",{parentName:"ul"},"Automatically inject message ID based on specific pattern.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)(i.Z,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm i @formatjs/ts-transformer\n"))),(0,o.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @formatjs/ts-transformer\n")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The default message descriptors for the app's default language will be processed from: ",(0,o.kt)("inlineCode",{parentName:"p"},"defineMessages()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"defineMessage()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"intl.formatMessage")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<FormattedMessage>"),"; all of which are named exports of the React Intl package."),(0,o.kt)("h3",{id:"via-ts-loader"},"Via ",(0,o.kt)("inlineCode",{parentName:"h3"},"ts-loader")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {transform} from '@formatjs/ts-transformer'\n\nmodule.exports = {\n  ...otherConfigs,\n  module: {\n    rules: [\n      {\n        test: /\\.tsx?$/,\n        use: [\n          {\n            loader: 'ts-loader',\n            options: {\n              getCustomTransformers() {\n                return {\n                  before: [\n                    transform({\n                      overrideIdFn: '[sha512:contenthash:base64:6]',\n                    }),\n                  ],\n                }\n              },\n            },\n          },\n        ],\n      },\n    ],\n  },\n}\n")),(0,o.kt)("h3",{id:"via-ts-jest-in-jestconfigjs"},"Via ",(0,o.kt)("inlineCode",{parentName:"h3"},"ts-jest")," in ",(0,o.kt)("inlineCode",{parentName:"h3"},"jest.config.js")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This requires ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest@26.4.0")," or later"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      astTransformers: {\n        before: [\n          {\n            path: '@formatjs/ts-transformer/ts-jest-integration',\n            options: {\n              // options\n              overrideIdFn: '[sha512:contenthash:base64:6]',\n              ast: true,\n            },\n          },\n        ],\n      },\n    },\n  },\n}\n")),(0,o.kt)("h3",{id:"via-ttypescript"},"Via ",(0,o.kt)("inlineCode",{parentName:"h3"},"ttypescript")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "plugins": [\n      {\n        "transform": "@formatjs/ts-transformer",\n        "import": "transform",\n        "type": "config",\n        "overrideIdFn": "[sha512:contenthash:base64:6]",\n        "ast": true\n      }\n    ]\n  }\n}\n')),(0,o.kt)("h3",{id:"via-rollup-plugin-typescript2"},"Via ",(0,o.kt)("inlineCode",{parentName:"h3"},"rollup-plugin-typescript2")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// rollup.config.js\nimport typescript from 'rollup-plugin-typescript2'\nimport {transform} from '@formatjs/ts-transformer'\n\nexport default {\n  input: './main.ts',\n\n  plugins: [\n    typescript({\n      transformers: () => ({\n        before: [\n          transform({\n            overrideIdFn: '[sha512:contenthash:base64:6]',\n            ast: true,\n          }),\n        ],\n      }),\n    }),\n  ],\n}\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"overrideidfn"},(0,o.kt)("strong",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"strong"},"overrideIdFn"))),(0,o.kt)("p",null,"A function with the signature ",(0,o.kt)("inlineCode",{parentName:"p"},"(id: string, defaultMessage: string, description: string|object) => string")," which allows you to override the ID both in the extracted javascript and messages."),(0,o.kt)("p",null,"Alternatively, ",(0,o.kt)("inlineCode",{parentName:"p"},"overrideIdFn")," can be a template string, which is used only if the message ID is empty."),(0,o.kt)("h3",{id:"removedefaultmessage"},(0,o.kt)("strong",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"strong"},"removeDefaultMessage"))),(0,o.kt)("p",null,"Remove ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultMessage")," field in generated js after extraction."),(0,o.kt)("h3",{id:"extractsourcelocation"},(0,o.kt)("strong",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"strong"},"extractSourceLocation"))),(0,o.kt)("p",null,"Whether the metadata about the location of the message in the source file should be extracted. If ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", then ",(0,o.kt)("inlineCode",{parentName:"p"},"file"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"start"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"end")," fields will exist for each extracted message descriptors. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("h3",{id:"additionalcomponentnames"},(0,o.kt)("strong",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"strong"},"additionalComponentNames"))),(0,o.kt)("p",null,"Additional component names to extract messages from, e.g: ",(0,o.kt)("inlineCode",{parentName:"p"},"['FormattedFooBarMessage']"),". ",(0,o.kt)("strong",{parentName:"p"},"NOTE"),": By default we check for the fact that ",(0,o.kt)("inlineCode",{parentName:"p"},"FormattedMessage")," are imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"moduleSourceName")," to make sure variable alias works. This option does not do that so it's less safe."),(0,o.kt)("h3",{id:"additionalfunctionnames"},(0,o.kt)("strong",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"strong"},"additionalFunctionNames"))),(0,o.kt)("p",null,"Additional function names to extract messages from, e.g: ",(0,o.kt)("inlineCode",{parentName:"p"},"['$formatMessage']"),". Use this if you prefer to alias ",(0,o.kt)("inlineCode",{parentName:"p"},"formatMessage")," to something shorter like ",(0,o.kt)("inlineCode",{parentName:"p"},"$t"),"."),(0,o.kt)("h3",{id:"pragma"},(0,o.kt)("strong",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"strong"},"pragma"))),(0,o.kt)("p",null,"parse specific additional custom pragma. This allows you to tag certain file with metadata such as ",(0,o.kt)("inlineCode",{parentName:"p"},"project"),". For example with this file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'// @intl-meta project:my-custom-project\nimport {FormattedMessage} from \'react-intl\'\n;<FormattedMessage defaultMessage="foo" id="bar" />\n')),(0,o.kt)("p",null,"and with option ",(0,o.kt)("inlineCode",{parentName:"p"},'{pragma: "@intl-meta"}'),", we'll parse out ",(0,o.kt)("inlineCode",{parentName:"p"},"// @intl-meta project:my-custom-project")," into ",(0,o.kt)("inlineCode",{parentName:"p"},"{project: 'my-custom-project'}")," in the result file."),(0,o.kt)("h3",{id:"ast"},(0,o.kt)("strong",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"strong"},"ast"))),(0,o.kt)("p",null,"Pre-parse ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultMessage")," into AST for faster runtime perf. This flag doesn't do anything when ",(0,o.kt)("inlineCode",{parentName:"p"},"removeDefaultMessage")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h3",{id:"onmsgextractedfilepath-string-msgs-messagedescriptor"},(0,o.kt)("strong",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"strong"},"onMsgExtracted(filePath: string, msgs: MessageDescriptor[])"))),(0,o.kt)("p",null,"Callback that gets triggered whenever a message is encountered."),(0,o.kt)("h3",{id:"onmetaextractedfilepath-string-meta-recordstring-string"},(0,o.kt)("strong",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"strong"},"onMetaExtracted(filePath: string, meta: Record<string, string>)"))),(0,o.kt)("p",null,"Callback that gets triggered whenever a ",(0,o.kt)("inlineCode",{parentName:"p"},"pragme")," meta is encountered."),(0,o.kt)("h3",{id:"preservewhitespace"},(0,o.kt)("strong",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"strong"},"preserveWhitespace"))),(0,o.kt)("p",null,"Whether to preserve whitespace and newlines."),(0,o.kt)("p",null,"Take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/formatjs/formatjs/blob/main/packages/ts-transformer/examples/compile.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"compile.ts"))," for example in integration."))}g.isMDXComponent=!0}}]);
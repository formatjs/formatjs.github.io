(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||l;return n?r.a.createElement(d,c(c({ref:t},i),{},{components:n})):r.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},109:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},110:function(e,t,n){"use strict";var a=n(0),r=n(111);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},111:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},112:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(110),o=n(109),c=n(48),s=n.n(c);const i=37,p=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:b,groupId:u,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:j}=Object(l.a)(),[f,O]=Object(a.useState)(c),[g,y]=Object(a.useState)(!1);if(null!=u){const e=d[u];null!=e&&e!==f&&b.some((t=>t.value===e))&&O(e)}const h=e=>{O(e),null!=u&&j(u,e)},v=[],N=e=>{e.metaKey||e.altKey||e.ctrlKey||y(!0)},T=()=>{y(!1)};return Object(a.useEffect)((()=>(window.addEventListener("keydown",N),window.addEventListener("mousedown",T),()=>{window.removeEventListener("keydown",N),window.removeEventListener("mousedown",T)})),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},m)},b.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===e}),style:g?{}:{outline:"none"},key:e,ref:e=>v.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case i:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e),N(e)},onFocus:()=>h(e),onClick:()=>{h(e),y(!1)},onPointerDown:()=>y(!1)},t)))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((e=>e.props.value===f))[0]))}},113:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),l=(n(0),n(108)),o=n(112),c=n(113),s={id:"installation",title:"Installation"},i={unversionedId:"getting-started/installation",id:"getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"formatjs is a set of libraries that help you setup internationalization in any project whether it's React or not.",source:"@site/docs/getting-started/installation.md",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/getting-started/installation.md",version:"current",sidebar:"docs",next:{title:"Application Workflow",permalink:"/docs/getting-started/application-workflow"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Minimal Application",id:"minimal-application",children:[]},{value:"Minimal React Application",id:"minimal-react-application",children:[]},{value:"Adding our babel-plugin/TypeScript Transformer for compilation",id:"adding-our-babel-plugintypescript-transformer-for-compilation",children:[{value:"Babel",id:"babel",children:[]},{value:"<code>ts-loader</code>",id:"ts-loader",children:[]},{value:"<code>ts-jest</code> in <code>jest.config.js</code>",id:"ts-jest-in-jestconfigjs",children:[]},{value:"<code>ttypescript</code>",id:"ttypescript",children:[]},{value:"<code>rollup-plugin-typescript2</code>",id:"rollup-plugin-typescript2",children:[]}]}],b={rightToc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"formatjs is a set of libraries that help you setup internationalization in any project whether it's React or not."),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)(o.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm i -S react react-intl\n"))),Object(l.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add react react-intl\n")))),Object(l.b)("h2",{id:"minimal-application"},"Minimal Application"),Object(l.b)("p",null,"After following the step above, you should be able to get a minimal application like this running:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {createIntl, createIntlCache} from 'react-intl'\n\n// Translated messages in French with matching IDs to what you declared\nconst messagesInFrench = {\n  myMessage: \"Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}\",\n}\n\n// This is optional but highly recommended\n// since it prevents memory leak\nconst cache = createIntlCache()\n\n// Create the `intl` object\nconst intl = createIntl(\n  {\n    // Locale of the application\n    locale: 'fr',\n    // Locale of the fallback defaultMessage\n    defaultLocale: 'en',\n    messages: messagesInFrench,\n  },\n  cache\n)\n\n// Aujourd'hui, c'est le 23/07/2020\nconsole.log(\n  intl.formatMessage(\n    {\n      // Matching ID as above\n      id: 'myMessage',\n      // Default Message in English\n      defaultMessage: 'Today is {ts, date, ::yyyyMMdd}',\n    },\n    {ts: Date.now()}\n  )\n)\n\n// 19,00\xa0\u20ac\nconsole.log(intl.formatNumber(19, {style: 'currency', currency: 'EUR'}))\n")),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"If you're not using ",Object(l.b)("inlineCode",{parentName:"p"},"React"),", you can use ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/intl"}),Object(l.b)("inlineCode",{parentName:"a"},"@formatjs/intl"))," instead that has the same API. In fact, ",Object(l.b)("inlineCode",{parentName:"p"},"react-intl")," also uses ",Object(l.b)("inlineCode",{parentName:"p"},"@formatjs/intl")))),Object(l.b)("h2",{id:"minimal-react-application"},"Minimal React Application"),Object(l.b)("p",null,"If you're using React, a minimal React application can look like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'import * as React from \'react\'\nimport {IntlProvider, FormattedMessage, FormattedNumber} from \'react-intl\'\n\n// Translated messages in French with matching IDs to what you declared\nconst messagesInFrench = {\n  myMessage: "Aujourd\'hui, c\'est le {ts, date, ::yyyyMMdd}",\n}\n\nexport default function App() {\n  return (\n    <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">\n      <p>\n        <FormattedMessage\n          id="myMessage"\n          defaultMessage="Today is {ts, date, ::yyyyMMdd}"\n          values={{ts: Date.now()}}\n        />\n        <br />\n        <FormattedNumber value={19} style="currency" currency="EUR" />\n      </p>\n    </IntlProvider>\n  )\n}\n')),Object(l.b)("p",null,"Output"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<p>\n  Aujourd'hui, c'est le 23/07/2020\n  <br />\n  19,00\xa0\u20ac\n</p>\n")),Object(l.b)("h2",{id:"adding-our-babel-plugintypescript-transformer-for-compilation"},"Adding our babel-plugin/TypeScript Transformer for compilation"),Object(l.b)("p",null,"Our tooling supports ",Object(l.b)("inlineCode",{parentName:"p"},"babel"),", ",Object(l.b)("inlineCode",{parentName:"p"},"ts-loader"),", ",Object(l.b)("inlineCode",{parentName:"p"},"ts-jest"),", ",Object(l.b)("inlineCode",{parentName:"p"},"rollup-plugin-typescript2")," & ",Object(l.b)("inlineCode",{parentName:"p"},"ttypescript")," for message compilation:"),Object(l.b)("h3",{id:"babel"},"Babel"),Object(l.b)("p",null,"If you're using ",Object(l.b)("inlineCode",{parentName:"p"},"babel"),", add ",Object(l.b)("inlineCode",{parentName:"p"},"babel-plugin-react-intl")," to your dependencies:"),Object(l.b)(o.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm i -D babel-plugin-react-intl\n"))),Object(l.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add -D babel-plugin-react-intl\n")))),Object(l.b)("p",null,"and add it to your ",Object(l.b)("inlineCode",{parentName:"p"},"babel.config.js")," or ",Object(l.b)("inlineCode",{parentName:"p"},".babelrc"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "plugins": [\n    [\n      "react-intl",\n      {\n        "idInterpolationPattern": "[sha512:contenthash:base64:6]",\n        "extractFromFormatMessageCall": true,\n        "ast": true\n      }\n    ]\n  ]\n}\n')),Object(l.b)("h3",{id:"ts-loader"},Object(l.b)("inlineCode",{parentName:"h3"},"ts-loader")),Object(l.b)(o.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm i -D @formatjs/ts-transformer\n"))),Object(l.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add -D @formatjs/ts-transformer\n")))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {transform} from '@formatjs/ts-transformer'\n\nmodule.exports = {\n  ...otherConfigs,\n  module: {\n    rules: [\n      {\n        test: /\\.tsx?$/,\n        use: [\n          {\n            loader: 'ts-loader',\n            options: {\n              getCustomTransformers: {\n                before: [\n                  transform({\n                    overrideIdFn: '[sha512:contenthash:base64:6]',\n                    ast: true,\n                  }),\n                ],\n              },\n            },\n          },\n        ],\n      },\n    ],\n  },\n}\n")),Object(l.b)("h3",{id:"ts-jest-in-jestconfigjs"},Object(l.b)("inlineCode",{parentName:"h3"},"ts-jest")," in ",Object(l.b)("inlineCode",{parentName:"h3"},"jest.config.js")),Object(l.b)(o.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm i -D @formatjs/ts-transformer\n"))),Object(l.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add -D @formatjs/ts-transformer\n")))),Object(l.b)("p",null,"Take a look at ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kulshekhar/ts-jest/blob/master/docs/user/config/astTransformers.md"}),Object(l.b)("inlineCode",{parentName:"a"},"ts-jest")," guide")," on how to incorporate custom AST Transformers."),Object(l.b)("h3",{id:"ttypescript"},Object(l.b)("inlineCode",{parentName:"h3"},"ttypescript")),Object(l.b)(o.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm i -D @formatjs/ts-transformer\n"))),Object(l.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add -D @formatjs/ts-transformer\n")))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    "plugins": [\n      {\n        "transform": "@formatjs/ts-transformer",\n        "import": "transform",\n        "type": "config",\n        "overrideIdFn": "[sha512:contenthash:base64:6]",\n        "ast": true\n      }\n    ]\n  }\n}\n')),Object(l.b)("h3",{id:"rollup-plugin-typescript2"},Object(l.b)("inlineCode",{parentName:"h3"},"rollup-plugin-typescript2")),Object(l.b)(o.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm i -D @formatjs/ts-transformer\n"))),Object(l.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add -D @formatjs/ts-transformer\n")))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// rollup.config.js\nimport typescript from 'rollup-plugin-typescript2'\nimport {transform} from '@formatjs/ts-transformer'\n\nexport default {\n  input: './main.ts',\n\n  plugins: [\n    typescript({\n      transformers: () => ({\n        before: [\n          transform({\n            overrideIdFn: '[sha512:contenthash:base64:6]',\n            ast: true,\n          }),\n        ],\n      }),\n    }),\n  ],\n}\n")))}u.isMDXComponent=!0}}]);
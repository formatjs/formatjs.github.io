(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{105:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(t),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return t?r.a.createElement(m,l(l({ref:n},s),{},{components:t})):r.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},73:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(6),o=(t(0),t(105)),i={id:"installation",title:"Installation"},l={unversionedId:"getting-started/installation",id:"getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"formatjs is a set of libraries that help you setup internationalization in any project whether it's React or not.",source:"@site/docs/getting-started/installation.md",permalink:"/docs/getting-started/installation",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/getting-started/installation.md",sidebar:"docs",next:{title:"Application Workflow",permalink:"/docs/getting-started/application-workflow"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Minimal Application",id:"minimal-application",children:[]},{value:"Minimal React Application",id:"minimal-react-application",children:[]},{value:"Adding our babel-plugin/TypeScript Transformer for compilation",id:"adding-our-babel-plugintypescript-transformer-for-compilation",children:[{value:"Babel",id:"babel",children:[]},{value:"<code>ts-loader</code>",id:"ts-loader",children:[]},{value:"<code>ts-jest</code> in <code>jest.config.js</code>",id:"ts-jest-in-jestconfigjs",children:[]},{value:"<code>ttypescript</code>",id:"ttypescript",children:[]},{value:"<code>rollup-plugin-typescript2</code>",id:"rollup-plugin-typescript2",children:[]}]}],s={rightToc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"formatjs is a set of libraries that help you setup internationalization in any project whether it's React or not."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm i -S react react-intl\n")),Object(o.b)("h2",{id:"minimal-application"},"Minimal Application"),Object(o.b)("p",null,"After following the step above, you should be able to get a minimal application like this running:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {createIntl, createIntlCache} from 'react-intl'\n\n// Translated messages in French with matching IDs to what you declared\nconst messagesInFrench = {\n  myMessage: \"Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}\",\n}\n\n// This is optional but highly recommended\n// since it prevents memory leak\nconst cache = createIntlCache()\n\n// Create the `intl` object\nconst intl = createIntl(\n  {\n    // Locale of the application\n    locale: 'fr',\n    // Locale of the fallback defaultMessage\n    defaultLocale: 'en',\n    messages: messagesInFrench,\n  },\n  cache\n)\n\n// Aujourd'hui, c'est le 23/07/2020\nconsole.log(\n  intl.formatMessage(\n    {\n      // Matching ID as above\n      id: 'myMessage',\n      // Default Message in English\n      defaultMessage: 'Today is {ts, date, ::yyyyMMdd}',\n    },\n    {ts: Date.now()}\n  )\n)\n\n// 19,00\xa0\u20ac\nconsole.log(intl.formatNumber(19, {style: 'currency', currency: 'EUR'}))\n")),Object(o.b)("h2",{id:"minimal-react-application"},"Minimal React Application"),Object(o.b)("p",null,"If you're using React, a minimal React application can look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'import * as React from \'react\'\nimport {IntlProvider, FormattedMessage, FormattedNumber} from \'react-intl\'\n\n// Translated messages in French with matching IDs to what you declared\nconst messagesInFrench = {\n  myMessage: "Aujourd\'hui, c\'est le {ts, date, ::yyyyMMdd}",\n}\n\nexport default function App() {\n  return (\n    <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">\n      <p>\n        <FormattedMessage\n          id="myMessage"\n          defaultMessage="Today is {ts, date, ::yyyyMMdd}"\n          values={{ts: Date.now()}}\n        />\n        <br />\n        <FormattedNumber value={19} style="currency" currency="EUR" />\n      </p>\n    </IntlProvider>\n  )\n}\n')),Object(o.b)("p",null,"Output"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<p>\n  Aujourd'hui, c'est le 23/07/2020\n  <br />\n  19,00\xa0\u20ac\n</p>\n")),Object(o.b)("h2",{id:"adding-our-babel-plugintypescript-transformer-for-compilation"},"Adding our babel-plugin/TypeScript Transformer for compilation"),Object(o.b)("p",null,"Our tooling supports ",Object(o.b)("inlineCode",{parentName:"p"},"babel"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ts-loader"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ts-jest"),", ",Object(o.b)("inlineCode",{parentName:"p"},"rollup-plugin-typescript2")," & ",Object(o.b)("inlineCode",{parentName:"p"},"ttypescript")," for message compilation:"),Object(o.b)("h3",{id:"babel"},"Babel"),Object(o.b)("p",null,"If you're using ",Object(o.b)("inlineCode",{parentName:"p"},"babel"),", add ",Object(o.b)("inlineCode",{parentName:"p"},"babel-plugin-react-intl")," to your dependencies:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm i -D babel-plugin-react-intl\n")),Object(o.b)("p",null,"and add it to your ",Object(o.b)("inlineCode",{parentName:"p"},"babel.config.js")," or ",Object(o.b)("inlineCode",{parentName:"p"},".babelrc"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "plugins": [\n    [\n      "react-intl",\n      {\n        "idInterpolationPattern": "[sha512:contenthash:base64:6]",\n        "extractFromFormatMessageCall": true,\n        "ast": true\n      }\n    ]\n  ]\n}\n')),Object(o.b)("h3",{id:"ts-loader"},Object(o.b)("inlineCode",{parentName:"h3"},"ts-loader")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {transform} from '@formatjs/ts-transformer'\n\nmodule.exports = {\n  ...otherConfigs,\n  module: {\n    rules: [\n      {\n        test: /\\.tsx?$/,\n        use: [\n          {\n            loader: 'ts-loader',\n            options: {\n              getCustomTransformers: {\n                before: [\n                  transform({\n                    overrideIdFn: '[sha512:contenthash:base64:6]',\n                    ast: true,\n                  }),\n                ],\n              },\n            },\n          },\n        ],\n      },\n    ],\n  },\n}\n")),Object(o.b)("h3",{id:"ts-jest-in-jestconfigjs"},Object(o.b)("inlineCode",{parentName:"h3"},"ts-jest")," in ",Object(o.b)("inlineCode",{parentName:"h3"},"jest.config.js")),Object(o.b)("p",null,"Take a look at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kulshekhar/ts-jest/blob/master/docs/user/config/astTransformers.md"}),Object(o.b)("inlineCode",{parentName:"a"},"ts-jest")," guide")," on how to incorporate custom AST Transformers."),Object(o.b)("h3",{id:"ttypescript"},Object(o.b)("inlineCode",{parentName:"h3"},"ttypescript")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    "plugins": [\n      {\n        "transform": "@formatjs/ts-transformer",\n        "import": "transform",\n        "type": "config",\n        "overrideIdFn": "[sha512:contenthash:base64:6]",\n        "ast": true\n      }\n    ]\n  }\n}\n')),Object(o.b)("h3",{id:"rollup-plugin-typescript2"},Object(o.b)("inlineCode",{parentName:"h3"},"rollup-plugin-typescript2")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// rollup.config.js\nimport typescript from 'rollup-plugin-typescript2'\nimport {transform} from '@formatjs/ts-transformer'\n\nexport default {\n  input: './main.ts',\n\n  plugins: [\n    typescript({\n      transformers: () => ({\n        before: [\n          transform({\n            overrideIdFn: '[sha512:contenthash:base64:6]',\n            ast: true,\n          }),\n        ],\n      }),\n    }),\n  ],\n}\n")))}p.isMDXComponent=!0}}]);
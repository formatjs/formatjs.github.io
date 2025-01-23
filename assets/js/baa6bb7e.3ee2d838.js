"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8417],{3873:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"react-intl","title":"Overview","description":"npm Version","source":"@site/docs/react-intl.md","sourceDirName":".","slug":"/react-intl","permalink":"/docs/react-intl","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/react-intl.md","tags":[],"version":"current","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1737657233000,"frontMatter":{"id":"react-intl","title":"Overview"},"sidebar":"api","next":{"title":"Components","permalink":"/docs/react-intl/components"}}');var r=t(6106),l=t(972),i=t(288),a=t(4083);const o={id:"react-intl",title:"Overview"},c=void 0,d={},h=[{value:"Runtime Requirements",id:"runtime-requirements",level:2},{value:"Node.js",id:"nodejs",level:3},{value:"full-icu",id:"full-icu",level:4},{value:"React Native",id:"react-native",level:3},{value:"React Native on iOS",id:"react-native-on-ios",level:4},{value:"The <code>react-intl</code> Package",id:"the-react-intl-package",level:2},{value:"Module Bundlers",id:"module-bundlers",level:3},{value:"The React Intl Module",id:"the-react-intl-module",level:2},{value:"Creating an I18n Context",id:"creating-an-i18n-context",level:2},{value:"Formatting Data",id:"formatting-data",level:2},{value:"Jest",id:"jest",level:3},{value:"webpack",id:"webpack",level:3},{value:"Typing message IDs and locale",id:"typing-message-ids-and-locale",level:2},{value:"Message extraction",id:"message-extraction",level:2},{value:"ESLint Plugin",id:"eslint-plugin",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://www.npmjs.org/package/react-intl",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/npm/v/react-intl.svg?style=flat-square",alt:"npm Version"})})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Welcome to React Intl's docs! This is the place to find React Intl's docs"}),". Feel free to open a pull request and contribute to the docs to make them better."]}),"\n",(0,r.jsx)(n.h2,{id:"runtime-requirements",children:"Runtime Requirements"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"We support IE11 & 2 most recent versions of Edge, Chrome, Firefox & Safari."})}),"\n",(0,r.jsxs)(n.p,{children:["React Intl relies on these ",(0,r.jsx)(n.code,{children:"Intl"})," APIs:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat",children:"Intl.NumberFormat"}),": Available on IE11+"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat",children:"Intl.DateTimeFormat"}),": Available on IE11+"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules",children:"Intl.PluralRules"}),": This can be polyfilled using ",(0,r.jsx)(n.a,{href:"/docs/polyfills/intl-pluralrules",children:"this package"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat",children:"Intl.RelativeTimeFormat"}),": This can be polyfilled using ",(0,r.jsx)(n.a,{href:"/docs/polyfills/intl-relativetimeformat",children:"this package"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["(Optional) ",(0,r.jsx)(n.a,{href:"https://tc39.es/proposal-intl-displaynames/",children:"Intl.DisplayNames"}),": Required if you use ",(0,r.jsx)(n.a,{href:"/docs/react-intl/api#formatdisplayname",children:(0,r.jsx)(n.code,{children:"formatDisplayName"})}),"\nor ",(0,r.jsx)(n.a,{href:"/docs/react-intl/components#formatteddisplayname",children:(0,r.jsx)(n.code,{children:"FormattedDisplayName"})}),". This can be polyfilled using ",(0,r.jsx)(n.a,{href:"/docs/polyfills/intl-displaynames",children:"this package"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If you need to support older browsers, we recommend you do the following:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If you're supporting browsers that do not have ",(0,r.jsx)(n.code,{children:"Intl"}),", include this ",(0,r.jsx)(n.a,{href:"/docs/polyfills/intl-getcanonicallocales",children:"polyfill"})," in your build."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Polyfill ",(0,r.jsx)(n.code,{children:"Intl.NumberFormat"})," with ",(0,r.jsx)(n.a,{href:"/docs/polyfills/intl-numberformat",children:(0,r.jsx)(n.code,{children:"@formatjs/intl-numberformat"})}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Polyfill ",(0,r.jsx)(n.code,{children:"Intl.DateTimeFormat"})," with ",(0,r.jsx)(n.a,{href:"/docs/polyfills/intl-datetimeformat",children:(0,r.jsx)(n.code,{children:"@formatjs/intl-datetimeformat"})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If you're supporting browsers that do not have ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules",children:(0,r.jsx)(n.code,{children:"Intl.PluralRules"})})," (e.g IE11 & Safari 12-), include this ",(0,r.jsx)(n.a,{href:"/docs/polyfills/intl-pluralrules",children:"polyfill"})," in your build."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If you're supporting browsers that do not have ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat",children:"Intl.RelativeTimeFormat"})," (e.g IE11, Edge, Safari 12-), include this ",(0,r.jsx)(n.a,{href:"/docs/polyfills/intl-relativetimeformat",children:"polyfill"})," in your build along with individual CLDR data for each locale you support."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If you need ",(0,r.jsx)(n.code,{children:"Intl.DisplayNames"}),", include this ",(0,r.jsx)(n.a,{href:"/docs/polyfills/intl-displaynames",children:"polyfill"})," in your build along with individual CLDR data for each locale you support."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"nodejs",children:"Node.js"}),"\n",(0,r.jsx)(n.h4,{id:"full-icu",children:"full-icu"}),"\n",(0,r.jsx)(n.p,{children:"Starting with Node.js 13.0.0 full-icu is supported by default."}),"\n",(0,r.jsxs)(n.p,{children:["If using React Intl in an earlier version of Node.js, your ",(0,r.jsx)(n.code,{children:"node"})," binary has to either:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Get compiled with ",(0,r.jsx)(n.code,{children:"full-icu"})," using these ",(0,r.jsx)(n.a,{href:"https://nodejs.org/api/intl.html",children:"instructions"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"OR"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Uses ",(0,r.jsxs)(n.a,{href:"https://www.npmjs.com/package/full-icu",children:[(0,r.jsx)(n.code,{children:"full-icu"})," npm package"]})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If your ",(0,r.jsx)(n.code,{children:"node"})," version is missing any of the ",(0,r.jsx)(n.code,{children:"Intl"})," APIs above, you'd have to polyfill them accordingly."]}),"\n",(0,r.jsx)(n.h3,{id:"react-native",children:"React Native"}),"\n",(0,r.jsxs)(n.p,{children:["If you're using ",(0,r.jsx)(n.code,{children:"react-intl"})," in React Native, make sure your runtime has built-in ",(0,r.jsx)(n.code,{children:"Intl"})," support (similar to ",(0,r.jsx)(n.a,{href:"https://github.com/react-native-community/jsc-android-buildscripts#international-variant",children:"JSC International variant"}),"). See these issues for more details:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/formatjs/formatjs/issues/1356",children:"https://github.com/formatjs/formatjs/issues/1356"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/formatjs/formatjs/issues/992",children:"https://github.com/formatjs/formatjs/issues/992"})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"react-native-on-ios",children:"React Native on iOS"}),"\n",(0,r.jsxs)(n.p,{children:["If you cannot use the Intl variant of JSC (e.g on iOS), follow the instructions in ",(0,r.jsx)(n.a,{href:"#runtime-requirements",children:"Runtime Requirements"})," to polyfill those APIs accordingly."]}),"\n",(0,r.jsxs)(n.h2,{id:"the-react-intl-package",children:["The ",(0,r.jsx)(n.code,{children:"react-intl"})," Package"]}),"\n",(0,r.jsxs)(n.p,{children:["Install the ",(0,r.jsxs)(n.a,{href:"https://www.npmjs.com/package/react-intl",children:[(0,r.jsx)(n.code,{children:"react-intl"})," npm package"]})," via npm:"]}),"\n","\n",(0,r.jsxs)(i.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,r.jsx)(a.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"npm i -S react-intl\n"})})}),(0,r.jsx)(a.A,{value:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yarn add react-intl\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"react-intl"})," npm package distributes the following modules (links from ",(0,r.jsx)(n.a,{href:"https://unpkg.com/",children:"unpkg"}),"):"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://unpkg.com/react-intl@latest/index.js",children:(0,r.jsx)(n.strong,{children:"CommonJS"})}),":\nunbundled dependencies, ",(0,r.jsx)(n.code,{children:'"main"'})," in ",(0,r.jsx)(n.code,{children:"package.json"}),", warnings in dev."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://unpkg.com/react-intl@latest/lib/index.js",children:(0,r.jsx)(n.strong,{children:"ES6"})}),":\nunbundled dependencies, ",(0,r.jsx)(n.code,{children:'"module"'})," in ",(0,r.jsx)(n.code,{children:"package.json"}),", warnings in dev."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"module-bundlers",children:"Module Bundlers"}),"\n",(0,r.jsx)(n.p,{children:"We've made React Intl work well with module bundlers like: Browserify, Webpack, or Rollup which can be used to bundle React Intl for the browser:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:'"browser"'})," field in ",(0,r.jsx)(n.code,{children:"package.json"})," is specified so that only basic English locale data is included when bundling. This way when using the ",(0,r.jsx)(n.code,{children:'"main"'})," module in Node all locale data is loaded, but ignored when bundled for the browser."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["An ES6 version of React Intl is provided as ",(0,r.jsx)(n.code,{children:'"jsnext:main"'})," and ",(0,r.jsx)(n.code,{children:'"module"'})," in ",(0,r.jsx)(n.code,{children:"package.json"})," and can be used with Rollup."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Development-time warnings are wrapped with ",(0,r.jsx)(n.code,{children:"process.env.NODE_ENV !== 'production'"}),", this allows you to specify ",(0,r.jsx)(n.code,{children:"NODE_ENV"})," when bundling and minifying to have these code blocks removed."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"the-react-intl-module",children:"The React Intl Module"}),"\n",(0,r.jsx)(n.p,{children:"Whether you use the ES6, CommonJS, or UMD version of React Intl, they all provide the same named exports:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/react-intl/api#injectintl",children:(0,r.jsx)(n.code,{children:"injectIntl"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/react-intl/api#definemessages",children:(0,r.jsx)(n.code,{children:"defineMessages"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/react-intl/components#intlprovider",children:(0,r.jsx)(n.code,{children:"IntlProvider"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/react-intl/components#formatteddate",children:(0,r.jsx)(n.code,{children:"FormattedDate"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/react-intl/components#formattedtime",children:(0,r.jsx)(n.code,{children:"FormattedTime"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/react-intl/components#formattedrelativetime",children:(0,r.jsx)(n.code,{children:"FormattedRelativeTime"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/react-intl/components#formattednumber",children:(0,r.jsx)(n.code,{children:"FormattedNumber"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/react-intl/components#formattedplural",children:(0,r.jsx)(n.code,{children:"FormattedPlural"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/react-intl/components#formattedmessage",children:(0,r.jsx)(n.code,{children:"FormattedMessage"})})}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"react",type:"danger",children:(0,r.jsxs)(n.p,{children:["When using the UMD version of React Intl ",(0,r.jsx)(n.em,{children:"without"})," a module system, it will expect ",(0,r.jsx)(n.code,{children:"react"})," to exist on the global variable: ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"React"})}),", and put the above named exports on the global variable: ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"ReactIntl"})}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"creating-an-i18n-context",children:"Creating an I18n Context"}),"\n",(0,r.jsx)(n.p,{children:"Now with React Intl and its locale data loaded an i18n context can be created for your React app."}),"\n",(0,r.jsxs)(n.p,{children:["React Intl uses the provider pattern to scope an i18n context to a tree of components. This allows configuration like the current locale and set of translated strings/messages to be provided at the root of a component tree and made available to the ",(0,r.jsx)(n.code,{children:"<Formatted*>"})," components. This is the same concept as what Flux frameworks like ",(0,r.jsx)(n.a,{href:"http://redux.js.org/",children:"Redux"})," use to provide access to a store within a component tree."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["All apps using React Intl must use the ",(0,r.jsxs)(n.a,{href:"/docs/react-intl/components#intlprovider",children:[(0,r.jsx)(n.code,{children:"<IntlProvider>"})," component"]}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["The most common usage is to wrap your root React component with ",(0,r.jsx)(n.code,{children:"<IntlProvider>"})," and configure it with the user's current locale and the corresponding translated strings/messages:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"ReactDOM.render(\n  <IntlProvider locale={usersLocale} messages={translationsForUsersLocale}>\n    <App />\n  </IntlProvider>,\n  document.getElementById('container')\n)\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"See:"})," The ",(0,r.jsx)(n.a,{href:"/docs/react-intl/components#intlprovider",children:(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"<IntlProvider>"})," docs"]})})," for more details."]}),"\n",(0,r.jsx)(n.h2,{id:"formatting-data",children:"Formatting Data"}),"\n",(0,r.jsxs)(n.p,{children:["React Intl has two ways to format data, through ",(0,r.jsx)(n.a,{href:"/docs/react-intl/components",children:"React components"})," and its ",(0,r.jsx)(n.a,{href:"/docs/react-intl/api",children:"API"}),". The components provide an idiomatic-React way of integrating internationalization into a React app, and the ",(0,r.jsx)(n.code,{children:"<Formatted*>"})," components have ",(0,r.jsx)(n.a,{href:"/docs/react-intl/components#why-components",children:"benefits"})," over always using the imperative API directly. The API should be used when your React component needs to format data to a string value where a React element is not suitable; e.g., a ",(0,r.jsx)(n.code,{children:"title"})," or ",(0,r.jsx)(n.code,{children:"aria"})," attribute, or for side-effect in ",(0,r.jsx)(n.code,{children:"componentDidMount"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["React Intl's imperative API is accessed via ",(0,r.jsx)(n.a,{href:"/docs/react-intl/api#injectintl",children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"injectIntl"})})}),", a High-Order Component (HOC) factory. It will wrap the passed-in React component with another React component which provides the imperative formatting API into the wrapped component via its ",(0,r.jsx)(n.code,{children:"props"}),". (This is similar to the connect-to-stores pattern found in many Flux implementations.)"]}),"\n",(0,r.jsxs)(n.p,{children:["Here's an example using ",(0,r.jsx)(n.code,{children:"<IntlProvider>"}),", ",(0,r.jsx)(n.code,{children:"<Formatted*>"})," components, and the imperative API to setup an i18n context and format data:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport {IntlProvider, FormattedRelative, useIntl} from 'react-intl';\n\nconst MS_IN_DAY = 1e3 * 3600 * 24\n\nconst PostDate = ({date}) => {\n  const intl = useIntl()\n  return (\n    <span title={intl.formatDate(date)}>\n      <FormattedRelativeTime value={(Date.now() - date)/MS_IN_DAY} unit=\"day\"/>\n    </span>\n  )\n});\n\nconst App = ({post}) => (\n  <div>\n    <h1>{post.title}</h1>\n    <p>\n      <PostDate date={post.date} />\n    </p>\n    <div>{post.body}</div>\n  </div>\n);\n\nReactDOM.render(\n  <IntlProvider locale={navigator.language}>\n    <App\n      post={{\n        title: 'Hello, World!',\n        date: new Date(1459913574887),\n        body: 'Amazing content.',\n      }}\n    />\n  </IntlProvider>,\n  document.getElementById('container')\n);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Assuming ",(0,r.jsx)(n.code,{children:"navigator.language"})," is ",(0,r.jsx)(n.code,{children:'"en-us"'}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<div>\n  <h1>Hello, World!</h1>\n  <p><span title="4/5/2016">yesterday</span></p>\n  <div>Amazing content.</div>\n</div>\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"See:"})," The ",(0,r.jsx)(n.a,{href:"/docs/react-intl/api",children:(0,r.jsx)(n.strong,{children:"API docs"})})," and ",(0,r.jsx)(n.a,{href:"/docs/react-intl/components",children:(0,r.jsx)(n.strong,{children:"Component docs"})})," for more details."]}),"\n",(0,r.jsx)(n.h1,{id:"esm-build",children:"ESM Build"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"react-intl"})," and its underlying libraries (",(0,r.jsx)(n.code,{children:"@formatjs/icu-messageformat-parser"}),", ",(0,r.jsx)(n.code,{children:"intl-messageformat"}),", ",(0,r.jsx)(n.code,{children:"@formatjs/intl-relativetimeformat"}),") export ESM artifacts. This means you should configure your build toolchain to transpile those libraries."]}),"\n",(0,r.jsx)(n.h3,{id:"jest",children:"Jest"}),"\n",(0,r.jsxs)(n.p,{children:["Add ",(0,r.jsx)(n.code,{children:"transformIgnorePatterns"})," to always include those libraries, e.g:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"{\n  transformIgnorePatterns: [\n    '/node_modules/(?!intl-messageformat|@formatjs/icu-messageformat-parser).+\\\\.js$',\n  ],\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"webpack",children:"webpack"}),"\n",(0,r.jsxs)(n.p,{children:["If you're using ",(0,r.jsx)(n.code,{children:"babel-loader"}),", or ",(0,r.jsx)(n.code,{children:"ts-loader"}),", you can do 1 of the following:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Add those libraries in ",(0,r.jsx)(n.code,{children:"include"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"{\n  include: [\n    path.join(__dirname, 'node_modules/react-intl'),\n    path.join(__dirname, 'node_modules/intl-messageformat'),\n    path.join(__dirname, 'node_modules/@formatjs/icu-messageformat-parser'),\n  ]\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"OR"}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Add those libraries in ",(0,r.jsx)(n.code,{children:"exclude"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"exclude: /node_modules\\/(?!react-intl|intl-messageformat|@formatjs\\/icu-messageformat-parser)/,\n"})}),"\n",(0,r.jsx)(n.h1,{id:"core-concepts",children:"Core Concepts"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Formatters (Date, Number, Message, Relative)"}),"\n",(0,r.jsx)(n.li,{children:"Provider and Injector"}),"\n",(0,r.jsx)(n.li,{children:"API and Components"}),"\n",(0,r.jsx)(n.li,{children:"Message Descriptor"}),"\n",(0,r.jsx)(n.li,{children:"Message Syntax"}),"\n",(0,r.jsx)(n.li,{children:"Defining default messages for extraction"}),"\n",(0,r.jsx)(n.li,{children:"Custom, named formats"}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"example-apps",children:"Example Apps"}),"\n",(0,r.jsxs)(n.p,{children:["There are several ",(0,r.jsx)(n.a,{href:"https://github.com/formatjs/formatjs/tree/master/packages/react-intl/examples",children:(0,r.jsx)(n.strong,{children:"runnable example apps"})})," in this Git repo. These are a great way to see React Intl's ",(0,r.jsx)(n.a,{href:"#core-concepts",children:"core concepts"})," in action in simplified applications."]}),"\n",(0,r.jsx)(n.h1,{id:"api-reference",children:"API Reference"}),"\n",(0,r.jsxs)(n.p,{children:["There are a few API layers that React Intl provides and is built on. When using React Intl you'll be interacting with ",(0,r.jsx)(n.code,{children:"Intl"})," built-ins, React Intl's API, and its React components:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl",children:"ECMAScript Internationalization API"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/react-intl/api",children:"React Intl API"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/react-intl/components",children:"React Intl Components"})}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"typescript-usage",children:"TypeScript Usage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"react-intl"})," is written in TypeScript, thus having 1st-class TS support."]}),"\n",(0,r.jsxs)(n.p,{children:["In order to use ",(0,r.jsx)(n.code,{children:"react-intl"})," in TypeScript, make sure your ",(0,r.jsx)(n.code,{children:"compilerOptions"}),"'s ",(0,r.jsx)(n.code,{children:"lib"})," config include ",(0,r.jsx)(n.code,{children:'["esnext.intl", "es2017.intl", "es2018.intl"]'}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"typing-message-ids-and-locale",children:"Typing message IDs and locale"}),"\n",(0,r.jsxs)(n.p,{children:["By default, the type for the ",(0,r.jsx)(n.code,{children:"id"})," prop of ",(0,r.jsx)(n.code,{children:"<FormattedMessage>"})," and ",(0,r.jsx)(n.code,{children:"formatMessage"})," is ",(0,r.jsx)(n.code,{children:"string"}),". However, you can set a more restrictive type to get autocomplete and error checking. In order to do this, override the following global namespace with the union type of all of your message IDs. You can do this by including the following somewhere in your code:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"declare global {\n  namespace FormatjsIntl {\n    interface Message {\n      ids: keyof typeof messages\n    }\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"messages"})," is the object you would normally pass to ",(0,r.jsx)(n.code,{children:"<IntlProvider>"}),", and would look something like:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const messages = {\n  greeting: 'Hello',\n  planet: 'World',\n  // ...\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can also override the following global to use a custom type for locale"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"declare global {\n  namespace FormatjsIntl {\n    interface IntlConfig {\n      locale: 'en' | 'fr'\n    }\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h1,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,r.jsxs)(n.p,{children:["Our ",(0,r.jsx)(n.a,{href:"/docs/guides/advanced-usage",children:"Advanced Usage"})," has further guides for production setup in environments where performance is important."]}),"\n",(0,r.jsx)(n.h1,{id:"supported-tooling",children:"Supported Tooling"}),"\n",(0,r.jsx)(n.h2,{id:"message-extraction",children:"Message extraction"}),"\n",(0,r.jsxs)(n.p,{children:["We've built ",(0,r.jsx)(n.a,{href:"/docs/tooling/cli",children:"@formatjs/cli"})," that helps you extract messages from a list of files. It uses ",(0,r.jsx)(n.a,{href:"/docs/tooling/babel-plugin",children:"babel-plugin-formatjs"})," under the hood and should be able to extract messages if you're declaring using 1 of the mechanisms below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import {defineMessages} from 'react-intl'\n\ndefineMessages({\n  foo: {\n    id: 'foo',\n    defaultMessage: 'foo',\n    description: 'bar',\n  },\n})\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import {FormattedMessage} from \'react-intl\'\n;<FormattedMessage id="foo" defaultMessage="foo" description="bar" />\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function Comp(props) {\n  const {intl} = props\n  return intl.formatMessage({\n    // The whole `intl.formatMessage` is required so we can extract\n    id: 'foo',\n    defaultMessage: 'foo',\n    description: 'bar',\n  })\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"eslint-plugin",children:"ESLint Plugin"}),"\n",(0,r.jsxs)(n.p,{children:["We've also built ",(0,r.jsx)(n.a,{href:"/docs/tooling/linter",children:"eslint-plugin-formatjs"})," that helps enforcing specific rules on your messages if your translation vendor has restrictions."]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},4083:(e,n,t)=>{t.d(n,{A:()=>i});t(7378);var s=t(3372);const r={tabItem:"tabItem_GNoz"};var l=t(6106);function i(e){let{children:n,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:t,children:n})}},288:(e,n,t)=>{t.d(n,{A:()=>I});var s=t(7378),r=t(3372),l=t(229),i=t(1654),a=t(8890),o=t(7710),c=t(6940),d=t(9834);function h(e){var n,t;return null!=(n=null==(t=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,o.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}),[l,r])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=u(e),[i,o]=(0,s.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const r=null!=(n=s.find((e=>e.default)))?n:s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,h]=m({queryString:t,groupId:r}),[j,x]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[r,l]=(0,d.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),f=(()=>{const e=null!=c?c:j;return p({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);o(e),h(e),x(e)}),[h,x,l]),tabValues:l}}var x=t(1682);const f={tabList:"tabList_DGQs",tabItem:"tabItem_k9HR"};var g=t(6106);function v(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),r=a[t].value;r!==s&&(c(n),i(r))},h=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var s;const n=o.indexOf(e.currentTarget)+1;t=null!=(s=o[n])?s:o[0];break}case"ArrowLeft":{var r;const n=o.indexOf(e.currentTarget)-1;t=null!=(r=o[n])?r:o[o.length-1];break}}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{o.push(e)},onKeyDown:h,onClick:d},l,{className:(0,r.A)("tabs__item",f.tabItem,null==l?void 0:l.className,{"tabs__item--active":s===n}),children:null!=t?t:n}),n)}))})}function b(e){let{lazy:n,children:t,selectedValue:l}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===l));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=j(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,g.jsx)(v,Object.assign({},n,e)),(0,g.jsx)(b,Object.assign({},n,e))]})}function I(e){const n=(0,x.default)();return(0,g.jsx)(y,Object.assign({},e,{children:h(e.children)}),String(n))}},972:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(7378);const r={},l=s.createContext(r);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);
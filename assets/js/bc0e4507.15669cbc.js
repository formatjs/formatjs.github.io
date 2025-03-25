"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8477],{1194:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>t,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"guides/advanced-usage","title":"Advanced Usage","description":"react-intl is optimized for both runtime & compile time rendering. Below are a few guidelines you can follow if you have a strict performance budget.","source":"@site/docs/guides/advanced-usage.md","sourceDirName":"guides","slug":"/guides/advanced-usage","permalink":"/docs/guides/advanced-usage","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/guides/advanced-usage.md","tags":[],"version":"current","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1742905718000,"frontMatter":{"id":"advanced-usage","title":"Advanced Usage"},"sidebar":"docs","previous":{"title":"Runtime Requirements","permalink":"/docs/guides/runtime-requirements"},"next":{"title":"Basic Internationalization Principles","permalink":"/docs/core-concepts/basic-internationalization-principles"}}');var a=n(6106),r=n(7389);const t={id:"advanced-usage",title:"Advanced Usage"},o=void 0,c={},l=[{value:"Pre-compiling messages",id:"pre-compiling-messages",level:2},{value:"<code>react-intl</code> without parser (40% smaller)",id:"react-intl-without-parser-40-smaller",level:2},{value:"webpack.config.js",id:"webpackconfigjs",level:3},{value:"rollup.config.js",id:"rollupconfigjs",level:3},{value:"Imperative APIs",id:"imperative-apis",level:2},{value:"More examples",id:"more-examples",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"react-intl"})," is optimized for both runtime & compile time rendering. Below are a few guidelines you can follow if you have a strict performance budget."]}),"\n",(0,a.jsx)(s.h2,{id:"pre-compiling-messages",children:"Pre-compiling messages"}),"\n",(0,a.jsxs)(s.p,{children:["You can also pre-compile all messages into ",(0,a.jsx)(s.code,{children:"AST"})," using ",(0,a.jsx)(s.a,{href:"/docs/tooling/cli",children:(0,a.jsx)(s.code,{children:"@formatjs/cli"})})," ",(0,a.jsx)(s.code,{children:"compile"})," command and pass that into ",(0,a.jsx)(s.code,{children:"IntlProvider"}),". This is especially faster since it saves us time parsing ",(0,a.jsx)(s.code,{children:"string"})," into ",(0,a.jsx)(s.code,{children:"AST"}),". The use cases for this support are:"]}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"Server-side rendering or pre-compiling where you can cache the AST and don't have to pay compilation costs multiple time."}),"\n",(0,a.jsx)(s.li,{children:"Desktop apps using Electron or CEF where you can preload/precompile things in advanced before runtime."}),"\n"]}),"\n",(0,a.jsx)(s.admonition,{title:"Caching",type:"caution",children:(0,a.jsxs)(s.p,{children:["Since this approach uses ",(0,a.jsx)(s.code,{children:"AST"})," as the data source, changes to ",(0,a.jsx)(s.code,{children:"@formatjs/icu-messageformat-parser"}),"'s ",(0,a.jsx)(s.code,{children:"AST"})," will require cache invalidation."]})}),"\n",(0,a.jsx)(s.admonition,{title:"Asset Size",type:"caution",children:(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"AST"})," is also slightly larger in size than regular ",(0,a.jsx)(s.code,{children:"string"})," messages but can be efficiently compressed."]})}),"\n",(0,a.jsxs)(s.h2,{id:"react-intl-without-parser-40-smaller",children:[(0,a.jsx)(s.code,{children:"react-intl"})," without parser (40% smaller)"]}),"\n",(0,a.jsxs)(s.p,{children:["If you've made sure all your messages & ",(0,a.jsx)(s.code,{children:"defaultMessage"}),"s are precompiled as above, you can resolve ",(0,a.jsx)(s.code,{children:"@formatjs/icu-messageformat-parser"})," to ",(0,a.jsx)(s.code,{children:"@formatjs/icu-messageformat-parser/no-parser"})," during bundling to get a much smaller bundler (~40% less). For example:"]}),"\n",(0,a.jsx)(s.h3,{id:"webpackconfigjs",children:"webpack.config.js"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",children:"module.exports = {\n  //...\n  resolve: {\n    alias: {\n      '@formatjs/icu-messageformat-parser':\n        '@formatjs/icu-messageformat-parser/no-parser',\n    },\n  },\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"rollupconfigjs",children:"rollup.config.js"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",children:"import alias from '@rollup/plugin-alias'\n\nmodule.exports = {\n  //...\n  plugins: [\n    alias({\n      entries: {\n        '@formatjs/icu-messageformat-parser':\n          '@formatjs/icu-messageformat-parser/no-parser',\n      },\n    }),\n  ],\n}\n"})}),"\n",(0,a.jsx)(s.p,{children:"In the future, we'll gear towards making this the default behavior."}),"\n",(0,a.jsx)(s.h2,{id:"imperative-apis",children:"Imperative APIs"}),"\n",(0,a.jsxs)(s.p,{children:["Imperative APIs (e.g ",(0,a.jsx)(s.code,{children:"formatMessage"}),"...) are generally faster than ",(0,a.jsx)(s.code,{children:"Formatted"})," component since it does not create extra ",(0,a.jsx)(s.code,{children:"ReactElement"})," nodes. They should have the exact same capabilities as ",(0,a.jsx)(s.code,{children:"Formatted"})," components."]}),"\n",(0,a.jsx)(s.h2,{id:"more-examples",children:"More examples"}),"\n",(0,a.jsxs)(s.p,{children:["Head over to ",(0,a.jsx)(s.a,{href:"https://github.com/formatjs/formatjs/tree/main/packages/react-intl/examples",children:"https://github.com/formatjs/formatjs/tree/main/packages/react-intl/examples"})," for more examples on how to use our libraries."]})]})}function m(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},7389:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>o});var i=n(7378);const a={},r=i.createContext(a);function t(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);
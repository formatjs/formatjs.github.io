(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(124)),o={id:"advanced-usage",title:"Advanced Usage"},s={unversionedId:"guides/advanced-usage",id:"guides/advanced-usage",isDocsHomePage:!1,title:"Advanced Usage",description:"react-intl is optimized for both runtime & compile time rendering. Below are a few guidelines you can follow if you have a strict performance budget.",source:"@site/docs/guides/advanced-usage.md",slug:"/guides/advanced-usage",permalink:"/docs/guides/advanced-usage",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/guides/advanced-usage.md",version:"current",sidebar:"docs",previous:{title:"Runtime Requirements",permalink:"/docs/guides/runtime-requirements"},next:{title:"Basic Internationalization Principles",permalink:"/docs/core-concepts/basic-internationalization-principles"}},c=[{value:"Pre-compiling messages",id:"pre-compiling-messages",children:[]},{value:"<code>react-intl</code> without parser (40% smaller)",id:"react-intl-without-parser-40-smaller",children:[{value:"webpack.config.js",id:"webpackconfigjs",children:[]},{value:"rollup.config.js",id:"rollupconfigjs",children:[]}]},{value:"Imperative APIs",id:"imperative-apis",children:[]},{value:"More examples",id:"more-examples",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"react-intl")," is optimized for both runtime & compile time rendering. Below are a few guidelines you can follow if you have a strict performance budget."),Object(i.b)("h2",{id:"pre-compiling-messages"},"Pre-compiling messages"),Object(i.b)("p",null,"You can also pre-compile all messages into ",Object(i.b)("inlineCode",{parentName:"p"},"AST")," using ",Object(i.b)("a",{parentName:"p",href:"/docs/tooling/cli"},Object(i.b)("inlineCode",{parentName:"a"},"@formatjs/cli"))," ",Object(i.b)("inlineCode",{parentName:"p"},"compile")," command and pass that into ",Object(i.b)("inlineCode",{parentName:"p"},"IntlProvider"),". This is especially faster since it saves us time parsing ",Object(i.b)("inlineCode",{parentName:"p"},"string")," into ",Object(i.b)("inlineCode",{parentName:"p"},"AST"),". The use cases for this support are:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Server-side rendering or pre-compiling where you can cache the AST and don't have to pay compilation costs multiple time."),Object(i.b)("li",{parentName:"ol"},"Desktop apps using Electron or CEF where you can preload/precompile things in advanced before runtime.")),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Caching")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Since this approach uses ",Object(i.b)("inlineCode",{parentName:"p"},"AST")," as the data source, changes to ",Object(i.b)("inlineCode",{parentName:"p"},"intl-messageformat-parser"),"'s ",Object(i.b)("inlineCode",{parentName:"p"},"AST")," will require cache invalidation."))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Asset Size")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"AST")," is also slightly larger in size than regular ",Object(i.b)("inlineCode",{parentName:"p"},"string")," messages but can be efficiently compressed."))),Object(i.b)("h2",{id:"react-intl-without-parser-40-smaller"},Object(i.b)("inlineCode",{parentName:"h2"},"react-intl")," without parser (40% smaller)"),Object(i.b)("p",null,"If you've made sure all your messages & ",Object(i.b)("inlineCode",{parentName:"p"},"defaultMessage"),"s are precompiled as above, you can resolve ",Object(i.b)("inlineCode",{parentName:"p"},"intl-messageformat-parser")," to ",Object(i.b)("inlineCode",{parentName:"p"},"intl-messageformat-parser/no-parser")," during bundling to get a much smaller bundler (~40% less). For example:"),Object(i.b)("h3",{id:"webpackconfigjs"},"webpack.config.js"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  //...\n  resolve: {\n    alias: {\n      'intl-messageformat-parser': 'intl-messageformatp-parser/no-parser',\n    },\n  },\n}\n")),Object(i.b)("h3",{id:"rollupconfigjs"},"rollup.config.js"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import alias from '@rollup/plugin-alias'\n\nmodule.exports = {\n  //...\n  plugins: [\n    alias({\n      entries: {\n        'intl-messageformat-parser': 'intl-messageformatp-parser/no-parser',\n      },\n    }),\n  ],\n}\n")),Object(i.b)("p",null,"In the future, we'll gear towards making this the default behavior."),Object(i.b)("h2",{id:"imperative-apis"},"Imperative APIs"),Object(i.b)("p",null,"Imperative APIs (e.g ",Object(i.b)("inlineCode",{parentName:"p"},"formatMessage"),"...) are generally faster than ",Object(i.b)("inlineCode",{parentName:"p"},"Formatted")," component since it does not create extra ",Object(i.b)("inlineCode",{parentName:"p"},"ReactElement")," nodes. They should have the exact same capabilities as ",Object(i.b)("inlineCode",{parentName:"p"},"Formatted")," components."),Object(i.b)("h2",{id:"more-examples"},"More examples"),Object(i.b)("p",null,"Head over to ",Object(i.b)("a",{parentName:"p",href:"https://github.com/formatjs/formatjs/tree/main/packages/react-intl/examples"},"https://github.com/formatjs/formatjs/tree/main/packages/react-intl/examples")," for more examples on how to use our libraries."))}p.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),b=a,u=m["".concat(o,".").concat(b)]||m[b]||d[b]||i;return n?r.a.createElement(u,s(s({ref:t},l),{},{components:n})):r.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
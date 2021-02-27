(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{102:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a(3),s=a(7),r=(a(38),a(124)),i={id:"message-declaration",title:"Message Declaration"},o={unversionedId:"getting-started/message-declaration",id:"getting-started/message-declaration",isDocsHomePage:!1,title:"Message Declaration",description:"While you can declare your messages using only ids, we highly recommend declaring defaultMessages inline along with their usages because of the following reasons:",source:"@site/docs/getting-started/message-declaration.md",slug:"/getting-started/message-declaration",permalink:"/docs/getting-started/message-declaration",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/getting-started/message-declaration.md",version:"current",sidebar:"docs",previous:{title:"Application Workflow",permalink:"/docs/getting-started/application-workflow"},next:{title:"Message Extraction",permalink:"/docs/getting-started/message-extraction"}},c=[{value:"Using imperative API <code>intl.formatMessage</code>",id:"using-imperative-api-intlformatmessage",children:[]},{value:"Using React API <code>&lt;FormattedMessage/&gt;</code>",id:"using-react-api-formattedmessage",children:[]},{value:"Using Vue API &amp; template methods such as <code>$formatMessage</code>",id:"using-vue-api--template-methods-such-as-formatmessage",children:[]},{value:"Pre-declaring using <code>defineMessage</code> for later consumption (less recommended)",id:"pre-declaring-using-definemessage-for-later-consumption-less-recommended",children:[]}],l={toc:c};function m(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"While you can declare your messages using only ",Object(r.b)("inlineCode",{parentName:"p"},"id"),"s, we highly recommend declaring ",Object(r.b)("inlineCode",{parentName:"p"},"defaultMessage"),"s inline along with their usages because of the following reasons:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Messages colocated with their usages become self-managed, as their usages change/removed, so are the messages."),Object(r.b)("li",{parentName:"ol"},"Messages are highly contextual. We've seen a lot of cases where developers assume a certain grammar when they write their messages. Buttons/Call-To-Actions and labels are also translated differently."),Object(r.b)("li",{parentName:"ol"},"Text styling is also dependent on the message itself. Things like truncation, capitalization... certainly affect the messages themselves."),Object(r.b)("li",{parentName:"ol"},"Better integrations with toolchains. Most toolchains cannot verify cross-file references to validate syntax/usage.")),Object(r.b)("p",null,"At a high level, formatjs messages use ",Object(r.b)("a",{parentName:"p",href:"/docs/core-concepts/icu-syntax"},"ICU Syntax")," with a couple of enhancements common in other message format such as ",Object(r.b)("a",{parentName:"p",href:"https://github.com/projectfluent/fluent.js/"},"Fluent"),". This section focuses on the actual supported ways of calling ",Object(r.b)("inlineCode",{parentName:"p"},"formatjs")," APIs so messages can be extracted."),Object(r.b)("h2",{id:"using-imperative-api-intlformatmessage"},"Using imperative API ",Object(r.b)("inlineCode",{parentName:"h2"},"intl.formatMessage")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"// Method must be exactly `intl.formatMessage`\nintl.formatMessage(\n  {\n    description: 'A message', // Description should be a string literal\n    defaultMessage: 'My name is {name}', // Message should be a string literal\n  },\n  {\n    name: userName,\n  } // Values should be an object literal, but not necessarily every value inside\n)\n")),Object(r.b)("h2",{id:"using-react-api-formattedmessage"},"Using React API ",Object(r.b)("inlineCode",{parentName:"h2"},"<FormattedMessage/>")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},'import {FormattedMessage} from \'react-intl\'\n;<FormattedMessage\n  description="A message" // Description should be a string literal\n  defaultMessage="My name is {name}" // Message should be a string literal\n  values={\n    {\n      name: userName,\n    } // Values should be an object literal, but not necessarily every value inside\n  }\n/>\n')),Object(r.b)("h2",{id:"using-vue-api--template-methods-such-as-formatmessage"},"Using Vue API & template methods such as ",Object(r.b)("inlineCode",{parentName:"h2"},"$formatMessage")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-vue"},"<template>\n  <p>{{ $formatNumber(3, {style: 'currency', currency: 'USD'}) }}</p>\n</template>\n")),Object(r.b)("h2",{id:"pre-declaring-using-definemessage-for-later-consumption-less-recommended"},"Pre-declaring using ",Object(r.b)("inlineCode",{parentName:"h2"},"defineMessage")," for later consumption (less recommended)"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"import {defineMessage} from 'react-intl'\nconst message = defineMessage({\n  description: 'A message', // Description should be a string literal\n  defaultMessage: 'My name is {name}', // Message should be a string literal\n})\n\nintl.formatMessage(message, {name: 'John'}) // My name is John\n\n<FormattedMessage\n  {...message}\n  values={{\n    name: 'John',\n  }}\n/> // My name is John\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"We rely on AST to extract messages from the codebase, so make sure you call ",Object(r.b)("inlineCode",{parentName:"p"},"intl.formatMessage()"),", use our builtin React components, use our Vue methods or configure ",Object(r.b)("a",{parentName:"p",href:"/docs/tooling/cli#--additional-function-names-comma-separated-names"},Object(r.b)("inlineCode",{parentName:"a"},"additionalFunctionNames")),"/",Object(r.b)("a",{parentName:"p",href:"/docs/tooling/cli#--additional-component-names-comma-separated-names"},Object(r.b)("inlineCode",{parentName:"a"},"additionalComponentNames"))," properly."))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You can declare a message without immediately formatting it with ",Object(r.b)("inlineCode",{parentName:"p"},"defineMessage")," and our extractor would still be able to extract it. However, our ",Object(r.b)("a",{parentName:"p",href:"/docs/tooling/linter#enforce-placeholders"},"enforce-placeholders")," linter rule won't be able to analyze it."))))}m.isMDXComponent=!0},124:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return g}));var n=a(38),s=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=s.a.createContext({}),m=function(e){var t=s.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=m(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},u=s.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=m(a),u=n,g=d["".concat(i,".").concat(u)]||d[u]||p[u]||r;return a?s.a.createElement(g,o(o({ref:t},l),{},{components:a})):s.a.createElement(g,o({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<r;l++)i[l]=a[l];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);
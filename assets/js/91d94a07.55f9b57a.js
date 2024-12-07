"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74],{8314:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"getting-started/message-declaration","title":"Message Declaration","description":"While you can declare your messages using only ids, we highly recommend declaring defaultMessages inline along with their usages because of the following reasons:","source":"@site/docs/getting-started/message-declaration.md","sourceDirName":"getting-started","slug":"/getting-started/message-declaration","permalink":"/docs/getting-started/message-declaration","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/getting-started/message-declaration.md","tags":[],"version":"current","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1733589515000,"frontMatter":{"id":"message-declaration","title":"Message Declaration"},"sidebar":"docs","previous":{"title":"Application Workflow","permalink":"/docs/getting-started/application-workflow"},"next":{"title":"Message Extraction","permalink":"/docs/getting-started/message-extraction"}}');var a=n(7557),i=n(2887);const o={id:"message-declaration",title:"Message Declaration"},r=void 0,l={},c=[{value:"Using imperative API <code>intl.formatMessage</code>",id:"using-imperative-api-intlformatmessage",level:2},{value:"Using React API <code>&lt;FormattedMessage/&gt;</code>",id:"using-react-api-formattedmessage",level:2},{value:"Using Vue API &amp; template methods such as <code>$formatMessage</code>",id:"using-vue-api--template-methods-such-as-formatmessage",level:2},{value:"Pre-declaring using <code>defineMessage</code> for later consumption (less recommended)",id:"pre-declaring-using-definemessage-for-later-consumption-less-recommended",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["While you can declare your messages using only ",(0,a.jsx)(s.code,{children:"id"}),"s, we highly recommend declaring ",(0,a.jsx)(s.code,{children:"defaultMessage"}),"s inline along with their usages because of the following reasons:"]}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"Messages colocated with their usages become self-managed, as their usages change/removed, so are the messages."}),"\n",(0,a.jsx)(s.li,{children:"Messages are highly contextual. We've seen a lot of cases where developers assume a certain grammar when they write their messages. Buttons/Call-To-Actions and labels are also translated differently."}),"\n",(0,a.jsx)(s.li,{children:"Text styling is also dependent on the message itself. Things like truncation, capitalization... certainly affect the messages themselves."}),"\n",(0,a.jsx)(s.li,{children:"Better integrations with toolchains. Most toolchains cannot verify cross-file references to validate syntax/usage."}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["At a high level, formatjs messages use ",(0,a.jsx)(s.a,{href:"/docs/core-concepts/icu-syntax",children:"ICU Syntax"})," with a couple of enhancements common in other message format such as ",(0,a.jsx)(s.a,{href:"https://github.com/projectfluent/fluent.js/",children:"Fluent"}),". This section focuses on the actual supported ways of calling ",(0,a.jsx)(s.code,{children:"formatjs"})," APIs so messages can be extracted."]}),"\n",(0,a.jsxs)(s.h2,{id:"using-imperative-api-intlformatmessage",children:["Using imperative API ",(0,a.jsx)(s.code,{children:"intl.formatMessage"})]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-tsx",children:"// Method must be exactly `intl.formatMessage`\nintl.formatMessage(\n  {\n    description: 'A message', // Description should be a string literal\n    defaultMessage: 'My name is {name}', // Message should be a string literal\n  },\n  {\n    name: userName,\n  } // Values should be an object literal, but not necessarily every value inside\n)\n"})}),"\n",(0,a.jsxs)(s.h2,{id:"using-react-api-formattedmessage",children:["Using React API ",(0,a.jsx)(s.code,{children:"<FormattedMessage/>"})]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-tsx",children:'import {FormattedMessage} from \'react-intl\'\n;<FormattedMessage\n  description="A message" // Description should be a string literal\n  defaultMessage="My name is {name}" // Message should be a string literal\n  values={\n    {\n      name: userName,\n    } // Values should be an object literal, but not necessarily every value inside\n  }\n/>\n'})}),"\n",(0,a.jsxs)(s.h2,{id:"using-vue-api--template-methods-such-as-formatmessage",children:["Using Vue API & template methods such as ",(0,a.jsx)(s.code,{children:"$formatMessage"})]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-vue",children:"<template>\n  <p>{{ $formatNumber(3, {style: 'currency', currency: 'USD'}) }}</p>\n</template>\n"})}),"\n",(0,a.jsxs)(s.h2,{id:"pre-declaring-using-definemessage-for-later-consumption-less-recommended",children:["Pre-declaring using ",(0,a.jsx)(s.code,{children:"defineMessage"})," for later consumption (less recommended)"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-tsx",children:"import {defineMessage} from 'react-intl'\nconst message = defineMessage({\n  description: 'A message', // Description should be a string literal\n  defaultMessage: 'My name is {name}', // Message should be a string literal\n})\n\nintl.formatMessage(message, {name: 'John'}) // My name is John\n\n<FormattedMessage\n  {...message}\n  values={{\n    name: 'John',\n  }}\n/> // My name is John\n"})}),"\n",(0,a.jsx)(s.admonition,{type:"caution",children:(0,a.jsxs)(s.p,{children:["We rely on AST to extract messages from the codebase, so make sure you call ",(0,a.jsx)(s.code,{children:"intl.formatMessage()"}),", use our builtin React components, use our Vue methods or configure ",(0,a.jsx)(s.code,{children:"--additionalFunctionNames"}),"/",(0,a.jsx)(s.code,{children:"--additionalComponentNames"})," in our ",(0,a.jsx)(s.a,{href:"/docs/tooling/cli",children:"CLI"})," properly."]})}),"\n",(0,a.jsx)(s.admonition,{type:"caution",children:(0,a.jsxs)(s.p,{children:["You can declare a message without immediately formatting it with ",(0,a.jsx)(s.code,{children:"defineMessage"})," and our extractor would still be able to extract it. However, our ",(0,a.jsx)(s.a,{href:"/docs/tooling/linter#enforce-placeholders",children:"enforce-placeholders"})," linter rule won't be able to analyze it."]})})]})}function m(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},2887:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>r});var t=n(8225);const a={},i=t.createContext(a);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);
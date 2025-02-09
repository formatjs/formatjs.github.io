"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[125],{5985:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"react-intl/upgrade-guide-5x","title":"Upgrade Guide (v4 -> v5)","description":"Breaking API Changes","source":"@site/docs/react-intl/upgrade-guide-5.x.md","sourceDirName":"react-intl","slug":"/react-intl/upgrade-guide-5x","permalink":"/docs/react-intl/upgrade-guide-5x","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/react-intl/upgrade-guide-5.x.md","tags":[],"version":"current","lastUpdatedBy":"Long Ho","lastUpdatedAt":1739081707000,"frontMatter":{"id":"upgrade-guide-5x","title":"Upgrade Guide (v4 -> v5)"},"sidebar":"api","previous":{"title":"Imperative API","permalink":"/docs/react-intl/api"},"next":{"title":"Upgrade Guide (v3 -> v4)","permalink":"/docs/react-intl/upgrade-guide-4x"}}');var a=t(6106),i=t(972);const r={id:"upgrade-guide-5x",title:"Upgrade Guide (v4 -> v5)"},c=void 0,o={},d=[{value:"Breaking API Changes",id:"breaking-api-changes",level:2},{value:"Why are we doing those changes?",id:"why-are-we-doing-those-changes",level:2},{value:"Rich text formatting callback function is no longer variadic",id:"rich-text-formatting-callback-function-is-no-longer-variadic",level:3},{value:"<code>FormattedMessage</code> render prop is no longer variadic",id:"formattedmessage-render-prop-is-no-longer-variadic",level:3},{value:"Using <code>FormattedMessage</code> without a <code>intl</code> context will fail fast",id:"using-formattedmessage-without-a-intl-context-will-fail-fast",level:3}];function l(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"breaking-api-changes",children:"Breaking API Changes"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Rich text formatting callback function is no longer variadic."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Before:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"new IntlMessageFormat('a<b>strong</b>').format({\n  b: (...chunks) => <strong>{chunks}</strong>,\n})\n"})}),"\n",(0,a.jsx)(n.p,{children:"After:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"new IntlMessageFormat('a<b>strong</b>').format({\n  b: chunks => <strong>{chunks}</strong>,\n})\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"FormattedMessage"})," render prop is no longer variadic."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Before:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'<FormattedMessage defaultMessage="a<b>strong</b>">\n  {(...chunks) => <b>{chunks}</b>}\n</FormattedMessage>\n'})}),"\n",(0,a.jsx)(n.p,{children:"After:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'<FormattedMessage defaultMessage="a<b>strong</b>">\n  {chunks => <b>{chunks}</b>}\n</FormattedMessage>\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Using ",(0,a.jsx)(n.code,{children:"FormattedMessage"})," without a ",(0,a.jsx)(n.code,{children:"intl"})," context will fail fast."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"why-are-we-doing-those-changes",children:"Why are we doing those changes?"}),"\n",(0,a.jsx)(n.h3,{id:"rich-text-formatting-callback-function-is-no-longer-variadic",children:"Rich text formatting callback function is no longer variadic"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"We received feedback from the community that variadic callback function isn't really ergonomic."}),"\n",(0,a.jsxs)(n.li,{children:["There's also an issue where React ",(0,a.jsx)(n.code,{children:"chunks"})," do not come with keys, thus causing warning in React during development."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"chunks"})," by themselves are not enough to render duplicate tags, such as ",(0,a.jsx)(n.code,{children:"<a>link</a> and another <a>link</a>"})," where you want to render 2 different ",(0,a.jsx)(n.code,{children:"href"}),"s for the ",(0,a.jsx)(n.code,{children:"<a>"})," tag. In this case ",(0,a.jsx)(n.code,{children:"a: chunks => <a>{chunks}</a>"})," isn't enough especially when the contents are the same. In the future we can set another argument that might contain metadata to distinguish between the 2 elements."]}),"\n"]}),"\n",(0,a.jsxs)(n.h3,{id:"formattedmessage-render-prop-is-no-longer-variadic",children:[(0,a.jsx)(n.code,{children:"FormattedMessage"})," render prop is no longer variadic"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Same reasons as above."}),"\n"]}),"\n",(0,a.jsxs)(n.h3,{id:"using-formattedmessage-without-a-intl-context-will-fail-fast",children:["Using ",(0,a.jsx)(n.code,{children:"FormattedMessage"})," without a ",(0,a.jsx)(n.code,{children:"intl"})," context will fail fast"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["This also comes from Dropbox internal developer feedback. ",(0,a.jsx)(n.code,{children:"FormattedMessage"})," has a default English renderer that masks ",(0,a.jsx)(n.code,{children:"Provider"})," setup issues which causes them to not be handled during testing phase."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},972:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(7378);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
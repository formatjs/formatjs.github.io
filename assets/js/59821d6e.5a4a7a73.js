"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2678],{7116:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var s=t(5250),i=t(7449);const a={id:"upgrade-guide-4x",title:"Upgrade Guide (v3 -> v4)"},r=void 0,d={id:"react-intl/upgrade-guide-4x",title:"Upgrade Guide (v3 -> v4)",description:"Breaking API Changes",source:"@site/docs/react-intl/upgrade-guide-4.x.md",sourceDirName:"react-intl",slug:"/react-intl/upgrade-guide-4x",permalink:"/docs/react-intl/upgrade-guide-4x",draft:!1,unlisted:!1,editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/react-intl/upgrade-guide-4.x.md",tags:[],version:"current",lastUpdatedBy:"Long Ho",lastUpdatedAt:1597664589e3,frontMatter:{id:"upgrade-guide-4x",title:"Upgrade Guide (v3 -> v4)"},sidebar:"api",previous:{title:"Upgrade Guide (v4 -> v5)",permalink:"/docs/react-intl/upgrade-guide-5x"},next:{title:"Upgrade Guide (v2 -> v3)",permalink:"/docs/react-intl/upgrade-guide-3x"}},o={},l=[{value:"Breaking API Changes",id:"breaking-api-changes",level:2},{value:"Why are we doing those changes?",id:"why-are-we-doing-those-changes",level:2},{value:"Migrating off embedded HTML in messages",id:"migrating-off-embedded-html-in-messages",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"breaking-api-changes",children:"Breaking API Changes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"All tags specified must have corresponding values and will throw error if it's missing, e.g:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"new IntlMessageFormat('a<b>strong</b>').format({\n  b: (...chunks) => <strong>{chunks}</strong>,\n})\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["We don't allow formatting self-closing tags because we already use ICU ",(0,s.jsx)(n.code,{children:"{placeholder}"})," syntax for that."]}),"\n",(0,s.jsx)(n.li,{children:"XML/HTML tags are escaped using apostrophe just like other ICU constructs."}),"\n",(0,s.jsxs)(n.li,{children:["Remove dependency on DOMParser and restrictions on void element like ",(0,s.jsx)(n.code,{children:"<link>"}),". This effectively means you don't need to polyfill DOMParser in Node anymore."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"FormattedHTMLMessage"})," & ",(0,s.jsx)(n.code,{children:"intl.formatHTMLMessage"})," have been removed since ",(0,s.jsx)(n.code,{children:"FormattedMessage"})," now fully supports embedded HTML tag."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"why-are-we-doing-those-changes",children:"Why are we doing those changes?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"FormattedHTMLMessage"})," & ",(0,s.jsx)(n.code,{children:"intl.formatHTMLMessage"})," were originally created when React was fairly new. These components helped ease migration over from raw HTML to JSX. Given that current popularity of React right now and the fact that ",(0,s.jsx)(n.code,{children:"FormattedMessage"})," allow rendering embedded HTML tag, this is no longer needed."]}),"\n",(0,s.jsx)(n.li,{children:"Initially during the 1st iteration of embedded HTML support, we allow any tag that doesn\u2019t have a corresponding formatter to be rendered as raw HTML. We\u2019ve received feedbacks internally that allowing embedded HTML tag to be rendered as-is without sanitization is a XSS security risk. Therefore, in order to allow raw HTML tag you have to opt-in by escaping them using apostrophe. We will update our linter to check for this as well."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"migrating-off-embedded-html-in-messages",children:"Migrating off embedded HTML in messages"}),"\n",(0,s.jsxs)(n.p,{children:["In order to restore the old behavior of ",(0,s.jsx)(n.code,{children:"FormattedHTMLMessage"})," & ",(0,s.jsx)(n.code,{children:"intl.formatHTMLMessage"}),", we suggest you use the rich text format feature as below:"]}),"\n",(0,s.jsx)(n.p,{children:"Old way:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"intl.formatHTMLMessage('This is a <a href=\"foo\">link</a>')\n"})}),"\n",(0,s.jsx)(n.p,{children:"New way:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"intl.formatMessage('This is a <a>link</a>', {\n  a: (...chunks) => sanitizeHTML(`<a href=\"foo\">${chunks.join('')}</a>`),\n})\n"})}),"\n",(0,s.jsx)(n.p,{children:"This forces developers to always sanitize their rendered HTML & chunks, thus minimizing XSS."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},7449:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>r});var s=t(79);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);
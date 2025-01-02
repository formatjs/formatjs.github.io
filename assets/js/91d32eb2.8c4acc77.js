"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9793],{5282:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"core-concepts/basic-internationalization-principles","title":"Basic Internationalization Principles","description":"What Is Internationalization and Why Does It Matter?","source":"@site/docs/core-concepts/basic-internationalization-principles.md","sourceDirName":"core-concepts","slug":"/core-concepts/basic-internationalization-principles","permalink":"/docs/core-concepts/basic-internationalization-principles","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/core-concepts/basic-internationalization-principles.md","tags":[],"version":"current","lastUpdatedBy":"Miguel Andrade","lastUpdatedAt":1735830842000,"frontMatter":{"id":"basic-internationalization-principles","title":"Basic Internationalization Principles"},"sidebar":"docs","previous":{"title":"Advanced Usage","permalink":"/docs/guides/advanced-usage"},"next":{"title":"Message Syntax","permalink":"/docs/core-concepts/icu-syntax"}}');var i=t(7557),s=t(7266);const r={id:"basic-internationalization-principles",title:"Basic Internationalization Principles"},o=void 0,l={},c=[{value:"What Is Internationalization and Why Does It Matter?",id:"what-is-internationalization-and-why-does-it-matter",level:2},{value:"Locales: Language and Region",id:"locales-language-and-region",level:2},{value:"Translating Strings",id:"translating-strings",level:2},{value:"Bundling Translated Strings",id:"bundling-translated-strings",level:2},{value:"Structure of Code",id:"structure-of-code",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"what-is-internationalization-and-why-does-it-matter",children:"What Is Internationalization and Why Does It Matter?"}),"\n",(0,i.jsx)(n.p,{children:"Internationalized software supports the languages and cultural customs of people throughout the world. The Web reaches all parts of the world. Internationalized web apps provide a great user experience for people everywhere."}),"\n",(0,i.jsx)(n.p,{children:"Localized software adapts to a specific language and culture by translating text into the user's language and formatting data in accordance with the user's expectations. An app is typically localized for a small set of locales."}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/tc39/ecma402",children:"ECMA-402 JavaScript internationalization specification"})," has an excellent overview."]}),"\n",(0,i.jsx)(n.h2,{id:"locales-language-and-region",children:"Locales: Language and Region"}),"\n",(0,i.jsxs)(n.p,{children:['A "locale" refers to the lingual and cultural expectations for a region. It is represented using a "locale code" defined in ',(0,i.jsx)(n.a,{href:"https://www.unicode.org/reports/tr35/tr35.html#Identifiers",children:"UTS LDML"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This code is comprised of several parts separated by hyphens (-). The first part is a short string representing the language. The second, optional, part is a short string representing the region. Additionally, various extensions and variants can be specified."}),"\n",(0,i.jsx)(n.p,{children:"Typically, web apps are localized to just the language or language-region combination. Examples of such locale codes are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"en"})," for English"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"en-US"})," for English as spoken in the United States"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"en-GB"})," for English as spoken in the United Kingdom"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"es-AR"})," for Spanish as spoken in Argentina"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ar-001"})," for Arabic as spoken throughout the world"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ar-AE"})," for Arabic as spoken in United Arab Emirates"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Most internationalized apps only support a small list of locales."}),"\n",(0,i.jsx)(n.h2,{id:"translating-strings",children:"Translating Strings"}),"\n",(0,i.jsx)(n.p,{children:"You likely have some text in your application that is in a natural language such as English or Japanese. In order to support other locales, you will need to translate these strings."}),"\n",(0,i.jsx)(n.p,{children:'FormatJS provides a mechanism to let you write the core "software" of your application without special code for different translations. The considerations for each locale are encapsulated in your translated strings and our libraries.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"const messages = {\n  en: {\n    GREETING: 'Hello {name}',\n  },\n  fr: {\n    GREETING: 'Bonjour {name}',\n  },\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["We use the ",(0,i.jsx)(n.a,{href:"https://unicode-org.github.io/icu/userguide/format_parse/messages",children:"ICU Message syntax"})," which is also used in ",(0,i.jsx)(n.a,{href:"http://docs.oracle.com/javase/7/docs/api/java/text/MessageFormat.html",children:"Java"}),", C, PHP and various other platforms."]}),"\n",(0,i.jsx)(n.h2,{id:"bundling-translated-strings",children:"Bundling Translated Strings"}),"\n",(0,i.jsx)(n.p,{children:"It is common to organize your translations primarily by locale, because you only need the translations for the user's current locale. Our template and component library integrations are designed to work with the translations for a single locale. If your app is complex, you can further subdivide your translations, such as by page or section of the site."}),"\n",(0,i.jsx)(n.h2,{id:"structure-of-code",children:"Structure of Code"}),"\n",(0,i.jsx)(n.p,{children:"The actual formatting and presentation of data and translated strings typically takes these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Determine the user's locale, as described in Runtime Environments guide."}),"\n",(0,i.jsxs)(n.li,{children:["Setup one of FormatJS's integrations with the following data:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"the user's current locale"}),"\n",(0,i.jsx)(n.li,{children:"translated strings for that locale"}),"\n",(0,i.jsx)(n.li,{children:"optionally, any custom formats"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Call the template engine, passing the data that needs formatting."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},7266:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(8225);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);
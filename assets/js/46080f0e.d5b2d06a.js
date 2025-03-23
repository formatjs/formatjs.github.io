"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5734],{2310:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"icu-messageformat-parser","title":"ICU MessageFormat Parser","description":"Parses ICU Message strings into an AST via JavaScript.","source":"@site/docs/icu-messageformat-parser.md","sourceDirName":".","slug":"/icu-messageformat-parser","permalink":"/docs/icu-messageformat-parser","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/icu-messageformat-parser.md","tags":[],"version":"current","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1742701963000,"frontMatter":{"id":"icu-messageformat-parser","title":"ICU MessageFormat Parser"},"sidebar":"api","previous":{"title":"Intl MessageFormat","permalink":"/docs/intl-messageformat"}}');var n=t(6106),a=t(7389);const d={id:"icu-messageformat-parser",title:"ICU MessageFormat Parser"},i=void 0,o={},l=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:3},{value:"Supported DateTime Skeleton",id:"supported-datetime-skeleton",level:2},{value:"Benchmarks",id:"benchmarks",level:2}];function c(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Parses ",(0,n.jsx)(s.a,{href:"https://unicode-org.github.io/icu/userguide/format_parse/messages",children:"ICU Message strings"})," into an AST via JavaScript."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/@formatjs/icu-messageformat-parser",children:(0,n.jsx)(s.img,{src:"https://badgen.net/npm/v/@formatjs/icu-messageformat-parser",alt:"npm Version"})}),"\n",(0,n.jsx)(s.a,{href:"https://bundlephobia.com/result?p=@formatjs/icu-messageformat-parser",children:(0,n.jsx)(s.img,{src:"https://badgen.net/bundlephobia/minzip/@formatjs/icu-messageformat-parser",alt:"size"})})]}),"\n",(0,n.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(s.p,{children:["This package implements a parser in JavaScript that parses the industry standard ",(0,n.jsx)(s.a,{href:"https://unicode-org.github.io/icu/userguide/format_parse/messages",children:"ICU Message strings"})," \u2014 used for internationalization \u2014 into an AST. The produced AST can then be used by a compiler, like ",(0,n.jsx)(s.a,{href:"/docs/intl-messageformat",children:(0,n.jsx)(s.code,{children:"intl-messageformat"})}),", to produce localized formatted strings for display to users."]}),"\n",(0,n.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"import {parse} from '@formatjs/icu-messageformat-parser'\nconst ast = parse(`this is {count, plural, \n  one{# dog} \n  other{# dogs}\n}`)\n"})}),"\n",(0,n.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-tsx",metastring:"live",live:!0,children:"<pre>\n  {JSON.stringify(\n    IcuMessageFormatParser.parse(\n      `On {takenDate, date, short} <bold>{name}</bold> took {numPhotos, plural,\n          =0 {no photos.}\n          =1 {one photo.}\n          other {# photos.}\n        }`\n    ),\n    undefined,\n    2\n  )}\n</pre>\n"})}),"\n",(0,n.jsx)(s.h2,{id:"supported-datetime-skeleton",children:"Supported DateTime Skeleton"}),"\n",(0,n.jsxs)(s.p,{children:["ICU provides a ",(0,n.jsx)(s.a,{href:"https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table",children:"wide array of pattern"})," to customize date time format. However, not all of them are available via ECMA402's Intl API. Therefore, our parser only support the following patterns"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Symbol"}),(0,n.jsx)(s.th,{children:"Meaning"}),(0,n.jsx)(s.th,{children:"Notes"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"G"}),(0,n.jsx)(s.td,{children:"Era designator"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"y"}),(0,n.jsx)(s.td,{children:"year"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"M"}),(0,n.jsx)(s.td,{children:"month in year"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"L"}),(0,n.jsx)(s.td,{children:"stand-alone month in year"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"d"}),(0,n.jsx)(s.td,{children:"day in month"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"E"}),(0,n.jsx)(s.td,{children:"day of week"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"e"}),(0,n.jsx)(s.td,{children:"local day of week"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"e..eee"})," is not supported"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"c"}),(0,n.jsx)(s.td,{children:"stand-alone local day of week"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"c..ccc"})," is not supported"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"a"}),(0,n.jsx)(s.td,{children:"AM/PM marker"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"h"}),(0,n.jsx)(s.td,{children:"Hour [1-12]"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"H"}),(0,n.jsx)(s.td,{children:"Hour [0-23]"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"K"}),(0,n.jsx)(s.td,{children:"Hour [0-11]"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"k"}),(0,n.jsx)(s.td,{children:"Hour [1-24]"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"m"}),(0,n.jsx)(s.td,{children:"Minute"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"s"}),(0,n.jsx)(s.td,{children:"Second"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"z"}),(0,n.jsx)(s.td,{children:"Time Zone"}),(0,n.jsx)(s.td,{})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"benchmarks",children:"Benchmarks"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"complex_msg AST length 10861\nnormal_msg AST length 1665\nsimple_msg AST length 364\nstring_msg AST length 131\n\ncomplex_msg x 29,940 ops/sec \xb11.23% (89 runs sampled)\nnormal_msg x 253,612 ops/sec \xb11.01% (92 runs sampled)\nsimple_msg x 1,805,642 ops/sec \xb10.70% (94 runs sampled)\nstring_msg x 2,694,133 ops/sec \xb11.05% (95 runs sampled)\n"})})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},7389:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>i});var r=t(7378);const n={},a=r.createContext(n);function d(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5290],{5009:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"intl-messageformat","title":"Intl MessageFormat","description":"Formats ICU Message strings with number, date, plural, and select placeholders to create localized messages.","source":"@site/docs/intl-messageformat.md","sourceDirName":".","slug":"/intl-messageformat","permalink":"/docs/intl-messageformat","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/intl-messageformat.md","tags":[],"version":"current","lastUpdatedBy":"longlho","lastUpdatedAt":1733757198000,"frontMatter":{"id":"intl-messageformat","title":"Intl MessageFormat"},"sidebar":"api","previous":{"title":"Vue Plugin for formatjs","permalink":"/docs/vue-intl"},"next":{"title":"ICU MessageFormat Parser","permalink":"/docs/icu-messageformat-parser"}}');var r=n(7557),a=n(2887);const l={id:"intl-messageformat",title:"Intl MessageFormat"},o=void 0,i={},d=[{value:"Overview",id:"overview",level:2},{value:"Goals",id:"goals",level:3},{value:"How It Works",id:"how-it-works",level:3},{value:"Common Usage Example",id:"common-usage-example",level:3},{value:"Message Syntax",id:"message-syntax",level:3},{value:"Features",id:"features",level:3},{value:"Usage",id:"usage",level:2},{value:"Modern <code>Intl</code> Dependency",id:"modern-intl-dependency",level:3},{value:"Loading Intl MessageFormat in a browser",id:"loading-intl-messageformat-in-a-browser",level:3},{value:"Loading Intl MessageFormat in Node.js",id:"loading-intl-messageformat-in-nodejs",level:3},{value:"Public API",id:"public-api",level:2},{value:"<code>IntlMessageFormat</code> Constructor",id:"intlmessageformat-constructor",level:3},{value:"Locale Resolution",id:"locale-resolution",level:3},{value:"<code>resolvedOptions()</code> Method",id:"resolvedoptions-method",level:3},{value:"<code>format(values)</code> Method",id:"formatvalues-method",level:3},{value:"Rich Text support",id:"rich-text-support",level:4},{value:"<code>getAst</code> Method",id:"getast-method",level:3},{value:"Date/Time/Number Skeleton",id:"datetimenumber-skeleton",level:3},{value:"Number Skeleton",id:"number-skeleton",level:4},{value:"Date/Time Skeleton",id:"datetime-skeleton",level:4},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Passing in AST",id:"passing-in-ast",level:3},{value:"Formatters",id:"formatters",level:3},{value:"Benchmark",id:"benchmark",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Formats ICU Message strings with number, date, plural, and select placeholders to create localized messages."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://www.npmjs.org/package/intl-messageformat",children:(0,r.jsx)(s.img,{src:"https://img.shields.io/npm/v/intl-messageformat.svg?style=flat-square",alt:"npm Version"})}),"\n",(0,r.jsx)(s.img,{src:"https://badgen.net/badgesize/normal/https://unpkg.com/intl-messageformat/dist/umd/intl-messageformat.min.js?label=intl-messageformat+minzipped+size",alt:"intl-messageformat minzipped size"})]}),"\n",(0,r.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(s.h3,{id:"goals",children:"Goals"}),"\n",(0,r.jsx)(s.p,{children:"This package aims to provide a way for you to manage and format your JavaScript app's string messages into localized strings for people using your app. You can use this package in the browser and on the server via Node.js."}),"\n",(0,r.jsxs)(s.p,{children:["This implementation is based on the ",(0,r.jsx)(s.a,{href:"http://wiki.ecmascript.org/doku.php?id=globalization:messageformatting",children:"Strawman proposal"}),", but there are a few places this implementation diverges."]}),"\n",(0,r.jsx)(s.admonition,{title:"Future Changes",type:"info",children:(0,r.jsxs)(s.p,{children:["This ",(0,r.jsx)(s.code,{children:"IntlMessageFormat"})," API may change to stay in sync with ECMA-402, but this package will follow ",(0,r.jsx)(s.a,{href:"http://semver.org/",children:"semver"}),"."]})}),"\n",(0,r.jsx)(s.h3,{id:"how-it-works",children:"How It Works"}),"\n",(0,r.jsxs)(s.p,{children:["Messages are provided into the constructor as a ",(0,r.jsx)(s.code,{children:"String"})," message, or a ",(0,r.jsx)(s.a,{href:"/docs/icu-messageformat-parser",children:"pre-parsed AST"})," object."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"const msg = new IntlMessageFormat(message, locales, [formats], [opts])\n"})}),"\n",(0,r.jsxs)(s.p,{children:["The string ",(0,r.jsx)(s.code,{children:"message"})," is parsed, then stored internally in a compiled form that is optimized for the ",(0,r.jsx)(s.code,{children:"format()"})," method to produce the formatted string for displaying to the user."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"const output = msg.format(values)\n"})}),"\n",(0,r.jsx)(s.h3,{id:"common-usage-example",children:"Common Usage Example"}),"\n",(0,r.jsx)(s.p,{children:"A very common example is formatting messages that have numbers with plural labels. With this package you can make sure that the string is properly formatted for a person's locale, e.g.:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",metastring:"live",live:!0,children:"new IntlMessageFormat(\n  `{numPhotos, plural,\n      =0 {You have no photos.}\n      =1 {You have one photo.}\n      other {You have # photos.}\n    }`,\n  'en-US'\n).format({numPhotos: 1000})\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",metastring:"live",live:!0,children:"new IntlMessageFormat(\n  `{numPhotos, plural,\n      =0 {Usted no tiene fotos.}\n      =1 {Usted tiene una foto.}\n      other {Usted tiene # fotos.}\n    }`,\n  'es-ES'\n).format({numPhotos: 1000})\n"})}),"\n",(0,r.jsx)(s.h3,{id:"message-syntax",children:"Message Syntax"}),"\n",(0,r.jsxs)(s.p,{children:["The message syntax that this package uses is not proprietary, in fact it's a common standard message syntax that works across programming languages and one that professional translators are familiar with. This package uses the ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://unicode-org.github.io/icu/userguide/format_parse/messages",children:"ICU Message syntax"})})," and works for all ",(0,r.jsx)(s.a,{href:"http://cldr.unicode.org/",children:"CLDR languages"})," which have pluralization rules defined."]}),"\n",(0,r.jsx)(s.h3,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Uses industry standards: ",(0,r.jsx)(s.a,{href:"https://unicode-org.github.io/icu/userguide/format_parse/messages",children:"ICU Message syntax"})," and ",(0,r.jsx)(s.a,{href:"http://cldr.unicode.org/",children:"CLDR locale data"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Supports ",(0,r.jsx)(s.strong,{children:"plural"}),", ",(0,r.jsx)(s.strong,{children:"select"}),", and ",(0,r.jsx)(s.strong,{children:"selectordinal"})," message arguments."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Formats numbers and dates/times in messages using ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat",children:(0,r.jsx)(s.code,{children:"Intl.NumberFormat"})})," and ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat",children:(0,r.jsx)(s.code,{children:"Intl.DateTimeFormat"})}),", respectively."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Optimized for repeated calls to an ",(0,r.jsx)(s.code,{children:"IntlMessageFormat"})," instance's ",(0,r.jsx)(s.code,{children:"format()"})," method."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Supports defining custom format styles/options."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Supports escape sequences for message syntax chars, e.g.: ",(0,r.jsx)(s.code,{children:"\"'{foo}'\""})," will output: ",(0,r.jsx)(s.code,{children:'"{foo}"'})," in the formatted output instead of interpreting it as a ",(0,r.jsx)(s.code,{children:"foo"})," argument."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(s.h3,{id:"modern-intl-dependency",children:["Modern ",(0,r.jsx)(s.code,{children:"Intl"})," Dependency"]}),"\n",(0,r.jsxs)(s.p,{children:["This package assumes that the ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl",children:(0,r.jsx)(s.code,{children:"Intl"})})," global object exists in the runtime. ",(0,r.jsx)(s.code,{children:"Intl"})," is present in all modern browsers (IE11+) and Node (with full ICU). The ",(0,r.jsx)(s.code,{children:"Intl"})," methods we rely on are:"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Intl.NumberFormat"})," for number formatting (can be polyfilled using ",(0,r.jsx)(s.a,{href:"/docs/polyfills/intl-numberformat",children:"@formatjs/intl-numberformat"}),")"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Intl.DateTimeFormat"})," for date time formatting (can be polyfilled using ",(0,r.jsx)(s.a,{href:"/docs/polyfills/intl-datetimeformat",children:"@formatjs/intl-datetimeformat"}),")"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Intl.PluralRules"})," for plural/ordinal formatting (can be polyfilled using ",(0,r.jsx)(s.a,{href:"/docs/polyfills/intl-pluralrules",children:"@formatjs/intl-pluralrules"}),")"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"loading-intl-messageformat-in-a-browser",children:"Loading Intl MessageFormat in a browser"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-html",children:'<script src="intl-messageformat/intl-messageformat.min.js"><\/script>\n'})}),"\n",(0,r.jsx)(s.h3,{id:"loading-intl-messageformat-in-nodejs",children:"Loading Intl MessageFormat in Node.js"}),"\n",(0,r.jsx)(s.p,{children:"Either do:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"import IntlMessageFormat from 'intl-messageformat'\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"const IntlMessageFormat = require('intl-messageformat').default\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.strong,{children:["NOTE: Your Node has to include ",(0,r.jsx)(s.a,{href:"https://nodejs.org/api/intl.html",children:"full ICU"})]})}),"\n",(0,r.jsx)(s.h2,{id:"public-api",children:"Public API"}),"\n",(0,r.jsxs)(s.h3,{id:"intlmessageformat-constructor",children:[(0,r.jsx)(s.code,{children:"IntlMessageFormat"})," Constructor"]}),"\n",(0,r.jsxs)(s.p,{children:["To create a message to format, use the ",(0,r.jsx)(s.code,{children:"IntlMessageFormat"})," constructor. The constructor takes three parameters:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"message: string | AST"})})," - String message (or pre-parsed AST) that serves as formatting pattern."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"locales: string | string[]"})})," - A string with a BCP 47 language tag, or an array of such strings. If you do not provide a locale, the default locale will be used. When an array of locales is provided, each item and its ancestor locales are checked and the first one with registered locale data is returned. ",(0,r.jsxs)(s.strong,{children:["See: ",(0,r.jsx)(s.a,{href:"#locale-resolution",children:"Locale Resolution"})," for more details."]})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"formats?: object"})})," - Optional object with user defined options for format styles."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"opts?: { formatters?: Formatters, ignoreTag?: boolean }"})})," - Optional options."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"formatters"}),": Map containing memoized formatters for performance."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"ignoreTag"}),": Whether to treat HTML/XML tags as string literal instead of parsing them as tag token. When this is ",(0,r.jsx)(s.code,{children:"false"})," we only allow simple tags without any attributes"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"const msg = new IntlMessageFormat('My name is {name}.', 'en-US')\n"})}),"\n",(0,r.jsx)(s.h3,{id:"locale-resolution",children:"Locale Resolution"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"IntlMessageFormat"})," uses ",(0,r.jsx)(s.code,{children:"Intl.NumberFormat.supportedLocalesOf()"})," to determine which locale data to use based on the ",(0,r.jsx)(s.code,{children:"locales"})," value passed to the constructor. The result of this resolution process can be determined by call the ",(0,r.jsx)(s.code,{children:"resolvedOptions()"})," prototype method."]}),"\n",(0,r.jsxs)(s.h3,{id:"resolvedoptions-method",children:[(0,r.jsx)(s.code,{children:"resolvedOptions()"})," Method"]}),"\n",(0,r.jsxs)(s.p,{children:["This method returns an object with the options values that were resolved during instance creation. It currently only contains a ",(0,r.jsx)(s.code,{children:"locale"})," property; here's an example:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",metastring:"live",live:!0,children:"new IntlMessageFormat('', 'en-us').resolvedOptions().locale\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Notice how the specified locale was the all lower-case value: ",(0,r.jsx)(s.code,{children:'"en-us"'}),", but it was resolved and normalized to: ",(0,r.jsx)(s.code,{children:'"en-US"'}),"."]}),"\n",(0,r.jsxs)(s.h3,{id:"formatvalues-method",children:[(0,r.jsx)(s.code,{children:"format(values)"})," Method"]}),"\n",(0,r.jsxs)(s.p,{children:["Once the message is created, formatting the message is done by calling the ",(0,r.jsx)(s.code,{children:"format()"})," method on the instance and passing a collection of ",(0,r.jsx)(s.code,{children:"values"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",metastring:"live",live:!0,children:"new IntlMessageFormat('My name is {name}.', 'en-US').format({name: 'Eric'})\n"})}),"\n",(0,r.jsx)(s.admonition,{title:"placeholders",type:"danger",children:(0,r.jsxs)(s.p,{children:["A value ",(0,r.jsx)(s.strong,{children:"must"})," be supplied for every argument in the message pattern the instance was constructed with."]})}),"\n",(0,r.jsx)(s.h4,{id:"rich-text-support",children:"Rich Text support"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",metastring:"live",live:!0,children:"new IntlMessageFormat('hello <b>world</b>', 'en').format({\n  b: chunks => <strong>{chunks}</strong>,\n})\n"})}),"\n",(0,r.jsxs)(s.p,{children:["We support embedded XML tag in the message, e.g ",(0,r.jsx)(s.code,{children:"this is a <b>strong</b> tag"}),". This is not meant to be a full-fledged method to embed HTML, but rather to tag specific text chunk so translation can be more contextual. Therefore, the following restrictions apply:"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Any attributes on the HTML tag are also ignored."}),"\n",(0,r.jsxs)(s.li,{children:["Self-closing tags are treated as string literal and not supported, please use regular ICU placeholder like ",(0,r.jsx)(s.code,{children:"{placeholder}"}),"."]}),"\n",(0,r.jsx)(s.li,{children:"All tags specified must have corresponding values and will throw\nerror if it's missing, e.g:"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",metastring:"live",live:!0,children:"function () {\n  try {\n    return new IntlMessageFormat('a <foo>strong</foo>').format()\n  } catch (e) {\n    return String(e)\n  }\n}\n"})}),"\n",(0,r.jsxs)(s.ol,{start:"4",children:["\n",(0,r.jsx)(s.li,{children:"XML/HTML tags are escaped using apostrophe just like other ICU constructs. In order to escape you can do things like:"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",metastring:"live",live:!0,children:"new IntlMessageFormat(\"I '<'3 cats\").format()\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",metastring:"live",live:!0,children:"new IntlMessageFormat(\"raw '<b>HTML</b>'\").format()\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",metastring:"live",live:!0,children:"new IntlMessageFormat(\"raw '<b>HTML</b>' with '<a>'{placeholder}'</a>'\").format(\n  {placeholder: 'some word'}\n)\n"})}),"\n",(0,r.jsxs)(s.ol,{start:"5",children:["\n",(0,r.jsx)(s.li,{children:"Embedded valid HTML tag is a bit of a grey area right now since we're not supporting the full HTML/XHTML/XML spec."}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"getast-method",children:[(0,r.jsx)(s.code,{children:"getAst"})," Method"]}),"\n",(0,r.jsx)(s.p,{children:"Return the underlying AST for the compiled message."}),"\n",(0,r.jsx)(s.h3,{id:"datetimenumber-skeleton",children:"Date/Time/Number Skeleton"}),"\n",(0,r.jsx)(s.p,{children:"We support ICU Number skeleton and a subset of Date/Time Skeleton for further customization of formats."}),"\n",(0,r.jsx)(s.h4,{id:"number-skeleton",children:"Number Skeleton"}),"\n",(0,r.jsx)(s.p,{children:"Example:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",metastring:"live",live:!0,children:"new IntlMessageFormat(\n  'The price is: {price, number, ::currency/EUR}',\n  'en-GB'\n).format({price: 100})\n"})}),"\n",(0,r.jsxs)(s.p,{children:["A full set of options and syntax can be found ",(0,r.jsx)(s.a,{href:"https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html",children:"here"})]}),"\n",(0,r.jsx)(s.h4,{id:"datetime-skeleton",children:"Date/Time Skeleton"}),"\n",(0,r.jsxs)(s.p,{children:["ICU provides a ",(0,r.jsx)(s.a,{href:"https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table",children:"wide array of pattern"})," to customize date time format. However, not all of them are available via ECMA402's Intl API. Therefore, our parser only support the following patterns"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Symbol"}),(0,r.jsx)(s.th,{children:"Meaning"}),(0,r.jsx)(s.th,{children:"Notes"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"G"}),(0,r.jsx)(s.td,{children:"Era designator"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"y"}),(0,r.jsx)(s.td,{children:"year"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"M"}),(0,r.jsx)(s.td,{children:"month in year"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"L"}),(0,r.jsx)(s.td,{children:"stand-alone month in year"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"d"}),(0,r.jsx)(s.td,{children:"day in month"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"E"}),(0,r.jsx)(s.td,{children:"day of week"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"e"}),(0,r.jsx)(s.td,{children:"local day of week"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"e..eee"})," is not supported"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"c"}),(0,r.jsx)(s.td,{children:"stand-alone local day of week"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"c..ccc"})," is not supported"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"a"}),(0,r.jsx)(s.td,{children:"AM/PM marker"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"h"}),(0,r.jsx)(s.td,{children:"Hour [1-12]"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"H"}),(0,r.jsx)(s.td,{children:"Hour [0-23]"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"K"}),(0,r.jsx)(s.td,{children:"Hour [0-11]"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"k"}),(0,r.jsx)(s.td,{children:"Hour [1-24]"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"m"}),(0,r.jsx)(s.td,{children:"Minute"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"s"}),(0,r.jsx)(s.td,{children:"Second"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"z"}),(0,r.jsx)(s.td,{children:"Time Zone"}),(0,r.jsx)(s.td,{})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"Example:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",metastring:"live",live:!0,children:"new IntlMessageFormat('Today is: {now, date, ::yyyyMMdd}', 'en-GB').format({\n  now: new Date(),\n})\n"})}),"\n",(0,r.jsx)(s.h2,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,r.jsx)(s.h3,{id:"passing-in-ast",children:"Passing in AST"}),"\n",(0,r.jsx)(s.p,{children:"You can pass in pre-parsed AST to IntlMessageFormat like this:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"new IntlMessageFormat('hello').format() // prints out hello\n\n// is equivalent to\n\nimport IntlMessageFormat from 'intl-messageformat'\nimport {parse} from '@formatjs/icu-messageformat-parser'\nnew IntlMessageFormat(parse('hello')).format() // prints out hello\n"})}),"\n",(0,r.jsxs)(s.p,{children:["This helps performance for cases like SSR or preload/precompilation-supported platforms since ",(0,r.jsx)(s.code,{children:"AST"})," can be cached."]}),"\n",(0,r.jsxs)(s.p,{children:["If your messages are all in ASTs, you can alias ",(0,r.jsx)(s.code,{children:"@formatjs/icu-messageformat-parser"})," to ",(0,r.jsx)(s.code,{children:"{default: undefined}"})," to save some bytes during bundling."]}),"\n",(0,r.jsx)(s.h3,{id:"formatters",children:"Formatters"}),"\n",(0,r.jsxs)(s.p,{children:["For complex messages, initializing ",(0,r.jsx)(s.code,{children:"Intl.*"})," constructors can be expensive. Therefore, we allow user to pass in ",(0,r.jsx)(s.code,{children:"formatters"})," to provide memoized instances of these ",(0,r.jsx)(s.code,{children:"Intl"})," objects. This opts combines with ",(0,r.jsx)(s.a,{href:"#passing-in-ast",children:"passing in AST"})," and ",(0,r.jsx)(s.code,{children:"fast-memoize"})," can speed things up by 30x per the benchmark down below."]}),"\n",(0,r.jsx)(s.p,{children:"For example:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"import IntlMessageFormat from 'intl-messageformat'\nimport {memoize} from '@formatjs/fast-memoize'\nconst formatters = {\n  getNumberFormat: memoize(\n    (locale, opts) => new Intl.NumberFormat(locale, opts)\n  ),\n  getDateTimeFormat: memoize(\n    (locale, opts) => new Intl.DateTimeFormat(locale, opts)\n  ),\n  getPluralRules: memoize((locale, opts) => new Intl.PluralRules(locale, opts)),\n}\nnew IntlMessageFormat('hello {number, number}', 'en', undefined, {\n  formatters,\n}).format({number: 3}) // prints out `hello, 3`\n"})}),"\n",(0,r.jsx)(s.h2,{id:"benchmark",children:"Benchmark"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"format_cached_complex_msg x 153,868 ops/sec \xb11.13% (85 runs sampled)\nformat_cached_string_msg x 21,661,621 ops/sec \xb14.06% (84 runs sampled)\nnew_complex_msg_preparsed x 719,056 ops/sec \xb12.83% (78 runs sampled)\nnew_complex_msg x 12,844 ops/sec \xb11.97% (85 runs sampled)\nnew_string_msg x 409,770 ops/sec \xb12.57% (79 runs sampled)\ncomplex msg format x 12,065 ops/sec \xb11.66% (81 runs sampled)\ncomplex msg w/ formatters format x 11,649 ops/sec \xb12.05% (78 runs sampled)\ncomplex preparsed msg w/ formatters format x 597,153 ops/sec \xb11.46% (90 runs sampled)\ncomplex preparsed msg w/ new formatters format x 684,263 ops/sec \xb11.37% (89 runs sampled)\n"})})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},2887:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>o});var t=n(8225);const r={},a=t.createContext(r);function l(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);
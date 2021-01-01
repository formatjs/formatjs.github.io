(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{118:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),c=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=c(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,u=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return a?r.a.createElement(u,s(s({ref:t},b),{},{components:a})):r.a.createElement(u,s({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var b=2;b<l;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return c}));var n=a(3),r=a(7),l=(a(0),a(118)),o={id:"intl-messageformat",title:"Intl MessageFormat"},s={unversionedId:"intl-messageformat",id:"intl-messageformat",isDocsHomePage:!1,title:"Intl MessageFormat",description:"Formats ICU Message strings with number, date, plural, and select placeholders to create localized messages.",source:"@site/docs/intl-messageformat.md",slug:"/intl-messageformat",permalink:"/docs/intl-messageformat",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/intl-messageformat.md",version:"current",sidebar:"api",previous:{title:"Vue Plugin for formatjs",permalink:"/docs/vue-intl"},next:{title:"Intl MessageFormat Parser",permalink:"/docs/intl-messageformat-parser"}},i=[{value:"Overview",id:"overview",children:[{value:"Goals",id:"goals",children:[]},{value:"How It Works",id:"how-it-works",children:[]},{value:"Common Usage Example",id:"common-usage-example",children:[]},{value:"Message Syntax",id:"message-syntax",children:[]},{value:"Features",id:"features",children:[]}]},{value:"Usage",id:"usage",children:[{value:"Modern <code>Intl</code> Dependency",id:"modern-intl-dependency",children:[]},{value:"Loading Intl MessageFormat in a browser",id:"loading-intl-messageformat-in-a-browser",children:[]},{value:"Loading Intl MessageFormat in Node.js",id:"loading-intl-messageformat-in-nodejs",children:[]}]},{value:"Public API",id:"public-api",children:[{value:"<code>IntlMessageFormat</code> Constructor",id:"intlmessageformat-constructor",children:[]},{value:"Locale Resolution",id:"locale-resolution",children:[]},{value:"<code>resolvedOptions()</code> Method",id:"resolvedoptions-method",children:[]},{value:"<code>format(values)</code> Method",id:"formatvalues-method",children:[]},{value:"<code>getAst</code> Method",id:"getast-method",children:[]},{value:"Date/Time/Number Skeleton",id:"datetimenumber-skeleton",children:[]}]},{value:"Advanced Usage",id:"advanced-usage",children:[{value:"Passing in AST",id:"passing-in-ast",children:[]},{value:"Formatters",id:"formatters",children:[]}]},{value:"Benchmark",id:"benchmark",children:[]}],b={rightToc:i};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Formats ICU Message strings with number, date, plural, and select placeholders to create localized messages."),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.org/package/intl-messageformat"}),Object(l.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/intl-messageformat.svg?style=flat-square",alt:"npm Version"}))),"\n",Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"https://badgen.net/badgesize/normal/https://unpkg.com/intl-messageformat/dist/umd/intl-messageformat.min.js?label=intl-messageformat+minzipped+size",alt:"`intl-messageformat` minzipped size"}))),Object(l.b)("h2",{id:"overview"},"Overview"),Object(l.b)("h3",{id:"goals"},"Goals"),Object(l.b)("p",null,"This package aims to provide a way for you to manage and format your JavaScript app's string messages into localized strings for people using your app. You can use this package in the browser and on the server via Node.js."),Object(l.b)("p",null,"This implementation is based on the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://wiki.ecmascript.org/doku.php?id=globalization:messageformatting"}),"Strawman proposal"),", but there are a few places this implementation diverges."),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Future Changes")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"This ",Object(l.b)("inlineCode",{parentName:"p"},"IntlMessageFormat")," API may change to stay in sync with ECMA-402, but this package will follow ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://semver.org/"}),"semver"),"."))),Object(l.b)("h3",{id:"how-it-works"},"How It Works"),Object(l.b)("p",null,"Messages are provided into the constructor as a ",Object(l.b)("inlineCode",{parentName:"p"},"String")," message, or a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/intl-messageformat-parser"}),"pre-parsed AST")," object."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"const msg = new IntlMessageFormat(message, locales, [formats], [opts])\n")),Object(l.b)("p",null,"The string ",Object(l.b)("inlineCode",{parentName:"p"},"message")," is parsed, then stored internally in a compiled form that is optimized for the ",Object(l.b)("inlineCode",{parentName:"p"},"format()")," method to produce the formatted string for displaying to the user."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"const output = msg.format(values)\n")),Object(l.b)("h3",{id:"common-usage-example"},"Common Usage Example"),Object(l.b)("p",null,"A very common example is formatting messages that have numbers with plural labels. With this package you can make sure that the string is properly formatted for a person's locale, e.g.:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),"new IntlMessageFormat(\n  `You have {numPhotos, plural,\n      =0 {no photos.}\n      =1 {one photo.}\n      other {# photos.}\n    }`,\n  'en-US'\n).format({numPhotos: 1000})\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),"new IntlMessageFormat(\n  `Usted {numPhotos, plural,\n      =0 {no tiene fotos.}\n      =1 {tiene una foto.}\n      other {tiene # fotos.}\n    }`,\n  'en-US'\n).format({numPhotos: 1000})\n")),Object(l.b)("h3",{id:"message-syntax"},"Message Syntax"),Object(l.b)("p",null,"The message syntax that this package uses is not proprietary, in fact it's a common standard message syntax that works across programming languages and one that professional translators are familiar with. This package uses the ",Object(l.b)("strong",{parentName:"p"},Object(l.b)("a",Object(n.a)({parentName:"strong"},{href:"https://unicode-org.github.io/icu/userguide/format_parse/messages"}),"ICU Message syntax"))," and works for all ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://cldr.unicode.org/"}),"CLDR languages")," which have pluralization rules defined."),Object(l.b)("h3",{id:"features"},"Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Uses industry standards: ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://unicode-org.github.io/icu/userguide/format_parse/messages"}),"ICU Message syntax")," and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://cldr.unicode.org/"}),"CLDR locale data"),".")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Supports ",Object(l.b)("strong",{parentName:"p"},"plural"),", ",Object(l.b)("strong",{parentName:"p"},"select"),", and ",Object(l.b)("strong",{parentName:"p"},"selectordinal")," message arguments.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Formats numbers and dates/times in messages using ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat"}),Object(l.b)("inlineCode",{parentName:"a"},"Intl.NumberFormat"))," and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat"}),Object(l.b)("inlineCode",{parentName:"a"},"Intl.DateTimeFormat")),", respectively.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Optimized for repeated calls to an ",Object(l.b)("inlineCode",{parentName:"p"},"IntlMessageFormat")," instance's ",Object(l.b)("inlineCode",{parentName:"p"},"format()")," method.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Supports defining custom format styles/options.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Supports escape sequences for message syntax chars, e.g.: ",Object(l.b)("inlineCode",{parentName:"p"},"\"'{foo}'\"")," will output: ",Object(l.b)("inlineCode",{parentName:"p"},'"{foo}"')," in the formatted output instead of interpreting it as a ",Object(l.b)("inlineCode",{parentName:"p"},"foo")," argument."))),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("h3",{id:"modern-intl-dependency"},"Modern ",Object(l.b)("inlineCode",{parentName:"h3"},"Intl")," Dependency"),Object(l.b)("p",null,"This package assumes that the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"}),Object(l.b)("inlineCode",{parentName:"a"},"Intl"))," global object exists in the runtime. ",Object(l.b)("inlineCode",{parentName:"p"},"Intl")," is present in all modern browsers (IE11+) and Node (with full ICU). The ",Object(l.b)("inlineCode",{parentName:"p"},"Intl")," methods we rely on are:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"Intl.NumberFormat")," for number formatting (can be polyfilled using ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/polyfills/intl-numberformat"}),"@formatjs/intl-numberformat"),")"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"Intl.DateTimeFormat")," for date time formatting (can be polyfilled using ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/polyfills/intl-datetimeformat"}),"@formatjs/intl-datetimeformat"),")"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"Intl.PluralRules")," for plural/ordinal formatting (can be polyfilled using ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/polyfills/intl-pluralrules"}),"@formatjs/intl-pluralrules"),")")),Object(l.b)("h3",{id:"loading-intl-messageformat-in-a-browser"},"Loading Intl MessageFormat in a browser"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<script src="intl-messageformat/intl-messageformat.min.js"><\/script>\n')),Object(l.b)("h3",{id:"loading-intl-messageformat-in-nodejs"},"Loading Intl MessageFormat in Node.js"),Object(l.b)("p",null,"Either do:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import IntlMessageFormat from 'intl-messageformat'\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"const IntlMessageFormat = require('intl-messageformat').default\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"NOTE: Your Node has to include ",Object(l.b)("a",Object(n.a)({parentName:"strong"},{href:"https://nodejs.org/api/intl.html"}),"full ICU"))),Object(l.b)("h2",{id:"public-api"},"Public API"),Object(l.b)("h3",{id:"intlmessageformat-constructor"},Object(l.b)("inlineCode",{parentName:"h3"},"IntlMessageFormat")," Constructor"),Object(l.b)("p",null,"To create a message to format, use the ",Object(l.b)("inlineCode",{parentName:"p"},"IntlMessageFormat")," constructor. The constructor takes three parameters:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"message")," - ",Object(l.b)("em",{parentName:"p"},"{String | AST}")," - String message (or pre-parsed AST) that serves as formatting pattern.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"locales")," - ",Object(l.b)("em",{parentName:"p"},"{String | String[]}")," - A string with a BCP 47 language tag, or an array of such strings. If you do not provide a locale, the default locale will be used. When an array of locales is provided, each item and its ancestor locales are checked and the first one with registered locale data is returned. ",Object(l.b)("strong",{parentName:"p"},"See: ",Object(l.b)("a",Object(n.a)({parentName:"strong"},{href:"#locale-resolution"}),"Locale Resolution")," for more details."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"[formats]")," - ",Object(l.b)("em",{parentName:"p"},"{Object}")," - Optional object with user defined options for format styles.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"[opts]")," - ",Object(l.b)("inlineCode",{parentName:"p"},"{ formatters?: Formatters, ignoreTag?: boolean }"),": Optional options."),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"formatters"),": Map containing memoized formatters for performance."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ignoreTag"),": Whether to treat HTML/XML tags as string literal instead of parsing them as tag token. When this is ",Object(l.b)("inlineCode",{parentName:"li"},"false")," we only allow simple tags without any attributes")))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"const msg = new IntlMessageFormat('My name is {name}.', 'en-US')\n")),Object(l.b)("h3",{id:"locale-resolution"},"Locale Resolution"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"IntlMessageFormat")," uses ",Object(l.b)("inlineCode",{parentName:"p"},"Intl.NumberFormat.supportedLocalesOf()")," to determine which locale data to use based on the ",Object(l.b)("inlineCode",{parentName:"p"},"locales")," value passed to the constructor. The result of this resolution process can be determined by call the ",Object(l.b)("inlineCode",{parentName:"p"},"resolvedOptions()")," prototype method."),Object(l.b)("h3",{id:"resolvedoptions-method"},Object(l.b)("inlineCode",{parentName:"h3"},"resolvedOptions()")," Method"),Object(l.b)("p",null,"This method returns an object with the options values that were resolved during instance creation. It currently only contains a ",Object(l.b)("inlineCode",{parentName:"p"},"locale")," property; here's an example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),"new IntlMessageFormat('', 'en-us').resolvedOptions().locale\n")),Object(l.b)("p",null,"Notice how the specified locale was the all lower-case value: ",Object(l.b)("inlineCode",{parentName:"p"},'"en-us"'),", but it was resolved and normalized to: ",Object(l.b)("inlineCode",{parentName:"p"},'"en-US"'),"."),Object(l.b)("h3",{id:"formatvalues-method"},Object(l.b)("inlineCode",{parentName:"h3"},"format(values)")," Method"),Object(l.b)("p",null,"Once the message is created, formatting the message is done by calling the ",Object(l.b)("inlineCode",{parentName:"p"},"format()")," method on the instance and passing a collection of ",Object(l.b)("inlineCode",{parentName:"p"},"values"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),"new IntlMessageFormat('My name is {name}.', 'en-US').format({name: 'Eric'})\n")),Object(l.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"placeholders")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"A value ",Object(l.b)("strong",{parentName:"p"},"must")," be supplied for every argument in the message pattern the instance was constructed with."))),Object(l.b)("h4",{id:"rich-text-support"},"Rich Text support"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),"new IntlMessageFormat('hello <b>world</b>', 'en').format({\n  b: chunks => <strong>{chunks}</strong>,\n})\n")),Object(l.b)("p",null,"We support embedded XML tag in the message, e.g ",Object(l.b)("inlineCode",{parentName:"p"},"this is a <b>strong</b> tag"),". This is not meant to be a full-fledged method to embed HTML, but rather to tag specific text chunk so translation can be more contextual. Therefore, the following restrictions apply:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Any attributes on the HTML tag are also ignored."),Object(l.b)("li",{parentName:"ol"},"Self-closing tags are treated as string literal and not supported, please use regular ICU placeholder like ",Object(l.b)("inlineCode",{parentName:"li"},"{placeholder}"),"."),Object(l.b)("li",{parentName:"ol"},"All tags specified must have corresponding values and will throw\nerror if it's missing, e.g:")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),"function () {\n  try {\n    return new IntlMessageFormat('a <foo>strong</foo>').format()\n  } catch (e) {\n    return String(e)\n  }\n}\n")),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},"XML/HTML tags are escaped using apostrophe just like other ICU constructs. In order to escape you can do things like:")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),"new IntlMessageFormat(\"I '<'3 cats\").format()\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),"new IntlMessageFormat(\"raw '<b>HTML</b>'\").format()\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),"new IntlMessageFormat(\n  \"raw '<b>HTML</b>' with '<a>'{placeholder}'</a>'\"\n).format({placeholder: 'some word'})\n")),Object(l.b)("ol",{start:5},Object(l.b)("li",{parentName:"ol"},"Embedded valid HTML tag is a bit of a grey area right now since we're not supporting the full HTML/XHTML/XML spec.")),Object(l.b)("h3",{id:"getast-method"},Object(l.b)("inlineCode",{parentName:"h3"},"getAst")," Method"),Object(l.b)("p",null,"Return the underlying AST for the compiled message."),Object(l.b)("h3",{id:"datetimenumber-skeleton"},"Date/Time/Number Skeleton"),Object(l.b)("p",null,"We support ICU Number skeleton and a subset of Date/Time Skeleton for further customization of formats."),Object(l.b)("h4",{id:"number-skeleton"},"Number Skeleton"),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),"new IntlMessageFormat(\n  'The price is: {price, number, ::currency/EUR}',\n  'en-GB'\n).format({price: 100})\n")),Object(l.b)("p",null,"A full set of options and syntax can be found ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/unicode-org/icu/blob/master/docs/userguide/format_parse/numbers/skeletons.md"}),"here")),Object(l.b)("h4",{id:"datetime-skeleton"},"Date/Time Skeleton"),Object(l.b)("p",null,"ICU provides a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table"}),"wide array of pattern")," to customize date time format. However, not all of them are available via ECMA402's Intl API. Therefore, our parser only support the following patterns"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Symbol"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Meaning"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"G"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Era designator"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"y"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"year"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"M"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"month in year"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"L"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"stand-alone month in year"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"d"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"day in month"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"E"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"day of week"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"e"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"local day of week"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"e..eee")," is not supported")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"c"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"stand-alone local day of week"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"c..ccc")," is not supported")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"a"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AM/PM marker"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"h"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hour ","[1-12]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"H"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hour ","[0-23]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"K"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hour ","[0-11]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"k"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hour ","[1-24]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"m"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Minute"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"s"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Second"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"z"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Time Zone"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),"new IntlMessageFormat('Today is: {now, date, ::yyyyMMdd}', 'en-GB').format({\n  now: new Date(),\n})\n")),Object(l.b)("h2",{id:"advanced-usage"},"Advanced Usage"),Object(l.b)("h3",{id:"passing-in-ast"},"Passing in AST"),Object(l.b)("p",null,"You can pass in pre-parsed AST to IntlMessageFormat like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"new IntlMessageFormat('hello').format() // prints out hello\n\n// is equivalent to\n\nimport IntlMessageFormat from 'intl-messageformat'\nimport parser from 'intl-messageformat-parser'\nnew IntlMessageFormat(parser.parse('hello')).format() // prints out hello\n")),Object(l.b)("p",null,"This helps performance for cases like SSR or preload/precompilation-supported platforms since ",Object(l.b)("inlineCode",{parentName:"p"},"AST")," can be cached."),Object(l.b)("p",null,"If your messages are all in ASTs, you can alias ",Object(l.b)("inlineCode",{parentName:"p"},"intl-messageformat-parser")," to ",Object(l.b)("inlineCode",{parentName:"p"},"{default: undefined}")," to save some bytes during bundling."),Object(l.b)("h3",{id:"formatters"},"Formatters"),Object(l.b)("p",null,"For complex messages, initializing ",Object(l.b)("inlineCode",{parentName:"p"},"Intl.*")," constructors can be expensive. Therefore, we allow user to pass in ",Object(l.b)("inlineCode",{parentName:"p"},"formatters")," to provide memoized instances of these ",Object(l.b)("inlineCode",{parentName:"p"},"Intl")," objects. This opts combines with ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#passing-in-ast"}),"passing in AST")," and ",Object(l.b)("inlineCode",{parentName:"p"},"fast-memoize")," can speed things up by 30x per the benchmark down below."),Object(l.b)("p",null,"For example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import IntlMessageFormat from 'intl-messageformat'\nimport memoize from 'fast-memoize'\nconst formatters = {\n  getNumberFormat: memoize(\n    (locale, opts) => new Intl.NumberFormat(locale, opts)\n  ),\n  getDateTimeFormat: memoize(\n    (locale, opts) => new Intl.DateTimeFormat(locale, opts)\n  ),\n  getPluralRules: memoize((locale, opts) => new Intl.PluralRules(locale, opts)),\n}\nnew IntlMessageFormat('hello {number, number}', 'en', undefined, {\n  formatters,\n}).format({number: 3}) // prints out `hello, 3`\n")),Object(l.b)("h2",{id:"benchmark"},"Benchmark"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"format_cached_complex_msg x 539,674 ops/sec \xb11.87% (87 runs sampled)\nformat_cached_string_msg x 99,311,640 ops/sec \xb12.15% (87 runs sampled)\nnew_complex_msg_preparsed x 1,490 ops/sec \xb18.37% (54 runs sampled)\nnew_complex_msg x 836 ops/sec \xb131.96% (67 runs sampled)\nnew_string_msg x 27,752 ops/sec \xb18.25% (65 runs sampled)\ncomplex msg format x 799 ops/sec \xb19.38% (55 runs sampled)\ncomplex msg w/ formatters format x 1,878 ops/sec \xb116.63% (64 runs sampled)\ncomplex preparsed msg w/ formatters format x 26,482 ops/sec \xb12.55% (84 runs sampled)\n")))}c.isMDXComponent=!0}}]);
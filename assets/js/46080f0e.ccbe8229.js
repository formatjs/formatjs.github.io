(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{122:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),c=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(a),u=r,d=s["".concat(b,".").concat(u)]||s[u]||m[u]||l;return a?n.a.createElement(d,o(o({ref:t},p),{},{components:a})):n.a.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,b=new Array(l);b[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var p=2;p<l;p++)b[p]=a[p];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return c}));var r=a(3),n=a(8),l=(a(0),a(122)),b={id:"icu-messageformat-parser",title:"ICU MessageFormat Parser"},o={unversionedId:"icu-messageformat-parser",id:"icu-messageformat-parser",isDocsHomePage:!1,title:"ICU MessageFormat Parser",description:"Parses ICU Message strings into an AST via JavaScript.",source:"@site/docs/icu-messageformat-parser.md",slug:"/icu-messageformat-parser",permalink:"/docs/icu-messageformat-parser",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/icu-messageformat-parser.md",version:"current",sidebar:"api",previous:{title:"Intl MessageFormat",permalink:"/docs/intl-messageformat"}},i=[{value:"Overview",id:"overview",children:[]},{value:"Usage",id:"usage",children:[{value:"Example",id:"example",children:[]}]},{value:"Supported DateTime Skeleton",id:"supported-datetime-skeleton",children:[]},{value:"Benchmarks",id:"benchmarks",children:[]}],p={toc:i};function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Parses ",Object(l.b)("a",{parentName:"p",href:"https://unicode-org.github.io/icu/userguide/format_parse/messages"},"ICU Message strings")," into an AST via JavaScript."),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@formatjs/icu-messageformat-parser"},Object(l.b)("img",{parentName:"a",src:"https://badgen.net/npm/v/@formatjs/icu-messageformat-parser",alt:"npm Version"})),"\n",Object(l.b)("a",{parentName:"p",href:"https://bundlephobia.com/result?p=@formatjs/icu-messageformat-parser"},Object(l.b)("img",{parentName:"a",src:"https://badgen.net/bundlephobia/minzip/@formatjs/icu-messageformat-parser",alt:"size"}))),Object(l.b)("h2",{id:"overview"},"Overview"),Object(l.b)("p",null,"This package implements a parser in JavaScript that parses the industry standard ",Object(l.b)("a",{parentName:"p",href:"https://unicode-org.github.io/icu/userguide/format_parse/messages"},"ICU Message strings")," \u2014 used for internationalization \u2014 into an AST. The produced AST can then be used by a compiler, like ",Object(l.b)("a",{parentName:"p",href:"/docs/intl-messageformat"},Object(l.b)("inlineCode",{parentName:"a"},"intl-messageformat")),", to produce localized formatted strings for display to users."),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ts"},"import {parse} from '@formatjs/icu-messageformat-parser'\nconst ast = parse(`this is {count, plural, \n  one{# dog} \n  other{# dogs}\n}`)\n")),Object(l.b)("h3",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},"<pre>\n  {JSON.stringify(\n    IcuMessageFormatParser.parse(\n      `On {takenDate, date, short} <bold>{name}</bold> took {numPhotos, plural,\n          =0 {no photos.}\n          =1 {one photo.}\n          other {# photos.}\n        }`\n    ),\n    undefined,\n    2\n  )}\n</pre>\n")),Object(l.b)("h2",{id:"supported-datetime-skeleton"},"Supported DateTime Skeleton"),Object(l.b)("p",null,"ICU provides a ",Object(l.b)("a",{parentName:"p",href:"https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table"},"wide array of pattern")," to customize date time format. However, not all of them are available via ECMA402's Intl API. Therefore, our parser only support the following patterns"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Symbol"),Object(l.b)("th",{parentName:"tr",align:null},"Meaning"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"G"),Object(l.b)("td",{parentName:"tr",align:null},"Era designator"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"y"),Object(l.b)("td",{parentName:"tr",align:null},"year"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"M"),Object(l.b)("td",{parentName:"tr",align:null},"month in year"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"L"),Object(l.b)("td",{parentName:"tr",align:null},"stand-alone month in year"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"d"),Object(l.b)("td",{parentName:"tr",align:null},"day in month"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"E"),Object(l.b)("td",{parentName:"tr",align:null},"day of week"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"e"),Object(l.b)("td",{parentName:"tr",align:null},"local day of week"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"e..eee")," is not supported")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"c"),Object(l.b)("td",{parentName:"tr",align:null},"stand-alone local day of week"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"c..ccc")," is not supported")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"a"),Object(l.b)("td",{parentName:"tr",align:null},"AM/PM marker"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"h"),Object(l.b)("td",{parentName:"tr",align:null},"Hour ","[1-12]"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"H"),Object(l.b)("td",{parentName:"tr",align:null},"Hour ","[0-23]"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"K"),Object(l.b)("td",{parentName:"tr",align:null},"Hour ","[0-11]"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"k"),Object(l.b)("td",{parentName:"tr",align:null},"Hour ","[1-24]"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"m"),Object(l.b)("td",{parentName:"tr",align:null},"Minute"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"s"),Object(l.b)("td",{parentName:"tr",align:null},"Second"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"z"),Object(l.b)("td",{parentName:"tr",align:null},"Time Zone"),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("h2",{id:"benchmarks"},"Benchmarks"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"complex_msg AST length 10861\nnormal_msg AST length 1665\nsimple_msg AST length 364\nstring_msg AST length 131\n\ncomplex_msg x 29,940 ops/sec \xb11.23% (89 runs sampled)\nnormal_msg x 253,612 ops/sec \xb11.01% (92 runs sampled)\nsimple_msg x 1,805,642 ops/sec \xb10.70% (94 runs sampled)\nstring_msg x 2,694,133 ops/sec \xb11.05% (95 runs sampled)\n")))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5784],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,h=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1271:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>p,toc:()=>m,default:()=>d});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={id:"icu-syntax",title:"Message Syntax"},s=void 0,p={unversionedId:"core-concepts/icu-syntax",id:"core-concepts/icu-syntax",title:"Message Syntax",description:"If you are translating text you'll need a way for your translators to express the subtleties of spelling, grammar, and conjugation inherent in each language. We use the ICU Message syntax which is also used in Java and PHP.",source:"@site/docs/core-concepts/icu-syntax.md",sourceDirName:"core-concepts",slug:"/core-concepts/icu-syntax",permalink:"/docs/core-concepts/icu-syntax",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/core-concepts/icu-syntax.md",tags:[],version:"current",frontMatter:{id:"icu-syntax",title:"Message Syntax"},sidebar:"docs",previous:{title:"Basic Internationalization Principles",permalink:"/docs/core-concepts/basic-internationalization-principles"}},m=[{value:"Basic Principles",id:"basic-principles",children:[],level:2},{value:"Simple Argument",id:"simple-argument",children:[],level:2},{value:"Formatted Argument",id:"formatted-argument",children:[{value:"<code>number</code> Type",id:"number-type",children:[],level:3},{value:"<code>date</code> Type",id:"date-type",children:[],level:3},{value:"<code>time</code> Type",id:"time-type",children:[],level:3},{value:"Supported DateTime Skeleton",id:"supported-datetime-skeleton",children:[],level:3},{value:"<code>{select}</code> Format",id:"select-format",children:[],level:3},{value:"<code>{plural}</code> Format",id:"plural-format",children:[],level:3},{value:"<code>{selectordinal}</code> Format",id:"selectordinal-format",children:[],level:3}],level:2},{value:"Rich Text Formatting",id:"rich-text-formatting",children:[],level:2},{value:"Quoting / Escaping",id:"quoting--escaping",children:[],level:2}],u={toc:m};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you are translating text you'll need a way for your translators to express the subtleties of spelling, grammar, and conjugation inherent in each language. We use the ",(0,i.kt)("a",{parentName:"p",href:"https://unicode-org.github.io/icu/userguide/format_parse/messages"},"ICU Message syntax")," which is also used in Java and PHP."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/intl-messageformat"},(0,i.kt)("inlineCode",{parentName:"a"},"intl-messageformat"))," library takes the message and input data and creates an appropriately formatted string. This feature is included with all of the integrations we provide."),(0,i.kt)("p",null,"The following sections describe the ICU Message syntax and show how to use this features provided the FormatJS libraries:"),(0,i.kt)("h2",{id:"basic-principles"},"Basic Principles"),(0,i.kt)("p",null,"The simplest transform for the message is a literal string."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"Hello everyone\n")),(0,i.kt)("p",null,'All other transforms are done using replacements called "arguments". They are enclosed in curly braces (',(0,i.kt)("inlineCode",{parentName:"p"},"{")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"}"),") and refer to a value in the input data."),(0,i.kt)("h2",{id:"simple-argument"},"Simple Argument"),(0,i.kt)("p",null,"You can use a ",(0,i.kt)("inlineCode",{parentName:"p"},"{key}")," argument for placing a value into the message. The key is looked up in the input data, and the string is interpolated with its value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Hello {who}\n")),(0,i.kt)("h2",{id:"formatted-argument"},"Formatted Argument"),(0,i.kt)("p",null,"Values can also be formatted based on their type. You use a ",(0,i.kt)("inlineCode",{parentName:"p"},"{key, type, format}")," argument to do that."),(0,i.kt)("p",null,"The elements of the argument are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," is where in the input data to find the data"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," is how to interpret the value (see below)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"format")," is optional, and is a further refinement on how to display that type of data")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"I have {numCats, number} cats.\n")),(0,i.kt)("h3",{id:"number-type"},(0,i.kt)("inlineCode",{parentName:"h3"},"number")," Type"),(0,i.kt)("p",null,"This type is used to format numbers in a way that is sensitive to the locale. It understands the following values for the optional ",(0,i.kt)("inlineCode",{parentName:"p"},"format")," element of the argument:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"I have {numCats, number} cats.\nAlmost {pctBlack, number, ::percent} of them are black.\n")),(0,i.kt)("p",null,"Internally it uses the Intl.NumberFormat API. You can define custom values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"format")," element, which are passed to the Intl.NumberFormat constructor."),(0,i.kt)("p",null,"Sometimes embedding how the number will be formatted provides great context to translators. We also support ICU Number Skeletons using the same syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"The price of this bagel is {num, number, ::sign-always compact-short currency/GBP}\n")),(0,i.kt)("p",null,"You can read more about this ",(0,i.kt)("a",{parentName:"p",href:"https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html"},"here"),"."),(0,i.kt)("h3",{id:"date-type"},(0,i.kt)("inlineCode",{parentName:"h3"},"date")," Type"),(0,i.kt)("p",null,"This type is used to format dates in a way that is sensitive to the locale. It understands the following values for the optional format element of the argument:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"short")," is used to format dates in the shortest possible way"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"medium")," is used to format dates with short textual representation of the month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"long")," is used to format dates with long textual representation of the month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"full")," is used to format dates with the most detail")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Sale begins {start, date, medium}\n")),(0,i.kt)("p",null,"Internally it uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"Intl.DateTimeFormat")," API. You can define custom values for the format element, which are passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Intl.DateTimeFormat")," constructor."),(0,i.kt)("h3",{id:"time-type"},(0,i.kt)("inlineCode",{parentName:"h3"},"time")," Type"),(0,i.kt)("p",null,"This type is used to format times in a way that is sensitive to the locale. It understands the following values for the optional format element of the argument:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"short")," is used to format times with hours and minutes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"medium")," is used to format times with hours, minutes, and seconds"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"long")," is used to format times with hours, minutes, seconds, and timezone"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"full")," is the same as long")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Coupon expires at {expires, time, short}\n")),(0,i.kt)("p",null,"Internally it uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"Intl.DateTimeFormat")," API. You can define custom values for the format element, which are passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Intl.DateTimeFormat")," constructor."),(0,i.kt)("h3",{id:"supported-datetime-skeleton"},"Supported DateTime Skeleton"),(0,i.kt)("p",null,"Similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," type, we also support ICU DateTime skeleton. ICU provides a ",(0,i.kt)("a",{parentName:"p",href:"https://unicode-org.github.io/icu/userguide/format_parse/datetime/#date-field-symbol-table"},"wide array of pattern")," to customize date time format. However, not all of them are available via ECMA402's Intl API. Therefore, we only support the following patterns"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"G"),(0,i.kt)("td",{parentName:"tr",align:null},"Era designator"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"y"),(0,i.kt)("td",{parentName:"tr",align:null},"year"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"M"),(0,i.kt)("td",{parentName:"tr",align:null},"month in year"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"L"),(0,i.kt)("td",{parentName:"tr",align:null},"stand-alone month in year"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"d"),(0,i.kt)("td",{parentName:"tr",align:null},"day in month"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"E"),(0,i.kt)("td",{parentName:"tr",align:null},"day of week"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"e"),(0,i.kt)("td",{parentName:"tr",align:null},"local day of week"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"e..eee")," is not supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"c"),(0,i.kt)("td",{parentName:"tr",align:null},"stand-alone local day of week"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"c..ccc")," is not supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"a"),(0,i.kt)("td",{parentName:"tr",align:null},"AM/PM marker"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"h"),(0,i.kt)("td",{parentName:"tr",align:null},"Hour ","[1-12]"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"H"),(0,i.kt)("td",{parentName:"tr",align:null},"Hour ","[0-23]"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"K"),(0,i.kt)("td",{parentName:"tr",align:null},"Hour ","[0-11]"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"k"),(0,i.kt)("td",{parentName:"tr",align:null},"Hour ","[1-24]"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"m"),(0,i.kt)("td",{parentName:"tr",align:null},"Minute"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"s"),(0,i.kt)("td",{parentName:"tr",align:null},"Second"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"z"),(0,i.kt)("td",{parentName:"tr",align:null},"Time Zone"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"select-format"},(0,i.kt)("inlineCode",{parentName:"h3"},"{select}")," Format"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"{key, select, matches}")," is used to choose output by matching a value to one of many choices. (It is similar to the ",(0,i.kt)("inlineCode",{parentName:"p"},"switch")," statement available in some programming languages.) The key is looked up in the input data. The corresponding value is matched to one of matches and the corresponding output is returned. The ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," argument must follow ",(0,i.kt)("a",{parentName:"p",href:"https://www.unicode.org/reports/tr31/tr31-9.html#Pattern_Syntax"},"Unicode Pattern_Syntax"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"matches")," is a space-separated list of ",(0,i.kt)("inlineCode",{parentName:"p"},"matches"),"."),(0,i.kt)("p",null,"The format of a match is match ",(0,i.kt)("inlineCode",{parentName:"p"},"{output}"),". (A match is similar to the case statement of the switch found in some programming languages.) The ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," is a literal value. If it is the same as the value for ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," then the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"output")," will be used."),(0,i.kt)("p",null,"output is itself a message, so it can be a literal string or also have more arguments nested inside of it."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"other")," match is special and is used if nothing else matches. (This is similar to the default case of the switch found in some programming languages.)"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"other")," is required as per ",(0,i.kt)("inlineCode",{parentName:"p"},"icu4j")," implementation. We will throw an error if ",(0,i.kt)("inlineCode",{parentName:"p"},"select")," is used without ",(0,i.kt)("inlineCode",{parentName:"p"},"other"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{gender, select,\n    male {He}\n    female {She}\n    other {They}\n} will respond shortly.\n")),(0,i.kt)("p",null,"Here's an example of nested arguments."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{taxableArea, select,\n    yes {An additional {taxRate, number, percent} tax will be collected.}\n    other {No taxes apply.}\n}\n")),(0,i.kt)("h3",{id:"plural-format"},(0,i.kt)("inlineCode",{parentName:"h3"},"{plural}")," Format"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"{key, plural, matches}")," is used to choose output based on the pluralization rules of the current locale. It is very similar to the ",(0,i.kt)("inlineCode",{parentName:"p"},"{select}")," format above except that the value is expected to be a number and is mapped to a plural category."),(0,i.kt)("p",null,"The match is a literal value and is matched to one of these plural categories. Not all languages use all plural categories."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"zero"),": This category is used for languages that have grammar specialized specifically for zero number of items. (Examples are Arabic and Latvian.)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"one"),": This category is used for languages that have grammar specialized specifically for one item. Many languages, but not all, use this plural category. (Many popular Asian languages, such as Chinese and Japanese, do not use this category.)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"two"),": This category is used for languages that have grammar specialized specifically for two items. (Examples are Arabic and Welsh.)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"few"),": This category is used for languages that have grammar specialized specifically for a small number of items. For some languages this is used for 2-4 items, for some 3-10 items, and other languages have even more complex rules."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"many"),": This category is used for languages that have grammar specialized specifically for a larger number of items. (Examples are Arabic, Polish, and Russian.)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"other"),': This category is used if the value doesn\'t match one of the other plural categories. Note that this is used for "plural" for languages (such as English) that have a simple "singular" versus "plural" dichotomy.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"=value"),": This is used to match a specific value regardless of the plural categories of the current locale.")),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"other")," is required as per ",(0,i.kt)("inlineCode",{parentName:"p"},"icu4j")," implementation. We will throw an error if ",(0,i.kt)("inlineCode",{parentName:"p"},"plural")," is used without ",(0,i.kt)("inlineCode",{parentName:"p"},"other"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Cart: {itemCount} {itemCount, plural,\n    one {item}\n    other {items}\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"You have {itemCount, plural,\n    =0 {no items}\n    one {1 item}\n    other {{itemCount} items}\n}.\n")),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"output")," of the match, the ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," special token can be used as a placeholder for the numeric value and will be formatted as if it were ",(0,i.kt)("inlineCode",{parentName:"p"},"{key, number}"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"You have {itemCount, plural,\n    =0 {no items}\n    one {# item}\n    other {# items}\n}.\n")),(0,i.kt)("h3",{id:"selectordinal-format"},(0,i.kt)("inlineCode",{parentName:"h3"},"{selectordinal}")," Format"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"{key, selectordinal, matches}")," is used to choose output based on the ordinal pluralization rules (1st, 2nd, 3rd, etc.) of the current locale. It is very similar to the {plural} format above except that the value is mapped to an ordinal plural category."),(0,i.kt)("p",null,"The match is a literal value and is matched to one of these plural categories. Not all languages use all plural categories."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"zero"),": This category is used for languages that have grammar specialized specifically for zero number of items. (Examples are Arabic and Latvian.)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"one"),": This category is used for languages that have grammar specialized specifically for one item. Many languages, but not all, use this plural category. (Many popular Asian languages, such as Chinese and Japanese, do not use this category.)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"two"),": This category is used for languages that have grammar specialized specifically for two items. (Examples are Arabic and Welsh.)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"few"),": This category is used for languages that have grammar specialized specifically for a small number of items. For some languages this is used for 2-4 items, for some 3-10 items, and other languages have even more complex rules."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"many"),": This category is used for languages that have grammar specialized specifically for a larger number of items. (Examples are Arabic, Polish, and Russian.)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"other"),': This category is used if the value doesn\'t match one of the other plural categories. Note that this is used for "plural" for languages (such as English) that have a simple "singular" versus "plural" dichotomy.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"=value"),": This is used to match a specific value regardless of the plural categories of the current locale.")),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"other")," is required as per ",(0,i.kt)("inlineCode",{parentName:"p"},"icu4j")," implementation. We will throw an error if ",(0,i.kt)("inlineCode",{parentName:"p"},"selectordinal")," is used without ",(0,i.kt)("inlineCode",{parentName:"p"},"other"),"."))),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"output")," of the match, the ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," special token can be used as a placeholder for the numeric value and will be formatted as if it were ",(0,i.kt)("inlineCode",{parentName:"p"},"{key, number}"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"It's my cat's {year, selectordinal,\n    one {#st}\n    two {#nd}\n    few {#rd}\n    other {#th}\n} birthday!\n")),(0,i.kt)("h2",{id:"rich-text-formatting"},"Rich Text Formatting"),(0,i.kt)("p",null,"We also support embedded rich text formatting in our message using tags. This allows developers to embed as much text as possible so sentences don't have to be broken up into chunks\n",(0,i.kt)("strong",{parentName:"p"},"NOTE: This is not XML/HTML tag")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Our price is <boldThis>{price, number, ::currency/USD precision-integer}</boldThis>\nwith <link>{pct, number, ::percent} discount</link>\n")),(0,i.kt)("h2",{id:"quoting--escaping"},"Quoting / Escaping"),(0,i.kt)("p",null,"The ASCII apostrophe ",(0,i.kt)("inlineCode",{parentName:"p"},"'")," (U+0027) can be used to escape syntax characters in the text portion of the message. A single\napostrophe escapes one syntax character immediately following it; a pair of apostrophes escape every syntax characters\nwrapped between them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'"This is not an interpolation: \'{word}"\n//\u2192 "This is not an interpolation: {word}"\n"These are not interpolations: \'{word1} {word2}\'"\n//\u2192 "These are not interpolations: {word1} {word2}"\n"\'<notATag>"\n//\u2192 "<notATag>"\n"\'<notATag>hello</notATag>\'"\n//\u2192 "<notATag>hello</notATag>"\n')),(0,i.kt)("p",null,"Two consecutive ASCII apostrophes represents one ASCII apostrophe, similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"%%")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"printf")," represents one ",(0,i.kt)("inlineCode",{parentName:"p"},"%"),".\nHowever, we recommend using curly apostrophe ",(0,i.kt)("inlineCode",{parentName:"p"},"\u2019")," (U+2019) for human-readable strings and only use ASCII apostrophe ",(0,i.kt)("inlineCode",{parentName:"p"},"'"),"\n(U+0027) in ICU message syntax."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"\"This '{isn''t}' obvious.\"\n//\u2192 \"This {isn't} obvious.\"\n")))}d.isMDXComponent=!0}}]);
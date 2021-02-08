(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{115:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),l=(a(0),a(120)),i={id:"icu-syntax",title:"Message Syntax"},o={unversionedId:"core-concepts/icu-syntax",id:"core-concepts/icu-syntax",isDocsHomePage:!1,title:"Message Syntax",description:"If you are translating text you'll need a way for your translators to express the subtleties of spelling, grammar, and conjugation inherent in each language. We use the ICU Message syntax which is also used in Java and PHP.",source:"@site/docs/core-concepts/icu-syntax.md",slug:"/core-concepts/icu-syntax",permalink:"/docs/core-concepts/icu-syntax",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/core-concepts/icu-syntax.md",version:"current",sidebar:"docs",previous:{title:"Basic Internationalization Principles",permalink:"/docs/core-concepts/basic-internationalization-principles"}},s=[{value:"Basic Principles",id:"basic-principles",children:[]},{value:"Simple Argument",id:"simple-argument",children:[]},{value:"Formatted Argument",id:"formatted-argument",children:[{value:"<code>number</code> Type",id:"number-type",children:[]},{value:"<code>date</code> Type",id:"date-type",children:[]},{value:"<code>time</code> Type",id:"time-type",children:[]},{value:"Supported DateTime Skeleton",id:"supported-datetime-skeleton",children:[]},{value:"<code>{select}</code> Format",id:"select-format",children:[]},{value:"<code>{plural}</code> Format",id:"plural-format",children:[]},{value:"<code>{selectordinal}</code> Format",id:"selectordinal-format",children:[]}]},{value:"Rich Text Formatting",id:"rich-text-formatting",children:[]},{value:"Quoting / Escaping",id:"quoting--escaping",children:[]}],c={toc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"If you are translating text you'll need a way for your translators to express the subtleties of spelling, grammar, and conjugation inherent in each language. We use the ",Object(l.b)("a",{parentName:"p",href:"https://unicode-org.github.io/icu/userguide/format_parse/messages"},"ICU Message syntax")," which is also used in Java and PHP."),Object(l.b)("p",null,"The ",Object(l.b)("a",{parentName:"p",href:"/docs/intl-messageformat"},Object(l.b)("inlineCode",{parentName:"a"},"intl-messageformat"))," library takes the message and input data and creates an appropriately formatted string. This feature is included with all of the integrations we provide."),Object(l.b)("p",null,"The following sections describe the ICU Message syntax and show how to use this features provided the FormatJS libraries:"),Object(l.b)("h2",{id:"basic-principles"},"Basic Principles"),Object(l.b)("p",null,"The simplest transform for the message is a literal string."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},"Hello everyone\n")),Object(l.b)("p",null,'All other transforms are done using replacements called "arguments". They are enclosed in curly braces (',Object(l.b)("inlineCode",{parentName:"p"},"{")," and ",Object(l.b)("inlineCode",{parentName:"p"},"}"),") and refer to a value in the input data."),Object(l.b)("h2",{id:"simple-argument"},"Simple Argument"),Object(l.b)("p",null,"You can use a ",Object(l.b)("inlineCode",{parentName:"p"},"{key}")," argument for placing a value into the message. The key is looked up in the input data, and the string is interpolated with its value."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"Hello {who}\n")),Object(l.b)("h2",{id:"formatted-argument"},"Formatted Argument"),Object(l.b)("p",null,"Values can also be formatted based on their type. You use a ",Object(l.b)("inlineCode",{parentName:"p"},"{key, type, format}")," argument to do that."),Object(l.b)("p",null,"The elements of the argument are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"key")," is where in the input data to find the data"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"type")," is how to interpret the value (see below)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"format")," is optional, and is a further refinement on how to display that type of data")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"I have {numCats, number} cats.\n")),Object(l.b)("h3",{id:"number-type"},Object(l.b)("inlineCode",{parentName:"h3"},"number")," Type"),Object(l.b)("p",null,"This type is used to format numbers in a way that is sensitive to the locale. It understands the following values for the optional ",Object(l.b)("inlineCode",{parentName:"p"},"format")," element of the argument:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"I have {numCats, number} cats.\nAlmost {pctBlack, number, ::percent} of them are black.\n")),Object(l.b)("p",null,"Internally it uses the Intl.NumberFormat API. You can define custom values for the ",Object(l.b)("inlineCode",{parentName:"p"},"format")," element, which are passed to the Intl.NumberFormat constructor."),Object(l.b)("p",null,"Sometimes embedding how the number will be formatted provides great context to translators. We also support ICU Number Skeletons using the same syntax:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"The price of this bagel is {num, number, ::sign-always compact-short currency/GBP}\n")),Object(l.b)("p",null,"You can read more about this ",Object(l.b)("a",{parentName:"p",href:"https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html"},"here"),"."),Object(l.b)("h3",{id:"date-type"},Object(l.b)("inlineCode",{parentName:"h3"},"date")," Type"),Object(l.b)("p",null,"This type is used to format dates in a way that is sensitive to the locale. It understands the following values for the optional format element of the argument:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"short")," is used to format dates in the shortest possible way"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"medium")," is used to format dates with short textual representation of the month"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"long")," is used to format dates with long textual representation of the month"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"full")," is used to format dates with the most detail")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"Sale begins {start, date, medium}\n")),Object(l.b)("p",null,"Internally it uses the ",Object(l.b)("inlineCode",{parentName:"p"},"Intl.DateTimeFormat")," API. You can define custom values for the format element, which are passed to the ",Object(l.b)("inlineCode",{parentName:"p"},"Intl.DateTimeFormat")," constructor."),Object(l.b)("h3",{id:"time-type"},Object(l.b)("inlineCode",{parentName:"h3"},"time")," Type"),Object(l.b)("p",null,"This type is used to format times in a way that is sensitive to the locale. It understands the following values for the optional format element of the argument:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"short")," is used to format times with hours and minutes"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"medium")," is used to format times with hours, minutes, and seconds"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"long")," is used to format times with hours, minutes, seconds, and timezone"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"full")," is the same as long")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"Coupon expires at {expires, time, short}\n")),Object(l.b)("p",null,"Internally it uses the ",Object(l.b)("inlineCode",{parentName:"p"},"Intl.DateTimeFormat")," API. You can define custom values for the format element, which are passed to the ",Object(l.b)("inlineCode",{parentName:"p"},"Intl.DateTimeFormat")," constructor."),Object(l.b)("h3",{id:"supported-datetime-skeleton"},"Supported DateTime Skeleton"),Object(l.b)("p",null,"Similar to ",Object(l.b)("inlineCode",{parentName:"p"},"number")," type, we also support ICU DateTime skeleton. ICU provides a ",Object(l.b)("a",{parentName:"p",href:"https://unicode-org.github.io/icu/userguide/format_parse/datetime/#date-field-symbol-table"},"wide array of pattern")," to customize date time format. However, not all of them are available via ECMA402's Intl API. Therefore, we only support the following patterns"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Symbol"),Object(l.b)("th",{parentName:"tr",align:null},"Meaning"),Object(l.b)("th",{parentName:"tr",align:null},"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"G"),Object(l.b)("td",{parentName:"tr",align:null},"Era designator"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"y"),Object(l.b)("td",{parentName:"tr",align:null},"year"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"M"),Object(l.b)("td",{parentName:"tr",align:null},"month in year"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"L"),Object(l.b)("td",{parentName:"tr",align:null},"stand-alone month in year"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"d"),Object(l.b)("td",{parentName:"tr",align:null},"day in month"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"E"),Object(l.b)("td",{parentName:"tr",align:null},"day of week"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"e"),Object(l.b)("td",{parentName:"tr",align:null},"local day of week"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"e..eee")," is not supported")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"c"),Object(l.b)("td",{parentName:"tr",align:null},"stand-alone local day of week"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"c..ccc")," is not supported")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"a"),Object(l.b)("td",{parentName:"tr",align:null},"AM/PM marker"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"h"),Object(l.b)("td",{parentName:"tr",align:null},"Hour ","[1-12]"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"H"),Object(l.b)("td",{parentName:"tr",align:null},"Hour ","[0-23]"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"K"),Object(l.b)("td",{parentName:"tr",align:null},"Hour ","[0-11]"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"k"),Object(l.b)("td",{parentName:"tr",align:null},"Hour ","[1-24]"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"m"),Object(l.b)("td",{parentName:"tr",align:null},"Minute"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"s"),Object(l.b)("td",{parentName:"tr",align:null},"Second"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"z"),Object(l.b)("td",{parentName:"tr",align:null},"Time Zone"),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("h3",{id:"select-format"},Object(l.b)("inlineCode",{parentName:"h3"},"{select}")," Format"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"{key, select, matches}")," is used to choose output by matching a value to one of many choices. (It is similar to the ",Object(l.b)("inlineCode",{parentName:"p"},"switch")," statement available in some programming languages.) The key is looked up in the input data. The corresponding value is matched to one of matches and the corresponding output is returned. The ",Object(l.b)("inlineCode",{parentName:"p"},"matches")," is a space-separated list of ",Object(l.b)("inlineCode",{parentName:"p"},"matches"),"."),Object(l.b)("p",null,"The format of a match is match ",Object(l.b)("inlineCode",{parentName:"p"},"{output}"),". (A match is similar to the case statement of the switch found in some programming languages.) The ",Object(l.b)("inlineCode",{parentName:"p"},"match")," is a literal value. If it is the same as the value for ",Object(l.b)("inlineCode",{parentName:"p"},"key")," then the corresponding ",Object(l.b)("inlineCode",{parentName:"p"},"output")," will be used."),Object(l.b)("p",null,"output is itself a message, so it can be a literal string or also have more arguments nested inside of it."),Object(l.b)("p",null,"The other match is special and is used if nothing else matches. (This is similar to the default case of the switch found in some programming languages.)"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"{gender, select,\n    male {He}\n    female {She}\n    other {They}\n} will respond shortly.\n")),Object(l.b)("p",null,"Here's an example of nested arguments."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"{taxableArea, select,\n    yes {An additional {taxRate, number, percent} tax will be collected.}\n    other {No taxes apply.}\n}\n")),Object(l.b)("h3",{id:"plural-format"},Object(l.b)("inlineCode",{parentName:"h3"},"{plural}")," Format"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"{key, plural, matches}")," is used to choose output based on the pluralization rules of the current locale. It is very similar to the ",Object(l.b)("inlineCode",{parentName:"p"},"{select}")," format above except that the value is expected to be a number and is mapped to a plural category."),Object(l.b)("p",null,"The match is a literal value and is matched to one of these plural categories. Not all languages use all plural categories."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"zero"),": This category is used for languages that have grammar specialized specifically for zero number of items. (Examples are Arabic and Latvian.)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"one"),": This category is used for languages that have grammar specialized specifically for one item. Many languages, but not all, use this plural category. (Many popular Asian languages, such as Chinese and Japanese, do not use this category.)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"two"),": This category is used for languages that have grammar specialized specifically for two items. (Examples are Arabic and Welsh.)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"few"),": This category is used for languages that have grammar specialized specifically for a small number of items. For some languages this is used for 2-4 items, for some 3-10 items, and other languages have even more complex rules."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"many"),": This category is used for languages that have grammar specialized specifically for a larger number of items. (Examples are Arabic, Polish, and Russian.)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"other"),': This category is used if the value doesn\'t match one of the other plural categories. Note that this is used for "plural" for languages (such as English) that have a simple "singular" versus "plural" dichotomy.'),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"=value"),": This is used to match a specific value regardless of the plural categories of the current locale.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"Cart: {itemCount} {itemCount, plural,\n    one {item}\n    other {items}\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"You have {itemCount, plural,\n    =0 {no items}\n    one {1 item}\n    other {{itemCount} items}\n}.\n")),Object(l.b)("p",null,"In the ",Object(l.b)("inlineCode",{parentName:"p"},"output")," of the match, the ",Object(l.b)("inlineCode",{parentName:"p"},"#")," special token can be used as a placeholder for the numeric value and will be formatted as if it were ",Object(l.b)("inlineCode",{parentName:"p"},"{key, number}"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"You have {itemCount, plural,\n    =0 {no items}\n    one {# item}\n    other {# items}\n}.\n")),Object(l.b)("h3",{id:"selectordinal-format"},Object(l.b)("inlineCode",{parentName:"h3"},"{selectordinal}")," Format"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"{key, selectordinal, matches}")," is used to choose output based on the ordinal pluralization rules (1st, 2nd, 3rd, etc.) of the current locale. It is very similar to the {plural} format above except that the value is mapped to an ordinal plural category."),Object(l.b)("p",null,"The match is a literal value and is matched to one of these plural categories. Not all languages use all plural categories."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"zero"),": This category is used for languages that have grammar specialized specifically for zero number of items. (Examples are Arabic and Latvian.)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"one"),": This category is used for languages that have grammar specialized specifically for one item. Many languages, but not all, use this plural category. (Many popular Asian languages, such as Chinese and Japanese, do not use this category.)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"two"),": This category is used for languages that have grammar specialized specifically for two items. (Examples are Arabic and Welsh.)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"few"),": This category is used for languages that have grammar specialized specifically for a small number of items. For some languages this is used for 2-4 items, for some 3-10 items, and other languages have even more complex rules."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"many"),": This category is used for languages that have grammar specialized specifically for a larger number of items. (Examples are Arabic, Polish, and Russian.)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"other"),': This category is used if the value doesn\'t match one of the other plural categories. Note that this is used for "plural" for languages (such as English) that have a simple "singular" versus "plural" dichotomy.'),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"=value"),": This is used to match a specific value regardless of the plural categories of the current locale.")),Object(l.b)("p",null,"In the ",Object(l.b)("inlineCode",{parentName:"p"},"output")," of the match, the ",Object(l.b)("inlineCode",{parentName:"p"},"#")," special token can be used as a placeholder for the numeric value and will be formatted as if it were ",Object(l.b)("inlineCode",{parentName:"p"},"{key, number}"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"It's my cat's {year, selectordinal,\n    one {#st}\n    two {#nd}\n    few {#rd}\n    other {#th}\n} birthday!\n")),Object(l.b)("h2",{id:"rich-text-formatting"},"Rich Text Formatting"),Object(l.b)("p",null,"We also support embedded rich text formatting in our message using tags. This allows developers to embed as much text as possible so sentences don't have to be broken up into chunks\n",Object(l.b)("strong",{parentName:"p"},"NOTE: This is not XML/HTML tag")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"Our price is <boldThis>{price, number, ::currency/USD precision-integer}</boldThis>\nwith <link>{pct, number, ::percent} discount</link>\n")),Object(l.b)("h2",{id:"quoting--escaping"},"Quoting / Escaping"),Object(l.b)("p",null,"The ASCII apostrophe ('`') can be used to escape syntax characters in the text portion of the message. A single\napostrophe escapes one syntax character immediately following it; a pair of apostrophes escape every syntax characters\nwrapped between them:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'"This is not an interpolation: \'{word}"\n//\u2192 "This is not an interpolation: {word}"\n"These are not interpolatons: \'{word1} {word2}\'"\n//\u2192 "These are not interpolatons: {word1} {word2}"\n"\'<notATag>"\n//\u2192 "<notATag>"\n"\'<notATag>hello</notATag>\'"\n//\u2192 "<notATag>hello</notATag>"\n\n')),Object(l.b)("p",null,"Two consecutive ASCII apostrophes represents one ASCII apostrophe, similar to ",Object(l.b)("inlineCode",{parentName:"p"},"%%")," in ",Object(l.b)("inlineCode",{parentName:"p"},"printf")," represents one ",Object(l.b)("inlineCode",{parentName:"p"},"%"),".\nHowever, we recommend using curly apostrophe ",Object(l.b)("inlineCode",{parentName:"p"},"\u2019")," (U+2019) for human-readable strings and only use ASCII apostrophe ",Object(l.b)("inlineCode",{parentName:"p"},"'"),"\n(U+0027) in ICU message syntax."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"\"This '{isn''t}' obvious.\"\n//\u2192 \"This {isn't} obvious.\"\n\n")))}b.isMDXComponent=!0},120:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return a?r.a.createElement(d,o(o({ref:t},c),{},{components:a})):r.a.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);
(self.webpackChunk=self.webpackChunk||[]).push([[5204],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,h=d["".concat(s,".").concat(g)]||d[g]||u[g]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7381:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>p,default:()=>d});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],l={id:"basic-internationalization-principles",title:"Basic Internationalization Principles"},s=void 0,c={unversionedId:"core-concepts/basic-internationalization-principles",id:"core-concepts/basic-internationalization-principles",isDocsHomePage:!1,title:"Basic Internationalization Principles",description:"What Is Internationalization and Why Does It Matter?",source:"@site/docs/core-concepts/basic-internationalization-principles.md",sourceDirName:"core-concepts",slug:"/core-concepts/basic-internationalization-principles",permalink:"/docs/core-concepts/basic-internationalization-principles",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/core-concepts/basic-internationalization-principles.md",tags:[],version:"current",frontMatter:{id:"basic-internationalization-principles",title:"Basic Internationalization Principles"},sidebar:"docs",previous:{title:"Advanced Usage",permalink:"/docs/guides/advanced-usage"},next:{title:"Message Syntax",permalink:"/docs/core-concepts/icu-syntax"}},p=[{value:"What Is Internationalization and Why Does It Matter?",id:"what-is-internationalization-and-why-does-it-matter",children:[]},{value:"Locales: Language and Region",id:"locales-language-and-region",children:[]},{value:"Translating Strings",id:"translating-strings",children:[]},{value:"Bundling Translated Strings",id:"bundling-translated-strings",children:[]},{value:"Structure of Code",id:"structure-of-code",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-internationalization-and-why-does-it-matter"},"What Is Internationalization and Why Does It Matter?"),(0,i.kt)("p",null,"Internationalized software supports the languages and cultural customs of people throughout the world. The Web reaches all parts of the world. Internationalized web apps provide a great user experience for people everywhere."),(0,i.kt)("p",null,"Localized software adapts to a specific language and culture by translating text into the user's language and formatting data in accordance with the user's expectations. An app is typically localized for a small set of locales."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tc39/ecma402"},"ECMA-402 JavaScript internationalization specification")," has an excellent overview."),(0,i.kt)("h2",{id:"locales-language-and-region"},"Locales: Language and Region"),(0,i.kt)("p",null,'A "locale" refers to the lingual and cultural expectations for a region. It is represented using a "locale code" defined in ',(0,i.kt)("a",{parentName:"p",href:"https://www.unicode.org/reports/tr35/tr35.html#Identifiers"},"UTS LDML"),"."),(0,i.kt)("p",null,"This code is comprised of several parts separated by hyphens (-). The first part is a short string representing the language. The second, optional, part is a short string representing the region. Additionally, various extensions and variants can be specified."),(0,i.kt)("p",null,"Typically, web apps are localized to just the language or language-region combination. Examples of such locale codes are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"en")," for English"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"en-US")," for English as spoken in the United States"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"en-GB")," for English as spoken in the United Kingdom"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"es-AR")," for Spanish as spoken in Argentina"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ar-001")," for Arabic as spoken throughout the world"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ar-AE")," for Arabic as spoken in United Arab Emirates")),(0,i.kt)("p",null,"Most internationalized apps only support a small list of locales."),(0,i.kt)("h2",{id:"translating-strings"},"Translating Strings"),(0,i.kt)("p",null,"You likely have some text in your application that is in a natural language such as English or Japanese. In order to support other locales, you will need to translate these strings."),(0,i.kt)("p",null,'FormatJS provides a mechanism to let you write the core "software" of your application without special code for different translations. The considerations for each locale are encapsulated in your translated strings and our libraries.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const messages = {\n  en: {\n    GREETING: 'Hello {name}',\n  },\n  fr: {\n    GREETING: 'Bonjour {name}',\n  },\n}\n")),(0,i.kt)("p",null,"We use the ",(0,i.kt)("a",{parentName:"p",href:"https://unicode-org.github.io/icu/userguide/format_parse/messages"},"ICU Message syntax")," which is also used in ",(0,i.kt)("a",{parentName:"p",href:"http://docs.oracle.com/javase/7/docs/api/java/text/MessageFormat.html"},"Java"),", C, PHP and various other platforms."),(0,i.kt)("h2",{id:"bundling-translated-strings"},"Bundling Translated Strings"),(0,i.kt)("p",null,"It is common to organize your translations primarily by locale, because you only need the translations for the user's current locale. Our template and component library integrations are designed to work with the translations for a single locale. If your app is complex, you can further subdivide your translations, such as by page or section of the site."),(0,i.kt)("h2",{id:"structure-of-code"},"Structure of Code"),(0,i.kt)("p",null,"The actual formatting and presentation of data and translated strings typically takes these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Determine the user's locale, as described in Runtime Environments guide."),(0,i.kt)("li",{parentName:"ol"},"Setup one of FormatJS's integrations with the following data:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the user's current locale"),(0,i.kt)("li",{parentName:"ul"},"translated strings for that locale"),(0,i.kt)("li",{parentName:"ul"},"optionally, any custom formats"))),(0,i.kt)("li",{parentName:"ol"},"Call the template engine, passing the data that needs formatting.")))}d.isMDXComponent=!0}}]);
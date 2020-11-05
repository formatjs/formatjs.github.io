(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,g=d["".concat(o,".").concat(p)]||d[p]||b[p]||i;return n?r.a.createElement(g,c(c({ref:t},s),{},{components:n})):r.a.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(108)),o={id:"upgrade-guide-5x",title:"Upgrade Guide (v4 -> v5)"},c={unversionedId:"react-intl/upgrade-guide-5x",id:"react-intl/upgrade-guide-5x",isDocsHomePage:!1,title:"Upgrade Guide (v4 -> v5)",description:"Breaking API Changes",source:"@site/docs/react-intl/upgrade-guide-5.x.md",slug:"/react-intl/upgrade-guide-5x",permalink:"/docs/react-intl/upgrade-guide-5x",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/react-intl/upgrade-guide-5.x.md",version:"current",sidebar:"api",previous:{title:"Imperative API",permalink:"/docs/react-intl/api"},next:{title:"Upgrade Guide (v3 -> v4)",permalink:"/docs/react-intl/upgrade-guide-4x"}},l=[{value:"Breaking API Changes",id:"breaking-api-changes",children:[]},{value:"Why are we doing those changes?",id:"why-are-we-doing-those-changes",children:[{value:"Rich text formatting callback function is no longer variadic",id:"rich-text-formatting-callback-function-is-no-longer-variadic",children:[]},{value:"<code>FormattedMessage</code> render prop is no longer variadic",id:"formattedmessage-render-prop-is-no-longer-variadic",children:[]},{value:"Using <code>FormattedMessage</code> without a <code>intl</code> context will fail fast",id:"using-formattedmessage-without-a-intl-context-will-fail-fast",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"breaking-api-changes"},"Breaking API Changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Rich text formatting callback function is no longer variadic.")),Object(i.b)("p",null,"Before:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"new IntlMessageFormat('a<b>strong</b>').format({\n  b: (...chunks) => <strong>{chunks}</strong>,\n})\n")),Object(i.b)("p",null,"After:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"new IntlMessageFormat('a<b>strong</b>').format({\n  b: chunks => <strong>{chunks}</strong>,\n})\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"FormattedMessage")," render prop is no longer variadic.")),Object(i.b)("p",null,"Before:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'<FormattedMessage defaultMessage="a<b>strong</b>">\n  {(...chunks) => <b>{chunks}</b>}\n</FormattedMessage>\n')),Object(i.b)("p",null,"After:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'<FormattedMessage defaultMessage="a<b>strong</b>">\n  {chunks => <b>{chunks}</b>}\n</FormattedMessage>\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Using ",Object(i.b)("inlineCode",{parentName:"li"},"FormattedMessage")," without a ",Object(i.b)("inlineCode",{parentName:"li"},"intl")," context will fail fast.")),Object(i.b)("h2",{id:"why-are-we-doing-those-changes"},"Why are we doing those changes?"),Object(i.b)("h3",{id:"rich-text-formatting-callback-function-is-no-longer-variadic"},"Rich text formatting callback function is no longer variadic"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We received feedback from the community that variadic callback function isn't really ergonomic."),Object(i.b)("li",{parentName:"ul"},"There's also an issue where React ",Object(i.b)("inlineCode",{parentName:"li"},"chunks")," do not come with keys, thus causing warning in React during development."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"chunks")," by themselves are not enough to render duplicate tags, such as ",Object(i.b)("inlineCode",{parentName:"li"},"<a>link</a> and another <a>link</a>")," where you want to render 2 different ",Object(i.b)("inlineCode",{parentName:"li"},"href"),"s for the ",Object(i.b)("inlineCode",{parentName:"li"},"<a>")," tag. In this case ",Object(i.b)("inlineCode",{parentName:"li"},"a: chunks => <a>{chunks}</a>")," isn't enough especially when the contents are the same. In the future we can set another argument that might contain metadata to distinguish between the 2 elements.")),Object(i.b)("h3",{id:"formattedmessage-render-prop-is-no-longer-variadic"},Object(i.b)("inlineCode",{parentName:"h3"},"FormattedMessage")," render prop is no longer variadic"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Same reasons as above.")),Object(i.b)("h3",{id:"using-formattedmessage-without-a-intl-context-will-fail-fast"},"Using ",Object(i.b)("inlineCode",{parentName:"h3"},"FormattedMessage")," without a ",Object(i.b)("inlineCode",{parentName:"h3"},"intl")," context will fail fast"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This also comes from Dropbox internal developer feedback. ",Object(i.b)("inlineCode",{parentName:"li"},"FormattedMessage")," has a default English renderer that masks ",Object(i.b)("inlineCode",{parentName:"li"},"Provider")," setup issues which causes them to not be handled during testing phase.")))}u.isMDXComponent=!0}}]);
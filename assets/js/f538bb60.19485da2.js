(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(124)),o={id:"upgrade-guide-3x",title:"Upgrade Guide (v2 -> v3)"},l={unversionedId:"react-intl/upgrade-guide-3x",id:"react-intl/upgrade-guide-3x",isDocsHomePage:!1,title:"Upgrade Guide (v2 -> v3)",description:"Breaking API Changes",source:"@site/docs/react-intl/upgrade-guide-3.x.md",slug:"/react-intl/upgrade-guide-3x",permalink:"/docs/react-intl/upgrade-guide-3x",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/react-intl/upgrade-guide-3.x.md",version:"current",sidebar:"api",previous:{title:"Upgrade Guide (v3 -> v4)",permalink:"/docs/react-intl/upgrade-guide-4x"},next:{title:"Upgrade Guide (v1 -> v2)",permalink:"/docs/react-intl/upgrade-guide-2x"}},s=[{value:"Breaking API Changes",id:"breaking-api-changes",children:[]},{value:"Use React 16.3 and upwards",id:"use-react-163-and-upwards",children:[]},{value:"Migrate withRef to forwardRef",id:"migrate-withref-to-forwardref",children:[]},{value:"New useIntl hook as an alternative of injectIntl HOC",id:"new-useintl-hook-as-an-alternative-of-injectintl-hoc",children:[]},{value:"Migrate to using native Intl APIs",id:"migrate-to-using-native-intl-apis",children:[]},{value:"TypeScript Support",id:"typescript-support",children:[]},{value:"FormattedRelativeTime",id:"formattedrelativetime",children:[]},{value:"Enhanced <code>FormattedMessage</code> &amp; <code>formatMessage</code> rich text formatting",id:"enhanced-formattedmessage--formatmessage-rich-text-formatting",children:[]},{value:"ESM Build",id:"esm-build",children:[{value:"Jest",id:"jest",children:[]},{value:"webpack",id:"webpack",children:[]}]},{value:"Creating intl without using Provider",id:"creating-intl-without-using-provider",children:[]},{value:"Message Format Syntax Changes",id:"message-format-syntax-changes",children:[{value:"Escape character has been changed to apostrophe (<code>&#39;</code>).",id:"escape-character-has-been-changed-to-apostrophe-",children:[]},{value:"Placeholder argument syntax change",id:"placeholder-argument-syntax-change",children:[]}]},{value:"Testing",id:"testing",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"breaking-api-changes"},"Breaking API Changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"addLocaleData")," has been removed. See ",Object(i.b)("a",{parentName:"li",href:"#migrate-to-using-native-intl-apis"},"Migrate to using native Intl APIs")," for more details."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ReactIntlLocaleData")," has been removed. See ",Object(i.b)("a",{parentName:"li",href:"#migrate-to-using-native-intl-apis"},"Migrate to using native Intl APIs")," for more details."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"intlShape")," has been removed. See ",Object(i.b)("a",{parentName:"li",href:"#typescript-support"},"TypeScript Support")," for more details."),Object(i.b)("li",{parentName:"ul"},"Change default ",Object(i.b)("inlineCode",{parentName:"li"},"textComponent")," in ",Object(i.b)("inlineCode",{parentName:"li"},"IntlProvider")," to ",Object(i.b)("inlineCode",{parentName:"li"},"React.Fragment"),". In order to keep the old behavior, you can explicitly set ",Object(i.b)("inlineCode",{parentName:"li"},"textComponent")," to ",Object(i.b)("inlineCode",{parentName:"li"},"span"),".")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},'<IntlProvider textComponent="span" />\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"FormattedRelative")," has been renamed to ",Object(i.b)("inlineCode",{parentName:"li"},"FormattedRelativeTime")," and its API has changed significantly. See ",Object(i.b)("a",{parentName:"li",href:"#formattedrelativetime"},"FormattedRelativeTime")," for more details."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"formatRelative")," has been renamed to ",Object(i.b)("inlineCode",{parentName:"li"},"formatRelativeTime")," and its API has changed significantly. See ",Object(i.b)("a",{parentName:"li",href:"#formattedrelativetime"},"FormattedRelativeTime")," for more details."),Object(i.b)("li",{parentName:"ul"},"Message Format syntax changes. See ",Object(i.b)("a",{parentName:"li",href:"#message-format-syntax-changes"},"Message Format Syntax Changes")," for more details."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"IntlProvider")," no longer inherits from upstream ",Object(i.b)("inlineCode",{parentName:"li"},"IntlProvider"),".")),Object(i.b)("h2",{id:"use-react-163-and-upwards"},"Use React 16.3 and upwards"),Object(i.b)("p",null,"React Intl v3 supports the new context API, fixing all kinds of tree update problems \ud83c\udf89\nIn addition it makes use of the new lifecycle hooks (and gets rid of the ",Object(i.b)("a",{parentName:"p",href:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html"},"deprecated")," ones).\nIt also supports the new ",Object(i.b)("inlineCode",{parentName:"p"},"React.forwardRef()")," enabling users to directly access refs using the standard ",Object(i.b)("inlineCode",{parentName:"p"},"ref")," prop (see beneath for further information)."),Object(i.b)("h2",{id:"migrate-withref-to-forwardref"},"Migrate withRef to forwardRef"),Object(i.b)("p",null,"With the update to React ",Object(i.b)("inlineCode",{parentName:"p"},">= 16.3")," we got the option to use the new ",Object(i.b)("inlineCode",{parentName:"p"},"React.forwardRef()")," feature and because of this deprecated the use of the ",Object(i.b)("inlineCode",{parentName:"p"},"withRef")," option for the ",Object(i.b)("inlineCode",{parentName:"p"},"injectIntl")," HOC in favour of ",Object(i.b)("inlineCode",{parentName:"p"},"forwardRef"),".\nWhen ",Object(i.b)("inlineCode",{parentName:"p"},"forwardRef")," is set to true, you can now simply pretend the HOC wasn't there at all."),Object(i.b)("p",null,"Intl v2:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react'\nimport {injectIntl} from 'react-intl'\n\nclass MyComponent extends React.Component {\n  doSomething = () => console.log(this.state || null)\n\n  render() {\n    return <div>Hello World</div>\n  }\n}\n\nexport default injectIntl(MyComponent, {withRef: true})\n\n// somewhere else\nclass Parent extends React.Component {\n  componentDidMount() {\n    this.myComponentRef.getWrappedInstance().doSomething()\n  }\n\n  render() {\n    return (\n      <MyComponent\n        ref={ref => {\n          this.myComponentRef = ref\n        }}\n      />\n    )\n  }\n}\n")),Object(i.b)("p",null,"Intl v3:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react'\nimport {injectIntl} from 'react-intl'\n\nclass MyComponent extends React.Component {\n  doSomething = () => console.log(this.state || null)\n\n  render() {\n    return <div>Hello World</div>\n  }\n}\n\nexport default injectIntl(MyComponent, {forwardRef: true})\n\n// somewhere else\nclass Parent extends React.Component {\n  myComponentRef = React.createRef()\n\n  componentDidMount() {\n    this.myComponentRef.doSomething() // no need to call getWrappedInstance()\n  }\n\n  render() {\n    return <MyComponent ref={this.myComponentRef} />\n  }\n}\n")),Object(i.b)("h2",{id:"new-useintl-hook-as-an-alternative-of-injectintl-hoc"},"New useIntl hook as an alternative of injectIntl HOC"),Object(i.b)("p",null,"This v3 release also supports the latest React hook API for user with React ",Object(i.b)("inlineCode",{parentName:"p"},">= 16.8"),". You can now take ",Object(i.b)("inlineCode",{parentName:"p"},"useIntl")," hook as an alternative to ",Object(i.b)("inlineCode",{parentName:"p"},"injectIntl")," HOC on ",Object(i.b)("em",{parentName:"p"},"function components"),". Both methods allow you to access the ",Object(i.b)("inlineCode",{parentName:"p"},"intl")," instance, here is a quick comparison:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"// injectIntl\nimport {injectIntl} from 'react-intl'\n\nconst MyComponentWithHOC = injectIntl(({intl, ...props}) => {\n  // do something\n})\n\n// useIntl\nimport {useIntl} from 'react-intl'\n\nconst MyComponentWithHook = props => {\n  const intl = useIntl()\n\n  // do something\n}\n")),Object(i.b)("p",null,"To keep the API surface clean and simple, we only provide ",Object(i.b)("inlineCode",{parentName:"p"},"useIntl")," hook in the package. If preferable, user can wrap this built-in hook to make customized hook like ",Object(i.b)("inlineCode",{parentName:"p"},"useFormatMessage")," easily. Please visit React's official website for more general ",Object(i.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"introduction on React hooks"),"."),Object(i.b)("h2",{id:"migrate-to-using-native-intl-apis"},"Migrate to using native Intl APIs"),Object(i.b)("p",null,"React Intl v3 no longer comes with CLDR data and rely on native Intl API instead. Specifically the new APIs we're relying on are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules"},"Intl.PluralRules"),": This can be polyfilled using ",Object(i.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/@formatjs/intl-pluralrules"},"this package"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat"},"Intl.RelativeTimeFormat"),": This can be polyfilled using ",Object(i.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/@formatjs/intl-relativetimeformat"},"this package"),".")),Object(i.b)("p",null,"This shift is meant to future-proof React Intl as these APIs are all stable and being implemented in modern browsers. This also means we no longer package and consume CLDRs in this package."),Object(i.b)("p",null,"If you previously were using ",Object(i.b)("inlineCode",{parentName:"p"},"addLocaleData")," to support older browsers, we recommend you do the following:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"If you're supporting browsers that do not have ",Object(i.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules"},"Intl.PluralRules")," (e.g IE11 & Safari 12-), include this ",Object(i.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/@formatjs/intl-pluralrules"},"polyfill")," in your build."),Object(i.b)("li",{parentName:"ol"},"If you're supporting browsers that do not have ",Object(i.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat"},"Intl.RelativeTimeFormat")," (e.g IE11, Edge, Safari 13-), include this ",Object(i.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/@formatjs/intl-relativetimeformat"},"polyfill")," in your build along with individual CLDR data for each locale you support.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"require('@formatjs/intl-pluralrules/polyfill')\nrequire('@formatjs/intl-pluralrules/locale-data/de') // Add locale data for de\n\nrequire('@formatjs/intl-relativetimeformat/polyfill')\nrequire('@formatjs/intl-relativetimeformat/locale-data/de') // Add locale data for de\n")),Object(i.b)("p",null,"When using React Intl in Node.js, your ",Object(i.b)("inlineCode",{parentName:"p"},"node")," binary has to either:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Get compiled with ",Object(i.b)("inlineCode",{parentName:"li"},"full-icu")," using these ",Object(i.b)("a",{parentName:"li",href:"https://nodejs.org/api/intl.html"},"instructions"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"OR")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Uses ",Object(i.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/full-icu"},Object(i.b)("inlineCode",{parentName:"a"},"full-icu")," npm package"))),Object(i.b)("h2",{id:"typescript-support"},"TypeScript Support"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"react-intl")," has been rewritten in TypeScript and thus has native TypeScript support. Therefore, we've also removed ",Object(i.b)("inlineCode",{parentName:"p"},"prop-types")," dependency and expose ",Object(i.b)("inlineCode",{parentName:"p"},"IntlShape")," as an interface instead."),Object(i.b)("p",null,"All types should be available from top level ",Object(i.b)("inlineCode",{parentName:"p"},"index")," file without importing from specific subfiles. For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import {IntlShape} from 'react-intl' // Correct\nimport {IntlShape} from 'react-intl/lib/types' // Incorrect\n")),Object(i.b)("p",null,"If we're missing any interface top level support, please let us know and/or submitting a PR is greatly appreciated :)"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"You might need to make a few changes to your code if you were relying on the now deprecated ",Object(i.b)("strong",{parentName:"p"},"@types/react-intl")," package. The most common example is ",Object(i.b)("inlineCode",{parentName:"p"},"InjectedIntlProps")," which must be replaced with ",Object(i.b)("inlineCode",{parentName:"p"},"WrappedComponentProps"),"."))),Object(i.b)("h2",{id:"formattedrelativetime"},"FormattedRelativeTime"),Object(i.b)("p",null,"When we introduced ",Object(i.b)("inlineCode",{parentName:"p"},"FormattedRelative"),", the spec for ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat"},Object(i.b)("inlineCode",{parentName:"a"},"Intl.RelativeTimeFormat"))," was still unstable. It has now reached stage 3 and multiple browsers have implemented it. However, its API is different from ",Object(i.b)("inlineCode",{parentName:"p"},"FormattedRelative")," so we've adjusted its API to match the spec which means it's not backwards compatible."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"All ",Object(i.b)("inlineCode",{parentName:"li"},"units")," (such as ",Object(i.b)("inlineCode",{parentName:"li"},"day-short"),") becomes a combination of ",Object(i.b)("inlineCode",{parentName:"li"},"unit")," & ",Object(i.b)("inlineCode",{parentName:"li"},"style"),":")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},'<FormattedRelative units="second-short"/>\n// will be\n<FormattedRelativeTime unit="second" style="short"/>\n')),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"style")," becomes ",Object(i.b)("inlineCode",{parentName:"li"},"numeric")," (which is the default):")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},'<FormattedRelative style="numeric"/>\n// will be\n<FormattedRelativeTime />\n\n<FormattedRelative style="best fit"/>\n// will be\n<FormattedRelativeTime numeric="auto"/>\n')),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Type of ",Object(i.b)("inlineCode",{parentName:"li"},"value")," is no longer ",Object(i.b)("inlineCode",{parentName:"li"},"Date"),", but rather ",Object(i.b)("inlineCode",{parentName:"li"},"delta")," in the specified ",Object(i.b)("inlineCode",{parentName:"li"},"unit"),":")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},'<FormattedRelative value={Date.now() - 1000} units="second-narrow"/>\n// will be\n<FormattedRelativeTime value={-1} unit="second" style="narrow" />\n\n<FormattedRelative value={Date.now() + 2000} units="second-narrow"/>\n// will be\n<FormattedRelativeTime value={2} unit="second" style="narrow" />\n')),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"updateInterval")," becomes ",Object(i.b)("inlineCode",{parentName:"li"},"updateIntervalInSeconds")," and will only take the time delta in seconds. Update behavior remains the same, e.g:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},'<FormattedRelativeTime\n  value={2}\n  numeric="auto"\n  unit="second"\n  style="narrow"\n  updateIntervalInSeconds={1}\n/>\n// Initially prints: `in 2s`\n// 1 second later: `in 1s`\n// 1 second later: `now`\n// 1 second later: `1s ago`\n// 60 seconds later: `1m ago`\n')),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"initialNow")," has been removed.")),Object(i.b)("p",null,"Similarly, the functional counterpart of this component which is ",Object(i.b)("inlineCode",{parentName:"p"},"formatRelative")," has been renamed to ",Object(i.b)("inlineCode",{parentName:"p"},"formatRelativeTime")," and its parameters have been changed to reflect this component's props accordingly."),Object(i.b)("ol",{start:7},Object(i.b)("li",{parentName:"ol"},"Implementing ",Object(i.b)("inlineCode",{parentName:"li"},"FormattedRelative")," behavior")),Object(i.b)("p",null,"You can use ",Object(i.b)("inlineCode",{parentName:"p"},"@formatjs/intl-utils")," to get close to the previous behavior like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"import {selectUnit} from '@formatjs/intl-utils'\nconst {value, unit} = selectUnit(Date.now() - 48 * 3600 * 1000)\n// render\n;<FormattedRelativeTime value={value} unit={unit} />\n")),Object(i.b)("h2",{id:"enhanced-formattedmessage--formatmessage-rich-text-formatting"},"Enhanced ",Object(i.b)("inlineCode",{parentName:"h2"},"FormattedMessage")," & ",Object(i.b)("inlineCode",{parentName:"h2"},"formatMessage")," rich text formatting"),Object(i.b)("p",null,"In v2, in order to do rich text formatting (embedding a ",Object(i.b)("inlineCode",{parentName:"p"},"ReactElement"),"), you had to do this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},'<FormattedMessage\n  defaultMessage="To buy a shoe, { link } and { cta }"\n  values={{\n    link: (\n      <a class="external_link" target="_blank" href="https://www.shoe.com/">\n        visit our website\n      </a>\n    ),\n    cta: <strong class="important">eat a shoe</strong>,\n  }}\n/>\n')),Object(i.b)("p",null,"Now you can do:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},'<FormattedMessage\n  defaultMessage="To buy a shoe, <a>visit our website</a> and <cta>eat a shoe</cta>"\n  values={{\n    a: msg => (\n      <a class="external_link" target="_blank" href="https://www.shoe.com/">\n        {msg}\n      </a>\n    ),\n    cta: msg => <strong class="important">{msg}</strong>,\n  }}\n/>\n')),Object(i.b)("p",null,"The change solves several issues:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Contextual information was lost when you need to style part of the string: In this example above, ",Object(i.b)("inlineCode",{parentName:"li"},"link")," effectively is a blackbox placeholder to a translator. It can be a person, an animal, or a timestamp. Conveying contextual information via ",Object(i.b)("inlineCode",{parentName:"li"},"description")," & ",Object(i.b)("inlineCode",{parentName:"li"},"placeholder")," variable is often not enough since the variable can get sufficiently complicated."),Object(i.b)("li",{parentName:"ol"},"This brings feature-parity with other translation libs, such as ",Object(i.b)("a",{parentName:"li",href:"https://projectfluent.org/"},"fluent")," by Mozilla (using Overlays).")),Object(i.b)("p",null,"If previously in cases where you pass in a ",Object(i.b)("inlineCode",{parentName:"p"},"ReactElement")," to a placeholder we highly recommend that you rethink the structure so that as much text is declared as possible:"),Object(i.b)("p",null,"Before"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},'<FormattedMessage\n  defaultMessage="Hello, {name} is {awesome} and {fun}"\n  values={{\n    name: <b>John</b>,\n    awesome: <span style="font-weight: bold;">awesome</span>\n    fun: <span>fun and <FormattedTime value={Date.now()}/></span>\n  }}\n/>\n')),Object(i.b)("p",null,"After"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},'<FormattedMessage\n  defaultMessage="Hello, <b>John</b> is <custom>awesome</custom> and <more>fun and {ts, time}</more>"\n  values={{\n    b: name => <b>{name}</b>,\n    custom: str => <span style="font-weight: bold;">{str}</span>,\n    more: chunks => <span>{chunks}</span>,\n  }}\n/>\n')),Object(i.b)("h2",{id:"esm-build"},"ESM Build"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"react-intl")," and its underlying libraries (",Object(i.b)("inlineCode",{parentName:"p"},"intl-messageformat-parser"),", ",Object(i.b)("inlineCode",{parentName:"p"},"intl-messageformat"),", ",Object(i.b)("inlineCode",{parentName:"p"},"@formatjs/intl-relativetimeformat"),", ",Object(i.b)("inlineCode",{parentName:"p"},"intl-format-cache"),", ",Object(i.b)("inlineCode",{parentName:"p"},"intl-utils"),") export ESM artifacts. This means you should configure your build toolchain to transpile those libraries."),Object(i.b)("h3",{id:"jest"},"Jest"),Object(i.b)("p",null,"Add ",Object(i.b)("inlineCode",{parentName:"p"},"transformIgnorePatterns")," to always include those libraries, e.g:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"{\n  transformIgnorePatterns: [\n    '/node_modules/(?!intl-messageformat|intl-messageformat-parser).+\\\\.js$',\n  ],\n}\n")),Object(i.b)("h3",{id:"webpack"},"webpack"),Object(i.b)("p",null,"If you're using ",Object(i.b)("inlineCode",{parentName:"p"},"babel-loader"),", add those libraries in ",Object(i.b)("inlineCode",{parentName:"p"},"include"),", e.g:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},'include: [\n  path.join(__dirname, "node_modules/react-intl"),\n  path.join(__dirname, "node_modules/intl-messageformat"),\n  path.join(__dirname, "node_modules/intl-messageformat-parser"),\n],\n')),Object(i.b)("h2",{id:"creating-intl-without-using-provider"},"Creating intl without using Provider"),Object(i.b)("p",null,"We've added a new API called ",Object(i.b)("inlineCode",{parentName:"p"},"createIntl")," that allows you to create an ",Object(i.b)("inlineCode",{parentName:"p"},"IntlShape")," object without using ",Object(i.b)("inlineCode",{parentName:"p"},"Provider"),". This allows you to format things outside of React lifecycle while reusing the same ",Object(i.b)("inlineCode",{parentName:"p"},"intl")," object. For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"import {createIntl, createIntlCache, RawIntlProvider} from 'react-intl'\n\n// This is optional but highly recommended\n// since it prevents memory leak\nconst cache = createIntlCache()\n\nconst intl = createIntl({\n  locale: 'fr-FR',\n  messages: {}\n}, cache)\n\n// Call imperatively\nintl.formatNumber(20)\n\n// Pass it to IntlProvider\n<RawIntlProvider value={intl}>{foo}</RawIntlProvider>\n")),Object(i.b)("p",null,"This is especially beneficial in SSR where you can reuse the same ",Object(i.b)("inlineCode",{parentName:"p"},"intl")," object across requests."),Object(i.b)("h2",{id:"message-format-syntax-changes"},"Message Format Syntax Changes"),Object(i.b)("p",null,"We've rewritten our parser to be more faithful to ",Object(i.b)("a",{parentName:"p",href:"https://unicode-org.github.io/icu/userguide/format_parse/messages/"},"ICU Message Format"),", in order to potentially support skeleton. So far the backwards-incompatible changes are:"),Object(i.b)("h3",{id:"escape-character-has-been-changed-to-apostrophe-"},"Escape character has been changed to apostrophe (",Object(i.b)("inlineCode",{parentName:"h3"},"'"),")."),Object(i.b)("p",null,"Previously while we were using ICU message format syntax, our escape char was backslash (",Object(i.b)("inlineCode",{parentName:"p"},"\\"),"). This however creates issues with strict ICU translation vendors that support other implementations like ICU4J/ICU4C. Thanks to ",Object(i.b)("a",{parentName:"p",href:"https://github.com/pyrocat101"},"@pyrocat101")," we've changed this behavior to be spec-compliant. This means:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},'// Before\n<FormattedMessage defaultMessage="\\\\{foo\\\\}" /> //prints out "{foo}"\n\n// After\n<FormattedMessage defaultMessage="\'{foo}\'" /> //prints out "{foo}"\n')),Object(i.b)("p",null,"We highly recommend reading the spec to learn more about how quote/escaping works ",Object(i.b)("a",{parentName:"p",href:"https://unicode-org.github.io/icu/userguide/format_parse/messages"},"here")," under ",Object(i.b)("strong",{parentName:"p"},"Quoting/Escaping")," section."),Object(i.b)("h3",{id:"placeholder-argument-syntax-change"},"Placeholder argument syntax change"),Object(i.b)("p",null,"Placeholder argument can no longer have ",Object(i.b)("inlineCode",{parentName:"p"},"-")," (e.g: ",Object(i.b)("inlineCode",{parentName:"p"},"this is a {placeholder-var}")," is invalid but ",Object(i.b)("inlineCode",{parentName:"p"},"this is a {placeholder_var}")," is)."),Object(i.b)("h2",{id:"testing"},"Testing"),Object(i.b)("p",null,"We've removed ",Object(i.b)("inlineCode",{parentName:"p"},"IntlProvider.getChildContext")," for testing and now you can use ",Object(i.b)("inlineCode",{parentName:"p"},"createIntl")," to create a standalone ",Object(i.b)("inlineCode",{parentName:"p"},"intl")," object outside of React and use that for testing purposes. See ",Object(i.b)("a",{parentName:"p",href:"/docs/guides/testing"},"Testing with React Intl")," for more details."))}p.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,u=b["".concat(o,".").concat(d)]||b[d]||m[d]||i;return n?r.a.createElement(u,l(l({ref:t},c),{},{components:n})):r.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8027],{9753:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"react-intl/upgrade-guide-3x","title":"Upgrade Guide (v2 -> v3)","description":"Breaking API Changes","source":"@site/docs/react-intl/upgrade-guide-3.x.md","sourceDirName":"react-intl","slug":"/react-intl/upgrade-guide-3x","permalink":"/docs/react-intl/upgrade-guide-3x","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/react-intl/upgrade-guide-3.x.md","tags":[],"version":"current","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1734929737000,"frontMatter":{"id":"upgrade-guide-3x","title":"Upgrade Guide (v2 -> v3)"},"sidebar":"api","previous":{"title":"Upgrade Guide (v3 -> v4)","permalink":"/docs/react-intl/upgrade-guide-4x"},"next":{"title":"Upgrade Guide (v1 -> v2)","permalink":"/docs/react-intl/upgrade-guide-2x"}}');var a=t(7557),r=t(7266);const i={id:"upgrade-guide-3x",title:"Upgrade Guide (v2 -> v3)"},o=void 0,l={},c=[{value:"Breaking API Changes",id:"breaking-api-changes",level:2},{value:"Use React 16.3 and upwards",id:"use-react-163-and-upwards",level:2},{value:"Migrate withRef to forwardRef",id:"migrate-withref-to-forwardref",level:2},{value:"New useIntl hook as an alternative of injectIntl HOC",id:"new-useintl-hook-as-an-alternative-of-injectintl-hoc",level:2},{value:"Migrate to using native Intl APIs",id:"migrate-to-using-native-intl-apis",level:2},{value:"TypeScript Support",id:"typescript-support",level:2},{value:"FormattedRelativeTime",id:"formattedrelativetime",level:2},{value:"Enhanced <code>FormattedMessage</code> &amp; <code>formatMessage</code> rich text formatting",id:"enhanced-formattedmessage--formatmessage-rich-text-formatting",level:2},{value:"ESM Build",id:"esm-build",level:2},{value:"Jest",id:"jest",level:3},{value:"webpack",id:"webpack",level:3},{value:"Creating intl without using Provider",id:"creating-intl-without-using-provider",level:2},{value:"Message Format Syntax Changes",id:"message-format-syntax-changes",level:2},{value:"Escape character has been changed to apostrophe (<code>&#39;</code>).",id:"escape-character-has-been-changed-to-apostrophe-",level:3},{value:"Placeholder argument syntax change",id:"placeholder-argument-syntax-change",level:3},{value:"Testing",id:"testing",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"breaking-api-changes",children:"Breaking API Changes"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"addLocaleData"})," has been removed. See ",(0,a.jsx)(n.a,{href:"#migrate-to-using-native-intl-apis",children:"Migrate to using native Intl APIs"})," for more details."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"ReactIntlLocaleData"})," has been removed. See ",(0,a.jsx)(n.a,{href:"#migrate-to-using-native-intl-apis",children:"Migrate to using native Intl APIs"})," for more details."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"intlShape"})," has been removed. See ",(0,a.jsx)(n.a,{href:"#typescript-support",children:"TypeScript Support"})," for more details."]}),"\n",(0,a.jsxs)(n.li,{children:["Change default ",(0,a.jsx)(n.code,{children:"textComponent"})," in ",(0,a.jsx)(n.code,{children:"IntlProvider"})," to ",(0,a.jsx)(n.code,{children:"React.Fragment"}),". In order to keep the old behavior, you can explicitly set ",(0,a.jsx)(n.code,{children:"textComponent"})," to ",(0,a.jsx)(n.code,{children:"span"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'<IntlProvider textComponent="span" />\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"FormattedRelative"})," has been renamed to ",(0,a.jsx)(n.code,{children:"FormattedRelativeTime"})," and its API has changed significantly. See ",(0,a.jsx)(n.a,{href:"#formattedrelativetime",children:"FormattedRelativeTime"})," for more details."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"formatRelative"})," has been renamed to ",(0,a.jsx)(n.code,{children:"formatRelativeTime"})," and its API has changed significantly. See ",(0,a.jsx)(n.a,{href:"#formattedrelativetime",children:"FormattedRelativeTime"})," for more details."]}),"\n",(0,a.jsxs)(n.li,{children:["Message Format syntax changes. See ",(0,a.jsx)(n.a,{href:"#message-format-syntax-changes",children:"Message Format Syntax Changes"})," for more details."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"IntlProvider"})," no longer inherits from upstream ",(0,a.jsx)(n.code,{children:"IntlProvider"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"use-react-163-and-upwards",children:"Use React 16.3 and upwards"}),"\n",(0,a.jsxs)(n.p,{children:["React Intl v3 supports the new context API, fixing all kinds of tree update problems ","\ud83c\udf89","\nIn addition it makes use of the new lifecycle hooks (and gets rid of the ",(0,a.jsx)(n.a,{href:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html",children:"deprecated"})," ones).\nIt also supports the new ",(0,a.jsx)(n.code,{children:"React.forwardRef()"})," enabling users to directly access refs using the standard ",(0,a.jsx)(n.code,{children:"ref"})," prop (see beneath for further information)."]}),"\n",(0,a.jsx)(n.h2,{id:"migrate-withref-to-forwardref",children:"Migrate withRef to forwardRef"}),"\n",(0,a.jsxs)(n.p,{children:["With the update to React ",(0,a.jsx)(n.code,{children:">= 16.3"})," we got the option to use the new ",(0,a.jsx)(n.code,{children:"React.forwardRef()"})," feature and because of this deprecated the use of the ",(0,a.jsx)(n.code,{children:"withRef"})," option for the ",(0,a.jsx)(n.code,{children:"injectIntl"})," HOC in favour of ",(0,a.jsx)(n.code,{children:"forwardRef"}),".\nWhen ",(0,a.jsx)(n.code,{children:"forwardRef"})," is set to true, you can now simply pretend the HOC wasn't there at all."]}),"\n",(0,a.jsx)(n.p,{children:"Intl v2:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import React from 'react'\nimport {injectIntl} from 'react-intl'\n\nclass MyComponent extends React.Component {\n  doSomething = () => console.log(this.state || null)\n\n  render() {\n    return <div>Hello World</div>\n  }\n}\n\nexport default injectIntl(MyComponent, {withRef: true})\n\n// somewhere else\nclass Parent extends React.Component {\n  componentDidMount() {\n    this.myComponentRef.getWrappedInstance().doSomething()\n  }\n\n  render() {\n    return (\n      <MyComponent\n        ref={ref => {\n          this.myComponentRef = ref\n        }}\n      />\n    )\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Intl v3:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import React from 'react'\nimport {injectIntl} from 'react-intl'\n\nclass MyComponent extends React.Component {\n  doSomething = () => console.log(this.state || null)\n\n  render() {\n    return <div>Hello World</div>\n  }\n}\n\nexport default injectIntl(MyComponent, {forwardRef: true})\n\n// somewhere else\nclass Parent extends React.Component {\n  myComponentRef = React.createRef()\n\n  componentDidMount() {\n    this.myComponentRef.doSomething() // no need to call getWrappedInstance()\n  }\n\n  render() {\n    return <MyComponent ref={this.myComponentRef} />\n  }\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"new-useintl-hook-as-an-alternative-of-injectintl-hoc",children:"New useIntl hook as an alternative of injectIntl HOC"}),"\n",(0,a.jsxs)(n.p,{children:["This v3 release also supports the latest React hook API for user with React ",(0,a.jsx)(n.code,{children:">= 16.8"}),". You can now take ",(0,a.jsx)(n.code,{children:"useIntl"})," hook as an alternative to ",(0,a.jsx)(n.code,{children:"injectIntl"})," HOC on ",(0,a.jsx)(n.em,{children:"function components"}),". Both methods allow you to access the ",(0,a.jsx)(n.code,{children:"intl"})," instance, here is a quick comparison:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"// injectIntl\nimport {injectIntl} from 'react-intl'\n\nconst MyComponentWithHOC = injectIntl(({intl, ...props}) => {\n  // do something\n})\n\n// useIntl\nimport {useIntl} from 'react-intl'\n\nconst MyComponentWithHook = props => {\n  const intl = useIntl()\n\n  // do something\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["To keep the API surface clean and simple, we only provide ",(0,a.jsx)(n.code,{children:"useIntl"})," hook in the package. If preferable, user can wrap this built-in hook to make customized hook like ",(0,a.jsx)(n.code,{children:"useFormatMessage"})," easily. Please visit React's official website for more general ",(0,a.jsx)(n.a,{href:"https://reactjs.org/docs/hooks-intro.html",children:"introduction on React hooks"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"migrate-to-using-native-intl-apis",children:"Migrate to using native Intl APIs"}),"\n",(0,a.jsx)(n.p,{children:"React Intl v3 no longer comes with CLDR data and rely on native Intl API instead. Specifically the new APIs we're relying on are:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules",children:"Intl.PluralRules"}),": This can be polyfilled using ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@formatjs/intl-pluralrules",children:"this package"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat",children:"Intl.RelativeTimeFormat"}),": This can be polyfilled using ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@formatjs/intl-relativetimeformat",children:"this package"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"This shift is meant to future-proof React Intl as these APIs are all stable and being implemented in modern browsers. This also means we no longer package and consume CLDRs in this package."}),"\n",(0,a.jsxs)(n.p,{children:["If you previously were using ",(0,a.jsx)(n.code,{children:"addLocaleData"})," to support older browsers, we recommend you do the following:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["If you're supporting browsers that do not have ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules",children:"Intl.PluralRules"})," (e.g IE11 & Safari 12-), include this ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@formatjs/intl-pluralrules",children:"polyfill"})," in your build."]}),"\n",(0,a.jsxs)(n.li,{children:["If you're supporting browsers that do not have ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat",children:"Intl.RelativeTimeFormat"})," (e.g IE11, Edge, Safari 13-), include this ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@formatjs/intl-relativetimeformat",children:"polyfill"})," in your build along with individual CLDR data for each locale you support."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"require('@formatjs/intl-pluralrules/polyfill')\nrequire('@formatjs/intl-pluralrules/locale-data/de') // Add locale data for de\n\nrequire('@formatjs/intl-relativetimeformat/polyfill')\nrequire('@formatjs/intl-relativetimeformat/locale-data/de') // Add locale data for de\n"})}),"\n",(0,a.jsxs)(n.p,{children:["When using React Intl in Node.js, your ",(0,a.jsx)(n.code,{children:"node"})," binary has to either:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Get compiled with ",(0,a.jsx)(n.code,{children:"full-icu"})," using these ",(0,a.jsx)(n.a,{href:"https://nodejs.org/api/intl.html",children:"instructions"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"OR"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Uses ",(0,a.jsxs)(n.a,{href:"https://www.npmjs.com/package/full-icu",children:[(0,a.jsx)(n.code,{children:"full-icu"})," npm package"]})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"typescript-support",children:"TypeScript Support"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"react-intl"})," has been rewritten in TypeScript and thus has native TypeScript support. Therefore, we've also removed ",(0,a.jsx)(n.code,{children:"prop-types"})," dependency and expose ",(0,a.jsx)(n.code,{children:"IntlShape"})," as an interface instead."]}),"\n",(0,a.jsxs)(n.p,{children:["All types should be available from top level ",(0,a.jsx)(n.code,{children:"index"})," file without importing from specific subfiles. For example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import {IntlShape} from 'react-intl' // Correct\nimport {IntlShape} from 'react-intl/lib/types' // Incorrect\n"})}),"\n",(0,a.jsx)(n.p,{children:"If we're missing any interface top level support, please let us know and/or submitting a PR is greatly appreciated :)"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["You might need to make a few changes to your code if you were relying on the now deprecated ",(0,a.jsx)(n.strong,{children:"@types/react-intl"})," package. The most common example is ",(0,a.jsx)(n.code,{children:"InjectedIntlProps"})," which must be replaced with ",(0,a.jsx)(n.code,{children:"WrappedComponentProps"}),"."]})}),"\n",(0,a.jsx)(n.h2,{id:"formattedrelativetime",children:"FormattedRelativeTime"}),"\n",(0,a.jsxs)(n.p,{children:["When we introduced ",(0,a.jsx)(n.code,{children:"FormattedRelative"}),", the spec for ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat",children:(0,a.jsx)(n.code,{children:"Intl.RelativeTimeFormat"})})," was still unstable. It has now reached stage 3 and multiple browsers have implemented it. However, its API is different from ",(0,a.jsx)(n.code,{children:"FormattedRelative"})," so we've adjusted its API to match the spec which means it's not backwards compatible."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["All ",(0,a.jsx)(n.code,{children:"units"})," (such as ",(0,a.jsx)(n.code,{children:"day-short"}),") becomes a combination of ",(0,a.jsx)(n.code,{children:"unit"})," & ",(0,a.jsx)(n.code,{children:"style"}),":"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'<FormattedRelative units="second-short"/>\n// will be\n<FormattedRelativeTime unit="second" style="short"/>\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"style"})," becomes ",(0,a.jsx)(n.code,{children:"numeric"})," (which is the default):"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'<FormattedRelative style="numeric"/>\n// will be\n<FormattedRelativeTime />\n\n<FormattedRelative style="best fit"/>\n// will be\n<FormattedRelativeTime numeric="auto"/>\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:["Type of ",(0,a.jsx)(n.code,{children:"value"})," is no longer ",(0,a.jsx)(n.code,{children:"Date"}),", but rather ",(0,a.jsx)(n.code,{children:"delta"})," in the specified ",(0,a.jsx)(n.code,{children:"unit"}),":"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'<FormattedRelative value={Date.now() - 1000} units="second-narrow"/>\n// will be\n<FormattedRelativeTime value={-1} unit="second" style="narrow" />\n\n<FormattedRelative value={Date.now() + 2000} units="second-narrow"/>\n// will be\n<FormattedRelativeTime value={2} unit="second" style="narrow" />\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"updateInterval"})," becomes ",(0,a.jsx)(n.code,{children:"updateIntervalInSeconds"})," and will only take the time delta in seconds. Update behavior remains the same, e.g:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'<FormattedRelativeTime\n  value={2}\n  numeric="auto"\n  unit="second"\n  style="narrow"\n  updateIntervalInSeconds={1}\n/>\n// Initially prints: `in 2s`\n// 1 second later: `in 1s`\n// 1 second later: `now`\n// 1 second later: `1s ago`\n// 60 seconds later: `1m ago`\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"6",children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"initialNow"})," has been removed."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Similarly, the functional counterpart of this component which is ",(0,a.jsx)(n.code,{children:"formatRelative"})," has been renamed to ",(0,a.jsx)(n.code,{children:"formatRelativeTime"})," and its parameters have been changed to reflect this component's props accordingly."]}),"\n",(0,a.jsxs)(n.ol,{start:"7",children:["\n",(0,a.jsxs)(n.li,{children:["Implementing ",(0,a.jsx)(n.code,{children:"FormattedRelative"})," behavior"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["You can use ",(0,a.jsx)(n.code,{children:"@formatjs/intl-utils"})," to get close to the previous behavior like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import {selectUnit} from '@formatjs/intl-utils'\nconst {value, unit} = selectUnit(Date.now() - 48 * 3600 * 1000)\n// render\n;<FormattedRelativeTime value={value} unit={unit} />\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"enhanced-formattedmessage--formatmessage-rich-text-formatting",children:["Enhanced ",(0,a.jsx)(n.code,{children:"FormattedMessage"})," & ",(0,a.jsx)(n.code,{children:"formatMessage"})," rich text formatting"]}),"\n",(0,a.jsxs)(n.p,{children:["In v2, in order to do rich text formatting (embedding a ",(0,a.jsx)(n.code,{children:"ReactElement"}),"), you had to do this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'<FormattedMessage\n  defaultMessage="To buy a shoe, { link } and { cta }"\n  values={{\n    link: (\n      <a class="external_link" target="_blank" href="https://www.shoe.com/">\n        visit our website\n      </a>\n    ),\n    cta: <strong class="important">eat a shoe</strong>,\n  }}\n/>\n'})}),"\n",(0,a.jsx)(n.p,{children:"Now you can do:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'<FormattedMessage\n  defaultMessage="To buy a shoe, <a>visit our website</a> and <cta>eat a shoe</cta>"\n  values={{\n    a: msg => (\n      <a class="external_link" target="_blank" href="https://www.shoe.com/">\n        {msg}\n      </a>\n    ),\n    cta: msg => <strong class="important">{msg}</strong>,\n  }}\n/>\n'})}),"\n",(0,a.jsx)(n.p,{children:"The change solves several issues:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Contextual information was lost when you need to style part of the string: In this example above, ",(0,a.jsx)(n.code,{children:"link"})," effectively is a blackbox placeholder to a translator. It can be a person, an animal, or a timestamp. Conveying contextual information via ",(0,a.jsx)(n.code,{children:"description"})," & ",(0,a.jsx)(n.code,{children:"placeholder"})," variable is often not enough since the variable can get sufficiently complicated."]}),"\n",(0,a.jsxs)(n.li,{children:["This brings feature-parity with other translation libs, such as ",(0,a.jsx)(n.a,{href:"https://projectfluent.org/",children:"fluent"})," by Mozilla (using Overlays)."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["If previously in cases where you pass in a ",(0,a.jsx)(n.code,{children:"ReactElement"})," to a placeholder we highly recommend that you rethink the structure so that as much text is declared as possible:"]}),"\n",(0,a.jsx)(n.p,{children:"Before"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'<FormattedMessage\n  defaultMessage="Hello, {name} is {awesome} and {fun}"\n  values={{\n    name: <b>John</b>,\n    awesome: <span style="font-weight: bold;">awesome</span>\n    fun: <span>fun and <FormattedTime value={Date.now()}/></span>\n  }}\n/>\n'})}),"\n",(0,a.jsx)(n.p,{children:"After"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'<FormattedMessage\n  defaultMessage="Hello, <b>John</b> is <custom>awesome</custom> and <more>fun and {ts, time}</more>"\n  values={{\n    b: name => <b>{name}</b>,\n    custom: str => <span style="font-weight: bold;">{str}</span>,\n    more: chunks => <span>{chunks}</span>,\n  }}\n/>\n'})}),"\n",(0,a.jsx)(n.h2,{id:"esm-build",children:"ESM Build"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"react-intl"})," and its underlying libraries (",(0,a.jsx)(n.code,{children:"intl-messageformat-parser"}),", ",(0,a.jsx)(n.code,{children:"intl-messageformat"}),", ",(0,a.jsx)(n.code,{children:"@formatjs/intl-relativetimeformat"}),", ",(0,a.jsx)(n.code,{children:"intl-format-cache"}),", ",(0,a.jsx)(n.code,{children:"intl-utils"}),") export ESM artifacts. This means you should configure your build toolchain to transpile those libraries."]}),"\n",(0,a.jsx)(n.h3,{id:"jest",children:"Jest"}),"\n",(0,a.jsxs)(n.p,{children:["Add ",(0,a.jsx)(n.code,{children:"transformIgnorePatterns"})," to always include those libraries, e.g:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"{\n  transformIgnorePatterns: [\n    '/node_modules/(?!intl-messageformat|intl-messageformat-parser).+\\\\.js$',\n  ],\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"webpack",children:"webpack"}),"\n",(0,a.jsxs)(n.p,{children:["If you're using ",(0,a.jsx)(n.code,{children:"babel-loader"}),", add those libraries in ",(0,a.jsx)(n.code,{children:"include"}),", e.g:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'include: [\n  path.join(__dirname, "node_modules/react-intl"),\n  path.join(__dirname, "node_modules/intl-messageformat"),\n  path.join(__dirname, "node_modules/intl-messageformat-parser"),\n],\n'})}),"\n",(0,a.jsx)(n.h2,{id:"creating-intl-without-using-provider",children:"Creating intl without using Provider"}),"\n",(0,a.jsxs)(n.p,{children:["We've added a new API called ",(0,a.jsx)(n.code,{children:"createIntl"})," that allows you to create an ",(0,a.jsx)(n.code,{children:"IntlShape"})," object without using ",(0,a.jsx)(n.code,{children:"Provider"}),". This allows you to format things outside of React lifecycle while reusing the same ",(0,a.jsx)(n.code,{children:"intl"})," object. For example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import {createIntl, createIntlCache, RawIntlProvider} from 'react-intl'\n\n// This is optional but highly recommended\n// since it prevents memory leak\nconst cache = createIntlCache()\n\nconst intl = createIntl({\n  locale: 'fr-FR',\n  messages: {}\n}, cache)\n\n// Call imperatively\nintl.formatNumber(20)\n\n// Pass it to IntlProvider\n<RawIntlProvider value={intl}>{foo}</RawIntlProvider>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This is especially beneficial in SSR where you can reuse the same ",(0,a.jsx)(n.code,{children:"intl"})," object across requests."]}),"\n",(0,a.jsx)(n.h2,{id:"message-format-syntax-changes",children:"Message Format Syntax Changes"}),"\n",(0,a.jsxs)(n.p,{children:["We've rewritten our parser to be more faithful to ",(0,a.jsx)(n.a,{href:"https://unicode-org.github.io/icu/userguide/format_parse/messages/",children:"ICU Message Format"}),", in order to potentially support skeleton. So far the backwards-incompatible changes are:"]}),"\n",(0,a.jsxs)(n.h3,{id:"escape-character-has-been-changed-to-apostrophe-",children:["Escape character has been changed to apostrophe (",(0,a.jsx)(n.code,{children:"'"}),")."]}),"\n",(0,a.jsxs)(n.p,{children:["Previously while we were using ICU message format syntax, our escape char was backslash (",(0,a.jsx)(n.code,{children:"\\"}),"). This however creates issues with strict ICU translation vendors that support other implementations like ICU4J/ICU4C. Thanks to ",(0,a.jsx)(n.a,{href:"https://github.com/pyrocat101",children:"@pyrocat101"})," we've changed this behavior to be spec-compliant. This means:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'// Before\n<FormattedMessage defaultMessage="\\\\{foo\\\\}" /> //prints out "{foo}"\n\n// After\n<FormattedMessage defaultMessage="\'{foo}\'" /> //prints out "{foo}"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["We highly recommend reading the spec to learn more about how quote/escaping works ",(0,a.jsx)(n.a,{href:"https://unicode-org.github.io/icu/userguide/format_parse/messages",children:"here"})," under ",(0,a.jsx)(n.strong,{children:"Quoting/Escaping"})," section."]}),"\n",(0,a.jsx)(n.h3,{id:"placeholder-argument-syntax-change",children:"Placeholder argument syntax change"}),"\n",(0,a.jsxs)(n.p,{children:["Placeholder argument can no longer have ",(0,a.jsx)(n.code,{children:"-"})," (e.g: ",(0,a.jsx)(n.code,{children:"this is a {placeholder-var}"})," is invalid but ",(0,a.jsx)(n.code,{children:"this is a {placeholder_var}"})," is)."]}),"\n",(0,a.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,a.jsxs)(n.p,{children:["We've removed ",(0,a.jsx)(n.code,{children:"IntlProvider.getChildContext"})," for testing and now you can use ",(0,a.jsx)(n.code,{children:"createIntl"})," to create a standalone ",(0,a.jsx)(n.code,{children:"intl"})," object outside of React and use that for testing purposes. See ",(0,a.jsx)(n.a,{href:"/docs/guides/testing",children:"Testing with React Intl"})," for more details."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},7266:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(8225);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
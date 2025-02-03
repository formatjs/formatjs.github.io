"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5954],{3790:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>h});const l=JSON.parse('{"id":"tooling/linter","title":"eslint-plugin-formatjs","description":"This eslint plugin allows you to enforce certain rules in your ICU message.","source":"@site/docs/tooling/linter.md","sourceDirName":"tooling","slug":"/tooling/linter","permalink":"/docs/tooling/linter","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/tooling/linter.md","tags":[],"version":"current","lastUpdatedBy":"Long Ho","lastUpdatedAt":1738592882000,"frontMatter":{"id":"linter","title":"eslint-plugin-formatjs"},"sidebar":"tooling","previous":{"title":"CLI","permalink":"/docs/tooling/cli"},"next":{"title":"babel-plugin-formatjs","permalink":"/docs/tooling/babel-plugin"}}');var a=s(6106),r=s(972),i=s(288),t=s(4083);const o={id:"linter",title:"eslint-plugin-formatjs"},d=void 0,c={},h=[{value:"Usage",id:"usage",level:2},{value:"React",id:"react",level:3},{value:"Vue",id:"vue",level:3},{value:"Shared Settings",id:"shared-settings",level:2},{value:"<code>formatjs.additionalFunctionNames</code>",id:"formatjsadditionalfunctionnames",level:3},{value:"<code>formatjs.additionalComponentNames</code>",id:"formatjsadditionalcomponentnames",level:3},{value:"Shareable Configs",id:"shareable-configs",level:2},{value:"Example",id:"example",level:3},{value:"Available Rules",id:"available-rules",level:2},{value:"<code>blocklist-elements</code>",id:"blocklist-elements",level:3},{value:"Why",id:"why",level:4},{value:"Available elements",id:"available-elements",level:4},{value:"Example",id:"example-1",level:4},{value:"<code>enforce-description</code>",id:"enforce-description",level:3},{value:"Why",id:"why-1",level:4},{value:"Options",id:"options",level:4},{value:"<code>enforce-default-message</code>",id:"enforce-default-message",level:3},{value:"Why",id:"why-2",level:4},{value:"Options",id:"options-1",level:4},{value:"<code>enforce-placeholders</code>",id:"enforce-placeholders",level:3},{value:"Options",id:"options-2",level:4},{value:"<code>enforce-plural-rules</code>",id:"enforce-plural-rules",level:3},{value:"Why",id:"why-3",level:4},{value:"Available rules",id:"available-rules-1",level:4},{value:"Example",id:"example-2",level:4},{value:"<code>no-camel-case</code>",id:"no-camel-case",level:3},{value:"Why",id:"why-4",level:4},{value:"<code>no-missing-icu-plural-one-placeholders</code>",id:"no-missing-icu-plural-one-placeholders",level:3},{value:"Why",id:"why-5",level:4},{value:"<code>no-emoji</code>",id:"no-emoji",level:3},{value:"Why",id:"why-6",level:4},{value:"<code>no-literal-string-in-jsx</code>",id:"no-literal-string-in-jsx",level:3},{value:"Why",id:"why-7",level:4},{value:"Example",id:"example-3",level:4},{value:"<code>no-multiple-whitespaces</code>",id:"no-multiple-whitespaces",level:3},{value:"Why",id:"why-8",level:4},{value:"<code>no-multiple-plurals</code>",id:"no-multiple-plurals",level:3},{value:"Why",id:"why-9",level:4},{value:"<code>no-offset</code>",id:"no-offset",level:3},{value:"Why",id:"why-10",level:4},{value:"<code>enforce-id</code>",id:"enforce-id",level:3},{value:"Why",id:"why-11",level:4},{value:"Options",id:"options-3",level:4},{value:"<code>no-invalid-icu</code>",id:"no-invalid-icu",level:3},{value:"Why",id:"why-12",level:4},{value:"<code>no-id</code>",id:"no-id",level:3},{value:"Why",id:"why-13",level:4},{value:"<code>no-complex-selectors</code>",id:"no-complex-selectors",level:3},{value:"Options",id:"options-4",level:4},{value:"<code>no-useless-message</code>",id:"no-useless-message",level:3},{value:"Why",id:"why-14",level:4},{value:"<code>prefer-formatted-message</code>",id:"prefer-formatted-message",level:3},{value:"Why",id:"why-15",level:4},{value:"<code>prefer-pound-in-plural</code>",id:"prefer-pound-in-plural",level:3},{value:"Why",id:"why-16",level:4}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"This eslint plugin allows you to enforce certain rules in your ICU message."}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n","\n",(0,a.jsxs)(i.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,a.jsx)(t.A,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"npm i -D eslint-plugin-formatjs\n"})})}),(0,a.jsx)(t.A,{value:"yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"yarn add -D eslint-plugin-formatjs\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"Then in your eslint config:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import formatjs from 'eslint-plugin-formatjs'\n\nexport default [\n  // other configs...\n  {\n    plugins: {\n      formatjs,\n    },\n    rules: {\n      'formatjs/no-offset': 'error',\n    },\n  },\n]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"react",children:"React"}),"\n",(0,a.jsxs)(n.p,{children:["Currently this uses ",(0,a.jsx)(n.code,{children:"intl.formatMessage"}),", ",(0,a.jsx)(n.code,{children:"defineMessage"}),", ",(0,a.jsx)(n.code,{children:"defineMessages"}),", ",(0,a.jsx)(n.code,{children:"<FormattedMessage>"})," from ",(0,a.jsx)(n.code,{children:"react-intl"})," as hooks to verify the message. Therefore, in your code use 1 of the following mechanisms:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import {defineMessages, defineMessage} from 'react-intl'\n\nconst messages = defineMessages({\n  foo: {\n    defaultMessage: 'foo',\n    description: 'bar',\n  },\n})\n\ndefineMessage({\n  defaultMessage: 'single message',\n})\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import {FormattedMessage} from \'react-intl\'\n;<FormattedMessage defaultMessage="foo" description="bar" />\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"function foo() {\n  intl.formatMessage({\n    defaultMessage: 'foo',\n  })\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"vue",children:"Vue"}),"\n",(0,a.jsxs)(n.p,{children:["This will check against ",(0,a.jsx)(n.code,{children:"intl.formatMessage"}),", ",(0,a.jsx)(n.code,{children:"$formatMessage"})," function calls in both your JS/TS & your SFC ",(0,a.jsx)(n.code,{children:".vue"})," files. For example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-vue",children:"<template>\n  <p>\n    {{\n      $formatMessage({\n        defaultMessage: 'today is {now, date}',\n      })\n    }}\n  </p>\n</template>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"shared-settings",children:"Shared Settings"}),"\n",(0,a.jsxs)(n.p,{children:["These settings are applied globally to all formatjs rules once specified. See ",(0,a.jsx)(n.a,{href:"https://eslint.org/docs/user-guide/configuring/configuration-files#adding-shared-settings",children:"Shared Settings"})," for more details on how to set them."]}),"\n",(0,a.jsx)(n.h3,{id:"formatjsadditionalfunctionnames",children:(0,a.jsx)(n.code,{children:"formatjs.additionalFunctionNames"})}),"\n",(0,a.jsxs)(n.p,{children:["Similar to ",(0,a.jsx)(n.a,{href:"/docs/tooling/babel-plugin#additionalfunctionnames",children:"babel-plugin-formatjs"})," & ",(0,a.jsx)(n.a,{href:"/docs/tooling/ts-transformer#additionalfunctionnames",children:"@formatjs/ts-transformer"}),", this allows you to specify additional function names to check besides ",(0,a.jsx)(n.code,{children:"formatMessage"})," & ",(0,a.jsx)(n.code,{children:"$formatMessage"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"formatjsadditionalcomponentnames",children:(0,a.jsx)(n.code,{children:"formatjs.additionalComponentNames"})}),"\n",(0,a.jsxs)(n.p,{children:["Similar to ",(0,a.jsx)(n.a,{href:"/docs/tooling/babel-plugin#additionalcomponentnames",children:"babel-plugin-formatjs"})," & ",(0,a.jsx)(n.a,{href:"/docs/tooling/ts-transformer#additionalcomponentnames",children:"@formatjs/ts-transformer"}),", this allows you to specify additional component names to check besides ",(0,a.jsx)(n.code,{children:"FormattedMessage"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"shareable-configs",children:"Shareable Configs"}),"\n",(0,a.jsx)(n.p,{children:"The plugin provides the following two shareable configs:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"recommended"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"strict"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"By using these, you can simplify your configuration while still using a set of rules that aligns with your\nquality standards."}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import formatjs from 'eslint-plugin-formatjs'\n\nexport default [\n  formatjs.configs.recommended,\n  // Other configs...\n]\n"})}),"\n",(0,a.jsx)(n.h2,{id:"available-rules",children:"Available Rules"}),"\n",(0,a.jsx)(n.h3,{id:"blocklist-elements",children:(0,a.jsx)(n.code,{children:"blocklist-elements"})}),"\n",(0,a.jsx)(n.p,{children:"This blocklists usage of specific elements in ICU message."}),"\n",(0,a.jsx)(n.h4,{id:"why",children:"Why"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Certain translation vendors cannot handle things like ",(0,a.jsx)(n.code,{children:"selectordinal"})]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"available-elements",children:"Available elements"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"enum Element {\n  // literal text, like `defaultMessage: 'some text'`\n  literal = 'literal',\n  // placeholder, like `defaultMessage: '{placeholder} var'`\n  argument = 'argument',\n  // number, like `defaultMessage: '{placeholder, number} var'`\n  number = 'number',\n  // date, like `defaultMessage: '{placeholder, date} var'`\n  date = 'date',\n  // time, like `defaultMessage: '{placeholder, time} var'`\n  time = 'time',\n  // select, like `defaultMessage: '{var, select, foo{one} bar{two}} var'`\n  select = 'select',\n  // selectordinal, like `defaultMessage: '{var, selectordinal, one{one} other{two}} var'`\n  selectordinal = 'selectordinal',\n  // plural, like `defaultMessage: '{var, plural, one{one} other{two}} var'`\n  plural = 'plural',\n}\n"})}),"\n",(0,a.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import formatjs from 'eslint-plugin-formatjs'\n\nexport default [\n  {\n    plugins: {\n      formatjs,\n    },\n    rules: {\n      'formatjs/blocklist-elements': [2, ['selectordinal']],\n    },\n  },\n]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"enforce-description",children:(0,a.jsx)(n.code,{children:"enforce-description"})}),"\n",(0,a.jsxs)(n.p,{children:["This enforces ",(0,a.jsx)(n.code,{children:"description"})," in the message descriptor."]}),"\n",(0,a.jsx)(n.h4,{id:"why-1",children:"Why"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Description provides helpful context for translators"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import {defineMessages} from 'react-intl'\n\nconst messages = defineMessages({\n  // WORKS\n  foo: {\n    defaultMessage: 'foo',\n    description: 'bar',\n  },\n  // FAILS\n  bar: {\n    defaultMessage: 'bar',\n  },\n})\n"})}),"\n",(0,a.jsx)(n.h4,{id:"options",children:"Options"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import formatjs from 'eslint-plugin-formatjs'\n\nexport default [\n  {\n    plugins: {\n      formatjs,\n    },\n    rules: {\n      'formatjs/enforce-description': ['error', 'literal'],\n    },\n  },\n]\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Setting ",(0,a.jsx)(n.code,{children:"literal"})," forces ",(0,a.jsx)(n.code,{children:"description"})," to always be a string literal instead of function calls or variables. This is helpful for extraction tools that expects ",(0,a.jsx)(n.code,{children:"description"})," to always be a literal"]}),"\n",(0,a.jsx)(n.h3,{id:"enforce-default-message",children:(0,a.jsx)(n.code,{children:"enforce-default-message"})}),"\n",(0,a.jsxs)(n.p,{children:["This enforces ",(0,a.jsx)(n.code,{children:"defaultMessage"})," in the message descriptor."]}),"\n",(0,a.jsx)(n.h4,{id:"why-2",children:"Why"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Can be useful in case we want to extract messages for translations from source code. This way can make sure people won't forget about defaultMessage"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import {defineMessages} from 'react-intl'\n\nconst messages = defineMessages({\n  // WORKS\n  foo: {\n    defaultMessage: 'This is default message',\n    description: 'bar',\n  },\n  // FAILS\n  bar: {\n    description: 'bar',\n  },\n})\n"})}),"\n",(0,a.jsx)(n.h4,{id:"options-1",children:"Options"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import formatjs from 'eslint-plugin-formatjs'\n\nexport default [\n  {\n    plugins: {\n      formatjs,\n    },\n    rules: {\n      'formatjs/enforce-default-message': ['error', 'literal'],\n    },\n  },\n]\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Setting ",(0,a.jsx)(n.code,{children:"literal"})," forces ",(0,a.jsx)(n.code,{children:"defaultMessage"})," to always be a string literal instead of function calls or variables. This is helpful for extraction tools that expects ",(0,a.jsx)(n.code,{children:"defaultMessage"})," to always be a literal"]}),"\n",(0,a.jsx)(n.h3,{id:"enforce-placeholders",children:(0,a.jsx)(n.code,{children:"enforce-placeholders"})}),"\n",(0,a.jsx)(n.p,{children:"Makes sure all values are passed in if message has placeholders (number/date/time/plural/select/selectordinal). This requires values to be passed in as literal object (not a variable)."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"// WORKS, no error\n<FormattedMessage\n  defaultMessage=\"this is a {placeholder}\"\n  values={{placeholder: 'dog'}}\n/>\n\n// WORKS, no error\nintl.formatMessage({\n  defaultMessage: 'this is a {placeholder}'\n}, {placeholder: 'dog'})\n\n// WORKS, error bc no values were provided\n<FormattedMessage\n  defaultMessage=\"this is a {placeholder}\"\n/>\n\n// WORKS, error bc no values were provided\nintl.formatMessage({\n  defaultMessage: 'this is a {placeholder}'\n})\n\n// WORKS, error bc `placeholder` is not passed in\n<FormattedMessage\n  defaultMessage=\"this is a {placeholder}\"\n  values={{foo: 1}}\n/>\n\n// WORKS, error bc `placeholder` is not passed in\nintl.formatMessage({\n  defaultMessage: 'this is a {placeholder}'\n}, {foo: 1})\n\n// DOESN'T WORK\n<FormattedMessage\n  defaultMessage=\"this is a {placeholder}\"\n  values={someVar}\n/>\n\n// DOESN'T WORK\nintl.formatMessage({\n  defaultMessage: 'this is a {placeholder}'\n}, values)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"options-2",children:"Options"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import formatjs from 'eslint-plugin-formatjs'\n\nexport default [\n  {\n    plugins: {\n      formatjs,\n    },\n    rules: {\n      'formatjs/enforce-placeholders': [\n        'error',\n        {\n          ignoreList: ['foo'],\n        },\n      ],\n    },\n  },\n]\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"ignoreList"}),": List of placeholder names to ignore. This works with ",(0,a.jsx)(n.code,{children:"defaultRichTextElements"})," in ",(0,a.jsx)(n.code,{children:"react-intl"})," so we don't provide false positive for ambient global tag formatting"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"enforce-plural-rules",children:(0,a.jsx)(n.code,{children:"enforce-plural-rules"})}),"\n",(0,a.jsx)(n.p,{children:"Enforce certain plural rules to always be specified/forbidden in a message."}),"\n",(0,a.jsx)(n.h4,{id:"why-3",children:"Why"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["It is recommended to always specify ",(0,a.jsx)(n.code,{children:"other"})," as fallback in the message."]}),"\n",(0,a.jsx)(n.li,{children:"Some translation vendors only accept certain rules."}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"available-rules-1",children:"Available rules"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"enum LDML {\n  zero = 'zero',\n  one = 'one',\n  two = 'two',\n  few = 'few',\n  many = 'many',\n  other = 'other',\n}\n"})}),"\n",(0,a.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import formatjs from 'eslint-plugin-formatjs'\n\nexport default [\n  {\n    plugins: {\n      formatjs,\n    },\n    rules: {\n      'formatjs/enforce-plural-rules': [\n        2,\n        {\n          one: true,\n          other: true,\n          zero: false,\n        },\n      ],\n    },\n  },\n]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"no-camel-case",children:(0,a.jsx)(n.code,{children:"no-camel-case"})}),"\n",(0,a.jsx)(n.p,{children:"This make sure placeholders are not camel-case."}),"\n",(0,a.jsx)(n.h4,{id:"why-4",children:"Why"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"This is to prevent case-sensitivity issue in certain translation vendors."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import {defineMessages} from 'react-intl'\n\nconst messages = defineMessages({\n  // WORKS\n  foo: {\n    defaultMessage: 'foo {snake_case} {nothing}',\n  },\n  // FAILS\n  bar: {\n    defaultMessage: 'foo {camelCase}',\n  },\n})\n"})}),"\n",(0,a.jsx)(n.h3,{id:"no-missing-icu-plural-one-placeholders",children:(0,a.jsx)(n.code,{children:"no-missing-icu-plural-one-placeholders"})}),"\n",(0,a.jsxs)(n.p,{children:["Messages that look like ",(0,a.jsx)(n.code,{children:"{thing, plural, one {1 thing} other {# things}}"})," will need to be changed to ",(0,a.jsx)(n.code,{children:"{thing, plural, one {# thing} other {# things}}"})]}),"\n",(0,a.jsx)(n.h4,{id:"why-5",children:"Why"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["one is a category for any number that behaves like 1. So in some languages, for example Ukrainian, Russian and Polish, one \u2192 numbers that end in 1 (like 1, 21, 151) but that don\u2019t end in 11 (like 11, 111, 10311). ",(0,a.jsx)(n.a,{href:"https://formatjs.github.io/docs/core-concepts/icu-syntax/#plural-format",children:"More info"})]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"no-emoji",children:(0,a.jsx)(n.code,{children:"no-emoji"})}),"\n",(0,a.jsx)(n.p,{children:"This prevents usage of emojis (or above a certain Unicode version) in message"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import formatjs from 'eslint-plugin-formatjs'\n\nexport default [\n  {\n    plugins: {\n      formatjs,\n    },\n    rules: {\n      'formatjs/no-emoji': ['error'],\n    },\n  },\n\n  // OR\n  {\n    plugins: {\n      formatjs,\n    },\n    rules: {\n      'formatjs/no-emoji': ['error', {versionAbove: '12.0'}],\n    },\n  },\n]\n"})}),"\n",(0,a.jsx)(n.h4,{id:"why-6",children:"Why"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Certain translation vendors cannot handle emojis."}),"\n",(0,a.jsx)(n.li,{children:"Cross-platform encoding for emojis are faulty."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import {defineMessages} from 'react-intl'\n\nconst messages = defineMessages({\n  // WORKS\n  foo: {\n    defaultMessage: 'Smileys & People',\n  },\n  // WORKS with option {versionAbove: '12.0'}\n  foo_bar: {\n    defaultMessage: '\ud83d\ude03 Smileys & People',\n  },\n  // FAILS\n  bar: {\n    defaultMessage: '\ud83d\ude03 Smileys & People',\n  },\n  // FAILS with option {versionAbove: '12.0'}\n  bar_foo: {\n    defaultMessage: '\ud83e\udd79 Smileys & People',\n  },\n})\n"})}),"\n",(0,a.jsx)(n.h3,{id:"no-literal-string-in-jsx",children:(0,a.jsx)(n.code,{children:"no-literal-string-in-jsx"})}),"\n",(0,a.jsx)(n.p,{children:"This prevents untranslated strings in JSX."}),"\n",(0,a.jsx)(n.h4,{id:"why-7",children:"Why"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"It is easy to forget wrapping JSX text in translation functions or components."}),"\n",(0,a.jsxs)(n.li,{children:["It is easy to forget wrapping certain accessibility attributes (e.g. ",(0,a.jsx)(n.code,{children:"aria-label"}),") in translation functions."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'// WORKS\n<Button>\n  <FormattedMessage defaultMessage="Submit" />\n</Button>\n// WORKS\n<Button>\n  {customTranslateFn("Submit")}\n</Button>\n// WORKS\n<input aria-label={intl.formatMessage({defaultMessage: "Label"})} />\n// WORKS\n<img\n  src="/example.png"\n  alt={intl.formatMessage({defaultMessage: "Image description"})}\n/>\n// FAILS\n<Button>Submit</Button>\n// FAILS\n<Button>{\'Submit\'}</Button>\n// FAILS\n<Button>{`Te` + \'s\' + t}</Button>\n// FAILS\n<input aria-label="Untranslated label" />\n// FAILS\n<img src="/example.png" alt="Image description" />\n// FAILS\n<input aria-label={`Untranslated label`} />\n'})}),"\n",(0,a.jsx)(n.p,{children:"This linter reports text literals or string expressions, including string\nconcatenation expressions in the JSX children. It also checks certain JSX\nattributes that you can customize."}),"\n",(0,a.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import formatjs from 'eslint-plugin-formatjs'\n\nexport default [\n  {\n    plugins: {\n      formatjs,\n    },\n    rules: {\n      'formatjs/no-literal-string-in-jsx': [\n        2,\n        {\n          // Include or exclude additional prop checks (merged with the default checks)\n          props: {\n            include: [\n              // picomatch style glob pattern for tag name and prop name.\n              // check `name` prop of `UI.Button` tag.\n              ['UI.Button', 'name'],\n              // check `message` of any component.\n              ['*', 'message'],\n            ],\n            // Exclude will always override include.\n            exclude: [\n              // do not check `message` of the `Foo` tag.\n              ['Foo', 'message'],\n              // do not check aria-label and aria-description of `Bar` tag.\n              ['Bar', 'aria-{label,description}'],\n            ],\n          },\n        },\n      ],\n    },\n  },\n]\n"})}),"\n",(0,a.jsx)(n.p,{children:"The default prop checks are:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"{\n  include: [\n    // check aria attributes that the screen reader announces.\n    ['*', 'aria-{label,description,details,errormessage}'],\n    // check placeholder and title attribute of all native DOM elements.\n    ['[a-z]*([a-z0-9])', '(placeholder|title)'],\n    // check alt attribute of the img tag.\n    ['img', 'alt'],\n  ],\n  exclude: []\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"no-multiple-whitespaces",children:(0,a.jsx)(n.code,{children:"no-multiple-whitespaces"})}),"\n",(0,a.jsx)(n.p,{children:"This prevents usage of multiple consecutive whitespaces in message."}),"\n",(0,a.jsx)(n.h4,{id:"why-8",children:"Why"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Consecutive whitespaces are handled differently in different locales."}),"\n",(0,a.jsxs)(n.li,{children:["Prevents ",(0,a.jsx)(n.code,{children:"\\"})," linebreaks in JS string which results in awkward whitespaces."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import {defineMessages} from 'react-intl'\n\nconst messages = defineMessages({\n  // WORKS\n  foo: {\n    defaultMessage: 'Smileys & People',\n  },\n  // FAILS\n  bar: {\n    defaultMessage: 'Smileys &   People',\n  },\n  // FAILS\n  baz: {\n    defaultMessage:\n      'this message is too long \\\n    so I wanna line break it.',\n  },\n})\n"})}),"\n",(0,a.jsx)(n.h3,{id:"no-multiple-plurals",children:(0,a.jsx)(n.code,{children:"no-multiple-plurals"})}),"\n",(0,a.jsx)(n.p,{children:"This prevents specifying multiple plurals in your message."}),"\n",(0,a.jsx)(n.h4,{id:"why-9",children:"Why"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Nested plurals are hard to translate across languages so some translation vendors don't allow it."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import {defineMessages} from 'react-intl'\n\nconst messages = defineMessages({\n    // WORKS\n    foo: {\n        defaultMessage: '{p1, plural, one{one}}',\n    },\n    // FAILS\n    bar: {\n        defaultMessage: '{p1, plural, one{one}} {p2, plural, one{two}}',\n    }\n    // ALSO FAILS\n    bar2: {\n        defaultMessage: '{p1, plural, one{{p2, plural, one{two}}}}',\n    }\n})\n"})}),"\n",(0,a.jsx)(n.h3,{id:"no-offset",children:(0,a.jsx)(n.code,{children:"no-offset"})}),"\n",(0,a.jsx)(n.p,{children:"This prevents specifying offset in plural rules in your message."}),"\n",(0,a.jsx)(n.h4,{id:"why-10",children:"Why"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Offset has complicated logic implication so some translation vendors don't allow it."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import {defineMessages} from 'react-intl'\n\nconst messages = defineMessages({\n  // PASS\n  foo: {\n    defaultMessage: '{var, plural, one{one} other{other}}',\n  },\n  // FAILS\n  bar: {\n    defaultMessage: '{var, plural, offset:1 one{one} other{other}}',\n  },\n})\n"})}),"\n",(0,a.jsx)(n.h3,{id:"enforce-id",children:(0,a.jsx)(n.code,{children:"enforce-id"})}),"\n",(0,a.jsxs)(n.p,{children:["This enforces generated ID to be set in ",(0,a.jsx)(n.code,{children:"MessageDescriptor"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"why-11",children:"Why"}),"\n",(0,a.jsx)(n.p,{children:"Pipelines can enforce automatic/manual ID generation at the linter level (autofix to insert autogen ID) so this guarantees that."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import {defineMessages} from 'react-intl';\n\nconst messages = defineMessages({\n  // PASS\n  foo: {\n    id: '19shaf'\n    defaultMessage: '{var, plural, one{one} other{other}}',\n  },\n  // FAILS\n  bar: {\n    id: 'something',\n    defaultMessage: '{var, plural, offset:1 one{one} other{other}}',\n  },\n  // FAILS\n  bar: {\n    defaultMessage: '{var, plural, offset:1 one{one} other{other}}',\n  },\n});\n"})}),"\n",(0,a.jsx)(n.h4,{id:"options-3",children:"Options"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import formatjs from 'eslint-plugin-formatjs'\n\nexport default [\n  {\n    plugins: {\n      formatjs,\n    },\n    rules: {\n      'formatjs/enforce-id': [\n        'error',\n        {\n          idInterpolationPattern: '[sha512:contenthash:base64:6]',\n        },\n      ],\n    },\n  },\n]\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"idInterpolationPattern"}),": Pattern to verify ID against"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"idWhitelist"}),": An array of strings with regular expressions. This array allows allowlist custom ids for messages. For example '",(0,a.jsx)(n.code,{children:"\\\\."}),"' allows any id which has dot; ",(0,a.jsx)(n.code,{children:"'^payment_.*'"})," - allows any custom id which has prefix ",(0,a.jsx)(n.code,{children:"payment_"}),". Be aware that any backslash \\ provided via string must be escaped with an additional backslash."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"no-invalid-icu",children:(0,a.jsx)(n.code,{children:"no-invalid-icu"})}),"\n",(0,a.jsxs)(n.p,{children:["This bans strings inside ",(0,a.jsx)(n.code,{children:"defaultMessage"}),"\xa0that are syntactically invalid."]}),"\n",(0,a.jsx)(n.h4,{id:"why-12",children:"Why"}),"\n",(0,a.jsx)(n.p,{children:"It's easy to miss strings that look correct to you as a developer but which are actually syntactically invalid ICU strings. For instance, the following would cause an eslint error:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"formatMessage(\n  {\n    defaultMessage: '{count, plural one {#} other {# more}}', //Missing a comma!\n  },\n  {\n    count: 1,\n  }\n)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"no-id",children:(0,a.jsx)(n.code,{children:"no-id"})}),"\n",(0,a.jsxs)(n.p,{children:["This bans explicit ID in ",(0,a.jsx)(n.code,{children:"MessageDescriptor"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"why-13",children:"Why"}),"\n",(0,a.jsxs)(n.p,{children:["We generally encourage automatic ID generation due to ",(0,a.jsx)(n.a,{href:"https://formatjs.github.io/docs/getting-started/message-declaration",children:"these reasons"}),". This makes sure no explicit IDs are set."]}),"\n",(0,a.jsx)(n.h3,{id:"no-complex-selectors",children:(0,a.jsx)(n.code,{children:"no-complex-selectors"})}),"\n",(0,a.jsx)(n.p,{children:"Make sure a sentence is not too complex.\nComplexity is determined by how many strings are produced when we try to flatten the sentence given its selectors. For example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"I have {count, plural, one{a dog} other{many dogs}}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["has the complexity of 2 because flattening the plural selector results in 2 sentences: ",(0,a.jsx)(n.code,{children:"I have a dog"})," & ",(0,a.jsx)(n.code,{children:"I have many dogs"}),".\nDefault complexity limit is 20 (using ",(0,a.jsx)(n.a,{href:"https://help.smartling.com/hc/en-us/articles/360008030994-ICU-MessageFormat",children:"Smartling as a reference"}),")"]}),"\n",(0,a.jsx)(n.h4,{id:"options-4",children:"Options"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import formatjs from 'eslint-plugin-formatjs'\n\nexport default [\n  {\n    plugins: {\n      formatjs,\n    },\n    rules: {\n      'formatjs/no-complex-selectors': [\n        'error',\n        {\n          limit: 3,\n        },\n      ],\n    },\n  },\n]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"no-useless-message",children:(0,a.jsx)(n.code,{children:"no-useless-message"})}),"\n",(0,a.jsx)(n.p,{children:"This bans messages that do not require translation."}),"\n",(0,a.jsx)(n.h4,{id:"why-14",children:"Why"}),"\n",(0,a.jsxs)(n.p,{children:["Messages like ",(0,a.jsx)(n.code,{children:"{test}"})," is not actionable by translators. The code should just directly reference ",(0,a.jsx)(n.code,{children:"test"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"prefer-formatted-message",children:(0,a.jsx)(n.code,{children:"prefer-formatted-message"})}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"<FormattedMessage>"})," instead of the imperative ",(0,a.jsx)(n.code,{children:"intl.formatMessage(...)"})," if applicable."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"// Bad\n<p>\n  {intl.formatMessage({defaultMessage: 'hello'})}\n</p>\n\n// Good\n<p>\n  <FormattedMessage defaultMessage=\"hello\" />\n</p>\n"})}),"\n",(0,a.jsx)(n.h4,{id:"why-15",children:"Why"}),"\n",(0,a.jsx)(n.p,{children:"Consistent coding style in JSX and less syntax clutter."}),"\n",(0,a.jsx)(n.h3,{id:"prefer-pound-in-plural",children:(0,a.jsx)(n.code,{children:"prefer-pound-in-plural"})}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"#"})," in the plural argument to reference the count instead of repeating the argument."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"// Bad\nI have {count} {\n  count, plural,\n    one {apple}\n    other {apples}\n  }\n}\n// Good\nI have {\n  count, plural,\n    one {# apple}\n    other {# apples}\n  }\n}\n\n// Bad\nI have {\n  count, plural,\n    one {{count} apple}\n    other {{count} apples}\n  }\n}\n// Good\nI have {\n  count, plural,\n    one {# apple}\n    other {# apples}\n  }\n}\n\n// Bad\nI won the {ranking}{\n  count, selectordinal,\n    one {st}\n    two {nd}\n    few {rd}\n    other {th}\n} place.\n// Good\nI won the {ranking}{\n  count, selectordinal,\n    one {#st}\n    two {#nd}\n    few {#rd}\n    other {#th}\n} place.\n"})}),"\n",(0,a.jsx)(n.h4,{id:"why-16",children:"Why"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"More concise message."}),"\n",(0,a.jsx)(n.li,{children:"Ensures that the count are correctly formatted as numbers."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},4083:(e,n,s)=>{s.d(n,{A:()=>i});s(7378);var l=s(3372);const a={tabItem:"tabItem_GNoz"};var r=s(6106);function i(e){let{children:n,hidden:s,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,l.A)(a.tabItem,i),hidden:s,children:n})}},288:(e,n,s)=>{s.d(n,{A:()=>w});var l=s(7378),a=s(3372),r=s(229),i=s(1654),t=s(8890),o=s(7710),d=s(6940),c=s(9834);function h(e){var n,s;return null!=(n=null==(s=l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:s.filter(Boolean))?n:[]}function u(e){const{values:n,children:s}=e;return(0,l.useMemo)((()=>{const e=null!=n?n:function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:l,default:a}}=e;return{value:n,label:s,attributes:l,default:a}}))}(s);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const a=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:n,groupId:s});return[(0,o.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace(Object.assign({},a.location,{search:n.toString()}))}),[r,a])]}function f(e){const{defaultValue:n,queryString:s=!1,groupId:a}=e,r=u(e),[i,o]=(0,l.useState)((()=>function(e){var n;let{defaultValue:s,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:l}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+s+'" but none of its children has the corresponding value. Available values are: '+l.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return s}const a=null!=(n=l.find((e=>e.default)))?n:l[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[d,h]=m({queryString:s,groupId:a}),[f,g]=function(e){let{groupId:n}=e;const s=function(e){return e?"docusaurus.tab."+e:null}(n),[a,r]=(0,c.Dv)(s);return[a,(0,l.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:a}),j=(()=>{const e=null!=d?d:f;return p({value:e,tabValues:r})?e:null})();(0,t.A)((()=>{j&&o(j)}),[j]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);o(e),h(e),g(e)}),[h,g,r]),tabValues:r}}var g=s(1682);const j={tabList:"tabList_DGQs",tabItem:"tabItem_k9HR"};var x=s(6106);function v(e){let{className:n,block:s,selectedValue:l,selectValue:i,tabValues:t}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const n=e.currentTarget,s=o.indexOf(n),a=t[s].value;a!==l&&(d(n),i(a))},h=e=>{var n;let s=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var l;const n=o.indexOf(e.currentTarget)+1;s=null!=(l=o[n])?l:o[0];break}case"ArrowLeft":{var a;const n=o.indexOf(e.currentTarget)-1;s=null!=(a=o[n])?a:o[o.length-1];break}}null==(n=s)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},n),children:t.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>{o.push(e)},onKeyDown:h,onClick:c},r,{className:(0,a.A)("tabs__item",j.tabItem,null==r?void 0:r.className,{"tabs__item--active":l===n}),children:null!=s?s:n}),n)}))})}function b(e){let{lazy:n,children:s,selectedValue:r}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,x.jsx)(v,Object.assign({},n,e)),(0,x.jsx)(b,Object.assign({},n,e))]})}function w(e){const n=(0,g.A)();return(0,x.jsx)(y,Object.assign({},e,{children:h(e.children)}),String(n))}},972:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>t});var l=s(7378);const a={},r=l.createContext(a);function i(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8411],{208:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"tooling/cli","title":"CLI","description":"Installation","source":"@site/docs/tooling/cli.md","sourceDirName":"tooling","slug":"/tooling/cli","permalink":"/docs/tooling/cli","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/tooling/cli.md","tags":[],"version":"current","lastUpdatedBy":"Long Ho","lastUpdatedAt":1742399024000,"frontMatter":{"id":"cli","title":"CLI"},"sidebar":"tooling","next":{"title":"eslint-plugin-formatjs","permalink":"/docs/tooling/linter"}}');var r=t(6106),a=t(6039),l=t(3744),i=t(1818);const o={id:"cli",title:"CLI"},c=void 0,d={},h=[{value:"Installation",id:"installation",level:2},{value:"Extraction",id:"extraction",level:2},{value:"<code>--format [path]</code>",id:"--format-path",level:3},{value:"<code>--out-file [path]</code>",id:"--out-file-path",level:3},{value:"<code>--id-interpolation-pattern [pattern]</code>",id:"--id-interpolation-pattern-pattern",level:3},{value:"<code>--extract-source-location</code>",id:"--extract-source-location",level:3},{value:"<code>--additional-component-names [comma-separated-names]</code>",id:"--additional-component-names-comma-separated-names",level:3},{value:"<code>--additional-function-names [comma-separated-names]</code>",id:"--additional-function-names-comma-separated-names",level:3},{value:"<code>--ignore [files]</code>",id:"--ignore-files",level:3},{value:"<code>--throws</code>",id:"--throws",level:3},{value:"<code>--pragma [pragma]</code>",id:"--pragma-pragma",level:3},{value:"<code>--flatten</code>",id:"--flatten",level:3},{value:"Verification",id:"verification",level:2},{value:"<code>--source-locale &lt;sourceLocale&gt;</code>",id:"--source-locale-sourcelocale",level:3},{value:"<code>--missing-keys</code>",id:"--missing-keys",level:3},{value:"<code>--structural-equality</code>",id:"--structural-equality",level:3},{value:"Compilation",id:"compilation",level:2},{value:"<code>--format [path]</code>",id:"--format-path-1",level:3},{value:"<code>--out-file &lt;output&gt;</code>",id:"--out-file-output",level:3},{value:"<code>--preserve-whitespace</code>",id:"--preserve-whitespace",level:3},{value:"<code>--ast</code>",id:"--ast",level:3},{value:"<code>--pseudo-locale &lt;pseudoLocale&gt;</code>",id:"--pseudo-locale-pseudolocale",level:3},{value:"Extraction and compilation with a single script",id:"extraction-and-compilation-with-a-single-script",level:2},{value:"Breakdown of the script",id:"breakdown-of-the-script",level:3},{value:"The resulting files",id:"the-resulting-files",level:3},{value:"Folder Compilation",id:"folder-compilation",level:2},{value:"<code>--format [path]</code>",id:"--format-path-2",level:3},{value:"<code>--ast</code>",id:"--ast-1",level:3},{value:"<code>--skip-errors</code>",id:"--skip-errors",level:3},{value:"Builtin Formatters",id:"builtin-formatters",level:2},{value:"Custom Formatters",id:"custom-formatters",level:2},{value:"Node API",id:"node-api",level:2},{value:"Extraction",id:"extraction-1",level:3},{value:"Compilation",id:"compilation-1",level:3},{value:"Custom Formatter",id:"custom-formatter",level:3}];function u(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,r.jsxs)(l.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,r.jsx)(i.A,{value:"npm",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"npm i -D @formatjs/cli\n"})})}),(0,r.jsx)(i.A,{value:"yarn",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"yarn add -D @formatjs/cli\n"})})})]}),"\n",(0,r.jsxs)(s.p,{children:["Add the following command to your ",(0,r.jsx)(s.code,{children:"package.json"})," ",(0,r.jsx)(s.code,{children:"scripts"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "scripts": {\n    "extract": "formatjs extract",\n    "compile": "formatjs compile"\n  }\n}\n'})}),"\n",(0,r.jsxs)(s.p,{children:["We've built this ",(0,r.jsx)(s.a,{href:"https://www.npmjs.com/package/@formatjs/cli",children:"CLI"})," that helps you extract messages from a list of files. It uses ",(0,r.jsx)(s.a,{href:"/docs/tooling/ts-transformer",children:(0,r.jsx)(s.code,{children:"@formatjs/ts-transformer"})})," under the hood and should be able to extract messages if you're declaring using 1 of the mechanisms below:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"import {defineMessages, defineMessage} from 'react-intl'\n\ndefineMessages({\n  foo: {\n    id: 'foo',\n    defaultMessage: 'foo',\n    description: 'bar',\n  },\n})\n\ndefineMessage({\n  id: 'single',\n  defaultMessage: 'single message',\n  description: 'header',\n})\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:'import {FormattedMessage} from \'react-intl\'\n;<FormattedMessage id="foo" defaultMessage="foo" description="bar" />\n'})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"function Comp(props) {\n  const {intl} = props\n  return intl.formatMessage({\n    // The whole `intl.formatMessage` is required so we can extract\n    id: 'foo',\n    defaultMessage: 'foo',\n    description: 'bar',\n  })\n}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"extraction",children:"Extraction"}),"\n",(0,r.jsxs)(l.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,r.jsxs)(i.A,{value:"npm",children:[(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"npm run extract -- --help\n# Usage: formatjs extract [options] [files...]\n\n# Extract string messages from React components that use react-intl.\n# The input language is expected to be TypeScript or ES2017 with JSX.\n"})}),(0,r.jsx)(s.p,{children:"For example:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:'npm run extract -- "src/**/*.{ts,tsx,vue}" --out-file lang.json\n'})})]}),(0,r.jsxs)(i.A,{value:"yarn",children:[(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"yarn extract --help\n# Usage: formatjs extract [options] [files...]\n\n# Extract string messages from React components that use react-intl.\n# The input language is expected to be TypeScript or ES2017 with JSX.\n"})}),(0,r.jsx)(s.p,{children:"For example:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:'yarn extract "src/**/*.{ts,tsx,vue}" --out-file lang.json\n'})})]})]}),"\n",(0,r.jsx)(s.admonition,{type:"caution",children:(0,r.jsxs)(s.p,{children:["You should always quote (",(0,r.jsx)(s.code,{children:'"'})," or ",(0,r.jsx)(s.code,{children:"'"}),") your glob pattern (like ",(0,r.jsx)(s.code,{children:'"src/**/*"'}),") to avoid auto shell expansion of those glob, which varies depending on your shell (",(0,r.jsx)(s.code,{children:"zsh"})," vs ",(0,r.jsx)(s.code,{children:"fish"})," vs ",(0,r.jsx)(s.code,{children:"bash"}),")."]})}),"\n",(0,r.jsx)(s.h3,{id:"--format-path",children:(0,r.jsx)(s.code,{children:"--format [path]"})}),"\n",(0,r.jsxs)(s.p,{children:["Path to a formatter file that controls the shape of JSON file from ",(0,r.jsx)(s.code,{children:"--out-file"}),".\nThe formatter file must export a function called ",(0,r.jsx)(s.code,{children:"format"})," with the signature."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"type FormatFn = <T = Record<string, MessageDescriptor>>(\n  msgs: Record<string, MessageDescriptor>\n) => T\n"})}),"\n",(0,r.jsx)(s.p,{children:"This is especially useful to convert from our extracted format to a TMS-specific format."}),"\n",(0,r.jsxs)(s.p,{children:["See our ",(0,r.jsx)(s.a,{href:"https://github.com/formatjs/formatjs/tree/main/packages/cli-lib/src/formatters",children:"builtin formatters"})," for examples."]}),"\n",(0,r.jsx)(s.h3,{id:"--out-file-path",children:(0,r.jsx)(s.code,{children:"--out-file [path]"})}),"\n",(0,r.jsxs)(s.p,{children:["The target file path where the plugin will output an aggregated ",(0,r.jsx)(s.code,{children:".json"})," file of allthe translations from the ",(0,r.jsx)(s.code,{children:"files"})," supplied. This flag will ignore ",(0,r.jsx)(s.code,{children:"--messages-dir"})]}),"\n",(0,r.jsx)(s.h3,{id:"--id-interpolation-pattern-pattern",children:(0,r.jsx)(s.code,{children:"--id-interpolation-pattern [pattern]"})}),"\n",(0,r.jsxs)(s.p,{children:["If certain message descriptors don't have id, this ",(0,r.jsx)(s.code,{children:"pattern"})," will be used to automatically generate IDs for them. Default to ",(0,r.jsx)(s.code,{children:"[sha512:contenthash:base64:6]"}),". See ",(0,r.jsx)(s.a,{href:"https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options",children:"nodejs crypto createHash"})," for hash algorithms & ",(0,r.jsx)(s.a,{href:"https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings",children:"nodejs buffer docs"})," for digest encodings."]}),"\n",(0,r.jsx)(s.h3,{id:"--extract-source-location",children:(0,r.jsx)(s.code,{children:"--extract-source-location"})}),"\n",(0,r.jsxs)(s.p,{children:["Whether the metadata about the location of the message in the source file should be extracted. If ",(0,r.jsx)(s.code,{children:"true"}),", then ",(0,r.jsx)(s.code,{children:"file"}),", ",(0,r.jsx)(s.code,{children:"start"}),", and ",(0,r.jsx)(s.code,{children:"end"})," fields will exist for each extracted message descriptors. (default: ",(0,r.jsx)(s.code,{children:"false"}),")"]}),"\n",(0,r.jsx)(s.h3,{id:"--additional-component-names-comma-separated-names",children:(0,r.jsx)(s.code,{children:"--additional-component-names [comma-separated-names]"})}),"\n",(0,r.jsxs)(s.p,{children:["Additional component names to extract messages from, e.g: ",(0,r.jsx)(s.code,{children:"['FormattedFooBarMessage']"}),". ",(0,r.jsx)(s.strong,{children:"NOTE"}),": By default we check for the fact that ",(0,r.jsx)(s.code,{children:"FormattedMessage"})," is imported from ",(0,r.jsx)(s.code,{children:"moduleSourceName"})," to make sure variable alias works. This option does not do that so it's less safe."]}),"\n",(0,r.jsx)(s.h3,{id:"--additional-function-names-comma-separated-names",children:(0,r.jsx)(s.code,{children:"--additional-function-names [comma-separated-names]"})}),"\n",(0,r.jsxs)(s.p,{children:["Additional function names to extract messages from, e.g: ",(0,r.jsx)(s.code,{children:"['$t']"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"--ignore-files",children:(0,r.jsx)(s.code,{children:"--ignore [files]"})}),"\n",(0,r.jsxs)(s.p,{children:["List of glob paths to ",(0,r.jsx)(s.strong,{children:"not"})," extract translations from."]}),"\n",(0,r.jsx)(s.h3,{id:"--throws",children:(0,r.jsx)(s.code,{children:"--throws"})}),"\n",(0,r.jsx)(s.p,{children:"Whether to throw an exception when we fail to process any file in the batch."}),"\n",(0,r.jsx)(s.h3,{id:"--pragma-pragma",children:(0,r.jsx)(s.code,{children:"--pragma [pragma]"})}),"\n",(0,r.jsxs)(s.p,{children:["Parse specific additional custom pragma. This allows you to tag certain file with metadata such as ",(0,r.jsx)(s.code,{children:"project"}),". For example with this file:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:'// @intl-meta project:my-custom-project\nimport {FormattedMessage} from \'react-intl\'\n;<FormattedMessage defaultMessage="foo" id="bar" />\n'})}),"\n",(0,r.jsxs)(s.p,{children:["and with option ",(0,r.jsx)(s.code,{children:'{pragma: "intl-meta"}'}),", we'll parse out ",(0,r.jsx)(s.code,{children:"// @intl-meta project:my-custom-project"})," into ",(0,r.jsx)(s.code,{children:"{project: 'my-custom-project'}"})," in the result file."]}),"\n",(0,r.jsx)(s.h3,{id:"--flatten",children:(0,r.jsx)(s.code,{children:"--flatten"})}),"\n",(0,r.jsx)(s.p,{children:"Whether to hoist selectors & flatten sentences as much as possible. E.g:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"I have {count, plural, one{a dog} other{many dogs}}\n"})}),"\n",(0,r.jsx)(s.p,{children:"becomes"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"{count, plural, one{I have a dog} other{I have many dogs}}\n"})}),"\n",(0,r.jsx)(s.p,{children:"The goal is to provide as many full sentences as possible since fragmented\nsentences are not translator-friendly."}),"\n",(0,r.jsx)(s.h2,{id:"verification",children:"Verification"}),"\n",(0,r.jsx)(s.p,{children:"Verify translation files to make sure keys are translated and messages are structurally compatible with source locale."}),"\n",(0,r.jsxs)(l.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,r.jsx)(i.A,{value:"npm",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"npm run formatjs verify [options] <translationFiles>\n"})})}),(0,r.jsx)(i.A,{value:"yarn",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"yarn formatjs verify [options] <translationFiles>\n"})})})]}),"\n",(0,r.jsx)(s.h3,{id:"--source-locale-sourcelocale",children:(0,r.jsx)(s.code,{children:"--source-locale <sourceLocale>"})}),"\n",(0,r.jsxs)(s.p,{children:["The source locale of the translation files. There must be a file named ",(0,r.jsx)(s.code,{children:"<sourceLocale>.json"})," in the list of translation files. This is used as source to verify other translations against."]}),"\n",(0,r.jsx)(s.h3,{id:"--missing-keys",children:(0,r.jsx)(s.code,{children:"--missing-keys"})}),"\n",(0,r.jsx)(s.p,{children:"Whether to check for missing keys in target locale compared to source locale. This basically guarantees that no messages are untranslated."}),"\n",(0,r.jsx)(s.h3,{id:"--structural-equality",children:(0,r.jsx)(s.code,{children:"--structural-equality"})}),"\n",(0,r.jsx)(s.p,{children:"Whether to check for structural equality of messages between source and target locale. This makes sure translations are formattable and are not missing any tokens."}),"\n",(0,r.jsx)(s.h2,{id:"compilation",children:"Compilation"}),"\n",(0,r.jsxs)(s.p,{children:["Compile extracted files from ",(0,r.jsx)(s.code,{children:"formatjs extract"})," to a ",(0,r.jsx)(s.a,{href:"/docs/react-intl",children:"react-intl"})," consumable\nJSON file. This also does ICU message verification. See ",(0,r.jsx)(s.a,{href:"/docs/getting-started/message-distribution",children:"Message Distribution"})," for more details."]}),"\n",(0,r.jsxs)(l.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,r.jsx)(i.A,{value:"npm",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"npm run compile -- --help\n"})})}),(0,r.jsx)(i.A,{value:"yarn",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"yarn compile --help\n"})})})]}),"\n",(0,r.jsx)(s.h3,{id:"--format-path-1",children:(0,r.jsx)(s.code,{children:"--format [path]"})}),"\n",(0,r.jsxs)(s.p,{children:["Path to a formatter file that converts ",(0,r.jsx)(s.code,{children:"<translation_file>"})," to ",(0,r.jsx)(s.code,{children:"Record<string, string>"})," so we can compile. The file must export a function named ",(0,r.jsx)(s.code,{children:"compile"})," with the signature:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"type CompileFn = <T = Record<string, MessageDescriptor>>(\n  msgs: T\n) => Record<string, string>\n"})}),"\n",(0,r.jsx)(s.p,{children:"This is especially useful to convert from a TMS-specific format back to react-intl format."}),"\n",(0,r.jsxs)(s.p,{children:["See our ",(0,r.jsx)(s.a,{href:"https://github.com/formatjs/formatjs/tree/main/packages/cli-lib/src/formatters",children:"builtin formatters"})," for examples."]}),"\n",(0,r.jsx)(s.h3,{id:"--out-file-output",children:(0,r.jsx)(s.code,{children:"--out-file <output>"})}),"\n",(0,r.jsx)(s.p,{children:"The target file that contains compiled messages."}),"\n",(0,r.jsx)(s.h3,{id:"--preserve-whitespace",children:(0,r.jsx)(s.code,{children:"--preserve-whitespace"})}),"\n",(0,r.jsx)(s.p,{children:"Whether to preserve whitespace and newlines in output. We typically remove consecutive whitespaces and newlines since those often gets abused for styling purposes."}),"\n",(0,r.jsx)(s.h3,{id:"--ast",children:(0,r.jsx)(s.code,{children:"--ast"})}),"\n",(0,r.jsxs)(s.p,{children:["Whether to compile message into AST instead of just string. See ",(0,r.jsx)(s.a,{href:"/docs/guides/advanced-usage",children:"Advanced Usage"})]}),"\n",(0,r.jsx)(s.h3,{id:"--pseudo-locale-pseudolocale",children:(0,r.jsx)(s.code,{children:"--pseudo-locale <pseudoLocale>"})}),"\n",(0,r.jsx)(s.p,{children:"Whether we should compile messages into pseudo locales instead. Available pseudo-locales:"}),"\n",(0,r.jsxs)(s.p,{children:["Given the English message ",(0,r.jsx)(s.code,{children:"my name is {name}"})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Locale"}),(0,r.jsx)(s.th,{children:"Message"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"xx-LS"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"my name is {name}SSSSSSSSSSSSSSSSSSSSSSSSS"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"xx-AC"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"MY NAME IS {name}"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"xx-HA"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"[javascript]my name is {name}"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"en-XA"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"[\u1e3f\u1e8f \u019e\u0227\u0227\u1e3f\u1e17\u1e17 \u012b\u015f {name}]"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"en-XB"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"\u202e\u026f\u028e u\u0250\u026f\u01dd \u0131s {name}\u202c"})})]})]})]}),"\n",(0,r.jsx)(s.admonition,{type:"caution",children:(0,r.jsxs)(s.p,{children:["Requires ",(0,r.jsx)(s.code,{children:"--ast"})]})}),"\n",(0,r.jsx)(s.h2,{id:"extraction-and-compilation-with-a-single-script",children:"Extraction and compilation with a single script"}),"\n",(0,r.jsx)(s.p,{children:"In some environments you may want to simply extract your messages to a file ready for use with react-intl without using an intermediary extracted message file format. This could be useful for quickly and easily creating the file for the original language that uses the default messages. This could also be useful if you use a Translation Management System (TMS) that is best suited to working with the compiled files. Keep in mind that the compiled file does not contain message descriptions so it is harder to work with for translators. Ideally you want to find or write a custom formatter you can use to extract messages into a file format that works with your TMS."}),"\n",(0,r.jsxs)(s.p,{children:["In order to achieve extraction and compilation in a single script, you can simply set up a script for that in ",(0,r.jsx)(s.code,{children:"package.json"})," like in this example:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'"scripts": {\n  "extract": "formatjs extract",\n  "compile": "formatjs compile",\n  "extract-compile": "formatjs extract \'src/**/*.ts*\' --out-file temp.json --flatten --id-interpolation-pattern \'[sha512:contenthash:base64:6]\' && formatjs compile \'temp.json\' --out-file lang/en.json && rm temp.json"\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"breakdown-of-the-script",children:"Breakdown of the script"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"extract-compile"})," example script consists of three operations performed one after the other."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"formatjs extract 'src/**/*.ts*' --out-file temp.json --flatten --id-interpolation-pattern '[sha512:contenthash:base64:6]'\n"})}),"\n",(0,r.jsxs)(s.p,{children:["The first script extracts messages from all typescript files that are located in subfolders of ",(0,r.jsx)(s.code,{children:"src"}),". You may need to ignore certain files that could trigger errors or warnings in the script, such as ",(0,r.jsx)(s.code,{children:"--ignore myFolder/myFile.ts"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"formatjs compile 'temp.json' --out-file lang/en.json\n"})}),"\n",(0,r.jsxs)(s.p,{children:["The second script compiles the messages from ",(0,r.jsx)(s.code,{children:"temp.json"})," into the file ",(0,r.jsx)(s.code,{children:"lang/en.json"}),". This file is ready to be consumed by react-intl."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"rm temp.json\n"})}),"\n",(0,r.jsxs)(s.p,{children:["The last script deletes the ",(0,r.jsx)(s.code,{children:"temp.json"})," extracted file. Feel free remove this from the script if you wish to keep this file around."]}),"\n",(0,r.jsx)(s.h3,{id:"the-resulting-files",children:"The resulting files"}),"\n",(0,r.jsxs)(s.p,{children:["Here you can see the difference between the extracted (using the default formatter) and the compiled file formats. In the script above, ",(0,r.jsx)(s.code,{children:"temp.json"})," is the extracted file and ",(0,r.jsx)(s.code,{children:"en.json"})," is the compiled file."]}),"\n",(0,r.jsxs)(l.A,{groupId:"json",defaultValue:"extracted",values:[{label:"Extracted messages",value:"extracted"},{label:"Compiled messages",value:"compiled"}],children:[(0,r.jsx)(i.A,{value:"extracted",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "hak27d": {\n    "defaultMessage": "Control Panel",\n    "description": "title of control panel section"\n  },\n  "haqsd": {\n    "defaultMessage": "Delete user {name}",\n    "description": "delete button"\n  },\n  "19hjs": {\n    "defaultMessage": "New Password",\n    "description": "placeholder text"\n  },\n  "explicit-id": {\n    "defaultMessage": "Confirm Password",\n    "description": "placeholder text"\n  }\n}\n'})})}),(0,r.jsx)(i.A,{value:"compiled",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "hak27d": "Control Panel",\n  "haqsd": "Delete user {name}",\n  "19hjs": "New Password",\n  "explicit-id": "Confirm Password"\n}\n'})})})]}),"\n",(0,r.jsx)(s.h2,{id:"folder-compilation",children:"Folder Compilation"}),"\n",(0,r.jsxs)(s.p,{children:["Batch compile a folder with extracted files from ",(0,r.jsx)(s.code,{children:"formatjs extract"})," to a folder containing react-intl consumable JSON files. This also does ICU message verification. See ",(0,r.jsx)(s.a,{href:"/docs/getting-started/message-distribution",children:"Message Distribution"})," for more details."]}),"\n",(0,r.jsxs)(l.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,r.jsx)(i.A,{value:"npm",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"npm run formatjs compile-folder [options] <folder> <outFolder>\n"})})}),(0,r.jsx)(i.A,{value:"yarn",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"yarn formatjs compile-folder [options] <folder> <outFolder>\n"})})})]}),"\n",(0,r.jsxs)(s.p,{children:["Folder structure should be in the form of ",(0,r.jsx)(s.code,{children:"<folder>/<locale>.json"})," and the output would be ",(0,r.jsx)(s.code,{children:"<outFolder>/<locale>.json"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"--format-path-2",children:(0,r.jsx)(s.code,{children:"--format [path]"})}),"\n",(0,r.jsxs)(s.p,{children:["Path to a formatter file that converts ",(0,r.jsx)(s.code,{children:"<translation_file>"})," to ",(0,r.jsx)(s.code,{children:"Record<string, string>"})," so we can compile. The file must export a function named ",(0,r.jsx)(s.code,{children:"compile"})," with the signature:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"type CompileFn = <T = Record<string, MessageDescriptor>>(\n  msgs: T\n) => Record<string, string>\n"})}),"\n",(0,r.jsx)(s.p,{children:"This is especially useful to convert from a TMS-specific format back to react-intl format"}),"\n",(0,r.jsx)(s.h3,{id:"--ast-1",children:(0,r.jsx)(s.code,{children:"--ast"})}),"\n",(0,r.jsxs)(s.p,{children:["Whether to compile message into AST instead of just string. See ",(0,r.jsx)(s.a,{href:"/docs/guides/advanced-usage",children:"Advanced Usage"})]}),"\n",(0,r.jsx)(s.h3,{id:"--skip-errors",children:(0,r.jsx)(s.code,{children:"--skip-errors"})}),"\n",(0,r.jsx)(s.p,{children:"Whether to continue compiling messages after encountering an error parsing one of them. Any keys with errors will not be included in the output file."}),"\n",(0,r.jsx)(s.h2,{id:"builtin-formatters",children:"Builtin Formatters"}),"\n",(0,r.jsx)(s.p,{children:"We provide the following built-in formatters to integrate with 3rd party TMSes:"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"TMS"}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.code,{children:"--format"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://www.codeandweb.com/babeledit/format-js",children:"BabelEdit"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"simple"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://support.crowdin.com/file-formats/chrome-json/",children:"Crowdin Chrome JSON"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"crowdin"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://lingohub.com/developers/resource-files/json-localization/",children:"Lingohub"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"simple"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://developers.localizejs.com/docs/simple-json-import-export",children:"Localize's Simple JSON"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"simple"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://localizely.com/flat-json-file/?tab=react-intl",children:"Localizely"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"simple"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.locize.com/integration/supported-formats#json-nested",children:"locize"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"simple"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.lokalise.com/en/articles/3229161-structured-json",children:"Lokalise Structured JSON"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"lokalise"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://support.phrase.com/hc/en-us/articles/6111390065948--JSON-React-Intl-Simple-Strings-",children:"Phrase"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"simple"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://poeditor.com/localization/files/key-value-json",children:"POEditor Key-Value JSON"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"simple"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://simplelocalize.io/docs/integrations/format-js-cli/",children:"SimpleLocalize"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"simple"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://help.smartling.com/hc/en-us/articles/360008000733-JSON",children:"Smartling ICU JSON"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"smartling"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.transifex.com/formats/json/structured-json",children:"Transifex's Structured JSON"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"transifex"})})]})]})]}),"\n",(0,r.jsx)(s.admonition,{type:"caution",children:(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"format"}),"s of ",(0,r.jsx)(s.code,{children:"extract"})," & ",(0,r.jsx)(s.code,{children:"compile"})," have to be the same, which means if you ",(0,r.jsx)(s.code,{children:"extract --format smartling"}),", you have to ",(0,r.jsx)(s.code,{children:"compile --format smartling"})," as well & vice versa."]})}),"\n",(0,r.jsx)(s.h2,{id:"custom-formatters",children:"Custom Formatters"}),"\n",(0,r.jsx)(s.p,{children:"You can provide your own formatter by using our interfaces:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"import {FormatFn, CompileFn, Comparator} from '@formatjs/cli'\n\ninterface VendorJson {}\n\n// [Optional] Format @formatjs/cli structure to vendor's structure\nexport const format: FormatFn<VendorJson> = () => {}\n// [Optional] Format vendor's structure to @formatjs/cli structure\nexport const compile: CompileFn<VendorJson> = () => {}\n// [Optional] Sort the messages in a specific order during serialization\nexport const compareMessages: Comparator = () => {}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Take a look at our ",(0,r.jsx)(s.a,{href:"https://github.com/formatjs/formatjs/tree/main/packages/cli-lib/src/formatters",children:"builtin formatter code"})," for some examples."]}),"\n",(0,r.jsx)(s.h2,{id:"node-api",children:"Node API"}),"\n",(0,r.jsxs)(s.p,{children:["Install ",(0,r.jsx)(s.code,{children:"@formatjs/cli-lib"})," instead to use programmatically"]}),"\n",(0,r.jsxs)(l.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,r.jsx)(i.A,{value:"npm",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"npm i -D @formatjs/cli-lib\n"})})}),(0,r.jsx)(i.A,{value:"yarn",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"yarn add -D @formatjs/cli-lib\n"})})})]}),"\n",(0,r.jsx)(s.h3,{id:"extraction-1",children:"Extraction"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"import {extract} from '@formatjs/cli-lib'\n\nconst resultAsString: Promise<string> = extract(files, {\n  idInterpolationPattern: '[sha512:contenthash:base64:6]',\n})\n"})}),"\n",(0,r.jsx)(s.h3,{id:"compilation-1",children:"Compilation"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"import {compile} from '@formatjs/cli-lib'\n\nconst resultAsString: Promise<string> = compile(files, {\n  ast: true,\n})\n"})}),"\n",(0,r.jsx)(s.h3,{id:"custom-formatter",children:"Custom Formatter"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:"import {FormatFn, CompileFn, Comparator} from '@formatjs/cli-lib'\n\nexport const format: FormatFn = msgs => msgs\n\n// Sort key reverse alphabetically\nexport const compareMessages = (el1, el2) => {\n  return el1.key < el2.key ? 1 : -1\n}\n\nexport const compile: CompileFn = msgs => {\n  const results: Record<string, string> = {}\n  for (const k in msgs) {\n    results[k] = msgs[k].defaultMessage!\n  }\n  return results\n}\n"})})]})}function m(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1818:(e,s,t)=>{t.d(s,{A:()=>l});t(7378);var n=t(3372);const r={tabItem:"tabItem_ZSL2"};var a=t(6106);function l(e){let{children:s,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,l),hidden:t,children:s})}},3744:(e,s,t)=>{t.d(s,{A:()=>w});var n=t(7378),r=t(3372),a=t(6189),l=t(1654),i=t(5421),o=t(6326),c=t(9239),d=t(6864);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:s,children:t}=e;return(0,n.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:t,attributes:n,default:r}}=e;return{value:s,label:t,attributes:n,default:r}}))}(t);return function(e){const s=(0,c.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,t])}function m(e){let{value:s,tabValues:t}=e;return t.some((e=>e.value===s))}function p(e){let{queryString:s=!1,groupId:t}=e;const r=(0,l.W6)(),a=function(e){let{queryString:s=!1,groupId:t}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:s,groupId:t});return[(0,o.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const s=new URLSearchParams(r.location.search);s.set(a,e),r.replace({...r.location,search:s.toString()})}),[a,r])]}function x(e){const{defaultValue:s,queryString:t=!1,groupId:r}=e,a=u(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:s,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!m({value:s,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:s,tabValues:a}))),[c,h]=p({queryString:t,groupId:r}),[x,j]=function(e){let{groupId:s}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,a]=(0,d.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),f=(()=>{const e=c??x;return m({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),j(e)}),[h,j,a]),tabValues:a}}var j=t(1151);const f={tabList:"tabList_WXuh",tabItem:"tabItem_SJmg"};var g=t(6106);function v(e){let{className:s,block:t,selectedValue:n,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const s=e.currentTarget,t=o.indexOf(s),r=i[t].value;r!==n&&(c(s),l(r))},h=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;s=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;s=o[t]??o[o.length-1];break}}s?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},s),children:i.map((e=>{let{value:s,label:t,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===s?0:-1,"aria-selected":n===s,ref:e=>{o.push(e)},onKeyDown:h,onClick:d,...a,className:(0,r.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":n===s}),children:t??s},s)}))})}function b(e){let{lazy:s,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(s){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,s)=>(0,n.cloneElement)(e,{key:s,hidden:e.props.value!==a})))})}function y(e){const s=x(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,g.jsx)(v,{...s,...e}),(0,g.jsx)(b,{...s,...e})]})}function w(e){const s=(0,j.A)();return(0,g.jsx)(y,{...e,children:h(e.children)},String(s))}},6039:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>i});var n=t(7378);const r={},a=n.createContext(r);function l(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);
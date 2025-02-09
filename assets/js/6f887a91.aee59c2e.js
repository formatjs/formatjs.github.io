"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3021],{2627:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"getting-started/application-workflow","title":"Application Workflow","description":"While our Installation guide can help you get started, this guide gives you an overview how your daily translation workflow might look like.","source":"@site/docs/getting-started/application-workflow.md","sourceDirName":"getting-started","slug":"/getting-started/application-workflow","permalink":"/docs/getting-started/application-workflow","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/getting-started/application-workflow.md","tags":[],"version":"current","lastUpdatedBy":"SnowyOwl","lastUpdatedAt":1739081178000,"frontMatter":{"id":"application-workflow","title":"Application Workflow"},"sidebar":"docs","previous":{"title":"Installation","permalink":"/docs/getting-started/installation"},"next":{"title":"Message Declaration","permalink":"/docs/getting-started/message-declaration"}}');var o=i(6106),l=i(972);const s={id:"application-workflow",title:"Application Workflow"},r=void 0,a={},c=[{value:"Simple application workflow with a local translation tool",id:"simple-application-workflow-with-a-local-translation-tool",level:2},{value:"The workflow",id:"the-workflow",level:3},{value:"Complex application workflow with a cloud based translation service",id:"complex-application-workflow-with-a-cloud-based-translation-service",level:2},{value:"Project Structure",id:"project-structure",level:3},{value:"Pipeline",id:"pipeline",level:3},{value:"Where formatjs comes in",id:"where-formatjs-comes-in",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["While our ",(0,o.jsx)(n.a,{href:"/docs/getting-started/installation",children:"Installation"})," guide can help you get started, this guide gives you an overview how your daily translation workflow might look like."]}),"\n",(0,o.jsx)(n.p,{children:"There are 2 types of translations tools and services:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Tools that work locally on your computer - just like your IDE."}),"\n",(0,o.jsx)(n.li,{children:"Cloud translation services that require an upload of your translation files. These require a translation pipeline with a complex workflow."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This guide will give you an idea of how to work with both types of tools."}),"\n",(0,o.jsx)(n.h2,{id:"simple-application-workflow-with-a-local-translation-tool",children:"Simple application workflow with a local translation tool"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"projectRoot\n|-- src\n|   |-- App.js\n|-- extracted\n|   |-- en.json\n|-- lang\n|   |-- fr.json\n|   |-- de.json\n|-- package.json\n|-- .eslintrc.js\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The extracted translation files live in the ",(0,o.jsx)(n.code,{children:"extracted"})," folder since they have a different internal structure (e.g. they contain additional information like the comments). The translation files produced during the translation process are stored in the ",(0,o.jsx)(n.code,{children:"lang"})," folder."]}),"\n",(0,o.jsx)(n.h3,{id:"the-workflow",children:"The workflow"}),"\n",(0,o.jsx)(n.p,{children:"The workflow looks like this:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Pipeline",src:i(6891).A+"",width:"1160",height:"445"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Extraction"}),": This step aggregates all ",(0,o.jsx)(n.code,{children:"defaultMessage"}),"s from your application into a single JSON file along with ",(0,o.jsx)(n.code,{children:"description"}),", ready to be translated."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Edit"}),": Edit the translations, save when done."]}),"\n",(0,o.jsx)(n.li,{children:"The changes immediately show up in your build"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"complex-application-workflow-with-a-cloud-based-translation-service",children:"Complex application workflow with a cloud based translation service"}),"\n",(0,o.jsx)(n.h3,{id:"project-structure",children:"Project Structure"}),"\n",(0,o.jsx)(n.p,{children:"A minimal i18n-friendly project can have the following structure:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"projectRoot\n|-- src\n|   |-- App.js\n|-- lang\n|   |-- en-US.json\n|   |-- fr.json\n|-- package.json\n|-- .eslintrc.js\n"})}),"\n",(0,o.jsxs)(n.p,{children:["where ",(0,o.jsx)(n.code,{children:"lang"})," folder is where the aggregated strings file from your application would live. Integration with 3rd-party translation vendor can consume the ",(0,o.jsx)(n.code,{children:"en-US.json"})," file and produce ",(0,o.jsx)(n.code,{children:"fr.json"})," or other locale files accordingly."]}),"\n",(0,o.jsx)(n.h3,{id:"pipeline",children:"Pipeline"}),"\n",(0,o.jsx)(n.p,{children:"A generic translation pipeline looks something like this:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Pipeline",src:i(3206).A+"",width:"1115",height:"351"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Extraction"}),": This step aggregates all ",(0,o.jsx)(n.code,{children:"defaultMessage"}),"s from your application into a single JSON file along with ",(0,o.jsx)(n.code,{children:"description"}),", ready to be translated."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Upload Messages"}),": This step uploads the JSON file to your translation vendor."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Download Translations"}),": This step either polls your translation vendor or hook into your vendor to download translated messages in the set of locales that you configured."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Commit"}),": This commits back translation messages to the codebase."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"where-formatjs-comes-in",children:"Where formatjs comes in"}),"\n",(0,o.jsx)(n.p,{children:"The goal of this project is not to provide a solution for the whole pipeline, but rather focus on Developer Experience via tooling and best practices so devs are i18n-aware. This includes:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Declaring i18n-friendly messages"}),"\n",(0,o.jsx)(n.li,{children:"Linter that enforces such messages"}),"\n",(0,o.jsx)(n.li,{children:"CLI for extraction & compilation"}),"\n",(0,o.jsx)(n.li,{children:"Polyfills for a stable i18n runtime environments"}),"\n",(0,o.jsx)(n.li,{children:"Bundler plugin for compiling TypeScript/JavaScript"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},6891:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/simple-workflow-ab306e2651814f71649fdf3ea8a5f51c.svg"},3206:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/workflow-cfcf0fe32b9a2d1097fcf2f11ed8b384.svg"},972:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var t=i(7378);const o={},l=t.createContext(o);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);
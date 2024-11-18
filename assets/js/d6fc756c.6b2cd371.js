"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2193],{9282:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"guides/testing","title":"Testing with formatjs","description":"Intl APIs requirements","source":"@site/docs/guides/testing-with-react-intl.md","sourceDirName":"guides","slug":"/guides/testing","permalink":"/docs/guides/testing","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/guides/testing-with-react-intl.md","tags":[],"version":"current","lastUpdatedBy":"longlho","lastUpdatedAt":1731909055000,"frontMatter":{"id":"testing","title":"Testing with formatjs"},"sidebar":"docs","previous":{"title":"Bundling with formatjs","permalink":"/docs/guides/bundler-plugins"},"next":{"title":"Distributing i18n-friendly libraries","permalink":"/docs/guides/distribute-libraries"}}');var s=t(6106),o=t(2036);const i={id:"testing",title:"Testing with formatjs"},a=void 0,l={},c=[{value:"<code>Intl</code> APIs requirements",id:"intl-apis-requirements",level:2},{value:"Mocha",id:"mocha",level:3},{value:"Command Line",id:"command-line",level:4},{value:"Browser",id:"browser",level:4},{value:"Shallow Rendering",id:"shallow-rendering",level:2},{value:"Testing Example Components That Use React Intl",id:"testing-example-components-that-use-react-intl",level:3},{value:"ShortDate (Basic)",id:"shortdate-basic",level:4},{value:"DOM Rendering",id:"dom-rendering",level:2},{value:"Helper function",id:"helper-function",level:3},{value:"Enzyme",id:"enzyme",level:2},{value:"Helper function",id:"helper-function-1",level:3},{value:"Usage",id:"usage",level:3},{value:"Jest",id:"jest",level:2},{value:"Snapshot Testing",id:"snapshot-testing",level:3},{value:"Helper function",id:"helper-function-2",level:4},{value:"Usage",id:"usage-1",level:4},{value:"Usage with Jest &amp; enzyme",id:"usage-with-jest--enzyme",level:4},{value:"DOM Testing",id:"dom-testing",level:3},{value:"Storybook",id:"storybook",level:2},{value:"Intl",id:"intl",level:3},{value:"react-testing-library",id:"react-testing-library",level:2}];function d(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h2,{id:"intl-apis-requirements",children:[(0,s.jsx)(n.code,{children:"Intl"})," APIs requirements"]}),"\n",(0,s.jsxs)(n.p,{children:["React Intl uses the built-in ",(0,s.jsxs)(n.a,{href:"https://mdn.io/intl",children:[(0,s.jsx)(n.code,{children:"Intl"})," APIs"]})," in JavaScript. Make sure your environment satisfy the requirements listed in ",(0,s.jsxs)(n.a,{href:"/docs/guides/runtime-requirements",children:[(0,s.jsx)(n.code,{children:"Intl"})," APIs requirements"]})]}),"\n",(0,s.jsx)(n.h3,{id:"mocha",children:"Mocha"}),"\n",(0,s.jsxs)(n.p,{children:["If you're using ",(0,s.jsx)(n.a,{href:"https://mochajs.org/",children:"Mocha"})," as your test runner and testing on older JavaScript runtimes, you can load the Intl Polyfill via the CLI or by adding a ",(0,s.jsx)(n.code,{children:"<script>"})," in the browser."]}),"\n",(0,s.jsx)(n.h4,{id:"command-line",children:"Command Line"}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"mocha"})," and auto-polyfill the runtime if needed:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ mocha --recursive test/\n"})}),"\n",(0,s.jsx)(n.h4,{id:"browser",children:"Browser"}),"\n",(0,s.jsxs)(n.p,{children:["You can either load the polyfill in the browser from ",(0,s.jsx)(n.code,{children:"node_modules"})," or use the ",(0,s.jsx)(n.a,{href:"https://polyfill-fastly.io/v2/docs/",children:"polyfill-fastly.io"})," service from the Financial Times:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<script src="https://polyfill-fastly.io/v2/polyfill.min.js?features=Intl,Intl.~locale.en-US"><\/script>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"shallow-rendering",children:"Shallow Rendering"}),"\n",(0,s.jsxs)(n.p,{children:["React's ",(0,s.jsx)(n.code,{children:"react-addons-test-utils"})," package contains a ",(0,s.jsx)(n.a,{href:"http://facebook.github.io/react/docs/test-utils.html#shallow-rendering",children:"shallow rendering"})," feature which you might use to test your app's React components. If a component you're trying to test using ",(0,s.jsx)(n.code,{children:"ReactShallowRenderer"})," uses React Intl \u2014 specifically ",(0,s.jsx)(n.code,{children:"injectIntl()"})," \u2014 you'll need to do extra setup work because React Intl components expect to be nested inside an ",(0,s.jsx)(n.code,{children:"<IntlProvider>"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"testing-example-components-that-use-react-intl",children:"Testing Example Components That Use React Intl"}),"\n",(0,s.jsxs)(n.p,{children:["The following examples will assume ",(0,s.jsx)(n.code,{children:"mocha"}),", ",(0,s.jsx)(n.code,{children:"expect"}),", and ",(0,s.jsx)(n.code,{children:"expect-jsx"})," test framework."]}),"\n",(0,s.jsx)(n.h4,{id:"shortdate-basic",children:"ShortDate (Basic)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'import React from \'react\'\nimport {FormattedDate} from \'react-intl\'\n\nconst ShortDate = props => (\n  <FormattedDate\n    value={props.date}\n    year="numeric"\n    month="short"\n    day="2-digit"\n  />\n)\n\nexport default ShortDate\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Testing the ",(0,s.jsx)(n.code,{children:"<ShortDate>"})," example component is no different than testing any other basic component in your app using React's shallow rendering:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import expect from 'expect'\nimport expectJSX from 'expect-jsx'\nimport React from 'react'\nimport {createRenderer} from 'react-addons-test-utils'\nimport {FormattedDate} from 'react-intl'\nimport ShortDate from '../short-date'\n\nexpect.extend(expectJSX)\n\ndescribe('<ShortDate>', function () {\n  it('renders', function () {\n    const renderer = createRenderer()\n    const date = new Date()\n\n    renderer.render(<ShortDate date={date} />)\n    expect(renderer.getRenderOutput()).toEqualJSX(\n      <FormattedDate value={date} year=\"numeric\" month=\"short\" day=\"2-digit\" />\n    )\n  })\n})\n"})}),"\n",(0,s.jsx)(n.h2,{id:"dom-rendering",children:"DOM Rendering"}),"\n",(0,s.jsxs)(n.p,{children:["If you use the DOM in your tests, you need to supply the ",(0,s.jsx)(n.code,{children:"IntlProvider"})," context to your components using composition:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"let element = ReactTestUtils.renderIntoDocument(\n  <IntlProvider>\n    <MyComponent />\n  </IntlProvider>\n)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["However this means that the ",(0,s.jsx)(n.code,{children:"element"})," reference is now pointing to the ",(0,s.jsx)(n.code,{children:"IntlProvider"}),' instead of your component. To retrieve a reference to your wrapped component, you can use "refs" with these changes to the code:']}),"\n",(0,s.jsxs)(n.p,{children:["In your component, remember to add ",(0,s.jsx)(n.code,{children:"{forwardRef: true}"})," when calling ",(0,s.jsx)(n.code,{children:"injectIntl()"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"class MyComponent extends React.Component {\n  ...\n  myClassFn() { ... }\n}\nexport default injectIntl(MyComponent, {forwardRef: true});\n"})}),"\n",(0,s.jsx)(n.p,{children:'In your test, add a "ref" to extract the reference to your tested component:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"const element = React.createRef()\nReactTestUtils.renderIntoDocument(\n  <IntlProvider>\n    <MyComponent ref={element} />\n  </IntlProvider>\n)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can now access the wrapped component instance from ",(0,s.jsx)(n.code,{children:"element"})," like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"element.current.myClassFn()\n"})}),"\n",(0,s.jsx)(n.h3,{id:"helper-function",children:"Helper function"}),"\n",(0,s.jsxs)(n.p,{children:["Since you will have to do this in all your unit tests, you should probably wrap that setup in a ",(0,s.jsx)(n.code,{children:"render"})," function like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"function renderWithIntl(element) {\n  let instance\n\n  ReactTestUtils.renderIntoDocument(\n    <IntlProvider>\n      {React.cloneElement(element, {\n        ref: instance,\n      })}\n    </IntlProvider>\n  )\n\n  return instance\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can now use this in your tests like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"const element = React.createRef();\nrenderWithIntl(<MyElement ref={element}>);\nelement.current.myClassFn();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"enzyme",children:"Enzyme"}),"\n",(0,s.jsxs)(n.p,{children:["Testing with Enzyme works in a similar fashion as written above. Your ",(0,s.jsx)(n.code,{children:"mount()"}),"ed and ",(0,s.jsx)(n.code,{children:"shallow()"}),"ed components will need access to the ",(0,s.jsx)(n.code,{children:"intl"})," context. Below is a helper function which you can import and use to mount your components which make use of any of React-Intl's library (either ",(0,s.jsx)(n.code,{children:"<Formatted* />"})," components or ",(0,s.jsx)(n.code,{children:"format*()"})," methods through ",(0,s.jsx)(n.code,{children:"injectIntl"}),")."]}),"\n",(0,s.jsx)(n.h3,{id:"helper-function-1",children:"Helper function"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"/**\n * Components using the react-intl module require access to the intl context.\n * This is not available when mounting single components in Enzyme.\n * These helper functions aim to address that and wrap a valid,\n * English-locale intl context around them.\n */\n\nimport React from 'react'\nimport {IntlProvider} from 'react-intl'\nimport {mount, shallow} from 'enzyme'\n\n// You can pass your messages to the IntlProvider. Optional: remove if unneeded.\nconst messages = require('../locales/en') // en.json\nconst defaultLocale = 'en'\nconst locale = defaultLocale\n\nexport function mountWithIntl(node: React.ReactElement) {\n  return mount(node, {\n    wrappingComponent: IntlProvider,\n    wrappingComponentProps: {\n      locale,\n      defaultLocale,\n      messages,\n    },\n  })\n}\n\nexport function shallowWithIntl(node: React.ReactElement) {\n  return shallow(node, {\n    wrappingComponent: IntlProvider,\n    wrappingComponentProps: {\n      locale,\n      defaultLocale,\n      messages,\n    },\n  })\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["Create a file with the above helper in e.g. ",(0,s.jsx)(n.code,{children:"helpers/intl-enzyme-test-helper.js"})," and ",(0,s.jsx)(n.code,{children:"import"})," the methods you need in your tests."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// intl-enzyme-test-helper.js\n\nimport {mountWithIntl} from 'helpers/intl-enzyme-test-helper.js'\n\nconst wrapper = mountWithIntl(<CustomComponent />)\n\nexpect(wrapper.state('foo')).to.equal('bar') // OK\nexpect(wrapper.text()).to.equal('Hello World!') // OK\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Based on ",(0,s.jsx)(n.a,{href:"https://gist.github.com/mirague/c05f4da0d781a9b339b501f1d5d33c37/",children:"this gist"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"jest",children:"Jest"}),"\n",(0,s.jsx)(n.p,{children:"Testing with Jest can be divided into two approaches: snapshot's testing and DOM testing. Snapshot's testing is a relatively new feature and works out of the box. If you'd like DOM testing you need to use Enzyme or React's TestUtils."}),"\n",(0,s.jsx)(n.h3,{id:"snapshot-testing",children:"Snapshot Testing"}),"\n",(0,s.jsx)(n.p,{children:"Snapshot testing is a new feature of Jest that automatically generates text snapshots of your components and saves them on the disk so if the UI output changes, you get notified without manually writing any assertions on the component output. Use either helper function or mock as described below."}),"\n",(0,s.jsx)(n.h4,{id:"helper-function-2",children:"Helper function"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import React from 'react'\nimport renderer from 'react-test-renderer'\nimport {IntlProvider} from 'react-intl'\n\nconst createComponentWithIntl = (children, props = {locale: 'en'}) => {\n  return renderer.create(<IntlProvider {...props}>{children}</IntlProvider>)\n}\n\nexport default createComponentWithIntl\n"})}),"\n",(0,s.jsx)(n.h4,{id:"usage-1",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import React from 'react'\nimport createComponentWithIntl from '../../utils/createComponentWithIntl'\nimport AppMain from '../AppMain'\n\ntest('app main should be rendered', () => {\n  const component = createComponentWithIntl(<AppMain />)\n\n  let tree = component.toJSON()\n\n  expect(tree).toMatchSnapshot()\n\n  tree.props.onClick()\n\n  tree = component.toJSON()\n\n  expect(tree).toMatchSnapshot()\n})\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can find runnable example ",(0,s.jsx)(n.a,{href:"https://github.com/formatjs/formatjs/tree/master/packages/react-intl/examples/jest-snapshot-testing",children:"here"})," and more info about Jest ",(0,s.jsx)(n.a,{href:"http://facebook.github.io/jest/",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"usage-with-jest--enzyme",children:"Usage with Jest & enzyme"}),"\n",(0,s.jsx)(n.p,{children:"Jest will automatically mock react-intl, so no any extra implementation is needed, tests should work as is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import React from 'react'\nimport {shallow} from 'enzyme'\nimport AppMain from '../AppMain'\n\ntest('app main should be rendered', () => {\n  const wrapper = shallow(<AppMain />)\n  expect(wrapper).toMatchSnapshot()\n})\n"})}),"\n",(0,s.jsx)(n.h3,{id:"dom-testing",children:"DOM Testing"}),"\n",(0,s.jsxs)(n.p,{children:["If you want use Jest with DOM Testing read more info above in Enzyme section or in official Jest ",(0,s.jsx)(n.a,{href:"http://facebook.github.io/jest/docs/tutorial-react.html#dom-testing",children:"documentation"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"storybook",children:"Storybook"}),"\n",(0,s.jsx)(n.h3,{id:"intl",children:"Intl"}),"\n",(0,s.jsxs)(n.p,{children:["If you want to use ",(0,s.jsx)(n.code,{children:"react-intl"})," inside of ",(0,s.jsx)(n.a,{href:"https://storybooks.js.org",children:"Storybook"})," you can use ",(0,s.jsx)(n.a,{href:"https://github.com/truffls/storybook-addon-intl",children:(0,s.jsx)(n.code,{children:"storybook-addon-intl"})})," which provides an easy to use wrapper for ",(0,s.jsx)(n.code,{children:"react-intl"})," including a locale switcher so you can test your component in all provided languages."]}),"\n",(0,s.jsx)(n.h2,{id:"react-testing-library",children:"react-testing-library"}),"\n",(0,s.jsxs)(n.p,{children:["In order to use ",(0,s.jsx)(n.code,{children:"react-intl"})," and ",(0,s.jsx)(n.a,{href:"https://testing-library.com/docs/react-testing-library/intro",children:(0,s.jsx)(n.code,{children:"react-testing-library"})})," together, you should provide some helper function to the testing flow."]}),"\n",(0,s.jsxs)(n.p,{children:["You can check the ",(0,s.jsx)(n.a,{href:"https://testing-library.com/docs/example-react-intl",children:"docs"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["To create a generic solution, We can create a custom ",(0,s.jsx)(n.code,{children:"render"})," function using\nthe ",(0,s.jsx)(n.code,{children:"wrapper"})," option as explained in the\n",(0,s.jsx)(n.a,{href:"https://testing-library.com/docs/react-testing-library/setup",children:"setup"})," page.",(0,s.jsx)(n.br,{}),"\n","Our custom ",(0,s.jsx)(n.code,{children:"render"})," function can look like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"// test-utils.js\nimport React from 'react'\nimport {render as rtlRender} from '@testing-library/react'\nimport {IntlProvider} from 'react-intl'\n\nfunction render(ui, {locale = 'pt', ...renderOptions} = {}) {\n  function Wrapper({children}) {\n    return <IntlProvider locale={locale}>{children}</IntlProvider>\n  }\n  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})\n}\n\n// re-export everything\nexport * from '@testing-library/react'\n\n// override render method\nexport {render}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React from 'react'\nimport '@\u200btesting-library/jest-dom/jest-globals'\n// We're importing from our own created test-utils and not RTL's\nimport {render, screen} from '../test-utils.js'\nimport {FormattedDate} from 'react-intl'\n\nconst FormatDateView = () => {\n  return (\n    <div data-testid=\"date-display\">\n      <FormattedDate\n        value=\"2019-03-11\"\n        timeZone=\"utc\"\n        day=\"2-digit\"\n        month=\"2-digit\"\n        year=\"numeric\"\n      />\n    </div>\n  )\n}\n\ntest('it should render FormattedDate and have a formated pt date', () => {\n  render(<FormatDateView />)\n  expect(screen.getByTestId('date-display')).toHaveTextContent('11/03/2019')\n})\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2036:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(7378);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);
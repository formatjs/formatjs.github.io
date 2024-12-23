"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9048],{7421:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ge});var a=n(8225),i=n(3372),o=n(659),s=n(3096),l=n(9068),c=n(3409),r=n(8833),d=n(2727),u=n(4225);const b={backToTopButton:"backToTopButton_FrCi",backToTopButtonShow:"backToTopButtonShow_OtFL"};var m=n(7557);function h(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,i]=(0,a.useState)(!1),o=(0,a.useRef)(!1),{startScroll:s,cancelScroll:l}=(0,d.gk)();return(0,d.Mq)(((e,n)=>{let{scrollY:a}=e;const s=null==n?void 0:n.scrollY;s&&(o.current?o.current=!1:a>=s?(l(),i(!1)):a<t?i(!1):a+window.innerHeight<document.documentElement.scrollHeight&&i(!0))})),(0,u.$)((e=>{e.location.hash&&(o.current=!0,i(!1))})),{shown:n,scrollToTop:()=>s(0)}}({threshold:300});return(0,m.jsx)("button",{"aria-label":(0,r.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.A)("clean-btn",s.G.common.backToTopButton,b.backToTopButton,e&&b.backToTopButtonShow),type:"button",onClick:t})}var p=n(5808),x=n(1654),j=n(8414),g=n(7295),f=n(1671);function v(e){return(0,m.jsx)("svg",Object.assign({width:"20",height:"20","aria-hidden":"true"},e,{children:(0,m.jsxs)("g",{fill:"#7a7a7a",children:[(0,m.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,m.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})}))}const A="collapseSidebarButton_Hbm9",_="collapseSidebarButtonIcon_vAdg";function C(e){let{onClick:t}=e;return(0,m.jsx)("button",{type:"button",title:(0,r.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,r.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.A)("button button--secondary button--outline",A),onClick:t,children:(0,m.jsx)(v,{className:_})})}var k=n(2424),S=n(5271),N=n(7210),T=n(8573),I=n(7691),y=n(5306),B=n(9921),w=n(6368);const L=["item","onItemClick","activePath","level","index"];function E(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,m.jsx)("button",{"aria-label":t?(0,r.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,r.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:a})}function M(e){let{item:t,onItemClick:n,activePath:o,level:c,index:r}=e,d=(0,S.A)(e,L);const{items:u,label:b,collapsible:h,className:p,href:x}=t,{docs:{sidebar:{autoCollapseCategories:j}}}=(0,g.p)(),f=function(e){const t=(0,w.default)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.Nr)(e):void 0),[e,t])}(t),v=(0,l.w8)(t,o),A=(0,y.ys)(x,o),{collapsed:_,setCollapsed:C}=(0,I.u)({initialState:()=>!!h&&(!v&&t.collapsed)}),{expandedItem:k,setExpandedItem:M}=(0,N.G)(),G=function(e){void 0===e&&(e=!_),M(e?null:r),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:i}=e;const o=(0,T.ZC)(t);(0,a.useEffect)((()=>{t&&!o&&n&&i(!1)}),[t,o,n,i])}({isActive:v,collapsed:_,updateCollapsed:G}),(0,a.useEffect)((()=>{h&&null!=k&&k!==r&&j&&C(!0)}),[h,k,r,C,j]),(0,m.jsxs)("li",{className:(0,i.A)(s.G.docs.docSidebarItemCategory,s.G.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":_},p),children:[(0,m.jsxs)("div",{className:(0,i.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":A}),children:[(0,m.jsx)(B.A,Object.assign({className:(0,i.A)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!x&&h,"menu__link--active":v}),onClick:h?e=>{null==n||n(t),x?G(!1):(e.preventDefault(),G())}:()=>{null==n||n(t)},"aria-current":A?"page":void 0,role:h&&!x?"button":void 0,"aria-expanded":h&&!x?!_:void 0,href:h?null!=f?f:"#":f},d,{children:b})),x&&h&&(0,m.jsx)(E,{collapsed:_,categoryLabel:b,onClick:e=>{e.preventDefault(),G()}})]}),(0,m.jsx)(I.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:_,children:(0,m.jsx)(z,{items:u,tabIndex:_?-1:0,onItemClick:n,activePath:o,level:c+1})})]})}var G=n(9127),H=n(3194);const O="menuExternalLink_S44d",P=["item","onItemClick","activePath","level","index"];function R(e){let{item:t,onItemClick:n,activePath:a,level:o}=e,c=(0,S.A)(e,P);const{href:r,label:d,className:u,autoAddBaseUrl:b}=t,h=(0,l.w8)(t,a),p=(0,G.A)(r);return(0,m.jsx)("li",{className:(0,i.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(o),"menu__list-item",u),children:(0,m.jsxs)(B.A,Object.assign({className:(0,i.A)("menu__link",!p&&O,{"menu__link--active":h}),autoAddBaseUrl:b,"aria-current":h?"page":void 0,to:r},p&&{onClick:n?()=>n(t):void 0},c,{children:[d,!p&&(0,m.jsx)(H.A,{})]}))},d)}const W="menuHtmlItem_loJY";function F(e){let{item:t,level:n,index:a}=e;const{value:o,defaultStyle:l,className:c}=t;return(0,m.jsx)("li",{className:(0,i.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(n),l&&[W,"menu__list-item"],c),dangerouslySetInnerHTML:{__html:o}},a)}const V=["item"];function D(e){let{item:t}=e,n=(0,S.A)(e,V);switch(t.type){case"category":return(0,m.jsx)(M,Object.assign({item:t},n));case"html":return(0,m.jsx)(F,Object.assign({item:t},n));default:return(0,m.jsx)(R,Object.assign({item:t},n))}}const Y=["items"];function U(e){let{items:t}=e,n=(0,S.A)(e,Y);const a=(0,l.Y)(t,n.activePath);return(0,m.jsx)(N.A,{children:a.map(((e,t)=>(0,m.jsx)(D,Object.assign({item:e,index:t},n),t)))})}const z=(0,a.memo)(U),q="menu_bVmY",J="menuWithAnnouncementBar_oNG8";function K(e){let{path:t,sidebar:n,className:o}=e;const l=function(){const{isActive:e}=(0,k.M)(),[t,n]=(0,a.useState)(e);return(0,d.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,m.jsx)("nav",{"aria-label":(0,r.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,i.A)("menu thin-scrollbar",q,l&&J,o),children:(0,m.jsx)("ul",{className:(0,i.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(z,{items:n,activePath:t,level:1})})})}const Z="sidebar_UhmY",Q="sidebarWithHideableNavbar_xlGt",X="sidebarHidden_xVe9",$="sidebarLogo_dbZ2";function ee(e){let{path:t,sidebar:n,onCollapse:a,isHidden:o}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:l}}}=(0,g.p)();return(0,m.jsxs)("div",{className:(0,i.A)(Z,s&&Q,o&&X),children:[s&&(0,m.jsx)(f.A,{tabIndex:-1,className:$}),(0,m.jsx)(K,{path:t,sidebar:n}),l&&(0,m.jsx)(C,{onClick:a})]})}const te=a.memo(ee);var ne=n(7061),ae=n(7420);const ie=e=>{let{sidebar:t,path:n}=e;const a=(0,ae.M)();return(0,m.jsx)("ul",{className:(0,i.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(z,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function oe(e){return(0,m.jsx)(ne.GX,{component:ie,props:e})}const se=a.memo(oe);function le(e){const t=(0,j.l)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,m.jsxs)(m.Fragment,{children:[n&&(0,m.jsx)(te,Object.assign({},e)),a&&(0,m.jsx)(se,Object.assign({},e))]})}const ce={expandButton:"expandButton_jS8b",expandButtonIcon:"expandButtonIcon_EM4C"};function re(e){let{toggleSidebar:t}=e;return(0,m.jsx)("div",{className:ce.expandButton,title:(0,r.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,r.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,m.jsx)(v,{className:ce.expandButtonIcon})})}const de={docSidebarContainer:"docSidebarContainer_Ij4L",docSidebarContainerHidden:"docSidebarContainerHidden_JV_T",sidebarViewport:"sidebarViewport_c241"};function ue(e){var t;let{children:n}=e;const i=(0,c.t)();return(0,m.jsx)(a.Fragment,{children:n},null!=(t=null==i?void 0:i.name)?t:"noSidebar")}function be(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}=e;const{pathname:l}=(0,x.zy)(),[c,r]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&r(!1),!c&&(0,p.O)()&&r(!0),o((e=>!e))}),[o,c]);return(0,m.jsx)("aside",{className:(0,i.A)(s.G.docs.docSidebarContainer,de.docSidebarContainer,n&&de.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(de.docSidebarContainer)&&n&&r(!0)},children:(0,m.jsx)(ue,{children:(0,m.jsxs)("div",{className:(0,i.A)(de.sidebarViewport,c&&de.sidebarViewportHidden),children:[(0,m.jsx)(le,{sidebar:t,path:l,onCollapse:d,isHidden:c}),c&&(0,m.jsx)(re,{toggleSidebar:d})]})})})}const me={docMainContainer:"docMainContainer_SM1N",docMainContainerEnhanced:"docMainContainerEnhanced_smSG",docItemWrapperEnhanced:"docItemWrapperEnhanced_OAKQ"};function he(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,c.t)();return(0,m.jsx)("main",{className:(0,i.A)(me.docMainContainer,(t||!a)&&me.docMainContainerEnhanced),children:(0,m.jsx)("div",{className:(0,i.A)("container padding-top--md padding-bottom--lg",me.docItemWrapper,t&&me.docItemWrapperEnhanced),children:n})})}const pe={docRoot:"docRoot_ElNB",docsWrapper:"docsWrapper_rEqE"};function xe(e){let{children:t}=e;const n=(0,c.t)(),[i,o]=(0,a.useState)(!1);return(0,m.jsxs)("div",{className:pe.docsWrapper,children:[(0,m.jsx)(h,{}),(0,m.jsxs)("div",{className:pe.docRoot,children:[n&&(0,m.jsx)(be,{sidebar:n.items,hiddenSidebarContainer:i,setHiddenSidebarContainer:o}),(0,m.jsx)(he,{hiddenSidebarContainer:i,children:t})]})]})}var je=n(1245);function ge(e){const t=(0,l.B5)(e);if(!t)return(0,m.jsx)(je.A,{});const{docElement:n,sidebarName:a,sidebarItems:r}=t;return(0,m.jsx)(o.e3,{className:(0,i.A)(s.G.page.docsDocPage),children:(0,m.jsx)(c.V,{name:a,items:r,children:(0,m.jsx)(xe,{children:n})})})}},1245:(e,t,n)=>{n.d(t,{A:()=>l});n(8225);var a=n(3372),i=n(8833),o=n(3586),s=n(7557);function l(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,a.A)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(o.A,{as:"h1",className:"hero__title",children:(0,s.jsx)(i.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(i.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(i.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);
"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[67422],{31451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"configure_flag/rollout/experimentation","title":"Experimentation rollout / A/B Testing","description":"An experimentation rollout is when your flag is configured to be served only for a determined time.","source":"@site/versioned_docs/version-v1.37.1/configure_flag/rollout/experimentation.mdx","sourceDirName":"configure_flag/rollout","slug":"/configure_flag/rollout/experimentation","permalink":"/docs/configure_flag/rollout/experimentation","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.37.1/configure_flag/rollout/experimentation.mdx","tags":[],"version":"v1.37.1","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Canary Release","permalink":"/docs/configure_flag/rollout/canary"},"next":{"title":"Progressive rollout","permalink":"/docs/configure_flag/rollout/progressive"}}');var a=n(74848),i=n(28453),o=n(11470),l=n(19365);const s={},u="Experimentation rollout / A/B Testing",c={},d=[{value:"Example",id:"example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2},{value:"A/B testing",id:"ab-testing",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"experimentation-rollout--ab-testing",children:"Experimentation rollout / A/B Testing"})}),"\n",(0,a.jsxs)(t.p,{children:["An ",(0,a.jsx)(t.strong,{children:"experimentation rollout"})," is when your flag is configured to be served only for a determined time."]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["It means that before the rollout start date, the ",(0,a.jsx)(t.code,{children:"default"})," value is served to all users."]}),"\n",(0,a.jsx)(t.li,{children:"Between the dates the flag is evaluated."}),"\n",(0,a.jsxs)(t.li,{children:["After the end date the ",(0,a.jsx)(t.code,{children:"default"})," value is served to all users."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(o.A,{groupId:"code",children:[(0,a.jsx)(l.A,{value:"yaml",label:"YAML",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"experimentation-flag:\n  variations:\n    variationA: A\n    variationB: B\n  defaultRule:\n    percentage:\n      variationA: 50\n      variationB: 50\n  # highlight-start\n  experimentation:\n    start: 2021-03-20T00:00:00.1-05:00\n    end: 2021-03-21T00:00:00.1-05:00\n  # highlight-end\n"})})}),(0,a.jsx)(l.A,{value:"json",label:"JSON",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "experimentation-flag": {\n    "variations": {\n      "variationA": "A",\n      "variationB": "B"\n    },\n    "defaultRule": {\n      "percentage": {\n        "variationA": 50,\n        "variationB": 50\n      }\n    },\n# highlight-start\n    "experimentation": {\n      "start": "2021-03-20T05:00:00.100Z",\n      "end": "2021-03-21T05:00:00.100Z"\n    },\n# highlight-end\n  }\n}\n'})})}),(0,a.jsx)(l.A,{value:"toml",label:"TOML",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-toml",children:'[experimentation-flag.variations]\nvariationA = "A"\nvariationB = "B"\n\n[experimentation-flag.defaultRule.percentage]\nvariationA = 50\nvariationB = 50\n\n# highlight-start\n[experimentation-flag.experimentation]\nstart = 2021-03-20T05:00:00.100Z\nend = 2021-03-21T05:00:00.100Z\n# highlight-end\n'})})})]}),"\n",(0,a.jsxs)(t.p,{children:["Check this ",(0,a.jsx)(t.a,{href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/examples/rollout_experimentation",children:"example"})," to see how it works."]}),"\n",(0,a.jsx)(t.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"The dates are in the format supported natively by your flag file format."})}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Field"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"start"})})}),(0,a.jsx)(t.td,{children:"The date the flag will be started to be served."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"end"})})}),(0,a.jsx)(t.td,{children:"The date the flag will be stopped to be served."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"ab-testing",children:"A/B testing"}),"\n",(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsx)(t.p,{children:"A/B test is the shorthand for a simple controlled experiment.\nAs the name implies, two versions (A and B) of a single variable are compared, which are identical except for one variation that might affect a user's behavior.\nA/B tests are widely considered the simplest form of controlled experiment."}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"(source wikipedia)"})})})]}),"\n",(0,a.jsxs)(t.p,{children:["To have a proper A/B testing solution with the module you should use the experimentation rollout combined with the ",(0,a.jsx)(t.a,{href:"../../go_module/data_collection/",children:"export of your data"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"This combination will allow to have your experimentation running for a dedicated time, and you will have the data to know exactly which user was on which version of the flag."}),"\n",(0,a.jsxs)(t.p,{children:["To setup the duration of your A/B test you can use a tool ",(0,a.jsx)(t.a,{href:"https://vwo.com/tools/ab-test-duration-calculator/",children:"ab-test-duration-calculator"})," from vwo, that will help you to set up the test duration correctly."]})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var i=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),a=n(18215),i=n(23104),o=n(56347),l=n(205),s=n(57485),u=n(31682),c=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[u,d]=p({queryString:n,groupId:a}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),x=(()=>{const e=u??m;return f({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{x&&s(x)}),[x]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function b(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=s.indexOf(t),a=l[n].value;a!==r&&(u(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>s.push(e),onKeyDown:d,onClick:c,...i,className:(0,a.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:i}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,v.jsx)(b,{...t,...e}),(0,v.jsx)(j,{...t,...e})]})}function w(e){const t=(0,g.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(96540);const a={},i=r.createContext(a);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
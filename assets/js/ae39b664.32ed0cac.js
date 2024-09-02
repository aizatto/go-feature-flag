"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[55043],{52940:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=n(85893),a=n(11151),l=n(74866),o=n(85162);const i={},s="Progressive rollout",c={id:"configure_flag/rollout/progressive",title:"Progressive rollout",description:"A progressive rollout allows you to increase the percentage of your flag over time.",source:"@site/versioned_docs/version-v1.31.0/configure_flag/rollout/progressive.mdx",sourceDirName:"configure_flag/rollout",slug:"/configure_flag/rollout/progressive",permalink:"/docs/v1.31.0/configure_flag/rollout/progressive",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.31.0/configure_flag/rollout/progressive.mdx",tags:[],version:"v1.31.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Experimentation rollout / A/B Testing",permalink:"/docs/v1.31.0/configure_flag/rollout/experimentation"},next:{title:"Scheduled rollout",permalink:"/docs/v1.31.0/configure_flag/rollout/scheduled"}},u={},d=[{value:"Example",id:"example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function h(e){const r={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"progressive-rollout",children:"Progressive rollout"})}),"\n",(0,t.jsxs)(r.p,{children:["A ",(0,t.jsx)(r.strong,{children:"progressive rollout"})," allows you to increase the percentage of your flag over time."]}),"\n",(0,t.jsxs)(r.p,{children:["You can select a ",(0,t.jsx)(r.strong,{children:"release ramp"})," where the percentage of your flag will increase progressively between the start date\nand the end date."]}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(l.Z,{groupId:"code",children:[(0,t.jsx)(o.Z,{value:"yaml",label:"YAML",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"progressive-flag:\n  variations:\n    variationA: A\n    variationB: B\n  defaultRule:\n# highlight-start\n    progressiveRollout:\n      initial:\n        variation: variationB\n        percentage: 0\n        date: 2021-03-20T00:00:00.1-05:00\n      end:\n        variation: variationB\n        percentage: 100\n        date: 2021-03-21T00:00:00.1-05:00\n# highlight-end\n"})})}),(0,t.jsx)(o.Z,{value:"json",label:"JSON",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\n  "progressive-flag": {\n    "variations": {\n      "variationA": "A",\n      "variationB": "B"\n    },\n    "defaultRule": {\n# highlight-start\n      "progressiveRollout": {\n        "initial": {\n          "variation": "variationB",\n          "percentage": 0,\n          "date": "2021-03-20T05:00:00.100Z"\n        },\n        "end": {\n          "variation": "variationB",\n          "percentage": 100,\n          "date": "2021-03-21T05:00:00.100Z"\n        }\n      },\n# highlight-end\n    }\n  }\n}\n'})})}),(0,t.jsx)(o.Z,{value:"toml",label:"TOML",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-toml",children:'[progressive-flag.variations]\nvariationA = "A"\nvariationB = "B"\n# highlight-start\n[progressive-flag.defaultRule.progressiveRollout.initial]\nvariation = "variationB"\npercentage = 0\ndate = 2021-03-20T05:00:00.100Z\n\n[progressive-flag.defaultRule.progressiveRollout.end]\nvariation = "variationB"\npercentage = 100\ndate = 2021-03-21T05:00:00.100Z\n# highlight-end\n'})})})]}),"\n",(0,t.jsx)(r.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsx)(r.p,{children:"The dates are in the format supported natively by your flag file format."})}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Field"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"releaseRamp"})})}),(0,t.jsxs)(r.td,{children:["It contains the time slot where we will progressively increase the percentage of the flag.",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(r.strong,{children:"Before"})," the ",(0,t.jsx)(r.code,{children:"start"})," date we will serve the ",(0,t.jsx)(r.code,{children:"percentage.initial"})," percentage of the flag."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(r.strong,{children:"Between"})," ",(0,t.jsx)(r.code,{children:"start"})," and ",(0,t.jsx)(r.code,{children:"end"})," we will serve a percentage of the flag corresponding to the actual time."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(r.strong,{children:"After"})," the ",(0,t.jsx)(r.code,{children:"end"})," date we will serve the ",(0,t.jsx)(r.code,{children:"percentage.end"})," percentage of the flag."]})]}),(0,t.jsxs)("p",{children:["If you have no date in your ",(0,t.jsx)(r.code,{children:"releaseRamp"})," we will not do any progressive rollout and use the top level percentage you have configured ",(0,t.jsx)(r.em,{children:"(0% in our example)"}),"."]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"percentage"})})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.em,{children:"(optional)"}),(0,t.jsx)("br",{}),"It represents the ramp of progress, at which level the flag starts (",(0,t.jsx)(r.code,{children:"initial"}),") and ends (",(0,t.jsx)(r.code,{children:"end"}),").",(0,t.jsx)("br",{}),(0,t.jsxs)(r.strong,{children:["Default: ",(0,t.jsx)(r.code,{children:"initial"})," = ",(0,t.jsx)(r.code,{children:"0"})," and ",(0,t.jsx)(r.code,{children:"end"})," = ",(0,t.jsx)(r.code,{children:"100"})]})]})]})]})]})]})}function g(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:(e,r,n)=>{n.d(r,{Z:()=>o});n(67294);var t=n(36905);const a={tabItem:"tabItem_Ymn6"};var l=n(85893);function o(e){let{children:r,hidden:n,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,o),hidden:n,children:r})}},74866:(e,r,n)=>{n.d(r,{Z:()=>w});var t=n(67294),a=n(36905),l=n(12466),o=n(16550),i=n(20469),s=n(91980),c=n(67392),u=n(20812);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}}))}(n);return function(e){const r=(0,c.lx)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function g(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,s._X)(l),(0,t.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(a.location.search);r.set(l,e),a.replace({...a.location,search:r.toString()})}),[l,a])]}function f(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,l=h(e),[o,s]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!g({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:l}))),[c,d]=p({queryString:n,groupId:a}),[f,v]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,l]=(0,u.Nk)(n);return[a,(0,t.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),m=(()=>{const e=c??f;return g({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{m&&s(m)}),[m]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=n(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function b(e){let{className:r,block:n,selectedValue:t,selectValue:o,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const r=e.currentTarget,n=s.indexOf(r),a=i[n].value;a!==t&&(c(r),o(a))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;r=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;r=s[n]??s[s.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:i.map((e=>{let{value:r,label:n,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>s.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.Z)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function j(e){let{lazy:r,children:n,selectedValue:l}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==l})))})}function y(e){const r=f(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,x.jsx)(b,{...r,...e}),(0,x.jsx)(j,{...r,...e})]})}function w(e){const r=(0,v.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(r))}},11151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>o});var t=n(67294);const a={},l=t.createContext(a);function o(e){const r=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);
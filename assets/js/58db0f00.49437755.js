"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[87968],{27189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"getting_started/using-go-module","title":"Using the GO module","description":"Use the module in your GO application with nothing to install.","source":"@site/docs/getting_started/using-go-module.md","sourceDirName":"getting_started","slug":"/getting_started/using-go-module","permalink":"/docs/next/getting_started/using-go-module","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/docs/getting_started/using-go-module.md","tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"sidebar_position":20,"description":"Use the module in your GO application with nothing to install."},"sidebar":"tutorialSidebar","previous":{"title":"Using Open Feature SDKs","permalink":"/docs/next/getting_started/using-openfeature"},"next":{"title":"Configure your feature flags","permalink":"/docs/next/category/configure-your-feature-flags"}}');var a=n(74848),o=n(28453);const l={sidebar_position:20,description:"Use the module in your GO application with nothing to install."},s="Using the GO module",r={},u=[{value:"Installation",id:"installation",level:2},{value:"Create a feature flag configuration",id:"create-a-feature-flag-configuration",level:2},{value:"SDK Initialisation",id:"sdk-initialisation",level:2},{value:"Evaluate your flags",id:"evaluate-your-flags",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"using-the-go-module",children:"Using the GO module"})}),"\n",(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"go get github.com/thomaspoignant/go-feature-flag\n"})}),"\n",(0,a.jsx)(t.h2,{id:"create-a-feature-flag-configuration",children:"Create a feature flag configuration"}),"\n",(0,a.jsxs)(t.p,{children:["Create a new ",(0,a.jsx)(t.code,{children:"YAML"})," file containing your first flag configuration."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",metastring:'title="flag-config.goff.yaml"',children:'# 20% of the users will use the variation "my-new-feature"\ntest-flag:\n  variations:\n    my-new-feature: true\n    my-old-feature: false\n  defaultRule:\n    percentage:\n      my-new-feature: 20\n      my-old-feature: 80\n'})}),"\n",(0,a.jsxs)(t.p,{children:["This flag split the usage of this flag, 20% will use the variation ",(0,a.jsx)(t.code,{children:"my-new-feature"})," and 80% the variation ",(0,a.jsx)(t.code,{children:"my-old-feature"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"sdk-initialisation",children:"SDK Initialisation"}),"\n",(0,a.jsxs)(t.p,{children:["First, you need to initialize the ",(0,a.jsx)(t.code,{children:"ffclient"})," with the location of your backend file."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",metastring:'linenums="1"',children:'err := ffclient.Init(ffclient.Config{\n    PollingInterval: 3 * time.Second,\n    Retriever:      &fileretriever.Retriever{\n        Path: "flag-config.goff.yaml",\n    },\n})\ndefer ffclient.Close()\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"This example will load a file from your local computer and will refresh the flags every 3 seconds (if you omit the\nPollingInterval, the default value is 60 seconds)."})}),"\n",(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsx)(t.p,{children:"This is a basic configuration to test locally, in production it is better to use a remote place to store your feature flag configuration file."}),(0,a.jsxs)(t.p,{children:["Look at the list of available options in the ",(0,a.jsxs)(t.a,{href:"../go_module/store_file/",children:[(0,a.jsx)(t.strong,{children:"Store your feature flag file"})," page"]}),"."]})]}),"\n",(0,a.jsx)(t.h2,{id:"evaluate-your-flags",children:"Evaluate your flags"}),"\n",(0,a.jsx)(t.p,{children:"Now you can evaluate your flags anywhere in your code."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",metastring:'linenums="1"',children:'user := ffcontext.NewEvaluationContext("user-unique-key")\nhasFlag, _ := ffclient.BoolVariation("test-flag", user, false)\nif hasFlag {\n    // flag "test-flag" is true for the user\n} else {\n    // flag "test-flag" is false for the user\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["You can find more examples in the ",(0,a.jsx)(t.a,{href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/examples",children:"examples/"})," directory."]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var i=n(96540);const a={},o=i.createContext(a);function l(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
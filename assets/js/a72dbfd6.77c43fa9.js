"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[81203],{27922:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"experimental/ofrep","title":"OpenFeature Remote Evaluation Protocol (OFREP)","description":"Experimental","source":"@site/versioned_docs/version-v1.34.0/experimental/ofrep.md","sourceDirName":"experimental","slug":"/experimental/ofrep","permalink":"/docs/v1.34.0/experimental/ofrep","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.34.0/experimental/ofrep.md","tags":[],"version":"v1.34.0","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Frequently Asked Questions","permalink":"/docs/v1.34.0/faq"}}');var a=o(74848),n=o(28453);const s={},i="OpenFeature Remote Evaluation Protocol (OFREP)",l={},c=[{value:"How to test it?",id:"how-to-test-it",level:2},{value:"Want to start even faster?",id:"want-to-start-even-faster",level:3}];function p(e){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"openfeature-remote-evaluation-protocol-ofrep",children:"OpenFeature Remote Evaluation Protocol (OFREP)"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.img,{src:"https://img.shields.io/badge/Status-Experimental-red.svg",alt:"Experimental"}),(0,a.jsx)(t.br,{}),"\n","\u26a0\ufe0f Note that this a work in progress and the protocol is subject to change. \u26a0\ufe0f"]}),"\n",(0,a.jsx)(t.p,{children:"OpenFeature Remote Flag Evaluation Protocol is an API specification for feature flagging that allows the use of generic\nproviders to connect to any feature flag management systems that supports the protocol."}),"\n",(0,a.jsx)(t.p,{children:"Currently, the protocol is in the early stages of development and is not yet ready for production use, but GO Feature Flag\nis supporting the protocol and is the first implementation of the protocol.\nWe are part of the leading team in the protocol, and we try to follow the specification during the early stages of the protocol\nto allow people to try it and be able to develop the providers."}),"\n",(0,a.jsx)(t.h2,{id:"how-to-test-it",children:"How to test it?"}),"\n",(0,a.jsxs)(t.p,{children:["The OFREP implementation is part of the GO Feature Flag Relay Proxy.\nWe have a new API endpoints ",(0,a.jsx)(t.code,{children:"/ofrep/v1/evaluate/flags/{key}"})," and ",(0,a.jsx)(t.code,{children:"/ofrep/v1/evaluate/flags"})," that you can use to test the protocol."]}),"\n",(0,a.jsxs)(t.p,{children:["You just have to start the GO Feature Flag Relay Proxy (starting from version ",(0,a.jsx)(t.code,{children:"v1.24.0"}),") and use the API to evaluate your flags.\nFor this, follow the instruction on how to use the relay-proxy ",(0,a.jsx)(t.a,{href:"/docs/v1.34.0/relay_proxy/getting_started",children:"here"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"want-to-start-even-faster",children:"Want to start even faster?"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"curl https://raw.githubusercontent.com/thomaspoignant/go-feature-flag/main/cmd/relayproxy/testdata/dockerhub-example/goff-proxy.yaml -o goff-proxy.yaml\ndocker run -p 1031:1031 -v $(pwd)/goff-proxy.yaml:/goff/goff-proxy.yaml thomaspoignant/go-feature-flag:latest\n"})}),"\n",(0,a.jsx)(t.p,{children:"This will launch a GO Feature Flag Relay Proxy with a configuration file that will retrieve the flags from the test server."}),"\n",(0,a.jsxs)(t.p,{children:["Swagger is enabled, so you can directly go to ",(0,a.jsx)(t.a,{href:"http://localhost:1031/swagger/index.html",children:"http://localhost:1031/swagger/index.html"})," to test the OFREP endpoints (the API Key to use is ",(0,a.jsx)(t.code,{children:"apikey1"}),")."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>i});var r=o(96540);const a={},n=r.createContext(a);function s(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);
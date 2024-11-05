"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[70824],{32453:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"go_module/data_collection/log","title":"Log Exporter","description":"The log exporter is here mostly for backward compatibility (originally every variation were logged, but it can be a lot of data for a default configuration).","source":"@site/versioned_docs/version-v1.34.0/go_module/data_collection/log.md","sourceDirName":"go_module/data_collection","slug":"/go_module/data_collection/log","permalink":"/docs/v1.34.0/go_module/data_collection/log","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.34.0/go_module/data_collection/log.md","tags":[],"version":"v1.34.0","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Webhook Exporter","permalink":"/docs/v1.34.0/go_module/data_collection/webhook"},"next":{"title":"Kafka Exporter","permalink":"/docs/v1.34.0/go_module/data_collection/kafka"}}');var n=o(74848),a=o(28453);const i={sidebar_position:5},l="Log Exporter",s={},d=[{value:"Configuration example",id:"configuration-example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function c(e){const t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"log-exporter",children:"Log Exporter"})}),"\n",(0,n.jsxs)(t.p,{children:["The log exporter is here mostly for backward compatibility ",(0,n.jsx)(t.em,{children:"(originally every variation were logged, but it can be a lot of data for a default configuration)"}),".",(0,n.jsx)(t.br,{}),"\n","It will use your logger ",(0,n.jsx)(t.code,{children:"ffclient.Config.Logger"})," to log every variation changes."]}),"\n",(0,n.jsxs)(t.p,{children:["You can configure your output log with the ",(0,n.jsx)(t.code,{children:"Format"})," field.",(0,n.jsx)(t.br,{}),"\n","It uses a ",(0,n.jsx)(t.a,{href:"https://golang.org/pkg/text/template/",children:"go template"})," format."]}),"\n",(0,n.jsx)(t.h2,{id:"configuration-example",children:"Configuration example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",metastring:"showLineNumbers",children:'ffclient.Config{\n    // ...\n   DataExporter: ffclient.DataExporter{\n        Exporter: &logsexporter.Exporter{\n            LogFormat: "[{{ .FormattedDate}}] user=\\"{{ .UserKey}}\\", flag=\\"{{ .Key}}\\", value=\\"{{ .Value}}\\"",\n        },\n    },\n    // ...\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"LogFormat"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(optional)"}),(0,n.jsx)("br",{}),"LogFormat is the ",(0,n.jsx)(t.a,{href:"https://golang.org/pkg/text/template/",children:"template"})," configuration of the output format of your log.",(0,n.jsx)("br",{}),"You can use all the key from the ",(0,n.jsx)(t.code,{children:"exporter.FeatureEvent"})," + a key called ",(0,n.jsx)(t.code,{children:"FormattedDate"})," that represents the date with the ",(0,n.jsx)(t.strong,{children:"RFC 3339"})," Format.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsxs)(t.strong,{children:["Default: ",(0,n.jsx)(t.code,{children:'[{{ .FormattedDate}}] user="{{ .UserKey}}", flag="{{ .Key}}", value="{{ .Value}}"'})]})]})]})})]}),"\n",(0,n.jsxs)(t.p,{children:["Check the ",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/exporter/logsexporter",children:"godoc for full details"}),"."]})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>l});var r=o(96540);const n={},a=r.createContext(n);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);
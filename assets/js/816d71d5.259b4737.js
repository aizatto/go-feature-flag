"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[45277],{344:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"go_module/data_collection/sqs","title":"SQS Exporter","description":"The SQS exporter will collect the data and create an event in the queue for each evaluation we receive.","source":"@site/versioned_docs/version-v1.34.0/go_module/data_collection/sqs.md","sourceDirName":"go_module/data_collection","slug":"/go_module/data_collection/sqs","permalink":"/docs/v1.34.0/go_module/data_collection/sqs","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.34.0/go_module/data_collection/sqs.md","tags":[],"version":"v1.34.0","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Kafka Exporter","permalink":"/docs/v1.34.0/go_module/data_collection/kafka"},"next":{"title":"PubSub Exporter","permalink":"/docs/v1.34.0/go_module/data_collection/google_pubsub"}}');var r=o(74848),s=o(28453);const i={sidebar_position:6},a="SQS Exporter",c={},l=[{value:"Configuration example",id:"configuration-example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"sqs-exporter",children:"SQS Exporter"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"SQS exporter"})," will collect the data and create an event in the queue for each evaluation we receive."]}),"\n",(0,r.jsx)(t.h2,{id:"configuration-example",children:"Configuration example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'ffclient.Config{ \n   // ...\n\t cfg, _ := config.LoadDefaultConfig(context.TODO())\n   DataExporter: ffclient.DataExporter{\n        // ...\n        Exporter: &sqsexporter.Exporter{\n\t\t\t      QueueURL: "https://sqs.eu-west-1.amazonaws.com/XXX/test-queue",\n            AwsConfig: &cfg,\n        },\n    },\n    // ...\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"QueueURL "})}),(0,r.jsxs)(t.td,{children:["URL of your SQS queue.",(0,r.jsx)("br",{}),(0,r.jsx)(t.em,{children:"You can find it in your AWS console."})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"AwsConfig "})}),(0,r.jsxs)(t.td,{children:["An instance of ",(0,r.jsx)(t.code,{children:"aws.Config"})," that configures your access to AWS ",(0,r.jsxs)(t.em,{children:["(see ",(0,r.jsx)(t.a,{href:"https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html",children:"this documentation for more info"}),")"]}),"."]})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["Check the ",(0,r.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/exporter/sqsexporter",children:"godoc for full details"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>a});var n=o(96540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
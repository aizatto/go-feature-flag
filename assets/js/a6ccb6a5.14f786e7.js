"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[36015],{80074:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=o(85893),i=o(11151);const r={sidebar_position:7},s="PubSub Exporter",l={id:"go_module/data_collection/google_pubsub",title:"PubSub Exporter",description:"The PubSub exporter will collect the data and publish an event on the topic for each evaluation we receive.",source:"@site/versioned_docs/version-v1.31.1/go_module/data_collection/google_pubsub.md",sourceDirName:"go_module/data_collection",slug:"/go_module/data_collection/google_pubsub",permalink:"/docs/v1.31.1/go_module/data_collection/google_pubsub",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.31.1/go_module/data_collection/google_pubsub.md",tags:[],version:"v1.31.1",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"SQS Exporter",permalink:"/docs/v1.31.1/go_module/data_collection/sqs"},next:{title:"Custom exporter",permalink:"/docs/v1.31.1/go_module/data_collection/custom"}},d={},c=[{value:"Configuration example",id:"configuration-example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function a(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"pubsub-exporter",children:"PubSub Exporter"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"PubSub exporter"})," will collect the data and publish an event on the topic for each evaluation we receive."]}),"\n",(0,n.jsx)(t.h2,{id:"configuration-example",children:"Configuration example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'ffclient.Config{ \n   // ... \n    cfg, _ := config.LoadDefaultConfig(context.TODO())\n    DataExporter: ffclient.DataExporter{\n        // ... \n        Exporter: &pubsubexporter.Exporter{\n            ProjectID: "project-id", // required\n            Topic: "topic", // required \n            Options: []option.ClientOption{...},\n            PublishSettings: &pubsub.PublishSettings{...},\n            EnableMessageOrdering: true,\n        },\n    },\n    // ...\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ProjectID "})}),(0,n.jsxs)(t.td,{children:["ID of GCP project.",(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"You can find it in your GCP console"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Topic "})}),(0,n.jsx)(t.td,{children:"Name of topic on which messages will be published"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Options"})}),(0,n.jsxs)(t.td,{children:["PubSub client options ",(0,n.jsxs)(t.em,{children:["(see ",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/google.golang.org/api/option",children:"docs"}),")"]})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"PublishSettings"})}),(0,n.jsxs)(t.td,{children:["Topic related settings ",(0,n.jsxs)(t.em,{children:["(see ",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/cloud.google.com/go/pubsub#PublishSettings",children:"docs"}),")"]})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"EnableMessageOrdering"})}),(0,n.jsx)(t.td,{children:"Enables delivery of ordered keys"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["Check the ",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/exporter/pubsubexporter",children:"godoc for full details"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>l,a:()=>s});var n=o(67294);const i={},r=n.createContext(i);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
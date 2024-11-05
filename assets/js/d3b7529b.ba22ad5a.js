"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[5921],{98181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"go_module/data_collection/index","title":"Export data","description":"If you want to export data about how your flags are used, you can use the DataExporter.","source":"@site/versioned_docs/version-v1.36.1/go_module/data_collection/index.md","sourceDirName":"go_module/data_collection","slug":"/go_module/data_collection/","permalink":"/docs/v1.36.1/go_module/data_collection/","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.36.1/go_module/data_collection/index.md","tags":[],"version":"v1.36.1","sidebarPosition":0,"frontMatter":{"sidebar_position":0},"sidebar":"tutorialSidebar","previous":{"title":"Custom Retriever","permalink":"/docs/v1.36.1/go_module/store_file/custom"},"next":{"title":"S3 Exporter","permalink":"/docs/v1.36.1/go_module/data_collection/s3"}}');var a=n(74848),o=n(28453);const s={sidebar_position:0},l="Export data",i={},d=[{value:"Data format",id:"data-format",level:2},{value:"Example",id:"example",level:3},{value:"Configuration fields",id:"configuration-fields",level:3},{value:"How to configure data export?",id:"how-to-configure-data-export",level:2},{value:"Example",id:"example-1",level:3},{value:"Configuration fields",id:"configuration-fields-1",level:3},{value:"Don&#39;t track a flag",id:"dont-track-a-flag",level:2},{value:"YAML",id:"yaml",level:3},{value:"JSON",id:"json",level:3},{value:"TOML",id:"toml",level:3}];function c(e){const t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"export-data",children:"Export data"})}),"\n",(0,a.jsxs)(t.p,{children:["If you want to export data about how your flags are used, you can use the ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"DataExporter"})}),".",(0,a.jsx)(t.br,{}),"\n","It collects all the variations events and can save these events on several locations:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/v1.36.1/go_module/data_collection/file",children:"File"})," ",(0,a.jsx)(t.em,{children:"- create local files with the variation usages."})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/v1.36.1/go_module/data_collection/log",children:"Log"})," ",(0,a.jsx)(t.em,{children:"- use your logger to write the variation usages."})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/v1.36.1/go_module/data_collection/s3",children:"S3"})," ",(0,a.jsx)(t.em,{children:"- export your variation usages to S3."})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/v1.36.1/go_module/data_collection/webhook",children:"Webhook"})," ",(0,a.jsx)(t.em,{children:"- export your variation usages by calling a webhook."})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/v1.36.1/go_module/data_collection/google_cloud_storage",children:"Google Cloud Storage"})," ",(0,a.jsx)(t.em,{children:"- export your variation usages by calling a webhook."})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/v1.36.1/go_module/data_collection/kafka",children:"Kafka"})," ",(0,a.jsx)(t.em,{children:"- export your variation usages by producing messages to a Kafka topic."})]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["If the existing exporter does not work with your system you can extend the system and use a ",(0,a.jsx)(t.a,{href:"/docs/v1.36.1/go_module/data_collection/custom",children:"custom exporter"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"data-format",children:"Data format"}),"\n",(0,a.jsxs)(t.p,{children:["Currently, we are supporting only feature events.",(0,a.jsx)(t.br,{}),"\n",'They represent individual flag evaluations and are considered "full fidelity" events.']}),"\n",(0,a.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",metastring:"showLineNumbers",children:'{\n    "kind": "feature",\n    "contextKind": "anonymousUser",\n    "userKey": "ABCD",\n    "creationDate": 1618228297,\n    "key": "test-flag",\n    "variation": "Default",\n    "value": false,\n    "default": false,\n    "source": "SERVER"\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Field"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"kind"})})}),(0,a.jsx)(t.td,{children:"The kind for a feature event is feature. A feature event will only be generated if the trackEvents attribute of the flag is set to true."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"contextKind"})})}),(0,a.jsxs)(t.td,{children:['The kind of context which generated an event. This will only be "',(0,a.jsx)(t.strong,{children:"anonymousUser"}),'" for events generated on behalf of an anonymous user or the reserved word "',(0,a.jsx)(t.strong,{children:"user"}),'" for events generated on behalf of a non-anonymous user.']})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"userKey"})})}),(0,a.jsx)(t.td,{children:"The key of the user object used in a feature flag evaluation."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"creationDate"})})}),(0,a.jsx)(t.td,{children:"When the feature flag was requested at Unix epoch time in milliseconds."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"key"})})}),(0,a.jsx)(t.td,{children:"The key of the feature flag requested."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"variation"})})}),(0,a.jsxs)(t.td,{children:["The variation of the flag requested. Available values are:",(0,a.jsx)("br",{}),(0,a.jsx)(t.strong,{children:"True"}),": if the flag was evaluated to True ",(0,a.jsx)("br",{}),(0,a.jsx)(t.strong,{children:"False"}),": if the flag was evaluated to False",(0,a.jsx)("br",{}),(0,a.jsx)(t.strong,{children:"Default"}),": if the flag was evaluated to Default",(0,a.jsx)("br",{}),(0,a.jsx)(t.strong,{children:"SdkDefault"}),": if something wrong happened and the SDK default value was used."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"value"})})}),(0,a.jsx)(t.td,{children:"The value of the feature flag returned by feature flag evaluation."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"source"})})}),(0,a.jsx)(t.td,{children:"Where the event is generated. This is set to SERVER when the event is evaluated from the relay-proxy and PROVIDER_CACHE when it is evaluated from the cache."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"default"})})}),(0,a.jsx)(t.td,{children:"(Optional) This value is set to true if feature flag evaluation failed, in which case, the value returned is the default value passed to variation."})]})]})]}),"\n",(0,a.jsxs)(t.p,{children:["Events are collected and send in bulk to avoid spamming your exporter ",(0,a.jsxs)(t.em,{children:["(see details in ",(0,a.jsx)(t.a,{href:"#how-to-configure-data-export",children:"how to configure data export"})]}),")"]}),"\n",(0,a.jsx)(t.h2,{id:"how-to-configure-data-export",children:"How to configure data export?"}),"\n",(0,a.jsxs)(t.p,{children:["In your ",(0,a.jsx)(t.code,{children:"ffclient.Config"})," add the ",(0,a.jsx)(t.code,{children:"DataExporter"})," field and configure your export location."]}),"\n",(0,a.jsxs)(t.p,{children:["To avoid spamming your location everytime you have a variation called, ",(0,a.jsx)(t.code,{children:"go-feature-flag"})," is storing in memory all the events and sends them in bulk to the exporter.\nYou can decide the threshold on when to send the data with the properties ",(0,a.jsx)(t.code,{children:"FlushInterval"})," and ",(0,a.jsx)(t.code,{children:"MaxEventInMemory"}),". The first threshold hit will export the data."]}),"\n",(0,a.jsxs)(t.p,{children:["If there are some flags that you don't want to export, you can use ",(0,a.jsx)(t.code,{children:"trackEvents"})," fields on these specific flags to disable the data export ",(0,a.jsxs)(t.em,{children:["(see ",(0,a.jsx)(t.a,{href:"/docs/v1.36.1/configure_flag/flag_format",children:"flag file format"}),")"]}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"example-1",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",metastring:"showLineNumbers",children:'ffclient.Config{ \n    // ...\n   DataExporter: ffclient.DataExporter{\n        FlushInterval:   10 * time.Second,\n        MaxEventInMemory: 1000,\n        Exporter: &fileexporter.Exporter{\n            OutputDir: "/output-data/",\n        },\n    },\n    // ...\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"configuration-fields-1",children:"Configuration fields"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Field"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"Exporter"})}),(0,a.jsxs)(t.td,{children:["The configuration of the exporter you want to use. All the exporters are available in the ",(0,a.jsx)(t.code,{children:"exporter"})," package."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"FlushInterval"})}),(0,a.jsxs)(t.td,{children:[(0,a.jsx)(t.em,{children:"(optional)"}),(0,a.jsx)("br",{}),"Time to wait before exporting the data.",(0,a.jsx)("br",{}),(0,a.jsx)(t.strong,{children:"Default: 60 seconds"}),"."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"MaxEventInMemory"})}),(0,a.jsxs)(t.td,{children:[(0,a.jsx)(t.em,{children:"(optional)"}),(0,a.jsx)("br",{}),"If ",(0,a.jsx)(t.code,{children:"MaxEventInMemory"})," is reach before the ",(0,a.jsx)(t.code,{children:"FlushInterval"})," a intermediary export will be done",(0,a.jsx)("br",{}),(0,a.jsx)(t.strong,{children:"Default: 100000"}),"."]})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"dont-track-a-flag",children:"Don't track a flag"}),"\n",(0,a.jsx)(t.p,{children:"By default, all flags are trackable, and their data is exported."}),"\n",(0,a.jsxs)(t.p,{children:["If you want to exclude a specific flag from the data export, you can set the property ",(0,a.jsx)(t.code,{children:"trackEvents"})," to ",(0,a.jsx)(t.code,{children:"false"})," on your flag, and you will have no export for it."]}),"\n",(0,a.jsx)(t.h3,{id:"yaml",children:"YAML"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:'test-flag:\n  percentage: 50\n  true: "B"\n  false: "A"\n  default: "Default"\n  trackEvents: false\n'})}),"\n",(0,a.jsx)(t.h3,{id:"json",children:"JSON"}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"JSON example"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "test-flag": {\n    "percentage": 50,\n    "true": "B",\n    "false": "A",\n    "default": "Default",\n    # highlight-next-line\n    "trackEvents": false\n  }\n}\n'})})]}),"\n",(0,a.jsx)(t.h3,{id:"toml",children:"TOML"}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"TOML example"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-toml",children:'[test-flag]\npercentage = 50.0\ntrue = "B"\nfalse = "A"\ndefault = "Default"\n# highlight-next-line\ntrackEvents = false\n'})})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);
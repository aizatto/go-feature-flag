"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[252],{12532:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var r=o(85893),i=o(11151);const n={sidebar_position:3},a="File Exporter",s={id:"go_module/data_collection/file",title:"File Exporter",description:"The file exporter will collect the data and create a new file in a specific folder everytime we send the data.",source:"@site/versioned_docs/version-v1.29.0/go_module/data_collection/file.md",sourceDirName:"go_module/data_collection",slug:"/go_module/data_collection/file",permalink:"/docs/v1.29.0/go_module/data_collection/file",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.29.0/go_module/data_collection/file.md",tags:[],version:"v1.29.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Storage Exporter",permalink:"/docs/v1.29.0/go_module/data_collection/google_cloud_storage"},next:{title:"Webhook Exporter",permalink:"/docs/v1.29.0/go_module/data_collection/webhook"}},l={},d=[{value:"Configuration example",id:"configuration-example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function c(e){const t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"file-exporter",children:"File Exporter"})}),"\n",(0,r.jsxs)(t.p,{children:["The file exporter will collect the data and create a new file in a specific folder everytime we send the data.",(0,r.jsx)(t.br,{}),"\n","This file should be in the local instance."]}),"\n",(0,r.jsxs)(t.p,{children:["Check this ",(0,r.jsx)(t.a,{href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/examples/data_export_file",children:"complete example"})," to see how to export the data in a file."]}),"\n",(0,r.jsx)(t.h2,{id:"configuration-example",children:"Configuration example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",metastring:"showLineNumbers",children:'ffclient.Config{ \n    // ...\n   DataExporter: ffclient.DataExporter{\n        // ...\n        Exporter: &fileexporter.Exporter{\n            OutputDir: "/output-data/",\n            Format: "csv",\n            FileName: "flag-variation-{{ .Hostname}}-{{ .Timestamp}}.{{ .Format}}",\n            CsvTemplate: "{{ .Kind}};{{ .ContextKind}};{{ .UserKey}};{{ .CreationDate}};{{ .Key}};{{ .Variation}};{{ .Value}};{{ .Default}};{{ .Source}}\\n"\n        },\n    },\n    // ...\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"OutputDir"})}),(0,r.jsxs)(t.td,{children:["OutputDir is the location of the directory to store the exported files.",(0,r.jsx)("br",{}),"It should finish with a ",(0,r.jsx)(t.code,{children:"/"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Format"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Format is the output format you want in your exported file.",(0,r.jsx)("br",{}),"Available format: ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"JSON"})}),", ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"CSV"})}),", ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"Parquet"})}),".",(0,r.jsx)("br",{}),(0,r.jsxs)(t.strong,{children:["Default: ",(0,r.jsx)(t.code,{children:"JSON"})]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Filename"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Filename is the name of your output file.",(0,r.jsx)("br",{}),"You can use a templated config to define the name of your exported files.",(0,r.jsx)("br",{}),"Available replacements are ",(0,r.jsx)(t.code,{children:"{{ .Hostname}}"}),", ",(0,r.jsx)(t.code,{children:"{{ .Timestamp}}"})," and ",(0,r.jsx)(t.code,{children:"{{ .Format}}"}),(0,r.jsx)("br",{}),(0,r.jsxs)(t.strong,{children:["Default: ",(0,r.jsx)(t.code,{children:"flag-variation-{{ .Hostname}}-{{ .Timestamp}}.{{ .Format}}"})]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"CsvTemplate"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," CsvTemplate is used if your output format is CSV.",(0,r.jsx)("br",{}),"This field will be ignored if you are using format other than CSV.",(0,r.jsx)("br",{}),"You can decide which fields you want in your CSV line with a go-template syntax, please check ",(0,r.jsx)(t.a,{href:"https://github.com/thomaspoignant/go-feature-flag/blob/main/internal/exporter/feature_event.go",children:"internal/exporter/feature_event.go"})," to see the available fields.",(0,r.jsx)("br",{}),(0,r.jsx)(t.strong,{children:"Default:"})," ",(0,r.jsx)(t.code,{children:"{{ .Kind}};{{ .ContextKind}};{{ .UserKey}};{{ .CreationDate}};{{ .Key}};{{ .Variation}};{{ .Value}};{{ .Default}}\\n"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ParquetCompressionCodec"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," ParquetCompressionCodec is the parquet compression codec for better space efficiency. ",(0,r.jsx)(t.a,{href:"https://github.com/apache/parquet-format/blob/master/Compression.md",children:"Available options"}),(0,r.jsx)("br",{}),(0,r.jsxs)(t.strong,{children:["Default: ",(0,r.jsx)(t.code,{children:"SNAPPY"})]})]})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["Check the ",(0,r.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/exporter/fileexporter",children:"godoc for full details"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>s,a:()=>a});var r=o(67294);const i={},n=r.createContext(i);function a(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);
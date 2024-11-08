"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[62788],{3376:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"go_module/configuration","title":"Configuration","description":"How to configure the GO module to use it directly in your code.","source":"@site/versioned_docs/version-v1.38.0/go_module/configuration.md","sourceDirName":"go_module","slug":"/go_module/configuration","permalink":"/docs/go_module/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.38.0/go_module/configuration.md","tags":[],"version":"v1.38.0","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"description":"How to configure the GO module to use it directly in your code."},"sidebar":"tutorialSidebar","previous":{"title":"Use as a GO module","permalink":"/docs/category/use-as-a-go-module"},"next":{"title":"Performing flag evaluations","permalink":"/docs/go_module/target_user"}}');var r=i(74848),o=i(28453);const l={sidebar_position:10,description:"How to configure the GO module to use it directly in your code."},s="Configuration",a={},d=[{value:"Configuration fields",id:"configuration-fields",level:2},{value:"Example",id:"example",level:2},{value:"Multiple configuration flag files",id:"multiple-configuration-flag-files",level:2},{value:"Working with multiple go-feature-flag",id:"working-with-multiple-go-feature-flag",level:3},{value:"Example",id:"example-1",level:4},{value:"Offline mode",id:"offline-mode",level:2},{value:"Advanced configuration",id:"advanced-configuration",level:2}];function c(e){const t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"configuration",children:"Configuration"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"go-feature-flag"})," needs to be initialized to be used.",(0,r.jsx)(t.br,{}),"\n","During the initialization you must give a ",(0,r.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#Config",children:(0,r.jsx)(t.code,{children:"ffclient.Config{}"})})," configuration object."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#Config",children:(0,r.jsx)(t.code,{children:"ffclient.Config{}"})})," is the only location where you can put the configuration."]}),"\n",(0,r.jsx)(t.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Retriever"})}),(0,r.jsxs)(t.td,{children:["The configuration retriever you want to use to get your flag file",(0,r.jsx)("br",{})," ",(0,r.jsxs)(t.em,{children:["See ",(0,r.jsx)(t.a,{href:"/docs/go_module/store_file/",children:"Store your flag file"})," for the configuration details"]}),".",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})," ",(0,r.jsxs)(t.em,{children:["This field is optional if ",(0,r.jsx)(t.code,{children:"Retrievers"})]})," is configured."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Retrievers"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"Retrievers"})," is exactly the same thing as ",(0,r.jsx)(t.code,{children:"Retriever"})," but you can configure more than 1 source for your flags.",(0,r.jsx)("br",{}),"All flags are retrieved in parallel, but we are applying them in the order you provided them ",(0,r.jsx)(t.em,{children:"(it means that a flag can be overridden by another flag)"}),". ",(0,r.jsx)("br",{}),(0,r.jsxs)(t.em,{children:["See ",(0,r.jsx)(t.a,{href:"/docs/go_module/store_file/",children:"Store your flag file"})," for the configuration details"]}),". ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})," ",(0,r.jsxs)(t.em,{children:["This field is optional if ",(0,r.jsx)(t.code,{children:"Retrievers"})]})," is configured."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Context"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(optional)"}),(0,r.jsx)("br",{}),"The context used by the retriever.",(0,r.jsx)("br",{}),"Default: ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"context.Background()"})})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Environment"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)("a",{name:"option_environment"}),(0,r.jsx)(t.em,{children:"(optional)"}),(0,r.jsx)("br",{}),"The environment the app is running under, can be checked in feature flag rules.",(0,r.jsx)("br",{}),"Default: ",(0,r.jsx)(t.code,{children:'""'}),(0,r.jsx)("br",{}),(0,r.jsxs)(t.em,{children:["Check ",(0,r.jsxs)(t.a,{href:"../configure_flag/flag_format/#environments",children:[(0,r.jsx)(t.strong,{children:'"environments"'})," section"]})," to understand how to use this parameter."]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"DataExporter"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(optional)"}),(0,r.jsx)("br",{}),"DataExporter defines the method for exporting data on the usage of your flags.",(0,r.jsx)("br",{})," ",(0,r.jsxs)(t.em,{children:["see ",(0,r.jsx)(t.a,{href:"/docs/go_module/data_collection/",children:"export data section"})," for more details"]}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"FileFormat"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(optional)"}),(0,r.jsx)("br",{}),"Format of your configuration file. Available formats are ",(0,r.jsx)(t.code,{children:"yaml"}),", ",(0,r.jsx)(t.code,{children:"toml"})," and ",(0,r.jsx)(t.code,{children:"json"}),", if you omit the field it will try to unmarshal the file as a ",(0,r.jsx)(t.code,{children:"yaml"})," file.",(0,r.jsx)("br",{}),"Default: ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"YAML"})})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"LeveledLogger"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(optional)"}),(0,r.jsx)("br",{}),"LeveledLogger is used to log what ",(0,r.jsx)(t.code,{children:"go-feature-flag"})," is doing.",(0,r.jsx)("br",{}),"It should be a ",(0,r.jsx)(t.code,{children:"slog"})," instance.",(0,r.jsx)("br",{}),"If no logger is provided the module will not log anything.",(0,r.jsx)("br",{}),"Default: ",(0,r.jsx)(t.strong,{children:"No log"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Notifiers"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(optional)"}),(0,r.jsx)("br",{}),"List of notifiers to call when your flag file has been changed.",(0,r.jsx)("br",{})," ",(0,r.jsxs)(t.em,{children:["See ",(0,r.jsx)(t.a,{href:"/docs/go_module/notifier/",children:"notifiers section"})," for more details"]}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"PollingInterval"})}),(0,r.jsxs)(t.td,{children:["(optional) Duration to wait before refreshing the flags.",(0,r.jsx)("br",{}),"The minimum polling interval is 1 second.",(0,r.jsx)("br",{}),"Default: ",(0,r.jsx)(t.strong,{children:"60 * time.Second"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"EnablePollingJitter"})}),(0,r.jsxs)(t.td,{children:["(optional) Set to true if you want to avoid having true periodicity when retrieving your flags. It is useful to avoid having spike on your flag configuration storage in case your application is starting multiple instance at the same time.",(0,r.jsx)("br",{}),"We ensure a deviation that is maximum \xb110% of your polling interval.",(0,r.jsx)("br",{}),"Default: ",(0,r.jsx)(t.strong,{children:"false"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"StartWithRetrieverError"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(optional)"})," If ",(0,r.jsx)(t.strong,{children:"true"}),", the SDK will start even if we did not get any flags from the retriever. It will serve only default values until the retriever returns the flags.",(0,r.jsx)("br",{}),"The init method will not return any error if the flag file is unreachable.",(0,r.jsx)("br",{}),"Default: ",(0,r.jsx)(t.strong,{children:"false"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"DisableNotifierOnInit"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(optional)"})," If ",(0,r.jsx)(t.strong,{children:"true"}),", the SDK will not call any notifier when the flags are loaded during initialization. This is useful if you do not want a Slack/Webhook notification saying that the flags have been added every time you start the application.",(0,r.jsx)("br",{}),"Default: ",(0,r.jsx)(t.strong,{children:"false"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Offline"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(optional)"})," If ",(0,r.jsx)(t.strong,{children:"true"}),", the SDK will not try to retrieve the flag file and will not export any data. No notifications will be sent either.",(0,r.jsx)("br",{}),"Default: ",(0,r.jsx)(t.strong,{children:"false"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"EvaluationContextEnrichment"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsxs)("p",{children:[(0,r.jsx)(t.em,{children:"(optional)"})," It is a free ",(0,r.jsx)(t.code,{children:"map[string]interface{}"})," field that will be merged with the evaluation context sent during the evaluations. It is useful to add common attributes to all the evaluation, such as a server version, environment, ..."]}),(0,r.jsx)("p",{children:"All those fields will be included in the custom attributes of the evaluation context."}),(0,r.jsx)("p",{children:(0,r.jsxs)(t.em,{children:["If in the evaluation context you have a field with the same name, it will be overridden by the ",(0,r.jsx)(t.code,{children:"evaluationContextEnrichment"}),"."]})}),(0,r.jsx)("p",{children:(0,r.jsxs)(t.em,{children:["If you have a key ",(0,r.jsx)(t.code,{children:"env"})," in your ",(0,r.jsx)(t.code,{children:"EvaluationContextEnrichment"})," and you also have the ",(0,r.jsx)(t.code,{children:"Environment"})," set in your configuration, the ",(0,r.jsx)(t.code,{children:"env"})," key from ",(0,r.jsx)(t.code,{children:"EvaluationContextEnrichment"})," will be ignored."]})})," Default: ",(0,r.jsx)(t.strong,{children:"nil"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"PersistentFlagConfigurationFile"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(optional)"})," If set GO Feature Flag will store the flags configuration in this file to be able to serve the flags even if none of the retrievers is available during starting time.",(0,r.jsx)("br",{}),"By default, the flag configuration is not persisted and stays on the retriever system. By setting a file here, you ensure that GO Feature Flag will always start with a configuration but which can be out-dated.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsxs)(t.em,{children:["(example: ",(0,r.jsx)(t.code,{children:"/tmp/goff_persist_conf.yaml"}),")"]})]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'ffclient.Init(ffclient.Config{ \n    PollingInterval:   3 * time.Second,\n\t  LeveledLogger:   slog.Default(),\n    Context:        context.Background(),\n    Environment:    os.Getenv("MYAPP_ENV"),\n    Retriever:      &fileretriever.Retriever{Path: "testdata/flag-config.goff.yaml"},\n    FileFormat:     "yaml",\n    Notifiers: []notifier.Notifier{\n        &webhooknotifier.Notifier{\n            EndpointURL: " https://example.com/hook",\n            Secret:     "Secret",\n            Meta: map[string]string{\n                "app.name": "my app",\n            },\n        },\n    },\n    DataExporter: ffclient.DataExporter{\n        FlushInterval:   10 * time.Second,\n        MaxEventInMemory: 1000,\n        Exporter: &file.Exporter{\n            OutputDir: "/output-data/",\n        },\n    },\n    StartWithRetrieverError: false,\n})\n'})}),"\n",(0,r.jsx)(t.h2,{id:"multiple-configuration-flag-files",children:"Multiple configuration flag files"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"go-feature-flag"})," comes ready to use out of the box by calling the ",(0,r.jsx)(t.code,{children:"Init"})," function and, it will be available everywhere.",(0,r.jsx)(t.br,{}),"\n","Since most applications will want to use a single central flag configuration, the package provides this. It is similar to a singleton."]}),"\n",(0,r.jsxs)(t.p,{children:["In all the examples above, they demonstrate using ",(0,r.jsx)(t.code,{children:"go-feature-flag"})," in its singleton style approach."]}),"\n",(0,r.jsx)(t.h3,{id:"working-with-multiple-go-feature-flag",children:"Working with multiple go-feature-flag"}),"\n",(0,r.jsxs)(t.p,{children:["You can also create many ",(0,r.jsx)(t.code,{children:"go-feature-flag"})," clients to use in your application."]}),"\n",(0,r.jsxs)(t.p,{children:["Each will have its own unique set of configurations and flags. Each can read from a different config file and from different places.",(0,r.jsx)(t.br,{}),"\n","All the functions that ",(0,r.jsx)(t.code,{children:"go-feature-flag"})," package supports are mirrored as methods on a ",(0,r.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#GoFeatureFlag",children:(0,r.jsx)(t.code,{children:"GoFeatureFlag"})}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"example-1",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",metastring:"showLineNumbers",children:'x, err := ffclient.New(Config{ Retriever: &httpretriever.Retriever{{URL: "http://example.com/flag-config.goff.yaml",}})\ndefer x.Close()\n\ny, err := ffclient.New(Config{ Retriever: &httpretriever.Retriever{{URL: "http://example.com/test2.goff.yaml",}})\ndefer y.Close()\n\nuser := ffcontext.NewEvaluationContext("user-key")\nx.BoolVariation("test-flag", user, false)\ny.BoolVariation("test-flag", user, false)\n\n// ...\n'})}),"\n",(0,r.jsxs)(t.p,{children:["When working with multiple ",(0,r.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#GoFeatureFlag",children:(0,r.jsx)(t.code,{children:"GoFeatureFlag"})}),", it is up to the user to keep track of different ",(0,r.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#GoFeatureFlag",children:(0,r.jsx)(t.code,{children:"GoFeatureFlag"})})," instances."]}),"\n",(0,r.jsx)(t.h2,{id:"offline-mode",children:"Offline mode"}),"\n",(0,r.jsxs)(t.p,{children:["In some situations, you might want to stop making remote calls and fall back to default values for your feature flags.",(0,r.jsx)(t.br,{}),"\n","For example, if your software is both cloud-hosted and distributed to customers to run on-premise, it might make sense\nto fall back to defaults when running on-premise."]}),"\n",(0,r.jsxs)(t.p,{children:["You can do this by setting ",(0,r.jsx)(t.code,{children:"Offline"})," mode in the client's Config."]}),"\n",(0,r.jsx)(t.h2,{id:"advanced-configuration",children:"Advanced configuration"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/go_module/data_collection/",children:"Export data from your flag variations"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/go_module/notifier/",children:"Be notified when your flags change"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>s});var n=i(96540);const r={},o=n.createContext(r);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);
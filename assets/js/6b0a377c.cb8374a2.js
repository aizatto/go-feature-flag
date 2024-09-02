"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[43565],{51721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=n(85893),a=n(11151);const r={sidebar_position:20,description:"How to select who should have the flag activated."},i="Performing flag evaluations",o={id:"go_module/target_user",title:"Performing flag evaluations",description:"How to select who should have the flag activated.",source:"@site/versioned_docs/version-v1.33.0/go_module/target_user.md",sourceDirName:"go_module",slug:"/go_module/target_user",permalink:"/docs/go_module/target_user",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.33.0/go_module/target_user.md",tags:[],version:"v1.33.0",sidebarPosition:20,frontMatter:{sidebar_position:20,description:"How to select who should have the flag activated."},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/go_module/configuration"},next:{title:"Retrieve your feature flags configuration",permalink:"/docs/go_module/store_file/"}},l={},d=[{value:"Users",id:"users",level:2},{value:"Anonymous users",id:"anonymous-users",level:2},{value:"Variation",id:"variation",level:2},{value:"Variation details",id:"variation-details",level:2},{value:"Reason",id:"reason",level:3},{value:"Get all flags for a specific user",id:"get-all-flags-for-a-specific-user",level:2}];function h(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"performing-flag-evaluations",children:"Performing flag evaluations"})}),"\n",(0,s.jsx)(t.h2,{id:"users",children:"Users"}),"\n",(0,s.jsxs)(t.p,{children:["Feature flag targeting and rollouts are all determined by the user you pass to your ",(0,s.jsx)(t.strong,{children:"Variation"})," calls.\nThe SDK defines a ",(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/ffuser#User",children:(0,s.jsx)(t.code,{children:"User"})})," struct and a ",(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/ffuser#UserBuilder",children:(0,s.jsx)(t.code,{children:"UserBuilder"})})," to make this easy."]}),"\n",(0,s.jsx)(t.p,{children:"Here's an example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",metastring:"showLineNumbers",children:'// User with only a key\nuser1 := ffcontext.NewEvaluationContext("user1-key")\n\n// User with a key plus other attributes\nuser2 = ffcontext.NewEvaluationContextBuilder("user2-key").\n AddCustom("firstname", "John").\n AddCustom("lastname", "Doe").\n AddCustom("email", "john.doe@example.com").\n Build()\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The most common attribute is the user's key and ",(0,s.jsx)(t.strong,{children:"this is the only mandatory user attribute."}),(0,s.jsx)(t.br,{}),"\n","The key should also uniquely identify each user. You can use a primary key, an e-mail address, or a hash, as long as the same user always has the same key.",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:"We recommend using a hash if possible."}),(0,s.jsx)(t.br,{}),"\n","All the other attributes are optional."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Custom attributes are one of the most powerful features.",(0,s.jsx)(t.br,{}),"\n","They let you have rules on these attributes and target users according to any data that you want."]})}),"\n",(0,s.jsx)(t.h2,{id:"anonymous-users",children:"Anonymous users"}),"\n",(0,s.jsx)(t.p,{children:"You can also distinguish logged-in users from anonymous users in the SDK, as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",metastring:"showLineNumbers",children:'// User with only a key\nuser1 := ffcontext.NewAnonymousEvaluationContext("user1-key")\n\n// User with a key plus other attributes\nuser2 = ffcontext.NewEvaluationContextBuilder("user2-key").\n  Anonymous(true).\n  AddCustom("firstname", "John").\n  AddCustom("lastname", "Doe").\n  AddCustom("email", "john.doe@example.com").\n  Build()\n'})}),"\n",(0,s.jsx)(t.p,{children:"You will still need to generate a unique key for anonymous users. Session IDs or UUIDs work best for this."}),"\n",(0,s.jsx)(t.p,{children:"Anonymous users work just like regular users, this information just helps you to add a rule to target a specific population."}),"\n",(0,s.jsx)(t.h2,{id:"variation",children:"Variation"}),"\n",(0,s.jsxs)(t.p,{children:["The Variation methods determine whether a flag is enabled or not for a specific user.\nThere is a Variation method for each type:",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#BoolVariation",children:(0,s.jsx)(t.code,{children:"BoolVariation"})})," , ",(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#IntVariation",children:(0,s.jsx)(t.code,{children:"IntVariation"})}),"\n, ",(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#Float64Variation",children:(0,s.jsx)(t.code,{children:"Float64Variation"})}),"\n, ",(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#StringVariation",children:(0,s.jsx)(t.code,{children:"StringVariation"})}),"\n, ",(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#JSONArrayVariation",children:(0,s.jsx)(t.code,{children:"JSONArrayVariation"})}),"\n, ",(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#JSONVariation",children:(0,s.jsx)(t.code,{children:"JSONVariation"})})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",metastring:"showLineNumbers",children:'result, _ := ffclient.BoolVariation("your.feature.key", user, false)\n\n// result is now true or false depending on the setting of\n// this boolean feature flag\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Variation methods take the feature ",(0,s.jsx)(t.strong,{children:"flag key"}),", a ",(0,s.jsx)(t.strong,{children:"user"}),", and a ",(0,s.jsx)(t.strong,{children:"default value"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The default value is returned when an error is encountered ",(0,s.jsxs)(t.em,{children:["(",(0,s.jsx)(t.code,{children:"ffclient"})," not initialized, variation with wrong type, flag does not exist ...)."]})]}),"\n",(0,s.jsxs)(t.p,{children:["In the example, if the flag ",(0,s.jsx)(t.code,{children:"your.feature.key"})," does not exist, result will be ",(0,s.jsx)(t.code,{children:"false"}),".",(0,s.jsx)(t.br,{}),"\n","Not that you will always have a usable value in the result."]}),"\n",(0,s.jsx)(t.h2,{id:"variation-details",children:"Variation details"}),"\n",(0,s.jsxs)(t.p,{children:["If you want more information about your flag evaluation, you can use the variation details functions.\nThere is a Variation method for each type:",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#BoolVariationDetails",children:(0,s.jsx)(t.code,{children:"BoolVariationDetails"})}),"\n, ",(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#IntVariationDetails",children:(0,s.jsx)(t.code,{children:"IntVariation"})}),"\n, ",(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#Float64VariationDetails",children:(0,s.jsx)(t.code,{children:"Float64VariationDetails"})}),"\n, ",(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#StringVariationDetails",children:(0,s.jsx)(t.code,{children:"StringVariationDetails"})}),"\n, ",(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#JSONArrayVariationDetails",children:(0,s.jsx)(t.code,{children:"JSONArrayVariationDetails"})}),"\n, ",(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#JSONVariationDetails",children:(0,s.jsx)(t.code,{children:"JSONVariationDetails"})})]}),"\n",(0,s.jsxs)(t.p,{children:["You can use these functions the same way as the other variation functions BUT it will return a generic object ",(0,s.jsx)(t.code,{children:"model.VariationResult[<type>]"})," containing your result.",(0,s.jsx)(t.br,{}),"\n","This object will contain these fields:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"field"}),(0,s.jsx)(t.th,{children:"type"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"TrackEvents"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"bool"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"true"})," if this evaluation was tracked."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"VariationType"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:"The name of the variation used to get this value."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Failed"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"bool"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"true"})," if an error occurred during the evaluation."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Version"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsxs)(t.td,{children:["The ",(0,s.jsx)(t.strong,{children:"version"})," of the flag used to do the evaluation."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Reason"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"flag.ResolutionReason"})}),(0,s.jsx)(t.td,{children:"The reason used for this evaluation."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ErrorCode"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"flag.ErrorCode"})}),(0,s.jsx)(t.td,{children:"Error code in case we have an error."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Value"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<type T>"})}),(0,s.jsx)(t.td,{children:"Value of the flag in the expected type."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Cacheable"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"bool"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"true"})," if it can be cached (by user or for everyone depending on the reason)."]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"reason",children:"Reason"}),"\n",(0,s.jsx)(t.p,{children:"GO Feature Flag can furnish you with diverse reasons in the variation details, giving you insight into the evaluation process of your feature flag.\nHere is the full list of reason available:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Reason"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"TARGETING_MATCH"})}),(0,s.jsxs)(t.td,{children:["The resolved value was the result of a dynamic evaluation, such as a rule or specific user-targeting. ",(0,s.jsx)(t.em,{children:"(ex: serve variation A if username is Thomas)"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"TARGETING_MATCH_SPLIT"})}),(0,s.jsxs)(t.td,{children:["The resolved value was the result of a dynamic evaluation, that is serving a percentage. ",(0,s.jsx)(t.em,{children:"(ex: serve variation A to 10% of users with the username Thomas)"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"SPLIT"})}),(0,s.jsxs)(t.td,{children:["The resolved value was the result of pseudorandom assignment. ",(0,s.jsx)(t.em,{children:"(ex: serve variation A to 10% of all the users.)"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"DISABLED"})}),(0,s.jsx)(t.td,{children:"Indicates that the feature flag is disabled"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"DEFAULT"})}),(0,s.jsx)(t.td,{children:"The resolved value was the result of the flag being disabled in the management system."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"STATIC"})}),(0,s.jsxs)(t.td,{children:["Indicates that the feature flag evaluated to a static value, for example, the default value for the flag. ",(0,s.jsx)(t.em,{children:"(Note: Typically means that no dynamic evaluation has been executed for the feature flag)"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UNKNOWN"})}),(0,s.jsx)(t.td,{children:"Indicates that an unknown issue occurred during evaluation"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ERROR"})}),(0,s.jsxs)(t.td,{children:["Indicates that an error occurred during evaluation ",(0,s.jsxs)(t.em,{children:["(Note: The ",(0,s.jsx)(t.code,{children:"errorCode"})," field contains the details of this error)"]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"OFFLINE"})}),(0,s.jsx)(t.td,{children:"Indicates that GO Feature Flag is currently evaluating in offline mode."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"get-all-flags-for-a-specific-user",children:"Get all flags for a specific user"}),"\n",(0,s.jsx)(t.p,{children:"If you want to send the information about a specific user to the front-end, you will need a snapshot of all the flags of this user at a specific time."}),"\n",(0,s.jsxs)(t.p,{children:["The method ",(0,s.jsx)(t.code,{children:"ffclient.AllFlagsState"})," returns a snapshot of flag values and metadata.",(0,s.jsx)(t.br,{}),"\n","The function is evaluating all available flags for the user and returns a ",(0,s.jsx)(t.code,{children:"flagstate.AllFlagsState"})," object containing the information you need."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",metastring:"showLineNumbers",children:'user := ffcontext.NewEvaluationContext("example")\n// AllFlagsState will give you the value for all the flags available.\nallFlagsState := ffclient.AllFlagsState(u)\n\n// If you want to send it to the front-end you can Marshal it by calling MarshalJSON()\nforFE, err := allFlagsState.MarshalJSON()\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"MarshalJSON()"})," function will return something like below, that can be directly used by your front-end application."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:"showLineNumbers",children:'{\n    "flags": {\n        "test-flag0": {\n            "value": true,\n            "timestamp": 1622209328,\n            "variationType": "True",\n            "trackEvents": true\n        },\n        "test-flag1": {\n            "value": "true",\n            "timestamp": 1622209328,\n            "variationType": "True",\n            "trackEvents": true\n        },\n        "test-flag2": {\n            "value": 1,\n            "timestamp": 1622209328,\n            "variationType": "True",\n            "trackEvents": true\n        },\n        "test-flag3": {\n            "value": [\n                "yo",\n                "ya"\n            ],\n            "timestamp": 1622209328,\n            "variationType": "True",\n            "trackEvents": true\n        },\n        "test-flag4": {\n            "value": {\n                "test": "yo"\n            },\n            "timestamp": 1622209328,\n            "variationType": "True",\n            "trackEvents": true\n        },\n        "test-flag5": {\n            "value": 1.1,\n            "timestamp": 1622209328,\n            "variationType": "True",\n            "trackEvents": false\n        }\n    },\n    "valid": true\n}\n'})}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsx)(t.p,{children:"There is no tracking done when evaluating all the flag at once."})})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var s=n(67294);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
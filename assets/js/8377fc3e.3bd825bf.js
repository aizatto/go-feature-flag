"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[53383],{55111:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>C,contentTitle:()=>b,default:()=>h,frontMatter:()=>x,metadata:()=>A,toc:()=>y});const A=JSON.parse('{"id":"configure_flag/export_flags_usage","title":"How to export evaluation data","description":"How to export evaluation data?","source":"@site/versioned_docs/version-v1.36.1/configure_flag/export_flags_usage.mdx","sourceDirName":"configure_flag","slug":"/configure_flag/export_flags_usage","permalink":"/docs/v1.36.1/configure_flag/export_flags_usage","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.36.1/configure_flag/export_flags_usage.mdx","tags":[],"version":"v1.36.1","sidebarPosition":40,"frontMatter":{"sidebar_position":40,"description":"How to export evaluation data?"},"sidebar":"tutorialSidebar","previous":{"title":"Scheduled rollout","permalink":"/docs/v1.36.1/configure_flag/rollout/scheduled"},"next":{"title":"SDKs","permalink":"/docs/v1.36.1/openfeature_sdk/sdk"}}');var s=o(74848),n=o(28453),t=o(84576),r=o(24285),i=o(3226),g=o(18641),l=o(94078),c=o(15573),d=o(86289),p=o(23632),u=o(88944),f=o(79777),m=o(61658);const x={sidebar_position:40,description:"How to export evaluation data?"},b="How to export evaluation data",C={},y=[{value:"Available exporters",id:"available-exporters",level:2}];function B(e){const a={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.header,{children:(0,s.jsx)(a.h1,{id:"how-to-export-evaluation-data",children:"How to export evaluation data"})}),"\n",(0,s.jsx)(a.p,{children:"GO Feature Flag allows for the collection of flag usage data.\nDuring flag evaluation, the key, flag variation and other non-sensitive information used are collected and cached for a\nconfigurable period of time."}),"\n",(0,s.jsxs)(a.p,{children:["The usage data is then written to a file in a chosen format (",(0,s.jsx)(a.code,{children:"parquet"}),", ",(0,s.jsx)(a.code,{children:"JSON"})," or ",(0,s.jsx)(a.code,{children:"CSV"}),") at a specified interval and\nexported to your desired location. This provides a single source for easy processing of the data. The feature can be\nconfigured with options for file format, flush interval, and file location."]}),"\n",(0,s.jsx)(a.p,{children:"To use, simply configure and use the feature flag as normal, and analyze the collected usage data."}),"\n",(0,s.jsx)(a.h2,{id:"available-exporters",children:"Available exporters"}),"\n",(0,s.jsx)(t.C,{cards:[{logoImg:d.A,title:"AWS S3",content:(0,s.jsx)(r.i,{relayproxyLink:"../relay_proxy/configure_relay_proxy#s3-1",goModuleLink:"../go_module/data_collection/s3"})},{logoImg:u.A,title:"AWS SQS",content:(0,s.jsx)(r.i,{relayproxyLink:"../relay_proxy/configure_relay_proxy#sqs",goModuleLink:"../go_module/data_collection/sqs"})},{logoImg:f.A,title:"Kafka",content:(0,s.jsx)(r.i,{relayproxyLink:"../relay_proxy/configure_relay_proxy#kafka",goModuleLink:"../go_module/data_collection/kafka"})},{logoImg:l.A,title:"Google Storage",content:(0,s.jsx)(r.i,{relayproxyLink:"../relay_proxy/configure_relay_proxy#google-storage-1",goModuleLink:"../go_module/data_collection/google_cloud_storage"})},{logoImg:m.A,title:"Google PubSub",content:(0,s.jsx)(r.i,{relayproxyLink:"../relay_proxy/configure_relay_proxy#google-pubsub",goModuleLink:"../go_module/data_collection/google_pubsub"})},{logoImg:p.A,title:"Webhook",content:(0,s.jsx)(r.i,{relayproxyLink:"../relay_proxy/configure_relay_proxy#webhook",goModuleLink:"../go_module/data_collection/webhook"})},{logoImg:g.A,title:"Local File",content:(0,s.jsx)(r.i,{relayproxyLink:"../relay_proxy/configure_relay_proxy#file-1",goModuleLink:"../go_module/data_collection/file"})},{logoImg:c.A,title:"Webhook",content:(0,s.jsx)(r.i,{relayproxyLink:"../relay_proxy/configure_relay_proxy#log",goModuleLink:"../go_module/data_collection/log"})},{logoImg:i.A,title:"Custom ...",content:(0,s.jsx)(r.i,{goModuleLink:"../go_module/data_collection/custom"})}]})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(B,{...e})}):B(e)}},84576:(e,a,o)=>{o.d(a,{C:()=>l});var A=o(96540),s=o(28774);const n={card:"card_T8mn",link:"link__uSU",header:"header_EM7g",name:"name_PBEk",message:"message_hSnX",badgeSection:"badgeSection_IiLW",badge:"badge_dpyY",badgeInfo:"badgeInfo_BNxt",badgeWarning:"badgeWarning_s94M",socialIcon:"socialIcon_AyL5",logoImg:"logoImg_jwCD"};var t=o(20053),r=o(5556),i=o.n(r),g=o(74848);function l(e){const a=e.cards.map(((e,a)=>(0,A.createElement)(c,{...e,key:a})));return(0,g.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 xl:grid-cols-3",children:a})}function c(e){return(0,g.jsx)(s.A,{to:e.docLink,className:n.link,children:(0,g.jsxs)("div",{className:n.card,children:[(0,g.jsx)("div",{className:n.header,children:(0,g.jsxs)("span",{className:n.socialIcon,children:[e.logoCss&&(0,g.jsx)("i",{className:e.logoCss}),e.logoImg&&(0,g.jsx)("img",{src:e.logoImg,className:n.logoImg})]})}),(0,g.jsx)("div",{children:(0,g.jsx)("p",{className:n.name,children:e.title})}),(0,g.jsx)("p",{className:n.message,children:e.content}),(0,g.jsxs)("div",{className:n.badgeSection,children:[e.badges&&e.badges.map(((e,a)=>(0,g.jsx)("span",{className:(0,t.A)(n.badge,n.badgeInfo),children:e},e))),e.warningBadges&&e.warningBadges.map(((e,a)=>(0,g.jsx)("span",{className:(0,t.A)(n.badge,n.badgeWarning),children:e},e)))]})]})})}l.prototype={cards:i().array.isRequired},c.propTypes={title:i().string.isRequired,badges:i().array,warningBadges:i().array,logoCss:i().string,logoImg:i().string,docLink:i().string}},24285:(e,a,o)=>{o.d(a,{i:()=>i});o(96540);var A=o(5556),s=o.n(A),n=o(28774);const t={button:"button_WfGi",linkBox:"linkBox_yNIn"};var r=o(74848);function i(e){return(0,r.jsxs)("div",{className:t.linkBox,children:[e.relayproxyLink&&(0,r.jsx)(n.A,{to:e.relayproxyLink,children:(0,r.jsxs)("button",{className:t.button,children:[(0,r.jsx)("i",{className:"fa-solid fa-server"})," Configure the Relay Proxy"]})}),e.goModuleLink&&(0,r.jsx)(n.A,{to:e.goModuleLink,children:(0,r.jsxs)("button",{className:t.button,children:[(0,r.jsx)("i",{className:"devicon-go-original-wordmark"})," Configure the GO Module"]})})]})}i.prototype={goModuleLink:s().array,relayproxyLink:s().array}},3226:(e,a,o)=>{o.d(a,{A:()=>A});const A="data:image/png;base64,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"},18641:(e,a,o)=>{o.d(a,{A:()=>A});const A=o.p+"assets/images/file-5abdfb9f711f32554b630be7a299c2a6.png"},94078:(e,a,o)=>{o.d(a,{A:()=>A});const A=o.p+"assets/images/google-ae727253732762af397d7eea1278f372.png"},79777:(e,a,o)=>{o.d(a,{A:()=>A});const A=o.p+"assets/images/kafka-ee9ff3b715fbe63dd282ef284ce752a5.png"},15573:(e,a,o)=>{o.d(a,{A:()=>A});const A=o.p+"assets/images/log-36f8c60eb626d8d51f0254752f22e300.png"},61658:(e,a,o)=>{o.d(a,{A:()=>A});const A=o.p+"assets/images/pubsub-82aa4b4480eb42e031c603d60d3a5248.png"},86289:(e,a,o)=>{o.d(a,{A:()=>A});const A="data:image/png;base64,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"},88944:(e,a,o)=>{o.d(a,{A:()=>A});const A="data:image/png;base64,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"},23632:(e,a,o)=>{o.d(a,{A:()=>A});const A=o.p+"assets/images/webhook-d76efdb9a6df32fc3dc653a1d61e7a89.png"},28453:(e,a,o)=>{o.d(a,{R:()=>t,x:()=>r});var A=o(96540);const s={},n=A.createContext(s);function t(e){const a=A.useContext(n);return A.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),A.createElement(n.Provider,{value:a},e.children)}}}]);
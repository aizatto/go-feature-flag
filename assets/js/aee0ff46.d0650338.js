"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[81516],{30734:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"go_module/notifier/slack","title":"Slack Notifier","description":"The Slack notifier allows you to get notification on your favorite slack channel when an instance of go-feature-flag is detecting changes in the configuration file.","source":"@site/versioned_docs/version-v1.34.2/go_module/notifier/slack.md","sourceDirName":"go_module/notifier","slug":"/go_module/notifier/slack","permalink":"/docs/v1.34.2/go_module/notifier/slack","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.34.2/go_module/notifier/slack.md","tags":[],"version":"v1.34.2","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Notify flag changes","permalink":"/docs/v1.34.2/go_module/notifier/"},"next":{"title":"Webhook Notifier","permalink":"/docs/v1.34.2/go_module/notifier/webhook"}}');var t=i(74848),s=i(28453);const r={sidebar_position:1},c="Slack Notifier",l={},a=[{value:"Configure Slack Notification",id:"configure-slack-notification",level:2},{value:"Configuration fields",id:"configuration-fields",level:3}];function d(e){const o={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"slack-notifier",children:"Slack Notifier"})}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.strong,{children:"Slack"})," notifier allows you to get notification on your favorite slack channel when an instance of ",(0,t.jsx)(o.code,{children:"go-feature-flag"})," is detecting changes in the configuration file."]}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("img",{src:"/docs/notifier/slack_notification.png"})}),"\n",(0,t.jsx)(o.h2,{id:"configure-slack-notification",children:"Configure Slack Notification"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["First, you need to create an incoming webhook on your slack instance.",(0,t.jsx)(o.br,{}),"\n",(0,t.jsxs)(o.em,{children:["You can follow this ",(0,t.jsx)(o.a,{href:"https://api.slack.com/messaging/webhooks#getting_started",children:"documentation to see how to do it"})]})]}),"\n",(0,t.jsxs)(o.li,{children:["Copy your webhook URL.",(0,t.jsx)(o.br,{}),"\n","It should look like: ",(0,t.jsx)(o.code,{children:"https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX"}),"."]}),"\n",(0,t.jsx)(o.li,{children:"In your init method add a slack notifier"}),"\n"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",metastring:"{5}showLineNumbers",children:'ffclient.Config{ \n    // ...\n    Notifiers: []notifier.Notifier{\n        &slacknotifier.Notifier{\n            SlackWebhookURL: "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX",\n        },\n        // ...\n    },\n}\n'})}),"\n",(0,t.jsx)(o.h3,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Field"}),(0,t.jsx)(o.th,{children:"Description"})]})}),(0,t.jsx)(o.tbody,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:(0,t.jsx)(o.code,{children:"SlackWebhookURL"})}),(0,t.jsx)(o.td,{children:"The complete URL of your incoming webhook configured in Slack."})]})})]})]})}function h(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,o,i)=>{i.d(o,{R:()=>r,x:()=>c});var n=i(96540);const t={},s=n.createContext(t);function r(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);
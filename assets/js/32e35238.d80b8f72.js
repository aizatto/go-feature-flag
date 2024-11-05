"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[58120],{2642:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"go_module/notifier/discord","title":"Discord Notifier","description":"The discord notifier allows to get notified on your favorite discord channel when an instance of go-feature-flag is","source":"@site/docs/go_module/notifier/discord.md","sourceDirName":"go_module/notifier","slug":"/go_module/notifier/discord","permalink":"/docs/next/go_module/notifier/discord","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/docs/go_module/notifier/discord.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"Slack Notifier","permalink":"/docs/next/go_module/notifier/slack"},"next":{"title":"Webhook Notifier","permalink":"/docs/next/go_module/notifier/webhook"}}');var t=i(74848),s=i(28453);const r={sidebar_position:10},d="Discord Notifier",c={},a=[{value:"Configure Discord Notifications",id:"configure-discord-notifications",level:2},{value:"<strong>Configuration fields</strong>",id:"configuration-fields",level:2}];function l(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"discord-notifier",children:"Discord Notifier"})}),"\n",(0,t.jsxs)(o.p,{children:["The discord notifier allows to get notified on your favorite discord channel when an instance of ",(0,t.jsx)(o.code,{children:"go-feature-flag"})," is\ndetecting changes in the configuration of your flags."]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Discord Notification",src:i(16743).A+"",width:"504",height:"389"})}),"\n",(0,t.jsx)(o.h2,{id:"configure-discord-notifications",children:"Configure Discord Notifications"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"Connect to your discord account and go on the channel where you want to send the notifications."}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"Go on the settings menu of your channel."}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Discord Config",src:i(66060).A+"",width:"270",height:"81"})}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:['Under your channel\u2019s settings, go to the "Integrations" section and create a new webhook. To create it, please follow\nthe ',(0,t.jsx)(o.a,{href:"https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks",children:"official documentation"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"Copy the webhook URL"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Discord WebHook",src:i(61333).A+"",width:"708",height:"188"})}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"Now you can configure your notifier"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:'err := ffclient.Init(ffclient.Config\n{\n    // ...\n    Notifiers: []notifier.Notifier{\n        &discordnotifier.Notifier{\n            DiscordWebhookURL: "https://discord.com/api/webhooks/yyyy/xxxxxxx",\n        },\n    },\n})\n'})}),"\n",(0,t.jsx)(o.h2,{id:"configuration-fields",children:(0,t.jsx)(o.strong,{children:"Configuration fields"})}),"\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:(0,t.jsx)(o.strong,{children:"Field"})}),(0,t.jsx)(o.th,{children:(0,t.jsx)(o.strong,{children:"Description"})})]})}),(0,t.jsx)(o.tbody,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:(0,t.jsx)(o.code,{children:"DiscordWebhookURL"})}),(0,t.jsx)(o.td,{children:"The complete URL of your discord webhook."})]})})]})]})}function h(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},16743:(e,o,i)=>{i.d(o,{A:()=>n});const n=i.p+"assets/images/discord1-ea5e47214cd98bff95d8755e8db4da00.png"},66060:(e,o,i)=>{i.d(o,{A:()=>n});const n=i.p+"assets/images/discord2-1077decdaebff0ed3204ddd3ba552f50.png"},61333:(e,o,i)=>{i.d(o,{A:()=>n});const n=i.p+"assets/images/discord3-dac3ede11eb3537a2a811f877ee7fc6b.png"},28453:(e,o,i)=>{i.d(o,{R:()=>r,x:()=>d});var n=i(96540);const t={},s=n.createContext(t);function r(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);
"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[203],{81295:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"relay_proxy/deploy_relay_proxy","title":"Deployment","description":"Deploy the relay proxy.","source":"@site/versioned_docs/version-v1.35.0/relay_proxy/deploy_relay_proxy.md","sourceDirName":"relay_proxy","slug":"/relay_proxy/deploy_relay_proxy","permalink":"/docs/v1.35.0/relay_proxy/deploy_relay_proxy","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.35.0/relay_proxy/deploy_relay_proxy.md","tags":[],"version":"v1.35.0","sidebarPosition":70,"frontMatter":{"sidebar_position":70,"title":"Deployment","description":"Deploy the relay proxy."},"sidebar":"tutorialSidebar","previous":{"title":"API endpoints","permalink":"/docs/v1.35.0/relay_proxy/relay_proxy_endpoints"},"next":{"title":"Monitoring / Tracing","permalink":"/docs/v1.35.0/relay_proxy/monitor_relay_proxy"}}');var t=a(74848),l=a(28453);const o={sidebar_position:70,title:"Deployment",description:"Deploy the relay proxy."},i="Deploy the relay proxy",s={},d=[{value:"Deploy in Kubernetes using Helm",id:"deploy-in-kubernetes-using-helm",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Step 1: Prepare and Configure the Repository",id:"step-1-prepare-and-configure-the-repository",level:3},{value:"Step 2: Install the Chart",id:"step-2-install-the-chart",level:3},{value:"Step 3: Verify The Chart Installation",id:"step-3-verify-the-chart-installation",level:3},{value:"Deploy as AWS Lambda",id:"deploy-as-aws-lambda",level:2}];function p(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"deploy-the-relay-proxy",children:"Deploy the relay proxy"})}),"\n",(0,t.jsx)(n.h2,{id:"deploy-in-kubernetes-using-helm",children:"Deploy in Kubernetes using Helm"}),"\n",(0,t.jsxs)(n.p,{children:["The relay proxy can be deployed in Kubernetes using a helm chart.",(0,t.jsx)(n.br,{}),"\n","Helm is an invaluable tool for configuring and deploying applications to a Kubernetes environment."]}),"\n",(0,t.jsxs)(n.p,{children:["Below are the steps for installing a Helm Chart from a ",(0,t.jsx)(n.strong,{children:"GO Feature Flag"})," Helm repository."]}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Access to a Kubernetes cluster"}),"\n",(0,t.jsx)(n.li,{children:"Helm CLI installed on the client machine"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"step-1-prepare-and-configure-the-repository",children:"Step 1: Prepare and Configure the Repository"}),"\n",(0,t.jsx)(n.p,{children:"Add the repository to Helm with the Helm repository add command and provide a name and the repository URL. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"helm repo add go-feature-flag https://charts.gofeatureflag.org/\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-2-install-the-chart",children:"Step 2: Install the Chart"}),"\n",(0,t.jsxs)(n.p,{children:["Install the Helm Chart with the Helm install command and provide the custom repository name, the chart name and any necessary values files.",(0,t.jsx)(n.br,{}),"\n","You can look at the ",(0,t.jsx)(n.a,{href:"https://github.com/thomaspoignant/go-feature-flag/blob/main/cmd/relayproxy/helm-charts/relay-proxy/README.md",children:"helm doc"})," to know exactly what you can change in the values.yaml file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"helm install go-feature-flag/relay-proxy -f values.yaml\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-3-verify-the-chart-installation",children:"Step 3: Verify The Chart Installation"}),"\n",(0,t.jsx)(n.p,{children:"Verify the Helm Chart installation with the Helm list command. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"helm list\n"})}),"\n",(0,t.jsx)(n.h2,{id:"deploy-as-aws-lambda",children:"Deploy as AWS Lambda"}),"\n",(0,t.jsxs)(n.p,{children:["The GO Feature Flag relay proxy can easily be launched as an AWS Lambda function.\nTo do this, simply set the ",(0,t.jsx)(n.code,{children:"startAsAwsLambda"})," option in your configuration file to ",(0,t.jsx)(n.code,{children:"true"}),", like so:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"# ...\nstartAsAwsLambda: true\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once you've updated your configuration file, you can deploy your function in AWS and configure it to be accessible\nvia HTTP. This can be achieved by creating an API Gateway or an Application Load Balancer (ALB) and linking it to\nyour Lambda function."}),"\n",(0,t.jsx)(n.p,{children:"By configuring your GO Feature Flag relay proxy to run as an AWS Lambda function, you can take advantage of many\nbenefits of serverless computing, including automatic scaling, reduced infrastructure costs, and simplified\ndeployment and management."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["As part of our release process, we are building an archive ready to be deployed as AWS lambda.",(0,t.jsx)(n.br,{}),"\n","You can find it in the ",(0,t.jsx)(n.a,{href:"https://github.com/thomaspoignant/go-feature-flag/releases",children:"GitHub release page"}),",and you can use the assets named ",(0,t.jsx)(n.code,{children:"go-feature-flag-aws-lambda_<version>.zip"}),"."]})})]})}function c(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>i});var r=a(96540);const t={},l=r.createContext(t);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);
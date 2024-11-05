"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[8116],{98684:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tooling/linter","title":"Linter","description":"Lint your configuration file","source":"@site/versioned_docs/version-v1.34.3/tooling/linter.mdx","sourceDirName":"tooling","slug":"/tooling/linter","permalink":"/docs/v1.34.3/tooling/linter","draft":false,"unlisted":false,"editUrl":"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.34.3/tooling/linter.mdx","tags":[],"version":"v1.34.3","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"title":"Linter","description":"Lint your configuration file"},"sidebar":"tutorialSidebar","previous":{"title":"Custom Notifier","permalink":"/docs/v1.34.3/go_module/notifier/custom"},"next":{"title":"Auto-complete","permalink":"/docs/v1.34.3/tooling/autocomplete"}}');var a=t(74848),l=t(28453),i=t(11470),o=t(19365);const s={sidebar_position:10,title:"Linter",description:"Lint your configuration file"},u="Lint your configuration file",c={},d=[{value:"Install the linter",id:"install-the-linter",level:2},{value:"Install using Homebrew (mac and linux)",id:"install-using-homebrew-mac-and-linux",level:3},{value:"Install using Scoop (windows)",id:"install-using-scoop-windows",level:3},{value:"Install using Docker",id:"install-using-docker",level:3},{value:"Use the linter",id:"use-the-linter",level:2},{value:"Use the linter in your CI (continuous integration)",id:"use-the-linter-in-your-ci-continuous-integration",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"lint-your-configuration-file",children:"Lint your configuration file"})}),"\n",(0,a.jsxs)(n.p,{children:["Ensuring the accuracy of your configuration is vital for the ",(0,a.jsx)(n.strong,{children:"GO Feature Flag"})," to function as expected.\nThis is why we have introduced the ",(0,a.jsx)(n.code,{children:"go-feature-flag-lint"}),", a command line tool that validates whether a flag file can be parsed by ",(0,a.jsx)(n.strong,{children:"GO Feature Flag"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"We recommend you to use this command line in your CI/CD pipelines to avoid any unforeseen issues."})}),"\n",(0,a.jsx)(n.h2,{id:"install-the-linter",children:"Install the linter"}),"\n",(0,a.jsx)(n.h3,{id:"install-using-homebrew-mac-and-linux",children:"Install using Homebrew (mac and linux)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"brew tap thomaspoignant/homebrew-tap\nbrew install go-feature-flag-lint\n"})}),"\n",(0,a.jsx)(n.h3,{id:"install-using-scoop-windows",children:"Install using Scoop (windows)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"scoop bucket add org https://github.com/go-feature-flag/scoop.git\nscoop install go-feature-flag-lint\n"})}),"\n",(0,a.jsx)(n.h3,{id:"install-using-docker",children:"Install using Docker"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"docker pull thomaspoignant/go-feature-flag-lint:latest\n"})}),"\n",(0,a.jsx)(n.h2,{id:"use-the-linter",children:"Use the linter"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"./go-feature-flag-lint \\\n  --input-format=yaml \\\n  --input-file=/input/my-go-feature-flag-config.goff.yaml\n"})}),"\n",(0,a.jsx)(n.p,{children:"The command line has 2 arguments you should specify."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"param"}),(0,a.jsx)(n.th,{children:"description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"--input-file"})}),(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.strong,{children:"(mandatory)"})," The location of your configuration file."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"--input-format"})}),(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.strong,{children:"(mandatory)"})," The format of your current configuration file. ",(0,a.jsx)("br",{}),"Available formats are ",(0,a.jsx)(n.code,{children:"yaml"}),", ",(0,a.jsx)(n.code,{children:"json"}),", ",(0,a.jsx)(n.code,{children:"toml"}),"."]})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"use-the-linter-in-your-ci-continuous-integration",children:"Use the linter in your CI (continuous integration)"}),"\n",(0,a.jsxs)(n.p,{children:["You can run ",(0,a.jsx)(n.code,{children:"go-feature-flag-lint"})," directly in your CI:"]}),"\n",(0,a.jsxs)(i.A,{groupId:"code",children:[(0,a.jsx)(o.A,{value:"githubaction",label:"Github Action",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'name: "Build"\non:\n  push:\n    branches:\n      - main\n  pull_request:\n    types: [ opened, synchronize, reopened ]\n\njobs:\n  lint:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Lint the config file\n        uses: go-feature-flag/gofeatureflag-lint-action@v1\n        with:\n          flag-file: ./path/to/your/config.yaml\n          format: yaml\n\n'})})}),(0,a.jsx)(o.A,{value:"circleci",label:"CircleCi",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"version: 2.1\njobs:\n  build:\n    docker:\n     - image: cimg/base:2022.05\n\n    steps:\n      - checkout\n      - run: curl -L $(curl -s https://api.github.com/repos/thomaspoignant/go-feature-flag/releases/latest | jq -r '.assets[] | select(.name|match(\"Linux_x86_64.tar.gz$\")) | .browser_download_url' | grep 'go-feature-flag-lint') --output release.tar.gz && tar -zxvf release.tar.gz\n      - run: ./go-feature-flag-lint --input-format=yaml --input-file=flag-config.goff.yaml # please put the right file name\n"})})}),(0,a.jsx)(o.A,{value:"gitlab",label:"Gitlab",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"image: ubuntu\nlint-job:\n  stage: build\n\n  before_script:\n    - apt-get -qq update\n    - apt-get install -y jq curl\n\n  script:\n    - curl -L $(curl -s https://api.github.com/repos/thomaspoignant/go-feature-flag/releases/latest | jq -r '.assets[] | select(.name|match(\"Linux_x86_64.tar.gz$\")) | .browser_download_url' | grep 'go-feature-flag-lint') --output release.tar.gz && tar -zxvf release.tar.gz\n    - ./go-feature-flag-lint --input-format=yaml --input-file=flag-config.goff.yaml # please put the right file name\n"})})})]})]})}function f(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var l=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),a=t(18215),l=t(23104),i=t(56347),o=t(205),s=t(57485),u=t(31682),c=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=h(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[u,d]=g({queryString:t,groupId:a}),[p,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),b=(()=>{const e=u??p;return f({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),m(e)}),[d,m,l]),tabValues:l}}var m=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const n=e.currentTarget,t=s.indexOf(n),a=o[t].value;a!==r&&(u(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:l}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=p(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function w(e){const n=(0,m.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const a={},l=r.createContext(a);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);
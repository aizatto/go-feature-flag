(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[15148],{97286:(e,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>je});var s=l(96540),r=l(49785),n=l(23586);const t={flagContainer:"flagContainer_wy3i"};var i=l(20053);const o={editorInputContainer:"editorInputContainer_jqCm",editorCut:"editorCut_Erbg",error:"error_AEli",editorPlaceholder:"editorPlaceholder_MvV8",editorInput:"editorInput_WHYK",errorMessage:"errorMessage_K08I"};var c=l(10203),d=l(5556),u=l.n(d),m=l(74848);function p(e){let{label:a,displayText:l,className:s,required:n,type:t,validation:d,defaultValue:u,controlled:p=!1,disablePlaceholder:g=!1,disableInlineErr:x=!1,...h}=e;const{register:f}=(0,r.xW)();const b=f(a,{required:{value:n,message:"This field is required"},...d});return(0,m.jsxs)("div",{className:(0,i.A)(s||o.editorInputContainer),children:[(0,m.jsx)("input",{id:`${a}.input`,defaultValue:u,className:o.editorInput,type:"number"===t?"number":"text",placeholder:" ",...p?{}:b,...h}),g&&(0,m.jsx)("span",{children:l}),(0,m.jsx)("div",{className:o.editorCut}),(0,m.jsx)("label",{htmlFor:`${a}.input`,className:(0,i.A)(o.editorPlaceholder),children:l}),!x&&(0,m.jsx)(c.K,{name:a,render:v})]})}function v(e){let{message:a}=e;return(0,m.jsx)("div",{className:o.errorMessage,children:a})}p.propTypes={label:u().string.isRequired,displayText:u().string,className:u().string,required:u().bool,type:u().string,validation:u().object,defaultValue:u().any,disablePlaceholder:u().bool,disableInlineErr:u().bool,controlled:u().bool};const g={container:"container_JzDm",switch:"switch_G9oQ",r:"r_b74C",layer:"layer_jPCr",knobs:"knobs_MQYY",checkbox:"checkbox_UUwg",displayText:"displayText_acVt"};function x(e){let{label:a,displayText:l,defaultChecked:s=!1}=e;const{register:n}=(0,r.xW)();return(0,m.jsxs)("div",{className:g.container,children:[(0,m.jsx)("div",{className:(0,i.A)(g.displayText),children:l}),(0,m.jsx)("div",{children:(0,m.jsxs)("div",{className:(0,i.A)(g.switch,g.r),children:[(0,m.jsx)("input",{type:"checkbox",className:g.checkbox,...n(a),defaultChecked:s}),(0,m.jsx)("div",{className:g.knobs}),(0,m.jsx)("div",{className:g.layer})]})})]})}x.propTypes={label:u().string.isRequired,displayText:u().string,defaultChecked:u().bool};const h={selector:"selector_zSAl"};function f(e){let{title:a,content:l,label:s,required:n,controlled:t=!1,...i}=e;const{register:o}=(0,r.xW)(),c=o(s,n);return(0,m.jsx)("div",{className:h.selector,children:(0,m.jsxs)("select",{defaultValue:"0",...t?{}:c,...i,children:[(0,m.jsx)("option",{disabled:!0,defaultChecked:!0,value:null,children:a}),l.map((e=>(0,m.jsx)("option",{value:e.value,children:e.displayName},`variation_type_${e.value}_${e.displayText}`)))]})})}f.propTypes={title:u().string,content:u().array,label:u().string.isRequired,required:u().bool,controlled:u().bool};const b={buttonPlus:"buttonPlus_vxig",bg:"bg_ZMMU",variation:"variation_m8Hn",icons:"icons_NekN",icon:"icon_PBCB",targeting:"targeting_UFjj"};var j=l(58298),y=l(95293);const N={container:"container_SLwd"};function _(e){let{label:a,value:l}=e;const{register:s}=(0,r.xW)(),{colorMode:n}=(0,y.G)(),{onChange:t,onBlur:i,name:o,ref:c}=s(`${a}.value`);return(0,m.jsx)("div",{className:N.container,"data-color-mode":n,children:(0,m.jsx)(j.A,{value:l||"",language:"json",placeholder:" Please enter JSON.",padding:7,className:N.container,onChange:t,onBlur:i,name:o,ref:c,"data-color-mode":n,style:{fontFamily:"ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"}})})}_.propTypes={label:u().string.isRequired};const C=["\ud83d\udfe2","\ud83d\udfe0","\ud83d\udd34","\ud83d\udfe3","\u26aa\ufe0f","\ud83d\udd35","\u26ab\ufe0f","\ud83d\udfe1","\ud83d\udfe4"];function k(e){let{type:a,label:l}=e;const{control:s}=(0,r.xW)(),{fields:n,append:t,remove:o}=(0,r.jz)({control:s,name:l,rules:{minLength:1}}),c=e=>o(e);return(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{children:"Variations"}),(0,m.jsx)("div",{className:"grid grid-cols-12",children:n.map(((e,s)=>(0,m.jsx)(T,{type:a,label:`${l}.${s}`,index:s,remove:c,icon:C[s%C.length]},e.id)))}),(0,m.jsx)("button",{className:b.buttonPlus,onMouseDown:()=>t({}),children:(0,m.jsxs)("span",{className:"fa-stack fa-1x",children:[(0,m.jsx)("i",{className:(0,i.A)("fa-solid fa-circle fa-stack-2x",b.bg)}),(0,m.jsx)("i",{className:"fa-solid fa-plus fa-stack-1x fa-inverse"})]})})]})}function T(e){let{type:a,label:l,remove:s,index:n,icon:t}=e;const{register:o}=(0,r.xW)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:(0,i.A)("col-span-5 mb-5 pb-1",b.icons),children:[(0,m.jsx)("div",{className:b.icon,children:t}),(0,m.jsx)(p,{displayText:"Name",label:`${l}.name`,required:!0})]}),(0,m.jsx)("div",{className:(0,i.A)("col-span-6"),children:((e,a,l)=>e&&"JSON"===e.toUpperCase()?(0,m.jsx)(_,{register:l,required:!0,label:a}):(0,m.jsx)(p,{displayText:"Flag Value",label:a,type:e,required:!0}))(a,l+".value",o)}),(0,m.jsx)("div",{className:"col-span-1",children:(0,m.jsx)("button",{className:b.buttonPlus,onMouseDown:e=>{e.preventDefault(),s(n)},children:(0,m.jsxs)("span",{className:"fa-stack fa-1x",children:[(0,m.jsx)("i",{className:(0,i.A)("fa-solid fa-circle fa-stack-2x",b.bg)}),(0,m.jsx)("i",{className:"fa-solid fa-minus fa-stack-1x fa-inverse"})]})})})]})}k.propTypes={type:u().string,label:u().string.isRequired},T.propTypes={type:u().string,label:u().string.isRequired,remove:u().func.isRequired,index:u().number.isRequired,icon:u().string};const $={ruleContainer:"ruleContainer__VKe",ruleName:"ruleName_UKzC",removeButton:"removeButton_vXAy",bg:"bg_A2w1",ruleKeyValueContainer:"ruleKeyValueContainer_Ator",circle:"circle_Gmme",inputQuery:"inputQuery_ajTA",ifContainer:"ifContainer_dti2",serveTitle:"serveTitle_zpaJ",operatorContainer:"operatorContainer_fVk4",serve:"serve_AhaS",percentageInput:"percentageInput_tEMG",dateInput:"dateInput_aE4X",percentageContainer:"percentageContainer_Mre8",error:"error_izBb",rolloutDesc:"rolloutDesc_kHMj",progressiveRollout:"progressiveRollout_x7nm",progressiveRolloutPercentage:"progressiveRolloutPercentage_qZik",formError:"formError_TtL5"};var q=l(65563),A=l(89239),w=(l(81180),l(28794)),O=l(2195);function D(e){let{variations:a,label:l,selectedVar:s=""}=e;const{register:n,watch:t}=(0,r.xW)();return"percentage"!==s?null:(0,m.jsxs)("div",{className:"grid-pad grid",children:[(0,m.jsx)("div",{className:(0,i.A)("col-1-1",$.rolloutDesc),children:"A percentage rollout means that your users are divided in different buckets and you serve different variations to them. Note that a user will always have the same variation."}),(0,m.jsxs)("div",{className:"col-1-2",children:[(0,m.jsx)("ul",{className:$.percentageContainer,children:a.map(((e,a)=>(0,m.jsxs)("li",{children:[(0,m.jsx)(p,{label:`${l}.${a}.value`,required:!0,defaultValue:0,type:"number",displayText:`%  ${C[a%C.length]} ${e.name}`,className:$.percentageInput,disablePlaceholder:!0,disableInlineErr:!0,validation:{valueAsNumber:!0,required:{value:!0,message:"Percentage field is required"},min:{value:0,message:"Percentage should be between 0 and 100"},max:{value:100,message:"Percentage should be between 0 and 100"}}}),(0,m.jsx)("input",{type:"hidden",...n(`${l}.${a}.name`),value:e.name})]},`${l}.${e.name}`)))}),(0,m.jsx)(V,{percentages:t(l)})]})]})}function V(e){let{percentages:a}=e;if(!a||!(0,w.isArray)(a)||a.length<=0)return null;const l=a.filter((e=>e&&!isNaN(e.value))).reduce(((e,a)=>e+a.value),0);return l>100?(0,m.jsx)("div",{className:$.error,children:"The total percentage cannot be more than 100%"}):(0,m.jsx)(O.Progress,{percent:l})}D.propTypes={variations:u().array,label:u().string.isRequired,selectedVar:u().string},V.propTypes={percentages:u().array};var R=l(2543),S=l.n(R),E=l(59386),P=l.n(E),F=l(28774);function I(e){let{name:a,initialValue:l,label:s,variations:n,defaultDate:t}=e;const{register:o,control:c,formState:{errors:d}}=(0,r.xW)();return(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:(0,i.A)("grid",$.progressiveRollout),children:[(0,m.jsx)("div",{children:a}),(0,m.jsx)("div",{children:(0,m.jsx)(r.xI,{control:c,name:`${s}.date`,defaultValue:t,rules:{required:{value:!0,message:"Date field is required"}},render:e=>{let{field:a}=e;return(0,m.jsx)(P(),{className:$.dateInput,placeholderText:"Select date",showTimeSelect:!0,onChange:e=>a.onChange(e),selected:a.value,dateFormat:"Pp"})}})}),(0,m.jsx)("div",{children:"and serve"}),(0,m.jsx)("div",{children:(0,m.jsx)(f,{title:"Variation",content:n.map(((e,a)=>({value:e.name,displayName:`${C[a%C.length]} ${e.name}`}))).filter((e=>void 0!==e.value&&""!==e.value))||[],register:o,label:`${s}.selectedVar`,required:!0})}),(0,m.jsxs)("div",{className:$.progressiveRolloutPercentage,children:["to\xa0",(0,m.jsx)(p,{label:`${s}.percentage`,required:!0,defaultValue:l,type:"number",displayText:"%",className:$.percentageInput,disablePlaceholder:!0,disableInlineErr:!0,validation:{valueAsNumber:!0,min:{value:0,message:"Percentage should be between 0 and 100"},max:{value:100,message:"Percentage should be between 0 and 100"}}})]}),(0,m.jsx)("div",{children:(0,m.jsx)(F.A,{to:"/docs/configure_flag/rollout/progressive",target:"_blank",children:(0,m.jsx)("i",{className:"fa-regular fa-circle-question"})})})]}),(0,m.jsx)("div",{children:(0,m.jsx)(M,{errors:d,label:s})})]})}function M(e,a){const l=S().get(e,a);return S().isNil(l)?null:(0,m.jsx)("ul",{className:$.formError,children:Object.keys(l).map((e=>(0,m.jsx)("li",{children:l[e].message},e)))})}function W(e){let{variations:a,label:l,selectedVar:s}=e;if("progressive"!==s)return null;let r=new Date;return r=r.setDate(r.getDate()+10),(0,m.jsxs)("div",{className:"grid grid-pad",children:[(0,m.jsxs)("div",{className:(0,i.A)("col-1-1",$.rolloutDesc),children:["A progressive rollout allows you to increase the percentage of your flag over time.",(0,m.jsx)("br",{}),"You can select a release ramp where the percentage of your flag will increase progressively between the start date and the end date."]}),(0,m.jsx)(I,{name:"Start on the",label:`${l}.initial`,variations:a,initialValue:0,defaultDate:new Date}),(0,m.jsx)(I,{name:"Stop on the",label:`${l}.end`,variations:a,initialValue:100,defaultDate:new Date(r)})]})}I.propTypes={name:u().string,initialValue:u().number,label:u().string.isRequired,variations:u().array,defaultDate:u().any},W.propTypes={variations:u().array,label:u().string.isRequired,selectedVar:u().string};var J=l(1231),G=l(12288);function L(e){let{variations:a,label:l,isDefaultRule:n}=e;const[t,c]=(0,s.useState)({combinator:"and",rules:[{field:"",operator:"eq",value:""}]}),{register:d,watch:u,setValue:v}=(0,r.xW)(),g=[{value:"percentage",displayName:"\ufe0f\u2197\ufe0f a percentage rollout"},{value:"progressive",displayName:"\u2197\ufe0f a progressive rollout"}],x=(0,s.useCallback)((e=>{v(`${l}.query`,U(e)),c(e)}),[U,v,c,l]);return(0,m.jsxs)("div",{className:(0,i.A)("grid-pad grid",$.ruleContainer),children:[!n&&(0,m.jsx)("div",{className:"col-1-1",children:(0,m.jsx)("div",{className:"content",children:(0,m.jsx)(p,{label:`${l}.name`,displayText:"Rule name",className:(0,i.A)(o.editorInputContainer,$.ruleName),required:!0})})}),!n&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("input",{name:`${l}.query`,type:"hidden",...d(`${l}.query`)}),(0,m.jsx)(G.qy,{dnd:{...q,...A},children:(0,m.jsx)(J.oS,{fields:[],controlElements:{fieldSelector:z,valueEditor:z,operatorSelector:K,combinatorSelector:B,addGroupAction:e=>{let{handleOnClick:a}=e;return(0,m.jsx)(Q,{handleOnClick:a,variant:"group"})},addRuleAction:e=>{let{handleOnClick:a}=e;return(0,m.jsx)(Q,{handleOnClick:a,variant:"rule"})},removeGroupAction:e=>{let{handleOnClick:a}=e;return(0,m.jsx)(Y,{handleOnClick:a,variant:"group"})},removeRuleAction:e=>{let{handleOnClick:a}=e;return(0,m.jsx)(Y,{handleOnClick:a,variant:"rule"})}},resetOnFieldChange:!1,resetOnOperatorChange:!1,addRuleToNewGroups:!0,operators:Z,query:t,onQueryChange:x})})]}),(0,m.jsx)("div",{className:"col-5-12",children:(0,m.jsxs)("div",{className:(0,i.A)("content",$.serve),children:[(0,m.jsx)("div",{className:$.serveTitle,children:"Serve"}),(0,m.jsx)(f,{title:"Variation",content:function(e){const a=function(e){return e.map(((e,a)=>({value:e.name,displayName:`${C[a%C.length]} ${e.name}`}))).filter((e=>void 0!==e.value&&""!==e.value))||[]}(e);return a.length>=2?[...a,...g]:a}(a),label:`${l}.selectedVar`,required:!0})]})}),(0,m.jsxs)("div",{className:"col-1-1",children:[(0,m.jsx)(D,{selectedVar:u(`${l}.selectedVar`),variations:a,label:`${l}.percentages`}),(0,m.jsx)(W,{selectedVar:u(`${l}.selectedVar`),variations:a,label:`${l}.progressive`})]})]})}function z(e){let{handleOnChange:a,title:l,value:s,disabled:r,testID:n}=e;return(0,m.jsx)("div",{children:(0,m.jsx)(p,{"data-testid":n,value:s,label:l,displayText:l,disabled:r,controlled:!0,required:!0,onChange:e=>a(e.target.value)})})}function K(e){let{options:a,handleOnChange:l,title:r}=e;const n=(0,s.useMemo)((()=>a.map((e=>{let{name:a,label:l}=e;return{value:a,displayName:l}}))),[a]);return(0,m.jsx)(f,{content:n,controlled:!0,label:"Operator",onChange:e=>l(e.target.value),required:!1,title:r})}function B(e){let{options:a,handleOnChange:l,title:r}=e;const n=(0,s.useMemo)((()=>a.map((e=>{let{name:a,label:l}=e;return{value:a,displayName:l}}))),[a]);return(0,m.jsx)("div",{style:{maxWidth:"8rem"},children:(0,m.jsx)(f,{content:n,controlled:!0,label:"Operator",onChange:e=>l(e.target.value),required:!1,title:r})})}function Y(e){let{handleOnClick:a,variant:l}=e;const r=(0,s.useCallback)((()=>{switch(l){case"group":return"fa-xmark";case"rule":return"fa-minus"}}),[l]);return(0,m.jsx)("button",{className:$.removeButton,onClick:a,children:(0,m.jsxs)("span",{className:"fa-stack fa-1x",children:[(0,m.jsx)("i",{className:(0,i.A)("fa-solid fa-circle fa-stack-2x",$.bg)}),(0,m.jsx)("i",{className:`fa-solid ${r()} fa-stack-1x fa-inverse`})]})})}function Q(e){let{handleOnClick:a,variant:l}=e;const r=(0,s.useMemo)((()=>{switch(l){case"group":return"+Group";case"rule":return"+Rule"}}),[l]);return(0,m.jsx)("button",{className:"pushy__btn pushy__btn--md pushy__btn--black",onClick:a,children:r})}function U(e){if(!e.combinator||!e.rules||!Array.isArray(e.rules))throw new Error("Invalid JSON format for the query.");return e.rules.map((function e(a){let l="";if(a.field&&a.operator&&(l+=`${a.field} ${a.operator}`,a.value&&("in"===a.operator?l+=` ${function(e){const a=e.split(",").map((e=>{const a=e.trim();return H(a)?parseInt(a,10):a.replace(/^"(.*)"$/,"$1")}));return JSON.stringify(a)}(a.value)}`:l+=H(a.value)?` ${a.value}`:` "${a.value}"`)),a.rules&&a.rules.length>0){l+=` (${a.rules.map(e).join(` ${a.combinator} `)}) `}return l.trim()})).join(` ${e.combinator} `)}function H(e){return/^-?\d+$/.test(e)}L.propTypes={variations:u().array,label:u().string.isRequired,isDefaultRule:u().bool},z.propTypes={className:u().string,handleOnChange:u().func,title:u().string,value:u().string,disabled:u().bool,testID:u().string},K.propTypes={handleOnChange:u().func,options:u().array,title:u().string},B.propTypes={handleOnChange:u().func,options:u().array,title:u().string},Y.propTypes={handleOnClick:u().func,variant:u().string},Q.propTypes={handleOnClick:u().func,variant:u().string};const Z=[{name:"eq",label:"Equals To"},{name:"ne",label:"Not Equals To"},{name:"lt",label:"Less Than"},{name:"gt",label:"Greater Than"},{name:"le",label:"Less Than Equal To"},{name:"ge",label:"Greater Than Equal To"},{name:"co",label:"Contains"},{name:"sw",label:"Starts With"},{name:"ew",label:"Ends With"},{name:"in",label:"In a List"},{name:"pr",label:"Present"},{name:"not",label:"Not"}],X={button:"button_Kroe",bg:"bg_rAJd",targeting:"targeting_TgyP",variation:"variation_eQWz",icons:"icons_PYIv",icon:"icon_fDeV"};function ee(e){let{label:a,variations:l}=e;const{control:n}=(0,r.xW)(),{fields:t,append:o,remove:c,update:d}=(0,r.jz)({control:n,name:a}),u=(0,s.useCallback)((()=>o({name:`Rule ${t.length+1}`})),[]),p=(0,s.useCallback)((e=>c(e)),[]);return(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{children:"Target specific users"}),t.length<=0&&(0,m.jsx)("div",{children:"Add Rule"}),t.map(((e,s)=>(0,m.jsxs)("div",{className:(0,i.A)(X.targeting),children:[(0,m.jsx)(L,{variations:l,label:`${a}.${s}`,isDefaultRule:!1}),(0,m.jsx)("button",{className:X.button,onMouseDown:p,children:(0,m.jsxs)("span",{className:"fa-stack fa-1x",children:[(0,m.jsx)("i",{className:(0,i.A)("fa-solid fa-circle fa-stack-2x",X.bg)}),(0,m.jsx)("i",{className:"fa-solid fa-xmark fa-stack-1x fa-inverse"})]})})]},e.id))),(0,m.jsx)("button",{className:X.button,onMouseDown:u,children:(0,m.jsxs)("span",{className:"fa-stack fa-1x",children:[(0,m.jsx)("i",{className:(0,i.A)("fa-solid fa-circle fa-stack-2x",X.bg)}),(0,m.jsx)("i",{className:"fa-solid fa-plus fa-stack-1x fa-inverse"})]})})]})}ee.propTypes={label:u().string.isRequired,variations:u().array};const ae={buttonPlus:"buttonPlus_bivi",bg:"bg_h80t",variation:"variation_HZEP",icons:"icons_clfx",icon:"icon_tZKN",targeting:"targeting_xoeT"};function le(e){let{label:a}=e;const{control:l}=(0,r.xW)(),{fields:s,append:n,remove:t}=(0,r.jz)({control:l,name:a,rules:{minLength:1}}),o=e=>t(e);return(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{children:"Metadata"}),s.length<=0&&(0,m.jsx)("div",{children:"Add new metadata to your flag"}),(0,m.jsx)("div",{className:"grid grid-pad",children:s.map(((e,l)=>(0,m.jsx)(se,{label:`${a}.${l}`,index:l,remove:o},e.id)))}),(0,m.jsx)("button",{className:ae.buttonPlus,onMouseDown:()=>n({name:"",value:""}),children:(0,m.jsxs)("span",{className:"fa-stack fa-1x",children:[(0,m.jsx)("i",{className:(0,i.A)("fa-solid fa-circle fa-stack-2x",ae.bg)}),(0,m.jsx)("i",{className:"fa-solid fa-plus fa-stack-1x fa-inverse"})]})})]})}function se(e){let{type:a,label:l,remove:s,index:n,icon:t}=e;const{register:o}=(0,r.xW)();return(0,m.jsxs)("div",{className:ae.variation,children:[(0,m.jsxs)("div",{className:(0,i.A)("col-4-12 mobile-col-5-12",ae.icons),children:[(0,m.jsx)("div",{className:ae.icon,children:t}),(0,m.jsx)(p,{displayText:"Key",label:`${l}.name`,register:o})]}),(0,m.jsx)("div",{className:(0,i.A)("col-6-12 mobile-col-7-12"),children:(0,m.jsx)(p,{displayText:"Value",label:`${l}.value`,register:o,type:a})}),(0,m.jsx)("div",{className:"col-1-12 mobile-col-1-12",children:(0,m.jsx)("button",{className:ae.buttonPlus,onMouseDown:e=>{e.preventDefault(),s(n)},children:(0,m.jsxs)("span",{className:"fa-stack fa-1x",children:[(0,m.jsx)("i",{className:(0,i.A)("fa-solid fa-circle fa-stack-2x",ae.bg)}),(0,m.jsx)("i",{className:"fa-solid fa-minus fa-stack-1x fa-inverse"})]})})})]})}function re(e){const a=e.type,l={};e.variations.filter((e=>void 0!==e.name&&""!==e.name&&void 0!==e.value&&""!==e.value)).forEach((e=>l[e.name]=ne(e.value,a)));const s=e.targeting.map((e=>ie(e))),r=ne(e.trackEvents,"boolean"),n=ne(e.disable,"boolean"),t=ie(e.defaultRule);return{variations:l,disable:n||void 0,trackEvents:r?void 0:r,version:""===e.version?void 0:e.version,targeting:s.length>0?s:void 0,defaultRule:t,metadata:te(e.metadata)}}function ne(e,a){switch(a){case"json":try{return JSON.parse(e.value)}catch(l){return}case"number":return Number(e)||void 0;case"boolean":return"boolean"==typeof e?e:void 0!==e&&("string"==typeof e||e instanceof String)&&"true"===e.toLowerCase();default:return String(e)||void 0}}function te(e){if(void 0!==e&&0!==e.filter((e=>{let{name:a}=e;return""!==a})).length)return Object.assign({},...e.map((e=>{let{name:a,value:l}=e;return{[a]:l}})))}function ie(e){let a,l,s;const{selectedVar:r}=e;switch(r){case"percentage":l={},e.percentages.forEach((e=>l[e.name]=e.value));break;case"progressive":s={initial:{variation:e.progressive.initial.selectedVar,percentage:e.progressive.initial.percentage||0,date:e.progressive.initial.date},end:{variation:e.progressive.end.selectedVar,percentage:e.progressive.end.percentage||100,date:e.progressive.end.date}};break;default:a=r}return{name:e.name||void 0,query:e.query,variation:a,percentage:l,progressiveRollout:s}}le.propTypes={label:u().string.isRequired},se.propTypes={label:u().string.isRequired,remove:u().func.isRequired,index:u().number.isRequired};var oe=l(44586);const ce={buttonContainer:"buttonContainer_m7Nq"};function de(e){let{flagInfo:a}=e;const{siteConfig:l}=(0,oe.A)(),{watch:n}=(0,r.xW)();let t=n(),o=a.split(".");for(let s of o)t=t[s];const c=t.flagName,d=re(t),[u,p]=(0,s.useState)({resolutionDetail:void 0,err:void 0});return(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{children:"Test your flag"}),(0,m.jsxs)("div",{className:"grid grid-cols-12",children:[(0,m.jsxs)("div",{className:"col-span-5",children:[(0,m.jsx)("h4",{children:"Evaluation Context"}),(0,m.jsx)(_,{label:`${a}.context`,value:JSON.stringify({key:"aae1cb41-c3cb-4753-a117-031ddc958e81",custom:{anonymous:!0,firstname:"John",lastname:"Doe",email:"john.doe@gofeatureflag.org",company:"GO Feature Flag"}}," ",2)})]}),(0,m.jsx)("div",{className:(0,i.A)("col-span-2",ce.buttonContainer),children:(0,m.jsx)("button",{className:"pushy__btn pushy__btn--md pushy__btn--black",onClick:async e=>{e.preventDefault();try{const e=await fetch(l.customFields.playgroundEvaluationApi,{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({flagName:c,flag:d,context:t.context.value?JSON.parse(t.context.value):{}})});200===e.status&&e.json().then((e=>p({resolutionDetail:e})))}catch(a){p({err:a.toString()})}},children:"Evaluate Flag"})}),(0,m.jsxs)("div",{className:"col-span-5",children:[(0,m.jsx)("h4",{children:"Flag evaluation Details"}),(0,m.jsxs)("div",{children:[void 0!==u.resolutionDetail&&(0,m.jsxs)("ul",{children:[(0,m.jsxs)("li",{children:["Value: ",u.resolutionDetail.value.toString()]}),(0,m.jsxs)("li",{children:["Variation Type: ",u.resolutionDetail.variationType]}),(0,m.jsxs)("li",{children:["Reason: ",u.resolutionDetail.reason]}),(0,m.jsxs)("li",{children:["Failed: ",u.resolutionDetail.failed]}),(0,m.jsxs)("li",{children:["Error Code: ",u.resolutionDetail.errorCode]}),(0,m.jsxs)("li",{children:["Track Events: ",u.resolutionDetail.trackEvents]})]}),void 0!==u.err&&(0,m.jsxs)("span",{children:["Impossible to call the API: ",u.err]})]})]})]})]})}function ue(e){let{label:a}=e;const{watch:l}=(0,r.xW)();return(0,m.jsxs)("div",{className:t.flagContainer,children:[(0,m.jsxs)("div",{className:"grid grid-cols-12",children:[(0,m.jsx)("div",{className:"xl:col-span-6 col-span-2 mb-4",children:(0,m.jsx)(p,{displayText:"Flag Name",label:`${a}.flagName`,required:!0})}),(0,m.jsx)("div",{className:"col-span-3",children:(0,m.jsx)(x,{id:"disable",label:`${a}.disable`,displayText:"Disable"})}),(0,m.jsx)("div",{className:"col-span-3",children:(0,m.jsx)(x,{id:"disable",label:`${a}.trackEvents`,displayText:"Track event",defaultChecked:!0})}),(0,m.jsx)("div",{className:"col-span-3",children:(0,m.jsx)(f,{title:"Flag type",content:[{value:"boolean",displayName:"\u2611\ufe0f boolean"},{value:"string",displayName:"\ud83d\udd24 string"},{value:"number",displayName:"\ud83d\udd22 number"},{value:"json",displayName:"\ud83d\udda5 JSON"}],label:`${a}.type`,required:!0})}),(0,m.jsx)("div",{className:"col-start-5 col-span-3",children:(0,m.jsx)(p,{id:"version",label:`${a}.version`,displayText:"Version"})})]}),(0,m.jsx)(k,{label:`${a}.variations`,type:l(`${a}.type`)}),(0,m.jsx)(ee,{label:`${a}.targeting`,variations:l(`${a}.variations`)}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{children:"Default"}),(0,m.jsx)(L,{label:`${a}.defaultRule`,variations:l(`${a}.variations`),isDefaultRule:!0})]}),(0,m.jsx)(le,{label:`${a}.metadata`}),(0,m.jsx)(de,{flagInfo:a})]})}ue.propTypes={label:u().string.isRequired};var me=l(2681),pe=l(94562),ve=l(10009);const ge={invalidForm:"invalidForm_J4Lp",space:"space_Hu3V"};function xe(e){const a={};return e.GOFeatureFlagEditor.filter((e=>void 0!==e.flagName&&""!==e.flagName)).forEach((e=>a[e.flagName]=re(e))),a}function he(){return(0,m.jsx)("div",{className:ge.invalidForm,children:"Error in your configuration, please review the form."})}function fe(){const{watch:e,formState:{errors:a}}=(0,r.xW)(),l=e(),s=a&&0===Object.keys(a).length&&Object.getPrototypeOf(a)===Object.prototype;return(0,m.jsxs)("div",{className:"col-4-12",children:[!s&&(0,m.jsx)(he,{}),s&&(0,m.jsx)(f,{title:"Format",content:[{value:"yaml",displayName:"YAML"},{value:"json",displayName:"JSON"},{value:"toml",displayName:"TOML"}],required:!1,label:"flagFormat"}),(0,m.jsx)("div",{className:ge.space}),s&&(0,m.jsx)(me.default,{className:"JSON",children:function(e,a){switch(a){case"json":return JSON.stringify(e,null,2);case"toml":return ve.stringify(e);default:return pe.default.stringify(e,null,2)}}(xe(l),l.flagFormat)})]})}function be(){const e="GOFeatureFlagEditor",a=(0,r.mN)({mode:"onChange",defaultValues:{GOFeatureFlagEditor:[{flagName:"my-first-flag",variations:[{name:"Variation_1",value:!0},{name:"Variation_2",value:!1}],targeting:[],defaultRule:{}}]}}),{fields:l,append:s}=(0,r.jz)({control:a.control,name:e,rules:{minLength:1}});return(0,m.jsx)("div",{className:"grid grid-cols-12 gap-4 my-4 ",children:(0,m.jsxs)(r.Op,{...a,children:[(0,m.jsx)("div",{className:"col-span-8",children:(0,m.jsxs)("form",{onSubmit:a.handleSubmit((e=>{e.preventDefault()})),children:[l.map(((a,l)=>(0,m.jsx)(ue,{label:`${e}.${l}`},a.id))),(0,m.jsxs)("button",{className:X.button,onClick:e=>{e.preventDefault(),s({flagName:`new-flag-${l.length}`,variations:[{name:"Variation_1",value:!0},{name:"Variation_2",value:!1}],targeting:[],defaultRule:{}})},children:[(0,m.jsxs)("span",{className:"fa-stack fa-1x",children:[(0,m.jsx)("i",{className:(0,i.A)("fa-solid fa-circle fa-stack-2x",X.bg)}),(0,m.jsx)("i",{className:"fa-solid fa-plus fa-stack-1x fa-inverse"})]}),"Add another flag"]})]})}),(0,m.jsx)("div",{className:"col-span-4 ml-1",children:(0,m.jsx)(fe,{})})]})})}function je(){return(0,m.jsx)(n.A,{title:"Edit Your Flag",description:"GO Feature Flag editor is the simplest way to configure your feature flags.",children:(0,m.jsx)(be,{})})}},67992:()=>{},3986:()=>{},49936:()=>{},2941:()=>{},28825:()=>{},7411:()=>{},92441:()=>{}}]);
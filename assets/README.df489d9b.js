import{u as C,a as t,j as e,F as p,c as w,R as k}from"./main.ee80dd14.js";import{S as n,T as r,B as a,s as x,d as g,F as s,dS as y,af as E,aL as T,e3 as N,I as f,b as S,c2 as _,d7 as b,dg as v,dU as d,V as o,C as c,i as B,dO as F,d1 as z,e0 as u,k as A}from"./WaterMark.90f59893.js";const I=["React","Vant","Next"],D=()=>{const[i,l]=k.useState(0);return e(a.Group,{className:"_home-button-group",round:!0,block:!0,type:"primary",children:I.map((h,m)=>e(a,{plain:m!==i,onClick:()=>l(m),children:h},h))})},j=()=>{const[i,l]=k.useState([20,50]);return e(A,{barHeight:4,range:!0,value:i,onChange:l,vertical:!0})},M=()=>{const i=C();return t("div",{className:"_home-container",children:[e("div",{className:"_home-container-left",children:t(n,{direction:"vertical",block:!0,align:"end",children:[e(r.Title,{level:1,children:"React Vant"}),e(r.Title,{level:2,style:{textAlign:"right"},children:i?t(p,{children:["\u6027\u80FD\u6781\u4F73\u7684\u9AD8\u8D28\u91CF\u7EC4\u4EF6\u5E93\uFF0C\u8986\u76D6",e("span",{className:"_home-primary-color",children:"\u79FB\u52A8\u7AEF"}),"\u4E3B\u6D41\u573A\u666F"]}):t(p,{children:["Fast and high-quality"," ",e("span",{className:"_home-primary-color",children:"mobile"})," component library"]})}),t(r.Text,{type:"secondary",size:"lg",style:{maxWidth:520,textAlign:"right"},children:[e(r.Text,{style:{cursor:"pointer"},onClick:()=>window.open("https://github.com/youzan/vant","_blank"),strong:!0,type:"primary",children:"Vant"}),i?"\u662F\u6709\u8D5E\u524D\u7AEF\u56E2\u961F\u5F00\u6E90\u7684\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93\uFF0C\u4E8E 2017 \u5E74\u5F00\u6E90\u3002":" is a mobile component library open source by youzan front-end team, which was open source in 2017."]}),t(n,{gap:16,style:{marginTop:30},children:[e(a,{round:!0,size:"large",icon:e(x,{}),style:{width:148},onClick:()=>{window.location.href="/components"},children:i?"\u7EC4\u4EF6\u5217\u8868":"Components"}),e(a,{size:"large",onClick:()=>{window.location.href="/guide/quickstart"},round:!0,type:"primary",icon:e(g,{}),iconPosition:"right",style:{width:148},children:i?"\u5F00\u59CB\u4F7F\u7528":"Get Started"})]})]})}),e("div",{className:"_home-container-right",children:t(s,{className:"_home-container-right-content",gutter:40,children:[e(s.Item,{span:12,children:t(n,{direction:"vertical",block:!0,gap:40,children:[e(y,{className:"_home-card",round:!0,children:e(y.Body,{children:t(n,{direction:"vertical",children:[t(r.Text,{type:"light",children:[e(E,{})," March 25th"]}),e(a,{round:!0,plain:!0,size:"mini",icon:e(T,{style:{fontSize:18,color:"#3f45ff",fontWeight:"bold"}})}),e(r.Text,{strong:!0,size:"xl",type:"light",children:"Check the docs for getting every component API"}),e(N,{showPivot:!1,color:"#fff",trackColor:"rgba(255, 255, 255, 0.32)",percentage:"75"})]})})}),t(s,{className:"_home-music-card",children:[e(f,{fit:"cover",style:{width:124,height:124,margin:"0 10px 0 0",borderRadius:4,overflow:"hidden",flex:"none"},src:"/demo_1.jpg"}),t(n,{style:{padding:"10px 0"},direction:"vertical",justify:"between",children:[t("div",{children:[e(r.Title,{level:4,children:"Ultraviolet"}),e(r.Text,{children:"Basement \u2022 Beside Myself"})]}),t(n,{children:[e(a,{size:"small",icon:e(S,{}),round:!0}),e(a,{size:"small",icon:e(_,{}),round:!0}),e(a,{size:"small",icon:e(g,{}),round:!0})]})]})]}),e(D,{}),t(n,{className:"_home-switch",align:"center",block:!0,justify:"between",children:[e(b,{defaultChecked:!0}),e(b,{loading:!0}),e(v,{defaultChecked:!0,children:"React "}),e(v,{children:"Typescript"})]}),t(d,{className:"_home-collapse",initExpanded:["1"],children:[e(d.Item,{size:"large",icon:e(o,{}),title:"Fonts",label:"Typefaces used in this branding project.",name:"1",children:"Tag line headings (h1, h2) use Plus Jakarta Sans, whereas the rest of the elements use IBM Plex Sans."}),e(d.Item,{disabled:!0,size:"large",icon:e(o,{}),title:"Hacks",label:"Some of our secrets to make this website.",name:"2",children:"Some of our secrets to make this website."})]}),t(c.Group,{className:"_home-cell",children:[e(c,{title:"Folder Name",value:"size"}),e(c,{icon:e(o,{}),title:"Dependencies",value:e(r.Text,{type:"success",children:"44MB"})}),e(c,{icon:e(o,{}),title:"Fonts",value:e(r.Text,{type:"success",children:"125.6kb"})}),e(c,{icon:e(o,{}),title:"Libs",value:e(r.Text,{type:"success",children:"134MB"})}),e(c,{icon:e(o,{}),title:"Source",value:e(r.Text,{type:"success",children:"200MB"})})]})]})}),e(s.Item,{span:12,children:t(n,{direction:"vertical",gap:40,block:!0,children:[e(B,{title:i?"\u65E5\u671F\u9009\u62E9":"Calender",className:"_home-calendar",showConfirm:!1,poppable:!1}),e(F,{className:"_home-tabs",children:["Yesterday","Today","Tomorrow"].map(l=>e(F.TabPane,{title:l},l))}),t(s,{gutter:20,className:"_home-slider",children:[e(s.Item,{span:12,children:e("div",{className:w("_home-box"),children:e(j,{})})}),e(s.Item,{span:12,children:t(n,{gap:20,direction:"vertical",block:!0,children:[e(a,{size:"large",block:!0,type:"primary",children:"Buy now"}),e(a,{size:"large",block:!0,type:"primary",plain:!0,children:"Buy now"})]})})]}),t(n,{className:"_home-steps",justify:"between",direction:"vertical",block:!0,children:[t(n,{justify:"between",block:!0,children:[e(r.Title,{level:5,children:"Add these properties:"}),e(z,{style:{fontSize:24,color:"#888"}})]}),t(u,{activeColor:"#3f45ff",direction:"vertical",active:2,children:[e(u.Item,{children:"Margin Top"}),e(u.Item,{children:"Padding Bottom"}),e(u.Item,{children:"Flexbox"})]})]}),e(c,{isLink:!0,center:!0,title:"Avatar",label:"Typefaces used in this branding project.",icon:e(f,{width:44,height:44,src:"/demo_2.jpg",round:!0})})]})})]})})]})},P=function({previewer:i=()=>null,api:l=()=>null}){return e("div",{children:e(M,{})})},R=[],V={className:"_home-full-page",blank:!0},G=[],L="/docs/README.md",O="undefined",H="1657880104000";var U=i=>i.children({MdContent:P,demos:R,frontmatter:V,slugs:G,filePath:L,title:O,updatedTime:H});export{P as MdContent,U as default,R as demos,L as filePath,V as frontmatter,G as slugs,O as title,H as updatedTime};

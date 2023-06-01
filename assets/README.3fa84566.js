var D=Object.defineProperty,g=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var s=(t,i,e)=>i in t?D(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,l=(t,i)=>{for(var e in i||(i={}))T.call(i,e)&&s(t,e,i[e]);if(a)for(var e of a(i))k.call(i,e)&&s(t,e,i[e]);return t},c=(t,i)=>g(t,v(i));import{a as n,F as o,j as u}from"./main.a314974a.js";import{C as d,dc as r,f,I as y,d9 as x}from"./FloatingPanel.af257abd.js";var F=()=>n(o,{children:[u(d,{title:"\u6587\u5B57\u63D0\u793A",isLink:!0,onClick:()=>r.info("\u63D0\u793A\u5185\u5BB9")}),u(d,{title:"\u52A0\u8F7D\u63D0\u793A",isLink:!0,onClick:()=>{r.loading({message:"\u52A0\u8F7D\u4E2D...",forbidClick:!0})}}),u(d,{title:"\u6210\u529F\u63D0\u793A",isLink:!0,onClick:()=>r.success("\u6210\u529F\u6587\u6848")}),u(d,{title:"\u5931\u8D25\u63D0\u793A",isLink:!0,onClick:()=>r.fail("\u5931\u8D25\u6587\u6848")})]});const L=`import React from 'react'
import { Toast, Cell } from 'react-vant'

export default () => {
  return (
    <>
      <Cell title='\u6587\u5B57\u63D0\u793A' isLink onClick={() => Toast.info('\u63D0\u793A\u5185\u5BB9')} />
      <Cell
        title='\u52A0\u8F7D\u63D0\u793A'
        isLink
        onClick={() => {
          Toast.loading({
            message: '\u52A0\u8F7D\u4E2D...',
            forbidClick: true,
          })
        }}
      />
      <Cell title='\u6210\u529F\u63D0\u793A' isLink onClick={() => Toast.success('\u6210\u529F\u6587\u6848')} />
      <Cell title='\u5931\u8D25\u63D0\u793A' isLink onClick={() => Toast.fail('\u5931\u8D25\u6587\u6848')} />
    </>
  )
}
`,b={code:L,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.2.8"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Toast, Cell } from 'react-vant'

export default () => {
  return (
    <>
      <Cell title='\u6587\u5B57\u63D0\u793A' isLink onClick={() => Toast.info('\u63D0\u793A\u5185\u5BB9')} />
      <Cell
        title='\u52A0\u8F7D\u63D0\u793A'
        isLink
        onClick={() => {
          Toast.loading({
            message: '\u52A0\u8F7D\u4E2D...',
            forbidClick: true,
          })
        }}
      />
      <Cell title='\u6210\u529F\u63D0\u793A' isLink onClick={() => Toast.success('\u6210\u529F\u6587\u6848')} />
      <Cell title='\u5931\u8D25\u63D0\u793A' isLink onClick={() => Toast.fail('\u5931\u8D25\u6587\u6848')} />
    </>
  )
}
`}},key:"toast-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var C=()=>u(o,{children:u(d,{title:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A",isLink:!0,onClick:()=>{let i=4,e;const B=r.info({message:`\u8FD8\u5269 ${i+1} \u79D2`,duration:5e3,onClose:()=>{clearInterval(e)}});e=setInterval(()=>{B.config({message:`\u8FD8\u5269 ${i--} \u79D2`})},1e3)}})});const M=`import React from 'react'
import { Toast, Cell } from 'react-vant'

export default () => {
  const onDynicUpdate = () => {
    let remain = 4
    let timer = undefined
    const update = Toast.info({
      message: \`\u8FD8\u5269 \${remain + 1} \u79D2\`,
      duration: 5000,
      onClose: () => {
        clearInterval(timer)
      },
    })
    timer = setInterval(() => {
      // eslint-disable-next-line no-plusplus
      update.config({ message: \`\u8FD8\u5269 \${remain--} \u79D2\` })
    }, 1000)
  }

  return (
    <>
      <Cell title='\u52A8\u6001\u66F4\u65B0\u63D0\u793A' isLink onClick={onDynicUpdate} />
    </>
  )
}
`,_={code:M,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.2.8"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Toast, Cell } from 'react-vant'

export default () => {
  const onDynicUpdate = () => {
    let remain = 4
    let timer = undefined
    const update = Toast.info({
      message: \`\u8FD8\u5269 \${remain + 1} \u79D2\`,
      duration: 5000,
      onClose: () => {
        clearInterval(timer)
      },
    })
    timer = setInterval(() => {
      // eslint-disable-next-line no-plusplus
      update.config({ message: \`\u8FD8\u5269 \${remain--} \u79D2\` })
    }, 1000)
  }

  return (
    <>
      <Cell title='\u52A8\u6001\u66F4\u65B0\u63D0\u793A' isLink onClick={onDynicUpdate} />
    </>
  )
}
`}},key:"toast-dynic",meta:{title:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A"}};var A=()=>n(o,{children:[u(d,{title:"\u81EA\u5B9A\u4E49\u56FE\u6807",isLink:!0,onClick:()=>r({message:"\u81EA\u5B9A\u4E49\u56FE\u6807",icon:u(f,{})})}),u(d,{title:"\u81EA\u5B9A\u4E49\u56FE\u7247",isLink:!0,onClick:()=>r({message:"\u81EA\u5B9A\u4E49\u56FE\u7247",icon:u(y,{width:36,src:"https://img01.yzcdn.cn/vant/logo.png"})})}),u(d,{title:"\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u6807",isLink:!0,onClick:()=>r.loading({message:"\u52A0\u8F7D\u4E2D...",forbidClick:!0,loadingType:"spinner"})})]});const P=`import { FireO } from '@react-vant/icons'
import React from 'react'
import { Toast, Cell, Image } from 'react-vant'

export default () => {
  return (
    <>
      <Cell
        title='\u81EA\u5B9A\u4E49\u56FE\u6807'
        isLink
        onClick={() =>
          Toast({
            message: '\u81EA\u5B9A\u4E49\u56FE\u6807',
            icon: <FireO />,
          })
        }
      />

      <Cell
        title='\u81EA\u5B9A\u4E49\u56FE\u7247'
        isLink
        onClick={() =>
          Toast({
            message: '\u81EA\u5B9A\u4E49\u56FE\u7247',
            icon: (
              <Image width={36} src='https://img01.yzcdn.cn/vant/logo.png' />
            ),
          })
        }
      />
      <Cell
        title='\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u6807'
        isLink
        onClick={() =>
          Toast.loading({
            message: '\u52A0\u8F7D\u4E2D...',
            forbidClick: true,
            loadingType: 'spinner',
          })
        }
      />
    </>
  )
}
`,R={code:P,lang:"tsx",dependencies:{"@react-vant/icons":{type:"NPM",value:"0.0.10"},react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.2.8"},"index.tsx":{type:"FILE",value:`import { FireO } from '@react-vant/icons'
import React from 'react'
import { Toast, Cell, Image } from 'react-vant'

export default () => {
  return (
    <>
      <Cell
        title='\u81EA\u5B9A\u4E49\u56FE\u6807'
        isLink
        onClick={() =>
          Toast({
            message: '\u81EA\u5B9A\u4E49\u56FE\u6807',
            icon: <FireO />,
          })
        }
      />

      <Cell
        title='\u81EA\u5B9A\u4E49\u56FE\u7247'
        isLink
        onClick={() =>
          Toast({
            message: '\u81EA\u5B9A\u4E49\u56FE\u7247',
            icon: (
              <Image width={36} src='https://img01.yzcdn.cn/vant/logo.png' />
            ),
          })
        }
      />
      <Cell
        title='\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u6807'
        isLink
        onClick={() =>
          Toast.loading({
            message: '\u52A0\u8F7D\u4E2D...',
            forbidClick: true,
            loadingType: 'spinner',
          })
        }
      />
    </>
  )
}
`}},key:"toast-icon",meta:{title:"\u81EA\u5B9A\u4E49\u56FE\u6807"}};var p=()=>n(o,{children:[u(d,{title:"\u9876\u90E8\u5C55\u793A",isLink:!0,onClick:()=>r({message:"\u9876\u90E8\u5C55\u793A",position:"top"})}),u(d,{title:"\u5E95\u90E8\u5C55\u793A",isLink:!0,onClick:()=>r({message:"\u5E95\u90E8\u5C55\u793A",position:"bottom"})})]});const w=`import React from 'react'
import { Toast, Cell } from 'react-vant'

export default () => {
  return (
    <>
      <Cell
        title='\u9876\u90E8\u5C55\u793A'
        isLink
        onClick={() =>
          Toast({
            message: '\u9876\u90E8\u5C55\u793A',
            position: 'top',
          })
        }
      />
      <Cell
        title='\u5E95\u90E8\u5C55\u793A'
        isLink
        onClick={() =>
          Toast({
            message: '\u5E95\u90E8\u5C55\u793A',
            position: 'bottom',
          })
        }
      />
    </>
  )
}
`,I={code:w,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.2.8"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Toast, Cell } from 'react-vant'

export default () => {
  return (
    <>
      <Cell
        title='\u9876\u90E8\u5C55\u793A'
        isLink
        onClick={() =>
          Toast({
            message: '\u9876\u90E8\u5C55\u793A',
            position: 'top',
          })
        }
      />
      <Cell
        title='\u5E95\u90E8\u5C55\u793A'
        isLink
        onClick={() =>
          Toast({
            message: '\u5E95\u90E8\u5C55\u793A',
            position: 'bottom',
          })
        }
      />
    </>
  )
}
`}},key:"toast-position",meta:{title:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E"}};let h,E;var m=()=>n(o,{children:[u(d,{title:"\u5F00\u542F",children:u(x,{style:{display:"block",float:"right"},size:20,onChange:t=>{r.allowMultiple(t)}})}),u(d,{title:"\u7B2C\u4E00\u4E2AToast",isLink:!0,onClick:()=>h=r({type:"loading",message:"\u7B2C\u4E00\u4E2AToast",duration:0,position:"top"})}),u(d,{title:"\u7B2C\u4E8C\u4E2AToast",isLink:!0,onClick:()=>E=r({message:"\u7B2C\u4E8C\u4E2AToast",duration:0,position:"bottom"})}),u(d,{title:"\u6E05\u9664\u7B2C\u4E00\u4E2AToast",isLink:!0,onClick:()=>h.clear()}),u(d,{title:"\u6E05\u695A\u7B2C\u4E8C\u4E2AToast",isLink:!0,onClick:()=>E.clear()})]});const O=`import React from 'react'
import { Cell, Toast, Switch } from 'react-vant'
import { ToastReturnType } from '../PropsType'

let t1: ToastReturnType
let t2: ToastReturnType

export default () => {
  return (
    <>
      <Cell title='\u5F00\u542F'>
        <Switch
          style={{ display: 'block', float: 'right' }}
          size={20}
          onChange={v => {
            Toast.allowMultiple(v)
          }}
        />
      </Cell>
      <Cell
        title='\u7B2C\u4E00\u4E2AToast'
        isLink
        onClick={() =>
          (t1 = Toast({
            type: 'loading',
            message: '\u7B2C\u4E00\u4E2AToast',
            duration: 0,
            position: 'top',
          }))
        }
      />
      <Cell
        title='\u7B2C\u4E8C\u4E2AToast'
        isLink
        onClick={() =>
          (t2 = Toast({
            message: '\u7B2C\u4E8C\u4E2AToast',
            duration: 0,
            position: 'bottom',
          }))
        }
      />

      <Cell title='\u6E05\u9664\u7B2C\u4E00\u4E2AToast' isLink onClick={() => t1.clear()} />
      <Cell title='\u6E05\u695A\u7B2C\u4E8C\u4E2AToast' isLink onClick={() => t2.clear()} />
    </>
  )
}
`,$={code:O,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.2.8"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Cell, Toast, Switch } from 'react-vant'
import { ToastReturnType } from '../PropsType'

let t1: ToastReturnType
let t2: ToastReturnType

export default () => {
  return (
    <>
      <Cell title='\u5F00\u542F'>
        <Switch
          style={{ display: 'block', float: 'right' }}
          size={20}
          onChange={v => {
            Toast.allowMultiple(v)
          }}
        />
      </Cell>
      <Cell
        title='\u7B2C\u4E00\u4E2AToast'
        isLink
        onClick={() =>
          (t1 = Toast({
            type: 'loading',
            message: '\u7B2C\u4E00\u4E2AToast',
            duration: 0,
            position: 'top',
          }))
        }
      />
      <Cell
        title='\u7B2C\u4E8C\u4E2AToast'
        isLink
        onClick={() =>
          (t2 = Toast({
            message: '\u7B2C\u4E8C\u4E2AToast',
            duration: 0,
            position: 'bottom',
          }))
        }
      />

      <Cell title='\u6E05\u9664\u7B2C\u4E00\u4E2AToast' isLink onClick={() => t1.clear()} />
      <Cell title='\u6E05\u695A\u7B2C\u4E8C\u4E2AToast' isLink onClick={() => t2.clear()} />
    </>
  )
}
`}},key:"toast-multiple",meta:{title:"\u5355\u4F8B\u6A21\u5F0F"}},N=function({previewer:t=()=>null,api:i=()=>null}){const e=t;return u("div",{children:n("div",{children:[u("h1",{id:"toast-\u8F7B\u63D0\u793A","data-anchor":"toast-\u8F7B\u63D0\u793A",children:"Toast \u8F7B\u63D0\u793A"}),u("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),u("p",{children:"\u5728\u9875\u9762\u4E2D\u95F4\u5F39\u51FA\u9ED1\u8272\u534A\u900F\u660E\u63D0\u793A\uFF0C\u7528\u4E8E\u6D88\u606F\u901A\u77E5\u3001\u52A0\u8F7D\u63D0\u793A\u3001\u64CD\u4F5C\u7ED3\u679C\u63D0\u793A\u7B49\u573A\u666F\u3002"}),u("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),u(e,{code:"import { Toast } from 'react-vant';",lang:"js"}),u("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),u("div",{children:u(e,c(l({},b),{children:u(F,{})}))}),u("h3",{id:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A","data-anchor":"\u52A8\u6001\u66F4\u65B0\u63D0\u793A",children:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A"}),u("p",{children:"\u6267\u884C Toast \u65B9\u6CD5\u65F6\u4F1A\u8FD4\u56DE\u5BF9\u5E94\u7684 Toast \u5B9E\u4F8B\uFF0C\u901A\u8FC7\u4FEE\u6539\u5B9E\u4F8B\u4E0A\u7684 message \u5C5E\u6027\u53EF\u4EE5\u5B9E\u73B0\u52A8\u6001\u66F4\u65B0\u63D0\u793A\u7684\u6548\u679C\u3002"}),u("div",{children:u(e,c(l({},_),{children:u(C,{})}))}),u("h3",{id:"\u81EA\u5B9A\u4E49\u56FE\u6807","data-anchor":"\u81EA\u5B9A\u4E49\u56FE\u6807",children:"\u81EA\u5B9A\u4E49\u56FE\u6807"}),n("p",{children:["\u901A\u8FC7 ",u("code",{children:"icon"})," \u9009\u9879\u53EF\u4EE5\u81EA\u5B9A\u4E49\u56FE\u6807\uFF0C\u901A\u8FC7",u("code",{children:"loadingType"})," \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u6807\u7C7B\u578B\u3002"]}),u("div",{children:u(e,c(l({},R),{children:u(A,{})}))}),u("h3",{id:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E","data-anchor":"\u81EA\u5B9A\u4E49\u4F4D\u7F6E",children:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E"}),n("p",{children:["Toast \u9ED8\u8BA4\u6E32\u67D3\u5728\u5C4F\u5E55\u6B63\u4E2D\u4F4D\u7F6E\uFF0C\u901A\u8FC7 ",u("code",{children:"position"})," \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236 Toast \u5C55\u793A\u7684\u4F4D\u7F6E\u3002"]}),u("div",{children:u(e,c(l({},I),{children:u(p,{})}))}),u("h3",{id:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A-1","data-anchor":"\u52A8\u6001\u66F4\u65B0\u63D0\u793A-1",children:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A"}),n("p",{children:["\u6267\u884C Toast \u65B9\u6CD5\u65F6\u4F1A\u8FD4\u56DE\u5BF9\u5E94\u7684 Toast \u5B9E\u4F8B\uFF0C\u901A\u8FC7\u4FEE\u6539\u5B9E\u4F8B\u4E0A\u7684 ",u("code",{children:"message"})," \u5C5E\u6027\u53EF\u4EE5\u5B9E\u73B0\u52A8\u6001\u66F4\u65B0\u63D0\u793A\u7684\u6548\u679C\u3002"]}),u(e,{code:`let remain = 4;
let timer;
const toast = Toast.info({
  message: \`\u8FD8\u5269 \${remain + 1} \u79D2\`,
  duration: 5000,
  onClose: () => clearInterval(timer),
});
timer = setInterval(() => {
  toast.config({ message: \`\u8FD8\u5269 \${remain--} \u79D2\` });
}, 1000);`,lang:"js"}),u("h3",{id:"\u591A\u4F8B\u6A21\u5F0F","data-anchor":"\u591A\u4F8B\u6A21\u5F0F",children:"\u591A\u4F8B\u6A21\u5F0F"}),u("p",{children:"Toast \u9ED8\u8BA4\u91C7\u7528\u5355\u4F8B\u6A21\u5F0F\uFF0C\u5373\u540C\u4E00\u65F6\u95F4\u53EA\u4F1A\u5B58\u5728\u4E00\u4E2A Toast\uFF0C\u5982\u679C\u9700\u8981\u5728\u540C\u4E00\u65F6\u95F4\u5F39\u51FA\u591A\u4E2A Toast\uFF0C\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u7684\u793A\u4F8B\uFF1A"}),u("div",{children:u(e,c(l({},$),{children:u(m,{})}))}),u("h3",{id:"\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E","data-anchor":"\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E",children:"\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E"}),n("p",{children:["\u901A\u8FC7 ",u("code",{children:"Toast.setDefaultOptions"})," \u51FD\u6570\u53EF\u4EE5\u5168\u5C40\u4FEE\u6539 Toast \u7684\u9ED8\u8BA4\u914D\u7F6E\u3002"]}),u(e,{code:`Toast.setDefaultOptions({ duration: 2000 });

Toast.setDefaultOptions('loading', { forbidClick: true });

Toast.resetDefaultOptions();

Toast.resetDefaultOptions('loading');`,lang:"js"}),u("h2",{id:"api","data-anchor":"api",children:"API"}),u("h3",{id:"\u65B9\u6CD5","data-anchor":"\u65B9\u6CD5",children:"\u65B9\u6CD5"}),n("table",{children:[u("thead",{children:n("tr",{children:[u("th",{children:"\u65B9\u6CD5\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8FD4\u56DE\u503C"})]})}),n("tbody",{children:[n("tr",{children:[u("td",{children:"Toast"}),u("td",{children:"\u5C55\u793A\u63D0\u793A"}),u("td",{children:u("code",{children:"options | message"})}),u("td",{children:"toast \u5B9E\u4F8B"})]}),n("tr",{children:[u("td",{children:"Toast.info"}),u("td",{children:"\u5C55\u793A\u6587\u5B57\u63D0\u793A"}),u("td",{children:u("code",{children:"options | message"})}),u("td",{children:"toast \u5B9E\u4F8B"})]}),n("tr",{children:[u("td",{children:"Toast.loading"}),u("td",{children:"\u5C55\u793A\u52A0\u8F7D\u63D0\u793A"}),u("td",{children:u("code",{children:"options | message"})}),u("td",{children:"toast \u5B9E\u4F8B"})]}),n("tr",{children:[u("td",{children:"Toast.success"}),u("td",{children:"\u5C55\u793A\u6210\u529F\u63D0\u793A"}),u("td",{children:u("code",{children:"options | message"})}),u("td",{children:"toast \u5B9E\u4F8B"})]}),n("tr",{children:[u("td",{children:"Toast.fail"}),u("td",{children:"\u5C55\u793A\u5931\u8D25\u63D0\u793A"}),u("td",{children:u("code",{children:"options | message"})}),u("td",{children:"toast \u5B9E\u4F8B"})]}),n("tr",{children:[u("td",{children:"Toast.clear"}),u("td",{children:"\u5173\u95ED\u63D0\u793A"}),u("td",{children:u("code",{children:"clearAll: boolean"})}),u("td",{children:u("code",{children:"void"})})]}),n("tr",{children:[u("td",{children:"Toast.allowMultiple"}),u("td",{children:"\u5141\u8BB8\u540C\u65F6\u5B58\u5728\u591A\u4E2A Toast"}),u("td",{children:"-"}),u("td",{children:u("code",{children:"void"})})]}),n("tr",{children:[u("td",{children:"Toast.setDefaultOptions"}),n("td",{children:["\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5BF9\u6240\u6709 Toast \u751F\u6548\u3002",u("br",{}),"\u4F20\u5165 type \u53EF\u4EE5\u4FEE\u6539\u6307\u5B9A\u7C7B\u578B\u7684\u9ED8\u8BA4\u914D\u7F6E"]}),u("td",{children:u("code",{children:"type | options"})}),u("td",{children:u("code",{children:"void"})})]}),n("tr",{children:[u("td",{children:"Toast.resetDefaultOptions"}),n("td",{children:["\u91CD\u7F6E\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5BF9\u6240\u6709 Toast \u751F\u6548\u3002",u("br",{}),"\u4F20\u5165 type \u53EF\u4EE5\u91CD\u7F6E\u6307\u5B9A\u7C7B\u578B\u7684\u9ED8\u8BA4\u914D\u7F6E"]}),u("td",{children:u("code",{children:"type"})}),u("td",{children:u("code",{children:"void"})})]})]})]}),u("h3",{id:"options","data-anchor":"options",children:"Options"}),n("table",{children:[u("thead",{children:n("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[u("td",{children:"type"}),n("td",{children:["\u63D0\u793A\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"loading"})," ",u("code",{children:"success"})," ",u("code",{children:"fail"})," ",u("code",{children:"info"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"info"})})]}),n("tr",{children:[u("td",{children:"position"}),n("td",{children:["\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"top"})," ",u("code",{children:"bottom"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"middle"})})]}),n("tr",{children:[u("td",{children:"message"}),n("td",{children:["\u6587\u672C\u5185\u5BB9\uFF0C\u652F\u6301\u901A\u8FC7",u("code",{children:"\\n"}),"\u6362\u884C"]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"''"})})]}),n("tr",{children:[u("td",{children:"icon"}),u("td",{children:"\u81EA\u5B9A\u4E49\u56FE\u6807"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"iconSize"}),n("td",{children:["\u56FE\u6807\u5927\u5C0F\uFF0C\u5982 ",u("code",{children:"20px"})," ",u("code",{children:"2em"}),"\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A ",u("code",{children:"px"})]}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:u("code",{children:"36px"})})]}),n("tr",{children:[u("td",{children:"forbidClick"}),u("td",{children:"\u662F\u5426\u7981\u6B62\u80CC\u666F\u70B9\u51FB"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),n("tr",{children:[u("td",{children:"closeOnClick"}),u("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u540E\u5173\u95ED"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),n("tr",{children:[u("td",{children:"closeOnClickOverlay"}),u("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),n("tr",{children:[u("td",{children:"loadingType"}),n("td",{children:[u("a",{href:"/components/loading",children:"\u52A0\u8F7D\u56FE\u6807\u7C7B\u578B"}),", \u53EF\u9009\u503C\u4E3A ",u("code",{children:"spinner"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"circular"})})]}),n("tr",{children:[u("td",{children:"duration"}),u("td",{children:"\u5C55\u793A\u65F6\u957F(ms)\uFF0C\u503C\u4E3A 0 \u65F6\uFF0Ctoast \u4E0D\u4F1A\u6D88\u5931"}),u("td",{children:u("em",{children:"number"})}),u("td",{children:u("code",{children:"2000"})})]}),n("tr",{children:[u("td",{children:"className"}),u("td",{children:"\u81EA\u5B9A\u4E49\u7C7B\u540D"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"overlay"}),u("td",{children:"\u662F\u5426\u663E\u793A\u80CC\u666F\u906E\u7F69\u5C42"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),n("tr",{children:[u("td",{children:"overlayClass"}),u("td",{children:"\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7C7B\u540D"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"overlayStyle"}),u("td",{children:"\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u6837\u5F0F"}),u("td",{children:u("em",{children:"object"})}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"onOpened"}),u("td",{children:"\u5B8C\u5168\u5C55\u793A\u540E\u7684\u56DE\u8C03\u51FD\u6570"}),u("td",{children:u("em",{children:"Function"})}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"onClose"}),u("td",{children:"\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570"}),u("td",{children:u("em",{children:"Function"})}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"transition"}),u("td",{children:"\u52A8\u753B\u7C7B\u540D"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"rv-fade"})})]}),n("tr",{children:[u("td",{children:"teleport"}),u("td",{children:"\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9"}),n("td",{children:[u("em",{children:"HTMLElement"})," ",u("em",{children:"(() => HTMLElement))"})]}),u("td",{children:u("code",{children:"document.body"})})]})]})]}),u("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),u("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),u(e,{code:"import type { ToastType, ToastOptions, ToastPosition } from 'react-vant';",lang:"js"}),u("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),u("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),n("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",u("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),n("table",{children:[u("thead",{children:n("tr",{children:[u("th",{children:"\u540D\u79F0"}),u("th",{children:"\u9ED8\u8BA4\u503C"}),u("th",{children:"\u63CF\u8FF0"})]})}),n("tbody",{children:[n("tr",{children:[u("td",{children:"--rv-toast-max-width"}),u("td",{children:u("em",{children:"70%"})}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"--rv-toast-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-md)"})}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"--rv-toast-text-color"}),u("td",{children:u("em",{children:"var(--rv-white)"})}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"--rv-toast-loading-icon-color"}),u("td",{children:u("em",{children:"var(--rv-white)"})}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"--rv-toast-line-height"}),u("td",{children:u("em",{children:"var(--rv-line-height-md)"})}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"--rv-toast-border-radius"}),u("td",{children:u("em",{children:"var(--rv-border-radius-lg)"})}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"--rv-toast-background-color"}),u("td",{children:u("em",{children:"fade(var(--rv-black), 70%)"})}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"--rv-toast-icon-size"}),u("td",{children:u("em",{children:"36px"})}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"--rv-toast-text-min-width"}),u("td",{children:u("em",{children:"96px"})}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"--rv-toast-text-padding"}),u("td",{children:u("em",{children:"var(--rv-padding-xs) var(--rv-padding-sm)"})}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"--rv-toast-default-padding"}),u("td",{children:u("em",{children:"var(--rv-padding-md)"})}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"--rv-toast-default-width"}),u("td",{children:u("em",{children:"88px"})}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"--rv-toast-default-min-height"}),u("td",{children:u("em",{children:"88px"})}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"--rv-toast-position-top-distance"}),u("td",{children:u("em",{children:"20%"})}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"--rv-toast-position-bottom-distance"}),u("td",{children:u("em",{children:"20%"})}),u("td",{children:"-"})]})]})]})]})})},z=[{Component:F,key:"toast-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:C,key:"toast-dynic",title:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A"},{Component:A,key:"toast-icon",title:"\u81EA\u5B9A\u4E49\u56FE\u6807"},{Component:p,key:"toast-position",title:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E"},{Component:m,key:"toast-multiple",title:"\u5355\u4F8B\u6A21\u5F0F"}],S=void 0,j=[{depth:1,text:"Toast \u8F7B\u63D0\u793A",id:"toast-\u8F7B\u63D0\u793A"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A",id:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A"},{depth:3,text:"\u81EA\u5B9A\u4E49\u56FE\u6807",id:"\u81EA\u5B9A\u4E49\u56FE\u6807"},{depth:3,text:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E",id:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E"},{depth:3,text:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A",id:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A-1"},{depth:3,text:"\u591A\u4F8B\u6A21\u5F0F",id:"\u591A\u4F8B\u6A21\u5F0F"},{depth:3,text:"\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E",id:"\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E"},{depth:2,text:"API",id:"api"},{depth:3,text:"\u65B9\u6CD5",id:"\u65B9\u6CD5"},{depth:3,text:"Options",id:"options"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],U="/src/components/toast/README.md",H="Toast \u8F7B\u63D0\u793A",q="1685619132000";var Q=t=>t.children({MdContent:N,demos:z,frontmatter:S,slugs:j,filePath:U,title:H,updatedTime:q});export{N as MdContent,Q as default,z as demos,U as filePath,S as frontmatter,j as slugs,H as title,q as updatedTime};
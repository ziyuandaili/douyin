import{_ as V}from"./toutiao-round-BMXZPdFB.js";import{b as d,L as c,C as m,g as n,_ as p}from"./common-Cj2DXq7d.js";import{T as g}from"./Tooltip-C8ynZJbl.js";import{u as f}from"./other-Dl-hmeYP.js";import"./vendor-EcFAmbRN.js";const N=""+new URL("../assets/qq-round-BbpLH4zM.webp",import.meta.url).href,k=""+new URL("../assets/wechat-round-CWhN197Q.png",import.meta.url).href,v=""+new URL("../assets/weibo-round-DllOLTIK.webp",import.meta.url).href,h=s=>(Vue.pushScopeId("data-v-5e04ec2c"),s=s(),Vue.popScopeId(),s),w={class:"login"},C={key:1,class:"content"},_=h(()=>Vue.createElementVNode("div",{class:"desc"},[Vue.createElementVNode("div",{class:"title"},"登录看朋友内容"),Vue.createElementVNode("div",{class:"phone-number"},"138****8000"),Vue.createElementVNode("div",{class:"sub-title"},"认证服务由中国移动提供")],-1)),E={class:"left"},T={class:"right"},x={class:"other-login"},y={key:0,class:"icons"},L=Vue.defineComponent({name:"login",__name:"Login",setup(s){const l=f(),o=Vue.reactive({isAgree:!1,isOtherLogin:!1,showAnim:!1,showTooltip:!1,loading:{login:!1,getPhone:!1}});Vue.onMounted(()=>{r()});async function r(){o.loading.getPhone=!0,await d(1e3),o.loading.getPhone=!1}function u(){o.isAgree?o.loading.login=!0:!o.showAnim&&!o.showTooltip&&(o.showAnim=!0,setTimeout(()=>{o.showAnim=!1,o.showTooltip=!0},500),setTimeout(()=>{o.showTooltip=!1},3e3))}return(B,e)=>{const a=Vue.resolveComponent("BaseHeader"),i=Vue.resolveComponent("dy-button");return Vue.openBlock(),Vue.createElementBlock("div",w,[Vue.createVNode(a,{mode:"light",backMode:"dark",backImg:"close"},{right:Vue.withCtx(()=>[Vue.createElementVNode("span",{class:"f14",onClick:e[0]||(e[0]=t=>Vue.unref(l)("/login/help"))},"帮助与设置")]),_:1}),o.loading.getPhone?(Vue.openBlock(),Vue.createBlock(c,{key:0})):(Vue.openBlock(),Vue.createElementBlock("div",C,[_,Vue.createVNode(i,{type:"primary",loading:o.loading.login,active:!1,loadingWithText:!0,onClick:u},{default:Vue.withCtx(()=>[Vue.createTextVNode(Vue.toDisplayString(o.loading.login?"登录中":"一键登录"),1)]),_:1},8,["loading"]),Vue.createVNode(i,{active:!1,type:"white",onClick:e[1]||(e[1]=t=>Vue.unref(l)("/login/other"))},{default:Vue.withCtx(()=>[Vue.createTextVNode("其他手机号码登录 ")]),_:1}),Vue.createElementVNode("div",{class:Vue.normalizeClass(["protocol",o.showAnim?"anim-bounce":""])},[Vue.createVNode(g,{style:{top:"-100%",left:"-10rem"},modelValue:o.showTooltip,"onUpdate:modelValue":e[2]||(e[2]=t=>o.showTooltip=t)},null,8,["modelValue"]),Vue.createElementVNode("div",E,[Vue.createVNode(m,{modelValue:o.isAgree,"onUpdate:modelValue":e[3]||(e[3]=t=>o.isAgree=t)},null,8,["modelValue"])]),Vue.createElementVNode("div",T,[Vue.createTextVNode(" 我已阅读并同意 "),Vue.createElementVNode("span",{class:"link",onClick:e[4]||(e[4]=t=>Vue.unref(l)("/service-protocol",{type:"“抖音”用户服务协议"}))},"用户协议"),Vue.createTextVNode(" 和 "),Vue.createElementVNode("span",{class:"link",onClick:e[5]||(e[5]=t=>Vue.unref(l)("/service-protocol",{type:"“抖音”隐私政策"}))},"隐私政策"),Vue.createElementVNode("div",null,[Vue.createTextVNode(" 以及 "),Vue.createElementVNode("span",{class:"link",onClick:e[6]||(e[6]=t=>Vue.unref(l)("/service-protocol",{type:"中国移动认证服务协议"}))},"《中国移动认证服务条款》"),Vue.createTextVNode(" ，同时登录并使用抖音火山版（原“火山小视频”）和抖音 ")])])],2),Vue.createElementVNode("div",x,[Vue.createVNode(Vue.Transition,{name:"fade"},{default:Vue.withCtx(()=>[o.isOtherLogin?(Vue.openBlock(),Vue.createElementBlock("div",y,[Vue.createElementVNode("img",{onClick:e[7]||(e[7]=(...t)=>Vue.unref(n)&&Vue.unref(n)(...t)),src:V,alt:""}),Vue.createElementVNode("img",{onClick:e[8]||(e[8]=(...t)=>Vue.unref(n)&&Vue.unref(n)(...t)),src:N,alt:""}),Vue.createElementVNode("img",{onClick:e[9]||(e[9]=(...t)=>Vue.unref(n)&&Vue.unref(n)(...t)),src:k,alt:""}),Vue.createElementVNode("img",{onClick:e[10]||(e[10]=(...t)=>Vue.unref(n)&&Vue.unref(n)(...t)),src:v,alt:""})])):Vue.createCommentVNode("",!0)]),_:1})]),Vue.createVNode(Vue.Transition,{name:"fade"},{default:Vue.withCtx(()=>[o.isOtherLogin?Vue.createCommentVNode("",!0):(Vue.openBlock(),Vue.createElementBlock("span",{key:0,class:"other-login-text link",onClick:e[11]||(e[11]=t=>o.isOtherLogin=!o.isOtherLogin)},"其他方式登录"))]),_:1})]))])}}}),P=p(L,[["__scopeId","data-v-5e04ec2c"]]);export{P as default};

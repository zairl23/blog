import{M as m,I as p,d as c,a9 as i,r as u,N as n,k as l}from"./entry.d825ce87.js";import{u as d}from"./asyncData.36ef5520.js";import f from"./Ellipsis.49946b79.js";import _ from"./ComponentPlaygroundData.793bfe9b.js";import"./TabsHeader.2e259ab0.js";import"./ComponentPlaygroundProps.f16b680b.js";import"./ProseH4.272b1285.js";import"./ProseCodeInline.9aab4656.js";import"./Badge.1c080c6c.js";import"./MDCSlot.ea655bd1.js";import"./slot.cb49637f.js";import"./ProseP.abd333e8.js";import"./index.4da70b1f.js";import"./ComponentPlaygroundSlots.vue.15a72d91.js";import"./ComponentPlaygroundTokens.vue.8ac5fa0a.js";async function y(o){const t=m(o);{const{data:e}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const g=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),e=u({...o.props}),r=await y(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const V=l(g,[["__scopeId","data-v-2515e4cc"]]);export{V as default};

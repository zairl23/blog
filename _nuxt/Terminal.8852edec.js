import{u as m}from"./index.c76bb1ec.js";import{d as v,r as h,I as y,b as s,c as o,M as i,f as p,e,F as f,Z as k,p as C,i as g,t as x,k as I}from"./entry.330664d0.js";const c=t=>(C("data-v-2d287527"),t=t(),g(),t),S={key:0,class:"copied"},b=c(()=>e("div",{class:"scrim"},null,-1)),w=c(()=>e("div",{class:"content"}," Copied! ",-1)),B=[b,w],T=c(()=>e("div",{class:"header"},[e("div",{class:"controls"},[e("div"),e("div"),e("div")]),e("div",{class:"title"}," Bash ")],-1)),F={class:"window"},N=c(()=>e("span",{class:"sign"},"$",-1)),V={class:"content"},j={key:1,class:"prompt"},q=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(t){const a=t,{copy:_}=m(),n=h("init"),d=y(()=>typeof a.content=="string"?[a.content]:a.content),l=u=>{_(d.value.join(`
`)).then(()=>{n.value="copied",setTimeout(()=>{n.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,A)=>(s(),o("div",{class:"terminal",onClick:l},[i(n)==="copied"?(s(),o("div",S,B)):p("",!0),T,e("div",F,[(s(!0),o(f,null,k(i(d),r=>(s(),o("span",{key:r,class:"line"},[N,e("span",V,x(r),1)]))),128))]),i(n)!=="copied"?(s(),o("div",j," Click to copy ")):p("",!0)]))}});const L=I(q,[["__scopeId","data-v-2d287527"]]);export{L as default};

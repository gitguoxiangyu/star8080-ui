import{e as p,g as u,h as D,_ as h,o as a,c as l,i as f,j as w,n as $,k as T,l as A,m as L,a as s,t as m,p as g,q as b,s as k,d as S,b as x,w as y,T as C,v as N,F as B,x as z,y as I,r as F,z as V,f as H,A as E,B as O,C as P,D as M}from"./index-40a23a51.js";const j=["primary","success","info","warning","danger","text"],q=["midium","small","mini"],G={type:{type:String,validator(e){return j.includes(e)}},plain:Boolean,round:Boolean,disabled:Boolean,icon:String,iconPosition:String,size:{type:String,validator(e){return q.includes(e)}}},W=p({name:"star-button",props:G,setup(e){const t=u(()=>({[`star-button--${e.type}`]:e.type,[`star-button--${e.size}`]:e.size,"is-plain":e.plain,"is-round":e.round,"is-disabled":e.disabled})),o=u(()=>{const d=e.icon,r=e.iconPosition;return{iconName:d,iconPosition:r}}),n=D();return{styleClass:t,iconFont:o,slots:n}}}),J={key:0,class:"star-button-text"};function K(e,t,o,n,d,r){return a(),l("button",{class:$(["star-button",e.styleClass])},[e.slots.default?(a(),l("span",J,[f(e.$slots,"default")])):w("",!0)],2)}const Q=h(W,[["render",K]]),_=e=>(e.install=t=>{const o=e.name||e.__name;t.component(o,e)},e),St=_(Q);const U={name:{type:String},dot:{type:Boolean},badge:{type:String},color:{type:String}},X=p({name:"k-icon",props:U,setup(e){T(()=>{A(()=>import("./iconfont-0422e78e.js"),[])});const t=u(()=>`#kitty-${e.name}`),o=u(()=>({["star-dot"]:e.dot&&!e.badge})),n=u(()=>e.badge),d=u(()=>({color:e.color}));return{iconName:t,styleDot:o,badge:n,iconColor:d}}}),Y={class:"star-icon"},Z=["xlink:href"];function ee(e,t,o,n,d,r){return a(),l("div",Y,[(a(),l("svg",{class:"icon",style:L(e.iconColor),"aria-hidden":"true"},[s("use",{"xlink:href":e.iconName},null,8,Z)],4)),e.dot?(a(),l("div",{key:0,class:$(["star-info",e.styleDot])},m(e.badge),3)):w("",!0)])}const te=h(X,[["render",ee]]),Pt=_(te);const se=["primary","success","info","warning","danger"],ne={type:{type:String,validator(e){return se.includes(e)}},disabled:Boolean,underline:Boolean},oe=p({name:"star-link",props:ne,setup(e){const t=g(),o=u(()=>({[`star-link--${e.type}`]:e.type,"is-disabled":e.disabled,"is-underline":e.underline}));return{attrs:t,styleClass:o}}});function ae(e,t,o,n,d,r){return a(),l("a",b(e.attrs,{class:["star-link",e.styleClass]}),[f(e.$slots,"default")],16)}const ie=h(oe,[["render",ae]]),Mt=_(ie);const le=["small","middle","large"],de={src:String,name:String,size:{type:String,default:"middle",validator(e){return le.includes(e)}}},re=p({name:"star-avatar",props:de,setup(e){const t=g(),o=u(()=>({[`star-avatar-${e.size}`]:e.size})),n=k(!1);return{attrs:t,styleClass:o,imgError:n}}});const ce=["src"],ue={key:1,class:"text-box"},pe={key:2,class:"not_login",t:"1649069469972",viewBox:"0 0 591 591",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8086",width:"591px",height:"591px"},_e=s("g",null,[s("path",{class:"fil0",d:"M564.981 591l-538.962 0c-0.048,-1.823 -0.079,-3.649 -0.079,-5.483 0,-99.69 70.226,-184.973 169.614,-219.828 27.129,25.437 61.958,40.731 99.946,40.731 37.988,0 72.817,-15.293 99.946,-40.73 99.388,34.855 169.614,120.137 169.614,219.827 0,1.834 -0.032,3.66 -0.079,5.483z"}),S(" /> "),s("ellipse",{class:"fil0",cx:"295.5",cy:"229.099",rx:"122.126",ry:"138.17"})],-1),ve=[_e];function me(e,t,o,n,d,r){return a(),l("div",b(e.attrs,{class:["star-avatar",e.styleClass]}),[e.src&&!e.imgError?(a(),l("img",{key:0,src:e.src,onError:t[0]||(t[0]=i=>e.imgError=!0)},null,40,ce)):e.name?(a(),l("div",ue,[s("p",null,m(e.name.slice(0,1)),1)])):(a(),l("svg",pe,ve))],16)}const he=h(re,[["render",me]]),Tt=_(he);const $e={num:Number,ripple:Boolean},ge=p({name:"star-badge",props:$e,setup(e){const t=g(),o=u(()=>({"star-badge-ripple":e.ripple}));return{attrs:t,styleClass:o}}});const fe={key:0,class:"badge-num"},we=s("div",{class:"ripple-item"},null,-1),ye=s("div",{class:"ripple-item ripple-item-2"},null,-1),be={key:1,class:"badge-point"},xe=s("div",{class:"ripple-item"},null,-1),ke=s("div",{class:"ripple-item ripple-item-2"},null,-1),Ce=[xe,ke];function Ve(e,t,o,n,d,r){return a(),l("span",b(e.attrs,{class:["star-badge",e.styleClass]}),[f(e.$slots,"default"),e.num?(a(),l("div",fe,[s("span",null,m(e.num),1),we,ye])):(a(),l("div",be,Ce))],16)}const Be=h(ge,[["render",Ve]]),Nt=_(Be);const ze={tip:String},Le=p({name:"star-tooltip",props:ze,setup(e){const t=g(),o=u(()=>({"tooltip-open":n})),n=k(!1);return{attrs:t,styleClass:o,open:n}}});const Se={class:"star-tooltip-dropdown-wrapper"},Pe={key:0,class:"star-tooltip-dropdown"};function Me(e,t,o,n,d,r){return a(),l("span",b(e.attrs,{class:["star-tooltip",e.styleClass],onMouseenter:t[0]||(t[0]=i=>e.open=!0),onMouseleave:t[1]||(t[1]=i=>e.open=!1)}),[f(e.$slots,"default"),s("div",Se,[x(C,{name:"tooltip-dropdown"},{default:y(()=>[e.open?(a(),l("div",Pe,[s("span",null,m(e.tip),1)])):w("",!0)]),_:1})])],16)}const Te=h(Le,[["render",Me]]),Et=_(Te);const Ne={modelValue:Boolean},Ee=p({name:"star-collapse",props:Ne,setup(e){const t=g(),o=u(()=>({"collapse-open":e.modelValue}));T(()=>{e.modelValue?n.value="auto":n.value="0px"}),N(()=>e.modelValue,r=>{r?(n.value=getComputedStyle(d.value).height,setTimeout(()=>{n.value="auto"},300)):(n.value=getComputedStyle(d.value).height,requestAnimationFrame(()=>{n.value="0px"}))});const n=k("auto"),d=k(null);return{attrs:t,styleClass:o,open,contentHeight:n,content:d}}});const Re=s("svg",{class:"star-collapse-arrow",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"})],-1),De={class:"star-collapse-content",ref:"content"};function Ae(e,t,o,n,d,r){return a(),l("div",b(e.attrs,{class:["star-collapse",e.styleClass]}),[s("div",{class:"star-collapse-title",onClick:t[0]||(t[0]=i=>e.$emit("update:modelValue",!e.modelValue))},[f(e.$slots,"title"),Re]),x(C,{name:"collapse"},{default:y(()=>[s("div",{class:"star-collapse-content-box",style:L({height:e.contentHeight})},[s("div",De,[f(e.$slots,"default")],512)],4)]),_:3})],16)}const Ie=h(Ee,[["render",Ae]]),Rt=_(Ie);const Fe={modelValue:Number,max:Number},He=p({name:"star-pagination",props:Fe,emits:["update:modelValue"],setup(e,t){const o=g(),n=u(()=>({}));function d(i){t.emit("update:modelValue",i)}const r=u(()=>{let i=[];if(e.max<=9){for(let v=1;v<=e.max;v++)i.push(v);return i}let c=e.modelValue-2;c<3&&(c=3),c+4>e.max-2&&(c=e.max-6),i.push(1),c>3?i.push(-1):i.push(2);for(let v=0;v<5;v++)i.push(c+v);return c+4<e.max-2?i.push(-2):i.push(e.max-1),i.push(e.max),i});return{attrs:o,styleClass:n,setPage:d,currentPages:r}}});const Oe={class:"pagination-bottons"},je=["disabled"],qe=s("svg",{class:"prev",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"})],-1),Ge=[qe],We=["onClick","disabled"],Je={key:1,class:"page-button-ellipsis",disabled:""},Ke=s("svg",{t:"1676628763138",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4926",width:"128",height:"128"},[s("path",{d:"M64 512c0-31.44 10.92-58.07 32.75-79.91 21.83-21.83 48.47-32.75 79.9-32.75 31.44 0 58.08 10.92 79.91 32.75s32.75 48.47 32.75 79.91-10.92 58.07-32.75 79.91c-21.83 21.83-48.47 32.75-79.91 32.75-31.44 0-58.07-10.91-79.9-32.75C74.92 570.07 64 543.44 64 512z m335.35 0c0-31.44 10.91-58.07 32.75-79.91 21.83-21.83 48.47-32.75 79.91-32.75 31.44 0 58.07 10.92 79.91 32.75 21.83 21.83 32.75 48.47 32.75 79.91s-10.92 58.07-32.75 79.91c-21.83 21.83-48.47 32.75-79.91 32.75-31.44 0-58.07-10.91-79.91-32.75-21.84-21.84-32.75-48.47-32.75-79.91z m335.34 0c0-31.44 10.92-58.07 32.75-79.91 21.83-21.83 48.47-32.75 79.91-32.75s58.07 10.92 79.91 32.75C949.09 453.93 960 480.56 960 512s-10.91 58.07-32.75 79.91-48.47 32.75-79.91 32.75-58.07-10.91-79.91-32.75c-21.82-21.84-32.74-48.47-32.74-79.91z","p-id":"4927"})],-1),Qe=[Ke],Ue=["disabled"],Xe=s("svg",{class:"next",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"})],-1),Ye=[Xe];function Ze(e,t,o,n,d,r){return a(),l("div",b(e.attrs,{class:["star-pagination",e.styleClass]}),[s("div",Oe,[s("button",{class:"neighbor-bottons",onClick:t[0]||(t[0]=i=>e.setPage(e.modelValue-1)),disabled:e.modelValue<=1},Ge,8,je),x(I,{name:"page-buttons"},{default:y(()=>[(a(!0),l(B,null,z(e.currentPages,i=>(a(),l("div",{key:i,class:"page-button-item"},[i>0?(a(),l("button",{key:0,class:"page-button",onClick:c=>e.setPage(i),disabled:e.modelValue==i},m(i),9,We)):(a(),l("button",Je,Qe))]))),128))]),_:1}),s("button",{class:"neighbor-bottons",onClick:t[1]||(t[1]=i=>e.setPage(e.modelValue+1)),disabled:e.modelValue>=e.max},Ye,8,Ue)])],16)}const et=h(He,[["render",Ze]]),Dt=_(et),tt={class:"aside_nav_item"},st={key:0,class:"aside_nav_group"},R=p({name:"NavItem",props:["nav"],setup(e){return(t,o)=>{const n=F("RouterLink");return a(),l("div",tt,[e.nav.children?(a(),l("div",st,[s("h3",null,m(e.nav.title),1),(a(!0),l(B,null,z(e.nav.children,d=>(a(),V(R,{nav:d},null,8,["nav"]))),256))])):e.nav.link?(a(),V(n,{key:1,to:e.nav.link,class:"aside_nav_link"},{default:y(()=>[S(m(e.nav.title),1)]),_:1},8,["to"])):w("",!0)])}}}),nt={class:"aside_nav"},ot=p({name:"index",props:["nav"],setup(e){return(t,o)=>(a(),l("div",nt,[(a(!0),l(B,null,z(e.nav,n=>(a(),V(R,{nav:n},null,8,["nav"]))),256))]))}});const At=_(ot),at={class:"Dialog"},it={key:0,class:"dialog_body"},lt={class:"dialog_wrapper"},dt={class:"dialog_box",ref:"dialog_box"},rt=s("svg",{t:"1656216329802",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2199",width:"128",height:"128"},[s("path",{d:"M818.1 872.1c-15.4 0-30.7-5.9-42.4-17.6l-613-612.9c-23.4-23.4-23.4-61.4 0-84.9 23.4-23.4 61.4-23.4 84.9 0l612.9 612.9c23.4 23.4 23.4 61.4 0 84.9a59.914 59.914 0 0 1-42.4 17.6z",fill:"","p-id":"2200"}),s("path",{d:"M205.1 872.1c-15.4 0-30.7-5.9-42.4-17.6-23.4-23.4-23.4-61.4 0-84.9l612.9-612.9c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.9L247.6 854.5c-11.7 11.7-27.1 17.6-42.5 17.6z",fill:"","p-id":"2201"}),s("path",{d:"M818.1 872.1c-15.4 0-30.7-5.9-42.4-17.6l-613-612.9c-23.4-23.4-23.4-61.4 0-84.9 23.4-23.4 61.4-23.4 84.9 0l612.9 612.9c23.4 23.4 23.4 61.4 0 84.9a59.914 59.914 0 0 1-42.4 17.6z",fill:"","p-id":"2202"}),s("path",{d:"M205.1 872.1c-15.4 0-30.7-5.9-42.4-17.6-23.4-23.4-23.4-61.4 0-84.9l612.9-612.9c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.9L247.6 854.5c-11.7 11.7-27.1 17.6-42.5 17.6z",fill:"","p-id":"2203"}),s("path",{d:"M818.1 872.1c-15.4 0-30.7-5.9-42.4-17.6l-613-612.9c-23.4-23.4-23.4-61.4 0-84.9 23.4-23.4 61.4-23.4 84.9 0l612.9 612.9c23.4 23.4 23.4 61.4 0 84.9a59.914 59.914 0 0 1-42.4 17.6z",fill:"","p-id":"2204"}),s("path",{d:"M205.1 872.1c-15.4 0-30.7-5.9-42.4-17.6-23.4-23.4-23.4-61.4 0-84.9l612.9-612.9c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.9L247.6 854.5c-11.7 11.7-27.1 17.6-42.5 17.6z",fill:"","p-id":"2205"}),s("path",{d:"M818.1 872.1c-15.4 0-30.7-5.9-42.4-17.6l-613-612.9c-23.4-23.4-23.4-61.4 0-84.9 23.4-23.4 61.4-23.4 84.9 0l612.9 612.9c23.4 23.4 23.4 61.4 0 84.9a59.914 59.914 0 0 1-42.4 17.6z",fill:"","p-id":"2206"}),s("path",{d:"M205.1 872.1c-15.4 0-30.7-5.9-42.4-17.6-23.4-23.4-23.4-61.4 0-84.9l612.9-612.9c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.9L247.6 854.5c-11.7 11.7-27.1 17.6-42.5 17.6z",fill:"","p-id":"2207"})],-1),ct=[rt],ut={class:"dialog_content"},pt=p({name:"index",props:["modelValue","title"],emits:["update:modelValue"],setup(e,{emit:t}){const o=e,n=H({on_top:!0}),d=k(null);N(()=>o.modelValue,i=>{i?O(()=>{n.on_top=!0,d.value.addEventListener("scroll",r)}):d.value.removeEventListener("scroll",r)});function r(){d.value.scrollTop>10?n.on_top=!1:n.on_top=!0}return(i,c)=>(a(),l("div",at,[(a(),V(E,{to:"#app"},[x(C,{name:"dialog"},{default:y(()=>[e.modelValue?(a(),l("div",it,[s("div",{class:"dialog_overlay",onClick:c[0]||(c[0]=v=>t("update:modelValue",!1))}),s("div",lt,[s("div",dt,[e.title?(a(),l("div",{key:0,class:$(["dialog_title_container",{on_top:n.on_top}])},[s("h2",null,m(e.title),1),s("div",{class:"dialog_close",onClick:c[1]||(c[1]=v=>t("update:modelValue",!1))},ct)],2)):w("",!0),s("div",{class:$(["dialog_content_container",{hide_title:!e.title}]),ref_key:"dialog_content_container",ref:d},[s("div",ut,[f(i.$slots,"default")])],2)],512)])])):w("",!0)]),_:3})]))]))}});const It=_(pt);const _t={modelValue:String},vt=p({name:"star-input",props:_t,emits:["update:modelValue"],setup(e,t){const o=g(),n=u(()=>({}));return{attrs:o,styleClass:n}}});const mt=["value"];function ht(e,t,o,n,d,r){return a(),l("div",{class:$(["star-input-box",e.styleClass])},[s("input",b(e.attrs,{class:"star-input",value:e.modelValue,onInput:t[0]||(t[0]=i=>e.$emit("update:modelValue",i.target.value))}),null,16,mt)],2)}const $t=h(vt,[["render",ht]]),Ft=_($t);const gt={modelValue:String,options:Object},ft=p({name:"star-radio",props:gt,emits:["update:modelValue"],setup(e,t){const o=g(),n=u(()=>({}));return{attrs:o,styleClass:n}}});const wt=["onClick"];function yt(e,t,o,n,d,r){return a(),l("div",{class:$(["star-radio-box",e.styleClass])},[(a(!0),l(B,null,z(e.options,(i,c)=>(a(),l("div",{class:$(["star-radio-option",{active:c==e.modelValue}]),key:c,onClick:v=>e.$emit("update:modelValue",c)},m(i),11,wt))),128))],2)}const bt=h(ft,[["render",yt]]),Ht=_(bt);const xt={components:{},props:["modelValue","options"],data(){return{open:!1,open_dropdown:!1,dropdown_x:0,dropdown_y:0,dropdown_width:0,dropdown_height:0}},methods:{open_action(){this.open=!0,this.$nextTick(()=>{this.caculate(),window.addEventListener("resize",this.caculate),this.open_dropdown=!0})},close_action(){this.open_dropdown=!1,window.removeEventListener("resize",this.caculate),setTimeout(()=>{this.open=!1},300)},click_option(e,t){this.$emit("update:modelValue",t),this.close_action()},caculate(){let e=this.$el,t=window.innerWidth,o=window.innerHeight;this.dropdown_x=e.getBoundingClientRect().x,this.dropdown_y=e.getBoundingClientRect().y+e.getBoundingClientRect().height,this.dropdown_width=e.getBoundingClientRect().width,this.$nextTick(()=>{let n=this.$refs.dropdown;this.dropdown_height=n.getBoundingClientRect().height,this.dropdown_x+this.dropdown_width>t&&(this.dropdown_x=t-this.dropdown_width,this.dropdown_x<0&&(this.dropdown_x=0)),this.dropdown_y+this.dropdown_height>o&&(this.dropdown_y=o-this.dropdown_height)})}}},kt=s("svg",{class:"star-select-arrow",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"})],-1),Ct={class:"dropdown_box",ref:"dropdown_box"},Vt=["onClick"];function Bt(e,t,o,n,d,r){return a(),l("div",{class:$(["star-select-box",{open:d.open}])},[s("div",{class:"star-select",onClick:t[0]||(t[0]=(...i)=>r.open_action&&r.open_action(...i))},[S(m(o.options[o.modelValue])+" ",1),kt]),(a(),V(E,{to:"body"},[d.open?(a(),l("div",{key:0,class:"select_dropdown",ref:"dropdown",style:L({top:d.dropdown_y+"px",left:d.dropdown_x+"px",width:d.dropdown_width+"px"})},[x(C,{name:"form_dropdown_overlay"},{default:y(()=>[P(s("div",{class:"dropdown_overlay",onClick:t[1]||(t[1]=(...i)=>r.close_action&&r.close_action(...i))},null,512),[[M,d.open_dropdown]])]),_:1}),x(C,{name:"form_dropdown"},{default:y(()=>[P(s("div",Ct,[(a(!0),l(B,null,z(o.options,(i,c)=>(a(),l("div",{class:$(["label star-select",{active:c==o.modelValue}]),key:c,onClick:v=>r.click_option(i,c)},m(i),11,Vt))),128))],512),[[M,d.open_dropdown]])]),_:1})],4)):w("",!0)]))],2)}const zt=h(xt,[["render",Bt]]),Ot=_(zt);export{At as A,St as B,Rt as C,It as D,Pt as I,Mt as L,Dt as P,Ht as R,Ot as S,Et as T,Ft as a,Tt as b,Nt as c};
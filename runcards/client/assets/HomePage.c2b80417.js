import{_ as d,u as p,m as g,n as l,l as _,q as u,c as n,b as s,A as a,o as r,p as m,k as b}from"./index.e44876de.js";const h="/assets/logo.3d0f756b.jpg";const f={setup(){const e=p();return g(()=>{a.account.id&&e.push({name:"RunGroups"})}),{router:e,async login(){try{await l.loginWithRedirect()}catch(t){_.error(t)}},logout(){l.logout({returnTo:window.location.origin})},user:u(()=>a.user),account:u(()=>a.account)}}},i=e=>(m("data-v-cb6beb3b"),e=e(),b(),e),x={class:"home flex-grow-1 d-flex flex-column align-items-center justify-content-center"},y={class:"home-card p-3 bg-white rounded elevation-3 mt-4"},k=i(()=>s("img",{src:h,alt:"Nampa fire Logo",class:""},null,-1)),v=i(()=>s("h1",{class:"my-5 bg-dark text-white p-3 rounded text-center"}," Nampa Fire Run Cards ",-1)),w=i(()=>s("p",null,"Dispach Sign in here:",-1));function S(e,t,A,o,I,R){return r(),n("div",x,[s("div",y,[k,v,w,o.user.isAuthenticated?(r(),n("button",{key:1,class:"btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0",onClick:t[1]||(t[1]=(...c)=>o.logout&&o.logout(...c))}," Logout ")):(r(),n("button",{key:0,class:"btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0",onClick:t[0]||(t[0]=(...c)=>o.login&&o.login(...c))}," Login "))])])}const C=d(f,[["render",S],["__scopeId","data-v-cb6beb3b"]]);export{C as default};
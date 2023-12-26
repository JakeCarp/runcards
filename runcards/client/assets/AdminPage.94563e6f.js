import{_ as R,e as T,f as O,z as I,s as x,g as j,h as u,d as b,M as A,l as p,P as _,c as i,b as e,F as v,i as S,a as F,A as f,r as Z,o as d,t as h,j as E,w as g,p as P,k as U}from"./index.353d6207.js";const B={setup(){T(async()=>{await O.getChannels(),await I.getZones(),await x.getStations(),await j.getResources(),document.getElementById("SimpleFormModal").addEventListener("hidden.bs.modal",()=>{r.value="",l.value={},y.value="",t.value=""})});const r=u(""),l=u({}),y=u(""),t=u(!1),M=u(""),w=b(()=>f.account),C=b(()=>f.channels),o=b(()=>f.zones),n=b(()=>f.stations),k=b(()=>f.resources);return{stationId:r,formEdit:t,formType:y,selectedObj:l,channels:C,zones:o,stations:n,resources:k,selectedTab:M,account:w,openSimpleObjectModal(c,a,m){try{y.value=c,m&&(r.value=m),console.log(r.value),a?(t.value=!0,l.value=a,A.getOrCreateInstance("#SimpleFormModal").show()):(t.value=!1,l.value={},A.getOrCreateInstance("#SimpleFormModal").show())}catch(N){p.error(N)}},async deleteChannel(c){try{await _.confirm()&&(O.deleteChannel(c),_.toast("Channel Removed!","success"))}catch(a){p.error(a)}},determinStationName(c){return n.value.filter(m=>m.id===c)[0].name},async deleteZone(c,a){try{await _.confirm()&&(I.deleteZone(c,a),_.toast("Zone Removed!","success"))}catch(m){p.error(m)}},async deleteResource(c){try{await _.confirm()&&(j.deleteResource(c),_.toast("Resource Removed!","success"))}catch(a){p.error(a)}},async deleteStation(c){try{await _.confirm()&&(x.deleteStation(c),_.toast("Station Removed!","success"))}catch(a){p.error(a)}}}}},s=r=>(P("data-v-b7487888"),r=r(),U(),r),D={key:0,class:"container"},L=s(()=>e("div",{class:"row my-4"},[e("div",{class:"col-12 d-flex justify-content-around"},[e("p",{id:"RM",class:"tab fs-1 fw-bold selectable"},"Resource Management")])],-1)),z={class:"row card mx-5 py-2"},V={class:"col-6 offset-md-3 text-center mb-4"},Y=s(()=>e("h3",null,"Channels",-1)),G={class:"table table-striped"},q=s(()=>e("th",{scope:"col"},"Designation",-1)),H={scope:"col"},J={scope:"row",class:"pt-3"},K=["onClick"],Q=s(()=>e("i",{class:"mdi mdi-pencil selectable"},null,-1)),W=[Q],X=["onClick"],$=s(()=>e("i",{class:"mdi mdi-trash-can text-danger selectable"},null,-1)),ee=[$],te={class:"col-6 offset-md-3 text-center"},oe=s(()=>e("h3",null,"Stations and Zones",-1)),se={class:"accordion",id:"stationAccordion"},ne={class:"accordion-header",id:"headingOne"},ce=["data-bs-target"],le={class:"ms-5"},ae=["onClick"],ie=s(()=>e("i",{class:"mdi mdi-pencil selectable"},null,-1)),de=[ie],re=["onClick"],_e=s(()=>e("i",{class:"mdi mdi-trash-can text-danger selectable"},null,-1)),he=[_e],me=["id"],ue={class:"accordion-body"},be={style:{"list-style":"none"}},pe=["onClick"],ve=s(()=>e("i",{class:"mdi mdi-pencil selectable"},null,-1)),fe=[ve],ye=["onClick"],Se=s(()=>e("i",{class:"mdi mdi-trash-can text-danger selectable"},null,-1)),Ce=[Se],ke={class:"mt-2 border border-light p-3"},ge=["onClick"],Me={class:"accordion-item"},we={class:"col-9 offset-md-1 text-center mt-4"},Oe=s(()=>e("h3",{class:"ms-5 ps-5"},"Units",-1)),Ie={class:"table table-striped"},xe=s(()=>e("th",{scope:"col"},"Unit Number",-1)),je=s(()=>e("th",{scope:"col"},"Type",-1)),Ae=s(()=>e("th",{scope:"col"},"Minimum Staff",-1)),Ne=s(()=>e("th",{scope:"col"},"24/7 staffed",-1)),Re=s(()=>e("th",{scope:"col"},"Station",-1)),Te={scope:"col"},Fe={scope:"row"},Ze=["onClick"],Ee=s(()=>e("i",{class:"mdi mdi-pencil selectable"},null,-1)),Pe=[Ee],Ue=["onClick"],Be=s(()=>e("i",{class:"mdi mdi-trash-can text-danger selectable"},null,-1)),De=[Be],Le={key:1};function ze(r,l,y,t,M,w){const C=Z("SimpleFormModal");return d(),i(v,null,[t.account.admin?(d(),i("div",D,[L,e("div",z,[e("div",V,[Y,e("table",G,[e("thead",null,[e("tr",null,[q,e("th",H,[e("button",{class:"btn",onClick:l[0]||(l[0]=o=>t.openSimpleObjectModal("channel"))},"Add Channel")])])]),e("tbody",null,[(d(!0),i(v,null,S(t.channels,o=>(d(),i("tr",{key:o.id},[e("th",J,h(o.name),1),e("td",null,[e("button",{class:"btn",onClick:n=>t.openSimpleObjectModal("channel",o)},W,8,K),e("button",{class:"btn",onClick:n=>t.deleteChannel(o.id)},ee,8,X)])]))),128))])])]),e("div",te,[oe,e("div",se,[(d(!0),i(v,null,S(t.stations,o=>(d(),i("div",{key:o.id,class:"accordion-item"},[e("h2",ne,[e("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#a"+o.id,"aria-expanded":"true","aria-controls":"collapseOne"},[E(h(o.name)+" ",1),e("div",le,[e("button",{class:"btn",onClick:g(n=>t.openSimpleObjectModal("station",o),["stop"])},de,8,ae),e("button",{class:"btn",onClick:g(n=>t.deleteStation(o.id),["stop"])},he,8,re)])],8,ce)]),e("div",{id:"a"+o.id,class:"accordion-collapse collapse","aria-labelledby":"headingOne","data-bs-parent":"#stationAccordion"},[e("div",ue,[e("ul",be,[(d(!0),i(v,null,S(t.zones[o.id],n=>(d(),i("li",{key:n.id,class:"d-flex justify-content-between"},[e("span",null,h(n.name),1),e("span",null,[e("button",{class:"btn",onClick:g(k=>t.openSimpleObjectModal("zone",n),["stop"])},fe,8,pe),e("button",{class:"btn",onClick:k=>t.deleteZone(n.id,n.stationId)},Ce,8,ye)])]))),128)),e("li",ke,[e("button",{onClick:n=>t.openSimpleObjectModal("zone",void 0,o.id),class:"btn btn-primary"},"Add New Zone",8,ge)])])])],8,me)]))),128)),e("div",Me,[e("button",{class:"btn",onClick:l[1]||(l[1]=o=>t.openSimpleObjectModal("station"))},"Add Station")])])]),e("div",we,[Oe,e("table",Ie,[e("thead",null,[e("tr",null,[xe,je,Ae,Ne,Re,e("th",Te,[e("button",{class:"btn",onClick:l[2]||(l[2]=o=>t.openSimpleObjectModal("resource"))},"Add Unit")])])]),e("tbody",null,[(d(!0),i(v,null,S(t.resources,o=>(d(),i("tr",{key:o.id},[e("th",Fe,h(o.unitNumber),1),e("td",null,h(o.type),1),e("td",null,h(o.minStaff),1),e("td",null,h(o.alwaysStaffed?"Yes":"No"),1),e("td",null,h(t.determinStationName(o.stationId)),1),e("td",null,[e("button",{onClick:n=>t.openSimpleObjectModal("resource",o),class:"btn"},Pe,8,Ze),e("button",{onClick:n=>t.deleteResource(o.id),class:"btn"},De,8,Ue)])]))),128))])])])])])):(d(),i("div",Le," LOGIN TO ADMIN ACCOUNT TO ACCESS ADMIN FUNCTIONALITY ")),F(C,{objProp:t.selectedObj,type:t.formType,edit:t.formEdit,stationId:t.stationId},null,8,["objProp","type","edit","stationId"])],64)}const Ye=R(B,[["render",ze],["__scopeId","data-v-b7487888"]]);export{Ye as default};

import{a as w,r as a,j as s,s as p,g as k,b as C,c as E,p as j,d as v,e as F,f as L,h as A}from"./index-168afcfc.js";import{U as O,L as R,O as I,a as T,C as z,b as N,R as $,P as _,c as B,d as D,e as J,f as U,F as G,N as M,E as Z,g as P,h as g,i as u,A as Q,j as V,k as q}from"./ReadMe-a7c398bc.js";import{Q as H,B as S}from"./ReactToastify-0f5d058d.js";const K=({array:c})=>{const r=w(),[h,f]=a.useState({}),[l,n]=a.useState([]);a.useEffect(()=>{const e=JSON.parse(localStorage.getItem("tokenPsych"));if(e===null||e.length===0)return;const t=JSON.parse(localStorage.getItem("favoritesPsych"))||[];n(t)},[]);const m=e=>{f(t=>({...t,[e]:!t[e]}))},d=async e=>{const t=JSON.parse(localStorage.getItem("tokenPsych"));if(t&&t.length!==0){const i=await r(k(t));if(i.payload==="This service is available only to registered users"){S(i.payload);return}}else{S("This service is available only to registered users");return}const o=[...l],x=o.indexOf(e);x!==-1?(o.splice(x,1),r(C(e))):(o.push(e),r(E(e))),n(o),localStorage.setItem("favoritesPsych",JSON.stringify(o))},y=e=>l.includes(e);return s.jsxs(s.Fragment,{children:[s.jsx(H,{toastStyle:{background:"#fc0317",color:"white"}}),s.jsx(O,{children:c.map((e,t)=>s.jsxs(R,{children:[s.jsxs(I,{children:[s.jsx(T,{width:"14",height:"14",children:s.jsx("use",{href:`${p}#Group`})}),s.jsx(z,{src:e.avatar_url,alt:e.name})]}),s.jsxs(N,{children:[s.jsxs($,{children:[s.jsx(_,{children:"Psychologist"}),s.jsxs(B,{children:[s.jsx("svg",{width:"16",height:"16",children:s.jsx("use",{href:`${p}#star`})}),s.jsxs(D,{children:["Rating: ",e.rating]}),s.jsxs(J,{children:["Price / 1 hour:",s.jsxs(U,{children:[" ",e.price_per_hour,"$"]})]}),s.jsx(G,{onClick:()=>d(e.name),children:y(e.name)?s.jsx("svg",{width:"26",height:"26",children:s.jsx("use",{href:`${p}#hart`})}):s.jsx("svg",{width:"26",height:"26",children:s.jsx("use",{href:`${p}#hartoff`})})})]})]}),s.jsx(M,{children:e.name}),s.jsxs(Z,{children:[s.jsxs(P,{children:[s.jsxs(g,{children:["Experience: ",s.jsx(u,{children:e.experience})]}),s.jsxs(g,{children:["License:",s.jsxs(u,{children:[" ",e.license]})]})]}),s.jsxs(P,{children:[s.jsxs(g,{children:["Specialization:",s.jsxs(u,{children:[" ",e.specialization]})]}),s.jsxs(g,{children:["Initial_consultation:",s.jsxs(u,{children:[" ",e.initial_consultation]})]})]})]}),s.jsx(Q,{children:e.about}),!h[t]&&s.jsx(V,{onClick:()=>m(t),children:"Read more"}),h[t]&&s.jsx(q,{array:e.reviews,doctor:e})]})]},e.name))})]})},W=j.div`
  margin: auto;
  max-width: 1204px;
  padding: 64px 20px;
  height: 110%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding: 32px 20px;
    min-width: 636px;
  }
`,X=j.select`
  width: 226px;
  border-radius: 14px;
  padding: 16px 18px;
  background: #54be96;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: #fbfbfb;
  margin-bottom: 32px;
  &:hover {
    background: #36a379;
  }

  @media screen and (max-width: 480px) {
    width: 310px;
    font-size: 30px;
  }
`,Y=j.button`
  border-radius: 30px;
  padding: 14px 48px;
  /* width: 176px; */
  margin: 64px auto;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`,ss=j.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #8a8a89;
  margin-bottom: 8px;
  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`,as=()=>{const c=w(),[r,h]=a.useState(3),[f,l]=a.useState(!1),[n,m]=a.useState(!1),[d,y]=a.useState([]),e=v(i=>i.psychologists),t=v(i=>i.psychologistsSort);a.useEffect(()=>{if(t.length>0){const i=t.slice(0,r);y(i)}},[r,t]),a.useEffect(()=>{n||(n||c(F()),c(L(r)))},[c,r,n]);const o=()=>{if(e.length===32||d.length===32){l(!0);return}h(i=>i+3)},x=i=>{const b=i.target.value;l(!1),h(3),m(!0),c(A(b))};return s.jsxs(W,{children:[s.jsx(ss,{children:"Filters"}),s.jsxs(X,{onChange:x,children:[s.jsx("option",{children:"Show all"}),s.jsx("option",{children:"A to Z"}),s.jsx("option",{children:"Z to A"}),s.jsx("option",{children:"Less than 10$"}),s.jsx("option",{children:"Greater than 10$"}),s.jsx("option",{children:"Popular"}),s.jsx("option",{children:"Not popular"})]}),s.jsx(K,{array:n?d:e}),!f&&s.jsx(Y,{onClick:o,children:"Load more"})]})};export{as as default};

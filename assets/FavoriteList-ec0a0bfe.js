import{p as l,j as s,r as a,d as y,a as E,s as n,b as w}from"./index-168afcfc.js";import{U as S,L as F,O as P,a as C,C as R,b as I,R as b,P as k,c as L,d as A,e as O,f as _,F as D,N,E as $,g as x,h as t,i as r,A as z,j as B,k as G}from"./ReadMe-a7c398bc.js";import"./ReactToastify-0f5d058d.js";const J=l.div`
  width: 100%;
  height: 115%;
  padding-top: 64px;
  padding-bottom: 64px;
  @media screen and (max-width: 480px) {
    min-width: 580px;
  }
`,M="/psychologists/assets/giphy-7ea4495d.gif",U=l.div`
  background-color: #2753d6;
  margin: auto;
  margin-top: -64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  color: #e6faf8;
  font-size: 50px;
  width: 100vw;
  height: 115vh;
  @media screen and (max-width: 480px) {
    min-width: 662px;
  }
`,T=()=>s.jsxs(U,{children:[s.jsx("p",{children:"You have no saved data yet..."}),s.jsx("img",{src:M,alt:"Example GIF"})]}),K=()=>{const[p,j]=a.useState([]),[c,o]=a.useState([]),[h,m]=a.useState({}),d=y(e=>e.favoriteArray),g=E();a.useEffect(()=>{j(d)},[d]),a.useEffect(()=>{const e=JSON.parse(localStorage.getItem("favoritesPsych"))||[];o(e)},[]);const u=e=>{g(w(e));const i=c.filter(f=>f!==e);o(i),localStorage.setItem("favoritesPsych",JSON.stringify(i))},v=e=>{m(i=>({...i,[e]:!i[e]}))};return s.jsx(J,{children:c.length>0?s.jsx(S,{children:p.map((e,i)=>s.jsxs(F,{children:[s.jsxs(P,{children:[s.jsx(C,{width:"14",height:"14",children:s.jsx("use",{href:`${n}#Group`})}),s.jsx(R,{src:e.avatar_url,alt:e.name})]}),s.jsxs(I,{children:[s.jsxs(b,{children:[s.jsx(k,{children:"Psychologist"}),s.jsxs(L,{children:[s.jsx("svg",{width:"22",height:"22",children:s.jsx("use",{href:`${n}#star`})}),s.jsxs(A,{children:["Rating: ",e.rating]}),s.jsxs(O,{children:["Price / 1 hour:",s.jsxs(_,{children:[" ",e.price_per_hour,"$"]})]}),s.jsx(D,{onClick:()=>u(e.name),children:s.jsx("svg",{width:"22",height:"22",children:s.jsx("use",{href:`${n}#hart`})})})]})]}),s.jsx(N,{children:e.name}),s.jsxs($,{children:[s.jsxs(x,{children:[s.jsxs(t,{children:["Experience:"," ",s.jsx(r,{children:e.experience})]}),s.jsxs(t,{children:["License:",s.jsxs(r,{children:[" ",e.license]})]})]}),s.jsxs(x,{children:[s.jsxs(t,{children:["Specialization:",s.jsxs(r,{children:[" ",e.specialization]})]}),s.jsxs(t,{children:["Initial_consultation:",s.jsxs(r,{children:[" ",e.initial_consultation]})]})]})]}),s.jsx(z,{children:e.about}),!h[i]&&s.jsx(B,{onClick:()=>v(i),children:"Read more"}),h[i]&&s.jsx(G,{array:e.reviews,doctor:e})]})]},e.name))}):s.jsx(T,{})})};export{K as default};

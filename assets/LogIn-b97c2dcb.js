import{r as n,a as k,u as P,j as s,s as i,l as S}from"./index-168afcfc.js";import{c as v,a as h,u as C,L as b,Q as E,d as I,O as $,e as B,f as F,g as q,h as M,i as O,j as R,k as D,l as H,o as K,B as N}from"./ReactToastify-0f5d058d.js";import{P as g}from"./Registration.styled-6b0e4324.js";const Q=v().shape({email:h().email().required(),password:h().min(6).required()}),z=()=>{const[t,u]=n.useState(!1),[m,p]=n.useState(""),x=k(),o=P();n.useEffect(()=>{const e=r=>{r.key==="Escape"&&o("/")};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[o]);const{register:c,handleSubmit:j,formState:{errors:a}}=C({resolver:K(Q)}),w=async e=>{var d;const r=await x(S(e));((d=r.error)==null?void 0:d.message)==="Rejected"?N(r.payload):o("/psychologists")},f=()=>{o("/")},y=e=>{e.target===e.currentTarget&&o("/")},L=e=>{p(e.target.value)},l=()=>{u(!t)};return s.jsxs(b,{onClick:y,children:[s.jsx(E,{toastStyle:{background:"#fc0317",color:"white"}}),s.jsxs(I,{children:[s.jsx($,{onClick:f,children:s.jsx("svg",{width:"32",height:"32",children:s.jsx("use",{href:`${i}#out`})})}),s.jsx(B,{children:"Log In"}),s.jsx(F,{children:"Welcome back! Please enter your credentials to access your account and continue your search for a psychologist."}),s.jsxs(q,{onSubmit:j(w),children:[s.jsxs(M,{children:[s.jsx(O,{...c("email"),placeholder:"Email"}),a.email&&s.jsx("span",{style:{color:"#f71b2e"},children:a.email.message})]}),s.jsxs(R,{children:[s.jsx(D,{type:t?"text":"password",...c("password"),placeholder:"Password",value:m,onChange:L}),a.password&&s.jsx("span",{style:{color:"#f71b2e"},children:a.password.message}),t?s.jsx(g,{width:"20",height:"20",onClick:l,children:s.jsx("use",{href:`${i}#eye`})}):s.jsx(g,{width:"20",height:"20",onClick:l,children:s.jsx("use",{href:`${i}#eye-off`})})]}),s.jsx(H,{type:"submit",children:"Log In"})]})]})]})};export{z as default};

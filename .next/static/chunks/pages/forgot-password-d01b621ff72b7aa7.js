(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[742],{872:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forgot-password",function(){return r(9979)}])},9979:function(e,t,r){"use strict";r.r(t);var n=r(5893),s=r(7294),o=r(1676),a=r(5005),l=r(8981);let c=()=>{let e=(0,s.useRef)(null),[t,r]=(0,s.useState)(null),c=async t=>{t.preventDefault();try{await l.b.get("/resetPassword",{params:{email:e.current.value}}),window.location.replace("http://localhost:3000/reset-password")}catch(n){console.log("err",n.response),r("something went wrong.")}};return(0,n.jsxs)(o.Z,{onSubmit:c,children:[(0,n.jsxs)(o.Z.Group,{className:"mb-3",controlId:"formBasicPassword",children:[(0,n.jsx)(o.Z.Label,{children:"Enter email"}),(0,n.jsx)(o.Z.Control,{type:"email",ref:e,placeholder:"Enter email",required:!0})]}),t&&(0,n.jsx)("p",{style:{color:"red",marginBottom:"2rem"},children:t}),(0,n.jsx)(a.Z,{variant:"primary",type:"submit",style:{width:"100%"},children:"Submit"})]})};t.default=c},8981:function(e,t,r){"use strict";r.d(t,{b:function(){return s}});var n=r(196);localStorage.getItem("access_token");let s=n.ZP.create({baseURL:"http://localhost:8080/api"})}},function(e){e.O(0,[196,282,774,888,179],function(){return e(e.s=872)}),_N_E=e.O()}]);
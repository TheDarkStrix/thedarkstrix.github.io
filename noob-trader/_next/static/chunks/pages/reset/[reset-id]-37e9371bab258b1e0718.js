(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{1765:function(e,n,s){"use strict";s.r(n),s.d(n,{__N_SSG:function(){return G},default:function(){return C}});var r=s(266),t=s(318),i=s(809),a=s.n(i),c=s(319),o=s(1163),l=s(7294),u=s(582),d=s(4006),p=s(3225),g=s(1664),h=s(8019),x=s.n(h),_=s(5893),m=function(){return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("div",{className:"container",children:(0,_.jsx)("div",{className:x().signupContainer,children:(0,_.jsxs)("div",{className:x().signup,children:[(0,_.jsx)("div",{className:x().title,children:"Error Validating Token"}),(0,_.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,_.jsx)("img",{className:"mw-100",width:"90",height:"90",src:"/images/wrong.svg"})}),(0,_.jsxs)("div",{className:x().login,children:["Already have an account?"," ",(0,_.jsx)(g.default,{href:"/login",children:(0,_.jsx)("a",{className:x().link,children:"Login Now"})})]})]})})})})},j=s(2669),f=s(5552),v=s(9618),N=s(8822),w=s(1566),k=s(609),Z=(s(1649),s(676),s(1424)),b=!0,P=function(e){var n=e.token,s=(0,l.useState)(!0),i=s[0],o=s[1],p=(0,l.useState)(!0),h=p[0],m=p[1],P=(0,l.useState)(""),E=P[0],y=P[1],G=(0,l.useState)(""),C=G[0],I=G[1],S=(0,l.useState)(!1),T=S[0],L=S[1],A=(0,l.useState)(!1),F=A[0],B=A[1],D=(0,l.useState)(!1),K=D[0],O=D[1],R=(0,c.D)(d.c0),X=(0,t.Z)(R,2),z=X[0],Q=X[1],U=(Q.data,Q.error),V=Q.loading,W=(Q.called,function(){var e=(0,r.Z)(a().mark((function e(s){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),!(E.length<8)){e.next=6;break}return console.log("password less than 8"),e.next=5,L(!0);case 5:b=!1;case 6:if(!(C.length<8)){e.next=11;break}return console.log("password less than 8"),e.next=10,B(!0);case 10:b=!1;case 11:if(C===E){e.next=16;break}return console.log("Passwords don't match !"),e.next=15,O("Passwords don't match !");case 15:b=!1;case 16:if(console.log(b),!b){e.next=30;break}return e.prev=18,e.next=21,z({variables:{token:n,password:E}});case 21:r=e.sent,console.log(r),r&&(console.log(r.data.register),u.ZP.success("Password reset successful, Please wait!")),e.next=30;break;case 26:e.prev=26,e.t0=e.catch(18),u.ZP.error("This didn't work , try again !"),console.log(e.t0.graphQLErrors[0].message);case 30:case"end":return e.stop()}}),e,null,[[18,26]])})));return function(n){return e.apply(this,arguments)}}());return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("div",{className:"container",children:(0,_.jsx)("div",{className:x().signupContainer,children:(0,_.jsxs)("div",{className:x().signup,children:[(0,_.jsx)("div",{className:x().title,children:"Reset Password"}),U||K?(0,_.jsx)("div",{className:x().generalError,children:U?U.toString():K}):"",(0,_.jsxs)("form",{children:[(0,_.jsxs)(j.Z,{children:[(0,_.jsx)(f.Z,{for:"exampleText",className:x().inputLabel,children:"Password"}),(0,_.jsxs)(v.Z,{size:"lg",className:x().inputGroup,children:[(0,_.jsx)(N.Z,{addonType:"prepend",className:x().inputGroupPrepend,children:(0,_.jsx)(w.Z,{children:(0,_.jsx)("img",{src:"/images/contact/contact/lock.svg"})})}),(0,_.jsx)(k.Z,{onChange:function(e){return function(e){T&&(L(!1),b||(b=!0)),K&&(O(!1),b=!0),y(e.target.value)}(e)},placeholder:"Secret Password",type:i?"password":"text",className:x().formInput,invalid:T}),(0,_.jsx)(N.Z,{addonType:"append",className:x().inputGroupPrepend,onClick:function(){return o(!i)},children:(0,_.jsx)(w.Z,{children:(0,_.jsx)("img",{src:i?"/images/contact/contact/show.svg":"/images/contact/contact/hide.svg"})})})]}),(0,_.jsx)("div",{className:x().emailError,children:T?"Enter valid password":""})]}),(0,_.jsxs)(j.Z,{children:[(0,_.jsx)(f.Z,{for:"exampleText",className:x().inputLabel,children:"Confirm Password"}),(0,_.jsxs)(v.Z,{size:"lg",className:x().inputGroup,children:[(0,_.jsx)(N.Z,{addonType:"prepend",className:x().inputGroupPrepend,children:(0,_.jsx)(w.Z,{children:(0,_.jsx)("img",{src:"/images/contact/contact/lock.svg"})})}),(0,_.jsx)(k.Z,{onChange:function(e){return function(e){F&&(B(!1),b||(b=!0)),K&&(O(!1),b=!0),I(e.target.value)}(e)},placeholder:"Secret Password",type:h?"password":"text",className:x().formInput,invalid:F}),(0,_.jsx)(N.Z,{addonType:"append",className:x().inputGroupPrepend,onClick:function(){return m(!h)},children:(0,_.jsx)(w.Z,{children:(0,_.jsx)("img",{src:h?"/images/contact/contact/show.svg":"/images/contact/contact/hide.svg"})})})]}),(0,_.jsx)("div",{className:x().emailError,children:F?"Enter valid password":""})]}),(0,_.jsx)(Z.Z,{text:"Reset Password",loading:V,onClick:W})]}),(0,_.jsxs)("div",{className:x().info,children:["By signing up, you agree to NoobTrader\u2019s"," ",(0,_.jsx)("span",{children:(0,_.jsx)(g.default,{href:"#",children:(0,_.jsx)("a",{className:x().link,children:"Terms of Service"})})})]}),(0,_.jsxs)("div",{className:x().login,children:["Already have an account?"," ",(0,_.jsx)(g.default,{href:"/login",children:(0,_.jsx)("a",{className:x().link,children:"Login Now"})})]})]})})})})},E=s(1584),y=function(e){var n=e.resetId,s=((0,o.useRouter)(),(0,c.D)(d.n0)),i=(0,t.Z)(s,1)[0],g=(0,l.useState)(!1),h=(g[0],g[1],(0,l.useState)(0)),x=h[0],j=h[1],f=function(){var e=(0,r.Z)(a().mark((function e(){var s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i({variables:{token:n}});case 3:(s=e.sent).errors&&null==s.data?(u.ZP.error(s.errors[0].message),j(2)):s.data&&j(1),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),u.ZP.error("Error validating token"),j(2);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){f()}),[n]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(E.Z,{}),0===x?(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("div",{style:{height:"90vh"},children:(0,_.jsxs)("div",{className:"h-100 d-flex align-items-center justify-content-center flex-column",children:[(0,_.jsx)("div",{children:(0,_.jsx)("img",{width:"180",src:"/images/common/logo.svg"})}),(0,_.jsx)("h3",{className:"my-3",children:"Verifying reset ..."}),(0,_.jsx)("div",{children:(0,_.jsx)(p.Z,{inverted:!0,size:48})})]})})}):"",1===x?(0,_.jsx)("div",{children:(0,_.jsx)(P,{token:n})}):"",2===x?(0,_.jsx)("div",{children:(0,_.jsx)(m,{})}):""]})},G=!0,C=function(e){return(0,_.jsx)(y,{resetId:e.resetId})}},9674:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reset/[reset-id]",function(){return s(1765)}])},8019:function(e){e.exports={signupContainer:"signup_signupContainer__2hbnY",signup:"signup_signup__33iU2",title:"signup_title__3sRjc",seperator:"signup_seperator__ni6BQ",line:"signup_line__2jIk5",or:"signup_or__3m7KZ",inputGroup:"signup_inputGroup__2WTF0",formInput:"signup_formInput__3wscP",inputGroupPrepend:"signup_inputGroupPrepend__1BVLK",textAreaGroup:"signup_textAreaGroup__2LX-h",textArea:"signup_textArea__1Cuf7",inputLabel:"signup_inputLabel__voNFU",textAreaInputGroup:"signup_textAreaInputGroup__oWKWh",btnContainer:"signup_btnContainer__2KoOU",button:"signup_button__QdMO3",info:"signup_info__4qGrZ",link:"signup_link__2tsi4",login:"signup_login__15Dme",google:"signup_google__1xbIk",binance:"signup_binance__3i9v5",googleImg:"signup_googleImg__3XJPp",binanceImg:"signup_binanceImg__2Hh7P",emailError:"signup_emailError__3tGMB",generalError:"signup_generalError__3EhoN"}}},function(e){e.O(0,[774,923,636,303,396,888,179],(function(){return n=9674,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
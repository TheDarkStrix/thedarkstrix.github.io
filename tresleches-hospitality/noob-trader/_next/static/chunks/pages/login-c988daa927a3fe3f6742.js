(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{4435:function(e,n,t){"use strict";var r=t(2861),o=t.n(r),a=t(5893);n.Z=function(e){var n=e.inverted;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:o().loading,children:(0,a.jsx)("img",{style:{height:"34px"},src:n?"./images/common/loading/spinnerBlack.svg":"./images/common/loading/spinner.svg"})})})}},1426:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return $}});var r=t(266),o=t(809),a=t.n(o),s=t(318),i=t(1664),c=t(7294),l=t(319),u=t(2669),d=t(5552),p=t(9618),g=t(8822),_=t(1566),h=t(609),f=t(2152),m=t.n(f),x=t(4006),v=t(1649),b=t(1163),j=(t(3225),t(1424)),y=t(582),N=t(6689),w=t.n(N),k=t(2809),O=t(5087),P=t(180),Z=t(684),E=t(7530),C=t.n(E),T=t(4435),S=t(1625),I=t.n(S),L=t(5893),F=function(e){var n=e.text,t=e.onClick,r=e.loading,o=e.disabled,a=e.flex,s=e.noMargin,i=e.margin;return(0,L.jsx)(L.Fragment,{children:(0,L.jsx)("div",{className:[a?I().btnContainerFlex:I().btnContainer].join(" "),style:{margin:s?"0em":i||"0em"},children:(0,L.jsx)("button",{disabled:o||r,className:I().button,onClick:t,children:r?(0,L.jsx)(T.Z,{}):n})})})};function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){(0,k.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var q=function(e){var n=e.toggleModal,t=e.open,o=e.request,i=e.addn,u=e.requestLoading,d=(0,c.useState)(null),p=d[0],g=d[1],_=(0,c.useState)(!1),h=_[0],f=_[1],m=(0,c.useState)(!0),v=(m[0],m[1]),b=(0,l.D)(x.vZ),j=(0,s.Z)(b,2),N=j[0],w=j[1],k=(w.data,w.loading),E=w.error,T=(w.called,(0,c.useState)(!1)),S=T[0],I=T[1],A=function(){g(null),f(!1),v(!0),I(!1)},q=function(){var e=(0,r.Z)(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("send otp to user"),n=localStorage.getItem("TC"),e.next=4,N({context:{headers:{authorization:"Bearer "+n}}});case 4:(t=e.sent).data.sendVerificationCode.status?(y.ZP.success(t.data.sendVerificationCode.message||"OTP Sent"),f(!0)):(y.ZP.error(t.data.sendVerificationCode.message||"Failed to send OTP"),I(t.data.sendVerificationCode.message));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o({context:{headers:{authorization:"Bearer "+i,"x-verification-code":p}}});case 3:e.next=10;break;case 5:e.prev=5,e.t0=e.catch(0),A(),console.log(e.t0.graphQLErrors[0].message),y.ZP.error(e.t0.graphQLErrors[0].message);case 10:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){return t&&q(),function(){A()}}),[t]),(0,L.jsx)(L.Fragment,{children:(0,L.jsx)(P.Z,{isOpen:t,centered:!0,scrollable:!0,size:"md",backdropClassName:C().backdrop,className:C().modalBody,children:(0,L.jsxs)(Z.Z,{children:[(0,L.jsxs)("div",{className:C().header,children:[(0,L.jsx)("div",{className:C().heading,children:"2FA Authentication"}),(0,L.jsx)("div",{onClick:function(){return n()},className:C().close,children:(0,L.jsx)("img",{src:"./images/wallet/close.svg"})})]}),(0,L.jsxs)("div",{className:C().body,children:[(0,L.jsx)("div",{className:C().instruc,children:"Enter OTP sent to your email"}),E||S?(0,L.jsx)("div",{className:C().generalError,children:E||S}):"",(0,L.jsxs)("div",{className:C().otpContainer,children:[(0,L.jsx)("div",{className:C().otp,children:(0,L.jsx)(O.ZP,{value:p,onChange:function(e){g(e)},autoFocus:!0,OTPLength:6,otpType:"number",disabled:!h,className:C().otpInput})}),(0,L.jsx)("div",{className:C().btnContainer,children:(0,L.jsx)(F,{text:"Verify OTP",loading:u,disabled:!h,onClick:function(){return G()}})}),h&&!k?(0,L.jsx)(O.bV,{maxTime:120,onResendClick:function(){h&&q()},renderButton:function(e){return(0,L.jsxs)("button",D(D({},e),{},{className:C().resend,children:[(0,L.jsx)("div",{children:"Didn't recieve OTP yet ?"}),(0,L.jsx)("div",{children:0!=e.remainingTime?"Resend in ".concat(e.remainingTime," seconds"):(0,L.jsx)("div",{className:C().resendLink,children:"Resend OTP"})})]}))},renderTime:function(){return c.Fragment}}):k?(0,L.jsx)("div",{className:"text-center",children:"Requesting for OTP"}):""]})]})]})})})},G=t(3895),z=t.n(G);var B=function(e){var n=e.toggleModal,t=e.open,o=e.request,i=e.addn,u=e.requestLoading,d=(0,c.useState)(null),p=d[0],g=d[1],_=(0,c.useState)(!1),h=(_[0],_[1]),f=(0,c.useState)(!0),m=(f[0],f[1]),v=(0,l.D)(x.vZ),b=(0,s.Z)(v,2),j=(b[0],b[1]),N=(j.data,j.loading,j.error),w=(j.called,(0,c.useState)(!1)),k=w[0],E=w[1],C=function(){g(null),h(!1),m(!0),E(!1)},T=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o({context:{headers:{authorization:"Bearer "+i,"x-verification-code":p}}});case 3:console.log("Request Successful"),C(),n(),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),C(),console.log(e.t0.graphQLErrors[0].message),y.ZP.error(e.t0.graphQLErrors[0].message);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,L.jsx)(L.Fragment,{children:(0,L.jsx)(P.Z,{isOpen:t,centered:!0,scrollable:!0,size:"md",backdropClassName:z().backdrop,className:z().modalBody,children:(0,L.jsxs)(Z.Z,{children:[(0,L.jsxs)("div",{className:z().header,children:[(0,L.jsx)("div",{className:z().heading,children:"2FA Authentication"}),(0,L.jsx)("div",{onClick:function(){return n()},className:z().close,children:(0,L.jsx)("img",{src:"./images/wallet/close.svg"})})]}),(0,L.jsxs)("div",{className:z().body,children:[(0,L.jsx)("div",{className:z().instruc,children:"Enter OTP generator in your Authenticator App"}),N||k?(0,L.jsx)("div",{className:z().generalError,children:N||k}):"",(0,L.jsxs)("div",{className:z().otpContainer,children:[(0,L.jsx)("div",{className:z().otp,children:(0,L.jsx)(O.ZP,{value:p,onChange:function(e){g(e)},autoFocus:!0,OTPLength:6,otpType:"number",className:z().otpInput})}),(0,L.jsx)("div",{className:z().btnContainer,children:(0,L.jsx)(F,{text:"Verify OTP",loading:u,onClick:function(){return T()}})})]})]})]})})})};function M(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?M(Object(t),!0).forEach((function(n){(0,k.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var U=function(e){return(0,L.jsx)(L.Fragment,{children:0==e.type?(0,L.jsx)(B,R({},e)):(0,L.jsx)(q,R({},e))})},V=!0,Q=null,H=function(){var e=(0,b.useRouter)(),n=(0,c.useState)(!0),t=n[0],o=n[1],f=(0,c.useState)(""),N=f[0],w=f[1],k=(0,c.useState)(""),O=k[0],P=k[1],Z=(0,c.useState)(null),E=Z[0],C=Z[1],T=(0,c.useState)(!1),S=T[0],I=T[1],F=(0,c.useState)(!1),A=F[0],D=F[1],q=(0,c.useState)(!1),G=q[0],z=q[1],B=(0,c.useState)(!1),M=(B[0],B[1],(0,c.useState)(null)),R=M[0],H=M[1],X=(0,l.D)(x.pH),J=(0,s.Z)(X,2),K=J[0],W=J[1],Y=(W.data,W.error),$=W.loading,ee=(W.called,(0,l.D)(x.MH)),ne=(0,s.Z)(ee,2),te=ne[0],re=ne[1],oe=re.data,ae=(re.error,re.loading),se=function(){I(!S)},ie=function(){var e=(0,r.Z)(a().mark((function e(n,t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.j)(n,t);case 2:"ADMIN"==t.role?window.location="https://admin.noobtrader.io/":window.location="https://console.noobtrader.io/";case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),ce=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),1!=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(N)&&(D(!0),V=!1),O.length<8&&(console.log("password less than 8"),V=!1,z(!0)),!V){e.next=18;break}return e.prev=5,e.next=8,K({variables:{email:N,password:O}});case 8:(t=e.sent).data.login&&"NONE"!=t.data.login.twofaType&&null==t.data.login.accessToken&&("EMAIL"==t.data.login.twofaType&&(localStorage.setItem("TC",t.data.login.twofaToken),H(1),Q=t.data.login.twofaToken,se()),"CODE"==t.data.login.twofaType&&(localStorage.setItem("TC",t.data.login.twofaToken),H(0),Q=t.data.login.twofaToken,se())),t.data.login&&"NONE"==t.data.login.twofaType&&null!=t.data.login.accessToken&&(console.log(t.data.login),y.ZP.success("Logged in successfully , Please wait!"),ie(t.data.login.accessToken,t.data.login.user)),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(5),y.ZP.error("This didn't work , try again !"),console.log(e.t0),console.log(e.t0.graphQLErrors[0].message);case 18:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(n){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){oe&&(console.log(oe),ie(oe.login2fa.accessToken,oe.login2fa.user))}),[oe]),(0,c.useEffect)((function(){"true"!=e.query.verify&&"false"!=e.query.verify||(console.log(e.query.verify),C("true"==e.query.verify)),console.log(e.query.verify)}),[e.query.verify]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("div",{className:"container",children:(0,L.jsxs)("div",{className:m().signupContainer,children:[E,1==E||0==E?(0,L.jsx)("div",{className:[m().verifyError,E?m().generalSuccess:m().generalError].join(" "),children:E?"Email verified! Login now to continue.":"Failed to verify account."}):"",(0,L.jsxs)("div",{className:m().signup,children:[(0,L.jsx)("div",{className:m().title,children:"Sign In"}),"",Y?(0,L.jsx)("div",{className:m().generalError,children:Y.toString()}):"",(0,L.jsxs)("form",{children:[(0,L.jsxs)(u.Z,{children:[(0,L.jsx)(d.Z,{for:"exampleText",className:m().inputLabel,children:"Email"}),(0,L.jsxs)(p.Z,{size:"lg",className:m().inputGroup,children:[(0,L.jsx)(g.Z,{addonType:"prepend",className:m().inputGroupPrepend,children:(0,L.jsx)(_.Z,{children:(0,L.jsx)("img",{src:"./images/contact/contact/envelope.svg"})})}),(0,L.jsx)(h.Z,{onChange:function(e){return function(e){A&&(D(!1),V=!0),w(e.target.value)}(e)},placeholder:"me@email.com",type:"email",className:m().formInput,invalid:A})]}),(0,L.jsx)("div",{className:m().emailError,children:A?"Enter valid email id":""})]}),(0,L.jsxs)(u.Z,{children:[(0,L.jsx)(d.Z,{for:"exampleText",className:m().inputLabel,children:"Password"}),(0,L.jsxs)(p.Z,{size:"lg",className:m().inputGroup,children:[(0,L.jsx)(g.Z,{addonType:"prepend",className:m().inputGroupPrepend,children:(0,L.jsx)(_.Z,{children:(0,L.jsx)("img",{src:"./images/contact/contact/lock.svg"})})}),(0,L.jsx)(h.Z,{onChange:function(e){return function(e){G&&(z(!1),V=!0),P(e.target.value)}(e)},placeholder:"Secret Password",type:t?"password":"text",className:m().formInput,invalid:G}),(0,L.jsx)(g.Z,{addonType:"append",className:[m().inputGroupPrepend,m().pointer].join(" "),onClick:function(){return o(!t)},children:(0,L.jsx)(_.Z,{children:(0,L.jsx)("img",{src:t?"./images/contact/contact/show.svg":"./images/contact/contact/hide.svg"})})})]}),(0,L.jsx)("div",{className:m().emailError,children:G?"Enter valid password (min 8 chars)":""})]}),(0,L.jsx)("div",{className:m().forgotPassword,children:(0,L.jsx)(i.default,{href:"/reset",children:(0,L.jsx)("a",{className:m().link,children:"Forgot Password"})})}),(0,L.jsx)(j.Z,{text:"Login",loading:$,onClick:ce})]}),(0,L.jsxs)("div",{className:m().login,children:["New to NoobTrader?"," ",(0,L.jsx)(i.default,{href:"/signup",children:(0,L.jsx)("a",{className:m().link,children:"Sign Up"})})]})]})]})}),(0,L.jsx)(U,{toggleModal:se,open:S,request:te,addn:Q,requestLoading:ae,type:R?1:0}),R]})},X=t(1584),J=t(6808),K=t.n(J),W=function(){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(X.Z,{}),(0,L.jsx)(H,{})]})},Y=function(e,n){var t=!1;console.log("555",n),console.log("Token",e);try{t=jwt.decode(e,{complete:!0})}catch(r){return K().remove("t"),K().remove("ur"),!1}return t&&Date.now()<1e3*t.payload.exp?(console.log("ROLE",n),!0):(K().remove("t"),K().remove("ur"),!1)};W.getInitialProps=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r,o,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.req?(t=w()(n).t,r=w()(n).ur,console.log("---",t,r),Y(t,r)||(console.log("trigger  1",Y(t,r),r),"ADMIN"==r?(console.log("refirect to admin"),n.res.writeHead(302,{Location:"".concat("https://admin.noobtrader.io/")}),n.res.end()):"USER"==r&&(n.res.writeHead(302,{Location:"".concat("https://console.noobtrader.io/")}),n.res.end()))):(o=K().get("t"),s=K().get("ur"),Y(o,s)||(console.log("trigger  2",Y(o,s),s),"ADMIN"==s?b.default.push("".concat("https://admin.noobtrader.io/")):"USER"==s&&b.default.push("".concat("https://console.noobtrader.io/")))),e.abrupt("return",{abc:"abc"});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var $=W},4917:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(1426)}])},3895:function(e){e.exports={modalBody:"authenticator-otp_modalBody__QsrU9",header:"authenticator-otp_header__1roUW",heading:"authenticator-otp_heading__3S72G",otpContainer:"authenticator-otp_otpContainer__2zDoJ",btnContainer:"authenticator-otp_btnContainer__2U9Ek",otp:"authenticator-otp_otp__91dJz",otpInput:"authenticator-otp_otpInput__4svJE",instruc:"authenticator-otp_instruc__35qgz",close:"authenticator-otp_close__1042I",resend:"authenticator-otp_resend__16aTt",resendLink:"authenticator-otp_resendLink__1UREv",generalError:"authenticator-otp_generalError__TghUt",backdrop:"authenticator-otp_backdrop__1Xvol"}},7530:function(e){e.exports={modalBody:"base-otp_modalBody__4J-dM",header:"base-otp_header__13Fus",heading:"base-otp_heading__p8FWv",otpContainer:"base-otp_otpContainer__tX4QI",btnContainer:"base-otp_btnContainer__12cIL",otp:"base-otp_otp__1FkPn",otpInput:"base-otp_otpInput__qKmHe",instruc:"base-otp_instruc__23iZ5",close:"base-otp_close__2hZrv",resend:"base-otp_resend__3xbQC",resendLink:"base-otp_resendLink__2PdgO",generalError:"base-otp_generalError__2FnlQ",backdrop:"base-otp_backdrop__3sMZN"}},1625:function(e){e.exports={btnContainer:"button_btnContainer__1LVTu",btnContainerFlex:"button_btnContainerFlex__2TVD-",button:"button_button__2NA2R"}},2861:function(e){e.exports={loading:"loading_loading__3OiB8",rotating:"loading_rotating__2vwQa"}},2152:function(e){e.exports={signupContainer:"login_signupContainer__1dC07",signup:"login_signup__GWnXh",title:"login_title__3exMs",seperator:"login_seperator__qV_v0",line:"login_line__18U5K",or:"login_or__38Na6",inputGroup:"login_inputGroup__3JzZ8",formInput:"login_formInput__2hykH",inputGroupPrepend:"login_inputGroupPrepend__28dN3",textAreaGroup:"login_textAreaGroup__1gwPg",textArea:"login_textArea__3cd4a",inputLabel:"login_inputLabel__IY7rf",textAreaInputGroup:"login_textAreaInputGroup__2XYLt",btnContainer:"login_btnContainer__VZPrG",button:"login_button__1wINl",info:"login_info__g5d2I",link:"login_link__1k6gm",login:"login_login__cKgGE",google:"login_google__39INv",binance:"login_binance__1c3hx",googleImg:"login_googleImg__33qmt",binanceImg:"login_binanceImg__1tbU_",forgotPassword:"login_forgotPassword__2gRA4",emailError:"login_emailError__2n7UK",verifyError:"login_verifyError__2Y17Z",generalError:"login_generalError__woB02",generalSuccess:"login_generalSuccess__3whrf",pointer:"login_pointer__drW_A"}}},function(e){e.O(0,[774,923,636,343,303,888,179],(function(){return n=4917,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
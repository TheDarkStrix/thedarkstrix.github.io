(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[940],{9387:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var s=t(8499),a=t.n(s),i=t(1664),r=t(5893),l=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:a().footerNavContainer,children:[(0,r.jsx)("div",{className:a().left,children:(0,r.jsx)("div",{className:a().logo,children:(0,r.jsx)("img",{src:"./images/common/logo.svg"})})}),(0,r.jsx)("div",{className:a().right,children:(0,r.jsxs)("div",{className:a().navLinks,children:[(0,r.jsx)("div",{className:a().navLink,children:(0,r.jsx)(i.default,{href:"/about",children:(0,r.jsx)("a",{children:"About Us"})})}),(0,r.jsx)("div",{className:a().navLink,children:(0,r.jsx)(i.default,{href:"/investment",children:(0,r.jsx)("a",{children:"Investments"})})}),(0,r.jsx)("div",{className:a().navLink,children:(0,r.jsx)(i.default,{href:"/contact",children:(0,r.jsx)("a",{children:"Contact Us"})})})]})})]}),(0,r.jsxs)("div",{className:a().footerContainer,children:[(0,r.jsx)("div",{className:a().left,children:(0,r.jsx)("div",{children:"\xa9 2021 Noob Trader \u2022 All rights reserved"})}),(0,r.jsx)("div",{className:a().right,children:(0,r.jsxs)("div",{className:a().links,children:[(0,r.jsx)("div",{className:a().link,children:(0,r.jsx)(i.default,{href:"#",children:(0,r.jsx)("a",{children:"Privacy Policy"})})}),(0,r.jsx)("div",{className:a().link,children:(0,r.jsx)(i.default,{href:"#",children:(0,r.jsx)("a",{children:"Terms of Service"})})})]})})]})]})},o=t(1584),c=function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{}),e.children,(0,r.jsx)(l,{})]})}},1584:function(e,n,t){"use strict";t.d(n,{Z:function(){return w}});var s=t(8216),a=t(5997),i=t(4695),r=t(3444),l=t(268),o=t(2953),c=t(2809),d=t(7294),h=t(1664),v=t(4485),u=t.n(v),_=t(1163),m=t(9544),b=t(6992),g=t(7243),j=t(3999),f=t(627),x=t(2428),p=t.n(x),N=t(5893),k=function(){return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)("div",{className:p().annoucementBarContainer,children:(0,N.jsx)("div",{className:p().announcement,children:"\u26a0\ufe0f The website is under development and certain features might not work properly. Thanks for your patience."})})})},S=t(6808),y=t.n(S),B=t(9704),C=t.n(B);function I(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=(0,o.Z)(e);if(n){var a=(0,o.Z)(this).constructor;t=Reflect.construct(s,arguments,a)}else t=s.apply(this,arguments);return(0,l.Z)(this,t)}}var Z=function(e){(0,r.Z)(t,e);var n=I(t);function t(e){var a;switch((0,s.Z)(this,t),a=n.call(this,e),(0,c.Z)((0,i.Z)(a),"isOpen",!1),(0,c.Z)((0,i.Z)(a),"isDarkBg",!1),(0,c.Z)((0,i.Z)(a),"page",void 0),a.handleScroll=a.handleScroll.bind((0,i.Z)(a)),a.togglMobNav=a.togglMobNav.bind((0,i.Z)(a)),a.state={prevScroll:0,navHidden:!1,mobNav:!1,isBlueBg:!1},a.page){case"index":a.isDarkBg=!0;break;default:a.isDarkBg=!1}return a}return(0,a.Z)(t,[{key:"componentDidMount",value:function(){var e,n=y().get("t");if(window.addEventListener("scroll",this.handleScroll),void 0!=n){console.log("Cookies are there");try{e=C().decode(n,{complete:!0})}catch(t){return console.log(t),!1}console.log(e&&Date.now()<1e3*e.payload.exp),e&&Date.now()<1e3*e.payload.exp&&(console.log("token is  valid"),this.setState({isLoggedIn:!0}))}console.log(this.props.router.pathname)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(e){var n=window.pageYOffset;this.state.prevScroll>n?(this.setState({navHidden:!1}),console.log(n),n>100?(console.log("asdasd"),this.setState({isBlueBg:!0})):this.setState({isBlueBg:!1}),this.setState({prevScroll:n})):(n-this.state.prevScroll>100||this.state.navHidden)&&(this.setState({navHidden:!0}),this.setState({prevScroll:n}))}},{key:"togglMobNav",value:function(){this.setState({mobNav:!this.state.mobNav})}},{key:"render",value:function(){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(k,{}),(0,N.jsxs)(m.Z,{expand:"md",className:[1==this.isDarkBg?u().navDark:u().navLight,1==this.state.navHidden&&0==this.state.mobNav?u().hidden:"",u().mainNavbar,!0===this.state.isBlueBg?u().blue:""].join(" "),children:[(0,N.jsx)("div",{className:u().brandParent,children:(0,N.jsx)(b.Z,{href:"/",children:(0,N.jsx)("img",{width:"120",className:u().brandImage,src:this.state.isBlueBg?"./images/common/logo-inverted.svg":"./images/common/logo.svg"})})}),(0,N.jsx)("a",{className:["navbar-toggler",u().navToggler,1==this.state.mobNav?u().show:""].join(" "),onClick:this.togglMobNav}),(0,N.jsx)("div",{className:[u().mobNav,0==this.state.mobNav?u().hidden:""].join(" "),children:(0,N.jsxs)(g.Z,{className:u().mobNavElements,navbar:!0,children:[(0,N.jsx)(j.Z,{children:(0,N.jsx)(h.default,{href:"/",children:(0,N.jsx)("a",{className:["/"==this.props.router.pathname?u().linkStyleActiveMob:u().linkStyle,u().linkStyle].join(" "),children:"Home"})})}),(0,N.jsx)(j.Z,{children:(0,N.jsx)(h.default,{href:"/investment",children:(0,N.jsx)("a",{className:["/investment"==this.props.router.pathname?u().linkStyleActiveMob:u().linkStyle,u().linkStyle].join(" "),children:"Investment"})})}),(0,N.jsx)(j.Z,{children:(0,N.jsx)(h.default,{href:"/about",children:(0,N.jsx)("a",{className:["/about"==this.props.router.pathname?u().linkStyleActiveMob:u().linkStyle,u().linkStyle].join(" "),children:"About Us"})})}),(0,N.jsx)(j.Z,{children:(0,N.jsx)(h.default,{href:"/contact",children:(0,N.jsx)("a",{className:["/contact"==this.props.router.pathname?u().linkStyleActiveMob:u().linkStyle,u().linkStyle].join(" "),children:"Contact Us"})})}),(0,N.jsxs)("div",{className:u().btnContainer,children:[this.state.isLoggedIn?"":(0,N.jsx)(h.default,{href:"/login",children:(0,N.jsx)("a",{className:["/signup"==this.props.router.pathname?u().linkStyleActiveMob:u().linkStyle,u().linkStyle].join(" "),children:(0,N.jsx)("div",{className:[u().mobileSignIn,this.state.isBlueBg?u().getStartedInverted:u().getStarted].join(" "),children:"Sign In"})})}),(0,N.jsx)(h.default,{href:this.state.isLoggedIn?"https://console.noobtrader.io/":"/signup",children:(0,N.jsx)("a",{className:["/signup"==this.props.router.pathname?u().linkStyleActiveMob:u().linkStyle,u().linkStyle].join(" "),children:(0,N.jsx)("div",{className:[u().signIn,this.state.isBlueBg?u().linkStyleInverted:u().linkStyle,u().noBorder,u().bgBlue].join(" "),children:this.state.isLoggedIn?"Console":"Get Started"})})})]}),(0,N.jsx)("div",{className:u().mobClose,onClick:this.togglMobNav,children:(0,N.jsx)("img",{src:"./images/common/close.svg",width:"30",height:"30"})})]})}),(0,N.jsxs)(f.Z,{isOpen:this.isOpen,className:u().collapseParent,navbar:!0,children:[(0,N.jsx)(g.Z,{className:"mr-auto",navbar:!0}),(0,N.jsxs)(g.Z,{className:u().navCenter,navbar:!0,children:[(0,N.jsx)(j.Z,{children:(0,N.jsx)(h.default,{href:"/",children:(0,N.jsx)("a",{className:["/"==this.props.router.pathname?u().linkStyleActiveMob:u().linkStyle,u().linkStyle].join(" "),children:"Home"})})}),(0,N.jsx)(j.Z,{children:(0,N.jsx)(h.default,{href:"/investment",children:(0,N.jsx)("a",{className:["/investment"==this.props.router.pathname?u().linkStyleActive:"",this.state.isBlueBg?u().linkStyleInverted:u().linkStyle].join(" "),children:"Investment"})})}),(0,N.jsx)(j.Z,{children:(0,N.jsx)(h.default,{href:"/about",children:(0,N.jsx)("a",{className:["/about"==this.props.router.pathname?u().linkStyleActive:"",this.state.isBlueBg?u().linkStyleInverted:u().linkStyle].join(" "),children:"About Us"})})}),(0,N.jsx)(j.Z,{children:(0,N.jsx)(h.default,{href:"/contact",children:(0,N.jsx)("a",{className:["/contact"==this.props.router.pathname?u().linkStyleActive:"",this.state.isBlueBg?u().linkStyleInverted:u().linkStyle].join(" "),children:"Contact Us"})})})]}),(0,N.jsxs)("div",{className:u().getStartedContainer,children:[this.state.isLoggedIn?"":(0,N.jsx)("div",{className:[u().signIn,this.state.isBlueBg?u().linkStyleInverted:u().linkStyle,u().noBorder].join(" "),children:(0,N.jsx)(h.default,{href:"/login",children:(0,N.jsx)("a",{children:"Sign In"})})}),(0,N.jsx)(h.default,{href:this.state.isLoggedIn?"https://console.noobtrader.io/":"/signup",children:(0,N.jsx)("a",{children:(0,N.jsx)("div",{className:this.state.isBlueBg?u().getStartedInverted:u().getStarted,children:this.state.isLoggedIn?"Console":"Get Started"})})})]})]})]})]})}}]),t}(d.Component),w=(0,_.withRouter)(Z)},617:function(e,n,t){"use strict";var s=t(1882),a=t(9721),i=t.n(a),r=t(5893);n.Z=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:i().section,children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:i().joinContainer,children:[(0,r.jsx)("div",{className:i().title,children:"Join Our Platform Now!"}),(0,r.jsx)("div",{className:i().subTitle,children:"NoobTrader is an platform to invest your money."}),(0,r.jsx)(s.Z,{})]})})})})}},1882:function(e,n,t){"use strict";var s=t(1163),a=t(7124),i=t.n(a),r=t(7294),l=t(5893);n.Z=function(e){var n=e.initialWidth,t=(0,r.useState)(""),a=t[0],o=t[1],c=(0,s.useRouter)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:i().subscribeContainer,style:{width:n||""},children:(0,l.jsx)("div",{className:i().subscribe,children:(0,l.jsxs)("form",{className:"d-flex",children:[(0,l.jsx)("input",{className:i().subInput,placeholder:"me@gmail.com",onChange:function(e){return o(e.target.value)}}),(0,l.jsx)("button",{className:i().subBtn,onClick:function(){return console.log(a),void(""!=a?c.push({pathname:"/signup",query:{email:a}}):c.push("/signup"))},children:"Get Started"})]})})})})}},8499:function(e){e.exports={footerNavContainer:"footer_footerNavContainer__3WaLT",footerContainer:"footer_footerContainer__267pj",links:"footer_links__2CdoT",navLinks:"footer_navLinks__3Kad_",navLink:"footer_navLink__359xc",link:"footer_link__e7s3_",logo:"footer_logo__1pvdB",left:"footer_left__HmGsW",right:"footer_right__1wk4p"}},2428:function(e){e.exports={announcement:"annoucementBar_announcement__Ea2U-"}},4485:function(e){e.exports={brandName:"navbar_brandName__XKpr3",blue:"navbar_blue__WfSkx",tm:"navbar_tm__3z6th",mainNavbar:"navbar_mainNavbar__3dKF2",hidden:"navbar_hidden__2WhnJ",brandParent:"navbar_brandParent__NO3xz",coronain:"navbar_coronain__2b5_p",collapseParent:"navbar_collapseParent__2jvt5",navCenter:"navbar_navCenter__2qcac",linkStyle:"navbar_linkStyle__1ZemP",linkStyleInverted:"navbar_linkStyleInverted__1p3Wn",linkStyleActive:"navbar_linkStyleActive__2f3C3",linkStyleActiveMob:"navbar_linkStyleActiveMob__By3NW",noBorder:"navbar_noBorder__3qRYg",navDark:"navbar_navDark__2olcK",talkWith:"navbar_talkWith__2x_Ll",mobClose:"navbar_mobClose__hq0nc",navToggler:"navbar_navToggler__3W2nr",show:"navbar_show__3s6tz",mobNav:"navbar_mobNav__3nD43",mobNavElements:"navbar_mobNavElements__3rIfM",socialMedia:"navbar_socialMedia__1d0K7",content:"navbar_content__13X7d",serviceicon:"navbar_serviceicon__hSNEO",title:"navbar_title__DSMqy",socialicons:"navbar_socialicons__L7vl7",getStartedContainer:"navbar_getStartedContainer__2Srgb",signIn:"navbar_signIn__1tQVj",getStarted:"navbar_getStarted__3gkQw",getStartedInverted:"navbar_getStartedInverted__1F2p_",bgBlue:"navbar_bgBlue__3JLge",btnContainer:"navbar_btnContainer__1uDYI",mobileSignIn:"navbar_mobileSignIn__2zSkj"}},9721:function(e){e.exports={section:"joinNow_section__3cgpK",joinContainer:"joinNow_joinContainer__FhmBB",title:"joinNow_title__lhMMT",subTitle:"joinNow_subTitle__1Zdyb"}},7124:function(e){e.exports={subscribeContainer:"subscribe_subscribeContainer__3sA_s",subscribe:"subscribe_subscribe__3Sv54",subInput:"subscribe_subInput__C-XEB",subBtn:"subscribe_subBtn__1MBsG",joinContainer:"subscribe_joinContainer__2qANs"}},6601:function(){},9214:function(){},1922:function(){},2363:function(){},2361:function(){},4616:function(){}}]);
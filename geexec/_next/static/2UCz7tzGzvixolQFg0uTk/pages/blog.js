(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/yi9":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return y})),n.d(t,"default",(function(){return w}));var r=n("+mB6"),o=n("ODXe"),a=n("q1tI"),i=n.n(a),c=n("Ze3z"),s=n.n(c),l=n("k7N+"),u=n.n(l),d=n("YFqc"),h=n.n(d),g=n("ob4f"),f=i.a.createElement,p=function(e){var t,n,r=Object(g.a)({triggerOnce:!0}),a=Object(o.a)(r,2);a[0],a[1];return f("div",{className:s.a.section},f("div",{className:"container"},f("div",{className:"d-flex flex-column"},f("div",{className:"row"},null===e||void 0===e?void 0:null===(t=e.data)||void 0===t?void 0:null===(n=t.blogdata)||void 0===n?void 0:n.map((function(e){return f("div",{className:["col-md-4",s.a.blogContainer].join(" ")},f(h.a,{href:"blog/"+e.permlink},f("a",{className:s.a.a},f("div",{className:s.a.card},f("div",{className:s.a.content},f("div",{className:s.a.cardImage},f("img",{src:e.image.url})),f("div",{className:s.a.detailscontent},f("div",{className:s.a.cardHeading},e.title),f("div",{className:s.a.cardDesc},e.description),f("div",{className:s.a.cardAuthor},f("div",null,f("div",{className:s.a.authData},null==e.user||void 0==e.user.name?"":f("div",{className:s.a.cardAuthorName},e.user.name),f("div",{className:s.a.cardDate},f(u.a,{format:"MMMM D, YYYY"},e.createdAt)))))))))))}))))))},v=n("9ixD"),b=i.a.createElement,m=function(){return b(i.a.Fragment,null,b(v.a,{title:"Blogs | Geexec\xae",description:"Our blog page, generally containing our new announcements, services that we like to share to the public.",canonical:"https://geexec.com/blog",keywords:"Geexec, Blog, Design, Development, Branding, Prototyping, UI, UX, Websites, Web Applications, Mob Apps, Mobile Applications, IOT, Cloud Solutions",openGraph:{url:"https://geexec.com/blog",title:"Blogs | Geexec\xae",description:"Our blog page, generally containing our new announcements, services that we like to share to the public.",images:[{url:"https://geexec.com/images/logo_full.png",width:800,height:600,alt:"Geexec Logo"}],site_name:"Geexec"},twitter:{handle:"@geexechq",site:"https://geexec.com",cardType:"summary_large_image"}}))},_=(n("nOHt"),i.a.createElement),y=!0;function w(e){return _(r.a,{page:"blog"},_(m,null),_(p,{data:{blogdata:e.allBlogs}}))}},JUhy:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n("/yi9")}])},ODXe:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){o=!0,a=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return o}))},Ze3z:function(e,t,n){e.exports={section:"blog_section__Ef8cq",blogContainer:"blog_blogContainer__2DnCU",card:"blog_card__3SFx0",cardImage:"blog_cardImage__3WupS",content:"blog_content__1qh3w",detailscontent:"blog_detailscontent__1uSyN",contentInner:"blog_contentInner__1yfDf",cardHeading:"blog_cardHeading__1rxJw",authData:"blog_authData__2NdI9",cardDesc:"blog_cardDesc__1i7qN",cardAuthor:"blog_cardAuthor__2qIuy",cardAuthorName:"blog_cardAuthorName__1Uyzp",cardDate:"blog_cardDate__GH733",a:"blog_a___dcMe"}},ob4f:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var r=n("q1tI"),o=!0,a="Invariant failed";var i=function(e,t){if(!e){if(o)throw new Error(a);throw new Error(a+": "+(t||""))}};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=new Map,d=new Map,h=new Map,g=0;function f(e,t,n){void 0===n&&(n={}),n.threshold||(n.threshold=0);var r=n,o=r.root,a=r.rootMargin,c=r.threshold;if(u.has(e)&&i(!1),e){var s=function(e){return e?h.has(e)?h.get(e):(g+=1,h.set(e,g.toString()),h.get(e)+"_"):""}(o)+(a?c.toString()+"_"+a:c.toString()),l=d.get(s);l||(l=new IntersectionObserver(v,n),s&&d.set(s,l));var f={callback:t,element:e,inView:!1,observerId:s,observer:l,thresholds:l.thresholds||(Array.isArray(c)?c:[c])};return u.set(e,f),l.observe(e),f}}function p(e){if(e){var t=u.get(e);if(t){var n=t.observerId,r=t.observer,o=r.root;r.unobserve(e);var a=!1,i=!1;n&&u.forEach((function(t,r){r!==e&&(t.observerId===n&&(a=!0,i=!0),t.observer.root===o&&(i=!0))})),!i&&o&&h.delete(o),r&&!a&&r.disconnect(),u.delete(e)}}}function v(e){e.forEach((function(e){var t=e.isIntersecting,n=e.intersectionRatio,r=e.target,o=u.get(r);if(o&&n>=0){var a=o.thresholds.some((function(e){return o.inView?n>e:n>=e}));void 0!==t&&(a=a&&t),o.inView=a,o.callback(a,e)}}))}var b=function(e){var t,n;function o(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return c(l(t=e.call.apply(e,[this].concat(r))||this),"state",{inView:!1,entry:void 0}),c(l(t),"node",null),c(l(t),"handleNode",(function(e){t.node&&(p(t.node),e||t.props.triggerOnce||t.setState({inView:!1,entry:void 0})),t.node=e||null,t.observeNode()})),c(l(t),"handleChange",(function(e,n){(e!==t.state.inView||e)&&t.setState({inView:e,entry:n}),t.props.onChange&&t.props.onChange(e,n)})),t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=o.prototype;return a.componentDidMount=function(){this.node||i(!1)},a.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(p(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(p(this.node),this.node=null)},a.componentWillUnmount=function(){this.node&&(p(this.node),this.node=null)},a.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin;f(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r})}},a.render=function(){var e=this.state,t=e.inView,n=e.entry;if(!function(e){return"function"!==typeof e.children}(this.props))return this.props.children({inView:t,entry:n,ref:this.handleNode});var o=this.props,a=o.children,i=o.as,c=o.tag,l=(o.triggerOnce,o.threshold,o.root,o.rootMargin,o.onChange,function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(o,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange"]));return Object(r.createElement)(i||c||"div",s({ref:this.handleNode},l),a)},o}(r.Component);c(b,"displayName","InView"),c(b,"defaultProps",{threshold:0,triggerOnce:!1});var m={inView:!1,entry:void 0};function _(e){void 0===e&&(e={});var t=Object(r.useRef)(),n=Object(r.useState)(m),o=n[0],a=n[1],i=Object(r.useCallback)((function(n){t.current&&p(t.current),n&&f(n,(function(t,r){a({inView:t,entry:r}),t&&e.triggerOnce&&p(n)}),e),t.current=n}),[e.threshold,e.root,e.rootMargin,e.triggerOnce]);return Object(r.useEffect)((function(){t.current||o===m||e.triggerOnce||a(m)})),[i,o.inView,o.entry]}}},[["JUhy",0,2,7,1,3,6]]]);
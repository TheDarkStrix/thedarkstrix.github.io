_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{GdtD:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("cpVT"),i=n("q1tI"),s=n.n(i),a=(n("aMhK"),n("Hzbl")),l=n("20a2"),c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},g=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},h=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},v={addEventListener:function(){}},m=function(e,t){var n=function(){s.log(2,"(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")};n.version="2.0.7",e.addEventListener("mousewheel",(function(){}));var r="data-scrollmagic-pin-spacer";n.Controller=function(i){var a,l,c="ScrollMagic.Controller",u="REVERSE",d="PAUSED",f=o.defaults,p=this,g=s.extend({},f,i),h=[],v=!1,m=0,y=d,b=!0,w=0,E=!0,S=function(){g.refreshInterval>0&&(l=e.setTimeout(P,g.refreshInterval))},C=function(){return g.vertical?s.get.scrollTop(g.container):s.get.scrollLeft(g.container)},x=function(){return g.vertical?s.get.height(g.container):s.get.width(g.container)},_=this._setScrollPos=function(t){g.vertical?b?e.scrollTo(s.get.scrollLeft(),t):g.container.scrollTop=t:b?e.scrollTo(t,s.get.scrollTop()):g.container.scrollLeft=t},O=function(){if(E&&v){var e=s.type.Array(v)?v:h.slice(0);v=!1;var t=m,n=(m=p.scrollPos())-t;0!==n&&(y=n>0?"FORWARD":u),y===u&&e.reverse(),e.forEach((function(t,n){L(3,"updating Scene "+(n+1)+"/"+e.length+" ("+h.length+" total)"),t.update(!0)})),0===e.length&&g.loglevel>=3&&L(3,"updating 0 Scenes (nothing added to controller)")}},T=function(){a=s.rAF(O)},R=function(e){L(3,"event fired causing an update:",e.type),"resize"==e.type&&(w=x(),y=d),!0!==v&&(v=!0,T())},P=function(){if(!b&&w!=x()){var e;try{e=new Event("resize",{bubbles:!1,cancelable:!1})}catch(n){(e=t.createEvent("Event")).initEvent("resize",!1,!1)}g.container.dispatchEvent(e)}h.forEach((function(e,t){e.refresh()})),S()},L=this._log=function(t,n){g.loglevel>=t&&(Array.prototype.splice.call(arguments,1,0,"("+c+") ->"),s.log.apply(e,arguments))};this._options=g;var z=function(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort((function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1})),t};return this.addScene=function(e){if(s.type.Array(e))e.forEach((function(e,t){p.addScene(e)}));else if(e instanceof n.Scene){if(e.controller()!==p)e.addTo(p);else if(h.indexOf(e)<0){for(var t in h.push(e),h=z(h),e.on("shift.controller_sort",(function(){h=z(h)})),g.globalSceneOptions)e[t]&&e[t].call(e,g.globalSceneOptions[t]);L(3,"adding Scene (now "+h.length+" total)")}}else L(1,"ERROR: invalid argument supplied for '.addScene()'");return p},this.removeScene=function(e){if(s.type.Array(e))e.forEach((function(e,t){p.removeScene(e)}));else{var t=h.indexOf(e);t>-1&&(e.off("shift.controller_sort"),h.splice(t,1),L(3,"removing Scene (now "+h.length+" left)"),e.remove())}return p},this.updateScene=function(e,t){return s.type.Array(e)?e.forEach((function(e,n){p.updateScene(e,t)})):t?e.update(!0):!0!==v&&e instanceof n.Scene&&(-1==(v=v||[]).indexOf(e)&&v.push(e),v=z(v),T()),p},this.update=function(e){return R({type:"resize"}),e&&O(),p},this.scrollTo=function(e,t){if(s.type.Number(e))_.call(g.container,e,t);else if(e instanceof n.Scene)e.controller()===p?p.scrollTo(e.scrollOffset(),t):L(2,"scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",e);else if(s.type.Function(e))_=e;else{var o=s.get.elements(e)[0];if(o){for(;o.parentNode.hasAttribute(r);)o=o.parentNode;var i=g.vertical?"top":"left",a=s.get.offset(g.container),l=s.get.offset(o);b||(a[i]-=p.scrollPos()),p.scrollTo(l[i]-a[i],t)}else L(2,"scrollTo(): The supplied argument is invalid. Scroll cancelled.",e)}return p},this.scrollPos=function(e){return arguments.length?(s.type.Function(e)?C=e:L(2,"Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."),p):C.call(p)},this.info=function(e){var t={size:w,vertical:g.vertical,scrollPos:m,scrollDirection:y,container:g.container,isDocument:b};return arguments.length?void 0!==t[e]?t[e]:void L(1,'ERROR: option "'+e+'" is not available'):t},this.loglevel=function(e){return arguments.length?(g.loglevel!=e&&(g.loglevel=e),p):g.loglevel},this.enabled=function(e){return arguments.length?(E!=e&&(E=!!e,p.updateScene(h,!0)),p):E},this.destroy=function(t){e.clearTimeout(l);for(var n=h.length;n--;)h[n].destroy(t);return g.container.removeEventListener("resize",R),g.container.removeEventListener("scroll",R),s.cAF(a),L(3,"destroyed "+c+" (reset: "+(t?"true":"false")+")"),null},function(){for(var r in g)f.hasOwnProperty(r)||(L(2,'WARNING: Unknown option "'+r+'"'),delete g[r]);if(g.container=s.get.elements(g.container)[0],!g.container)throw L(1,"ERROR creating object "+c+": No valid scroll container supplied"),c+" init failed.";(b=g.container===e||g.container===t.body||!t.body.contains(g.container))&&(g.container=e),w=x(),g.container.addEventListener("resize",R),g.container.addEventListener("scroll",R);var o=parseInt(g.refreshInterval,10);g.refreshInterval=s.type.Number(o)?o:f.refreshInterval,S(),L(3,"added new "+c+" controller (v"+n.version+")")}(),p};var o={defaults:{container:e,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};n.Controller.addOption=function(e,t){o.defaults[e]=t},n.Controller.extend=function(e){var t=this;n.Controller=function(){return t.apply(this,arguments),this.$super=s.extend({},this),e.apply(this,arguments)||this},s.extend(n.Controller,t),n.Controller.prototype=t.prototype,n.Controller.prototype.constructor=n.Controller},n.Scene=function(o){var a,l,c="ScrollMagic.Scene",u="BEFORE",d="DURING",f="AFTER",p=i.defaults,g=this,h=s.extend({},p,o),v=u,m=0,y={start:0,end:0},b=0,w=!0,E={};this.on=function(e,t){return s.type.Function(t)?(e=e.trim().split(" ")).forEach((function(e){var n=e.split("."),r=n[0],o=n[1];"*"!=r&&(E[r]||(E[r]=[]),E[r].push({namespace:o||"",callback:t}))})):S(1,"ERROR when calling '.on()': Supplied callback for '"+e+"' is not a valid function!"),g},this.off=function(e,t){return e?((e=e.trim().split(" ")).forEach((function(e,n){var r=e.split("."),o=r[0],i=r[1]||"";("*"===o?Object.keys(E):[o]).forEach((function(e){for(var n=E[e]||[],r=n.length;r--;){var o=n[r];!o||i!==o.namespace&&"*"!==i||t&&t!=o.callback||n.splice(r,1)}n.length||delete E[e]}))})),g):(S(1,"ERROR: Invalid event name supplied."),g)},this.trigger=function(e,t){if(e){var r=e.trim().split("."),o=r[0],i=r[1],s=E[o];S(3,"event fired:",o,t?"->":"",t||""),s&&s.forEach((function(e,r){i&&i!==e.namespace||e.callback.call(g,new n.Event(o,e.namespace,g,t))}))}else S(1,"ERROR: Invalid event name supplied.");return g},g.on("change.internal",(function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?T():"reverse"===e.what&&g.update())})).on("shift.internal",(function(e){_(),g.update()}));var S=this._log=function(t,n){h.loglevel>=t&&(Array.prototype.splice.call(arguments,1,0,"("+c+") ->"),s.log.apply(e,arguments))};this.addTo=function(e){return e instanceof n.Controller?l!=e&&(l&&l.removeScene(g),l=e,L(),O(!0),T(!0),_(),l.info("container").addEventListener("resize",R),e.addScene(g),g.trigger("add",{controller:l}),S(3,"added "+c+" to controller"),g.update()):S(1,"ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"),g},this.enabled=function(e){return arguments.length?(w!=e&&(w=!!e,g.update(!0)),g):w},this.remove=function(){if(l){l.info("container").removeEventListener("resize",R);var e=l;l=void 0,e.removeScene(g),g.trigger("remove"),S(3,"removed "+c+" from controller")}return g},this.destroy=function(e){return g.trigger("destroy",{reset:e}),g.remove(),g.off("*.*"),S(3,"destroyed "+c+" (reset: "+(e?"true":"false")+")"),null},this.update=function(e){if(l)if(e)if(l.enabled()&&w){var t,n=l.info("scrollPos");t=h.duration>0?(n-y.start)/(y.end-y.start):n>=y.start?1:0,g.trigger("update",{startPos:y.start,endPos:y.end,scrollPos:n}),g.progress(t)}else C&&v===d&&I(!0);else l.updateScene(g,!1);return g},this.refresh=function(){return O(),T(),g},this.progress=function(e){if(arguments.length){var t=!1,n=v,r=l?l.info("scrollDirection"):"PAUSED",o=h.reverse||e>=m;if(0===h.duration?(t=m!=e,v=0===(m=e<1&&o?0:1)?u:d):e<0&&v!==u&&o?(m=0,v=u,t=!0):e>=0&&e<1&&o?(m=e,v=d,t=!0):e>=1&&v!==f?(m=1,v=f,t=!0):v!==d||o||I(),t){var i={progress:m,state:v,scrollDirection:r},s=v!=n,a=function(e){g.trigger(e,i)};s&&n!==d&&(a("enter"),a(n===u?"start":"end")),a("progress"),s&&v!==d&&(a(v===u?"start":"end"),a("leave"))}return g}return m};var C,x,_=function(){y={start:b+h.offset},l&&h.triggerElement&&(y.start-=l.info("size")*h.triggerHook),y.end=y.start+h.duration},O=function(e){if(a){var t="duration";z(t,a.call(g))&&!e&&(g.trigger("change",{what:t,newval:h.duration}),g.trigger("shift",{reason:t}))}},T=function(e){var t=0,n=h.triggerElement;if(l&&(n||b>0)){if(n)if(n.parentNode){for(var o=l.info(),i=s.get.offset(o.container),a=o.vertical?"top":"left";n.parentNode.hasAttribute(r);)n=n.parentNode;var c=s.get.offset(n);o.isDocument||(i[a]-=l.scrollPos()),t=c[a]-i[a]}else S(2,"WARNING: triggerElement was removed from DOM and will be reset to",void 0),g.triggerElement(void 0);var u=t!=b;b=t,u&&!e&&g.trigger("shift",{reason:"triggerElementPosition"})}},R=function(e){h.triggerHook>0&&g.trigger("shift",{reason:"containerResize"})},P=s.extend(i.validate,{duration:function(e){if(s.type.String(e)&&e.match(/^(\.|\d)*\d+%$/)){var t=parseFloat(e)/100;e=function(){return l?l.info("size")*t:0}}if(s.type.Function(e)){a=e;try{e=parseFloat(a.call(g))}catch(n){e=-1}}if(e=parseFloat(e),!s.type.Number(e)||e<0)throw a?(a=void 0,['Invalid return value of supplied function for option "duration":',e]):['Invalid value for option "duration":',e];return e}}),L=function(e){(e=arguments.length?[e]:Object.keys(P)).forEach((function(e,t){var n;if(P[e])try{n=P[e](h[e])}catch(o){n=p[e];var r=s.type.String(o)?[o]:o;s.type.Array(r)?(r[0]="ERROR: "+r[0],r.unshift(1),S.apply(this,r)):S(1,"ERROR: Problem executing validation callback for option '"+e+"':",o.message)}finally{h[e]=n}}))},z=function(e,t){var n=!1,r=h[e];return h[e]!=t&&(h[e]=t,L(e),n=r!=h[e]),n},k=function(e){g[e]||(g[e]=function(t){return arguments.length?("duration"===e&&(a=void 0),z(e,t)&&(g.trigger("change",{what:e,newval:h[e]}),i.shifts.indexOf(e)>-1&&g.trigger("shift",{reason:e})),g):h[e]})};this.controller=function(){return l},this.state=function(){return v},this.scrollOffset=function(){return y.start},this.triggerPosition=function(){var e=h.offset;return l&&(h.triggerElement?e+=b:e+=l.info("size")*g.triggerHook()),e},g.on("shift.internal",(function(e){var t="duration"===e.reason;(v===f&&t||v===d&&0===h.duration)&&I(),t&&N()})).on("progress.internal",(function(e){I()})).on("add.internal",(function(e){N()})).on("destroy.internal",(function(e){g.removePin(e.reset)}));var I=function(e){if(C&&l){var t=l.info(),n=x.spacer.firstChild;if(e||v!==d){var r={position:x.inFlow?"relative":"absolute",top:0,left:0},o=s.css(n,"position")!=r.position;x.pushFollowers?h.duration>0&&(v===f&&0===parseFloat(s.css(x.spacer,"padding-top"))||v===u&&0===parseFloat(s.css(x.spacer,"padding-bottom")))&&(o=!0):r[t.vertical?"top":"left"]=h.duration*m,s.css(n,r),o&&N()}else{"fixed"!=s.css(n,"position")&&(s.css(n,{position:"fixed"}),N());var i=s.get.offset(x.spacer,!0),a=h.reverse||0===h.duration?t.scrollPos-y.start:Math.round(m*h.duration*10)/10;i[t.vertical?"top":"left"]+=a,s.css(x.spacer.firstChild,{top:i.top,left:i.left})}}},N=function(){if(C&&l&&x.inFlow){var e=v===d,t=l.info("vertical"),n=x.spacer.firstChild,r=s.isMarginCollapseType(s.css(x.spacer,"display")),o={};x.relSize.width||x.relSize.autoFullWidth?e?s.css(C,{width:s.get.width(x.spacer)}):s.css(C,{width:"100%"}):(o["min-width"]=s.get.width(t?C:n,!0,!0),o.width=e?o["min-width"]:"auto"),x.relSize.height?e?s.css(C,{height:s.get.height(x.spacer)-(x.pushFollowers?h.duration:0)}):s.css(C,{height:"100%"}):(o["min-height"]=s.get.height(t?n:C,!0,!r),o.height=e?o["min-height"]:"auto"),x.pushFollowers&&(o["padding"+(t?"Top":"Left")]=h.duration*m,o["padding"+(t?"Bottom":"Right")]=h.duration*(1-m)),s.css(x.spacer,o)}},G=function(){l&&C&&v===d&&!l.info("isDocument")&&I()},j=function(){l&&C&&v===d&&((x.relSize.width||x.relSize.autoFullWidth)&&s.get.width(e)!=s.get.width(x.spacer.parentNode)||x.relSize.height&&s.get.height(e)!=s.get.height(x.spacer.parentNode))&&N()},F=function(e){l&&C&&v===d&&!l.info("isDocument")&&(e.preventDefault(),l._setScrollPos(l.info("scrollPos")-((e.wheelDelta||e[l.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))};this.setPin=function(n,o){var i=o&&o.hasOwnProperty("pushFollowers");if(o=s.extend({},{pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"},o),!(n=s.get.elements(n)[0]))return S(1,"ERROR calling method 'setPin()': Invalid pin element supplied."),g;if("fixed"===s.css(n,"position"))return S(1,"ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),g;if(C){if(C===n)return g;g.removePin()}var a=(C=n).parentNode.style.display,l=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];C.parentNode.style.display="none";var c="absolute"!=s.css(C,"position"),u=s.css(C,l.concat(["display"])),d=s.css(C,["width","height"]);C.parentNode.style.display=a,!c&&o.pushFollowers&&(S(2,"WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."),o.pushFollowers=!1),e.setTimeout((function(){C&&0===h.duration&&i&&o.pushFollowers&&S(2,"WARNING: pushFollowers =",!0,"has no effect, when scene duration is 0.")}),0);var f=C.parentNode.insertBefore(t.createElement("div"),C),p=s.extend(u,{position:c?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(c||s.extend(p,s.css(C,["width","height"])),s.css(f,p),f.setAttribute(r,""),s.addClass(f,o.spacerClass),x={spacer:f,relSize:{width:"%"===d.width.slice(-1),height:"%"===d.height.slice(-1),autoFullWidth:"auto"===d.width&&c&&s.isMarginCollapseType(u.display)},pushFollowers:o.pushFollowers,inFlow:c},!C.___origStyle){C.___origStyle={};var v=C.style;l.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]).forEach((function(e){C.___origStyle[e]=v[e]||""}))}return x.relSize.width&&s.css(f,{width:d.width}),x.relSize.height&&s.css(f,{height:d.height}),f.appendChild(C),s.css(C,{position:c?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(x.relSize.width||x.relSize.autoFullWidth)&&s.css(C,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),e.addEventListener("scroll",G),e.addEventListener("resize",G),e.addEventListener("resize",j),C.addEventListener("mousewheel",F),C.addEventListener("DOMMouseScroll",F),S(3,"added pin"),I(),g},this.removePin=function(t){if(C){if(v===d&&I(!0),t||!l){var n=x.spacer.firstChild;if(n.hasAttribute(r)){var o=x.spacer.style,i={};["margin","marginLeft","marginRight","marginTop","marginBottom"].forEach((function(e){i[e]=o[e]||""})),s.css(n,i)}x.spacer.parentNode.insertBefore(n,x.spacer),x.spacer.parentNode.removeChild(x.spacer),C.parentNode.hasAttribute(r)||(s.css(C,C.___origStyle),delete C.___origStyle)}e.removeEventListener("scroll",G),e.removeEventListener("resize",G),e.removeEventListener("resize",j),C.removeEventListener("mousewheel",F),C.removeEventListener("DOMMouseScroll",F),C=void 0,S(3,"removed pin (reset: "+(t?"true":"false")+")")}return g};var A,M=[];return g.on("destroy.internal",(function(e){g.removeClassToggle(e.reset)})),this.setClassToggle=function(e,t){var n=s.get.elements(e);return 0!==n.length&&s.type.String(t)?(M.length>0&&g.removeClassToggle(),A=t,M=n,g.on("enter.internal_class leave.internal_class",(function(e){var t="enter"===e.type?s.addClass:s.removeClass;M.forEach((function(e,n){t(e,A)}))})),g):(S(1,"ERROR calling method 'setClassToggle()': Invalid "+(0===n.length?"element":"classes")+" supplied."),g)},this.removeClassToggle=function(e){return e&&M.forEach((function(e,t){s.removeClass(e,A)})),g.off("start.internal_class end.internal_class"),A=void 0,M=[],g},function(){for(var e in h)p.hasOwnProperty(e)||(S(2,'WARNING: Unknown option "'+e+'"'),delete h[e]);for(var t in p)k(t);L()}(),g};var i={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!s.type.Number(e))throw['Invalid value for option "offset":',e];return e},triggerElement:function(e){if(e=e||void 0){var t=s.get.elements(e)[0];if(!t||!t.parentNode)throw['Element defined in option "triggerElement" was not found:',e];e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(s.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw['Invalid value for option "triggerHook": ',e];e=t[e]}return e},reverse:function(e){return!!e},loglevel:function(e){if(e=parseInt(e),!s.type.Number(e)||e<0||e>3)throw['Invalid value for option "loglevel":',e];return e}},shifts:["duration","offset","triggerHook"]};n.Scene.addOption=function(e,t,r,o){e in i.defaults?n._util.log(1,"[static] ScrollMagic.Scene -> Cannot add Scene option '"+e+"', because it already exists."):(i.defaults[e]=t,i.validate[e]=r,o&&i.shifts.push(e))},n.Scene.extend=function(e){var t=this;n.Scene=function(){return t.apply(this,arguments),this.$super=s.extend({},this),e.apply(this,arguments)||this},s.extend(n.Scene,t),n.Scene.prototype=t.prototype,n.Scene.prototype.constructor=n.Scene},n.Event=function(e,t,n,r){for(var o in r=r||{})this[o]=r[o];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var s=n._util=function(e){var n,r={},o=function(e){return parseFloat(e)||0},i=function(t){return t.currentStyle?t.currentStyle:e.getComputedStyle(t)},s=function(n,r,s,a){if((r=r===t?e:r)===e)a=!1;else if(!v.DomElement(r))return 0;n=n.charAt(0).toUpperCase()+n.substr(1).toLowerCase();var l=(s?r["offset"+n]||r["outer"+n]:r["client"+n]||r["inner"+n])||0;if(s&&a){var c=i(r);l+="Height"===n?o(c.marginTop)+o(c.marginBottom):o(c.marginLeft)+o(c.marginRight)}return l},a=function(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()}))};r.extend=function(e){for(e=e||{},n=1;n<arguments.length;n++)if(arguments[n])for(var t in arguments[n])arguments[n].hasOwnProperty(t)&&(e[t]=arguments[n][t]);return e},r.isMarginCollapseType=function(e){return["block","flex","list-item","table","-webkit-box"].indexOf(e)>-1};var l=0,u=["ms","moz","webkit","o"],d=e.requestAnimationFrame,f=e.cancelAnimationFrame;for(n=0;!d&&n<u.length;++n)d=e[u[n]+"RequestAnimationFrame"],f=e[u[n]+"CancelAnimationFrame"]||e[u[n]+"CancelRequestAnimationFrame"];d||(d=function(t){var n=(new Date).getTime(),r=Math.max(0,16-(n-l)),o=e.setTimeout((function(){t(n+r)}),r);return l=n+r,o}),f||(f=function(t){e.clearTimeout(t)}),r.rAF=d.bind(e),r.cAF=f.bind(e);var p=["error","warn","log"],g=e.console||{};for(g.log=g.log||function(){},n=0;n<p.length;n++){var h=p[n];g[h]||(g[h]=g.log)}r.log=function(e){(e>p.length||e<=0)&&(e=p.length);var t=new Date,n=("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)+":"+("0"+t.getSeconds()).slice(-2)+":"+("00"+t.getMilliseconds()).slice(-3),r=p[e-1],o=Array.prototype.splice.call(arguments,1),i=Function.prototype.bind.call(g[r],g);o.unshift(n),i.apply(g,o)};var v=r.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};v.String=function(e){return"string"===v(e)},v.Function=function(e){return"function"===v(e)},v.Array=function(e){return Array.isArray(e)},v.Number=function(e){return!v.Array(e)&&e-parseFloat(e)+1>=0},v.DomElement=function(e){return"object"===("undefined"===typeof HTMLElement?"undefined":c(HTMLElement))||"function"===typeof HTMLElement?e instanceof HTMLElement||e instanceof SVGElement:e&&"object"===("undefined"===typeof e?"undefined":c(e))&&null!==e&&1===e.nodeType&&"string"===typeof e.nodeName};var m=r.get={};return m.elements=function(n){var r=[];if(v.String(n))try{n=t.querySelectorAll(n)}catch(a){return r}if("nodelist"===v(n)||v.Array(n)||n instanceof NodeList)for(var o=0,i=r.length=n.length;o<i;o++){var s=n[o];r[o]=v.DomElement(s)?s:m.elements(s)}else(v.DomElement(n)||n===t||n===e)&&(r=[n]);return r},m.scrollTop=function(t){return t&&"number"===typeof t.scrollTop?t.scrollTop:e.pageYOffset||0},m.scrollLeft=function(t){return t&&"number"===typeof t.scrollLeft?t.scrollLeft:e.pageXOffset||0},m.width=function(e,t,n){return s("width",e,t,n)},m.height=function(e,t,n){return s("height",e,t,n)},m.offset=function(e,t){var n={top:0,left:0};if(e&&e.getBoundingClientRect){var r=e.getBoundingClientRect();n.top=r.top,n.left=r.left,t||(n.top+=m.scrollTop(),n.left+=m.scrollLeft())}return n},r.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},r.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},r.css=function(e,t){if(v.String(t))return i(e)[a(t)];if(v.Array(t)){var n={},r=i(e);return t.forEach((function(e,t){n[e]=r[a(e)]})),n}for(var o in t){var s=t[o];s==parseFloat(s)&&(s+="px"),e.style[a(o)]=s}},r}(e||{});return n}("undefined"===typeof window?v:window,"undefined"===typeof document?{}:document);!function(e){function t(){var e,n,r;u(this,t);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return n=r=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.state={controller:null},h(r,n)}p(t,e),d(t,[{key:"componentDidMount",value:function(){var e=this.props,t=(e.children,g(e,["children"]));this.setState({controller:new m.Controller(t)})}},{key:"componentWillUnmount",value:function(){this.controller=null}},{key:"render",value:function(){var e=this.props.children,t=this.state.controller;return t?s.a.Children.map(e,(function(e){if("Scene"!==e.type.displayName)return e;var n=f({},e.props,{controller:t});return s.a.createElement(e.type,n)})):e}}])}(s.a.Component);!function(e){var t="debug.addIndicators";if("undefined"===typeof n)var n={addEventListener:function(){}};var r=n.console||{},o=Function.prototype.bind.call(r.error||r.log||function(){},r);e||o("("+t+") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");var i="0.85em",s="9999",a=e._util,l=0;e.Scene.extend((function(){var e,t=this;t.addIndicators=function(n){if(!e){var r={name:"",indent:0,parent:void 0,colorStart:"green",colorEnd:"red",colorTrigger:"blue"};n=a.extend({},r,n),l++,e=new c(t,n),t.on("add.plugin_addIndicators",e.add),t.on("remove.plugin_addIndicators",e.remove),t.on("destroy.plugin_addIndicators",t.removeIndicators),t.controller()&&e.add()}return t},t.removeIndicators=function(){return e&&(e.remove(),this.off("*.plugin_addIndicators"),e=void 0),t}})),e.Controller.addOption("addIndicators",!1),e.Controller.extend((function(){var r=this,o=r.info(),i=o.container,s=o.isDocument,l=o.vertical,c={groups:[]};r._indicators&&function(){r._log&&(Array.prototype.splice.call(arguments,1,0,"("+t+")","->"),r._log.apply(this,arguments))}(2,"WARNING: Scene already has a property '_indicators', which will be overwritten by plugin."),this._indicators=c;var u=function(){c.updateBoundsPositions()},d=function(){c.updateTriggerGroupPositions()};return i.addEventListener("resize",d),s||(n.addEventListener("resize",d),n.addEventListener("scroll",d)),i.addEventListener("resize",u),i.addEventListener("scroll",u),this._indicators.updateBoundsPositions=function(e){for(var t,n,r,o=e?[a.extend({},e.triggerGroup,{members:[e]})]:c.groups,s=o.length,u={},d=l?"left":"top",f=l?"width":"height",p=l?a.get.scrollLeft(i)+a.get.width(i)-15:a.get.scrollTop(i)+a.get.height(i)-15;s--;)for(t=(r=o[s]).members.length,n=a.get[f](r.element.firstChild);t--;)u[d]=p-n,a.css(r.members[t].bounds,u)},this._indicators.updateTriggerGroupPositions=function(e){for(var t,n,o,u,d=e?[e]:c.groups,f=d.length,p=s?document.body:i,g=s?{top:0,left:0}:a.get.offset(p,!0),h=l?a.get.width(i)-15:a.get.height(i)-15,v=l?"width":"height",m=l?"Y":"X";f--;)n=(t=d[f]).element,u=(o=t.triggerHook*r.info("size"))>a.get[v](n.firstChild.firstChild)?"translate"+m+"(-100%)":"",a.css(n,{top:g.top+(l?o:h-t.members[0].options.indent),left:g.left+(l?h-t.members[0].options.indent:o)}),a.css(n.firstChild.firstChild,{"-ms-transform":u,"-webkit-transform":u,transform:u})},this._indicators.updateTriggerGroupLabel=function(e){var t="trigger"+(e.members.length>1?"":" "+e.members[0].options.name),n=e.element.firstChild.firstChild;n.textContent!==t&&(n.textContent=t,l&&c.updateBoundsPositions())},this.addScene=function(t){this._options.addIndicators&&t instanceof e.Scene&&t.controller()===r&&t.addIndicators(),this.$super.addScene.apply(this,arguments)},this.destroy=function(){i.removeEventListener("resize",d),s||(n.removeEventListener("resize",d),n.removeEventListener("scroll",d)),i.removeEventListener("resize",u),i.removeEventListener("scroll",u),this.$super.destroy.apply(this,arguments)},r}));var c=function(e,n){var r,o,i=this,s=u.bounds(),c=u.start(n.colorStart),d=u.end(n.colorEnd),f=n.parent&&a.get.elements(n.parent)[0],p=function(){e._log&&(Array.prototype.splice.call(arguments,1,0,"("+t+")","->"),e._log.apply(this,arguments))};n.name=n.name||l,c.firstChild.textContent+=" "+n.name,d.textContent+=" "+n.name,s.appendChild(c),s.appendChild(d),i.options=n,i.bounds=s,i.triggerGroup=void 0,this.add=function(){o=e.controller(),r=o.info("vertical");var t=o.info("isDocument");f||(f=t?document.body:o.info("container")),t||"static"!==a.css(f,"position")||a.css(f,{position:"relative"}),e.on("change.plugin_addIndicators",h),e.on("shift.plugin_addIndicators",g),b(),m(),setTimeout((function(){o._indicators.updateBoundsPositions(i)}),0),p(3,"added indicators")},this.remove=function(){if(i.triggerGroup){if(e.off("change.plugin_addIndicators",h),e.off("shift.plugin_addIndicators",g),i.triggerGroup.members.length>1){var t=i.triggerGroup;t.members.splice(t.members.indexOf(i),1),o._indicators.updateTriggerGroupLabel(t),o._indicators.updateTriggerGroupPositions(t),i.triggerGroup=void 0}else y();v(),p(3,"removed indicators")}};var g=function(){m()},h=function(e){"triggerHook"===e.what&&b()},v=function(){s.parentNode.removeChild(s)},m=function(){s.parentNode!==f&&function(){var e=o.info("vertical");a.css(c.firstChild,{"border-bottom-width":e?1:0,"border-right-width":e?0:1,bottom:e?-1:n.indent,right:e?n.indent:-1,padding:e?"0 8px":"2px 4px"}),a.css(d,{"border-top-width":e?1:0,"border-left-width":e?0:1,top:e?"100%":"",right:e?n.indent:"",bottom:e?"":n.indent,left:e?"":"100%",padding:e?"0 8px":"2px 4px"}),f.appendChild(s)}();var t={};t[r?"top":"left"]=e.triggerPosition(),t[r?"height":"width"]=e.duration(),a.css(s,t),a.css(d,{display:e.duration()>0?"":"none"})},y=function(){o._indicators.groups.splice(o._indicators.groups.indexOf(i.triggerGroup),1),i.triggerGroup.element.parentNode.removeChild(i.triggerGroup.element),i.triggerGroup=void 0},b=function(){var t=e.triggerHook(),s=1e-4;if(!(i.triggerGroup&&Math.abs(i.triggerGroup.triggerHook-t)<s)){for(var l,c=o._indicators.groups,d=c.length;d--;)if(l=c[d],Math.abs(l.triggerHook-t)<s)return i.triggerGroup&&(1===i.triggerGroup.members.length?y():(i.triggerGroup.members.splice(i.triggerGroup.members.indexOf(i),1),o._indicators.updateTriggerGroupLabel(i.triggerGroup),o._indicators.updateTriggerGroupPositions(i.triggerGroup))),l.members.push(i),i.triggerGroup=l,void o._indicators.updateTriggerGroupLabel(l);if(i.triggerGroup){if(1===i.triggerGroup.members.length)return i.triggerGroup.triggerHook=t,void o._indicators.updateTriggerGroupPositions(i.triggerGroup);i.triggerGroup.members.splice(i.triggerGroup.members.indexOf(i),1),o._indicators.updateTriggerGroupLabel(i.triggerGroup),o._indicators.updateTriggerGroupPositions(i.triggerGroup),i.triggerGroup=void 0}!function(){var t=u.trigger(n.colorTrigger),s={};s[r?"right":"bottom"]=0,s[r?"border-top-width":"border-left-width"]=1,a.css(t.firstChild,s),a.css(t.firstChild.firstChild,{padding:r?"0 8px 3px 8px":"3px 4px"}),document.body.appendChild(t);var l={triggerHook:e.triggerHook(),element:t,members:[i]};o._indicators.groups.push(l),i.triggerGroup=l,o._indicators.updateTriggerGroupLabel(l),o._indicators.updateTriggerGroupPositions(l)}()}}},u={start:function(e){var t=document.createElement("div");t.textContent="start",a.css(t,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e});var n=document.createElement("div");return a.css(n,{position:"absolute",overflow:"visible",width:0,height:0}),n.appendChild(t),n},end:function(e){var t=document.createElement("div");return t.textContent="end",a.css(t,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e}),t},bounds:function(){var e=document.createElement("div");return a.css(e,{position:"absolute",overflow:"visible","white-space":"nowrap","pointer-events":"none","font-size":i}),e.style.zIndex=s,e},trigger:function(e){var t=document.createElement("div");t.textContent="trigger",a.css(t,{position:"relative"});var n=document.createElement("div");a.css(n,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e}),n.appendChild(t);var r=document.createElement("div");return a.css(r,{position:"fixed",overflow:"visible","white-space":"nowrap","pointer-events":"none","font-size":i}),r.style.zIndex=s,r.appendChild(n),r}}}(m);var y=function(e){return!(1!==s.a.Children.count(e)||!e.type||"Tween"!==e.type.displayName&&"Timeline"!==e.type.displayName)},b=function(e,t,n){return e&&"function"===typeof e?e(t,n):e},w=function(e,t,n){return e=function(e,t,n){if(y(e)){var r=f({},e.props,{totalProgress:t,paused:!0});return s.a.createElement("div",null,s.a.createElement(e.type,r))}return e}(e,t),e=b(e,t,n),s.a.Children.only(e)},E=function(e){function t(){var e,n,r;u(this,t);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return n=r=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.state={event:"init",progress:0},h(r,n)}return p(t,e),d(t,[{key:"componentDidMount",value:function(){var e=this.props,t=(e.children,e.controller),n=e.classToggle,r=e.pin,o=e.pinSettings,i=e.indicators,s=e.enabled,a=g(e,["children","controller","classToggle","pin","pinSettings","indicators","enabled"]),l=this.ref;a.triggerElement=null===a.triggerElement?null:a.triggerElement||l,this.scene=new m.Scene(a),this.initEventHandlers(),n&&this.setClassToggle(this.scene,l,n),(r||o)&&this.setPin(this.scene,l,r,o),i&&this.scene.addIndicators({name:" "}),void 0!==s&&this.scene.enabled(s),this.scene.addTo(t)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.duration,r=t.offset,o=t.triggerElement,i=t.triggerHook,s=t.reverse,a=t.enabled;void 0!==n&&n!==e.duration&&this.scene.duration(n),void 0!==r&&r!==e.offset&&this.scene.offset(r),void 0!==o&&e.triggerElement,void 0!==i&&i!==e.triggerHook&&this.scene.triggerHook(i),void 0!==s&&s!==e.reverse&&this.scene.reverse(s),void 0!==a&&a!==e.enabled&&this.scene.enabled(a)}},{key:"componentWillUnmount",value:function(){this.scene.destroy()}},{key:"setClassToggle",value:function(e,t,n){Array.isArray(n)&&2===n.length?e.setClassToggle(n[0],n[1]):e.setClassToggle(t,n)}},{key:"setPin",value:function(e,t,n,r){t=function(e){return"string"===typeof e||e instanceof String}(n)?n:t,e.setPin(t,r)}},{key:"initEventHandlers",value:function(){var e=this,t=this.props.children;("function"===typeof t||y(b(t,0,"init")))&&(this.scene.on("start end enter leave",(function(t){e.setState({event:t})})),this.scene.on("progress",(function(t){e.setState({progress:t.progress})})))}},{key:"render",value:function(){var e,t,n,r=this,o=this.props.children,i=this.state,a=i.progress,l=i.event,c=w(o,a,l);return s.a.cloneElement(c,(e={},t=function(e){return e.type&&e.type.$$typeof&&"Symbol(react.forward_ref)"===e.type.$$typeof.toString()?"ref":e.type&&e.type.styledComponentId?"innerRef":"ref"}(c),n=function(e){return r.ref=e},t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e))}}]),t}(s.a.PureComponent);(function(e){function t(){return u(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,e),d(t,[{key:"render",value:function(){if(!this.props.controller){var e=this.props.children;return w(e,0,"init")}return s.a.createElement(E,this.props)}}]),t}(s.a.PureComponent)).displayName="Scene";var S=n("36c1"),C=n.n(S);t.default=function(e){var t=Object(l.useRouter)(),n=Object(i.useRef)(),s=Object(i.useState)(0),c=s[0],u=s[1];Object(i.useEffect)((function(){}),[]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(a.a,{page:t.pathname,scrollPosition:c}),Object(r.jsx)(C.a,{style:{height:"100vh",zIndex:1},onScroll:function(e,t){u(t.offset.y);document.getElementById("someElement").getBoundingClientRect().bottom},children:Object(r.jsxs)("div",{style:{position:"fixed",width:"100%"},children:[Object(r.jsx)("div",{id:"someElement",style:{height:"200px",backgroundColor:"brown"}}),Object(r.jsx)("div",{ref:n,id:"someElement",style:{height:"300vh"}}),Object(r.jsx)("div",Object(o.a)({style:{height:"200px"}},"style",{height:"200px",backgroundColor:"black"}))]})}),Object(r.jsx)("div",{style:{height:"100vh",width:"100%",backgroundColor:"green",top:0,zIndex:0,position:"fixed"},children:"asdasdasdasd"})]})}},aMhK:function(e,t,n){"use strict";var r=n("nKUr"),o=(n("q1tI"),n("Hzbl"),n("C+vA")),i=n("20a2"),s=n("j4rv");n("36c1");t.a=function(e){var t=e.children;Object(i.useRouter)();return Object(r.jsxs)(r.Fragment,{children:[t,Object(r.jsx)(s.a,{title:"Let\u2019s work together and build something great!",tag:"WORK WITH US",image:"/common/two-section/1.png"}),Object(r.jsx)(o.a,{})]})}},"y/n3":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo",function(){return n("GdtD")}])}},[["y/n3",0,1,2,3,4,5]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(8),o=a.n(r),s=(a(15),a(1)),l=a(2),i=a(5),h=a(4),m=a(6),d=(a(16),a(3)),p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).handleCompleteChange=a.handleCompleteChange.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleCompleteChange",value:function(e){this.props.onCompleteChange(e)}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"c".concat(this.props.row-1,"-").concat(this.props.col,"-w"),className:"checkbox check-transparent cc".concat(this.props.col," cr").concat(this.props.row)},n.a.createElement("input",{type:"checkbox",id:"c".concat(this.props.row-1,"-").concat(this.props.col),name:"c".concat(this.props.row-1,"-").concat(this.props.col),checked:this.props.complete,onChange:this.handleCompleteChange}),n.a.createElement("label",{htmlFor:"c".concat(this.props.row-1,"-").concat(this.props.col)})))}}]),t}(c.Component),u=function(e){function t(){var e;Object(s.a)(this,t),(e=Object(i.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){var a=t.target.id,c=t.target.value,n=e.state;if("charactername"===a)n.charactername=c;else if(a.startsWith("character")){var r=a.match(/character(\d+)/)[1];n.characters[parseInt(r)]=c}else if(a.startsWith("c")){var o=a.match(/c(\d+)-(\d+)/),s=parseInt(o[1]),l=parseInt(o[2]);if(1===l||2===l||3===l)if(t.target.checked){for(var i=0;i<3*s+l;i++)n.checks[i]=!0;for(var h=s+(3===l?1:0)+1,m=0;m<h;m++)n.stars[m]=!0}else{for(var d=3*s+l-1;d<n.checks.length;d++)n.checks[d]=!1;for(var p=s+1;p<n.stars.length;p++)n.stars[p]=!1}else 4===l?n.circles[parseInt(s)]=t.target.checked:5===l&&(n.stars[parseInt(s)]=t.target.checked)}else if(a.startsWith("sq")){var u=a.match(/sq(\d+)/)[1];n.sidequests[parseInt(u)]=c}else if(a.startsWith("m")){var g=a.match(/m(\d+)/)[1];n.maps[parseInt(g)]=c}else if(a.startsWith("t")){var k=a.match(/t(\d+)/)[1];n.talents[parseInt(k)]=c}else if(a.startsWith("key")){var v=a.match(/key(\d+)/)[1];n.keywords[parseInt(v)]=c}else n[a]=c;localStorage.setItem("data",JSON.stringify(n)),e.setState(n)};var a=JSON.parse(localStorage.getItem("data"));return e.state=a||{charactername:"",checks:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],stars:[!0,!1,!1,!1,!1,!1,!1,!1,!1,!1],circles:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],characters:["","","","","","","","","",""],sidequests:["","","","","","","","","","","",""],maps:["","","","","","","","","",""],talents:["","","","","","","","",""],keywords:["","","","","",""]},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{id:"bg",src:"both.png",alt:"card"}),n.a.createElement("form",{id:"overlay"},n.a.createElement("div",{id:"name"},n.a.createElement("input",{type:"text",id:"charactername",name:"charactername",value:this.state.charactername,onChange:this.handleChange})),n.a.createElement("div",{id:"campaign"},n.a.createElement("div",{id:"c0-4-w",className:"checkbox check-circle cc4 cr0"},n.a.createElement("input",{type:"checkbox",id:"c0-4",name:"c0-4",checked:this.state.circles[0],onChange:this.handleChange}),n.a.createElement("label",{htmlFor:"c0-4"})),n.a.createElement("div",{id:"c0-5-w",className:"checkbox check-star cc5 cr0"},n.a.createElement("input",{type:"checkbox",id:"c0-5",name:"c0-5",checked:!0,disabled:!0}),n.a.createElement("label",{htmlFor:"c0-5"})),[1,2,3,4,5,6,7,8,9].map(function(t){return n.a.createElement(n.a.Fragment,{key:"row".concat(t)},n.a.createElement(p,{row:t,col:1,complete:e.state.checks[3*(t-1)],onCompleteChange:e.handleChange}),n.a.createElement(p,{row:t,col:2,complete:e.state.checks[3*(t-1)+1],onCompleteChange:e.handleChange}),n.a.createElement(p,{row:t,col:3,complete:e.state.checks[3*(t-1)+2],onCompleteChange:e.handleChange}),n.a.createElement("div",{id:"c".concat(t,"-4-w"),className:"checkbox check-circle cc4 cr".concat(t)},n.a.createElement("input",{type:"checkbox",id:"c".concat(t,"-4"),name:"c".concat(t,"-4"),checked:e.state.circles[t],onChange:e.handleChange}),n.a.createElement("label",{htmlFor:"c".concat(t,"-4")})),n.a.createElement("div",{id:"c".concat(t,"-5-w"),className:"checkbox check-star cc5 cr".concat(t)},n.a.createElement("input",{type:"checkbox",id:"c".concat(t,"-5"),name:"c".concat(t,"-5"),checked:e.state.stars[t],onChange:e.handleChange}),n.a.createElement("label",{htmlFor:"c".concat(t,"-5")})),n.a.createElement("input",{type:"text",id:"character".concat(t-1),name:"character".concat(t-1),className:"cc6 ccr".concat(t," character"),value:e.state.characters[t-1],onChange:e.handleChange}))}),n.a.createElement(p,{row:10,col:1,complete:this.state.checks[27],onCompleteChange:this.handleChange}),n.a.createElement(p,{row:10,col:2,complete:this.state.checks[28],onCompleteChange:this.handleChange}),n.a.createElement(p,{row:10,col:3,complete:this.state.checks[29],onCompleteChange:this.handleChange}),n.a.createElement("input",{type:"text",id:"character9",name:"character9",className:"cc6 ccr10 character",value:this.state.characters[9],onChange:this.handleChange})),n.a.createElement("div",{id:"sidequests"},[1,2,3,4,5,6,7,8,9,10,11,12].map(function(t){return n.a.createElement("input",{type:"text",id:"sq".concat(t-1),name:"sq".concat(t-1),key:"sq".concat(t-1),className:"sq sqr".concat(t%2===0?1:2," sqc").concat(t),value:e.state.sidequests[t-1],onChange:e.handleChange})})),n.a.createElement("div",{id:"maps"},[1,2,3,4,5,6,7,8,9,10].map(function(t){return n.a.createElement("input",{type:"text",id:"m".concat(t-1),name:"m".concat(t-1),key:"m".concat(t-1),className:"map map".concat(t),value:e.state.maps[t-1],onChange:e.handleChange})})),n.a.createElement("div",{id:"talents"},[1,2,3,4,5,6,7,8,9].map(function(t){return n.a.createElement("input",{type:"text",id:"t".concat(t-1),name:"t".concat(t-1),key:"t".concat(t-1),className:"tal tal".concat(t),value:e.state.talents[t-1],onChange:e.handleChange})})),n.a.createElement("div",{id:"keywords"},[1,2,3,4,5,6].map(function(t){return n.a.createElement("input",{type:"text",id:"key".concat(t-1),name:"key".concat(t-1),key:"key".concat(t-1),className:"key key".concat(t),value:e.state.keywords[t-1],onChange:e.handleChange})}))))}}]),t}(n.a.Component),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(n.a.createElement(u,null),document.getElementById("wrapper")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");g?(function(e,t){fetch(e).then(function(a){var c=a.headers.get("content-type");404===a.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):k(t,e)})}}()},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.b469124a.chunk.js.map
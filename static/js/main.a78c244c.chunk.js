(this["webpackJsonpboruto-characters"]=this["webpackJsonpboruto-characters"]||[]).push([[0],[,,,,,,,function(e,n,t){e.exports=t(18)},,,,,function(e,n,t){},function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(2),o=t.n(c),i=(t(12),t(3)),s=t(4),l=t(6),h=t(5),u=(t(13),t(14),t(15),t(16),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:"/ninjas-pics/".concat(e.ninja.id,".jpeg"),alt:e.ninja.name,height:"160px"}),r.a.createElement("h2",null,e.ninja.name))}),d=function(e){return r.a.createElement("div",{className:"card-list"},e.shinobi.map((function(e){return r.a.createElement(u,{key:e.id,ninja:e})})))},m=(t(17),function(e){e.placeholder;var n=e.changeHandler;return r.a.createElement("input",{className:"search",type:"search",placeholder:"search shinobi",onChange:n})}),f=function(e){Object(l.a)(t,e);var n=Object(h.a)(t);function t(){var e;return Object(i.a)(this,t),(e=n.call(this)).handleChange=function(n){e.setState({searchField:n.target.value})},e.state={ninjas:[],searchField:""},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3000/ninjas.json").then((function(e){return e.json()})).then((function(n){return e.setState({ninjas:n})}))}},{key:"render",value:function(){var e=this.state,n=e.ninjas,t=e.searchField,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Shinobi"),r.a.createElement(m,{placeholder:"search shinobi",changeHandler:this.handleChange}),r.a.createElement(d,{shinobi:a}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.a78c244c.chunk.js.map
(this["webpackJsonpyoutube-reacthooks-material-ui"]=this["webpackJsonpyoutube-reacthooks-material-ui"]||[]).push([[0],{48:function(e,t,a){e.exports=a(76)},53:function(e,t,a){},55:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),c=a.n(i),o=(a(53),a(24)),l=a.n(o),s=a(36),u=a(17),m=(a(55),a(106)),p=a(20),d=a(10),h=a(39),v=a(40),f=a(44),b=a(101),E=a(107),g=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={searchTerm:""},a.handleChange=function(e){a.setState({searchTerm:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.searchTerm;(0,a.props.onFormSubmit)(t)},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{elevation:6,style:{padding:"25px"}},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(E.a,{fullWidth:!0,label:"Search...",onChange:this.handleChange})))}}]),t}(r.a.Component),y=a(105),w=function(e){var t=e.videos;if(!t)return r.a.createElement("div",null,"loading...");console.log(t.id.videoId);var a="https://www.youtube.com/embed/".concat(t.id.videoId);return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{elevation:6,style:{height:"10%"}},r.a.createElement("iframe",{frameBorder:"0",height:"100%",width:"100%",title:"Video Player",src:a})),r.a.createElement(b.a,{elevation:6,style:{padding:"15px"}},r.a.createElement(y.a,{variant:"h4"},t.snippet.title," - ",t.snippet.channelTitle),r.a.createElement(y.a,{variant:"subtitle1"},t.snippet.channelTitle),r.a.createElement(y.a,{variant:"subtitle2"},t.snippet.description)))},x=a(43),S=a.n(x).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),j=function(e){var t=e.videos,a=e.onVideoSelect;return r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(b.a,{style:{display:"flex",alignItems:"center",cursor:"pointer"},onClick:function(){return a(t)}},r.a.createElement("img",{style:{marginRight:"20px"},alt:"thumbnail",src:t.snippet.thumbnails.medium.url}),r.a.createElement(y.a,{variant:"subtitle1"},r.a.createElement("b",null,t.snippet.title))))},O=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e,t){return r.a.createElement(j,{key:t,videos:e,onVideoSelect:a})}));return r.a.createElement(m.a,{container:!0,spacing:10},n)};var k=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(null),o=Object(u.a)(c,2),p=o[0],d=o[1],h=function(){var e=Object(s.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("search",{params:{part:"snippet",q:t,maxResults:20,key:"AIzaSyAFDUKCcmOSixP1dn-jleIXXW01x_eDhuI"}});case 2:a=e.sent,i(a.data.items),d(a.data.items[0]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){h("blues guitar")}),[]),r.a.createElement(m.a,{justify:"center",container:!0,spacing:10},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(m.a,{container:!0,spacing:10},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(g,{onFormSubmit:h})),r.a.createElement(m.a,{item:!0,xs:8},r.a.createElement(w,{videos:p})),r.a.createElement(m.a,{item:!0,xs:4},r.a.createElement(O,{videos:a,onVideoSelect:function(e){d(e)}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.fba01a57.chunk.js.map
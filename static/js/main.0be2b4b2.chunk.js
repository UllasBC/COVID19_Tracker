(this.webpackJsonpcovid_19_tracker=this.webpackJsonpcovid_19_tracker||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){},206:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(0),s=c.n(a),r=c(7),o=c.n(r),i=(c(98),c(23)),l=c.n(i),u=c(38),d=c(11),j=(c(100),c(241)),f=c(242),h=c(243),b=c(233),v=c(237),p=c(13),O=c(238);c(101);var x=function(e){var t=e.title,c=e.active,a=e.isRed,s=e.cases,r=e.total,o=Object(p.a)(e,["title","active","isRed","cases","total"]);return Object(n.jsx)(b.a,{className:"infoBox ".concat(c&&"infoBox--selected"," ").concat(a&&"infoBox--red"),onClick:o.onClick,children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(O.a,{className:"infoBox__title",color:"textSecondary",children:t}),Object(n.jsx)("h2",{className:"infoBox__cases ".concat(!a&&"infoBox__cases--green"),children:s}),Object(n.jsxs)(O.a,{className:"infoBox__total",color:"textSecondary",children:[r," Total"]})]})})},m=(c(106),c(240)),g=c(245),y=c(86),_=c(14),C=c.n(_),N=c(244),k=c(239),w={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},S=function(e){var t=Object(y.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},I=function(e){return e?"+".concat(C()(e).format("0.0a")):"+0"},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return Object(n.jsx)(N.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:w[t].hex,fillColor:w[t].hex,radius:Math.sqrt(e[t])*w[t].multiplier,children:Object(n.jsx)(k.a,{children:Object(n.jsxs)("div",{className:"info-container",children:[Object(n.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(n.jsx)("div",{className:"info-name",children:e.country}),Object(n.jsxs)("div",{className:"info-confirmed",children:["Cases: ",C()(e.cases).format("0,0")]}),Object(n.jsxs)("div",{className:"info-recovered",children:["Recovered: ",C()(e.recovered).format("0,0")]}),Object(n.jsxs)("div",{className:"info-deaths",children:["Deaths: ",C()(e.deaths).format("0,0")]})]})})})}))};var B=function(e){var t=e.countries,c=e.casesType,a=e.center,s=e.zoom;return Object(n.jsx)("div",{className:"map",children:Object(n.jsxs)(m.a,{center:a,zoom:s,children:[Object(n.jsx)(g.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),T(t,c)]})})};c(107);var R=function(e){var t=e.countries;return Object(n.jsx)("div",{className:"table",children:t.map((function(e){var t=e.country,c=e.cases;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t}),Object(n.jsx)("td",{children:Object(n.jsx)("strong",{children:C()(c).format("0,0")})})]})}))})},D=c(85),F={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return C()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return C()(e).format("0a")}}}]}},L=function(e){var t,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",n=[];for(var a in e.cases){if(t){var s={x:a,y:e[c][a]-t};n.push(s)}t=e[c][a]}return n};var M=function(e){var t=e.casesType,c=void 0===t?"cases":t,s=Object(p.a)(e,["casesType"]),r=Object(a.useState)({}),o=Object(d.a)(r,2),i=o[0],j=o[1];return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=L(e,c);j(t),console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(n.jsx)("div",{className:s.className,children:(null===i||void 0===i?void 0:i.length)>0&&Object(n.jsx)(D.Line,{options:F,data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:i}]}})})};c(204);var z=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)("worldwide"),o=Object(d.a)(r,2),i=o[0],p=o[1],O=Object(a.useState)({}),m=Object(d.a)(O,2),g=m[0],y=m[1],_=Object(a.useState)([]),C=Object(d.a)(_,2),N=C[0],k=C[1],w=Object(a.useState)({lat:34.80746,lng:-40.4796}),T=Object(d.a)(w,2),D=T[0],F=T[1],L=Object(a.useState)(3),z=Object(d.a)(L,2),E=z[0],A=z[1],J=Object(a.useState)([]),P=Object(d.a)(J,2),W=P[0],Y=P[1],q=Object(a.useState)("cases"),V=Object(d.a)(q,2),G=V[0],H=V[1];Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){y(e)}))}),[]),Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=S(e);k(c),s(t),Y(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var K=function(){var e=Object(u.a)(l.a.mark((function e(t){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,n="worldwide"===c?"https://disease.sh/v3/covid-19/countries":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){p(c),y(e),F([e.countryInfo.lat,e.countryInfo.long]),A(4)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log("Country Info>>",g),Object(n.jsxs)("div",{className:"app",children:[Object(n.jsxs)("div",{className:"app__left",children:[Object(n.jsxs)("div",{className:"app__header",children:[Object(n.jsx)("h1",{children:" COVID-19 Tracker"}),Object(n.jsx)(j.a,{className:"app__dropdown",children:Object(n.jsxs)(f.a,{variant:"outlined",onChange:K,value:i,children:[Object(n.jsx)(h.a,{value:"worldwide",children:"Worldwide"}),c.map((function(e){return Object(n.jsx)(h.a,{value:e.value,children:e.name})}))]})})]}),Object(n.jsxs)("div",{className:"app__stats",children:[Object(n.jsx)(x,{isRed:!0,active:"cases"===G,onClick:function(e){return H("cases")},title:"Coronavirus Cases",cases:I(g.todayCases),total:I(g.cases)}),Object(n.jsx)(x,{active:"recovered"===G,onClick:function(e){return H("recovered")},title:"Recovered",cases:I(g.todayRecovered),total:I(g.recovered)}),Object(n.jsx)(x,{isRed:!0,active:"deaths"===G,onClick:function(e){return H("deaths")},title:"Deaths",cases:I(g.todayDeaths),total:I(g.deaths)})]}),Object(n.jsx)(B,{casesType:G,countries:W,center:D,zoom:E})]}),Object(n.jsx)(b.a,{className:"app__right",children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)("h3",{children:"Live Cases by Country"}),Object(n.jsx)(R,{countries:N}),Object(n.jsxs)("h3",{className:".app__graphTitle",children:["Worldwide new ",G]}),Object(n.jsx)(M,{className:"app__graph",casesType:G})]})})]})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,247)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(z,{})}),document.getElementById("root")),E()},98:function(e,t,c){}},[[206,1,2]]]);
//# sourceMappingURL=main.0be2b4b2.chunk.js.map
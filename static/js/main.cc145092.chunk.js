(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{8:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(3),o=n(6),l=n(4),s=n(7),i=n(0),c=n.n(i),u=n(5),h=n.n(u),d={method:"GET",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImVtYWlsIjoicGV0dGVyaS5waWlyb25lbkBnbWFpbC5jb20iLCJpYXQiOjE1NDk2MzEzNDh9.dH6cUoifYWEJNhbRX0At29XYlQ6h8brBFoitYCaRPgY"}},b=function(e){function t(e,n){var r;return Object(a.a)(this,t),(r=Object(o.a)(this,Object(l.a)(t).call(this,e,n))).state={dataSet:[],loading:!1},r.fetchPosts=function(){r.setState({dataSet:[],loading:!0}),fetch("https://opendata.hopefully.works/api/events",d).then(function(e){return e.json()}).then(function(e){return r.setState({dataSet:e,loading:!1})})},r}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.fetchPosts(),this.interval=setInterval(this.fetchPosts,1e4)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.dataSet;return t?c.a.createElement("p",null,"Loading..."):c.a.createElement("ul",null,c.a.createElement("p",null,"Date: ",n.date,c.a.createElement("br",null),"Sensor1:  ",n.sensor1,c.a.createElement("br",null),"Sensor2:  ",n.sensor2,c.a.createElement("br",null),"Sensor3:   ",n.sensor3,c.a.createElement("br",null),"Sensor4:  ",n.sensor4))}}]),t}(c.a.Component),p=document.getElementById("root");h.a.render(c.a.createElement(b,null),p)}},[[8,2,1]]]);
//# sourceMappingURL=main.cc145092.chunk.js.map
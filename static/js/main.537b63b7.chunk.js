(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,n,t){e.exports=t(48)},47:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(6),i=t.n(o),c=t(7),s=t(8),u=t(10),l=t(9),m=t(11),p=t(1),f=t(4),h=t(12),d=t.n(h),g=t(2),v={cost:["\u0420\u0430\u0437\u043e\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e","\u0414\u043e\u0440\u043e\u0433\u043e","\u041d\u0435\u0434\u043e\u0440\u043e\u0433\u043e","\u0421\u0440\u0435\u0434\u043d\u044f\u044f \u043f\u043e \u0440\u044b\u043d\u043a\u0443","\u0414\u0435\u0448\u0435\u0432\u043e","\u041e\u0447\u0435\u043d\u044c \u0434\u0435\u0448\u0435\u0432\u043e","\u0414\u0430\u0440\u043e\u043c"],time:["\u0421\u043b\u043e\u0443\u043f\u043e\u043a","\u0421\u043b\u043e\u0443\u043f\u043e\u043a","\u041c\u0435\u0434\u043b\u0435\u043d\u043d\u043e","\u0411\u044b\u0441\u0442\u0440\u043e","\u0411\u044b\u0441\u0442\u0440\u043e","\u041e\u0447\u0435\u043d\u044c \u0431\u044b\u0441\u0442\u0440\u043e","\u041c\u043e\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u043e"],scope:["\u0421\u0440\u0430\u0437\u0443 \u0432\u044b\u0431\u0440\u043e\u0441\u0438\u0442\u044c","\u041f\u043b\u043e\u0445\u043e","\u0421\u043e\u0439\u0434\u0435\u0442","\u0415\u0441\u0442\u044c \u043a\u0443\u0434\u0430 \u0441\u0442\u0440\u0435\u043c\u0438\u0442\u044c\u0441\u044f","\u0425\u043e\u0440\u043e\u0448\u043e","\u041e\u0442\u043b\u0438\u0447\u043d\u043e","\u0418\u0434\u0435\u0430\u043b\u044c\u043d\u043e"]};function x(){var e=Object(p.a)(["\n    color: #4f4f4f;\n    display: flex;\n    justify-content: space-between;\n    \n    span:first-of-type {\n        opacity: 0.5;\n    }\n"]);return x=function(){return e},e}function b(){var e=Object(p.a)(["\n    width: 80%;\n    margin: 0 auto;\n"]);return b=function(){return e},e}function E(){var e=Object(p.a)(["\n  margin: 16px;\n  border-radius: 10px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);\n  background-color: #ffffff;\n"]);return E=function(){return e},e}function j(){var e=Object(p.a)(["\n    \n"]);return j=function(){return e},e}function w(){var e=Object(p.a)(["\n    width: 30%;\n"]);return w=function(){return e},e}function C(){var e=Object(p.a)(["\n  font-size: 24px;\n  font-weight: 500;\n  color: #4f4f4f;\n  margin: 24px 16px;\n  display: flex;\n  justify-content: space-between;\n"]);return C=function(){return e},e}function O(){var e=Object(p.a)(["\n  width: 100%;\n  max-width: 600px;\n  margin: 0 auto;\n  font-family: 'Raleway', sans-serif;\n"]);return O=function(){return e},e}var y=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(l.a)(n).call(this,e))).state={commonPoints:t.props.max*n.params.length/2,cost:t.props.max/2,time:t.props.max/2,scope:t.props.max/2,dependentComponent:null},t.rangeChange=t.rangeChange.bind(Object(f.a)(t)),n.textForRangePoint=n.textForRangePoint.bind(Object(f.a)(t)),t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"getComponentsExceptCurrent",value:function(e){return n.params.filter(function(n){return n!==e})}},{key:"rangeChange",value:function(e,t){var a=this,r=this.getComponentsExceptCurrent(t),o=r[n.getRandom()],i=r.filter(function(e){return e!==o})[0];this.setState(function(n){var c={};if(1!==Math.abs(n[t]-e))return c.time=a.props.max/2,c.scope=a.props.max/2,c.cost=a.props.max/2,c.dependentComponent=null,console.error("\u043d\u0430\u0440\u0443\u0448\u0435\u043d \u0448\u0430\u0433 ".concat(n[t]-e," \u0445\u0437 \u043f\u043e\u0447\u0435\u043c\u0443")),c;var s=n[t]>e?"minus":"plus";if(c[t]=e,"minus"===s){var u=a.state[o]<a.props.max?o:i,l=r.filter(function(e){return e!==t&&e!==u})[0];c[l]=a.state[l],c.dependentComponent=u,c[u]=a.state.commonPoints-e-n[l]}if("plus"===s){var m=0===a.state[o]?i:o,p=r.filter(function(e){return e!==t&&e!==m})[0];c[p]=a.state[p],c.dependentComponent=m,c[m]=a.state.commonPoints-e-a.state[p]}return c})}},{key:"render",value:function(){var e=this;return r.a.createElement(k,null,r.a.createElement(R,null,r.a.createElement(P,null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439 \u0431\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0430"),r.a.createElement(F,null,"5/10")),r.a.createElement(N,{className:"project-management-triangle"},r.a.createElement(V,{className:"form"},r.a.createElement("section",{className:"scope"},r.a.createElement(I,null,r.a.createElement("span",null,"\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e"),r.a.createElement("span",null,n.textForRangePoint(this.state.scope,"scope"))),r.a.createElement(d.a,{step:1,formatLabel:function(){return""},name:"scope",maxValue:this.props.max,minValue:this.props.min,value:this.state.scope,onChange:function(n){return e.rangeChange(n,"scope")}})),r.a.createElement("section",{className:"cost"},r.a.createElement(I,null,r.a.createElement("span",null,"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c"),r.a.createElement("span",null,n.textForRangePoint(this.state.cost,"cost"))),r.a.createElement(d.a,{step:1,formatLabel:function(){return""},name:"cost",maxValue:this.props.max,minValue:this.props.min,value:this.state.cost,onChange:function(n){return e.rangeChange(n,"cost")}})),r.a.createElement("section",{className:"time"},r.a.createElement(I,null,r.a.createElement("span",null,"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c"),r.a.createElement("span",null,n.textForRangePoint(this.state.time,"time"))),r.a.createElement(d.a,{step:1,formatLabel:function(){return""},name:"time",maxValue:this.props.max,minValue:this.props.min,value:this.state.time,onChange:function(n){return e.rangeChange(n,"time")}})))))}}],[{key:"textForRangePoint",value:function(e,n){var t=v[n];return t[e]?t[e]:"add text!!!"}},{key:"getRandom",value:function(){return n.getRandomInt(0,2)}},{key:"getRandomInt",value:function(e,n){return Math.floor(Math.random()*(n-e))+e}}]),n}(r.a.Component);y.params=["cost","time","scope"];var k=g.a.div(O()),R=g.a.div(C()),P=g.a.div(w()),F=g.a.div(j()),N=g.a.div(E()),V=g.a.form(b()),I=g.a.span(x()),L=(t(47),function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,{min:0,max:6}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.537b63b7.chunk.js.map
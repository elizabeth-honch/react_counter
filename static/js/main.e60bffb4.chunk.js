(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(2),o=n.n(r),u=n(3),i=n(4),d=n(6),l=n(5),s=(n(12),function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={counter:0},t.addOne=function(){t.setState((function(t){return{counter:t.counter+1}}))},t.add100=function(){t.setState((function(t){return{counter:t.counter+100}}))},t.increase=function(){t.state.counter%5===0&&t.add100(),t.addOne()},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.counter;return c.a.createElement("div",null,c.a.createElement("h1",null,"Count: ".concat(t)),c.a.createElement("button",{type:"button",onClick:this.addOne},"Add 1"),c.a.createElement("button",{type:"button",onClick:this.add100},"Add 100"),c.a.createElement("button",{type:"button",onClick:this.increase},"Counter divisible by 5"))}}]),n}(c.a.Component));o.a.render(c.a.createElement(s,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.e60bffb4.chunk.js.map
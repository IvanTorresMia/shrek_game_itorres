(this["webpackJsonpshrek-click-game"]=this["webpackJsonpshrek-click-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"shrek","image":"./assets/shrek1.jpg","clicked":false},{"id":2,"name":"cat","image":"./assets/cat.jpg","clicked":false},{"id":3,"name":"babyshrek","image":"./assets/babyshrek.jpg","clicked":false},{"id":4,"name":"cookieman","image":"./assets/cookie-man.jpg","clicked":false},{"id":5,"name":"donkey","image":"./assets/donkey.jpg","clicked":false},{"id":6,"name":"Fiona","image":"./assets/fiona.jpg","clicked":false},{"id":7,"name":"OgarFiona","image":"./assets/ogarFione.jpg","clicked":false},{"id":8,"name":"Pigs","image":"./assets/pigs.jpg","clicked":false},{"id":9,"name":"King","image":"./assets/king.jpg","clicked":false},{"id":10,"name":"LordF","image":"./assets/Lord-f.jpg","clicked":false},{"id":11,"name":"ShrekHuman","image":"./assets/ShrekHuman.jpg","clicked":false},{"id":12,"name":"fairy","image":"./assets/fairy.jpg","clicked":false}]')},,,,,,,,function(e,a,s){},function(e,a,s){},function(e,a,s){},function(e,a,s){},function(e,a,s){},function(e,a,s){"use strict";s.r(a);var t=s(0),c=s(1),i=s.n(c),n=s(3),r=s.n(n),l=(s(14),s(4)),o=s(5),d=s(8),g=s(7);s(15);var h=function(e){return Object(t.jsxs)("nav",{className:"navbar",children:[Object(t.jsx)("h1",{children:"Shrek Clicky"}),Object(t.jsx)("h3",{className:"message",children:e.message}),Object(t.jsxs)("h3",{children:["Score: ",e.score," | Top Score: ",e.topScore]})]})};s(16);var m=function(e){return Object(t.jsx)("div",{className:"jumbotron",children:Object(t.jsx)("h1",{children:"Shrek is the best"})})};s(17);var j=function(e){return Object(t.jsx)("div",{className:"wrapper",children:e.children})},u=s(6);s(18);var f=function(e){return Object(t.jsx)("div",{className:"Card",children:Object(t.jsx)("div",{className:"img-container col",children:Object(t.jsx)("img",{onClick:e.handleClick,id:e.id,src:e.imageURL,className:"card-img-top images",alt:e.alt,"data-id":e.id})})})},k=[],b=function(e){Object(d.a)(s,e);var a=Object(g.a)(s);function s(){var e;Object(l.a)(this,s);for(var t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];return(e=a.call.apply(a,[this].concat(c))).state={Characters:u,score:0,highScore:0,message:"Click a picture to start"},e.handleClick=function(a){console.log(a.target);var s=a.target.getAttribute("data-id");if(console.log(k),e.setState({message:"Let's play"}),k.includes(s))e.setState({score:0}),e.setState({message:"Wrong Buddy!"}),k=[];else{k.push(s);var t=e.state.score+1;e.setState({score:t}),e.setState({message:"Nice!"}),t>e.state.highScore&&e.setState({highScore:t})}for(var c=e.state.Characters,i=c.length-1;i>0;i--){var n=Math.floor(Math.random()*c.length),r=c[i];c[i]=c[n],c[n]=r}e.setState({Characters:c})},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return Object(t.jsxs)(j,{children:[Object(t.jsx)(h,{score:this.state.score,topScore:this.state.highScore,message:this.state.message}),Object(t.jsx)(m,{}),Object(t.jsx)("div",{className:"container",children:Object(t.jsx)("div",{className:"row",children:this.state.Characters.map((function(a){return Object(t.jsx)(f,{imageURL:a.image,id:a.id,alt:a.name,handleClick:e.handleClick},a.id)}))})})]})}}]),s}(c.Component),p=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,20)).then((function(a){var s=a.getCLS,t=a.getFID,c=a.getFCP,i=a.getLCP,n=a.getTTFB;s(e),t(e),c(e),i(e),n(e)}))};r.a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(b,{})}),document.getElementById("root")),p()}],[[19,1,2]]]);
//# sourceMappingURL=main.30a5d960.chunk.js.map
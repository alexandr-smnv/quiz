(this["webpackJsonpquiz-one"]=this["webpackJsonpquiz-one"]||[]).push([[0],{135:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(30),i=n.n(r),o=n(40),s=n(14),l=n(192),u=n(183),j=n(188),d=n(3),b=n(20),O=n(10),h=n(22),f=n(55),x=n.n(f),m=n(187),p=n(189),y=n(177),v=n(178),g=n(174),S=n(176),q=n(1),w=function(e){var t=e.name,n=e.label,c=e.value,a=e.options,r=e.handleChange;return Object(q.jsx)(u.a,{mt:3,width:"100%",children:Object(q.jsxs)(y.a,{size:"small",fullWidth:!0,children:[Object(q.jsx)(v.a,{children:n}),Object(q.jsx)(g.a,{name:t,value:c,label:n,onChange:r,children:a.map((function(e){return Object(q.jsx)(S.a,{value:e.id,children:e.name},e.id)}))})]})})},C=n(179),_=function(e){var t=e.name,n=e.type,c=e.label,a=e.handleChange;return Object(q.jsx)(u.a,{mt:3,width:"100%",children:Object(q.jsx)(y.a,{fullWidth:!0,size:"small",children:Object(q.jsx)(C.a,{name:t,type:n,label:c,onChange:a,size:"small",variant:"outlined"})})})},A="CHANGE_AMOUNT",E="CHANGE_SCORE",z="CHANGE_SETTINGS",N="FETCH_QUESTIONS",W="ADD_ANSWER",I="CLEAN_STATISTIC",R=function(e){return{type:N,payload:e}},k=function(e){return{type:E,payload:e}};x.a.defaults.baseURL="https://opentdb.com/";var T=function(e){var t=e.url,n=Object(c.useState)(null),a=Object(O.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(""),s=Object(O.a)(o,2),l=s[0],u=s[1],j=Object(c.useState)(!0),d=Object(O.a)(j,2),b=d[0],h=d[1];return Object(c.useEffect)((function(){x.a.get(t).then((function(e){return i(e.data)})).catch((function(e){return u(e)})).finally((function(){return h(!1)}))}),[t]),{response:r,error:l,loading:b}},Q=[{id:"easy",name:"Easy"},{id:"medium",name:"Medium"},{id:"hard",name:"Hard"}],J=[{id:"multiple",name:"Multiple"},{id:"boolean",name:"True/False"}],M=function(){return{type:I}},D=function(){var e=Object(h.b)(),t=Object(s.f)(),n=T({url:"api_category.php"}),a=Object(c.useState)({name:"",category:"",difficulty:"",type:"",amount:10}),r=Object(O.a)(a,2),i=r[0],o=r[1],l="/api.php?amount=".concat(i.amount);i.category&&(l=l.concat("&category=".concat(i.category))),i.difficulty&&(l=l.concat("&difficulty=".concat(i.difficulty))),i.type&&(l=l.concat("&type=".concat(i.type)));var f=function(e){o(Object(b.a)(Object(b.a)({},i),{},Object(d.a)({},e.target.name,e.target.value)))};return n.loading?Object(q.jsx)(u.a,{mt:30,children:Object(q.jsx)(m.a,{})}):n.error?Object(q.jsx)(j.a,{variant:"h6",mt:20,color:"red",children:"Some Want Wrong!"}):Object(q.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e(function(e){return{type:z,payload:e}}(i)),x()({url:l}).then((function(t){return e(R(t.data.results))})).then(t("/questions")),e(k(0)),e(M()),localStorage.removeItem("indexQuestion")},children:[Object(q.jsx)(_,{name:"name",type:"text",label:"Enter your name",handleChange:f}),Object(q.jsx)(w,{name:"category",options:n.response.trivia_categories,label:"Category",value:i.category,handleChange:f}),Object(q.jsx)(w,{name:"difficulty",options:Q,label:"Difficulty",value:i.difficulty,handleChange:f}),Object(q.jsx)(w,{name:"type",options:J,label:"Type",value:i.type,handleChange:f}),Object(q.jsx)(_,{name:"amount",type:"number",label:"Amount of questions",handleChange:f}),Object(q.jsx)(u.a,{mt:3,width:"100%",children:Object(q.jsx)(p.a,{fullWidth:!0,variant:"contained",type:"submit",children:"Get new quiz"})}),Object(q.jsx)(u.a,{mt:3,width:"100%",children:Object(q.jsx)(p.a,{fullWidth:!0,variant:"contained",color:"success",onClick:function(){t("/questions")},children:"Continue quiz"})})]})},H=n(15),G=n(182),F=n(43),U=function(){var e,t=Object(h.b)(),n=Object(s.f)(),a=Object(h.c)((function(e){return e.settings})).name,r=Object(h.c)((function(e){return e.questionsReducer})),i=r.questions,o=r.score,l=Object(c.useState)(0),d=Object(O.a)(l,2),b=d[0],f=d[1],x=Object(c.useState)([]),m=Object(O.a)(x,2),y=m[0],v=m[1],g=Object(c.useState)(null),S=Object(O.a)(g,2),w=S[0],C=S[1],_=Object(c.useState)({question:"",currentAnswer:"",correctAnswer:""}),A=Object(O.a)(_,2),E=A[0],z=A[1];Object(c.useEffect)((function(){if(null===i||void 0===i?void 0:i.length){var e=localStorage.getItem("indexQuestion");!b&&e?f(JSON.parse(e)):localStorage.setItem("indexQuestion",JSON.stringify(b));var t=i[b],n=Object(H.a)(t.incorrect_answers);n.splice((c=3,Math.floor(Math.random()*Math.floor(c))),0,t.correct_answer),v(n)}var c}),[i,b]);var N=function(e){var t=i[b];return w===e&&w===t.correct_answer?"success":w===e&&w!==t.correct_answer?"error":e===t.correct_answer?"success":void 0};return Object(q.jsxs)(u.a,{children:[Object(q.jsxs)(j.a,{variant:"h4",children:["Hello, ",a||"Dear friend","!!!"]}),Object(q.jsxs)(j.a,{mt:2,variant:"h4",children:["Question \u2116 ",b+1]}),Object(q.jsx)(j.a,{mt:5,children:Object(F.decode)(null===(e=i[b])||void 0===e?void 0:e.question)}),y.map((function(e,n){return Object(q.jsx)(u.a,{mt:2,children:Object(q.jsx)(p.a,{style:w&&{pointerEvents:"none"},color:w?N(e):"primary",variant:"contained",onClick:function(){return function(e){var n=i[b];e===n.correct_answer&&t(k(o+1)),z({question:n.question,correctAnswer:n.correct_answer,currentAnswer:e}),C(e)}(e)},children:Object(F.decode)(e)})},n)})),Object(q.jsxs)(G.a,{mt:4,justifyContent:"center",container:!0,spacing:2,children:[Object(q.jsx)(G.a,{item:!0,xs:4,children:Object(q.jsx)(p.a,{color:"error",onClick:function(){n("/quiz")},fullWidth:!0,variant:"contained",children:"Exit"})}),Object(q.jsx)(G.a,{item:!0,xs:4,children:Object(q.jsx)(p.a,{onClick:function(){w?(t({type:W,payload:E}),C(null),b+1<i.length?f(b+1):n("/score")):console.log("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u043e\u0442\u0432\u0435\u0442\u0430")},color:"success",fullWidth:!0,variant:"contained",children:"Next"})})]}),Object(q.jsxs)(u.a,{mt:5,children:["Score: ",o," / ",i.length]})]})},B=function(){var e=Object(h.b)(),t=Object(s.f)(),n=Object(h.c)((function(e){return e.questionsReducer})).score;return Object(q.jsxs)(u.a,{mt:10,children:[Object(q.jsxs)(j.a,{variant:"h3",fontWeight:"bold",mb:3,children:["Final score - ",n]}),Object(q.jsxs)(G.a,{mt:4,justifyContent:"center",container:!0,spacing:2,children:[Object(q.jsx)(G.a,{item:!0,xs:4,children:Object(q.jsx)(p.a,{variant:"contained",color:"success",onClick:function(){e(k(0)),e(M()),localStorage.removeItem("indexQuestion"),t("/quiz")},children:"New Quiz"})}),Object(q.jsx)(G.a,{item:!0,xs:4,children:Object(q.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){t("/statistic")},children:"Statistic"})})]})]})},L=n(190),Y=n(191),K=function(){var e=Object(h.c)((function(e){return e.statistics})),t=Object(s.f)();return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(u.a,{mb:2,children:Object(q.jsx)(p.a,{onClick:function(){t("/score")},variant:"contained",color:"primary",children:"Back"})}),e.map((function(e,t){return Object(q.jsx)(u.a,{mb:2,children:Object(q.jsx)(L.a,{sx:{minWidth:275},children:Object(q.jsxs)(Y.a,{children:[Object(q.jsxs)(j.a,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:["Question \u2116 ",t+1]}),Object(q.jsx)(j.a,{variant:"h6",children:Object(F.decode)(e.question)}),Object(q.jsx)(j.a,{sx:{fontSize:14},color:"text.secondary",children:"Your answer:"}),Object(q.jsx)(j.a,{variant:"h6",children:Object(F.decode)(e.currentAnswer)}),Object(q.jsx)(j.a,{sx:{fontSize:14},color:"text.secondary",children:"Correct answer:"}),Object(q.jsx)(j.a,{variant:"h6",children:Object(F.decode)(e.correctAnswer)}),Object(q.jsx)(j.a,{sx:{fontSize:14},color:"text.secondary",children:"Result:"}),Object(q.jsx)(j.a,{variant:"h6",children:e.currentAnswer===e.correctAnswer?Object(q.jsx)(j.a,{color:"green",children:"SUCCESS"}):Object(q.jsx)(j.a,{color:"red",children:"ERROR"})})]})})},e.question)}))]})},P=function(){var e=Object(h.b)(),t=Object(s.f)(),n=Object(c.useState)(""),a=Object(O.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(""),l=Object(O.a)(o,2),j=l[0],d=l[1],b=Object(c.useState)(""),f=Object(O.a)(b,2),x=f[0],m=f[1],y=Object(c.useState)(""),v=Object(O.a)(y,2),g=v[0],S=v[1],w=Object(c.useState)(""),C=Object(O.a)(w,2),A=C[0],E=C[1],z=Object(c.useState)([]),N=Object(O.a)(z,2),W=N[0],I=N[1];return Object(q.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e(R(W)),t("/questions")},children:[Object(q.jsx)(_,{name:"question",type:"text",label:"Enter your question",handleChange:function(e){return i(e.target.value)}}),Object(q.jsx)(_,{name:"correctAnswer",type:"text",label:"Enter correct answer",handleChange:function(e){return d(e.target.value)}}),Object(q.jsx)(_,{name:"incorrectAnswer",type:"text",label:"Enter incorrect answer",handleChange:function(e){return m(e.target.value)}}),Object(q.jsx)(_,{name:"incorrectAnswer",type:"text",label:"Enter incorrect answer",handleChange:function(e){return S(e.target.value)}}),Object(q.jsx)(_,{name:"incorrectAnswer",type:"text",label:"Enter incorrect answer",handleChange:function(e){return E(e.target.value)}}),Object(q.jsx)(u.a,{mt:3,width:"100%",children:Object(q.jsx)(p.a,{onClick:function(e){I([].concat(Object(H.a)(W),[{question:r,correct_answer:j,incorrect_answers:[x,g,A]}])),i(""),d(""),m(""),S(""),E("")},fullWidth:!0,variant:"contained",children:"Add question"})}),Object(q.jsx)(u.a,{mt:3,width:"100%",children:Object(q.jsx)(p.a,{fullWidth:!0,variant:"contained",type:"submit",children:"Create quiz"})})]})};var V=function(){return Object(q.jsx)(l.a,{maxWidth:"sm",children:Object(q.jsxs)(u.a,{textAlign:"center",mt:5,children:[Object(q.jsx)(j.a,{variant:"h2",fontWeight:"bold",mb:5,children:"Quiz App"}),Object(q.jsx)(o.a,{children:Object(q.jsxs)(s.c,{children:[Object(q.jsx)(s.a,{path:"/quiz",element:Object(q.jsx)(D,{})}),Object(q.jsx)(s.a,{path:"/questions",element:Object(q.jsx)(U,{})}),Object(q.jsx)(s.a,{path:"/score",element:Object(q.jsx)(B,{})}),Object(q.jsx)(s.a,{path:"/statistic",element:Object(q.jsx)(K,{})}),Object(q.jsx)(s.a,{path:"/create",element:Object(q.jsx)(P,{})})]})})]})})},X=n(65),Z=n(90),$={name:"",question_category:"",question_difficulty:"",question_type:"",amount_of_question:""},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(b.a)(Object(b.a)({},e),{},{name:t.payload.name,question_category:t.payload.category,question_difficulty:t.payload.difficulty,question_type:t.payload.type,amount_of_question:t.payload.amount});case A:return Object(b.a)(Object(b.a)({},e),{},{amount_of_question:t.payload});default:return e}},te={questions:[],score:0},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(b.a)(Object(b.a)({},e),{},{questions:t.payload});case E:return Object(b.a)(Object(b.a)({},e),{},{score:t.payload});default:return e}},ce=[],ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return[].concat(Object(H.a)(e),[t.payload]);case I:return[];default:return e}},re=Object(X.combineReducers)({settings:ee,questionsReducer:ne,statistics:ae}),ie={questionsReducer:function(){try{var e=localStorage.getItem("questions");return e?JSON.parse(e):void 0}catch(t){return void console.error(t)}}(),statistics:function(){try{var e=localStorage.getItem("statistic");return e?JSON.parse(e):void 0}catch(t){return void console.error(t)}}()},oe=Object(X.createStore)(re,ie,Object(Z.devToolsEnhancer)());console.log(oe.getState()),oe.subscribe((function(){!function(e){try{localStorage.setItem("questions",JSON.stringify(e.questionsReducer)),localStorage.setItem("statistic",JSON.stringify(e.statistics))}catch(t){console.error(t)}}(oe.getState())}));var se=oe;i.a.render(Object(q.jsx)(a.a.StrictMode,{children:Object(q.jsx)(h.a,{store:se,children:Object(q.jsx)(V,{})})}),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.04079116.chunk.js.map
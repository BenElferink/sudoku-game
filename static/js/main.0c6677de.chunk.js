(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,function(e,t,n){e.exports={component:"NumberWidget_component__36j4N",num:"NumberWidget_num__2BiPk"}},function(e,t,n){e.exports={introduction:"Introduction_introduction__3ssJF",diff:"Introduction_diff__r50eO"}},,function(e,t,n){e.exports={component:"ChooseDifficulty_component__3jW4m",inpGroup:"ChooseDifficulty_inpGroup__2Ktv8"}},,,,function(e,t,n){e.exports={table:"SudokuTable_table__eXIGL",computed:"SudokuTable_computed__2mOSF"}},,,function(e,t,n){e.exports={component:"Timer_component__1gU6B"}},function(e,t,n){e.exports={component:"Hints_component__3eUc7"}},,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(12),s=n.n(r),i=n(2);function o(e){for(var t=new Array(0),n=0;n<9;n++){t.push(new Array(0));for(var c=0;c<9;c++)t[n][c]=e[n][c]}return t}function l(e){for(var t=[],n=[],c=1;c<=e;++c)t.push(c),n.push(new Array(e));var a=9===e?3:2;function r(e,t){var n,c=t.length-1,r=t[c],s=c%a,i=[];var o=[];if(s>0)for(var l=s;l>0;l--){var u=Math.floor(t[c-l].indexOf(e)/3);o.push(u)}return void 0===(n=function(n){function c(e){var t=Math.floor(e/3);return!(n.indexOf(t)>=0)}for(var a=0,s=r.length;a<s;a++){for(var o=!0,l=t.length-1;l>=0;l--)t[l][a]===e&&(o=!1);void 0===r[a]&&o&&c(a)&&i.push(a)}return i[(u=i.length,Math.floor(Math.random()*u))];var u}(o))?e:(r[n]=e,!0)}for(var s=t.length-1;s>=0;s--){for(var i=[];n.length>0;)if(i.push(n.shift()),!0!==r(t[s],i))return l(e);n=i}return n}var u=n(0),d=Object(c.createContext)(),j=function(e){var t=Object(c.useState)({complete:new Array(9).fill(new Array(9).fill("")),filtered:new Array(9).fill(new Array(9).fill("")),played:new Array(9).fill(new Array(9).fill(""))}),n=Object(i.a)(t,2),a=n[0],r=n[1];return Object(u.jsx)(d.Provider,{value:{matrixes:a,setMatrixes:r,prepMatrixesForStartGame:function(e){var t=l(9),n=function(e,t){var n=Math.pow(9,2);switch(t){case"easy":n=Math.floor(.25*n);break;case"normal":n=Math.floor(.5*n);break;case"hard":n=Math.floor(.75*n)}for(;0!==n;){var c=Math.floor(9*Math.random()),a=Math.floor(9*Math.random());""!==e[c][a]&&(e[c][a]="",n--)}return e}(o(t),e);r({complete:t,filtered:n,played:n})},prepMatrixesForEndGame:function(){r({complete:new Array(9).fill(new Array(9).fill("")),filtered:new Array(9).fill(new Array(9).fill("")),played:new Array(9).fill(new Array(9).fill(""))})}},children:e.children})},f=n(3),b=n(10),h=n.n(b),m=n(13);n(23);var O=n(5),x=n.n(O);function p(){return Object(u.jsxs)("div",{className:x.a.introduction,children:[Object(u.jsx)("p",{children:"It seems you have never played before... Here's a simple guide to help you choose a difficulty for the first time:"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("table",{children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{}),Object(u.jsx)("th",{children:"hints"}),Object(u.jsx)("th",{children:"complete"})]})}),Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:x.a.diff,children:"Easy:"}),Object(u.jsx)("td",{children:"3"}),Object(u.jsx)("td",{children:"75%"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:x.a.diff,children:"Normal:"}),Object(u.jsx)("td",{children:"2"}),Object(u.jsx)("td",{children:"50%"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:x.a.diff,children:"Hard:"}),Object(u.jsx)("td",{children:"1"}),Object(u.jsx)("td",{children:"25%"})]})]})]})]})}function v(e){var t=e.difficulty;return Object(u.jsx)("div",{className:x.a.introduction,children:Object(u.jsxs)("p",{children:["You haven't played '",t,"' mode yet,",Object(u.jsx)("br",{}),"what are you waiting for? Let's play!",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"Playing in ",t," gives you"," ","easy"===t?3:"normal"===t?2:1," hints,",Object(u.jsx)("br",{}),"and the board is ","easy"===t?75:"normal"===t?50:25,"% complete"]})})}var y=n(16);function g(e){var t=e.gameRecords,n=e.difficulty,c=function(e){for(var t=Object(y.a)(e),n=t[0],c=0;c<t.length;c++){var a=n.timer.minutes,r=n.timer.seconds,s=t[c].timer.minutes,i=t[c].timer.seconds;(s<a||i<r&&s===a)&&(n=t[c])}return n}(t["".concat(n)]);return Object(u.jsxs)("div",{className:x.a.introduction,children:[Object(u.jsxs)("h4",{children:["Your record playing '",n,"' is:"]}),Object(u.jsxs)("p",{children:[c.timer.minutes," minutes, and ",c.timer.seconds," seconds!",Object(u.jsx)("br",{}),0===c.resetCount&&0===c.hintsUsed?"You perfected your time without reseting and without using hints!":0===c.resetCount&&0!==c.hintsUsed?"You used ".concat(c.hintsUsed," hints, without reseting."):0!==c.resetCount&&0===c.hintsUsed?"You used ".concat(c.resetCount," resets, without any hints."):"You used ".concat(c.hintsUsed," hints, and reset ").concat(c.resetCount," times.")]})]})}function w(e){var t=e.gameRecords,n=e.difficulty;return 0===t.easy.length&&0===t.normal.length&&0===t.hard.length?Object(u.jsx)(p,{}):0===t["".concat(n)].length?Object(u.jsx)(v,{difficulty:n}):Object(u.jsx)(g,{gameRecords:t,difficulty:n})}var _=n(7),N=n.n(_);function k(e){var t=e.value,n=e.setValue;return Object(u.jsxs)("div",{className:N.a.component,children:[Object(u.jsxs)("div",{className:N.a.inpGroup,children:[Object(u.jsx)("input",{name:"diff",id:"diff_easy",type:"radio",value:"easy",onChange:function(e){n(e.target.value)},checked:"easy"===t}),Object(u.jsx)("label",{htmlFor:"diff_easy",children:"Easy"})]}),Object(u.jsxs)("div",{className:N.a.inpGroup,children:[Object(u.jsx)("input",{name:"diff",id:"diff_normal",type:"radio",value:"normal",onChange:function(e){n(e.target.value)},checked:"normal"===t}),Object(u.jsx)("label",{htmlFor:"diff_normal",children:"Normal"})]}),Object(u.jsxs)("div",{className:N.a.inpGroup,children:[Object(u.jsx)("input",{name:"diff",id:"diff_hard",type:"radio",value:"hard",onChange:function(e){n(e.target.value)},checked:"hard"===t}),Object(u.jsx)("label",{htmlFor:"diff_hard",children:"Hard"})]})]})}var C=n(14),S=n.n(C);function M(e){var t=e.value,n=e.setValue;Object(c.useEffect)((function(){var e=setInterval((function(){t.seconds<59?n({minutes:t.minutes,seconds:t.seconds+1}):n({minutes:t.minutes+1,seconds:0})}),1e3);return function(){clearInterval(e)}}));return Object(u.jsxs)("div",{className:S.a.component,children:["Time elapsed: ",function(e){var t=e.minutes,n=e.seconds;return t=t<10?"0".concat(t):"".concat(t),n=n<10?"0".concat(n):"".concat(n),"".concat(t,":").concat(n)}(t)]})}var E=n(15),A=n.n(E);function G(e){var t=e.opacity;return Object(u.jsx)("svg",{style:{opacity:t},viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("g",{children:Object(u.jsx)("path",{d:"M18 42c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-2H18v2zm6-38c-7.73 0-14 6.27-14 14 0 4.76 2.38 8.95 6 11.48V34c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.52c3.62-2.53 6-6.72 6-11.48 0-7.73-6.27-14-14-14zm5.71 22.2L28 27.39V32h-8v-4.6l-1.71-1.19C15.6 24.33 14 21.27 14 18.01c0-5.51 4.49-10 10-10s10 4.49 10 10c0 3.25-1.6 6.31-4.29 8.19z"})})})}function F(e){var t=e.value,n=e.setValue,a=e.setHintsUsed,r=Object(c.useContext)(d),s=r.matrixes,i=r.setMatrixes;return Object(u.jsxs)("div",{className:A.a.component,children:[Object(u.jsx)("button",{onClick:function(){if(t>0){var e=!1;for(s.played.forEach((function(t){t.forEach((function(t){""===t&&(e=!0)}))}));e;){var c=Math.floor(9*Math.random()),r=Math.floor(9*Math.random());if(""===s.played[c][r]){var l=s.complete[c][r],u=o(s.played);u[c][r]=l,i(Object(f.a)(Object(f.a)({},s),{},{played:u})),n((function(e){return e-1})),a((function(e){return e+1}));break}}}},children:"Hint"}),t>=1?Object(u.jsx)(G,{opacity:"100%"}):Object(u.jsx)(G,{opacity:"25%"}),t>=2?Object(u.jsx)(G,{opacity:"100%"}):Object(u.jsx)(G,{opacity:"25%"}),t>=3?Object(u.jsx)(G,{opacity:"100%"}):Object(u.jsx)(G,{opacity:"25%"})]})}var I=n(11),U=n.n(I),H=n(4),V=n.n(H);function D(e){var t=e.setNum,n=e.style;return Object(u.jsxs)("div",{className:V.a.component,style:n,children:[Object(u.jsx)("div",{className:V.a.num,onClick:function(){t(1)},children:"1"}),Object(u.jsx)("div",{className:V.a.num,onClick:function(){t(2)},children:"2"}),Object(u.jsx)("div",{className:V.a.num,onClick:function(){t(3)},children:"3"}),Object(u.jsx)("div",{className:V.a.num,onClick:function(){t(4)},children:"4"}),Object(u.jsx)("div",{className:V.a.num,onClick:function(){t(5)},children:"5"}),Object(u.jsx)("div",{className:V.a.num,onClick:function(){t(6)},children:"6"}),Object(u.jsx)("div",{className:V.a.num,onClick:function(){t(7)},children:"7"}),Object(u.jsx)("div",{className:V.a.num,onClick:function(){t(8)},children:"8"}),Object(u.jsx)("div",{className:V.a.num,onClick:function(){t(9)},children:"9"})]})}function Y(e){var t=e.startGame,n=Object(c.useContext)(d),a=n.matrixes,r=n.setMatrixes,s=Object(c.useState)(!1),l=Object(i.a)(s,2),j=l[0],b=l[1],h=Object(c.useState)({i:null,j:null}),m=Object(i.a)(h,2),O=m[0],x=m[1],p=Object(c.useState)({x:null,y:null}),v=Object(i.a)(p,2),y=v[0],g=v[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("table",{className:U.a.table,style:{margin:t?"1em 0":"0"},children:Object(u.jsx)("tbody",{children:a.played.map((function(e,t){return Object(u.jsx)("tr",{children:e.map((function(e,n){return""===a.filtered[t][n]?Object(u.jsx)("td",{onClick:function(e){!function(e,t,n){x({i:t,j:n}),g({x:e.clientX,y:e.clientY}),b(!0)}(e,t,n)},children:e},"".concat(t,"-").concat(n)):Object(u.jsx)("td",{className:U.a.computed,children:e},"".concat(t,"-").concat(n))}))},t)}))})}),j&&Object(u.jsx)(D,{style:{position:"fixed",top:y.y,left:y.x},setNum:function(e){!function(e){var t=o(a.played);t[O.i][O.j]=e,r(Object(f.a)(Object(f.a)({},a),{},{played:t})),b(!1)}(e)}})]})}function z(){var e=Object(c.useState)(Object(c.useCallback)((function(){return function(e,t,n){var c,a=JSON.parse(window.localStorage.getItem(e));return null==a?"API"===t?c=function(){var e=Object(m.a)(h.a.mark((function e(t){var n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,console.log("\u2705 -FETCHED- : ".concat(t),c),e.abrupt("return",c);case 11:return e.prev=11,e.t0=e.catch(0),console.warn("\u274c -FAILED- : ".concat(t),e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()(n):(c=t,console.log("\ud83d\udca1 -GENERATED-",c)):(c=a,console.log("\u2934\ufe0f -LOADED- localStorage: ".concat(e),c)),"function"===typeof c?c():c}("Sudoku_by_Ben_Elferink",{easy:[],normal:[],hard:[]})}),[])),t=Object(i.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){return e="Sudoku_by_Ben_Elferink",t=n,window.localStorage.setItem(e,JSON.stringify(t)),void console.log("\u2935\ufe0f -SAVED- localStorage: ".concat(e),t);var e,t}),[n]);var r=Object(c.useContext)(d),s=r.matrixes,l=r.setMatrixes,j=r.prepMatrixesForStartGame,b=r.prepMatrixesForEndGame,O=Object(c.useState)(!1),x=Object(i.a)(O,2),p=x[0],v=x[1],y=Object(c.useState)("normal"),g=Object(i.a)(y,2),_=g[0],N=g[1],C=Object(c.useState)({minutes:0,seconds:0}),S=Object(i.a)(C,2),E=S[0],A=S[1],G=Object(c.useState)(0),I=Object(i.a)(G,2),U=I[0],H=I[1],V=Object(c.useState)(0),D=Object(i.a)(V,2),z=D[0],B=D[1],R=Object(c.useState)(0),T=Object(i.a)(R,2),J=T[0],L=T[1];return p?Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(M,{value:E,setValue:A}),Object(u.jsx)(F,{value:U,setValue:H,setHintsUsed:B}),Object(u.jsx)(Y,{startGame:p}),Object(u.jsxs)("div",{className:"controls",children:[Object(u.jsx)("button",{onClick:function(){b(),A({minutes:0,seconds:0}),H(0),B(0),L(0),v(!1)},children:"Give Up"}),Object(u.jsx)("button",{onClick:function(){switch(l(Object(f.a)(Object(f.a)({},s),{},{played:s.filtered})),A({minutes:0,seconds:0}),_){case"easy":H(3);break;case"normal":H(2);break;case"hard":H(1)}B(0),L((function(e){return e+1}))},children:"Reset"}),Object(u.jsx)("button",{onClick:function(){var e=!0,t=o(s.played);if(s.played.forEach((function(n,c){n.forEach((function(n,a){n!==s.complete[c][a]&&(t[c][a]="",e=!1)}))})),e){window.alert("Congratulations! You finished the puzzle!");var c=Object(f.a)({},n),r={difficulty:_,timer:E,hintsUsed:z,resetCount:J};c["".concat(_)].push(r),a(c),b(),A({minutes:0,seconds:0}),H(0),B(0),L(0),v(!1)}else window.alert("Puzzle is incorrect, clearing error(s), try again..."),l(Object(f.a)(Object(f.a)({},s),{},{played:t}))},children:"Solve"})]})]}):Object(u.jsxs)("div",{className:"app",children:[Object(u.jsxs)("div",{className:"startGroup",children:[Object(u.jsx)(w,{gameRecords:n,difficulty:_}),Object(u.jsx)(k,{value:_,setValue:N}),Object(u.jsx)("button",{onClick:function(){switch(j(_),A({minutes:0,seconds:0}),_){case"easy":H(3);break;case"normal":H(2);break;case"hard":H(1)}v(!0)},children:"Start Game"})]}),Object(u.jsx)(Y,{startGame:p})]})}s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(j,{children:Object(u.jsx)(z,{})})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.0c6677de.chunk.js.map
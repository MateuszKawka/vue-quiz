(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["game"],{"14c3":function(t,e,n){var i=n("c6b6"),s=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var r=n.call(t,e);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return s.call(t,e)}},2375:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader-container"},[n("div",{staticClass:"loader"},[t._v("Loading...")])])}],r=(n("dd71"),n("2877")),o={},a=Object(r["a"])(o,i,s,!1,null,"626bd4de",null);e["a"]=a.exports},"26f7":function(t,e,n){},5086:function(t,e,n){},5319:function(t,e,n){"use strict";var i=n("d784"),s=n("825a"),r=n("7b0b"),o=n("50c4"),a=n("a691"),c=n("1d80"),u=n("8aa5"),l=n("14c3"),d=Math.max,f=Math.min,p=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,x=/\$([$&'`]|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};i("replace",2,(function(t,e,n,i){var v=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=i.REPLACE_KEEPS_$0,b=v?"$":"$0";return[function(n,i){var s=c(this),r=void 0==n?void 0:n[t];return void 0!==r?r.call(n,s,i):e.call(String(s),n,i)},function(t,i){if(!v&&g||"string"===typeof i&&-1===i.indexOf(b)){var r=n(e,t,this,i);if(r.done)return r.value}var c=s(t),p=String(this),h="function"===typeof i;h||(i=String(i));var x=c.global;if(x){var y=c.unicode;c.lastIndex=0}var w=[];while(1){var E=l(c,p);if(null===E)break;if(w.push(E),!x)break;var C=String(E[0]);""===C&&(c.lastIndex=u(p,o(c.lastIndex),y))}for(var P="",$=0,T=0;T<w.length;T++){E=w[T];for(var S=String(E[0]),R=d(f(a(E.index),p.length),0),q=[],A=1;A<E.length;A++)q.push(m(E[A]));var O=E.groups;if(h){var I=[S].concat(q,R,p);void 0!==O&&I.push(O);var z=String(i.apply(void 0,I))}else z=_(S,p,R,q,O,i);R>=$&&(P+=p.slice($,R)+z,$=R+S.length)}return P+p.slice($)}];function _(t,n,i,s,o,a){var c=i+t.length,u=s.length,l=x;return void 0!==o&&(o=r(o),l=h),e.call(a,l,(function(e,r){var a;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,i);case"'":return n.slice(c);case"<":a=o[r.slice(1,-1)];break;default:var l=+r;if(0===l)return e;if(l>u){var d=p(l/10);return 0===d?e:d<=u?void 0===s[d-1]?r.charAt(1):s[d-1]+r.charAt(1):e}a=s[l-1]}return void 0===a?"":a}))}}))},"692b":function(t,e,n){"use strict";n("9636")},"69ba":function(t,e,n){},"7d36":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game"},[n("div",{staticClass:"game__top-bar"},[n("Lifes"),n("p",{staticClass:"score"},[t._v("Score: "+t._s(t.score))])],1),t.questionReady?n("Question",{key:"question",ref:"question",on:{"next-question":t.nextQuestion}}):n("Spinner")],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Timer",{ref:"timer",attrs:{"question-answered":t.questionAnswered},on:{"end-time":t.endTime}}),n("p",{staticClass:"category",domProps:{innerHTML:t._s(t.question.category)}}),n("p",{staticClass:"question",domProps:{innerHTML:t._s(t.question.question)}}),n("div",{staticClass:"row at-row flex-center"},[n("div",{staticClass:"col-24"},[n("div",{ref:"answers",staticClass:"answers"},t._l(t.answers,(function(e){return n("button",{key:t.question.question+"__"+e,staticClass:"answer-button",attrs:{size:"large","data-answer":e},domProps:{innerHTML:t._s(e)},on:{click:function(e){return e.stopPropagation(),t.answerQuestion(e)}}})})),0)])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-24 flex-center"},[t.questionAnswered&&t.lifes>0?n("at-button",{staticClass:"next-question-button",attrs:{type:"primary",size:"large"},on:{click:t.nextQuestion}},[t._v("Next ")]):t._e(),t.lifes<=0?n("at-button",{staticClass:"next-question-button",attrs:{type:"primary",size:"large"},nativeOn:{click:function(e){return t.goToEndgame(e)}}},[t._v("Go to endgame ")]):t._e()],1)])],1)},o=[],a=(n("99af"),n("4160"),n("159b"),n("2909")),c=n("5530"),u=n("a2cc"),l=n("2f62"),d=n("9797"),f=n("d046"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timer at-row"},[n("div",{staticClass:"col-12"},[n("progress-bar",{attrs:{"bar-color":t.barColor,size:"medium",val:t.timerValue}})],1)])},h=[],x=n("a7e3"),m=n.n(x),v={name:"Timer",components:{ProgressBar:m.a},props:{questionAnswered:{type:Boolean,required:!0}},computed:{timerWork:function(){return this.$store.state.timerWork}},methods:{startTimer:function(){var t=this;this.timerID=setInterval((function(){t.timerValue>0&&(t.timerValue-=10)}),1e3)},stopTimer:function(){clearInterval(this.timerID)},resetTimer:function(){this.timerValue=100,this.startTimer()},endTime:function(){this.$emit("end-time")}},data:function(){return{timerValue:100,color:"#79a1eb",fontColor:"#79a1eb",timerID:0,barColor:"#78a4f4"}},watch:{timerValue:function(t){this.barColor="#78a4f4",t<40&&(this.barColor="#ff4949"),t<=0&&(this.stopTimer(),this.endTime())},questionAnswered:function(t){t&&this.stopTimer()}},mounted:function(){this.startTimer()}},g=v,b=(n("96c6"),n("2877")),_=Object(b["a"])(g,p,h,!1,null,"4e9ffbfd",null),y=_.exports,w={name:"Question",components:{Timer:y},data:function(){return{questionAnswered:!1}},computed:Object(c["a"])(Object(c["a"])({},Object(l["c"])({question:"question",lifes:"lifes"})),{},{answers:function(){return Object(u["b"])([].concat(Object(a["a"])(this.question.incorrect_answers),[this.question.correct_answer]))}}),methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])({loseLife:d["d"],addPoints:d["a"]})),{},{isAnswerCorrect:function(t){return this.question.correct_answer===t},answerQuestion:function(t){var e=t.target.innerText;this.isAnswerCorrect(e)?(t.target.classList.add("answer-button--correct-answer"),this.addPoints()):(t.target.classList.add("answer-button--wrong-answer"),this.badAnswer()),this.questionAnswered=!0},showACorrectAnswer:function(){var t=this;this.$refs.answers.childNodes.forEach((function(e){t.isAnswerCorrect(e.innerText)&&e.classList.add("answer-button--correct-answer"),e.disabled=!0}))},badAnswer:function(){this.showACorrectAnswer(),this.loseLife()},nextQuestion:function(){this.$emit("next-question"),this.$refs.timer.resetTimer(),this.questionAnswered=!1},goToEndgame:function(){this.$router.push(f["a"].path)},endTime:function(){this.badAnswer(),this.questionAnswered=!0}})},E=w,C=(n("d959"),Object(b["a"])(E,r,o,!1,null,"610f4fd9",null)),P=C.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{ref:"lifes",staticClass:"lifes"},[n("i",{staticClass:"icon icon-heart",class:{"icon-heart-on":t.lifes>0}}),n("i",{staticClass:"icon icon-heart",class:{"icon-heart-on":t.lifes>1}}),n("i",{staticClass:"icon icon-heart",class:{"icon-heart-on":t.lifes>2}})])},T=[],S={name:"Lifes",computed:{lifes:function(){return this.$store.state.lifes}}},R=S,q=(n("692b"),Object(b["a"])(R,$,T,!1,null,"f8f1677a",null)),A=q.exports,O=n("2375"),I=n("9860"),z={name:"Game",components:{Question:P,Lifes:A,Spinner:O["a"]},computed:{score:function(){return this.$store.state.score},questionReady:function(){return this.$store.state.questionReady},questions:function(){return this.$store.state.questions}},methods:{nextQuestion:function(){this.$store.commit(d["n"],!1),this.$store.commit(d["l"]),this.$store.commit(d["n"],!0)}},mounted:function(){var t=this;this.$store.commit(d["n"],!1),this.$store.dispatch(I["d"]).then((function(){t.$store.commit(d["l"]),t.$store.commit(d["n"],!0)}))},watch:{questions:function(t){2===t.length&&this.$store.dispatch(I["d"])}}},j=z,M=(n("94e6"),Object(b["a"])(j,i,s,!1,null,"07b07115",null));e["default"]=M.exports},"8aa5":function(t,e,n){"use strict";var i=n("6547").charAt;t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},9263:function(t,e,n){"use strict";var i=n("ad6d"),s=n("9f7f"),r=RegExp.prototype.exec,o=String.prototype.replace,a=r,c=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=s.UNSUPPORTED_Y||s.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],d=c||l||u;d&&(a=function(t){var e,n,s,a,d=this,f=u&&d.sticky,p=i.call(d),h=d.source,x=0,m=t;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),m=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(h="(?: "+h+")",m=" "+m,x++),n=new RegExp("^(?:"+h+")",p)),l&&(n=new RegExp("^"+h+"$(?!\\s)",p)),c&&(e=d.lastIndex),s=r.call(f?n:d,m),f?s?(s.input=s.input.slice(x),s[0]=s[0].slice(x),s.index=d.lastIndex,d.lastIndex+=s[0].length):d.lastIndex=0:c&&s&&(d.lastIndex=d.global?s.index+s[0].length:e),l&&s&&s.length>1&&o.call(s[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(s[a]=void 0)})),s}),t.exports=a},"94e6":function(t,e,n){"use strict";n("26f7")},9636:function(t,e,n){},"96c6":function(t,e,n){"use strict";n("5086")},"9f7f":function(t,e,n){"use strict";var i=n("d039");function s(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=i((function(){var t=s("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=i((function(){var t=s("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a2cc:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s}));n("fb6a"),n("ac1f"),n("5319");var i=function(t){return t.sort((function(){return Math.random()-.5}))},s=function(t){var e=new Date(t).toISOString();return e.replace("Z","").replace("T"," ").slice(0,16)}},a7e3:function(t,e,n){
/*!
 * vue-simple-progress v1.1.1 (https://github.com/dzwillia/vue-simple-progress)
 * (c) 2019 David Z. Williams
 * Released under the MIT License.
 */
(function(e,n){t.exports=n()})(0,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VueSimpleProgress=void 0;var i=n(1),s=r(i);function r(t){return t&&t.__esModule?t:{default:t}}"undefined"!==typeof window&&window.Vue&&Vue.component("vue-simple-progress",s.default),e.VueSimpleProgress=s.default,e.default=s.default},function(t,e,n){var i=n(2)(n(3),n(4),null,null);t.exports=i.exports},function(t,e){t.exports=function(t,e,n,i){var s,r=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(s=t,r=t.default);var a="function"===typeof r?r.options:r;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),i){var c=Object.create(a.computed||null);Object.keys(i).forEach((function(t){var e=i[t];c[t]=function(){return e}})),a.computed=c}return{esModule:s,exports:r,options:a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return!isNaN(parseFloat(t))&&isFinite(t)};e.default={props:{val:{default:0},max:{default:100},size:{default:3},"bg-color":{type:String,default:"#eee"},"bar-color":{type:String,default:"#2196f3"},"bar-transition":{type:String,default:"all 0.5s ease"},"bar-border-radius":{type:Number,default:0},spacing:{type:Number,default:4},text:{type:String,default:""},"text-align":{type:String,default:"center"},"text-position":{type:String,default:"bottom"},"font-size":{type:Number,default:13},"text-fg-color":{type:String,default:"#222"}},computed:{pct:function(){var t=this.val/this.max*100;return t=t.toFixed(2),Math.min(t,this.max)},size_px:function(){switch(this.size){case"tiny":return 2;case"small":return 4;case"medium":return 8;case"large":return 12;case"big":return 16;case"huge":return 32;case"massive":return 64}return i(this.size)?this.size:32},text_padding:function(){switch(this.size){case"tiny":case"small":case"medium":case"large":case"big":case"huge":case"massive":return Math.min(Math.max(Math.ceil(this.size_px/8),3),12)}return i(this.spacing)?this.spacing:4},text_font_size:function(){switch(this.size){case"tiny":case"small":case"medium":case"large":case"big":case"huge":case"massive":return Math.min(Math.max(Math.ceil(1.4*this.size_px),11),32)}return i(this.fontSize)?this.fontSize:13},progress_style:function(){var t={background:this.bgColor};return"middle"!=this.textPosition&&"inside"!=this.textPosition||(t["position"]="relative",t["min-height"]=this.size_px+"px",t["z-index"]="-2"),this.barBorderRadius>0&&(t["border-radius"]=this.barBorderRadius+"px"),t},bar_style:function(){var t={background:this.barColor,width:this.pct+"%",height:this.size_px+"px",transition:this.barTransition};return this.barBorderRadius>0&&(t["border-radius"]=this.barBorderRadius+"px"),"middle"!=this.textPosition&&"inside"!=this.textPosition||(t["position"]="absolute",t["top"]="0",t["height"]="100%",t["min-height"]=this.size_px+"px",t["z-index"]="-1"),t},text_style:function(){var t={color:this.textFgColor,"font-size":this.text_font_size+"px","text-align":this.textAlign};return"top"!=this.textPosition&&"middle"!=this.textPosition&&"inside"!=this.textPosition||(t["padding-bottom"]=this.text_padding+"px"),"bottom"!=this.textPosition&&"middle"!=this.textPosition&&"inside"!=this.textPosition||(t["padding-top"]=this.text_padding+"px"),t}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.text.length>0&&"top"==t.textPosition?n("div",{staticClass:"vue-simple-progress-text",style:t.text_style},[t._v(t._s(t.text))]):t._e(),t._v(" "),n("div",{staticClass:"vue-simple-progress",style:t.progress_style},[t.text.length>0&&"middle"==t.textPosition?n("div",{staticClass:"vue-simple-progress-text",style:t.text_style},[t._v(t._s(t.text))]):t._e(),t._v(" "),t.text.length>0&&"inside"==t.textPosition?n("div",{staticStyle:{position:"relative",left:"-9999px"},style:t.text_style},[t._v(t._s(t.text))]):t._e(),t._v(" "),n("div",{staticClass:"vue-simple-progress-bar",style:t.bar_style},[t.text.length>0&&"inside"==t.textPosition?n("div",{style:t.text_style},[t._v(t._s(t.text))]):t._e()])]),t._v(" "),t.text.length>0&&"bottom"==t.textPosition?n("div",{staticClass:"vue-simple-progress-text",style:t.text_style},[t._v(t._s(t.text))]):t._e()])},staticRenderFns:[]}}])["default"]}))},ac1f:function(t,e,n){"use strict";var i=n("23e7"),s=n("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},d4e4:function(t,e,n){},d784:function(t,e,n){"use strict";n("ac1f");var i=n("6eeb"),s=n("d039"),r=n("b622"),o=n("9263"),a=n("9112"),c=r("species"),u=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),d=r("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!s((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var h=r(t),x=!s((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),m=x&&!s((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!x||!m||"replace"===t&&(!u||!l||f)||"split"===t&&!p){var v=/./[h],g=n(h,""[t],(function(t,e,n,i,s){return e.exec===o?x&&!s?{done:!0,value:v.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),b=g[0],_=g[1];i(String.prototype,t,b),i(RegExp.prototype,h,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}d&&a(RegExp.prototype[h],"sham",!0)}},d959:function(t,e,n){"use strict";n("69ba")},dd71:function(t,e,n){"use strict";n("d4e4")}}]);
//# sourceMappingURL=game.bb1e5423.js.map
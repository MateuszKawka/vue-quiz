(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-549b3ac8"],{"01a6":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.highscoresReady?n("at-table",{staticClass:"highscores-table",attrs:{columns:t.columns,data:t.formatedHighscores}}):n("Spinner")},c=[],a=(n("d81d"),n("5530")),i=n("a2cc"),o=n("2375"),s={name:"HighscoresTable",components:{Spinner:o["a"]},computed:{highscores:function(){return this.$store.state.highscores.highscores},highscoresReady:function(){return this.$store.state.highscores.highscoresReady},formatedHighscores:function(){return this.highscores.map((function(t){return Object(a["a"])(Object(a["a"])({},t),{},{createdAt:Object(i["a"])(t.createdAt)})}))}},data:function(){return{columns:[{title:"Name",key:"name"},{title:"Score",key:"score"},{title:"Date",key:"createdAt"}]}}},u=s,l=(n("5e3b"),n("2877")),f=Object(l["a"])(u,r,c,!1,null,"350f29e0",null);e["a"]=f.exports},"0868":function(t,e,n){"use strict";n("d854")},"0c3a":function(t,e,n){"use strict";n("d772")},"102d":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section highscores"},[n("router-link",{attrs:{to:t.HOME_ROUTE.path}},[t._v("Back to home")]),n("h3",{staticClass:"section__title"},[t._v("Highscores")]),n("HighscoresTable")],1)},c=[],a=n("01a6"),i=n("d046"),o=n("9860"),s={name:"HighscoresView",data:function(){return{HOME_ROUTE:i["d"]}},components:{HighscoresTable:a["a"]},mounted:function(){this.$store.dispatch(o["c"])}},u=s,l=(n("0c3a"),n("2877")),f=Object(l["a"])(u,r,c,!1,null,"44bc77a9",null);e["default"]=f.exports},"14c3":function(t,e,n){var r=n("c6b6"),c=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return c.call(t,e)}},2375:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader-container"},[n("div",{staticClass:"loader"},[t._v("Loading...")])])}],a=(n("0868"),n("2877")),i={},o=Object(a["a"])(i,r,c,!1,null,"0dbec0ad",null);e["a"]=o.exports},5319:function(t,e,n){"use strict";var r=n("d784"),c=n("825a"),a=n("7b0b"),i=n("50c4"),o=n("a691"),s=n("1d80"),u=n("8aa5"),l=n("14c3"),f=Math.max,d=Math.min,h=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var x=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,E=r.REPLACE_KEEPS_$0,b=x?"$":"$0";return[function(n,r){var c=s(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,c,r):e.call(String(c),n,r)},function(t,r){if(!x&&E||"string"===typeof r&&-1===r.indexOf(b)){var a=n(e,t,this,r);if(a.done)return a.value}var s=c(t),h=String(this),p="function"===typeof r;p||(r=String(r));var v=s.global;if(v){var _=s.unicode;s.lastIndex=0}var R=[];while(1){var S=l(s,h);if(null===S)break;if(R.push(S),!v)break;var y=String(S[0]);""===y&&(s.lastIndex=u(h,i(s.lastIndex),_))}for(var $="",I=0,T=0;T<R.length;T++){S=R[T];for(var O=String(S[0]),A=f(d(o(S.index),h.length),0),w=[],P=1;P<S.length;P++)w.push(g(S[P]));var U=S.groups;if(p){var C=[O].concat(w,A,h);void 0!==U&&C.push(U);var k=String(r.apply(void 0,C))}else k=m(O,h,A,w,U,r);A>=I&&($+=h.slice(I,A)+k,I=A+O.length)}return $+h.slice(I)}];function m(t,n,r,c,i,o){var s=r+t.length,u=c.length,l=v;return void 0!==i&&(i=a(i),l=p),e.call(o,l,(function(e,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(s);case"<":o=i[a.slice(1,-1)];break;default:var l=+a;if(0===l)return e;if(l>u){var f=h(l/10);return 0===f?e:f<=u?void 0===c[f-1]?a.charAt(1):c[f-1]+a.charAt(1):e}o=c[l-1]}return void 0===o?"":o}))}}))},"551b":function(t,e,n){},"5e3b":function(t,e,n){"use strict";n("551b")},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),c=n("9f7f"),a=RegExp.prototype.exec,i=String.prototype.replace,o=a,s=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=c.UNSUPPORTED_Y||c.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=s||l||u;f&&(o=function(t){var e,n,c,o,f=this,d=u&&f.sticky,h=r.call(f),p=f.source,v=0,g=t;return d&&(h=h.replace("y",""),-1===h.indexOf("g")&&(h+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,v++),n=new RegExp("^(?:"+p+")",h)),l&&(n=new RegExp("^"+p+"$(?!\\s)",h)),s&&(e=f.lastIndex),c=a.call(d?n:f,g),d?c?(c.input=c.input.slice(v),c[0]=c[0].slice(v),c.index=f.lastIndex,f.lastIndex+=c[0].length):f.lastIndex=0:s&&c&&(f.lastIndex=f.global?c.index+c[0].length:e),l&&c&&c.length>1&&i.call(c[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(c[o]=void 0)})),c}),t.exports=o},"9f7f":function(t,e,n){"use strict";var r=n("d039");function c(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=c("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=c("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a2cc:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return c}));n("fb6a"),n("ac1f"),n("5319");var r=function(t){return t.sort((function(){return Math.random()-.5}))},c=function(t){var e=new Date(t).toISOString();return e.replace("Z","").replace("T"," ").slice(0,16)}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),c=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==c},{exec:c})},d772:function(t,e,n){},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),c=n("d039"),a=n("b622"),i=n("9263"),o=n("9112"),s=a("species"),u=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),h=!c((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var p=a(t),v=!c((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),g=v&&!c((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!v||!g||"replace"===t&&(!u||!l||d)||"split"===t&&!h){var x=/./[p],E=n(p,""[t],(function(t,e,n,r,c){return e.exec===i?v&&!c?{done:!0,value:x.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=E[0],m=E[1];r(String.prototype,t,b),r(RegExp.prototype,p,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}f&&o(RegExp.prototype[p],"sham",!0)}},d81d:function(t,e,n){"use strict";var r=n("23e7"),c=n("b727").map,a=n("1dde"),i=n("ae40"),o=a("map"),s=i("map");r({target:"Array",proto:!0,forced:!o||!s},{map:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},d854:function(t,e,n){}}]);
//# sourceMappingURL=chunk-549b3ac8.46b90244.js.map
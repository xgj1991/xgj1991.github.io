$(function(){function t(t){this.book(t),this.cup(t),this.timer1=null,this.timer2=null,this.timer3=null,this.timer4=null}function i(t){this.timer=null,this.timer1=null,this.timer2=null,this.timer3=null,this.timer4=null,this.floor(t),this.clock(t)}function e(t){this.ban(t),this.timer=null,this.timer1=null,this.timer2=null,this.timer3=null,this.num=0}function n(t){this.timer1=null,this.timer2=null,this.timer3=null,this.timer4=null,this.timer5=null,this.timer6=null,this.timer7=null,this.timer8=null,this.timer9=null,this.timer10=null,this.x1=0,this.x2=0,this.door(t),this.floor(t),this.stool(t),this.bottle(t),this.cup(t),this.fire(t),this.bubble1(t)}function a(t){this.star(t),this.bg(t),this.earth1(t),this.num=0,this.timer1=null,this.timer2=null,this.timer3=null}function o(t){this.timer1=null,this.timer2=null,this.timer3=null,this.timer4=null,this.timer5=null,this.timer6=null,this.floor(t)}function r(t){this.timer1=null,this.timer2=null,this.sky(t),this.bike(t)}function d(t){this.map1(t),this.timer1=null,this.timer2=null,this.timer3=null,this.timer4=null,this.timer5=null,this.timer6=null,this.timer7=null,this.timer8=null,this.timer9=null}function p(t){this.print1(t),this.num=0,this.timer1=null,this.timer2=null,this.timer3=null}t.prototype={constructor:t,book:function(t){var i=this,e=$('<img id="book2-1" src="img/read/book2.png"/>');t.append(e),e.stop().animate({width:344,height:258,left:66,bottom:54},1e3,function(){i.pen(t),$("#write2-1-1")[0]||(i.timer4=setTimeout(function(){$("#write2-1-1")[0]||(i.bg(t),i.write(t))},1200))})},pen:function(t){var i=$('<img id="pen2-1-1" src="img/read/pen1.png"/>'),e=$('<img id="pen2-1-2" src="img/read/pen.png"/>');t.append(i),t.append(e),setTimeout(function(){i[0].style.transform="scale(1)",e[0].style.transform="scale(1)"},16)},cup:function(t){var i=this,e=$('<div id="cup2-1"></div>'),n=$("<div></div>"),a=$('<img src="img/read/coffee.png"/>'),o=$("<div></div>");n.append(a),e.append(n),e.append(o),t.append(e),this.timer3=setInterval(function(){t.children().length||(clearInterval(i.timer1),clearInterval(i.timer2),clearInterval(i.timer3),clearInterval(i.timer4))},16),n.stop().animate({width:117,height:106,left:0,bottom:9},1e3,function(){i.timer2=setInterval(function(){return t.children().length?(o[0].style["border-width"]="3px",void o.stop().animate({width:73,height:73,left:30,top:19,opacity:0},2e3,function(){o[0].style["border-width"]="0px",o.stop().animate({width:0,height:0,left:69,top:53,opacity:1})})):(clearInterval(i.timer2),void console.log(t.children().length))},5e3)}),e[0].style.transform="rotate(360deg)",e[0].style.left="131px",e[0].style.bottom="321px"},bg:function(t){var i=$('<div id="bg2-1-1"></div>'),e=$('<div id="bg2-1-2"></div>');t.prepend(i),t.prepend(e),i.stop().animate({width:199,height:231},1e3),e.stop().animate({width:188,height:227},1e3)},write:function(t){function i(){r.html("");var t=$('<div class="write2-1"></div>'),i=$('<div class="write2-1"></div>'),e=$('<div class="write2-1"></div>');t.css({width:94,right:4,top:15}),i.css({width:94,right:4,top:65}),e.css({width:94,right:4,top:97}),r.append(t),r.append(i),r.append(e),o(0)}function e(){r.html("");var t=$('<div class="write2-1"></div>'),i=$('<div class="write2-1"></div>'),e=$('<div class="write2-1"></div>');t.css({width:50,right:48,top:15}),i.css({width:40,right:4,top:15}),e.css({width:94,right:4,top:50}),r.append(t),r.append(i),r.append(e);for(var n=0;n<6;n++){var o=$('<div class="write2-1"></div>'),d=4+33*(2-n%3),p=85+22*Math.floor(n/3);o.css({width:28,right:d,top:p}),r.append(o)}a(0)}function n(a){if(t.children().length){if(a>=$("#write2-1-1 div").length)return void(a>8?i():e());0==a&&$("#write2-1-1 div").eq(a).stop().animate({width:0},400,function(){a++,n(a)}),1==a&&$("#write2-1-1 div").eq(a).stop().animate({width:0},400,function(){a++,n(a)}),2==a&&$("#write2-1-1 div").eq(a).stop().animate({width:0},400,function(){a++,n(a)}),a>2&&$("#write2-1-1 div").eq(a).stop().animate({width:0},400,function(){a++,n(a)})}}function a(i){return i>=$("#write2-1-1 div").length?void n(0):t.children().length?(0==i&&$("#write2-1-1 div").eq(i).stop().animate({height:30},400,function(){i++,a(i)}),1==i&&$("#write2-1-1 div").eq(i).stop().animate({height:30},400,function(){i++,a(i)}),2==i&&$("#write2-1-1 div").eq(i).stop().animate({height:30},400,function(){i++,a(i)}),void(i>2&&$("#write2-1-1 div").eq(i).stop().animate({height:17},400,function(){i++,a(i)}))):void console.log(1)}function o(i){t.children().length&&(0==i&&$("#write2-1-1 div").eq(i).stop().animate({height:45},400,function(){i++,o(i)}),1==i&&$("#write2-1-1 div").eq(i).stop().animate({height:27},400,function(){i++,o(i)}),2==i&&$("#write2-1-1 div").eq(i).stop().animate({height:27},400,function(){n(0)}))}var r=$('<div id="write2-1-1"></div>');t.append(r),i()}},i.prototype={constructor:i,floor:function(t){t.html("");var i=this,e=$('<div id="floor2-2"></div>');t.append(e),e.stop().animate({width:404,height:21,right:47},500,function(){i.computer(t),i.phone(t),i.pad(t)})},computer:function(t){var i=this,e=$('<div id="computer2-2"></div>'),n=$('<img src="img/ele/computer.png"/>'),a=$("<div></div>"),o=$("<div></div>"),r=$("<div></div>");a.append(r),e.append(n),t.append(e),this.timer4=setInterval(function(){if(!t.children().length)return clearInterval(i.timer),clearInterval(i.timer1),clearInterval(i.timer2),clearInterval(i.timer3),void clearInterval(i.timer4)},16),e.stop().animate({height:257},500,function(){e.append(a),e.append(o),i.bg(t),i.timer1=setInterval(function(){r.stop().animate({left:-308},1e3,function(){r.css({left:0})})},3e3)})},phone:function(t){var i=0,e=this,n=$('<div id="phone2-2"></div>'),a=$('<img src="img/ele/phone.png"/>'),o=$("<div></div>"),r=$("<div></div>"),d=$("<div></div>");o.append(d),n.append(a),t.append(n),n.stop().animate({height:135},500,function(){n.append(o),n.append(r),e.timer2=setInterval(function(){i++,d.stop().animate({left:-52*i},1e3,function(){2==i&&(i=0,d.css({left:0}))})},3e3)})},pad:function(t){var i=0,e=this,n=$('<div id="pad2-2"></div>'),a=$('<img src="img/ele/pad.png"/>'),o=$("<div></div>"),r=$("<div></div>"),d=$("<div></div>");o.append(d),n.append(a),t.append(n),n.stop().animate({height:182},500,function(){n.append(o),n.append(r),e.timer3=setInterval(function(){i++,d.stop().animate({left:-106*i},1e3,function(){2==i&&(i=0,d.css({left:0}))})},3e3)})},bg:function(t){var i=$('<div id="bg2-2"></div>'),e=$('<img src="img/ele/bg.png"/>');i.append(e),t.prepend(i),i.stop().animate({width:168,height:170},500)},clock:function(t){var i=0,e=this,n=$('<canvas id="clock2-2-1" width="96px" height="96px"></canvas>'),a=$('<div id="clock2-2-3"></div>');t.prepend(a),t.prepend(n);var o=n[0].getContext("2d");o.strokeStyle="#ce5e64",o.lineWidth=6,this.timer=setInterval(function(){i+=4,i>360&&clearInterval(e.timer),o.beginPath(),o.arc(48,48,45,0,i*Math.PI/180,!1),o.stroke(),o.closePath()},16),setTimeout(function(){a[0].style.transform="rotate(360deg)"},16)}},e.prototype={constructor:e,ban:function(t){t.html("");var i=this,e=$('<div id="ban2-3"></div>'),n=$('<img src="img/str/ban.png"/>');e.append(n),t.append(e),e.stop().animate({height:278,bottom:200},500,function(){e.stop().animate({bottom:43},500,function(){i.wu(t),i.bg(t),i.cav(t)})})},wu:function(t){var i=$('<div id="wu2-3-1"></div>'),e=$('<div id="wu2-3-2"></div>');t.append(i),t.append(e),i.stop().animate({bottom:121},500),e.stop().animate({bottom:121},500)},bg:function(t){var i=$('<div id="bg2-3-1"></div>'),e=$('<div id="bg2-3-2"></div>'),n=$('<div id="bg2-3-3"></div>'),a=$('<img src="img/str/bgs.png"/>'),o=$('<img src="img/str/bgy.png"/>'),r=$('<img src="img/str/bgz.png"/>');i.append(a),e.append(o),n.append(r),t.prepend(i),t.prepend(e),t.prepend(n),i.stop().animate({width:224,height:149},500),e.stop().animate({width:74,height:156},500),n.stop().animate({width:74,height:75},500)},cav:function(t){function i(){a.timer=setInterval(function(){o+=4,o>360&&(clearInterval(a.timer),o=0),p.beginPath(),p.strokeStyle="#715aa9",p.arc(14,110,12,0,o*Math.PI/180,!1),p.stroke(),p.closePath(),p.beginPath(),p.strokeStyle="#de4c3b",p.arc(151,72,12,0,o*Math.PI/180,!1),p.stroke(),p.closePath()},16)}function e(t,i,e,n,a){p.beginPath(),p.strokeStyle="#"+t,p.moveTo(i,e),p.lineTo(n,a),p.stroke(),p.closePath()}function n(o){if(a.num<s.length){var r=0,h=0,m=a.num,l=s[m][0],c=s[m][1],v=s[m][2],f=s[m][3],u=s[m][4];a.timer1=setInterval(function(){return t.children().length?(c>f?r--:c<f&&r++,v>u?h--:v<u&&h++,e(l,c,v,c+r,v+h),void(c+r==f&&v+h==u&&(clearInterval(a.timer1),a.num++,n(a.num)))):(clearInterval(a.timer),clearInterval(a.timer1),clearInterval(a.timer2),void clearInterval(a.timer3))},16)}else a.num=0,a.timer2=setTimeout(function(){p.clearRect(0,0,d[0].width,d[0].height),a.timer3=setTimeout(function(){n(a.num),i()},2e3)},2e3)}var a=this,o=0,r=$('<div id="cav2-3"></div>'),d=$('<canvas width="224px" height="124px"></canvas>');r.append(d),t.append(r);var p=d[0].getContext("2d");p.lineWidth=4,i();var s=[["fff",14,96,14,6],["fff",15,4,4,15],["fff",13,4,24,15],["fff",47,84,73,58],["fff",47,58,73,84],["fff",90,84,116,58],["fff",90,58,116,84],["008ff6",104,45,104,22],["008ff6",105,20,94,31],["008ff6",103,20,114,31],["ecab18",222,77,195,104],["ecab18",195,77,222,104],["fff",150,98,150,121],["fff",151,122,140,111],["fff",149,122,160,111],["fff",213,62,213,55],["fff",213,45,213,35],["fff",213,25,213,13],["fff",213,15,203,15],["fff",193,15,177,15],["fff",167,15,155,15],["fff",154,16,165,5],["fff",154,14,165,25]];n(a.num)}},n.prototype={constructor:n,door:function(t){t.html("");var i=$('<div id="door"></div>');t.append(i),i.stop().animate({height:164},600)},floor:function(t){var i=$('<div id="floor"></div>');t.append(i),i.stop().animate({width:404,left:48})},stool:function(t){var i=$('<div id="stool"></div>');t.append(i),i.stop().animate({bottom:90,left:75},400),i[0].style.transform="rotate(0deg)"},bottle:function(t){var i=this,e=$('<div id="bottle"></div>');t.append(e),e.stop().animate({bottom:140,left:91},600,function(){i.timer7=setTimeout(function(){i.blue(t)},400)}),e[0].style.transform="rotate(0deg)"},cup:function(t){var i=this,e=$('<div id="cup"></div>');t.append(e),e.stop().animate({height:102},600,function(){i.red(t)})},red:function(t){var i=this,e=$('<div id="red"></div>'),n=$("<div></div>"),a=$("<div></div>");e.append(n),e.append(a),t.append(e),e.stop().animate({height:29},600),clearInterval(this.timer1),this.timer1=setInterval(function(){return t.children().length?(i.x1++,void(n[0].style["background-position"]=i.x1+"px")):(clearInterval(i.timer1),clearInterval(i.timer2),clearInterval(i.timer3),clearInterval(i.timer4),clearInterval(i.timer5),clearInterval(i.timer6),clearInterval(i.timer7),clearInterval(i.timer8),clearInterval(i.timer9),void clearInterval(i.timer10))},32)},blue:function(t){var i=this,e=$('<div id="blue"></div>'),n=$("<div></div>"),a=$("<div></div>"),o=$('<div id="div3"></div>');e.append(n),e.append(a),t.append(e),t.append(o),e.stop().animate({height:90},600,function(){i.tube(t),i.bubble(t)}),clearInterval(this.timer2),this.timer2=setInterval(function(){i.x2++,n[0].style["background-position"]=i.x2+"px"},16)},fire:function(t){var i=this,e=$('<div id="fire"></div>'),n=$("<div></div>"),a=$("<div></div>"),o=$('<img src="img/test/fire.png"/>');e.append(n),e.append(a),e.append(o),t.append(e),e.stop().animate({height:40},600,function(){o.stop().animate({height:26},400,function(){o.stop().animate({height:30},150,function(){o.stop().animate({height:26},150)}),clearInterval(i.timer3),i.timer3=setInterval(function(){o.stop().animate({height:30},150,function(){o.stop().animate({height:26},150)})},300)})})},tube:function(t){var i=this,e=$('<div id="tube"></div>');t.append(e),e.stop().animate({height:222},200,function(){e.stop().animate({width:203},200,function(){i.drop(t)})})},drop:function(t){var i=this,e=$('<img id="drop" src="img/test/drop1.png"/>');t.append(e),e.stop().animate({width:14,height:22,bottom:123},300,"swing",function(){e.css({width:0,height:0,bottom:254})}),clearInterval(i.timer5),i.timer5=setInterval(function(){e.stop().animate({width:14,height:22,bottom:120},700,function(){e.css({width:0,height:0,bottom:254})})},800)},bubble:function(t){var i=$('<div id="bubble"></div>'),e=$("<div></div>"),n=$("<div></div>"),a=$("<div></div>");i.append(e),i.append(n),i.append(a),t.append(i),e.stop().animate({width:0,height:0,bottom:50},1200,function(){e.css({width:26,height:26,bottom:10})}),n.stop().animate({width:0,height:0,bottom:70},1200,function(){n.css({width:20,height:20,bottom:15})}),a.stop().animate({width:0,height:0,bottom:70},1200,function(){a.css({width:20,height:20,bottom:15})}),this.timer4=setInterval(function(){e.stop().animate({width:0,height:0,left:43,bottom:50},1200,function(){e.css({bottom:5}),e.stop().animate({width:26,height:26,left:30,bottom:5},400)}),n.stop().animate({width:0,height:0,left:10,bottom:70},1200,function(){n.css({bottom:10}),n.stop().animate({width:20,height:20,left:0,bottom:15},400)}),a.stop().animate({width:0,height:0,left:70,bottom:70},1200,function(){a.css({bottom:10}),a.stop().animate({width:20,height:20,left:70,bottom:15},400)})},1700)},bubble1:function(t){var i=this,e=$('<div id="bubble1"></div>'),n=$("<div></div>"),a=$("<div></div>"),o=$('<img src="img/test/bubble.png"/>');e.append(n),e.append(a),e.append(o),t.append(e),this.timer6=setInterval(function(){n.stop().animate({width:0,height:0,left:109,bottom:109},800,function(){i.timer8=setTimeout(function(){n.stop().animate({width:18,height:18,left:100,bottom:100},800)},200)}),a.stop().animate({width:0,height:0,borderWidth:0,left:28,bottom:68},800,function(){i.timer9=setTimeout(function(){a.stop().animate({width:12,height:12,borderWidth:4,left:20,bottom:60},800)},200)}),o.stop().animate({width:0,height:0,left:110,bottom:210},800,function(){i.timer10=setTimeout(function(){o.stop().animate({width:20,height:19,left:100,bottom:200},800)},200)})},2e3)}},a.prototype={constructor:a,star:function(t){var i=this,e=$('<img id="star3-3" src="img/earth/star.png"/>');t.append(e),e.stop().animate({width:378,height:412,left:61,top:44},1e3,function(){e.stop().animate({opacity:.3},500,function(){e.stop().animate({opacity:1},500)}),i.timer1=setInterval(function(){e.stop().animate({opacity:.3},500,function(){e.stop().animate({opacity:1},500)})},1100)})},bg:function(t){var i=$('<img id="bg3-3" src="img/earth/bg1.png"/>');t.append(i),i.stop().animate({width:405,height:386,left:48,top:57},1e3)},earth1:function(t){var i=this;this.html1=$('<div id="earth3-3"></div>');var e=$('<img src="img/earth/earth.png"/>');this.html1.append(e),t.append(this.html1),this.html1.stop().animate({width:220,height:234,left:140,top:133},1e3,function(){i.html1.stop().animate({top:135},700,function(){i.flag(t),i.html1.stop().animate({top:131},700)}),i.timer2=setInterval(function(){i.html1.stop().animate({top:135},700,function(){i.html1.stop().animate({top:131},700)})},1500)})},plane:function(t){var i=this,e=$('<div id="plane3-3"></div>'),n=$("<div></div>"),a=$("<div></div>"),o=$("<div></div>"),r=$("<div></div>"),d=$("<div></div>"),p=$("<div></div>");n.append(r),a.append(d),o.append(p),e.append(n),e.append(a),e.append(o),t.append(e),r.stop().animate({width:0}),d.stop().animate({width:0}),p.stop().animate({width:0},function(){i.timer3=setInterval(function(){return t.children().length?(i.num++,void e.css("transform","rotate("+i.num+"deg)")):(clearInterval(i.timer1),clearInterval(i.timer2),void clearInterval(i.timer3))},32)})},flag:function(t){var i=this,e=$("<div></div>"),n=$("<div></div>"),a=$("<div></div>");this.html1.append(e),this.html1.append(n),this.html1.append(a),setTimeout(function(){e[0].style.transform="rotate(0deg)",n[0].style.transform="rotate(0deg)",a[0].style.transform="rotate(0deg)"},16),i.plane(t)}},o.prototype={constructor:o,floor:function(t){var i=this,e=$('<div id="floor4-1"></div>'),n=$("<div></div>"),a=$("<div></div>");e.append(n),e.append(a),t.append(e),n.stop().animate({width:418,left:18},500),a.stop().animate({width:454,left:0},500),this.timer3=setTimeout(function(){e.stop().animate({bottom:128},500),i.foot(t),i.bg(t)},600)},foot:function(t){var i=this,e=$('<div id="foot4-1"></div>'),n=$("<div></div>"),a=$("<div></div>");e.append(n),e.append(a),t.append(e),e.stop().animate({height:52},500,function(){i.scr(t)})},scr:function(t){var i=this,e=$('<div id="scr4-1"></div>'),n=$('<div id="brace4-1"></div>'),a=$("<div></div>"),o=$("<div></div>"),r=$("<div></div>"),d=$("<div></div>"),p=$("<div></div>"),s=$("<div></div>"),h=$("<div></div>"),m=$('<img src="img/computer/comp1.png"/>');t.append(e),t.append(n),d.append(p),d.append(s),d.append(h),r.append(d),this.timer2=setInterval(function(){t.children().length||(clearInterval(i.timer1),clearInterval(i.timer2),clearInterval(i.timer3),clearInterval(i.timer4),clearInterval(i.timer5),clearInterval(i.timer6))},16),e.stop().animate({width:114,left:243},500,function(){e.append(m),e.stop().animate({width:234,height:155,bottom:200,left:182},500,function(){e.append(a),e.append(r),e.append(o),a.stop().animate({height:105},500,function(){d.stop().animate({left:0},1e3,function(){h.stop().animate({width:30})}),i.timer1=setInterval(function(){i.div2[0].style.transform="rotate(-30deg)",i.timer4=setTimeout(function(){i.div2[0].style.transform="rotate(0deg)"},250),d.stop().animate({left:-178},1e3,function(){h.css({width:0}),d.css({left:0}),h.stop().animate({width:30},500)})},3e3)})}),n.stop().animate({height:30},500)})},bg:function(t){var i=this,e=$('<div id="comgb4-1"></div>'),n=$('<img src="img/computer/combg.png"/>');this.div1=$("<div></div>"),this.div2=$("<div></div>"),e.append(n),e.append(this.div1),e.append(this.div2),t.prepend(e),e.stop().animate({width:529,left:35},1e3,function(){e.stop().animate({height:317},1e3,function(){i.div2[0].style.height="35px",i.timer5=setTimeout(function(){i.div2[0].style.transform="rotate(-30deg)",i.timer6=setTimeout(function(){i.div2[0].style.transform="rotate(0deg)"},250)},250),i.div1.stop().animate({height:87},500,function(){i.div1.stop().animate({left:96},500)})})})}},r.prototype={constructor:r,sky:function(t){var i=$('<div id="sky4-2"></div>'),e=$('<img src="img/hardcandy/sky.png"/>');i.append(e),t.append(i),i.stop().animate({width:411,height:336,left:21,bottom:118},500)},bike:function(t){this.div=$('<div id="bike4-2"></div>');var i=$('<img src="img/hardcandy/bike.png"/>');this.div.append(i),this.pedal(t),t.append(this.div),this.div.stop().animate({width:370,height:318},500)},pedal:function(t){var i=this,e=0,n=$("<div></div>"),a=$("<div></div>");this.div.append(n),this.div.append(a);var o=Math.sqrt(3133),r=Math.atan(53/18);this.timer1=setInterval(function(){if(!t.children().length)return clearInterval(i.timer1),void clearInterval(i.timer2);e-=6;var d=-e*Math.PI/180+r;a[0].style.bottom=72+o*Math.sin(d)+"px",a[0].style.left=273+o*Math.cos(d)+"px",n[0].style.transform="rotate("+e+"deg)"},16)}},d.prototype={constructor:d,map1:function(t){var i=this,e=$('<div id="map4-3"></div>'),n=$('<img src="img/tri/map2.png"/>'),a=[{left:65,bottom:151,background:"url(img/tri/po33.png) no-repeat"},{left:121,bottom:192,background:"url(img/tri/po22.png) no-repeat"},{left:129,bottom:99,background:"url(img/tri/po44.png) no-repeat"},{left:192,bottom:127,background:"url(img/tri/po22.png) no-repeat"},{left:231,bottom:71,background:"url(img/tri/po33.png) no-repeat"},{left:251,bottom:195,background:"url(img/tri/po11.png) no-repeat"},{left:270,bottom:135,background:"url(img/tri/po44.png) no-repeat"},{left:331,bottom:53,background:"url(img/tri/po33.png) no-repeat"},{left:334,bottom:140,background:"url(img/tri/po44.png) no-repeat"},{left:340,bottom:213,background:"url(img/tri/po22.png) no-repeat"}];t.append(e);for(var o=0;o<10;o++){var r=$('<div class="po"></div>');e.append(r),r.css({left:a[o].left,bottom:a[o].bottom,background:a[o].background})}this.timer1=setInterval(function(){if(!t.children().length)return clearInterval(i.timer1),clearInterval(i.timer2),clearInterval(i.timer3),clearInterval(i.timer4),clearInterval(i.timer5),clearInterval(i.timer6),clearInterval(i.timer7),clearInterval(i.timer8),void clearInterval(i.timer9)},16),e.stop().animate({left:50},500,function(){e.append(n),console.time(1),e.stop().animate({width:414},500,function(){i.mbg(t),$(".po").each(function(){this.style.transform="rotate(0deg)"}),i.timer3=setTimeout(function(){$(".po").each(function(){this.style.transform="rotate(90deg)"})},1e3),i.timer4=setTimeout(function(){$(".po").each(function(){this.style.transform="rotate(0deg)"})},2e3),i.timer5=setTimeout(function(){$(".po").each(function(){this.style.transform="rotate(-90deg)"})},3e3),i.timer6=i.timer2=setInterval(function(){$(".po").each(function(){this.style.transform="rotate(0deg)"}),i.timer7=setTimeout(function(){$(".po").each(function(){this.style.transform="rotate(90deg)"})},1e3),i.timer8=setTimeout(function(){$(".po").each(function(){this.style.transform="rotate(0deg)"})},2e3),i.timer9=setTimeout(function(){$(".po").each(function(){this.style.transform="rotate(-90deg)"})},3e3)},4e3)})})},mbg:function(t){var i=$('<div id="mbg4-3-1"></div>'),e=$('<div id="mbg4-3-2"></div>'),n=$('<div id="mbg4-3-3"></div>');t.prepend(e),t.prepend(n),t.prepend(i),i.stop().animate({width:203,height:237},500,function(){e.stop().animate({width:235,height:264},500)}),n.stop().animate({width:232,height:263},500)},po:function(t){var i=$('<div id="mbg4-3-1"></div>'),e=$('<div id="mbg4-3-2"></div>'),n=$('<div id="mbg4-3-3"></div>');t.prepend(e),t.prepend(n),t.prepend(i),i.stop().animate({width:203,height:237},500,function(){e.stop().animate({width:235,height:264},500)}),n.stop().animate({width:232,height:263},500)}},p.prototype={constructor:p,print1:function(t){var i=91,e=56,n=68,a=40,o=46,r=56,d=this,p=$('<div id="print5-1"></div>'),s=$("<div></div>"),h=$('<img src="img/print/print1-1.png"/>'),m=$("<div></div>"),l=$('<img src="img/print/print1-2.png"/>');s.append(h),p.append(s),m.append(l),p.append(m),t.append(p),p.stop().animate({bottom:260},200,function(){p.stop().animate({bottom:52},500)}),s.stop().animate({width:355,left:0},600,function(){p.css({height:187}),d.paper(t),d.pbg(t)});for(var c=0;c<8;c++){var v=$('<div class="dot5-1"></div>');v.css({left:e,bottom:i}),m.append(v),e+=29}for(var c=0;c<9;c++){var v=$('<div class="dot5-1"></div>');v.css({left:a,bottom:n}),m.append(v),a+=29}for(var c=0;c<8;c++){var v=$('<div class="dot5-1"></div>');v.css({left:r,bottom:o}),m.append(v),r+=29}for(var c=0;c<2;c++){var v=$('<div class="dot5-1"></div>');v.css({left:40+233*c,bottom:23}),m.append(v)}var f=$('<div id="dot5-2"></div>');m.append(f)},paper:function(t){for(var i=this,e=$('<div id="paper5-1"></div>'),n=$("<div></div>"),a=$("<div></div>"),o=0;o<3;o++){var r=$("<div></div>");a.append(r)}e.append(n),e.append(a),t.prepend(e),a.stop().animate({top:100},500),n.stop().animate({top:16},500),this.timer3=setTimeout(function(){var t=Math.round(27*Math.random())+1;i.write(),i.sport(t)},1e3),this.timer1=setInterval(function(){var t=Math.round(27*Math.random())+1;i.write(),i.sport(t)},8e3),this.timer2=setInterval(function(){t.children().length||(clearInterval(i.timer1),clearInterval(i.timer2),clearInterval(i.timer3))},16)},pbg:function(t){var i=$('<div id="pbg5-1-1"></div>'),e=$('<img src="img/print/pbg1.png"/>'),n=$('<div id="pbg5-1-2"></div>'),a=$('<img src="img/print/pbg2.png"/>');i.prepend(e),n.prepend(a),t.prepend(n),t.prepend(i),i.stop().animate({width:162,height:154,left:37,bottom:295},500),n.stop().animate({width:199,height:165},500)},write:function(){var t=$("#paper5-1"),i=$("#paper5-1").children().eq(0),e=$("#paper5-1").children().eq(1);t.stop().animate({left:175},700,function(){e.children().eq(0).stop().animate({width:167},700),t.stop().animate({left:122},700,function(){e.stop().animate({top:86},700),i.stop().animate({top:30},700),t.stop().animate({left:175},700,function(){e.children().eq(1).stop().animate({width:167},700),t.stop().animate({left:122},700,function(){e.stop().animate({top:72},700),i.stop().animate({top:44},700),t.stop().animate({left:175},700,function(){e.children().eq(2).stop().animate({width:84},700),t.stop().animate({left:144},700,function(){e.stop().animate({top:-102},700,function(){e.children().each(function(){$(this).css({width:0})}),e.css({top:193}),e.stop().animate({top:100},700)}),i.stop().animate({top:193},350,function(){i.css({top:-118}),i.stop().animate({top:16},700)})})})})})})})},sport:function(t){var i=this,e=$("#print5-1").children().eq(1);if(this.num>10)return void(this.num=0);var n=e.height()-e.children().eq(t).position().top-e.children().eq(t).height();this.num++,e.children().eq(t).stop().animate({bottom:n-7},200,function(){e.children().eq(t).stop().animate({bottom:n},200,function(){t=Math.round(27*Math.random())+1,i.sport(t)})})}},$.fn.extend({re:function(){new t(this)},el:function(){new i(this)},st:function(){new e(this)},te:function(){new n(this)},ea:function(){new a(this)},computer:function(){new o(this)},bike:function(){new r(this)},ma:function(){new d(this)},print:function(){new p(this)}})});
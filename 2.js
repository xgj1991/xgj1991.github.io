window.onload=function(){function e(){var e=document.getElementById("content3-1");e.innerHTML="";var t=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div"),l=document.createElement("div");t.id="ufo",n.id="ship",i.id="plane1",o.id="plane2",l.id="bplane",e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(o),e.appendChild(l);for(var r=0;r<e.children.length-1;r++){var h=document.createElement("div"),s=document.createElement("div");e.children[r].appendChild(h),e.children[r].appendChild(s)}for(var r=0;r<5;r++){var d=document.createElement("div");e.children[e.children.length-1].appendChild(d)}var a=document.createElement("div");a.id="bg3-1",e.insertBefore(a,e.children[0])}function t(e){this.timer=null,this.timer1=null,this.x=0,this.con1=document.getElementById("content3-1"),this.thing=document.getElementById(e),this.mask=this.thing.getElementsByTagName("div")}function n(e){this.onoff=!1,this.num=0,this.ul=document.querySelectorAll("ul")[e],this.arr=y[e],this.arr1=y[e][0],this.ul&&(this.lis=this.ul.querySelectorAll("li")),this.content=document.querySelectorAll(".content")[e],this.cl1=this.content.querySelectorAll(".cl1"),this.acl=this.cl1[this.num].querySelector(".acl"),this.allAcl=this.content.querySelectorAll(".acl")}function i(e,t,n){function i(e){if(120==e.wheelDelta||e.detail==-3){if(f){if(m--,m<0)return void(m=0);0==m&&c.play(),f=!1,t()}}else if(f){if(m++,m>u.length)return void(m=u.length);f=!1,c.pause(),n()}e.preventDefault()}e.onmousewheel=i,e.addEventListener("DOMMouseScroll",i)}function o(e){window.innerWidth>2*innerHeight?(e.width=window.innerWidth,e.height=window.innerWidth/2,e.style.left=0):(e.height=window.innerHeight,e.width=2*window.innerHeight,2*window.innerHeight-window.innerWidth>0&&(e.style.left=-(2*window.innerHeight-window.innerWidth)/2+"px"))}function l(e){e.style.width=window.innerWidth+"px",e.style.height=window.innerHeight+"px"}function r(){l(h),l(d),o(a),o(c),s.style.width=window.innerWidth+"px";for(var e=0;e<u.length;e++)l(u[e]);s.style.top=-m*window.innerHeight+"px"}var h=document.getElementById("nav"),s=document.getElementById("main"),d=document.getElementById("first"),a=document.getElementById("vi1"),c=document.getElementById("vi2"),u=document.querySelectorAll("section"),p=document.querySelectorAll(".acl"),w=null,m=0,f=!0,y=[["re","el","st"],["true","te","ea"],["computer","bike","ma"],["print"]];t.prototype.show=function(e,t,n,i){mTween(this.mask[0],e,500,"linear"),mTween(this.mask[1],t,500,"linear"),this.ud(n,i)},t.prototype.show1=function(){var e=this;mTween(this.mask[1],{width:0},500,"linear",function(){mTween(e.mask[0],{height:0},500,"linear",function(){mTween(e.mask[2],{"background-position":0},500,"linear"),mTween(e.mask[3],{height:76},500,"linear"),mTween(e.mask[4],{"background-position":0},500,"linear",function(){})})})},t.prototype.ud=function(e,t){var n=this;clearInterval(this.timer),this.timer=setInterval(function(){mTween(n.thing,e,500,"easeOut",function(){mTween(n.thing,t,500,"easeOut")})},1e3)},w=setInterval(function(){a.ended&&(clearInterval(w),a.style.display="none",c.style.display="block",c.play())},16),r(),n.prototype.posit=function(){for(var e=0;e<this.cl1.length;e++)this.cl1[e].style.width=window.innerWidth+"px",this.cl1[e].style.height=window.innerHeight+"px",this.cl1[e].style.left=window.innerWidth*e+"px",this.cl1[e].querySelector("div").style.bottom=(window.innerHeight-this.cl1[e].querySelector("div").offsetHeight)/2+"px";if(window.innerWidth<800)for(var e=0;e<this.cl1.length;e++)this.cl1[e].querySelector("div").style.display="none";else for(var e=0;e<this.cl1.length;e++)this.cl1[e].querySelector("div").style.display="block";this.ul&&(this.lis[0].style.left=window.innerWidth/2-54+"px",this.lis[1].style.left=window.innerWidth/2-10+"px",this.lis[2].style.left=window.innerWidth/2+34+"px"),this.content.style.left=-this.num*window.innerWidth+"px"},n.prototype.eventFn=function(){for(var e=this,t=0;t<this.lis.length;t++)this.lis[t].index=t,this.lis[t].onoff=!0,this.lis[t].onclick=function(){for(var t=this,n=0;n<e.lis.length;n++)e.lis[n].className="",$(e.allAcl[n]).html("");e.displayNone(),e.onoff&&(e.content.parentNode.style.transition="1000ms",e.bg(this.index)),mTween(e.content,{left:-this.index*window.innerWidth},500,"linear",function(){setTimeout(function(){e.lis[t.index].onoff=!0},2e3),e.num=t.index,e.lis[t.index].className="active",e.arr1=e.arr[t.index],e.acl=e.cl1[e.num].querySelector(".acl"),e.videoposit(),e.videoplay()})}},n.prototype.videoposit=function(){this.acl.style.bottom=(window.innerHeight-this.acl.offsetHeight)/2+"px",window.innerWidth<800?this.acl.style.right=(window.innerWidth-this.acl.offsetWidth)/2+"px":this.acl.style.right="200px"},n.prototype.displayNone=function(){this.acl.style.transition="500ms",this.acl.style.opacity=0},n.prototype.videoplay=function(){if(this.acl.style.opacity=1,"true"==this.arr1){e();var n=new t("ufo");n.show({height:0},{height:0},{bottom:53},{bottom:47});var i=new t("ship");i.show({width:0},{width:0},{top:53},{top:47});var o=new t("plane1");o.show({width:0},{"background-position":-27},{bottom:53},{bottom:47});var o=new t("plane2");o.show({height:0},{height:0},{top:53},{top:47});var l=new t("bplane");setTimeout(function(){l.show1()},1e3),l.ud({top:173},{top:167})}else $(this.acl)[this.arr1]()},n.prototype.bg=function(e){this.arrbg=["#69a566","#b22d2a","#5eb8e4"],this.content.parentNode.style.background=this.arrbg[e]};for(var g=[],v=0;v<u.length;v++)g.push("page"+v);for(var v=0;v<u.length;v++)g[v]=new n(v),g[v].posit(),2==v&&(g[v].onoff=!0),g[v].ul&&g[v].eventFn(),g[v].videoposit();window.onresize=function(){r();for(var e=0;e<u.length;e++)g[e].posit(),g[e].videoposit()},i(document,function(){for(var e=0;e<u.length;e++)g[e].displayNone();mTween(s,{top:-m*window.innerHeight},1e3,"linear",function(){for(var e=0;e<p.length;e++)$(p[e]).html("");f=!0,0!=m&&g[m-1].videoplay()})},function(){for(var e=0;e<u.length;e++)g[e].displayNone();mTween(s,{top:-m*window.innerHeight},1e3,"linear",function(){for(var e=0;e<p.length;e++)$(p[e]).html("");f=!0,g[m-1].videoplay()})})};
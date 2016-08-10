window.onload=function(){
	var nav=document.getElementById('nav');
	var main=document.getElementById('main');
	var first=document.getElementById('first');
	var vi1=document.getElementById('vi1');
	var vi2=document.getElementById('vi2');
	var sec=document.querySelectorAll('section');
	var ALLAcl=document.querySelectorAll('.acl')
	var perc=800/1366;
	var timer=null;
	var num=0;
	var onOff=true;
	var arr=[['re','el','st'],['true','te','ea'],['computer','bike','ma'],['print']];
	function crea(){
		var con=document.getElementById('content3-1');
		con.innerHTML='';
		var div1=document.createElement('div');
		var div2=document.createElement('div');
		var div3=document.createElement('div');
		var div4=document.createElement('div');
		var div5=document.createElement('div');
		div1.id='ufo';
		div2.id='ship';
		div3.id='plane1';
		div4.id='plane2';
		div5.id='bplane';
		con.appendChild(div1);
		con.appendChild(div2);
		con.appendChild(div3);
		con.appendChild(div4);
		con.appendChild(div5);
		for(var i=0;i<con.children.length-1;i++){
			var div6=document.createElement('div');
			var div7=document.createElement('div');
			con.children[i].appendChild(div6);
			con.children[i].appendChild(div7);
		}
		for(var i=0;i<5;i++){
			var div8=document.createElement('div');
			con.children[con.children.length-1].appendChild(div8);
		}
		var div9=document.createElement('div');
		div9.id='bg3-1';
		con.insertBefore(div9,con.children[0])
	}
	function donghua(thing){
		this.timer=null;
		this.timer1=null;
		this.x=0;
		this.con1=document.getElementById('content3-1');
		this.thing=document.getElementById(thing);
	 	this.mask=this.thing.getElementsByTagName('div');
	}
	
	donghua.prototype.show=function(a,b,c,d){
			mTween(this.mask[0],a,500,'linear');
			mTween(this.mask[1],b,500,'linear');
			this.ud(c,d);
	}
	donghua.prototype.show1=function(){
		var _this=this;
		mTween(this.mask[1],{'width':0},500,'linear',function(){
			mTween(_this.mask[0],{'height':0},500,'linear',function(){
				mTween(_this.mask[2],{'background-position':0},500,'linear');
				mTween(_this.mask[3],{'height':76},500,'linear');
				mTween(_this.mask[4],{'background-position':0},500,'linear',function(){
//					clearInterval(_this.timer1);
//					_this.timer1=setInterval(function(){
//						if(!_this.con1.children.length){
//							clearInterval(_this.timer1)
//							return;
//						}
//						_this.x-=1;
//						_this.con1.style['background-position']=_this.x+'px';
//					},30)
				});
			});
		});
	}
	donghua.prototype.ud=function(c,d){
		var _this=this;
		clearInterval(this.timer);
		this.timer=setInterval(function(){
			mTween(_this.thing,c,500,'easeOut',function(){
				mTween(_this.thing,d,500,'easeOut');
			});
		},1000)
	}
	timer=setInterval(function(){
		if(vi1.ended){
			clearInterval(timer);
			vi1.style.display='none';
			vi2.style.display='block';
			vi2.play();
		}
	},16)
	//可视区宽度随时改变
	fn1();
	//选项卡
	function xxk(n){
		this.onoff=false;
		this.num=0;
		this.ul=document.querySelectorAll('ul')[n];
		this.arr=arr[n];
		this.arr1=arr[n][0];
		//console.log(this.arr1)
		if(this.ul){
			this.lis=this.ul.querySelectorAll('li');
		}
		this.content=document.querySelectorAll('.content')[n];
		this.cl1=this.content.querySelectorAll('.cl1');
		this.acl=this.cl1[this.num].querySelector('.acl');
		this.allAcl=this.content.querySelectorAll('.acl');
	}
	xxk.prototype.posit=function(){
		for(var i=0;i<this.cl1.length;i++){
			this.cl1[i].style.width=window.innerWidth+'px';
			this.cl1[i].style.height=window.innerHeight+'px';
			this.cl1[i].style.left=window.innerWidth*i+'px';
			this.cl1[i].querySelector('div').style.bottom=(window.innerHeight-this.cl1[i].querySelector('div').offsetHeight)/2+'px';
		}
		if(window.innerWidth<800){
			for(var i=0;i<this.cl1.length;i++){
				this.cl1[i].querySelector('div').style.display='none';
			}
		}else{
			for(var i=0;i<this.cl1.length;i++){
				this.cl1[i].querySelector('div').style.display='block';
			}
		}
		if(this.ul){
			this.lis[0].style.left=window.innerWidth/2-54+'px';
			this.lis[1].style.left=window.innerWidth/2-10+'px';
			this.lis[2].style.left=window.innerWidth/2+34+'px';
		}
		this.content.style.left=-this.num*window.innerWidth+'px';
	}
	//点击事件
	xxk.prototype.eventFn=function(){
		var _this=this;
		for(var i=0;i<this.lis.length;i++){
			this.lis[i].index=i;
			this.lis[i].onoff=true;
			this.lis[i].onclick=function(){	
			var that=this;
				for(var i=0;i<_this.lis.length;i++){
					_this.lis[i].className='';
					$(_this.allAcl[i]).html('');
				}
				_this.displayNone();
				if(_this.onoff){
					_this.content.parentNode.style.transition='1000ms';
					_this.bg(this.index);
				}
				mTween(_this.content,{'left':-this.index*window.innerWidth},500,'linear',function(){
					setTimeout(function(){
						_this.lis[that.index].onoff=true;
					},2000)
					//_this.acl.style.display='none';
					_this.num=that.index;
					_this.lis[that.index].className='active';
					_this.arr1=_this.arr[that.index];
					//console.log(_this.arr1)
					_this.acl=_this.cl1[_this.num].querySelector('.acl');
					_this.videoposit();
					_this.videoplay();
				})
			}
		}
	}
	xxk.prototype.videoposit=function(){
		this.acl.style.bottom=(window.innerHeight-this.acl.offsetHeight)/2+'px';
		if(window.innerWidth<800){
			this.acl.style.right=(window.innerWidth-this.acl.offsetWidth)/2+'px';
		}else{
			this.acl.style.right=200+'px';
		}
	}
	xxk.prototype.displayNone=function(){
		this.acl.style.transition='500ms';
		this.acl.style.opacity=0;
	}
	xxk.prototype.videoplay=function(){
		var _this=this;
		this.acl.style.opacity=1;
		//console.log(this.arr1)
		if(this.arr1=='true'){
			crea();
			var ufo=new donghua('ufo');
			ufo.show({'height':0},{'height':0},{'bottom':53},{'bottom':47});
			var ship=new donghua('ship');
			ship.show({'width':0},{'width':0},{'top':53},{'top':47});
			var plane1=new donghua('plane1');
			plane1.show({'width':0},{'background-position':-27},{'bottom':53},{'bottom':47});
			var plane1=new donghua('plane2');
			plane1.show({'height':0},{'height':0},{'top':53},{'top':47});
			var bplane=new donghua('bplane');
			setTimeout(function(){
				bplane.show1();
			},1000);
			bplane.ud({'top':173},{'top':167});
		}else{
			$(this.acl)[this.arr1]();
		}
		
	}
	xxk.prototype.bg=function(i){
		this.arrbg=['#69a566','#b22d2a','#5eb8e4']
		this.content.parentNode.style.background=this.arrbg[i];
	}
	var page=[];
	for(var i=0;i<sec.length;i++){
		page.push('page'+i);
	}
	for(var i=0;i<sec.length;i++){
		page[i] = new xxk(i);
		page[i].posit();
		if(i==2){
			page[i].onoff=true;
		}
		if(page[i].ul){
			page[i].eventFn();
		}
		page[i].videoposit();
	}
	window.onresize=function(){
		fn1();
		for(var i=0;i<sec.length;i++){
			page[i].posit();
			page[i].videoposit();
		}
	}
	mScroll(document,function(){
		for(var i=0;i<sec.length;i++){
			page[i].displayNone();
		}
		mTween(main,{'top':-num*window.innerHeight},1000,'linear',function(){
			for(var i=0;i<ALLAcl.length;i++){
				$(ALLAcl[i]).html('');
			}
			onOff=true;
			if(num==0){
				return;
			}
			page[num-1].videoplay();
		})
	},function(){
		for(var i=0;i<sec.length;i++){
			page[i].displayNone();//淡出
		}
		mTween(main,{'top':-num*window.innerHeight},1000,'linear',function(){
			for(var i=0;i<ALLAcl.length;i++){
				$(ALLAcl[i]).html('');//清空所有的动画的内容
			}
			onOff=true;
			page[num-1].videoplay();
		})
	})
	//鼠标滚动事件
	function mScroll(obj,callBackUp,callBackDown){
		obj.onmousewheel=fn;
		obj.addEventListener('DOMMouseScroll',fn);
		function fn(eve){
			if(eve.wheelDelta==120||eve.detail==-3){
				//这个条件成立，说明鼠标都是往上滚动的
				if(onOff){
					//console.log(num)
					num--;
					if(num<0){
						num=0;
						return;
					}
					if(num==0){
						vi2.play();
					}
					onOff=false;
					callBackUp();
				}
			}else{
				//这个条件成立，说明鼠标都是往下滚动的
				if(onOff){
					num++;
					if(num>sec.length){
						num=sec.length;
						return;
					}
					onOff=false;
					vi2.pause();
					callBackDown();
				}
			}
			eve.preventDefault();
		}
	}
	//视频宽高随时改变
	function limit(ele){
		if(window.innerWidth>innerHeight*2){
			ele.width=window.innerWidth;
			ele.height=window.innerWidth/2;
			ele.style.left=0;
		}else{
			ele.height=window.innerHeight;
			ele.width=window.innerHeight*2;
			if(window.innerHeight*2-window.innerWidth>0){
				ele.style.left=-(window.innerHeight*2-window.innerWidth)/2+'px';
			}	
		}
	}
	//元素高度
	function limit1(ele){
		ele.style.width=window.innerWidth+'px';
		ele.style.height=window.innerHeight+'px';
	}
	function fn1(){
		limit1(nav);
		limit1(first);
		limit(vi1);
		limit(vi2);
		main.style.width=window.innerWidth+'px';
		for(var i=0;i<sec.length;i++){
			limit1(sec[i]);
		}
		main.style.top=-num*window.innerHeight+'px';
	}
}
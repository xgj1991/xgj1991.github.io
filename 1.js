$(function(){
	function read(that){
		this.book(that);
		this.cup(that);
		this.timer1 = null;
		this.timer2 = null;
		this.timer3 = null;
		this.timer4 = null; 
	}
	read.prototype={
		constructor:read,
		//出现书本
		book:function(that){
			var _this=this;
			var html=$('<img id="book2-1" src="img/read/book2.png"/>');
			that.append(html);
			html.stop().animate({width:344,height:258,left:66,bottom:54},1000,function(){
				//html[0].style.transform='rotate(720deg)';//这个效果```
				//当书本出现的时候，笔出现并慢慢变小，
				_this.pen(that);				
				if(!$('#write2-1-1')[0]){
					_this.timer4=setTimeout(function(){
							//console.log($('#write2-1-1')[0])
							if(!$('#write2-1-1')[0]){
								_this.bg(that);
								_this.write(that);
							}
						},1200)		
					}
			});
		},
		//笔
		pen:function(that){
			var html1=$('<img id="pen2-1-1" src="img/read/pen1.png"/>');
			var html2=$('<img id="pen2-1-2" src="img/read/pen.png"/>');
			that.append(html1);
			that.append(html2);
			setTimeout(function(){
				html1[0].style.transform='scale(1)';
				html2[0].style.transform='scale(1)';
			},16)
		},
		cup:function(that){
			var _this=this;
			var html=$('<div id="cup2-1"></div>');
			var div=$('<div></div>');
			var img=$('<img src="img/read/coffee.png"/>');					
			var div1=$('<div></div>');
			div.append(img);
			html.append(div);
			html.append(div1);
			that.append(html);
			this.timer3=setInterval(function(){
				if(!that.children().length){
					clearInterval(_this.timer1);
					clearInterval(_this.timer2);
					clearInterval(_this.timer3);
					clearInterval(_this.timer4)
				}
			},16)
			div.animate({width:117,height:106,left:0,bottom:9},1000,function(){
				_this.timer2=setInterval(function(){
					//console.log(that.children().length)
					if(!that.children().length){
						clearInterval(_this.timer2);
						console.log(that.children().length)
						return;
					}
					div1[0].style['border-width']=3+'px';
					div1.stop().animate({width:73,height:73,left:30,top:19,opacity:0},2000,function(){
						div1[0].style['border-width']=0+'px';
						div1.stop().animate({width:0,height:0,left:69,top:53,opacity:1});
					})
				},5000)
			})
			html[0].style.transform='rotate(360deg)';
			html[0].style.left=131+'px';
			html[0].style.bottom=321+'px';
		},
		bg:function(that){
			var div=$('<div id="bg2-1-1"></div>');			
			var div1=$('<div id="bg2-1-2"></div>');
			that.prepend(div);
			that.prepend(div1);
			div.stop().animate({width:199,height:231},1000)
			div1.stop().animate({width:188,height:227},1000)
		},
		write:function(that){
			var _this=this;
			var div=$('<div id="write2-1-1"></div>');
			that.append(div);
			write2();

			function write2(){
				div.html('');
				var div1=$('<div class="write2-1"></div>');
				var div2=$('<div class="write2-1"></div>');
				var div3=$('<div class="write2-1"></div>');
				div1.css({width:94,right:4,top:15});
				div2.css({width:94,right:4,top:65});
				div3.css({width:94,right:4,top:97});
				div.append(div1);
				div.append(div2);
				div.append(div3);
				show2(0);
/*				setTimeout(function(){
					collect(0)
				},$('#write2-1-1 div').length*400+1000)*/
			}
			function write1(){
				div.html('');
				var div1=$('<div class="write2-1"></div>');
				var div2=$('<div class="write2-1"></div>');
				var div3=$('<div class="write2-1"></div>');
				div1.css({width:50,right:48,top:15});
				div2.css({width:40,right:4,top:15});
				div3.css({width:94,right:4,top:50});
				div.append(div1);
				div.append(div2);
				div.append(div3);
				for(var i=0;i<6;i++){
					var div4=$('<div class="write2-1"></div>');
					var a=4+33*(2-i%3)
					var b=85+22*(Math.floor(i/3))
					div4.css({width:28,right:a,top:b})
					div.append(div4);
				}
				show1(0);
/*				setTimeout(function(){
					collect(0)
				},$('#write2-1-1 div').length*400+1000)*/
			}
			function collect(a){
				if(!that.children().length){
					//console.log(1)
					return;
				}
				if(a>=$('#write2-1-1 div').length){
					if(a>8){
						write2();
					}else{
						write1();
					}
					return; 
				}
				if(a==0){
					$('#write2-1-1 div').eq(a).stop().animate({width:0},400,function(){
						a++
						collect(a)
					})	
				}
				if(a==1){
					$('#write2-1-1 div').eq(a).stop().animate({width:0},400,function(){
						a++
						collect(a)
					})
				}
				if(a==2){
					$('#write2-1-1 div').eq(a).stop().animate({width:0},400,function(){
						a++
						collect(a)
					})
				}
				if(a>2){
					$('#write2-1-1 div').eq(a).stop().animate({width:0},400,function(){
						a++
						//console.log(a);
						collect(a)
					})
				}
			}
			function show1(a){
				if(a>=$('#write2-1-1 div').length){
					collect(0)
					return;
				}
				if(!that.children().length){
					console.log(1)
					return;
				}
				if(a==0){
					$('#write2-1-1 div').eq(a).stop().animate({height:30},400,function(){
						a++
						show1(a)
					})	
				}
				if(a==1){
					$('#write2-1-1 div').eq(a).stop().animate({height:30},400,function(){
						a++
						show1(a)
					})
				}
				if(a==2){
					$('#write2-1-1 div').eq(a).stop().animate({height:30},400,function(){
						a++
						show1(a)
					})
				}
				if(a>2){
					$('#write2-1-1 div').eq(a).stop().animate({height:17},400,function(){
						a++
						show1(a);
					})
				}
			}
			function show2(a){
				if(!that.children().length){
					//console.log(1)
					return;
				}
				if(a==0){
					$('#write2-1-1 div').eq(a).stop().animate({height:45},400,function(){
						a++
						show2(a)
					})	
				}
				if(a==1){
					$('#write2-1-1 div').eq(a).stop().animate({height:27},400,function(){
						a++
						show2(a)
					})
				}
				if(a==2){
					$('#write2-1-1 div').eq(a).stop().animate({height:27},400,function(){
						collect(0)
					})
				}
			}
		}
	}
	
	function electronic(that){
		this.timer=null;
		this.timer1=null;
		this.timer2=null;
		this.timer3=null;
		this.timer4=null;
		this.floor(that);
		this.clock(that);
	}
	electronic.prototype={
		constructor:electronic,
		floor:function(that){
			that.html('');
			var _this=this;
			var div=$('<div id="floor2-2"></div>');			
			that.append(div);
			div.stop().animate({width:404,height:21,right:47},500,function(){
				_this.computer(that);
				_this.phone(that);
				_this.pad(that);
			})
		},
		computer:function(that){
			var _this=this;
			var div=$('<div id="computer2-2"></div>');
			var img=$('<img src="img/ele/computer.png"/>');
			var div1=$('<div></div>');
			var div2=$('<div></div>');
			var div3=$('<div></div>');
			div1.append(div3);
			div.append(img);
			that.append(div);
			this.timer4=setInterval(function(){
				if(!that.children().length){
					clearInterval(_this.timer);
					clearInterval(_this.timer1);
					clearInterval(_this.timer2);
					clearInterval(_this.timer3);
					clearInterval(_this.timer4);
					return;
				}
			},16)
			div.stop().animate({height:257},500,function(){
				div.append(div1);
				div.append(div2);
				_this.bg(that);
				_this.timer1=setInterval(function(){
					div3.stop().animate({left:-308},1000,function(){
						div3.css({left:0});
					})
				},3000)
			})
		},
		phone:function(that){
			var n=0;
			var _this=this;
			var div=$('<div id="phone2-2"></div>');
			var img=$('<img src="img/ele/phone.png"/>');
			var div1=$('<div></div>');
			var div2=$('<div></div>');
			var div3=$('<div></div>');
			div1.append(div3);
			div.append(img);
			that.append(div);
			div.stop().animate({height:135},500,function(){
				div.append(div1);
				div.append(div2);
				_this.timer2=setInterval(function(){
					n++
					div3.stop().animate({left:-52*n},1000,function(){
						if(n==2){
							n=0;
							div3.css({left:0});
						}
					})
				},3000)
			})
		},
		pad:function(that){
			var n=0;
			var _this=this;
			var div=$('<div id="pad2-2"></div>');
			var img=$('<img src="img/ele/pad.png"/>');
			var div1=$('<div></div>');
			var div2=$('<div></div>');
			var div3=$('<div></div>');
			div1.append(div3);
			div.append(img);
			that.append(div);
			div.stop().animate({height:182},500,function(){
				div.append(div1);
				div.append(div2);
				_this.timer3=setInterval(function(){
					n++;
					div3.stop().animate({left:-106*n},1000,function(){
						if(n==2){
							n=0;
							div3.css({left:0});
						}
					})
				},3000)
			})
		},
		bg:function(that){
			var _this=this;
			var div=$('<div id="bg2-2"></div>');
			var img=$('<img src="img/ele/bg.png"/>');
			div.append(img);
			that.prepend(div);
			div.stop().animate({width:168,height:170},500)
		},
		clock:function(that){
			var n=0;
			var _this=this;
			var div=$('<canvas id="clock2-2-1" width="96px" height="96px"></canvas>');
			var div2=$('<div id="clock2-2-3"></div>');
			that.prepend(div2);
			that.prepend(div);
			var oGC = div[0].getContext('2d');
			oGC.strokeStyle='#ce5e64';
			oGC.lineWidth=6;
			this.timer=setInterval(function(){
				n+=4;
				if(n>360){
					clearInterval(_this.timer);
				}
				oGC.beginPath();
				oGC.arc(48,48,45,0,n*Math.PI/180,false);
				oGC.stroke();
				oGC.closePath();
			},16)
			setTimeout(function(){
				div2[0].style.transform='rotate(360deg)';
			},16)
		}
	}
	
	function str(that){
		this.ban(that);
		this.timer=null;
		this.timer1=null;
		this.num=0;
	}
	str.prototype={
		constructor:str,
		ban:function(that){
			that.html('');
			var _this=this;
			var div=$('<div id="ban2-3"></div>');
			var img=$('<img src="img/str/ban.png"/>');
			div.append(img);
			that.append(div);
			div.stop().animate({height:278,bottom:200},500,function(){
				div.stop().animate({bottom:43},500,function(){
					_this.wu(that);
					_this.bg(that);
					_this.cav(that);	
				})
			})
		},
		wu:function(that){
			var div1=$('<div id="wu2-3-1"></div>');
			var div2=$('<div id="wu2-3-2"></div>');
			that.append(div1);
			that.append(div2);
			div1.animate({bottom:121},500)
			div2.animate({bottom:121},500)
		},
		bg:function(that){
			var div1=$('<div id="bg2-3-1"></div>');
			var div2=$('<div id="bg2-3-2"></div>');
			var div3=$('<div id="bg2-3-3"></div>');
			var img1=$('<img src="img/str/bgs.png"/>');
			var img2=$('<img src="img/str/bgy.png"/>');
			var img3=$('<img src="img/str/bgz.png"/>');
			div1.append(img1);
			div2.append(img2);
			div3.append(img3);
			that.prepend(div1);
			that.prepend(div2);
			that.prepend(div3);
			div1.animate({width:224,height:149},500)
			div2.animate({width:74,height:156},500)
			div3.animate({width:74,height:75},500)
		},
		cav:function(that){
			var _this=this;
			var n=0;
			var div=$('<div id="cav2-3"></div>');
			var div1=$('<canvas width="224px" height="124px"></canvas>');
			div.append(div1);
			that.append(div);
			var oGC = div1[0].getContext('2d');
			oGC.lineWidth=4;
			//圆
			function circle(){
				_this.timer=setInterval(function(){
					n+=4;
					if(n>360){
						clearInterval(_this.timer);
						n=0;
					}
					oGC.beginPath();
					oGC.strokeStyle='#715aa9';
					oGC.arc(14,110,12,0,n*Math.PI/180,false);
					oGC.stroke();
					oGC.closePath();
					
					oGC.beginPath();
					oGC.strokeStyle='#de4c3b';
					oGC.arc(151,72,12,0,n*Math.PI/180,false);
					oGC.stroke();
					oGC.closePath();
					
				},16)
			}
			circle()
			function line(a,b,c,d,e){
				oGC.beginPath();
				oGC.strokeStyle='#'+a;
				oGC.moveTo(b,c);
				oGC.lineTo(d,e);
				oGC.stroke();
				oGC.closePath();
				
			}
			//直线
			function huaxian(x){
				if(_this.num<arr.length){
					var num1=0;
					var num2=0;
					var i=_this.num;
					var a=arr[i][0];
					var b=arr[i][1];
					var c=arr[i][2];
					var d=arr[i][3];
					var e=arr[i][4];
					_this.timer1=setInterval(function(){
						if(!that.children().length){
							clearInterval(_this.timer);
							clearInterval(_this.timer1);
							return;
						}
						if(b>d){
							num1--;
						}else if(b<d){
							num1++;
						}
						if(c>e){
							num2--;
						}else if(c<e){
							num2++;
						}
						line(a,b,c,b+num1,c+num2)
						if(b+num1==d&&c+num2==e){
							clearInterval(_this.timer1)
							_this.num++;
							huaxian(_this.num)
						}
					},16)
				}else{
					_this.num=0;
					setTimeout(function(){
						oGC.clearRect(0,0,div1[0].width,div1[0].height);
						setTimeout(function(){
							huaxian(_this.num);
							circle();
						},2000)
					},2000)
				}
			}
			var arr=[['fff',14,96,14,6],['fff',15,4,4,15],['fff',13,4,24,15],['fff',47,84,73,58],['fff',47,58,73,84],['fff',90,84,116,58],['fff',90,58,116,84],['008ff6',104,45,104,22],['008ff6',105,20,94,31],['008ff6',103,20,114,31],['ecab18',222,77,195,104],['ecab18',195,77,222,104],['fff',150,98,150,121],['fff',151,122,140,111],['fff',149,122,160,111],['fff',213,62,213,55],['fff',213,45,213,35],['fff',213,25,213,13],['fff',213,15,203,15],['fff',193,15,177,15],['fff',167,15,155,15],['fff',154,16,165,5],['fff',154,14,165,25]];
			huaxian(_this.num);
		}
	}
	
	function test(that){
		this.timer1=null;
		this.timer2=null;
		this.timer3=null;
		this.timer4=null;
		this.timer5=null;
		this.timer6=null;
		this.x1=0;
		this.x2=0;
		this.door(that);
		this.floor(that);
		this.stool(that);
		this.bottle(that);
		this.cup(that);
		this.fire(that);
		this.bubble1(that);
	}
	test.prototype={
		constructor :test,
		door:function(that){
			that.html('');
			var html=$('<div id="door"></div>');
			that.append(html);
			html.animate({
				height:164
			},600)
		},
		//地面
		floor:function(that){
			var html=$('<div id="floor"></div>');
			that.append(html);
			html.animate({
				width:404,
				left:48
			})
		},
		stool:function(that){
			var html=$('<div id="stool"></div>');
			that.append(html);
			html.animate({
				bottom:90,
				left:75
			},400)
			html[0].style.transform='rotate(0deg)';
		},
		bottle:function(that){
			var _this=this;
			var html=$('<div id="bottle"></div>');
			that.append(html);
			html.animate({
				bottom:140,
				left:91
			},600,function(){
				setTimeout(function(){//我明明是在瓶子运动完的时候才让水出来的，为什么瓶子还没运动完水就出来了
					_this.blue(that)
				},400)
			})
			html[0].style.transform='rotate(0deg)';
		},
		cup:function(that){
			var _this=this;
			var html=$('<div id="cup"></div>');
			that.append(html);
			html.animate({
				height:102
			},600,function(){
				_this.red(that)
			})
		},
		red:function(that){
			var _this=this
			var html=$('<div id="red"></div>');
			var div1=$('<div></div>');
			var div2=$('<div></div>');
			html.append(div1);
			html.append(div2);
			that.append(html);
			html.animate({
				height:29
			},600);
			clearInterval(this.timer1)
			this.timer1=setInterval(function(){
				if(!that.children().length){
					clearInterval(_this.timer1);
					clearInterval(_this.timer2);
					clearInterval(_this.timer3);
					clearInterval(_this.timer4);
					clearInterval(_this.timer5);
					clearInterval(_this.timer6);
					return;
				}
				_this.x1++;
				div1[0].style['background-position']=_this.x1+'px'
			},32)
		},
		blue:function(that){
			var _this=this;
			var html=$('<div id="blue"></div>');
			var div1=$('<div></div>');
			var div2=$('<div></div>');
			var div3=$('<div id="div3"></div>');
			html.append(div1);
			html.append(div2);
			that.append(html);
			that.append(div3);
			html.animate({
				height:90
			},600,function(){
				_this.tube(that);
				_this.bubble(that);
			});
			clearInterval(this.timer2)
			this.timer2=setInterval(function(){
				_this.x2++;
				div1[0].style['background-position']=_this.x2+'px'
			},16)
		},
		fire:function(that){
			var _this=this;
			var html=$('<div id="fire"></div>');
			var div1=$('<div></div>');
			var div2=$('<div></div>');
			var div3=$('<img src="img/test/fire.png"/>');
			html.append(div1);
			html.append(div2);
			html.append(div3);
			that.append(html);
			html.animate({
				height:40
			},600,function(){
				div3.animate({height:26},400,function(){
					div3.animate({
						height:30
					},150,function(){
						div3.animate({
							height:26
						},150)
					})
					clearInterval(_this.timer3);
					_this.timer3=setInterval(function(){
						div3.animate({
							height:30
						},150,function(){
							div3.animate({
								height:26
							},150)
						})
					},300)
				})
			});
		},
		tube:function(that){
			var _this=this;
			var html=$('<div id="tube"></div>');
			that.append(html);
			html.animate({
				height:222
			},200,function(){
				html.animate({width:203},200,function(){
					_this.drop(that)
				})
			});
		},
		drop:function(that){
			var _this=this;
			var html=$('<img id="drop" src="img/test/drop1.png"/>');
			that.append(html);
			html.animate({
				width:14,
				height:22,
				bottom:123
			},300,'swing',function(){
				html.css({width:0,height:0,bottom:254})
			});
			clearInterval(_this.timer5)
			_this.timer5=setInterval(function(){
				html.animate({
				width:14,
				height:22,
				bottom:120
				},800,function(){
					html.css({width:0,height:0,bottom:254})
				});
			},800)
		},
		bubble:function(that){
			var _this=this;
			var html=$('<div id="bubble"></div>');
			var div1=$('<div></div>');
			var div2=$('<div></div>');
			var div3=$('<div></div>');
			html.append(div1);
			html.append(div2);
			html.append(div3);
			that.append(html);
			div1.animate({
				width:0,
				height:0,
				bottom:50
			},1200,function(){
				div1.css({width:26,height:26,bottom:10})
			});
			div2.animate({
				width:0,
				height:0,
				bottom:70
			},1200,function(){
				div2.css({width:20,height:20,bottom:15})
			});
			div3.animate({
				width:0,
				height:0,
				bottom:70
			},1200,function(){
				div3.css({width:20,height:20,bottom:15})
			});
			this.timer4=setInterval(function(){
				div1.animate({
				width:0,
				height:0,
				left:43,
				bottom:50
				},1200,function(){
						/*div1.css({width:26,height:26,left:30,bottom:10})*/
					div1.css({bottom:5})
					div1.animate({width:26,height:26,left:30,bottom:5},400)
				});
				div2.animate({
					width:0,
					height:0,
					left:10,
					bottom:70
				},1200,function(){
						/*div2.css({width:20,height:20,left:0,bottom:15})*/
					div2.css({bottom:10});
					div2.animate({width:20,height:20,left:0,bottom:15},400)
					
				});
				div3.animate({
					width:0,
					height:0,
					left:70,
					bottom:70
				},1200,function(){
						/*div3.css({width:20,height:20,left:70,bottom:15})*/
					div3.css({bottom:10})
					div3.animate({width:20,height:20,left:70,bottom:15},400)
				});
			},1700)
		},
		bubble1:function(that){
			var _this=this;
			var html=$('<div id="bubble1"></div>');
			var div1=$('<div></div>');
			var div2=$('<div></div>');
			var div3=$('<img src="img/test/bubble.png"/>');
			html.append(div1);
			html.append(div2);
			html.append(div3);
			that.append(html);
			this.timer6=setInterval(function(){
				div1.animate({width:0,height:0,left:109,bottom:109},800,function(){
					setTimeout(function(){
						div1.animate({width:18,'height':18,left:100,bottom:100},800)
					},200)
				})
				div2.animate({width:0,'height':0,borderWidth:0,left:28,bottom:68},800,function(){
					setTimeout(function(){
						div2.animate({width:12,'height':12,borderWidth:4,left:20,bottom:60},800)
					},200)
				})
				div3.animate({width:0,height:0,left:110,bottom:210},800,function(){
					setTimeout(function(){
						div3.animate({width:20,'height':19,left:100,bottom:200},800)
					},200)
				})
			},2000)
		}
	}
	
	function earth(that){
		this.star(that);
		this.bg(that);
		this.earth1(that);
		this.num=0;
		this.timer1=null;
		this.timer2=null;
		this.timer3=null
	}
	earth.prototype={
		constructor:earth,
		//背景的星星
		star:function(that){
			//that.html('');
			var _this=this;
			var html=$('<img id="star3-3" src="img/earth/star.png"/>');
			that.append(html);
			html.animate({width:378,height:412,left:61,top:44},1000,function(){
				html.animate({opacity:0.3},500,function(){
					html.animate({opacity:1},500)
				});
				_this.timer1=setInterval(function(){
					html.animate({opacity:0.3},500,function(){
						html.animate({opacity:1},500)
					})
				},1100)
			})
		},
		//背景的阴影面
		bg:function(that){
			var html=$('<img id="bg3-3" src="img/earth/bg1.png"/>');
			that.append(html);
			html.animate({width:405,height:386,left:48,top:57},1000)
		},
		//地球
		earth1:function(that){
			var _this=this
			this.html1=$('<div id="earth3-3"></div>');
			var img=$('<img src="img/earth/earth.png"/>');
			this.html1.append(img);
			that.append(this.html1);
			this.html1.animate({width:220,height:234,left:140,top:133},1000,function(){
				_this.html1.animate({top:135},700,function(){
					_this.flag(that);
					_this.html1.animate({top:131},700);
				});
				_this.timer2=setInterval(function(){
					_this.html1.animate({top:135},700,function(){
						_this.html1.animate({top:131},700);
					})
				},1500)
			})
		},
		//飞机
		plane:function(that){
			var _this=this;
			var html=$('<div id="plane3-3"></div>');
			var div1=$('<div></div>');
			var div2=$('<div></div>');
			var div3=$('<div></div>');
			var div4=$('<div></div>');
			var div5=$('<div></div>');
			var div6=$('<div></div>');
			div1.append(div4);
			div2.append(div5);
			div3.append(div6);
			html.append(div1);
			html.append(div2);
			html.append(div3);
			that.append(html);
			div4.animate({width:0});
			div5.animate({width:0});
			div6.animate({width:0},function(){
				_this.timer3=setInterval(function(){
					if(!that.children().length){
						clearInterval(_this.timer1);
						clearInterval(_this.timer2);
						clearInterval(_this.timer3);
						return;
					}
					_this.num++;
					html.css('transform',"rotate("+_this.num+"deg)")
				},32)
			});
		},
		//旗
		flag:function(that){
			var _this=this;
			var div1=$('<div></div>');
			var div2=$('<div></div>');
			var div3=$('<div></div>');
			this.html1.append(div1);
			this.html1.append(div2);
			this.html1.append(div3);
			setTimeout(function(){
				div1[0].style.transform='rotate(0deg)';
				div2[0].style.transform='rotate(0deg)';
				div3[0].style.transform='rotate(0deg)';
			},16);
			_this.plane(that);
		}
	}
	
	function computer(that){
		this.timer1=null;
		this.timer2=null;
		this.floor(that);
	}
	computer.prototype={
		constructor:computer,
		floor:function(that){
			var _this=this;
			var div=$('<div id="floor4-1"></div>');
			var div1=$('<div></div>');
			var div2=$('<div></div>');
			div.append(div1);
			div.append(div2)
			that.append(div);
			div1.animate({width:418,left:18},500);
			div2.animate({width:454,left:0},500);
			setTimeout(function(){
				div.animate({bottom:128},500);
				_this.foot(that);
				_this.bg(that);
			},600)
		},
		foot:function(that){
			var _this=this;
			var div=$('<div id="foot4-1"></div>');
			var div1=$('<div></div>');
			var div2=$('<div></div>');
			div.append(div1);
			div.append(div2)
			that.append(div);
			div.animate({height:52},500,function(){
				_this.scr(that);
			});
		},
		scr:function(that){
			var _this=this;
			var div=$('<div id="scr4-1"></div>');
			var div1=$('<div id="brace4-1"></div>');
			var div2=$('<div></div>');
			var div3=$('<div></div>');
			var div4=$('<div></div>');
			var div5=$('<div></div>');
			var div6=$('<div></div>');
			var div7=$('<div></div>');
			var div8=$('<div></div>');
			var img=$('<img src="img/computer/comp1.png"/>');
			that.append(div);
			that.append(div1);
			div5.append(div6);
			div5.append(div7);
			div5.append(div8);
			div4.append(div5);
			this.timer2=setInterval(function(){
				if(!that.children().length){
					clearInterval(_this.timer1)
					clearInterval(_this.timer2)
				}
			},16)
			div.animate({width:114,left:243},500,function(){
				div.append(img);
				div.animate({width:234,height:155,bottom:200,left:182},500,function(){
					div.append(div2);
					div.append(div4);
					div.append(div3);
					div2.animate({height:105},500,function(){
						div5.animate({left:0},1000,function(){
							div8.animate({width:30})
						});
						_this.timer1=setInterval(function(){
							_this.div2[0].style.transform='rotate(-30deg)';
							setTimeout(function(){
								_this.div2[0].style.transform='rotate(0deg)';	
							},250)
							div5.animate({left:-178},1000,function(){
								div8.css({width:0})
								div5.css({left:0})
								div8.animate({width:30},500)
							})
						},3000)
					})
				})
				div1.animate({height:30},500);
			})
		},
		bg:function(that){
			var _this=this;
			var div=$('<div id="comgb4-1"></div>');
			var img=$('<img src="img/computer/combg.png"/>');
			this.div1=$('<div></div>');
			this.div2=$('<div></div>');
			div.append(img);
			div.append(this.div1);
			div.append(this.div2);
			that.prepend(div);
			div.animate({width:529,left:35},1000,function(){
				div.animate({height:317},1000,function(){
					_this.div2[0].style.height=35+'px';
					setTimeout(function(){
						_this.div2[0].style.transform='rotate(-30deg)';
						setTimeout(function(){
							_this.div2[0].style.transform='rotate(0deg)';	
						},250)
					},250)
					_this.div1.animate({height:87},500,function(){
						_this.div1.animate({left:96},500)
					})
				})
			});
		}
	}
	
	function bike(that){
		this.timer1=null;
		this.timer2=null;
		this.sky(that);
		this.bike(that);
	}
	bike.prototype={
		constructor:bike,
		sky:function(that){
			var div=$('<div id="sky4-2"></div>');
			var img=$('<img src="img/hardcandy/sky.png"/>');
			div.append(img);
			that.append(div);
			div.animate({width:411,height:336,left:21,bottom:118},500);
		},
		bike:function(that){
			this.div=$('<div id="bike4-2"></div>');
			var img=$('<img src="img/hardcandy/bike.png"/>');
			this.div.append(img);
			this.pedal(that);
			that.append(this.div);
			this.div.animate({width:370,height:318},500);
		},
		pedal:function(that){
			var _this=this;
			var n=0;
			var div=$('<div></div>');
			var div1=$('<div></div>');
			this.div.append(div);
			this.div.append(div1);
			var a=Math.sqrt((291-258-15)*(291-258-15)+(125-57-15)*(125-57-15));
			var x=Math.atan((125-57-15)/(291-258-15));
			this.timer1=setInterval(function(){
				if(!that.children().length){
					clearInterval(_this.timer1)
					clearInterval(_this.timer2)
					return;
				}
				n-=6;
				var y=-n*Math.PI/180+x;
				//console.log(a*Math.cos(y),a*Math.sin(y),x,a)
				div1[0].style.bottom=57+15+a*Math.sin(y)+'px'
				div1[0].style.left=258+15+a*Math.cos(y)+'px'
				div[0].style.transform='rotate('+n+'deg)';
				
			},16)
		}
	}
	
	function ma(that){
		this.map1(that);
		this.timer1=null;
		this.timer2=null;
	}
	ma.prototype={
		constructor:ma,
		map1:function(that){
			var _this=this;
			var div=$('<div id="map4-3"></div>');
			var img=$('<img src="img/tri/map2.png"/>');
			var arr=[
			{left:65,bottom:151,background:'url(img/tri/po33.png) no-repeat'},
			{left:121,bottom:192,background:'url(img/tri/po22.png) no-repeat'},
			{left:129,bottom:99,background:'url(img/tri/po44.png) no-repeat'},
			{left:192,bottom:127,background:'url(img/tri/po22.png) no-repeat'},
			{left:231,bottom:71,background:'url(img/tri/po33.png) no-repeat'},
			{left:251,bottom:195,background:'url(img/tri/po11.png) no-repeat'},
			{left:270,bottom:135,background:'url(img/tri/po44.png) no-repeat'},
			{left:331,bottom:53,background:'url(img/tri/po33.png) no-repeat'},
			{left:334,bottom:140,background:'url(img/tri/po44.png) no-repeat'},
			{left:340,bottom:213,background:'url(img/tri/po22.png) no-repeat'}]
			that.append(div);
			for(var i=0;i<10;i++){
				var div1=$('<div class="po"></div>');
				div.append(div1);
				//console.log(arr[i].left,arr[i].bottom,arr[i].background)
				div1.css({left:arr[i].left,bottom:arr[i].bottom,background:arr[i].background})
			}
			this.timer1=setInterval(function(){
				if(!that.children().length){
					clearInterval(_this.timer1)
					clearInterval(_this.timer2)
					return;
				}
			},16)
			div.animate({left:50},500,function(){
				div.append(img);
				console.time(1)
				div.animate({width:414},500,function(){
					_this.mbg(that);
					
					$('.po').each(function(){
						this.style.transform='rotate(0deg)';
					});
					setTimeout(function(){
						$('.po').each(function(){
							this.style.transform='rotate(90deg)';
						})
					},1000)
					setTimeout(function(){
						$('.po').each(function(){
							this.style.transform='rotate(0deg)';
						})
					},2000)
					setTimeout(function(){
						$('.po').each(function(){
							this.style.transform='rotate(-90deg)';
						})
					},3000)
					_this.timer2=setInterval(function(){
						$('.po').each(function(){
							//this.style.height='21px'
							this.style.transform='rotate(0deg)';
						});
						setTimeout(function(){
							$('.po').each(function(){
								this.style.transform='rotate(90deg)';
							})
						},1000)
						setTimeout(function(){
							$('.po').each(function(){
								this.style.transform='rotate(0deg)';
							})
						},2000)
						setTimeout(function(){
							$('.po').each(function(){
								this.style.transform='rotate(-90deg)';
							})
						},3000)
					},4000)
				})
			});
		},
		mbg:function(that){
			var div1=$('<div id="mbg4-3-1"></div>');
			var div2=$('<div id="mbg4-3-2"></div>');
			var div3=$('<div id="mbg4-3-3"></div>');
			that.prepend(div2);
			that.prepend(div3);
			that.prepend(div1);
			div1.animate({width:203,height:237},500,function(){
				div2.animate({width:235,height:264},500);
			});
			div3.animate({width:232,height:263},500);
		},
		po:function(that){
			var div1=$('<div id="mbg4-3-1"></div>');
			var div2=$('<div id="mbg4-3-2"></div>');
			var div3=$('<div id="mbg4-3-3"></div>');
			that.prepend(div2);
			that.prepend(div3);
			that.prepend(div1);
			div1.animate({width:203,height:237},500,function(){
				div2.animate({width:235,height:264},500);
			});
			div3.animate({width:232,height:263},500);
		}
	}
	
	function print(that){
		this.print1(that);
		this.num=0;
		this.timer1=null;
		this.timer2=null;
	}
	print.prototype={
		constructor:print,
		print1:function(that){
			var bo1=91;
			var le1=56;
			var bo2=68;
			var le2=40;
			var bo3=46;
			var le3=56;
			var _this=this;
			var div=$('<div id="print5-1"></div>');
			var div1=$('<div></div>');
			var img1=$('<img src="img/print/print1-1.png"/>');
			var div2=$('<div></div>');
			var img2=$('<img src="img/print/print1-2.png"/>');
			div1.append(img1);
			div.append(div1);
			div2.append(img2);
			div.append(div2);
			that.append(div);
			div.animate({bottom:260},200,function(){
				div.animate({bottom:52},500);
			});
			div1.animate({width:355,left:0},600,function(){
				//div.animate({height:187},100);
				div.css({height:187});
				_this.paper(that);
				_this.pbg(that);
			});
			for(var i=0;i<8;i++){
				var div3=$('<div class="dot5-1"></div>');
				div3.css({left:le1,bottom:bo1})
				div2.append(div3);
				le1+=29;
			};
			for(var i=0;i<9;i++){
				var div3=$('<div class="dot5-1"></div>');
				div3.css({left:le2,bottom:bo2})
				div2.append(div3);
				le2+=29;
			};
			for(var i=0;i<8;i++){
				var div3=$('<div class="dot5-1"></div>');
				div3.css({left:le3,bottom:bo3})
				div2.append(div3);
				le3+=29;
			};
			for(var i=0;i<2;i++){
				var div3=$('<div class="dot5-1"></div>');
				div3.css({left:40+i*233,bottom:23})
				div2.append(div3);
			};
			var div4=$('<div id="dot5-2"></div>');
			div2.append(div4);
		},
		paper:function(that){
			var _this=this;
			var div1=$('<div id="paper5-1"></div>');
			var div2=$('<div></div>');
			var div3=$('<div></div>');
			for(var i=0;i<3;i++){
				var div4=$('<div></div>');
				div3.append(div4);
			}
			div1.append(div2);
			div1.append(div3);
			that.prepend(div1);
			div3.animate({top:100},500);
			div2.animate({top:16},500);
			setTimeout(function(){
				var x=Math.round(Math.random()*27)+1;
				_this.write();
				_this.sport(x);
			},1000)
			this.timer1=setInterval(function(){
				var x=Math.round(Math.random()*27)+1;
				_this.write();
				_this.sport(x);
			},8000)
			this.timer2=setInterval(function(){
				if(!that.children().length){
					clearInterval(_this.timer1)
					clearInterval(_this.timer2)
				}
			},16);
		},
		pbg:function(that){
			var div1=$('<div id="pbg5-1-1"></div>');
			var img1=$('<img src="img/print/pbg1.png"/>');
			var div2=$('<div id="pbg5-1-2"></div>');
			var img2=$('<img src="img/print/pbg2.png"/>');
			div1.prepend(img1);
			div2.prepend(img2);
			that.prepend(div2);
			that.prepend(div1);
			div1.animate({width:162,height:154,left:37,bottom:295},500);
			div2.animate({width:199,height:165},500);
		},
		write:function(){
			var div1=$('#paper5-1');
			var div2=$('#paper5-1').children().eq(0)
			var div3=$('#paper5-1').children().eq(1)
			//先把打印的纸移到最右边；
			div1.animate({left:175},700,function(){
				//在打印的纸向左移动的时候同时写入东西(第一次开始)
				div3.children().eq(0).animate({width:167},700);
				div1.animate({left:122},700,function(){
					//当打印的纸移到最左边的时候，开始 把打印的纸往上移且灰色的背景纸往下移且打印的纸向右移动；
					div3.animate({top:86},700);
					div2.animate({top:30},700);
					div1.animate({left:175},700,function(){
						//在打印的纸向左移动的时候同时写入东西(第二次开始)
						div3.children().eq(1).animate({width:167},700);
						div1.animate({left:122},700,function(){
							//当打印的纸移到最左边的时候，开始 把打印的纸往上移且灰色的背景纸往下移且打印的纸向右移动；
							div3.animate({top:72},700);
							div2.animate({top:44},700);
							div1.animate({left:175},700,function(){
								//在打印的纸向左移动的时候同时写入东西(最后一次)
								div3.children().eq(2).animate({width:84},700);
								div1.animate({left:144},700,function(){
									//在打印的纸向上移出(最后一次)
									//灰色的背景纸向下移出
									div3.animate({top:-102},700,function(){
										//打印的纸从下面出现
										div3.children().each(function(){
											$(this).css({width:0})
										})
										div3.css({top:193});
										div3.animate({top:100},700)
									});
									div2.animate({top:193},350,function(){
										//灰色的背景纸从上面出现
										div2.css({top:-118});
										div2.animate({top:16},700)
									});
								})
							})
						})
					})
				})
			})
		},
		sport:function(x){
			var _this=this;
			var div2=$('#print5-1').children().eq(1)
			if(this.num>10){
				this.num=0;
				return;
			}
			var y=div2.height()-div2.children().eq(x).position().top-div2.children().eq(x).height();
			this.num++;
			div2.children().eq(x).animate({bottom:y-7},200,function(){
				//console.log(y)
				div2.children().eq(x).animate({bottom:y},200,function(){
					x=Math.round(Math.random()*27)+1
					_this.sport(x)
				})
			})
		}
	}
	$.fn.extend({
		re:function(){
			new read(this)
		},
		el:function(){
			new electronic(this)
		},
		st:function(){
			new str(this)
		},
		te:function(){
			new test(this);
		},
		ea:function(){
			new earth(this);
		},
		computer:function(){
			new computer(this)
		},
		bike:function(){
			new bike(this)
		},
		ma:function(){
			new ma(this);
		},
		print:function(){
			new print(this);
		}
	})
})
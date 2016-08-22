window.onload=function(){
			var ph=document.getElementById('photo');
			var num=0;
			for(var j=0;j<2;j++){
				for(var i=1;i<26;i++){
					var im=document.createElement('img')
					im.src='img/'+i+'.jpg'
					ph.appendChild(im);
				}
			}
			var btn=document.querySelector('.btn');
			var imgs=document.querySelectorAll('img');
			var onOff=true;
			btn.onclick=function(){
				if(onOff){
					onOff=false;
					num=0;
					for(var i=0;i<imgs.length;i++){
						change(i)
					}
				}
			}
			function change(i){
				imgs[i].timer=null
				clearTimeout(imgs[i].timer);
				imgs[i].style.transition='1s';
				imgs[i].onoff=true;
				setTimeout(function(){
					imgs[i].style.transform='scale(0)';
					imgs[i].addEventListener('transitionend',function(){
						if(this.onoff){
							this.onoff=false;
							this.style.transform='scale(1)';
							this.style.opacity=0;
							imgs[i].style.transition='';
							imgs[i].style.transform='rotateY(0deg) translatez(-'+500*Math.random()+'px)';
							setTimeout(function(){
								num++;
								console.log(num)
								imgs[i].style.transition='1s';
								imgs[i].style.opacity=1;
								imgs[i].style.transform='rotateY(-360deg) translatez(0px)';
								if(num==50){
									onOff=true;
								}
							},1000)
						}
					})
				},Math.random()*700)
			}
		}
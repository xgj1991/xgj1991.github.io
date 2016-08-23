window.onload=function(){
	var imgWrap=document.getElementById("imgWrap");
	var imgs=document.querySelectorAll("img");
	var btn=document.querySelector(".btn");
	var on=true;
	btn.onclick=function(){
		if(!on){
			return;
		}
		on=false;
		var num=0;
		var num1=0;
		for(var i=0;i<imgs.length;i++){
			(function(i){
				setTimeout(function(){
					motion(imgs[i],'20ms',function(){
						this.style.transform='scale(0)'
					},function(){
						motion(this,'1s',function(){
							this.style.transform='scale(1)'
							this.style.opacity=0;
						},function(){
							num++;
							if(num==imgs.length){
								ro();
							}
						})
					})
				},Math.random()*1000)
			})(i)
		}
		function ro(){
			for(var i=0;i<imgs.length;i++){
				imgs[i].style.transition='';
				imgs[i].style.transform='rotateY(0deg) translateZ(-'+Math.random()*500+'px)';
				(function(i){
					setTimeout(function(){
						motion(imgs[i],'1s',function(){
							this.style.transform='rotateY(-360deg) translateZ(0px)';
							this.style.opacity=1;
						},function(){
							num1++;
							if(num1==imgs.length){
								on=true;
							}
						})
					},Math.random()*1000)
				})(i)
			}
		}
	}
	function motion(obj,time,fn,callBack){
		obj.style.transition=time;
		fn.call(obj);
		var called=false;
		obj.addEventListener('transitionend',function(){
			if(!called){
				callBack&&callBack.call(obj);
				called=true;
			}
		})
	}
}

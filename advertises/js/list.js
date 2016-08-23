window.onload=function(){
	var sea=window.location.search.substring(3);	//地址栏查询信息 （问号到#号之间的所有内容,包含问号，不包含#）
	var has=window.location.hash.substring(2);	//锚点信息（#号后面的所有内容,包含#）
	var left=document.querySelector('.left');
	var ul1=left.querySelector('ul');
	sea=sea||'sh';
	has=has||1;
	var right=document.querySelector('.right')
	var n=0;
	for(var i=0;i<aData.list.length;i++){
		if(sea==aData.list[i].lx){
			n=i;
		}
		ul1.innerHTML+='<li><a href="list.html?s='+aData.list[i].lx+'">'+aData.list[i].text+'</a></li>'
	}
	ul1.children[n].className='focus';
	title=document.createElement('div');
	title.className='title';
	title.innerHTML=aData.list[n].text;
	right.appendChild(title)
	info=document.createElement('div');
	info.className='info';
	right.appendChild(info);
	pages=document.createElement('div');
	pages.className='pages';
	right.appendChild(pages);
	var page=Math.ceil(aData[sea].text.length/2);
	for(var i=1;i<page+1;i++){
		pages.innerHTML+='<a href="list.html?s='+sea+'#='+i+'">'+i+'</a>'
	}
	var as=pages.querySelectorAll('a');
	pre=document.createElement('a');
	next=document.createElement('a');
	pre.className='pre';
	next.className='next';
	pre.innerHTML='<';
	next.innerHTML='>';
	pages.insertBefore(pre,pages.children[0]);
	pages.appendChild(next);
	pre.onclick=function(){
		has--;
		if(!has){
			has=1;
		}
		fn3(has);
		pre.href='list.html?s='+sea+'#='+has;
		fn4()
	}
	next.onclick=function(){
		has++;
		if(has==as.length+1){
			has=as.length;
		}
		fn3(has);
		next.href='list.html?s='+sea+'#='+has;
		fn4()
	}
	fn4();
	fn3(has);
	for(var i=0;i<as.length;i++){
		as[i].style.left=(700-40*as.length-1)/2+40*i+'px';
		as[i].onclick=function(){
			has=this.innerHTML;
			fn3(has);
			fn4();
		}
	}
	function fn4(){
		var pg=pages.querySelectorAll('a');
		for(var i=1;i<page+1;i++){
			pg[i].className='';
			if(i==has){
				pg[i].className='pg';
			}
		}
	}
	function fn3(has){
		info.innerHTML='';
		for(var i=(has-1)*2;i<has*2;i++){
			if(aData[sea].text[i]){
				info.innerHTML+='<p class="zp"><span><a href="content.html?s='+sea+'#='+i+'">★ 职位需求：'+aData[sea].text[i].zw+'</a></span><span>需求人数：'+aData[sea].text[i].rs+'名</span><span class="date">'+fn1(aData[sea].text[i].sj)+'</span></p><p class="yq">'+fn2(aData[sea].text[i].info[0].l)+'[<a href="content.html?s='+sea+'#='+i+'">查看详情</a>]</p>'
			}
		
		}
	}
	
	function fn1(a){
		return a[0]+'年'+a[1]+'月'+a[2]+'日';
	}
	function fn2(b){
		var str='';
		for(var i=0;i<b.length;i++){
			str+=b[i];
		}
		return str;
	}
}
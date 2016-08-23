window.onload=function(){
	var sea=window.location.search.substring(3);	//地址栏查询信息 （问号到#号之间的所有内容,包含问号，不包含#）
	var has=window.location.hash.substring(2);	//锚点信息（#号后面的所有内容,包含#）
	has=has||0;
	sea=sea||'sh';
	
	//左侧
	var leftUl=document.querySelector(".left ul");
	for(var i=0;i<aData.list.length;i++){
		if(sea==aData.list[i].lx){
			var cl='focus';
		}else{
			var cl='';
		}
		leftUl.innerHTML += '<li class="'+cl+'"><a href="list.html?s='+aData.list[i].lx+'#='+1+'">' + aData.list[i].text + '</a></li>';
	}
	
	
	//右侧
	var info=document.querySelector(".info");	//右侧列表内容的父级
	var title=document.querySelector(".title");
	title.innerHTML=aData[sea].imgText;
	
	info.innerHTML='<h2>'+aData[sea].text[has].zw+'</h2>'+
        '<div>'+
          '<span class="l">招聘公司：'+aData[sea].text[has].gs+'</span>'+
          '<span>公司性质：'+aData[sea].text[has].xz+'</span>'+
          '<span class="l">职位性质：'+aData[sea].text[has].gz+'</span>'+
          '<span>工作地点：'+aData[sea].text[has].dd+'</span>'+
          '<span class="l">工作经验：'+aData[sea].text[has].jy+'</span>'+
          '<span>学历要求：'+aData[sea].text[has].xl+'</span>'+
          '<span class="l">招聘人数：'+aData[sea].text[has].rs+'人</span>'+
          '<span>薪资待遇：'+aData[sea].text[has].dy+'</span>'+
          '<span class="l">发布日期：'+aData.date(aData[sea].text[has].sj)+'</span>'+
          '<span>招聘类型：'+aData[sea].text[has].lx+'</span>'+
        '</div>'+
        '<div class="clear"></div>'+
        '<dl class="jbzz">'+
          '<dt>工作职责：</dt>'+
        '</dl>'+
        '<dl class="gwyq">'+
          '<dt>岗位要求：</dt>'+
        '</dl>'+
        '<p>有意者请投递简历至 liuyajuan@fulan.com.cn</p>';
        
    var jbzz=document.querySelector(".jbzz");
    var gwyq=document.querySelector(".gwyq");
    
    for(var i=0;i<aData[sea].text[has].info[0].l.length;i++){
    	jbzz.innerHTML+='<dd>'+aData[sea].text[has].info[0].l[i]+'</dd>'
    }
    
    for(var i=0;i<aData[sea].text[has].info[1].l.length;i++){
    	gwyq.innerHTML+='<dd>'+aData[sea].text[has].info[1].l[i]+'</dd>'
    }
    
        
};
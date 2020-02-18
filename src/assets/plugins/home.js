$(function() {
	jQuery("#menu_list").slide({
		type: "menu", // 鏁堟灉绫诲瀷锛岄拡瀵硅彍鍗�瀵艰埅鑰屽紩鍏ョ殑鍙傛暟锛堥粯璁lide锛�
		titCell: ".nLi", //榧犳爣瑙﹀彂瀵硅薄
		targetCell: ".sub", //titCell閲岄潰鍖呭惈鐨勮鏄剧ず/娑堝け鐨勫璞�
		effect: "slideDown", //targetCell涓嬫媺鏁堟灉
		delayTime: 300, //鏁堟灉鏃堕棿
		triggerTime: 0, //榧犳爣寤惰繜瑙﹀彂鏃堕棿锛堥粯璁�50锛�
		returnDefault: true //榧犳爣绉昏蛋鍚庤繑鍥為粯璁ょ姸鎬侊紝渚嬪榛樿棰戦亾鏄�棰勫憡鐗団�锛岄紶鏍囩Щ璧板悗浼氳繑鍥炩�棰勫憡鐗団�锛堥粯璁alse锛�
	});
	$('#menu_list').find('li a').mouseenter(function() {
		if($('.subNav').find('li').eq($(this).parents('li').index()).html() == ''){
			$('.subNav').removeClass('active');
			$('#menu_list').find('li').removeClass('active');
			$('.subNav').find('li').fadeOut();
		}else{
			$('.subNav').addClass('active');
			$(this).parents('li').addClass('active');
			$(this).parents('li').siblings().removeClass('active');
			$('.subNav').find('li').hide();
			$('.subNav').find('li').eq($(this).parents('li').index()).fadeIn();
		}
	});
	$('.subNav').mouseleave(function() {
		
		$('.subNav').removeClass('active');
		$('#menu_list').find('li').removeClass('active');
		$('.subNav').find('li').fadeOut();
	});
	jQuery(".fullSlide").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"fold",delayTime:2000, autoPlay:true, autoPage:true, trigger:"click" });	
	jQuery(".focusBox").slide({ titCell:".num li", mainCell:".pic",effect:"fold", autoPlay:true,trigger:"click",	
		//下面startFun代码用于控制文字上下切换
		startFun:function(i){		 
		jQuery(".focusBox .txt li").eq(i).animate({"bottom":0}).siblings().animate({"bottom":-36});	
		}});
	
	//我们的客户
	/*$(".A_Demo").PicCarousel({
		"width":1000,		
		"height":185,		
		"posterWidth":285,	
		"posterHeight":185,
		"scale":0.9,
		"autoPlay":true,
		"speed":1000
		});*/
	//左侧导航样式
	$('.menu').find('ul').find('.active').parent().prev().find('a').css('border','none');
	
	$(".mykehus li").each(function(){
		   $(this).on('mouseenter',function(e){
			   var e=e||window.event;
			   var angle=direct(e,this);
			   mouseEvent(angle,this,'in');
		   });
		   $(this).on('mouseleave',function(e){
			   var e=e||window.event;
			   var angle=direct(e,this);
			   mouseEvent(angle,this,'off');
		   });
	});
});



function direct(e,o){
	 var w=o.offsetWidth;
	 var h=o.offsetHeight;
	 var top= o.offsetTop;                    //包含滚动条滚动的部分
	 var left= o.offsetLeft;
	 var scrollTOP=document.body.scrollTop||document.documentElement.scrollTop;
	 var scrollLeft=document.body.scrollLeft||document.documentElement.scrollLeft;
	 var offTop=top-  scrollTOP;
	 var offLeft= left- scrollLeft;
	 var ex= (e.pageX-scrollLeft)|| e.clientX;
	 var ey=(e.pageY-scrollTOP)|| e.clientY;
	 var x=(ex-offLeft-w/2)*(w>h?(h/w):1);
	 var y=(ey-offTop-h/2)*(h>w?(w/h):1);

	 var angle=(Math.round((Math.atan2(y,x)*(180/Math.PI)+180)/90)+3)%4 ;//atan2返回的是弧度 atan2(y,x)
	 var directName=["上","右","下","左"];
	 return directName[angle];  //返回方向  0 1 2 3对应 上 右 下 左
}
function mouseEvent(angle,o,d){ //方向  元素  鼠标进入/离开
	   var w=o.offsetWidth;
	   var h=o.offsetHeight;

	   if(d=='in'){
		   switch(angle){
			   case '上':
				   $(o).find("p").css({left:0,top:-h+"px"}).stop(true).animate({left:0,top:0},300);
					setTimeout(function(){
						$(o).find("p a").css({left:'50%',top:-h+"px"}).stop(true).animate({left:'50%',top:'30px'},300);
					},50);
				   break;
			   case '右':
				   $(o).find("p").css({left:w+"px",top:0}).stop(true).animate({left:0,top:0},300);
				   setTimeout(function(){
					   $(o).find("p a").css({left:w+"px",top:'30px'}).stop(true).animate({left:'50%',top:'30px'},300);
				   },50);
				   break;
			   case '下':
				   $(o).find("p").css({left:0,top:h+"px"}).stop(true).animate({left:0,top:0},300);
				   setTimeout(function(){
					   $(o).find("p a").css({left:'50%',top:h+"px"}).stop(true).animate({left:'50%',top:'30px'},300);
				   },50);
				   break;
			   case '左':
				   $(o).find("p").css({left:-w+"px",top:0}).stop(true).animate({left:0,top:0},300);
				   setTimeout(function(){
					   $(o).find("p a").css({left:-w+"px",top:'30px'}).stop(true).animate({left:'50%',top:'30px'},300);
				   },50);
				   break;
		   }
	   }else if(d=='off'){
		   switch(angle){
			   case '上':
				   $(o).find("p a").stop(true).animate({left:'50%',top:-h+"px"},300);
				   setTimeout(function(){
					   $(o).find("p").stop(true).animate({left:0,top:-h+"px"},300);
				   },50);
				   break;
			   case '右':
				   $(o).find("p a").stop(true).animate({left:w+"px",top:'30px'},300);
				   setTimeout(function(){
					   $(o).find("p").stop(true).animate({left:w+"px",top:0},300);
				   },50);
				   break;
			   case '下':
				   $(o).find("p a").stop(true).animate({left:'50%',top:h+"px"},300);
				   setTimeout(function(){
					   $(o).find("p").stop(true).animate({left:0,top:h+"px"},300);
				   },50);
				   break;
			   case '左':
				   $(o).find("p a").stop(true).animate({left:-w+"px",top:'30px'},300);
				   setTimeout(function(){
					   $(o).find("p").stop(true).animate({left:-w+"px",top:0},300);
				   },50);
				   break;
		   }
	   }
}
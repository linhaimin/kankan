
$(function(){
	//轮播图小焦点图效果
	// var small_pic_li = document.getElementsByClassName('small-pic')[0].getElementsByTagName('li');
	// for (var i = 0; i < small_pic_li.length; i++) {		
	// 	(function(i){
	// 		var span = small_pic_li[i].getElementsByTagName('span')[0];
	// 		small_pic_li[i].addEventListener('mouseover',function(){			
	// 			span.style.display = 'block';
								
	// 		});
	// 		small_pic_li[i].addEventListener('mouseleave',function(){													
	// 			span.style.display = 'none';										
	// 		});
	// 	})(i);
	// }
	
	/*轮播图动画效果*/
	function focusShow(){
		function focus(){
			var length = $('.small-pic li').length;
			if (i == length) {
				i = 0;
			}
			$('.small-pic li').eq(i).siblings().find('span').removeClass('on');
			$('.small-pic li').eq(i).find('span').addClass('on');
			$('.carousel-bg li').eq(i).show().siblings().hide();
			i++;
		}
		var i = 1;
		var timer = setInterval(focus,3000);
		$('.small-pic li').mouseover(function(){
			clearInterval(timer);
			$(this).siblings().find('span').removeClass('on');
			$(this).find('span').addClass('on');
			$('.carousel-bg li').eq($(this).index()).show().siblings().hide();
			i = $(this).index() + 1;  //确保鼠标离开元素后动画效果从下一个元素开始
		});
		$('.small-pic li').mouseout(function(){
			timer = setInterval(focus,3000);			
		});
		$('.carousel-bg li').mouseover(function(){
			clearInterval(timer);
		}).mouseout(function(){
			timer = setInterval(focus,3000);
		});

	}
	focusShow();		
	
	/*电视剧区域小轮播图*/	
	function autoplay(list,pointer){				
		function play(){
			var length = list.length;
			if (i == length) {
				i = 0;
			}
			list.eq(i).fadeIn(1000).siblings().fadeOut();	//淡入淡出效果	
			// $('.carousel-list li').eq(i).addClass('active').siblings().removeClass('active');
			pointer.eq(i).addClass('active').siblings().removeClass('active');
			i++;
		}
		var i = 1;
		var timer = setInterval(play,5000);
		pointer.mouseover(function(){
			clearInterval(timer);
			$(this).addClass('active').siblings().removeClass('active');
			list.eq($(this).index()).fadeIn(1000).siblings().fadeOut();	
			// $('.carousel-list li').eq($(this).index()).addClass('active').siblings().removeClass('active');
			i = $(this).index() + 1;
		}).mouseout(function(){
			timer = setInterval(play,5000);
		});
		list.mouseover(function(){
			clearInterval(timer);
		}).mouseout(function(){
			timer = setInterval(play,5000);
		});
	}
	autoplay($('.carousel-list-1 li'),$('.pointer-1 i'));
	autoplay($('.carousel-list-2 li'),$('.pointer-2 i'));
	autoplay($('.carousel-list-3 li'),$('.pointer-3 i'));
	autoplay($('.carousel-list-4 li'),$('.pointer-4 i'));

	/*个人中心区域*/
	//头部导航切换效果
	$('.m-grzx .head-box li').mouseover(function(){
		$(this).find('a').addClass('current');
		$(this).siblings().find('a').removeClass('current');
		switch($(this).index()){
			case 0:
				$('.recommendList').show().siblings().hide();
				break;
			case 1:
				$('.historyList').show().siblings().hide();
				break;
			case 2:
				$('.favourList').show().siblings().hide();
				break;
			case 1:
		}
	});

	//滚动指示器
	$('.scroll-l').mouseover(function(){
		$(this).css("backgroundPosition","-65px -190px");
	}).mouseout(function(){
		$(this).css("backgroundPosition","0 -190px");
	});
	$('.scroll-r').mouseover(function(){
		$(this).css("backgroundPosition","-65px -256px");
	}).mouseout(function(){
		$(this).css("backgroundPosition","0 -256px");
	});
	
	var r = 0;
	$('.scroll-r').click(function(){
		var marginleft = parseInt($('.recommendList ul').css("margin-left")), length = 40;
		if ($('.scroll-l').css("display") == "none") {
			$('.scroll-l').show();
		}						
		var timer = setInterval(function(){
			if (marginleft==(-8400)) {
				$('.scroll-r').hide();
			}
			if (marginleft>(-1200)*r) {
				marginleft -= length;
				$('.recommendList ul').css("margin-left",(marginleft + 'px'));
			}
			else{
				clearInterval(timer);
			}
		},20);
		r++;
	});
	$('.scroll-l').click(function(){
		var marginleft = parseInt($('.recommendList ul').css("margin-left")), length = 40;
		if ($('.scroll-r').css("display") == "none") {
			$('.scroll-r').show();
		}					
		var timer = setInterval(function(){
			if (marginleft==0) {
				$('.scroll-l').hide();
			}
			if (marginleft<(-1200)*r) {
				marginleft += length;
				$('.recommendList ul').css("margin-left",(marginleft + 'px'));
			}
			else{
				clearInterval(timer);
			}
		},20);
		r--;
	});
})
// JavaScript Document
$(function(){
	"use strict";
	$(".navbar-default .navbar-toggle").on("click",function(){
		$(".navbar-right").css({
			"margin-top":0
		});
	$(".navbar-right i").css({
		float:"left"					
		});	
	});
	$(window).on("scroll",function(){
	var sc=$(window).scrollTop();
	console.log(sc);
    if(sc>=3348.888916015625){
		$(".top").fadeIn();
	}
		else{
			$(".top").fadeOut();
		}
		
	
	});
	$(".top").click(function(){
		$("html,body").animate({
			scrollTop:"0"
		},2000);
	});
	$("html").niceScroll(({cursorcolor:"#006fbe"}));
	
	
	$(window).load("click",function(){
		$(" #fountainTextG").delay(6000).fadeOut(1000,function(){
	$(this).parent().remove();
			$("body").css({
			overflow:"auto"
		
		});	
	 });
	
	});
});
$(document).ready(function(){
	$('.arrowL').click(function(){
		if ($(this).parent().attr("id") == "secondSpan") {
			$(this).parent().find(".arrowR").css({
				"right": "30%"
			});
		}else{		
			$(this).parent().find(".arrowR").css({
				"right": "calc(20px + 17%)"
			});
		}
			$(this).css({
				"left": "20px"
			});
			$(this).parent().css({
				"margin-left": '17%'
			});
	});
	$('.arrowR').click(function(){
		if ($(this).parent().attr("id") == "secondSpan") {
			$(this).parent().css({
				"margin-left": "-16%"
			});
			$(this).parent().find(".arrowL").css({
				"left": "30%"
			});
		}else{
			$(this).parent().css({
				"margin-left": 0
			});
			$(this).parent().find(".arrowL").css({
				"left": "18%"
			});
		}
			$(this).css({
				"right": "20px"
			});
	});
});
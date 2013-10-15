
$(document).ready(function(){
	
	$('#menu li a').each(function(i){
		
		$(this).mouseover(function(){
			$(this).nextAll('.nav-bg-hover').fadeTo("slow", 0);
			$(this).parent().animate({"top": "-=15px"}, "slow");
			$(this).nextAll('img').animate({"top": "+=30px", "opacity": 0.3}, "slow");
			$(this).animate({"color": 'white'}, "slow");
		});
		$(this).mouseout(function(){
			$(this).nextAll('.nav-bg-hover').fadeTo("slow", 1);
			$(this).parent().animate({"top": "+=15px"}, "slow");
			$(this).nextAll('img').animate({"top": "-=30px", "opacity": 1 }, "slow");			
			$(this).animate({"color": '#45211C'}, "slow");
		});
		
	});

	$('#menu2 li a').each(function(i){
		$(this).mouseover(function(){
			$(this).animate({"color": '#F88221'}, "slow");
		});
		$(this).mouseout(function(){
			$(this).animate({"color": '#45211C'}, "slow");
		});	
	});

});

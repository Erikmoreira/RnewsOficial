$(document).ready(function(){
	$('.galeria img').click(function(){
		$('.bg').animate({'opacity':'0.60'}, 500, 'linear');
		$('.bg, .lb').css('display','block');

		var big = $(this).attr('src');

		$('.lb img').attr('src', big);
		$('.lb img').animate({'opacity':'1.00'},1500, 'linear');
	});

	$('.close').click(function(){
		$('.lb img').css('opacity','0');
		$('.bg, .lb').css('display','none');
	
	});


});
$(document).ready(function() {
	var firstScroll = true;
	$(window).on('scroll', function() {
		if ($(this).scrollTop() + 750 > $('.contant').offset().top) {
			if (firstScroll) {
				$('.skillbar_per').show(3000);
				$('.skill_item').each(function() {
					$(this).find('.skillbar_wrap').animate({
						width: $(this).attr('data-per')
					}, 3000);
				});
				firstScroll = false;
			}
		}
	});
});
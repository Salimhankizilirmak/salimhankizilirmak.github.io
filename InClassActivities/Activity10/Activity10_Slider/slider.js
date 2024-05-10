$(document).ready(function() {
	$("#slider").bxSlider({
		auto: true,
		minSlides: 1,
		maxSlides: 1,
		slideWidth: 250,
		slideMargin: 10,
		randomStart: true,
		moveSlides: 1,
		pause: 3000,
		pager: true,
		pagerCustom: '#pager',
		captions: true,
		pagerType: 'short',
	});
});
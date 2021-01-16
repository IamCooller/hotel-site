$(document).ready(function () {
	
	$(".slider-rooms").slick({
		dots: false,
		infinite: true,
		arrows: true,
		slidesToShow: 3,
		centerMode: true,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 7000,
		prevArrow: "<img src='images/arrowC.png' class='prev' alt='1'>",
		nextArrow: "<img src='images/arrowCV.png' class='next' alt='2'>",
		responsive: [
			{
			  breakpoint: 990,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				centerMode: false
			  }
			},
			{
			  breakpoint: 770,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: false
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: false
			  }
			}
		]
	  });
	  $(".slider-rooms").on('afterChange', function(event, slick, currentSlide){
		$("#cp").text(currentSlide + 1);
	 });

	 $(".slider-promotion").slick({
		dots: true,
		infinite: true,
		arrows: false,
		slidesToShow: 1,
		centerMode: false,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 7000,
		
	  });
	 
	  $(".OurCafe-slider").slick({
		dots: false,
		infinite: true,
		arrows: true,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 7000,
		prevArrow: "<img src='images/arrowC.png' class='prev' alt='1'>",
		nextArrow: "<img src='images/arrowCV.png' class='next' alt='2'>",
		responsive: [
		
			{
			  breakpoint: 770,
			  settings: {
				dots: false,
			  }
			}
		]
	  });

	  $(".OurCafe-slider").on('afterChange', function(event, slick, currentSlide){
		$("#cpr").text(currentSlide + 1);
	 });

	 $(".feedback-clients-sliders").slick({
		dots: false,
		infinite: true,
		arrows: true,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 7000,
		prevArrow: "<img src='images/arrowC.png' class='prev-clients' alt='1'>",
		nextArrow: "<img src='images/arrowCV.png' class='next-clients' alt='2'>",
	  });

	  $(".feedback-clients-sliders").on('afterChange', function(event, slick, currentSlide){
		$("#cprt").text(currentSlide + 1);
	 });
	
	 $(".cafe-bill-sliders").slick({
		dots: false,
		infinite: true,
		arrows: true,
		slidesToShow: 3,
		centerMode: true,
		slidesToScroll: 1,
		autoplay: true,
		centerPadding: '60px',
		autoplaySpeed: 7000,
		variableWidth:true,
		prevArrow: "<img src='images/arrowC.png' class='prev-cafe-bill' alt='1'>",
		nextArrow: "<img src='images/arrowCV.png' class='next-cafe-bill' alt='2'>",
		responsive: [
			
			{
			  breakpoint: 770,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			  }
			}
		]
	  });

	


	 $('.rooms-slider-top').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.rooms-slider-bottom'
	  });
	  $('.rooms-slider-bottom').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.rooms-slider-top',
		dots: false,
		arrows: false,
		centerMode: false,
		focusOnSelect: true
	  });
});

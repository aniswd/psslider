$(document).ready(function($) {


	/* product showcase slider*/
	$('.ps-slides').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  arrows: false,
	  fade: true,
	  asNavFor: '.thumb-slides'
	});

	$('.thumb-slides').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.ps-slides',
	  arrows: false,
	  dots: false,
	  centerMode: true,
	  focusOnSelect: true,
	  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
       arrows: false,
	  dots: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

	});



});
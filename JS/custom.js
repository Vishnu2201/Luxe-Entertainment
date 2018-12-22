
$(document).ready(function(){
    $('.customer-logos').slick({
      slidesToShow  : 6,
      slidesToScroll: 1,
      autoplay      : true,
      autoplaySpeed : 1000,
      arrows        : false,
      dots          : false,
      pauseOnHover  : false,
      responsive    : [{
        breakpoint: 768,
        settings  : {
          slidesToShow: 4
        }
      }, {
        breakpoint: 520,
        settings  : {
          slidesToShow: 3
        }
      }]
    });
  });

  var owl = $('.owl-carousel');
  owl.owlCarousel({
      items             : 5,
      loop              : true,
      margin            : 10,
      autoplay          : true,
      autoplayTimeout   : 1000,
      autoplayHoverPause: true
  });
  






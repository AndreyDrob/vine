$(document).ready(function() {
  $('.burger').click(function(event) {
    $('.burger, .menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
   $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
   });
  $('.slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 3,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 596,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          centerMode: true,
          dots: false
        }
      }
    ]
  });
});

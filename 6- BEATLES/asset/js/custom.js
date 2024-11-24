$(document).ready(function(){
   
    $('.responsive').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        prevArrow:'<i class="fa fa-angle-left s_l_icon"></i>',
        nextArrow:'<i class="fa fa-angle-right s_r_icon"></i>',
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

  });

  new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});
 

new VenoBox({
    selector: '.my-video-links',
});


new WOW().init();
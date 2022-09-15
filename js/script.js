$(function(){
  //slick slider
  $('.slick_slider').slick({
    slidesToShow: 3,
    autoplay:false,
    dots:false,
    prevArrow:'<i class="fa-solid fa-angle-left angle_icon angle_left"></i>',
    nextArrow:'<i class="fa-solid fa-angle-right angle_icon angle_right"></i>',
    dotsClass:'banner_dots',
    autoplaySpeed:3000,
    speed:3000,
    //responsive
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
          slidesToScroll: 2,
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

  // menu js
  let menutop =$(".custom_nav").offset().top;
 
  // scroll effect
  $(window).on('scroll',function(){
     let scrollToTop =$(window).scrollTop();
     
     if(scrollToTop>200){
      $('.custom_nav').addClass("menufix");
     }else{
      $('.custom_nav').removeClass("menufix");
     }
  });

  //backtoTOp
  $('.backtop').on('click',function(){
   $("html,body").animate({
     scrollTop:0
   });
  });
  });
$(document).ready(function(){
   const contentSlicker = document.querySelector('.content__slicker');
   const contentSlickerKit = document.querySelector('.content__slicker-kit');
   const template = document.getElementById('slicker__sub-menu');   

   $('.slicker__list').slick({
      dots: false,
      slide: 'li',
      speed: 300,
      slidesToShow: 10,
      slidesToScroll: 1,
      adaptiveHeight:true,
      prevArrow: '.slicker__arrow-left',
      nextArrow: '.slicker__arrow-right',
      responsive: [
         {
            breakpoint: 2560,
            settings: {
               slidesToShow: 12
           }
         },
         {
            breakpoint: 1920,
            settings: {
              slidesToShow: 10
            }
         },
         {
            breakpoint: 1600,
            settings: {
              slidesToShow: 8
           }
         },
         {
            breakpoint: 1280,
            settings: {
              slidesToShow: 6
            }
         },
         {
            breakpoint: 900,
            settings: {
              slidesToShow: 4
            }
         },
         {
            breakpoint: 600,
            settings: {
              slidesToShow: 3
            }
         },
         {
            breakpoint: 500,
            settings: {
              slidesToShow: 2
            }
         },
         {
            breakpoint: 300,
            settings: {
              slidesToShow: 1
            }
         }
      ]
   });

   $('.slicker-kit__list').slick({
      dots: false,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      prevArrow: '.slicker-kit__arrow-left',
      nextArrow: '.slicker-kit__arrow-right',
      responsive: [
         {
            breakpoint: 2560,
            settings: {
               slidesToShow: 6
           }
         },
         {
            breakpoint: 1920,
            settings: {
              slidesToShow: 5
            }
         },
         {
            breakpoint: 1600,
            settings: {
              slidesToShow: 4
           }
         },
         {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3
           }
         },
         {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2
           }
         },
         {
            breakpoint: 600,
            settings: {
              slidesToShow: 1
           }
         }
      ]
   });

   tippy('.slicker__link', {
      content: template.innerHTML,
      followCursor: 'horizontal',
      allowHTML: true,
      interactive: true,
      appendTo: contentSlicker,
      interactiveBorder: 2,
      inlinePositioning: true,
      maxWidth: '1920px',
      theme: 'light',
   });

   contentSlicker.style.visibility = 'visible';
   contentSlickerKit.style.visibility = 'visible';
 });

 
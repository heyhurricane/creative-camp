$(document).ready(function () {
 
  // Кнопка Наверх и Анимация
  $(window).scroll(function () {
    var windowHeight = $(window).height();
    if ($(this).scrollTop() > 0) {
      // $('.scroll-up').fadeIn();
      console.log("up1");
      if (document.getElementById("header") !== null) {
        document.getElementById("header").style.background = "#ffffff";
        console.log("up2");
      }
    } else {
      // $('.scroll-up').fadeOut();
      console.log("down1");
      if (document.getElementById("header") !== null) {
        document.getElementById("header").style.background = "transparent";
        console.log("down2");
      }
    }
  });

  // Слайдер в секции Hero
  var mySwiper = new Swiper('.tourswiper-container', {
    // Optional parameters
    loop: true,
    spaceBetween: 40,
    pagination: {
      el: '.tourswiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.tourswiper-button-next',
      prevEl: '.tourswiper-button-prev',
    },
    fadeEffect: {
      crossFade: true,
    },
    effect: "fade",
    
  });

  // переключение вкладок слайдера
  $('.comingtours__tour').click(function () {
     var page = $(this).attr('id');
     $('.comingtours__tour').not(this).removeClass('tour--active');
     $(this).addClass('tour--active');
     if (page == '1') {
        mySwiper.slideTo(page);
     }
     if (page == '2') {
        mySwiper.slideTo(page);
     }
     if (page == '3') {
        mySwiper.slideTo(page);
     }
  });

  // переключение по кнопкам
  $('.tourswiper-button-prev').on('click', function () {
    const index = mySwiper.realIndex;
    var stepBtn = $('.comingtours__tour').slice(index, index + 1);
    var page = stepBtn.attr('id');
    console.log(page);
    $('.comingtours__tour').not(stepBtn).removeClass('tour--active');
    stepBtn.addClass('tour--active');
 

  });

  $('.tourswiper-button-next').on('click', function () {
    // stepBtn.toggleClass('step--active');
    const index = mySwiper.realIndex;
    var stepBtn = $('.comingtours__tour').slice(index, index + 1);
    var page = stepBtn.attr('id');
    console.log(page);
    $('.comingtours__tour').not(stepBtn).removeClass('tour--active');
    stepBtn.addClass('tour--active');
    // stepBtn.toggleClass('step--active');

  });

 // переключение слайдера по нажатию кнопки Тура в header
  $('.menu__tour-season').click(function () {
    var page = $(this).attr('id');
    console.log(page);
    var stepBtn;
    if (page == 'fall') {
      const id=1;
      stepBtn = $('.comingtours__tour').slice(id-1, id);
      mySwiper.slideTo(1);
    }
    if (page == 'winter') {
      const id = 2;
      stepBtn = $('.comingtours__tour').slice(id-1, id);
      mySwiper.slideTo(2);
    }
    if (page == 'summer') {
      const id = 3;
      stepBtn = $('.comingtours__tour').slice(id-1, id);
      mySwiper.slideTo(3);
    }
    $('.comingtours__tour').not(stepBtn).removeClass('tour--active');
    stepBtn.addClass('tour--active');
  });

 
});
$(document).ready(function () {
 
  // Кнопка Наверх и Анимация
  $(window).scroll(function () {
    var windowHeight = $(window).height();
    if ($(this).scrollTop() > 0) {
      // $('.scroll-up').fadeIn();
      if (document.getElementById("header") !== null) {
        document.getElementById("header").style.background = "#ffffff";
      }
    } else {
      // $('.scroll-up').fadeOut();
      if (document.getElementById("header") !== null) {
        document.getElementById("header").style.background = "transparent";
      }
    }
  });

  // Слайдер в секции Coming Tours
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

  // Слайдер в секции Past Tours
  var mySwiper2 = new Swiper('.pasttourswiper-container', {
    // Optional parameters
    loop: true,
    spaceBetween: 40,
    pagination: {
      el: '.pasttourswiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.pasttourswiper-button-next',
      prevEl: '.pasttourswiper-button-prev',
    },
    fadeEffect: {
      crossFade: true,
    },
    effect: "fade",

  });

  // Слайдер в секции Past Tours
  var mySwiper3 = new Swiper('.teacherswiper-container', {
    // Optional parameters
    loop: true,
    spaceBetween: 40,
    pagination: {
      el: '.teacherswiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.teacherswiper-button-next',
      prevEl: '.teacherswiper-button-prev',
    },
    fadeEffect: {
      crossFade: true,
    },
    effect: "fade",
    // autoplay: {
    //   delay: 3000,
    // },

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
    $('.comingtours__tour').not(stepBtn).removeClass('tour--active');
    stepBtn.addClass('tour--active');
 

  });

  $('.tourswiper-button-next').on('click', function () {
    // stepBtn.toggleClass('step--active');
    const index = mySwiper.realIndex;
    var stepBtn = $('.comingtours__tour').slice(index, index + 1);
    var page = stepBtn.attr('id');
    $('.comingtours__tour').not(stepBtn).removeClass('tour--active');
    stepBtn.addClass('tour--active');
    // stepBtn.toggleClass('step--active');

  });

 // переключение слайдера по нажатию кнопки Тура в header
  $('.menu__tour-season').click(function () {
    var page = $(this).attr('id');
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

  // переключение вкладок слайдера
  $('.pasttours__tour').click(function () {
    var page = $(this).attr('id');
    $('.pasttours__tour').not(this).removeClass('tour--active');
    $(this).addClass('tour--active');
    switch(page) {
      case 'first': 
        mySwiper2.slideTo(1);
        break;
      case 'second':
        mySwiper2.slideTo(2);
        break;
      case 'third':
        mySwiper2.slideTo(3);
        break;
      case 'fourth':
        mySwiper2.slideTo(4);
        break;
      case 'fifth':
        mySwiper2.slideTo(5);
        break;
      case 'sixth':
        mySwiper2.slideTo(6);
        break;  
      case 'seventh':
        mySwiper2.slideTo(7);
        break;
    }
  });

  // переключение по кнопкам
  $('.pasttourswiper-button-prev').on('click', function () {
    const index = mySwiper2.realIndex;
    var stepBtn = $('.pasttours__tour').slice(index, index + 1);
    var page = stepBtn.attr('id');
    $('.pasttours__tour').not(stepBtn).removeClass('tour--active');
    stepBtn.addClass('tour--active');


  });

  $('.pasttourswiper-button-next').on('click', function () {
    // stepBtn.toggleClass('step--active');
    const index = mySwiper2.realIndex;
    var stepBtn = $('.pasttours__tour').slice(index, index + 1);
    var page = stepBtn.attr('id');
    $('.pasttours__tour').not(stepBtn).removeClass('tour--active');
    stepBtn.addClass('tour--active');
    // stepBtn.toggleClass('step--active');

  });


  // переключение вкладок слайдера
  $('.teachers__teacher').click(function () {
    var page = $(this).attr('id');
    $('.teachers__teacher').not(this).removeClass('teacher--active');
    $(this).addClass('teacher--active');
    switch (page) {
      case 'teacher1':
        mySwiper3.slideTo(1);
        break;
      case 'teacher2':
        mySwiper3.slideTo(2);
        break;
      case 'teacher3':
        mySwiper3.slideTo(3);
        break;
      case 'teacher4':
        mySwiper3.slideTo(4);
        break;
    }
  });
 
  // кнопка читать далее в секции Преподаватели

  $(function () {
    $(".teachers__text--long").elimore({
      maxLength: 300,
      moreText: "Читать полностью",
      lessText: "Свернуть текст"
    });
  });


});
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

  $('.question').click(function() {
    var questionNumber = $(this).attr('id');
    $('.question').not(this).removeClass('question--active');
    $(this).addClass('question--active');
    switch (questionNumber) {
      case 'question1':
        document.getElementById("questionName").innerHTML = "Питание шведский стол или порционное?"; 
        document.getElementById("questionText").innerHTML = '5-ти разовое питание "Шведский стол". 3 основных приема пищи (завтрак, обед, ужин), а также полдник и сонник.<br>На полдник и сонник обычно дают: фрукты, сладкое, сок, кефир и т.д.'; 
        break;
      case 'question2':
        document.getElementById("questionName").innerHTML = "Как передать ребёнка?"; 
        document.getElementById("questionText").innerHTML = 'Самостоятельно привезти в лагерь, либо отправить в составе организованной группы.'; 
        break;
      case 'question3':
        document.getElementById("questionName").innerHTML = "Мой ребёнок не актёр и не писатель - ему будет интересно?"; 
        document.getElementById("questionText").innerHTML = 'На занятиях мы развиваем такие навыки, как: память, речь, внимание, работа в команде, воображение и многое другое. Учим нестандартно мыслить, смело высказывать идеи, чувствовать свободу движения. Все это пригодится ребятам в школе, институте, да и в обычной жизни.<br><br>С нами точно не соскучишься!'; 
        break;
      case 'question4':
        document.getElementById("questionName").innerHTML = "Ребёнок вегетарианец, не переносит лактозу, нет прививок"; 
        document.getElementById("questionText").innerHTML = 'Все эти моменты решаемы, если вы нас предупредите зараннее. Для ребенка в столовой мы организуем индивидуальное питание согласно вашему запросу.'; 
        break;
      case 'question5':
        document.getElementById("questionName").innerHTML = "Есть ли зарядка?";
        document.getElementById("questionText").innerHTML = 'Да, зарядка - это правильный и позитивный настрой на целый день.';
        break;
      case 'question6':
        document.getElementById("questionName").innerHTML = "Во сколько подъем/ отбой ?";
        document.getElementById("questionText").innerHTML = 'Обычно подъем происходит в 8:00, а отбой в 22:30';
        break;
      case 'question7':
        document.getElementById("questionName").innerHTML = "Много ли свободного времени у ребёнка?";
        document.getElementById("questionText").innerHTML = 'В лагере " Живая классика" у детей его практически нет! У нас столько всего интересного: занятия, кружки, спорт, вечерние мероприятия, дискотеки, бассейн и многое другое. Тихий час - тот момент, когда ребенок может посвятить время сну, своим личным делам и заданиям.';
        break;
      case 'question8':
        document.getElementById("questionName").innerHTML = "Забирают ли телефон?";
        document.getElementById("questionText").innerHTML = 'Телефоны мы не забираем, но устраиваем "День без телефона", что является очень полезным и интересным опытом для ребят- они еще больше начинают общаться и дружить. А в целом, на телефоны времени попросту не хватает.';
        break;
      case 'question9':
        document.getElementById("questionName").innerHTML = "Если ребёнок не хочет на занятие, на море?";
        document.getElementById("questionText").innerHTML = 'Обычно, все хотят везде. Но, если ребенок, например, плохо себя чувствует или "не в духе", мы даем время отлежаться или просто "побыть&nbsp;с&nbsp;собой"';
        break;
      case 'question10':
        document.getElementById("questionName").innerHTML = "Как организована медицинская помощь? Если ребёнок заболеет?";
        document.getElementById("questionText").innerHTML = 'На любой выбранной нами базе существует мед.пункт, врачи и изолятор. Врачи дежурят круглосуточно и делают обходы перед сном.';
        break;

    }
  });

});
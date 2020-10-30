$(document).ready(function () {
 
  var modalActive = false;
  var messageActive = false;

  // Сообщение об успешной отпрвке формы
  // var modalMessage = $('.message');

  // Модальное окно
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn =  $('.modal__close');
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
    modalActive = !(modalActive);
  });

  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
    modalActive = !(modalActive);
    $('.modal__form')[0].reset();
  });

  $(document).keydown(function(event) { 
    if (event.key=='Escape' && (modalActive)) { 
      modal.toggleClass('modal--visible');
      modalActive = !(modalActive);
      $('.modal__form')[0].reset();
    }
    else {
      // if (event.key=='Escape' && (messageActive)) { 
        // modalMessage.toggleClass('message--visible');
        // messageActive = !(messageActive);
      // }

    }
  });

  $(document).on('click', function(event) {
    if ($(event.target).is(modal)) {
      modal.toggleClass('modal--visible');
      modalActive = !(modalActive);
      $('.modal__form')[0].reset();
    }
    else {
      // if ($(event.target).is(modalMessage)) {
        // modalMessage.toggleClass('message--visible');
        // messageActive = !(messageActive);
      // }
    }
  });


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

  // Слайдер в секции Past Tours
  var mySwiper4 = new Swiper('.feedbackswiper-container', {
    // Optional parameters
    loop: true,
    spaceBetween: 40,
    pagination: {
      el: '.feedbackswiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.feedbackswiper-button-next',
      prevEl: '.feedbackswiper-button-prev',
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
        document.getElementById("questionName").innerHTML = "Во сколько подъем/ отбой?";
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

  var toggleWhatElse = false;
  $('.programs__what-else').on('click', function () {
    var whatElseNum = this.id;
    console.log(whatElseNum);
    switch (whatElseNum) {
      case 'what-else1':
        $('#hide1').removeClass('programs__program-text--hide1');
        this.innerHTML = "Свернуть текст";
        $(this).attr('id', 'buttonHide1');
        break;
      case 'what-else2':
        $('#hide2').removeClass('programs__program-text--hide2');
        this.innerHTML = "Свернуть текст";
        $(this).attr('id', 'buttonHide2');
        break;
      case 'what-else3':
        $('#hide3').removeClass('programs__program-text--hide3');
        this.innerHTML = "Свернуть текст";
        $(this).attr('id', 'buttonHide3');
        break; 
      case 'buttonHide1':
        $('#hide1').addClass('programs__program-text--hide1');
        this.innerHTML = "А что ещё?";
        $(this).attr('id', 'what-else1');
        break;  
      case 'buttonHide2':
        $('#hide2').addClass('programs__program-text--hide2');
        this.innerHTML = "А что ещё?";
        $(this).attr('id', 'what-else2');
        break;  
      case 'buttonHide3':
        $('#hide3').addClass('programs__program-text--hide3');
        this.innerHTML = "А что ещё?";
        $(this).attr('id', 'what-else3');
        break;   
     
    }
    // if (toggleWhatElse==false) {
    //   $('.programs__program-text').removeClass('programs__program-text--hide');
    //   this.innerHTML = "Свернуть текст";
    //   $(this).attr('id', 'elseHide');
    //   toggleWhatElse = true;   
    // }
    // else {
    //   $('.programs__program-text').addClass('programs__program-text--hide');
    //   this.innerHTML = "А что ещё?";
    //   $(this).attr('id', ''); 
    //   toggleWhatElse = false;   
    // }
   
    
    // addClass('programs__what-else--hide');
    
   
  });

  // var toggleWhatElse = false;
  $('.comingtours__what-else').on('click', function () {
    var index = mySwiper.realIndex;
    var whatElseNum = this.id;
    switch (whatElseNum) {
      case 'whatelse1':
        $('#starhide1').removeClass('comingtours__star--hide1');
        $('#cominghide1').removeClass('comingtours__info-text--hide1');
        this.innerHTML = "Свернуть текст";
        $(this).attr('id', 'btnHide1');
        break;
      case 'whatelse2':
        $('#starhide2').removeClass('comingtours__star--hide2');
        $('#cominghide2').removeClass('comingtours__info-text--hide2');
        this.innerHTML = "Свернуть текст";
        $(this).attr('id', 'btnHide2');
        break;
      // case 'whatelse3':
      //   $('.comingtours__star').removeClass('comingtours__star--hide3');
      //   $('.comingtours__info-text').removeClass('comingtours__info-text--hide3');
        // stepBtn.toggleClass('comingtours__info-text--hide3');
        // this.innerHTML = "Свернуть текст";
        // $(this).attr('id', 'btnHide3');
        // break; 
      case 'btnHide1':
        $('#starhide1').addClass('comingtours__star--hide1');
        $('#cominghide1').addClass('comingtours__info-text--hide1');
        this.innerHTML = "А что ещё?";
        $(this).attr('id', 'whatelse1');
        break;  
      case 'btnHide2':
        $('#starhide2').addClass('comingtours__star--hide2');
        $('#cominghide2').addClass('comingtours__info-text--hide2');
        this.innerHTML = "А что ещё?";
        $(this).attr('id', 'whatelse2');
        break;  
      // case 'btnHide3':
      //   $('.comingtours__star--hide').addClass('comingtours__star--hide3');
      //   $('.comingtours__info-text--hide').addClass('comingtours__info-text--hide3');
      //   this.innerHTML = "А что ещё?";
      //   $(this).attr('id', 'whatelse2');
      //   break;    
     
    }
  });

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  // валидация форм
 $('.modal__form').validate({
    errorClass: "invalid",
    errorElement : 'div',
    ignore: ':hidden:not(:checkbox)',
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
      }
      error.insertAfter($(element));
    },
    rules: {
      // simple rule, converted to {required:true}
      nameUser: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phoneUser: {
        required: true,
        minlength: 17,
        maxlength: 17
      },
      // compound rule
      emailUser: {
        required: true,
        email: true
      },
      checkUser: "required"
    },
    messages: {
      nameUser: {
        required: "Имя обязательно",
        minlength: 'Имя не короче 2 символов',
        maxlength: 'Имя не длиннее 15 символов'
      },
      phoneUser: {
        required: "Телефон обязателен",
        minlength: 'Телефон должен содержать 10 символов',
        maxlength: 'Телефон должен содержать 10 символов'
      },
      emailUser: {
        required: "Обязательно укажите email",
        email: "Введите в формте: name@domain.com"
      },
      checkUser: "Согласие с обработкой данных обязательно"
    },
    submitHandler: function(form) {
      // $(form).ajaxSubmit();
      $.ajax({
        type: "POST",
        url: "sendmodal.php",
        data: $(form).serialize(),
        success: function (response) {
          // alert("Форма отправлена! Наш менеджер свяжется с Вами в течение 15 минут");
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalMessage.toggleClass('message--visible');
          messageActive = !(messageActive);
          modalActive = !(modalActive);

        },
        error: function (response) {
          console.log('Ошибка запроса ' + response);
        }
      });
    }
  });

  // Маска для телефона
  $('[type=tel]').mask('+7(000) 000-00-00');

});
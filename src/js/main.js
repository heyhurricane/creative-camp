$(document).ready(function () {
 
  // Кнопка Наверх и Анимация
  $(window).scroll(function () {
    var windowHeight = $(window).height();
    if ($(this).scrollTop() > 0) {
      // $('.scroll-up').fadeIn();
      if (document.getElementById("header") !== null) {
        document.getElementById("header").style.background = "#5a52a5";
      }
    } else {
      $('.scroll-up').fadeOut();
      if (document.getElementById("header") !== null) {
        document.getElementById("header").style.background = "transparent";
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
  });
  
});
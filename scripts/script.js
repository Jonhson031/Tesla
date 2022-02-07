// Бургер
$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__menu, .header__menu-burger, .main__content, .header__logo, .header__menu-right, .header__menu-left, .header__menu-burger-close').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
$(document).ready(function () {
  $('.header__menu, .header__item, .header__menu-burger, .header__menu-burger-close, .main__content').click(function () {
    $('.header__burger, .header__menu, .header__menu-burger, .main__content, .header__logo, .header__menu-right, .header__menu-left, .header__menu-burger-close').removeClass('active');
    $('body').removeClass('lock');
  });
});
// Плавний скрол к блоку
$(document).ready(function () {
  $("a.header__item, a.main__arrow").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});
window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}

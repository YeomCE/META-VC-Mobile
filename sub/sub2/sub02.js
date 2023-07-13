$(function () {
  var sec02Offset = $('.sec02_bg_cont').offset();

  $(window).scroll(function () {

    if ($(document).scrollTop() > sec02Offset.top) {
      $('.sec02_conts').css({
        'left': '0',
        'opacity': '1'
      });
    } //sec02_scrollevent
  });

  var sec03Offset = $('.sec03_bg_cont').offset();

  $(window).scroll(function () {

    if ($(document).scrollTop() > sec03Offset.top) {
      $('.sec03_cont').css({
        'right': '0',
        'opacity': '1'
      });
    } //sec03_scrollevent
  });
});

// bx_slider
$(function () {
  $('.slider').bxSlider({
    auto: false,
    pause: 3500,
    skrinkItems: true,
  });
})
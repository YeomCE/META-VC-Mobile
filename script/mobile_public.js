
$(function(){
    /*mobile 헤더*/
    var jbOffset = $('.mobile').offset();

    $(window).scroll(function () {
        if ($(document).scrollTop() > jbOffset.top) {
            $('.mobile').addClass('fixed_mobile');
        } else {
            $('.mobile').removeClass('fixed_mobile');
        }
    });
    /*mobile 헤더*/



    /*mobile aside*/
    $('header ul').on('click', function () {
        $(this).toggleClass('toggle')
        $('.aside_menu').toggleClass('toggle')
        $('.aside_menu_back').toggleClass('toggle')
    });
    /*mobile aside*/
})

$(function(){
    /*sec02 tap*/
    $('.sec02_list li:nth-child(1)').on('click', function () {
        $('.sec02_img a:nth-child(1)').addClass('sec02_img_on')
        $('.sec02_img a:nth-child(1)').siblings().removeClass('sec02_img_on')
    });
    $('.sec02_list li:nth-child(2)').on('click', function () {
        $('.sec02_img a:nth-child(2)').addClass('sec02_img_on')
        $('.sec02_img a:nth-child(2)').siblings().removeClass('sec02_img_on')
    });
    $('.sec02_list li:nth-child(3)').on('click', function () {
        $('.sec02_img a:nth-child(3)').addClass('sec02_img_on')
        $('.sec02_img a:nth-child(3)').siblings().removeClass('sec02_img_on')
    });
    $('.sec02_list li:nth-child(4)').on('click', function () {
        $('.sec02_img a:nth-child(4)').addClass('sec02_img_on')
        $('.sec02_img a:nth-child(4)').siblings().removeClass('sec02_img_on')
    });
    $('.sec02_list li:nth-child(5)').on('click', function () {
        $('.sec02_img a:nth-child(5)').addClass('sec02_img_on')
        $('.sec02_img a:nth-child(5)').siblings().removeClass('sec02_img_on')
    });
    $('.sec02_list li:nth-child(6)').on('click', function () {
        $('.sec02_img a:nth-child(6)').addClass('sec02_img_on')
        $('.sec02_img a:nth-child(6)').siblings().removeClass('sec02_img_on')
    });
    $('.sec02_list li:nth-child(7)').on('click', function () {
        $('.sec02_img a:nth-child(7)').addClass('sec02_img_on')
        $('.sec02_img a:nth-child(7)').siblings().removeClass('sec02_img_on')
    });

    $('.sec02_btn li').on('click', function () {
        $(this).addClass('sec02_btn_on')
        $(this).siblings().removeClass('sec02_btn_on')
    });
    /*sec02 tap*/


    /*sec03 BX slider*/
    $(document).ready(function () {
        $('.slider').bxSlider({
            auto: false,
            speed: 500,
            pause: 4000,
            mode: 'horizontal',
            autoControls: false,
            pager: false,
            slideMargin: 20,
        });
    });
    /*sec03 BX slider*/


    $('.send').on('click', function(){

        var f = document.form;

        if (f.on_name.value == "") {
            alert("이름을 입력하세요.");
            f.on_name.focus();
            return;
        }
        if (f.on_phone.value == "") {
            alert("연락처를 입력하세요.");
            f.on_phone.focus();
            return;
        }
        if (f.on_email.value == "") {
            alert("이메일을 입력하세요.");
            f.on_email.focus();
            return;
        } else {
            if (chkEmail(f.on_email.value)) {
            } else {
                alert("이메일을 정확하게 입력하세요.");
                f.on_email.focus();
                return;
            }
        }
        if (f.on_content.value == "") {
            alert("의뢰내용을 입력하세요.");
            f.on_content.focus();
            return;
        }
        f.submit();
    }) 
})

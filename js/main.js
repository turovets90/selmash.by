$(document).ready(function(){


    $('.mm-btn').on('click',function () {
        $('.main-menu').slideToggle();
        $('html').toggleClass('page-noscroll');
        return false;
    });

    $('.main-menu .arrow').click(function(){
        $(this).parent().toggleClass('act');
        $(this).next().slideToggle();
    });

    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:true,
        fade:true,
    });

    $('.product-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product-slider__nav',
    });
    $('.product-slider__nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-slider',
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: 0
    });


});



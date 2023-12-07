$(document).ready(function(){
    const menu = $('.menu');
    const burger = $('.menu__burger');
    const scrollTop = $(window).scrollTop();
    const viewPortWidth = $(window).width();


    const styleHeader = scrollTop => {
        scrollTop > 200 ? menu.addClass('scrolled') : menu.removeClass('scrolled')
    }

    const initSlider = viewPortWidth => {
        if (viewPortWidth > 992) {
            if (!$('.positions__slider.slick-slider').length) {
                $('.positions__slider').slick({
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    rows: 3,
                    infinite: false,
                    prevArrow: '<span class="slider-prev"><img src="./img/icons/arrow-left.svg" alt="prev"/></span>',
                    nextArrow: '<span class="slider-next"><img src="./img/icons/arrow-right.svg" alt="next"/></span>',
                });
            }
        } else {
            if ($('.positions__slider.slick-slider').length) {
                $('.positions__slider').slick('unslick');
            }

        }

    }

    styleHeader(scrollTop);
    initSlider(viewPortWidth)


    $('.count-num').rCounter({
        duration: 30
    });


    $(window).scroll(function() {
        const scrollTop = $(window).scrollTop();
        styleHeader(scrollTop);
    })

    $(window).on('resize', function() {
        const viewPortWidth = $(window).width();
        initSlider(viewPortWidth)
    });

    $('.positions__show-more').on('click', function () {
        $('.positions__item').show();
        $(this).hide();
    })

    burger.click(() => menu.toggleClass('collapsed'));

    $(".collapse-toggle").on("click", function() {
        $(this).toggleClass("active");
        $(this).next().slideToggle(200);
    });



});



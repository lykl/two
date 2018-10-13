$(function() {
    $('.owl-carouse').owlCarousel({
        loop: false,
        autoplay: false,
        margin: 30,
        mouseDrag: false,
        touchDrag: false,
        responsiveClass: true,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });


    //页面滚动事件
    var flag1 = true;

    $(window).scroll(function() {
        // var tp = $(window).scrollTop();
        if (flag1) {
            flag1 = false;
            setTimeout(function() {
                //锚点
                if ($(window).scrollTop() >= 360.4375) {
                    $('.indicator').fadeIn();
                    $('.indicator li').eq(0).addClass('active').siblings().removeClass('active');
                } else if ($(window).scrollTop() < 360.4375) {
                    $('.indicator').fadeOut();
                }

                if ($(window).scrollTop() > 2788.25) {
                    $('.indicator li').eq(3).addClass('active').siblings().removeClass('active');
                } else if ($(window).scrollTop() > 1905.3499) {
                    $('.indicator li').eq(2).addClass('active').siblings().removeClass('active');
                } else if ($(window).scrollTop() > 1245.9499) {
                    $('.indicator li').eq(1).addClass('active').siblings().removeClass('active');
                }
                flag1 = true;
            }, 200);
        }
    });

    // 页面指示器事件
    $('body').scrollspy({
        target: '.section-scrollspy'
    });
    $('.indicator').on('affix.bs.affix', function() {
        $(this).removeClass('animated fadeOut').addClass('animated fadeIn');
    })
    $('.indicator').on('affix-top.bs.affix', function() {
        $(this).removeClass('animated fadeIn').addClass('animated fadeOut');
    })

    $('.btn.play').click(function() {
        $(this).hide();
        $(this).next('.btn').show();
        $(this).prevAll('.image-background').find('img').show();
    });
    $('.btn.pause').click(function() {
        $(this).hide();
        $(this).prev('.btn').show();
        $(this).prevAll('.image-background').find('img').hide();
    });
});
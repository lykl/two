$(function() {
    //轮播相关响应式变化
    var btns = $('.tab .owl-item'),
        banner = $('.stage .stage'),
        len = banner.children('.owl-item').length,
        width = banner.children('.owl-item').eq(0).width(),
        interval,
        i = 0,
        b = btns.eq(0).width();

    $('.stage .stage .owl-item').css('width', $('.stage .owl-stage-outer').width());
    if (window.innerWidth > 1200) {
        $('.scene .owl-stage .owl-item').css('width', '120px');
    } else if (window.innerWidth > 991) {
        $('.scene .owl-stage .owl-item').css('width', '156.667px');
    } else if (window.innerWidth > 768) {
        $('.scene .owl-stage .owl-item').css('width', '140px');
    } else {
        $('.scene .owl-stage .owl-item').css('width', window.innerWidth / 3);
    }

    if (window.innerWidth < 992) {
        $('.tab .owl-stage').css({
            'width': $('.scene .owl-stage .owl-item').eq(0).width() * $('.scene .owl-stage .owl-item').length,
            'left': btns.parent().parent().width() / 2 - b / 2
        });
    } else {
        $('.tab .owl-stage').css({
            'width': $('.scene .owl-stage .owl-item').eq(0).width() * $('.scene .owl-stage .owl-item').length
        });
    }

    width = banner.children('.owl-item').eq(0).width();
    b = btns.eq(0).width()
    banner.css('width', width * len);

    $(window).resize(function() {
        $('.stage .stage .owl-item').css('width', $('.stage .owl-stage-outer').width())
        if (window.innerWidth > 1200) {
            $('.scene .owl-stage .owl-item').css('width', '120px');
        } else
        if (window.innerWidth > 991) {
            $('.scene .owl-stage .owl-item').css('width', '156.667px');
        } else if (window.innerWidth > 768) {
            $('.scene .owl-stage .owl-item').css('width', '140px');
        } else {
            $('.scene .owl-stage .owl-item').css('width', window.innerWidth / 3);
        }
        if (window.innerWidth < 992) {
            $('.tab .owl-stage').css({
                'width': $('.scene .owl-stage .owl-item').eq(0).width() * $('.scene .owl-stage .owl-item').length,
                'left': btns.parent().parent().width() / 2 - b / 2
            });
        } else {
            $('.tab .owl-stage').css({
                'width': $('.scene .owl-stage .owl-item').eq(0).width() * $('.scene .owl-stage .owl-item').length,
                'left': 0
            });
        }

        width = banner.children('.owl-item').eq(0).width();
        b = btns.eq(0).width()
        banner.css('width', width * len);
    });

    interval = setInterval(start, 2000);

    btns.hover(function() {
        i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        if (window.innerWidth < 992) {
            btns.parent().stop().animate({
                'left': btns.parent().parent().width() / 2 - b / 2 - b * i
            });
        }
        banner.stop().animate({
            'left': -width * i
        });
        clearInterval(interval);
    }, function() {
        interval = setInterval(start, 2000);
    });

    function start() {
        i++;
        if (i == len) {
            i = 0;
            btns.eq(0).addClass('active').siblings().removeClass('active');
            if (window.innerWidth < 992) {
                btns.parent().stop().animate({
                    'left': btns.parent().parent().width() / 2 - b / 2
                });
            }
            banner.stop().animate({
                'left': 0
            });
        } else {
            if (window.innerWidth < 992) {
                btns.parent().stop().animate({
                    'left': btns.parent().parent().width() / 2 - b / 2 - b * i
                });
            }
            btns.eq(i).addClass('active').siblings().removeClass('active');
            banner.stop().animate({
                'left': -width * i
            });
        }
    }

    banner.hover(function() {
        clearInterval(interval);
    }, function() {
        interval = setInterval(start, 2000);
    });
    // 商业智能轮播
    $('.bi .owl-carouse').owlCarousel({
        loop: false,
        autoplay: false,
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
})

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

            if ($(window).scrollTop() > 3623.4500) {
                $('.indicator li').eq(4).addClass('active').siblings().removeClass('active');
            } else if ($(window).scrollTop() > 2788.25) {
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
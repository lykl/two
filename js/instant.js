$('.login-register a').hover(function() {
    $('.login-register a').css({
        'color': '#52b0ef',
        'background': '#fff'
    });
    $(this).css({
        'color': '#fff',
        'background': '#52b0ef'
    });
}, function() {
    $('.login-register a').css({
        'color': '#52b0ef',
        'background': '#fff'
    });
    $('.login-register a').eq(0).css({
        'color': '#fff',
        'background': '#52b0ef'
    });
    $('.login-register a').eq(2).css({
        'color': '#fff',
        'background': '#52b0ef'
    });
});

$('.login-register a').eq(0).on('mouseover', function() {
    $('.login-register').eq(0).removeClass('white').addClass('blue');
});
$('.login-register a').eq(1).on('mouseover', function() {
    $('.login-register').eq(0).removeClass('blue').addClass('white');
});
$('.login-register a').eq(2).on('mouseover', function() {
    $('.login-register').eq(1).removeClass('white').addClass('blue');
});
$('.login-register a').eq(3).on('mouseover', function() {
    $('.login-register').eq(1).removeClass('blue').addClass('white');
});


var flag = true;
$(window).scroll(function() {
    if (flag) {
        setTimeout(function() {
            if ($('.header').offset().top > 0) {
                $('.header').stop().animate({ 'backgroundColor': '#4eb1f4' }, 1000);
            } else if ($('.header').offset().top == 0) {
                $('.header').stop(true, true).animate({ 'backgroundColor': 'transparent' }, 1000);
            }
            if ($('.header-mobile').offset().top > 0) {
                $('.header-mobile').stop().animate({ 'backgroundColor': '#4eb1f4' }, 1000);
            } else if ($('.header-mobile').offset().top == 0) {
                $('.header-mobile').stop(true, true).animate({ 'backgroundColor': 'transparent' }, 1000);
            }
            if ($('.sidemenu').offset().top > 1109) {
                $('.top-item').fadeIn();
            } else {
                $('.top-item').fadeOut();
            }

            if ($(window).scrollTop() >= 360.4375) {
                $('.indicator').fadeIn();
                $('.indicator li').eq(0).addClass('active').siblings().removeClass('active');
            } else if ($(window).scrollTop() < 360.4375) {
                $('.indicator').fadeOut();
            }

            if ($(window).scrollTop() > 5358.2127) {
                $('.indicator li').eq(6).addClass('active').siblings().removeClass('active');
            } else if ($(window).scrollTop() > 4118.2501) {
                $('.indicator li').eq(5).addClass('active').siblings().removeClass('active');
            } else if ($(window).scrollTop() > 3623.4500) {
                $('.indicator li').eq(4).addClass('active').siblings().removeClass('active');
            } else if ($(window).scrollTop() > 2788.25) {
                $('.indicator li').eq(3).addClass('active').siblings().removeClass('active');
            } else if ($(window).scrollTop() > 1905.3499) {
                $('.indicator li').eq(2).addClass('active').siblings().removeClass('active');
            } else if ($(window).scrollTop() > 1245.9499) {
                $('.indicator li').eq(1).addClass('active').siblings().removeClass('active');
            }
            flag = true;
        }, 600);
        flag = false;
    }
});

$('.btn-default-outline').hover(function() {
    $(this).stop(true, true).animate({
        'backgroundColor': '#fff',
        'color': 'black'
    }, 500);
}, function() {
    $(this).stop(true, true).animate({
        'backgroundColor': 'transparent',
        'color': '#fff'
    }, 500);
});

$('.dialog__content').css({
    'transform': 'scale(1.1)',
    'display': 'none'
});
$('.try-item').on('click', function() {
    $('#try-kefu').css('display', 'flex');
    $('.dialog__content').css({
        'transform': 'scale(1)',
        'display': 'block'
    });
    $('.dialog__overlay').fadeIn();
});

$('.dialog__overlay').on('click', function() {
    $('#try-kefu').fadeOut();
    $('.dialog__content').css({
        'transform': 'scale(0.9)'
    }).fadeOut(function() {
        $('.dialog__content').css({
            'transform': 'scale(1.1)'
        });
    });
    $(this).fadeOut();
});

$('.header-mobile .menu').on('click', function() {
    if ($('.header-mobile').hasClass('affix')) {
        $('.header-mobile').removeClass('affix');
    } else {
        $('.header-mobile').addClass('affix');
    }
    $('.nav-collapse').fadeToggle(700);
    if ($('body').hasClass('disable-scroll')) {
        $('body').removeClass('disable-scroll');
    } else {
        $('body').addClass('disable-scroll');
    }
    if ($('.dummy').hasClass('dummy-active')) {
        $('.dummy').removeClass('dummy-active');
    } else {
        $('.dummy').addClass('dummy-active');
    }
});

$(window).resize(function() {
    if (window.innerWidth > 1200) {
        $('.scene .owl-stage .owl-item').css('width', '165px');
    } else if (window.innerWidth > 991) {
        $('.scene .owl-stage .owl-item').css('width', '156.667px');
    } else if (window.innerWidth > 768) {
        $('.scene .owl-stage .owl-item').css('width', '140px');
    } else {
        $('.scene .owl-stage .owl-item').css('width', window.innerWidth / 3);
    }
});

$('.aut-fold').on('click', function() {
    $('.authentication').stop().animate({
        'width': '38px',
        'height': '37px'
    }, function() {
        $('.aut-main').hide();
    });
    $('.aut-unfold').css('display', 'block');
    return false;
});

$('.aut-unfold').on('click', function() {
    $(this).hide();
    $('.aut-main').css('display', 'block');
    $('.authentication').stop().animate({
        'width': '222px',
        'height': '250px'
    });
});

$('.biz-item').on('click', function() {
    $('.chat').css('display', 'block');
});

$('.indicator li').on('click', function() {
    console.log($('#section-scene').offset().top);
    console.log($('#section-function').offset().top);
    console.log($('#section-advantage').offset().top);
    console.log($('#section-feature').offset().top);
    console.log($('#section-added').offset().top);
    console.log($('#section-deploy').offset().top);
    console.log($('#section-case').offset().top);
});
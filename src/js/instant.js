//手机端导航栏收放特效
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

//导航栏登录按钮特效
$('.header .btn-default-outline').hover(function() {
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

//导航栏登录注册二级导航特效
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

//页面滚动事件
var flag = true;

$(window).scroll(function() {
    // var tp = $(window).scrollTop();
    if (flag) {
        flag = false;
        setTimeout(function() {
            // if ($(window).scrollTop() < tp) {
            //     $('.hd').stop().slideUp(500);
            // } else {
            //     $('.hd').stop().slideDown(500);
            // }
            //导航栏
            if ($('.header').offset().top > 0) {
                $('.header').stop().animate({ 'backgroundColor': '#4eb1f4' }, 1000);
            } else if ($('.header').offset().top == 0) {
                $('.header').stop().animate({ 'backgroundColor': 'transparent' }, 1000);
            }
            if ($('.header-mobile').offset().top > 0) {
                $('.header-mobile').stop().animate({ 'backgroundColor': '#4eb1f4' }, 1000);
            } else if ($('.header-mobile').offset().top == 0) {
                $('.header-mobile').stop().animate({ 'backgroundColor': 'transparent' }, 1000);
            }
            if ($('.sidemenu').offset().top > 1109) {
                $('.top-item').fadeIn();
            } else {
                $('.top-item').fadeOut();
            }

            //锚点
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
        }, 200);
    }
});

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
    $('.scene .owl-stage .owl-item').css('width', '165px');
} else if (window.innerWidth > 991) {
    $('.scene .owl-stage .owl-item').css('width', '156.667px');
} else if (window.innerWidth > 768) {
    $('.scene .owl-stage .owl-item').css('width', '140px');
} else {
    $('.scene .owl-stage .owl-item').css('width', window.innerWidth / 3);
}

if (window.innerWidth < 1200) {
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
        $('.scene .owl-stage .owl-item').css('width', '165px');
    } else
    if (window.innerWidth > 991) {
        $('.scene .owl-stage .owl-item').css('width', '156.667px');
    } else if (window.innerWidth > 768) {
        $('.scene .owl-stage .owl-item').css('width', '140px');
    } else {
        $('.scene .owl-stage .owl-item').css('width', window.innerWidth / 3);
    }
    if (window.innerWidth < 1200) {
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
    if (window.innerWidth < 1200) {
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
        if (window.innerWidth < 1200) {
            btns.parent().stop().animate({
                'left': btns.parent().parent().width() / 2 - b / 2
            });
        }
        banner.stop().animate({
            'left': 0
        });
    } else {
        if (window.innerWidth < 1200) {
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

//特色服务
$('.feature .col-sm-4:first-of-type .list-unstyled li').on('mouseover', function() {
    var j = $(this).index();
    $('.feature .list-unstyled li').removeClass('active');
    $(this).addClass('active');
    $('.feature .col-sm-4:nth-child(2) img').css('zIndex', 0);
    $('.feature .col-sm-4:nth-child(2) img').eq(j).css('zIndex', 1);
});
$('.feature .col-sm-4:last-of-type  .list-unstyled li').on('mouseover', function() {
    var j = $(this).index();
    $('.feature .list-unstyled li').removeClass('active');
    $(this).addClass('active');
    $('.feature .col-sm-4:nth-child(2) img').css('zIndex', 0);
    $('.feature .col-sm-4:nth-child(2) img').eq(j + 3).css('zIndex', 1);
});

//增值服务
$('.added .road .item').on('mouseover', function() {
    $(this).addClass('active').siblings().removeClass('active');
});

//底部二维码
$('.erweima').css({
    'left': -$('.erweima').width() / 2 + $('.social .icon-wechat').width() / 2,
    'top': -$('.erweima').height() - 20
})
$('.social .icon-wechat').hover(function() {
    $('.erweima').show(0);
}, function() {
    $('.erweima').hide(0);
});

//右侧可收起的信誉认证
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

//商务资讯弹出框
$('.biz-item').on('click', function() {
    if (window.innerWidth < 768) {
        $('.chat1').css({
            'display': 'block',
            'left': '0',
            'bottom': '0'
        });
    } else {
        $('.chat1').css({
            'display': 'block',
            'left': '57.3%',
            'top': '100px'
        });
    }
    var date = new Date();
    $('.date').html('<span>' + (date.getMonth() + 1) + '月' + date.getDate() + '日 ' + date.getHours() + ':' + date.getMinutes() + '</span>');
});
$('.chat1 .icon-min').on('click', function() {
    $('.chat1').css('display', 'none');
});

$('.chat-header').on('mousedown', function(e) {
    e = e || event;
    if (e.target == $('.chat1 .icon-min')[0]) {
        $('.chat1 .icon-min').trigger('click');
    }

    var x = e.offsetX,
        y = e.offsetY;

    function move(e) {
        e = e || event;
        var x1 = e.clientX - x,
            y1 = e.clientY - y;
        $('.chat1').css({
            'left': x1,
            'top': y1
        });
    }
    $(document).on('mousemove', move);
    $(document).on('mouseup', function() {
        $(document).off('mousemove', move);
    });
});

$('.chat1 textarea').on('keyup', function() {
    if ($(this).val()) {
        $('.chat1 .send').removeClass('disabled');
    } else {
        $('.chat1 .send').addClass('disabled');
    }
});

//客服界面特效
$('.dialog__content').css({
    'transform': 'scale(1.1)',
    'display': 'none'
});

function open() {
    $('#try-kefu').css('display', 'flex');
    $('.dialog__content').css({
        'transform': 'scale(1)',
        'display': 'block'
    });
    $('.dialog__overlay').fadeIn();
}
$('.try-item').on('click', open);

function close() {
    $('#try-kefu').fadeOut();
    $('.dialog__content').css({
        'transform': 'scale(0.9)'
    }).fadeOut(function() {
        $('.dialog__content').css({
            'transform': 'scale(1.1)'
        });
    });
    $('.dialog__overlay').fadeOut();
}
$('.dialog__overlay').on('click', close);
$('.do-close').on('click', close);

$('.case .action .btn').on('click', open);

//返回顶部
$('.top-item').on('click', function() {
    $(window).scrollTop(0);
    return false;
});

// $('.indicator li').on('click', function() {
//     console.log($('#section-scene').offset().top);
//     console.log($('#section-function').offset().top);
//     console.log($('#section-advantage').offset().top);
//     console.log($('#section-feature').offset().top);
//     console.log($('#section-added').offset().top);
//     console.log($('#section-deploy').offset().top);
//     console.log($('#section-case').offset().top);
// });
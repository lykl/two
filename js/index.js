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

//页面滚动事件
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
            flag = true;
        }, 600);
        flag = false;
    }
});

//轮播相关响应式变化
var btns = $('.head .owl-item'),
    banner = $('.body .owl-stage'),
    len = banner.children('.owl-item').length,
    width = banner.children('.owl-item').eq(0).width(),
    interval,
    i = 0,
    b = btns.eq(0).width();

$('.body .owl-item').css('width', $('.body .owl-stage-outer').width());

if (window.innerWidth > 1200) {
    $('.head .owl-item').css('width', '190px');
} else if (window.innerWidth > 991) {
    $('.head .owl-item').css('width', '156.667px');
} else if (window.innerWidth >= 768) {
    $('.head .owl-item').css('width', '140px');
} else {
    $('.head .owl-item').css('width', window.innerWidth / 3);
}

if (window.innerWidth < 992) {
    $('.head .owl-stage').css({
        'width': $('.head .owl-item').eq(0).width() * $('.head .owl-item').length + 1,
        'left': btns.parent().width() / 2 - b / 2
    });
} else {
    $('.head .owl-stage').css({
        'width': $('.head .owl-item').eq(0).width() * $('.head .owl-item').length + 1
    });
}

width = banner.children('.owl-item').eq(0).width();
b = btns.eq(0).width();
banner.css('width', width * len);

$(window).resize(function() {
    $('.body .owl-item').css('width', $('.body .owl-stage-outer').width());
    if (window.innerWidth > 1200) {
        $('.head .owl-stage .owl-item').css('width', '190px');
    } else if (window.innerWidth > 991) {
        $('.head .owl-stage .owl-item').css('width', '156.667px');
    } else if (window.innerWidth > 768) {
        $('.head .owl-stage .owl-item').css('width', '140px');
    } else {
        $('.head .owl-stage .owl-item').css('width', window.innerWidth / 3);
    }
    if (window.innerWidth < 992) {
        $('.head .owl-stage').css({
            'width': $('.head .owl-item').eq(0).width() * $('.head .owl-item').length + 1,
            'left': btns.parent().parent().width() / 2 - b / 2
        });
    } else {
        $('.head .owl-stage').css({
            'width': $('.head .owl-item').eq(0).width() * $('.head .owl-item').length + 1,
            'left': 0
        });
    }

    width = banner.children('.owl-item').eq(0).width();
    b = btns.eq(0).width();
    banner.css('width', width * len);
});
interval = setInterval(start, 2000);

btns.hover(function() {
    i = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $(this).children().addClass('current');
    $(this).siblings().children().removeClass('current');
    if (window.innerWidth < 992) {
        btns.parent().animate({
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
        btns.eq(0).children().addClass('current');
        btns.eq(0).siblings().children().removeClass('current');
        if (window.innerWidth < 992) {
            btns.parent().animate({
                'left': btns.parent().parent().width() / 2 - b / 2
            });
        }
        banner.animate({
            'left': 0
        });
    } else {
        if (window.innerWidth < 992) {
            btns.parent().animate({
                'left': btns.parent().parent().width() / 2 - b / 2 - b * i
            });
        }
        btns.eq(i).addClass('active').siblings().removeClass('active');
        btns.eq(i).children().addClass('current');
        btns.eq(i).siblings().children().removeClass('current');
        banner.animate({
            'left': -width * i
        });
    }
}

banner.hover(function() {
    clearInterval(interval);
}, function() {
    interval = setInterval(start, 2000);
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
    console.log(e.target, $('.chat1 .icon-min')[0]);
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

//技术咨询滑动框
$('.dev-item').on('click', function() {
    if ($('.dev-wrap').attr('style') == 'display: none; left: -750px; opacity: 0;') {
        $('.dev-wrap').stop(true, true).css('display', 'block').animate({
            'left': '-390px',
            'opacity': 1
        });
    } else {
        $('.dev-wrap').stop(true, true).animate({
            'left': '-750px',
            'opacity': 0
        }, function() {
            $('.dev-wrap').hide();
        });
    }
});

//客服界面特效
$('.dialog__content').css({
    'transform': 'scale(1.1)',
    'display': 'none'
});

function close() {
    $('#try-kefu').fadeOut();
    $('.dialog__content').css({
        'transform': 'scale(0.9)'
    }).fadeOut(function() {
        $('.dialog__content').css({
            'transform': 'scale(1.1)'
        });
    });
    $(this).fadeOut();
}
$('.try-item').on('click', function() {
    $('#try-kefu').css('display', 'flex');
    $('.dialog__content').css({
        'transform': 'scale(1)',
        'display': 'block'
    });
    $('.dialog__overlay').fadeIn();
});

$('.dialog__overlay').on('click', close);
$('.do-close').on('click', close);

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
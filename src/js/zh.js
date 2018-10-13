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
$('.header1 .btn-default-outline').hover(function() {
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
            if ($('.header1').offset().top > 0) {
                $('.header1').stop().animate({ 'backgroundColor': '#4eb1f4' }, 1000);
            } else if ($('.header1').offset().top == 0) {
                $('.header1').stop(true, true).animate({ 'backgroundColor': 'transparent' }, 1000);
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

//技术咨询滑动框
$('.dev-item').on('click', function() {
    if (window.innerWidth > 768) {
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
    } else {
        $('#dev-spt-box').fadeIn();
        $('#dev-spt-box .dialog__overlay').fadeIn();
        $('#dev-spt-box .dialog__content').css({
            'transform': 'scale(1)',
            'display': 'block'
        });
    }
});

function close1() {
    $('#dev-spt-box').fadeOut();
    $('#dev-spt-box .dialog__content').css({
        'transform': 'scale(0.9)'
    }).fadeOut(function() {
        $('#dev-spt-box .dialog__content').css({
            'transform': 'scale(1.1)'
        });
    });
}

$('#dev-spt-box .dialog__overlay').on('click', close1);
$('#dev-spt-box .close').on('click', close1);

//客服界面特效
$('.dialog__content').css({
    'transform': 'scale(1.1)',
    'display': 'none'
});

function close() {
    $('#try-kefu').fadeOut();
    $('#try-kefu .dialog__content').css({
        'transform': 'scale(0.9)'
    }).fadeOut(function() {
        $('#try-kefu .dialog__content').css({
            'transform': 'scale(1.1)'
        });
    });
    $('#try-kefu .dialog__overlay').fadeOut();
}
$('.try-item,.subbut').on('click', function() {
    $('#try-kefu').css('display', 'flex');
    $('#try-kefu .dialog__content').css({
        'transform': 'scale(1)',
        'display': 'block'
    });
    $('#try-kefu .dialog__overlay').fadeIn();
});

$('#try-kefu .dialog__overlay').on('click', close);
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
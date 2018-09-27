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
$(window).scroll(function() {
    // console.log($('.header').offset().top);
    if ($('.header').offset().top > 0) {
        $('.header').animate({ 'backgroundColor': '#4eb1f4' }, 1000);
    } else if ($('.header').offset().top == 0) {
        console.log(1);
        $('.header').animate({ 'backgroundColor': 'transparent' }, 1000);
    }
});
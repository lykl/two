//右上选项卡
$('.header-dropdown a').on('click', function() {
    $('.dropdown-menu').toggle();
    return false;
});

$('.dropdown-menu a').on('click', function() {
    $('.dropdown-menu a.active').removeClass('active');
    $(this).addClass('active');
    return false;
});

//验证码
var a = Math.floor(Math.random() * 11),
    b = Math.floor(Math.random() * 11);
$('.label-verify a').html(a + ' + ' + b + ' =');
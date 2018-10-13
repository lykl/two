$(function() {
    //返回顶部
    $('#returnTop a').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 200);
    });
    // 滚动监听
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop(); //滚动距离顶部的距离；
        //判断一定高度淡入淡出
        if (scrollTop < 700) {
            $('#returnTop').css('opacity', '0').fadeOut();
        } else if (scrollTop > 700) {
            $('#returnTop').css('opacity', '1').fadeIn();
        }
    });
    //弹出申请框
    $('[id=outline]').click(function(ev) {
        ev = ev || event;
        $(".try-hidden").css('display', 'block');
        //输入框内容同步到申请框
        $('#tel').val($('#apply').val());
    });
    //点击申请框消失
    $('.dialog_overlay').click(function() {
        $(".try-hidden").css('display', 'none');
    });
});
$(function() {
    //点击事件:锚点链接跳转；
    $("#list>li>a").click(function(ev) {
        ev = ev || event;
        // ev.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    //返回顶部
    $('#returnTop a').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 200);
    });
    // 滚动监听
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop(); //滚动距离顶部的距离；
        if (scrollTop < 600) $("#list li").eq(0).removeClass('active'); //判断小圆圈距离顶部的位置 清除类名
        // console.log(scrollTop);
        if (scrollTop <= 250) { //判断顶部距离，显示小圆圈；
            $('.indicator').css('opacity', '0');
        } else if (scrollTop >= 250) {
            $('.indicator').css('opacity', '1');
        }
        //判断一定高度淡入淡出
        if (scrollTop < 700) {
            $('#returnTop').css('opacity', '0').fadeOut();
        } else if (scrollTop > 700) {
            $('#returnTop').css('opacity', '1').fadeIn();
        }
        //循环各楼层跳转
        for (var i = 1; i < 7; i++) {
            if (scrollTop > $('.tab section').eq(i).offset().top && scrollTop < ($('.tab section').eq(i).offset().top + $('.tab section').eq(i).height())) {
                $('#list li').eq(i - 1).addClass('active').siblings().removeClass('active');
            }
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
    //正则表达式判断
    // var reg = /^[1]{1}[0-9]{10}$/;
    // $('#tel').keyup(function() {
    //     if (!reg.test($(this).val())) {
    //         $('#checke').val('&times;');
    //     }
    // })
});
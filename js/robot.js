//侧栏
$(".dw4").on("click", function(e) {
    e = e || event;
    $("html").animate({ scrollTop: 0 }, 400)
})
$(window).scroll(function() {
    if ($(".dw1").offset().top > 600) {
        $('.dw4').css('display', 'block')
    } else { $('.dw4').css('display', 'none') }
})

$(".suoxiao").on("click", function(e) {
    console.log(1);
    $(".dw1_dj").hide();

})
$('#input').on('keyup', function(e) {
        $("#but").css('background', '#00cccd');
        $("#but").css('cursor', 'pointer');
        if ($('#input').val() == "") {
            $("#but").css('background', '#ccc');
            $("#but").css('cursor', 'default');
        }
    })
    //鼠标跟随
var dw1_dj = document.querySelector('.dw1_dj');
var dw1_top = document.querySelector('.dw1_top');
dw1_top.addEventListener('mousedown', function(ev) {
    var x = ev.offsetX;
    var y = ev.offsetY;
    var maxx = innerWidth;

    document.onmousemove = function(ev) {
        window.getSelection().removeAllRanges(); //取消拖动时候的选中状态
        var maxy = outerHeight;
        if ((0 < (ev.pageX - x) && (ev.pageX - x + dw1_dj.offsetWidth) < maxx) && (0 < (ev.pageY - y) && (ev.pageY - y) < window.innerHeight - dw1_dj.offsetHeight)) {
            dw1_dj.style.left = ev.pageX - x + "px";
            dw1_dj.style.top = ev.pageY - y + "px";
        } else if ((ev.pageX - x) < 0) {
            dw1_dj.style.left = 0;
        } else if ((ev.pageY - y) < 0) {
            dw1_dj.style.top = 0;
        } else if ((ev.pageX - x + dw1_dj.offsetWidth) > maxx) {
            dw1_dj.style.left = (window.innerWidth - dw1_dj.offsetWidth) - 10 + "px";
        } else if ((ev.pageY - y) > window.innerHeight - dw1_dj.offsetHeight) {
            dw1_dj.style.top = window.innerHeight - dw1_dj.offsetHeight + "px";
            console.log(window.innerHeight)
        }
    };
    document.onmouseup = function(ev) {
        document.onmousemove = null;
    };
});


$(".dw1").on("click", function(e) {

    $(".dw1_dj").toggle();

})

$(".dw2").on("click", function(e) {
    // $(".dw2_dj").toggle();
    // setTimeout(function() {
    //     $(".dw2_dj").toggleClass('dw2_djc');
    // }, 10)
    $(".dw2_dj").toggleClass('dw2_djc');

})


$(".dw3").on("click", function() {
    // if ($('.dw3_dj').hasClass('dw3_djc')) {
    //     $(".dw3_dj").css('transform', 'scale(0.9)')
    //     setTimeout(function() {
    //         $(".dw3_dj").toggle();
    //     }, 10)
    //     $('.dw3_dj').removeClass('dw3_djc')
    // }
    $(".dw3_dj").show();
    $('.mb').show();
    setTimeout(function() {
        $(".dw3_dj").addClass('dw3_djc');
    }, 10)

    $('.mb').on('click', function() {
            $('.mb').hide();
            $(".dw3_dj").hide();
            $(".dw3_dj").removeClass('dw3_djc');
        })
        // else {
        //     $(".dw3_dj").toggle();
        //     setTimeout(function() {
        //         $(".dw3_dj").toggleClass('dw3_djc');
        //     }, 10)
        // }

})


//楼层跳转
$(window).scroll(function() {
    if ($(window).scrollTop() > $('.banner').height()) {
        $('.lctz').css('display', 'block')
    } else { $('.lctz').css('display', 'none') }
})
$('.lctz li').on('click', function(e) {
    e = e || event;
    e.preventDefault();
    var top = $('.' + $(this).attr('title')).offset().top + 10;
    $('html').animate({
        scrollTop: top
    }, 400);
})

$(window).scroll(function() {
    $('.lctz li').removeClass("lctz-color");
    for (var i = 0; i <= 6; i++) {
        if ($(window).scrollTop() >= $('.' + $('.lctz li').eq(i).attr('title')).offset().top && $(window).scrollTop() < $('.' + $('.lctz li').eq(i).attr('title')).offset().top + $('.' + $('.lctz li').eq(i).attr('title')).height()) {
            $('.lctz li').eq(i).addClass("lctz-color");
        }
    }



})
$(window).scroll(function() {
    if ($(window).scrollTop() > $('.banner').height()) {
        $('.lctz2').css('display', 'block')
    } else { $('.lctz2').css('display', 'none') }
})
$('.lctz2 li').on('click', function(e) {
    e = e || event;
    e.preventDefault();
    var top = $('.' + $(this).attr('title')).offset().top + 10;
    $('html').animate({
        scrollTop: top
    }, 400);
})

$(window).scroll(function() {
    $('.lctz2 li').removeClass("lctz-color");
    for (var i = 0; i <= 6; i++) {
        if ($(window).scrollTop() >= $('.' + $('.lctz li').eq(i).attr('title')).offset().top && $(window).scrollTop() < $('.' + $('.lctz li').eq(i).attr('title')).offset().top + $('.' + $('.lctz li').eq(i).attr('title')).height()) {
            $('.lctz2 li').eq(i).addClass("lctz-color");
        }
    }



})
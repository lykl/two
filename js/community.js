//nav
$(".navbar-toggle").on('click', function() {
        $(".icon-bar").css('background', '#fff');
        $(".navbar-toggle").css('background', '#499ef3');
        $(".navbar-toggle").css('border', 0);
    })
    //main_right_head
$(".main_right_head img").on('mouseover', function() {
    $(".main_right_head span").css('display', 'block');

})
$(".main_right_head span").on('mouseout', function() {
    $(".main_right_head span").css('display', 'none');

})



//侧栏
$(window).scroll(function() {
    if ($(window).scrollTop() > 600) {
        $('.cl').css('display', 'block')
    } else { $('.cl').css('display', 'none') }
})
$(".cl").on('click', function(e) {
    e = e || event;
    $('html').animate({ scrollTop: 0 }, 400)
})

//抖动
$(document).ready(function(e) {
    var a = true;
    var time = setInterval(function() {
        $('.nav_dm').css('left', (a ? -10 : 10) + 'px')
        a = !a;
    }, 80);
    setInterval(function() {
        clearInterval(time);
        $('.nav_dm').css('left', 0)
    }, 600);

});
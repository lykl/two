$(function() {
    //按钮返回顶部/显示与隐藏
    $('#backtotop').on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });
    //点击改变container
    $('#widden').click(function() {
        $(".container-fluid").toggleClass("container");
    });
    //手机端左侧导航显示和隐藏
    $(".dw-sidebar-title").click(function() {
        if ($(".slide-content").is(":visible")) {
            $(".slide-content").slideUp();
        } else {
            $(".slide-content").slideDown();
        }
    });
    //滚轮事件函数
    function fn() {
        if ($(this).scrollTop() > 126) {
            $("#dokuwiki-aside .slide-content").css({
                width: "210px",
                position: "fixed",
                top: 50,
                zIndex: 9999,
            });
            $('#backtotop').fadeIn();
            if ($('.container-fluid').is(".container")) {
                $("#dokuwiki-aside .slide-content").css({
                    width: "180px",
                    position: "fixed",
                    top: 50,
                    zIndex: 9999,
                });
            }
            if (window.innerWidth > 992 && window.innerWidth < 1200) {
                $("article").css("marginLeft", "25%");
                $("#dokuwiki-aside .slide-content").css({
                    width: "155px",
                    position: "fixed",
                    top: 50,
                    zIndex: 9999,
                });
                $("article>div>div .col-md-3>div").css({
                    position: "fixed",
                    top: 50,
                    width: "194px"
                })

                if ($('.container-fluid').is(".container")) {
                    $("#dokuwiki-aside .slide-content").css({
                        width: "146px",
                        position: "fixed",
                        top: 50,
                        zIndex: 9999,
                    });
                    $("article>div>div .col-md-3>div").css({
                        position: "fixed",
                        top: 50,
                        width: "182px"

                    })

                }
            }
            if (window.innerWidth < 992) {
                $("article").css("marginLeft", "25%");
                $("#dokuwiki-aside .slide-content").css({
                    width: "188px",
                    position: "fixed",
                    top: 50,
                    zIndex: 9999,
                });
                if ($('.container-fluid').is(".container")) {
                    $("#dokuwiki-aside .slide-content").css({
                        width: "172.5px",
                        position: "fixed",
                        top: 50,
                        zIndex: 9999,
                    });
                }

            } else {
                $(".level-active>a").css({ background: "#00A0E9", color: "white" });
                $("article").css("marginLeft", "16.6666667%");
                $("article>div>div .col-md-3>div").css({
                    position: "fixed",
                    top: 50,
                })
            }

        } else {
            $("#dokuwiki-aside .slide-content").css({
                    position: "static",
                    width: "auto"
                }),
                $('#backtotop').fadeOut();
            $(".level-active>a").css({ background: "white", color: "#666" });
            $("article").css("marginLeft", 0)
            $("article>div>div .col-md-3>div").css({
                position: "static"
            })

        }
    }

    if (window.innerWidth > 768) {
        $(window).scroll(fn);
    } else {
        $(window).unbind('scroll', fn);
    }
    $(window).resize(function() {
        if (window.innerWidth >= 768) {
            $(".slide-content").css('display', 'block');
            $(window).scroll(fn);
        } else {
            $(".slide-content").css('display', 'none');
            $(window).unbind('scroll', fn);
        }
    });
    //右侧导航楼层跳转
    $("main article a").click(function() {
        var top = $('#' + $(this).attr('title')).offset().top;
        top -= 50;
        $("html,body").animate({
            scrollTop: top
        }, 1000);
        $("a").removeClass("bg-color");
        $(this).toggleClass("bg-color");
    });


    //滚动监听背景变色
    // $(window).scroll(function() {
    //     var scrollTop = $(this).scrollTop();
    //     for (var i = 1; i < 8; i++) {
    //         $(".l" + i).css({ background: "", color: "" });
    //         if ($(".mj" + i).offset().top < scrollTop && $(".mj" + (i + 1)).offset().top > scrollTop) {
    //             $(".l" + i).css("background", "#00A0E9");

    //         }
    //     }
    // });

});
// tabs选项卡
window.onload = function() {
    var btns = document.querySelectorAll('main aside li'),
        allart = document.querySelectorAll('main article .outside');
    for (var i = 0; i < btns.length; i++) {
        btns[i].index = i;
        btns[i].onclick = function() {
            for (var j = 0; j < 90; j++) {
                btns[j].setAttribute("class", "");
                allart[j].setAttribute("class", "");
            }
            this.setAttribute("class", "active");
            allart[this.index].setAttribute("class", "show");
        }
    }
}
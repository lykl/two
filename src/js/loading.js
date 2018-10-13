// main_main 正则表达
var reg1 = /^\w{6,20}$/;
$('.uname').on('keyup', function() {
    if (reg1.test($('.uname').val())) {
        $('.unamep').css('color', 'green')
    } else {
        $('.unamep').css('color', '#c7254e')
    }
})

$('.upassword').on('keyup', function() {
    if (reg1.test($('.upassword').val())) {
        $('.upasswordp').css('color', 'green')
    } else {
        $('.upasswordp').css('color', '#c7254e')
    }
})
$('.upassword2').on('keyup', function() {
    if ($('.upassword').val() == $('.upassword2').val()) {
        $('.upasswordp2').css('color', 'green')
    } else {
        $('.upasswordp2').css('color', '#c7254e')
    }
})



$('.usex').on('keyup', function() {
    if ($('.usex').val() == "男" || $('.usex').val() == "女") {
        $('.usexp').css('color', 'green')
    } else {
        $('.usexp').css('color', '#c7254e')
    }
})

var reg4 = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
$('.uphone').on('keyup', function() {
        if (reg4.test($('.uphone').val())) {
            $('.uphonep').css('color', 'green')
        } else {
            $('.uphonep').css('color', '#c7254e')
        }
    })
    //main_bot
$('.main_bot div').on('click', function() {
    $('.main_bot div i').toggle();
})
$('.main_bot div').on('mouseover', function() {
    $('.main_bot div i').attr('class', 'glyphicon glyphicon-remove');
})
$('.main_bot div').on('mouseout', function() {
        $('.main_bot div i').attr('class', 'glyphicon glyphicon-ok');
    })
    //判断是否所有都符合规范 激活注册
$("html").on('keyup', function() {
    if ($('.unamep').css('color') == 'rgb(0, 128, 0)' &&
        $('.upasswordp').css('color') == 'rgb(0, 128, 0)' &&
        $('.usexp').css('color') == 'rgb(0, 128, 0)' &&
        $('.uphonep').css('color') == 'rgb(0, 128, 0)') {
        $('.zhuce').removeAttr('disabled');
        $('.zhuce').css('background', 'green')
    } else {
        $('.zhuce').css('background', '#333')
        $('.zhuce').attr('disabled', 'disabled')
    }

})

//登录跳转
$('.denglu').on('click', function() {
    window.location.href = 'login.html';
})



// 注册ajax
$(function() {
    $(".zhuce").on('click', function() {
        var sex;
        $(".usex").val() == "男" ? sex = 1 : sex = 0;

        var data1 = {
            "myname": $(".uname").val(),
            "mypassword": $(".upassword").val(),
            "mysex": sex,
            "myphone": $(".uphone").val()
        };
        console.log(data1);
        $.ajax({
            type: "post",
            url: "../php/htjh.php",
            data: data1,
            dataType: "json",
            success: function(data) {
                console.log(data);
                if (data.msg == "用户名已存在") {
                    $(".uname").val('');
                    $(".upassword").val('');
                    $(".usex").val('');
                    $(".uphone").val('');
                } else {
                    document.cookie = 'username=' + $(".uname").val();
                    // documnet.cookie = $(".upassward").val();
                    var d = new Date();
                    d.setDate(d.getDate() + 3);
                    document.cookie = 'expires=' + d;
                }
                alert(data.msg);
                window.location.href = 'closing.html';
            },
            error: function(err) {
                console.log(err);
            }
        });



    })
})
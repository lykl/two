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

//缓存的账号密码
var arr = document.cookie.split("; ");
console.log(arr);
var arr2 = [],
    obj = {};
for (var i = 0; i < arr.length; i++) {
    arr2.push(arr[i].split('='));
}
for (var j = 0; j < arr2.length; j++) {
    obj[arr2[j][0]] = arr2[j][1];
}
console.log(obj);
$('.username').val(obj.username);
$('.password').val(obj.password);

//输入框背景色
$('input').change(function() {
    $(this).css({
        'background': '#f0fff0',
        'borderColor': '#7DC27D'
    });
});
$('.username').change(function() {
    $('.username-err').remove();
});
$('.password').change(function() {
    $('.password-err').remove();
});
$('.input-verify').change(function() {
    $('.check-err').remove();
});

//验证码
var a = Math.floor(Math.random() * 10),
    b = Math.floor(Math.random() * 10);
$('.label-verify a').html(a + ' + ' + b + ' =');

//memory
$('.checkbox').on('click', function() {
    if ($(this).children('i').hasClass('check')) {
        $(this).children('i').removeClass('check').addClass('ucheck');
    } else if ($(this).children('i').hasClass('ucheck')) {
        $(this).children('i').removeClass('ucheck').addClass('check');
    }
});

//ajax
$('.login').on('click', function() {
    if ($('.username').val() == '' || $('.password').val() == '' || $('.input-verify').val() == '' || $('.input-verify').val() != (a + b)) {
        if ($('.username').val() == '') {
            $('.username-err').remove();
            $('.username').css({
                'background': '#fff0f0',
                'borderColor': '#A90329'
            }).after('<em class="username-err">用户名不能为空</em>');
        }
        if ($('.password').val() == '') {
            $('.password-err').remove();
            $('.password').css({
                'background': '#fff0f0',
                'borderColor': '#A90329'
            }).after('<em class="password-err">密码不能为空</em>');
        }
        if ($('.input-verify').val() == '' || $('.input-verify').val() != (a + b)) {
            $('.check-err').remove();
            $('.input-verify').val('').css({
                'background': '#fff0f0',
                'borderColor': '#A90329'
            }).after('<em class="check-err">结果不能为空或者不匹配</em>');
        }
        return false;
    } else if ($('.input-verify').val() == (a + b)) {
        $('.username-err').remove();
        $('.password-err').remove();
        $('.check-err').remove();
        var data = {
            'myname': $('.username').val(),
            'mypassword': $('.password').val()
        };
        $.ajax({
            type: 'post',
            url: '../php/login.php',
            data: data,
            dataType: 'json',
            success: function(data) {
                if (data.msg == '用户存在且密码正确') {
                    location.href = '../html/closing.html';
                    var date = new Date();
                    date.setDate(date.getDate() + 3);
                    document.cookie = 'username=' + $('.username').val();
                    document.cookie = 'password=' + $('.password').val();
                    if ($('.checkbox').children('i').hasClass('check')) {
                        document.cookie = 'clear=0';
                        // console.log(document.cookie);
                    } else {
                        document.cookie = 'clear=1';
                        // console.log(document.cookie);
                    }
                    document.cookie = 'expires=' + date;
                } else if (data.msg == '用户名或密码错误') {
                    $('.msgbox').fadeIn();
                }
            },
            error: function(err) {
                console.log(err);
            }
        });
    }
    return false;
});

//账号密码错误时的确认事件
$('.msgbox button').on('click', function() {
    $('.msgbox').fadeOut();
    return false;
});
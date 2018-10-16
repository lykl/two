var arr = document.cookie.split('; ');
console.log(arr);
var obj = {},
    arr2 = [];
for (var j = 0; j < arr.length; j++) {
    arr2.push(arr[j].split('='));
}

for (var i = 0; i < arr2.length; i++) {
    obj[arr2[i][0]] = arr2[i][1];
}
console.log(obj);
$('.diyi a').html(obj['username']);

function clearAllCookie() {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (var i = keys.length; i--;)
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
}

if (obj['clear'] == 1) {
    clearAllCookie();
}

// $.ajax({
//     type: "post",
//     url: "../html/close.php",
//     // data: "data",
//     dataType: "json",
//     success: function(data) {
//         console.log(data);
//         console.log(1)
//     }
// });
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
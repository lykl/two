$(document).ready(function() {
    $("#line-0").on("click", function() {
        $(".price-month span").html("750");
        $(".price span").html("9,000");
    });
    $("#line-3").on("click", function() {
        $(".price-month span").html("1,500");
        $(".price span").html("18,000");
    });
    $("#line-5").on("click", function() {
        $(".price-month span").html("3,750");
        $(".price span").html("4,5000");
    });
    $("#line-7").on("click", function() {
        $(".price-month span").html("7,500");
        $(".price span").html("90,000");
    });
    $("#line-9").on("click", function() {
        $(".price-month span").html("14,400");
        $(".price span").html("172,800");
    });
    $("#line-11").on("click", function() {
        $(".price-month span").html("24,000");
        $(".price span").html("288,000");
    });
    $("#line-13").on("click", function() {
        $(".price-unbiz").css("display", "none");
        $(".price-biz").css("display", "block")

    });
    $("#line-14").on("click", function() {
        $(".price-unbiz").css("display", "none");
        $(".price-biz").css("display", "block")

    });
})
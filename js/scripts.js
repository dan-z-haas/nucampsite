$(function () {
    $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            //$("#carouselButton").children("i").removeClass("fa-pause");
            //$("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            //$("#carouselButton").children("i").removeClass("fa-play");
            //$("#carouselButton").children("i").addClass("fa-pause");
        }
        $("#carouselButton").children("i").toggleClass("fa-pause fa-play");
    });
});

$("#reserveButton").click(function () {
    console.log("test1");
    $('#reserveModal').modal(show=true);
})

$("#loginButton").click(function () {
    console.log("test2");
    $('#loginModal').modal(show=true);
})
$(document).ready(function () {
    $(window).scroll(function() {    
        let scroll = $(window).scrollTop();
        console.log(scroll);

        $("#circle").css("left", scroll + "px");
        $("#circle").css("top", (scroll + 150) + "px");
    });
});
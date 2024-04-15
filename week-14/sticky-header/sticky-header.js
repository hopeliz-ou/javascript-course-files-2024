$(document).ready(function () {
    $(window).scroll(function() {    
        let scroll = $(window).scrollTop();

        if (scroll >= 200) {
            $("#nav-container").fadeIn();
            $("header h1").fadeOut();
            $("#nav-container").css("display", "flex");
        } else {
            $("header h1").fadeIn();
            $("#nav-container").fadeOut();
        }
    });

});
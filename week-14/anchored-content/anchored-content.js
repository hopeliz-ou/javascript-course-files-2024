$(document).ready(function () {
    $(window).scroll(function() {    
        let scroll = $(window).scrollTop();
        let section1Pos = $("#section1").position();
        let section2Pos = $("#section2").position();
        let section3Pos = $("#section3").position();
        let section4Pos = $("#section4").position();
        let section5Pos = $("#section5").position();
        let offset = 150;

        if (scroll >= section1Pos.top - offset && scroll < section2Pos.top - offset) {
            $("body").css("background-color", "red");
            $("#nav").css("background-color", "red");
            $("#nav a").css("color", "black");
            $("#s2content").slideUp();
            $("#s3content").slideUp();
            $("#s4content").slideUp();
            $("#s5content").slideUp();
            $("#s1content").slideDown();
        }

        else if (scroll >= section2Pos.top - offset && scroll < section3Pos.top - offset) {
            $("body").css("background-color", "yellow");
            $("#nav").css("background-color", "yellow");
            $("#nav a").css("color", "black");
            $("#s1content").slideUp();
            $("#s3content").slideUp();
            $("#s4content").slideUp();
            $("#s5content").slideUp();
            $("#s2content").slideDown();
        }

        else if (scroll >= section3Pos.top - offset && scroll < section4Pos.top - offset) {
            $("body").css("background-color", "green");
            $("#nav").css("background-color", "green");
            $("#nav a").css("color", "black");
            $("#s1content").slideUp();
            $("#s2content").slideUp();
            $("#s4content").slideUp();
            $("#s5content").slideUp();
            $("#s3content").slideDown();
        }

        else if (scroll >= section4Pos.top - offset && scroll < section5Pos.top - offset) {
            $("body").css("background-color", "blue");
            $("#nav").css("background-color", "blue");
            $("#nav a").css("color", "black");
            $("#s1content").slideUp();
            $("#s2content").slideUp();
            $("#s3content").slideUp();
            $("#s5content").slideUp();
            $("#s4content").slideDown();
        }

        else if (scroll >= section5Pos.top - offset) {
            $("body").css("background-color", "black");
            $("#nav").css("background-color", "black");
            $("#nav a").css("color", "white");
            $("#s1content").slideUp();
            $("#s2content").slideUp();
            $("#s3content").slideUp();
            $("#s4content").slideUp();
            $("#s5content").slideDown();

        }

        else {
            $("body").css("background-color", "white");
            $("#nav").css("background-color", "white");
            $("#nav a").css("color", "black");
            $("#s1content").slideUp();
            $("#s2content").slideUp();
            $("#s3content").slideUp();
            $("#s4content").slideUp();
            $("#s5content").slideUp();
        }
    });
});
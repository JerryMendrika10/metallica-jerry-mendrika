document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
$(document).ready(function () {

    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $("#content-res").css("position", "absolute");
            $("#content-res").stop().animate({ "top": ($(window).scrollTop()) + "px", "marginLeft": ($(window).scrollLeft()) + "px" }, {
                duration: "slow", done: function () {
                    $("#content-res").css("position", "fixed");
                    $("#content-res").css("top", "0px");
                    $("#content-res").css("left", "0px");
                }
            });
        } else {

        }
        lastScrollTop = st;
    });

    
});


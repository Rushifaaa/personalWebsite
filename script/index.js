$(document).ready(function() {

    let nav = $('a.nav-item1')
    $('#menu').click(function(e) {
        e.preventDefault();
        console.log("TEST");
        if (nav.css("visibility") === "hidden") {
            console.log("true");

            $('.nav-item1').css("z-index", "1000");
            $('.nav-item1').css("visibility", "visible");
            $('.nav-item1').css("flex-direction", "column");
        } else {
            console.log("false");
            $('.nav-item1').css("visibility", "hidden");
            $('.nav-item1').css("flex-direction", "reverse-row");
        }

    });

    function hiddenNav(width) {
        if (width.matches) {
            $('.nav-item1').css("visibility", "hidden");
            $('.nav.unselectable').css("height", "64px");
            $('#menu').css("visibility", "visible");
            $('.nav.unselectable').css("padding-left", "0");

        } else {
            $('.nav-item1').css("visibility", "visible");
            $('#menu').css("visibility", "hidden");
            $('.nav.unselectable').css("padding-left", "40px");
        }
    }

    let s = window.matchMedia("(max-width: 600px)");
    hiddenNav(s);
    s.addListener(hiddenNav);
});
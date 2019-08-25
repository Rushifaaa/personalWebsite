//jshint esversion: 6


$(document).ready(function() {
    const htmlTag = $('html');
    const imageTag = $('img');
    
    const navContent = $('.nav-content');
    const navul = $('.nav ul');

    const menuBruger = $('#burger');

    htmlTag.fadeOut(1).fadeIn("slow");
    imageTag.attr("draggable", "false");

    if(navContent.css("display") === "block") {
        navContent.css("display", "none");
    }
    //avul.css("visibility", "visible");
    if(navContent.css("display") === "block") {
        navContent.css("display", "none");
    }

    menuBruger.click( (e) => {        
        navContent.toggle(300);
    });

    const hideNav = (window) => {
        
        if(window.matches) {
            console.log("Hier");
            navContent.css("display", "none");
            navul.css("display", "flex");
        }
        
    };

    const hiddenNav = (window) => {
        if(window.matches) {
            navul.css("display", "none");
        }
    };

    const min1301 = window.matchMedia("(min-width: 1301px)");
    const max1300 = window.matchMedia("(max-width: 1301px)");
    hideNav(min1301);
    hiddenNav(max1300);
    
    min1301.addListener(hideNav);
    max1300.addListener(hiddenNav);
});
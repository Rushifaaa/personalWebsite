//jshint esversion: 6


$(document).ready(() => {
    const nav = $('.li-nav');
    const menuBurger = $('#burger');
    const navMobile = $('.nav-mobile');
    const navUl = $('.nav ul');

    if(menuBurger.css("display", "block")) {
        menuBurger.toggle();
    }

    let window2 = window.matchMedia("(max-width: 726px)");

    var hideNav = (windowZ) => {
        if(windowZ.matches) {

            nav.css("display", "none");
            menuBurger.css("display", "block");
            navMobile.css("display", "none");
            navUl.css("display", "none");
            
            console.log();

            menuBurger.off('click');

            

            menuBurger.on('click', (e) => {
                navMobile.toggle(200);
                nav.css("display", "flex");
                navUl.toggle(200);
            });
            

            console.log("Hello");
        } else  {
            nav.css("display", "flex");
            menuBurger.css("display", "none");
            navMobile.css("display", "none");
            navUl.css("display", "flex");
        }
    };

    
    hideNav(window2);
    window2.addListener(hideNav);
});
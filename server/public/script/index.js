//jshint esversion: 6


$(document).ready(() => {
    const htmlTag = $('html');
    const img = $('img');
    const nav = $('.nav ul li a');

    htmlTag.fadeOut(1).fadeIn("slow");
    img.attr("draggable", "false");
    nav.attr("draggable", "false");
});
// Get the navbar
var navbar = document.querySelector(".nav__box");
var navBox = document.querySelector("#nav");
var navLogo = document.querySelector(".nav__logo");
var navIcon = document.querySelector(".nav__icon");

// Get the offset height of the navBox
var sticky = navBox.offsetHeight+60;


// Add the sticky class to the navbar when you reach its scroll position. 
// Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
    navLogo.classList.add("sticky-logo");
    navIcon.classList.add("sticky-icon");
  } else {
    navbar.classList.remove("sticky");
    navLogo.classList.remove("sticky-logo");
    navIcon.classList.remove("sticky-icon");
  }
}

window.addEventListener("scroll", myFunction);

$('.js--nav__icon').click(function() {
    var nav = $('.js--nav__box');
    var logo = $('.nav__logo');
    var icon = $('.js--nav__icon i');

    nav.slideToggle(200);

    if(icon.hasClass('ion-navicon-round')) {
        icon.addClass('ion-close-round');
        logo.addClass('ion-sticky-logo')
        icon.removeClass('ion-navicon-round');
    } else {
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
        logo.removeClass('ion-sticky-logo');
    }
});


$().ready(function () {
    
    
});

window.onscroll = function () {
    addClasstoElementOnScroll();
    stickanchor();
    stickFun()
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
addClasstoElementOnScroll();
function addClasstoElementOnScroll() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky-top");
    } else {
        navbar.classList.remove("sticky-top");
    }
}

var stickWidget = document.getElementsByClassName("support-widget");
function stickFun(){
    if (window.pageYOffset >= 150) {
        $('.support-widget').addClass("bottom");
    } else {
        $('.support-widget').removeClass("bottom");
    }
}


$("[anchor-wrapper]").parents('.placeholder').removeClass("fixed-anchor");
let anchorlink = document.querySelectorAll("[anchor-wrapper]");
let headerbar = document.querySelectorAll('#navbar')
let offsetvalue = $(anchorlink).length ? $(anchorlink).offset().top - 30 : '';
let topNav = 0;
if(window.pageYOffset < 60){
    topNav = $('.sub-nav').height()
}
stickanchor();
function stickanchor() {
    if (window.pageYOffset >= (offsetvalue - $(headerbar).height() - topNav)) {
        $(anchorlink).parents('.placeholder').addClass("fixed-anchor");
    } else {
        $(anchorlink).parents('.placeholder').removeClass("fixed-anchor");
    }
}
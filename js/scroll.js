// navbar color change
$(document).ready(function () {
    $(window).scroll(function () {
    $('.nav-bar').toggleClass('scrolled', $(this).scrollTop() > 5);
    $('#arrow-nav').toggleClass('arrow-visible', $(this).scrollTop() > 500);
  });
});
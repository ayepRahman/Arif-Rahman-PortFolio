$( document ).ready(function(){
  // responsive collapse
  $(".button-collapse").sideNav();

  // parrallax effect
  $('.parallax').parallax();

  // banner animation
  setTimeout(function(){
    $('.fly-in-text').removeClass('hidden')
  }, 300)


})

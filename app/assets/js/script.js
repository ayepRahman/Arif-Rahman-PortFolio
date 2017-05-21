$( document ).ready(function(){
  // responsive collapse
  $(".button-collapse").sideNav();

  // parrallax effect
  $('.parallax').parallax();

  // banner animation
  setTimeout(function(){
    $('.fly-in-text').removeClass('hidden')
  }, 300)
  // typed animation
  Typed.new('#typed', {
			stringsElement: document.getElementById('typed-strings'),
      typeSpeed: 50,
      loop: true
		})


})

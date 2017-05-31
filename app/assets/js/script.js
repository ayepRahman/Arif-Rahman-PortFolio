$(document).ready(function() {

  // parrallax effect
  $('.parallax').parallax(200);

  // banner animation
  setTimeout(function() {
    $('.fly-in-text').removeClass('hidden')
  }, 500)

  // typed animation
  Typed.new('#typed', {
    stringsElement: document.getElementById('typed-strings'),
    typeSpeed: 50,
    loop: true
  })
  
  // scrollspy - smooth scrolling to id
  $('.scrollspy').scrollSpy({scrollOffset: 70});

  // responsive collapse/ fixed sideNav issue with link
  $('.button-collapse').sideNav({closeOnClick: true})

  $('.button-collapse').click(removeOverlay);

  function removeOverlay() {
    $('div[id^=sidenav-overlay]').remove();
  }

  // textarea
  $('#textarea1').val('');
  $('#textarea1').trigger('autoresize')

})

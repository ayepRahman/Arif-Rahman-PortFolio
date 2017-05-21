$(window).scroll(function(){

  var winScroll = $(this).scrollTop()

  // navbar animation
  if(winScroll > $('.navbar-fixed').offset().top){
    console.log('scrolling');
    $('nav').removeClass('grey lighten-4').addClass('transition-opacity')
  } else {
    $('nav').addClass('grey lighten-4').removeClass('transition-opacity')
  }
})

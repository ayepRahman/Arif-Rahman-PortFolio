$(window).scroll(function(){

  var winScroll = $(this).scrollTop()

  // navbar animation
  if(winScroll >  $('.navbar-fixed').offset().top){
    console.log('scrolling');
    $('nav').removeClass('grey lighten-4').addClass('transition-opacity')
  } else {
    $('nav').addClass('grey lighten-4').removeClass('transition-opacity')
  }

  // about animation
  if (winScroll > $('.about-row').offset().top - ($(window).height() / 1.2)) {

      console.log("about");

      $('.about-row .about-col').each(function(i) {

        setTimeout(function() {
          $('.about-row .about-col').eq(i).addClass('pop')
        }, 150 * (i + 1))

      })

    }

    // skills title
    if (winScroll > $('.skills-title').offset().top - ($(window).height() / 1.2)) {
        console.log("skills here");

        $('.skills-title').addClass('pop')

      }




})

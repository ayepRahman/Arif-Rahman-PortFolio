$(window).scroll(function() {

  var winScroll = $(this).scrollTop()

  // navbar animation
  if (winScroll > $('.navbar-fixed').offset().top) {

    $('nav').removeClass('grey lighten-4').addClass('transition-opacity')
  } else {
    $('nav').addClass('grey lighten-4').removeClass('transition-opacity')
  }

  // about animation
  if (winScroll > $('.about-row').offset().top - ($(window).height() / 1.2)) {

    $('.about-row .about-col').each(function(i) {

      setTimeout(function() {
        $('.about-row .about-col').eq(i).addClass('pop')
      }, 150 * (i + 1))

    })

  }

  // about title
  if (winScroll > $('.about-title').offset().top - ($(window).height() / 1.2)) {

    $('.about-title').addClass('pop')

  }

  // skills title
  if (winScroll > $('.skills-title').offset().top - ($(window).height() / 1.2)) {

    $('.skills-title').addClass('pop')

  }

  // development animate
  if (winScroll > $('.skills-col-d').offset().top - ($(window).height() / 1.2)) {

    $('.skills-col-d').addClass('pop')

  }

  // tools animate
  if (winScroll > $('.skills-col-t').offset().top - ($(window).height() / 1.2)) {

    $('.skills-col-t').addClass('pop')

  }

  // canvas flip animate
  if (winScroll > $('.canvas-container').offset().top - ($(window).height() / 1.2)) {

    $('.canvas-container').addClass('flip')

  }
})

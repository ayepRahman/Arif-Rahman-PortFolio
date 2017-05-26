$(window).scroll(function() {

  var winScroll = $(this).scrollTop()

  // banner fly-in-text
  $('.fly-in-text').css({
    'transform':'translate(-50%, '+ winScroll/2 +'%)'
  })

  // banner typed-wrap
  $('.typed-wrap').css({
    'transform':'translate(0px, '+ winScroll/2 +'%)'
  })

  // banner typed-wrap
  $('.hire-me-wrap').css({
    'transform':'translate(0px, '+ winScroll/2 +'%)'
  })

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

  // my work title animate
  if (winScroll > $('.my-work-title').offset().top - ($(window).height() / 1.2)) {

    $('.my-work-title').addClass('pop')

  }

  // my-work grid animate
  if (winScroll > $('.my-work-row').offset().top - ($(window).height() / 1.2)) {

    $('.my-work-row .my-work-col').each(function(i) {

      setTimeout(function() {
        $('.my-work-row .my-work-col').eq(i).addClass('pop')
      }, 400 * (i + 1))

    })

  }

  // contacts title animation
  if (winScroll > $('.contacts-title').offset().top - ($(window).height() / 1.2)) {

    $('.contacts-title').addClass('pop')

  }

  // contact descripion li animate
  if (winScroll > $('.contacts-ul').offset().top - ($(window).height() / 1.2)) {

    $('.contacts-ul li').each(function(i) {

      setTimeout(function() {
        $('.contacts-ul li').eq(i).addClass('pop')
      }, 150 * (i + 1))

    })

  }

  // google map fade in
  if (winScroll > $('#map').offset().top - ($(window).height() / 1.2)) {

    $('#map').addClass('fade-in')

  }








})

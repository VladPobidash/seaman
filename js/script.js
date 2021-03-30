$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > $('.members, .request').offset().top - 170) {
      $('.footer__wave_1, .footer__wave_2, .footer__wave_3, .footer__wave_4').addClass('with__animation');
    } else {
      $('.footer__wave_1, .footer__wave_2, .footer__wave_3, .footer__wave_4').removeClass('with__animation');
    }
  });

  $('.header__burger').click(() => {
    $('.header__burger, .header__menu').toggleClass('active')
    $('body').toggleClass('lock')

    $('.header__link').click(() => {
      $('.header__burger, .header__menu').removeClass('active')
      $('body').removeClass('lock')
    })
  })

  $(".header__list, .first-screen__mobile-btn").on("click", '.anchor', function (e) {
    e.preventDefault();
    let a = $(this).attr("href"),
      top = $(a).offset().top;
    $("body, html").animate({ scrollTop: top - 50 }, 1500);
  });

  $('.contacts__item').on('click', function () {
    const copyText = $('.contact__item-text', this)
    const $temp = $("<textarea>");
    $("body").append($temp);
    $temp.val(copyText.text()).select();
    document.execCommand("copy");
    $temp.remove();

    const tooltip = $(".tooltiptext", this);
    tooltip.text(`Скопировано: ${copyText.text()}`)
  })

  particlesJS("particles-js", {
    particles: {
      number: { value: 30, density: { enable: true, value_area: 800 } },
      color: { value: "#d7ebfc" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 4 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 5,
        random: true,
        anim: { enable: false, speed: 32, size_min: 3.25, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: false,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 631.3181133058181, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: false, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });

  const exampleImgSlider = $('.example__img-slider');

  if (Object.values(exampleImgSlider)[0] !== 0) {
    exampleImgSlider.on('init', function (event, slick, currentSlide) {
      const cur = $(slick.$slides[slick.currentSlide]),
        next = cur.next(),
        prev = cur.prev();
      prev.addClass('slick-sprev');
      next.addClass('slick-snext');

      cur.removeClass('slick-snext').removeClass('slick-sprev');
      slick.$prev = prev;
      slick.$next = next;
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      let cur = $(slick.$slides[nextSlide]);
      slick.$prev.removeClass('slick-sprev');
      slick.$next.removeClass('slick-snext');
      next = cur.next(),
        prev = cur.prev();
      prev.prev();
      prev.next();
      prev.addClass('slick-sprev');
      next.addClass('slick-snext');
      slick.$prev = prev;
      slick.$next = next;
      cur.removeClass('slick-next').removeClass('slick-sprev');
    });
    exampleImgSlider.slick({
      asNavFor: '.example__content-slider',
      speed: 1000,
      arrows: false,
      dots: false,
      infinite: true,
      centerMode: true,
      slidesPerRow: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: '0',
      waitForAnimate: false
    });

    const exampleContentSlider = $('.example__content-slider');
    exampleContentSlider.slick({
      asNavFor: '.example__img-slider',
      arrows: true,
      dots: true,
      touchMove: true,
      infinite: true,
      waitForAnimate: false
    });
  }
});

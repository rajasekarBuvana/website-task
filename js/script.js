       /*-----------------------------
      Back to top with progress indicator
    -----------------------------*/
    var progressPath = document.querySelector('.prgoress_indicator path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).on('scroll', updateProgress);
    var offset = 250;
    var duration = 550;
    jQuery(window).on('scroll', function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery('.prgoress_indicator').addClass('active-progress');
      } else {
        jQuery('.prgoress_indicator').removeClass('active-progress');
      }
    });
    jQuery('.prgoress_indicator').on('click', function (event) {
      event.preventDefault();
      jQuery('html, body').animate({ scrollTop: 0 }, duration);
      return false;
    });

   /*-----------------------------
      Effect on Menu for Mobile
    -----------------------------*/
    document.querySelectorAll('.menu').forEach(btn => {
        btn.addEventListener('click', e => {
          btn.classList.toggle('active');
        });
      });
  
        /*-----------------------------
      swiper__center
    -----------------------------*/
    var swiper = new Swiper('.swiper__center', {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 30,
        grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          240: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }
      });
        /*-----------------------------
      swiper_vertical
    -----------------------------*/
  var swiper = new Swiper('.swiper_vertical', {
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // mousewheel: {
    //   enable: true
    // },
  });
    /*-----------------------------
      feature_strories
    -----------------------------*/

    var swiper = new Swiper('.blog-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          240: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }
      });
  /*-----------------------------
    animation on Scroll AOS.js
  -----------------------------*/
  AOS.init({
    easing: 'ease-in-out', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    duration: 500, // values from 0 to 3000, with step 50ms
  });

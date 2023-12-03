import Swiper, {
  Pagination
} from 'swiper';


window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;
    const sliderElement = document.querySelector(swiperClass);


    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      // Check if the slider element with the specified class exists on the page.
      if (document.querySelector(className)) {
        swiper = new Swiper(className, settings);

        if (callback) {
          callback(swiper);
        }
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  };


  resizableSwiper(
    '(max-width: 576px)',
    '.restaurant__slider', {
      modules: [Pagination],
      loop: true,
      grabCursor: true,
      spaceBetween: 0,
      slidesPerView: 1,
      pagination: {
        el: '.slider__pagination',
        clickable: true,
      },
    },
  );
});
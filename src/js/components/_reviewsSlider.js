import Swiper, {
  Autoplay,
  Pagination,
  Navigation,

} from 'swiper';

const sliderOptions = {
  slidesPerView: 1,
  modules: [Autoplay, Pagination, Navigation],
  dragable: true,
  grabCursor: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: ".reviews-slider__next",
    prevEl: ".reviews-slider__prev",
  },
};

const reviewsSlider = new Swiper('.reviews-slider', sliderOptions);
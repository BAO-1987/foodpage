import { _querySelector, _add, _remove } from '../_config.js';
import { addClassItem, removeClassItem } from './_toggleClassItem';
import throttle from '../vendor/_throttle';

let headerHeight = parseFloat(
  document.documentElement.style.getPropertyValue('--header-height')
);

let lastHeaderPosition;
let newHeaderPosition;

const hideHeaderOnScroll = () => {
  lastHeaderPosition = window.scrollY;
  addClassItem('.header', 'scrolling');

  if (
    headerHeight - 50 < lastHeaderPosition &&
    lastHeaderPosition > newHeaderPosition
  ) {
    addClassItem('.header', 'hide');
    addClassItem('.header', 'scrolling');
  } else if (newHeaderPosition > lastHeaderPosition) {
    removeClassItem('.header', 'hide');
  }

  if (lastHeaderPosition < headerHeight) removeClassItem('.header', 'scrolling');

  newHeaderPosition = lastHeaderPosition;
};

const throttleHideHeader = throttle(() => {
  hideHeaderOnScroll();
}, 250);

window.addEventListener('scroll', throttleHideHeader);
throttleHideHeader();

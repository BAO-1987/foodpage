function elementFromTop(elem, classToAdd, distanceFromTop, unit) {
  var winY = window.innerHeight || document.documentElement.clientHeight,
    distTop = elem.getBoundingClientRect().top,
    distPercent = Math.round((distTop / winY) * 100),
    distPixels = Math.round(distTop),
    distUnit;
  distUnit = unit == 'percent' ? distPercent : distPixels;

  if (distUnit <= distanceFromTop) {
    if (!hasClass(elem, classToAdd)) {
      addClass(elem, classToAdd);
    }
  } else {
    delClass(elem, classToAdd);
  }
}

function hasClass(el, cls) {
  if (el.className.match('(?:^|\\s)' + cls + '(?!\\S)')) {
    return true;
  }
}

function addClass(el, cls) {
  if (!el.className.match('(?:^|\\s)' + cls + '(?!\\S)')) {
    el.className += ' ' + cls;
  }
}

function delClass(el, cls) {
  el.className = el.className.replace(
    new RegExp('(?:^|\\s)' + cls + '(?!\\S)'),
    ''
  );
}

const arrayItems = document.querySelectorAll('.timeline__item');

window.addEventListener(
  'scroll',
  function () {
    arrayItems.forEach(element => {
      elementFromTop(element, 'timeline__item--active', 500, 'pixels');
    });
  },

  false
);

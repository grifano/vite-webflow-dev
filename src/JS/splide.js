// SplideJS
import Splide from '@splidejs/splide';

var elms = document.getElementsByClassName('splide');

for (var i = 0; i < elms.length; i++) {
  new Splide(elms[i], {
    type: 'loop',
    gap: 25,
    arrows: false,
    pagination: true,
    mediaQuery: 'min',
    breakpoints: {
      1280: {
        destroy: true,
      },
    },
  }).mount();
}

import { gsap } from 'gsap';
import SplitType from 'split-type';

// Stagging Text animation
var split = new SplitType('.word', { type: 'chars' });
//now animate each character into place from 100px above, fading in:
gsap.from(split.chars, {
  duration: 1,
  y: 100,
  autoAlpha: 0,
  stagger: 0.05,
});

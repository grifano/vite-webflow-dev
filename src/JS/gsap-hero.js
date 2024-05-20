import { gsap } from 'gsap';
import SplitType from 'split-type';

// Stagging Text animation

const spliteType = new SplitType('.hero-main-text');

gsap.to('.word', {
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  duration: 0.1,
});

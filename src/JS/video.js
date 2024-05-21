import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

const player = new Plyr('#player', {
  controls: ['play-large'],
});

// player.on('play', event => {
//   player.controls = ['play-large', 'play', 'volume', 'fullscreen', 'progress'];
// });

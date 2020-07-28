import 'phaser';

import config from './config';
import Phaser from 'phaser';

class Game extends Phaser.Game {
  constructor() {
    super(config);
  }
}

window.game = new Game();

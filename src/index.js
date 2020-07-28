import 'phaser';

import config from './config';
import Phaser from 'phaser';
import BootScene from './Scenes/Boot';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);

    this.scene.start('Boot');
  }
}

window.game = new Game();

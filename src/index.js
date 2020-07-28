import 'phaser';

import config from './config';
import Phaser from 'phaser';
import BootScene from './Scenes/Boot';
import TitleScene from './Scenes/TItleScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.globals = {
      score: 0,
      levels: {
        1: 'level1',
        2: 'level2',
      },
      name: '',
    };
    this.scene.add('Boot', BootScene);
    this.scene.add('Title', TitleScene);

    this.scene.start('Boot');
  }
}

window.game = new Game();

import 'phaser';

import config from './config';
import Phaser from 'phaser';
import BootScene from './Scenes/Boot';
import TitleScene from './Scenes/TitleScene';
import GameScene from './Scenes/Game';
import UIScene from './Scenes/UIScene';
import GameOver from './Scenes/GameOver';
import LeaderBoard from './Scenes/LeaderBoard';

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
    this.scene.add('Game', GameScene);
    this.scene.add('UI', UIScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('GameOver', GameOver);
    this.scene.add('LeaderBoard', LeaderBoard);

    this.scene.start('Boot');
  }
}

window.game = new Game();

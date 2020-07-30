/* eslint-disable no-undef,no-useless-constructor */
import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor(key) {
    super(key);
  }

  preload() {
    this.load.tilemapTiledJSON('level1', 'assets/tilemaps/level1.json');
    this.load.tilemapTiledJSON('level2', 'assets/tilemaps/level2.json');

    this.load.spritesheet('RPGpack_sheet', 'assets/images/RPGpack_sheet.png', {
      frameWidth: 64,
      frameHeight: 64,
    });

    this.load.image('portal', 'assets/images/raft.png');
    this.load.image('title', 'assets/images/title1.png');

    this.load.image('coin', 'assets/images/coin_01.png');
    this.load.image('slime', 'assets/images/slime.png');
    this.load.spritesheet('player', 'assets/images/player.png', {
      frameWidth: 32,
      frameHeight: 64,
    });
    this.load.image('bullet', 'assets/images/ballBlack_04.png');
    this.load.image('background', 'assets/images/12.png');
  }

  create() {
    this.scene.start('Title');
  }
}

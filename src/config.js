import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'jungle-fantasy',
  width: 640,
  height: 480,
  pixelArt: true,
  roundPixels: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 0 },
    },
  },
  dom: {
    createContainer: true,
  },
};

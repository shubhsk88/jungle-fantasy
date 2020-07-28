import config from '../config';

export default class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    (this.back = this.add.image(320, 240, 'background')),
      this.add
        .text(300, 100, 'Game Over', {
          color: 'White',
          fontSize: '32px',
          fotnFamily: 'Georgia',
        })
        .setOrigin(0.5, 0.5);

    this.add
      .text(300, 150, `Score: ${this.sys.game.globals.score}`, {
        color: 'white',
        fontSize: '32px ',
      })
      .setOrigin(0.5, 0.5);
    const btn = document.createElement('button');
    btn.style =
      'background: url(assets/images/button_small.png);width:420px;height:77px; border: none; font: 32px Georgia; color: #fff;';
    btn.innerText = 'Play Again';
    const ele = this.add.dom(300, 250, btn);

    ele.addListener('click');

    ele.on('click', () => {
      this.sys.game.globals.score = 0;
      this.scene.start('Game', {
        level: 1,
        newGame: true,
        levels: this.sys.game.globals.levels,
      });
    });

    const btn2 = document.createElement('button');
    btn2.style =
      'background: url(assets/images/button_small.png);width:420px;height:77px; border: none; font: 32px Georgia; color: #fff;';
    btn2.innerText = 'LeaderBoard';
    const leaderbtn = this.add.dom(300, 400, btn2);

    leaderbtn.addListener('click');

    leaderbtn.on('click', () => {
      this.scene.start('LeaderBoard');
    });
  }
}

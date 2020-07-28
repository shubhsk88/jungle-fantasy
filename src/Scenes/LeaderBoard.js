/* eslint-disable no-undef */
import { getScores } from '../leaderboard';

export default class LeaderBoard extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  create() {
    this.add.image(320, 240, 'background');
    this.add
      .text(300, 100, 'LeaderBoard', {
        fontSize: '40px',
        color: 'white',
      })
      .setOrigin(0.5);

    getScores().then((result) => {
      result.sort((a, b) => b.score - a.score);
      const topResults = result.slice(0, 5);
      let padding = 0;

      topResults.forEach((result, index) => {
        this.add
          .text(200, 160 + padding, `${index + 1}`, {
            fontSize: '30px',
            color: 'white',
          })
          .setOrigin(0.5);
        this.add
          .text(300, 160 + padding, `${result.user}`, {
            fontSize: '30px',
            color: 'white',
          })
          .setOrigin(0.5);
        this.add
          .text(400, 160 + padding, ` ${result.score}pts`, {
            fontSize: '30px',
            color: 'white',
          })
          .setOrigin(0.5);
        padding += 50;
      });
    });
    const btn2 = document.createElement('button');
    btn2.style = 'background: url(assets/images/button_small.png);width:420px;height:77px; border: none; font: 32px Georgia; color: #fff;';
    btn2.innerText = 'Main Menu';
    const leaderbtn = this.add.dom(300, 430, btn2);
    leaderbtn.addListener('click');

    leaderbtn.on('click', () => {
      this.scene.start('Title');
    });
  }
}

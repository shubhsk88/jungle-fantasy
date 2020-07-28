export default class TitleScene extends Phaser.Scene {
    constructor() {
      super('Title');
    }
    create() {
      this.back = this.add.image(320, 240, 'background');
      this.add.image(300, 100, 'title');
  
      const textContainer = document.createElement('input', 'text');
      textContainer.style =
        'padding:10px;background:white;width:400px;font-size:30px;height:30px;color:black;border-radius:10px';
      const btn = document.createElement('button');
      btn.style =
        'background: url(assets/images/button_small.png);width:400px;height:77px; border: none; font: 32px Georgia; color: #fff;';
      btn.innerText = 'Start the game';
      this.add.dom(300, 200, textContainer);
      const button = this.add.dom(300, 300, btn);
  
      button.addListener('click');
  
      button.on('click', () => {
        this.sys.game.globals.name = textContainer.value;
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
  
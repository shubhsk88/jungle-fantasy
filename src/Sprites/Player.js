/* eslint-disable no-undef,no-unused-vars */
import 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'player');
    this.scene = scene;
    this.health = 3;
    this.hitDelay = false;
    this.direction = 'up';

    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);

    const { anims } = this.scene;

    anims.create({
      key: 'left',
      frames: anims.generateFrameNames('player', {
        start: 20,
        end: 29,
        frames: 10,
        repeat: -1,
      }),
    });

    anims.create({
      key: 'right',
      frames: anims.generateFrameNames('player', {
        start: 30,
        end: 39,
        frames: 10,
        repeat: -1,
      }),
    });
    anims.create({
      key: 'front',
      frames: anims.generateFrameNames('player', {
        start: 0,
        end: 7,
        frames: 10,
        repeat: -1,
      }),
    });
    anims.create({
      key: 'back',
      frames: anims.generateFrameNames('player', {
        start: 10,
        end: 17,
        frames: 10,
        repeat: -1,
      }),
    });
  }

  update(cursors) {
    this.setVelocity(0);
    if (cursors.up.isDown) {
      this.direction = 'up';
      this.setVelocityY(-150);
    } else if (cursors.down.isDown) {
      this.direction = 'down';
      this.setVelocityY(150);
    }
    if (cursors.left.isDown) {
      this.direction = 'left';
      this.setVelocityX(-150);
    } else if (cursors.right.isDown) {
      this.direction = 'right';
      this.setVelocityX(150);
    }

    if (cursors.left.isDown) {
      this.anims.play('left', true);
    } else if (cursors.right.isDown) {
      this.anims.play('right', true);
    } else if (cursors.up.isDown) {
      this.anims.play('back', true);
    } else if (cursors.down.isDown) {
      this.anims.play('front', true);
    } else this.anims.stop();
  }

  loseHealth() {
    this.health -= 1;
    this.scene.events.emit('loseHealth', this.health);
    if (this.health === 0) {
      this.scene.loadNextLevel(true);
    }
  }

  enemyCollision(player, enemy) {
    if (!this.hitDelay) {
      this.loseHealth();
      this.hitDelay = true;
      this.tint = 0xff0000;
      this.scene.time.addEvent({
        delay: 1200,
        callback: () => {
          this.hitDelay = false;
          this.tint = 0xffffff;
        },
        callbackScope: this,
      });
    }
  }
}

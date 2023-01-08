import * as Phaser from 'phaser';

export class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  private shape!: Phaser.GameObjects.Image;

  preload() {
    console.log('Main Scene Preload Start');

    this.load.image('shape', 'assets/shapes.svg');

    console.log('Main Scene Preload End');
  }

  create() {
    console.log('Main Scene Create Start');

    // this.shape = this.add.image(400, 300, 'shape');

    console.log('Main Scene Create End');
  }
}

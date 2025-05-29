// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

class SplashScene extends Phaser.Scene {
    constructor() {
        super({ key: 'splashScene' });
    }
  
  
    init (data) {
    this.cameras.main.setBackgroundColor("ffffff");
    }
  
    preload() {
    console.log('Splash Scene')
    this.load.image('splashSceneBackground', './assets/splashSceneimage.png')
    }
  
    create(data) {
     
        this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'splashSceneBackground')
        this.splashSceneBackgroundImage.x = 1920 / 2
        this.splashSceneBackgroundImage.y = 1080 / 2
    }

    
  
    update(time, delta) {
      if (time>3000) 
      this.scene.switch('titleScene');
    }
  }
    export default SplashScene
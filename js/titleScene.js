// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This is the Title scene


class TitleScene extends Phaser.Scene {
    constructor() {
        super({ key: 'titleScene' })

        this.titleSceneBackgroundImage = null
    }
  
  
    init (data) {
    this.cameras.main.setBackgroundColor("#ffffff");
    }
  
    preload() {
        console.log('Title Scene');
        this.load.image('titleSceneBackground' , 'assets/aliens_screen_image.jpg')
    }
  
    create(data) {
        this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground')
        this.splashSceneBackgroundImage.x = 1920 / 2
        this.splashSceneBackgroundImage.y = 1080 / 2
    }
  
    update (time, delta) { 
    }
  }
    export default TitleScene
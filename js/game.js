// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

import SplashScene from './splashScene.js';
import TitleScene from './titleScene.js';
import MenuScene from './menuScene.js';

//Game scenes
const splashScene = new SplashScene();
const titleScene = new SplashScene();
const menuScene = new MenuScene

const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    backgroundColor: 0xfffff,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
}

const game = new Phaser.Game(config);

//* Game scenes */
game.scene.add('splashScene', splashScene);
game.scene.add('titleScene', titleScene);
game.scene.add('menuScene', menuScene);
// start title
game.scene.start('splashScene')
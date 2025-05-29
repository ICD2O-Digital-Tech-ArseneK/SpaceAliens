// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'menuScene' });
    }
  
  
    init (data) {
    this.cameras.main.setBackgroundColor("AEA04B");
    }
  
    preload() {
        console.log('Menu Scene');
    }
  
    create (data) {
    }
  
    update (time, delta) { 
    }
  }
    export default MenuScene
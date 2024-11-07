import { gameImages } from './gameImages.js';
import { maps } from './maps.js';
import { items } from './items.js';
import { horsePhysical } from './horseAttributes.js';
import { classDefinitions } from './classDefinitions.js';
import {npcFunctionality} from './npcFunctionality.js';
import { helpers } from './helpers.js';
import { playerCharacter } from './playerCharacter.js';
import { menus } from './menus.js/index.js';
import { inventory } from './inventory.js';
import { wildHorses } from './wildHorses.js';
import { worldInteractions } from './worldInteractions.js';
import { ownedHorse } from './ownedHorse.js';
import { movement } from './movement.js';
import { wildCatchGame } from './wildCatchingMiniGame.js';

var INTERVAL = 50;
var ctx;
var canvas;
var myInterval;    

function loadComplete() {
    console.log("Load is complete."); 
    canvas = document.getElementById("theCanvas");
    ctx = canvas.getContext("2d");
    var loadingSreen = document.getElementById("enterScreen");
    enterGame = document.getElementById("enterGame").addEventListener("click", () => {
      loadingSreen.style.display = 'none';    
      helpers.generateMap(maps.mapStarter);
      helpers.drawSprite();
      wildHorses.createWilds();
      menus.initializeMenus();
      npcFunctionality.createNPCs();
      menus.buttonEvents();
      helpers.updateBank();
      myInterval = self.setInterval(function(){Tick()}, INTERVAL);})
  }
  function Tick() {
    helpers.animationWater();
    movement.moveHorses();
    helpers.animateCharacter();
  }

  document['onkeydown'] = function(event) {
    event = event || window.event;
    var key = event.which || event.cursor;
    // Check for a special key value, and map it to ASCII.
    switch (key) {
      case 37:  // Left arrow, ASCII 29 
      movement.moveCharacter(29);
        break;
      case 38:  // Up arrow, ASCII 30
      movement.moveCharacter(30);
        break;
      case 39:  // Right arrow, ASCII 28  
      movement.moveCharacter(28);
        break; 
      case 40:  // Down arrow, ASCII 31
      movement.moveCharacter(31);
        break;
    }
  };

window.onload = loadComplete();
      
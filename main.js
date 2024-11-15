import { gameImages } from './gameImages.js';
import { worldMapsStore } from './maps.js';
import { items } from './items.js';
import { horsePhysical } from './horseAttributes.js';
import { classDefinitions } from './classDefinitions.js';
import {npcFunctionality} from './npcFunctionality.js';
import { helpers } from './helpers.js';
import { playerCharacter } from './playerCharacter.js';
import { menus } from './menus.js';
import { inventory } from './inventory.js';
import { wildHorses } from './wildHorses.js';
import { worldInteractions } from './worldInteractions.js';
import { ownedHorse } from './ownedHorse.js';
import { movement } from './movement.js';
import { wildCatchGame } from './wildCatchingMiniGame.js';
import {worldNPCs} from './npcDefinitions.js';
import { gameState } from './saveAndLoad.js';

var INTERVAL = 50;
var myInterval;    

function loadComplete() {
    console.log("Load is complete."); 
    helpers.loadCanvas();
    playerCharacter.activeMap = worldMapsStore.worldMaps.maps[worldMapsStore.worldMaps.mapLayout[playerCharacter.spriteMapRow][playerCharacter.spriteMapCol]];
    var loadingSreen = document.getElementById("enterScreen");
    document.getElementById("newGame").addEventListener("click", () => {
      localStorage.clear();
      gameState.initializeNewGame();
      loadingSreen.style.display = 'none';    
      });
      if (window.localStorage.length != 0) {
      document.getElementById("loadGame").addEventListener("click", () => {
        gameState.initializeGame();
        gameState.loadGame();
        helpers.clearRidenHorses();
        loadingSreen.style.display = 'none';    
        });
      } else {
        document.getElementById("loadGame").style.display = 'none';
      }
      myInterval = self.setInterval(function(){Tick()}, INTERVAL);
  }
  function Tick() {
    helpers.animationWater();
    movement.moveHorses();
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
      
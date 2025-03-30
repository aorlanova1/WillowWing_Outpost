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

var miniGameActive = false;
var lassoCol;

function wildCatchMiniGame(horse) {
    if (miniGameActive) return; // Prevent starting another mini-game
    helpers.notifyPlayer("To catch the wild, press spacebar to send your lasso! You'll have 5 attempts to try to get the lasso on the horse.")
    miniGameActive = true; // Set the flag to true
    var miniGameEventLog = document.createElement('li');

    var activeMapHolder = playerCharacter.activeMap;
    var activeMapRowHolder = playerCharacter.spriteMapRow;
    var activeMapColHolder = playerCharacter.spriteMapCol;

    playerCharacter.SpriteColPos = 9;
    playerCharacter.SpriteRowPos = 9;
    horse.HorsePosCol = 9;
    horse.HorsePosRow = 6;
    var attempts = 0;
    playerCharacter.activeMap = worldMapsStore.catchWild;
    playerCharacter.spriteMapRow = -1;
    playerCharacter.spriteMapCol = -1;
    if(playerCharacter.activeRiddenHorse != "") {
      playerCharacter.activeRiddenHorse.spawnMap = playerCharacter.activeMap;
      playerCharacter.activeRiddenHorse.HorsePosCol = playerCharacter.SpriteColPos;
      playerCharacter.activeRiddenHorse.HorsePosRow = playerCharacter.SpriteRowPos;
      playerCharacter.activeRiddenHorse.HorseMapPosRow = -1;
      playerCharacter.activeRiddenHorse.HorseMapPosCol = -1;
    }

    horse.spawnMap = playerCharacter.activeMap;
    horse.HorseMapPosRow = -1;
    horse.HorseMapPosCol = -1;

    helpers.generateMap(worldMapsStore.catchWild);

    const keyUpHandler = event => {
        if (event.code === 'Space' && playerCharacter.activeMap == worldMapsStore.catchWild) {
            attempts++;
            if (attempts == 6) { 
                endMiniGame("You've failed to catch a wild!", horse, activeMapHolder);
            } else if (sendLasso(horse)) {
                endMiniGame("You've caught a wild! It took " + attempts + " attempts", horse, activeMapHolder);
                horse.horseName = prompt("Give your new horse a name!");
                helpers.validateHorseName(horse);
                playerCharacter.playerHorses.push(horse);
            }
        }
    };

    document.addEventListener('keyup', keyUpHandler);

    function endMiniGame(message, horse, activeMapHolder) {
      document.removeEventListener('keyup', keyUpHandler); // Remove the event listener
        attempts = 0;
        wildHorses.allWildHorses.splice(helpers.findWildHorseIndex(), 1);
        wildHorses.createWilds();
        horse.spawnMap = 0;
        horse.HorseMapPosRow = null;
        horse.HorseMapPosCol = null;
        horse.HorsePosCol = 10;
        horse.HorsePosRow = 10;
        playerCharacter.activeMap = activeMapHolder;
        playerCharacter.spriteMapRow = activeMapRowHolder;
        playerCharacter.spriteMapCol = activeMapColHolder;
        helpers.generateMap(playerCharacter.activeMap);
        if(playerCharacter.activeRiddenHorse != "") {
          playerCharacter.activeRiddenHorse.spawnMap = activeMapHolder;
          playerCharacter.activeRiddenHorse.HorseMapPosRow = activeMapRowHolder;
          playerCharacter.activeRiddenHorse.HorseMapPosCol = activeMapColHolder;
          helpers.eraseSprite();
          helpers.drawHorse(playerCharacter.activeRiddenHorse);
          helpers.drawSprite();
        } else {
          helpers.eraseSprite();
          helpers.drawSprite();
        }
        miniGameEventLog.textContent = message;
        document.getElementById('eventInterface').appendChild(miniGameEventLog);
        setTimeout(function() {
          document.getElementById('eventInterface').removeChild(miniGameEventLog);
          miniGameActive = false; // Reset the flag
      }, 5000);
    }
}

function sendLasso(horse) {
    var lassoPosCol = playerCharacter.SpriteColPos;
    var lassoPosRow = playerCharacter.SpriteRowPos;
    var horseCaught = false;
    var distance = 0;
    
    for (var p = 0; p<5; p++) {
      distance++;
      lassoPosRow--;
      if(p < 4) {
        lassoCol = 1;
      } else {
        lassoCol = 0;
      }
      
      helpers.drawLasso(gameImages.lasso, lassoPosRow, lassoPosCol, lassoCol);
      if (lassoPosRow == horse.HorsePosRow && lassoPosCol == horse.HorsePosCol) {
        horseCaught = true;
      }
      setTimeout(function(){
        for (var x = 0; x <= distance; x++) {
            helpers.eraseEnv(lassoPosCol, lassoPosRow+x-1);
        } }, 100);
        if(horseCaught) {
          return true;
        }
    }
  return false;
  }

export const wildCatchGame = {
    wildCatchMiniGame,
    sendLasso,
    miniGameActive,
}
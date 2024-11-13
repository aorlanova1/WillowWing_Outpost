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
import { wildCatchGame } from './wildCatchingMiniGame.js';

function moveCharacter(key) {
    switch (key) {
      case 28:  // Right arrow was pressed 
       if (playerCharacter.SpriteColPos < 19 && ((playerCharacter.activeMap.mapLayout[playerCharacter.SpriteRowPos][playerCharacter.SpriteColPos+1] == 0))) { 
        if(playerCharacter.activeRiddenHorse == "") {
        if(playerCharacter.activeMap != worldMapsStore.catchWild) {  
          playerCharacter.SpriteRow = 1;	
        } else {
          playerCharacter.SpriteRow = 3;	
        }
          helpers.eraseSprite();
          playerCharacter.SpriteColPos += .5;
          helpers.drawSprite();
        setTimeout(() => {
          helpers.eraseSprite();
          playerCharacter.SpriteColPos += .5;
          helpers.drawSprite();
          worldInteractions.putDownItem();
          worldInteractions.checkSuroundings();
          worldInteractions.isPlayerOnWild();
          helpers.drawSprite();
        }, 150);
      } else {
        helpers.eraseSprite();
        if(playerCharacter.activeMap != worldMapsStore.catchWild) {  
          playerCharacter.SpriteRow = 1;	
        } else {
          playerCharacter.SpriteRow = 3;	
        }
        playerCharacter.SpriteColPos += 1;
        moveHorsePhysical(28, playerCharacter.activeRiddenHorse);
        worldInteractions.putDownItem();
        worldInteractions.checkSuroundings();
        worldInteractions.isPlayerOnWild();
        helpers.drawSprite();
      }
        break;
       } else if (playerCharacter.SpriteColPos >= 19) {
        moveMaps(key);
       }
       else {
      break;
       }	
      case 29:  // Left arrow, ASCII 29 
       if (playerCharacter.SpriteColPos > 0 && ((playerCharacter.activeMap.mapLayout[playerCharacter.SpriteRowPos][playerCharacter.SpriteColPos-1] == 0))){  
        if (playerCharacter.activeRiddenHorse == "") {
          if(playerCharacter.activeMap != worldMapsStore.catchWild) {  
            playerCharacter.SpriteRow = 2;	
          } else {
            playerCharacter.SpriteRow = 3;	
          }
          helpers.eraseSprite();
          playerCharacter.SpriteColPos -= .5;
          helpers.drawSprite();
        setTimeout(() => {
          helpers.eraseSprite();
          playerCharacter.SpriteColPos -= .5;
          helpers.drawSprite();
          worldInteractions.putDownItem();
          worldInteractions.checkSuroundings();
          worldInteractions.isPlayerOnWild();
          helpers.drawSprite();
        }, 150);
      } else {
        helpers.eraseSprite();
        if(playerCharacter.activeMap != worldMapsStore.catchWild) {  
          playerCharacter.SpriteRow = 2;	
        } else {
          playerCharacter.SpriteRow = 3;	
        }
        playerCharacter.SpriteColPos -= 1;
        moveHorsePhysical(29, playerCharacter.activeRiddenHorse);
        worldInteractions.putDownItem();
        worldInteractions.checkSuroundings();
        worldInteractions.isPlayerOnWild();
        helpers.drawSprite();
      }
        break;
       }else if (playerCharacter.SpriteColPos <= 0) {
        moveMaps(key);
       } else {
          break;
       }
      case 30:  // up arrow was pressed 
       if (playerCharacter.SpriteRowPos > 0 && ((playerCharacter.activeMap.mapLayout[playerCharacter.SpriteRowPos-1][playerCharacter.SpriteColPos]== 0))){ 
        if(playerCharacter.activeRiddenHorse == "") {
          playerCharacter.SpriteRow = 3;
        helpers.eraseSprite();
        playerCharacter.SpriteRowPos -= .5;
        helpers.drawSprite();
      setTimeout(() => {
        helpers.eraseSprite();
        playerCharacter.SpriteRowPos -= .5;
        helpers.drawSprite();
        worldInteractions.putDownItem();
        worldInteractions.checkSuroundings();
        worldInteractions.isPlayerOnWild();
        helpers.drawSprite();
      }, 150);
        } else {
          playerCharacter.SpriteRow = 3;
          helpers.eraseSprite();
          playerCharacter.SpriteRowPos -= 1;
          moveHorsePhysical(30, playerCharacter.activeRiddenHorse);
          worldInteractions.putDownItem();
          worldInteractions.checkSuroundings();
          worldInteractions.isPlayerOnWild();
          helpers.drawSprite();
        }
        break;
       } else if (playerCharacter.SpriteRowPos <= 0) {
        moveMaps(key);
       } 
       else {
        break;
       }
      case 31:  // down arrow was pressed 
       if (playerCharacter.SpriteRowPos < 14  && ((playerCharacter.activeMap.mapLayout[playerCharacter.SpriteRowPos+1][playerCharacter.SpriteColPos] == 0))) {
      if(playerCharacter.activeRiddenHorse == "") {
        playerCharacter.SpriteRow = 0;	
        helpers.eraseSprite();
        playerCharacter.SpriteRowPos += .5;
        helpers.drawSprite();
      setTimeout(() => {
        helpers.eraseSprite();
        playerCharacter.SpriteRowPos += .5;
        helpers.drawSprite();
        worldInteractions.putDownItem();
        worldInteractions.checkSuroundings();
        worldInteractions.isPlayerOnWild();
        helpers.drawSprite();
      }, 150);
      } else {
        playerCharacter.SpriteRow = 0;	
        helpers.eraseSprite();
        playerCharacter.SpriteRowPos += 1;
        moveHorsePhysical(31, playerCharacter.activeRiddenHorse);
        worldInteractions.putDownItem();
        worldInteractions.checkSuroundings();
        worldInteractions.isPlayerOnWild();
        helpers.drawSprite();
      }
        break;
       } else if (playerCharacter.SpriteRowPos >= 14) {
        moveMaps(key);
       } else {
          break;
       }
    }
  }

  function moveMaps(key) {
    switch (key) {
      case 28:  // Right arrow was pressed 
       if (playerCharacter.SpriteColPos >= 19 && playerCharacter.spriteMapCol < worldMapsStore.worldMaps.mapSize.cols && worldMapsStore.worldMaps.mapLayout[playerCharacter.spriteMapRow][playerCharacter.spriteMapCol+1] != 0) { 	
        helpers.eraseSprite();
        playerCharacter.activeMap = worldMapsStore.worldMaps.maps[worldMapsStore.worldMaps.mapLayout[playerCharacter.spriteMapRow][playerCharacter.spriteMapCol+1]];
        playerCharacter.spriteMapCol += 1;
        playerCharacter.SpriteColPos = 0;
        helpers.generateMap(playerCharacter.activeMap);
        if(playerCharacter.activeRiddenHorse != "") {
          playerCharacter.activeRiddenHorse.spawnMap = playerCharacter.activeMap;
          playerCharacter.activeRiddenHorse.HorsePosCol = playerCharacter.SpriteColPos;
          playerCharacter.activeRiddenHorse.HorsePosRow = playerCharacter.SpriteRowPos;
          helpers.drawHorse(playerCharacter.activeRiddenHorse);
        }
        helpers.drawSprite();
        break;
       } else {
      break;
       }	
      case 29:  // Left arrow, ASCII 29 
      if (playerCharacter.SpriteColPos >= 0 && playerCharacter.spriteMapCol > 0 && worldMapsStore.worldMaps.mapLayout[playerCharacter.spriteMapRow][playerCharacter.spriteMapCol-1] != 0) { 	
        helpers.eraseSprite();
        playerCharacter.activeMap = worldMapsStore.worldMaps.maps[worldMapsStore.worldMaps.mapLayout[playerCharacter.spriteMapRow][playerCharacter.spriteMapCol-1]];
        playerCharacter.spriteMapCol -= 1;
        playerCharacter.SpriteColPos = 19;
        helpers.generateMap(playerCharacter.activeMap);
        if(playerCharacter.activeRiddenHorse != "") {
          playerCharacter.activeRiddenHorse.spawnMap = playerCharacter.activeMap;
          playerCharacter.activeRiddenHorse.HorsePosCol = playerCharacter.SpriteColPos;
          playerCharacter.activeRiddenHorse.HorsePosRow = playerCharacter.SpriteRowPos;
          helpers.drawHorse(playerCharacter.activeRiddenHorse);
        }
        helpers.drawSprite();
        break;
       } else {
      break;
       }
      case 30:  // up arrow was pressed 
      if (playerCharacter.SpriteRowPos <= 0 && playerCharacter.spriteMapRow > 0 && worldMapsStore.worldMaps.mapLayout[playerCharacter.spriteMapRow-1][playerCharacter.spriteMapCol] != 0) { 	
        helpers.eraseSprite();
        playerCharacter.activeMap = worldMapsStore.worldMaps.maps[worldMapsStore.worldMaps.mapLayout[playerCharacter.spriteMapRow-1][playerCharacter.spriteMapCol]];
        playerCharacter.spriteMapRow -= 1;
        playerCharacter.SpriteRowPos = 14;
        helpers.generateMap(playerCharacter.activeMap);
        if(playerCharacter.activeRiddenHorse != "") {
          playerCharacter.activeRiddenHorse.spawnMap = playerCharacter.activeMap;
          playerCharacter.activeRiddenHorse.HorsePosCol = playerCharacter.SpriteColPos;
          playerCharacter.activeRiddenHorse.HorsePosRow = playerCharacter.SpriteRowPos;
          helpers.drawHorse(playerCharacter.activeRiddenHorse);
        }
        helpers.drawSprite();
        break;
       } else {
      break;
       }
      case 31:  // down arrow was pressed 
      if (playerCharacter.SpriteRowPos >= 14 && playerCharacter.spriteMapRow < worldMapsStore.worldMaps.mapSize.rows && worldMapsStore.worldMaps.mapLayout[playerCharacter.spriteMapRow+1][playerCharacter.spriteMapCol] != 0) { 	
        helpers.eraseSprite();
        playerCharacter.activeMap = worldMapsStore.worldMaps.maps[worldMapsStore.worldMaps.mapLayout[playerCharacter.spriteMapRow+1][playerCharacter.spriteMapCol]];
        playerCharacter.spriteMapRow += 1;
        playerCharacter.SpriteRowPos = 0;
        helpers.generateMap(playerCharacter.activeMap);
        if(playerCharacter.activeRiddenHorse != "") {
          playerCharacter.activeRiddenHorse.spawnMap = playerCharacter.activeMap;
          playerCharacter.activeRiddenHorse.HorsePosCol = playerCharacter.SpriteColPos;
          playerCharacter.activeRiddenHorse.HorsePosRow = playerCharacter.SpriteRowPos;
          helpers.drawHorse(playerCharacter.activeRiddenHorse);
        }
        helpers.drawSprite();
        break;
       } else {
          break;
       }
    }
  }


  function moveHorsePhysical(key, horse) {
    if (horse.spawnMap == playerCharacter.activeMap) {
    switch (key) {
      case 28:  // Right arrow was pressed 
       if (horse.HorsePosCol < 19 && (playerCharacter.activeMap.mapLayout[horse.HorsePosRow][horse.HorsePosCol+1] == 0)) { 	
        horse.HorseRow = 1;
        helpers.eraseHorse(horse);
        horse.HorsePosCol += 1;
        helpers.drawHorse(horse);
        break;
       } else {
      break;
       }	
      case 29:  // Left arrow, ASCII 29 
        if (horse.HorsePosCol > 0 && (playerCharacter.activeMap.mapLayout[horse.HorsePosRow][horse.HorsePosCol-1] == 0)) { 	
        horse.HorseRow = 0;
        helpers.eraseHorse(horse);
        horse.HorsePosCol -= 1;
        helpers.drawHorse(horse);
        break;
       } else {
          break;
       }
      case 30:  // up arrow was pressed 
        if (horse.HorsePosRow > 0 && (playerCharacter.activeMap.mapLayout[horse.HorsePosRow-1][horse.HorsePosCol] == 0)) { 	
        horse.HorseRow = 2;
        helpers.eraseHorse(horse);
        horse.HorsePosRow -= 1;
        helpers.drawHorse(horse);
        break;
       } else {
        break;
       }
      case 31:  // down arrow was pressed 
        if (horse.HorsePosRow < 14 && (playerCharacter.activeMap.mapLayout[horse.HorsePosRow+1][horse.HorsePosCol] == 0)) { 	
        horse.HorseRow = 3;
        helpers.eraseHorse(horse);
        horse.HorsePosRow += 1;
        helpers.drawHorse(horse);
        break;
       } else {
          break;
       }
    }
    if(playerCharacter.activeRiddenHorse.horseName == horse.horseName) {
      playerCharacter.SpriteCol = horse.HorseCol;
      playerCharacter.SpriteRow = horse.HorseRow;
    }
  }
}

  function moveHorses() {
    for (var i = 0; i<5; i++) {
      if (wildHorses.allWildHorses[i].spawnMap == playerCharacter.activeMap && playerCharacter.activeMap != worldMapsStore.catchWild) {
        helpers.animateHorse(wildHorses.allWildHorses[i]);
      moveHorsePhysical(helpers.randomIntFromInterval(28,100), wildHorses.allWildHorses[i]);
    } else if(wildHorses.allWildHorses[i].spawnMap == worldMapsStore.catchWild && playerCharacter.activeMap == worldMapsStore.catchWild)  {
        helpers.animateHorse(wildHorses.allWildHorses[i]);
      moveHorsePhysical(helpers.randomIntFromInterval(24,50), wildHorses.allWildHorses[i]);
    }
  }
  if (playerCharacter.playerHorses.length != 0) {
    for(var b = 0; b<playerCharacter.playerHorses.length; b++) {
      if (playerCharacter.playerHorses[b].spawnMap === playerCharacter.activeMap) {
        helpers.animateHorse(playerCharacter.playerHorses[b]);
      if(playerCharacter.playerHorses[b].horseBeingRidden == "N") {
        moveHorsePhysical(helpers.randomIntFromInterval(28,100), playerCharacter.playerHorses[b]);
      }
      }
    }
  }
  }


  export const movement = {
    moveCharacter,
    moveMaps,
    moveHorsePhysical,
    moveHorses
  }
import { gameImages } from './gameImages.js';
import { worldMapsStore } from './maps.js';
import { items } from './items.js';
import { horsePhysical } from './horseAttributes.js';
import { classDefinitions } from './classDefinitions.js';
import {npcFunctionality} from './npcFunctionality.js';
import { playerCharacter } from './playerCharacter.js';
import { menus } from './menus.js';
import { inventory } from './inventory.js';
import { wildHorses } from './wildHorses.js';
import { worldInteractions } from './worldInteractions.js';
import { ownedHorse } from './ownedHorse.js';
import { movement } from './movement.js';
import { wildCatchGame } from './wildCatchingMiniGame.js';

//water pond  
var WaterPondSpriteCol = 0;  
var ctx;
var canvas;

function loadCanvas() {
  canvas = document.getElementById("theCanvas");
  ctx = canvas.getContext("2d");
}

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function randomIntFromIntervalForWilds(horseInput) { 
    var row = Math.floor(Math.random() * (14));
    var col = Math.floor(Math.random() * (19));
    if (horseInput.spawnMap.mapLayout[row][col] == 0 && horseInput.spawnMap.mapLayout[row] != playerCharacter.SpriteRowPos && horseInput.spawnMap.mapLayout[col] != playerCharacter.SpriteColPos) {
        horseInput.HorsePosRow = row;
        horseInput.HorsePosCol = col;
    } else {
        randomIntFromIntervalForWilds(horseInput);
    }
}

function randomWorldWilds(min, max) { 
    var wildMap = Math.floor(Math.random() * (max - min + 1) + min);
    while(wildMap != 100) {
      if(wildMap != 6 && wildMap != 7) {
      return wildMap;
    } else {
      wildMap = Math.floor(Math.random() * (max - min + 1) + min);
    }
  }}

  function updateBank() {
    document.getElementById("playerCoins").textContent = playerCharacter.playerCoin;
  }

  function eraseSprite() {
    ctx.clearRect(playerCharacter.SpriteColPos*32, playerCharacter.SpriteRowPos*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
  }

  function eraseEnv(SpriteColPos, SpriteRowPos) {
    ctx.clearRect(SpriteColPos*32, SpriteRowPos*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
  }

  function generateMap(map) {
    var itemHolder;
    document.getElementById("theCanvas").className = map.mapBackground;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i<15; i++) {
      for (var j = 0; j < 20; j++) {
        if(playerCharacter.activeMap.mapLayout[i][j] != 0 && playerCharacter.activeMap.mapLayout[i][j] > 0) {
          itemHolder = playerCharacter.activeMap[playerCharacter.activeMap.mapLayout[i][j]];
          drawEnv(itemHolder, i, j)
        }
      }
    }
  }
  function drawEnv(item, rowPos, colPos) {
    ctx.drawImage(item, 0 * playerCharacter.SpriteWidth, 0 * playerCharacter.SpriteHeight, 
      playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, colPos*32, rowPos*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
  }

  function drawLasso(item, rowPos,colPos,lassoCol) {
    ctx.drawImage(item, lassoCol * playerCharacter.SpriteWidth, 3 * playerCharacter.SpriteHeight, 
      playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, colPos*32, rowPos*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
  }

  function drawWater(item, rowPos, colPos) {
    ctx.drawImage(item, WaterPondSpriteCol * playerCharacter.SpriteWidth, 0 * playerCharacter.SpriteHeight, 
      playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, colPos*32, rowPos*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
  }

  function animationWater() {
    for (var i = 0; i<15; i++) {
      for (var j = 0; j < 20; j++) {
        if(playerCharacter.activeMap[playerCharacter.activeMap.mapLayout[i][j]] == gameImages.waterPond) {
          WaterPondSpriteCol = helpers.randomIntFromInterval(0,15);
          drawWater(gameImages.waterPond, i, j);
        } else if(playerCharacter.activeMap[playerCharacter.activeMap.mapLayout[i][j]] == gameImages.waterRiverDown) {
          WaterPondSpriteCol = helpers.randomIntFromInterval(0,15);
          drawWater(gameImages.waterRiverDown, i, j);
        }  else if(playerCharacter.activeMap[playerCharacter.activeMap.mapLayout[i][j]] == gameImages.waterRiverUp) {
          WaterPondSpriteCol = helpers.randomIntFromInterval(0,15);
          drawWater(gameImages.waterRiverUp, i, j);
        }
      }
    }
  }
  function drawSprite() {
    ctx.drawImage(gameImages.SpriteImage, playerCharacter.SpriteCol * playerCharacter.SpriteWidth, playerCharacter.SpriteRow * playerCharacter.SpriteHeight, 
      playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, playerCharacter.SpriteColPos*32, playerCharacter.SpriteRowPos*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
  }

  function drawHorse(testHorse) {

    ctx.drawImage(testHorse.baseColor,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
      playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
    ctx.drawImage(testHorse.gradient,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
      playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
    ctx.drawImage(testHorse.markings,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
      playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
    ctx.drawImage(testHorse.horseBase,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
      playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
    ctx.drawImage(testHorse.maneBase,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
      playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
    ctx.drawImage(testHorse.maneColor,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
      playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
    ctx.drawImage(testHorse.maneShade,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
      playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
      
      if(testHorse.saddlePad != "") {
        ctx.drawImage(testHorse.saddlePad.icon,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
          playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
      }
      if(testHorse.bridle != "") {
        ctx.drawImage(testHorse.bridle.icon,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
          playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
      }
      if(testHorse.saddle != "") {
        ctx.drawImage(testHorse.saddle.icon,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
          playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
      }


      if (testHorse.horseIcon == "") {
      var x = testHorse.HorsePosCol*32; 
      var y = testHorse.HorsePosRow*32;  
      var width = 32;
      var height = 32;

      var imageData = ctx.getImageData(x, y, width, height);

      var tempCanvas = document.createElement('canvas');
      tempCanvas.width = width;
      tempCanvas.height = height;
      var tempCtx = tempCanvas.getContext('2d');

      tempCtx.putImageData(imageData, 0, 0);

      var savedImageDataURL = tempCanvas.toDataURL();

      testHorse.horseIcon = savedImageDataURL;
    }

  }

  function eraseHorse(testHorse) {
    ctx.clearRect(testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
  };

  function animateHorse (horse) {
    if (helpers.randomIntFromInterval(1,7) == 5) {
    eraseHorse(horse);
    horse.HorseCol = Math.round(Math.random());
    drawHorse(horse);
    if(horse.horseBeingRidden == "Y") {
      eraseHorse(horse);
      animateCharacter();
      playerCharacter.SpriteCol = horse.HorseCol;
      drawHorse(horse);
      drawSprite();
    }
  }
  }

  function animateCharacter() {
    if(playerCharacter.activeRiddenHorse == "") {
      playerCharacter.SpriteCol = Math.round(Math.random());
    eraseSprite();
    drawSprite();
  } else {
    playerCharacter.SpriteCol = playerCharacter.activeRiddenHorse.HorseCol;
  }
  }

  function findWildHorseIndex() {
    for (var i = 0; i<5; i++) {
      if (wildHorses.allWildHorses[i].spawnMap == worldMapsStore.catchWild) {
        return i;
      }
    }
  }

  function checkNPCLevel(NPC) {
    if(NPC.NPCRelationship >= 0 && NPC.NPCRelationship <5) {
      NPC.activeDialogue = NPC.dialogue1;
    } else if(NPC.NPCRelationship >= 5 && NPC.NPCRelationship <15) {
      NPC.activeDialogue = NPC.dialogue2;
    } else if (NPC.NPCRelationship >= 15) {
      NPC.activeDialogue = NPC.dialogue3;
    } 
  }

  function notifyPlayer(text) {
    var notif = document.createElement('li');
    notif.textContent = text;
    document.getElementById('eventInterface').appendChild(notif);

    setTimeout(function() {
        document.getElementById('eventInterface').removeChild(notif);
    }, 6000);
  }
  
  export const helpers = {
    randomIntFromInterval,
    randomIntFromIntervalForWilds,
    randomWorldWilds,
    updateBank,
    eraseSprite,
    eraseEnv,
    eraseSprite,
    eraseEnv,
    generateMap,
    drawEnv,
    drawLasso,
    drawWater,
    animationWater,
    drawSprite,
    drawHorse,
    eraseHorse,
    animateHorse,
    animateCharacter,
    findWildHorseIndex,
    loadCanvas,
    ctx,
    canvas,
    checkNPCLevel,
    notifyPlayer
  }
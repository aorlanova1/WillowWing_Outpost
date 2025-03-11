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
var music;

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
    if (horseInput.spawnMap.mapLayout[row][col] == 0) {
        horseInput.HorsePosRow = row;
        horseInput.HorsePosCol = col;
    } else {
        randomIntFromIntervalForWilds(horseInput);
    }
}

function randomWorldWilds(horse, minRow, maxRow, minCol, maxCol) { 
  var wildMapCol = Math.floor(Math.random() * (maxCol - minCol + 1) + minCol);
  var wildMapRow = Math.floor(Math.random() * (maxRow - minRow + 1) + minRow);
  while(wildMapRow != 100) {
    if((wildMapRow != 3 && wildMapCol != 1)) {
      horse.HorseMapPosCol = wildMapCol;
      horse.HorseMapPosRow = wildMapRow;
      horse.spawnMap = worldMapsStore.worldMaps.maps[worldMapsStore.worldMaps.mapLayout[wildMapRow][wildMapCol]];;
      return;
  } else {
   wildMapCol = Math.floor(Math.random() * (maxCol - minCol + 1) + minCol);
   wildMapRow = Math.floor(Math.random() * (maxRow - minRow + 1) + minRow);
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
    console.log("Map background: " + map.mapBackground)
    document.getElementById("theCanvas").className = map.mapBackground;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i<15; i++) {
      for (var j = 0; j < 20; j++) {
        //console.log(worldMapsStore.worldMaps.maps[worldMapsStore.worldMaps.mapLayout[0][2]]);
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
        }  else if(playerCharacter.activeMap[playerCharacter.activeMap.mapLayout[i][j]] == gameImages.crops) {
          WaterPondSpriteCol = helpers.randomIntFromInterval(0,15);
          drawWater(gameImages.crops, i, j);
        } else if (playerCharacter.activeMap[playerCharacter.activeMap.mapLayout[i][j]] == gameImages.fountain) {
          WaterPondSpriteCol = helpers.randomIntFromInterval(0,1);
          eraseEnv(j, i);
          drawWater(gameImages.fountain, i, j);
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
        var saddlePDImg = new Image();
        saddlePDImg.src = testHorse.saddlePad.icon;
        ctx.drawImage(saddlePDImg,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
          playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
      }
      if(testHorse.bridle != "") {
        var bridleImg = new Image();
        bridleImg.src = testHorse.bridle.icon;
        ctx.drawImage(bridleImg,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
          playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
      }
      if(testHorse.saddle != "") {
        var saddleImg = new Image();
        saddleImg.src = testHorse.saddle.icon
        ctx.drawImage(saddleImg,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
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

  function validateHorseName(horse) {
    var duplicate = false;
    for (var i = 0; i<playerCharacter.playerHorses.length; i++) {
      if(horse.horseName == playerCharacter.playerHorses[i].horseName) {
        duplicate = true;
        break;
      }
    }
    if(duplicate) {
      horse.horseName = prompt("That name is already taken. Choose again.");
      validateHorseName(horse);
    } else {
      return;
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
      playerCharacter.SpriteCol = playerCharacter.SpriteCol===0 ? 1:0;
  } else {
    playerCharacter.SpriteCol = playerCharacter.activeRiddenHorse.HorseCol;
  }
  }

  function findWildHorseIndex() {
    for (var i = 0; i<5; i++) {
      if (wildHorses.allWildHorses[i].HorseMapPosRow == -1) {
        return i;
      }
    }
  }

  function clearRidenHorses() {
    for (var i = 0; i<playerCharacter.playerHorses.length; i++) {
      playerCharacter.playerHorses[i].horseBeingRidden = "N";
    }
  }

  function removePlayerHorse(name) {
    if (document.getElementById("menuHorseExpandList").contains(document.getElementById(name))) {
      document.getElementById("menuHorseExpandList").removeChild(document.getElementById(name));
    }
    playerCharacter.playerHorses = playerCharacter.playerHorses.filter(horse => horse.horseName !== name);
    console.log("REMOVED: " + name + " " + playerCharacter.playerHorses);

  }
  

  function checkNPCLevel(NPC) {
    if(NPC.NPCRelationship >= 0 && NPC.NPCRelationship <5) {
      NPC.activeDialogue = NPC.dialogue1;
      NPC.questLevel = 1;
    } else if(NPC.NPCRelationship >= 5 && NPC.NPCRelationship <15) {
      NPC.activeDialogue = NPC.dialogue2;
      NPC.questLevel = 1;
    } else if (NPC.NPCRelationship >= 15) {
      NPC.activeDialogue = NPC.dialogue3;
      NPC.questLevel = 1;
    } 
  }

  function loadSound() {
    music = new Audio('assetsSound/willow-wing.wav');
    music.loop = true;
  }

  function playSound() {
    music.play();
  }

  function toggleSoundButton() {
    if (music.paused) {
      playSound();
    } else {
      music.pause();
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
    notifyPlayer,
    removePlayerHorse,
    clearRidenHorses,
    validateHorseName,
    music,
    loadSound,
    playSound,
    toggleSoundButton
  }
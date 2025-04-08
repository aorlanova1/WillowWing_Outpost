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
import {horseRecoloring} from './recoloringHorses.js';

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

    if(testHorse.horseSpriteSheet == "") {

      horseRecoloring.colorHorse(testHorse);


      if (testHorse.horseIcon == "") {
        var x = 0;
        var y = 0;
        var width = 32;
        var height = 32;
        var horseIconPic = new Image();
        horseIconPic.src = testHorse.horseSpriteSheet;
  
        horseIconPic.onload = function () {
        var tempCanvas1 = document.createElement('canvas');
        var tempCtx1 = tempCanvas1.getContext('2d');
        tempCanvas1.width = width;
        tempCanvas1.height = height;
        tempCtx1.drawImage(horseIconPic, 0, 0);

        testHorse.horseIcon = tempCanvas1.toDataURL();
        tempCtx1.clearRect(0, 0, tempCanvas1.width, tempCanvas1.height);
        }
      }
    } 
    
    if (!(testHorse.horseSpriteSheet instanceof Image)) {
        var tempHold = testHorse.horseSpriteSheet;
        testHorse.horseSpriteSheet = new Image();
        testHorse.horseSpriteSheet.src = tempHold;
    }

    ctx.drawImage(testHorse.horseSpriteSheet,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
      playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);


    if(testHorse.saddlePad != "") {
      if (!(testHorse.saddlePad.icon instanceof Image)) {
        var tempHold = testHorse.saddlePad.icon;
        testHorse.saddlePad.icon = new Image();
        testHorse.saddlePad.icon.src = tempHold;
      }
      ctx.drawImage(testHorse.saddlePad.icon,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
        playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
      }
    if(testHorse.bridle != "") {
      if (!(testHorse.bridle.icon instanceof Image)) {
        var tempHold = testHorse.bridle.icon;
        testHorse.bridle.icon = new Image();
        testHorse.bridle.icon.src = tempHold;
      }
      ctx.drawImage(testHorse.bridle.icon,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
        playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
  }
    if(testHorse.saddle != "") {
      if(!(testHorse.saddle.icon instanceof Image)) {
        var tempHold = testHorse.saddle.icon;
        testHorse.saddle.icon = new Image();
        testHorse.saddle.icon.src = tempHold;
      }
      ctx.drawImage(testHorse.saddle.icon,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
        playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
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
      console.log(
        horse.horseName + " GENETICS: " +
        "[" +
        horse.redBodyExpress +
        "]" +
        "[" +
        horse.greenBodyExpress +
        "]" +
        "[" +
        horse.blueBodyExpress +
        "]" +
        "[" +
        horse.greyBodyExpress +
        "]" +
        "[" +
        horse.redBodyLevel +
        "]" +
        "[" +
        horse.blueBodyLevel +
        "]" +
        "[" +
        horse.greenBodyLevel +
        "]" + " " + " " +
      
        "[" +
        horse.redManeExpress +
        "]" +
        "[" +
        horse.greenManeExpress +
        "]" +
        "[" +
        horse.blueManeExpress +
        "]" +
        "[" +
        horse.greyManeExpress +
        "]" +
        "[" +
        horse.redManeLevel +
        "]" +
        "[" +
        horse.blueManeLevel +
        "]" +
        "[" +
        horse.greenManeLevel +
        "]" + " " + " " +
      
        "[" +
        horse.faceMarkingGene1 +
        " " +
        horse.faceMarkingGene2 +
        " " +
        horse.faceMarkingGene3 +
        "]" +
        "[" +
        horse.neckMarkingGene1 +
        " " +
        horse.neckMarkingGene2 +
        "]" +
        "[" +
        horse.chestMarkingGene1 +
        " " +
        horse.chestMarkingGene2 +
        "]" +
        "[" +
        horse.bodyMarkingGene1 +
        " " +
        horse.bodyMarkingGene2 +
        " " +
        horse.bodyMarkingGene3 +
        "]" +
        "[" +
        horse.rumpMarkingGene1 +
        " " +
        horse.rumpMarkingGene2 +
        "]" +
        "[" +
        horse.frontLegMarkingGene1 +
        " " +
        horse.frontLegMarkingGene2 +
        " " +
        horse.frontLegMarkingGene3 +
        "]" +
        "[" +
        horse.backLegMarkingGene1 +
        " " +
        horse.backLegMarkingGene2 +
        " " +
        horse.backLegMarkingGene3 +
        "]" +
        " " +
        " " +
        "[" +
        horse.leftExpressionGene +
        "]" +
        "[" +
        horse.rightExpressionGene +
        "]" 
      )
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

  function findHorseByName(name) {
    for (var i = 0; i<playerCharacter.playerHorses.length; i++) {
      if (playerCharacter.playerHorses[i].horseName == name) {
        return playerCharacter.playerHorses[i];
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
    toggleSoundButton,
    findHorseByName
  }
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


function tackHorse(horseName, item) {
    var tackType = item.type;
    for(var i = 0; i<playerCharacter.playerHorses.length; i++) {
      if(playerCharacter.playerHorses[i].horseName == horseName) {
        if(playerCharacter.playerHorses[i][tackType] != "") {
          playerCharacter.playerHorses[i][tackType].ownedByPlayer++;
        }
        playerCharacter.playerHorses[i][tackType] = item;
        item.ownedByPlayer--;
        menus.exitMenu();
        var tackEvent = document.createElement('li');
        tackEvent.textContent = "You've put a " + item.name + " on "+ horseName;
        document.getElementById('eventInterface').appendChild(tackEvent);
  
        setTimeout(function() {
            document.getElementById('eventInterface').removeChild(tackEvent);
        }, 5000);
        break;
      }
    }
  }

  function feedHorse(horseName, item) {
    for(var i = 0; i<playerCharacter.playerHorses.length; i++) {
      if(playerCharacter.playerHorses[i].horseName == horseName) {
        playerCharacter.playerHorses[i].horseTrust++;
        item.ownedByPlayer--;
        menus.exitMenu();
        var feedEvent = document.createElement('li');
        feedEvent.textContent = "You've fed: " + horseName;
        document.getElementById('eventInterface').appendChild(feedEvent);
  
        setTimeout(function() {
            document.getElementById('eventInterface').removeChild(feedEvent);
        }, 5000);
        break;
      }
    }
  }

  function rideHorse(horse) {
    if(playerCharacter.activeRiddenHorse == "") {
        helpers.eraseHorse(horse);
    playerCharacter.activeRiddenHorse = horse;
    horse.horseBeingRidden = "Y";
    playerCharacter.activeRiddenHorse.spawnMap = playerCharacter.activeMap;
    playerCharacter.activeRiddenHorse.HorsePosCol = playerCharacter.SpriteColPos;
    playerCharacter.activeRiddenHorse.HorsePosRow = playerCharacter.SpriteRowPos;
    gameImages.SpriteImage.src = "Riding.png";
    helpers.eraseSprite();
    helpers.drawHorse(playerCharacter.activeRiddenHorse);
    helpers.drawSprite();
  } else if(horse.horseName == playerCharacter.activeRiddenHorse.horseName){
    playerCharacter.activeRiddenHorse.horseBeingRidden = "N";
    playerCharacter.activeRiddenHorse.spawnMap = "";
    playerCharacter.activeRiddenHorse.HorsePosCol = 10;
    playerCharacter.activeRiddenHorse.HorsePosRow = 10;
    playerCharacter.activeRiddenHorse = "";
    helpers.eraseHorse(playerCharacter.activeRiddenHorse);
    helpers.eraseSprite();
    gameImages.SpriteImage.src = "Character.png";
    helpers.drawSprite();
  } else {
    playerCharacter.activeRiddenHorse.horseBeingRidden = "N";
    playerCharacter.activeRiddenHorse.spawnMap = "";
    playerCharacter.activeRiddenHorse.HorsePosCol = 10;
    playerCharacter.activeRiddenHorse.HorsePosRow = 10;
    helpers.eraseHorse(playerCharacter.activeRiddenHorse);
    playerCharacter.activeRiddenHorse = horse;
    horse.horseBeingRidden = "Y";
    playerCharacter.activeRiddenHorse.spawnMap = playerCharacter.activeMap;
    playerCharacter.activeRiddenHorse.HorsePosCol = playerCharacter.SpriteColPos;
    playerCharacter.activeRiddenHorse.HorsePosRow = playerCharacter.SpriteRowPos;
    gameImages.SpriteImage.src = "Riding.png";
    helpers.eraseSprite();
    helpers.drawHorse(playerCharacter.activeRiddenHorse);
    helpers.drawSprite();
  }
  }

  function displayHorse(horseName) {
    for(var i = 0; i<playerCharacter.playerHorses.length; i++) {
      if(playerCharacter.playerHorses[i].horseName == horseName && playerCharacter.playerHorses[i].horseDisplayed == "N") {
        playerCharacter.playerHorses[i].spawnMap = maps.mapSix;
        playerCharacter.playerHorses[i].HorsePosCol = 5;
        playerCharacter.playerHorses[i].HorsePosRow = 5;
        playerCharacter.playerHorses[i].horseDisplayed = "Y";
      } else if(playerCharacter.playerHorses[i].horseName == horseName && playerCharacter.playerHorses[i].horseDisplayed == "Y") {
        playerCharacter.playerHorses[i].spawnMap = 0;
        helpers.eraseEnv(playerCharacter.playerHorses[i].HorsePosCol,playerCharacter.playerHorses[i].HorsePosRow);
        playerCharacter.playerHorses[i].horseDisplayed = "N";
      }
    }
  }

  function untackHorse(item, horse) {
    item.ownedByPlayer++;
    horse[item.type] = "";
  }

  function openHorseCard(horse) {
    horseCard.style.display = "block";
    document.getElementById("interested").textContent = horse.interested;
    document.getElementById("nervous").textContent = horse.nervous;
    document.getElementById("stuborn").textContent = horse.stuborn;
    document.getElementById("trecherous").textContent = horse.trecherous;
    document.getElementById("bond").textContent = horse.horseTrust;
    document.getElementById("displayed").textContent = horse.horseDisplayed;
    document.getElementById("sadpd").textContent = horse.saddlePad.name;
    if(horse.saddlePad != ""){
      var removeSP = document.createElement('button');
      removeSP.innerHTML = "untack";
      removeSP.addEventListener("click", ()=> untackHorse(horse.saddlePad, horse))
      document.getElementById("sadpd").appendChild(removeSP);
    }
    document.getElementById("saddle").textContent = horse.saddle.name;
    if(horse.saddle != ""){
      var removeSaddle = document.createElement('button');
      removeSaddle.innerHTML = "untack";
      removeSaddle.addEventListener("click", ()=> untackHorse(horse.saddle, horse))
      document.getElementById("saddle").appendChild(removeSaddle);
    }
    document.getElementById("bridle").textContent = horse.bridle.name;
    if(horse.bridle != ""){
      var removeBridle = document.createElement('button');
      removeBridle.innerHTML = "untack";
      removeBridle.addEventListener("click", ()=> untackHorse(horse.bridle, horse))
      document.getElementById("bridle").appendChild(removeBridle);
    }
  }


  export const ownedHorse = {
    tackHorse,
    feedHorse,
    rideHorse,
    displayHorse,
    untackHorse
  }
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

var miniGameActive = false;
var lassoCol;

function wildCatchMiniGame(horse) {
    if (miniGameActive) return; // Prevent starting another mini-game

    miniGameActive = true; // Set the flag to true
    var miniGameEventLog = document.createElement('li');
    var activeMapHolder = playerCharacter.activeMap;
    playerCharacter.SpriteColPos = 9;
    playerCharacter.SpriteRowPos = 9;
    horse.HorsePosCol = 9;
    horse.HorsePosRow = 6;
    var attempts = 0;
    playerCharacter.activeMap = maps.catchWild;
    if(playerCharacter.activeRiddenHorse != "") {
      playerCharacter.activeRiddenHorse.spawnMap = playerCharacter.activeMap;
      playerCharacter.activeRiddenHorse.HorsePosCol = playerCharacter.SpriteColPos;
      playerCharacter.activeRiddenHorse.HorsePosRow = playerCharacter.SpriteRowPos;
    }
    horse.spawnMap = playerCharacter.activeMap;
    console.log('entered wild mini attempts: ' + attempts);
    helpers.generateMap(maps.catchWild);

    const keyUpHandler = event => {
        if (event.code === 'Space' && playerCharacter.activeMap == maps.catchWild) {
            attempts++;
            console.log('Space pressed, attempts: ' + attempts);
            if (attempts == 5) {
                endMiniGame("You've failed to catch a wild!", horse, activeMapHolder);
            } else if (sendLasso(horse)) {
                endMiniGame("You've caught a wild! It took " + attempts + " attempts", horse, activeMapHolder);
                wildHorses.splice(helpers.findWildHorseIndex(), 1);
                createWilds();
                horse.spawnMap = 0;
                horse.HorsePosCol = 10;
                horse.HorsePosRow = 10;
                horse.horseName = prompt("Give your new horse a name!");
                playerCharacter.playerHorses.push(horse);
                var horseListItem = document.createElement('li');
                horseListItem.id = horse.horseName;
                var rideHorseButton = document.createElement('button');
                rideHorseButton.textContent = " toggle ride ";
                horseListItem.id = horse.horseName;
                var displayHorseButton = document.createElement('button');
                var openHorseCardButton = document.createElement('button');
                var horseIconList = document.createElement("img");
                horseIconList.setAttribute("src", horse.horseIcon);
                displayHorseButton.innerHTML = "Toggle Display";
                openHorseCardButton.innerHTML = "Info";
                horseListItem.textContent =  horse.horseName +":";
                horseListItem.appendChild(horseIconList);
                horseListItem.appendChild(displayHorseButton);
                horseListItem.appendChild(openHorseCardButton);
                horseListItem.appendChild(rideHorseButton);
                displayHorseButton.addEventListener("click", () => ownedHorse.displayHorse(horse.horseName));
                openHorseCardButton.addEventListener("click", () => openHorseCard(horse));
                rideHorseButton.addEventListener("click", () => ownedHorse.rideHorse(horse));
                menuHorseExpandList.appendChild(horseListItem);
            }
        }
    };

    document.addEventListener('keyup', keyUpHandler);

    function endMiniGame(message, horse, activeMapHolder) {
        attempts = 0;
        wildHorses.splice(helpers.findWildHorseIndex(), 1);
        createWilds();
        miniGameActive = false; // Reset the flag
        playerCharacter.activeMap = activeMapHolder;
        helpers.generateMap(playerCharacter.activeMap);
        if(playerCharacter.activeRiddenHorse != "") {
          playerCharacter.activeRiddenHorse.spawnMap = activeMapHolder;
          helpers.eraseSprite();
          helpers.drawHorse(playerCharacter.activeRiddenHorse);
          helpers.drawSprite();
        } else {
          helpers.eraseSprite();
          helpers.drawSprite();
        }
        miniGameEventLog.textContent = message;
        document.getElementById('eventInterface').appendChild(miniGameEventLog);
        document.removeEventListener('keyup', keyUpHandler); // Remove the event listener
        setTimeout(function() {
          document.getElementById('eventInterface').removeChild(miniGameEventLog);
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
      
      helpers.drawLasso(gameImages.lasso, lassoPosRow, lassoPosCol);
      if (lassoPosRow == horse.HorsePosRow && lassoPosCol == horse.HorsePosCol) {
        horseCaught = true;
      }
      setTimeout(function(){
        for (var x = 0; x <= distance; x++) {
            helpers.eraseEnv(lassoPosCol, lassoPosRow+x);
        } }, 100);
        if(horseCaught) {
          return true;
        }
    }
  return false;
  }

export const wildCatchGame = {
    wildCatchMiniGame,
    endMiniGame,
    sendLasso,
    miniGameActive,
    lassoCol
}
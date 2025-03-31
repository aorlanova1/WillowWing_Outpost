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
import { ownedHorse } from './ownedHorse.js';
import { movement } from './movement.js';
import { wildCatchGame } from './wildCatchingMiniGame.js';

var worldItems = [];

function putDownItem() {
    var hasChild;

    if(document.contains(document.getElementById("worldItem"))) { 
      hasChild= true;
    } else{hasChild= false;}

    if(hasChild) {
      document.getElementById("eventInterface").removeChild(document.getElementById("worldItem"));
    }

    var itemAtSpot = checkExistingItem();

    if(itemAtSpot == "") {
    var randNumber = helpers.randomIntFromInterval(1,120);
    if (randNumber <=10) {
      var biome = playerCharacter.activeMap.mapBackground;
      var itemValue = items.possibleItems[biome][helpers.randomIntFromInterval(1,3)];
      var worldItemNotify = document.createElement('li');
      var collectItemButton = document.createElement('button');
      collectItemButton.innerHTML = "collect";
      worldItemNotify.id = "worldItem"
      worldItems.push(new classDefinitions.item(itemValue, playerCharacter.SpriteColPos, playerCharacter.SpriteRowPos,playerCharacter.spriteMapCol,playerCharacter.spriteMapRow));
      itemAtSpot = worldItems[worldItems.length-1];
      collectItemButton.addEventListener("click", () => collectItem(itemAtSpot));
      worldItemNotify.textContent = ("Item found: " + itemAtSpot.item.name + " ");
      worldItemNotify.appendChild(collectItemButton);
      document.getElementById("eventInterface").appendChild(worldItemNotify);
    }
    } else {
      var worldItemNotify = document.createElement('li');
      worldItemNotify.id = "worldItem"
      var collectItemButton = document.createElement('button');
      collectItemButton.innerHTML = "collect";
      collectItemButton.addEventListener("click", () => collectItem(itemAtSpot));
      worldItemNotify.textContent = ("Item found: " + itemAtSpot.item.name + " ");
      worldItemNotify.appendChild(collectItemButton);
      document.getElementById("eventInterface").appendChild(worldItemNotify);
    }
  }

  function checkExistingItem() {
    for(var i = 0; i<worldItems.length; i++) {
      if(playerCharacter.spriteMapCol == worldItems[i].itemMapCol && playerCharacter.spriteMapRow == worldItems[i].itemMapRow
        && playerCharacter.SpriteColPos == worldItems[i].itemColPos && playerCharacter.SpriteRowPos == worldItems[i].ItemRowPos) {
          return worldItems[i];
        }
    }
    return "";
  }

  function collectItem(itemToCollect) {
    var playersItem = playerCharacter.playerItems.has(itemToCollect.item.name) ? playerCharacter.playerItems.get(itemToCollect.item.name) : "";
    if(playersItem == "") {
    itemToCollect.item.ownedByPlayer++;
    playerCharacter.playerItems.set(itemToCollect.item.name, itemToCollect.item);
  } else {
    playersItem.ownedByPlayer++;
    playerCharacter.playerItems.set(playersItem.name, playersItem);
  }
  
    for(var i = 0; i<worldItems.length; i++) {
      if(playerCharacter.spriteMapCol == worldItems[i].itemMapCol && playerCharacter.spriteMapRow == worldItems[i].itemMapRow
        && playerCharacter.SpriteColPos == worldItems[i].itemColPos && playerCharacter.SpriteRowPos == worldItems[i].ItemRowPos) {
          worldItems.splice(i,1);
        }
    }
    document.getElementById("eventInterface").removeChild(document.getElementById("worldItem"));
  }

  function checkSuroundings() {
    if(document.contains(document.getElementById("knock"))) { 
    document.getElementById("eventInterface").removeChild(document.getElementById("knock"));
    }
    var NPCAtHome = "";
    if(playerCharacter.activeMap[playerCharacter.activeMap.mapLayout[playerCharacter.SpriteRowPos-1][playerCharacter.SpriteColPos]] == gameImages.home
      || playerCharacter.activeMap[playerCharacter.activeMap.mapLayout[playerCharacter.SpriteRowPos-1][playerCharacter.SpriteColPos]] == gameImages.stoneHome
      || playerCharacter.activeMap[playerCharacter.activeMap.mapLayout[playerCharacter.SpriteRowPos-1][playerCharacter.SpriteColPos]] == gameImages.tower
    ) {
      for(var i = 0; i<npcFunctionality.NPCs.length; i++) {
        if(npcFunctionality.NPCs[i].row == playerCharacter.SpriteRowPos-1 && npcFunctionality.NPCs[i].col == playerCharacter.SpriteColPos) {
          NPCAtHome = npcFunctionality.NPCs[i];
          break;
        }
      }
      if(NPCAtHome != "") {
        var atHomeNotify = document.createElement('li');
        atHomeNotify.id = "knock";
        atHomeNotify.textContent = "Looks like there's someone home... ";
        var knockButton = document.createElement('button');
        knockButton.innerHTML = "knock";
        knockButton.addEventListener("click", () => npcFunctionality.enterHome(NPCAtHome));
        atHomeNotify.appendChild(knockButton);
        document.getElementById("eventInterface").appendChild(atHomeNotify);
    } 
    }

  }

  function isPlayerOnWild() {
    for (var i = 0; i<5; i++) {
      if (wildHorses.allWildHorses[i].HorseMapPosRow == playerCharacter.spriteMapRow && wildHorses.allWildHorses[i].HorseMapPosCol == playerCharacter.spriteMapCol
        && wildHorses.allWildHorses[i].HorsePosCol == playerCharacter.SpriteColPos && wildHorses.allWildHorses[i].HorsePosRow == playerCharacter.SpriteRowPos) {
        onWildEvent(wildHorses.allWildHorses[i]);
      }
    }
  }

  function onWildEvent(horse) {
    var wildEvent = document.createElement('li');
    var wildEventButton = document.createElement('button');
    wildEventButton.innerHTML = "catch!";
    wildEvent.textContent = "You've encountered a wild!   ";
    wildEvent.appendChild(wildEventButton);
    wildEventButton.addEventListener("click", () => wildCatchGame.wildCatchMiniGame(horse));
    document.getElementById('eventInterface').appendChild(wildEvent);
    
    setTimeout(function() {
        document.getElementById('eventInterface').removeChild(wildEvent);
    }, 5000);
}

  export const worldInteractions = {
    worldItems,
    putDownItem,
    checkExistingItem,
    collectItem,
    checkSuroundings,
    isPlayerOnWild,
    onWildEvent
  }
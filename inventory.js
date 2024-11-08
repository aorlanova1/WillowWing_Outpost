import { gameImages } from './gameImages.js';
import { worldMapsStore } from './maps.js';
import { items } from './items.js';
import { horsePhysical } from './horseAttributes.js';
import { classDefinitions } from './classDefinitions.js';
import {npcFunctionality} from './npcFunctionality.js';
import { helpers } from './helpers.js';
import { playerCharacter } from './playerCharacter.js';
import { menus } from './menus.js';
import { wildHorses } from './wildHorses.js';
import { worldInteractions } from './worldInteractions.js';
import { ownedHorse } from './ownedHorse.js';
import { movement } from './movement.js';
import { wildCatchGame } from './wildCatchingMiniGame.js';

function fillInventoryMenu() {
    while(document.getElementById("menuInventoryExpandList").contains(document.getElementById("inventoryItem"))) {
      document.getElementById("menuInventoryExpandList").removeChild(document.getElementById("inventoryItem"));
    }

    playerCharacter.playerItems.forEach((item, itemName) =>{
      if(item.ownedByPlayer != 0) {
      var listItem = document.createElement('li'); 
      listItem.id = "inventoryItem";
      listItem.textContent = itemName + ", qty: " + item.ownedByPlayer;
      if(item.type == "Feed") {
        var dropDownFeedMenu = document.createElement('SELECT');
        var feedHorseButton = document.createElement('button');
        feedHorseButton.textContent = " feed";
        playerCharacter.playerHorses.forEach(horsie => {
          var horseInFeedList = document.createElement('option');
          horseInFeedList.value = horsie.horseName;
          horseInFeedList.text = horsie.horseName;
          dropDownFeedMenu.add(horseInFeedList);
        })
        feedHorseButton.addEventListener("click", () => ownedHorse.feedHorse(dropDownFeedMenu.value, item));
        listItem.appendChild(dropDownFeedMenu);
        listItem.appendChild(feedHorseButton);
      } else if (item.type == "saddlePad" || item.type == "saddle" || item.type == "bridle") {
        var dropDownTackMenu = document.createElement('SELECT');
        var addTackToHorseButton = document.createElement('button');
        addTackToHorseButton.textContent = " tack";
        playerCharacter.playerHorses.forEach(horsie => {
          var horseToTack = document.createElement('option');
          horseToTack.value = horsie.horseName;
          horseToTack.text = horsie.horseName;
          dropDownTackMenu.add(horseToTack);
        })
        addTackToHorseButton.addEventListener("click", () => ownedHorse.tackHorse(dropDownTackMenu.value, item));
        listItem.appendChild(dropDownTackMenu);
        listItem.appendChild(addTackToHorseButton);
      }
      document.getElementById("menuInventoryExpandList").appendChild(listItem);
    }});
  }

  export const inventory ={
    fillInventoryMenu
  }
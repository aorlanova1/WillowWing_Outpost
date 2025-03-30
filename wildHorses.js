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
import { worldInteractions } from './worldInteractions.js';
import { ownedHorse } from './ownedHorse.js';
import { movement } from './movement.js';
import { wildCatchGame } from './wildCatchingMiniGame.js';
import { geneticsHelper } from './horseGeneticHelper.js';

// Store all wild horses, max of 5. 
var allWildHorses = [];

function createHorseTESTING() {
  var holder = new classDefinitions.horse(horsePhysical.horseAttributes.horseDynamicBase[1], horsePhysical.horseAttributes.horseDynamicMane[1],horsePhysical.horseAttributes.horseDynamicManeShade[1],
    helpers.randomIntFromInterval(0,50), helpers.randomIntFromInterval(0,50), helpers.randomIntFromInterval(0,50), helpers.randomIntFromInterval(0,50));
    geneticsHelper.createGenetics(holder);
    holder.horseName = "peanut";
    holder.HorseMapPosCol = 1;
    holder.HorseMapPosRow = 2;
    holder.HorsePosCol =10;
    holder.HorsePosRow = 10;
    playerCharacter.playerHorses.push(holder);

    var holder1 = new classDefinitions.horse(horsePhysical.horseAttributes.horseDynamicBase[1], horsePhysical.horseAttributes.horseDynamicMane[1],horsePhysical.horseAttributes.horseDynamicManeShade[1],
      helpers.randomIntFromInterval(0,50), helpers.randomIntFromInterval(0,50), helpers.randomIntFromInterval(0,50), helpers.randomIntFromInterval(0,50));
      geneticsHelper.createGenetics(holder1);
      holder1.horseName = "vasyk";
      holder1.HorseMapPosCol = 1;
      holder1.HorseMapPosRow = 2;
      holder1.HorsePosCol =10;
      holder1.HorsePosRow = 10;
      playerCharacter.playerHorses.push(holder1);
  }

function createHorse() {
    var holder = new classDefinitions.horse(horsePhysical.horseAttributes.horseDynamicBase[1], horsePhysical.horseAttributes.horseDynamicMane[1],horsePhysical.horseAttributes.horseDynamicManeShade[1],
      helpers.randomIntFromInterval(0,50), helpers.randomIntFromInterval(0,50), helpers.randomIntFromInterval(0,50), helpers.randomIntFromInterval(0,50));
      geneticsHelper.createGenetics(holder);
      helpers.randomWorldWilds(holder, 0,3,0,4);
      helpers.randomIntFromIntervalForWilds(holder);

      return holder;
    }
    
    function createWilds() {
        while (allWildHorses.length < 5) {
            allWildHorses.push(createHorse());
        }
      spawnWilds();
    }
    
    function spawnWilds() {
      for(var i = 0; i<allWildHorses.length; i++) {
        if (allWildHorses[i].HorseMapPosRow == playerCharacter.spriteMapRow && allWildHorses[i].HorseMapPosCol == playerCharacter.spriteMapCol) {
            helpers.drawHorse(allWildHorses[i]);
        }
      }
    }


export const wildHorses = {
    allWildHorses,
    createHorse,
    createWilds,
    spawnWilds,
    createHorseTESTING
}
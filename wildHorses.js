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

// Store all wild horses, max of 5. 
var allWildHorses = [];

function createHorse() {
    var holder = new classDefinitions.horse(horsePhysical.horseAttributes.horseBase[1],horsePhysical.horseAttributes.maneBase[1],horsePhysical.horseAttributes.maneShade[1],
      horsePhysical.horseAttributes.maneColor[helpers.randomIntFromInterval(1,16)],horsePhysical.horseAttributes.baseColor[helpers.randomIntFromInterval(1,16)],
      horsePhysical.horseAttributes.markings[helpers.randomIntFromInterval(1,13)], horsePhysical.horseAttributes.gradient[helpers.randomIntFromInterval(1,16)], worldMapsStore.worldMaps.maps[helpers.randomWorldWilds(1, 17)], 
      helpers.randomIntFromInterval(0,50), helpers.randomIntFromInterval(0,50), helpers.randomIntFromInterval(0,50), helpers.randomIntFromInterval(0,50));
      helpers.randomIntFromIntervalForWilds(holder);
    
    return holder;
    }
    
    function createWilds() {
        while (allWildHorses.length < 5) {
            allWildHorses.push(createHorse());
        }
        console.log("new horses generated! " + allWildHorses.length);
      spawnWilds();
    }
    
    function spawnWilds() {
      for(var i = 0; i<allWildHorses.length; i++) {
        if (allWildHorses[i].spawnMap == playerCharacter.activeMap) {
            helpers.drawHorse(allWildHorses[i]);
        }
      }
    }


export const wildHorses = {
    allWildHorses,
    createHorse,
    createWilds,
    spawnWilds
}
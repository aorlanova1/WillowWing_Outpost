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

// Store all wild horses, max of 5. 
var wildHorses = [];

function createHorse() {
    var holder = new classDefinitions.horse(horsePhysical.horseAttributes.horseBase[1],horsePhysical.horseAttributes.maneBase[1],horsePhysical.horseAttributes.maneShade[1],
      horsePhysical.horseAttributes.maneColor[helpers.randomIntFromInterval(1,16)],horsePhysical.horseAttributes.baseColor[helpers.randomIntFromInterval(1,16)],
      horsePhysical.horseAttributes.markings[helpers.randomIntFromInterval(1,13)], horsePhysical.horseAttributes.gradient[helpers.randomIntFromInterval(1,16)], maps.worldMaps.maps[helpers.randomWorldWilds(1, 10)], 
      helpers.randomIntFromInterval(0,50), helpers.randomIntFromInterval(0,50), helpers.randomIntFromInterval(0,50), helpers.randomIntFromInterval(0,50));
      helpers.randomIntFromIntervalForWilds(holder);
    
    return holder;
    }
    
    function createWilds() {
        while (wildHorses.length < 5) {
          wildHorses.push(createHorse());
        }
        console.log("new horses generated! " + wildHorses.length);
      spawnWilds();
    }
    
    function spawnWilds() {
      for(var i = 0; i<5; i++) {
        if (wildHorses[i].spawnMap == playerCharacter.activeMap) {
            helpers.drawHorse(wildHorses[i]);
        }
      }
    }


export const wildHorses = {
    wildHorses,
    createHorse,
    createWilds,
    spawnWilds
}
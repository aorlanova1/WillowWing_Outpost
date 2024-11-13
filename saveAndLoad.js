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
import { worldInteractions } from './worldInteractions.js';
import { ownedHorse } from './ownedHorse.js';
import { movement } from './movement.js';
import { wildCatchGame } from './wildCatchingMiniGame.js';
import {worldNPCs} from './npcDefinitions.js';

//LOCAL STORAGE:
// NPCs
// player horses
// player coin
// inventory


function saveGame() {
        //localStorage.setItem("NPCs", JSON.stringify(npcFunctionality.NPCs));
        var horseToSave = playerCharacter.playerHorses.map(horse => {
            return {
                ...horse, 
                horseBase: horse.horseBase.src, 
                maneBase: horse.maneBase.src,
                maneShade: horse.maneShade.src,
                maneColor: horse.maneColor.src,
                baseColor: horse.baseColor.src,
                markings: horse.markings.src,
                gradient: horse.gradient.src
            };
        });
        localStorage.setItem("playerHorses", JSON.stringify(horseToSave));
        localStorage.setItem("playerCoin", JSON.stringify(playerCharacter.playerCoin));
        localStorage.setItem("NPCs", JSON.stringify(npcFunctionality.NPCs));
        localStorage.setItem("playerInventory", JSON.stringify(Array.from(playerCharacter.playerItems.entries())));
}

function loadGame() {
    playerCharacter.playerHorses = JSON.parse(localStorage.getItem("playerHorses"));
    playerCharacter.playerHorses.forEach(horse => {

        const horseBaseImg = new Image(); 
        horseBaseImg.src = horse.horseBase; 

        const maneShadeImg = new Image(); 
        maneShadeImg.src = horse.maneShade; 

        const maneColorImg = new Image(); 
        maneColorImg.src = horse.maneColor; 

        const baseColoreImg = new Image(); 
        baseColoreImg.src = horse.baseColor; 

        const markingsImg = new Image(); 
        markingsImg.src = horse.markings; 

        const gradientImg = new Image(); 
        gradientImg.src = horse.gradient; 

        const maneBaseImg = new Image(); 
        maneBaseImg.src = horse.maneBase; 

        horse.horseBase = horseBaseImg;
        horse.maneBase =  maneBaseImg;
        horse.maneShade =  maneShadeImg;
        horse.maneColor = maneColorImg;
        horse.baseColor =  baseColoreImg
        horse.markings =  markingsImg;
        horse.gradient =  gradientImg;

        if (horse.horseDisplayed == "Y") {
            horse.spawnMap = worldMapsStore.mapSix;
          } 
    });
    playerCharacter.playerCoin = JSON.parse(localStorage.getItem("playerCoin"));
    playerCharacter.playerItems =  new Map(JSON.parse(localStorage.getItem("playerInventory")));
    npcFunctionality.NPCs = JSON.parse(localStorage.getItem("NPCs"));
    document.getElementById("enterScreen").style.display = "none";
    initializeGame();
}

function initializeGame() {
    helpers.generateMap(worldMapsStore.mapStarter);
      helpers.drawSprite();
      wildHorses.createWilds();
      menus.initializeMenus();
      menus.buttonEvents();
      helpers.updateBank();
      worldNPCs.createQuests();
}

function initializeNewGame() {
    helpers.generateMap(worldMapsStore.mapStarter);
      helpers.drawSprite();
      wildHorses.createWilds();
      menus.initializeMenus();
      menus.buttonEvents();
      helpers.updateBank();
      worldNPCs.createNPCs();
      worldNPCs.createQuests();
}

export const gameState = {
    saveGame,
    loadGame,
    initializeNewGame,
    initializeGame
}
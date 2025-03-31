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
        var horseToSave = playerCharacter.playerHorses.map(horse => {
            return {
                ...horse, 
                horseBase: horse.horseBase.src, 
                maneBase: horse.maneBase.src,
                HorseMapPosRow: horse.HorseMapPosRow,
                HorseMapPosCol: horse.HorseMapPosCol,
                HorsePosRow: horse.HorsePosRow,
                HorsePosCol: horse.HorsePosCol,
                saddlePad: convertTackToSrc(horse.saddlePad),
                saddle: convertTackToSrc(horse.saddle),
                bridle: convertTackToSrc(horse.bridle),
                horseSpriteSheet: horse.horseSpriteSheet.src
            };
        });
        localStorage.setItem("playerHorses", JSON.stringify(horseToSave));
        localStorage.setItem("playerCoin", JSON.stringify(playerCharacter.playerCoin));
        localStorage.setItem("NPCs", JSON.stringify(npcFunctionality.NPCs));
        localStorage.setItem("playerInventory", JSON.stringify(Array.from(playerCharacter.playerItems.entries())));
        localStorage.setItem("spriteMapCol", JSON.stringify(playerCharacter.spriteMapCol));
        localStorage.setItem("spriteMapRow", JSON.stringify(playerCharacter.spriteMapRow));
        localStorage.setItem("SpriteColPos", JSON.stringify(playerCharacter.SpriteColPos));
        localStorage.setItem("SpriteColRow", JSON.stringify(playerCharacter.SpriteRowPos));
}

function convertTackToSrc(item) {
   if(item.icon instanceof Image) {
    item.icon = item.icon.src;
    return item;
   } else {
    return item;
   }
}

function loadGame() {
    playerCharacter.playerHorses = JSON.parse(localStorage.getItem("playerHorses"));
    playerCharacter.playerHorses.forEach(horse => {

        const horseBaseImg = new Image(); 
        horseBaseImg.src = horse.horseBase; 

        const maneBaseImg = new Image(); 
        maneBaseImg.src = horse.maneBase; 

        horse.horseBase = horseBaseImg;
        horse.maneBase =  maneBaseImg;

        const horseSpriteSheet = new Image();
        horseSpriteSheet.src = horse.horseSpriteSheet;
        horseSpriteSheet.onload = function() {
            horse.horseSpriteSheet = horseSpriteSheet;
        };
        horse.spawnMap = horse.HorseMapPosRow != null ? worldMapsStore.worldMaps.maps[worldMapsStore.worldMaps.mapLayout[horse.HorseMapPosRow][horse.HorseMapPosCol]] : 0;
    });
    playerCharacter.playerCoin = JSON.parse(localStorage.getItem("playerCoin"));
    playerCharacter.playerItems =  new Map(JSON.parse(localStorage.getItem("playerInventory")));
    npcFunctionality.NPCs = JSON.parse(localStorage.getItem("NPCs"));
    playerCharacter.spriteMapCol = JSON.parse(localStorage.getItem("spriteMapCol"));
    playerCharacter.spriteMapRow = JSON.parse(localStorage.getItem("spriteMapRow"));
    playerCharacter.SpriteColPos = JSON.parse(localStorage.getItem("SpriteColPos"));
    playerCharacter.SpriteRowPos = JSON.parse(localStorage.getItem("SpriteColRow"));
    playerCharacter.activeMap = worldMapsStore.worldMaps.maps[worldMapsStore.worldMaps.mapLayout[playerCharacter.spriteMapRow][playerCharacter.spriteMapCol]]
    document.getElementById("enterScreen").style.display = "none";
    initializeGame();
}

function initializeGame() {
    wildHorses.createWilds();
    helpers.generateMap(playerCharacter.activeMap);
      helpers.drawSprite();
      menus.initializeMenus();
      menus.buttonEvents();
      helpers.updateBank();
      worldNPCs.createQuests();
}

function initializeNewGame() {
    wildHorses.createWilds();
    helpers.generateMap(playerCharacter.activeMap);
      helpers.drawSprite();
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
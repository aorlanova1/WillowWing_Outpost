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
        var horseToSaveTack1 = (JSON.stringify(playerCharacter.playerHorses));
        var horseToSaveTack = JSON.parse(horseToSaveTack1);
        console.log(horseToSaveTack[0].horseBase.src);
        horseToSaveTack.foreach(horse => {

            var saddleToSave = horse.saddle;
            if(saddleToSave !== "") {
                var saddleSrc = saddleToSave.icon.src;
                saddleToSave.icon = saddleSrc;
            }  

            var saddlePadToSave = horse.saddlePad;
            if(saddlePadToSave !== "") {
                var saddlePadSrc = saddlePadToSave.icon.src;
                saddlePadToSave.icon = saddlePadSrc;
            }  

             var bridleToSave = horse.bridle;
            if(bridleToSave !== "") {
                var bridleSrc = bridleToSave.icon.src;
                bridleToSave.icon = bridleSrc;
            } 
            
            horse.horseBase = horse.horseBase.src;
            horse.maneBase = horse.maneBase.src;
            horse.maneShade = horse.maneShade.src;
            horse.maneColor = horse.maneColor.src;
            horse.baseColor = horse.baseColor.src,
            horse.markings = horse.markings.src;
            horse.gradient = horse.gradient.src;

            console.log(" saving " + " base: " + horse.horseBase + " pad: " + horse.saddlePad.icon);

            console.log("saddle pad on current horse: " + horse.saddlePad.icon);
        });
        localStorage.setItem("playerHorses", JSON.stringify(horseToSave));
        localStorage.setItem("playerCoin", JSON.stringify(playerCharacter.playerCoin));
        localStorage.setItem("NPCs", JSON.stringify(npcFunctionality.NPCs));
        localStorage.setItem("playerInventory", JSON.stringify(Array.from(playerCharacter.playerItems.entries())));
}

function loadGame() {
    var horseToLoad = JSON.parse(localStorage.getItem("playerHorses"));
    horseToLoad.forEach(horse => {

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

        const saddlePad = new Image();
        const saddle = new Image();
        const bridle = new Image();

        if(horse.saddlePad !== "") {
            saddlePad.src =horse.saddlePad.icon;
            horse.saddlePad.icon = saddlePad;
        }
        if (horse.saddle !== "") {
            saddle.src = horse.saddle.icon;
            horse.saddle.icon = saddle;
        }
        if(horse.bridle !== "") {
            bridle.src = horse.bridle.icon;
            horse.bridle.icon = bridle;
        }

        horse.horseBase = horseBaseImg;
        horse.maneBase =  maneBaseImg;
        horse.maneShade =  maneShadeImg;
        horse.maneColor = maneColorImg;
        horse.baseColor =  baseColoreImg
        horse.markings =  markingsImg;
        horse.gradient =  gradientImg;

        console.log("LOADED BASE: " + horse.horseBase.src + "PAD: " + horse.saddlePad.icon.src);
    });
    playerCharacter.playerHorses = horseToLoad;
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
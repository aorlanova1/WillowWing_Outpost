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
// active character map and character map position
var spriteMapCol = 1;
var spriteMapRow = 2;
var activeMap = maps.worldMaps.maps[maps.worldMaps.mapLayout[spriteMapRow][spriteMapCol]];
//main character
var SpriteRow = 0;   
var SpriteCol = 0;       
var SpriteColPos = 5;     
var SpriteRowPos = 5;
var SpriteWidth = 32;   
var SpriteHeight = 32;
var playerCoin = 0;
var activeRiddenHorse = "";
var playerHorses = [];
var playerItems = new Map();

export const playerCharacter = {
    spriteMapCol,
    spriteMapRow,
    activeMap,
    SpriteRow,
    SpriteCol,
    SpriteColPos,
    SpriteRowPos,
    SpriteWidth,
    SpriteHeight,
    playerCoin,
    activeRiddenHorse,
    playerHorses,
    playerItems
}
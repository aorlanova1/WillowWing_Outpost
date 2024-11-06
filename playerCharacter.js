import { maps } from './maps.js';

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
    playerHorses
}
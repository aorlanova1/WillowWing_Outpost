import { playerCharacter } from './playerCharacter.js';

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function randomIntFromIntervalForWilds(horseInput) { 
    var row = Math.floor(Math.random() * (14));
    var col = Math.floor(Math.random() * (19));
    if (horseInput.spawnMap.mapLayout[row][col] == 0 && horseInput.spawnMap.mapLayout[row] != playerCharacter.SpriteRowPos && horseInput.spawnMap.mapLayout[col] != playerCharacter.SpriteColPos) {
        horseInput.HorsePosRow = row;
        horseInput.HorsePosCol = col;
    } else {
        randomIntFromIntervalForWilds(horseInput);
    }
}

function randomWorldWilds(min, max) { 
    var wildMap = Math.floor(Math.random() * (max - min + 1) + min);
    while(wildMap != 100) {
      if(wildMap != 6 && wildMap != 7) {
      return wildMap;
    } else {
      wildMap = Math.floor(Math.random() * (max - min + 1) + min);
    }
  }}
  
  export const helpers = {
    randomIntFromInterval,
    randomIntFromIntervalForWilds,
    randomWorldWilds
  }
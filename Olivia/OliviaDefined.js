//action bank -> what number defines th action the person should take
//generated once every few hours of play

//the olivia folder should talk to the main game in succession.

class Olivia {
  constructor(spriteMapCol,spriteMapRow, homeX, homeY,SpriteRow, SpriteCol, SpriteColPos,SpriteRowPos,playerSprite, playerEnergy) {
    // active character map and character map position
    this.spriteMapCol = spriteMapCol;
    this.spriteMapRow = spriteMapRow;
    this.homeX = homeX;
    this.homeY = homeY;
    this.activeMap;
    // character
    this.SpriteRow = SpriteRow;   
    this.SpriteCol = SpriteCol;       
    this.SpriteColPos = SpriteColPos;     
    this.SpriteRowPos = SpriteRowPos;
    this.SpriteWidth = 32;   
    this.SpriteHeight = 32;
    this.playerCoin = 0;
    this.activeRiddenHorse = "";
    this.playerHorses = [];
    this.playerItems = new Map();
    this.playerSprite = playerSprite;
    this.playerSpriteImage;
    this.playerEnergy = playerEnergy;
  }
}

export const OliviaDefinitions = {
    Olivia
}
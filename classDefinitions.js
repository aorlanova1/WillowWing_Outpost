class horseQuest {
  constructor(dialogueStart, dialogueEnd,interestedMin, interestedMax,nervousMin, nervousMax, stubornMin, stubornMax,trecherousMin, trecherousMax,bondMin, reward) {
    this.dialogueStart = dialogueStart;
    this.dialogueEnd = dialogueEnd;
    this.interestedMin = interestedMin;
    this.interestedMax = interestedMax;
    this.nervousMin = nervousMin;
    this.nervousMax = nervousMax;
    this.stubornMin = stubornMin;
    this.stubornMax = stubornMax;
    this.trecherousMin = trecherousMin;
    this.trecherousMax = trecherousMax;
    this.bondMin = bondMin;
    this.reward = reward;
  }
}

class itemQuest {
  constructor(dialogueStart, dialogueEnd, itemRequest, reward) {
    this.dialogueStart = dialogueStart;
    this.dialogueEnd = dialogueEnd;
    this.itemRequest = itemRequest;
    this.reward = reward;
  }
}

class shopQuest {
  constructor(dialogueStart, dialogueEnd, inventory) {
    this.dialogueStart = dialogueStart;
    this.dialogueEnd = dialogueEnd;
    this.inventory = inventory;
  }
}

class item {
  constructor(item, itemColPos,ItemRowPos, itemMapCol,itemMapRow) {
    this.item = item;
    this.itemColPos = itemColPos;
    this.ItemRowPos = ItemRowPos;
    this.itemMapCol = itemMapCol;
    this.itemMapRow = itemMapRow;
  }
}

class horse {
  constructor(horseBase,maneBase,maneShade,maneColor,baseColor,markings, gradient,interested,nervous,stuborn,trecherous) {
  this.horseBase = horseBase;
  this.maneBase = maneBase;
  this.maneShade = maneShade;
  this.maneColor = maneColor;
  this.baseColor = baseColor;
  this.markings = markings;
  this.gradient = gradient;
  this.spawnMap = "";
  this.interested = interested;
  this.nervous = nervous;
  this.stuborn = stuborn;
  this.trecherous = trecherous;
  this.HorseRow = 0;
  this.HorseCol = 0;
  this.MaxHorseSpriteRow = 4;
  this.MaxHorseSpriteCol = 1;
  this.HorseMapPosRow = null;
  this.HorseMapPosCol = null;
  this.HorsePosRow = 0;
  this.HorsePosCol = 0;
  this.horseTrust = 0;
  this.horseName = "unnamed";
  this.horseIcon = "";
  this.horseSpriteSheet = "";
  this.horseDisplayed = "N";
  this.horseBeingRidden = "N";
  this.saddlePad = "";
  this.saddle = "";
  this.bridle = "";
  }
}

class NPC {
  constructor(name,dialogue1, dialogue2, dialogue3, art,map,col,row){
    this.name = name;
    this.dialogue1 = dialogue1;
    this.dialogue2 = dialogue2;
    this.dialogue3 = dialogue3;
    this.art = art;
    this.map = map;
    this.col = col;
    this.row = row;
    this.NPCRelationship = 0;
    this.questLevel = "";
    this.activeDialogue = "";
    this.activeQuest = "";
    this.activeQuestRequestText = "";
    }
}

export const classDefinitions = {
  horseQuest,
  itemQuest,
  shopQuest,
  item,
  horse,
  NPC
}
import { gameImages } from './gameImages.js';

// Store all wild horses, max of 5. 
var wildHorses = [];

//player horses
var playerHorses = [];

//World and Player items
var worldItems = [];
var playerItems = new Map();

//water pond
var WaterPondSpriteRow = 0;   
var WaterPondSpriteCol = 0;      
var WaterPondMaxSpriteRow = 1;   
var WaterPondMaxSpriteCol = 1; 

var horseTack = {
  saddlePads: {
    1: {
      name: "black saddle pad",
      icon: gameImages.blackSP,
      type: "saddlePad",
      ownedByPlayer: 0,
    },
    2: {
      name: "blue saddle pad",
      icon: gameImages.blueSP,
      type: "saddlePad",
      ownedByPlayer: 0,
    },
    3: {
      name: "brown saddle pad",
      icon: gameImages.brownSP,
      type: "saddlePad",
      ownedByPlayer: 0,
    },
    4: {
      name: "green saddle pad",
      icon: gameImages.greenSP,
      type: "saddlePad",
      ownedByPlayer: 0,
    },
    5: {
      name: "indigo saddle pad",
      icon: gameImages.indigoSP,
      type: "saddlePad",
      ownedByPlayer: 0,
    },
    6: {
      name: "light glass saddle pad",
      icon: gameImages.lightGlassSP,
      type: "saddlePad",
      ownedByPlayer: 0,
    },
    7: {
      name: "mosi1 saddle pad",
      icon: gameImages.mosi1SP,
      type: "saddlePad",
      ownedByPlayer: 0,
    },
    8: {
      name: "mosi2 saddle pad",
      icon: gameImages.mosi2SP,
      type: "saddlePad",
      ownedByPlayer: 0,
    },
    9: {
      name: "neon yellow saddle pad",
      icon: gameImages.neonYellowSP,
      type: "saddlePad",
      ownedByPlayer: 0,
    },
    10: {
      name: "orange saddle pad",
      icon: gameImages.orangeSP,
      type: "saddlePad",
      ownedByPlayer: 0,
    },
    11: {
      name: "orange cream saddle pad",
      icon: gameImages.orangeCreamSP,
      type: "saddlePad",
      ownedByPlayer: 0,
    },
    12: {
      name: "periwinkle saddle pad",
      icon: gameImages.periwinkleSP,
      type: "saddlePad",
      ownedByPlayer: 0,
    },
    13: {
      name: "pink saddle pad",
      icon: gameImages.pinkSP,
      type: "saddlePad",
      ownedByPlayer: 0,
    },
    14: {
      name: "red saddle pad",
      icon: gameImages.redSP,
      type: "saddlePad",
      ownedByPlayer: 0,
    },
    15: {
      name: "robin saddle pad",
      icon: gameImages.robinSP,
      type: "saddlePad",
      ownedByPlayer: 0,
    },
    16: {
      name: "sea glass saddle pad",
      icon: gameImages.seaGlassSP,
      type: "saddlePad",
      ownedByPlayer: 0,
    },
    17: {
      name: "tan saddle pad",
      icon: gameImages.tanSP,
      type: "saddlePad",
      ownedByPlayer: 0,
    },
    18: {
      name: "white saddle pad",
      icon: gameImages.whiteSP,
      type: "saddlePad",
      ownedByPlayer: 0,
    },
    19: {
      name: "white saddle pad (duplicate)",
      icon: gameImages.whiteSP,
      type: "saddlePad",
      ownedByPlayer: 0,
    },
    20: {
      name: "yellow saddle pad",
      icon: gameImages.yellowSP,
      type: "saddlePad",
      ownedByPlayer: 0,
    }
  },
  saddles: {
    1: {
      name: "brown saddle",
      icon: gameImages.brownSaddle,
      type: "saddle",
      ownedByPlayer: 0,
    }
  },
  bridles: {
    1: {
      name: "brown bridle",
      icon: gameImages.brownBridle,
      type: "bridle",
      ownedByPlayer: 0,
    }
  } 
}

// ALL HORSE ART LAYERS
var horseAttributes = {
  horseBase: {
    1: gameImages.horseBase,
  },
  maneBase: {
    1: gameImages.Mane
  },
  maneShade: {
    1: gameImages.maneShade
  },
  maneColor: {
    1: gameImages.ManeCBay,
    2: gameImages.ManeCBrown,
    3: gameImages.ManeCBrowner,
    4: gameImages.ManeCBuckskin,
    5: gameImages.ManeCCream,
    6: gameImages.ManeCDarkBrown,
    7: gameImages.ManeCDarkestGrey,
    8: gameImages.ManeCDarkGrey,
    9: gameImages.ManeCGrey,
    10: gameImages.ManeCLightBay,
    11: gameImages.ManeCPalomino,
    12: gameImages.ManeCRed,
    13: gameImages.ManeCSeal,
    14: gameImages.ManeCSilver,
    15: gameImages.ManeCTan,
    16: gameImages.ManeCWhite,
  },
  baseColor: {
    1: gameImages.baseCBay,
    2: gameImages.baseCBrown,
    3: gameImages.baseCBrowner,
    4: gameImages.baseCBuckskin,
    5: gameImages.baseCCream,
    6: gameImages.baseCDarkBrown,
    7: gameImages.baseCDarkestGrey,
    8: gameImages.baseCDarkGrey,
    9: gameImages.baseCGrey,
    10: gameImages.baseCLightBay,
    11:  gameImages.baseCPalomino,
    12: gameImages.baseCRed,
    13: gameImages.baseCSeal,
    14: gameImages.baseCSilver,
    15: gameImages.baseCTan,
    16: gameImages.baseCWhite,
  },
  markings: {
    1: gameImages.appy1,
    2: gameImages.appy2,
    3: gameImages.legs1,
    4: gameImages.legs2,
    5: gameImages.legs3,
    6: gameImages.legs4,
    7: gameImages.pinto1,
    8: gameImages.pinto2,
    9: gameImages.pinto3,
    10: gameImages.pinto4,
    11: gameImages.pinto5,
    12: gameImages.pinto6,
    13: gameImages.pinto7
  },
  gradient: {
    1: gameImages.belly1,
    2: gameImages.belly2,
    3: gameImages.belly3,
    4: gameImages.belly4,
    5: gameImages.belly5,
    6: gameImages.belly6,
    7: gameImages.belly7,
    8: gameImages.face1,
    9: gameImages.face2,
    10: gameImages.face3,
    11: gameImages.leg1,
    12: gameImages.spotted,
    13: gameImages.top1,
    14: gameImages.top2,
    15: gameImages.top3,
    16: gameImages.top4,
    15: gameImages.top5,
    16: gameImages.top6
  }
}

var possibleItems = {
  Background: {
    1: {
      name: "seedling",
      icon: "",
      type: "Enviromental",
      ownedByPlayer: 0,
    },
    2: {
      name: "apple",
      icon: "",
      type: "Feed",
      ownedByPlayer: 0,
    },
  },
  Swamp: {
    1: {
      name: "lilly",
      icon: "",
      type: "Enviromental",
      ownedByPlayer: 0,
    }
  }
}

var mapStarter = {
  1: gameImages.SpriteImage,
  2: gameImages.cactus,
  3: gameImages.shrub1,
  4: gameImages.shrub2,
  5: gameImages.home,
  6: gameImages.waterPond,
  7: gameImages.waterRiverDown,
  8: gameImages.waterRiverUp,
  mapLayout: 
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 4, 3, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 8, 7, 7, 7, 7],
  [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 6, 6, 7, 7, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
  mapBackground: "Background",
}
var mapTwo = {
  1: gameImages.SpriteImage,
  2: gameImages.cactus,
  3: gameImages.shrub1,
  4: gameImages.shrub2,
  5: gameImages.home,
  6: gameImages.waterPond,
  7: gameImages.waterRiverDown,
  8: gameImages.waterRiverUp,
  mapLayout: 
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
  mapBackground: "Background",
}
var mapThree = {
  1: gameImages.SpriteImage,
  2: gameImages.cactus,
  3: gameImages.shrub1,
  4: gameImages.shrub2,
  5: gameImages.home,
  6: gameImages.waterPond,
  7: gameImages.waterRiverDown,
  8: gameImages.waterRiverUp,
  mapLayout: 
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
  mapBackground: "Background",
}
var mapFour = {
  1: gameImages.SpriteImage,
  2: gameImages.cactus,
  3: gameImages.shrub1,
  4: gameImages.shrub2,
  5: gameImages.home,
  6: gameImages.waterPond,
  7: gameImages.waterRiverDown,
  8: gameImages.waterRiverUp,
  mapLayout: 
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
  mapBackground: "Background",
}

var mapFive = {
  1: gameImages.SpriteImage,
  2: gameImages.cactus,
  3: gameImages.shrub1,
  4: gameImages.shrub2,
  5: gameImages.home,
  6: gameImages.waterPond,
  7: gameImages.waterRiverDown,
  8: gameImages.waterRiverUp,
  9: gameImages.cattails1,
  10: gameImages.cattails2,
  11: gameImages.flowerPatch1,
  mapLayout: 
  [[0, 0, 0, 0, 0, 0, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 11, 6, 6, 9, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 6, 6, 9, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11, 11, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 11, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
  mapBackground: "Swamp",
}

var mapSix = { // NO SPAWNS: 6
  1: gameImages.SpriteImage,
  2: gameImages.cactus,
  3: gameImages.shrub1,
  4: gameImages.shrub2,
  5: gameImages.home,
  6: gameImages.waterPond,
  7: gameImages.waterRiverDown,
  8: gameImages.waterRiverUp,
  9: gameImages.cattails1,
  10: gameImages.cattails2,
  11: gameImages.flowerPatch1,
  12: gameImages.fenceTL,
  13: gameImages.fenceTM,
  14: gameImages.fenceTR,
  15: gameImages.fenceBL,
  16: gameImages.fenceBM,
  17: gameImages.fenceBR,
  18: gameImages.fenceL1,
  19: gameImages.fenceL2,
  20: gameImages.fenceR1,
  21: gameImages.fenceR2,
  mapLayout: 
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 0, 0],
  [0, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0],
  [0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0],
  [0, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 20, 11, 0],
  [0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0],
  [0, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0],
  [0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0],
  [0, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0],
  [0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0],
  [0, 0, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
  mapBackground: "Background",
}

var mapSevenVillage = {
  1: gameImages.SpriteImage,
  2: gameImages.cactus,
  3: gameImages.shrub1,
  4: gameImages.shrub2,
  5: gameImages.home,
  6: gameImages.waterPond,
  7: gameImages.waterRiverDown,
  8: gameImages.waterRiverUp,
  9: gameImages.cattails1,
  10: gameImages.cattails2,
  11: gameImages.flowerPatch1,
  12: gameImages.fenceTL,
  13: gameImages.fenceTM,
  14: gameImages.fenceTR,
  15: gameImages.fenceBL,
  16: gameImages.fenceBM,
  17: gameImages.fenceBR,
  18: gameImages.fenceL1,
  19: gameImages.fenceL2,
  20: gameImages.fenceR1,
  21: gameImages.fenceR2,
  mapLayout: 
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
  mapBackground: "Background",
}

var mapEight = {
  1: gameImages.SpriteImage,
  2: gameImages.cactus,
  3: gameImages.shrub1,
  4: gameImages.shrub2,
  5: gameImages.home,
  6: gameImages.waterPond,
  7: gameImages.waterRiverDown,
  8: gameImages.waterRiverUp,
  9: gameImages.cattails1,
  10: gameImages.cattails2,
  11: gameImages.flowerPatch1,
  12: gameImages.fenceTL,
  13: gameImages.fenceTM,
  14: gameImages.fenceTR,
  15: gameImages.fenceBL,
  16: gameImages.fenceBM,
  17: gameImages.fenceBR,
  18: gameImages.fenceL1,
  19: gameImages.fenceL2,
  20: gameImages.fenceR1,
  21: gameImages.fenceR2,
  mapLayout: 
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
  mapBackground: "StoneSwamp",
}

var mapNine = {
  1: gameImages.SpriteImage,
  2: gameImages.cactus,
  3: gameImages.shrub1,
  4: gameImages.shrub2,
  5: gameImages.home,
  6: gameImages.waterPond,
  7: gameImages.waterRiverDown,
  8: gameImages.waterRiverUp,
  9: gameImages.cattails1,
  10: gameImages.cattails2,
  11: gameImages.flowerPatch1,
  12: gameImages.fenceTL,
  13: gameImages.fenceTM,
  14: gameImages.fenceTR,
  15: gameImages.fenceBL,
  16: gameImages.fenceBM,
  17: gameImages.fenceBR,
  18: gameImages.fenceL1,
  19: gameImages.fenceL2,
  20: gameImages.fenceR1,
  21: gameImages.fenceR2,
  mapLayout: 
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
  mapBackground: "Grass",
}

var catchWild = { //NO SPAWNS:7
  1: gameImages.fenceTL,
  2: gameImages.fenceTM,
  3: gameImages.fenceTR,
  4: gameImages.fenceBL,
  5: gameImages.fenceBM,
  6: gameImages.fenceBR,
  7: gameImages.fenceL1,
  8: gameImages.fenceL2,
  9: gameImages.fenceR1,
  10: gameImages.fenceR2,
  mapLayout: 
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
  mapBackground: "Background",
}

var worldMaps = {
 maps: {
   1: mapStarter,
   2: mapTwo,
   3: mapThree,
   4: mapFour,
   5: mapFive,
   6: mapSix,
   7: catchWild,
   8: mapSevenVillage,
   9: mapEight,
   10: mapNine
 },
 mapSize: {
  rows: 5,
  cols: 4,
 },
 mapLayout: 
 [[0,8,0,0],
  [2,3,9,0],
 [4,1,5,10],
 [0,6,0,0],
 [0,0,0,0]]
};

// active character map and character map position
var spriteMapCol = 1;
var spriteMapRow = 2;
var activeMap = worldMaps.maps[worldMaps.mapLayout[spriteMapRow][spriteMapCol]];
//main character
var SpriteRow = 0;   
var SpriteCol = 0;      
var MaxSpriteRow = 3;   
var MaxSpriteCol = 1; 
var SpriteColPos = 5;     
var SpriteRowPos = 5;

//HORSE OBJECT DEFINITION
class horse {
  constructor(horseBase,maneBase,maneShade,maneColor,baseColor,markings, gradient, spawnMap,interested,nervous,stuborn,trecherous) {
  this.horseBase = horseBase;
  this.maneBase = maneBase;
  this.maneShade = maneShade;
  this.maneColor = maneColor;
  this.baseColor = baseColor;
  this.markings = markings;
  this.gradient = gradient;
  this.spawnMap = spawnMap;
  this.interested = interested;
  this.nervous = nervous;
  this.stuborn = stuborn;
  this.trecherous = trecherous;
  this.HorseRow = 0;
  this.HorseCol = 0;
  this.MaxHorseSpriteRow = 4;
  this.MaxHorseSpriteCol = 1;
  this.HorsePosRow = 0;
  this.HorsePosCol = 0;
  this.horseTrust = 0;
  this.horseName = "unnamed";
  this.horseIcon = "";
  this.horseDisplayed = "N";
  this.horseBeingRidden = "N";
  this.saddlePad = "";
  this.saddle = "";
  this.bridle = "";
  }
}

class NPC {
  constructor(name,dialogue, art,map,col,row, questList){
    this.name = name;
    this.dialogue = dialogue;
    this.art = art;
    this.map = map;
    this.col = col;
    this.row = row;
    this.questList = questList;
    this.activeQuest = "";
    this.lastQuestCompletedTime = "";
  }
}

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

function createNPCs() {
  var annaQuest1 = new horseQuest("Wrangler.. I'm in need of a steed. Something with a good head on its shoulders", 
    "Thank you!",20,50,0,10,0,40,0,10,0,300); 
  var annaQuest2 = new horseQuest("I was hoping you'd come around. I can take in one of your mustangs, give me your worst.", 
    "This should be interesting!",0,50,40,50,20,50,30,50,0,500); 
  var annaQuest3 = new itemQuest("I need something to make my horses like me more..", "Thanks, all work and no play makes my horses grey.", new Map([["apple",1]]),70);
  var anna = new NPC("anna", ["Hey.", "Can I help you?"],gameImages.annaIcon,mapSevenVillage, 3,2,[annaQuest1,annaQuest2, annaQuest3]);
  NPCs.push(anna);

  var eightballQuest1 = new horseQuest("Heard you're in the horse pawning biz? Need a turbulent one, something I can slap around.", 
    "Gonna put some miles on this thang..",0,50,0,10,20,40,40,50,0,800); 
  var eightball = new NPC("eightball", ["You stick your nose in everyone's bizness?"],gameImages.eightballIcon,mapSevenVillage, 7,2,[eightballQuest1]);
  NPCs.push(eightball);

  var damonShop1 = new shopQuest(["Buy before you try. No refunds"], ["Luck"], new Map([[horseTack.saddlePads[randomIntFromInterval(1,20)],0], [horseTack.saddles[1],0], [horseTack.bridles[1],0]]));
  var damon = new NPC('damon', ["How's farm life treating you?", "Any nasty falls lately?"],gameImages.cactus.src,mapSevenVillage,11,2,[damonShop1]);
  NPCs.push(damon);
}
 


function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomIntFromIntervalForWilds(horseInput) { 
  var row = Math.floor(Math.random() * (14));
  var col = Math.floor(Math.random() * (19));
  if (horseInput.spawnMap.mapLayout[row][col] == 0 && horseInput.spawnMap.mapLayout[row] != SpriteRowPos && horseInput.spawnMap.mapLayout[col] != SpriteColPos) {
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

function createHorse() {
var holder = new horse(horseAttributes.horseBase[1],horseAttributes.maneBase[1],horseAttributes.maneShade[1],
  horseAttributes.maneColor[randomIntFromInterval(1,16)],horseAttributes.baseColor[randomIntFromInterval(1,16)],
  horseAttributes.markings[randomIntFromInterval(1,13)], horseAttributes.gradient[randomIntFromInterval(1,16)], worldMaps.maps[randomWorldWilds(1, 10)], 
  randomIntFromInterval(0,50), randomIntFromInterval(0,50), randomIntFromInterval(0,50), randomIntFromInterval(0,50));
randomIntFromIntervalForWilds(holder);

console.log("NEW HORSE CREATED AT MAP: + " + randomWorldWilds(1, 10));

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
    if (wildHorses[i].spawnMap == activeMap) {
    drawHorse(wildHorses[i]);
    }
  }
}

var INTERVAL = 50;
var ctx;
var canvas;
var SpriteWidth = 32;   
var SpriteHeight = 32;
var playerCoin = 0;
var miniGameActive = false;
var expandMenu;
var expandHorseButton;
var expandInventoryButton;
var menuExpandTitle;
var menuExpandList;
var menuHorseExpandList;
var exitHorseCard;
var NPCs = [];
var activeRiddenHorse = "";
var exitExpandMenu;
var npcMenuExpand;
var bankShow;
var lassoCol;
var myInterval;

function loadComplete() {
    console.log("Load is complete."); 
    canvas = document.getElementById("theCanvas");
    ctx = canvas.getContext("2d");
    var loadingSreen = document.getElementById("enterScreen");
    enterGame = document.getElementById("enterGame").addEventListener("click", () => {
      loadingSreen.style.display = 'none';    
      generateMap(mapStarter);
      drawSprite();
      createWilds();
      createNPCs();
      expandMenu = document.getElementById('menuExpand');
      exitExpandMenu = document.getElementById('exitExpand');
      expandHorseButton = document.getElementById('horseMenu');
      expandInventoryButton = document.getElementById('inventory');
      menuExpandTitle = document.getElementById('menuExpandTitle');
      menuHorseExpandList = document.getElementById('menuHorseExpandList')
      menuExpandList = document.getElementById('menuExpandList');
      exitHorseCard = document.getElementById('exitCard');
      npcMenuExpand = document.getElementById('NPC');
      bankShow = document.getElementById('playerCoins');
      buttonEvents();
      updateBank();
      myInterval = self.setInterval(function(){Tick()}, INTERVAL);})
  }

  function updateBank() {
    bankShow.textContent = playerCoin;
  }

  function buttonEvents() {
    expandHorseButton.addEventListener("click", () => expandHorseMenu());
    exitExpandMenu.addEventListener("click", () => exitMenu());
    exitHorseCard.addEventListener("click", () => exitMenu());
    expandInventoryButton.addEventListener("click", () => expandInventoryMenu());
  }

  function expandInventoryMenu() {
    expandMenu.style.display = "block";
    menuExpandTitle.textContent = "YOUR INVENTORY";
    if (menuHorseExpandList.style.display != "none") {
      menuHorseExpandList.style.display = "none"
    }
    menuInventoryExpandList.style.display = "block"
    fillInventoryMenu();
  }

  function fillInventoryMenu() {
    while(document.getElementById("menuInventoryExpandList").contains(document.getElementById("inventoryItem"))) {
      document.getElementById("menuInventoryExpandList").removeChild(document.getElementById("inventoryItem"));
    }

    playerItems.forEach((item, itemName) =>{
      if(item.ownedByPlayer != 0) {
      var listItem = document.createElement('li'); 
      listItem.id = "inventoryItem";
      listItem.textContent = itemName + ", qty: " + item.ownedByPlayer;
      if(item.type == "Feed") {
        var dropDownFeedMenu = document.createElement('SELECT');
        var feedHorseButton = document.createElement('button');
        feedHorseButton.textContent = " feed";
        playerHorses.forEach(horsie => {
          var horseInFeedList = document.createElement('option');
          horseInFeedList.value = horsie.horseName;
          horseInFeedList.text = horsie.horseName;
          dropDownFeedMenu.add(horseInFeedList);
        })
        feedHorseButton.addEventListener("click", () => feedHorse(dropDownFeedMenu.value, item));
        listItem.appendChild(dropDownFeedMenu);
        listItem.appendChild(feedHorseButton);
      } else if (item.type == "saddlePad" || item.type == "saddle" || item.type == "bridle") {
        var dropDownTackMenu = document.createElement('SELECT');
        var addTackToHorseButton = document.createElement('button');
        addTackToHorseButton.textContent = " tack";
        playerHorses.forEach(horsie => {
          var horseToTack = document.createElement('option');
          horseToTack.value = horsie.horseName;
          horseToTack.text = horsie.horseName;
          dropDownTackMenu.add(horseToTack);
        })
        addTackToHorseButton.addEventListener("click", () => tackHorse(dropDownTackMenu.value, item));
        listItem.appendChild(dropDownTackMenu);
        listItem.appendChild(addTackToHorseButton);
      }
      document.getElementById("menuInventoryExpandList").appendChild(listItem);
    }});
  }

  function tackHorse(horseName, item) {
    var tackType = item.type;
    for(var i = 0; i<playerHorses.length; i++) {
      if(playerHorses[i].horseName == horseName) {
        if(playerHorses[i][tackType] != "") {
          playerHorses[i][tackType].ownedByPlayer++;
        }
        playerHorses[i][tackType] = item;
        item.ownedByPlayer--;
        exitMenu();
        var tackEvent = document.createElement('li');
        tackEvent.textContent = "You've put a " + item.name + " on "+ horseName;
        document.getElementById('eventInterface').appendChild(tackEvent);
  
        setTimeout(function() {
            document.getElementById('eventInterface').removeChild(tackEvent);
        }, 5000);
        break;
      }
    }
  }

  function feedHorse(horseName, item) {
    for(var i = 0; i<playerHorses.length; i++) {
      if(playerHorses[i].horseName == horseName) {
        playerHorses[i].horseTrust++;
        item.ownedByPlayer--;
        exitMenu();
        var feedEvent = document.createElement('li');
        feedEvent.textContent = "You've fed: " + horseName;
        document.getElementById('eventInterface').appendChild(feedEvent);
  
        setTimeout(function() {
            document.getElementById('eventInterface').removeChild(feedEvent);
        }, 5000);
        break;
      }
    }
  }

  function expandHorseMenu() {
    expandMenu.style.display = "block";
    menuExpandTitle.textContent = "YOUR STABLE";
    if (menuInventoryExpandList.style.display != "none") {
      menuInventoryExpandList.style.display = "none"
    }
    menuHorseExpandList.style.display = "block"
  }

  function exitMenu() {
    expandMenu.style.display = "none";
    menuHorseExpandList.style.display = "none";
    menuInventoryExpandList.style.display = "none";
    horseCard.style.display = "none";
    npcMenuExpand.style.display = "none";
  }

  function Tick() {
    animationWater();
    moveHorses();
    animateCharacter();
    //onWildEvent();
  }

  function eraseSprite() {
    ctx.clearRect(SpriteColPos*32, SpriteRowPos*32, SpriteWidth, SpriteHeight);
  }

  function eraseEnv(SpriteColPos, SpriteRowPos) {
    ctx.clearRect(SpriteColPos*32, SpriteRowPos*32, SpriteWidth, SpriteHeight);
  }
  
  function generateMap(map) {
    var itemHolder;
    document.getElementById("theCanvas").className = map.mapBackground;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i<15; i++) {
      for (var j = 0; j < 20; j++) {
        if(activeMap.mapLayout[i][j] != 0 && activeMap.mapLayout[i][j] > 0) {
          itemHolder = activeMap[activeMap.mapLayout[i][j]];
          drawEnv(itemHolder, i, j)
        }
      }
    }
  }
  function drawEnv(item, rowPos, colPos) {
    ctx.drawImage(item, 0 * SpriteWidth, 0 * SpriteHeight, 
      SpriteWidth, SpriteHeight, colPos*32, rowPos*32, SpriteWidth, SpriteHeight);
  }

  function drawLasso(item, rowPos,colPos) {
    ctx.drawImage(item, lassoCol * SpriteWidth, 3 * SpriteHeight, 
      SpriteWidth, SpriteHeight, colPos*32, rowPos*32, SpriteWidth, SpriteHeight);
  }

  function drawWater(item, rowPos, colPos) {
    ctx.drawImage(item, WaterPondSpriteCol * SpriteWidth, 0 * SpriteHeight, 
      SpriteWidth, SpriteHeight, colPos*32, rowPos*32, SpriteWidth, SpriteHeight);
  }

  function animationWater() {
    for (var i = 0; i<15; i++) {
      for (var j = 0; j < 20; j++) {
        if(activeMap[activeMap.mapLayout[i][j]] == gameImages.waterPond) {
          WaterPondSpriteCol = randomIntFromInterval(0,15);
          drawWater(gameImages.waterPond, i, j);
        } else if(activeMap[activeMap.mapLayout[i][j]] == gameImages.waterRiverDown) {
          WaterPondSpriteCol = randomIntFromInterval(0,15);
          drawWater(gameImages.waterRiverDown, i, j);
        }  else if(activeMap[activeMap.mapLayout[i][j]] == gameImages.waterRiverUp) {
          WaterPondSpriteCol = randomIntFromInterval(0,15);
          drawWater(gameImages.waterRiverUp, i, j);
        }
      }
    }
  }
  function drawSprite() {
    ctx.drawImage(gameImages.SpriteImage, SpriteCol * SpriteWidth, SpriteRow * SpriteHeight, 
      SpriteWidth, SpriteHeight, SpriteColPos*32, SpriteRowPos*32, SpriteWidth, SpriteHeight);
  }

  function drawHorse(testHorse) {

    ctx.drawImage(testHorse.baseColor,testHorse.HorseCol * SpriteWidth, testHorse.HorseRow * SpriteHeight, 
      SpriteWidth, SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, SpriteWidth, SpriteHeight);
    ctx.drawImage(testHorse.gradient,testHorse.HorseCol * SpriteWidth, testHorse.HorseRow * SpriteHeight, 
      SpriteWidth, SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, SpriteWidth, SpriteHeight);
    ctx.drawImage(testHorse.markings,testHorse.HorseCol * SpriteWidth, testHorse.HorseRow * SpriteHeight, 
      SpriteWidth, SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, SpriteWidth, SpriteHeight);
    ctx.drawImage(testHorse.horseBase,testHorse.HorseCol * SpriteWidth, testHorse.HorseRow * SpriteHeight, 
      SpriteWidth, SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, SpriteWidth, SpriteHeight);
    ctx.drawImage(testHorse.maneBase,testHorse.HorseCol * SpriteWidth, testHorse.HorseRow * SpriteHeight, 
      SpriteWidth, SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, SpriteWidth, SpriteHeight);
    ctx.drawImage(testHorse.maneColor,testHorse.HorseCol * SpriteWidth, testHorse.HorseRow * SpriteHeight, 
      SpriteWidth, SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, SpriteWidth, SpriteHeight);
    ctx.drawImage(testHorse.maneShade,testHorse.HorseCol * SpriteWidth, testHorse.HorseRow * SpriteHeight, 
      SpriteWidth, SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, SpriteWidth, SpriteHeight);
      
      if(testHorse.saddlePad != "") {
        ctx.drawImage(testHorse.saddlePad.icon,testHorse.HorseCol * SpriteWidth, testHorse.HorseRow * SpriteHeight, 
          SpriteWidth, SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, SpriteWidth, SpriteHeight);
      }
      if(testHorse.bridle != "") {
        ctx.drawImage(testHorse.bridle.icon,testHorse.HorseCol * SpriteWidth, testHorse.HorseRow * SpriteHeight, 
          SpriteWidth, SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, SpriteWidth, SpriteHeight);
      }
      if(testHorse.saddle != "") {
        ctx.drawImage(testHorse.saddle.icon,testHorse.HorseCol * SpriteWidth, testHorse.HorseRow * SpriteHeight, 
          SpriteWidth, SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, SpriteWidth, SpriteHeight);
      }


      if (testHorse.horseIcon == "") {
      var x = testHorse.HorsePosCol*32; 
      var y = testHorse.HorsePosRow*32;  
      var width = 32;
      var height = 32;

      var imageData = ctx.getImageData(x, y, width, height);

      var tempCanvas = document.createElement('canvas');
      tempCanvas.width = width;
      tempCanvas.height = height;
      var tempCtx = tempCanvas.getContext('2d');

      tempCtx.putImageData(imageData, 0, 0);

      var savedImageDataURL = tempCanvas.toDataURL();

      testHorse.horseIcon = savedImageDataURL;
    }

  }

  function eraseHorse(testHorse) {
    ctx.clearRect(testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, SpriteWidth, SpriteHeight);
  };
  
  function putDownItem() {
    var hasChild;

    if(document.contains(document.getElementById("worldItem"))) { 
      hasChild= true;
    } else{hasChild= false;}

    if(hasChild) {
      document.getElementById("eventInterface").removeChild(document.getElementById("worldItem"));
    }

    var itemAtSpot = checkExistingItem();

    if(itemAtSpot == "") {
    var randNumber = randomIntFromInterval(1,120);
    if (randNumber <=10) {
      var biome = activeMap.mapBackground;
      var itemValue = possibleItems[biome][randomIntFromInterval(1,2)];
      var worldItemNotify = document.createElement('li');
      var collectItemButton = document.createElement('button');
      collectItemButton.innerHTML = "collect";
      worldItemNotify.id = "worldItem"
      worldItems.push(new item(itemValue, SpriteColPos, SpriteRowPos,spriteMapCol,spriteMapRow));
      itemAtSpot = worldItems[worldItems.length-1];
      collectItemButton.addEventListener("click", () => collectItem(itemAtSpot));
      worldItemNotify.textContent = ("Item found: " + itemAtSpot.item.name + " ");
      worldItemNotify.appendChild(collectItemButton);
      document.getElementById("eventInterface").appendChild(worldItemNotify);
    }
    } else {
      var worldItemNotify = document.createElement('li');
      worldItemNotify.id = "worldItem"
      var collectItemButton = document.createElement('button');
      collectItemButton.innerHTML = "collect";
      collectItemButton.addEventListener("click", () => collectItem(itemAtSpot));
      worldItemNotify.textContent = ("Item found: " + itemAtSpot.item.name + " ");
      worldItemNotify.appendChild(collectItemButton);
      document.getElementById("eventInterface").appendChild(worldItemNotify);
    }
  }

  function checkExistingItem() {
    for(var i = 0; i<worldItems.length; i++) {
      if(spriteMapCol == worldItems[i].itemMapCol && spriteMapRow == worldItems[i].itemMapRow
        && SpriteColPos == worldItems[i].itemColPos && SpriteRowPos == worldItems[i].ItemRowPos) {
          return worldItems[i];
        }
    }
    return "";
  }

  function collectItem(itemToCollect) {
    itemToCollect.item.ownedByPlayer++;
    console.log(itemToCollect.item.name + "   " + itemToCollect.item.ownedByPlayer);
    playerItems.set(itemToCollect.item.name, itemToCollect.item);
  
    for(var i = 0; i<worldItems.length; i++) {
      if(spriteMapCol == worldItems[i].itemMapCol && spriteMapRow == worldItems[i].itemMapRow
        && SpriteColPos == worldItems[i].itemColPos && SpriteRowPos == worldItems[i].ItemRowPos) {
          worldItems.splice(i,1);
        }
    }
    document.getElementById("eventInterface").removeChild(document.getElementById("worldItem"));
  }

  function checkSuroundings() {
    if(document.contains(document.getElementById("knock"))) { 
    document.getElementById("eventInterface").removeChild(document.getElementById("knock"));
    }
    var NPCAtHome = "";
    if(activeMap[activeMap.mapLayout[SpriteRowPos-1][SpriteColPos]] == gameImages.home) {
      console.log("Home");
      for(var i = 0; i<NPCs.length; i++) {
        if(NPCs[i].row == SpriteRowPos-1 && NPCs[i].col == SpriteColPos) {
          NPCAtHome = NPCs[i];
          console.log("the NPC is = " + NPCAtHome.row + " Col: " + NPCAtHome.col);
          break;
        }
      }
      if(NPCAtHome != "") {
        var atHomeNotify = document.createElement('li');
        atHomeNotify.id = "knock";
        atHomeNotify.textContent = "Looks like there's someone home... ";
        var knockButton = document.createElement('button');
        knockButton.innerHTML = "knock";
        knockButton.addEventListener("click", () => enterHome(NPCAtHome));
        atHomeNotify.appendChild(knockButton);
        document.getElementById("eventInterface").appendChild(atHomeNotify);
    }
    }

  }

  function enterHome(NPCAtHome) {
      //put NPC Icon
      if(document.contains(document.getElementById("NPCIcon"))) { 
        document.getElementById("NPCImgHolder").removeChild(document.getElementById("NPCIcon"));
      }
      document.getElementById("exitNPCCard").addEventListener("click", () => exitMenu());
      document.getElementById("NPC").style.display = "block";
      var NPCIcon = document.createElement("img");
      NPCIcon.id = "NPCIcon";
      NPCIcon.setAttribute("src", NPCAtHome.art);
      document.getElementById("NPCImgHolder").appendChild(NPCIcon);

      //no currently active quest
      if(NPCAtHome.activeQuest == "") {

      var questHolder = NPCAtHome.questList[randomIntFromInterval(0,NPCAtHome.questList.length-1)];
      document.getElementById("NPCDialogue").textContent = questHolder.dialogueStart;

      if(questHolder.constructor.name == "shopQuest") {
        
        document.getElementById("CharDialogueHolder").textContent = "I'll have a look.";
        var dialogueOption = document.createElement('button');
        dialogueOption.innerHTML = "follow " + NPCAtHome.name;
        dialogueOption.addEventListener("click", () => openShop(questHolder, NPCAtHome));
        document.getElementById("CharDialogueHolder").appendChild(dialogueOption);

      } else if(questHolder.constructor.name == "horseQuest" || questHolder.constructor.name == "itemQuest") {

      document.getElementById("CharDialogueHolder").textContent = "I can take care of it.";
      var dialogueOption = document.createElement('button');
      dialogueOption.innerHTML = "accept quest";
      dialogueOption.addEventListener("click", () => acceptQuest(questHolder, NPCAtHome));
      document.getElementById("CharDialogueHolder").appendChild(dialogueOption);
      
    }
    } else {
      //active quest exists. Check parameters of request

        document.getElementById("NPCDialogue").textContent = NPCAtHome.dialogue[randomIntFromInterval(0,(NPCAtHome.dialogue.length)-1)];
        
        //horse Quest
        if(NPCAtHome.activeQuest.constructor.name == "horseQuest") {
        var dropDownMenuApplicableHorse = document.createElement('SELECT');

        playerHorses.forEach(horsie => {
          if(horsie.nervous >= NPCAtHome.activeQuest.nervousMin && horsie.nervous <= NPCAtHome.activeQuest.nervousMax &&
            horsie.stuborn >= NPCAtHome.activeQuest.stubornMin && horsie.nervous <= NPCAtHome.activeQuest.stubornMax &&
            horsie.interested >= NPCAtHome.activeQuest.interestedMin && horsie.nervous <= NPCAtHome.activeQuest.interestedMax &&
            horsie.trecherous >= NPCAtHome.activeQuest.trecherousMin && horsie.nervous <= NPCAtHome.activeQuest.trecherousMax &&
            horsie.horseTrust >= NPCAtHome.activeQuest.bondMin) {
              var applicableHorse = document.createElement('option');
              applicableHorse.value = horsie.horseName;
              applicableHorse.text = horsie.horseName;
              dropDownMenuApplicableHorse.add(applicableHorse);
            } 
          })

          document.getElementById("CharDialogueHolder").textContent = "Got your horse.";
          var dialogueOption = document.createElement('button');
          dialogueOption.innerHTML = "give";
          dialogueOption.addEventListener("click", () => submitHorseQuest(dropDownMenuApplicableHorse.value, NPCAtHome));
          document.getElementById("CharDialogueHolder").appendChild(dropDownMenuApplicableHorse);
          document.getElementById("CharDialogueHolder").appendChild(dialogueOption);

        } else if (NPCAtHome.activeQuest.constructor.name == "itemQuest") {
          var playerHasAllItems = true;
          NPCAtHome.activeQuest.itemRequest.forEach(function(value, key) {
            if(!(playerItems.has(key) && playerItems.get(key).ownedByPlayer >= value)) {
              playerHasAllItems = false;
            }
          });
          if(playerHasAllItems) {
            document.getElementById("CharDialogueHolder").textContent = "Got your stuff.";
            var dialogueOption = document.createElement('button');
            dialogueOption.innerHTML = "give";
            dialogueOption.addEventListener("click", () => submitItemQuest(NPCAtHome));
            document.getElementById("CharDialogueHolder").appendChild(dialogueOption);
          } else {
            document.getElementById("CharDialogueHolder").textContent = "Still working on getting your items.";
            var dialogueOption = document.createElement('button');
            dialogueOption.innerHTML = "leave";
            dialogueOption.addEventListener("click", () => exitMenu());
            document.getElementById("CharDialogueHolder").appendChild(dialogueOption);
          }
        } else if (NPCAtHome.activeQuest.constructor.name == "shopQuest") {
          openShop(NPCAtHome.activeQuest, NPCAtHome);
        }
      }
  }
  function openShop(quest, NPC) {
    if(NPC.activeQuest == "") {
       NPC.activeQuest = quest;
     }
    document.getElementById("CharDialogueHolder").textContent = "Thanks. I'm out of here."
    var dialogueOption = document.createElement('button');
            dialogueOption.innerHTML = "leave";
            dialogueOption.addEventListener("click", () => exitMenu());
            document.getElementById("CharDialogueHolder").appendChild(dialogueOption);
    document.getElementById("NPCDialogue").textContent = NPC.dialogue[randomIntFromInterval(0,NPC.dialogue.length-1)];
    var tackSelection = document.createElement('ul');
    quest.inventory.forEach(function(value, key) {
      var shopListItem = document.createElement('li');
      var itemName = key.name;
      var buyButton = document.createElement('button');
      buyButton.addEventListener("click", ()=> purchaseItem(key, value, NPC));
      buyButton.innerHTML = "purchase.";
      shopListItem.textContent = itemName + " cost: " + value + " ";
      shopListItem.appendChild(buyButton);
      tackSelection.appendChild(shopListItem);
    });
    document.getElementById("NPCDialogue").appendChild(tackSelection);
  }

  function purchaseItem(item, price) {
    if(price <= playerCoin) {
      item.ownedByPlayer++;
      playerItems.set(item.name,item);
      playerCoin -= price;
      document.getElementById("NPCDialogue").textContent = "Thanks";
      updateBank();
    }
  }

  function submitHorseQuest(horseName, NPC) {
    document.getElementById("menuHorseExpandList").removeChild(document.getElementById(horseName));
    playerCoin += NPC.activeQuest.reward;
    document.getElementById("NPCDialogue").textContent = NPC.activeQuest.dialogueEnd + " here's " + NPC.activeQuest.reward + " coin.";
    document.getElementById("CharDialogueHolder").textContent = "Take good care of 'em. Thanks for the tip.";
    var dialogueOption = document.createElement('button');
    dialogueOption.innerHTML = "get going.";
    dialogueOption.addEventListener("click", () => exitMenu());
    document.getElementById("CharDialogueHolder").appendChild(dialogueOption);
    updateBank();
    for(var i = 0; i<playerHorses; i++) {
      if(playerHorses[i].horseName == horseName) {
        playerHorses.splice(i, 1);
      }
    }
    NPC.activeQuest = "";
  }

  function submitItemQuest(NPC) {

    NPC.activeQuest.itemRequest.forEach(function(value, key) {
      playerItems.get(key).ownedByPlayer-= value;
    });

    playerCoin += NPC.activeQuest.reward;

    document.getElementById("NPCDialogue").textContent = NPC.activeQuest.dialogueEnd + " here's " + NPC.activeQuest.reward + " coin.";
    document.getElementById("CharDialogueHolder").textContent = "Enjoy. Thanks for the tip.";
    var dialogueOption = document.createElement('button');
    dialogueOption.innerHTML = "get going.";
    dialogueOption.addEventListener("click", () => exitMenu());
    document.getElementById("CharDialogueHolder").appendChild(dialogueOption);
    updateBank();
    NPC.activeQuest = "";

  }
  

  function acceptQuest(quest, NPC) {

    NPC.activeQuest = quest;

    if(quest.constructor.name == "horseQuest") {
    document.getElementById("NPCDialogue").textContent = "I need a horse that is at least " + quest.interestedMin + " interested and at most " + quest.interestedMax + " nervousness at least " + quest.nervousMin + " max "
    + quest.nervousMax + " I can handle a minimum stubborness of " + quest.stubornMin + " max stuborness: " + quest.stubornMax +
    " minimum trechery: " + quest.trecherousMin + " I can deal with a max trechery of " + quest.trecherousMax;
    
  } else if (quest.constructor.name == "itemQuest") {
      document.getElementById("NPCDialogue").textContent = "I need, ";
      quest.itemRequest.forEach(function(value, key) {
        document.getElementById("NPCDialogue").textContent += value + " " + key +"s ";
      });
    }

    document.getElementById("CharDialogueHolder").textContent = "Got it.";
    var dialogueOption = document.createElement('button');
    dialogueOption.innerHTML = "get going";
    dialogueOption.addEventListener("click", () => exitMenu());
    document.getElementById("CharDialogueHolder").appendChild(dialogueOption);
  }

  document['onkeydown'] = function(event) {
    event = event || window.event;
    var key = event.which || event.cursor;
    // Check for a special key value, and map it to ASCII.
    switch (key) {
      case 37:  // Left arrow, ASCII 29 
      moveCharacter(29);
        break;
      case 38:  // Up arrow, ASCII 30
      moveCharacter(30);
        break;
      case 39:  // Right arrow, ASCII 28  
      moveCharacter(28);
        break; 
      case 40:  // Down arrow, ASCII 31
      moveCharacter(31);
        break;
    }
  };
    function moveCharacter(key) {
        switch (key) {
          case 28:  // Right arrow was pressed 
           if (SpriteColPos < 19 && ((activeMap.mapLayout[SpriteRowPos][SpriteColPos+1] == 0))) { 
            if(activeRiddenHorse == "") {
            if(activeMap != catchWild) {  
            SpriteRow = 1;	
            } else {
            SpriteRow = 3;	
            }
              eraseSprite();
              SpriteColPos += .5;
              drawSprite();
            setTimeout(() => {
              eraseSprite();
              SpriteColPos += .5;
              drawSprite();
              putDownItem();
              checkSuroundings();
              isPlayerOnWild();
              drawSprite();
            }, 150);
          } else {
            eraseSprite();
            if(activeMap != catchWild) {  
              SpriteRow = 1;	
            } else {
              SpriteRow = 3;	
            }
            SpriteColPos += 1;
            moveHorsePhysical(28, activeRiddenHorse);
            putDownItem();
            checkSuroundings();
            isPlayerOnWild();
            drawSprite();
          }
            break;
           } else if (SpriteColPos >= 19) {
            moveMaps(key);
           }
           else {
          break;
           }	
          case 29:  // Left arrow, ASCII 29 
           if (SpriteColPos > 0 && ((activeMap.mapLayout[SpriteRowPos][SpriteColPos-1] == 0))){  
            if (activeRiddenHorse == "") {
              if(activeMap != catchWild) {  
                SpriteRow = 2;	
              } else {
                SpriteRow = 3;	
              }
              eraseSprite();
              SpriteColPos -= .5;
              drawSprite();
            setTimeout(() => {
              eraseSprite();
              SpriteColPos -= .5;
              drawSprite();
              putDownItem();
              checkSuroundings();
              isPlayerOnWild();
              drawSprite();
            }, 150);
          } else {
            eraseSprite();
            if(activeMap != catchWild) {  
              SpriteRow = 2;	
            } else {
              SpriteRow = 3;	
            }
            SpriteColPos -= 1;
            moveHorsePhysical(29, activeRiddenHorse);
            putDownItem();
            checkSuroundings();
            isPlayerOnWild();
            drawSprite();
          }
            break;
           }else if (SpriteColPos <= 0) {
            moveMaps(key);
           } else {
              break;
           }
          case 30:  // up arrow was pressed 
           if (SpriteRowPos > 0 && ((activeMap.mapLayout[SpriteRowPos-1][SpriteColPos]== 0))){ 
            if(activeRiddenHorse == "") {
            SpriteRow = 3;
            eraseSprite();
            SpriteRowPos -= .5;
            drawSprite();
          setTimeout(() => {
            eraseSprite();
            SpriteRowPos -= .5;
            drawSprite();
            putDownItem();
            checkSuroundings();
            isPlayerOnWild();
            drawSprite();
          }, 150);
            } else {
              SpriteRow = 3;
              eraseSprite();
              SpriteRowPos -= 1;
              moveHorsePhysical(30, activeRiddenHorse);
              putDownItem();
              checkSuroundings();
              isPlayerOnWild();
              drawSprite();
            }
            break;
           } else if (SpriteRowPos <= 0) {
            moveMaps(key);
           } 
           else {
            break;
           }
          case 31:  // down arrow was pressed 
           if (SpriteRowPos < 14  && ((activeMap.mapLayout[SpriteRowPos+1][SpriteColPos] == 0))) {
          if(activeRiddenHorse == "") {
            SpriteRow = 0;	
            eraseSprite();
            SpriteRowPos += .5;
            drawSprite();
          setTimeout(() => {
            eraseSprite();
            SpriteRowPos += .5;
            drawSprite();
            putDownItem();
            checkSuroundings();
            isPlayerOnWild();
            drawSprite();
          }, 150);
          } else {
            SpriteRow = 0;	
            eraseSprite();
            SpriteRowPos += 1;
            moveHorsePhysical(31, activeRiddenHorse);
            putDownItem();
            checkSuroundings();
            isPlayerOnWild();
            drawSprite();
          }
            break;
           } else if (SpriteRowPos >= 14) {
            moveMaps(key);
           } else {
              break;
           }
        }
      }

      function moveMaps(key) {
        switch (key) {
          case 28:  // Right arrow was pressed 
           if (SpriteColPos >= 19 && spriteMapCol < worldMaps.mapSize.cols && worldMaps.mapLayout[spriteMapRow][spriteMapCol+1] != 0) { 	
            eraseSprite();
            activeMap = worldMaps.maps[worldMaps.mapLayout[spriteMapRow][spriteMapCol+1]];
            spriteMapCol += 1;
            SpriteColPos = 0;
            generateMap(activeMap);
            if(activeRiddenHorse != "") {
              activeRiddenHorse.spawnMap = activeMap;
              activeRiddenHorse.HorsePosCol = SpriteColPos;
              activeRiddenHorse.HorsePosRow = SpriteRowPos;
              drawHorse(activeRiddenHorse);
            }
            drawSprite();
            break;
           } else {
          break;
           }	
          case 29:  // Left arrow, ASCII 29 
          if (SpriteColPos >= 0 && spriteMapCol > 0 && worldMaps.mapLayout[spriteMapRow][spriteMapCol-1] != 0) { 	
            eraseSprite();
            activeMap = worldMaps.maps[worldMaps.mapLayout[spriteMapRow][spriteMapCol-1]];
            spriteMapCol -= 1;
            SpriteColPos = 19;
            generateMap(activeMap);
            if(activeRiddenHorse != "") {
              activeRiddenHorse.spawnMap = activeMap;
              activeRiddenHorse.HorsePosCol = SpriteColPos;
              activeRiddenHorse.HorsePosRow = SpriteRowPos;
              drawHorse(activeRiddenHorse);
            }
            drawSprite();
            break;
           } else {
          break;
           }
          case 30:  // up arrow was pressed 
          if (SpriteRowPos <= 0 && spriteMapRow > 0 && worldMaps.mapLayout[spriteMapRow-1][spriteMapCol] != 0) { 	
            eraseSprite();
            activeMap = worldMaps.maps[worldMaps.mapLayout[spriteMapRow-1][spriteMapCol]];
            spriteMapRow -= 1;
            SpriteRowPos = 14;
            generateMap(activeMap);
            if(activeRiddenHorse != "") {
              activeRiddenHorse.spawnMap = activeMap;
              activeRiddenHorse.HorsePosCol = SpriteColPos;
              activeRiddenHorse.HorsePosRow = SpriteRowPos;
              drawHorse(activeRiddenHorse);
            }
            drawSprite();
            break;
           } else {
          break;
           }
          case 31:  // down arrow was pressed 
          if (SpriteRowPos >= 14 && spriteMapRow < worldMaps.mapSize.rows && worldMaps.mapLayout[spriteMapRow+1][spriteMapCol] != 0) { 	
            eraseSprite();
            activeMap = worldMaps.maps[worldMaps.mapLayout[spriteMapRow+1][spriteMapCol]];
            console.log("active: " +activeMap);
            spriteMapRow += 1;
            SpriteRowPos = 0;
            generateMap(activeMap);
            if(activeRiddenHorse != "") {
              activeRiddenHorse.spawnMap = activeMap;
              activeRiddenHorse.HorsePosCol = SpriteColPos;
              activeRiddenHorse.HorsePosRow = SpriteRowPos;
              drawHorse(activeRiddenHorse);
            }
            drawSprite();
            break;
           } else {
              break;
           }
        }
      }


      function moveHorsePhysical(key, horse) {
        if (horse.spawnMap == activeMap) {
        switch (key) {
          case 28:  // Right arrow was pressed 
           if (horse.HorsePosCol < 19 && (activeMap.mapLayout[horse.HorsePosRow][horse.HorsePosCol+1] == 0)) { 	
            horse.HorseRow = 1;
            eraseHorse(horse);
            horse.HorsePosCol += 1;
            drawHorse(horse);
            break;
           } else {
          break;
           }	
          case 29:  // Left arrow, ASCII 29 
           //if (SpriteColPos > 0 && (activeMap.mapLayout[SpriteRowPos][SpriteColPos-1] == 0)){  
            if (horse.HorsePosCol > 0 && (activeMap.mapLayout[horse.HorsePosRow][horse.HorsePosCol-1] == 0)) { 	
            horse.HorseRow = 0;
            eraseHorse(horse);
            horse.HorsePosCol -= 1;
            drawHorse(horse);
            break;
           } else {
              break;
           }
          case 30:  // up arrow was pressed 
           //if (SpriteRowPos > 0 && (activeMap.mapLayout[SpriteRowPos-1][SpriteColPos]== 0)){ 
            if (horse.HorsePosRow > 0 && (activeMap.mapLayout[horse.HorsePosRow-1][horse.HorsePosCol] == 0)) { 	
            horse.HorseRow = 2;
            eraseHorse(horse);
            horse.HorsePosRow -= 1;
            drawHorse(horse);
            break;
           } else {
            break;
           }
          case 31:  // down arrow was pressed 
           //if (SpriteRowPos < 14  && (activeMap.mapLayout[SpriteRowPos+1][SpriteColPos] == 0)) {
            if (horse.HorsePosRow < 14 && (activeMap.mapLayout[horse.HorsePosRow+1][horse.HorsePosCol] == 0)) { 	
            horse.HorseRow = 3;
            eraseHorse(horse);
            horse.HorsePosRow += 1;
            drawHorse(horse);
            break;
           } else {
              break;
           }
        }
        if(activeRiddenHorse.horseName == horse.horseName) {
          SpriteCol = horse.HorseCol;
          SpriteRow = horse.HorseRow;
        }
      }
    }

    function animateHorse (horse) {
      if (randomIntFromInterval(1,7) == 5) {
      eraseHorse(horse);
      horse.HorseCol = Math.round(Math.random());
      drawHorse(horse);
      if(horse.horseBeingRidden == "Y") {
        eraseHorse(horse);
        animateCharacter();
        SpriteCol = horse.HorseCol;
        drawHorse(horse);
        drawSprite();
      }
    }
    }

    function animateCharacter() {
      if(activeRiddenHorse == "") {
      SpriteCol = Math.round(Math.random());
      eraseSprite();
      drawSprite();
    } else {
      SpriteCol = activeRiddenHorse.HorseCol;
    }
    }
      function moveHorses() {
        for (var i = 0; i<5; i++) {
          if (wildHorses[i].spawnMap == activeMap && activeMap != catchWild) {
          animateHorse(wildHorses[i]);
          moveHorsePhysical(randomIntFromInterval(28,100), wildHorses[i]);
        } else if(wildHorses[i].spawnMap == catchWild && activeMap == catchWild)  {
          animateHorse(wildHorses[i]);
          moveHorsePhysical(randomIntFromInterval(24,29), wildHorses[i]);
        }
      }
        for(var b = 0; b<=playerHorses.length-1; b++) {
          if (playerHorses[b].spawnMap == activeMap) {
          animateHorse(playerHorses[b]);
          console.log(playerHorses[b].horseName + " Being riden? + " + playerHorses[b].horseBeingRidden);
          if(playerHorses[b].horseBeingRidden == "N") {
          moveHorsePhysical(randomIntFromInterval(28,100), playerHorses[b]);
        }
          }
        }
      }

      function isPlayerOnWild() {
        for (var i = 0; i<5; i++) {
          if (wildHorses[i].spawnMap == activeMap && wildHorses[i].HorsePosCol == SpriteColPos && wildHorses[i].HorsePosRow == SpriteRowPos) {
            onWildEvent(wildHorses[i]);
          }
        }
      }

function onWildEvent(horse) {
    var wildEvent = document.createElement('li');
    var wildEventButton = document.createElement('button');
    wildEventButton.innerHTML = "catch!";
    wildEvent.textContent = "You've encountered a wild!   ";
    wildEvent.appendChild(wildEventButton);
    wildEventButton.addEventListener("click", () => wildCatchMiniGame(horse));
    document.getElementById('eventInterface').appendChild(wildEvent);
    
    setTimeout(function() {
        document.getElementById('eventInterface').removeChild(wildEvent);
    }, 5000);
}

function wildCatchMiniGame(horse) {
    if (miniGameActive) return; // Prevent starting another mini-game

    miniGameActive = true; // Set the flag to true
    var miniGameEventLog = document.createElement('li');
    var activeMapHolder = activeMap;
    SpriteColPos = 9;
    SpriteRowPos = 9;
    horse.HorsePosCol = 9;
    horse.HorsePosRow = 6;
    var attempts = 0;
    activeMap = catchWild;
    if(activeRiddenHorse != "") {
      activeRiddenHorse.spawnMap = activeMap;
      activeRiddenHorse.HorsePosCol = SpriteColPos;
      activeRiddenHorse.HorsePosRow = SpriteRowPos;
    }
    horse.spawnMap = activeMap;
    console.log('entered wild mini attempts: ' + attempts);
    generateMap(catchWild);

    const keyUpHandler = event => {
        if (event.code === 'Space' && activeMap == catchWild) {
            attempts++;
            console.log('Space pressed, attempts: ' + attempts);
            if (attempts == 5) {
                endMiniGame("You've failed to catch a wild!", horse, activeMapHolder);
            } else if (sendLasso(horse)) {
                endMiniGame("You've caught a wild! It took " + attempts + " attempts", horse, activeMapHolder);
                wildHorses.splice(findWildHorseIndex(), 1);
                createWilds();
                horse.spawnMap = 0;
                horse.HorsePosCol = 10;
                horse.HorsePosRow = 10;
                horse.horseName = prompt("Give your new horse a name!");
                playerHorses.push(horse);
                var horseListItem = document.createElement('li');
                horseListItem.id = horse.horseName;
                var rideHorseButton = document.createElement('button');
                rideHorseButton.textContent = " toggle ride ";
                horseListItem.id = horse.horseName;
                var displayHorseButton = document.createElement('button');
                var openHorseCardButton = document.createElement('button');
                var horseIconList = document.createElement("img");
                horseIconList.setAttribute("src", horse.horseIcon);
                displayHorseButton.innerHTML = "Toggle Display";
                openHorseCardButton.innerHTML = "Info";
                horseListItem.textContent =  horse.horseName +":";
                horseListItem.appendChild(horseIconList);
                horseListItem.appendChild(displayHorseButton);
                horseListItem.appendChild(openHorseCardButton);
                horseListItem.appendChild(rideHorseButton);
                displayHorseButton.addEventListener("click", () => displayHorse(horse.horseName));
                openHorseCardButton.addEventListener("click", () => openHorseCard(horse));
                rideHorseButton.addEventListener("click", () => rideHorse(horse));
                menuHorseExpandList.appendChild(horseListItem);
            }
        }
    };

    document.addEventListener('keyup', keyUpHandler);

    function endMiniGame(message, horse, activeMapHolder) {
        attempts = 0;
        wildHorses.splice(findWildHorseIndex(), 1);
        createWilds();
        miniGameActive = false; // Reset the flag
        activeMap = activeMapHolder;
        generateMap(activeMap);
        if(activeRiddenHorse != "") {
          activeRiddenHorse.spawnMap = activeMapHolder;
          eraseSprite();
          drawHorse(activeRiddenHorse);
          drawSprite();
        } else {
          eraseSprite();
          drawSprite();
        }
        miniGameEventLog.textContent = message;
        document.getElementById('eventInterface').appendChild(miniGameEventLog);
        document.removeEventListener('keyup', keyUpHandler); // Remove the event listener
        setTimeout(function() {
          document.getElementById('eventInterface').removeChild(miniGameEventLog);
      }, 5000);
    }
}

      function rideHorse(horse) {
        if(activeRiddenHorse == "") {
        eraseHorse(horse);
        activeRiddenHorse = horse;
        horse.horseBeingRidden = "Y";
        activeRiddenHorse.spawnMap = activeMap;
        activeRiddenHorse.HorsePosCol = SpriteColPos;
        activeRiddenHorse.HorsePosRow = SpriteRowPos;
        gameImages.SpriteImage.src = "Riding.png";
        eraseSprite();
        drawHorse(activeRiddenHorse);
        drawSprite();
      } else if(horse.horseName == activeRiddenHorse.horseName){
        activeRiddenHorse.horseBeingRidden = "N";
        activeRiddenHorse.spawnMap = "";
        activeRiddenHorse.HorsePosCol = 10;
        activeRiddenHorse.HorsePosRow = 10;
        activeRiddenHorse = "";
        eraseHorse(activeRiddenHorse);
        eraseSprite();
        gameImages.SpriteImage.src = "Character.png";
        drawSprite();
      } else {
        activeRiddenHorse.horseBeingRidden = "N";
        activeRiddenHorse.spawnMap = "";
        activeRiddenHorse.HorsePosCol = 10;
        activeRiddenHorse.HorsePosRow = 10;
        eraseHorse(activeRiddenHorse);
        activeRiddenHorse = horse;
        horse.horseBeingRidden = "Y";
        activeRiddenHorse.spawnMap = activeMap;
        activeRiddenHorse.HorsePosCol = SpriteColPos;
        activeRiddenHorse.HorsePosRow = SpriteRowPos;
        gameImages.SpriteImage.src = "Riding.png";
        eraseSprite();
        drawHorse(activeRiddenHorse);
        drawSprite();
      }
      }

      function displayHorse(horseName) {
        for(var i = 0; i<playerHorses.length; i++) {
          if(playerHorses[i].horseName == horseName && playerHorses[i].horseDisplayed == "N") {
            playerHorses[i].spawnMap = mapSix;
            playerHorses[i].HorsePosCol = 5;
            playerHorses[i].HorsePosRow = 5;
            playerHorses[i].horseDisplayed = "Y";
          } else if(playerHorses[i].horseName == horseName && playerHorses[i].horseDisplayed == "Y") {
            playerHorses[i].spawnMap = 0;
            eraseEnv(playerHorses[i].HorsePosCol,playerHorses[i].HorsePosRow);
            playerHorses[i].horseDisplayed = "N";
          }
        }
      }

      function openHorseCard(horse) {
        horseCard.style.display = "block";
        document.getElementById("interested").textContent = horse.interested;
        document.getElementById("nervous").textContent = horse.nervous;
        document.getElementById("stuborn").textContent = horse.stuborn;
        document.getElementById("trecherous").textContent = horse.trecherous;
        document.getElementById("bond").textContent = horse.horseTrust;
        document.getElementById("displayed").textContent = horse.horseDisplayed;
        document.getElementById("sadpd").textContent = horse.saddlePad.name;
        if(horse.saddlePad != ""){
          var removeSP = document.createElement('button');
          removeSP.innerHTML = "untack";
          removeSP.addEventListener("click", ()=> untackHorse(horse.saddlePad, horse))
          document.getElementById("sadpd").appendChild(removeSP);
        }
        document.getElementById("saddle").textContent = horse.saddle.name;
        if(horse.saddle != ""){
          var removeSaddle = document.createElement('button');
          removeSaddle.innerHTML = "untack";
          removeSaddle.addEventListener("click", ()=> untackHorse(horse.saddle, horse))
          document.getElementById("saddle").appendChild(removeSaddle);
        }
        document.getElementById("bridle").textContent = horse.bridle.name;
        if(horse.bridle != ""){
          var removeBridle = document.createElement('button');
          removeBridle.innerHTML = "untack";
          removeBridle.addEventListener("click", ()=> untackHorse(horse.bridle, horse))
          document.getElementById("bridle").appendChild(removeBridle);
        }
      }

      function untackHorse(item, horse) {
        item.ownedByPlayer++;
        horse[item.type] = "";
      }

      function sendLasso(horse) {
        var lassoPosCol = SpriteColPos;
        var lassoPosRow = SpriteRowPos;
        var horseCaught = false;
        var distance = 0;
        
        for (var p = 0; p<5; p++) {
          distance++;
          lassoPosRow--;
          if(p < 4) {
            lassoCol = 1;
          } else {
            lassoCol = 0;
          }
          
          drawLasso(gameImages.lasso, lassoPosRow, lassoPosCol);
          if (lassoPosRow == horse.HorsePosRow && lassoPosCol == horse.HorsePosCol) {
            horseCaught = true;
          }
          setTimeout(function(){
            for (var x = 0; x <= distance; x++) {
                eraseEnv(lassoPosCol, lassoPosRow+x);
            } }, 100);
            if(horseCaught) {
              return true;
            }
        }
      return false;
      }

      function findWildHorseIndex() {
        for (var i = 0; i<5; i++) {
          if (wildHorses[i].spawnMap == catchWild) {
            return i;
          }
        }
      }

window.onload = loadComplete();
      
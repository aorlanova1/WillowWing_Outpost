import { gameImages } from './gameImages.js';

var possibleItems = {
    Background: {
      1: {
        name: "seedling",
        icon: "seedlings.png",
        type: "Enviromental",
        ownedByPlayer: 0,
      },
    },
    Swamp: {
      1: {
        name: "lilly",
        icon: "lillyItem.png",
        type: "Enviromental",
        ownedByPlayer: 0,
      }
    },
    Savannah: {
      1: {
        name: "magic prairie flower",
        icon: "yellowFlower.png",
        type: "Enviromental",
        ownedByPlayer: 0,
      },
      2: {
        name: "magic stardust flower",
        icon: "purpFlower.png",
        type: "Enviromental",
        ownedByPlayer: 0,
      },
    },
    PlainGrass: {
      1: {
        name: "apple",
        icon: "Apple.png",
        type: "Feed",
        ownedByPlayer: 0,
      },
    },
    Grass: {
      1: {
        name: "apple",
        icon: "Apple.png",
        type: "Feed",
        ownedByPlayer: 0,
      },
    },
    Path: {
      1: {
        name: "luvletter",
        icon: "luvletter.png",
        type: "Enviromental",
        ownedByPlayer: 0,
      },
      2: {
        name: "witch's hat",
        icon: "witchhat.png",
        type: "Enviromental",
        ownedByPlayer: 0,
      },
      3: {
        name: "mysterious brew",
        icon: "brew.png",
        type: "Enviromental",
        ownedByPlayer: 0,
      },
    },
    StoneSwamp: {
      1: {
        name: "geode",
        icon: "geode.png",
        type: "Enviromental",
        ownedByPlayer: 0,
      },
    },
  }

var horseTack = {
    saddlePads: {
      1: {
        name: "black saddle pad",
        icon: gameImages.blackSP.src,
        type: "saddlePad",
        ownedByPlayer: 0,
      },
      2: {
        name: "blue saddle pad",
        icon: gameImages.blueSP.src,
        type: "saddlePad",
        ownedByPlayer: 0,
      },
      3: {
        name: "brown saddle pad",
        icon: gameImages.brownSP.src,
        type: "saddlePad",
        ownedByPlayer: 0,
      },
      4: {
        name: "green saddle pad",
        icon: gameImages.greenSP.src,
        type: "saddlePad",
        ownedByPlayer: 0,
      },
      5: {
        name: "indigo saddle pad",
        icon: gameImages.indigoSP.src,
        type: "saddlePad",
        ownedByPlayer: 0,
      },
      6: {
        name: "light glass saddle pad",
        icon: gameImages.lightGlassSP.src,
        type: "saddlePad",
        ownedByPlayer: 0,
      },
      7: {
        name: "mosi1 saddle pad",
        icon: gameImages.mosi1SP.src,
        type: "saddlePad",
        ownedByPlayer: 0,
      },
      8: {
        name: "mosi2 saddle pad",
        icon: gameImages.mosi2SP.src,
        type: "saddlePad",
        ownedByPlayer: 0,
      },
      9: {
        name: "neon yellow saddle pad",
        icon: gameImages.neonYellowSP.src,
        type: "saddlePad",
        ownedByPlayer: 0,
      },
      10: {
        name: "orange saddle pad",
        icon: gameImages.orangeSP.src,
        type: "saddlePad",
        ownedByPlayer: 0,
      },
      11: {
        name: "orange cream saddle pad",
        icon: gameImages.orangeCreamSP.src,
        type: "saddlePad",
        ownedByPlayer: 0,
      },
      12: {
        name: "periwinkle saddle pad",
        icon: gameImages.periwinkleSP.src,
        type: "saddlePad",
        ownedByPlayer: 0,
      },
      13: {
        name: "pink saddle pad",
        icon: gameImages.pinkSP.src,
        type: "saddlePad",
        ownedByPlayer: 0,
      },
      14: {
        name: "red saddle pad",
        icon: gameImages.redSP.src,
        type: "saddlePad",
        ownedByPlayer: 0,
      },
      15: {
        name: "robin saddle pad",
        icon: gameImages.robinSP.src,
        type: "saddlePad",
        ownedByPlayer: 0,
      },
      16: {
        name: "sea glass saddle pad",
        icon: gameImages.seaGlassSP.src,
        type: "saddlePad",
        ownedByPlayer: 0,
      },
      17: {
        name: "tan saddle pad",
        icon: gameImages.tanSP.src,
        type: "saddlePad",
        ownedByPlayer: 0,
      },
      18: {
        name: "white saddle pad",
        icon: gameImages.whiteSP.src,
        type: "saddlePad",
        ownedByPlayer: 0,
      },
      19: {
        name: "white saddle pad (duplicate)",
        icon: gameImages.whiteSP.src,
        type: "saddlePad",
        ownedByPlayer: 0,
      },
      20: {
        name: "yellow saddle pad",
        icon: gameImages.yellowSP.src,
        type: "saddlePad",
        ownedByPlayer: 0,
      }
    },
    saddles: {
      1: {
        name: "brown saddle",
        icon: gameImages.brownSaddle.src,
        type: "saddle",
        ownedByPlayer: 0,
      }
    },
    bridles: {
      1: {
        name: "brown bridle",
        icon: gameImages.brownBridle.src,
        type: "bridle",
        ownedByPlayer: 0,
      }
    } 
  }

  export const items = {
    possibleItems,
    horseTack
  }
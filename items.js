import { gameImages } from './gameImages.js';

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

  export const items = {
    possibleItems,
    horseTack
  }
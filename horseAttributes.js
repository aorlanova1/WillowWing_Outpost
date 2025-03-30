import { gameImages } from './gameImages.js';

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
    horseDynamicBase: {
      1: gameImages.horseBaseDyna
    },
    horseDynamicMane: {
      1: gameImages.maneDyna
    },
    horseDynamicManeShade: {
      1: gameImages.maneShadeDyna
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

  var horseGenetics = {
    species: [
      'H' //horse
    ],
    redExpress: [
      'R',
      'r'
    ],
    greenExpress: [
      'G',
      'g'
    ],
    blueExpress: [
      'B',
      'b'
    ],
    greyExpress: [
      'E',
      'e'
    ],
    redExpressLevel: [
      [1,20], //1
      [30,40], //2
      [41,60], //3
      [61,70], //4
      [71,90], //5
      [91,100],//6
      [101,110], //7
      [110,120], //8
      [121,130], //9
      [131,140], //10
      [141,150], //11
      [151,160],//12
      [161,170], //13
      [171,180], //14
      [181,190], //15
      [191,200],//16
      [201,210], //17
      [211,220], //18
      [221,230], //19
      [231,240], //20
      [241,250] //21
    ],
    greenExpressLevel: [
      [[1,10]], //1
      [[1,20], [21,30]], //2
      [[1,20], [21,30]], //3
      [[1,20], [21,30],[30,35]], //4
      [[1,20], [21,30],[30,40],[41,50]], //5
      [[1,20], [21,30],[30,40],[41,50], [51,60]],//6
      [[1,20], [21,30],[30,40],[41,50], [51,60]], //7
      [[21,30],[30,40],[41,50], [51,60],[61,70]],//8
      [[30,40],[41,50], [51,60],[61,70],[71,80]], //9
      [[30,40],[41,50], [51,60],[61,70],[71,80]], //10
      [[30,40],[41,50], [51,60],[61,70],[71,80],[81,90]], //11
      [[40,50], [51,60],[61,70],[71,80],[81,90],[91,100]],//12
      [[41,50], [51,60],[61,70],[71,80],[81,90],[91,100],[101,110]], //13
      [[60,70],[71,80],[81,90],[91,100],[101,110]], //14
      [[71,80],[81,90],[91,100],[101,110],[111,120],[121,130]], //15
      [[101,110],[111,120],[121,130],[131,140]], //16
      [[130,140],[141,150],[151,160],[161,170]], //17
      [[150,160],[161,170],[171,180],[181,190]], //18
      [[180,190],[191,200]], //19
      [[190,200]], //20
      [[200,210]], //21
    ]
    ,
    blueExpressLevel: [
      [[1,20]], //1
      [[1,20]], //2
      [[1,15]], //3
      [[1,15]], //4
      [[1,15]], //5
      [[1,20]],//6
      [[1,20]], //7
      [[1,20]], //8
      [[1,20], [21,30]], //9
      [[1,20], [21,30]], //10
      [[10,20]], //11
      [[10,20], [21,30]], //12
      [[10,20], [21,30]], //13
      [[10,20], [21,35]], //14
      [[40,50]],  //15
      [[50,55]], //16
      [[70,80]], //17
      [[100,110]], //18
      [[140,150]], //`19
      [[160,170]], //20
      [[180,190]], //21
    ],
    faceMarking: [
      'F',
      'f'
    ],
    neckMarking: [
      'N',
      'n'
    ],
    chestMarking: [
      'C',
      'c'
    ],
    bodyMarking: [
      'O',
      'o'
    ],
    rumpMarking: [
      'H',
      'h'
    ],
    frontLeg: [
      'K',
      'k'
    ],
    backLeg: [
      'L',
      'l'
    ],
    leftExpress: [
      'A',
      'a'
    ],
    rightExpress: [
      'D',
      'd'
    ]
  }

  export const horsePhysical = {
    horseAttributes,
    horseGenetics
  }
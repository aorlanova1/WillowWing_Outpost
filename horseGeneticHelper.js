import { horsePhysical } from './horseAttributes.js';
import { horseRecoloringPatterns } from './recoloringPatterns.js';
import { helpers } from './helpers.js';

var geneEnum = {
    faceMarking: {
        1: horseRecoloringPatterns.facePattern,
        2: horseRecoloringPatterns.facePattern1,
        3: horseRecoloringPatterns.facePattern2,
    },
    neckMarking: {
        1: horseRecoloringPatterns.neckPattern,
        2: horseRecoloringPatterns.neckPattern1
    },
    chestMarking: {
        1: horseRecoloringPatterns.smallChest,
        2: horseRecoloringPatterns.fullChest,
    },
    bodyMarking: {
        1: horseRecoloringPatterns.speckle,
        2: horseRecoloringPatterns.paint1,
        3: horseRecoloringPatterns.paint2,
    },
    rumpMarking: {
        1: horseRecoloringPatterns.rumpSpots,
        2: horseRecoloringPatterns.rumpSpots1,
    },
    frontLegMarking: {
        1: horseRecoloringPatterns.legsFrontBoth,
        2: horseRecoloringPatterns.legsFrontBoth1,
        3: horseRecoloringPatterns.legsFrontBoth2,
    },
    backLegMarking: {
        1: horseRecoloringPatterns.legsBackBoth,
        2: horseRecoloringPatterns.legsBackBoth1,
        3: horseRecoloringPatterns.legsBackBoth2,
    }
}

var allGenes = ["faceMarking", "neckMarking", "chestMarking", "bodyMarking", "rumpMarking", "frontLegMarking", "backLegMarking"];

function getGroupings(horse) {
    var faceMarking = [horse.faceMarkingGene1,horse.faceMarkingGene2,horse.faceMarkingGene3];
    var neckMarking = [horse.neckMarkingGene1,horse.neckMarkingGene2];
    var chestMarking = [horse.chestMarkingGene1, horse.chestMarkingGene2];
    var bodyMarking = [horse.bodyMarkingGene1, horse.bodyMarkingGene2, horse.bodyMarkingGene3];
    var rumpMarking = [horse.rumpMarkingGene1, horse.rumpMarkingGene2];
    var frontLegMarking = [horse.frontLegMarkingGene1, horse.frontLegMarkingGene2, horse.frontLegMarkingGene3];
    var backLegMarking = [horse.backLegMarkingGene1,horse.backLegMarkingGene2,horse.backLegMarkingGene3];
    return [faceMarking,neckMarking,chestMarking,bodyMarking,rumpMarking,frontLegMarking,backLegMarking];
}

function getExpressionLevels(horse) {
    var genesOrganized = getGroupings(horse);
    var level;
    var levels = [];
    for (var i = 0; i < genesOrganized.length; i++) {
        level = 0;
        for(var j = 0; j < genesOrganized[i].length; j++) {
            if(isDoubleExpressed(genesOrganized[i][j])) {
                level++;
            } else {
                break;
            }
        }
        levels.push(level);
    }
    return levels;
}

function callPatterns(r,g,b,a, horse) {
    var geneExpressions = getExpressionLevels(horse);
    for (var i = 0; i<geneExpressions.length; i++) {
        if(geneExpressions[i] != 0) {
            geneEnum[allGenes[i]][geneExpressions[i]](r, g, b, a, horse);
        }
    }
}

function createGenetics(horse) {
    horse.redBodyExpress = generateString(horsePhysical.horseGenetics.redExpress);
    horse.greenBodyExpress = generateString(horsePhysical.horseGenetics.greenExpress);
    horse.blueBodyExpress = generateString(horsePhysical.horseGenetics.blueExpress);
    horse.greyBodyExpress = generateString(horsePhysical.horseGenetics.greyExpress);
    horse.redBodyLevel = Math.floor(Math.random() * horsePhysical.horseGenetics.redExpressLevel.length);
    horse.blueBodyLevel = Math.random();
    horse.greenBodyLevel = Math.random();
  
    horse.redManeExpress = generateString(horsePhysical.horseGenetics.redExpress);
    horse.greenManeExpress = generateString(horsePhysical.horseGenetics.greenExpress);
    horse.blueManeExpress = generateString(horsePhysical.horseGenetics.blueExpress);
    horse.greyManeExpress = generateString(horsePhysical.horseGenetics.greyExpress);
    horse.redManeLevel = helpers.randomIntFromInterval(1,horsePhysical.horseGenetics.redExpressLevel.length)-1;
    horse.blueManeLevel = Math.random();
    horse.greenManeLevel = Math.random();
  
    horse.faceMarkingGene1 = generateString(horsePhysical.horseGenetics.faceMarking);
    horse.faceMarkingGene2 = generateString(horsePhysical.horseGenetics.faceMarking);
    horse.faceMarkingGene3 = generateString(horsePhysical.horseGenetics.faceMarking);
    horse.neckMarkingGene1 = generateString(horsePhysical.horseGenetics.neckMarking);
    horse.neckMarkingGene2 = generateString(horsePhysical.horseGenetics.neckMarking);
    horse.chestMarkingGene1 = generateString(horsePhysical.horseGenetics.chestMarking);
    horse.chestMarkingGene2 = generateString(horsePhysical.horseGenetics.chestMarking);
    horse.bodyMarkingGene1 = generateString(horsePhysical.horseGenetics.bodyMarking);
    horse.bodyMarkingGene2 = generateString(horsePhysical.horseGenetics.bodyMarking);
    horse.bodyMarkingGene3 = generateString(horsePhysical.horseGenetics.bodyMarking);
    horse.rumpMarkingGene1 = generateString(horsePhysical.horseGenetics.rumpMarking);
    horse.rumpMarkingGene2 = generateString(horsePhysical.horseGenetics.rumpMarking);
    horse.frontLegMarkingGene1 = generateString(horsePhysical.horseGenetics.frontLeg);
    horse.frontLegMarkingGene2 = generateString(horsePhysical.horseGenetics.frontLeg);
    horse.frontLegMarkingGene3 = generateString(horsePhysical.horseGenetics.frontLeg);
    horse.backLegMarkingGene1 = generateString(horsePhysical.horseGenetics.backLeg);
    horse.backLegMarkingGene2 = generateString(horsePhysical.horseGenetics.backLeg);
    horse.backLegMarkingGene3 = generateString(horsePhysical.horseGenetics.backLeg);
    horse.leftExpressionGene = generateString(horsePhysical.horseGenetics.leftExpress);
    horse.rightExpressionGene = generateString(horsePhysical.horseGenetics.rightExpress);
}

function breedHorses(horse1,horse2,newHorse) {
    newHorse.redBodyExpress = generateStringBreeding(horse1.redBodyExpress,horse2.redBodyExpress);
    newHorse.greenBodyExpress = generateStringBreeding(horse1.greenBodyExpress,horse2.greenBodyExpress);
    newHorse.blueBodyExpress = generateStringBreeding(horse1.blueBodyExpress,horse2.blueBodyExpress);
    newHorse.greyBodyExpress = generateStringBreeding(horse1.greyBodyExpress,horse2.greyBodyExpress);

  
    newHorse.redManeExpress = generateStringBreeding(horse1.redManeExpress,horse2.redManeExpress);
    newHorse.greenManeExpress = generateStringBreeding(horse1.greenManeExpress,horse2.greenManeExpress);
    newHorse.blueManeExpress = generateStringBreeding(horse1.blueManeExpress,horse2.blueManeExpress);
    newHorse.greyManeExpress = generateStringBreeding(horse1.greyManeExpress,horse2.greyManeExpress);
    generateColorExpressionBreeding(horse1,horse2,newHorse);
  
    newHorse.faceMarkingGene1 = generateStringBreeding(horse1.faceMarkingGene1,horse2.faceMarkingGene1);
    newHorse.faceMarkingGene2 = generateStringBreeding(horse1.faceMarkingGene2,horse2.faceMarkingGene2);
    newHorse.faceMarkingGene3 = generateStringBreeding(horse1.faceMarkingGene3,horse2.faceMarkingGene3);
    newHorse.neckMarkingGene1 = generateStringBreeding(horse1.neckMarkingGene1,horse2.neckMarkingGene1);
    newHorse.neckMarkingGene2 = generateStringBreeding(horse1.neckMarkingGene2,horse2.neckMarkingGene2);
    newHorse.chestMarkingGene1 = generateStringBreeding(horse1.chestMarkingGene1,horse2.chestMarkingGene1);
    newHorse.chestMarkingGene2 = generateStringBreeding(horse1.chestMarkingGene2,horse2.chestMarkingGene2);
    newHorse.bodyMarkingGene1 = generateStringBreeding(horse1.bodyMarkingGene1,horse2.bodyMarkingGene1);
    newHorse.bodyMarkingGene2 = generateStringBreeding(horse1.bodyMarkingGene2,horse2.bodyMarkingGene2);
    newHorse.bodyMarkingGene3 = generateStringBreeding(horse1.bodyMarkingGene3,horse2.bodyMarkingGene3);
    newHorse.rumpMarkingGene1 = generateStringBreeding(horse1.rumpMarkingGene1,horse2.rumpMarkingGene1);
    newHorse.rumpMarkingGene2 = generateStringBreeding(horse1.rumpMarkingGene2,horse2.rumpMarkingGene2);
    newHorse.frontLegMarkingGene1 = generateStringBreeding(horse1.frontLegMarkingGene1,horse2.frontLegMarkingGene1);
    newHorse.frontLegMarkingGene2 = generateStringBreeding(horse1.frontLegMarkingGene2,horse2.frontLegMarkingGene2);
    newHorse.frontLegMarkingGene3 = generateStringBreeding(horse1.frontLegMarkingGene3,horse2.frontLegMarkingGene3);
    newHorse.backLegMarkingGene1 = generateStringBreeding(horse1.backLegMarkingGene1,horse2.backLegMarkingGene1);
    newHorse.backLegMarkingGene2 = generateStringBreeding(horse1.backLegMarkingGene2,horse2.backLegMarkingGene2);
    newHorse.backLegMarkingGene3 = generateStringBreeding(horse1.backLegMarkingGene3,horse2.backLegMarkingGene3);
    newHorse.leftExpressionGene = generateStringBreeding(horse1.leftExpressionGene,horse2.leftExpressionGene);
    newHorse.rightExpressionGene = generateStringBreeding(horse1.rightExpressionGene,horse2.rightExpressionGene);
}

function getColor(redExpress, greenExpress,blueExpress,greyExpress,redLevel,blueLevel,greenLevel) {
    var r;
    var g;
    var b;
    if(isExpressed(redExpress[0])) {
        r = helpers.randomIntFromInterval(horsePhysical.horseGenetics.redExpressLevel[redLevel][0],horsePhysical.horseGenetics.redExpressLevel[redLevel][1]);
    } else {
        r = helpers.randomIntFromInterval(horsePhysical.horseGenetics.redExpressLevel[0][0],horsePhysical.horseGenetics.redExpressLevel[0][1]);
    }

    if(isDoubleExpressed(greyExpress)) { 
        g = r;
        b = r;
    } else { 
        if(isExpressed(greenExpress[0]) && isExpressed(redExpress[0])) {
            var greenPoint = Math.floor(greenLevel * horsePhysical.horseGenetics.greenExpressLevel[redLevel].length);
            g = helpers.randomIntFromInterval(horsePhysical.horseGenetics.greenExpressLevel[redLevel][greenPoint][0],horsePhysical.horseGenetics.greenExpressLevel[redLevel][greenPoint][1]);
        } else {
            if(isExpressed(redExpress[0])) {
            g = helpers.randomIntFromInterval(horsePhysical.horseGenetics.greenExpressLevel[redLevel][0][0],horsePhysical.horseGenetics.greenExpressLevel[redLevel][0][1]);
            } else {
                g = helpers.randomIntFromInterval(horsePhysical.horseGenetics.greenExpressLevel[0][0][0],horsePhysical.horseGenetics.greenExpressLevel[0][0][1]);
            }
        }

        if(isExpressed(blueExpress[0]) && isExpressed(redExpress[0])) {
            var bluePoint = Math.floor(blueLevel * horsePhysical.horseGenetics.blueExpressLevel[redLevel].length);
            b = helpers.randomIntFromInterval(horsePhysical.horseGenetics.blueExpressLevel[redLevel][bluePoint][0],horsePhysical.horseGenetics.blueExpressLevel[redLevel][bluePoint][1]);
        } else {
        if(isExpressed(redExpress[0])) {
            b = helpers.randomIntFromInterval(horsePhysical.horseGenetics.blueExpressLevel[redLevel][0][0],horsePhysical.horseGenetics.blueExpressLevel[redLevel][0][1]);
        } else {
            g = helpers.randomIntFromInterval(horsePhysical.horseGenetics.blueExpressLevel[0][0][0],horsePhysical.horseGenetics.blueExpressLevel[0][0][1]);
        }
        }
    }
    console.log("r,g,b: : ", r + " " + g + " " + b);
    return [r,g,b];
}

function generateString(gene) {
    var gene1 = gene[Math.floor(Math.random() * gene.length)];
    var gene2 = gene[Math.floor(Math.random() * gene.length)];
    if(isExpressed(gene1)) {
        return gene1+gene2;
    } else if (isExpressed(gene2)) {
        return gene2+gene1;
    } else {
        return gene1+gene2;
    }
}

function generateStringBreeding(geneHorse1, geneHorse2) {
    console.log("gene1: " + geneHorse1);
    console.log("gene2: " + geneHorse2);

    var gene1 = geneHorse1[Math.floor(Math.random() * geneHorse1.length)];
    var gene2 = geneHorse2[Math.floor(Math.random() * geneHorse2.length)];
    if(isExpressed(gene1)) {
        return gene1+gene2;
    } else if (isExpressed(gene2)) {
        return gene2+gene1;
    } else {
        return gene1+gene2;
    }
}

function generateColorExpressionBreeding(horse1, horse2,newHorse) {
    newHorse.redBodyLevel = Math.floor((horse1.redBodyLevel+horse2.redBodyLevel)/2);
    newHorse.greenBodyLevel = Math.floor((horse1.greenBodyLevel+horse2.greenBodyLevel)/2);
    newHorse.blueBodyLevel = Math.floor((horse1.blueBodyLevel+horse2.blueBodyLevel)/2);

    newHorse.redManeLevel = Math.floor((horse1.redManeLevel+horse2.redManeLevel)/2);
    newHorse.greenManeLevel = Math.floor((horse1.greenManeLevel+horse2.greenManeLevel)/2);
    newHorse.blueManeLevel = Math.floor((horse1.blueManeLevel+horse2.blueManeLevel)/2);
}

function isExpressed(str) {
    return str === str.toUpperCase() &&
           str !== str.toLowerCase();
}

function isDoubleExpressed(str) {
    return (str === str.toUpperCase() &&
           str !== str.toLowerCase());
}

export const geneticsHelper = {
    createGenetics,
    getColor,
    callPatterns,
    breedHorses
  }
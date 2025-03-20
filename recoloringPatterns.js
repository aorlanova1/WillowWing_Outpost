import { horseRecoloring } from "./recoloringHorses.js";
var width = 64;
var height = 128;

var tempCanvas = document.createElement('canvas');
tempCanvas.width = width;
tempCanvas.height = height;
var tempCtx = tempCanvas.getContext('2d');
var id = tempCtx.createImageData(1,1); // only do this once per page
var d  = id.data;   
tempCtx.willReadFrequently = true;

var x1 = 13;
var y1 = 17;
var x1BackLeg = 21;
var y1BackLeg = 23;
var x2 = 44;
var y2 = 17;
var x2BackLeg = 53;
var y2BackLeg = 22;
var x3 = 16;
var y3 = 51;
var x3BackLeg = 10;
var y3BackLeg = 55;
var x4 = 49;
var y4 = 51;
var x4BackLeg = 42;
var y4BackLeg = 54;
var x5 = 16;
var y5 = 73;
var x6 = 16;
var y6 = 80;
var x7 = 48;
var y7 = 72;
var x8 = 48;
var y8 = 78;
var x9 = 16;
var y9 = 107;
var x10 = 16;
var y10 = 113;
var x11 = 47;
var y11 = 105;
var x12 = 48;
var y12 = 113;

function colorBody(r,g,b,a, horse) {
    tempCtx.drawImage(horse.horseBase, 0, 0);
    var probabilityOfExpression = 100;
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    horseRecoloring.color(tempCtx,id,x1,y1,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x1BackLeg,y1BackLeg,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x2,y2,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x2BackLeg,y2BackLeg,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x3,y3,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x3BackLeg,y3BackLeg,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x4,y4,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x4BackLeg,y4BackLeg,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x5,y5,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x6,y6,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x7,y7,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x8,y8,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x9,y9,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x10,y10,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x11,y11,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x12,y12,probabilityOfExpression,false,0);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);

}

function colorMane(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.maneBase, 0, 0);
    
    var probabilityOfExpression = 100;
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
    //1
    horseRecoloring.color(tempCtx,id,4,5,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,3,6,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,10,6,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,12,7,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,14,11,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,26,15,probabilityOfExpression,false,0);
    //2
    horseRecoloring.color(tempCtx,id,35,5,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,35,6,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,42,6,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,44,7,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,45,12,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,58,15,probabilityOfExpression,false,0);
    //3
    horseRecoloring.color(tempCtx,id,27,37,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,28,38,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,20,38,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,19,39,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,17,43,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,2,47,probabilityOfExpression,false,0);
    //4
    horseRecoloring.color(tempCtx,id,59,37,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,60,38,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,52,38,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,51,39,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,49,43,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,34,47,probabilityOfExpression,false,0);
    //5
    horseRecoloring.color(tempCtx,id,16,71,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,16,74,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,17,75,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,16,80,probabilityOfExpression,false,0);
    //6
    horseRecoloring.color(tempCtx,id,48,70,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,48,73,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,49,74,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,48,79,probabilityOfExpression,false,0);
    //7
    horseRecoloring.color(tempCtx,id,15,101,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,17,101,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,16,102,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,20,107,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,20,109,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,21,110,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,22,113,probabilityOfExpression,false,0);
    //8
    horseRecoloring.color(tempCtx,id,47,101,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,49,101,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,48,102,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,52,107,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,52,110,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,53,112,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,54,113,probabilityOfExpression,false,0);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);

}

function drawEyes(r,g,b,a) {
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
    tempCtx.putImageData( id, 6, 8 );
    tempCtx.putImageData( id, 38, 8);
    tempCtx.putImageData( id, 25, 40 );
    tempCtx.putImageData( id, 57, 40 );
    tempCtx.putImageData( id, 13, 103 );
    tempCtx.putImageData( id, 19, 103 );
    tempCtx.putImageData( id, 45, 103 );
    tempCtx.putImageData( id, 51, 103 );

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);

    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
}

function speckle(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.horseBase, 0, 0);
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";


    horseRecoloring.color(tempCtx,id,x1,y1,85,false,0);
    horseRecoloring.color(tempCtx,id,x1BackLeg,y1BackLeg,85,false,0);
    horseRecoloring.color(tempCtx,id,x2,y2,85,false,0);
    horseRecoloring.color(tempCtx,id,x2BackLeg,y2BackLeg,85,false,0);
    horseRecoloring.color(tempCtx,id,x3,y3,85,false,0);
    horseRecoloring.color(tempCtx,id,x3BackLeg,y3BackLeg,85,false,0);
    horseRecoloring.color(tempCtx,id,x4,y4,85,false,0);
    horseRecoloring.color(tempCtx,id,x4BackLeg,y4BackLeg,85,false,0);
    horseRecoloring.color(tempCtx,id,x5,y5,85,false,0);
    horseRecoloring.color(tempCtx,id,x6,y6,85,false,0);
    horseRecoloring.color(tempCtx,id,x7,y7,85,false,0);
    horseRecoloring.color(tempCtx,id,x8,y8,85,false,0);
    horseRecoloring.color(tempCtx,id,x9,y9,85,false,0);
    horseRecoloring.color(tempCtx,id,x10,y10,85,false,0);
    horseRecoloring.color(tempCtx,id,x11,y11,85,false,0);
    horseRecoloring.color(tempCtx,id,x12,y12,85,false,0);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);

}

function fullChest(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.horseBase, 0, 0);
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    horseRecoloring.color(tempCtx,id,16,114,90,true,10);
    horseRecoloring.color(tempCtx,id,x1,y1,1,false,0);
    horseRecoloring.color(tempCtx,id,x1BackLeg,y1BackLeg,1,false,0);
    horseRecoloring.color(tempCtx,id,x2,y2,1,false,0);
    horseRecoloring.color(tempCtx,id,x2BackLeg,y2BackLeg,1,false,0);
    horseRecoloring.color(tempCtx,id,x3,y3,1,false,0);
    horseRecoloring.color(tempCtx,id,x3BackLeg,y3BackLeg,1,false,0);
    horseRecoloring.color(tempCtx,id,x4,y4,1,false,0);
    horseRecoloring.color(tempCtx,id,x4BackLeg,y4BackLeg,1,false,0);
    horseRecoloring.color(tempCtx,id,x5,y5,1,false,0);
    horseRecoloring.color(tempCtx,id,x6,y6,1,false,0);
    horseRecoloring.color(tempCtx,id,x7,y7,1,false,0);
    horseRecoloring.color(tempCtx,id,x8,y8,1,false,0);
    horseRecoloring.color(tempCtx,id,x9,y9,1,false,0);
    horseRecoloring.color(tempCtx,id,x11,y11,1,false,0);
    horseRecoloring.color(tempCtx,id,x12,y12,1,false,0);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);

}

function smallChest(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.horseBase, 0, 0);
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    horseRecoloring.color(tempCtx,id,16,114,90,true,5);
    horseRecoloring.color(tempCtx,id,x1,y1,1,false,0);
    horseRecoloring.color(tempCtx,id,x1BackLeg,y1BackLeg,1,false,0);
    horseRecoloring.color(tempCtx,id,x2,y2,1,false,0);
    horseRecoloring.color(tempCtx,id,x2BackLeg,y2BackLeg,1,false,0);
    horseRecoloring.color(tempCtx,id,x3,y3,1,false,0);
    horseRecoloring.color(tempCtx,id,x3BackLeg,y3BackLeg,1,false,0);
    horseRecoloring.color(tempCtx,id,x4,y4,1,false,0);
    horseRecoloring.color(tempCtx,id,x4BackLeg,y4BackLeg,1,false,0);
    horseRecoloring.color(tempCtx,id,x5,y5,1,false,0);
    horseRecoloring.color(tempCtx,id,x6,y6,1,false,0);
    horseRecoloring.color(tempCtx,id,x7,y7,1,false,0);
    horseRecoloring.color(tempCtx,id,x8,y8,1,false,0);
    horseRecoloring.color(tempCtx,id,x9,y9,1,false,0);
    horseRecoloring.color(tempCtx,id,x11,y11,1,false,0);
    horseRecoloring.color(tempCtx,id,x12,y12,1,false,0);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);

}

function legsFrontBoth(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.horseBase, 0, 0);
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    horseRecoloring.color(tempCtx,id,13,125,60,true,5);
    horseRecoloring.color(tempCtx,id,19,126,60,true,5);
    horseRecoloring.color(tempCtx,id,19,126,1,false,0);
    horseRecoloring.color(tempCtx,id,x1,y1,1,false,0);
    horseRecoloring.color(tempCtx,id,x1BackLeg,y1BackLeg,1,false,0);
    horseRecoloring.color(tempCtx,id,x2,y2,1,false,0);
    horseRecoloring.color(tempCtx,id,x2BackLeg,y2BackLeg,1,false,0);
    horseRecoloring.color(tempCtx,id,x3,y3,1,false,0);
    horseRecoloring.color(tempCtx,id,x3BackLeg,y3BackLeg,1,false,0);
    horseRecoloring.color(tempCtx,id,x4,y4,1,false,0);
    horseRecoloring.color(tempCtx,id,x4BackLeg,y4BackLeg,1,false,0);
    horseRecoloring.color(tempCtx,id,x5,y5,1,false,0);
    horseRecoloring.color(tempCtx,id,x6,y6,1,false,0);
    horseRecoloring.color(tempCtx,id,x7,y7,1,false,0);
    horseRecoloring.color(tempCtx,id,x8,y8,1,false,0);
    horseRecoloring.color(tempCtx,id,x9,y9,1,false,0);
    horseRecoloring.color(tempCtx,id,x11,y11,1,false,0);
    horseRecoloring.color(tempCtx,id,x12,y12,1,false,0);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);

}

function legsFrontLeft(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.horseBase, 0, 0);
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    horseRecoloring.color(tempCtx,id,19,126,85,true,15);
    horseRecoloring.color(tempCtx,id,19,126,1,false,25);
    horseRecoloring.color(tempCtx,id,x1,y1,1,false,0);
    horseRecoloring.color(tempCtx,id,x1BackLeg,y1BackLeg,1,false,0);
    horseRecoloring.color(tempCtx,id,x2,y2,1,false,0);
    horseRecoloring.color(tempCtx,id,x2BackLeg,y2BackLeg,1,false,0);
    horseRecoloring.color(tempCtx,id,x3,y3,1,false,0);
    horseRecoloring.color(tempCtx,id,x3BackLeg,y3BackLeg,1,false,0);
    horseRecoloring.color(tempCtx,id,x4,y4,1,false,0);
    horseRecoloring.color(tempCtx,id,x4BackLeg,y4BackLeg,1,false,0);
    horseRecoloring.color(tempCtx,id,x5,y5,1,false,0);
    horseRecoloring.color(tempCtx,id,x6,y6,1,false,0);
    horseRecoloring.color(tempCtx,id,x7,y7,1,false,0);
    horseRecoloring.color(tempCtx,id,x8,y8,1,false,0);
    horseRecoloring.color(tempCtx,id,x9,y9,1,false,0);
    horseRecoloring.color(tempCtx,id,x11,y11,1,false,0);
    horseRecoloring.color(tempCtx,id,x12,y12,1,false,0);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);

}

function legsFrontRight(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.horseBase, 0, 0);
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    horseRecoloring.color(tempCtx,id,13,125,60,true,15);
    horseRecoloring.color(tempCtx,id,13,125,1,false,5);
    horseRecoloring.color(tempCtx,id,x1,y1,1,false,0);
    horseRecoloring.color(tempCtx,id,x1BackLeg,y1BackLeg,1,false,0);
    horseRecoloring.color(tempCtx,id,x2,y2,1,false,0);
    horseRecoloring.color(tempCtx,id,x2BackLeg,y2BackLeg,1,false,0);
    horseRecoloring.color(tempCtx,id,x3,y3,1,false,0);
    horseRecoloring.color(tempCtx,id,x3BackLeg,y3BackLeg,1,false,0);
    horseRecoloring.color(tempCtx,id,x4,y4,1,false,0);
    horseRecoloring.color(tempCtx,id,x4BackLeg,y4BackLeg,1,false,0);
    horseRecoloring.color(tempCtx,id,x5,y5,1,false,0);
    horseRecoloring.color(tempCtx,id,x6,y6,1,false,0);
    horseRecoloring.color(tempCtx,id,x7,y7,1,false,0);
    horseRecoloring.color(tempCtx,id,x8,y8,1,false,0);
    horseRecoloring.color(tempCtx,id,x9,y9,1,false,0);
    horseRecoloring.color(tempCtx,id,x11,y11,1,false,0);
    horseRecoloring.color(tempCtx,id,x12,y12,1,false,0);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);

}

function backSpots(r,g,b,a, horse) {
    tempCtx.drawImage(horse.horseBase, 0, 0);
    var probabilityOfExpression = 1;
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    horseRecoloring.color(tempCtx,id,19,16,80,true,5);
    horseRecoloring.color(tempCtx,id,19,17,80,true,5);
    horseRecoloring.color(tempCtx,id,19,18,80,true,5);
    horseRecoloring.color(tempCtx,id,15,48,80,true,5);
    horseRecoloring.color(tempCtx,id,x1,y1,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x1BackLeg,y1BackLeg,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x2,y2,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x2BackLeg,y2BackLeg,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x3,y3,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x3BackLeg,y3BackLeg,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x4,y4,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x4BackLeg,y4BackLeg,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x5,y5,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x6,y6,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x7,y7,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x8,y8,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x9,y9,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x10,y10,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x11,y11,probabilityOfExpression,false,0);
    horseRecoloring.color(tempCtx,id,x12,y12,probabilityOfExpression,false,0);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);

}


export const horseRecoloringPatterns = {
    colorBody,
    colorMane,
    drawEyes,
    speckle,
    fullChest,
    smallChest,
    legsFrontBoth,
    legsFrontLeft,
    legsFrontRight,
    backSpots
  }
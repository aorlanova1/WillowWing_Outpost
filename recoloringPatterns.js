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

function finishColor(horse) {
    horseRecoloring.visitedPixels.clear();
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.horseBase, 0, 0);
    horseRecoloring.color(tempCtx,id,x1,y1,0,false,0);
    horseRecoloring.color(tempCtx,id,x1BackLeg,y1BackLeg,0,false,0);
    horseRecoloring.color(tempCtx,id,x2,y2,0,false,0);
    horseRecoloring.color(tempCtx,id,x2BackLeg,y2BackLeg,0,false,0);
    horseRecoloring.color(tempCtx,id,x3,y3,0,false,0);
    horseRecoloring.color(tempCtx,id,x3BackLeg,y3BackLeg,0,false,0);
    horseRecoloring.color(tempCtx,id,x4,y4,0,false,0);
    horseRecoloring.color(tempCtx,id,x4BackLeg,y4BackLeg,0,false,0);
    horseRecoloring.color(tempCtx,id,x5,y5,0,false,0);
    horseRecoloring.color(tempCtx,id,x6,y6,0,false,0);
    horseRecoloring.color(tempCtx,id,x7,y7,0,false,0);
    horseRecoloring.color(tempCtx,id,x8,y8,0,false,0);
    horseRecoloring.color(tempCtx,id,x9,y9,0,false,0);
    horseRecoloring.color(tempCtx,id,x10,y10,0,false,0);
    horseRecoloring.color(tempCtx,id,x11,y11, 0,false,0);
    horseRecoloring.color(tempCtx,id,x12,y12,0,false,0);
    horseRecoloring.visitedPixels.clear();
    horseRecoloring.colorMap.clear();
}

function colorBody(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
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

}

function drawEyes(r,g,b,a) {
    d[0]   = 0;
    d[1]   = 0;
    d[2]   = 0;
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

    d[0]   = 200;
    d[1]   = 200;
    d[2]   = 200;
    d[3]   = 100;

    tempCtx.putImageData( id, 6, 9 );
    tempCtx.putImageData( id, 38, 9);
    tempCtx.putImageData( id, 25, 41 );
    tempCtx.putImageData( id, 57, 41 );

    tempCtx.putImageData( id, 5, 8 );
    tempCtx.putImageData( id, 37, 8);
    tempCtx.putImageData( id, 26, 40 );
    tempCtx.putImageData( id, 58, 40 );

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);

    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
}

//BOTH SIDES PATTERNS

//1 copy of body:
function speckle(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.horseBase, 0, 0);
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    //left
    horseRecoloring.color(tempCtx,id,16,16,10,true,5);
    horseRecoloring.color(tempCtx,id,17,19,10,true,5);

    //right
    horseRecoloring.color(tempCtx,id,17,48,10,true,5);
    horseRecoloring.color(tempCtx,id,15,51,10,true,5);

    finishColor(horse);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);
}

//2 copy of body:
 function paint1(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.horseBase, 0, 0);
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    //left
    horseRecoloring.color(tempCtx,id,13,16,90,true,4);
    horseRecoloring.color(tempCtx,id,12,17,90,true,4);
    horseRecoloring.color(tempCtx,id,12,18,90,true,4);
    horseRecoloring.color(tempCtx,id,13,19,90,true,4);

    horseRecoloring.color(tempCtx,id,19,16,90,true,4);
    horseRecoloring.color(tempCtx,id,21,17,90,true,3);
    horseRecoloring.color(tempCtx,id,20,18,90,true,3);
    
    //right
    horseRecoloring.color(tempCtx,id,9,48,90,true,4);
    horseRecoloring.color(tempCtx,id,11,49,90,true,3);
     horseRecoloring.color(tempCtx,id,12,50,90,true,3);
     
     horseRecoloring.color(tempCtx,id,14,51,90,true,3);
     horseRecoloring.color(tempCtx,id,13,52,90,true,5);
     horseRecoloring.color(tempCtx,id,14,53,90,true,3);

     finishColor(horse);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);
}

//3 copy of body:
 function paint2(r,g,b,a, horse) {
    console.log("Drawing paint pattern...");
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.horseBase, 0, 0);
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    //left
    horseRecoloring.color(tempCtx,id,9,16,90,true,4);
    horseRecoloring.color(tempCtx,id,10,17,90,true,4);
    horseRecoloring.color(tempCtx,id,9,18,90,true,4);
    horseRecoloring.color(tempCtx,id,9,19,90,true,4);

    horseRecoloring.color(tempCtx,id,15,17,90,true,4);
    horseRecoloring.color(tempCtx,id,14,18,90,true,4);
    horseRecoloring.color(tempCtx,id,16,19,90,true,4);
    horseRecoloring.color(tempCtx,id,17,20,90,true,4);

    horseRecoloring.color(tempCtx,id,22,17,90,true,4);
    horseRecoloring.color(tempCtx,id,21,18,90,true,4);

    
    //right
    horseRecoloring.color(tempCtx,id,9,49,90,true,3);
    horseRecoloring.color(tempCtx,id,8,50,90,true,5);
    horseRecoloring.color(tempCtx,id,7,51,90,true,5);
    horseRecoloring.color(tempCtx,id,9,52,90,true,3);

    finishColor(horse);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);
}

//1 copy of chest
function smallChest(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.horseBase, 0, 0);
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
    //
    horseRecoloring.color(tempCtx,id,15,114,90,true,3);
    horseRecoloring.color(tempCtx,id,14,115,90,true,5);

    finishColor(horse);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);
}

//2 copies of chest
function fullChest(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.horseBase, 0, 0);
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    horseRecoloring.color(tempCtx,id,14,111,90,true,2);
    horseRecoloring.color(tempCtx,id,14,112,90,true,2);
    horseRecoloring.color(tempCtx,id,13,113,90,true,6);
    horseRecoloring.color(tempCtx,id,15,114,90,true,4);
    horseRecoloring.color(tempCtx,id,14,115,90,true,5);

    finishColor(horse);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);

}

//1 copy legs
function legsFrontBoth(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.horseBase, 0, 0);
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    horseRecoloring.color(tempCtx,id,45,126,85,true,3);
    horseRecoloring.color(tempCtx,id,19,126,85,true,3);

    finishColor(horse);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);
}

//2 copy legs
function legsFrontBoth1(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.horseBase, 0, 0);
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    horseRecoloring.color(tempCtx,id,45,126,90,true,6);
    horseRecoloring.color(tempCtx,id,19,126,90,true,6);

    finishColor(horse);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);
}

//3 copy legs
function legsFrontBoth2(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.horseBase, 0, 0);
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    horseRecoloring.color(tempCtx,id,45,126,99,true,10);
    horseRecoloring.color(tempCtx,id,19,126,99,true,10);

    finishColor(horse);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);
}

//back legs
function legsBackBoth(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.horseBase, 0, 0);
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    horseRecoloring.color(tempCtx,id,25,30,95,true,3);
    horseRecoloring.color(tempCtx,id,6,62,95,true,3);

    finishColor(horse);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);
}

//back legs 2
function legsBackBoth1(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.horseBase, 0, 0);
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    horseRecoloring.color(tempCtx,id,25,30,95,true,7);
    horseRecoloring.color(tempCtx,id,6,62,95,true,7);

    finishColor(horse);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);
}

//back legs 2
function legsBackBoth2(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.horseBase, 0, 0);
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    horseRecoloring.color(tempCtx,id,25,30,90,true,12);
    horseRecoloring.color(tempCtx,id,6,62,90,true,12);

    finishColor(horse);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);
}

//1 expression
function facePattern(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.horseBase, 0, 0);
    var probabilityOfExpression = 1;
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    //back and forth ladder effect
    horseRecoloring.color(tempCtx,id,16,101,80,true,1);
    horseRecoloring.color(tempCtx,id,15,102,80,true,2);
    horseRecoloring.color(tempCtx,id,16,103,80,true,2);
    horseRecoloring.color(tempCtx,id,15,104,80,true,2);
    horseRecoloring.color(tempCtx,id,15,105,90,true,3);
    horseRecoloring.color(tempCtx,id,16,106,80,true,1);
    horseRecoloring.color(tempCtx,id,15,107,80,true,2);
    horseRecoloring.color(tempCtx,id,16,108,80,true,1);

    finishColor(horse);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);

}
//2 exp
function facePattern1(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.horseBase, 0, 0);
    var probabilityOfExpression = 1;
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    //back and forth ladder effect
    horseRecoloring.color(tempCtx,id,15,101,75,true,2);
    horseRecoloring.color(tempCtx,id,14,102,75,true,3);
    horseRecoloring.color(tempCtx,id,15,103,75,true,3);
    horseRecoloring.color(tempCtx,id,14,104,75,true,3);
    horseRecoloring.color(tempCtx,id,14,105,85,true,4);
    horseRecoloring.color(tempCtx,id,15,106,75,true,2);
    horseRecoloring.color(tempCtx,id,14,107,75,true,3);
    horseRecoloring.color(tempCtx,id,15,108,75,true,2);

    finishColor(horse);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);

}

//3 exp
function facePattern2(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.horseBase, 0, 0);
    var probabilityOfExpression = 1;
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    //back and forth ladder effect
    horseRecoloring.color(tempCtx,id,15,101,75,true,10);
    horseRecoloring.color(tempCtx,id,14,102,75,true,10);
    horseRecoloring.color(tempCtx,id,15,103,75,true,10);
    horseRecoloring.color(tempCtx,id,14,104,75,true,10);
    horseRecoloring.color(tempCtx,id,14,105,85,true,10);
    horseRecoloring.color(tempCtx,id,15,106,75,true,10);
    horseRecoloring.color(tempCtx,id,14,107,75,true,10);
    horseRecoloring.color(tempCtx,id,15,108,75,true,10);
    horseRecoloring.color(tempCtx,id,7,5,80,true,60);
    horseRecoloring.color(tempCtx,id,25,36,80,true,60);

    finishColor(horse);
    
    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);

}

//neck 1
function neckPattern(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.horseBase, 0, 0);
    var probabilityOfExpression = 1;
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    //back and forth ladder effect
    horseRecoloring.color(tempCtx,id,11,14,85,true,3);
    horseRecoloring.color(tempCtx,id,10,15,85,true,5);
    horseRecoloring.color(tempCtx,id,10,16,85,true,5);
    horseRecoloring.color(tempCtx,id,11,16,85,true,2);

    finishColor(horse);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);

}

//neck 2
function neckPattern1(r,g,b,a, horse) {
    console.log("Drawing neck pattern...");
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.horseBase, 0, 0);
    var probabilityOfExpression = 1;
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    //back and forth ladder effect
    horseRecoloring.color(tempCtx,id,11,14,85,true,5);
    horseRecoloring.color(tempCtx,id,10,15,85,true,7);
    horseRecoloring.color(tempCtx,id,10,16,85,true,7);
    horseRecoloring.color(tempCtx,id,11,16,85,true,4);

    horseRecoloring.color(tempCtx,id,23,40,85,true,3);
    horseRecoloring.color(tempCtx,id,22,41,85,true,5);
    horseRecoloring.color(tempCtx,id,22,42,85,true,5);
    horseRecoloring.color(tempCtx,id,23,43,85,true,2);

    finishColor(horse);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);

}

//1 rump
function rumpSpots(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
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

    horseRecoloring.color(tempCtx,id,8,48,80,true,5);
    horseRecoloring.color(tempCtx,id,8,49,80,true,5);
    horseRecoloring.color(tempCtx,id,8,50,80,true,5);
    horseRecoloring.color(tempCtx,id,6,49,80,true,5);

    finishColor(horse);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);

}

//2 rump
function rumpSpots1(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.horseBase, 0, 0);
    var probabilityOfExpression = 1;
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    horseRecoloring.color(tempCtx,id,14,77,80,true,60);

    horseRecoloring.color(tempCtx,id,19,16,80,true,5);
    horseRecoloring.color(tempCtx,id,19,17,80,true,5);
    horseRecoloring.color(tempCtx,id,19,18,80,true,5);
    horseRecoloring.color(tempCtx,id,19,18,80,true,5);
    horseRecoloring.color(tempCtx,id,20,19,80,true,4);
    horseRecoloring.color(tempCtx,id,20,20,80,true,4);

    horseRecoloring.color(tempCtx,id,8,48,80,true,5);
    horseRecoloring.color(tempCtx,id,8,49,80,true,5);
    horseRecoloring.color(tempCtx,id,8,50,80,true,5);
    horseRecoloring.color(tempCtx,id,6,49,80,true,5);
    horseRecoloring.color(tempCtx,id,8,51,80,true,5);
    horseRecoloring.color(tempCtx,id,8,52,80,true,5);

    finishColor(horse);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);

}

//LEFT PATTERNS
/*
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

    finishColor(horse);

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

    finishColor(horse);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);

}

function facePatternRightLow(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(horse.horseBase, 0, 0);
    var probabilityOfExpression = 1;
    d[0]   = r;
    d[1]   = g;
    d[2]   = b;
    d[3]   = 255;
    tempCtx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

    horseRecoloring.color(tempCtx,id,2,11,75,true,5);
    horseRecoloring.color(tempCtx,id,6,7,75,true,5);
    horseRecoloring.color(tempCtx,id,28,45,75,true,5);
    horseRecoloring.color(tempCtx,id,25,40,75,true,5);

    finishColor(horse);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);

}

function RumpSpotsLeft(r,g,b,a, horse) {
    tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
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

    finishColor(horse);

    horseRecoloring.horseHolderCtx.drawImage(tempCanvas, 0, 0);

}
    */

export const horseRecoloringPatterns = {
    colorBody,
    colorMane,
    drawEyes,
    speckle,
    paint1,
    paint2,
    fullChest,
    smallChest,
    legsFrontBoth,
    legsFrontBoth1,
    legsFrontBoth2,
    legsBackBoth,
    legsBackBoth1,
    legsBackBoth2,
    facePattern,
    facePattern1,
    facePattern2,
    neckPattern,
    neckPattern1,
    rumpSpots,
    rumpSpots1,
    //RumpSpotsLeft,
    //legsFrontLeft,
    //legsFrontRight,
    //facePatternRightLow,
    finishColor
  }
import { horsePhysical } from './horseAttributes.js';
import { helpers } from './helpers.js';
import { gameImages } from './gameImages.js';
import { horseRecoloringPatterns } from './recoloringPatterns.js';

var width = 64;
var height = 128;

var horseColorMap = document.createElement('canvas');
horseColorMap.width = width;
horseColorMap.height = height;
var horseColorMapCtx = horseColorMap.getContext('2d');
gameImages.colorMapBody.onload = () => {
    horseColorMapCtx.drawImage(gameImages.colorMapBody, 0, 0);
};
horseColorMapCtx.willReadFrequently = true;

var horseHolder = document.createElement('canvas');
horseHolder.width = width;
horseHolder.height = height;
var horseHolderCtx = horseHolder.getContext('2d');

var colorMap = new Map();
var visitedPixels = new Map();


function colorToString(colorData) {
    return `${colorData.data[0]},${colorData.data[1]},${colorData.data[2]},${colorData.data[3]}`;
}

 function colorHorse(horse) {

    var x = 0; 
    var y = 0;  

    //call coloring functions here
    //body
    var r = helpers.randomIntFromInterval(0,255);
    var g = helpers.randomIntFromInterval(0,255);
    var b = helpers.randomIntFromInterval(0,255);
    var a = 100;
    horseRecoloringPatterns.colorBody(r,g,b,a, horse);
    //pattern 
    r = helpers.randomIntFromInterval(0,255);
    g = helpers.randomIntFromInterval(0,255);
    b = helpers.randomIntFromInterval(0,255);
    var a = 100;
    horseRecoloringPatterns.backSpots(r,g,b,a, horse);

    //mane
    r = helpers.randomIntFromInterval(0,255);
    g = helpers.randomIntFromInterval(0,255);
    b = helpers.randomIntFromInterval(0,255);
    var a = 100;
    horseRecoloringPatterns.colorMane(r,g,b,a, horse);

   r = helpers.randomIntFromInterval(0,255);
   g = helpers.randomIntFromInterval(0,255);
   b = helpers.randomIntFromInterval(0,255);
   var a = 100;
   horseRecoloringPatterns.drawEyes(r,g,b,a);

    var savedImageDataURL = horseHolder.toDataURL();

    horse.horseSpriteSheet = savedImageDataURL;

    colorMap.clear();
    visitedPixels.clear();
    horseHolderCtx.clearRect(0, 0, width, height);


}

function color(canvasCtx, id, x1, y1, probabilityOfExpression, finitePattern, finiteLimit) {
    var stack = [];
    var x1y1Colored = false;
    var finiteTries = {state: 0};
    while (!x1y1Colored) {
        if((probabilityOfExpression === 100 && canvasCtx.getImageData(x1, y1, 1, 1).data[3] === 0) ||
        (probabilityOfExpression != 100 && !visitedPixels.has(`${x1},${y1}`) && 
        canvasCtx.getImageData(x1, y1, 1, 1).data[3] === 0)) {
            if (probabilityOfExpression == 100) {
            canvasCtx.putImageData( id, x1, y1 );
            } else {
                colorPattern(x1,y1,id,canvasCtx, probabilityOfExpression, colorMap, finitePattern,finiteTries,finiteLimit);
                visitedPixels.set(`${x1},${y1}`,1); 
            }
            stack.push([x1,y1]);
        } else if((probabilityOfExpression === 100 && canvasCtx.getImageData(x1 +1, y1, 1, 1).data[3]  === 0) ||
        (probabilityOfExpression != 100 && !visitedPixels.has(`${x1+1},${y1}`)&& 
        canvasCtx.getImageData(x1+1, y1, 1, 1).data[3] === 0)) {
            x1=x1+1;
            if (probabilityOfExpression == 100) {
                canvasCtx.putImageData( id, x1, y1 );
                } else {
                    colorPattern(x1,y1,id,canvasCtx, probabilityOfExpression, colorMap, finitePattern,finiteTries, finiteLimit);
                    visitedPixels.set(`${x1},${y1}`,1);
                }
                stack.push([x1,y1]);
         } else if((probabilityOfExpression === 100 && canvasCtx.getImageData(x1 -1, y1, 1, 1).data[3]  === 0) ||
         (probabilityOfExpression != 100 && !visitedPixels.has(`${x1-1},${y1}`)&& 
            canvasCtx.getImageData(x1-1, y1, 1, 1).data[3] === 0)) {
            x1=x1-1;
            if (probabilityOfExpression == 100) {
                canvasCtx.putImageData( id, x1, y1 );
                } else {
                    colorPattern(x1,y1,id,canvasCtx, probabilityOfExpression, colorMap, finitePattern,finiteTries, finiteLimit);
                    visitedPixels.set(`${x1},${y1}`,1);
                }
                stack.push([x1,y1]);
        }else if( (probabilityOfExpression === 100 && canvasCtx.getImageData(x1, y1 - 1, 1, 1).data[3]  === 0) ||
        (probabilityOfExpression != 100 && !visitedPixels.has(`${x1},${y1-1}`) && 
        canvasCtx.getImageData(x1, y1-1, 1, 1).data[3] === 0))  {
            y1=y1-1;
            if (probabilityOfExpression == 100) {
                canvasCtx.putImageData( id, x1, y1 );
                } else {
                    colorPattern(x1,y1,id,canvasCtx, probabilityOfExpression, colorMap, finitePattern,finiteTries, finiteLimit);
                    visitedPixels.set(`${x1},${y1}`,1);
                }
                stack.push([x1,y1]);
         } else if((probabilityOfExpression === 100 && canvasCtx.getImageData(x1, y1 + 1, 1, 1).data[3]  === 0) ||
         (probabilityOfExpression != 100 && !visitedPixels.has(`${x1},${y1+1}`) && 
         canvasCtx.getImageData(x1, y1+1, 1, 1).data[3] === 0)) {
            y1=y1+1;
            if (probabilityOfExpression == 100) {
                canvasCtx.putImageData( id, x1, y1 );
                } else {
                    colorPattern(x1,y1,id,canvasCtx, probabilityOfExpression, colorMap, finitePattern,finiteTries, finiteLimit);
                    visitedPixels.set(`${x1},${y1}`,1);
                }
                stack.push([x1,y1]);
         } else {
            if (stack.length > 0) {
            var holder = stack.shift();
            x1 = holder[0];
            y1 = holder[1];
            //pop from stack, new x,y
        } else {
            // if stack empty, break
            x1y1Colored = true;
        }
         }

        if(finiteTries.state >5000 || (finitePattern && (finiteTries.state > finiteLimit))) {
            break;
        } 
    }
}
function colorPattern(x1,y1,id,canvasCtx, probabilityOfExpression, colorMap, finitePattern,finiteTries,finiteLimit) {
    var colorAtPoint = horseColorMapCtx.getImageData(x1, y1, 1, 1);
    var colorStringKey = colorToString(colorAtPoint);
    console.log("color: " + colorStringKey + " point x: " + x1 + " point y: " +y1);
    if (colorMap.has(colorStringKey)) {
        if (colorMap.get(colorStringKey) != 0) {
        canvasCtx.putImageData( id, x1, y1 );
    }
    } else {
        if((helpers.randomIntFromInterval(0,100) <= probabilityOfExpression && (finitePattern && (finiteTries.state <= finiteLimit)))
        || (helpers.randomIntFromInterval(0,100) <= probabilityOfExpression && !finitePattern)) {
            colorMap.set(colorStringKey, 1); 
            canvasCtx.putImageData(id, x1, y1);
            finiteTries.state++;
        } else if((finitePattern && (finiteTries.state <= finiteLimit)) || !finitePattern){
            colorMap.set(colorStringKey, 0);
        } else {
            return;
        }
    }    
}

export const horseRecoloring = {
    horseHolder,
    horseHolderCtx,
    colorHorse,
    color
  }
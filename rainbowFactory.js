import { helpers } from './helpers.js';

var clouds = [];
var rainSky = [];

var width = 250;
var height = 200;

var tempCanvas = document.createElement('canvas');
tempCanvas.width = width;
tempCanvas.height = height;
var tempCtx = tempCanvas.getContext('2d');
var id = tempCtx.createImageData(1,1); // only do this once per page
var d  = id.data;   
tempCtx.willReadFrequently = true;

class Cloud {
    constructor(icon, x, y) {
        this.icon = icon;
        this.x = x;
        this.y = y;
        this.active = "N";
    }
}

function makeClouds(level) {
    d[0]   = 255;
    d[1]   = 255;
    d[2]   = 255;
    d[3]   = 100;
    tempCtx.strokeStyle = "rgba("+d[0]+","+d[1] +","+d[2]+","+(d[3]/255)+")";
    var cloudOffsetX1;
    var cloudOffsetX2;

    for (var i = 0; i<level; i++) {
        tempCtx.clearRect(0, 0, width, height);
        var cloudHeight = helpers.randomIntFromInterval(6,40);
        var cloudY = helpers.randomIntFromInterval(1,200);
        var cloudX = helpers.randomIntFromInterval(-99,250);
        for (var b = 0; b < cloudHeight; b++) {
            cloudOffsetX1 = helpers.randomIntFromInterval(1,50);
            cloudOffsetX2 = helpers.randomIntFromInterval(1,50);
            tempCtx.beginPath(); 
            tempCtx.moveTo(cloudX - cloudOffsetX1-b, cloudY+b); 
            tempCtx.lineTo(cloudX+ cloudOffsetX2, cloudY+b); 
            tempCtx.stroke();
        }
        var savedImageDataURL = tempCanvas.toDataURL();
        var cloudIcon = new Image();
        cloudIcon.src = savedImageDataURL;
        cloudIcon.onload = () => {
            var tempCloud = new Cloud(cloudIcon,0-helpers.randomIntFromInterval(1,250),helpers.randomIntFromInterval(0,250));
            clouds.push(tempCloud);
        };
    }
}

function makeRainSky(level) {

    for (var i = 0; i<level; i++) {
        var rainY = helpers.randomIntFromInterval(-100,200);
        var rainX = helpers.randomIntFromInterval(1,250);
        rainSky.push([rainX, rainY]);
    }
}

export const rainbowFact = {
    makeClouds,
    clouds,
    rainSky,
    makeRainSky
}
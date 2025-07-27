import { rainbowFact } from "./rainbowFactory.js";

var skyCanvas = document.getElementById("theSkyCanvas");
if (skyCanvas) {
    var skyCtx = skyCanvas.getContext("2d");
  }

var weather = {
    cloudLevel: "",
    rainLevel: "",
}

function updatesky() {
    if (skyCanvas) {
        updateColor();
    }
    weather.cloudLevel = Math.floor(Math.random() * 50);
    weather.rainLevel = Math.floor(Math.random() * 50);
}

function animateWeather() {
    skyCtx.clearRect(0, 0, 250, 200);
    if(rainbowFact.clouds.length == 0) {
        if(weather.cloudLevel >0) {
            rainbowFact.makeClouds(weather.cloudLevel);
        }
    }
    if(rainbowFact.rainSky.length == 0) {
        if(weather.rainLevel >0) {
            rainbowFact.makeRainSky(weather.rainLevel);
        }
    }
    rainbowFact.clouds.forEach(cloud => {
        if (cloud.x >= -200 && cloud.x < 250) {
            skyCtx.drawImage(cloud.icon, cloud.x, cloud.y);
            cloud.x++
        } else {
            cloud.x = -199;
        }
    });
    var d = [];
    d[0]   = 100;
    d[1]   = 105;
    d[2]   = 255;
    d[3]   = 200;
    skyCtx.strokeStyle = "rgba("+d[0]+","+d[1] +","+d[2]+","+(d[3]/255)+")";
    rainbowFact.rainSky.forEach(rainDrop => {
        if(rainDrop[1] < 250) {
            skyCtx.beginPath(); 
            skyCtx.moveTo(rainDrop[0], rainDrop[1]); 
            skyCtx.lineTo(rainDrop[0], rainDrop[1]+5); 
            skyCtx.stroke();
            rainDrop[1] += 20;
        } else {
            rainDrop[1] = 0;
        }
    });
}

function updateColor() {
    var military = new Date().getHours();
    switch (military) {
        case 0: 
            skyCanvas.style.backgroundColor = "rgb(3, 11, 93)";
            theSecondCanvas.style.backgroundColor = "rgb(50, 36, 46)"
            theSecondCanvas.style.opacity = .63;
            break;
        case 1:
            skyCanvas.style.backgroundColor = "rgb(3, 11, 93)";
            theSecondCanvas.style.backgroundColor = "rgb(50, 36, 46)"
            theSecondCanvas.style.opacity = .63;
            break;
        case 2:
            skyCanvas.style.backgroundColor = "rgb(3, 11, 93)";
            theSecondCanvas.style.backgroundColor = "rgb(50, 36, 46)"
            theSecondCanvas.style.opacity = .63;
            break;
        case 3:
            skyCanvas.style.backgroundColor = "rgb(14, 21, 93)";
            theSecondCanvas.style.backgroundColor = "rgb(50, 36, 46)"
            theSecondCanvas.style.opacity = .63;
            break;
        case 4:
            skyCanvas.style.backgroundColor = "rgb(3, 11, 93)";
            theSecondCanvas.style.backgroundColor = "rgb(50, 36, 46)"
            theSecondCanvas.style.opacity = .63;
            break;
        case 5:
            skyCanvas.style.backgroundColor = "rgb(3, 11, 93)";
            theSecondCanvas.style.backgroundColor = "rgb(50, 36, 46)"
            theSecondCanvas.style.opacity = .6;
            break;
        case 6:
            skyCanvas.style.backgroundColor = "rgb(33, 8, 136)";
            theSecondCanvas.style.backgroundColor = "rgb(50, 36, 46)"
            theSecondCanvas.style.opacity = .4;
            break;
        case 7:
            skyCanvas.style.background = "linear-gradient(to bottom,rgb(5, 41, 222),rgb(222, 5, 81))";
            theSecondCanvas.style.backgroundColor = "rgb(55, 23, 55)"
            theSecondCanvas.style.opacity = .4;
            break;
        case 8:
            skyCanvas.style.background = "linear-gradient(to bottom,rgb(5, 114, 222),rgb(247, 151, 193))";
            theSecondCanvas.style.backgroundColor = "rgb(55, 23, 55)"
            theSecondCanvas.style.opacity = .1;
            break;
        case 9:
            skyCanvas.style.backgroundColor = "rgb(69, 155, 241)";
            theSecondCanvas.style.opacity = .01;
            break;
        case 10:
            skyCanvas.style.backgroundColor = "rgb(69, 155, 241)";
            theSecondCanvas.style.opacity = .01;
            break;
        case 11: 
            skyCanvas.style.backgroundColor = "rgb(69, 155, 241)";
            theSecondCanvas.style.opacity = .01;
            break;
        case 12:
            skyCanvas.style.backgroundColor = "rgb(69, 172, 241)";
            theSecondCanvas.style.opacity = .01;
            break;
        case 13:
            skyCanvas.style.backgroundColor = "rgb(69, 172, 241)";
            theSecondCanvas.style.opacity = .01;
            break;
        case 14:
            skyCanvas.style.backgroundColor = "rgb(69, 172, 241)";
            theSecondCanvas.style.opacity = .01;
            break;
        case 15:
            skyCanvas.style.backgroundColor = "rgb(69, 172, 241)";
            theSecondCanvas.style.opacity = .01;
            break;
        case 16:
            skyCanvas.style.backgroundColor = "rgb(69, 172, 241)";
            theSecondCanvas.style.opacity = .01;
            break;
        case 17:
            skyCanvas.style.backgroundColor = "rgb(58, 162, 231)";
            theSecondCanvas.style.opacity = .01;
            break;
        case 18:
            skyCanvas.style.backgroundColor = "rgb(51, 150, 216)";
            theSecondCanvas.style.opacity = .09;
            break;
        case 19://here
            skyCanvas.style.background = "linear-gradient(to bottom,rgb(51, 150, 216),rgb(224, 84, 240))";
            theSecondCanvas.style.backgroundColor = "rgb(89, 37, 76)"
            theSecondCanvas.style.opacity = .2;
            break;
        case 20:
            skyCanvas.style.background = "linear-gradient(to bottom,rgb(51, 54, 216),rgb(201, 25, 81))";
            theSecondCanvas.style.backgroundColor = "rgb(85, 38, 65)"
            theSecondCanvas.style.opacity = .4;
            break;
        case 21:
            skyCanvas.style.backgroundColor = "rgb(33, 8, 136)";
            theSecondCanvas.style.backgroundColor = "rgb(29, 37, 43)"
            theSecondCanvas.style.opacity = .4;
            break;
        case 22:
            skyCanvas.style.backgroundColor = "rgb(33, 8, 136)";
            theSecondCanvas.style.backgroundColor = "rgb(29, 37, 43)"
            theSecondCanvas.style.opacity = .5;
            break;
        case 23:
            skyCanvas.style.backgroundColor = "rgb(33, 8, 136)";
            theSecondCanvas.style.backgroundColor = "rgb(45, 40, 43)"
            theSecondCanvas.style.opacity = .6;
            break;
        default:
            skyCanvas.style.backgroundColor = "rgb(4, 11, 86)";
            theSecondCanvas.style.backgroundColor = "rgb(45, 40, 43)"
            theSecondCanvas.style.opacity = .6;
            break;
    }
}
  
export const skyUpdates = {
    updatesky,
    animateWeather
}
var skyCanvas = document.getElementById("theSkyCanvas");
if (skyCanvas) {
    var skyCtx = skyCanvas.getContext("2d");
  }



function updatesky() {
    if (skyCanvas) {
        updateColor();
    }
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
    updatesky
}
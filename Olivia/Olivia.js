import { gameImages } from "../gameImages.js";
import { helpers } from "../helpers.js";
import { playerCharacter } from "../playerCharacter.js";
import { OliviaDefinitions } from "./OliviaDefined.js";

var olivias = [];

function entry() {
    if (olivias.length == 0) {
        generateOlivias();
    }
    //oliviaActions();
    oliviasInVacinity();
}

function generateOlivias() {
    var Olivia = new OliviaDefinitions.Olivia(0,0,0,0,0,0,0,0,"assetsImg/Character.png");
    olivias.push(Olivia);
}



function oliviasInVacinity() {
    for(var i=0; i<olivias.length;i++) {
        if(olivias[i].spriteMapCol == playerCharacter.spriteMapCol && olivias[i].spriteMapRow == playerCharacter.spriteMapRow) {
            helpers.eraseEnv(olivias[i].SpriteCol, olivias[i].SpriteRow);
            helpers.drawOlivia(olivias[i]);
        }
    }
}

export const oliviaActions = {
    entry,
}
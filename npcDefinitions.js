import { gameImages } from './gameImages.js';
import { worldMapsStore } from './maps.js';
import { items } from './items.js';
import { horsePhysical } from './horseAttributes.js';
import { classDefinitions } from './classDefinitions.js';
import { helpers } from './helpers.js';
import { playerCharacter } from './playerCharacter.js';
import { menus } from './menus.js';
import { inventory } from './inventory.js';
import { wildHorses } from './wildHorses.js';
import { worldInteractions } from './worldInteractions.js';
import { ownedHorse } from './ownedHorse.js';
import { movement } from './movement.js';
import { wildCatchGame } from './wildCatchingMiniGame.js';
import { npcFunctionality } from './npcFunctionality.js';

function createNPCs() {
    var annaQuest1 = new classDefinitions.horseQuest("Wrangler.. I'm in need of a steed. Something with a good head on its shoulders", 
      "Thank you!",20,50,0,10,0,40,0,10,0,300); 
    var annaQuest2 = new classDefinitions.horseQuest("I was hoping you'd come around. I can take in one of your mustangs, give me your worst.", 
      "This should be interesting!",0,50,40,50,20,50,30,50,0,500); 
    var annaQuest3 = new classDefinitions.itemQuest("I need something to make my horses like me more..", "Thanks, all work and no play makes my horses grey.", new Map([["apple",1]]),70);
    var anna = new classDefinitions.NPC("anna", ["Hey.", "Can I help you?"],["Hey, dude!"],["Happy you're here!"],[],[],gameImages.annaIcon,worldMapsStore.mapSevenVillage, 3,2,[annaQuest1,annaQuest2, annaQuest3]);
    npcFunctionality.NPCs.push(anna);
  
    var eightballQuest1 = new classDefinitions.horseQuest("Heard you're in the horse pawning biz? Need a turbulent one, something I can slap around.", 
      "Gonna put some miles on this thang..",0,50,0,10,20,40,40,50,0,800); 
    var eightball = new classDefinitions.NPC("eightball", ["You stick your nose in everyone's bizness?"],["Sup dopie."],["You're not one to just write people off, are you?"],[],[],gameImages.eightballIcon,worldMapsStore.mapSevenVillage, 7,2,[eightballQuest1]);
    npcFunctionality.NPCs.push(eightball);
  
    var damonShop1 = new classDefinitions.shopQuest(["Buy before you try. No refunds"], ["Luck"], new Map([[items.horseTack.saddlePads[helpers.randomIntFromInterval(1,20)],0], [items.horseTack.saddles[1],0], [items.horseTack.bridles[1],0]]));
    var damon = new classDefinitions.NPC('damon', ["How's farm life treating you?", "Any nasty falls lately?"],["The weather, nice, eh?."],["You've been great to us."],[],[],gameImages.cactus.src,worldMapsStore.mapSevenVillage,11,2,[damonShop1]);
    npcFunctionality.NPCs.push(damon);

    anna.likedByNeighbors.push(damon);
    anna.dislikedByNeighbors.push(eightball);

    eightball.dislikedByNeighbors.push(anna);
    eightball.dislikedByNeighbors.push(damon);

    damon.likedByNeighbors.push(anna);
    damon.dislikedByNeighbors.push(eightball);
  }


export const worldNPCs = {
    createNPCs
}
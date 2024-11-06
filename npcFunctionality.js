import { gameImages } from './gameImages.js';
import { maps } from './maps.js';
import { items } from './items.js';
import { classDefinitions } from './classDefinitions.js';
import { helpers } from './helpers.js';
import { playerCharacter } from './playerCharacter.js';


var NPCs = [];

function createNPCs() {
    var annaQuest1 = new classDefinitions.horseQuest("Wrangler.. I'm in need of a steed. Something with a good head on its shoulders", 
      "Thank you!",20,50,0,10,0,40,0,10,0,300); 
    var annaQuest2 = new classDefinitions.horseQuest("I was hoping you'd come around. I can take in one of your mustangs, give me your worst.", 
      "This should be interesting!",0,50,40,50,20,50,30,50,0,500); 
    var annaQuest3 = new classDefinitions.itemQuest("I need something to make my horses like me more..", "Thanks, all work and no play makes my horses grey.", new Map([["apple",1]]),70);
    var anna = new classDefinitions.NPC("anna", ["Hey.", "Can I help you?"],gameImages.annaIcon,maps.mapSevenVillage, 3,2,[annaQuest1,annaQuest2, annaQuest3]);
    NPCs.push(anna);
  
    var eightballQuest1 = new classDefinitions.horseQuest("Heard you're in the horse pawning biz? Need a turbulent one, something I can slap around.", 
      "Gonna put some miles on this thang..",0,50,0,10,20,40,40,50,0,800); 
    var eightball = new classDefinitions.NPC("eightball", ["You stick your nose in everyone's bizness?"],gameImages.eightballIcon,maps.mapSevenVillage, 7,2,[eightballQuest1]);
    NPCs.push(eightball);
  
    var damonShop1 = new classDefinitions.shopQuest(["Buy before you try. No refunds"], ["Luck"], new Map([[items.horseTack.saddlePads[helpers.randomIntFromInterval(1,20)],0], [items.horseTack.saddles[1],0], [items.horseTack.bridles[1],0]]));
    var damon = new classDefinitions.NPC('damon', ["How's farm life treating you?", "Any nasty falls lately?"],gameImages.cactus.src,maps.mapSevenVillage,11,2,[damonShop1]);
    NPCs.push(damon);
  }


  export const npcFunctionality = {
    createNPCs,
    NPCs
  }
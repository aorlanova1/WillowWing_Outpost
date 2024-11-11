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

var annaQuest1;
var annaQuest2;
var annaQuest3;
var eightballQuest1;
var damonShop1;

var anna;
var damon;
var eightball;

function createQuests() {
 annaQuest1 = new classDefinitions.horseQuest("Wrangler.. I'm in need of a steed. Something with a good head on its shoulders", 
  "Thank you!",20,50,0,10,0,40,0,10,0,300); 
 annaQuest2 = new classDefinitions.horseQuest("I was hoping you'd come around. I can take in one of your mustangs, give me your worst.", 
  "This should be interesting!",0,50,40,50,20,50,30,50,0,500); 
 annaQuest3 = new classDefinitions.itemQuest("I need something to make my horses like me more..", "Thanks, all work and no play makes my horses grey.", new Map([["apple",1]]),70);
 eightballQuest1 = new classDefinitions.horseQuest("Heard you're in the horse pawning biz? Need a turbulent one, something I can slap around.", 
  "Gonna put some miles on this thang..",0,50,0,10,20,40,40,50,0,800); 
  damonShop1 = new classDefinitions.shopQuest(["Buy before you try. No refunds"], ["Luck"], new Map([[items.horseTack.saddlePads[helpers.randomIntFromInterval(1,20)],0], [items.horseTack.saddles[1],0], [items.horseTack.bridles[1],0]]));
  //console.log("NPC QUEST LOADED: " + NPCQuests["anna"][1][1].dialogueStart);
}

function getNPCQuests() {
  return {
    anna: {
      1: [annaQuest1,annaQuest2, annaQuest3]
    },
    eightball: {
      1: [eightballQuest1]
    },
    damon: {
      1: [damonShop1]
    }
  }
}
function getNPCRelationships() {
  return {
    anna: {
      likedBy: [damon],
      dislikedBy: [eightball]
    },
    eightball: {
      likedBy: [],
      dislikedBy: [anna]
    },
    damon: {
      likedBy: [anna],
      dislikedBy: []
    },
  }
}

function createNPCs() {
     anna = new classDefinitions.NPC("anna", ["Hey.", "Can I help you?"],["Hey, dude!"],["Happy you're here!"],gameImages.annaIcon,worldMapsStore.mapSevenVillage, 3,2);
    npcFunctionality.NPCs.push(anna);
     eightball = new classDefinitions.NPC("eightball", ["You stick your nose in everyone's bizness?"],["Sup dopie."],["You're not one to just write people off, are you?"],gameImages.eightballIcon,worldMapsStore.mapSevenVillage, 7,2);
    npcFunctionality.NPCs.push(eightball);
     damon = new classDefinitions.NPC('damon', ["How's farm life treating you?", "Any nasty falls lately?"],["The weather, nice, eh?."],["You've been great to us."],gameImages.cactus.src,worldMapsStore.mapSevenVillage,11,2);
    npcFunctionality.NPCs.push(damon);
  }


export const worldNPCs = {
    createNPCs,
    createQuests,
    getNPCQuests,
    getNPCRelationships
}
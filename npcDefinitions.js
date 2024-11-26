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
var sravanthiQuest1;
var scratQuest1;
var jigsQuest1;
var jigsQuest2;

var anna;
var damon;
var eightball;
var sravanthi;
var jigs;
var Scrat;

function createQuests() {
 annaQuest1 = new classDefinitions.horseQuest("Wrangler.. I'm in need of a steed. Something with a good head on its shoulders", 
  "Thank you!",20,50,0,10,0,40,0,10,0,300); 
 annaQuest2 = new classDefinitions.horseQuest("I was hoping you'd come around. I can take in one of your mustangs, give me your worst.", 
  "This should be interesting!",0,50,40,50,20,50,30,50,0,500); 
 annaQuest3 = new classDefinitions.itemQuest("I need something to make my horses like me more..", "Thanks, all work and no play makes my horses grey.", new Map([["apple",1]]),70);
 eightballQuest1 = new classDefinitions.horseQuest("Heard you're in the horse pawning biz? Need a turbulent one, something I can slap around.", 
  "Gonna put some miles on this thang..",0,50,0,10,20,40,40,50,0,800); 
  damonShop1 = new classDefinitions.shopQuest(["Buy before you try. No refunds"], ["Luck"], new Map([[items.horseTack.saddlePads[helpers.randomIntFromInterval(1,20)],0], [items.horseTack.saddles[1],0], [items.horseTack.bridles[1],0]]));
  sravanthiQuest1 = new classDefinitions.horseQuest("I have space in the stable to rehome a mustang. Just as long as they're at least 10 acclimated to people, I'll take 'em","This pony's gonna make someone very happy!" 
    ,0,50,0,50,0,50,0,50,10,200); 
  scratQuest1 = new classDefinitions.itemQuest("Jigs has the memory of a goldfish. Mind picking up those drawings he leaves out. EVERYWHERE", "Thanks. This will put off another visit from those damn enviromentalists", new Map([["luvletter",10]]), 170);
  jigsQuest1 = new classDefinitions.itemQuest("Eat", "...", new Map([["apple",10]]), 170);
  jigsQuest2 = new classDefinitions.itemQuest("Shiny..Rock", "...", new Map([["geode",1]]), 70);
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
    },
    sravanthi: {
      1: [sravanthiQuest1]
    },
    jigs: {
      1: [jigsQuest1,jigsQuest2]
    },
    Scrat: {
      1: [scratQuest1]
    }
  }
}

function createNPCs() {
     anna = new classDefinitions.NPC("anna", ["Hey.", "Can I help you?"],["Hey, dude!", "We haven't had many new people move in. We hope the mustang program will put us on the map.", "Newcomers aren't welcome.. By most. We've been a tight knit community for a while. I don't mind, though, this place needs more living souls. And I like you!"]
      ,["Happy you're here!", "Ah!! Come in, have a seat!", "Has Damon said anything about me to you? He's been a bit standoff-ish as of late."],gameImages.annaIcon,worldMapsStore.mapSevenVillage, 3,2);
    npcFunctionality.NPCs.push(anna);
     eightball = new classDefinitions.NPC("eightball", ["You stick your nose in everyone's bizness?"],["Sup dopie.", "Those two.. Anna, Damon? Yeah they've got it bad for each other. Even a stonecold player like me, tried playing cupid. Got sent to the curb, typical, but do you know how mind jogglin it is to live between those two?? Kindergarden I tell YA. KINDERGARDEN!"],["You're not one to just write people off, are you?"],gameImages.eightballIcon,worldMapsStore.mapSevenVillage, 7,2);
    npcFunctionality.NPCs.push(eightball);
     damon = new classDefinitions.NPC('damon', ["How's farm life treating you?", "Any nasty falls lately?"],["The weather, nice, eh?.", ""],["You've been great to us."],gameImages.damonIcon,worldMapsStore.mapSevenVillage,11,2);
    npcFunctionality.NPCs.push(damon);
    sravanthi = new classDefinitions.NPC("sravanthi",["Welcome, traveler! I'll take any horse, long as they're aclimated to humans to at least 10. Gotta have something to work with. Mustangs don't go easy"], ["You know the drill!", "The mayor is quite happy with the number of rehomed horses!", "Good to see you!"], 
      ["Thanks to you, our outpost is getting national recognition."],gameImages.sravanthiIcon,worldMapsStore.mapSevenVillage,14,5);
      npcFunctionality.NPCs.push(sravanthi);
    jigs = new classDefinitions.NPC("jigs",["..", "Jigs"], ["...", "Happy day", "Happy life."],
      ["God emporer Scratman taught Jigs make talk", "Shiny rocks, potion, warm sun on scales", "Have you seen her?"],gameImages.jigsIcon,worldMapsStore.mapNineteen,16, 4);
      npcFunctionality.NPCs.push(jigs);
      Scrat = new classDefinitions.NPC("Scrat",["I don't appreciate being bothered.", "You're playing a dangerout game"], ["Jigs is my boy. Mess with him and you'll regret it", "If Jigs asks for a horse, just walk away."],
        ["Sunburns hurt.", "You're slightly better than darkness.", "Don't worry, I don't find you appetizing."],gameImages.scratIcon,worldMapsStore.mapNineteen,2, 3);
        npcFunctionality.NPCs.push(Scrat);
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
      sravanthi: {
        likedBy: [anna, damon,eightball],
        dislikedBy: []
      },
    }
  }


export const worldNPCs = {
    createNPCs,
    createQuests,
    getNPCQuests,
    getNPCRelationships
}
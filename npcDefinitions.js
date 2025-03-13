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
var annaQuest4;
var eightballQuest1;
var eightballQuest2;
var damonShop1;
var sravanthiQuest1;
var scratQuest1;
var scratQuest2;
var jigsQuest1;
var jigsQuest2;
var jigsQuest3;

var anna;
var damon;
var eightball;
var sravanthi;
var jigs;
var scrat;
var mayor;

function createQuests() {
 annaQuest1 = new classDefinitions.horseQuest("Wrangler.. I'm in need of a steed. Something with a good head on its shoulders", 
  "Thank you!",20,50,0,10,0,40,0,10,0,300); 
 annaQuest2 = new classDefinitions.horseQuest("I was hoping you'd come around. I can take in one of your mustangs, give me your worst.", 
  "This should be interesting!",0,50,40,50,20,50,30,50,0,500); 
 annaQuest3 = new classDefinitions.itemQuest("I need something to make my horses like me more..", "Thanks, all work and no play makes my horses grey.", new Map([["apple",10]]),70);
 annaQuest4 = new classDefinitions.itemQuest("Haven't been able to grow a single plant. Based on my research... I must be cursed. Get me a cure, a good one, and let's try this again.", "Know what this does? You... Don't? It's from Jigs?? Well, get that in writing in case something goes wrong. Here goes it.", new Map([["seedling",10], ["mysterious brew", 1]]),270);
 eightballQuest1 = new classDefinitions.horseQuest("Heard you're in the horse pawning biz? Need a turbulent one, something I can slap around.", 
  "Gonna put some miles on this thang..",0,50,0,10,20,40,40,50,0,800); 
  eightballQuest2 = new classDefinitions.itemQuest("Been lookin for a special lady. Problem is, she's a bit hard to reach. I'll do ya good if you gimme a hand.","Gone. Without a trace.. But I'll see you soon, let our hearts commence- Oh, here take this and bounce. I've got my work cut out for me", new Map([["witch's hat",1]]),100); 
  damonShop1 = new classDefinitions.shopQuest(["Buy before you try. No refunds"], ["Luck"], new Map([[items.horseTack.saddlePads[helpers.randomIntFromInterval(1,20)],0], [items.horseTack.saddles[helpers.randomIntFromInterval(1,3)],0], [items.horseTack.bridles[helpers.randomIntFromInterval(1,3)],0]]));
  sravanthiQuest1 = new classDefinitions.horseQuest("I have space in the stable to rehome a mustang. Just as long as they're at least 10 acclimated to people, I'll take 'em","This pony's gonna make someone very happy!" 
    ,0,50,0,50,0,50,0,50,10,200); 
  scratQuest1 = new classDefinitions.itemQuest("Jigs has the memory of a goldfish. Mind picking up those drawings he leaves out. EVERYWHERE", "Thanks. This will put off another visit from those damn enviromentalists", new Map([["luvletter",10]]), 170);
  scratQuest2 = new classDefinitions.horseQuest("I'm not stalking anymore .. Prey on foot. Got anything deathly quiet?","Perfect, perfect little filly...", 10,50,0,25,0,25,0,10,0, 300); 
  jigsQuest1 = new classDefinitions.itemQuest("Eat", "...", new Map([["apple",10]]), 170);
  jigsQuest2 = new classDefinitions.itemQuest("Shiny..Rock", "...", new Map([["geode",1]]), 70);
  jigsQuest3 = new classDefinitions.itemQuest("Potion", "...", new Map([["prairie flower",5], ["stardust flower", 3], ["lilly", 2]]), 270);
}

function getNPCQuests() {
  return {
    anna: {
      1: [annaQuest1,annaQuest2, annaQuest3, annaQuest4],
      2: [annaQuest1,annaQuest2, annaQuest3, annaQuest4],
      3: [annaQuest1,annaQuest2, annaQuest3, annaQuest4]
    },
    eightball: {
      1: [eightballQuest1, eightballQuest2],
      2: [eightballQuest1, eightballQuest2],
      1: [eightballQuest1, eightballQuest2]
    },
    damon: {
      1: [damonShop1],
      2: [damonShop1],
      3: [damonShop1]
    },
    sravanthi: {
      1: [sravanthiQuest1],
      2: [sravanthiQuest1],
      3: [sravanthiQuest1]
    },
    jigs: {
      1: [jigsQuest1,jigsQuest2,jigsQuest3],
      2: [jigsQuest1,jigsQuest2, jigsQuest3],
      3: [jigsQuest1,jigsQuest2, jigsQuest3]
    },
    scrat: {
      1: [scratQuest1,scratQuest2],
      2: [scratQuest1, scratQuest2],
      3: [scratQuest1, scratQuest2]
    }
  }
}

function createNPCs() {
     anna = new classDefinitions.NPC("anna", ["Hey.", "Can I help you?", "Not now..", "I'm, uh, a bit booked up at the moment. Come back tomorrow.", "Go bother the mayor if you want some tips for how to live 'round here."],
      ["Hey, dude!", "We haven't had many new people move in. We hope the mustang program will put us on the map.","If eightball isn't home, it's one of two things: 1. police came through town 2. Jigs' love letters finally made it here. Kidddiiing ", "Newcomers aren't welcome.. By most. We've been a tight knit community for a while. I don't mind, though, this place needs more living souls. And I like you!"]
      ,["Happy you're here!", "Ah!! Come in, have a seat!", "Has Damon said anything about me to you? He's been a bit standoff-ish as of late."],gameImages.annaIcon,worldMapsStore.mapSevenVillage, 3,2);
    npcFunctionality.NPCs.push(anna);
     eightball = new classDefinitions.NPC("eightball", ["You stick your nose in everyone's bizness?"],
      ["Sup dopie.","Those two.. Anna, Damon? Yeah they've got it bad for each other. Even a stonecold player like me, tried playing cupid. Got sent to the curb, typical, but do you know how annoying it is to live between those two?? Kindergarden, I tell YA. KINDERGARDEN!"],
      ["You're not one to just write people off, are you?", "You're gangster."],gameImages.eightballIcon,worldMapsStore.mapSevenVillage, 7,2);
    npcFunctionality.NPCs.push(eightball);
     damon = new classDefinitions.NPC('damon', ["How's farm life treating you?", "Any nasty falls lately?", "In and out, I don't have time for idle chit-chat."],
      ["The weather, nice, eh?.", "Here to help me stock up? Kidding, come on in!"],
      ["You've been great to us.", "You've managed to fit right in with us, welcome to the Willow-wing Family. We all look out for each other, so consider yourself covered.",
        "You're a testiment to the fact that I don't give discounts, even to my bestest friends."
      ],gameImages.damonIcon,worldMapsStore.mapSevenVillage,11,2);
    npcFunctionality.NPCs.push(damon);
    sravanthi = new classDefinitions.NPC("sravanthi",["Met the mayor yet? She'll tell you all kinds of helpful things. She's been here for her whole life!","Welcome to my home.. and office! Budget's tight.", "meeting with the mayor tomorrow, beat it. Wait, did I say that? That sure is bad optics... SCRAM!",
      "You know, it's not easy rehoming mustangs, not all of these horses are safe for children, and good riders are far and few."
      ,"You can go bother the mayor, I've got a speach to write.", "I have a lot on my plate, I run the mustang adoption agency, and am the spokesperson for our outpost. Mayor is cruising to retirement, and I'm next in line for the seat, naturally."
    ], 
      ["You know the drill!", "The mayor is quite happy with the number of horses we've re-homed!", "Only a year longer until I am the mayor... I have our 5, 10, 20 year plan mapped out already. Just you wait. You're going to be glad you got here first!",
         "Good to see you!"], 
      ["Thanks to you, our outpost is getting national recognition.", "Mayor doesn't have a name. Some say she's a fugitive, some say she's a nomad who grew up here with wolves. I have no better idea than the rest of the people in this town, and the rumors have calmed a bit."],gameImages.sravanthiIcon,worldMapsStore.mapSevenVillage,14,5);
      npcFunctionality.NPCs.push(sravanthi);
    jigs = new classDefinitions.NPC("jigs",["..", "Jigs"], ["...", "Happy day", "Happy life."],
      ["God emporer Scratman taught Jigs make talk", "Shiny rocks, potion, warm sun on scales", "Have you seen her?"],gameImages.jigsIcon,worldMapsStore.mapNineteen,16, 4);
      npcFunctionality.NPCs.push(jigs);
      scrat = new classDefinitions.NPC("scrat",["I don't appreciate being bothered.", "You're playing a dangerout game coming here", "How did you even find this place? You're telling me this enchantment Jigs made is a fluke?! That's it. Im going over there. Don't let the door hit you on the way out."],
         ["Jigs is my boy. Mess with him and you'll regret it", "If Jigs asks for a horse, just walk away.", "Mayor keeps us in line, not sure why, but she's an aire of mystery. She's lived here since before anyone was able to move in. Strange."],
        ["Sunburns hurt.", "You're slightly better than darkness.", "Don't worry, I don't find you appetizing."],gameImages.scratIcon,worldMapsStore.mapNineteen,2, 3);
        npcFunctionality.NPCs.push(scrat);
      mayor = new classDefinitions.NPC("mayor", ["Another fine day on the outpost..", "Folks who ask for horses won't accept a tacked horse. Be sure to untack before handing over a steed.", 
        "Damon, in the village north of your home has some tack for sale.", "Horses love apples, to eat... Bond with your horses by giving 'em the occasional treat.",
        "Have a horse you can't get rid of? Sravanthi, in the main village north of your place will take any horse with at least 10 bond points."
      ],
        [],[],gameImages.mayorIcon, worldMapsStore.mapFive,4,2);
      npcFunctionality.NPCs.push(mayor);
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
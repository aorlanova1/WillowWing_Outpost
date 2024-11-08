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


var NPCs = [];

function createNPCs() {
    var annaQuest1 = new classDefinitions.horseQuest("Wrangler.. I'm in need of a steed. Something with a good head on its shoulders", 
      "Thank you!",20,50,0,10,0,40,0,10,0,300); 
    var annaQuest2 = new classDefinitions.horseQuest("I was hoping you'd come around. I can take in one of your mustangs, give me your worst.", 
      "This should be interesting!",0,50,40,50,20,50,30,50,0,500); 
    var annaQuest3 = new classDefinitions.itemQuest("I need something to make my horses like me more..", "Thanks, all work and no play makes my horses grey.", new Map([["apple",1]]),70);
    var anna = new classDefinitions.NPC("anna", ["Hey.", "Can I help you?"],gameImages.annaIcon,worldMapsStore.mapSevenVillage, 3,2,[annaQuest1,annaQuest2, annaQuest3]);
    NPCs.push(anna);
  
    var eightballQuest1 = new classDefinitions.horseQuest("Heard you're in the horse pawning biz? Need a turbulent one, something I can slap around.", 
      "Gonna put some miles on this thang..",0,50,0,10,20,40,40,50,0,800); 
    var eightball = new classDefinitions.NPC("eightball", ["You stick your nose in everyone's bizness?"],gameImages.eightballIcon,worldMapsStore.mapSevenVillage, 7,2,[eightballQuest1]);
    NPCs.push(eightball);
  
    var damonShop1 = new classDefinitions.shopQuest(["Buy before you try. No refunds"], ["Luck"], new Map([[items.horseTack.saddlePads[helpers.randomIntFromInterval(1,20)],0], [items.horseTack.saddles[1],0], [items.horseTack.bridles[1],0]]));
    var damon = new classDefinitions.NPC('damon', ["How's farm life treating you?", "Any nasty falls lately?"],gameImages.cactus.src,worldMapsStore.mapSevenVillage,11,2,[damonShop1]);
    NPCs.push(damon);
  }

  function enterHome(NPCAtHome) {
    //put NPC Icon
    if(document.contains(document.getElementById("NPCIcon"))) { 
      document.getElementById("NPCImgHolder").removeChild(document.getElementById("NPCIcon"));
    }
    document.getElementById("exitNPCCard").addEventListener("click", () => menus.exitMenu());
    document.getElementById("NPC").style.display = "block";
    var NPCIcon = document.createElement("img");
    NPCIcon.id = "NPCIcon";
    NPCIcon.setAttribute("src", NPCAtHome.art);
    document.getElementById("NPCImgHolder").appendChild(NPCIcon);

    //no currently active quest
    if(NPCAtHome.activeQuest == "") {

    var questHolder = NPCAtHome.questList[helpers.randomIntFromInterval(0,NPCAtHome.questList.length-1)];
    document.getElementById("NPCDialogue").textContent = questHolder.dialogueStart;

    if(questHolder.constructor.name == "shopQuest") {
      
      document.getElementById("CharDialogueHolder").textContent = "I'll have a look.";
      var dialogueOption = document.createElement('button');
      dialogueOption.innerHTML = "follow " + NPCAtHome.name;
      dialogueOption.addEventListener("click", () => openShop(questHolder, NPCAtHome));
      document.getElementById("CharDialogueHolder").appendChild(dialogueOption);

    } else if(questHolder.constructor.name == "horseQuest" || questHolder.constructor.name == "itemQuest") {

    document.getElementById("CharDialogueHolder").textContent = "I can take care of it.";
    var dialogueOption = document.createElement('button');
    dialogueOption.innerHTML = "accept quest";
    dialogueOption.addEventListener("click", () => acceptQuest(questHolder, NPCAtHome));
    document.getElementById("CharDialogueHolder").appendChild(dialogueOption);
    
  }
  } else {
    //active quest exists. Check parameters of request

      document.getElementById("NPCDialogue").textContent = NPCAtHome.dialogue[helpers.randomIntFromInterval(0,(NPCAtHome.dialogue.length)-1)];
      
      //horse Quest
      if(NPCAtHome.activeQuest.constructor.name == "horseQuest") {
      var dropDownMenuApplicableHorse = document.createElement('SELECT');

      playerCharacter.playerHorses.forEach(horsie => {
        if(horsie.nervous >= NPCAtHome.activeQuest.nervousMin && horsie.nervous <= NPCAtHome.activeQuest.nervousMax &&
          horsie.stuborn >= NPCAtHome.activeQuest.stubornMin && horsie.nervous <= NPCAtHome.activeQuest.stubornMax &&
          horsie.interested >= NPCAtHome.activeQuest.interestedMin && horsie.nervous <= NPCAtHome.activeQuest.interestedMax &&
          horsie.trecherous >= NPCAtHome.activeQuest.trecherousMin && horsie.nervous <= NPCAtHome.activeQuest.trecherousMax &&
          horsie.horseTrust >= NPCAtHome.activeQuest.bondMin) {
            var applicableHorse = document.createElement('option');
            applicableHorse.value = horsie.horseName;
            applicableHorse.text = horsie.horseName;
            dropDownMenuApplicableHorse.add(applicableHorse);
          } 
        })

        document.getElementById("CharDialogueHolder").textContent = "Got your horse.";
        var dialogueOption = document.createElement('button');
        dialogueOption.innerHTML = "give";
        dialogueOption.addEventListener("click", () => submitHorseQuest(dropDownMenuApplicableHorse.value, NPCAtHome));
        document.getElementById("CharDialogueHolder").appendChild(dropDownMenuApplicableHorse);
        document.getElementById("CharDialogueHolder").appendChild(dialogueOption);

      } else if (NPCAtHome.activeQuest.constructor.name == "itemQuest") {
        var playerHasAllItems = true;
        NPCAtHome.activeQuest.itemRequest.forEach(function(value, key) {
          if(!(playerCharacter.playerItems.has(key) && playerCharacter.playerItems.get(key).ownedByPlayer >= value)) {
            playerHasAllItems = false;
          }
        });
        if(playerHasAllItems) {
          document.getElementById("CharDialogueHolder").textContent = "Got your stuff.";
          var dialogueOption = document.createElement('button');
          dialogueOption.innerHTML = "give";
          dialogueOption.addEventListener("click", () => submitItemQuest(NPCAtHome));
          document.getElementById("CharDialogueHolder").appendChild(dialogueOption);
        } else {
          document.getElementById("CharDialogueHolder").textContent = "Still working on getting your items.";
          var dialogueOption = document.createElement('button');
          dialogueOption.innerHTML = "leave";
          dialogueOption.addEventListener("click", () => menus.exitMenu());
          document.getElementById("CharDialogueHolder").appendChild(dialogueOption);
        }
      } else if (NPCAtHome.activeQuest.constructor.name == "shopQuest") {
        openShop(NPCAtHome.activeQuest, NPCAtHome);
      }
    }
}
function openShop(quest, NPC) {
  if(NPC.activeQuest == "") {
     NPC.activeQuest = quest;
   }
  document.getElementById("CharDialogueHolder").textContent = "Thanks. I'm out of here."
  var dialogueOption = document.createElement('button');
          dialogueOption.innerHTML = "leave";
          dialogueOption.addEventListener("click", () => menus.exitMenu());
          document.getElementById("CharDialogueHolder").appendChild(dialogueOption);
  document.getElementById("NPCDialogue").textContent = NPC.dialogue[helpers.randomIntFromInterval(0,NPC.dialogue.length-1)];
  var tackSelection = document.createElement('ul');
  quest.inventory.forEach(function(value, key) {
    var shopListItem = document.createElement('li');
    var itemName = key.name;
    var buyButton = document.createElement('button');
    buyButton.addEventListener("click", ()=> purchaseItem(key, value, NPC));
    buyButton.innerHTML = "purchase.";
    shopListItem.textContent = itemName + " cost: " + value + " ";
    shopListItem.appendChild(buyButton);
    tackSelection.appendChild(shopListItem);
  });
  document.getElementById("NPCDialogue").appendChild(tackSelection);
}

function purchaseItem(item, price) {
  if(price <= playerCharacter.playerCoin) {
    item.ownedByPlayer++;
    playerCharacter.playerItems.set(item.name,item);
    playerCharacter.playerCoin -= price;
    document.getElementById("NPCDialogue").textContent = "Thanks";
    helpers.updateBank();
  }
}

function submitHorseQuest(horseName, NPC) {
  document.getElementById("menuHorseExpandList").removeChild(document.getElementById(horseName));
  playerCharacter.playerCoin += NPC.activeQuest.reward;
  document.getElementById("NPCDialogue").textContent = NPC.activeQuest.dialogueEnd + " here's " + NPC.activeQuest.reward + " coin.";
  document.getElementById("CharDialogueHolder").textContent = "Take good care of 'em. Thanks for the tip.";
  var dialogueOption = document.createElement('button');
  dialogueOption.innerHTML = "get going.";
  dialogueOption.addEventListener("click", () => menus.exitMenu());
  document.getElementById("CharDialogueHolder").appendChild(dialogueOption);
  helpers.updateBank();
  for(var i = 0; i<playerCharacter.playerHorses; i++) {
    if(playerCharacter.playerHorses[i].horseName == horseName) {
      playerCharacter.playerHorses.splice(i, 1);
    }
  }
  NPC.activeQuest = "";
}

function submitItemQuest(NPC) {

  NPC.activeQuest.itemRequest.forEach(function(value, key) {
    playerCharacter.playerItems.get(key).ownedByPlayer-= value;
  });

  playerCharacter.playerCoin += NPC.activeQuest.reward;

  document.getElementById("NPCDialogue").textContent = NPC.activeQuest.dialogueEnd + " here's " + NPC.activeQuest.reward + " coin.";
  document.getElementById("CharDialogueHolder").textContent = "Enjoy. Thanks for the tip.";
  var dialogueOption = document.createElement('button');
  dialogueOption.innerHTML = "get going.";
  dialogueOption.addEventListener("click", () => menus.exitMenu());
  document.getElementById("CharDialogueHolder").appendChild(dialogueOption);
  helpers.updateBank();
  NPC.activeQuest = "";

}


function acceptQuest(quest, NPC) {

  NPC.activeQuest = quest;

  if(quest.constructor.name == "horseQuest") {
  document.getElementById("NPCDialogue").textContent = "I need a horse that is at least " + quest.interestedMin + " interested and at most " + quest.interestedMax + " nervousness at least " + quest.nervousMin + " max "
  + quest.nervousMax + " I can handle a minimum stubborness of " + quest.stubornMin + " max stuborness: " + quest.stubornMax +
  " minimum trechery: " + quest.trecherousMin + " I can deal with a max trechery of " + quest.trecherousMax;
  
} else if (quest.constructor.name == "itemQuest") {
    document.getElementById("NPCDialogue").textContent = "I need, ";
    quest.itemRequest.forEach(function(value, key) {
      document.getElementById("NPCDialogue").textContent += value + " " + key +"s ";
    });
  }

  document.getElementById("CharDialogueHolder").textContent = "Got it.";
  var dialogueOption = document.createElement('button');
  dialogueOption.innerHTML = "get going";
  dialogueOption.addEventListener("click", () => menus.exitMenu());
  document.getElementById("CharDialogueHolder").appendChild(dialogueOption);
}


  export const npcFunctionality = {
    createNPCs,
    NPCs,
    enterHome,
    openShop,
    purchaseItem,
    submitHorseQuest,
    submitItemQuest,
    acceptQuest
  }
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
var dialogueOption;

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
    addNPCDialogue(questHolder.dialogueStart);

    if(questHolder.constructor.name == "shopQuest") {

      addCharacterDialogue("I'll have a look.", "follow " + NPCAtHome.name);
      document.getElementById("characterButton").addEventListener("click", () => openShop(questHolder, NPCAtHome));

    } else if(questHolder.constructor.name == "horseQuest" || questHolder.constructor.name == "itemQuest") {

    addCharacterDialogue("I can take care of it.","accept quest");
    document.getElementById("characterButton").addEventListener("click", () => acceptQuest(questHolder, NPCAtHome));
    
    
  }
  } else {
    //active quest exists. Check parameters of request

      addNPCDialogue(NPCAtHome.dialogue1[helpers.randomIntFromInterval(0,(NPCAtHome.dialogue1.length)-1)]);
      
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

        addCharacterDialogue("Got your horse.","give");
        document.getElementById("characterButton").addEventListener("click", () => submitHorseQuest(dropDownMenuApplicableHorse.value, NPCAtHome));
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

          addCharacterDialogue("Got your stuff.","give");
          document.getElementById("characterButton").addEventListener("click", () => submitItemQuest(NPCAtHome));
          
        } else {

          addCharacterDialogue("Still working on getting your items.","leave");
          document.getElementById("characterButton").addEventListener("click", () => menus.exitMenu());
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

  addCharacterDialogue("Thanks. I'm out of here.","leave");
  document.getElementById("characterButton").addEventListener("click", () => menus.exitMenu());
  addNPCDialogue(NPC.dialogue1[helpers.randomIntFromInterval(0,NPC.dialogue1.length-1)]);

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
    addNPCDialogue("Thanks");
    helpers.updateBank();
  }
}

function submitHorseQuest(horseName, NPC) {
  document.getElementById("menuHorseExpandList").removeChild(document.getElementById(horseName));
  playerCharacter.playerCoin += NPC.activeQuest.reward;
  addNPCDialogue(NPC.activeQuest.dialogueEnd + " here's " + NPC.activeQuest.reward + " coin.");

  addCharacterDialogue("Take good care of 'em. Thanks for the tip.","get going.");
  document.getElementById("characterButton").addEventListener("click", () => menus.exitMenu());
  
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

  addNPCDialogue(NPC.activeQuest.dialogueEnd + " here's " + NPC.activeQuest.reward + " coin.");

  addCharacterDialogue("Enjoy. Thanks for the tip.","get going.");
  document.getElementById("characterButton").addEventListener("click", () => menus.exitMenu());

  helpers.updateBank();
  NPC.activeQuest = "";

}


function acceptQuest(quest, NPC) {

  NPC.activeQuest = quest;

  if(quest.constructor.name == "horseQuest") {
  addNPCDialogue("I need a horse that is at least " + quest.interestedMin + " interested and at most " + quest.interestedMax + " nervousness at least " + quest.nervousMin + " max "
  + quest.nervousMax + " I can handle a minimum stubborness of " + quest.stubornMin + " max stuborness: " + quest.stubornMax +
  " minimum trechery: " + quest.trecherousMin + " I can deal with a max trechery of " + quest.trecherousMax);
  
} else if (quest.constructor.name == "itemQuest") {
    var itemTextRequest = "I need, ";
    quest.itemRequest.forEach(function(value, key) {
      itemTextRequest += value + " " + key +"s ";
    });
    addNPCDialogue(itemTextRequest);
  }

  addCharacterDialogue("Got it.","get going.");
  document.getElementById("characterButton").addEventListener("click", () => menus.exitMenu());
}

function addNPCDialogue(dialogue) {
  document.getElementById("NPCDialogue").textContent = dialogue;
}

function addCharacterDialogue(dialogue, buttonText) {
  document.getElementById("CharDialogueHolder").textContent = dialogue;
  dialogueOption = document.createElement('button');
  dialogueOption.id = "characterButton";
  dialogueOption.innerHTML = buttonText;
  document.getElementById("CharDialogueHolder").appendChild(dialogueOption);
}



  export const npcFunctionality = {
    NPCs,
    enterHome,
    openShop,
    purchaseItem,
    submitHorseQuest,
    submitItemQuest,
    acceptQuest
  }
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
import { worldNPCs } from './npcDefinitions.js';


var NPCs = [];
var dialogueOption;

  function enterHome(NPCAtHome) {
    //put NPC Icon
    helpers.checkNPCLevel(NPCAtHome);
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
    if(NPCAtHome.activeQuest === "" || NPCAtHome.activeQuest == null) {
      startQuest(NPCAtHome);
    } else {
      activeQuestVisit(NPCAtHome);
    }
  }

  function activeQuestVisit(NPCAtHome) {
    //active quest exists. Check parameters of request
    var questList = worldNPCs.getNPCQuests();
    var activeQuest = questList[NPCAtHome.name][NPCAtHome.questLevel][NPCAtHome.activeQuest];
    
    addNPCDialogue(NPCAtHome.activeDialogue[helpers.randomIntFromInterval(0,(NPCAtHome.activeDialogue.length)-1)]);
    
    //horse Quest
    if(activeQuest.constructor.name == "horseQuest") {
      horseQuestCheck(NPCAtHome);
    } else if (activeQuest.constructor.name == "itemQuest") {
      itemQuestCheck(NPCAtHome);
    } else if (activeQuest.constructor.name == "shopQuest") {
      openShop(activeQuest, NPCAtHome);
    }
  }

  function horseQuestCheck(NPCAtHome) {
    var dropDownMenuApplicableHorse = document.createElement('SELECT');
    var questList = worldNPCs.getNPCQuests();
    var activeQuest = questList[NPCAtHome.name][NPCAtHome.questLevel][NPCAtHome.activeQuest];
    playerCharacter.playerHorses.forEach(horsie => {
      if(horsie.nervous >= activeQuest.nervousMin && horsie.nervous <= activeQuest.nervousMax &&
        horsie.stuborn >= activeQuest.stubornMin && horsie.nervous <= activeQuest.stubornMax &&
        horsie.interested >= activeQuest.interestedMin && horsie.nervous <= activeQuest.interestedMax &&
        horsie.trecherous >= activeQuest.trecherousMin && horsie.nervous <= activeQuest.trecherousMax &&
        horsie.horseTrust >= activeQuest.bondMin) {
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
  }
  
  function itemQuestCheck(NPCAtHome) {
    var playerHasAllItems = true;
    var questList = worldNPCs.getNPCQuests();
    var activeQuest = questList[NPCAtHome.name][NPCAtHome.questLevel][NPCAtHome.activeQuest];
    activeQuest.itemRequest.forEach(function(value, key) {
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
  }

function openShop(questNumber, NPC) {
  if(NPC.activeQuest == "") {
    NPC.activeQuest = questNumber;
   }
   var questList = worldNPCs.getNPCQuests();
   var activeQuest = questList[NPC.name][NPC.questLevel][NPC.activeQuest];
  addCharacterDialogue("Thanks. I'm out of here.","leave");
  document.getElementById("characterButton").addEventListener("click", () => menus.exitMenu());
  addNPCDialogue(NPC.activeDialogue[helpers.randomIntFromInterval(0,NPC.activeDialogue.length-1)]);

  var tackSelection = document.createElement('ul');
  activeQuest.inventory.forEach(function(value, key) {
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
  var questList = worldNPCs.getNPCQuests();
  var activeQuest = questList[NPC.name][NPC.questLevel][NPC.activeQuest];
  playerCharacter.playerCoin += activeQuest.reward;
  addNPCDialogue(activeQuest.dialogueEnd + " here's " + activeQuest.reward + " coin.");

  addCharacterDialogue("Take good care of 'em. Thanks for the tip.","get going.");
  NPC.NPCRelationship ++;
  gossip(NPC);
  helpers.notifyPlayer("Quest Completed! Relationship with " + NPC.name + " increased!");
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

  var questList = worldNPCs.getNPCQuests();
  var activeQuest = questList[NPC.name][NPC.questLevel][NPC.activeQuest];
  activeQuest.itemRequest.forEach(function(value, key) {
    playerCharacter.playerItems.get(key).ownedByPlayer-= value;
  });

  playerCharacter.playerCoin += activeQuest.reward;

  addNPCDialogue(activeQuest.dialogueEnd + " here's " + activeQuest.reward + " coin.");

  addCharacterDialogue("Enjoy. Thanks for the tip.","get going.");
  NPC.NPCRelationship ++;
  gossip(NPC);
  helpers.notifyPlayer("Quest Completed! Relationship with " + NPC.name + " increased!");
  document.getElementById("characterButton").addEventListener("click", () => menus.exitMenu());

  helpers.updateBank();
  NPC.activeQuest = "";

}


function acceptQuest(questNumber, NPC) {

  NPC.activeQuest = questNumber;
  var questList = worldNPCs.getNPCQuests();
  var activeQuest = questList[NPC.name][NPC.questLevel][NPC.activeQuest];

  if(activeQuest.constructor.name == "horseQuest") {
  addNPCDialogue("I need a horse that is at least " + activeQuest.interestedMin + " interested and at most " + activeQuest.interestedMax + " nervousness at least " + activeQuest.nervousMin + " max "
  + activeQuest.nervousMax + " I can handle a minimum stubborness of " + activeQuest.stubornMin + " max stuborness: " + activeQuest.stubornMax +
  " minimum trechery: " + activeQuest.trecherousMin + " I can deal with a max trechery of " + activeQuest.trecherousMax);
  
} else if (activeQuest.constructor.name == "itemQuest") {
    var itemTextRequest = "I need, ";
    activeQuest.itemRequest.forEach(function(value, key) {
      itemTextRequest += value + " " + key +"s ";
    });
    addNPCDialogue(itemTextRequest);
  }

  addCharacterDialogue("Got it.","get going.");
  document.getElementById("characterButton").addEventListener("click", () => menus.exitMenu());
}

function gossip(NPC) {
  var relationshipList = worldNPCs.getNPCRelationships();
  var npcLiked = relationshipList[NPC.name]["likedBy"];
  var npcDisliked = relationshipList[NPC.name]["dislikedBy"];
  var randomNum;
  if (npcDisliked.length >= 0) {
  for (var i = 0; i<npcDisliked.length-1; i++) {
    randomNum = helpers.randomIntFromInterval(1,3);
    if(randomNum == 3) {
      npcDisliked[i].NPCRelationship --;
      helpers.notifyPlayer("Word got around that you helped " + NPC.name + ". " + npcDisliked[i].name + " is not a fan. Relationship went down.");
    }
  }
}
if (npcLiked.length >= 0) {
    for (var i = 0; i<npcLiked.length-1; i++) {
      randomNum = helpers.randomIntFromInterval(1,3);
      if(randomNum == 3) {
        NPC.npcLiked[i].NPCRelationship++;
        helpers.notifyPlayer("Word got around that you did " + NPC.name + " a favor! " + npcLiked[i].name + " is happy you helped! Relationship went up!");
      }
    }
  }
  }



function startQuest(NPCAtHome) {
  var NPCQuestList = worldNPCs.getNPCQuests();
  const NPCname = NPCAtHome.name;
  const npcQLevel = NPCAtHome.questLevel;
  console.log("NAME: " + NPCname + " level: " + npcQLevel);
  const possibleQuests = NPCQuestList[NPCname][npcQLevel];
  var questNumber = helpers.randomIntFromInterval(0, possibleQuests.length-1);
  var questHolder = possibleQuests[questNumber];
  addNPCDialogue(questHolder.dialogueStart);

  if(questHolder.constructor.name == "shopQuest") {

    addCharacterDialogue("I'll have a look.", "follow " + NPCAtHome.name);
    document.getElementById("characterButton").addEventListener("click", () => openShop(questNumber, NPCAtHome));

  } else if(questHolder.constructor.name == "horseQuest" || questHolder.constructor.name == "itemQuest") {

  addCharacterDialogue("I can take care of it.","accept quest");
  document.getElementById("characterButton").addEventListener("click", () => acceptQuest(questNumber, NPCAtHome));
  
  
}
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
import { gameImages } from './gameImages.js';
import { maps } from './maps.js';
import { items } from './items.js';
import { horsePhysical } from './horseAttributes.js';
import { classDefinitions } from './classDefinitions.js';
import {npcFunctionality} from './npcFunctionality.js';
import { helpers } from './helpers.js';
import { playerCharacter } from './playerCharacter.js';

// Store all wild horses, max of 5. 
var wildHorses = [];

//World and Player items
var worldItems = [];
var playerItems = new Map();


var INTERVAL = 50;
var ctx;
var canvas;
var miniGameActive = false;
var expandMenu;
var expandHorseButton;
var expandInventoryButton;
var menuExpandTitle;
var menuExpandList;
var menuHorseExpandList;
var exitHorseCard;
var exitExpandMenu;
var npcMenuExpand;
var bankShow;
var lassoCol;
var myInterval;

//water pond  
var WaterPondSpriteCol = 0;      

function createHorse() {
var holder = new classDefinitions.horse(horsePhysical.horseAttributes.horseBase[1],horsePhysical.horseAttributes.maneBase[1],horsePhysical.horseAttributes.maneShade[1],
  horsePhysical.horseAttributes.maneColor[helpers.randomIntFromInterval(1,16)],horsePhysical.horseAttributes.baseColor[helpers.randomIntFromInterval(1,16)],
  horsePhysical.horseAttributes.markings[helpers.randomIntFromInterval(1,13)], horsePhysical.horseAttributes.gradient[helpers.randomIntFromInterval(1,16)], maps.worldMaps.maps[helpers.randomWorldWilds(1, 10)], 
  helpers.randomIntFromInterval(0,50), helpers.randomIntFromInterval(0,50), helpers.randomIntFromInterval(0,50), helpers.randomIntFromInterval(0,50));
  helpers.randomIntFromIntervalForWilds(holder);

return holder;
}

function createWilds() {
    while (wildHorses.length < 5) {
      wildHorses.push(createHorse());
    }
    console.log("new horses generated! " + wildHorses.length);
  spawnWilds();
}

function spawnWilds() {
  for(var i = 0; i<5; i++) {
    if (wildHorses[i].spawnMap == playerCharacter.activeMap) {
    drawHorse(wildHorses[i]);
    }
  }
}

function loadComplete() {
    console.log("Load is complete."); 
    canvas = document.getElementById("theCanvas");
    ctx = canvas.getContext("2d");
    var loadingSreen = document.getElementById("enterScreen");
    enterGame = document.getElementById("enterGame").addEventListener("click", () => {
      loadingSreen.style.display = 'none';    
      generateMap(maps.mapStarter);
      drawSprite();
      createWilds();
      npcFunctionality.createNPCs();
      expandMenu = document.getElementById('menuExpand');
      exitExpandMenu = document.getElementById('exitExpand');
      expandHorseButton = document.getElementById('horseMenu');
      expandInventoryButton = document.getElementById('inventory');
      menuExpandTitle = document.getElementById('menuExpandTitle');
      menuHorseExpandList = document.getElementById('menuHorseExpandList')
      menuExpandList = document.getElementById('menuExpandList');
      exitHorseCard = document.getElementById('exitCard');
      npcMenuExpand = document.getElementById('NPC');
      bankShow = document.getElementById('playerCoins');
      buttonEvents();
      updateBank();
      myInterval = self.setInterval(function(){Tick()}, INTERVAL);})
  }

  function updateBank() {
    bankShow.textContent = playerCharacter.playerCoin;
  }

  function buttonEvents() {
    expandHorseButton.addEventListener("click", () => expandHorseMenu());
    exitExpandMenu.addEventListener("click", () => exitMenu());
    exitHorseCard.addEventListener("click", () => exitMenu());
    expandInventoryButton.addEventListener("click", () => expandInventoryMenu());
  }

  function expandInventoryMenu() {
    expandMenu.style.display = "block";
    menuExpandTitle.textContent = "YOUR INVENTORY";
    if (menuHorseExpandList.style.display != "none") {
      menuHorseExpandList.style.display = "none"
    }
    menuInventoryExpandList.style.display = "block"
    fillInventoryMenu();
  }

  function fillInventoryMenu() {
    while(document.getElementById("menuInventoryExpandList").contains(document.getElementById("inventoryItem"))) {
      document.getElementById("menuInventoryExpandList").removeChild(document.getElementById("inventoryItem"));
    }

    playerItems.forEach((item, itemName) =>{
      if(item.ownedByPlayer != 0) {
      var listItem = document.createElement('li'); 
      listItem.id = "inventoryItem";
      listItem.textContent = itemName + ", qty: " + item.ownedByPlayer;
      if(item.type == "Feed") {
        var dropDownFeedMenu = document.createElement('SELECT');
        var feedHorseButton = document.createElement('button');
        feedHorseButton.textContent = " feed";
        playerCharacter.playerHorses.forEach(horsie => {
          var horseInFeedList = document.createElement('option');
          horseInFeedList.value = horsie.horseName;
          horseInFeedList.text = horsie.horseName;
          dropDownFeedMenu.add(horseInFeedList);
        })
        feedHorseButton.addEventListener("click", () => feedHorse(dropDownFeedMenu.value, item));
        listItem.appendChild(dropDownFeedMenu);
        listItem.appendChild(feedHorseButton);
      } else if (item.type == "saddlePad" || item.type == "saddle" || item.type == "bridle") {
        var dropDownTackMenu = document.createElement('SELECT');
        var addTackToHorseButton = document.createElement('button');
        addTackToHorseButton.textContent = " tack";
        playerCharacter.playerHorses.forEach(horsie => {
          var horseToTack = document.createElement('option');
          horseToTack.value = horsie.horseName;
          horseToTack.text = horsie.horseName;
          dropDownTackMenu.add(horseToTack);
        })
        addTackToHorseButton.addEventListener("click", () => tackHorse(dropDownTackMenu.value, item));
        listItem.appendChild(dropDownTackMenu);
        listItem.appendChild(addTackToHorseButton);
      }
      document.getElementById("menuInventoryExpandList").appendChild(listItem);
    }});
  }

  function tackHorse(horseName, item) {
    var tackType = item.type;
    for(var i = 0; i<playerCharacter.playerHorses.length; i++) {
      if(playerCharacter.playerHorses[i].horseName == horseName) {
        if(playerCharacter.playerHorses[i][tackType] != "") {
          playerCharacter.playerHorses[i][tackType].ownedByPlayer++;
        }
        playerCharacter.playerHorses[i][tackType] = item;
        item.ownedByPlayer--;
        exitMenu();
        var tackEvent = document.createElement('li');
        tackEvent.textContent = "You've put a " + item.name + " on "+ horseName;
        document.getElementById('eventInterface').appendChild(tackEvent);
  
        setTimeout(function() {
            document.getElementById('eventInterface').removeChild(tackEvent);
        }, 5000);
        break;
      }
    }
  }

  function feedHorse(horseName, item) {
    for(var i = 0; i<playerCharacter.playerHorses.length; i++) {
      if(playerCharacter.playerHorses[i].horseName == horseName) {
        playerCharacter.playerHorses[i].horseTrust++;
        item.ownedByPlayer--;
        exitMenu();
        var feedEvent = document.createElement('li');
        feedEvent.textContent = "You've fed: " + horseName;
        document.getElementById('eventInterface').appendChild(feedEvent);
  
        setTimeout(function() {
            document.getElementById('eventInterface').removeChild(feedEvent);
        }, 5000);
        break;
      }
    }
  }

  function expandHorseMenu() {
    expandMenu.style.display = "block";
    menuExpandTitle.textContent = "YOUR STABLE";
    if (menuInventoryExpandList.style.display != "none") {
      menuInventoryExpandList.style.display = "none"
    }
    menuHorseExpandList.style.display = "block"
  }

  function exitMenu() {
    expandMenu.style.display = "none";
    menuHorseExpandList.style.display = "none";
    menuInventoryExpandList.style.display = "none";
    horseCard.style.display = "none";
    npcMenuExpand.style.display = "none";
  }

  function Tick() {
    animationWater();
    moveHorses();
    animateCharacter();
    //onWildEvent();
  }

  function eraseSprite() {
    ctx.clearRect(playerCharacter.SpriteColPos*32, playerCharacter.SpriteRowPos*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
  }

  function eraseEnv(SpriteColPos, SpriteRowPos) {
    ctx.clearRect(SpriteColPos*32, SpriteRowPos*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
  }
  
  function generateMap(map) {
    var itemHolder;
    document.getElementById("theCanvas").className = map.mapBackground;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i<15; i++) {
      for (var j = 0; j < 20; j++) {
        if(playerCharacter.activeMap.mapLayout[i][j] != 0 && playerCharacter.activeMap.mapLayout[i][j] > 0) {
          itemHolder = playerCharacter.activeMap[playerCharacter.activeMap.mapLayout[i][j]];
          drawEnv(itemHolder, i, j)
        }
      }
    }
  }
  function drawEnv(item, rowPos, colPos) {
    ctx.drawImage(item, 0 * playerCharacter.SpriteWidth, 0 * playerCharacter.SpriteHeight, 
      playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, colPos*32, rowPos*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
  }

  function drawLasso(item, rowPos,colPos) {
    ctx.drawImage(item, lassoCol * playerCharacter.SpriteWidth, 3 * playerCharacter.SpriteHeight, 
      playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, colPos*32, rowPos*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
  }

  function drawWater(item, rowPos, colPos) {
    ctx.drawImage(item, WaterPondSpriteCol * playerCharacter.SpriteWidth, 0 * playerCharacter.SpriteHeight, 
      playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, colPos*32, rowPos*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
  }

  function animationWater() {
    for (var i = 0; i<15; i++) {
      for (var j = 0; j < 20; j++) {
        if(playerCharacter.activeMap[playerCharacter.activeMap.mapLayout[i][j]] == gameImages.waterPond) {
          WaterPondSpriteCol = helpers.randomIntFromInterval(0,15);
          drawWater(gameImages.waterPond, i, j);
        } else if(playerCharacter.activeMap[playerCharacter.activeMap.mapLayout[i][j]] == gameImages.waterRiverDown) {
          WaterPondSpriteCol = helpers.randomIntFromInterval(0,15);
          drawWater(gameImages.waterRiverDown, i, j);
        }  else if(playerCharacter.activeMap[playerCharacter.activeMap.mapLayout[i][j]] == gameImages.waterRiverUp) {
          WaterPondSpriteCol = helpers.randomIntFromInterval(0,15);
          drawWater(gameImages.waterRiverUp, i, j);
        }
      }
    }
  }
  function drawSprite() {
    ctx.drawImage(gameImages.SpriteImage, playerCharacter.SpriteCol * playerCharacter.SpriteWidth, playerCharacter.SpriteRow * playerCharacter.SpriteHeight, 
      playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, playerCharacter.SpriteColPos*32, playerCharacter.SpriteRowPos*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
  }

  function drawHorse(testHorse) {

    ctx.drawImage(testHorse.baseColor,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
      playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
    ctx.drawImage(testHorse.gradient,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
      playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
    ctx.drawImage(testHorse.markings,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
      playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
    ctx.drawImage(testHorse.horseBase,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
      playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
    ctx.drawImage(testHorse.maneBase,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
      playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
    ctx.drawImage(testHorse.maneColor,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
      playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
    ctx.drawImage(testHorse.maneShade,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
      playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
      
      if(testHorse.saddlePad != "") {
        ctx.drawImage(testHorse.saddlePad.icon,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
          playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
      }
      if(testHorse.bridle != "") {
        ctx.drawImage(testHorse.bridle.icon,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
          playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
      }
      if(testHorse.saddle != "") {
        ctx.drawImage(testHorse.saddle.icon,testHorse.HorseCol * playerCharacter.SpriteWidth, testHorse.HorseRow * playerCharacter.SpriteHeight, 
          playerCharacter.SpriteWidth, playerCharacter.SpriteHeight, testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
      }


      if (testHorse.horseIcon == "") {
      var x = testHorse.HorsePosCol*32; 
      var y = testHorse.HorsePosRow*32;  
      var width = 32;
      var height = 32;

      var imageData = ctx.getImageData(x, y, width, height);

      var tempCanvas = document.createElement('canvas');
      tempCanvas.width = width;
      tempCanvas.height = height;
      var tempCtx = tempCanvas.getContext('2d');

      tempCtx.putImageData(imageData, 0, 0);

      var savedImageDataURL = tempCanvas.toDataURL();

      testHorse.horseIcon = savedImageDataURL;
    }

  }

  function eraseHorse(testHorse) {
    ctx.clearRect(testHorse.HorsePosCol*32, testHorse.HorsePosRow*32, playerCharacter.SpriteWidth, playerCharacter.SpriteHeight);
  };
  
  function putDownItem() {
    var hasChild;

    if(document.contains(document.getElementById("worldItem"))) { 
      hasChild= true;
    } else{hasChild= false;}

    if(hasChild) {
      document.getElementById("eventInterface").removeChild(document.getElementById("worldItem"));
    }

    var itemAtSpot = checkExistingItem();

    if(itemAtSpot == "") {
    var randNumber = helpers.randomIntFromInterval(1,120);
    if (randNumber <=10) {
      var biome = playerCharacter.activeMap.mapBackground;
      var itemValue = items.possibleItems[biome][helpers.randomIntFromInterval(1,2)];
      var worldItemNotify = document.createElement('li');
      var collectItemButton = document.createElement('button');
      collectItemButton.innerHTML = "collect";
      worldItemNotify.id = "worldItem"
      worldItems.push(new classDefinitions.item(itemValue, playerCharacter.SpriteColPos, playerCharacter.SpriteRowPos,playerCharacter.spriteMapCol,playerCharacter.spriteMapRow));
      itemAtSpot = worldItems[worldItems.length-1];
      collectItemButton.addEventListener("click", () => collectItem(itemAtSpot));
      worldItemNotify.textContent = ("Item found: " + itemAtSpot.item.name + " ");
      worldItemNotify.appendChild(collectItemButton);
      document.getElementById("eventInterface").appendChild(worldItemNotify);
    }
    } else {
      var worldItemNotify = document.createElement('li');
      worldItemNotify.id = "worldItem"
      var collectItemButton = document.createElement('button');
      collectItemButton.innerHTML = "collect";
      collectItemButton.addEventListener("click", () => collectItem(itemAtSpot));
      worldItemNotify.textContent = ("Item found: " + itemAtSpot.item.name + " ");
      worldItemNotify.appendChild(collectItemButton);
      document.getElementById("eventInterface").appendChild(worldItemNotify);
    }
  }

  function checkExistingItem() {
    for(var i = 0; i<worldItems.length; i++) {
      if(playerCharacter.spriteMapCol == worldItems[i].itemMapCol && playerCharacter.spriteMapRow == worldItems[i].itemMapRow
        && playerCharacter.SpriteColPos == worldItems[i].itemColPos && playerCharacter.SpriteRowPos == worldItems[i].ItemRowPos) {
          return worldItems[i];
        }
    }
    return "";
  }

  function collectItem(itemToCollect) {
    itemToCollect.item.ownedByPlayer++;
    console.log(itemToCollect.item.name + "   " + itemToCollect.item.ownedByPlayer);
    playerItems.set(itemToCollect.item.name, itemToCollect.item);
  
    for(var i = 0; i<worldItems.length; i++) {
      if(playerCharacter.spriteMapCol == worldItems[i].itemMapCol && playerCharacter.spriteMapRow == worldItems[i].itemMapRow
        && playerCharacter.SpriteColPos == worldItems[i].itemColPos && playerCharacter.SpriteRowPos == worldItems[i].ItemRowPos) {
          worldItems.splice(i,1);
        }
    }
    document.getElementById("eventInterface").removeChild(document.getElementById("worldItem"));
  }

  function checkSuroundings() {
    if(document.contains(document.getElementById("knock"))) { 
    document.getElementById("eventInterface").removeChild(document.getElementById("knock"));
    }
    var NPCAtHome = "";
    if(playerCharacter.activeMap[playerCharacter.activeMap.mapLayout[playerCharacter.SpriteRowPos-1][playerCharacter.SpriteColPos]] == gameImages.home) {
      console.log("Home");
      for(var i = 0; i<npcFunctionality.NPCs.length; i++) {
        if(npcFunctionality.NPCs[i].row == playerCharacter.SpriteRowPos-1 && npcFunctionality.NPCs[i].col == playerCharacter.SpriteColPos) {
          NPCAtHome = npcFunctionality.NPCs[i];
          console.log("the NPC is = " + NPCAtHome.row + " Col: " + NPCAtHome.col);
          break;
        }
      }
      if(NPCAtHome != "") {
        var atHomeNotify = document.createElement('li');
        atHomeNotify.id = "knock";
        atHomeNotify.textContent = "Looks like there's someone home... ";
        var knockButton = document.createElement('button');
        knockButton.innerHTML = "knock";
        knockButton.addEventListener("click", () => enterHome(NPCAtHome));
        atHomeNotify.appendChild(knockButton);
        document.getElementById("eventInterface").appendChild(atHomeNotify);
    }
    }

  }

  function enterHome(NPCAtHome) {
      //put NPC Icon
      if(document.contains(document.getElementById("NPCIcon"))) { 
        document.getElementById("NPCImgHolder").removeChild(document.getElementById("NPCIcon"));
      }
      document.getElementById("exitNPCCard").addEventListener("click", () => exitMenu());
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
            if(!(playerItems.has(key) && playerItems.get(key).ownedByPlayer >= value)) {
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
            dialogueOption.addEventListener("click", () => exitMenu());
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
            dialogueOption.addEventListener("click", () => exitMenu());
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
      playerItems.set(item.name,item);
      playerCharacter.playerCoin -= price;
      document.getElementById("NPCDialogue").textContent = "Thanks";
      updateBank();
    }
  }

  function submitHorseQuest(horseName, NPC) {
    document.getElementById("menuHorseExpandList").removeChild(document.getElementById(horseName));
    playerCharacter.playerCoin += NPC.activeQuest.reward;
    document.getElementById("NPCDialogue").textContent = NPC.activeQuest.dialogueEnd + " here's " + NPC.activeQuest.reward + " coin.";
    document.getElementById("CharDialogueHolder").textContent = "Take good care of 'em. Thanks for the tip.";
    var dialogueOption = document.createElement('button');
    dialogueOption.innerHTML = "get going.";
    dialogueOption.addEventListener("click", () => exitMenu());
    document.getElementById("CharDialogueHolder").appendChild(dialogueOption);
    updateBank();
    for(var i = 0; i<playerCharacter.playerHorses; i++) {
      if(playerCharacter.playerHorses[i].horseName == horseName) {
        playerCharacter.playerHorses.splice(i, 1);
      }
    }
    NPC.activeQuest = "";
  }

  function submitItemQuest(NPC) {

    NPC.activeQuest.itemRequest.forEach(function(value, key) {
      playerItems.get(key).ownedByPlayer-= value;
    });

    playerCharacter.playerCoin += NPC.activeQuest.reward;

    document.getElementById("NPCDialogue").textContent = NPC.activeQuest.dialogueEnd + " here's " + NPC.activeQuest.reward + " coin.";
    document.getElementById("CharDialogueHolder").textContent = "Enjoy. Thanks for the tip.";
    var dialogueOption = document.createElement('button');
    dialogueOption.innerHTML = "get going.";
    dialogueOption.addEventListener("click", () => exitMenu());
    document.getElementById("CharDialogueHolder").appendChild(dialogueOption);
    updateBank();
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
    dialogueOption.addEventListener("click", () => exitMenu());
    document.getElementById("CharDialogueHolder").appendChild(dialogueOption);
  }

  document['onkeydown'] = function(event) {
    event = event || window.event;
    var key = event.which || event.cursor;
    // Check for a special key value, and map it to ASCII.
    switch (key) {
      case 37:  // Left arrow, ASCII 29 
      moveCharacter(29);
        break;
      case 38:  // Up arrow, ASCII 30
      moveCharacter(30);
        break;
      case 39:  // Right arrow, ASCII 28  
      moveCharacter(28);
        break; 
      case 40:  // Down arrow, ASCII 31
      moveCharacter(31);
        break;
    }
  };
    function moveCharacter(key) {
        switch (key) {
          case 28:  // Right arrow was pressed 
           if (playerCharacter.SpriteColPos < 19 && ((playerCharacter.activeMap.mapLayout[playerCharacter.SpriteRowPos][playerCharacter.SpriteColPos+1] == 0))) { 
            if(playerCharacter.activeRiddenHorse == "") {
            if(playerCharacter.activeMap != maps.catchWild) {  
              playerCharacter.SpriteRow = 1;	
            } else {
              playerCharacter.SpriteRow = 3;	
            }
              eraseSprite();
              playerCharacter.SpriteColPos += .5;
              drawSprite();
            setTimeout(() => {
              eraseSprite();
              playerCharacter.SpriteColPos += .5;
              drawSprite();
              putDownItem();
              checkSuroundings();
              isPlayerOnWild();
              drawSprite();
            }, 150);
          } else {
            eraseSprite();
            if(playerCharacter.activeMap != maps.catchWild) {  
              playerCharacter.SpriteRow = 1;	
            } else {
              playerCharacter.SpriteRow = 3;	
            }
            playerCharacter.SpriteColPos += 1;
            moveHorsePhysical(28, playerCharacter.activeRiddenHorse);
            putDownItem();
            checkSuroundings();
            isPlayerOnWild();
            drawSprite();
          }
            break;
           } else if (playerCharacter.SpriteColPos >= 19) {
            moveMaps(key);
           }
           else {
          break;
           }	
          case 29:  // Left arrow, ASCII 29 
           if (playerCharacter.SpriteColPos > 0 && ((playerCharacter.activeMap.mapLayout[playerCharacter.SpriteRowPos][playerCharacter.SpriteColPos-1] == 0))){  
            if (playerCharacter.activeRiddenHorse == "") {
              if(playerCharacter.activeMap != maps.catchWild) {  
                playerCharacter.SpriteRow = 2;	
              } else {
                playerCharacter.SpriteRow = 3;	
              }
              eraseSprite();
              playerCharacter.SpriteColPos -= .5;
              drawSprite();
            setTimeout(() => {
              eraseSprite();
              playerCharacter.SpriteColPos -= .5;
              drawSprite();
              putDownItem();
              checkSuroundings();
              isPlayerOnWild();
              drawSprite();
            }, 150);
          } else {
            eraseSprite();
            if(playerCharacter.activeMap != maps.catchWild) {  
              playerCharacter.SpriteRow = 2;	
            } else {
              playerCharacter.SpriteRow = 3;	
            }
            playerCharacter.SpriteColPos -= 1;
            moveHorsePhysical(29, playerCharacter.activeRiddenHorse);
            putDownItem();
            checkSuroundings();
            isPlayerOnWild();
            drawSprite();
          }
            break;
           }else if (playerCharacter.SpriteColPos <= 0) {
            moveMaps(key);
           } else {
              break;
           }
          case 30:  // up arrow was pressed 
           if (playerCharacter.SpriteRowPos > 0 && ((playerCharacter.activeMap.mapLayout[playerCharacter.SpriteRowPos-1][playerCharacter.SpriteColPos]== 0))){ 
            if(playerCharacter.activeRiddenHorse == "") {
              playerCharacter.SpriteRow = 3;
            eraseSprite();
            playerCharacter.SpriteRowPos -= .5;
            drawSprite();
          setTimeout(() => {
            eraseSprite();
            playerCharacter.SpriteRowPos -= .5;
            drawSprite();
            putDownItem();
            checkSuroundings();
            isPlayerOnWild();
            drawSprite();
          }, 150);
            } else {
              playerCharacter.SpriteRow = 3;
              eraseSprite();
              playerCharacter.SpriteRowPos -= 1;
              moveHorsePhysical(30, playerCharacter.activeRiddenHorse);
              putDownItem();
              checkSuroundings();
              isPlayerOnWild();
              drawSprite();
            }
            break;
           } else if (playerCharacter.SpriteRowPos <= 0) {
            moveMaps(key);
           } 
           else {
            break;
           }
          case 31:  // down arrow was pressed 
           if (playerCharacter.SpriteRowPos < 14  && ((playerCharacter.activeMap.mapLayout[playerCharacter.SpriteRowPos+1][playerCharacter.SpriteColPos] == 0))) {
          if(playerCharacter.activeRiddenHorse == "") {
            playerCharacter.SpriteRow = 0;	
            eraseSprite();
            playerCharacter.SpriteRowPos += .5;
            drawSprite();
          setTimeout(() => {
            eraseSprite();
            playerCharacter.SpriteRowPos += .5;
            drawSprite();
            putDownItem();
            checkSuroundings();
            isPlayerOnWild();
            drawSprite();
          }, 150);
          } else {
            playerCharacter.SpriteRow = 0;	
            eraseSprite();
            playerCharacter.SpriteRowPos += 1;
            moveHorsePhysical(31, playerCharacter.activeRiddenHorse);
            putDownItem();
            checkSuroundings();
            isPlayerOnWild();
            drawSprite();
          }
            break;
           } else if (playerCharacter.SpriteRowPos >= 14) {
            moveMaps(key);
           } else {
              break;
           }
        }
      }

      function moveMaps(key) {
        switch (key) {
          case 28:  // Right arrow was pressed 
           if (playerCharacter.SpriteColPos >= 19 && playerCharacter.spriteMapCol < maps.worldMaps.mapSize.cols && maps.worldMaps.mapLayout[playerCharacter.spriteMapRow][playerCharacter.spriteMapCol+1] != 0) { 	
            eraseSprite();
            playerCharacter.activeMap = maps.worldMaps.maps[maps.worldMaps.mapLayout[playerCharacter.spriteMapRow][playerCharacter.spriteMapCol+1]];
            playerCharacter.spriteMapCol += 1;
            playerCharacter.SpriteColPos = 0;
            generateMap(playerCharacter.activeMap);
            if(playerCharacter.activeRiddenHorse != "") {
              playerCharacter.activeRiddenHorse.spawnMap = playerCharacter.activeMap;
              playerCharacter.activeRiddenHorse.HorsePosCol = playerCharacter.SpriteColPos;
              playerCharacter.activeRiddenHorse.HorsePosRow = playerCharacter.SpriteRowPos;
              drawHorse(playerCharacter.activeRiddenHorse);
            }
            drawSprite();
            break;
           } else {
          break;
           }	
          case 29:  // Left arrow, ASCII 29 
          if (playerCharacter.SpriteColPos >= 0 && playerCharacter.spriteMapCol > 0 && maps.worldMaps.mapLayout[playerCharacter.spriteMapRow][playerCharacter.spriteMapCol-1] != 0) { 	
            eraseSprite();
            playerCharacter.activeMap = maps.worldMaps.maps[maps.worldMaps.mapLayout[playerCharacter.spriteMapRow][playerCharacter.spriteMapCol-1]];
            playerCharacter.spriteMapCol -= 1;
            playerCharacter.SpriteColPos = 19;
            generateMap(playerCharacter.activeMap);
            if(playerCharacter.activeRiddenHorse != "") {
              playerCharacter.activeRiddenHorse.spawnMap = playerCharacter.activeMap;
              playerCharacter.activeRiddenHorse.HorsePosCol = playerCharacter.SpriteColPos;
              playerCharacter.activeRiddenHorse.HorsePosRow = playerCharacter.SpriteRowPos;
              drawHorse(playerCharacter.activeRiddenHorse);
            }
            drawSprite();
            break;
           } else {
          break;
           }
          case 30:  // up arrow was pressed 
          if (playerCharacter.SpriteRowPos <= 0 && playerCharacter.spriteMapRow > 0 && maps.worldMaps.mapLayout[playerCharacter.spriteMapRow-1][playerCharacter.spriteMapCol] != 0) { 	
            eraseSprite();
            playerCharacter.activeMap = maps.worldMaps.maps[maps.worldMaps.mapLayout[playerCharacter.spriteMapRow-1][playerCharacter.spriteMapCol]];
            playerCharacter.spriteMapRow -= 1;
            playerCharacter.SpriteRowPos = 14;
            generateMap(playerCharacter.activeMap);
            if(playerCharacter.activeRiddenHorse != "") {
              playerCharacter.activeRiddenHorse.spawnMap = playerCharacter.activeMap;
              playerCharacter.activeRiddenHorse.HorsePosCol = playerCharacter.SpriteColPos;
              playerCharacter.activeRiddenHorse.HorsePosRow = playerCharacter.SpriteRowPos;
              drawHorse(playerCharacter.activeRiddenHorse);
            }
            drawSprite();
            break;
           } else {
          break;
           }
          case 31:  // down arrow was pressed 
          if (playerCharacter.SpriteRowPos >= 14 && playerCharacter.spriteMapRow < maps.worldMaps.mapSize.rows && maps.worldMaps.mapLayout[playerCharacter.spriteMapRow+1][playerCharacter.spriteMapCol] != 0) { 	
            eraseSprite();
            playerCharacter.activeMap = maps.worldMaps.maps[maps.worldMaps.mapLayout[playerCharacter.spriteMapRow+1][playerCharacter.spriteMapCol]];
            playerCharacter.spriteMapRow += 1;
            playerCharacter.SpriteRowPos = 0;
            generateMap(playerCharacter.activeMap);
            if(playerCharacter.activeRiddenHorse != "") {
              playerCharacter.activeRiddenHorse.spawnMap = playerCharacter.activeMap;
              playerCharacter.activeRiddenHorse.HorsePosCol = playerCharacter.SpriteColPos;
              playerCharacter.activeRiddenHorse.HorsePosRow = playerCharacter.SpriteRowPos;
              drawHorse(playerCharacter.activeRiddenHorse);
            }
            drawSprite();
            break;
           } else {
              break;
           }
        }
      }


      function moveHorsePhysical(key, horse) {
        if (horse.spawnMap == playerCharacter.activeMap) {
        switch (key) {
          case 28:  // Right arrow was pressed 
           if (horse.HorsePosCol < 19 && (playerCharacter.activeMap.mapLayout[horse.HorsePosRow][horse.HorsePosCol+1] == 0)) { 	
            horse.HorseRow = 1;
            eraseHorse(horse);
            horse.HorsePosCol += 1;
            drawHorse(horse);
            break;
           } else {
          break;
           }	
          case 29:  // Left arrow, ASCII 29 
            if (horse.HorsePosCol > 0 && (playerCharacter.activeMap.mapLayout[horse.HorsePosRow][horse.HorsePosCol-1] == 0)) { 	
            horse.HorseRow = 0;
            eraseHorse(horse);
            horse.HorsePosCol -= 1;
            drawHorse(horse);
            break;
           } else {
              break;
           }
          case 30:  // up arrow was pressed 
            if (horse.HorsePosRow > 0 && (playerCharacter.activeMap.mapLayout[horse.HorsePosRow-1][horse.HorsePosCol] == 0)) { 	
            horse.HorseRow = 2;
            eraseHorse(horse);
            horse.HorsePosRow -= 1;
            drawHorse(horse);
            break;
           } else {
            break;
           }
          case 31:  // down arrow was pressed 
            if (horse.HorsePosRow < 14 && (playerCharacter.activeMap.mapLayout[horse.HorsePosRow+1][horse.HorsePosCol] == 0)) { 	
            horse.HorseRow = 3;
            eraseHorse(horse);
            horse.HorsePosRow += 1;
            drawHorse(horse);
            break;
           } else {
              break;
           }
        }
        if(playerCharacter.activeRiddenHorse.horseName == horse.horseName) {
          playerCharacter.SpriteCol = horse.HorseCol;
          playerCharacter.SpriteRow = horse.HorseRow;
        }
      }
    }

    function animateHorse (horse) {
      if (helpers.randomIntFromInterval(1,7) == 5) {
      eraseHorse(horse);
      horse.HorseCol = Math.round(Math.random());
      drawHorse(horse);
      if(horse.horseBeingRidden == "Y") {
        eraseHorse(horse);
        animateCharacter();
        playerCharacter.SpriteCol = horse.HorseCol;
        drawHorse(horse);
        drawSprite();
      }
    }
    }

    function animateCharacter() {
      if(playerCharacter.activeRiddenHorse == "") {
        playerCharacter.SpriteCol = Math.round(Math.random());
      eraseSprite();
      drawSprite();
    } else {
      playerCharacter.SpriteCol = playerCharacter.activeRiddenHorse.HorseCol;
    }
    }
      function moveHorses() {
        for (var i = 0; i<5; i++) {
          if (wildHorses[i].spawnMap == playerCharacter.activeMap && playerCharacter.activeMap != maps.catchWild) {
          animateHorse(wildHorses[i]);
          moveHorsePhysical(helpers.randomIntFromInterval(28,100), wildHorses[i]);
        } else if(wildHorses[i].spawnMap == maps.catchWild && playerCharacter.activeMap == maps.catchWild)  {
          animateHorse(wildHorses[i]);
          moveHorsePhysical(helpers.randomIntFromInterval(24,29), wildHorses[i]);
        }
      }
        for(var b = 0; b<=playerCharacter.playerHorses.length-1; b++) {
          if (playerCharacter.playerHorses[b].spawnMap == playerCharacter.activeMap) {
          animateHorse(playerCharacter.playerHorses[b]);
          console.log(playerCharacter.playerHorses[b].horseName + " Being riden? + " + playerCharacter.playerHorses[b].horseBeingRidden);
          if(playerCharacter.playerHorses[b].horseBeingRidden == "N") {
          moveHorsePhysical(helpers.randomIntFromInterval(28,100), playerCharacter.playerHorses[b]);
        }
          }
        }
      }

      function isPlayerOnWild() {
        for (var i = 0; i<5; i++) {
          if (wildHorses[i].spawnMap == playerCharacter.activeMap && wildHorses[i].HorsePosCol == playerCharacter.SpriteColPos && wildHorses[i].HorsePosRow == playerCharacter.SpriteRowPos) {
            onWildEvent(wildHorses[i]);
          }
        }
      }

function onWildEvent(horse) {
    var wildEvent = document.createElement('li');
    var wildEventButton = document.createElement('button');
    wildEventButton.innerHTML = "catch!";
    wildEvent.textContent = "You've encountered a wild!   ";
    wildEvent.appendChild(wildEventButton);
    wildEventButton.addEventListener("click", () => wildCatchMiniGame(horse));
    document.getElementById('eventInterface').appendChild(wildEvent);
    
    setTimeout(function() {
        document.getElementById('eventInterface').removeChild(wildEvent);
    }, 5000);
}

function wildCatchMiniGame(horse) {
    if (miniGameActive) return; // Prevent starting another mini-game

    miniGameActive = true; // Set the flag to true
    var miniGameEventLog = document.createElement('li');
    var activeMapHolder = playerCharacter.activeMap;
    playerCharacter.SpriteColPos = 9;
    playerCharacter.SpriteRowPos = 9;
    horse.HorsePosCol = 9;
    horse.HorsePosRow = 6;
    var attempts = 0;
    playerCharacter.activeMap = maps.catchWild;
    if(playerCharacter.activeRiddenHorse != "") {
      playerCharacter.activeRiddenHorse.spawnMap = playerCharacter.activeMap;
      playerCharacter.activeRiddenHorse.HorsePosCol = playerCharacter.SpriteColPos;
      playerCharacter.activeRiddenHorse.HorsePosRow = playerCharacter.SpriteRowPos;
    }
    horse.spawnMap = playerCharacter.activeMap;
    console.log('entered wild mini attempts: ' + attempts);
    generateMap(maps.catchWild);

    const keyUpHandler = event => {
        if (event.code === 'Space' && playerCharacter.activeMap == maps.catchWild) {
            attempts++;
            console.log('Space pressed, attempts: ' + attempts);
            if (attempts == 5) {
                endMiniGame("You've failed to catch a wild!", horse, activeMapHolder);
            } else if (sendLasso(horse)) {
                endMiniGame("You've caught a wild! It took " + attempts + " attempts", horse, activeMapHolder);
                wildHorses.splice(findWildHorseIndex(), 1);
                createWilds();
                horse.spawnMap = 0;
                horse.HorsePosCol = 10;
                horse.HorsePosRow = 10;
                horse.horseName = prompt("Give your new horse a name!");
                playerCharacter.playerHorses.push(horse);
                var horseListItem = document.createElement('li');
                horseListItem.id = horse.horseName;
                var rideHorseButton = document.createElement('button');
                rideHorseButton.textContent = " toggle ride ";
                horseListItem.id = horse.horseName;
                var displayHorseButton = document.createElement('button');
                var openHorseCardButton = document.createElement('button');
                var horseIconList = document.createElement("img");
                horseIconList.setAttribute("src", horse.horseIcon);
                displayHorseButton.innerHTML = "Toggle Display";
                openHorseCardButton.innerHTML = "Info";
                horseListItem.textContent =  horse.horseName +":";
                horseListItem.appendChild(horseIconList);
                horseListItem.appendChild(displayHorseButton);
                horseListItem.appendChild(openHorseCardButton);
                horseListItem.appendChild(rideHorseButton);
                displayHorseButton.addEventListener("click", () => displayHorse(horse.horseName));
                openHorseCardButton.addEventListener("click", () => openHorseCard(horse));
                rideHorseButton.addEventListener("click", () => rideHorse(horse));
                menuHorseExpandList.appendChild(horseListItem);
            }
        }
    };

    document.addEventListener('keyup', keyUpHandler);

    function endMiniGame(message, horse, activeMapHolder) {
        attempts = 0;
        wildHorses.splice(findWildHorseIndex(), 1);
        createWilds();
        miniGameActive = false; // Reset the flag
        playerCharacter.activeMap = activeMapHolder;
        generateMap(playerCharacter.activeMap);
        if(playerCharacter.activeRiddenHorse != "") {
          playerCharacter.activeRiddenHorse.spawnMap = activeMapHolder;
          eraseSprite();
          drawHorse(playerCharacter.activeRiddenHorse);
          drawSprite();
        } else {
          eraseSprite();
          drawSprite();
        }
        miniGameEventLog.textContent = message;
        document.getElementById('eventInterface').appendChild(miniGameEventLog);
        document.removeEventListener('keyup', keyUpHandler); // Remove the event listener
        setTimeout(function() {
          document.getElementById('eventInterface').removeChild(miniGameEventLog);
      }, 5000);
    }
}

      function rideHorse(horse) {
        if(playerCharacter.activeRiddenHorse == "") {
        eraseHorse(horse);
        playerCharacter.activeRiddenHorse = horse;
        horse.horseBeingRidden = "Y";
        playerCharacter.activeRiddenHorse.spawnMap = playerCharacter.activeMap;
        playerCharacter.activeRiddenHorse.HorsePosCol = playerCharacter.SpriteColPos;
        playerCharacter.activeRiddenHorse.HorsePosRow = playerCharacter.SpriteRowPos;
        gameImages.SpriteImage.src = "Riding.png";
        eraseSprite();
        drawHorse(playerCharacter.activeRiddenHorse);
        drawSprite();
      } else if(horse.horseName == playerCharacter.activeRiddenHorse.horseName){
        playerCharacter.activeRiddenHorse.horseBeingRidden = "N";
        playerCharacter.activeRiddenHorse.spawnMap = "";
        playerCharacter.activeRiddenHorse.HorsePosCol = 10;
        playerCharacter.activeRiddenHorse.HorsePosRow = 10;
        playerCharacter.activeRiddenHorse = "";
        eraseHorse(playerCharacter.activeRiddenHorse);
        eraseSprite();
        gameImages.SpriteImage.src = "Character.png";
        drawSprite();
      } else {
        playerCharacter.activeRiddenHorse.horseBeingRidden = "N";
        playerCharacter.activeRiddenHorse.spawnMap = "";
        playerCharacter.activeRiddenHorse.HorsePosCol = 10;
        playerCharacter.activeRiddenHorse.HorsePosRow = 10;
        eraseHorse(playerCharacter.activeRiddenHorse);
        playerCharacter.activeRiddenHorse = horse;
        horse.horseBeingRidden = "Y";
        playerCharacter.activeRiddenHorse.spawnMap = playerCharacter.activeMap;
        playerCharacter.activeRiddenHorse.HorsePosCol = playerCharacter.SpriteColPos;
        playerCharacter.activeRiddenHorse.HorsePosRow = playerCharacter.SpriteRowPos;
        gameImages.SpriteImage.src = "Riding.png";
        eraseSprite();
        drawHorse(playerCharacter.activeRiddenHorse);
        drawSprite();
      }
      }

      function displayHorse(horseName) {
        for(var i = 0; i<playerCharacter.playerHorses.length; i++) {
          if(playerCharacter.playerHorses[i].horseName == horseName && playerCharacter.playerHorses[i].horseDisplayed == "N") {
            playerCharacter.playerHorses[i].spawnMap = maps.mapSix;
            playerCharacter.playerHorses[i].HorsePosCol = 5;
            playerCharacter.playerHorses[i].HorsePosRow = 5;
            playerCharacter.playerHorses[i].horseDisplayed = "Y";
          } else if(playerCharacter.playerHorses[i].horseName == horseName && playerCharacter.playerHorses[i].horseDisplayed == "Y") {
            playerCharacter.playerHorses[i].spawnMap = 0;
            eraseEnv(playerCharacter.playerHorses[i].HorsePosCol,playerCharacter.playerHorses[i].HorsePosRow);
            playerCharacter.playerHorses[i].horseDisplayed = "N";
          }
        }
      }

      function openHorseCard(horse) {
        horseCard.style.display = "block";
        document.getElementById("interested").textContent = horse.interested;
        document.getElementById("nervous").textContent = horse.nervous;
        document.getElementById("stuborn").textContent = horse.stuborn;
        document.getElementById("trecherous").textContent = horse.trecherous;
        document.getElementById("bond").textContent = horse.horseTrust;
        document.getElementById("displayed").textContent = horse.horseDisplayed;
        document.getElementById("sadpd").textContent = horse.saddlePad.name;
        if(horse.saddlePad != ""){
          var removeSP = document.createElement('button');
          removeSP.innerHTML = "untack";
          removeSP.addEventListener("click", ()=> untackHorse(horse.saddlePad, horse))
          document.getElementById("sadpd").appendChild(removeSP);
        }
        document.getElementById("saddle").textContent = horse.saddle.name;
        if(horse.saddle != ""){
          var removeSaddle = document.createElement('button');
          removeSaddle.innerHTML = "untack";
          removeSaddle.addEventListener("click", ()=> untackHorse(horse.saddle, horse))
          document.getElementById("saddle").appendChild(removeSaddle);
        }
        document.getElementById("bridle").textContent = horse.bridle.name;
        if(horse.bridle != ""){
          var removeBridle = document.createElement('button');
          removeBridle.innerHTML = "untack";
          removeBridle.addEventListener("click", ()=> untackHorse(horse.bridle, horse))
          document.getElementById("bridle").appendChild(removeBridle);
        }
      }

      function untackHorse(item, horse) {
        item.ownedByPlayer++;
        horse[item.type] = "";
      }

      function sendLasso(horse) {
        var lassoPosCol = playerCharacter.SpriteColPos;
        var lassoPosRow = playerCharacter.SpriteRowPos;
        var horseCaught = false;
        var distance = 0;
        
        for (var p = 0; p<5; p++) {
          distance++;
          lassoPosRow--;
          if(p < 4) {
            lassoCol = 1;
          } else {
            lassoCol = 0;
          }
          
          drawLasso(gameImages.lasso, lassoPosRow, lassoPosCol);
          if (lassoPosRow == horse.HorsePosRow && lassoPosCol == horse.HorsePosCol) {
            horseCaught = true;
          }
          setTimeout(function(){
            for (var x = 0; x <= distance; x++) {
                eraseEnv(lassoPosCol, lassoPosRow+x);
            } }, 100);
            if(horseCaught) {
              return true;
            }
        }
      return false;
      }

      function findWildHorseIndex() {
        for (var i = 0; i<5; i++) {
          if (wildHorses[i].spawnMap == maps.catchWild) {
            return i;
          }
        }
      }

window.onload = loadComplete();
      
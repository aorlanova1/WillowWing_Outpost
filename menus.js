import { gameImages } from './gameImages.js';
import { maps } from './maps.js';
import { items } from './items.js';
import { horsePhysical } from './horseAttributes.js';
import { classDefinitions } from './classDefinitions.js';
import {npcFunctionality} from './npcFunctionality.js';
import { helpers } from './helpers.js';
import { playerCharacter } from './playerCharacter.js';
import { menus } from './menus.js/index.js';
import { inventory } from './inventory.js';
import { wildHorses } from './wildHorses.js';
import { worldInteractions } from './worldInteractions.js';
import { ownedHorse } from './ownedHorse.js';
import { movement } from './movement.js';
import { wildCatchGame } from './wildCatchingMiniGame.js';

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
  
  function exitMenu() {
    expandMenu.style.display = "none";
    menuHorseExpandList.style.display = "none";
    menuInventoryExpandList.style.display = "none";
    horseCard.style.display = "none";
    npcMenuExpand.style.display = "none";
  }

  function initializeMenus() {
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
    inventory.fillInventoryMenu();
  }

  function expandHorseMenu() {
    expandMenu.style.display = "block";
    menuExpandTitle.textContent = "YOUR STABLE";
    if (menuInventoryExpandList.style.display != "none") {
      menuInventoryExpandList.style.display = "none"
    }
    menuHorseExpandList.style.display = "block"
  }


  export const menus = {
    expandMenu,
    expandHorseButton,
    expandInventoryButton,
    menuExpandTitle,
    menuExpandList,
    menuHorseExpandList,
    exitHorseCard,
    exitExpandMenu,
    npcMenuExpand,
    bankShow,
    exitMenu,
    initializeMenus,
    buttonEvents,
    expandInventoryMenu,
    expandHorseMenu
  }
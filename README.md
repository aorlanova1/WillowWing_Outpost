CREDITS:

https://gamedev.cs.gsu.edu/~aorlanova1/WillowWing_Outpost/homepage/credits.html

HOW IT WAS MADE!

MAPS:

->The game world consists of 20 individual worlds that are represented as 20x15 tile matrices, where tiles are 32 by 32 pixels. 
->An individual map is an object, with enumerated environmental sprites, and a matrix whose numeric values correspond to the sprite that should be rendered on the tile.
->The entire map is built from the above individual maps. The world map exists as an object, where all individual map objects are enumerated and appropriately placed by their neighbors in the world map matrix. For example, the player starts at map 1, corresponding to mapStarter, in row 3, col 1, of the map layout. Moving the player to the left map would make their active map mapFour, ennumerated as '4', in col 0, row 3.

PLAYER MOVEMENT:

-> Player movement within the map is bound by the sprite’s position in the matrix. If the player is at the end of the map (i.e. col 19, if at the rightmost part of the map), with one more right arrow click, the player will move to a new map. Otherwise, the player will move within the map they are in.
Speed of movement on foot:
-> When off horseback, on one movement, the player will move half a tile, then half a tile again in 150ms with a timeout function.
-> When a character moves to a new tile, a check of the player’s surroundings directly above them is made, a check for items at their location is made (if there are no items existing on that tile, there is a chance a new one will spawn on that tile), and whether the player is on a wild. These functions will be covered in depth in the worldInteractions.js portion of the write-up.
-> If a player is riding a horse, the horse movement is called first, then the player will move, as the player's riding sprite has to be drawn on top of the horse sprite.
-> MOVING MAPS: if the player character moves in a direction going past the last row or col of the current map, the move maps function is called. The direction of travel via the arrow key pressed is passed to the function. The player character’s position on the world map, AKA, their position on the matrix, worldMaps[mapLayout], as defined in maps.js, is stored. The program checks to see if the col/row the player is at is less than worldMaps[mapSize] at row or col. If it is, the player can move to the new map. We set the new active map as such, 
CODE -> 
playerCharacter.activeMap = worldMapsStore.worldMaps.maps[worldMapsStore.worldMaps.mapLayout[playerCharacter.spriteMapRow][playerCharacter.spriteMapCol+1]];
-> Access the individual map object that exists at the row and column in the world map layout that the player is moving to. Since maps are enumerated by numbers, and those numbers used to build the layout, we will be able to access an individual map by checking the matrix by position.
-> If the player is riding a horse at the time of map movement, that horse's position and active map is updated to match what the player character’s position and active map are. It is drawn, then the player character is drawn.

HORSE MOVEMENT:

-> The moveHorses() function is called by the tick function. The horses that should be moved on call of this function are wild horses that share an active map with the player and horses that are in the field, if the player’s active map is the pasture.
Wild horses have a 6% chance of movement every tick (50ms) in the wild and during the minigame have an 18% chance of moving left and right.
-> If a horse is ridden, then at the end of its movement the player position is updated to match the horse’s. Player movement always happens after horse movement.
-> Horses that are wild do not change active maps. The maps they spawn in are where they will remain until caught(or are de-spawned from the game through a catch failure).

ITEMS:

-> The main item store is an object with all possible items found in the environment and another object for tack items.
-> The above mentioned object has an object for each environment within it. Each environment has enumerated item objects in a list (enumerated for the purpose of placing random objects on the map, if none exist on a tile already). 
-> Each item has: 
--->a name, which is often used as a primary key for accessing items in item use, NPC quest functionality, placing items, etc.
--->An icon, which is a pointer to the image of the item
--->Item type, I.E environmental(typically asked for in quests), food (can be fed to your horse.), saddle pad, bridle, or saddle.
How are items placed in the world?
->First, the biome is checked by accessing the ‘mapBackground’ attribute of the player’s active map, as it is defined in maps.js. 
-->Side note: mapBackground is an important attribute that corresponds to the CSS class of map backgrounds. When a map is rendered, the mapBackground attribute string is used to set the corresponding CSS class.
->The item is then retrieved from the possibleItems object:

CODE -> var itemValue = items.possibleItems[biome][helpers.randomIntFromInterval(1,3)];

->A global variable, world items, is then updated with a different item object currently at that tile.
->This object(worldItems) is an array of all items already placed in the map. It contains the item object from the possible world items object, the col, row, map, and the world map col and row of the object.
->A list element is then shown on the event interface on which there is a button with a callback function to the collect item function, sending the item the player will have been on at the time of pressing the button to the function.
->World items will be traversed through to find an item at the position the player is standing on before possibly generating a new item.
->There is an 8% chance of an item generating.
->World items array data is not retained in local storage.
To collect an item:
->If the player doesn’t already own the item, increase the ‘ownedByPlayer’ attribute of the item held by the world item object.
->Then, set the playerItems Map data of the player’s owned objects

CODE -> playerCharacter.playerItems.set(itemToCollect.item.name, itemToCollect.item);
->Set the key to the item name, so that the map does not duplicate items. This is important for quantity and easy access of items.

->If the item is already in the player items map, just increment the ‘ownedByPlayer’ attribute and set it back into the player items map.

Dynamic Coloration of Wild Horses:

-> A horse comes in many different base colors, markings, fur gradients, and mane colors. A single horse is made up of 6 different files of this art that are layered, at time of rendering, under each other to create a fully colored horse.
-> The possibilities of all horse colors are in the ‘horseAttributes.js’ file. All of the layers are ennumerated, to allow for random selection by integer values of each layer at the horse's creation.
-> When a wild horse is created, there is an new object of class horse created. These objects contain attributes of each type that makes up a fully drawn horse, like, ‘horseBase’, ‘maneBase,’ ‘mainShade,’ ‘mainColor,’ etc.
->Horse attributes are selected with a random number from ‘1’ to the max enumeration of the horse layer, as defined in horseAttributes.js.
->To draw the horse in the game environment, the draw function is called on the same tile 6 times. Each layer is drawn in order of what should cover another. In order from first to last drawn, the layers are, horse base color, gradient, markings, horse outline, mane outline, mane color, mane shade. Then, if they are wearing tack, those layers are also drawn.
->The horse is drawn when accessing the owned horses or wildHorses, which stores all the wilds in the world, object.

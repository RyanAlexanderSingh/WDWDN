function init_items(){
  var all_items = []
  //Generate the whole list
  // ItemInfo(id, url, item type)
  // HATS //
  all_items.push(new ItemInfo('Plastic bag', "files/pictures/BigTestHat.png", 0)) 
  all_items.push(new ItemInfo('Sauce Pan', "files/pictures/BigTestHat.png", 0)) 
  all_items.push(new ItemInfo('Make Up', "files/pictures/BigTestHat.png", 0))
  all_items.push(new ItemInfo('Top Hat', "files/pictures/BigTestHat.png", 0)) 
  // Left Hands
  all_items.push(new ItemInfo('Shroom', "files/pictures/BigTestHat.png", 1)) 
  all_items.push(new ItemInfo('Bin Lid', "files/pictures/BigTestHat.png", 1)) 
  all_items.push(new ItemInfo('MicroPhone', "files/pictures/BigTestHat.png", 1)) 
  // right arm
  all_items.push(new ItemInfo('Flowers', "files/pictures/BigTestHat.png", 2)) 
  all_items.push(new ItemInfo('Cricket Bat', "files/pictures/BigTestHat.png", 2)) 
  all_items.push(new ItemInfo('Rat-Flail', "files/pictures/BigTestHat.png", 2)) 
  // Torso
  all_items.push(new ItemInfo('Medal', "files/pictures/BigTestHat.png", 3)) 
  all_items.push(new ItemInfo('Spiky Bra', "files/pictures/BigTestHat.png", 3)) 
  all_items.push(new ItemInfo('Shoulder Pads', "files/pictures/BigTestHat.png", 3)) 
  all_items.push(new ItemInfo('Bullet-Proof Vest', "files/pictures/BigTestHat.png", 3)) 
  // Feet
  all_items.push(new ItemInfo('Wellies', "files/pictures/BigTestHat.png", 4)) 
  all_items.push(new ItemInfo('Flip Flops', "files/pictures/BigTestHat.png", 4)) 
  all_items.push(new ItemInfo('Platforms', "files/pictures/BigTestHat.png", 4)) 
  all_items.push(new ItemInfo('Roller-Skates', "files/pictures/BigTestHat.png", 4)) 
  
  //Randomize a subset and add it to items
  for (a = 0; a < 10; ++a)
  {
	items.push(new DrawableBox(25 * a,  (game_screen.height - 20), 25,20 ,getRandomColor(),0,all_items[a].type))
  }
}


//This will include the basic stages
function set_up_sceen1(){

  //Setting up background
  game_screen.backgroundurl ="files/pictures/forest.png" //"files/pictures/pub_back.png"
  game_screen.backgroundurl2 = -1 //"files/pictures/pub_front.png"

  //Setting up characters
  var colour1 = new DrawingInfo(getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor())
  var colour2 = new DrawingInfo(getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor())
  var colour3 = new DrawingInfo(getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor())
  var colour4 = new DrawingInfo(getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor())
  characters.push(new DrawableBox(100, (game_screen.height - 200), getRandomInt(40,50), getRandomInt(90,100), colour1,0,new Equipment(2)))
  characters[0].url = "files/pictures/Face1.png"
  characters.push(new DrawableBox(200, (game_screen.height - 150), getRandomInt(40,50), getRandomInt(90,100), colour2,0,new Equipment(2)))
  characters[1].url = "files/pictures/Face2.png"
  characters.push(new DrawableBox(400, (game_screen.height - 200), getRandomInt(40,50), getRandomInt(90,100), colour3,0,new Equipment(2)))
  characters.push(new DrawableBox(500, (game_screen.height - 150), getRandomInt(40,50), getRandomInt(90,100), colour4,0,new Equipment(2)))
  
  //Setting up items
  items.push(new DrawableBox(50,  (game_screen.height - 20), 25,20 ,-1,0,0))
  items[0].url = "files/pictures/BigTestHat.png"
  items.push(new DrawableBox(500,  (game_screen.height - 400), 5,10 ,"#0000ff",0,1))
  items.push(new DrawableBox(30,  (game_screen.height - 10), 7,7 ,"#00ff00",0,2))
  items.push(new DrawableBox(400,  (game_screen.height - 50), 30,10,"#00ff00",0,3))
  items.push(new DrawableBox(300,  (game_screen.height - 50), 30,10 ,"#00ff00",0,3))
  items.push(new DrawableBox(150,  (game_screen.height - 222), 30,10 ,"#ff5500",0,4))
  
  init_items()
}

function analyze_situation(){
	
}
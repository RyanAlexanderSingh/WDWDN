function init_items(){
  var all_items = []
  //Generate the whole list
  // ItemInfo(id, url, item type)
  // HATS //
  all_items.push(new ItemInfo("Plastic bag", "files/pictures/Plastig_bag_down.png", 0)) 
  all_items.push(new ItemInfo("Sauce Pan", "files/pictures/Sauce_pan_on.png", 0)) 
  all_items.push(new ItemInfo("Make Up", "files/pictures/Make_up_up.png", 0))
  all_items.push(new ItemInfo("Top Hat", "files/pictures/TopHat.png", 0)) 
  // Left Hands
  all_items.push(new ItemInfo("Shroom", "files/pictures/Mushroom.png", 1)) 
  all_items.push(new ItemInfo("Bin Lid", "files/pictures/bulletproofvest.png", 1)) 
  all_items.push(new ItemInfo("MicroPhone", "files/pictures/Microphone.png", 1)) 
  // right arm
  all_items.push(new ItemInfo("Flowers", "files/pictures/Flowers.png", 2)) 
  all_items.push(new ItemInfo("Cricket Bat", "files/pictures/CriketBat.png", 2)) 
  all_items.push(new ItemInfo("Rat-Flail", "files/pictures/Rat_flail.png", 2)) 
  // Torso
  all_items.push(new ItemInfo("Medal", "files/pictures/Mdeal.png", 3)) 
  all_items.push(new ItemInfo("Spiky Bra", "files/pictures/Bra.png", 3)) 
  all_items.push(new ItemInfo("Shoulder Pads", "files/pictures/shoulders.png", 3)) 
  all_items.push(new ItemInfo("Bullet-Proof Vest", "files/pictures/bulletproofvest.png", 3)) 
  // Feet
  all_items.push(new ItemInfo("Wellies", "files/pictures/Wellies.png", 4)) 
  all_items.push(new ItemInfo("Flip Flops", "files/pictures/FlipsFlops.png", 4)) 
  all_items.push(new ItemInfo("'Platforms", "files/pictures/Platforms.png", 4)) 
  all_items.push(new ItemInfo("Roller-Skates", "files/pictures/Rollerskates.png", 4)) 
  
  //Randomize a subset and add it to items
  for (var a = 0; a < 12; a++)
  {
    var i = getRandomInt(0,all_items.length-2 )
    while(all_items[i].selected){
      if(i>all_items.length-2) 
        i = 0
      i = i+1
    }
    all_items[i].selected = true
    items.push(new DrawableBox(40 * (a+1),  (game_screen.height - 30), 20, 20 ,-1,0,all_items[i].type, all_items[i].url, all_items[i].id))
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
  characters.push(new DrawableBox(100, (game_screen.height - 200), getRandomInt(40,50), getRandomInt(90,100), colour1,0,new Equipment(2),"files/pictures/Face1.png", "Mike"))
  characters.push(new DrawableBox(200, (game_screen.height - 150), getRandomInt(40,50), getRandomInt(90,100), colour2,0,new Equipment(2),"files/pictures/Face2.png", "Mike"))
  characters[1].url = "files/pictures/Face2.png"
  characters.push(new DrawableBox(400, (game_screen.height - 200), getRandomInt(40,50), getRandomInt(90,100), colour3,0,new Equipment(2),"files/pictures/Face1.png", "Mike"))
  characters.push(new DrawableBox(500, (game_screen.height - 150), getRandomInt(40,50), getRandomInt(90,100), colour4,0,new Equipment(2),"files/pictures/Face2.png", "Mike"))
  
  //Setting up items
  init_items()
}



function get_story_opening(){
	var story_part =
	"The night was neither dark, and nor was it stormy. In fact it was just cold and raining; for it was the first night of the 2015 Global Game Jam."
	return story_part
}

function get_story_change(){
	var story_part =
	"At roughly one in the morning, one of our four nerds see a tweet stating that zombies had broken out in London (or vice versa) and were now rampaging!"
	return story_part
}


function get_story_development(){
	var story_part =
	"36 and a half outrageous hours later our four nerds found themselves resting deep (so deep) in Hampstead Heath. One nerd looks to the others and asks 'What do we do now?'"
	return story_part
}
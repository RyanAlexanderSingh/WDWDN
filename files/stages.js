// variables
var message_array = []
var character_names = []
var all_items = []

function init_items(){

  character_names[0] = "Ryan"
  character_names[1] = "Juanmi"
  character_names[2] = "Sam"
  character_names[3] = "Angry Andrea"


  var item_posx = []
  var item_posy = []
  item_posx.push(220)
  item_posy.push(25)
  
  item_posx.push(450)
  item_posy.push(40)
  
  item_posx.push(300)
  item_posy.push(30)
  
  item_posx.push(100)
  item_posy.push(60)
  
  item_posx.push(350)
  item_posy.push(70)
 
  item_posx.push(600)
  item_posy.push(90)
  
  item_posx.push(40)
  item_posy.push(45)
  
  item_posx.push(657)
  item_posy.push(75)
  
  item_posx.push(670)
  item_posy.push(180)
  
  item_posx.push(300)
  item_posy.push(205)
  
  item_posx.push(600)
  item_posy.push(205)
  
  item_posx.push(640)
  item_posy.push(140)
  
  //Generate the whole list
  // ItemInfo(id, url, item type)
  // HATS // (id, url, type, sizex, sizey, offsetx, offsety, hp )
  all_items.push(new ItemInfo("Plastic bag", "files/pictures/Plastig_bag_down.png", 0, 0, 0, 0, 0, -5)) 
  all_items.push(new ItemInfo("Sauce Pan", "files/pictures/Sauce_pan_on.png", 0, 0, 0, 0, 0, 10)) 
  all_items.push(new ItemInfo("Make Up", "files/pictures/Make_up_up.png", 0, 0, 0, 0, 0, 7)) 
  all_items.push(new ItemInfo("Top Hat", "files/pictures/TopHat.png", 0, 0, 0, 0, 0, 3)) 
  // Left Hands
  all_items.push(new ItemInfo("Shroom", "files/pictures/Mushroom.png", 1, 0, 0, 0, 0, -15)) 
  all_items.push(new ItemInfo("Bin Lid", "files/pictures/shield.png", 1, 0, 0, 0, 0, 14))  
  all_items.push(new ItemInfo("MicroPhone", "files/pictures/Microphone.png", 1, 0, 0, 0, 0, -20)) 
  // right arm
  all_items.push(new ItemInfo("Flowers", "files/pictures/Flowers.png", 2, 0, 0, 0, 0, 5)) 
  all_items.push(new ItemInfo("Cricket Bat", "files/pictures/CriketBat.png", 2, 0, 0, 0, 0, 25))  
  all_items.push(new ItemInfo("Rat-Flail", "files/pictures/Rat_flail.png", 2, 0, 0, 0, 0, 3))  
  // Torso
  all_items.push(new ItemInfo("Medal", "files/pictures/Mdeal.png", 3, 0, 0, 0, 0, -6))  
  all_items.push(new ItemInfo("Spiky Bra", "files/pictures/Bra.png", 3, 0, 0, 0, 0, 2))  
  all_items.push(new ItemInfo("Shoulder Pads", "files/pictures/shoulders.png", 3, 0, 0, 0, 0, 8))  
  all_items.push(new ItemInfo("Bullet-Proof Vest", "files/pictures/bulletproofvest.png", 3, 0, 0, 0, 0, 12))  
  // Feet
  all_items.push(new ItemInfo("Wellies", "files/pictures/Wellies.png", 4, 0, 0, 0, 0, -8)) 
  all_items.push(new ItemInfo("Flip Flops", "files/pictures/FlipsFlops.png", 4, 0, 0, 0, 0, -14)) 
  all_items.push(new ItemInfo("'Platforms", "files/pictures/Platforms.png", 4, 0, 0, 0, 0, 6)) 
  all_items.push(new ItemInfo("Roller-Skates", "files/pictures/Rollerskates.png", 4, 0, 0, 0, 0, 14))  
  
 
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
    items.push(new DrawableBox(item_posx[a],  (game_screen.height - item_posy[a]), 20, 20 ,-1,0,all_items[i].type, all_items[i].url, i))
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
  characters.push(new DrawableBox(100, (game_screen.height - 200), 40, 90, colour1,0,new Equipment(2),"files/pictures/Face1.png", "Mike"))
  characters.push(new DrawableBox(200, (game_screen.height - 150), 40, 90, colour2,0,new Equipment(2),"files/pictures/Face2.png", "Mike"))
  characters.push(new DrawableBox(400, (game_screen.height - 200), 40, 90, colour3,0,new Equipment(2),"files/pictures/Face5.png", "Mike"))
  characters.push(new DrawableBox(500, (game_screen.height - 150), 40, 90, colour4,0,new Equipment(2),"files/pictures/Face4.png", "Mike"))
  
  //Setting up items
  init_items()
}

 function clean_scene1(){
    for(var i=0; i<items.length; i++){
      if(items[i].status == 0)
        items[i].posx = 10000 //send to china unused items
      else{
        items[i].posx += 120
        items[i].posy += 20
      }
    }
    
    for(var i=0; i<characters.length; i++){
      characters[i].posx += 120
      characters[i].posy += 20
    }
  //Setting up background
  game_screen.backgroundurl ="files/pictures/Shettler.png" //"files/pictures/pub_back.png"
  game_screen.backgroundurl2 = -1 //"files/pictures/pub_front.png"
  }

//This will set up the second scene
// posx, posy, sizex, sizey, colour, status, type, url, id)
function set_up_scene2(){
  items.push(new DrawableBox(650,(game_screen.height - 390),250,70,"I will reason with the zombies!", 0, 5, 0, 0))
  items.push(new DrawableBox(100,(game_screen.height - 410),140,70,"I want to cry...", 0, 5, 0, 0))
  items.push(new DrawableBox(500,(game_screen.height - 450),220,80,"I'm blocking the windows!", 0, 5, 0, 0))
  items.push(new DrawableBox(350,(game_screen.height - 350),180,70,"I have to call mum...", 0, 5, 0, 0))
  items.push(new DrawableBox(300,(game_screen.height - 420),180,70,"I'm gonna kill 'em all!", 0, 5, 0, 0))
}

function kill_individual(x){
			x.drawable = false
      x.posx += 1000
      if(x.type.head != -1){
        items[x.type.head].drawable = false
      }
      if(x.type.lefth != -1){
        items[x.type.lefth].drawable = false
      }
      if(x.type.righth != -1){
        items[x.type.righth].drawable = false
      }
      if(x.type.torso != -1){
        items[x.type.torso].drawable = false
      }
      if(x.type.feet != -1){
        items[x.type.feet].drawable = false
      }
      
}

// this function should resolve the planning stage in a similar function
function resolve_characters_plan_2_outcome(){
	// this function will take each character left and evaluate their chances according to their idea.
	for (i = 0; i < characters.length; i++){
		if ( characters[i].type.balloon != -1){
			index = items[characters[i].type.head].id
			alert("the character balloon index is " + index)
		}
	}
}

// this function needs to be called in pick scenario in GGJ.js
function resolve_characters_equip_2_plan(){
	// this function will take each character and evaluate their chance of living
	// for each character
	for (i=0; i < characters.length; i++){
		var hp = -1
		var number = 0
		var item_name = ""
		var message = ""
		// check what equipment they have
		if (characters[i].type.head != -1){
			// id of the item
			number = items[characters[i].type.head].id
			// is it the first item, add to the item string depending on result
			if (item_name == ""){
				item_name = all_items[number].id
			} else {
				item_name += " and the " + all_items[number].id
			}
			// this is debug yo
			//alert(character_names[i] + " has " + item_name)
			// alter dat hp yo!
			hp = hp + all_items[number].hp
			//alert("hp is now: " + hp)
		}
		
		if (characters[i].type.lefth != -1){
			// id of the item
			number = items[characters[i].type.lefth].id
			// is it the first item, add to the item string depending on result
			if (item_name == ""){
				item_name = all_items[number].id
			} else {
				item_name += " and the " + all_items[number].id
			}
			// this is debug yo
			//alert(character_names[i] + " has " + item_name)
			// alter dat hp yo!
			hp = hp + all_items[number].hp
			//alert("hp is now: " + hp)
		}
		
		if (characters[i].type.righth != -1){
			// id of the item
			number = items[characters[i].type.righth].id
			// is it the first item, add to the item string depending on result
			if (item_name == ""){
				item_name = all_items[number].id
			} else {
				item_name += " and the " + all_items[number].id
			}
			// this is debug yo
			//alert(character_names[i] + " has " + item_name)
			// alter dat hp yo!
			hp = hp + all_items[number].hp
			//alert("hp is now: " + hp)
		}
		
		if (characters[i].type.torso != -1){
			// id of the item
			number = items[characters[i].type.torso].id
			// is it the first item, add to the item string depending on result
			if (item_name == ""){
				item_name = all_items[number].id
			} else {
				item_name += " and the " + all_items[number].id
			}
			// this is debug yo
			//alert(character_names[i] + " has " + item_name)
			// alter dat hp yo!
			hp = hp + all_items[number].hp
			//alert("hp is now: " + hp)
		}
		
		if (characters[i].type.feet != -1){
			// id of the item
			number = items[characters[i].type.feet].id
			// is it the first item, add to the item string depending on result
			if (item_name == ""){
				item_name = all_items[number].id
			} else {
				item_name += " and the " + all_items[number].id
			}
			// this is debug yo
			//alert(character_names[i] + " has " + item_name)
			// alter dat hp yo!
			hp = hp + all_items[number].hp
			//alert("hp is now: " + hp)
		}
		
		if (hp < 0){
			// kill the character
			if ( characters[0].drawable == true || characters[1].drawable == true || characters[2].drawable == true){
			characters[i].drawable = false
			kill_individual(characters[i])
			message = character_names[i] + " didn't make it; turns out the " + item_name + " weren't that useful!"
			message_array.push(message)
			}
		} else {
			message = character_names[i] + " survived; turns out the " + item_name + " were really useful!"
			message_array.push(message)
		}
	}
  
  game_screen.cutscene = true
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

function get_prepared_1(){
	var story_part =
	"So...What do we do now?"
	return story_part
}

function get_prepared_2(){
	var story_part =
	"Are you ready?"
	return story_part
}

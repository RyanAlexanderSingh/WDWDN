// variables
var message_array = []
var character_names = []
var all_items = []
var we_dont_want_supermans = true
var we_dont_want_dancing_boxes = true
var we_dont_want_dancing_boxes2 = true

var message_neg_0 = []
var message_neg_1 = []
var message_pos_0 = []
var message_pos_1 = []

var num_rest_items = {}
var char_hps = []


function init_items(){

  character_names[0] = "Ryan"
  character_names[1] = "Juanmi"
  character_names[2] = "Sam"
  character_names[3] = "Angry Andrea"
  
  message_neg_0[0] = " bit the dust, hard. Apparently the "
  message_neg_0[1] = " died as he lived: stupidly. It seems that the "
  message_neg_0[2] = " is now an ex-Nerd. For some reason the "
  message_neg_0[3] = " has ceased to be because of the stupid "
  
  message_neg_1[0] = " not such a good idea."
  message_neg_1[1] = " $%&@ing &£%$."
  message_neg_1[2] = " as useful as a engine made of bacon."
  message_neg_1[3] = " only was useful to attract more zombies."
  
  message_pos_0[0] = " kicked serious zombie ass, using the "
  message_pos_0[1] = " ran for hours, thanks to the "
  message_pos_0[2] = " opened a can of whoop ass with their "
  message_pos_0[3] = " is now a level 3 barbarian thanks to his "
  
  message_pos_1[0] = " totally awesome dude!"
  message_pos_1[1] = " almost as good as an ak."
  message_pos_1[2] = " pretty much the best thing ever!"
  message_pos_1[3] = ", that he will adopt as his new family!"

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
  all_items.push(new ItemInfo("Plastic bag", "files/pictures/Plastic_bag_down.png", 0, 40, 40, 0, 0, -5)) 
  all_items[all_items.length-1].url_up = "files/pictures/plastic_bag_on.png"
  all_items.push(new ItemInfo("Tesco bag", "files/pictures/TescoBagDown.png", 0, 30, 32, 0, 0, -5)) 
  all_items[all_items.length-1].url_up = "files/pictures/TescoBag.png"
  all_items.push(new ItemInfo("Sauce Pan", "files/pictures/Sauce_pan_on.png", 0, 28, 13, -7, -15, 10)) 
  all_items.push(new ItemInfo("Make Up", "files/pictures/Make_up_down.png", 0, 20, 20, 5, 5, 7)) 
  all_items[all_items.length-1].url_up = "files/pictures/Make_up_up.png"
  all_items.push(new ItemInfo("Top Hat", "files/pictures/TopHat.png", 0, 25, 25, 0, -35, 3)) 
  all_items.push(new ItemInfo("Jugernaut", "files/pictures/jugernaut.png", 0, 45, 28, 0, 0, 50)) 
  all_items.push(new ItemInfo("Helmet", "files/pictures/helmet.png", 0, 23, 42, 0, 0, 50)) 
  all_items.push(new ItemInfo("Clown mask", "files/pictures/ClownFace.png", 0, 23, 42, 0, 10, 50)) 
  all_items.push(new ItemInfo("Cone", "files/pictures/cone.png", 0, 30, 35, 0, -35, 50)) 
  all_items.push(new ItemInfo("Wizard hat", "files/pictures/Wizzard.png", 0, 30, 35, 0, -40, 50)) 
  // Left Hands
  all_items.push(new ItemInfo("Shroom", "files/pictures/Mushroom.png", 1, 20, 20, 0, 0, -15)) 
  all_items.push(new ItemInfo("Dustbin lid", "files/pictures/shield.png", 1, 15, 30, 0, 0, -15)) 
  all_items.push(new ItemInfo("Clock", "files/pictures/clock_off.png", 1, 15, 42, -3, 17, 5)) 
  all_items[all_items.length-1].url_up = "files/pictures/clock_on.png"
  all_items.push(new ItemInfo("Microphone", "files/pictures/Microphone_down.png", 1, 25, 35, -3, -25, 5)) 
  all_items[all_items.length-1].url_up = "files/pictures/Microphone.png"
  all_items.push(new ItemInfo("Sword", "files/pictures/sword_down.png", 1, 18, 50, -4, -49, 15))  
  all_items[all_items.length-1].url_up = "files/pictures/sword_up.png"
  all_items.push(new ItemInfo("Crowbar", "files/pictures/crowbar_down.png", 1, 18, 50, -1, -31, 25))  
  all_items[all_items.length-1].url_up = "files/pictures/crowbar_on.png"
  all_items.push(new ItemInfo("Wrench", "files/pictures/Wrench_down.png", 1, 15, 40, -5, -35, 15))  
  all_items[all_items.length-1].url_up = "files/pictures/Wrench_on.png"
  all_items.push(new ItemInfo("Hammer", "files/pictures/hammer_on.png", 1, 18, 50, -3, -23, 20))  
  all_items[all_items.length-1].url_up = "files/pictures/hammer_down.png"
  all_items.push(new ItemInfo("Cricket", "files/pictures/CriketBat_down", 1, 18, 50, -3, -23, 20))  
  all_items[all_items.length-1].url_up = "files/pictures/CriketBat.png"
  all_items.push(new ItemInfo("Rat-Flail", "files/pictures/Rat_flail.png", 1, 32, 32, 14, -33, 3))  
  all_items[all_items.length-1].url_up = "files/pictures/Rat_flailon.png"
  // Torso
  all_items.push(new ItemInfo("Medal", "files/pictures/Mdeal.png", 3, 20, 25, -2, 30, -6))  
  all_items.push(new ItemInfo("Iron bra", "files/pictures/Bra.png", 3, 30, 35, 0, 40, -6))  
  all_items.push(new ItemInfo("Klevar chest", "files/pictures/GladChest.png", 3, 28, 32, -2, 40, -6)) 
  all_items.push(new ItemInfo("Target", "files/pictures/Target.png", 3, 28, 32, 5, 40, -6))  
  // Feet
  all_items.push(new ItemInfo("Wellies", "files/pictures/Wellies.png", 4, 35, 20, 0, -5, -8)) 
  all_items.push(new ItemInfo("Flip Flops", "files/pictures/FlipsFlops.png", 4, 35, 12, 0, 0, -14)) 
  all_items.push(new ItemInfo("'Platforms", "files/pictures/Platforms.png", 4, 35, 20, 0, 0, 6)) 
  all_items.push(new ItemInfo("'Big platforms", "files/pictures/HugePlatforms.png", 4, 35, 40, 0, 0, 6)) 
  all_items.push(new ItemInfo("Roller-Skates", "files/pictures/Rollerskates.png", 4, 35, 18, 0, 0, 14))  
  
 
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
    items.push(new DrawableBox(item_posx[a],  (game_screen.height - item_posy[a]), all_items[i].sizex,all_items[i].sizey,-1,0,all_items[i].type, all_items[i].url, i))
  }
}

function shuffle(array) {
  var m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

//This will include the basic stages
function set_up_sceen1(){
  //Setting up background
  game_screen.backgroundurl ="files/pictures/forest.png" //"files/pictures/pub_back.png"
  game_screen.backgroundurl2 = -1 //"files/pictures/pub_front.png"
  num_rest_items = 8
  //Setting up characters
  var urlHeads = []
  var urlBodies = []
  var urlLegs = []
  var selectedH = []
  var selectedB = []
  var selectedL = []
  var dressL = []
  var colours = []
  urlHeads.push("files/pictures/Face1.png")
  urlHeads.push("files/pictures/Face2.png")
  urlHeads.push("files/pictures/Face4.png")
  urlHeads.push("files/pictures/Face5.png")
  urlBodies.push("files/pictures/Body1.png")
  urlBodies.push("files/pictures/Body2.png")
  urlBodies.push("files/pictures/Body3.png")
  urlBodies.push("files/pictures/Body4.png")
  urlLegs.push("files/pictures/Legs3.png")
  urlLegs.push("files/pictures/Legs2.png")
  urlLegs.push("files/pictures/Legs1.png")
  urlLegs.push("files/pictures/Legs4.png")
  shuffle(urlHeads)
  shuffle(urlBodies)
  shuffle(urlLegs)
  var random = getRandomInt(0,100)
  var otherRandom
  if(random < 30){
    otherRandom = getRandomInt(0,3)
    urlHeads[otherRandom] = "files/pictures/Face3.png"
  }
  random = getRandomInt(0,100)
  if(random < 30){
    otherRandom = getRandomInt(0,3)
    urlBodies[otherRandom] = "files/pictures/Dress.png"
    dressL[otherRandom] = 1
  }
  for(var i = 0; i < 4; i++){
    var n_colour = new DrawingInfo(urlHeads[i],urlBodies[i],urlLegs[i],dressL[i],-1)
    colours.push(n_colour)
  }
  characters.push(new DrawableBox(100, (game_screen.height - 200), 40, 90, colours[3],0,new Equipment(2),-1, character_names[0]))
  characters.push(new DrawableBox(200, (game_screen.height - 150), 40, 90, colours[2],0,new Equipment(2),-1, character_names[1]))
  characters.push(new DrawableBox(400, (game_screen.height - 200), 40, 90, colours[1],0,new Equipment(2),-1, character_names[2]))
  characters.push(new DrawableBox(500, (game_screen.height - 150), 40, 90, colours[0],0,new Equipment(2),-1, character_names[3]))
  //Setting up items
  init_items()
}

 function prescene_two(){
    for(var i=0; i<items.length; i++){
      if(items[i].status == 0){
        items[i].drawable = false;
        items[i].posx = 10000 //send to china unused items
      }
    }

	  //Setting up background
  game_screen.backgroundurl ="files/pictures/Shettler.png" //"files/pictures/pub_back.png"
  game_screen.backgroundurl2 = -1 //"files/pictures/pub_front.png"
  
    
  
  if(set_up_characters){
    set_up_characters = false
    for(var i = 0; i < items.length; i++){
			items[i].posx += 120;
			items[i].posy += 20;
    }
    for(var i = 0; i < characters.length; i++){
			characters[i].posx += 120;
			characters[i].posy += 20;
    }
  }
} 
  
  function scene_two(){
	for(var i=0; i<items.length; i++){
	 if(items[i].status != 0){
        items[i].drawable = true;
     }
  }
 }
 
 function set_up_scene1point5(){
  
  items.push(new DrawableBox(100,(game_screen.height - 100),180,150,message_array[0], 1, 5, 0, 0))
  items.push(new DrawableBox(200,(game_screen.height - 200),180,150,message_array[1], 1, 5, 0, 0))
  items.push(new DrawableBox(300,(game_screen.height - 300),180,150,message_array[2], 1, 5, 0, 0))
  items.push(new DrawableBox(400,(game_screen.height - 400),180,150,message_array[3], 1, 5, 0, 0))

}
  

//This will set up the second scene
// posx, posy, sizex, sizey, colour, status, type, url, id
function set_up_scene2(){
  for(var i=0; i<items.length; i++){
	 if(items[i].status == 1 && items[i].type == 5){
        items[i].drawable = false;
     }
  }
  
  items.push(new DrawableBox(650,(game_screen.height - 390),200,50,"I will reason with the zombies!", 0, 5, 0, 1))	
  items.push(new DrawableBox(100,(game_screen.height - 410),200,50,"I want to cry...", 0, 5, 0, 2))
  items.push(new DrawableBox(500,(game_screen.height - 450),200,50,"I'm blocking the windows!", 0, 5, 0, 3))
  items.push(new DrawableBox(350,(game_screen.height - 350),200,50,"I have to call mum...", 0, 5, 0, 4))
  items.push(new DrawableBox(300,(game_screen.height - 420),200,50,"I'm gonna kill 'em all!", 0, 5, 0, 5))
}
 
function set_up_scene1point5(){
  if(we_dont_want_dancing_boxes){
    we_dont_want_dancing_boxes = false
    items.push(new DrawableBox(100+getRandomInt(-15,15),(game_screen.height - getRandomInt(385,415)),210,180,message_array[0], 1, 5, 0, 0))
    items.push(new DrawableBox(300+getRandomInt(-15,15),(game_screen.height - getRandomInt(385,415)),210,180,message_array[1], 1, 5, 0, 0))
    items.push(new DrawableBox(500+getRandomInt(-15,15),(game_screen.height - getRandomInt(385,415)),210,180,message_array[2], 1, 5, 0, 0))
    items.push(new DrawableBox(700+getRandomInt(-15,15),(game_screen.height - getRandomInt(385,415)),210,180,message_array[3], 1, 5, 0, 0))
  }
}
 
function set_up_scenePUB(){
  items.push(new DrawableBox(100+getRandomInt(-15,15),(game_screen.height - getRandomInt(385,415)),180,180,message_array[0], 1, 5, 0, 0))
  items.push(new DrawableBox(300+getRandomInt(-15,15),(game_screen.height - getRandomInt(385,415)),180,180,message_array[1], 1, 5, 0, 0))
  items.push(new DrawableBox(500+getRandomInt(-15,15),(game_screen.height - getRandomInt(385,415)),180,180,message_array[2], 1, 5, 0, 0))
  items.push(new DrawableBox(700+getRandomInt(-15,15),(game_screen.height - getRandomInt(385,415)),180,180,message_array[3], 1, 5, 0, 0))
}

 

function set_up_scene3(){
	resolve_characters_plan_2_outcome()
  for(var i=0; i<items.length; i++){
	 if(items[i].type == 5){
        items[i].drawable = false;
     }
  }
  if(we_dont_want_supermans){
  we_dont_want_supermans = false
  move_individual(characters[1], 0, -80);
      move_individual(characters[2], -100, 0);
      move_individual(characters[3], -100, -50);
  }
   
}
 
function hide_characters(){
	for(var i = 0; i < characters.length; i++){
		if(characters[i].drawable){
			characters[i].drawable = false;
		}
  }
} 

function move_individual(x, posx, posy){
      x.posx += posx
      x.posy += posy
      if(x.type.head != -1){
        items[x.type.head].posx += posx
        items[x.type.head].posy += posy
      }
      if(x.type.lefth != -1){
        items[x.type.lefth].posx += posx
        items[x.type.lefth].posy += posy
      }
      if(x.type.righth != -1){
        items[x.type.righth].posx += posx
        items[x.type.righth].posy += posy
      }
      if(x.type.torso != -1){
        items[x.type.torso].posx += posx
        items[x.type.torso].posy += posy
      }
      if(x.type.feet != -1){
        items[x.type.feet].posx += posx
        items[x.type.feet].posy += posy
      }
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
//---------------------------------------------------------------------------------------------------------//
// this function should resolve the planning stage in a similar function
function resolve_characters_plan_2_outcome(){
	// this function will take each character left and evaluate their chances according to their idea.
	for (i = 0; i < characters.length; i++){	
	if ( characters[i].type.balloon != -1){
		index = characters[i].type.balloon
		// this is story 1
      if(index == 1){
        if (char_hps[i] < 10){
			characters[i].drawable = false
			kill_individual(characters[i])
			message_array[i] = character_names[i] + " joined the retched ranks after their reasonable arguments were rebutted by the horde"
		} else {
			message_array[i] = character_names[i] + "'s reasonable remarks turned and routed the stinking zombie ranks"
		}
	// this is story 2
      }else if (index == 2){
		if (char_hps[i] > 5 && char_hps[i] < 15){
			message_array[i] = character_names[i] + " didn't realise that crying was the zombies only weakness, it took weeks to clear the corpses"
		} else {
			characters[i].drawable = false
			kill_individual(characters[i])
			message_array[i] = character_names[i] + "'s tears served only to make the zombies meal more moist"
		}
		// this is story 2
      }else if (index == 3){
		if (char_hps[i] > 15){
			message_array[i] = character_names[i] + "'s quick thinking allowed him to sit out the tragedy playing Trial 'n Error"
		} else {
			characters[i].drawable = false
			kill_individual(characters[i])
			message_array[i] = character_names[i] + " did a great job boarding the windows, alas they were eaten by zombie moles"
		}
		// this is story 2
      }else if (index == 4){
		if (char_hps[i] % 2 == 0){
			message_array[i] = character_names[i] + "'s call for help reached the A-TEAM there were explosions and beer, many fools were pitied"
		} else {
			characters[i].drawable = false
			kill_individual(characters[i])
			message_array[i] = "While searching for signal " + character_names[i] + " was mistaken for a zombie by a super awesome attack choppa"
		}
		}else if (index == 5){
		if (char_hps[i] > 25){
			message_array[i] = character_names[i] + " went an a super awesome killing spree, earning themselves a place among the most famous zombie slayers"
		} else {
			characters[i].drawable = false
			kill_individual(characters[i])
			message_array[i] = character_names[i] + " only experience in combat was playing Call of BattleField; when confronted by the horde the obvious happened"
		}
      }else{
		// do something to the array
		// leave the message as is from previous round
      }
	}
	}
}

// this function needs to be called in pick scenario in GGJ.js
function resolve_characters_equip_2_plan(){
	// this function will take each character and evaluate their chance of living
	// for each character
	for (i=0; i < characters.length; i++){
		char_hps[i] = 0
		var number = 0
		var first_item = ""
		var second_item = ""
		var message = ""
		// check what equipment they have
		if (characters[i].type.head != -1){
			// id of the item
			number = items[characters[i].type.head].id
			// is it the first item, add to the item string depending on result
			if (first_item == ""){
				first_item = all_items[number].id
			} else {
				second_item =  all_items[number].id
			}
			char_hps[i] = char_hps[i] + all_items[number].hp
		}
		
		if (characters[i].type.lefth != -1){
			// id of the item
			number = items[characters[i].type.lefth].id
			// is it the first item, add to the item string depending on result
			if (first_item == ""){
				first_item = all_items[number].id
			} else {
				second_item =  all_items[number].id
			}
			char_hps[i] = char_hps[i] + all_items[number].hp
		}
		
		if (characters[i].type.righth != -1){
			// id of the item
			number = items[characters[i].type.righth].id
			// is it the first item, add to the item string depending on result
			if (first_item == ""){
				first_item = all_items[number].id
			} else {
				second_item =  all_items[number].id
			}
			char_hps[i] = char_hps[i] + all_items[number].hp
		}
		
		if (characters[i].type.torso != -1){
			// id of the item
			number = items[characters[i].type.torso].id
			// is it the first item, add to the item string depending on result
			if (first_item == ""){
				first_item = all_items[number].id
			} else {
				second_item = all_items[number].id
			}
			char_hps[i] = char_hps[i] + all_items[number].hp
		}
		
		if (characters[i].type.feet != -1){
			// id of the item
			number = items[characters[i].type.feet].id
			// is it the first item, add to the item string depending on result
			if (first_item == ""){
				first_item = all_items[number].id
			} else {
				second_item = all_items[number].id
			}
			char_hps[i] = char_hps[i] + all_items[number].hp
		}
		
		// the char should die unless all the others are dead
		if (char_hps[i] < 0 && (characters[0].drawable == true || characters[1].drawable == true || characters[2].drawable == true)){
			// kill the character
			characters[i].drawable = false
			kill_individual(characters[i])
			if ( second_item == "") {
				message = character_names[i] + message_neg_0[getRandomInt(0, character_names.length-1)] + first_item + " was " + message_neg_1[getRandomInt(0, character_names.length-1)]
			} else {
				message = character_names[i] + message_neg_0[getRandomInt(0, character_names.length-1)] + first_item + " and the " + second_item + " were " + message_neg_1[getRandomInt(0, character_names.length-1)]
			}
			message_array.push(message)
		} else {
			if ( second_item == "") {
				message = character_names[i] + message_pos_0[getRandomInt(0, character_names.length-1)] + first_item + " that was " + message_pos_1[getRandomInt(0, character_names.length-1)]
			} else {
				message = character_names[i] + message_pos_0[getRandomInt(0, character_names.length-1)] + first_item + " and the " + second_item + " which were " + message_pos_1[getRandomInt(0, character_names.length-1)]
			}
			message_array.push(message)
		}
	}
  
  game_screen.cutscene = true
}


function get_story_opening(){
	if(game_screen.story == "Zombie"){
	var story_part =
	"The night was neither dark, and nor was it stormy. In fact it was just cold and raining; for it was the first night of the 2015 Global Game Jam."
	return story_part
	}
	else{
	var story_part =
	"The 42nd floor of the Huertas Delgado Group Skyscraper holds 20 Million in diamonds, owned by Mr. Huertas Delgado."
	return story_part
	}
}

function get_story_change(){
if(game_screen.story == "Zombie"){
	var story_part =
	"At roughly one in the morning, one of our four nerds see a tweet stating that zombies had broken out in London (or vice versa) and were now rampaging!"
	return story_part
	}
	else{
	var story_part =
	"Luckily for us, there is also some 'Celebration' in progress..."
	return story_part
	}
}

function get_story_development(){
if(game_screen.story == "Zombie"){
	var story_part =
	"36 and a half outrageous hours later our four nerds found themselves resting deep (so deep) in Hampstead Heath. One nerd looks to the others and asks 'What do we do now?'"
	return story_part
    }
	else{
	var story_part =
	"If we can get to all the alarm boxes without being detected, the vault will open and will relieve Mr. Huertas Delgado of his wealth without having to fire a shot"
	return story_part
	}
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

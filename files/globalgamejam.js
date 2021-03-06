//RELEASING THE BUTTON OF THE MOUSE
var balloon_clicked = 0

function releasing_click_up() {
  //obtain total time
  var angle = Math.atan(mouse_position.y/mouse_position.x)
  var intensity = time*2
  var set_up_characters = {}
  
  if(mouse_position.dragging > -1){
    //check that effectively is over some character
    check_picked_charactert()
    if(mouse_position.character != -1){
      //check that it can be assigned that item
      var item = items[mouse_position.dragging]
      var character = characters[mouse_position.character]
      item.status = 1
      //Check what type of object is
      if(item.type == 0){ //head
        if(character.type.num_avalaible > 0 && character.type.head == -1){
        num_rest_items--
          item.posx = character.posx - 5 + all_items[item.id].offsetx
          item.posy = character.posy - character.sizey/2 - 5 + all_items[item.id].offsety
          character.type.head = mouse_position.dragging
          character.type.num_avalaible--
        } else{
          item.status = 0
          item.posx = 50 + mouse_position.dragging*50
          item.posy = 450
        }
      }
      else if(item.type == 1){ //lefthand
        if(character.type.num_avalaible > 0 && character.type.lefth == -1){
        num_rest_items--
          item.posx = character.posx + character.sizex + all_items[item.id].offsetx
          item.posy = character.posy + 15+ all_items[item.id].offsety
          character.type.lefth = mouse_position.dragging
          character.type.num_avalaible--
        } else{
          item.status = 0
          item.posx = 50 + mouse_position.dragging*50
          item.posy = 450
        }
      }
      else if(item.type == 2){ //righthand
        if(character.type.num_avalaible > 0 && character.type.righth == -1){
        num_rest_items--
          item.posx = character.posx - character.sizex + all_items[item.id].offsetx
          item.posy = character.posy + 15+ all_items[item.id].offsety
          character.type.righth = mouse_position.dragging
          character.type.num_avalaible--
        } else{
          item.status = 0
          item.posx = 50 + mouse_position.dragging*50
          item.posy = 450
        }
      }
      else if(item.type == 3){ //torso
        if(character.type.num_avalaible > 0 && character.type.torso == -1){
        num_rest_items--
          item.posx = character.posx + all_items[item.id].offsetx
          item.posy = character.posy - character.sizey/2 + 10+ all_items[item.id].offsety
          character.type.torso = mouse_position.dragging
          character.type.num_avalaible--
        } else{
          item.status = 0
          item.posx = 50 + mouse_position.dragging*50
          item.posy = 450
        }
      }
      else if(item.type == 4){ //feet
        if(character.type.num_avalaible > 0 && character.type.feet == -1){
        num_rest_items--
          item.posx = character.posx - 5 + all_items[item.id].offsetx
          item.posy = character.posy + character.sizey + 14+ all_items[item.id].offsety
          character.type.feet = mouse_position.dragging
          character.type.num_avalaible--
        } else{
          item.status = 0
          item.posx = 50 + mouse_position.dragging*50
          item.posy = 450
        }
      }
      else if(item.type == 5){ //balloon
        if(character.type.balloon == -1){
          item.posx = character.posx + character.sizex/2 + 40;
          item.posy = character.posy - character.sizey - 30;
          character.type.balloon = item.id;
          
          balloon_clicked += 1;
          var count = 0;
          for(var a = 0; a < characters.length; a++){
            if(characters[a].drawable)
              count++
          }
          
          if(count == balloon_clicked){
            game_screen.cutscene_pos=6
            game_screen.cutscene = true
          }
        } else{
          item.status = 0;
          item.posx = 50 + mouse_position.dragging*50;
          item.posy = 450;
        }
      }
    }
    mouse_position.dragging = -1
    mouse_position.character = -1
  }
  
  control.move = true
  time = 0
  mouse_position.launching = false
  if(game_screen.cutscene_pos==0){
	update_counter_items()
  }
}

function update_counter_items(){		
	ui_context.clearRect(0, 0, game_screen.width, game_screen.height)
    ui_context.fillText("Take arms! Equip the nerds with items...if you dare.		               Items left:" + num_rest_items ,30, ui_canvas.height/2);
}

//CLICKING DOWN THE BUTTON FROM WEB
function clicking_down_button() {
  if(game_screen.cutscene){
    game_screen.cutscene_pos++
  }else{
    mouse_position.launching = true
    var e = window.event;
    viewportwidth = window.innerWidth
    mouse_position.x = 400 + e.clientX - (viewportwidth/2);
    mouse_position.y = game_screen.height - e.clientY + 10;
    
    //Check object!
    check_picked_object()
  }
}

//Other functions
//This is to pick an object
function check_picked_object(){
  var num_items = items.length
  var item
  for(var i = 0; i < num_items; i++){
    item = items[i]
    var x1 = item.posx - (item.sizex/2) - 5
    var x2 = item.posx + (item.sizex/2) +5
    var y1 = game_screen.height - item.posy - (item.sizey/2) - 5
    var y2 = game_screen.height - item.posy + (item.sizey/2) + 5
    //alert(y1 + "..." + mouse_position.y + "..." + y2 + "..." )
    //Check if the object is pickable
   if(item.status == 0)
      if(mouse_position.x > x1 && 
         mouse_position.x < x2 &&
         mouse_position.y > y1 &&
         mouse_position.y < y2 ){
          mouse_position.dragging = i
          play_single_sound('Ding')
          return
        }
  }
  play_single_sound('Bounce')
}
//This is to pick a character
function check_picked_charactert(){
  var num_characters = characters.length
  var character
  for(var i = 0; i < num_characters; i++){
    character = characters[i]
    var x1 = character.posx - (character.sizex) - 5
    var x2 = character.posx + (character.sizex) +5
    var y1 = game_screen.height - character.posy - (character.sizey) - 5
    var y2 = game_screen.height - character.posy + (character.sizey) + 5
    //alert(y1 + "..." + mouse_position.y + "..." + y2 + "..." )
    //Check if the object is pickable
   if(character.status == 0)
      if(mouse_position.x > x1 && 
         mouse_position.x < x2 &&
         mouse_position.y > y1 &&
         mouse_position.y < y2 ){
          mouse_position.character = i
          aux_pos.x = character.posx
          aux_pos.y = character.posy	
		  play_single_sound('Pop')
          return
        }
  }
}

//move objects
function dragging_around_things(){
  if(mouse_position.dragging > -1){
    var e = window.event;
    viewportwidth = window.innerWidth
    mouse_position.x = 400 + e.clientX - (viewportwidth/2);
    mouse_position.y = game_screen.height - e.clientY + 10;
    var item = items[mouse_position.dragging]
    item.posx = mouse_position.x
    item.posy = game_screen.height - mouse_position.y
  }
}

function randStory(){
  var rand = 0;
  if(rand == 0){
  game_screen.story = "Zombie"
  }
  else{
  game_screen.story = "Heist"
  } 
  // start the music
  
  play_single_sound('first_song');
  }
  

//This function is the one starting up the game
//This function will only load the game the first time
function init_game() {
set_up_characters = true
  clock_init()
  //generate the random story
  
  game_screen.cutscene = false
  game_screen.ending = false
  game_screen.cutscene_pos = 0
  dif_time = 0.12
  mouse_position.dragging = -1
  mouse_position.character = -1	
  console.log("the body has loaded")
  game_screen.context = document.getElementById("mycanvas").getContext("2d")
  game_screen.width = 800
  game_screen.height = 500
  setInterval(render,  20)
  
  //Start up screen
  // Pick type of story
  // Then load the appropriate level1
  set_up_sceen1()
  
  // start the music
  play_single_sound('second_song');
}

//This is the render function. It will be called each frame
function render() {
  var ctxt = game_screen.context
  //console.log("rendering")
  
  ctxt.clearRect(0, 0, game_screen.width, game_screen.height)
  ctxt.save()
  draw_background()
  draw_characters()
  draw_items()
  draw_frontground()
  
  if(game_screen.cutscene)
    draw_cutscene()
  
  ctxt.restore()
  ctxt.save()
}

function draw_background(){
  var ctxt = game_screen.context
    var background_image = new Image()
	if(!game_screen.end_credits){
    background_image.src = game_screen.backgroundurl
	}
	else{
	 background_image.src = './files/pictures/pub_back.png'
	}
    ctxt.save()
    ctxt.drawImage(background_image, 0, 0,800, 500)
    ctxt.restore()
}

function draw_frontground(){
if(!game_screen.end_credits){
  if(game_screen.backgroundurl2 != -1){
  var ctxt = game_screen.context
    var background_image = new Image()
    background_image.src = game_screen.backgroundurl2
    ctxt.save()
    ctxt.drawImage(background_image, 0, 0,800, 500)
    ctxt.restore()
	}
  }
  else{
   var ctxt = game_screen.context
    var background_image = new Image()
    background_image.src = './files/pictures/pub_front.png'
    ctxt.save()
    ctxt.drawImage(background_image, 0, 0,800, 500)
    ctxt.restore()
  }
}


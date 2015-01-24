
//RELEASING THE BUTTON OF THE MOUSE
function releasing_click_up() {
  //obtain total time
  var angle = Math.atan(mouse_position.y/mouse_position.x)
  var intensity = time*2
  
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
          item.posx = character.posx
          item.posy = character.posy - character.sizey - 10
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
          item.posx = character.posx + character.sizex
          item.posy = character.posy + 15
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
          item.posx = character.posx - character.sizex
          item.posy = character.posy + 15
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
          item.posx = character.posx
          item.posy = character.posy - character.sizey/2 + 10
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
          item.posx = character.posx
          item.posy = character.posy + character.sizey
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
          item.posx = character.posx + character.sizex/2
          item.posy = character.posy - character.sizey - 55
          character.type.balloon = 1
        } else{
          item.status = 0
          item.posx = 50 + mouse_position.dragging*50
          item.posy = 450
        }
      }
    }
    mouse_position.dragging = -1
    mouse_position.character = -1
  }
  
  control.move = true
  time = 0
  mouse_position.launching = false
}

//CLICKING DOWN THE BUTTON FROM WEB
function clicking_down_button() {
  mouse_position.launching = true
    var e = window.event;
    viewportwidth = window.innerWidth
    mouse_position.x = 400 + e.clientX - (viewportwidth/2);
    mouse_position.y = game_screen.height - e.clientY + 10;
    
    //Check object!
    check_picked_object()
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

//This function is the one starting up the game
//This function will only load the game the first time
function init_game() {
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
  play_single_sound('in_the_back_room')
}


//This is the render function. It will be called each frame
function render() {
  var ctxt = game_screen.context
  //console.log("rendering")
  ctxt.clearRect(0, 0, game_screen.width, game_screen.height)
  ctxt.save()
  
  draw_characters()
  draw_items()
  
  ctxt.restore()
  ctxt.save()
  ctxt.font = "14px Arial"
  viewportwidth = window.innerWidth
  ctxt.fillText("Char1.head => " + characters[1].type.head, 20, 20)
  
}

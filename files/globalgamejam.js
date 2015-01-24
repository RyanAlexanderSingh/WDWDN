
//RELEASING THE BUTTON OF THE MOUSE
function releasing_click_up() {
  //obtain total time
  var angle = Math.atan(mouse_position.y/mouse_position.x)
  var intensity = time*2
  
  if(mouse_position.dragging > -1){
    //check that it can be assigned that item
    items[mouse_position.dragging].status = 1
    mouse_position.dragging = -1
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
          aux_pos.x = item.posx
          aux_pos.y = item.posy
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

//Draw characters
function draw_characters(){
  var num_characters = characters.length;
  for(var i = 0; i < num_characters; i++){
    DrawBox(game_screen,characters[i])
  }
}

//Draw items
function draw_items(){
  var num_items = items.length;
  for(var i = 0; i < num_items; i++){
    DrawBox(game_screen,items[i])
  }
}

//This function is the one starting up the game
//This function will only load the game the first time
function init_game() {
  dif_time = 0.12
  console.log("the body has loaded")
  game_screen.context = document.getElementById("mycanvas").getContext("2d")
  game_screen.width = 800
  game_screen.height = 500
  setInterval(render,  20)
  
  characters.push(new DrawableBox(100, (game_screen.height - 200), 30 ,80, "#ff0000"),0)
  characters.push(new DrawableBox(200, (game_screen.height - 150), 30 ,70, "#ff5500"),0)
  characters.push(new DrawableBox(400, (game_screen.height - 200), 30 ,80, "#ff5500"),0)
  characters.push(new DrawableBox(500, (game_screen.height - 150), 30 ,70, "#ff5500"),0)
  
  items.push(new DrawableBox(50,  (game_screen.height - 20), 10,5 ,"#0000ff",0,0))
  items.push(new DrawableBox(500,  (game_screen.height - 400), 5,10 ,"#0000ff",0,0))
  items.push(new DrawableBox(30,  (game_screen.height - 10), 7,7 ,"#00ff00",0,1))
  items.push(new DrawableBox(400,  (game_screen.height - 50), 5,5 ,"#00ff00",0,1))
  items.push(new DrawableBox(150,  (game_screen.height - 222), 20,5 ,"#ff5500",0,2))
  
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
  ctxt.fillText(mouse_position.x + " " + mouse_position.y, 20, 20)
  
}

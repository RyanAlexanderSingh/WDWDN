
//VARIABLES
var viewportwidth
var game_screen = {}
var cat = {}
var dog = {}
var distance = {}
var control = {}
var mouse_position = {}
var time = {}
var items = []
var characters = []


//RELEASING THE BUTTON OF THE MOUSE
function releasing_click_up() {
  //obtain total time
  var angle = Math.atan(mouse_position.y/mouse_position.x)
  var intensity = time*2
  
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
    
}

//Other functions

function check_picked_object(){
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
  
  characters.push(new DrawableBox(100, (game_screen.height - 200), 30 ,80, "#ff0000"))
  characters.push(new DrawableBox(200, (game_screen.height - 150), 30 ,70, "#ff5500"))
  characters.push(new DrawableBox(400, (game_screen.height - 200), 30 ,80, "#ff5500"))
  characters.push(new DrawableBox(500, (game_screen.height - 150), 30 ,70, "#ff5500"))
  
  items.push(new DrawableBox(50,  (game_screen.height - 20), 5,5 ,"#ff5500"))
  items.push(new DrawableBox(500,  (game_screen.height - 400), 5,5 ,"#ff5500"))
  items.push(new DrawableBox(30,  (game_screen.height - 1), 5,5 ,"#ff5500"))
  items.push(new DrawableBox(400,  (game_screen.height - 2), 5,5 ,"#ff5500"))
  items.push(new DrawableBox(150,  (game_screen.height - 222), 5,5 ,"#ff5500"))
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

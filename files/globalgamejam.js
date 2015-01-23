
//VARIABLES
var viewportwidth
var game_screen = {}
var cat = {}
var dog = {}
var distance = {}
var control = {}
var mouse_position = {}
var time = {}
var character1
var character2
var character3
var character4
var character5


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
    time = 0
    //initialize counting time
}

//Other functions

//This function is the one starting up the game
//This function will only load the game the first time
function init_game() {
  dif_time = 0.12
  console.log("the body has loaded")
  game_screen.context = document.getElementById("mycanvas").getContext("2d")
  game_screen.width = 800
  game_screen.height = 500
  setInterval(render,  20)
  
  character1 = new DrawableBox(100, (game_screen.height - 200), 30 ,80, "#ff0000")
  character2 = new DrawableBox(200, (game_screen.height - 150), 30 ,70, "#ff5500")
  character3 = new DrawableBox(400, (game_screen.height - 200), 30 ,80, "#ff5500")
  character4 = new DrawableBox(500, (game_screen.height - 150), 30 ,70, "#ff5500")
  
}


//This is the render function. It will be called each frame
function render() {
  var ctxt = game_screen.context
  //console.log("rendering")
  ctxt.clearRect(0, 0, game_screen.width, game_screen.height)
  ctxt.save()
  
  
  DrawBox(game_screen, character4)
  DrawBox(game_screen, character3)
  DrawBox(game_screen, character2)
  DrawBox(game_screen, character1)
  
  ctxt.restore()
  ctxt.save()
  ctxt.font = "14px Arial"
  viewportwidth = window.innerWidth
  ctxt.fillText("Strength! ->" + (10), 20, 20)
  ctxt.fillText(mouse_position.x + " " + mouse_position.y, 20, 40)
  
}

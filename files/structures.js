// This file will contain some of the basic structures (as functions)

//VARIABLES
var viewportwidth
var game_screen = {}
var distance = {}
var control = {}
var mouse_position = {}
var time = {}
var items = []
var characters = []
var aux_pos = {}

//To create 'classes' in javascript an easy way is to create classes

//This function is going to be something that can be draw
function DrawableBox (posx, posy, sizex, sizey, colour, status, type){
  this.posx = posx
  this.posy = posy
  this.sizex = sizex
  this.sizey = sizey 
  this.colour = colour //colour? Maybe not used later!
  this.status = status //will represent so many different things...
  this.type = type //will represent so many different things...
}

//-1 means that he can receive that object. 
//-2 means that he cannot receive object of that type
// num_avalaible is the number of items that you can receive
function Equipment(num_avalaible){
  this.head = -1
  this.lefth = -1
  this.righth = -1
  this.torso = -1
  this.feet = -1
  this.balloon = -1
  this.num_avalaible = num_avalaible
}

//Status for character
// 0 : sad
// 1 : happy
// 2 : neutral
// 3 : out
// 4 : stressed
//Type for character
// some info about who he is 

//Status for items
// 0 : draggable
// 1 : not_draggable
//Status for items
// 0 : head
// 1 : lefthand
// 2 : righthand
// 3 : torso
// 4 : feet
// 5 : balloon

//This function draws a box on the screen. Receives a context (where to draw) and a box
function DrawBox (screen, box){
  var ctxt = screen.context
  ctxt.save()
  ctxt.translate(box.posx, box.posy)
  ctxt.beginPath()
  ctxt.moveTo(-box.sizex, - box.sizey)
  ctxt.lineTo( box.sizex, -box.sizey)
  ctxt.lineTo( box.sizex,  box.sizey)
  ctxt.lineTo(-box.sizex,  box.sizey)
  ctxt.closePath()
  ctxt.fillStyle = box.colour
  ctxt.fill()
  ctxt.stroke()
  ctxt.restore()
}

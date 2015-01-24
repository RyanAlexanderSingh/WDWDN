// This file will contain some of the basic structures (as functions)

//VARIABLES
var viewportwidth
var game_screen = {}
var distance = {}
var control = {}
var mouse_position = {}
var time = {}
var items = []
var num_items
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

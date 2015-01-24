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
  this.drawable = true
  this.url = -1
}

function DrawingInfo(colorA, colorB, colorC, colorD, colorE){
  this.a = colorA
  this.b = colorB
  this.c = colorC
  this.d = colorD
  this.e = colorE
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
  if(box.colour == -1){
    var hat_image = new Image()
    hat_image.src = box.url
    ctxt.save()
    ctxt.drawImage(hat_image, box.posx - box.sizex, box.posy - box.sizey,box.sizex*2, box.sizey*2)
    ctxt.restore()
  }
  else{
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
}

//This function draws a box on the screen. Receives a context (where to draw) and a box
function DrawCharacter (screen, box){
  var ctxt = screen.context
  ctxt.save()
  ctxt.translate(box.posx, box.posy)
  ctxt.beginPath()
  ctxt.moveTo(-box.sizex/2, - box.sizey)
  ctxt.lineTo( box.sizex/2, -box.sizey)
  ctxt.lineTo( box.sizex/2, -box.sizey/2)
  ctxt.lineTo(-box.sizex/2, -box.sizey/2)
  ctxt.closePath()
  ctxt.fillStyle = box.colour.a
  ctxt.fill()
  ctxt.stroke()
  ctxt.beginPath()
  ctxt.moveTo(box.sizex, -box.sizey/2)
  ctxt.lineTo(-box.sizex, -box.sizey/2)
  ctxt.lineTo(-box.sizex,  box.sizey/4)
  ctxt.lineTo(-3*box.sizex/4,  box.sizey/4)
  ctxt.lineTo(-3*box.sizex/4,  -box.sizey/3)
  ctxt.lineTo(-2*box.sizex/3,  -box.sizey/3)
  ctxt.lineTo(-2*box.sizex/3,  box.sizey/4)
  ctxt.lineTo(2*box.sizex/3,  box.sizey/4)
  ctxt.lineTo(2*box.sizex/3,  -box.sizey/3)
  ctxt.lineTo(3*box.sizex/4,  -box.sizey/3)
  ctxt.lineTo(3*box.sizex/4,  box.sizey/4)
  ctxt.lineTo( box.sizex,  box.sizey/4)
  ctxt.closePath()
  ctxt.fillStyle = box.colour.b
  ctxt.fill()
  ctxt.stroke()
  ctxt.beginPath()
  ctxt.moveTo(box.sizex/5, -box.sizey/2)
  ctxt.lineTo(-box.sizex/5, -box.sizey/2)
  ctxt.lineTo(-box.sizex/6,  box.sizey/4)
  ctxt.lineTo( box.sizex/6,  box.sizey/4)
  ctxt.closePath()
  ctxt.fillStyle = box.colour.c
  ctxt.fill()
  ctxt.stroke()
  ctxt.beginPath()
  ctxt.moveTo(-3*box.sizex/5,  box.sizey/4)
  ctxt.lineTo( 3*box.sizex/5,  box.sizey/4)
  ctxt.lineTo( 3*box.sizex/5,  box.sizey)
  ctxt.lineTo( 2*box.sizex/6,  box.sizey)
  ctxt.lineTo( 0, box.sizey/4+20)
  ctxt.lineTo(-box.sizex/3,  box.sizey)
  ctxt.lineTo(-3*box.sizex/5,  box.sizey)
  ctxt.closePath()
  ctxt.fillStyle = box.colour.d
  ctxt.fill()
  ctxt.stroke()
  ctxt.restore()
}

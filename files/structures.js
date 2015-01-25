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
var balloon_image

//To create 'classes' in javascript an easy way is to create classes

function ItemInfo (id, url, type, sizex, sizey, offsetx, offsety, hp ){
  this.id = id
  this.url = url
  this.type = type
  this.sizex = sizex
  this.sizey = sizey
  this.offsetx = offsetx
  this.offsety = offsety
  this.selected = false
  this.hp = hp
}

//This function is going to be something that can be draw
function DrawableBox (posx, posy, sizex, sizey, colour, status, type, url, id){
  this.posx = posx
  this.posy = posy
  this.sizex = sizex
  this.sizey = sizey 
  this.colour = colour //colour? Maybe not used later!
  this.status = status //will represent so many different things...
  this.type = type //will represent so many different things...
  this.drawable = true
  this.id = id
  this.url = url
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
// Has the info of the equipment of the character

//Status for items
// 0 : draggable
// 1 : not_draggable
//type for items
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
  var head_image = new Image()
  head_image.src = box.url
  ctxt.save()
  ctxt.drawImage(head_image, box.posx - box.sizex*1.5/2, box.posy - box.sizey,box.sizex*1.5, box.sizey)
  ctxt.restore()
  ctxt.save()
  ctxt.translate(box.posx, box.posy)
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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Draw characters
function draw_characters(){
  var num_characters = characters.length;
  for(var i = 0; i < num_characters; i++){
    if(characters[i].drawable)
      DrawCharacter(game_screen,characters[i])
  }
}

//Draw items
function draw_items(){
  var num_items = items.length;
  for(var i = 0; i < num_items; i++){
    if(items[i].drawable)
    {
     if(items[i].type == 5)
      draw_balloon(items[i].posx,items[i].posy,items[i].sizex,items[i].sizey, items[i].colour)
     else
      DrawBox(game_screen,items[i])
    }
  }
}

function draw_balloon(x,y,sizex,sizey,text){
    balloon_image = new Image()
    balloon_image.src = "files/pictures/balloon.png"
    var ctxt = game_screen.context
  
    ctxt.save()
    ctxt.drawImage(balloon_image, x - sizex/2, y -sizey/2 , sizex, sizey)
    ctxt.restore()
    
		// colour the story text
		ctxt.font = "18px Calibri";
		ctxt.fillStyle = "#000000"
    ctxt.save()
    var text_lines = getLines(ctxt, text, sizex-5)
		for (i = 0; i < text_lines.length; i++){
			ctxt.fillText(text_lines[i], x - sizex/2 + 10, y + 35 * i)
			}
    ctxt.restore()
}

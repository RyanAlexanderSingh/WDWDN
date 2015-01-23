// This file will contain some of the basic structures (as functions)

//To create 'classes' in javascript an easy way is to create classes

//This function is going to be something that can be draw
function DrawableBox (posx, posy, sizex, sizey, colour){
  this.posx = posx
  this.posy = posy
  this.sizex = sizex
  this.sizey = sizey
  this.colour = colour
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
console.log("running script")

var viewportwidth
var cat = {}
var dog = {}
var distance = {}
var control = {}
var mouse_position = {}
var time = {}

function release_fun() {
  //obtain total time
  var angle = Math.atan(mouse_position.y/mouse_position.x)
  var intensity = time*2
  
  cat.vx = intensity * Math.cos(angle)
  cat.vy = intensity * Math.sin(angle)
  control.move = true
  time = 0
  mouse_position.launching = false
}

function obtain_mouse_position_cat_dog() {
  mouse_position.launching = true
    var e = window.event;
    mouse_position.inix = cat.x;
    mouse_position.iniy = cat.y;
    viewportwidth = window.innerWidth
    mouse_position.x = e.clientX- (viewportwidth-400)/2;
    mouse_position.y = cat.height -e.clientY;
    time = 0
    //initialize counting time
}

function cat_dog_reset(){
  dog.x = cat.width - 10
  dog.y = 10
  cat.x = 10
  cat.y = 10
  cat.vx = 50
  cat.vy = 75
  dog.vx = -25
  dog.vy = 75
  cat.moving = true
  control.move = false
}

function reach_dog(){
  distance.x = Math.abs(cat.x - dog.x)
  distance.y = Math.abs(cat.y - dog.y)
  return (distance.x < 2 && distance.y < 2)
}

function render() {
  var ctxt = cat.context
  //console.log("rendering")
  ctxt.clearRect(0, 0, cat.width, cat.height)
  ctxt.clearRect(0, 0, cat.width, cat.height)
  ctxt.save()
  //Draw dog (11, 10.75)
  ctxt.translate(dog.x, cat.height -dog.y)
  ctxt.beginPath()
  ctxt.moveTo(-10, -10)
  ctxt.lineTo( 10, -10)
  ctxt.lineTo( 10,  10)
  ctxt.lineTo(-10,  10)
  ctxt.closePath()
  ctxt.fillStyle = "#ff0000"
  ctxt.fill()
  ctxt.stroke()
  ctxt.restore()
  
  // Paint mouse helper
  
  if(mouse_position.launching){
    if(time < 50)
      time++
    if(time != 0){
      ctxt.save()
      ctxt.translate(cat.x, cat.height -cat.y)
      ctxt.beginPath()
      ctxt.moveTo(-1, -1)
      mouse_position.x = e.clientX- (viewportwidth-400)/2;
      mouse_position.y = cat.height -e.clientY;
      ctxt.lineTo(mouse_position.x*(time/50), -mouse_position.y*(time/50))
      ctxt.closePath()
      ctxt.stroke()
      ctxt.restore()
    }
  }
  
  ctxt.restore()
  ctxt.save()
  ctxt.translate(cat.x, cat.height -cat.y)
  ctxt.beginPath()
  ctxt.moveTo(-10, -10)
  ctxt.lineTo( 10, -10)
  ctxt.lineTo( 10,  10)
  ctxt.lineTo(-10,  10)
  ctxt.closePath()
  ctxt.fillStyle = "#ffff00"
  ctxt.fill()
  ctxt.stroke()
  ctxt.restore()
  ctxt.font = "14px Arial"
  viewportwidth = window.innerWidth
  ctxt.fillText("Strength! ->" + (time), 20, 20)
  ctxt.fillText(mouse_position.x, 20, 40)
  
  
  if(control.move){
    if(cat.moving){
      cat.x = cat.x + (cat.vx)*dif_time
      cat.y = cat.y + (cat.vy)*dif_time
      cat.vx = cat.vx - cat.y*0.01*dif_time
      cat.vy = cat.vy - 9.8*dif_time
      
      dog.x = dog.x + (dog.vx)*dif_time
      dog.y = dog.y + (dog.vy)*dif_time
      dog.vx = dog.vx - dog.y*0.01*dif_time
      dog.vy = dog.vy - 9.8*dif_time
    }
  }
  cat.moving = !reach_dog()
  
}

function body_has_loaded() {
  dif_time = 0.12
  console.log("the body has loaded")
  cat.context = document.getElementById("mycanvas").getContext("2d")
  cat.angle = 0
  cat.width = 400
  cat.height = 400
  dog.x = cat.width - 10
  dog.y = 10
  cat.x = 10
  cat.y = 10
  cat.vx = 50
  cat.vy = 75
  dog.vx = -25
  dog.vy = 75
  cat.moving = true
  setInterval(render,  20)
  control.move = false
}


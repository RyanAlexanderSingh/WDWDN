//this contains the template functions
//examples; countdown for the bottom canvas

//COUNTDOWN FOR THE UI
function countownOnTimer() {
  //obtain total time
  var ui_canvas = document.getElementById("ui_canvas");
  if(ui_canvas.getContext){
	canvas_context = ui_canvas.getContext("2d");
	doTimer();
  }
}
//INCREMENTALLY MOVE THE BOX BASED ON THE TIMER
function moveBox(){
	canvas_context.fillRect(x_pos, 25, 50, 30);
	x_pos = x_pos + 10;
}
//OUR ACTUAL TIMER
function doTimer(){
x_pos = 0;
timerID = setInterval("moveBox()", 200);
}

function stopTimer(){
	clearInterval(timerID);
}

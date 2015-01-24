//this contains the template functions
//examples; countdown for the bottom canvas

var x_pos = 0;
//COUNTDOWN FOR THE UI
function countownOnTimer() {
  //obtain total time
  var ui_canvas = document.getElementById("ui_canvas");
  if(ui_canvas.getContext){
	canvas_context = ui_canvas.getContext("2d");
	doTimer();
  }
}
//UPDATE LOOP BASED ON THE TIMER
function update(){
	canvas_context.fillRect(x_pos, 25, 5, 30);
	x_pos = x_pos + 10;
	if(x_pos >= ui_canvas.width){
		alert("Times up");
		stopTimer();
	}
}
//OUR ACTUAL TIMER
function doTimer(){
	timerID = setInterval("update()", 200);
	update();
}
//STOP TIMER WHEN THE RECTANGLE HAS HIT THE CANVAS
function stopTimer(){
	clearInterval(timerID);
	window.location.href = "globalgamejam.html";
}

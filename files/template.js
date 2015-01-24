//this contains the template functions
//examples; countdown for the bottom canvas

var x_pos = 0;
//COUNTDOWN FOR THE UI
function init() {	
  //get the canvas for the timer
  var timer_canvas = document.getElementById("timer_canvas");
  if(timer_canvas.getContext){
	canvas_context = timer_canvas.getContext("2d");
	doTimer();
  }
  
}
//UPDATE LOOP
function update(){
    canvas_context.fillStyle = 'red';
	canvas_context.fillRect(x_pos, 10, 5, 30);
	x_pos = x_pos + 10;
	if(x_pos >= timer_canvas.width){
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



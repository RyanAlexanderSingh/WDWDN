//this contains the template functions
//examples; countdown for the bottom canvas

var x_pos = 0;
//COUNTDOWN FOR THE UI
function clock_init() {	
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
		endTimer();
	}
}

//OUR ACTUAL TIMER
function doTimer(){
	timerID = setInterval("update()", 200);
	update();
}

//END THE TIMER AND RUN PREPARE
function endTimer(){
	clearInterval(timerID);
	//Go to next screen
	 game_screen.level++
	pickScenario(game_screen.level)
   
}


function make_splash_img(){
	base_image = new Image();
	base_image.src = './files/pictures/intro_screen.png'
	var can = document.getElementById('index');
    var con = can.getContext('2d');
	var x = can.width;
	var y = can.height;
	base_image.onload = function(){
		con.drawImage(base_image, 0, 0, can.width, can.height);
	};
}



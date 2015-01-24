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
		alert("Times up");
		endTimer();
	}
}

//OUR ACTUAL TIMER
function doTimer(){
	timerID = setInterval("update()", 2000);
	update();
}

//END THE TIMER AND RUN PREPARE
function endTimer(){
	clearInterval(timerID);
	prepare();
}

//STOP TIMER WHEN WE NEED TO PROGRESS TO NEXT LEVEL
function pickScenario(clicked_id){
	if(clicked_id == '1')
	{
		window.location.href = "zombies/equipment.html";
	}	
	if(clicked_id == '2')
	{
		window.location.href = "./prepare.html";
	}	
	if(clicked_id == '3')
	{
		window.location.href = "./outcome.html";
	}	
}

function getLines(ctx, text, maxWidth) {
    var words = text.split(" ");
    var lines = [];
    var currentLine = words[0];

    for (var i = 1; i < words.length; i++) {
        var word = words[i];
        var width = ctx.measureText(currentLine + " " + word).width;
        if (width < maxWidth) {
            currentLine += " " + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    lines.push(currentLine);
    return lines;
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
		// colour the story text
		con.font = "18px Calibri";
		con.fillStyle = "#FFFFFF"
		// print the first part of the story
		var string =  get_story_opening()
		var text_lines = getLines(con, string, 700)
		for (i = 0; i < text_lines.length; i++){
			con.fillText(text_lines[i], 50, 100 + 40 * i)
			}
		// print the story change
		var string =  get_story_change()
		var text_lines = getLines(con, string, 700)
		for (i = 0; i < text_lines.length; i++){
			con.fillText(text_lines[i], 50, 200 + 40 * i)
			}
		// print the story development blah blah blah
		var string =  get_story_development()
		var text_lines = getLines(con, string, 700)
		for (i = 0; i < text_lines.length; i++){
			con.fillText(text_lines[i], 50, 300 + 40 * i)
			}
			
		};
}



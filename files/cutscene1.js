var fadePct = 0;
var end_credits = false;

dayslater2 = new Image();
dayslater2.src = './files/pictures/2dayslater.png'
weekslater21 = new Image();
weekslater21.src = './files/pictures/21WeeksLater.png'
black_image = new Image();
black_image.src = './files/pictures/black_bg.jpg'
end_img = new Image();
end_img.src = './files/pictures/Thankyou.png'

function draw_cutscene(){
  //1 fade to black
  var hello = document.getElementById("mycanvas");
    var con = hello.getContext('2d');
	if(game_screen.cutscene_pos==1){
    con.save();
    con.drawImage(black_image, 0, 0);
  }
  //2 fade to text
  else if(game_screen.cutscene_pos==2){
    con.save();
    con.drawImage(dayslater2, 0, 0);                 
  }
  //3 fade to black
    else if(game_screen.cutscene_pos==3){
    con.save();
    con.drawImage(black_image, 0, 0);
	prescene_two();
	//hide_characters();
  }
  //4 fade to shack
    else if(game_screen.cutscene_pos==4){
	//draw the speech bubbles	
	set_up_scene1point5()
  }
  //5 show balloons  
  else if(game_screen.cutscene_pos==5){
	set_up_scene2() //show the balloons for scene 2
	game_screen.cutscene = false
  }
  else if(game_screen.cutscene_pos==6){
	con.save(); 
	con.drawImage(black_image, 0, 0); //we'll fade the image to black
  }
  else if(game_screen.cutscene_pos==7){	
	con.save();
	con.clearRect(0, 0, game_screen.width, game_screen.height)
    con.drawImage(weekslater21, 0, 0);    //fade to 21 weeks later
 }
  else if(game_screen.cutscene_pos==8){
  set_up_scene3(); //fade to the final scene
  set_up_scenePUB();
  game_screen.end_credits = true;
  //instead of drawing background - draw background and foreground
  }
   else if(game_screen.cutscene_pos==9){
  con.save();
  con.clearRect(0, 0, game_screen.width, game_screen.height)
    con.drawImage(end_img, 0, 0);    //go to thank you
	
	//OUR ACTUAL TIMER
	timerID = setInterval("start_again()", 6000);
  //instead of drawing background - draw background and foreground
 }
 }
 
 function start_again(){
	window.location.href = "index.html";
 }
 
 function animateToBlack(){
	var can = document.getElementById('mycanvas');
	var con = can.getContext('2d');
	if(fadePct > 100){
		return;
	}
	requestAnimationFrame(animateToBlack);
	
    fadePct++;
}
 
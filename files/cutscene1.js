var fadePct = 0;
var end_credits = false;

dayslater2 = new Image();
dayslater2.src = './files/pictures/2dayslater.png'
weekslater21 = new Image();
weekslater21.src = './files/pictures/21WeeksLater.png'
black_image = new Image();
black_image.src = './files/pictures/black_bg.jpg'
pub_image = new Image();
pub_image.src = './files/pictures/pub_back.png'

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
  set_up_scene3();
  game_screen.end_credits = true;
game_screen.cutscene = false
  //instead of drawing background - draw background and foreground
	
  }
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
 
 function draw_black(img, opacity) {
	
    con.restore();
}
 
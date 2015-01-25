var fadePct = 0;

dayslater2 = new Image();
dayslater2.src = './files/pictures/2dayslater.png'
weekslater21 = new Image();
weekslater21.src = './files/pictures/21WeeksLater.png'
black_image = new Image();
black_image.src = './files/pictures/black_bg.jpg'

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
  }
  //4 fade to shack
    else if(game_screen.cutscene_pos==4){
	clean_scene1()
  set_up_scene2()
  game_screen.cutscene = false
  }
  //5 show balloons  
  else if(game_screen.cutscene_pos==5){
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
 
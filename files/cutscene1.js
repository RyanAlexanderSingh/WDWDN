var fadePct = 0;

base_image = new Image();
base_image.src = './files/pictures/intro_screen.png'
black_image = new Image();
black_image.src = './files/pictures/black_bg.jpg'

function process_cutscene(){
  //1 fade to black
  if(game_screen.cutscene_pos==1){

  }
  //2 fade to text
  else if(game_screen.cutscene_pos==2){
  
	
  }
  //3 fade to black
    else if(game_screen.cutscene_pos==3){
  alert("FADE TO BLACK  2 !!!")
  }
  //4 fade to shack
    else if(game_screen.cutscene_pos==4){
      clean_scene1()
  }
  //5 show balloons  
  else if(game_screen.cutscene_pos==5){
  alert("SHOW BALLOONS!!!")
  }
  //6 show balloons  
  else if(game_screen.cutscene_pos==6){
  alert("SHOW MORE BALLOONS!!!")
  }
  //7 start playing
  else if(game_screen.cutscene_pos==7){
    set_up_scene2()
    game_screen.cutscene = false
  }
  //8 next cutscene
  else if(game_screen.cutscene_pos==8){
  alert("FADE TO BLACK  3 !!!")
  }
  //8 next cutscene
  else if(game_screen.cutscene_pos==8){
  alert("FADE TO 21 WEEKS LATER!!!")
  }
  //8 next cutscene
  else if(game_screen.cutscene_pos==8){
  alert("FADE TO BLACK  4 !!!")
  }
  //8 next cutscene
  else if(game_screen.cutscene_pos==8){
  alert("FADE TO PUB!!!")
  }
  //8 next cutscene
  else if(game_screen.cutscene_pos==8){
  alert("FADE TO BLACK  5 !!!")
  }
 }

function draw_cutscene(){
  //1 fade to black
  if(game_screen.cutscene_pos==1){
    var con = document.getElementById("mycanvas").getContext('2d');
    con.save();
    con.drawImage(black_image, 0, 0);
  }
  //2 fade to text
  else if(game_screen.cutscene_pos==2){
  alert("FADE TO 2 DAYS LATER!!!")
	setInterval(render, 20);
	game_screen.backgroundurl2 = "./files/pictures/2dayslater.png";
  }
  //3 fade to black
    else if(game_screen.cutscene_pos==3){
  
  }
  //4 fade to shack
    else if(game_screen.cutscene_pos==4){
  
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
 
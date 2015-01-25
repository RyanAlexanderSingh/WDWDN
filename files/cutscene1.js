
function process_cutscene(){
  //1 fade to black
  if(game_screen.cutscene_pos==1){
  alert("FADE TO BLACK!!!")
  }
  //2 fade to text
  else if(game_screen.cutscene_pos==2){
  alert("FADE TO 2 DAYS LATER!!!")
  }
  //3 fade to black
    else if(game_screen.cutscene_pos==3){
  alert("FADE TO BLACK!!!")
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
    game_screen.cutscene_pos = 0
  }
 }

function draw_cutscene(){
  //1 fade to black
  if(game_screen.cutscene_pos==1){
  
  }
  //2 fade to text
  else if(game_screen.cutscene_pos==2){
  
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
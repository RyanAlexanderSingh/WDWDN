//This will include the basic stages

function set_up_sceen1(){
  characters.push(new DrawableBox(100, (game_screen.height - 200), 30 ,80, "#ff0000",0,new Equipment(2)))
  characters.push(new DrawableBox(200, (game_screen.height - 150), 40 ,70, "#ff5500",0,new Equipment(2)))
  characters.push(new DrawableBox(400, (game_screen.height - 200), 40 ,80, "#ff5500",0,new Equipment(2)))
  characters.push(new DrawableBox(500, (game_screen.height - 150), 30 ,70, "#ff5500",0,new Equipment(2)))
  
  items.push(new DrawableBox(50,  (game_screen.height - 20), 25,20 ,"#0000ff",0,0))
  items.push(new DrawableBox(500,  (game_screen.height - 400), 5,10 ,"#0000ff",0,1))
  items.push(new DrawableBox(30,  (game_screen.height - 10), 7,7 ,"#00ff00",0,2))
  items.push(new DrawableBox(400,  (game_screen.height - 50), 30,10,"#00ff00",0,3))
  items.push(new DrawableBox(300,  (game_screen.height - 50), 30,10 ,"#00ff00",0,3))
  items.push(new DrawableBox(150,  (game_screen.height - 222), 30,10 ,"#ff5500",0,4))
  items.push(new DrawableBox(150,  (game_screen.height - 70), 50,50 ,"#ff5500",0,5))
}



//Draw characters
function draw_characters(){
  var num_characters = characters.length;
  for(var i = 0; i < num_characters; i++){
    if(characters[i].drawable)
      DrawBox(game_screen,characters[i])
  }
}

//Draw items
function draw_items(){
  var num_items = items.length;
  for(var i = 0; i < num_items; i++){
    if(items[i].drawable)
      DrawBox(game_screen,items[i])
  }
}
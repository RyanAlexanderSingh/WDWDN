
//This will include the basic stages
function set_up_sceen1(){
  var colour1 = new DrawingInfo(getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor())
  var colour2 = new DrawingInfo(getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor())
  var colour3 = new DrawingInfo(getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor())
  var colour4 = new DrawingInfo(getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor())
  characters.push(new DrawableBox(100, (game_screen.height - 200), getRandomInt(30,40), getRandomInt(70,80), colour1,0,new Equipment(2)))
  characters[0].url = "files/pictures/Face1.png"
  characters.push(new DrawableBox(200, (game_screen.height - 150), getRandomInt(30,40), getRandomInt(70,80), colour2,0,new Equipment(2)))
  characters[1].url = "files/pictures/Face2.png"
  characters.push(new DrawableBox(400, (game_screen.height - 200), getRandomInt(30,40), getRandomInt(70,80), colour3,0,new Equipment(2)))
  characters.push(new DrawableBox(500, (game_screen.height - 150), getRandomInt(30,40), getRandomInt(70,80), colour4,0,new Equipment(2)))
  
  items.push(new DrawableBox(50,  (game_screen.height - 20), 25,20 ,-1,0,0))
  items[0].url = "files/pictures/BigTestHat.png"
  items.push(new DrawableBox(500,  (game_screen.height - 400), 5,10 ,"#0000ff",0,1))
  items.push(new DrawableBox(30,  (game_screen.height - 10), 7,7 ,"#00ff00",0,2))
  items.push(new DrawableBox(400,  (game_screen.height - 50), 30,10,"#00ff00",0,3))
  items.push(new DrawableBox(300,  (game_screen.height - 50), 30,10 ,"#00ff00",0,3))
  items.push(new DrawableBox(150,  (game_screen.height - 222), 30,10 ,"#ff5500",0,4))
  items.push(new DrawableBox(150,  (game_screen.height - 70), 50,50 ,"#ff5500",0,5))
}
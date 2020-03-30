var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game, hurdle;
var allPlayers;
var runner1, runner2, runner3, runner4,runner;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
  if(runner1.collides(hurdle)){
    runner1.hide();
  }else if(runner2.collides(hurdle)){
    runner2.hide();
  } else if(runner3.collides(hurdle)){
    runner3.hide();
  } else if(runner4.collides(hurdle)){
    runner4.hide();
  }

}

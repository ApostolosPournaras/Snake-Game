var snkGame;

var resolution = 20;
var rows = 30;
var cols = 40;
var scoreP;
var finishP;

function setup(){

  gridCanvas = createCanvas(cols*resolution, rows*resolution);
  // background(51)

  finishP = createP("")
  finishP.position(148, gridCanvas.position().y + height+10);

  scoreP = createP("Score: ")
  scoreP.position(cols*resolution-100, gridCanvas.position().y + height+10);

  snkGame = new SnakeGame(rows, cols, resolution);
  
  }

function draw(){

  if(frameCount % 7 === 0){
    snkGame.snake.move();

    snkGame.board.show();

    if(snkGame.food){
      snkGame.food.show();
    }

    snkGame.snake.show();

    if(snkGame.hasSnakeSelfeaten()){
      finishP.elt.innerHTML = "GAME OVER"
    }

    scoreP.elt.innerHTML = "Score: " + snkGame.score;

  }
}


function keyPressed() {

  if(snkGame.hasLost){
    return;
  }

  var UP_ARROW = 38;
  var DOWN_ARROW = 40;
  var LEFT_ARROW = 37;
  var RIGHT_ARROW = 39;

  if (keyCode === LEFT_ARROW) {
    snkGame.snake.dir = 2;

  }else if (keyCode === RIGHT_ARROW) {
    snkGame.snake.dir = 3;
    
  }else if (keyCode === UP_ARROW) {
    snkGame.snake.dir = 0;
    
  }else if (keyCode === DOWN_ARROW) {
    snkGame.snake.dir = 1;

  }
}

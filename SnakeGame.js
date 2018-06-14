class SnakeGame{

	constructor(rows, cols, res){
		this.rows = rows;
		this.cols = cols;
		this.hasLost = false;
		this.score = 0;
		this.board = new GameBoard(rows, cols, resolution);
		this.snake = new Snake(this, rows/2, cols/2, res);
		this.generateFood();
	}

	generateFood(){

		var availRows = [];

		for(var i=0; i<this.rows; i++){
			var addRow = true;
			for(var j=0; j<this.snake.parts.length; j++){
				if(this.snake.parts[j].r === i){
					addRow = false;
					break;
				}
			}

			if (addRow){
				availRows.push(i);
			}
		}


		var availCols = [];

		for(var i=0; i<this.cols; i++){
			var addCol = true;
			for(var j=0; j<this.snake.parts.length; j++){
				if(this.snake.parts[j].c === i){
					addCol = false;
					break;
				}
			}

			if (addCol){
				availCols.push(i);
			}
		}

		var r = Math.floor((Math.random() * availRows.length));
		var c = Math.floor((Math.random() * availCols.length));

		this.food = new Food(availRows[r], availCols[c], this.board.res);
  }

    checkFood(){
    	if(this.food.c === this.snake.parts[0].c && this.food.r === this.snake.parts[0].r){
    		this.snake.grow(this.food.nutrition);
    		this.score += this.food.nutrition;
    		this.generateFood();
    	}
    }

    hasSnakeSelfeaten(){
    	this.hasLost = this.snake.hasEatenItself();
    	return this.hasLost;
    }

	show(){
		fill(51);
		rect(0, 0, this.cols*this.res, this.rows*this.res);
	}

}
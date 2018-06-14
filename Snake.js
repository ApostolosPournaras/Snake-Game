class Snake{

	constructor(snGame, r, c, w){
		this.snGame = snGame;
		this.r = r;
		this.c = c;
		this.w = w;

		this.dir = 3;
		this.parts = [];
		this.parts[0] = new SnakePart(this, this.w);

		for(var i=1; i<3; i++){
			this.parts[i] = new SnakePart(this.parts[i-1], this.w, true);
		}
	}

	move(){

		if(this.dir == 0){
			this.moveUp();

		}else if(this.dir == 1){
			this.moveDown();
			
		}else if(this.dir == 2){
			this.moveLeft();
			
		}else if(this.dir == 3){
			this.moveRight();
			
		}else{
			// stayStill;
		}

		this.snGame.checkFood();
	}

	moveUp(){
		// column is the same
		// row -1
		this.update();
		this.parts[0].r = max(0,this.parts[0].r-1);
		
	}

	moveDown(){
		// column is the same
		// row +1
		this.update();
		this.parts[0].r = min(this.parts[0].r+1, this.snGame.rows-1);
		
	}

	moveLeft(){
		// column -1
		// row is the same
		this.update();
		this.parts[0].c = max(0,this.parts[0].c-1);
		
	}

	moveRight(){
		// column +1
		// row is the same
		this.update();
		this.parts[0].c = min(this.parts[0].c+1,this.snGame.cols-1);
		
	}

	update(){
		for(var i=this.parts.length-1; i>0; i--){
			this.parts[i].update();
		}
	}

	grow(nutrition){
		var len = this.parts.length;
		for(var i=0; i<nutrition; i++){
			this.parts[len+i] = new SnakePart(this.parts[len+i-1], this.w);
		}
	}

	hasEatenItself(){
		for(var i=1; i<this.parts.length; i++){
			if(this.parts[i].c === this.parts[0].c && this.parts[i].r === this.parts[0].r){
				this.dir = -1;
				return true;
			}
		}
		return false;
	}

	show(){
		for(var i=0; i<this.parts.length; i++){
			this.parts[i].show();
		}
	}

}
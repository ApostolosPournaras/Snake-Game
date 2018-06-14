class GameBoard{

	constructor(rows, cols, res){
		this.rows = rows;
		this.cols = cols;
		this.res = res;
	}

	show(){
		fill(51);
		rect(0, 0, this.cols*this.res, this.rows*this.res);
	}

}
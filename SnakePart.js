class SnakePart{

	constructor(prev, w, append = false){
		this.prev = prev;
		this.w = w;
		this.c = this.prev.c - (append ? 1 : 0);
		this.r = this.prev.r;

		if(this.prev instanceof Snake){
			this.col = color(60, 180, 110);
		}else{
			this.col = color(180, 240, 210);
		}
		
	}

	update(){
		this.c = this.prev.c;
		this.r = this.prev.r;
	}

	show(){
		noStroke();
		fill(this.col);
		rect(this.c*this.w, this.r*this.w, this.w, this.w);
	}

}
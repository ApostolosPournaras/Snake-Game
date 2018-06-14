class Food{

	constructor(r, c, w){
		this.r = r;
		this.c = c;
		this.w = w;

		var rnd = Math.random();

		if(rnd < 0.5){
			this.nutrition = 1;
			this.col = color(200, 200, 200);

		}else if(rnd < 0.75){
			this.nutrition = 2;
			this.col = color(100, 150, 250);

		}else if(rnd < 0.9){
			this.nutrition = 3;
			this.col = color(200, 100, 250);

		}else{
			this.nutrition = 4;
			this.col = color(250, 50, 50);
		}

	}


	show(){
		fill(this.col)
		rect(this.c*this.w, this.r*this.w, this.w, this.w);

		fill(0)
		text(this.nutrition, this.c*this.w + ceil(0.35*this.w), this.r*this.w + ceil(0.65*this.w))
	}

}
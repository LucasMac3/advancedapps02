// for red, green, and blue color values 
var r, g, b;

function setup(){
	createCanvas(720,400);
	// Pick colors randomly 
	r = random(225);
	g = random(225);
	b = random(225);
}


	function mouseDragged(){
		noStroke();
		ellipse(mouseX,mouseY,10,10,);
		fill(r,g,b,127);
	}
		
		// When the user click the mouse 
	function mousePressed() {
		
		// Pick new random color values 
		r = random(225);
		g = random(225);
		b = random(225); 
}
			function mouseWheel(){
		background(255)
}

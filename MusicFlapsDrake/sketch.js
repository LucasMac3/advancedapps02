var img; // Declare variable 'img'
var s = 0;
// these are the variables 
var bird;
var pipes = [];
function setup() {
  new Audio('https://www.bensound.com/royalty-free-music?download=memories').play();
  img = loadImage("https://lucasmac3.github.io/advancedapps02/hotlinebling1.jpg"); // Load the image
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(251, 75, 174);
  
  image(img, 0,0);
  image(img, 0, height/1.5, img.width/1.5, img.height/1.5);

	// this is the random lengths for the "pipes"
  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

		// this says that if the bird hits the pipes, then they will turn red 
    if (pipes[i].hits(bird)) {
      console.log("HIT");
document.location.reload()
    }

    
  
   
text("Current score: \n" + s, 5, 115);
text("Remember That Everyday" , 5, 25);
text("Is A New Day" , 5, 40);
text("And An Opportunity To" , 5, 60);
text("Start Over"  , 5, 75);
text("Good Luck" , 5, 95);
   fill(255,105,180);
text("HOTLINE BLING", 140, 135);
text("HOTLINE BLING", 140, 155);
text("HOTLINE BLING", 140, 175);
text("HOTLINE BLING", 140, 195);
text("HOTLINE BLING", 140, 215);
text("HOTLINE BLING", 140, 235);
text("HOTLINE BLING", 140, 255);
text("HOTLINE BLING", 140, 275);
text("HOTLINE BLING", 140, 295);
text("HOTLINE BLING", 140, 315);
text("HOTLINE BLING", 140, 335);
text("HOTLINE BLING", 140, 355);
text("HOTLINE BLING", 140, 375);
text("HOTLINE BLING", 140, 395);
text("HOTLINE BLING", 140, 415);
text("HOTLINE BLING", 140, 435);
text("HOTLINE BLING", 140, 455);
text("HOTLINE BLING", 140, 475);		
    
// this is the code for the reoccuring pipes on the screen, giving the appearence that the bird is constantly moving forward 
    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }
// this is the code for the bird to constanly be showing, and not disappearing 
  bird.update();
  bird.show();
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
	
}
// this is the code, if you press the mouse, the bird will move 
function mousePressed() {
    bird.up();
	s=s+1
    //console.log("SPACE");
  }

// this is the code for the construction of the bird's beak, and his eye, in addition is the code for the way in which the bird flies, I.e. the speed of the bird and the gravity of which he effected 
function Bird() {
  this.y = height/2;
  this.x = 64;

  this.gravity = 1.5;
  this.lift = -25;
  this.velocity = 20;

  this.show = function() {
    fill(225);
    if (mouseIsPressed === true) {
    triangle(this.x, this.y, this.x+40, this.y+20,this.x+20,this.y+10)
  } else {
    triangle(this.x, this.y, this.x+40, this.y+20,this.x+20,this.y+50)
  }
    fill(255);
    rect(this.x, this.y, 32, 32);
		fill(255);
		noStroke(0);
		triangle(this.x, this.y, this.x+50, this.y+20, this.x+25, this.y+25);
		fill(0);
		ellipse(this.x+22, this.y+7, 7, 7);
    
  }

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}
// this is the code for the random heights of the pipes on the top and bottom appearing 
function Pipe() {
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 20;
  this.speed = 2;

  this.highlight = false;

  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  this.show = function() {
    fill(255);
    if (this.highlight) {
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }


}
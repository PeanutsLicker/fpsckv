let fps120;
let fps60;
let fps30;
let fps24;
let fps15;
let fps10;
let fps5;
let fps1;

let fr = 0;
const xSize = 1904;
const ySize = 921;

function setup() {
  frameRate(120);
  createCanvas(xSize, ySize);
  fps120 = new Ball(ySize/9, 1);
  fps60 = new Ball(ySize/9*2, 2);
  fps30 = new Ball(ySize/9*3, 4);
  fps24 = new Ball(ySize/9*4, 5);
  fps15 = new Ball(ySize/9*5, 8);
  fps10 = new Ball(ySize/9*6, 12);
  fps5 = new Ball(ySize/9*7, 24);
  fps1 = new Ball(ySize/9*8, 120);
  background(220);
  noLoop();
}

class Ball {
  constructor(_y, delay) {
    this.x = xSize/2;
    this.y = _y;
    this.xv = 3;
    this.radius = 15;
    this.px = this.x;
    this.delay = delay;
  }
  
  display() {
    if (fr % this.delay == 0) {
      noStroke();
      fill(220);
      rectMode(CENTER);
      rect(xSize/2+80, this.y, xSize, this.radius*2+2);
      stroke(0);
      fill(255);
      circle(this.x, this.y, this.radius);
    }
    
    fill(0);
    textSize(18);
	noStroke();
	
    text(120/this.delay + ' fps \n' + round(1000/120*this.delay*100)/100 + 'ms' , 5, this.y + this.radius/2);
  }
  
  movement() {
    this.px = this.x;
    
    this.x += this.xv;
    
    if(this.x + this.radius > xSize) {
      this.xv = -this.xv; 
    } else if (this.x - this.radius < 80) {
      this.xv = -this.xv;
    }
  }
}

function draw() {
  setInterval(__draw/*.bind(this)*/, 1000/120);
}

function __draw() {
  fps120.movement();
  fps120.display();
  fps60.movement();
  fps60.display();
  fps30.movement();
  fps30.display();
  fps24.movement();
  fps24.display();
  fps15.movement();
  fps15.display();
  fps10.movement();
  fps10.display();
  fps5.movement();
  fps5.display();
  fps1.movement();
  fps1.display();
  fr++;
}
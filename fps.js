//variables for classes
let fps120;
let fps60;
let fps30;
let fps24;
let fps15;
let fps10;
let fps5;
let fps1;

//frame total
let fr = 0;

//variable for keyPressed()
let value = false;

//canvas sizes
const xSize = window.innerWidth - 16;
const ySize = window.innerHeight - 16;

function setup() {
  frameRate(120);
  createCanvas(xSize, ySize);
  fps120 = new Ball(18, 1);
  fps60 = new Ball(ySize / 8 + 25, 2);
  fps30 = new Ball(ySize / 8 * 2 + 25, 4);
  fps24 = new Ball(ySize / 8 * 3 + 25, 5);
  fps15 = new Ball(ySize / 8 * 4 + 25, 8);
  fps10 = new Ball(ySize / 8 * 5 + 25, 12);
  fps5 = new Ball(ySize / 8 * 6 + 25, 24);
  fps1 = new Ball(ySize / 8 * 7 + 25, 120);
  background(220);
  noLoop();

  fps120.text();
  fps60.text();
  fps30.text();
  fps24.text();
  fps15.text();
  fps10.text();
  fps5.text();
  fps1.text();
}

class Ball {
  constructor(_y, delay) {
    this.x = xSize / 2;
    this.y = _y;
    this.xv = 3;
    this.radius = 15;
    this.delay = delay;
    this.message = 120 / this.delay + ' fps \n' + round(1000 / 120 * this.delay * 100) / 100 + 'ms';
  }

  display() {
    if (fr % this.delay == 0) {
      noStroke();
      fill(220);
      rectMode(CENTER);
      rect(xSize / 2 + 80, this.y, xSize, this.radius * 2 + 15);
      stroke(0);
      fill(255);
      circle(this.x, this.y, this.radius);
    }
  }

  text() {
    fill(0);
    textSize(18);
    noStroke();
    text(this.message, 5, this.y);
  }

  movement() {
    this.x += this.xv;

    if (this.x + this.radius > xSize) {
      this.xv = -this.xv;
    } else if (this.x - this.radius < 80) {
      this.xv = -this.xv;
    }

    if (value) {
      strokeWeight(2);
      line(this.x - 1, this.y, this.x + 1, this.y);
      strokeWeight(1);
    }

    if (keyIsDown(UP_ARROW)) {
      if (this.xv < 0) {
        this.xv = -3;
      } else {
        this.xv = 3;
      }
    } else if (keyIsDown(DOWN_ARROW)) {
      if (this.xv < 0) {
        this.xv = -2;
      } else {
        this.xv = 2;
      }
    }
  }
}

function draw() {
  setInterval(__draw /*.bind(this)*/ , 1000 / 120);
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

  fill(0);
  text('Show true location: ' + value, xSize - 200, 18);
  text('Speed: ' + abs(fps120.xv), xSize - 77, 36)
}

function keyPressed() {
  if (keyCode === 32) {
    value = !value;
  }
}
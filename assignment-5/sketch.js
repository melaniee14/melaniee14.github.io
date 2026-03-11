// Diamonds Forever
// Melanie Hammond
// ARTG2262 Assignment 5
// hammond.me@northeastern.edu

let balls = [];

function setup() {
  let canvas = fullscreen(createCanvas(windowWidth, windowHeight));

  initializeBalls();
}

function initializeBalls() {

  balls = [];
  
  for(let i = 0; i < 20; i++) {
    let ball = {
      x: random(width),
      y: random(height),
      speedX: random(-4, 4),
      speedY: random(-4, 4),
      size: random(10, 40),
      hue: random(360),
      brightness: random(200, 255),
      
      update: function() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if(this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        if (this.y < 0) this.y = height;
        
      },
      
      show: function() {
        colorMode(HSB);
        fill('white');
        noStroke();
        push();
        translate(this.x, this.y);
        rotate(PI/4);
        rectMode(CENTER);
        rect(0, 0, this.size, this.size);
        pop();
        
        fill(this.hue, 100, 255, 0.3);
        push();
        translate(this.x, this.y);
        rotate(PI/4);
        rectMode(CENTER);
        rect(0, 0, this.size * 1.5, this.size * 1.5);
        pop();
        colorMode(RGB);
      }
      
    }
    balls.push(ball);
  }
}

function draw() {
  background(20, 20, 40, 40);
  
   
  for(let i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].show();
  }
}

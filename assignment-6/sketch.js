// Melanie Hammond
// hammond.me@northeastern.edu
// ARTG 2262
// Assignment 6
// Stars of Your Choice

let r = 10,
  g = 30;
let xCoord = 20,
  yCoord = 40;
function setup() {
  createCanvas(600, 600);
  background(255);
  textSize(15);
  fill(0);

  strokeWeight(4);
  text(
    "c to clear, s to save, hold e to erase\n1: increase star size 0: decrease star size",
    0,
    15
  );
}

// Run this every frame of the sketch
function draw() {
  noStroke();

  fill((255 * mouseX) / width, (255 * mouseY) / height, 0, 50);
}

function mouseDragged() {
  xCoord = mouseX;
  yCoord = mouseY;

  if (keyIsPressed) {
    if (key === "E" || key === "e") {
      fill(255, 255, 255);
      ellipse(mouseX, mouseY, 50, 50, 5);
    }
  }

  star(xCoord, yCoord, r, g, 5);
}

function keyPressed() {
  if (key === "C" || key === "c") {
    r = 10;
    g = 30;
    background(255);
    textSize(15);
    fill(0);

    strokeWeight(4);
    text(
      "c to clear, s to save, hold e to erase\n1: increase star size, 0: decrease star size",
      0,
      15
    );
  }

  if (key === "S" || key === "s") {
    saveCanvas("drawing.png");
  }

  if (key === "1") {
    r += 2;
    g += 5;
  }

  if (key === "0") {
    r -= 2;
    g -= 5;
  }
}

// taken from p5 js website
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

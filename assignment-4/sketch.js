function setup() {
  createCanvas(1024, 1024);
}

function draw() {
  background(255, 255, 255);
  let xcoord = 15;
  let ycoord = 30;
  let w = 1024;
  let h = 15;

  for (let row = 0; row < 20; row++) {
    for (let column = 0; column < 20; column++) {
      fill(255, 224, 230);
      rect(xcoord, 0, 15, 1024);
      xcoord += 50;
    }
    noStroke();
    fill(255, 192, 203);
    rect(0, ycoord, w, h);
    ycoord += 50;
  }

  let space = 150;

  for (let row = 0; row < 15; row++) {
    for (let col = 0; col < 7; col++) {
      let sunflower_x = col * space + 60;
      let sunflower_y = row * space + 40;

      push();
      translate(sunflower_x, sunflower_y);

      if ((row + col) % 2 == 0) {
        fill("#FFF6A5");
      } else {
        fill("#CEEFFC");
      }

      for (let count = 0; count < 10; count++) {
        ellipse(0, 30, 15, 50);
        rotate(PI / 5);
      }

      fill("#9B7E74");
      circle(0, 0, 25);
      pop();
    }
  }

  // * A function to define what to do whenever a key
  // * is pressed over the canvas.

  function keyPressed() {
    // Was it the upper/lower 'S' key?
    if (key == "S" || key == "s") {
      saveCanvas("assignment[3]_pattern_hammond_melanie");
    }
  }
}
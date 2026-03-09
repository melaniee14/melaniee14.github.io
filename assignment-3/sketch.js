function setup() {
  // Create a canvas as big as the container window
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  textSize(height / 16);
  text("Assignment[3]", width / 2, height / 2);
}

// This function is called any time the window is resized
function windowResized() {
  // Change the canvas size to fit the window
  resizeCanvas(windowWidth, windowHeight);
}

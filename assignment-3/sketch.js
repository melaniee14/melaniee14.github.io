function setup() {
  // Create a canvas as big as the container window
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  textSize(height / 16);
  text("Assignment[3]", width / 2, height / 2);

   // hair
   fill(241,204,143);
   rect(100, 90, 170, 220, 20);
 
   //neck
   fill(198, 136, 99);
   rect(150, 170, 70, 90, 10);
 
   // face
   fill(198, 136, 99);
   circle(185, 140, 130);
 
   // left eye
   fill(255, 255, 255);
   ellipse(160, 130, 30, 20);
 
   fill(0, 0, 0);
   circle(160, 130, 10);
   
   //left eyebrow
   noFill();
   stroke(0);
   arc(160, 120, 30, 10, PI, 0);
 
   // right eye
   fill(255, 255, 255);
   ellipse(210, 130, 30, 20);
 
   fill(0, 0, 0);
   circle(210, 130, 10);
   
   // right eyebrow
   noFill();
   stroke(0);
   arc(210, 120, 30, 10, PI, 0);
 
   // nose
   noFill();
   stroke(0);
   arc(185, 160, 20, 20, 320, 90);
   
   //smile
   noFill();
   arc(185, 175, 70, 30, 0, PI);
   
   // collarbones/shoulder areea
   fill(198, 136, 99);
   rect(90, 240, 190, 50, 10);
 
   // shirt
   fill(255, 182, 193);
   rect(110, 280, 170, 200, 10);
 
   // sleeves
   fill(255, 182, 193);
   rect(90, 240, 50, 200, 10);
 
   fill(255, 182, 193);
   rect(230, 240, 50, 200, 10);
   
   fill(241, 204, 143);
   arc(185, 110, 140, 100, PI, TWO_PI);
   
   fill(0);
   textSize(15);
   text("Real Me", 330, 385);
   
   
}

// This function is called any time the window is resized
function windowResized() {
  // Change the canvas size to fit the window
  resizeCanvas(windowWidth, windowHeight);
}

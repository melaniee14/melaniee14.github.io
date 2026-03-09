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

// Greeting!
let name = prompt("Hello, what is your name?");
alert("Welcome " + name + ", it's a pleasure to greet you!");

alert("Today is " + new Date().toLocaleDateString() + " hope your day has been well! Good morning, good night, or good afternoon, " + name);

// Numerical input
let numInput = prompt("Please enter an integer value:");  // this value is a String
let num = Number(numInput);  // convert it to a number

numInput = prompt("Please enter a second integer value:");
let num2 = Number(numInput);
alert("Let me show you what I can do with the numbers " + num + " and " + num2 + ":");

alert(num + " + " + num2 + " = " + Number(num + num2));
alert(num + " - " + num2 + " = " + Number(num - num2));
alert(num + " * " + num2 + " = " + Number(num * num2));
alert(num + " / " + num2 + " = " + Number(num / num2));

let remainder = num % num2;
alert(num + " % " + num2 + " = " + remainder);
alert("The max of " + num + " and " + num2 + " is " + Math.max(num, num2));
alert("The min of " + num + " and " + num2 + " is " + Math.min(num, num2));

let decInput = prompt("Please enter a value with a decimal part");
let dec = Number(decInput);

alert("Let me show you what I can do with the number " + dec);
alert("The negative of " + dec + " is -" + dec);
alert("The sine of " + dec + " radians is " + Math.sin(dec));
alert("The cosine of " + dec + " radians is " + Math.cos(dec));
alert(dec + "^10 = " + Math.pow(dec, 10));
alert("Square root of " + dec + " = " + Math.pow(dec, 0.5));
alert("Rounded " + dec + " = " + Math.round(dec));
alert("Floor of " + dec + " = " + Math.floor(dec));
alert("Ceiling of " + dec + " = " + Math.ceil(dec));
alert("Absolute value of " + dec + " = " + Math.abs(dec));

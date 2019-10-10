// //Excercise 4

var xArray = [];
var yArray = [];
var cArray = [];
var newRed,newGreen,newBlue;

function setup(){
  createCanvas(windowWidth,windowHeight);
  noStroke();
  for(var i = 0; i < 100; i++){
    xArray[i] = int(random(width))
  }
  for(var i = 0; i < 100; i++){
    yArray[i] = int(random(height))
  }
  for(var i = 0; i < 100; i++){
    cArray[i] = color(random(255),random(255),random(255));
  }

  textAlign(CENTER);
  textSize(50);
  text("Hello");

}

function draw(){
  background(255,192,203);
  for(var i = 0; i < 100; i++){
    fill(cArray[i]);
    ellipse(xArray[i],yArray[i],20,20);
    xArray[i] += random(-3,3);
    yArray[i] += random(-1,1);
    // working long one:
    //cArray[i] = color(red(cArray[i]) + random(-13,13), green(cArray[i]) + random(-13,13), blue(cArray[i]) + random(-13,13));

    //longer way
    newRed = red(cArray[i])+random(-13,13); //extract the red value of the color and change it a bit
    newBlue = blue(cArray[i])+random(-13,13);
    newGreen = green(cArray[i])+random(-13,13);
    cArray[i] = color(newRed,newGreen,newBlue);

  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

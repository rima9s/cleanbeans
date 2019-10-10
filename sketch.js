var screen1,screen2;

function preload(){
  screen1 = loadImage("assets/1.png");
  screen2 = loadImage("assets/2.png");
}

function setup(){
  createCanvas(375,667);
  image(screen1,0,0);

}

function draw(){

}

function mousePressed(){
  if(mouseX>19 && mouseX<109 && mouseY > 462 && mouseY < 555){
    image(screen2,0,0)
  }
}

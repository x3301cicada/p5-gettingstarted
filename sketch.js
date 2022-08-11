function setup() {
  createCanvas(1000, 1000);
}

function draw() {
if (mouseIsPressed){
  fill(0,255,150)
} else{
  fill(255,0,0);
}
ellipse(mouseX,mouseY,80,80)
}

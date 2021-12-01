
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,30,30)
}

function draw() 
{
  background(30);
if (keyDown(RIGHT_ARROW)) {
  box.position.x+=5
  background("red");
}if (keyDown(LEFT_ARROW)) {
  box.position.x-=5
  background("green");
}if (keyDown(UP_ARROW)) {
  box.position.y-=5
  background("yellow");
}if (keyDown(DOWN_ARROW)) {
  box.position.y+=5
  background("orange");
}
drawSprites ()
}





var fixedRect,movingRect;




function setup() {
  createCanvas(1200,1200);
  fixedRect=createSprite(400, 400, 50, 100);
  movingRect=createSprite(1000,200,100,50);
}

function draw() {
  background("black");  
movingRect.y = mouseY;
movingRect.x=mouseX;
if(movingRect.x-fixedRect.x <= movingRect.width/2 + fixedRect.width/2
  && fixedRect.x-movingRect.x <= movingRect.width/2 + fixedRect.width/2 
  && movingRect.y-fixedRect.y <= movingRect.height/2 + fixedRect.height/2
  && fixedRect.y-movingRect.y <= movingRect.height/2 + fixedRect.height/2 ){

movingRect.shapeColor="red";
fixedRect.shapeColor="red";
}
else{

movingRect.shapeColor="green";
fixedRect.shapeColor="green";

}







  drawSprites();
}
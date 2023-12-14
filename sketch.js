var navio, navioImg;
var mar, marImg;


function preload(){
  marImg = loadImage("sea.png");
  navioImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
  
  mar = createSprite(400, 200);
  
  navio = createSprite(200, 200);
}

function draw() {
  background("blue");
  
  mar.addImage(marImg);
  mar.scale = 0.3;
  mar.velocityX = -3;
  
  if(mar.x < 0){
    mar.x = mar.width/2;
  }

  navio.addAnimation("movimento", navioImg);
  navio.scale = 0.3;

  drawSprites();
}

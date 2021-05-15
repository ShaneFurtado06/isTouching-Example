var car, wall;

var speed=Math.random(55,90);
var weight=Math.random(400,1500);

const deformation=0.5*weight*speed*speed/22500

function setup() {
  createCanvas(1000,400);
  
  car= createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  car.shapecolor=blue;

  wall=createSprite(800,200,60,height/2);
  //wall.shapecolor=black;
}

function draw() {
  background("black");  

//if(isTouching(car,wall)){car.velocityX=0}



  
  drawSprites();
}
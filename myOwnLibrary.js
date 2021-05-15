function isTouching(){

    if(car.x+wall.x<=car.width/2+wall.width/2){
      return true;
      car.velocityX=0;

      if(deformation<100){
        text("A-",40,10);
        car.shapecolor=green;
        }
      
        if(deformation<random(100,180)){
          text("B-",40,10);
          car.shapecolor=yellow;
        }
      
        if(deformation>180){
          text("D-",40,10);
          car.shapecolor=red;
        }
      }
    }
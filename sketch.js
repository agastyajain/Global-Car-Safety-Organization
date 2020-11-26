var wall;
var car;
var speed, weight;





function setup() {
  createCanvas(1250, 550);
  car = createSprite(80, 275, 100, 40);
  wall = createSprite(1150, 275, 20, 275);
  weight = Math.round(random(400, 1500));
  speed = Math.round(random(55, 90));


}

function draw() {
  background(255, 255, 255);

  if (keyDown("space")) {
    car.velocityX = speed;
  }

  if (isTouching(car, wall)) {
    car.velocityX = 0;
    
    var deformation = 0.5 * weight * speed * speed / 22500;

    if (deformation > 180) {
      car.shapeColor = "red";
      car.velocityX = 0;
      textSize(40);
      fill("yellow");
      stroke("red");
      text("It is a lethal drive!!",200,200);
    }
    if (deformation < 100) {
      car.shapeColor = "yellow";
      car.velocityX = 0;
      textSize(40);
      fill("yellow");
      stroke("red");
      text("It is a good drive!!",200,200);
    }
    if (deformation > 100 && deformation < 180) {
      car.shapeColor = "green";
      car.velocityX = 0;
      textSize(40);
      fill("yellow");
      stroke("red");
      text("It is an average drive!!",200,200);
    }
  }


  drawSprites();

}

function isTouching(object1, object2) {
  if (
    (object1.x - object2.x < object1.width / 2 + object2.width / 2) &&
    (object2.x - object1.x < object1.width / 2 + object2.width / 2) &&
    (object1.y - object2.y < object1.height / 2 + object2.height / 2) &&
    (object2.y - object1.y < object1.height / 2 + object2.height / 2)
  ) {
    return true;
  }
  else {
    return false;

  }
}







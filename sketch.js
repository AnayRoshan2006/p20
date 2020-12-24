var car,weight,speed;
var wall;



function setup() {
  createCanvas(1600,400);
  speed=random(45,165);
  weight=random(400,1500);
 car = createSprite(10, 200, 50, 5);
 car.shapeColor="blue"
 car.velocityX=speed;

 wall=createSprite(1200,200,60,height/2);
 wall.shapeColor="green"
}

function draw() {
  background(255,255,255);  
  if(hascollided(car,wall)){
    car.velocityX=0;
   var deformation=(0.5*weight*speed*speed)/22500

   if(deformation>180){
     car.shapeColor=color(255,0,0)
   }
   if(deformation<180){
     car.shapeColor=color(0,255,0)
   }
  }
  drawSprites();
}
function hascollided(Lbullet,Lwall){
 carRightEdge=Lbullet.x+Lbullet.width;
 wallLeftEdge=Lwall.x;
 if(carRightEdge>=wallLeftEdge){
   return true
 }
 return false;

}
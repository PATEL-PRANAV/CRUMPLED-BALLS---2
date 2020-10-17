const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,box1,box2,box3,ball;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	box1 = createSprite(1000,365,200,20);
	box1.shapeColor="white";
	box2 = createSprite(900,325,20,100);
	box2.shapeColor="white";
	box3 = createSprite(1100,325,20,100);
	box3.shapeColor="white";
	
    ball = new Ball(200,200,20);
    ground = new Ground(600,380,1200,10) 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();


  drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball.body,ball.body.position,{x:75,y:-75})
		
	   }
}



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var basket1,basket2,basket3
var dustbinImage
function preload()
{
dustbinImage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball=new Paper(100,100,70)
ground=new Ground(400,380,800,20)
basket1=new Dustbin(500,350,200,20)
basket2=new Dustbin(400,310,20,120)
basket3=new Dustbin(600,310,20,120)
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  

ground.display();
basket1.display();
basket2.display();

basket3.display();

ball.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:300,y:-500});
	}
}



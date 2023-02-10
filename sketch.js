var ball;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

//creating ball option 

var ball_options ={
isStacic: false,
restitution: 0.3,
friction:0,
density:1.2
	 


}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

matter.bodies.circle(400,350,0,0.2)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ballobj.display
  drawSprites();
 
}

function keyPressed(){

if(keyCode===UP_ARROW){}


}



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(200, 200);

	bov1 = new bob(220, 300);
	bob2 = new bob(260, 300);
	bob3 = new bob(300, 300);
	bob4 = new bob(340, 300);
	bob5 = new bob(380, 300);
}


function draw() {
  background(0);
  Engine.update(engine);
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
 
}




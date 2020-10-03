
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var paper1;
var log1;
var chain1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1= new Paper(500,400,30);
	paper2=new Paper(400,400,30);
	paper3=new Paper(300,400,30);
	paper4=new Paper(100,380,30);
	paper5=new Paper(600,400,30);
	log1=new Log(400,100,500,20);
	chain1=new Chain(paper1.body,log1.body,100,0);
	chain2=new Chain(paper2.body,log1.body,0,0);
	chain3=new Chain(paper3.body,log1.body,-100,0);
	chain4=new Chain(paper4.body,log1.body,-200,0);
	chain5=new Chain(paper5.body,log1.body,200,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  paper1.display();
  paper2.display();
  paper3.display();
  paper4.display();
  paper5.display();
  log1.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
   drawSprites();
 
}
function keyPressed() {
	if (keyCode===UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.applyForce(paper4.body,paper4.body.position,{x:100,y:100});
	}
   }




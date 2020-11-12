var paper,dustbin,groundSprite,paperBody,pimage,dimage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
pimage=loadImage("paperimage.png");
dimage=loadImage("dustbinimage.png")
}

function setup() {
	createCanvas(800, 700);
paper=createSprite(50,600,20,20,options);
paper.addImage(pimage);
paper.scale=0.5;

dustbin=createSprite(width/2,600,20,20);
dustbin.addImage(dimage);
dustbin.scale=0.5;

groundSprite=createSprite(width/2, height-20, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBody = Bodies.circle(width/2 , 200 , 5,options);
	
	World.add(world, paperBody);
	
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  var options={
	  isStatic:false,
	  restitution:0.3,
	  friction:0.5,
	  density:1.2

  }
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paperBody,paperBody.position,{x:85,y:-85});
		
	}
}


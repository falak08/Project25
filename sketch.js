var paper1,dustbin,groundSprite,paperBody,pimage,dimage;
const Engine = Matter.Engine;
const World = Matter.World;

const Body = Matter.Bodies;

function preload()
{
pimage=loadImage("paperimage.png");
dimage=loadImage("dustbinimage.png")
}

function setup() {
	createCanvas(800, 700);
	paper1=new Paper(50,600,20,20);


dustbin=createSprite(width/2,600,20,20);
dustbin.addImage(dimage);
dustbin.scale=0.5;

groundSprite=createSprite(width/2, height-20, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
	World.add(world, paperBody);
	
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  paper1.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	
	}
}


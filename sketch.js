
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	paper = new PaperGlass (100,600,10);

	ground = new Ground(400,680,800,20);

	leftSide = new Dustbin (550,620,20,100);
	rightSide = new Dustbin (610,660,100,20);
	bottom = new Dustbin (670,620,20,100);







	
  
}


function draw() {
  
  background(0);

  Engine.update(engine);

  paper.display();
  ground.display();
  leftSide.display();
  rightSide.display();
  bottom.display();
  
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15, y: -15})
		}

	}




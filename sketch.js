const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1

function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1 = new ground(width/2,height-20,width,10)
	tree1 = new tree(1000,315,400,550)
	boy1 = new boy(200,500,200,300)
	mango1 = new mango(1000,215,50,50)
	mango2= new mango(1000,150,50,50)
	mango3 = new mango(920,215,50,50)
	mango4 = new mango(1150,215,50,50)
	mango5 = new mango(1000,300,50,50)
	mango6 = new mango(1070,200,50,50)
	mango7 = new mango(900,300,50,50)
	//chain1 = new chain(20,50,10,50)
	stone1 = new stone(200,100,30)
	Engine.run(engine);
  
}


function draw() {
  background(220);
  
  ground1.display();
  tree1.display();
  boy1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  //chain1.display();
  stone1.display();
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1000, 650);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(600,290,34);
	mango2=new mango(855,325,35);
    mango3=new mango(670,260,35);
    mango4=new mango(730,300,35);
    mango5=new mango(710,320,36);

	treeObj=new tree(775,368);
	groundObject=new ground(width/2,600,width,20);
	stone=new Stone(100,460,23);
	attach=new Throw(stones.body,{x:100,y:465});
	
  

	Engine.run(engine);

}

function draw() {

  background(230);
  detectolission(stone,mango1);
  detectolission(stone,mango2);
  detectolission(stone,mango3);
  detectolission(stone,mango4);
  detectolission(stone,mango5);

  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  groundObject.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX})
}

function mouseReleased(){
	attach.fly();
}

function detectColission(Lstone,Lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r)
  {
	  Matter.body.setStatic(lmango.body.false);
  }
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		launcherObject.attach(stone.body);
}
}

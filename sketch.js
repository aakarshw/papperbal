const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1;
var papperball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

  box1 = new Box(width/2,640,50,100);
  box2 = new Box(width/4,640,50,100);
	papperball = new Papperball(200,450,40);	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 // packageSprite.x= packageBody.position.x ;
 // packageSprite.y= packageBody.position.y ;
  box1.display();
  box2.display();

  papperball.display();
 // ground.display();
  drawSprites();
}
  function keypressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(papperball.body,papperball.body.position,{x:85,y:-85})

    }
}


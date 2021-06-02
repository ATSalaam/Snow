const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg;
var boy, boyImg;
var girl, girlImg;



function preload(){
  getBackgroundImg();
  boyImg = loadImage("boy.png");
  girlImg = loadImage("girl.png");
}
function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  girl = createSprite(450, 240, 50,50);
  girl.addImage(girlImg);
  girl.scale = 0.25;
  girl.velocityX = 2.1;

  boy = createSprite(400, 280, 50, 50);
  boy.addImage(boyImg);
  boy.scale = 0.3;
  boy.velocityX = 2;

  snow1 = new Snow(200,10,30,30);
  snow2 = new Snow(400,10,25,25);
  snow3 = new Snow(750,10,30,30);
  snow4 = new Snow(300,10,40,40);
  
}

function draw() {
  createEdgeSprites();
  background(backgroundImg);
  Engine.update(engine);
  if(boy.x <= 100 && boy.velocityX === -2){
    boy.velocityX = 2;
  }
  if(boy.x >= 700 && boy.velocityX === 2){
    boy.velocityX = -2;
  }
  if(girl.x <= 400 && girl.velocityX === -2.1){
    girl.velocityX = 2.1;
  }
  if(girl.x >= 650 && girl.velocityX === 2.1){
    girl.velocityX = -2.1;
  }
  boy.display();
  girl.display();
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  //console.log(boy.x)
  
}

function getBackgroundImg(){
  backgroundImg = loadImage("snow1.jpg");
}

const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Composites=Matter.Composites;
const Composite=Matter.Composite;
const Constraint=Matter.Constraint;
var engine;

var world;

var bg;
var bunny,bunnyImg;
var ground,shelf;
var fruit;
var rope1,rope2;
var con1,con2;

function preload(){
bg=loadImage("images/background.png");
bunnyImg=loadImage("images/Rabbit-01.png")
melon=loadImage("images/melon.png");

}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(400,390,800,20);

  bunny=createSprite(550, 110, 70, 70);
  bunny.addImage(bunnyImg);
  bunny.scale=0.2

  shelf=new Ground(550,170,100,10);

  fruit_options={
    restitution:0.8
  }
  fruit=Matter.Bodies.circle(400,200,30,fruit_options);
  World.add(world,fruit);

  rope1=new Rope(4,{x:350,y:200});

  con1=new Link(rope1,fruit);
}

function draw() {
  background(bg); 
  image(melon,fruit.position.x,fruit.position.y,70,70) ;
  ground.display();
  shelf.display();
  rope1.show();
  drawSprites();
  Engine.update(engine);
}
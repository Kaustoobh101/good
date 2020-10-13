
const Engine = Matter.Engine,
World = Matter.World, 
Bodies = Matter.Bodies;

var canvas;
var engine, world;

var ball, ground, object;


function setup() {
  canvas  = createCanvas(400,400);

  engine = Engine.create();
  world= engine.world;
  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);
 
  ball_options = {
    isStatic: false,
    restitution:1.0
  }
  ball= Bodies.circle(200,200,50,ball_options);
  World.add(world,ball);
 // console.log(object);
}

function draw() {
  background(155); 
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,50,50);
}


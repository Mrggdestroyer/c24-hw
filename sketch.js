const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var box1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane1 = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    ball = new Circle(800,100,15);

    box1 = new Box(700,320,70,70);
    box2 = new Box(500, 100, 140, 70)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane1.display();
    hammer.display();
    box1.display();
    ball.display();
    box2.display();
}
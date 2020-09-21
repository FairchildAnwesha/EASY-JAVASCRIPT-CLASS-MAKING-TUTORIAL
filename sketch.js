const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ChoChang, aleclightwood, shinyunjung;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ChoChang= new Box(200,200,50,100);
    aleclightwood= new Box(160,250, 100,100);
    
    shinyunjung= new Ground(200,390,400,20);
    
}

function draw(){
    background(0);
    Engine.update(engine);

    ChoChang.display();
    aleclightwood.display();
    shinyunjung.display();
    
}
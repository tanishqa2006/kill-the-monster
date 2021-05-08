const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var bg ;
var hero, rope;
var monster;

function preload(){
bg= loadImage("sky.jpg");


}


    


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    

    box3 = new Box(700,240,70,70);
    box4 = new Box(700,240,70,70);
    box6 = new Box(700,240,70,70);
    box7 = new Box(700,240,70,70);
    box8 = new Box(700,240,70,70);
    box9 = new Box(700,240,70,70);
    box10 = new Box(700,240,70,70);

    

    box5 = new Box(810,160,70,70);


    hero = new Hero(200,200,250);

    //log6 = new Log(230,180,80, PI/2);
 rope= new Rope(hero.body,{x:500,y:50})
monster = new Monster(800,200,300)





}

function draw(){
    background("lightblue")
    
       
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    
    monster.display();


    box3.display();
    box4.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    rope.display();
    hero.display();
    
    //log6.display();
  
}

function mouseDragged()
{
        Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
    
}



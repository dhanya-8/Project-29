const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var polygon, hit;

function setup(){
    hit = loadImage("polygon.png")
}

function setup(){
    canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(0,390,2800,20);
    ground2 = new Ground(390, 315, 200, 20);
    ground3 = new Ground(990, 200, 290, 20)

    block1 = new Block(330, 235, 30, 40);
    block2 = new Block(360, 235, 30, 40);
    block3 = new Block(390, 235, 30, 40);
    block4 = new Block(420, 235, 30, 40);
    block5 = new Block(450, 235, 30, 40);

    block6 = new Block(360, 195, 30, 40);
    block7 = new Block(390, 195, 30, 40);
    block8 = new Block(420, 195, 30, 40);

    block9 = new Block(390, 155, 30, 40);

  
    block10 = new Block(900, 160, 30, 40);
    block11 = new Block(930, 160, 30, 40);
    block12 = new Block(960, 160, 30, 40);
    block13 = new Block(990, 160, 30, 40);
    block14 = new Block(1020, 160, 30, 40);
    block15 = new Block(1050, 160, 30, 40);
    block16 = new Block(1080, 160, 30, 40);

    block17 = new Block(930, 120, 30, 40);
    block18 = new Block(960, 120, 30, 40);
    block19 = new Block(990, 120, 30, 40);
    block20 = new Block(1020, 120, 30, 40);
    block21 = new Block(1050, 120, 30, 40);

    block22 = new Block(960, 80, 30, 40);
    block23 = new Block(990, 80, 30, 40);
    block24 = new Block(1020, 80, 30, 40);

    block25 = new Block(990, 40, 30, 40);

    polygon = Bodies.circle(50, 200, 20);
    World.add(world ,polygon);

    slingShot = new Slingshot(this.polygon, {x: 100, y: 200});
}
function draw(){
    background("black")
    Engine.update(engine);

    ground.display();
    ground2.display();
    ground3.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    block6.display();
    block7.display();
    block8.display();

    block9.display();

    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    block22.display();
    block23.display();
    block24.display();

    block25.display();

    imageMode(CENTER)
    image(hit, polygon.position.x, polygon.position.y, 40, 40);

    slingShot.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}
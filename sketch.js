var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf,leafImg;
var grass,grassImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  grassImg = loadImage("grass.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  var rand = Math.round(random(1,3));
  
  if (frameCount % 80 === 0) {
    switch(rand){
      case 1 : createApples(); break;
      case 2 : createLeaves(); break;
      case 3 : createGrass(); break;
      default: break;
    }
  }
  drawSprites();
}

function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
  
}

function createLeaves(){
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
  leaf.scale = 0.07;
  leaf.velocityY = 3;
  leaf.lifetime = 150;
  
}

function createGrass(){
  grass = createSprite(random(50,350),40,10,10);
  grass.addImage(grassImg);
  grass.scale = 0.07;
  grass.velocityY = 3;
  grass.lifetime = 150;
    
  }
  
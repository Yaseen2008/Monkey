var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score = 0;
var survivalTime = 0;

function preload () {
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup () {
  
  createCanvas (600,600);
  
  monkey = createSprite(80,508,20,20);
  monkey.addAnimation("move", monkey_running);
  monkey.scale = 0.13;
  
  ground = createSprite(600,550,100000,10);
  ground.velocityX = -5;
  ground.x = ground.width/2; 
  console.log(ground.x);
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw () {

  background ("white");

  stroke("white");
  textSize(20);
  fill("white");
  text("Score : " + score, 500,50); 

  stroke("black");
  textSize(20);
  fill("black");                 
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time : " + survivalTime,100,50);
   
  
  if (keyDown("space") && monkey.y >= 100) {
    monkey.velocityY = -18;    
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  monkey.collide(obstacleGroup);
  
  drawSprites();
  
  food();
  stones();
  
}

function food () {
  
  if (frameCount % 80 === 0) {
    
    var banana = createSprite(610,Math.round(random(270,350)),20,20);
    banana.addAnimation("banana", bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -7;
    banana.lifetime = 92;
    foodGroup.add(banana);
    
  }
  
}

function stones () {
  
  if (frameCount % 300 === 0) {
      
    obstacle = createSprite(615,521,20,20);
    obstacle.addAnimation("stone", obstacleImage);
    obstacle.scale = 0.13;
    obstacle.velocityX = -7;
    obstacle.lifetime = 95;
    obstacleGroup.add(obstacle);
  
  }

}


 
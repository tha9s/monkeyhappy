
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  
  monkey = createSprite(90,345,10,10)
  monkey.addAnimation("smthing",monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(200,350,400,10)
  
  
bananaGroup = new Group();
  
  
  score = 0
}


function draw() {
  background("lightblue")
  //console.log(mouseY)
  monkey.collide(ground)
   text("Score: "+ score, 330,30);
  score = score + Math.round(getFrameRate()/60);
  
  if (keyDown("space") && monkey.y >= 314.3 ) {
    
    monkey.velocityY = -20;
    
  }
  monkey.velocityY = monkey.velocityY+0.8
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  console.log(monkey.y)
  
  
  drawSprites();
  spawnBanana();
  spawnObstacles();

  
}

function spawnBanana(){
 if (frameCount % 100 === 0){
   var banana = createSprite(400,165,10,40);
   banana.velocityX = -4;
   banana.addAnimation("banana",bananaImage);
   
    //generate random obstacles
    banana.y = Math.round(random(50,185));
   
   
    //assign scale and lifetime to the obstacle           
    banana.scale = 0.1;
    banana.lifetime = 100;
   
   //add each obstacle to the group
   bananaGroup.add(banana)
 }
}

function spawnObstacles(){
 if (frameCount % 200  === 0){
   var rock = createSprite(600,330,10,40);
   rock.velocityX = -10;
   rock .addAnimation("sm",obstacleImage)
   
   
    //assign scale and lifetime to the obstacle           
    rock.scale = 0.1;
    rock.lifetime = 55;
   

 }
}







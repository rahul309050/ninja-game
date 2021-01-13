var PLAY = 1
var END=0
var gameState=1
var sword,swordImage
var alien,alienImage
var fruit1,fruit1Image
var fruit2,fruit2Image
var fruit3,fruit4Image
var fruit4,fruit4Image
var score,gameoverImage,gameover
var song1,song2


function preload() {
 swordImage=loadImage("sword.png");
  
 alienImage=loadAnimation("alien1.png","alien2.png")
  
 fruit1Image=loadImage("fruit1.png");
 fruit2Image=loadImage("fruit2.png");
 fruit3Image=loadImage("fruit3.png");
 fruit4Image=loadImage("fruit4.png");
  song1=loadSound("gameover.mp3");
  song2=loadSound("knifeSwooshSound.mp3")
 gameoverImage=loadImage("gameover.png"); 
  
}
function setup(){
  createCanvas(400,400)
  noCursor()
  sword=createSprite(40,200,20,20)
  sword.addImage("sword",swordImage);
  sword.scale=0.7
    FruitsGroup = createGroup();

    EnemyGroup = createGroup();
  score=0
 
}
function draw() {
 background(200)
    text("score :"+score,200,25);
if (gameState===PLAY){
  if(sword.isTouching(FruitsGroup)){
    FruitsGroup.destroyEach();
    score=score+2
    song2.play();
  
  }
  
  
  spawnEnemy();
  spawnFruits();
  sword.y=mouseY
  sword.x=mouseX
  
  
}
  if(sword.isTouching(EnemyGroup)){
    gameState=END
    EnemyGroup.destroyEach()
    gameover=createSprite(200,200,300,300)
    gameover.addImage("gameover",gameoverImage)
    song1.play()
    
    
    }
  
 
  drawSprites();

}
function spawnFruits (){
  if(frameCount%80===0){
    fruit=createSprite(400,random(40,370),20,20);
    fruit.scale=0.2
    r=Math.round(random(1,4));
    if(r==1){
      fruit.addImage(fruit1Image);
    }else if (r==2){
      fruit.addImage(fruit2Image);
    }else if (r==3){
      fruit.addImage(fruit3Image);
    }
    else{
      fruit.addImage(fruit4Image);
    }
    m=Math.round(random(1,2));
    if(m==1){
      fruit.x=0
      fruit.velocityX=(4+score/2)
    }else if(r=2){
      fruit.x=400;
      fruit.velocityX=-(4+score/2)
    }

          // fruit.velocityX=-4

    

    fruit.lifetime=100;
    
    FruitsGroup.add(fruit)
  }
  
}
function spawnEnemy(){
  if(frameCount%200===0){
  alien=createSprite(200,random(40,380),20,20);
  alien.addAnimation("alien",alienImage)
  alien.scale=0.8;
  alien.velocityX=-(4+score/2)
  alien.lifetime=50; 
  EnemyGroup.add(alien);
}
  
}
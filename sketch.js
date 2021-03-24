var tom,tomImg1,tomImg2, tomImg4;
var garden,gardenImg;
var jerry,jerryImg1,jerryImg2,jerryImg4;


function preload() {
    //load the images here

    gardenImg=loadImage("images/garden.png");
    
   tomImg1=loadAnimation("images/cat1.png");
  tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
   tomImg4=loadAnimation("images/cat4.png");

   jerryImg1=loadAnimation("images/mouse1.png");
   jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
   jerryImg4=loadAnimation("images/mouse4.png");

  
   

  
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites

    tom=createSprite(870,600);
    tom.addAnimation("tomSource",tomImg1);
    tom.scale=0.1;

     jerry=createSprite(200,600);
     jerry.addAnimation("jerrySource",jerryImg1);
     jerry.scale=0.1;
}

function draw() {
   background(gardenImg);
  if(tom.x-jerry.x < (tom.width-jerry.width)/2){
      tom.velocityX=0;
      tom.addAnimation("tomDest",tomImg4);
      tom.x=300;
      tom.scale=0.1;
      tom.changeAnimation("tomDest");

      jerry.addAnimation("jerryDest",jerryImg4);
      jerry.scale=0.1;
      jerry.changeAnimation("jerryDest");
  }  
    


    
    drawSprites();
    
  

}
function keyPressed(){
    if(keyCode === 32){
     tom.velocityX=-5;
     tom.addAnimation("tomRunning",tomImg2);
     tom.changeAnimation("tomRunning");

     jerry.addAnimation("jerryTeasing",jerryImg2);
     jerry.frameDelay=25;
     jerry.changeAnimation("jerryTeasing");

    }
}





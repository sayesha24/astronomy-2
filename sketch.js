var galaxy, galaxyImg;
var universe, bgImg;
var solarSystem, solarSystemIMG;
var button;
var stars, starImg;
var blackHole, blackHole_Img;
var coding, codingImg;
var astronomyHistory, historyImg;


var test;

function preload(){

  galaxyImg = loadImage("Images/galaxyImg.png");
  bgImg = loadImage("Images/universe.png");
  solarSystemIMG = loadImage("Images/solarSystem.png");
  starImg = loadImage("Images/stars.jpg");
  blackHole_Img = loadImage("Images/blackHole.png");
  codingImg = loadImage("Images/codingImg.jpg");
  historyImg = loadImage("Images/astronomyHistory.jpg");

}

function setup(){

  createCanvas(displayWidth, displayHeight); 

  test = createSprite(displayWidth/2, displayHeight/2, 500, 500);
  test.visible = false;

  universe = createSprite(displayWidth/2, displayHeight/2, 1000, 1000);
  universe.addImage(bgImg);
  universe.scale = 2.7;
  

  galaxy = createSprite(test.x - 600, test.y - 240, 102, 100);
  galaxy.addImage(galaxyImg);
  galaxy.scale = 1.3;
  galaxy.visible = false;

  solarSystem = createSprite(test.x + 570, test.y - 240, 102, 100);
  solarSystem.addImage(solarSystemIMG);
  solarSystem.scale = 1;
  solarSystem.visible = false;

  stars = createSprite(test.x, test.y - 300, 102, 100);
  stars.addImage(starImg);
  stars.scale = 0.4;
  stars.visible = false;
  
  blackHole = createSprite(test.x - 600, test.y + 300, 102, 100);
  blackHole.addImage(blackHole_Img);
  blackHole.scale = 0.9;
  blackHole.visible = false;

  coding = createSprite(test.x - 600, test.y, 102, 100);
  coding.addImage(codingImg);
  coding.scale = 0.9;
  coding.visible = false;

  astronomyHistory = createSprite(test.x + 600, test.y + 330, 102, 100);
  astronomyHistory.addImage(historyImg)
  astronomyHistory.scale = 2.4;
  astronomyHistory.visible = false;

  button = new Buttons();

 

  
}

function draw(){

  background("white");

  galaxy.velocityX = 3;
  solarSystem.velocityX = -3;
  stars.velocityY = 3;
  blackHole.velocityY = -3;
  coding.velocityX = 3;
  astronomyHistory.velocityX = -3;


  //console.log(displayWidth/2);
  //console.log(test.x);


  speeds();
  button.display();


  
  drawSprites();
}

function speeds(){




  if(galaxy.x == test.x){

    galaxy.velocityX = 0;
    galaxy.velocityY = 3;
  }

  if(galaxy.y == test.y){

    galaxy.velocityY = 0;
  }

  if(solarSystem.x == test.x ){

    solarSystem.velocityX = 0;
    solarSystem.velocityY = 3;
  }

  if(solarSystem.y == test.y){

    solarSystem.velocityY = 0;
  }

  if(stars.y == test.y){

    stars.velocityY = 0;
  }

  if(blackHole.y == test.y){

    blackHole.velocityY = 0;
    blackHole.velocityX = 3;
    
  }

  if(blackHole.x == test.x){

    blackHole.velocityX = 0;
  }

  if(coding.x == test.x){

    coding.velocityX = 0;

  }

  if(astronomyHistory.x == test.x){

    astronomyHistory.velocityX = 0;
    astronomyHistory.velocityY = -3;
  }

  if(astronomyHistory.y == test.y){

    astronomyHistory.velocityY = 0;
  }
}
var bow , arrow,  background, redGroup, pinkGroup, greenGroup ,blueGroup ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score = 0
var play,end,nextlevel; 
var gamestate = play;

function preload()
{
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
}
  
function setup() 
{
  createCanvas(400,560);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 3
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  // create groups
  redGroup= new Group()
  pinkGroup= new Group()
  blueGroup= new Group()
  greenGroup= new Group()
  arrowGroup= new Group() 
}

function draw() 
{ 
  //set Game States

  
if (gamestate === nextlevel){
  //moving background
  background.velocityX = -3 
  if (background.x < 0)
  {
    background.x = background.width/2;
  }
  //arrows shooting
  if (keyDown("space")) 
  {
    createArrow();
  }
  //bow movement
  bow.y = World.mouseY
 
     if (World.frameCount % 40 == 0) {
       if (select_balloon == 1) {
         redBalloon();
       } else if (select_balloon == 2) {
         greenBalloon();
       } else if (select_balloon == 3) {
         blueBalloon();
       }else if (select_balloon == 4) {
         redBalloon();
       }else if (select_balloon == 5) {
         redBalloon();
       } else {
         pinkBalloon();
       }
     } 
     if(arrowGroup.isTouching(redGroup))
   {
     redGroup.destroyEach()
     arrowGroup.destroyEach()
     score=score-2
   }
   
   if(arrowGroup.isTouching(greenGroup))
   {
     greenGroup.destroyEach()
     arrowGroup.destroyEach()
     score=score+3
   }
   
   if(arrowGroup.isTouching(blueGroup))
   {
     blueGroup.destroyEach()
     arrowGroup.destroyEach()
     score=score+2
   }
   
   if(arrowGroup.isTouching(pinkGroup))
   {
     pinkGroup.destroyEach()
     arrowGroup.destroyEach()
     score=score+2
   }
 
   //end 
     if(score<=-2)
    {
     text("Aww You lost Press R to restart",20,200)  
     gamestate = end
    } 
 }


  if(gamestate === play)
  {
    //moving background
    background.velocityX = -3 
    if (background.x < 0)
    {
      background.x = background.width/2;
    }
    //arrows shooting
    if (keyDown("space")) 
    {
      createArrow();
    }
    //bow movement
    bow.y = World.mouseY

    //spawning continuous balloons
    var select_balloon = Math.round(random(1,6));
  
    if (World.frameCount % 100 == 0) {
      if (select_balloon == 1) {
        redBalloon();
      } else if (select_balloon == 2) {
        greenBalloon();
      } else if (select_balloon == 3) {
        blueBalloon();
      }else if (select_balloon == 4) {
        redBalloon();
      }else if (select_balloon == 5) {
        redBalloon();
      } else {
        pinkBalloon();
      }
    }
    //scoring system
  if(arrowGroup.isTouching(redGroup))
  {
    redGroup.destroyEach()
    arrowGroup.destroyEach()
    score=score-2
  }
  
  if(arrowGroup.isTouching(greenGroup))
  {
    greenGroup.destroyEach()
    arrowGroup.destroyEach()
    score=score+3
  }
  
  if(arrowGroup.isTouching(blueGroup))
  {
    blueGroup.destroyEach()
    arrowGroup.destroyEach()
    score=score+2
  }
  
  if(arrowGroup.isTouching(pinkGroup))
  {
    pinkGroup.destroyEach()
    arrowGroup.destroyEach()
    score=score+2
  }

  if(score<=-2)
  {
   text("You lost Press R to restart",20,200)  
   gamestate = end
  } 
  
  }
  else if(gamestate === end)
  {
    //stop the ground
    background.velocityX = 0 
  }

  if (keyDown("R")) 
  {
    score=0
    gamestate = play
  }

  if (keyDown("N")) 
  {
    score=0
    gamestate = nextlevel
  }
  drawSprites();

  if(score>=20)
  {
    text("YOU WIN!Press R to restart",20,200)  
  } 

  
  text(20)
  text("Score: "+ score, 270,30);
}


// Creating  arrows for bow
function createArrow()
{
  var arrow= createSprite(400, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 150;
  arrow.scale = 0.3;
  arrowGroup.add(arrow)
}


function redBalloon() 
{
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redGroup.add(red);
}

function blueBalloon() 
{
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueGroup.add(blue);
}

function greenBalloon()
{
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenGroup.add(green);
}

function pinkBalloon() 
{
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;
  pinkGroup.add(pink);
}

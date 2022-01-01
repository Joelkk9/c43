var iss;
var spacecraft;
var hasDocked = false;

function preload(){
  spaceBgImg = loadImage ("spacebg.jpg");
  spacecraftImage = loadImage("spacecraft1.png");
  spacecraft2Image = loadImage("spacecraft2.png")
  spacecraft3Image = loadImage("spacecraft3.png");
  spacecraft4Image = loadImage("spacecraft4.png");
  
  issImg = loadImage ("iss.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  
  iss = createSprite (width/2,300,50,50);
  iss.addImage("issImage",issImg);
  iss.scale = 1.2;

  spacecraft =  createSprite(400,200,50,50);
  spacecraft.addImage("spaceCraftImage3",spacecraft3Image);
  spacecraft.addImage("spaceCraftImage4",spacecraft4Image);
  spacecraft.addImage("spaceCraftImage2",spacecraft2Image);
  spacecraft.addImage("spaceCraftImage",spacecraftImage);
  spacecraft.scale = 0.5;
}

function draw() {
  background(spaceBgImg);  
  drawSprites();

  if(!hasDocked) {
    spacecraft.x = spacecraft.x + random(-1,1)

    if(!keyDown("LEFT_ARROW")){
      spacecraft.x = spacecraft.x+3
      spacecraft.changeImage("spaceCraftImage3");
    }

    if(!keyDown("RIGHT_ARROW")){
      spacecraft.x = spacecraft.x-3
      spacecraft.changeImage("spaceCraftImage4");
    }

    if(!keyDown("DOWN_ARROW")){
      spacecraft.y = spacecraft.y-3
      spacecraft.changeImage("spaceCraftImage2");
    }
    
    if(!keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y+3
      
    }

    if(spacecraft.x<=iss.y+70 && spacecraft.x<=iss.x-10  ){
      hasDocked =true;
      fill ("white")
      textSize(30);
      text("Docking Sucessfull!",200,300);


      
      
    }

  }
}

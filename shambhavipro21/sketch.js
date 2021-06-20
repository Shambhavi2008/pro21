var back,backgroundImg,astronaut,sleep,brush,eat,bath,gym,moving;

function preload() {
    backgroundImg = loadImage("images/iss.png");
    sleep = loadImage("images/sleep.png");
    brush = loadImage("images/brush.png");
    eat = loadAnimation("images/eat1.png","images/eat2.png");
    bath = loadAnimation("images/bath1.png","images/bath2.png");
    gym = loadAnimation("images/gym1.png","images/gym2.png");
    moving = loadAnimation("images/move1.png","images/move2.png");
}

function setup(){
    createCanvas(1000,800);
    back = createSprite(500,400);
    back.addImage(backgroundImg);
    back.scale = 0.2;

    astronaut = createSprite(500,400);
    astronaut.addImage("nap",sleep);
    astronaut.addImage("brushTheTeeth",brush);
    astronaut.addAnimation("eating",eat);
    astronaut.addAnimation("shower",bath);
    astronaut.addAnimation("gymImg",gym);
    astronaut.addAnimation("move",moving);
    astronaut.scale = 0.1;
}

function draw() {

    if(keyDown("UP_ARROW")||
    keyDown("LEFT_ARROW")||
    keyDown("RIGHT_ARROW")||
    keyDown("DOWN_ARROW")||
    keyDown("M")) {
        if(keyDown("UP_ARROW")){
            astronaut.changeImage("brushTheTeeth",brush);
        }if(keyDown("LEFT_ARROW")){
            astronaut.changeAnimation("eating",eat);
        }if(keyDown("RIGHT_ARROW")){
            astronaut.changeAnimation("shower",bath);
        }if(keyDown("DOWN_ARROW")){
            astronaut.changeAnimation("gymImg",gym);
        }if(keyDown("M")){
            astronaut.changeAnimation("move",moving);
        }
    }
    else{
        astronaut.changeImage("nap",sleep);
    }

    background(255);
    drawSprites();
}

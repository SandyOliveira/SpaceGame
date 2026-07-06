
var back,imgBack;
var space;
var enemyOne,meteoro;
function preload(){
    imgBack = loadImage("./assets/background.jpeg");
    meteoro = loadImage("./assets/meteor.png");

}

function setup(){
    createCanvas(windowWidth,windowHeight);
    back = createSprite(width/2,height/2-200);
    back.addImage(imgBack);
   
}
function draw(){
    background(220);
    enemys();
    drawSprites();
}

function enemys(){
 if(frameCount%60===0){
    enemyOne = createSprite(50,0);
    enemyOne.velocityY = 4;
 }
}
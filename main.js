var enemyOne,meteoro;
var imgSpace;
var imgGround;

var bgY1;
var bgY2;

var bgHeight;
var bgSpeed = 1;
var bgOffset = -400;

function preload() {

  imgSpace = loadImage("./assets/space3.png");
  imgGround = loadImage("./assets/ground.png");
  meteoro = loadImage("./assets/meteor.png");

}

function setup() {

  createCanvas(windowWidth, windowHeight);

  adjustBackground();

}

function draw() {

 background(0);

  drawBackground();

  enemys();

  drawSprites();

  drawGround();

}

function enemys(){
 if(frameCount%60===0){
    enemyOne = createSprite(50,0);
    enemyOne.addImage(meteoro);
    enemyOne.velocityY = 4;
 }
}

//CENARIO - BACK AND SPACE
function drawBackground() {

  image(imgSpace, 0, bgY1 + bgOffset, width, bgHeight);
  image(imgSpace, 0, bgY2 + bgOffset, width, bgHeight);

  bgY1 += bgSpeed;
  bgY2 += bgSpeed;

  if (bgY1 >= bgHeight + 400) {
    bgY1 = bgY2 - bgHeight;
  }

  if (bgY2 >= bgHeight + 400) {
    bgY2 = bgY1 - bgHeight;
  }

}

function drawGround() {

  var scale = width / imgGround.width;
  var groundHeight = imgGround.height * scale;

  var groundOffset;

  if (windowWidth > windowHeight) {
    //mexe aqui Pedro pra descer o solo no modo web
    groundOffset = 380;
  } else {
    groundOffset = 20;
  }

  image(
    imgGround,
    0,
    height - groundHeight + groundOffset,
    width,
    groundHeight
  );

}

function adjustBackground() {

  bgHeight = imgSpace.height * (width / imgSpace.width);

  bgY1 = 0;
  bgY2 = -bgHeight;

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

  adjustBackground();

}
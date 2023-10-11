var garden, rabbit, apple, orange, red;
var gardenImg, rabbitImg, appleImg, orangeImg, redImg;
var appleGroup, orangeGroup, redGroup;
var score;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}

function setup() {

  createCanvas(400, 400);
  //Mover fondo
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);
  appleGroup = createGroup();
  redGroup = createGroup();
  orangeGroup = createGroup();
  //crear sprite rabbit
  rabbit = createSprite(160, 340, 20, 20);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
  score = 0;
}

function draw() {
  background(0);
  text("manzanas" + score, 300, 200);
  //mover el sprite rabbit en el eje X con el mouse
  rabbit.x = World.mouseX;

  edges = createEdgeSprites();
  rabbit.collide(edges);
  createApples();

  drawSprites();
  createOrange();
  createRed();
}

function createApples() {
  if (frameCount % 150 === 0) {
    apple = createSprite(20, 40, 10, 10);
    apple.y = Math.round(random(1, 1));
    apple.x = Math.round(random(350, 80));
    apple.addImage(appleImg);
    apple.scale = 0.07;
    apple.velocityY = 3;
    appleGroup.add(apple);
    apple.lifetime = 150;
  }
  for (var i = 0; i < appleGroup.length; i++) {
    if (rabbit.isTouching(appleGroup.get(i))) {
      score = score + 1;
      appleGroup.get(i).destroy();
    }
  }
}

function createOrange() {
  if (frameCount % 100 === 0) {
    orange = createSprite(10, 20, 10, 10);
    orange.y = Math.round(random(1, 1));
    orange.x = Math.round(random(350, 80));
    orange.addImage(orangeImg);
    orange.scale = 0.08;
    orange.velocityY = 3;
    orangeGroup.add(orange);
    orange.lifetime = 150;
  }
  for (var i = 0; i < orangeGroup.length; i++) {
    if (rabbit.isTouching(orangeGroup.get(i))) {
      score = score - 1;
      orangeGroup.get(i).destroy();
    }
  }
}

function createRed() {
  if (frameCount % 120 === 0) {
    red = createSprite(30, 30, 10, 10);
    red.y = Math.round(random(1, 1));
    red.x = Math.round(random(350, 80));
    red.addImage(redImg);
    red.scale = 0.06;
    red.velocityY = 3;
    redGroup.add(red);
    red.lifetime = 150;
  }
  for (var i = 0; i < redGroup.length; i++) {
    if (rabbit.isTouching(redGroup.get(i))) {
      score = score - 1;
      redGroup.get(i).destroy();
    }
  }
}
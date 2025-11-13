let myFont;
const browserType = "Anya Soni";
browserType.length;

function setup(){
    createCanvas(600,600);
    frameRate(30);
}

function draw(){
    background(0);
    drawCursor();
    let fps = frameRate();
  text(fps, 50, 50);
}

function preload(){
    myFont = loadFont("assets/tomatoes-O8L8.ttf");
}

function drawCursor(){
    textAlign(CENTER, CENTER);
    fill(255,0,0);
    textSize(70);
    textFont(myFont);
    text("Anya Soni.", 300, 300,)
}


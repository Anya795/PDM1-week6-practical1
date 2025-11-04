let myFont;

function setup(){
    createCanvas(600,600);
}

function draw(){
    background(0);
    textAlign(CENTER, CENTER);
    fill(255,0,0);
    textSize(90);
    textFont(myFont);
    text("Anya Soni.", 300, 300,)
}

function preload(){
    myFont = loadFont("assets/tomatoes-O8L8.ttf");
}
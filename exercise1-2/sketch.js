let myFont;
let myFont1;
let currentFont;
function setup(){
    createCanvas(600,600); 
}

function draw(){
    background(0);
    textAlign(CENTER, CENTER);
    fill(255,0,0);
    textSize(90);
    textFont(myFont);
    text("Anya Soni.", 300, 300)
    textFont(myFont1);
    text("Anya Soni.", 300, 300)
    currentFont = myFont;
    
}

function preload(){
    myFont = loadFont("assets/tomatoes-O8L8.ttf");
     myFont1 = loadFont("assets/TheHeartOfEverythingDemo-KRdD.ttf");
}
    
function keyPressed(){
    if (key === 'F'){
        (currentFont === myFont1);
} else {
    currentFont = myFont;
}

    }
textFont(currentFont);
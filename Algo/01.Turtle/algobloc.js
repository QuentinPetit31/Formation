/*
//A1
//Initialisation
setPos(300,300);
faceDown();
setLineWidth(10);
changeColor(color.red);

// Realisation
forward(200);
faceRight();
forward(100);
*/

/*
//A2
//Initialisation
setPos(300,300);
changeColor(color.yellow);
faceLeft();
// Realisation
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200);
*/

/*
//A3
//Initialisation
setPos(300,300);
changeColor(color.yellow);
faceLeft();
// Realisation
forward(100);
faceRight();
forward(200);
faceLeft();
forward(100);
faceUp();
forward(100);
faceDown();
forward(200);
*/

/*
//A4
//Initialisation
setPos(150,450);
changeColor(color.green);
// Realisation
faceRight();
forward(200);
arcLeft(100,90);
arcLeft(100,90);
faceLeft();
forward(100);
arcRight(100,90);
arcRight(100,90);
forward(200);
*/

/*
//B1
//Initialisation
setPos(100,100);
changeColor(color.green);

// Realisation
for (let i=0; i<4; i++) {
    faceRight();
    forward(100);
    faceDown();
    forward(100);
} 
*/

/*
//B2
//Initialisation
changeColor(color.red);
setPos(100,300);
faceUp();

// Realisation
for (let i=0; i<4; i++) {
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
    faceUp();
}
*/

/*
//B3
//Initialisation
changeColor(color.fuchsia);
setPos(200,300);
faceUp();

// Realisation

for (let i=0; i<4; i++) {
    right(90);
    forward(100);    
}
*/

/*
//B4
//Initialisation
changeColor(color.blue);
setPos(100,300);
faceRight();
setLineWidth(10);
// Realisation
for (let i=0; i<3; i++) {
    forward(100);
    left(120)
}
*/

/*
//B5
//Initialisation
setPos(300,300);
faceUp();
setLineWidth(5);
changeColor(color.yellow);
// Realisation
forward(100);
changeColor(color.red);
for  (let i = 0 ; i < 3 ; i++){
    forward(50);
    right(120);
}
*/

/*
//B6
//Initialisation
setPos(50,300);
faceRight();
setLineWidth(05);
changeColor(color.red);
// Realisation
for  (let i = 0 ; i < 2 ; i++){
    forward(100);
    faceUp();
    forward(100);
    faceRight();
}
changeColor(color.green);

for  (let i = 0 ; i < 3 ; i++){
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}
*/

/*
//B7
//Initialisation
setPos(100,300);
faceRight();
setLineWidth(05);
changeColor(color.red);
//Realisation
for  (let i = 0 ; i < 4 ; i++){
    right(90);
    forward(50);
}
faceLeft();
for  (let i = 0 ; i < 3 ; i++){
    forward(50);
    right(120);
}
*/

for(let i = 0 ; i < 880 ; i++){
    for(let i = 0 ; i < 5 ; i++){
        forward(200)
        left(175)
        shiftColor(0.005)

    }
    right(1);
    forward(i);
}


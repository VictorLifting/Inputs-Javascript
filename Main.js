let loginScreen;
function setup() {
    createCanvas(500, 500);
    loginScreen = new LoginScreen();

}
function draw() {
    background(155);
    loginScreen.paint();
  
}
function keyPressed() {
    if (key != "Backspace") {
       loginScreen.writeTextInput(key)
        
    } else {
        loginScreen.eraseTextInput();
    }
}
function mousePressed() {
   loginScreen.focusInputs(mouseX,mouseY);
}
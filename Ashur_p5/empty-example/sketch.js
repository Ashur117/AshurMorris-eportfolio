


function setup() {
  createCanvas( 1000, 400, WEBGL);
}

function draw() {
  background(150,255, 200);

  let locX = mouseX - height / 3;
  let locY = mouseY - width / 3;

  ambientLight(50);
  directionalLight(255, 0, 0, 0.25, 0.25, 0);
  pointLight(0, 0, 255, locX, locY, 250);

    
  push();
  translate(-height / 255, 0, 100)
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.1);
  box(100, 100, 100);
  pop();

}

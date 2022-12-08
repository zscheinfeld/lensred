let ps;
var wiggle = 0;
var storrage =[]

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("grid");
  ps = new ParticleSystem(createVector(width / 2, 50))
}

function draw() {
  background(0);
  for (var i = 0; i < touches.length; i++) {
      storrage[i]= touches[i].y
  }

  for (var i = 0; i<storrage.length; i++){
    ps.origin.set(width/2, storrage[i], 0);
    ps.addParticle();
    ps.run();
  }

}

// do this prevent default touch interaction
function mousePressed() {
  return false;
}

document.addEventListener('gesturestart', function(e) {
  e.preventDefault();
});


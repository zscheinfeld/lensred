class Particle {

    constructor(x,y,wiggle) {
      this.velocity = createVector(random(-1, 1), random(-1, 1))
      this.acceleration = createVector(0, 0);
      this.position = createVector(x, y);
      this.lifespan = 500;
      
    }
    
    run() {
      this.display();
      this.update();   
    }
  
    update() {
      
      this.position.add(this.velocity);
      this.lifespan -= 2;
      if(mouseIsPressed) this.acceleration.y = 0;
      this.velocity.add(this.acceleration);
    }
    
    isDead() {
      if(this.lifespan <= 0) return true;
      else return false;
    }
    
    
    display() {
        stroke(0, 0,0,0);
        fill(255,0,0, this.lifespan)
      ellipse(this.position.x, this.position.y, 20, 20)
    }
  }
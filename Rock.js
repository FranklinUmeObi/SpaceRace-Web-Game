class Rock {
  constructor(img) {
    let direction = [-1,1]
    this.dir = random(direction)

    if (this.dir>0) {
      this.startX = random(-20,0)*30
    } else {
      this.startX = width + random(0,25)*30
    }

    this.x = this.startX
    this.y = random(1,23) * 20;
    this.diameter = 20;
    this.speed = 1;
    this.img = img;



  }

  move() {
    this.x += this.speed * this.dir

    if (this.dir>0) {
      if(this.x > width) this.x = random(-15,0)*30
    } else {
      if(this.x < 0) this.x = width + random(0,15)*30
    }
  }

  display() {

    image(img,this.x, this.y, this.diameter, this.diameter)
  }
}

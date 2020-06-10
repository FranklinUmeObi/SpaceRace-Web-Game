class Ship {
  constructor(img) {
    this.x = 300
    this.y = 540
    this.img = img;
  }

  display()
  {
    image(this.img,this.x, this.y, 60, 70)
  }
}

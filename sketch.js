let rocks = [];
let ship;
let img
let img2

function preload() {
  img = loadImage('rock.png');
  img2 = loadImage('ship.png');
}



function setup() {
  canvas = createCanvas(600, 600);

  for (let i = 0; i < NUM_ROCKS; i++)
  {
    rocks.push(new Rock(img));
  }

  ship = new Ship(img2)
}



function draw() {
  background(0);
  for (let i = 0; i < rocks.length; i++) {
    rocks[i].move();
    rocks[i].display();
  }
  ship.display()

  if (keyIsDown(UP_ARROW)) {
    ship.y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    ship.y += 5;
  }
}



function showAll() {
  for (var i = 0; i < 40; i++) {
    rocks[i].show;
  }
}

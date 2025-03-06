class Player {
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.v = 2;
    this.Bv = 2;
    //velocity
  }

  draw(ctx) {
    ctx.fillStyle = this.c;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  update(keys) {
    if (keys["w"]) {
      if (this.y - this.v > 0){
        this.y -= this.v;
      }
    }
    if (keys["s"]) {
      if (this.y + this.h + this.v < gameCanvas.height){
        this.y += this.v;
      }
    }
    if (keys["a"]) {
      if (this.x - this.v > 0){
        this.x -= this.v;
      }
    }
    if (keys["d"]) {
      if (this.x + this.w + this.v < gameCanvas.width){
        this.x += this.v;
      }
    }
    if (keys[" "]){
      this.v = 10;
    }
      else {
        this.v = this.Bv
      }
    if (keys["e"]){
      if (this.h > 5){
        this.h -= 1;
        this.w -= 1;
      }
    }
    if (keys["r"]){
      if (this.h < 200){
        this.h += 1;
        this.w += 1;
      }

    }
}
}

const myPlayer = new Player(10, 10, 50, 50, "red");

const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext("2d");

const resizeCanvas = () => {
  gameCanvas.width = window.innerWidth;
  gameCanvas.height = window.innerHeight;
};

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

let keys = {};

//                             e.key = w, do keys se prida w: true
window.addEventListener("keydown", (e) => (keys[e.key] = true));
window.addEventListener("keyup", (e) => (keys[e.key] = false));

const gameLoop = () => {
  ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);

  //update
  myPlayer.update(keys);
  //draw
  myPlayer.draw(ctx);
  requestAnimationFrame(gameLoop);
  ctx.fillStyle = testObject.c;
  ctx.fillRect(testObject.x, testObject.y, testObject.w, testObject.h);
  checkCollision(myPlayer, testObject);
};

requestAnimationFrame(gameLoop);

let testObject = {
  x: 100, 
  y: 200,
  w: 100,
  h: 100,
  c: "blue"
}

const checkCollision = (object1, object2) => {
  if (object1.x + object1.w > object1.x && object1.y == object2.y || object1.x < object2.x + object1.w && object1.y == object2.y || object1.y + object1.h > object2.y && object1.y == object2.y || object1.y < object2.y + object2.h && object1.x == object2.x){
    console.log("wwwww")
  }
}

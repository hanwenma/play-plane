class Bullets {
  public x: number;
  public y: number;
  public speed: number = 1;
  public border: number = 0;
  public onDestroy: (() => void) | undefined;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  move() {
    this.y -= this.speed;

    if (this.y <= this.border) {
      this.onDestroy && this.onDestroy();
    }
  }

}

export default Bullets
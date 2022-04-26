import Bullets from "./Bullets";

export interface Plane {
  x: number
  y: number
  bullets: Bullets[]
  moveDown: () => void
  moveUp: () => void
  moveLeft: () => void
  moveRight: () => void
  attack: () => void
  run: () => void
}

const defaultOptions = {
  x: 0,
  y: 0,
  speed: 5,
}

export function setupPlane(plane: any, options: any = {}, bullets: Bullets[] = []): Plane {
  // 初始化
  Object.assign(plane, defaultOptions, options);

  plane.bullets = bullets;

  initRun(plane, bullets);
  initAttack(plane, bullets);
  initMove(plane);

  return plane
}

function initAttack(plane: any, bullets: any[]) {
  plane.attack = () => {
    const bullet = new Bullets(plane.x + 106, plane.y);
    bullet.onDestroy = () => {
      const index = plane.bullets.indexOf(bullet)
      bullets.splice(index, 1)
    }
    bullets.push(bullet);
  }
}

function initRun(plane: any, bullets: any[]) {
  plane.run = () => {
    bullets.forEach((bullet: Bullets) => {
      bullet.move()
    });
  }
}

function initMove(plane: any) {
  plane.moveDown = () => {
    plane.y += plane.speed
  }

  plane.moveUp = () => {
    plane.y -= plane.speed
  }

  plane.moveLeft = () => {
    plane.x -= plane.speed
  }

  plane.moveRight = () => {
    plane.x += plane.speed
  }
}
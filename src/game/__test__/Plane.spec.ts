import { describe, expect, it } from "vitest";
import { reactive } from "vue";
import Bullets from "../Bullets";
import { setupPlane } from "../Plane";

describe("Plane", () => {

  describe("move", () => {
    const defaultOptions = { x: 0, y: 0, speed: 1 }
    const reactiveData = reactive({})

    it("moveDown", () => {
      const palne = setupPlane(reactiveData, defaultOptions)
      palne.moveDown()
      expect(palne.y).toBe(1)
    })

    it("moveUp", () => {
      const palne = setupPlane(reactiveData, defaultOptions)
      palne.moveUp()
      expect(palne.y).toBe(-1)
    })

    it("moveLeft", () => {
      const palne = setupPlane(reactiveData, defaultOptions)
      palne.moveLeft()
      expect(palne.x).toBe(-1)
    })

    it("moveRight", () => {
      const palne = setupPlane(reactiveData, defaultOptions)
      palne.moveRight()
      expect(palne.x).toBe(1)
    })
  });

  it("attack", () => {
    const bullets: Bullets[] = []
    const plane = setupPlane({}, bullets)

    plane.attack()

    expect(plane.bullets.length).toBe(1)
  });

  it("run", () => {
    const bullets = [new Bullets()]
    const palne = setupPlane({}, {}, bullets)
    palne.run()
    expect(bullets[0].y).not.toBe(0)
  })

  it("destroy bullet at the boder", () => {
    const bullets: Bullets[] = []
    const palne = setupPlane({}, {}, bullets)
    palne.attack()
    palne.run()
    expect(bullets.length).toBe(0)
  })
});
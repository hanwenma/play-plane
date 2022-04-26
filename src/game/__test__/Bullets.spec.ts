import { describe, expect, it, vi } from "vitest";
import Bullets from "../Bullets";

describe("Plane", () => {

  it("move", () => {
    const bullet = new Bullets()
    bullet.move()
    expect(bullet.y).toBe(-1)
  })

  it("invoke onDestroy at the boder", () => {
    const bullet = new Bullets()
    bullet.onDestroy = vi.fn()
    bullet.move()
    expect(bullet.onDestroy).toBeCalled()
  })

});
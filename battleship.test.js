import { Ship } from "./ship";

describe("Ship Function", () => {
  it("Create object", () => {
    const boat = Ship(2);
    expect(boat).toBeDefined();
  });

  it("Object contains correct properties", () => {
    const boat = Ship(2);
    expect(boat).toHaveProperty('length');
    expect(boat).toHaveProperty('getHits');
    expect(boat).toHaveProperty('isSunk');
    expect(boat).toHaveProperty('hit');
  });

  it("hit() function and getHits() function work", () => {
    const boat = Ship(2);
    boat.hit();
    boat.hit();
    expect(boat.getHits()).toBe(2);
  });

  it("isSunk() function works", () => {
    const boat = Ship(2);
    boat.hit();
    boat.hit();
    expect(boat.isSunk()).toBe(true);
  });
});

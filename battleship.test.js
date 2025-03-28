import { Ship } from "./ship";
import { Gameboard } from "./gameboard";

describe("Ship Function", () => {
  it("Create object", () => {
    const boat = Ship(2);
    expect(boat).toBeDefined();
  });

  it("Object contains correct properties", () => {
    const boat = Ship(2);
    expect(boat).toHaveProperty("length");
    expect(boat).toHaveProperty("getHits");
    expect(boat).toHaveProperty("isSunk");
    expect(boat).toHaveProperty("hit");
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

describe("Gameboard function", () => {
  it("Create object", () => {
    const board = Gameboard();
    expect(board).toBeDefined();
  });

  it("Place ship on gameboard", () => {
    const board = Gameboard();
    expect(board.placeShip(1, 1, "vertical")).toBeDefined();
  });

  it("Place ship on gameboard invalid position", () => {
    const board = Gameboard();
    expect(board.placeShip(0, 1, "vertical")).toBe("Invalid placement");
  });

  it("receiveAttack(): miss function works", () => {
    const board = Gameboard();
    board.placeShip(1, 1, "horizontal");
    expect(board.receiveAttack(4, 1)).toEqual("miss");
  });

  it("receiveAttack(): hit function works", () => {
    const board = Gameboard();
    board.placeShip(1, 1), "vertical";
    expect(board.receiveAttack(1, 2)).toEqual(1);
  });
});

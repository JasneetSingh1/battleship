import { Ship } from "./ship";
import { Gameboard } from "./gameboard";
import { Player } from "./player";

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

  it("allShipsSunk(): report all ships sunk", () => {
    const board = Gameboard();
    board.placeShip(1, 1), "vertical";
    board.placeShip(5, 5), "horizontal";
    board.receiveAttack(1,1)
    board.receiveAttack(1,2)
    board.receiveAttack(1,3)
    board.receiveAttack(5,5)
    board.receiveAttack(6,5)
    board.receiveAttack(7,5)
    expect(board.allShipsSunk()).toEqual(true);
  });
});

describe("Player function", () => {

  it("Player function object exists", () => {
    const pl = Player();
    expect(pl).toBeDefined();
  })

  it("Player function able to place ship in their gameboard", () => {
    const pl = Player();
    expect(pl.gameboard.placeShip(1, 1, "vertical")).toBeDefined();
  })
})
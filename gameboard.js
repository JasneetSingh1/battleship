import { Ship } from "./ship.js";
export function Gameboard() {
  let gameboard = [];
  let attacks = [];
  let ships = 0;
  for (let i = 0; i < 10; i++) {
    gameboard[i] = new Array(10).fill(0);
  }

  const placeShip = (x, y, placement) => {
    if (x >= 10 || y >= 10 || x <= 0 || y <= 0) {
      return false;
    }

    if (placement == "vertical") {
      if (y + 1 >= 10 || y + 2 >= 10 || y + 3 >= 10) {
        return false;
      }
    } else {
      if (x + 1 >= 10 || x + 2 >= 10 || x + 3 >= 10) {
        return false;
      }
    }

    if (placement == "vertical") {
      if (
        gameboard[x][y] != 0 ||
        gameboard[x][y + 1] != 0 ||
        gameboard[x][y + 2] != 0 ||
        gameboard[x][y + 1] != 0 ||
        gameboard[x][y + 3] != 0
      ) {
        return false;
      }
    } else {
      if (
        gameboard[x][y] != 0 ||
        gameboard[x + 1][y] != 0 ||
        gameboard[x + 2][y] != 0 ||
        gameboard[x + 3][y] != 0
      ) {
        return false;
      }
    }

    let ship = Ship(3);
    ships++;
    for (let i = 0; i < ship.length; i++) {
      gameboard[x][y] = ship;

      if (placement == "vertical") {
        y++;
      } else {
        x++;
      }
    }
    if (placement == "vertical") {
      // return gameboard[x];
      return true;
    }

    return true;
    // return gameboard[y];
  };

  const receiveAttack = (x, y) => {
    if (attacks.some((arr) => JSON.stringify(arr) === JSON.stringify([x, y])))
      return "invalid";
    if (gameboard[x][y] == 0) {
      attacks.push([x, y]);
      return "miss";
    } else {
      attacks.push([x, y]);
      const ship = gameboard[x][y];
      ship.hit();
      if (ship.isSunk() == true) {
        ships--;
      }
      ship.getHits();
      return "hit";
    }
  };

  const allShipsSunk = () => {
    if (ships == 0) return true;
    else return false;
  };

  const getBoard = () => {
    return gameboard;
  };
  return {
    placeShip,
    receiveAttack,
    allShipsSunk,
    getBoard,
  };
}

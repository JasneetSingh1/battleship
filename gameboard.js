import { Ship } from "./ship.js";
export function Gameboard() {
  let gameboard = [];
  let attacks = [];
  let ships = 0;
  for (let i = 0; i < 10; i++) {
    gameboard[i] = new Array(10).fill(0);
  }

  const placeShip = (x, y, placement) => {
    x = parseInt(x);
    y = parseInt(y);
    if (x >= 10 || y >= 10 || x < 0 || y < 0) {
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
    for (let i = 0; i < ship.getLength(); i++) {
      gameboard[x][y] = ship;

      if (placement == "vertical") {
        y++;
      } else {
        x++;
      }
    }

    return true;
  };
  const canPlaceShip = (x, y, placement, board) => {
    x = parseInt(x);
    y = parseInt(y);

    if (x >= 10 || y >= 10 || x < 0 || y < 0) {
      return false;
    }

    if (placement == "vertical") {
      if (y + 1 >= 10 || y + 2 >= 10) {
        return false;
      }

      if (board[x][y] != 0 || board[x][y + 1] != 0 || board[x][y + 2] != 0) {
        return false;
      }
    } else {
      if (x + 1 >= 10 || x + 2 >= 10) {
        return false;
      }
      if (board[x][y] != 0 || board[x + 1][y] != 0 || board[x + 2][y] != 0) {
        return false;
      }
    }

    return true;
  };

  const simPlaceShip = (x, y, placement, a, b, place) => {
    let tempBoard = getBoard().map((row) => row.slice());

    if (!canPlaceShip(x, y, placement, tempBoard)) {
      alert("Cannot place first ship here.");
      return false;
    }

    for (let i = 0; i < 3; i++) {
      if (placement === "vertical") {
        tempBoard[x][y + i] = 1;
      } else {
        tempBoard[x + i][y] = 1;
      }
    }

    if (!canPlaceShip(a, b, place, tempBoard)) {
      alert("Cannot place second ship here.");
      return false;
    }

    for (let i = 0; i < 3; i++) {
      if (place === "vertical") {
        tempBoard[a][b + i] = 1;
      } else {
        tempBoard[a + i][b] = 1;
      }
    }
    return true;
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
    simPlaceShip,
  };
}

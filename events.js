import { createGrid } from "./dom.js";
import { Player } from "./player.js";

const playerBoard = document.querySelector(".player-board");
const compBoard = document.querySelector(".computer-board");
const button = document.querySelector(".btn");

export const game = button.addEventListener("click", () => {
  document.querySelectorAll(".grid").forEach((n) => n.remove());
  let player2 = Player();
  createGrid(player2.gameboard, compBoard);

  let player1 = Player();
  createGrid(player1.gameboard, playerBoard);

  const players = [
    {
      name: "Player",
      player: player1
    },
    {
        name: "Computer",
        player: player2
    },
  ];

  player1.gameboard.placeShip(1, 1, "hori");
  player2.gameboard.placeShip(1, 1, "hori");

  let activePlayer = players[0];
  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;
  let turn = document.querySelector(".player-turn");
  turn.textContent = getActivePlayer().name;

  const player1Grid = document
    .querySelector(".player-board")
    .querySelectorAll(".grid");
  const player2Grid = document
    .querySelector(".computer-board")
    .querySelectorAll(".grid");

  const switchTurn = () => {
    if (getActivePlayer() == players[0]) {
      player2Grid.forEach(function (elem) {
        elem.setAttribute("style", "pointer-events:none;");
      });
      player1Grid.forEach(function (elem) {
        elem.removeAttribute("style");
      });
      turn.textContent = getActivePlayer().name;
    } else {
      player1Grid.forEach(function (elem) {
        elem.setAttribute("style", "pointer-events:none;");
      });

      player2Grid.forEach(function (elem) {
        elem.removeAttribute("style");
      });
      turn.textContent = getActivePlayer().name;
    }
  };

  switchTurn();

  player1Grid.forEach(function (elem) {
    elem.addEventListener("click", function () {
      const coordinate = elem.getAttribute("coordinate");
      const position = coordinate.split(",");

      const result = player1.gameboard.receiveAttack(position[0], position[1]);

      if (result == "hit") {
        elem.textContent = "✷";
      } else {
        elem.textContent = "•";
        switchPlayerTurn();
        switchTurn();
      }


    });
  });

  player2Grid.forEach(function (elem) {
    elem.addEventListener("click", function () {
      const coordinate = elem.getAttribute("coordinate");
      const position = coordinate.split(",");

      const result = player2.gameboard.receiveAttack(position[0], position[1]);

      if (result == "hit") {
        elem.textContent = "✷";
      } else {
        elem.textContent = "•";
        switchPlayerTurn();
        switchTurn();
      }


    });
  });
});

import { createGrid } from "./dom.js";
import { Player } from "./player.js";

const playerBoard = document.querySelector(".player-board");
const compBoard = document.querySelector(".computer-board");
const button = document.querySelector(".btn");
const reset = document.querySelector(".reset");

const shipDialog = document.querySelector(".ship-dialog");
const shipForm = document.querySelector(".ship-form");

const alphax = document.querySelector("#alpha-ship");
const alphay = document.querySelector("#alpha-ship-y");
const alphap = document.querySelector("#alpha-ship-place");
const bravox = document.querySelector("#bravo-ship");
const bravoy = document.querySelector("#bravo-ship-y");
const bravop = document.querySelector("#bravo-ship-place");

export const game = button.addEventListener("click", () => {
  document.querySelectorAll(".grid").forEach((n) => n.remove());
  button.setAttribute("style", "pointer-events:none;");
  
  reset.addEventListener("click", () => {
    end.textContent = "";
    turn.textContent = "";
    player1.reset();
    player2.reset();
    document.querySelectorAll(".grid").forEach((n) => n.remove());
    button.removeAttribute("style");
  })

  shipDialog.showModal();

  let player1 = Player();
  let player2 = Player();

  

  createGrid(player1.gameboard, playerBoard);
  createGrid(player2.gameboard, compBoard);
  

  alphax.value = "";
  alphay.value = "";
  bravox.value = "";
  bravoy.value = "";
  alphap.value = "";
  bravop.value = "";

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
  
  shipForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if(player1.gameboard.simPlaceShip(
      parseInt(alphax.value), 
      parseInt(alphay.value), 
      alphap.options[alphap.selectedIndex].value, 
      parseInt(bravox.value), 
      parseInt(bravoy.value), 
      bravop.options[bravop.selectedIndex].value)){
      
      player1.gameboard.placeShip(parseInt(alphax.value), parseInt(alphay.value), alphap.options[alphap.selectedIndex].value);
      player1.gameboard.placeShip(parseInt(bravox.value), parseInt(bravoy.value), bravop.options[bravop.selectedIndex].value)
      alphax.value = "";
      alphay.value = "";
      bravox.value = "";
      bravoy.value = "";
      alphap.value = "";
      bravop.value = "";
  
      shipDialog.close();
    }

  })
  const compShips = () => {

    for(let i = 0; i < 2; i++){
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      let place = false;
      while(place == false){
        let random = Math.random()
        if(random > .5){
          
          place = player2.gameboard.placeShip(x,y, "hori");
        }
        else{
          
          place = player2.gameboard.placeShip(x,y, "vertical");
        }
        
        if(place == false){
          x = Math.floor(Math.random() * 10);
          y = Math.floor(Math.random() * 10);
        }

      }
      
    }
  }
  


  compShips();
  
  let activePlayer = players[0];
  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;
  let turn = document.querySelector(".player-turn");
  turn.textContent = getActivePlayer().name;
  let end = document.querySelector(".end-game");
  end.textContent = "";
  const player1Grid = document
    .querySelector(".player-board")
    .querySelectorAll(".grid");
  const player2Grid = document
    .querySelector(".computer-board")
    .querySelectorAll(".grid");

  const switchTurn = () => {
    if (getActivePlayer() == players[0]) {
      player1Grid.forEach(function (elem) {
        elem.setAttribute("style", "pointer-events:none;");
      });
      player2Grid.forEach(function (elem) {
        elem.removeAttribute("style");
      });
      turn.textContent = getActivePlayer().name;
    } else {
      player2Grid.forEach(function (elem) {
        elem.setAttribute("style", "pointer-events:none;");
      });

      player1Grid.forEach(function (elem) {
        elem.removeAttribute("style");
      });
      turn.textContent = getActivePlayer().name;
      
      while(compMove() == true);
    }
  };

  const compMove = async () => {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);

    await new Promise(resolve => setTimeout(resolve, 10));
    document.querySelector(`[coordinate="${[x,y]}"]`).click();
};

  

  player1Grid.forEach(function (elem) {
    elem.addEventListener("click", function () {
      const coordinate = elem.getAttribute("coordinate");
      const position = coordinate.split(",");

      const result = player1.gameboard.receiveAttack(position[0], position[1]);

      if (result == "hit") {
        elem.textContent = "✷";
        if(player1.gameboard.allShipsSunk()){
            end.textContent = `GAME OVER: ${getActivePlayer().name} WON!!`
            document.querySelectorAll(".grid").forEach((n) => n.setAttribute("style", "pointer-events:none;"));
        }
        else{
          switchTurn();
          
        }
      } else if(result == "miss") {
        elem.textContent = "•";
        switchPlayerTurn();
        switchTurn();
        
      }
      else{
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
        if(player2.gameboard.allShipsSunk()){
            end.textContent = `GAME OVER: ${getActivePlayer().name} WON!!`
            document.querySelectorAll(".grid").forEach((n) => n.setAttribute("style", "pointer-events:none;"));
        }
      } else if(result == "miss") {
        elem.textContent = "•";
        switchPlayerTurn();
        switchTurn();
      }
      else{
        return;
      }


    });
  });
});





export const alphaX = alphax.addEventListener("input", (e) => {

  if(alphax.value == bravox.value && alphay.value == bravoy.value){
    alphax.setCustomValidity("Alpha and Bravo ships cannot have the same coordinates");
  }
  else{
    alphax.setCustomValidity("");
  }
})



export const bravoX = bravox.addEventListener("input", (e) => {

  if(bravox.value == alphax.value && alphay.value == bravoy.value){
    bravox.setCustomValidity("Bravo and Alpha ships cannot have the same coordinates");
  }
  else{
    bravox.setCustomValidity("");
  }
})


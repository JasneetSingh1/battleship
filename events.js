import { createGrid } from "./dom.js";
import { Player} from "./player.js"

const playerBoard = document.querySelector(".player-board");
const compBoard = document.querySelector(".computer-board");
const button = document.querySelector('.btn');


export const game = button.addEventListener('click', () => {
    document.querySelectorAll('.grid').forEach( n => n.remove());
    let player = Player();
    createGrid(player.gameboard, compBoard);
    
    let player2 = Player();
    createGrid(player2.gameboard, playerBoard);

    const coor = document.querySelector('.computer-board').querySelectorAll(".grid");
    player.gameboard.placeShip(1, 1, "vertical")
    coor.forEach(function(elem){
        elem.addEventListener('click', function(){
            const coordinate = elem.getAttribute('coordinate');
            const position = coordinate.split(',');
            console.log(position)
            console.log(position[0] -1 , position[1] -1)
           const result = player.gameboard.receiveAttack(position[0] , position[1]);

           alert(result);
        })
    })
})


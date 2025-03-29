import { createGrid } from "./dom.js";
import { Player} from "./player.js"

const playerBoard = document.querySelector(".player-board");
const compBoard = document.querySelector(".computer-board");
const button = document.querySelector('.btn');

export const grid = button.addEventListener('click', () => {
    document.querySelectorAll('.grid').forEach( n => n.remove());
    let player = Player();
    console.log(player.gameboard.getBoard())
    createGrid(player.gameboard, compBoard);
    
    let player2 = Player();
    createGrid(player2.gameboard, playerBoard);
})
import { Gameboard } from "./gameboard.js";
export function Player(){
    
    const gameboard = Gameboard();
    const reset = () => {
        gameboard.resetBoard(); 
    }
    return {gameboard, reset}
}
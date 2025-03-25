import { Ship } from "./ship";
export function Gameboard(){

    let gameboard = [];
    for(let i = 0; i < 10; i++){
        gameboard[i] = new Array(10).fill(0);
    }

    const placeShip = (x,y) =>{
        let ship = Ship(3);

        for(let i = 0; i < ship.length; i++){
            gameboard[x][y] = 1;
            gameboard[y][x] = 1;
            x++;
            // Need something to mark the edges with the specific ship object
        }
        return gameboard[y];
    }

    const receiveAttack = (x,y) =>{
        if(gameboard[x][y] != 1){
            return 'miss';
        }else{
            return "hit";
        }
        
    }
    return{
        placeShip,
        receiveAttack
    };
}
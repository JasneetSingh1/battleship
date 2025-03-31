import { Ship } from "./ship.js";
export function Gameboard(){

    let gameboard = [];
    let attacks = [];
    let ships = 0;
    for(let i = 0; i < 10; i++){
        gameboard[i] = new Array(10).fill(0);
    }

    const placeShip = (x,y, placement) =>{
        if(x >= 10 || y >= 10 || x <= 0 || y <= 0){
            return 'Invalid placement';
        }

        let ship = Ship(3);
        ships++;
        for(let i = 0; i < ship.length; i++){
            
            
            gameboard[x][y] = ship;
           
            if(placement == "vertical"){
                y++;
            }
            else{
                x++;
            }
            
        }
        if(placement == 'vertical'){
            return gameboard[x];
        }
        
        return gameboard[y];
    }

    const receiveAttack = (x,y) =>{
        if(attacks.some(arr => JSON.stringify(arr) === JSON.stringify([x,y]))) return 'invalid';
        if(gameboard[x][y] == 0){
            attacks.push([x,y]);
            return 'miss';
        }else{
            attacks.push([x,y]);
            const ship = gameboard[x][y];
            ship.hit();
            if(ship.isSunk() == true){
                ships--;
            }
            ship.getHits();
            return 'hit';
        }
        
    }

    const allShipsSunk = () => {
        if(ships == 0) return true;
        else return false;
    }

    const getBoard = () => {
        return gameboard;
    }
    return{
        placeShip,
        receiveAttack,
        allShipsSunk,
        getBoard
    };
}
import { Ship } from "./ship";
export function Gameboard(){

    let gameboard = [];
    let missedAttacks = []
    for(let i = 0; i < 10; i++){
        gameboard[i] = new Array(10).fill(0);
    }

    const placeShip = (x,y) =>{
        let ship = Ship(3);

        for(let i = 0; i < ship.length; i++){
            gameboard[x][y] = ship;
            gameboard[y][x] = ship;
            x++;
        }
        return gameboard[y];
    }

    const receiveAttack = (x,y) =>{
        if(gameboard[x][y] == 0){
            missedAttacks.push([x,y]);
            return 'miss';
        }else{
            const ship = gameboard[x][y];
            ship.hit();
            return ship.getHits();
        }
        
    }
    return{
        placeShip,
        receiveAttack
    };
}
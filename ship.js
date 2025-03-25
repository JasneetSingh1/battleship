export function Ship(long){

    let hits = 0;
    const length = long;
    let sunk = false;

    const isSunk = () => {
        if(hits >= length){
            return true;
        }
        return false;
    }

    const hit = () => hits++;
    const getHits = () => hits;

    return{
        length,
        isSunk,
        hit,
        getHits
        
    }
}


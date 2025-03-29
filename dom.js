const playerBoard = document.querySelector(".player-board");
const compBoard = document.querySelector(".computer-board");


export function createGrid(){
    document.querySelectorAll('.grid').forEach( n => n.remove());
    
    for(let i = 0; i < 10 * 10; i++){
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid');
        const measure = (500 / 10);
        gridItem.setAttribute('style', `width:${measure}px; height:${measure}px;`);
        playerBoard.appendChild(gridItem);
        compBoard.appendChild(gridItem);
    }


}



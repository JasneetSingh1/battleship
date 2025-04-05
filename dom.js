export function createGrid(gameboard, playerDom) {
  const board = gameboard.getBoard();
  const gridSize = board.length;

  for (let i = 0; i <= gridSize; i++) {
    for (let j = 0; j <= gridSize; j++) {
      let gridItem = document.createElement("div");
      gridItem.classList.add("grid");

      if (i === gridSize && j === 0) {
        gridItem.textContent = ""; 
      } else if (i === gridSize) {
       
        gridItem.textContent = j - 1;
        gridItem.classList.add("label");
      } else if (j === 0) {
        
        gridItem.textContent = gridSize - i - 1;
        gridItem.classList.add("label");
      } else {
        
        const x = j - 1;
        const y = gridSize - i - 1;
        gridItem.setAttribute("coordinate", `${x},${y}`);
      }

      playerDom.appendChild(gridItem);
    }
  }
}

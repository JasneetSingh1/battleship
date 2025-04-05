export function createGrid(gameboard, playerDom) {
  const board = gameboard.getBoard();

  for (let i = board.length - 1; i >= 0; i--) {
    for (let j = 0; j < board[i].length; j++) {
      let gridItem = document.createElement("div");
      gridItem.classList.add("grid");
      const measure = 500 / 10;
      gridItem.setAttribute("coordinate", `${[j , i ]}`);

      playerDom.appendChild(gridItem);
    }
  }
}


// export function createGrid(gameboard, playerDom) {
//   const board = gameboard.getBoard();
//   const gridSize = board.length; // assuming 10
//   const totalSize = gridSize ; // 11x11 for labels

//   for (let i = 0; i < totalSize; i++) {
//     for (let j = 0; j < totalSize; j++) {
//       let gridItem = document.createElement("div");
//       gridItem.classList.add("grid");

//       if (i === 0 && j === 0) {
//         // top-left corner, leave blank
//         gridItem.textContent = "";
//       } else if (i === 0) {
//         // top row - x axis labels
//         gridItem.textContent = j - 1;
//         gridItem.classList.add("label");
//       } else if (j === 0) {
//         // left column - y axis labels
//         gridItem.textContent = i - 1;
//         gridItem.classList.add("label");
//       } else {
//         // actual game grid cell
//         const x = j - 1;
//         const y = gridSize - i; // flip y for visual from top-down
//         gridItem.setAttribute("coordinate", `${x},${y}`);
//       }

//       playerDom.appendChild(gridItem);
//     }
//   }
// }

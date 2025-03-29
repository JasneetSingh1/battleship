export function createGrid(gameboard, playerDom) {
  const board = gameboard.getBoard();

  for (let i = board.length - 1; i >= 0; i--) {
    for (let j = 0; j < board[i].length; j++) {
      let gridItem = document.createElement("div");
      gridItem.classList.add("grid");
      const measure = 500 / 10;
      gridItem.setAttribute("coordinate", `${[j , i ]}`);
      gridItem.setAttribute(
        "style",
        `width:${measure}px; height:${measure}px;`
      );

      playerDom.appendChild(gridItem);
    }
  }
}

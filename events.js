import { createGrid } from "./dom.js";
const button = document.querySelector('.btn');

export const grid = button.addEventListener('click', () => {
    createGrid();
    
})
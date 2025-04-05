## Table of Contents

1. [Description](#description)
1. [Features](#features)
1. [Technologies Used](#technologies-used)
1. [Project Challenges](#project-challenges)
1. [Thoughts and Observations](#thoughts-and-observations)
1. [Future Enhancements](#future-enhancements)
1. [Installation](#installation)

## Description

The Battleship project is a browser-based game where players compete against each other or an AI to sink the opponent's ships. The game uses JavaScript and follows a Test-Driven Development (TDD) approach with Jest. It includes functionality for placing ships on the gameboard, receiving attacks, checking game state, and rendering the game through the DOM. The game features player vs. AI gameplay and a dynamic grid system for rendering the boards. 

## Features

- **Ship Placement**: Players can place ships on their gameboard before the match starts. Ships can be placed horizontally or vertically.
- **Gameboard**: Dynamic grid system displaying the player and AI's gameboards.
- **Player vs AI**: The player competes against an AI that randomly places ships and attacks the player's board.
- **Attack Logic**: Players and AI take turns attacking each other's boards. Hits and misses are displayed accordingly.
- **Game Over Condition**: The game ends when one player has sunk all of the opponent's ships.
- **Interactive UI**: Players interact with the game via a grid-based interface with clickable cells.

## Technologies Used

- **JavaScript**: For game logic and DOM manipulation.
- **HTML/CSS**: For layout and styling of the game interface.
- **Jest**: For unit testing and Test-Driven Development (TDD).
- **Webpack**: For bundling the JavaScript files.

## Project Challenges

- **Handling User Input**: Managing the placement of ships on the board and validating the input to prevent overlapping or out-of-bounds placement was challenging but rewarding. I tackled it by using helper functions to check if a ship can be placed at a specific position.
- **Handling complex game state**: Keeping track of ships, attacks, and the state of the game required careful management of arrays and objects. I overcame this challenge by carefully structuring the gameboard, ship, and player objects and making sure their states were updated correctly during each interaction.
- **Implementing TDD**: It was challenging to ensure that all features, such as ship placement and attack handling, were properly tested before implementation. This process taught me how to break down problems into smaller pieces and write tests before coding the functionality.

## Thoughts and Observations

This project was a great opportunity to practice using factory functions over classes and to gain a deeper understanding of how to manage game state. The use of TDD helped ensure that every function worked correctly, and it was satisfying to see tests pass as the features were developed. It also highlighted the importance of validating user input, especially when dealing with grid-based systems.

## Future Enhancements

- **Add Varied Length Ships**: Provide players with the ability to place ships of different lengths, such as 2-length, 3-length, and 4-length ships, to make the game more dynamic and challenging.
  
- **Enhance AI Behavior**: Improve the AI's attack strategy by programming it to target adjacent grid squares once it hits a ship, making it more strategic and challenging for the player.

- **Mobile Responsiveness**: Mobile Responsiveness: Ensure the game is fully responsive, making it playable on different devices.

-**Implement drag-and-drop ship placement**: Instead of entering coordinates manually, I could allow players to drag and drop ships on the grid.

## Installation

1. Clone the GitHub repository to your local machine:

   ```bash
   git clone https://github.com/JasneetSingh1/battleship.git

2. Navigate to the project's directory:

   ```bash
   cd battleship

3. Install the project's dependencies using npm:

   ```bash
   npm install

4. To build the project:

   ```bash
   npm run build

5. Open index.html in your browser to start the game.




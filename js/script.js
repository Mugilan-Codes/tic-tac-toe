// Module
const GameBoard = (function () {
  let gameBoard = [];

  const render = () => {
    console.log(gameBoard);
  };

  return { render };
})();

// Factory
const CreatePlayer = (name) => {
  let score = 0;
  return { name, score };
};

const player1 = CreatePlayer('Mugilan');
const player2 = CreatePlayer('Jay');

console.log({ player1, player2 });
GameBoard.render();

// Set Width of the Game Board
const gameBoard__main = document.querySelector('main');

const windowHeight = window.screen.height;
const windowWidth = window.screen.width;

console.log(gameBoard__main.clientHeight);
console.log(gameBoard__main.clientWidth);

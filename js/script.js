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

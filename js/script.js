// Module
const GameBoard = (function () {
  let gameBoard = [];

  return { gameBoard };
})();

// Factory
const CreatePlayer = (name) => {
  let score = 0;
  return { name, score };
};

const player1 = CreatePlayer('Mugilan');
const player2 = CreatePlayer('Jay');

console.log({ player1, player2 });

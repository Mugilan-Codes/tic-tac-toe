// Module
const GameBoard = (function () {
  let gameBoard = [];
})();

// Factory
const CreatePlayer = (name, age) => {
  return { name, age };
};

const player1 = CreatePlayer('Mugilan', 21);
const player2 = CreatePlayer('Jay', 22);

console.log({ player1, player2 });

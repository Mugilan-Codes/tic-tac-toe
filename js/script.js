const X_MOVE = 'X';
const O_MOVE = 'O';

const gridPositions__div = document.querySelectorAll('.grid-item');

// Module
const GameBoard = (function () {
  let gameBoard = [
    X_MOVE,
    O_MOVE,
    X_MOVE,
    O_MOVE,
    X_MOVE,
    O_MOVE,
    X_MOVE,
    O_MOVE,
    X_MOVE,
  ];

  const render = () => {
    console.log(gameBoard);
    gridPositions__div.forEach((pos) => {
      pos.textContent = gameBoard[pos.dataset.position];
    });
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

// console.log(gridPositions__div);

// gridPositions__div.forEach((pos) =>
//   pos.addEventListener('click', (e) => console.log(e.target.dataset.position))
// );

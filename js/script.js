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

  // let sampleBoard = Object.seal([...Array(9)]);

  const render = () => {
    console.log(gameBoard);
    gridPositions__div.forEach((pos) => {
      pos.textContent = gameBoard[pos.dataset.position];
    });
  };

  const setPiece = (e) => {
    console.log(e.target.dataset.position);
  };

  return { render, setPiece };
})();

// Factory
const CreatePlayer = (name, key) => {
  let score = 0;
  return { name, score, key };
};

const player1 = CreatePlayer('Mugilan', X_MOVE);
const player2 = CreatePlayer('Jay', O_MOVE);

console.log({ player1, player2 });
GameBoard.render();

gridPositions__div.forEach((pos) =>
  pos.addEventListener('click', GameBoard.setPiece)
);

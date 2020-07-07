const X_MOVE = 'X';
const O_MOVE = 'O';

const gridPositions__div = document.querySelectorAll('.grid-item');

// Module
const GameBoard = (function () {
  // let gameBoard = [
  //   X_MOVE,
  //   O_MOVE,
  //   X_MOVE,
  //   O_MOVE,
  //   X_MOVE,
  //   O_MOVE,
  //   X_MOVE,
  //   O_MOVE,
  //   X_MOVE,
  // ];

  let gameBoard = Object.seal([...Array(9)]);
  let lastMarker;

  const _render = () => {
    console.log(gameBoard);
    gridPositions__div.forEach((pos) => {
      pos.textContent = gameBoard[pos.dataset.position];
    });
  };

  const setPiece = function (player) {
    console.log(this);
    gameBoard[this.dataset.position] = 'X';
    _render();
  };

  return { setPiece };
})();

// Factory
const CreatePlayer = (name, key) => {
  let score = 0;

  const placeMarker = () => {
    return key;
  };

  return { name, score, placeMarker };
};

const player1 = CreatePlayer('Mugilan', X_MOVE);
const player2 = CreatePlayer('Jay', O_MOVE);

player1.placeMarker();
player2.placeMarker();

console.log({ player1, player2 });
// GameBoard.render();

gridPositions__div.forEach((pos) =>
  pos.addEventListener('click', GameBoard.setPiece)
);

const gridPositions__div = document.querySelectorAll('.grid-item');

// Module
const GameBoard = (function () {
  let gameBoard = ['', '', '', '', '', '', '', '', ''];

  let lastMarker;

  const _render = () => {
    console.log(gameBoard);
    gridPositions__div.forEach((pos) => {
      pos.textContent = gameBoard[pos.dataset.position];
    });
  };

  const setPiece = function (player) {
    console.log(this);
    gameBoard[this.dataset.position] = player2.placeMarker();
    _render();
  };

  return { setPiece };
})();

// Factory
const CreatePlayer = (name, key) => {
  const MOVES = ['X', 'O'];
  let score = 0;

  const placeMarker = () => {
    return MOVES[key];
  };

  return { name, score, placeMarker };
};

const player1 = CreatePlayer('Mugilan', 0);
const player2 = CreatePlayer('Jay', 1);

player1.placeMarker();
player2.placeMarker();

console.log({ player1, player2 });
// GameBoard.render();

gridPositions__div.forEach((pos) =>
  pos.addEventListener('click', GameBoard.setPiece)
);

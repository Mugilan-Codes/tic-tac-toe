const GameBoard = (function () {
  // ['', '', '', '', '', '', '', '', '']
  // const gameBoard = Object.seal([...Array(9)].fill(''));
  const gameBoard = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];

  const gridItems = document.querySelectorAll('.grid-item');

  const render = () => {
    console.log(gameBoard);
    gridItems.forEach(
      (item) => (item.textContent = gameBoard[item.dataset.position])
    );
  };

  return { render };
})();

const DisplayController = (function () {
  const placeMarker = () => {};

  return { placeMarker };
})();

const PlayerFactory = (name, marker) => {
  return { name, marker };
};

GameBoard.render();

const player1 = PlayerFactory('Mugilan', 'X');
const player2 = PlayerFactory('Jay', 'O');

console.log({ player1, player2 });

const gridItems = document.querySelectorAll('.grid-item');

const GameBoard = (function () {
  // ['', '', '', '', '', '', '', '', '']
  const gameBoard = Object.seal([...Array(9)].fill(''));

  const _render = () => {
    console.log(gameBoard);
    gridItems.forEach(
      (item) => (item.textContent = gameBoard[item.dataset.position])
    );
  };

  const clickOnBoard = () => {
    gridItems.forEach((item) =>
      item.addEventListener('click', function () {
        // Returns if the cell is already filled
        if (gameBoard[this.dataset.position]) return;

        gameBoard[this.dataset.position] = 'X';
        _render();
      })
    );
  };

  return { clickOnBoard };
})();

const PlayerFactory = (name, marker) => {
  return { name, marker };
};

const player1 = PlayerFactory('Mugilan', 'X');
const player2 = PlayerFactory('Jay', 'O');

console.log({ player1, player2 });

GameBoard.clickOnBoard();

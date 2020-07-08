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
        const position = this.dataset.position;

        // Returns if the cell is already filled
        if (gameBoard[position]) return;

        gameBoard[position] = GamePlay.currentPlayer().marker;
        GamePlay.currentPlayer().moveTracker.push(position);
        _render();
        GamePlay.switchPlayer();
      })
    );
  };

  return { clickOnBoard };
})();

const PlayerFactory = (name, marker, isPlaying = false) => {
  let moveTracker = [];
  return { name, marker, isPlaying, moveTracker };
};

const player1 = PlayerFactory('Mugilan', 'X', true);
const player2 = PlayerFactory('Jay', 'O');

console.log({ player1, player2 });

const GamePlay = (function () {
  let currentPlayer = () => (player1.isPlaying ? player1 : player2);

  const switchPlayer = () => {
    player1.isPlaying = !player1.isPlaying;
    player2.isPlaying = !player2.isPlaying;
  };

  return { switchPlayer, currentPlayer };
})();

GameBoard.clickOnBoard();

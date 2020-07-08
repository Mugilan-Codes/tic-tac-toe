const GameBoard = (function () {
  // ['', '', '', '', '', '', '', '', '']
  // const gameBoard = Object.seal([...Array(9)].fill(''));
  const gameBoard = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];

  return { gameBoard };
})();

const DisplayController = (function () {
  const render = () => {
    console.log(GameBoard.gameBoard);
  };

  return { render };
})();

const PlayerFactory = (name) => name;

DisplayController.render();

const player1 = PlayerFactory('Mugilan');
const player2 = PlayerFactory('Jay');

console.log({ player1, player2 });

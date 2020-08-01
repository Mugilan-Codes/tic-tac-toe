const players = (name, marker) => {
  return { name, marker };
};

const gameBoard = (function () {
  let board;
  const resetBoard = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    console.log(board);
  };
  resetBoard();

  const updateBoard = (marker, position) => {
    if (board[position] !== '') return;
    board[position] = marker;
    console.log(board);
  };

  const checkWin = (marker) => {
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  };

  return { resetBoard, updateBoard };
})();

const game = (function () {
  const player1 = players('Mugilan', 'X');
  const player2 = players('Samantha', 'O');

  const start = () => {
    console.log({ player1, player2 });
  };

  return { start, checkWin };
})();

game.start();

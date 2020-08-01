const players = (name, marker) => {
  return { name, marker };
};

const gameBoard = (function () {
  let board = ['', '', '', '', '', '', '', '', ''];

  const updateBoard = (marker, position) => {
    if (board[position] !== '') return;
    board[position] = marker;
    console.log(board);
  };

  return { updateBoard };
})();

const displayController = (function () {})();

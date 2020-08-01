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

  return { resetBoard, updateBoard };
})();

const displayController = (function () {})();

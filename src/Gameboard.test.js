import Gameboard from './Gameboard.js';

it('has an array of ten rows', () => {
  const board = Gameboard();
  expect(board.board.length).toBe(10);
});

it('has 10 columns in a row', () => {
  const board = Gameboard();
  expect(board.board[0].length).toBe(10);
});

it('places a ship if coordinates are valid', () => {
  const board = Gameboard();;
  board.placeShip(3, 1, 1, 'horizontal');
  expect(board.board[1][1]).toBeTruthy();
  expect(board.board[1][2]).toBeTruthy();
  expect(board.board[1][3]).toBeTruthy();
});

it('does not place ship if goes off board', () => {
  const board = Gameboard();
  board.placeShip(3, 5, 8, 'horizontal');
  expect(board.board[5][8]).toBeFalsy();
});

it('does not place ship if location not empty', () => {
  const board = Gameboard();
  board.board[1][1] = 'x';
  board.placeShip(3, 1, 1, 'horizontal');
  expect(board.board[1][2]).toBeFalsy();
  expect(board.board[1][1]).toBeTruthy();
});

it('receives an attack', () => {
  const board = Gameboard();
  board.receiveAttack(3, 1);
})
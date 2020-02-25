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
  const board = Gameboard();
  const ship = { length: 3, direction: 'horizontal' };
  board.placeShip(ship, 1, 1);
  expect(board.board[1][1]).toBeTruthy();
  expect(board.board[1][2]).toBeTruthy();
  expect(board.board[1][3]).toBeTruthy();
});

it('marks placed ship with ship id', () => {
  const board = Gameboard();
  const ship = { length: 3, direction: 'horizontal', id: 1 };
  board.placeShip(ship, 1, 1);
  expect(board.board[1][1]).toBe(`${ship.id}0`);
})

it('does not place ship if goes off board', () => {
  const board = Gameboard();
  const ship = { length: 3, direction: 'horizontal', id: 1 };
  board.placeShip(ship, 1, 1);
  expect(board.board[5][8]).toBeFalsy();
});

it('does not place ship if location not empty', () => {
  const board = Gameboard();
  board.board[1][1] = 'x';
  const ship = { length: 3, direction: 'horizontal', id: 1 };
  board.placeShip(ship, 1, 1);
  expect(board.board[1][2]).toBeFalsy();
  expect(board.board[1][1]).toBeTruthy();
});

it('receives an attack', () => {
  const board = Gameboard();
  board.receiveAttack(3, 1);
})

it('marks "M" if spot is empty', () => {
  const board = Gameboard();
  board.receiveAttack(3, 1);
  expect(board.board[3][1]).toBe('M');
});

it('marks "X" if spot is occupied and not hit', () => {
  const board = Gameboard();
  const ship = { length: 3, direction: 'horizontal', id: 1 };
  board.placeShip(ship, 1, 1);
  board.receiveAttack(1, 1);
  expect(board.board[1][1]).toBe('X');
})


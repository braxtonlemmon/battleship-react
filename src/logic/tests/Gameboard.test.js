import Gameboard from '../Gameboard.js';
import Ship from '../Ship.js';

describe('gameboard', () => {
  let board;
  beforeEach(() => {
    board = Gameboard();
  });

  it('has an array of ten rows', () => {
    expect(board.board.length).toBe(10);
  });

  it('has 10 columns in a row', () => {
    expect(board.board[0].length).toBe(10);
  });

  it('marks "M" if spot is empty', () => {
    board.receiveAttack(3, 1);
    expect(board.board[3][1]).toBe('M');
  });

  describe('tests with ship', () => {
    let ship;
    beforeEach(() => {
      ship = Ship(1, 3, 'horizontal');
    })

    it('places a ship if coordinates are valid', () => {
      board.placeShip(ship, 1, 1);
      expect(board.board[1][1]).toBeTruthy();
      expect(board.board[1][2]).toBeTruthy();
      expect(board.board[1][3]).toBeTruthy();
    });

    it('marks placed ship with ship id', () => {
      board.placeShip(ship, 1, 1);
      expect(board.board[1][1]).toBe(`${ship.id}0`);
    })

    it('does not place ship if goes off board', () => {
      board.placeShip(ship, 1, 1);
      expect(board.board[5][8]).toBeFalsy();
    });

    it('does not place ship if location not empty', () => {
      board.board[1][1] = 'x';
      board.placeShip(ship, 1, 1);
      expect(board.board[1][2]).toBeFalsy();
      expect(board.board[1][1]).toBeTruthy();
    });

    it('marks "X" if spot is occupied and not hit', () => {
      board.placeShip(ship, 1, 1);
      board.receiveAttack(1, 1);
      expect(board.board[1][1]).toBe('X');
    });
  }) 
})

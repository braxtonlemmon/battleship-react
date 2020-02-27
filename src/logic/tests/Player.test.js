import Player from '../Player.js';
import Gameboard from '../Gameboard.js';

describe('player', () => {
  let player;

  beforeEach(() => {
    player = Player('Braxton');
  });

  it('has a name', () => {
    expect(player.name).toBe('Braxton');
  })

  it('is initiated returning false for isTurn', () => {
    expect(player.isTurn).toBeFalsy();
  })
});

describe('computer', () => {
  let computer, gameboard;
  beforeEach(() => {
    computer = Player('computer');
    gameboard = Gameboard();
  });

  it('picks random spot to attack on board', () => {
    const guess = computer.generatePlay(gameboard.board);
    expect(guess[0]).toBeLessThan(10);
    expect(guess[0]).toBeGreaterThanOrEqual(0);
    expect(guess[1]).toBeLessThan(10);
    expect(guess[1]).toBeGreaterThanOrEqual(0);
  })

  it('knows a spot previously attacked and marked as M is not a valid play', () => {
    gameboard.board[1][1] = 'M';
    let guess = [1, 1];
    expect(computer.isLegal(gameboard.board, guess)).toBe(false);
  })

  it('knows a spot previously attacked and marked as X is not a valid play', () => {
    gameboard.board[2][3] = 'X';
    let guess = [2, 3];
    expect(computer.isLegal(gameboard.board, guess)).toBe(false);
  })
})

describe('attacking', () => {
  let player, gameboard, coords;
  beforeEach(() => {
    player = Player('Braxton');
    gameboard = Gameboard();
    coords = [2, 3];
  });

  it('returns false if attack not allowed', () => {
    player.attack(gameboard, coords);
    expect(gameboard.board[2][3]).toBe('M');
  });

  it('player keeps track of attacks made', () => {
    player.attack(gameboard, coords);
    expect(player.attackRecord).toContainEqual([2, 3]);
  });

  it('does not add repeat attack second time to array', () => {
    player.attack(gameboard, coords);
    player.attack(gameboard, coords);
    expect(player.attackRecord).toHaveLength(1);
  });
})


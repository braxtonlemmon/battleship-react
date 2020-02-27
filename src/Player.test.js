import Player from './Player.js';
import Gameboard from './Gameboard.js';

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
  let computer;
  beforeEach(() => {
    computer = Player('computer');
  });

  it('picks random spot to attack on board', () => {
    const guess = computer.generatePlay();
    expect(guess[0]).toBeLessThan(10);
    expect(guess[0]).toBeGreaterThanOrEqual(0);
    expect(guess[1]).toBeLessThan(10);
    expect(guess[1]).toBeGreaterThanOrEqual(0);
  })

  it('knows an a spot previously attacked and marked as M is not a valid play', () => {
    let gameboard = Gameboard();
    gameboard.board[1][1] = 'M';
    let guess = [1, 1];
    expect(computer.isLegal(gameboard.board, guess)).toBe(false);
  })
})


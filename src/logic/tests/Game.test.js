import Game from '../Game.js';

it('game creates human player object', () => {
  expect(Game.player).toMatchObject({
    name: 'Braxton', 
    isTurn: false,
    attackRecord: []
  })
});

it('game creates computer player object', () => {
  expect(Game.computer).toMatchObject({
    name: 'Computer',
    isTurn: false,
    attackRecord: []
  })
});

it('game creates human player gameboard', () => {
  expect(Game.playerBoard).toHaveProperty('board');
  expect(Game.playerBoard).toHaveProperty('ships');
})

it('game creates computer player gameboard', () => {
  expect(Game.computerBoard).toHaveProperty('board');
  expect(Game.computerBoard).toHaveProperty('ships');
});
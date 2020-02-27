import Player from './Player.js';
import Gameboard from './Gameboard.js';
import Ship from './Ship.js';


const Game = (() => {
  const player = Player('Braxton');
  const computer = Player('Computer');
  const playerBoard = Gameboard();
  const computerBoard = Gameboard();

  const makeShips = () => {
    const ships = {
      carrier: Ship(0, 5, 'horizontal'),
      battleship: Ship(1, 4, 'vertical'),
      cruiser: Ship(2, 3, 'horizontal'),
      submarine: Ship(3, 3, 'vertical'),
      destroyer: Ship(4, 2, 'horizontal'),
    }
    return ships;
  }

  const populateBoard = (gameboard) => {
    const { carrier, battleship, cruiser, submarine, destroyer } = makeShips();
    gameboard.placeShip(carrier, 1, 1);
    gameboard.placeShip(battleship, 2, 8);
    gameboard.placeShip(cruiser, 9, 0);
    gameboard.placeShip(submarine, 3, 6);
    gameboard.placeShip(destroyer, 4, 2);
  }

  return {
    player,
    computer,
    playerBoard,
    computerBoard,
    populateBoard,
  }
})();

export default Game;

// Game.populateBoard(Game.playerBoard);
// console.log(Game.playerBoard);
// console.log(Game.computerBoard);
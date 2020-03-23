import shipsData from '../components/SHIPS.js';
import Ship from './Ship.js';

const Gameboard = (id) => {
  let ships = [];
  let board = [];
  for(let i = 0; i < 10; i++) {
    board[i] = [];
    for(let j = 0; j < 10; j++) {
      board[i][j] = null;
    }
  };

  const placeShip = (ship, row, col) => {
    const { length, direction } = ship;
    const coords = desiredPlacement(length, row, col, direction);
    if (isOnBoard(coords) && isAvailable(coords) && isNewShip(ship)) {
      coords.forEach((coord, position) => {
        const [row, col] = coord;
        board[row][col] = `${ship.id}${position}`;
      })
      ships.push({ ship, coords })
    } 
  };

  const placeRandomShips = () => {
    shipsData.forEach(shipObject => {
      const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
      const ship = Ship(shipObject.id, shipObject.length, orientation)
      let shipsCount = ships.length;

      while (shipsCount === ships.length) {
        const row = Math.floor(Math.random() * 10);
        const col = Math.floor(Math.random() * 10);
        placeShip(ship, row, col);
      }
    })
  };

  const allShipsPlaced = () => {
    return ships.length === 5 ? true : false;
  };

  const receiveMiss = (row, col) => {
    if (board[row][col] === null) {
      board[row][col] = 'M';
      return true;
    }
    return false;
  };
  
  const receiveHit = (row, col) => {
    const cell = board[row][col];
    if (cell !== 'M' && cell !== 'X' && cell !== null) {
      const id = parseInt(cell[0]);
      const index = parseInt(cell[1]);
      const ship = getShip(id);
      ship.hit(index);
      board[row][col] = 'X';
      return true;
    }
    return false;
  };
  
  const reset = () => {
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        board[i][j] = null;
      }
    }
    ships = [];
  };

  // PRIVATE 
  const isNewShip = (ship) => {
    if (ships.find(shipInfo => shipInfo.ship.id === ship.id)) {
      return false;
    }
    return true;
  };
  
  const areAllSunk = () => {
    return ships.length > 0 && 
           ships.every(shipInfo => {
             const { ship } = shipInfo;
             return ship.isSunk();
           })
  };

  const getShip = (id) => {
    const foundShip = ships.find(item => item.ship.id === id);
    return foundShip.ship;
  };
  
  // returns array of placement coordinates ignoring any obstacles
  const desiredPlacement = (length, row, col, direction) => {
    let coordinates = [];
    for(let i = 0; i < length; i ++) {
      (direction === 'horizontal') ? 
        coordinates.push([row, col + i]) :
        coordinates.push([row + i, col]);
    }
    return coordinates;
  };

  const isOnBoard = (coords) => {
    return coords.every(coord => {
      return (coord[0] >= 0 && coord[0] < 10) && (coord[1] >= 0 && coord[1] < 10)
    })
  };

  const isAvailable = (coords) => {
    return coords.every(coord => {
      return board[coord[0]][coord[1]] === null;
    })
  };

  return {
    id,
    board,
    ships,
    placeShip,
    receiveHit,
    receiveMiss,
    areAllSunk,
    allShipsPlaced,
    placeRandomShips,
    reset
  }
}

export default Gameboard;



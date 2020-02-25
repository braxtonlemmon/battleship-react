import Ship from './Ship.js';

// based on a row,col coordinate system .... board[row][col] ...board[row][column]
const Gameboard = () => {
  const board = new Array(10).fill(new Array(10).fill(null));
  // for(let i = 0; i < 10; i ++) {
  //   board[i] = new Array(10).fill(null);
  // }
  const ships = [];

  const placeShip = (ship, row, col) => {
      // a board cell should know:
      // (1) its coordinates <row, col>
      // if ship is occupying space:
      // (2) ship id
      // (3) ship segment's position number

      const { length, direction } = ship;

      const coords = desiredPlacement(length, row, col, direction);
      if (isOnBoard(coords) && isAvailable(coords)) {
        coords.forEach((coord, position) => {
          const row = coord[0];
          const col = coord[1];
          board[row][col] = `${ship.id}${position}`;
        })
        ships.push({ ship, coords })  
      } 
    }

  const receiveAttack = (row, col) => {
    if (board[row][col] === null) {
      board[row][col] = 'M';
    } 
    else if (board[row][col] !== 'M' || board[row][col] !== 'X') {
      const id = parseInt(board[row][col].split('')[0]);
      const index = parseInt(board[row][col].split('')[1]);
      const ship = getShip(id);
      ship.hit(index);
      board[row][col] = 'X';
    }
  }  
  // PRIVATE 

  const getShip = (id) => {
    const foundShip = ships.find(item => item.ship.id === id);
    return foundShip.ship;
  }
  
  const desiredPlacement = (length, row, col, direction) => {
    let coordinates = [];
    for(let i = 0; i < length; i ++) {
      (direction === 'horizontal') ? 
        coordinates.push([row, col + i]) :
        coordinates.push([row + i, col]);
    }
    return coordinates;
  }

  const isOnBoard = (coords) => {
    return coords.every(coord => {
      return (coord[0] > 0 && coord[0] < 10) && (coord[1] > 0 && coord[1] < 10)
    })
  }

  const isAvailable = (coords) => {
    return coords.every(coord => {
      return board[coord[0]][coord[1]] === null;
    })
  }

  // evaluate board spaces
  return {
    board,
    placeShip,
    receiveAttack
  }
}

export default Gameboard;



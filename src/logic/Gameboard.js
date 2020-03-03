import _ from "lodash";
// based on a row,col coordinate system .... board[row][col] ...board[row][column]
const Gameboard = (id) => {
  // const board = new Array(10).fill(new Array(10).fill(null));
  let board = [];
  for(let i = 0; i < 10; i++) {
    board[i] = [];
    for(let j = 0; j < 10; j++) {
      board[i][j] = null;
    }
  }
  // Will hold an array of objects. Each object contains (1) actual ship object (2) an array of the ship's coordinates on the gameboard
  const ships = [];

  const placeShip = (ship, row, col) => {
      // a board cell should know:
      // (1) its coordinates <row, col>
      // if ship is occupying space:
      // (2) ship id
      // (3) ship segment's position number
      const { length, direction } = ship;
      // const length = ship.length;
      // const direction = ship.direction;

      // an array containing the coordinates of the theoretical placement
      const coords = desiredPlacement(length, row, col, direction);

      if (isOnBoard(coords) && isAvailable(coords)) {
        coords.forEach((coord, position) => {
          const [row, col] = coord;
          board[row][col] = `${ship.id}${position}`;
        })
        ships.push({ ship, coords })
      } 
    }

  const receiveAttack = (row, col) => {
    // attack on empty unattacked spot
    if (board[row][col] === null) {
      board[row][col] = 'M';
    } 
    // attack on occupied unattacked ship spot
    else if (board[row][col] !== 'M' && board[row][col] !== 'X') {
      const id = parseInt(board[row][col].split('')[0]);
      const index = parseInt(board[row][col].split('')[1]);
      const ship = getShip(id);
      ship.hit(index);
      board[row][col] = 'X';
    }
    // attack on previously attacked spot
    else {
      return false;
    }
    return true;
  }  
  
  // PRIVATE 

  const getShip = (id) => {
    const foundShip = ships.find(item => item.ship.id === id);
    return foundShip.ship;
  }
  
  // returns array of placement coordinates ignoring any obstacles
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
      return (coord[0] >= 0 && coord[0] < 10) && (coord[1] >= 0 && coord[1] < 10)
    })
  }

  const isAvailable = (coords) => {
    return coords.every(coord => {
      return board[coord[0]][coord[1]] === null;
    })
  }

  // evaluate board spaces
  return {
    id,
    board,
    ships,
    placeShip,
    receiveAttack
  }
}

export default Gameboard;



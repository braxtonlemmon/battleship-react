
// based on a row,col coordinate system .... board[row][col] ...board[row][column]
const Gameboard = () => {
  const board = new Array(10); //.fill(Array(10).fill(null));
  for(let i = 0; i < 10; i ++) {
    board[i] = new Array(10).fill(null);
  }

  const placeShip = (length, row, col, direction) => {
    const coords = desiredPlacement(length, row, col, direction);
    if (isOnBoard(coords) && isAvailable(coords)) {
      coords.forEach(coord => {
        const row = coord[0];
        const col = coord[1];
        board[row][col] = 'x';
      })  
    } 
  }

  const receiveAttack = (row, col) => {
    return true;
  }  
  // PRIVATE 

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




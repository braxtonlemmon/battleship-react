const Ship = (length) => {
  const positions = Array(length).fill(null);
  
  const hit = (coord) => {
    positions[coord] = 'x';
  }

  const isSunk = () => {
    return positions.every(spot => spot !== null);
  }

  return {
    length,
    positions,
    hit,
    isSunk
  }
}

export default Ship;


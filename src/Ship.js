const Ship = (id, length, direction) => {
  const positions = Array(length).fill(null);

  const hit = (coord) => {
    positions[coord] = 'x';
  }

  const isSunk = () => {
    return positions.every(spot => spot !== null);
  }

  return {
    id,
    length,
    direction,
    positions,
    hit,
    isSunk
  }
}

export default Ship;



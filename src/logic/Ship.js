const Ship = (id, length, direction) => {
  const positions = Array(length).fill(null);

  const hit = (index) => {
    positions[index] = 'x';
  }

  const isSunk = () => {
    return positions.every(spot => spot === 'x');
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



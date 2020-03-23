const Player = (name) => {
  let attackRecord = [];
  let hits = [];
  let maybes = [];

  // Generates random guess [even/odd, odd]
  const generatePlay = (board) => {
    let guess;
    while (!guess) {
      if (maybes.length === 0) {
        do {
          guess = generateRandom();
        } while (isRepeatAttack(guess) || !isLegal(board, guess));
      } else {
        do {
          guess = maybes.shift();
          if (!guess) break;
        } while (isRepeatAttack(guess));
      }
    }
    return guess;
  };
  
  const attack = (gameboard, coords) => {
    const [row, col] = coords;
    if (gameboard.receiveHit(row, col)) {
      attackRecord.push(coords);
      hits.push(coords);
      addToMaybes(coords);
    } else if (gameboard.receiveMiss(row, col)) {
      attackRecord.push(coords);
    } else {
      return false;
    }
    return true;
  };
  
  const reset = () => {
    attackRecord = [];
    hits = [];
    maybes = [];
  };

  // PRIVATE

  const isLegal = (gameboard, guess) => {
    const [row, col] = guess;
    return (gameboard[row][col] === 'M') || 
           (gameboard[row][col] === 'X') ?
           false : true;
  };

  const addToMaybes = coords => {
    const [row, col] = coords;
    if (row - 1 >= 0) maybes.push([row - 1, col]);
    if (col + 1 < 10) maybes.push([row, col + 1]);
    if (row + 1 < 10) maybes.push([row + 1, col]);
    if (col - 1 >= 0) maybes.push([row, col - 1]);
  };

  const generateRandom = () => {
    let randomGuess = [];
    let col;
    randomGuess.push(Math.floor(Math.random() * 10));
    const opposite = randomGuess[0] % 2 === 0 ? 0 : 1;
    do {
      col = Math.floor(Math.random() * 10);
    } while (col % 2 === opposite);
    randomGuess.push(col);
    return randomGuess;
  };

  const isRepeatAttack = guess => {
    return attackRecord.some(coord => {
      return coord[0] === guess[0] && coord[1] === guess[1];
    });
  };

  return {
    name,
    generatePlay,
    attack,
    reset,
  }
}

export default Player;
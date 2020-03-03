const Player = (name) => {
  let isTurn = false;
  let attackRecord = [];

  const generatePlay = (board) => {
    let guess;
    do {
      guess = [];
      for (let i = 0; i < 2; i ++) {
        guess.push(Math.floor((Math.random() * 10)));
      }
    } while (!attackRecord.includes(guess) && !isLegal(board, guess))
    return guess;
  }

  const attack = (gameboard, coords) => {
    const [row, col] = coords;
    if (gameboard.receiveAttack(row, col)) {
      attackRecord.push(coords);
      return true;
    } 
    return false;
  }

  // PRIVATE

  const isLegal = (gameboard, guess) => {
    const [row, col] = guess;
    return (gameboard[row][col] === 'M') || 
           (gameboard[row][col] === 'X') ?
           false : true;
  }

  return {
    name,
    isTurn,
    attackRecord,
    generatePlay,
    isLegal,
    attack,
  }
}

export default Player;
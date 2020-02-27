const Player = (name) => {
  let isTurn = false;
  
  const generatePlay = () => {
    let guess = [];
    for (let i = 0; i < 2; i ++) {
      guess.push(Math.floor((Math.random() * 10)));
    }
    return guess;
  }

  const isLegal = (gameboard, guess) => {
    const [row, col] = guess;
    return (gameboard[row][col] === 'M') || 
           (gameboard[row][col] === 'X') ?
           false : true;
  }

  return {
    name,
    isTurn,
    generatePlay,
    isLegal
  }
}

export default Player;
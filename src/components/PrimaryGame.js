import React, { useState } from 'react';
import Gameboard from '../logic/Gameboard.js';
import Board from './Board.js';
import Player from '../logic/Player.js';
import Ship from '../logic/Ship.js';

const PrimaryGame = () => {
  const player = Player('Braxton');
  const computer = Player('Computer');
  const [boardP, setBoardP] = useState(Gameboard(0));
  const [boardC, setBoardC] = useState(Gameboard(1));
  const [playerTurn, setPlayerTurn] = useState(true);
  
  const makeShips = () => {
    const ships = {
      carrier: Ship(0, 5, 'horizontal'),
      battleship: Ship(1, 4, 'vertical'),
      cruiser: Ship(2, 3, 'horizontal'),
      submarine: Ship(3, 3, 'vertical'),
      destroyer: Ship(4, 2, 'horizontal'),
    }
    return ships;
  }

  const populateBoard = (gameboard) => {
    const { carrier, battleship, cruiser, submarine, destroyer } = makeShips();
    gameboard.placeShip(carrier, 1, 1);
    gameboard.placeShip(battleship, 2, 8);
    gameboard.placeShip(cruiser, 9, 0);
    gameboard.placeShip(submarine, 3, 6);
    gameboard.placeShip(destroyer, 4, 2);
    return gameboard;
  }
  
  const handleClick = (coords, boardId) => {
    if (playerTurn && boardId === 1) {
      const board = {...boardC};
      if (player.attack(board, coords)) {
        setBoardC(board);
        setPlayerTurn(false);
        computerPlay();
      }
    }
  }

  const computerPlay = () => {
    setTimeout(() => {
      const board = { ...boardP };
      const coords = computer.generatePlay(board.board);
      computer.attack(board, coords);
      setBoardP(board);
      setPlayerTurn(true);
    }, 0)
  }

  populateBoard(boardP);
  populateBoard(boardC);

  return (
   <div>
      <Board 
        board={boardP} 
        handleClick={handleClick}
      />
      <Board 
        board={boardC}
        handleClick={handleClick}
     />
   </div>
  )

}

export default PrimaryGame;
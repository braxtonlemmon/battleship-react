import React, { useState, useEffect } from 'react';
import Gameboard from '../logic/Gameboard.js';
import Board from './Board.js';
import Player from '../logic/Player.js';
import Ship from '../logic/Ship.js';
import styled from 'styled-components';
import ShipBank from './ShipBank.js';
import ComputerBank from './ComputerBank.js';
import PropTypes from 'prop-types';
import ShowPiece from './ShowPiece.js';

// Styled component
const GameContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

`;

// Function component
const PrimaryGame = (props) => {
  const player = Player('Braxton');
  const computer = Player('Computer');
  const [boardP, setBoardP] = useState(Gameboard(0));
  const [boardC, setBoardC] = useState(Gameboard(1));
  const [playerTurn, setPlayerTurn] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [length, setLength] = useState(null);
  const [orientation, setOrientation] = useState("horizontal");
  const [pShips, setPShips] = useState([]);

  const resetGame = () => {
    const tempBoardP = {...boardP};
    const tempBoardC = {...boardC};
    tempBoardP.reset();
    tempBoardC.reset();
    setBoardP(tempBoardP);
    setBoardC(tempBoardC);    
    setPlayerTurn(true);
    setSelectedId(null);
    setLength(null);
    setOrientation('horizontal');
    setPShips([]);
  }

  useEffect(() => {
    if (isOver()) resetGame();
  });

  const handleClick = (coords, boardId) => {
    if (boardP.allShipsPlaced()) {
      makeMove(coords, boardId);
    } else {
      if (boardId === 0) placeShip(coords);
      if (boardP.allShipsPlaced() && !boardC.allShipsPlaced()) boardC.placeRandomShips();
    }
  }

  const placeShip = (coords) => {
    const [row, col] = coords;
    const ship = Ship(selectedId, length, orientation);
    boardP.placeShip(ship, row, col);
    const temp = {...boardP};
    setBoardP(temp);
    if (boardP.ships.length > pShips.length) {
      const tempShips = [...pShips];
      tempShips.push(ship.id);
      setPShips(tempShips);
    }
  }

  const makeMove = (coords, boardId) => {
    if (playerTurn && boardId === 1) {
      const board = { ...boardC };
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
      setPlayerTurn(true)
    }, 1000)
  }

  const isOver = () => {
    if (boardP.allShipsPlaced() && (boardP.areAllSunk() || boardC.areAllSunk())) return true;
    return false;
  }

  return (
    <GameContainer>
      {
      boardC.allShipsPlaced() &&
      <ComputerBank ships={boardC.ships} />
      }
      <Board 
        board={boardC} 
        handleClick={handleClick} 
        playerTurn={playerTurn}
      />
      {
      !boardP.allShipsPlaced() && 
      <ShipBank 
        selectedId={selectedId}
        length={length}
        orientation={orientation} 
        setOrientation={setOrientation}
        setSelectedId={setSelectedId}
        setLength={setLength}
        pShips={pShips}
      />
      }
      <Board 
        board={boardP} 
        handleClick={handleClick}
        pShips={pShips} 
        playerTurn={playerTurn}
      />
      {isOver() && props.endGame()}
    </GameContainer>
  );

}

// Type validation
PrimaryGame.propTypes = {
  endGame: PropTypes.func,
}

export default PrimaryGame;
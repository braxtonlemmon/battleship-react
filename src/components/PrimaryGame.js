import React, { useState, useEffect } from 'react';
import styled                         from 'styled-components';
import PropTypes                      from 'prop-types';
import Gameboard                      from '../logic/Gameboard.js';
import Player                         from '../logic/Player.js';
import Ship                           from '../logic/Ship.js';
import Board                          from './Board.js';
import ShipBank                       from './ShipBank.js';
import ComputerBank                   from './ComputerBank.js';

// Styled component
const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

// Function component
const PrimaryGame = (props) => {
  const [player, setPlayer] =           useState(Player('Braxton'));
  const [computer, setComputer] =       useState(Player('Computer'));
  const [boardP, setBoardP] =           useState(Gameboard(0));
  const [boardC, setBoardC] =           useState(Gameboard(1));
  const [playerTurn, setPlayerTurn] =   useState(true);
  const [selectedId, setSelectedId] =   useState(null);
  const [length, setLength] =           useState(null);
  const [orientation, setOrientation] = useState("horizontal");
  const [pShips, setPShips] =           useState([]);

  const resetGame = () => {
    setBoardP(prevBoard => {
      prevBoard.reset();
      return prevBoard;
    });

    setBoardC(prevBoard => {
      prevBoard.reset();
      return prevBoard;
    });

    setPlayer(prevPlayer => {
      prevPlayer.reset();
      return prevPlayer;
    });

    setComputer(prevComputer => {
      prevComputer.reset();
      return prevComputer;
    });

    setPlayerTurn(true);
    setSelectedId(null);
    setLength(null);
    setOrientation('horizontal');
    setPShips([]);
  };

  useEffect(() => {
    if (isOver()) resetGame();
  });

  const handleClick = (coords, boardId) => {
    boardP.allShipsPlaced() ? makeMove(coords, boardId) : (boardId === 0) && placeShip(coords);
    if (boardP.allShipsPlaced() && !boardC.allShipsPlaced()) boardC.placeRandomShips();
  }

  const handleDrop = (coords, boardId, position) => {
    coords = orientation === 'horizontal' ? [coords[0], coords[1] - position] : [coords[0] - position, coords[1]];
    if (boardId === 0) placeShip(coords);
    if (boardP.allShipsPlaced() && !boardC.allShipsPlaced()) boardC.placeRandomShips();
  }

  const placeShip = (coords) => {
    const [row, col] = coords;
    const ship = Ship(selectedId, length, orientation);
    boardP.placeShip(ship, row, col);
    const tempBoard = {...boardP};
    setBoardP(tempBoard);
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
    }, 1500)
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
        computer
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
        handleDrop={handleDrop}
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
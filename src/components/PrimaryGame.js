import React, { useState } from 'react';
import Gameboard from '../logic/Gameboard.js';
import Board from './Board.js';
import Player from '../logic/Player.js';
import Ship from '../logic/Ship.js';
import styled from 'styled-components';
import ShipBank from './ShipBank.js';
import ComputerBank from './ComputerBank.js';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const PrimaryGame = () => {
  const player = Player('Braxton');
  const computer = Player('Computer');
  const [boardP, setBoardP] = useState(Gameboard(0));
  const [boardC, setBoardC] = useState(Gameboard(1));
  const [playerTurn, setPlayerTurn] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [length, setLength] = useState(null);
  const [orientation, setOrientation] = useState("horizontal");
  const [pShips, setPShips] = useState([]);
  const [cShips, setCShips] = useState([]);

  const handleClick = (coords, boardId) => {
    if (boardP.allShipsPlaced()) {
      makeMove(coords, boardId);
    } else {
      placeShip(coords);
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
    if (boardP.areAllSunk() || boardC.areAllSunk()) return true;
    return false;
  }

  return (
    <Container>
      {/* Pass boardC.ships to ComputerBank */}
      <ComputerBank 
        ships={boardC.ships}
      />
      <Board board={boardC} handleClick={handleClick} />
      <ShipBank 
        selectedId={selectedId}
        length={length}
        orientation={orientation} 
        setOrientation={setOrientation}
        setSelectedId={setSelectedId}
        setLength={setLength}
        pShips={pShips}
      />
      <Board 
        board={boardP} 
        handleClick={handleClick}
        pShips={pShips} 
      />
      {isOver() && <div>OVER!</div>}
    </Container>
  );

}

export default PrimaryGame;
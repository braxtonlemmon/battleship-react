import React, { useState } from 'react';
import Gameboard from '../logic/Gameboard.js';
import Board from './Board.js';
import Player from '../logic/Player.js';
import Ship from '../logic/Ship.js';
import styled from 'styled-components';
import ShipBank from './ShipBank.js';

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

  // const makeShips = () => {
  //   const ships = {
  //     carrier: Ship(0, 5, 'horizontal'),
  //     battleship: Ship(1, 4, 'vertical'),
  //     cruiser: Ship(2, 3, 'horizontal'),
  //     submarine: Ship(3, 3, 'vertical'),
  //     destroyer: Ship(4, 2, 'horizontal'),
  //   }
  //   return ships;
  // }

  // const populateBoard = (gameboard) => {
  //   const { carrier, battleship, cruiser, submarine, destroyer } = makeShips();
  //   gameboard.placeShip(carrier, 1, 1);
  //   gameboard.placeShip(battleship, 2, 8);
  //   gameboard.placeShip(cruiser, 9, 0);
  //   gameboard.placeShip(submarine, 3, 6);
  //   gameboard.placeShip(destroyer, 4, 2);
  //   return gameboard;
  // }
  

  const handleClick = (coords, boardId) => {
    if (boardP.allShipsPlaced()) {
      makeMove(coords, boardId);
    } else {
      placeShip(coords);
      if (!boardC.allShipsPlaced()) boardC.placeRandomShips();
    }
  }

  const placeShip = (coords) => {
    const [row, col] = coords;
    const ship = Ship(selectedId, length, orientation);
    boardP.placeShip(ship, row, col);
    const temp = {...boardP};
    setBoardP(temp);
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
    // setTimeout(() => {
      const board = { ...boardP };
      const coords = computer.generatePlay(board.board);
      computer.attack(board, coords);
      setBoardP(board);
      setPlayerTurn(true);
    // }, 1000)
  }

  const isOver = () => {
    if (boardP.areAllSunk() || boardC.areAllSunk()) return true;
    return false;
  }

  // populateBoard(boardP);
  // populateBoard(boardC);
  // boardC.placeRandomShips();

  return (
    <Container>
      <p>Rules</p>
      <Board board={boardP} handleClick={handleClick} />
      <ShipBank 
        selectedId={selectedId}
        length={length}
        orientation={orientation} 
        setOrientation={setOrientation}
        setSelectedId={setSelectedId}
        setLength={setLength} 
      />
      <Board board={boardC} handleClick={handleClick} />
      {isOver() && <div>OVER!</div>}
    </Container>
  );

}

export default PrimaryGame;
import React from 'react';
import styled from 'styled-components';
import Ship from "./ShipDisplay.js";
import PropTypes from 'prop-types';
import ships from './SHIPS.js';

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1 px solid green;
  width: 100%;
  margin-top: 20px;
`;

const ShipRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px 10px;
  margin: 8px 0;
`;
 
// Functional component
const ShipsContainer = (props) => {
  const generateShips = () => {
    return ships.map(ship => {
      return (
        <ShipRow key={ship.id}>
          <Ship
            id={ship.id}
            length={ship.length}
            setSelectedId={props.setSelectedId}
            setLength={props.setLength}
            selectedId={props.selectedId}
            pShips={props.pShips}
          />
          <h2>{ship.name.toUpperCase()}</h2>
        </ShipRow>
      );
    });
  };

  return (
    <Container>
      { generateShips() }
    </Container>
  )
}

// Type validation
ShipsContainer.propTypes = {
  setSelectedId: PropTypes.func,
  setLength: PropTypes.func,
  selectedId: PropTypes.number,
  pShips: PropTypes.array
}

export default ShipsContainer;
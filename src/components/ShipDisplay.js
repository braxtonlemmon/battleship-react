import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ShipContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: ${props => (props.id === props.selectedId ? "yellow" : "none")};
`;

const Cell = styled.div`
  border: 2px solid black;
  width: 2em;
  height: 2em;
`;

const Ship = props => {
  const generateShip = () => {
    let ship = [];
    for (let i = 0; i < props.length; i++) {
      ship.push(<Cell key={i}></Cell>);
    }
    return ship;
  };

  const handleClick = () => {
    props.setSelectedId(props.id);
    props.setLength(props.length);
  }

  return (
    <ShipContainer 
      onClick={handleClick}
      id={props.id}
      selectedId={props.selectedId}
    >
      {generateShip()}
    </ShipContainer>
  );
};

Ship.propTypes = {
  key: PropTypes.number,
  id: PropTypes.number,
  selectedId: PropTypes.number,
  length: PropTypes.number,
  setSelectedId: PropTypes.func,
  setLength: PropTypes.func
}

export default Ship;
import React from 'react';
import styled from 'styled-components';
import ShipsContainer from './ShipsContainer.js';
import PropTypes from 'prop-types';
import ShowPiece from './ShowPiece.js';

// Styled components
const BankContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  margin-left: 10px;
  padding: 10px;
  grid-row: 1 / span 2;
  grid-column: 1 / span 1;
`;

const H2 = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
`;

const OrientationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;

const Button = styled.button`
  height: 20px;
  width: 80px;
  border: 2px solid black;
  border-radius: 5px;
  background: ${props => {
    if (props.horizontal && props.orientation === 'horizontal') {
      return 'yellow';
    } else if (props.vertical && props.orientation === 'vertical') {
      return 'yellow';
    } else {
      return 'none';
    }
  }};
  cursor: pointer;
`;

// Function component
const ShipBank = (props) => { 
  return (
    <BankContainer>
      <H2>Ship Bank</H2>
      <ShipsContainer 
        setSelectedId={props.setSelectedId}
        setLength={props.setLength}
        selectedId={props.selectedId}
        pShips={props.pShips}
      />
      <OrientationButtons>
        <Button 
          orientation={props.orientation} 
          horizontal
          onClick={() => props.setOrientation('horizontal')}
        >
          Horizontal
        </Button>
        <Button 
          orientation={props.orientation} 
          vertical
          onClick={() => props.setOrientation('vertical')}
        >
          Vertical
        </Button>
      </OrientationButtons>
      <ShowPiece 
        selectedId={props.selectedId}
        length={props.length}
        orientation={props.orientation}
      />

    </BankContainer>
  )
}

// Type validation
ShipBank.propTypes = {
  selectedId:     PropTypes.number,
  length:         PropTypes.number,
  orientation:    PropTypes.string,
  pShips:         PropTypes.array,
  setOrientation: PropTypes.func,
  setSelectedId:  PropTypes.func,
  setLength:      PropTypes.func
}

export default ShipBank;
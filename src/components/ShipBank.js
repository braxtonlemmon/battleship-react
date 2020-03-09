import React, { useState } from 'react';
import styled from 'styled-components';
import ShipsContainer from './ShipsContainer.js';

const BankContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  margin-left: 10px;
  padding: 10px;
`;

const H2 = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
`;

const OrientationButtons = styled.div`
  display: flex;
  justify-content: space-between;
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

const ShipBank = (props) => { 
  // const [selectedId, setSelectedId] = useState(null);
  // const [length, setLength] = useState(null);
  // const [orientation, setOrientation] = useState('horizontal');

  return (
    <BankContainer>
      <H2>Ship Bank</H2>
      <ShipsContainer 
        setSelectedId={props.setSelectedId}
        setLength={props.setLength}
        selectedId={props.selectedId}
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
      <p>Ship id: {props.selectedId}</p>
      <p>Ship length: {props.length} </p>
      <p>Orientation: {props.orientation}</p>
    </BankContainer>

  )
}

export default ShipBank;
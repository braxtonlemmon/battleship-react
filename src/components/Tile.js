import styled from 'styled-components';
import SHIPS from './SHIPS.js';

const Tile = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  cursor: ${props => props.content === 'true' ? 'default' : 'pointer'};
  background: ${props => {
    if (props.square === 'X') return 'red';
    if (props.square === 'M') return 'orange';
    if (/[0-9]{2}/.test(props.square) && props.boardId === 0) return SHIPS[parseInt(props.square[0])].color;
    return 'none';
  }};
`;

export default Tile;
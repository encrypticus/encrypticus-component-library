import styled from 'styled-components';
import { colors } from '../../../global';

export const ViewStyled = styled.button<{ isMenuOpen: boolean }>`
  position: fixed;
  left: 3vw;
  top: 3vw;
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1;

  div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: ${({ isMenuOpen }) =>
      isMenuOpen ? colors.pearl : colors.lightbrown};
  }
`;

export const MenuBarStyled = styled.div``;

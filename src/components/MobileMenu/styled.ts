import styled from 'styled-components';
import { colors } from '../../global';

export const ViewStyled = styled.nav<{ isMenuOpen: boolean }>`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  height: 100vh;
  width: 35vw;
  background-color: ${colors.lightbrown};
  z-index: 1;
  padding: 10rem 0;
  flex-direction: column;
  transform: ${({ isMenuOpen }) =>
    isMenuOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const LinkStyled = styled.a`
  padding: 0 2rem;
  font-size: 2rem;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;

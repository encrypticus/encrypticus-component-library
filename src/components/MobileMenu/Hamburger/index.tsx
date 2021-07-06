import React, { FC } from 'react';
import { ViewStyled, MenuBarStyled } from './styled';

interface Props {
  isMenuOpen: boolean;
  handleOpenMenu: (value: boolean) => void;
}

export const Hamburger: FC<Props> = ({ isMenuOpen, handleOpenMenu }) => {
  return (
    <ViewStyled isMenuOpen={isMenuOpen} onClick={() => handleOpenMenu(!isMenuOpen)}>
      <MenuBarStyled />
      <MenuBarStyled />
      <MenuBarStyled />
    </ViewStyled>
  );
};

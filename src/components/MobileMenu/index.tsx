import React, { FC, useRef } from 'react';
import { useOnClickOutside } from './hooks/useOnClickOutside';
import { Hamburger } from './Hamburger';
import { ViewStyled, LinkStyled } from './styled';

export interface MobileMenuProps {
  isMenuOpen: boolean;
  handleOpenMenu: (value: boolean) => void;
}

export const MobileMenu: FC<MobileMenuProps> = ({
  isMenuOpen,
  handleOpenMenu,
}) => {
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => handleOpenMenu(false));

  return (
    <div ref={node}>
      <ViewStyled isMenuOpen={isMenuOpen}>
        <LinkStyled onClick={() => handleOpenMenu(false)}>Link 1</LinkStyled>
        <LinkStyled onClick={() => handleOpenMenu(false)}>Link 2</LinkStyled>
        <LinkStyled onClick={() => handleOpenMenu(false)}>Link 3</LinkStyled>
      </ViewStyled>
      <Hamburger isMenuOpen={isMenuOpen} handleOpenMenu={handleOpenMenu} />
    </div>
  );
};

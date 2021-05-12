import React, { ButtonHTMLAttributes } from 'react'

import { Container } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  isHome?: boolean;
}

const NavButton: React.FC<ButtonProps> = ({ selected, children, ...rest }) => {
  return (
    <Container
      className={selected ? 'active' : ''}
      type="button" {...rest}
    >
      {children}
    </Container>
  )
};

export default NavButton;

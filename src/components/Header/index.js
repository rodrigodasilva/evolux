import React from 'react';

import { Container, Logo } from './styles';

import logoImage from '../../assets/images/logo.png';

const Header = () => {
  return (
    <Container>
      <Logo src={logoImage} alt="Logo" />
    </Container>
  );
};

export default Header;

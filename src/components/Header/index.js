import React from 'react';

import { Container, Logo, MaxWidth } from './styles';

import logoImage from '../../assets/images/logo.png';

const Header = () => {
  return (
    <Container>
      <MaxWidth>
        <Logo src={logoImage} alt="Logo" />
      </MaxWidth>
    </Container>
  );
};

export default Header;

import React from 'react'

import { Container } from '../../containers'

import * as S from './styles'

const Header = () => {
  return (
    <S.Header>
      <Container>
        <S.Logo src={'/logo.png'} alt="Logo" />
      </Container>
    </S.Header>
  );
};

export { Header }
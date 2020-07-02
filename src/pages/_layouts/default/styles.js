import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 72px 32px 32px;
  background: #161b1f;
  display: flex;

  @media only screen and (max-width: 900px) {
    padding: 72px 12px 32px;
  }
`;

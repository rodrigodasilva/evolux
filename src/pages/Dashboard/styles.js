import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 36px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    cursor: pointer;
    margin: 0 6px;

    :hover {
      opacity: 0.8;
    }
  }
`;

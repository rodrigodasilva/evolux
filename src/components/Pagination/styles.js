import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;

  strong:first-child {
    margin-left: 4px;
  }
  strong + strong {
    margin-right: 4px;
  }
`;

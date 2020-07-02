import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;

  @media only screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

export const ContainerTable = styled.div`
  display: flex;
  position: relative;
  flex: 1;

  & table {
    thead th {
      color: #fafafa;
      border-bottom: 2px solid #dee2e6;
    }

    tbody td {
      color: #ddd;
      border-top: 0;
    }
  }

  .loading {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .message {
    position: absolute;
    top: 100%;
    width: 100%;
    text-align: center;
    color: #adb5bd;
  }
`;

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
    margin: 0 8px;

    :hover {
      opacity: 0.8;
    }
  }
`;

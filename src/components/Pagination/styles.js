import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 32px;

  .pagination {
    margin-bottom: 0;
    margin-left: 24px;
  }

  .page-link {
    background: none !important;
    border: none !important;
  }

  .page-item.active .page-link {
    font-weight: bold;
  }
`;

export const Info = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;

  strong {
    color: #007bff;

    :first-child {
      margin-left: 4px;
    }

    + strong {
      margin-right: 4px;
    }
  }

  span {
    color: #007bff;
    margin-left: 4px;
  }
`;

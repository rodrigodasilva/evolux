import styled from 'styled-components';

export const Container = styled.label`
  width: 100%;
  margin-bottom: 1.6rem;
  position: relative;
  color: #f8f9fa;

  .form-control {
    border: 2px solid #6c757d;
    background-color: transparent;
    color: #fff;
  }

  .invalid-tooltip {
    font-size: 12px;
    padding: 2px 6px;
    right: 0;
    margin-top: 4px;
  }

  .form-control.is-invalid {
    background-position: right calc(0.875em + 0.1875rem) center;
  }

  option {
    background: #161b1f;
  }
`;

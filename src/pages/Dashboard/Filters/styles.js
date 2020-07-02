import styled from 'styled-components';

import Card from '../../../components/Card';

export const Container = styled(Card)`
  width: 300px;
  height: max-content;
  margin-bottom: 18px;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }

  h5 {
    font-weight: bold;
    margin-bottom: 24px;
  }

  fieldset {
    padding: 3px 0;

    + fieldset {
      margin-top: 24px;
    }
  }

  legend {
    font-size: 14px;
    width: auto;
    margin: 0;
  }

  input {
    margin-bottom: 6px;
    border: 2px solid #6c757d;
    background-color: #475058;
    background-color: transparent;
    color: #fff;

    :focus {
      background-color: transparent;
      color: #fff;
    }
  }
`;

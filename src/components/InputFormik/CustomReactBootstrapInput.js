import React from 'react';
import PropTypes from 'prop-types';
import { Input, FormFeedback } from 'reactstrap';
import InputMask from 'react-input-mask';

import CurrencyInput from '../CurrencyInput';

import { Container } from './styles';

const CustomBootstrapInput = ({
  label,
  field,
  form: { touched, errors },
  mask,
  currency,
  ...props
}) => {
  return (
    <Container>
      {label}
      <Input
        mask={mask || false}
        tag={currency ? CurrencyInput : InputMask}
        invalid={!!(touched[field.name] && errors[field.name])}
        {...field}
        {...props}
      />
      {touched[field.name] && errors[field.name] && (
        <FormFeedback tooltip>{errors[field.name]}</FormFeedback>
      )}
    </Container>
  );
};

CustomBootstrapInput.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
  }).isRequired,
  mask: PropTypes.string,
  currency: PropTypes.bool,
  prefix: PropTypes.string,
};

CustomBootstrapInput.defaultProps = {
  mask: '',
  currency: false,
  prefix: '',
};

export default CustomBootstrapInput;

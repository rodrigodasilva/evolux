import React from 'react';
import PropTypes from 'prop-types';
import { Input, FormFeedback } from 'reactstrap';
import { Field as FormikField } from 'formik';

import { Container } from './styles';

const CustomBootstrapInput = ({
  label,
  field,
  form: { touched, errors },
  ...props
}) => (
  <Container>
    {label}
    <Input
      invalid={!!(touched[field.name] && errors[field.name])}
      {...field}
      {...props}
    />
    {touched[field.name] && errors[field.name] && (
      <FormFeedback tooltip>{errors[field.name]}</FormFeedback>
    )}
  </Container>
);

CustomBootstrapInput.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
  }).isRequired,
};

export default props => (
  <FormikField {...props} component={CustomBootstrapInput} />
);

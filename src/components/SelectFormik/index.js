import React from 'react';
import { Field as FormikField } from 'formik';
import PropTypes from 'prop-types';
import { Input, FormFeedback } from 'reactstrap';

import { Container } from './styles';

const CustomBootstrapSelect = ({
  label,
  field,
  form: { touched, errors },
  children,
  ...props
}) => {
  return (
    <Container>
      {label}
      <Input
        type="select"
        invalid={!!(touched[field.name] && errors[field.name])}
        {...field}
        {...props}
      >
        {children}{' '}
      </Input>
      {touched[field.name] && errors[field.name] && (
        <FormFeedback tooltip>{errors[field.name]}</FormFeedback>
      )}
    </Container>
  );
};

CustomBootstrapSelect.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
  }).isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default props => (
  <FormikField {...props} component={CustomBootstrapSelect} />
);

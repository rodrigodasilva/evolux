import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const CurrencyInput = ({ onChange, name, ...props }) => (
  <NumberFormat
    name={name}
    decimalSeparator=","
    thousandSeparator="."
    allowNegative={false}
    decimalScale={2}
    fixedDecimalScale
    onValueChange={({ floatValue }) =>
      onChange({
        target: { name, value: floatValue },
      })
    }
    {...props}
  />
);

CurrencyInput.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
};

CurrencyInput.defaultProps = {
  onChange: () => {},
  name: '',
};

export default CurrencyInput;

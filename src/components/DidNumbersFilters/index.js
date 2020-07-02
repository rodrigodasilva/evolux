import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

import CurrencyInput from '../CurrencyInput';

import { Container } from './styles';

const DidNumbersFilters = ({ onChange }) => {
  const handleChange = (key, value) => {
    onChange({ [key]: value });
  };

  return (
    <Container>
      <h5>Filtros</h5>

      <fieldset>
        <legend>Numero</legend>
        <Input
          placeholder="Ex: 55 119386511"
          onChange={e => handleChange('value', e.target.value)}
          bsSize="sm"
        />
      </fieldset>

      <fieldset>
        <legend>Valor Mensal</legend>
        <Input
          placeholder="Mínimo"
          tag={CurrencyInput}
          onChange={e => handleChange('monthyPriceStart', e.target.value)}
          bsSize="sm"
        />
        <Input
          placeholder="Máximo"
          tag={CurrencyInput}
          onChange={e => handleChange('monthyPriceEnd', e.target.value)}
          bsSize="sm"
        />
      </fieldset>

      <fieldset>
        <legend>Valor do setup</legend>
        <Input
          placeholder="Mínimo"
          tag={CurrencyInput}
          onChange={e => handleChange('setupPriceStart', e.target.value)}
          bsSize="sm"
        />
        <Input
          placeholder="Máximo"
          tag={CurrencyInput}
          onChange={e => handleChange('setupPriceEnd', e.target.value)}
          bsSize="sm"
        />
      </fieldset>
    </Container>
  );
};

DidNumbersFilters.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default DidNumbersFilters;

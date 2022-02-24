import React from 'react'
import PropTypes from 'prop-types'

import { Paper } from '../../../../components/Paper'
import { Input } from '../../../../components/Input'

const Filters = ({ onChange }) => (
  <Paper>
    <Input 
      className="mb-4" 
      label="Número" 
      name="value" 
      onChange={onChange}
      type="number"
    />
    <Input 
      className="mb-2" 
      label="Valor mensal" 
      name="monthyPriceStart" 
      onChange={onChange}
      type="number"
    />
    <Input 
      className="mb-4" 
      name="monthyPriceEnd"
      onChange={onChange} 
      type="number"
    />
    <Input 
      className="mb-2" 
      label="Valor do setup" 
      name="setupPriceStart" 
      onChange={onChange}
      type="number"
    />
    <Input 
      name="setupPriceEnd" 
      onChange={onChange}
      type="number"
    />
  </Paper>
)

Filters.propTypes = {
  onChange: PropTypes.func.isRequired
}

export { Filters }
import React from 'react'
import PropTypes from 'prop-types'

import { Paper } from '../../../../components/Paper'
import { Input } from '../../../../components/Input'

import debounce from '../../../../utils/debounce'

const Filters = ({ onChange }) => {  
  const handleChangeWithDebounce = debounce(onChange, 600)
  return (  
    <Paper>
      <Input 
        className="mb-4" 
        label="Número" 
        name="value" 
        onChange={handleChangeWithDebounce}
        type="number"
      />
      <Input 
        className="mb-2" 
        label="Valor mensal" 
        name="monthyPriceStart" 
        onChange={handleChangeWithDebounce}
        type="number"
      />
      <Input 
        className="mb-4" 
        name="monthyPriceEnd"
        onChange={handleChangeWithDebounce} 
        type="number"
      />
      <Input 
        className="mb-2" 
        label="Valor do setup" 
        name="setupPriceStart" 
        onChange={handleChangeWithDebounce}
        type="number"
      />
      <Input 
        name="setupPriceEnd" 
        onChange={handleChangeWithDebounce}
        type="number"
      />
    </Paper>
  )
}

Filters.propTypes = {
  onChange: PropTypes.func.isRequired
}

export { Filters }
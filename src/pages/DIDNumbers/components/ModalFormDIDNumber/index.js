import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Input } from '../../../../components/Input'
import { Select } from '../../../../components/Select'
import { Button, Modal } from '../../../../containers'

const ModalFormDIDNumber = ({ isOpen, initialData, onSubmit, onClose, status }) => {
  const [data, setData] = useState({
    id: '',
    value: '',
    monthyPrice: '',
    setupPrice: '',
    currency: '',
  })

  useEffect(() => {
    if (initialData) {
      setData(initialData);
    }

    return () => setData(null)
  }, [initialData, isOpen])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleClose = () => {
    if (status !== 'loading') {
      onClose()
    }
  }

  const validateData = () => {
    const hasEmptyKey = Object.keys(data).find(key => key !== 'id' && !data[key])
    return !hasEmptyKey
  }

  const handleSubmit = () => {    
    const isValidData = validateData()
    if (isValidData) {
      onSubmit(data)
    }
  }

  return (
    <Modal
      show={isOpen}
      onHide={handleClose}
      contentClassName="bg-dark text-white"    
      size="sm"    
      backdrop="static"
    >        
      <Modal.Header className="border-bottom-0">
        <Modal.Title>
          {initialData ? 'Editar DID Number' : 'Adicionar DID Number'}          
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Input 
          label="Número"
          name="value"
          value={data?.value}
          onChange={handleInputChange}
          placeholder="Ex: +55 7798838-6511"
          className="mb-4"
        />
        <Input 
          label="Valor mensal"
          name="monthyPrice"
          value={data?.monthyPrice}
          onChange={handleInputChange}
          placeholder="Ex: 19,90"
          className="mb-4"
        />
        <Input 
          label="Valor do setup"
          name="setupPrice"
          value={data?.setupPrice}
          onChange={handleInputChange}
          placeholder="Ex: 120,00"
          className="mb-4"
        />
        <Select 
          label="Moeda utilizada"
          name="currency" 
          value={data?.currency}
          onChange={handleInputChange}
        >
          <option value="">Selecione</option>
          <option value="R$">Real R$</option>
          <option value="$">Dólar $</option>
          <option value="U$">Euro U$</option>
        </Select>
      </Modal.Body>
      <Modal.Footer className="border-top-0">
        <Button variant="outline-light" onClick={handleClose}>
          Cancelar
        </Button>
        <Button type="submit" onClick={handleSubmit} disabled={status === 'loading'}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

ModalFormDIDNumber.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  initialData: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    monthyPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    setupPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    currency: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  status: PropTypes.oneOf(['idle', 'loading', 'error'])
}

ModalFormDIDNumber.defaultProps = {
  initialData: null,
  status: 'idle'
}

export { ModalFormDIDNumber }

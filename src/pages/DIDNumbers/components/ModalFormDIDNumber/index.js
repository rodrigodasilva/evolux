import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Input } from '../../../../components/Input'
import { Select } from '../../../../components/Select'
import { Button, Modal } from '../../../../containers'

const data = {
  id: '',
  value: '',
  monthyPrice: '',
  setupPrice: '',
  currency: '',
}

const ModalFormDIDNumber = ({ isOpen, initialData, onSubmit, onClose }) => {
  const [initialFormData, setInitialFormData] = useState(data);

  useEffect(() => {
    if (initialData) {
      setInitialFormData(initialData);
    }

    return () => setInitialFormData(data)
  }, [initialData, isOpen]);

  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      contentClassName="bg-dark text-white"    
      size="sm"    
    >        
      <Modal.Header className="border-bottom-0">
        <Modal.Title>
          Editar DID Number
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Input 
          name="value"
          label="Número"
          placeholder="Ex: +55 7798838-6511"
          className="mb-4"
        />
        <Input 
          name="monthyPrice"
          label="Valor mensal"
          placeholder="Ex: 19,90"
          className="mb-4"
        />
        <Input 
          name="setupPrice"
          label="Valor do setup"
          placeholder="Ex: 120,00"
          className="mb-4"
        />
        <Select name="currency" label="Moeda utilizada">
          <option value="">Selecione</option>
          <option value="R$">Real R$</option>
          <option value="$">Dólar $</option>
          <option value="U$">Euro U$</option>
        </Select>
      </Modal.Body>
      <Modal.Footer className="border-top-0">
        <Button variant="outline-light" onClick={onClose}>
          Cancelar
        </Button>
        <Button type="submit" >
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

ModalFormDIDNumber.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  initialData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    monthyPrice: PropTypes.string.isRequired,
    setupPrice: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

ModalFormDIDNumber.defaultProps = {
  initialData: null,
}

export { ModalFormDIDNumber }

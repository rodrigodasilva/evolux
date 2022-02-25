import React from 'react'
import PropTypes from 'prop-types'

import { Button, Modal } from '../../../../containers'

const ModalDeleteDIDNumber = ({ isOpen, data, onSubmit, onClose, status }) => {
  const handleClose = () => {
    if (status !== 'loading') {
      onClose()
    }
  }
 
  const handleSubmit = () => {         
    onSubmit({ id: data?.id })
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
          Deletar DID Number         
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <span>Número:</span>
        <h4>{data?.value}</h4>

        <span>Valor mensal:</span>
        <h4>{data?.currency} {data?.monthyPrice}</h4>

        <span>Valor do setup</span>
        <h4>{data?.currency} {data?.setupPrice}</h4>
      </Modal.Body>
      <Modal.Footer className="border-top-0">
        <Button variant="outline-light" onClick={handleClose}>
          Cancelar
        </Button>
        <Button 
          type="submit" 
          onClick={handleSubmit} 
          disabled={status === 'loading'}
          variant="danger"
        >
          Deletar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

ModalDeleteDIDNumber.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  data: PropTypes.shape({
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

ModalDeleteDIDNumber.defaultProps = {
  initialData: null,
  status: 'idle'
}

export { ModalDeleteDIDNumber }

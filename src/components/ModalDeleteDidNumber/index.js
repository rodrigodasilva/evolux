import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { CustomBody } from './styles';

const ModalDidNumber = ({ isOpen, initialData, onSubmit, onClose }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        toggle={onClose}
        contentClassName="bg-dark text-white"
      >
        <ModalHeader toggle={onClose} className="border-bottom-0">
          Deletar DID Number
        </ModalHeader>
        <ModalBody>
          <CustomBody>
            <div>
              Numero:
              <h4>{initialData.value}</h4>
            </div>

            <div>
              Valor mensal:
              <h4>
                {initialData.currency} {initialData.monthyPrice}
              </h4>
            </div>

            <div>
              Valor do setup:
              <h4>
                {initialData.currency} {initialData.setupPrice}
              </h4>
            </div>
          </CustomBody>
        </ModalBody>

        <ModalFooter className="border-top-0">
          <Button color="danger" onClick={() => onSubmit(initialData)}>
            Deletar
          </Button>{' '}
          <Button color="secondary" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

ModalDidNumber.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  initialData: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    value: PropTypes.string.isRequired,
    monthyPrice: PropTypes.number.isRequired,
    setupPrice: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

ModalDidNumber.defaultProps = {
  initialData: null,
};

export default ModalDidNumber;

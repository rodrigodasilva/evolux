import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import InputFormik from '../Input';

const validationSchema = Yup.object().shape({
  value: Yup.string().required('Informe o telefone'),
  monthyPrice: Yup.string().required('Informe a mensalidade'),
  setupPrice: Yup.string().required('Informe o valor do setup'),
  currency: Yup.string().required('Informe a moeda utilizada'),
});

const ModalDidNumber = ({ isOpen, initialData, onSubmit, onClose }) => {
  const [initialFormData, setInitialFormData] = useState({
    id: '',
    value: '',
    monthyPrice: '',
    setupPrice: '',
    currency: '',
  });

  useEffect(() => {
    if (initialData) {
      setInitialFormData(initialData);
    }
  }, [initialData, isOpen]);

  return (
    <div>
      <Modal isOpen={isOpen} toggle={onClose}>
        <ModalHeader toggle={onClose}>DID Number</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={initialFormData}
            validationSchema={validationSchema}
            onSubmit={values => onSubmit(values)}
            enableReinitialize
          >
            <Form id="form-did-number">
              <InputFormik
                name="value"
                label="Valor"
                placeholder="Ex: +55 7798838-6511"
              />
              <InputFormik
                name="monthyPrice"
                label="Valor mensal"
                placeholder="Ex: 19,90"
              />
              <InputFormik
                name="setupPrice"
                label="Valor do setup"
                placeholder="Ex: 120,00"
              />
              <InputFormik
                name="currency"
                label="Moeda utilizada"
                placeholder="Ex: R$"
              />
            </Form>
          </Formik>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" type="submit" form="form-did-number">
            Adicionar
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
    monthyPrice: PropTypes.string.isRequired,
    setupPrice: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

ModalDidNumber.defaultProps = {
  initialData: null,
};

export default ModalDidNumber;

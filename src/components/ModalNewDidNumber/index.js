import React from 'react';
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

const ModalDidNumber = ({ isOpen, onSubmit, onClose }) => {
  return (
    <div>
      <Modal isOpen={isOpen} toggle={onClose}>
        <ModalHeader toggle={onClose} className="border-bottom-0">
          Adicionar DID Number
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              id: new Date().getTime(),
              value: '',
              monthyPrice: '',
              setupPrice: '',
              currency: '',
            }}
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

        <ModalFooter className="border-top-0">
          <Button color="success" type="submit" form="form-did-number">
            Salvar
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

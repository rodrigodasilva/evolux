import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import InputFormik from '../Input';
import SelectFormik from '../Select';

import { CustomModalHeader } from './styles';

const validationSchema = Yup.object().shape({
  value: Yup.string()
    .test('size-value', 'Numero incompleto', value => {
      if (!value) return false;

      const formattedValue = value.replace('_', '');
      if (formattedValue.length === 17) {
        return true;
      }
      return false;
    })
    .required('Informe o numero'),
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
      <Modal
        isOpen={isOpen}
        toggle={onClose}
        contentClassName="bg-dark text-white"
      >
        <CustomModalHeader toggle={onClose} className="border-bottom-0">
          Editar DID Number
        </CustomModalHeader>
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
                label="Numero"
                placeholder="Ex: +55 7798838-6511"
                mask="+55 99 99999 9999"
              />
              <InputFormik
                name="monthyPrice"
                label="Valor mensal"
                placeholder="Ex: 19,90"
                currency
              />
              <InputFormik
                name="setupPrice"
                label="Valor do setup"
                placeholder="Ex: 120,00"
                currency
              />

              <SelectFormik name="currency" label="Moeda utilizada">
                <option value="">Selecione</option>
                <option value="R$">Real R$</option>
                <option value="$">Dólar $</option>
                <option value="U$">Euro U$</option>
              </SelectFormik>
            </Form>
          </Formik>
        </ModalBody>

        <ModalFooter className="border-top-0">
          <Button color="success" type="submit" form="form-did-number">
            Atualizar
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
    monthyPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    setupPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    currency: PropTypes.string.isRequired,
  }),
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

ModalDidNumber.defaultProps = {
  initialData: null,
};

export default ModalDidNumber;

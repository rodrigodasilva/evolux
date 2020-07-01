import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'reactstrap';

import Pagination from '../../components/Pagination';
import ModalDidNumber from '../../components/ModalDidNumber';

import {
  didNumbersRequest,
  createRequest,
} from '../../store/modules/didNumbers/actions';

import { Header } from './styles';

const Dashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 6,
  });

  const didNumbersData = useSelector(({ didNumbers }) => didNumbers.didNumbers);
  const responseFromCreation = useSelector(
    ({ didNumbers }) => didNumbers.responseFromCreation
  );

  // console.log(didNumbersData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      didNumbersRequest({ page: pagination.page, limit: pagination.limit })
    );
  }, [dispatch, pagination]);

  useEffect(() => {
    if (responseFromCreation) {
      setModalIsOpen(false);
      setPagination(oldPagination => ({ ...oldPagination, page: 1 }));
    }
  }, [responseFromCreation]);

  const handleAddDidNumber = didNumber => {
    dispatch(createRequest(didNumber));
  };

  return (
    <div>
      <Header>
        <h3>DID Numbers</h3>

        <Button
          color="primary"
          onClick={() => setModalIsOpen(true)}
          data-testid="button-add-did-number"
        >
          Adicionar
        </Button>
      </Header>

      {modalIsOpen && (
        <ModalDidNumber
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          onSubmit={values => handleAddDidNumber(values)}
        />
      )}

      <Table>
        <thead>
          <tr>
            <th>Value</th>
            <th>Valor Mensal</th>
            <th>Valor do setup</th>
          </tr>
        </thead>
        <tbody>
          {didNumbersData.data &&
            didNumbersData.data.map(didNumber => (
              <tr key={didNumber.id}>
                <td>{didNumber.value}</td>
                <td>
                  {didNumber.currency}
                  {didNumber.monthyPrice}
                </td>
                <td>
                  {didNumber.currency}
                  {didNumber.setupPrice}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <Pagination
        records={(didNumbersData && didNumbersData.total) || 0}
        current={pagination.page}
        limit={pagination.limit}
        onChange={page =>
          setPagination(oldPagination => ({ ...oldPagination, page }))
        }
      />
    </div>
  );
};

export default Dashboard;

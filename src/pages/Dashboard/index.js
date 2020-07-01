import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'reactstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

import Pagination from '../../components/Pagination';
import ModalNewDidNumber from '../../components/ModalNewDidNumber';
import ModalEditDidNumber from '../../components/ModalEditDidNumber';
import ModalDeleteDidNumber from '../../components/ModalDeleteDidNumber';

import {
  didNumbersRequest,
  createRequest,
  updateRequest,
  deleteRequest,
} from '../../store/modules/didNumbers/actions';

import { Header, Actions } from './styles';

const Dashboard = () => {
  const [modalOpened, setModalOpened] = useState();
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
  });
  const [modalDataEditting, setModalDataEditting] = useState({});

  const {
    didNumbers: didNumbersData,
    responseFromCreation,
    responseFromUpdate,
    responseFromDelete,
  } = useSelector(({ didNumbers }) => didNumbers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      didNumbersRequest({ page: pagination.page, limit: pagination.limit })
    );
  }, [dispatch, pagination]);

  useEffect(() => {
    if (responseFromCreation) {
      setModalOpened('');
      setPagination(oldPagination => ({ ...oldPagination, page: 1 }));
    }
  }, [responseFromCreation]);

  useEffect(() => {
    if (responseFromUpdate) {
      setModalOpened('');
    }
  }, [responseFromUpdate]);

  useEffect(() => {
    if (responseFromDelete) {
      setModalOpened('');
      setPagination(oldPagination => ({ ...oldPagination, page: 1 }));
    }
  }, [responseFromDelete]);

  const handleAddDidNumber = didNumber => {
    dispatch(createRequest(didNumber));
  };

  const handleUpdateDidNumber = didNumber => {
    dispatch(updateRequest(didNumber));
  };

  const handleDeleteDidNumber = id => {
    dispatch(deleteRequest(id));
  };

  return (
    <div>
      <Header>
        <h3>DID Numbers</h3>

        <Button
          color="primary"
          onClick={() => setModalOpened('newDidNumber')}
          data-testid="button-add-did-number"
        >
          Adicionar
        </Button>
      </Header>

      <Table>
        <thead>
          <tr>
            <th>Numero</th>
            <th>Valor Mensal</th>
            <th>Valor do setup</th>
            <th className="d-flex justify-content-center">#</th>
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

                <td>
                  <Actions>
                    <FaTrash
                      size={20}
                      color="#424242"
                      title="Deletar"
                      onClick={() => {
                        setModalOpened('deleteDidNumber');
                        setModalDataEditting(didNumber);
                      }}
                    />
                    <FaEdit
                      size={20}
                      color="#424242"
                      title="Editar"
                      onClick={() => {
                        setModalOpened('editDidNumber');
                        setModalDataEditting(didNumber);
                      }}
                    />
                  </Actions>
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

      {modalOpened === 'newDidNumber' && (
        <ModalNewDidNumber
          isOpen={modalOpened === 'newDidNumber'}
          onClose={() => setModalOpened('')}
          onSubmit={values => handleAddDidNumber(values)}
        />
      )}

      {modalOpened === 'editDidNumber' && (
        <ModalEditDidNumber
          isOpen={modalOpened === 'editDidNumber'}
          onClose={() => setModalOpened('')}
          onSubmit={values => handleUpdateDidNumber(values)}
          initialData={modalDataEditting}
        />
      )}

      {modalOpened === 'deleteDidNumber' && (
        <ModalDeleteDidNumber
          isOpen={modalOpened === 'deleteDidNumber'}
          onClose={() => setModalOpened('')}
          onSubmit={({ id }) => handleDeleteDidNumber(id)}
          initialData={modalDataEditting}
        />
      )}
    </div>
  );
};

export default Dashboard;

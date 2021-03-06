import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Spinner } from 'reactstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

import Pagination from '../../components/Pagination';
import ModalNewDidNumber from '../../components/ModalNewDidNumber';
import ModalEditDidNumber from '../../components/ModalEditDidNumber';
import ModalDeleteDidNumber from '../../components/ModalDeleteDidNumber';
import Card from '../../components/Card';
import CurrencyInput from '../../components/CurrencyInput';

import Filters from './Filters';

import {
  didNumbersRequest,
  createRequest,
  updateRequest,
  deleteRequest,
} from '../../store/modules/didNumbers/actions';

import { Container, ContainerTable, Header, Actions } from './styles';

const Dashboard = () => {
  const [filters, setFilters] = useState({
    page: 1,
    limit: 6,
    value: '',
    monthyPriceStart: '',
    monthyPriceEnd: '',
    setupPriceStart: '',
    setupPriceEnd: '',
  });
  const [modalOpened, setModalOpened] = useState();
  const [modalDataEditting, setModalDataEditting] = useState({});

  const {
    didNumbers: didNumbersData,
    loadingList,
    responseFromCreation,
    responseFromUpdate,
    responseFromDelete,
  } = useSelector(({ didNumbers }) => didNumbers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(didNumbersRequest(filters));
  }, [dispatch, filters]);

  useEffect(() => {
    if (responseFromCreation) {
      setModalOpened('');
      setFilters(oldFilters => ({ ...oldFilters, page: 1 }));
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
      setFilters(oldFilters => ({ ...oldFilters, page: 1 }));
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

  const handleFilter = filter => {
    setFilters({
      ...filters,
      ...filter,
      page: 1,
    });
  };

  return (
    <Container>
      <Filters onChange={filter => handleFilter(filter)} />

      <Card>
        <>
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

          <ContainerTable>
            {loadingList && (
              <div className="loading">
                <Spinner size="sm" color="primary" />
              </div>
            )}

            <Table hover borderless responsive>
              <thead>
                <tr>
                  <th>Numero</th>
                  <th>Valor Mensal</th>
                  <th>Valor do setup</th>
                  <th className="text-center">#</th>
                </tr>
              </thead>
              <tbody>
                {didNumbersData.data &&
                  didNumbersData.data.length &&
                  didNumbersData.data.map(didNumber => (
                    <tr key={didNumber.id}>
                      <td>{didNumber.value}</td>
                      <td>
                        <CurrencyInput
                          value={didNumber.monthyPrice}
                          prefix={`${didNumber.currency} `}
                          displayType="text"
                        />
                      </td>
                      <td>
                        <CurrencyInput
                          prefix={`${didNumber.currency} `}
                          value={didNumber.setupPrice}
                          displayType="text"
                        />
                      </td>

                      <td>
                        <Actions>
                          <FaTrash
                            size={20}
                            color="#ddd"
                            title="Deletar"
                            onClick={() => {
                              setModalOpened('deleteDidNumber');
                              setModalDataEditting(didNumber);
                            }}
                          />
                          <FaEdit
                            size={20}
                            color="#ddd"
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
            {didNumbersData.data && !didNumbersData.data.length && (
              <p className="message">Nenhum registro encontrado</p>
            )}
            {!Object.keys(didNumbersData).length && (
              <p className="message">Falha na busca pelo registro</p>
            )}
          </ContainerTable>

          <Pagination
            records={(didNumbersData && didNumbersData.total) || 0}
            current={filters.page}
            limit={filters.limit}
            onChange={page =>
              setFilters(oldFilters => ({ ...oldFilters, page }))
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
        </>
      </Card>
    </Container>
  );
};

export default Dashboard;

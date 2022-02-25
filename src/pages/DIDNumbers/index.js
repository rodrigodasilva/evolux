import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { 
  fetchDidNumbers, 
  selectDidNumber, 
  createDidNumber, 
  setIsOpenedModalCreate, 
  setIsOpenedModalUpdate,
  updateDidNumber
} from '../../features/didNumber/didNumberSlice'

import { Header} from '../../components/Header'
import { Paper } from '../../components/Paper'
import { Pagination } from '../../components/Pagination'
import { Button, Container, Row, Col } from '../../containers'

import { Filters } from './components/Filters'
import { ModalFormDIDNumber } from './components/ModalFormDIDNumber'
import { TableDIDNumbers } from './components/TableDIDNumbers'

import * as S from './styles'

export const DIDNumbers = () => {
  const [filters, setFilters] = useState({ 
    value: '',
    monthyPriceStart: '',
    monthyPriceEnd: '',
    setupPriceStart: '',
    setupPriceEnd: '', 
  })
  const [pagination, setPagination] = useState({ page: 1, limit: 6, total: 10 })
  const [editingData, setEditingData] = useState(null)

  const { 
    items: didNumbers, 
    fetchStatus, 
    isOpenedModalCreate, 
    createStatus,
    isOpenedModalUpdate,
    updateStatus
  } = useSelector(selectDidNumber)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDidNumbers({ ...pagination, ...filters }))
  }, [pagination, filters])

  const handleChangeFilter = event => {
    const { value, name } = event.target
    setFilters(prevState => ({ ...prevState, [name]: value }))
    setPagination(prevState => ({ ...prevState, page: 1 }))
  }

  const handleChangePage = page => {
    setPagination(prevState => ({ ...prevState, page }))
  }

  const handleSetIsOpenedModalCreate = (status) => {
    dispatch(setIsOpenedModalCreate(status))
  }

  const handleCreateDidNumber = data => {
    const payload = { ...data, id: new Date().getTime() }
    dispatch(createDidNumber(payload))
  }

  const handleSetIsOpenedModalUpdate = (status) => {
    dispatch(setIsOpenedModalUpdate(status))
  }

  const handleOpenModalEdit = data => {
    setEditingData(data)
    dispatch(setIsOpenedModalUpdate(true))
  }

  const handleUpdateDidNumber = data => {
    dispatch(updateDidNumber(data))
  }

  return (
    <>
      <S.Wrapper>
        <Container>
          <Header />
          <Row>
            <Col md={3} className="mb-4">
              <Filters onChange={handleChangeFilter} />
            </Col>
            <Col>
              <Paper>
                <div className="d-flex justify-content-between align-items-center mb-5">
                  <h4>
                    Listagem
                  </h4>
                  <Button onClick={() => handleSetIsOpenedModalCreate(true)}>
                    Adicionar
                  </Button>
                </div>
                <TableDIDNumbers 
                  items={didNumbers?.data || []} 
                  status={fetchStatus}
                  onEditData={handleOpenModalEdit}
                />              
                {didNumbers.count > pagination.limit && fetchStatus !== 'error' && (
                  <Pagination 
                    className="d-flex justify-content-end" 
                    current={pagination.page}
                    limit={pagination.limit}
                    records={didNumbers.count}
                    onChange={handleChangePage}
                    isLoading={fetchStatus === 'loading'}
                  />                
                )}  
              </Paper>
            </Col>
          </Row>
        </Container>
      </S.Wrapper>
      
      {isOpenedModalCreate && (
        <ModalFormDIDNumber 
          isOpen={isOpenedModalCreate} 
          onClose={() => handleSetIsOpenedModalCreate(false)}
          onSubmit={handleCreateDidNumber}
          status={createStatus}
        />
      )}     

      {isOpenedModalUpdate && (
        <ModalFormDIDNumber 
          initialData={editingData}
          isOpen={isOpenedModalUpdate} 
          onClose={() => handleSetIsOpenedModalUpdate(false)}
          onSubmit={handleUpdateDidNumber}
          status={updateStatus}
        />
      )}       
    </>
  )
}
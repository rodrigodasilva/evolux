import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchDidNumbers, selectDidNumber } from '../../features/didNumber/didNumberSlice'

import { Header} from '../../components/Header'
import { Paper } from '../../components/Paper'
import { Pagination } from '../../components/Pagination'
import { Button, Container, Row, Col } from '../../containers'

import { Filters } from './components/Filters'
import { ModalFormDIDNumber } from './components/ModalFormDIDNumber'
import { TableDIDNumbers } from './components/TableDIDNumbers'

import * as S from './styles'

export const DIDNumbers = () => {
  const [openedModal, setOpenedModal] = useState('')
  const [filters, setFilters] = useState({ 
    value: '',
    monthyPriceStart: '',
    monthyPriceEnd: '',
    setupPriceStart: '',
    setupPriceEnd: '', 
  })
  const [pagination, setPagination] = useState({ page: 1, limit: 6, total: 10 })
  const { items: didNumbers, status } = useSelector(selectDidNumber)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDidNumbers({ ...pagination, ...filters }))
  }, [pagination, filters])

  const handleChangeFilter = event => {
    const { value, name } = event.target
    setFilters(prevState => ({ ...prevState, [name]: value }))
  }

  const handleChangePage = page => {
    setPagination(prevState => ({ ...prevState, page }))
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
                  <Button onClick={() => setOpenedModal('create')}>
                    Adicionar
                  </Button>
                </div>
                <TableDIDNumbers 
                  items={didNumbers?.data || []} 
                  status={status}
                />              
                {didNumbers.count > pagination.limit && status !== 'error' && (
                  <Pagination 
                    className="d-flex justify-content-end" 
                    current={pagination.page}
                    limit={pagination.limit}
                    records={didNumbers.count}
                    onChange={handleChangePage}
                    isLoading={status === 'loading'}
                  />                
                )}  
              </Paper>
            </Col>
          </Row>
        </Container>
      </S.Wrapper>
      {openedModal === "create" && (
        <ModalFormDIDNumber 
          isOpen={openedModal === "create"} 
          onClose={() => setOpenedModal("")}
          onSubmit={(data) => console.log(data)}
        />
      )} 
    </>
  )
}
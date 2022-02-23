import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchDidNumbers, selectDidNumber } from '../../features/didNumber/didNumberSlice'

import { Header} from '../../components/Header'
import { Paper } from '../../components/Paper'
import { Input } from '../../components/Input'
import { Button, Container, Row, Col } from '../../containers'

import { ModalFormDIDNumber } from './components/ModalFormDIDNumber'
import { TableDIDNumbers } from './components/TableDIDNumbers'

import * as S from './styles'

export const DIDNumbers = () => {
  const [openedModal, setOpenedModal] = useState('')
  const { items: didNumbers } = useSelector(selectDidNumber)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDidNumbers())
  }, [])

  return (
    <>
      <S.Wrapper>
        <Container>
          <Header />
          <Row>
            <Col md={3} className='mb-4'>
              <Paper>
                <Input className="mb-4" label="Número" />
                <Input className="mb-2" label="Valor mensal" mask="currency" />
                <Input className="mb-4" mask="currency" />
                <Input className="mb-2" label="Valor do setup" />
                <Input />
              </Paper>
            </Col>
            <Col>
              <Paper>
                <div className='d-flex justify-content-between align-items-center mb-5'>
                  <h4>
                    Listagem
                  </h4>
                  <Button onClick={() => setOpenedModal('create')}>
                    Adicionar
                  </Button>
                </div>
                <TableDIDNumbers items={didNumbers} />
              </Paper>
            </Col>
          </Row>
        </Container>
      </S.Wrapper>
      {openedModal === 'create' && (
        <ModalFormDIDNumber 
          isOpen={openedModal === 'create'} 
          onClose={() => setOpenedModal('')}
          onSubmit={(data) => console.log(data)}
        />
      )} 
    </>
  )
}
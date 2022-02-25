import React from 'react'
import PropTypes from 'prop-types'

import { Table, Button, Spinner } from '../../../../containers'

import * as S from './styles'

const TableDIDNumbers = ({ items, status, onEditData }) => {
  if (status === 'error') {
    return <S.Message>Ops... houve um erro inesperado</S.Message>
  }  

  return (
    <S.TableWrapper>
      {status === 'loading' && (
        <S.SpinnerWrapper>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            variant="primary"
            role="status"
            aria-hidden="true"
            />
        </S.SpinnerWrapper>
      )}             
      <Table borderless responsive className="text-white">
        <thead>
          <tr>
            <th>Numero</th>
            <th>Valor Mensal</th>
            <th>Valor do setup</th>
            <th className="text-center">#</th>
          </tr>
        </thead>
        <tbody>
          {items?.map(didNumber => (
            <tr key={didNumber.id}>
              <td>{didNumber.value}</td>
              <td>{didNumber.monthyPrice}</td>
              <td>{`${didNumber.currency} ${didNumber.setupPrice}`}</td>
              <td className="text-center">
                <Button size="sm" variant="outline-danger" className="me-2 mb-2 mb-sm-0">
                  Deletar
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => onEditData(didNumber)}
                >
                  Editar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {status !== 'loading' && items?.length === 0 && (
        <S.Message>Ops... items não encontrados</S.Message>
      )}
    </S.TableWrapper>
  )
}

TableDIDNumbers.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    monthyPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    setupPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    currency: PropTypes.string,
  })),
  status: PropTypes.oneOf(['idle', 'loading', 'error']),
  onEditData:  PropTypes.func.isRequired
}

TableDIDNumbers.defaultProps = {
  items: [], 
  status: 'idle'
}

export { TableDIDNumbers }
import React from 'react'

import { Table, Button } from '../../../../containers'

const TableDIDNumbers = ({ items = [] }) => {
  return (
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
            <td>{didNumber.setupPrice}</td>
            <td className="text-center">
              <Button size="sm" variant="outline-danger" className="me-2">
                Deletar
              </Button>
              <Button size="sm">Editar</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export { TableDIDNumbers }
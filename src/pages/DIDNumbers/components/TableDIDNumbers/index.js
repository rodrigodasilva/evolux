import React from 'react'

import { Table, Button } from '../../../../containers'


const data = [ 
  {
    "id": "1574076904000",
    "value": "+55 71 93212-9009",
    "monthyPrice": 1978.48,
    "setupPrice": 137.63,
    "currency": "R$"
  },
  {
    "id": "1568598563000",
    "value": "+55 77 91234-1111",
    "monthyPrice": 1309.08,
    "setupPrice": 1977.9,
    "currency": "R$"
  },
  {
    "id": "1576014890000",
    "value": "+55 84 91234-4321",
    "monthyPrice": 811.28,
    "setupPrice": 1749.25,
    "currency": "R$"
  },
  {
    "id": "1582165006000",
    "value": "+55 84 91234-4321",
    "monthyPrice": 147.54,
    "setupPrice": 807.53,
    "currency": "$"
  },
  {
    "id": "1566889133000",
    "value": "+55 84 91234-4321",
    "monthyPrice": 1329.06,
    "setupPrice": 1764.8,
    "currency": "$"
  },
  {
    "id": "1585961556000",
    "value": "+55 11 92222-2222",
    "monthyPrice": 734.91,
    "setupPrice": 666.36,
    "currency": "U$"
  },
  {
    "id": "1568334939000",
    "value": "+55 84 91234-4321",
    "monthyPrice": 598.83,
    "setupPrice": 182.78,
    "currency": "R$"
  },
]

const TableDIDNumbers = () => {

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
        {data?.map(didNumber => (
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
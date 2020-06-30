import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'reactstrap';

import Pagination from '../../components/Pagination';

import { didNumbersRequest } from '../../store/modules/didNumbers/actions';

const Dashboard = () => {
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 6,
  });

  const didNumbersData = useSelector(({ didNumbers }) => didNumbers.didNumbers);

  // console.log(didNumbersData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      didNumbersRequest({ page: pagination.page, limit: pagination.limit })
    );
  }, [dispatch, pagination]);

  return (
    <div>
      <h2>Dashboard</h2>

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
        limit={pagination.per_page}
        onChange={page =>
          setPagination(oldPagination => ({ ...oldPagination, page }))
        }
      />
    </div>
  );
};

export default Dashboard;

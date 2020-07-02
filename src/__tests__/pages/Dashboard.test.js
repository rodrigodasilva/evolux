import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, cleanup } from '@testing-library/react';

import Dashboard from '../../pages/Dashboard';

afterEach(cleanup);

describe('Dashboard', () => {
  const mockStore = configureStore([]);

  it('should be able to list the did numbers', async () => {
    const store = mockStore({
      didNumbers: {
        didNumbers: {
          data: [
            {
              id: 1,
              value: '+385 250 356 6502',
              monthyPrice: 994.45,
              setupPrice: 249.56,
              currency: 'R$',
            },
            {
              id: 2,
              value: '+351 468 193 7935',
              monthyPrice: 136.27,
              setupPrice: 711.12,
              currency: 'U$',
            },
          ],
          total: 2,
        },
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );

    expect(getByText('+385 250 356 6502')).toBeTruthy();
    expect(getByText('R$ 994,45')).toBeTruthy();
    expect(getByText('R$ 249,56')).toBeTruthy();

    expect(getByText('+351 468 193 7935')).toBeTruthy();
    expect(getByText('U$ 136,27')).toBeTruthy();
    expect(getByText('U$ 711,12')).toBeTruthy();
  });
});

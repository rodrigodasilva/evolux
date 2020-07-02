import api from '../../api';

export default {
  index: async payload => {
    const {
      page,
      limit,
      value,
      monthyPriceStart,
      monthyPriceEnd,
      setupPriceStart,
      setupPriceEnd,
    } = payload;

    return api
      .get('/did_numbers', {
        params: {
          _page: page,
          _limit: limit,
          _sort: 'id',
          _order: 'desc',
          value_like: value,
          ...(monthyPriceStart ? { monthyPrice_gte: monthyPriceStart } : {}),
          ...(monthyPriceEnd ? { monthyPrice_lte: monthyPriceEnd } : {}),
          ...(setupPriceStart ? { setupPrice_gte: setupPriceStart } : {}),
          ...(setupPriceEnd ? { setupPrice_lte: setupPriceEnd } : {}),
        },
      })
      .then(
        response =>
          new Promise(resolve => setTimeout(() => resolve(response), 1000)) // simulates api delay
      );
  },

  store: async payload => {
    const response = await api.post('/did_numbers', payload.didNumber);
    return response.data;
  },

  update: async payload => {
    const { id, ...restData } = payload.didNumber;

    const response = await api.put(`/did_numbers/${id}`, { ...restData });
    return response.data;
  },

  delete: async payload => {
    const { id } = payload;

    const response = await api.delete(`/did_numbers/${id}`);
    return response.data;
  },
};

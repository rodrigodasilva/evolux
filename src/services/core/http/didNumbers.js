import api from '../../api';

export default {
  index: async payload => {
    const { limit, page } = payload;

    const response = await api.get('/did_numbers', {
      params: {
        _page: page,
        _limit: limit,
        _sort: 'id',
        _order: 'desc',
      },
    });

    return response;
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

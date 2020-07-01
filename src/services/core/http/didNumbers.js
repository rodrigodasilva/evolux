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

  // show: async payload => {
  //   const { id } = payload;
  //   const res = await api.get(`/fundos/${id}`);
  //   return res.data;
  // },

  store: async payload => {
    const response = await api.post('/did_numbers', payload.didNumber);
    return response.data;
  },

  // update: async payload => {
  //   const response = await api.put('/fundos', payload);
  //   return response.data;
  // },
};

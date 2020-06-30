import api from '../../api';

export default {
  index: async payload => {
    const { limit = 20, page = 1 } = payload;

    const response = await api.get('/did_numbers', {
      params: {
        _page: page,
        _limit: limit,
      },
    });

    return response;
  },
};

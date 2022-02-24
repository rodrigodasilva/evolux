import axios from 'axios'

const baseUrl = 'http://localhost:3333'

export default {
  index: async params => {  
    const formattedParams = {
      _page: params.page,
      _limit: params.limit,
      _sort: 'id',
      _order: 'desc',
      value_like: params.value,
      ...(params.monthyPriceStart ? { monthyPrice_gte: params.monthyPriceStart } : {}),
      ...(params.monthyPriceEnd ? { monthyPrice_lte: params.monthyPriceEnd } : {}),
      ...(params.setupPriceStart ? { setupPrice_gte: params.setupPriceStart } : {}),
      ...(params.setupPriceEnd ? { setupPrice_lte: params.setupPriceEnd } : {}),
    }
    const response = await axios.get(`${baseUrl}/did_numbers`, { params: formattedParams })
    return response  
  }
}


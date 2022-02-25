import axios from 'axios'

import { sleep } from '../../utils/sleep'

const baseUrl = 'http://localhost:3333'

export default {
  index: async params => {  
    await sleep(2000)
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
  },

  create: async payload => {
    await sleep(2000)
    const response = await axios.post(`${baseUrl}/did_numbers`, payload)
    return response.data
  },

  update: async payload => {
    await sleep(2000)
    const { id, ...rest } = payload;
    const response = await axios.put(`${baseUrl}/did_numbers/${id}`, rest)
    return response
  },

  delete: async payload => {
    await sleep(2000)
    const { id } = payload;
    const response = await axios.delete(`${baseUrl}/did_numbers/${id}`)
    return response
  }
}


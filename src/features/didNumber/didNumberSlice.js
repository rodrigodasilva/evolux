import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import didNumberAPI from './didNumberAPI'

export const initialState = {
  items: { data: [], count: 0 },
  fetchStatus: 'idle',
  modalCreateStatus: 'closed',
  createStatus: 'idle'
}

export const fetchDidNumbers = createAsyncThunk(
  'didNumber/fetch',
  async (params) => {
    const response = await didNumberAPI.index(params)
    return { data: response.data, count: Number(response.headers['x-total-count']) }
  }
)

export const createDidNumber = createAsyncThunk(
  'didNumber/create',
  async (payload, { dispatch }) => {  
    const response = await didNumberAPI.create(payload)
    dispatch(fetchDidNumbers({ page: 1, limit: 6 }))
    return response.data
  }
)

export const didNumberSlice = createSlice({
  name: 'didNumber',
  initialState,
  reducers: {
    setModalCreateStatus(state, action) {
      state.modalCreateStatus = action.payload
    }
  },  
  extraReducers: (builder) => {
    builder
      .addCase(fetchDidNumbers.pending, (state) => {
        state.fetchStatus = 'loading'
      })
      .addCase(fetchDidNumbers.fulfilled, (state, action) => {
        state.fetchStatus = 'idle'
        state.items = action.payload
      })
      .addCase(fetchDidNumbers.rejected, (state) => {
        state.fetchStatus = 'error'
      })
      .addCase(createDidNumber.pending, (state) => {
        state.createStatus = 'loading'
      })
      .addCase(createDidNumber.fulfilled, (state) => {
        state.createStatus = 'idle'
        state.modalCreateStatus = 'closed'
      })
      .addCase(createDidNumber.rejected, (state) => {
        state.createStatus = 'error'
      })
  },
})

export const selectDidNumber = (state) => state.didNumber

export const { setModalCreateStatus } = didNumberSlice.actions

export default didNumberSlice.reducer

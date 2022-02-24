import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import didNumberAPI from './didNumberAPI'

const initialState = {
  items: { data: [], count: 0 },
  status: 'idle'
}

export const fetchDidNumbers = createAsyncThunk(
  'didNumber/fetchDidNumber',
  async (params) => {
    const response = await didNumberAPI.index(params)
    return { data: response.data, count: Number(response.headers['x-total-count']) }
  }
)

export const didNumberSlice = createSlice({
  name: 'didNumber',
  initialState,
  reducers: {},  
  extraReducers: (builder) => {
    builder
      .addCase(fetchDidNumbers.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchDidNumbers.fulfilled, (state, action) => {
        state.status = 'idle'
        state.items = action.payload
      })
      .addCase(fetchDidNumbers.rejected, (state) => {
        state.status = 'error'
      })
  },
})

export const selectDidNumber = (state) => state.didNumber
export default didNumberSlice.reducer

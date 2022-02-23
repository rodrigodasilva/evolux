import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { didNumberAPI } from './didNumberAPI'

const initialState = {
  items: [],
  status: 'idle'
}

export const fetchDidNumbers = createAsyncThunk(
  'didNumber/fetchDidNumber',
  async () => {
    const response = await didNumberAPI()
    return response.data
  }
);

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

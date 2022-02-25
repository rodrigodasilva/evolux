import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import didNumberAPI from './didNumberAPI'

export const initialState = {
  items: { data: [], count: 0 },
  fetchStatus: 'idle',
  isOpenedModalCreate: false,
  createStatus: 'idle',
  isOpenedModalUpdate: false,
  updateStatus: 'idle',
  isOpenedModalDelete: false,
  deleteStatus: 'idle',
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

export const updateDidNumber = createAsyncThunk(
  'didNumber/update',
  async (payload) => {      
    const response = await didNumberAPI.update(payload)
    return response.data
  }
)

export const deleteDidNumber = createAsyncThunk(
  'didNumber/delete',
  async (payload, { dispatch }) => {      
    const response = await didNumberAPI.delete(payload)
    dispatch(fetchDidNumbers({ page: 1, limit: 6 }))
    return response.data
  }
)

export const didNumberSlice = createSlice({
  name: 'didNumber',
  initialState,
  reducers: {
    setIsOpenedModalCreate(state, action) {
      state.isOpenedModalCreate = action.payload
    },
    setIsOpenedModalUpdate(state, action) {
      state.isOpenedModalUpdate = action.payload
    },
    setIsOpenedModalDelete(state, action) {
      state.isOpenedModalDelete = action.payload
    },
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
        state.isOpenedModalCreate = false
      })
      .addCase(createDidNumber.rejected, (state) => {
        state.createStatus = 'error'
      })
      .addCase(updateDidNumber.pending, (state) => {
        state.updateStatus = 'loading'
      })
      .addCase(updateDidNumber.fulfilled, (state, { payload }) => {
        const findIndex = state.items.data.findIndex(item => String(item.id) === String(payload?.id))
        if (findIndex !== -1) {
          state.items.data[findIndex] = payload
        }
        state.updateStatus = 'idle'
        state.isOpenedModalUpdate = false
      })
      .addCase(updateDidNumber.rejected, (state) => {
        state.updateStatus = 'error'
      })      
      .addCase(deleteDidNumber.pending, (state) => {
        state.deleteStatus = 'loading'
      })
      .addCase(deleteDidNumber.fulfilled, (state) => {
        state.deleteStatus = 'idle'
        state.isOpenedModalDelete = false
      })
      .addCase(deleteDidNumber.rejected, (state) => {
        state.deleteStatus = 'error'
      })
  },
})

export const selectDidNumber = (state) => state.didNumber

export const { 
  setIsOpenedModalCreate, 
  setIsOpenedModalUpdate, 
  setIsOpenedModalDelete 
} = didNumberSlice.actions

export default didNumberSlice.reducer

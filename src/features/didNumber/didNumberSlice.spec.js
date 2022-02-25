import didNumberReducer, { 
  initialState, 
  fetchDidNumbers, 
  createDidNumber, 
  updateDidNumber,
  didNumberSlice,
  deleteDidNumber
} from './didNumberSlice'

describe('didNumber reducer', () => {
  it('should handle initial state', () => {
    expect(didNumberReducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })

  describe('fetch', () => {
    it('should set fetchStatus=loading while action is pending', () => {
      const action = { type: fetchDidNumbers.pending }
      const state = didNumberReducer({ fetchStatus: 'idle' }, action)
      expect(state).toEqual({ fetchStatus: 'loading' })
    })
    it('should set fetchStatus=error while action is rejected', () => {
      const action = { type: fetchDidNumbers.rejected }
      const state = didNumberReducer({ fetchStatus: 'pending' }, action)
      expect(state).toEqual({ fetchStatus: 'error' })
    })
    it('should set fetchStatus=idle while action is fulfilled', () => {
      const action = { type: fetchDidNumbers.fulfilled }
      const state = didNumberReducer({ fetchStatus: 'pending' }, action)
      expect(state).toEqual({ fetchStatus: 'idle' })
    })    
    it('should set items when action is fulfilled', () => {
      const didNumber = {
        "id": "1574076904000",
        "value": "+55 71 93212-9009",
        "monthyPrice": 1978.48,
        "setupPrice": 137.63,
        "currency": "R$"
      }
      const action = { type: fetchDidNumbers.fulfilled, payload: [didNumber] }
      const state = didNumberReducer({ fetchStatus: 'idle' }, action)
      expect(state).toEqual({
        fetchStatus: 'idle',
        items: [didNumber]
      })
    })
  })

  describe('create', () => {
    it('should set createStatus=loading while action is pending', () => {
      const action = { type: createDidNumber.pending }
      const state = didNumberReducer({ createStatus: 'idle' }, action)
      expect(state).toEqual({ createStatus: 'loading' })
    })    
    it('should set createStatus=idle and isOpenedModalCreate=false while action is fulfilled', () => {
      const action = { type: createDidNumber.fulfilled }
      const state = didNumberReducer({ createStatus: 'pending' }, action)
      expect(state).toEqual({ createStatus: 'idle', isOpenedModalCreate: false })
    })
    it('should set createStatus=error while action is rejected', () => {
      const action = { type: createDidNumber.rejected }
      const state = didNumberReducer({ createStatus: 'pending' }, action)
      expect(state).toEqual({ createStatus: 'error' })
    })
  })

  describe('update', () => {
    it('should set updateStatus=loading while action is pending', () => {
      const action = { type: updateDidNumber.pending }
      const state = didNumberReducer({ updateStatus: 'idle' }, action)
      expect(state).toEqual({ updateStatus: 'loading' })
    })
    it('should set createStatus=idle while action is fulfilled', () => {
      const updatedItem = { id: 'fake-id-2', value: 'updated-fake-value-2' }
      const action = { type: updateDidNumber.fulfilled, payload: updatedItem }
      const oldItems = [{ id: 'fake-id-1', value: 'fake-value-1' }, { id: 'fake-id-2', value: 'fake-value-2' }]

      const state = didNumberReducer({ updateStatus: 'pending', items: { data: oldItems }}, action)
      const newItems = [{ id: 'fake-id-1', value: 'fake-value-1' }, updatedItem]

      expect(state).toEqual({ updateStatus: 'idle', items: { data: newItems }, isOpenedModalUpdate: false })
    })
    it('should set updateStatus=error while action is rejected', () => {
      const action = { type: updateDidNumber.rejected }
      const state = didNumberReducer({ updateStatus: 'pending' }, action)
      expect(state).toEqual({ updateStatus: 'error' })
    })         
  })

  describe('delete', () => {
    it('should set deleteStatus=loading while action is pending', () => {
      const action = { type: deleteDidNumber.pending }
      const state = didNumberReducer({ deleteStatus: 'idle' }, action)
      expect(state).toEqual({ deleteStatus: 'loading' })
    })    
    it('should set deleteStatus=idle and isOpenedModalDelete=false while action is fulfilled', () => {
      const action = { type: deleteDidNumber.fulfilled }
      const state = didNumberReducer({ deleteStatus: 'pending' }, action)
      expect(state).toEqual({ deleteStatus: 'idle', isOpenedModalDelete: false })
    })
    it('should set deleteStatus=error while action is rejected', () => {
      const action = { type: deleteDidNumber.rejected }
      const state = didNumberReducer({ deleteStatus: 'pending' }, action)
      expect(state).toEqual({ deleteStatus: 'error' })
    })
  })

})

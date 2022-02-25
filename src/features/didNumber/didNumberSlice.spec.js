import didNumberReducer, { initialState, fetchDidNumbers, createDidNumber } from './didNumberSlice'

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
    it('should set createStatus=idle and modalCreateStatus=closed while action is fulfilled', () => {
      const action = { type: createDidNumber.fulfilled }
      const state = didNumberReducer({ createStatus: 'pending' }, action)
      expect(state).toEqual({ createStatus: 'idle', modalCreateStatus: 'closed' })
    })
    it('should set createStatus=error while action is rejected', () => {
      const action = { type: createDidNumber.rejected }
      const state = didNumberReducer({ createStatus: 'pending' }, action)
      expect(state).toEqual({ createStatus: 'error' })
    })         
  })
})

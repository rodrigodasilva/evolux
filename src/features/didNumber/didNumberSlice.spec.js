import didNumberReducer, { fetchDidNumbers } from './didNumberSlice'

describe('didNumber reducer', () => {
  it('should handle initial state', () => {
    expect(didNumberReducer(undefined, { type: 'unknown' })).toEqual({
      items: [],
      status: 'idle'
    })
  })

  it('should set loading true while action is pending', () => {
    const action = { type: fetchDidNumbers.pending }
    const state = didNumberReducer({ status: 'idle' }, action)
    expect(state).toEqual({ status: 'loading' })
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
    const state = didNumberReducer({ status: 'idle' }, action)
    expect(state).toEqual({
      status: 'idle',
      items: [didNumber]
    })
  })

  it('should set error true when action is rejected', () => {
    const action = {type: fetchDidNumbers.rejected}
    const state = didNumberReducer({ status: 'idle' }, action)
    expect(state).toEqual({ status: 'error' })
 })
})

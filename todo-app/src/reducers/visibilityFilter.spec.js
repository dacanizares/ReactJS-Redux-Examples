import visibilityFilter, { VisibilityFilterActionTypes } from './visibilityFilter'
import deepFreeze from 'deep-freeze'

describe('visibility filter reducer', () => {
  it('should handle initial state', () => {
    expect(
      visibilityFilter(undefined, {})
    ).toEqual('SHOW_ALL')
  })

  it('should handle SET_VISIBILITY_FILTER', () => {
    const stateBefore = [];
    const action = {
      type: VisibilityFilterActionTypes.SET_VISIBILITY_FILTER,
      filter: 'ANY FILTER'
    }
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      visibilityFilter(stateBefore, action)
    ).toEqual('ANY FILTER')
  })
})
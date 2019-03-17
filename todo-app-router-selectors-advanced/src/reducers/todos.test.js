import todos, { TodosActionTypes } from './todos'
import deepFreeze from 'deep-freeze'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual({})
  })

  it('should handle ADD_TODO for a new state', () => {
    const stateBefore = [];
    const action = {
      type: TodosActionTypes.ADD_TODO,
      payload: {
        id: 0,
        text: 'A text'
      }
    }
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      todos(stateBefore, action)
    ).toEqual({
      0: {
        id: 0,
        text: 'A text',
        completed: false
      }
    })
  })

  it('should handle ADD_TODO for an existing state', () => {
    const stateBefore = {
      0: {
        id: 0,
        text: 'A text',
        completed: true
      }
    };
    const action = {
      type: TodosActionTypes.ADD_TODO,
      payload: { 
        id: 1,
        text: 'Another text'
      }
    }
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      todos(stateBefore, action)
    ).toEqual({
      0: {
        id: 0,
        text: 'A text',
        completed: true
      },
      1: {
        id: 1,
        text: 'Another text',
        completed: false
      }
    })
  }),

  it('should handle TOGGLE_TODO for an existing todo', () => {
    const stateBefore = {
      0: {
        id: 0,
        text: 'A text',
        completed: false
      },
      1: {
        id: 1,
        text: 'B text',
        completed: false
      },
      2: {
        id: 2,
        text: 'C text',
        completed: false
      }
    };
    const action = {
      type: TodosActionTypes.TOGGLE_TODO,
      payload: {
        id: 1
      }
    }
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      todos(stateBefore, action)
    ).toEqual({
      0: {
        id: 0,
        text: 'A text',
        completed: false
      },
      1: {
        id: 1,
        text: 'B text',
        completed: true
      },
      2: {
        id: 2,
        text: 'C text',
        completed: false
      }
    })
  })

  it('should not crash when TOGGLE_TODO for an unexisting todo', () => {
    const stateBefore = {
      0: {
        id: 0,
        text: 'A text',
        completed: false
      },
      1: {
        id: 1,
        text: 'B text',
        completed: false
      },
      2: {
        id: 2,
        text: 'C text',
        completed: false
      }
    };
    const action = {
      type: TodosActionTypes.TOGGLE_TODO,
      payload: { 
        id: 5
      }
    }
    
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      todos(stateBefore, action)
    ).toEqual({
      0: {
        id: 0,
        text: 'A text',
        completed: false
      },
      1: {
        id: 1,
        text: 'B text',
        completed: false
      },
      2: {
        id: 2,
        text: 'C text',
        completed: false
      }
    })
  })
})
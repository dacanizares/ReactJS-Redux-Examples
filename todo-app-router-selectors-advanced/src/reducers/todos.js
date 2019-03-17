// Action Types
export const TodosActionTypes = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO'
}

// Reducer

// For a single TODO
const reduceTodo = (state = {}, action) => {
  switch (action.type) {

    case TodosActionTypes.ADD_TODO:
      return {
          ...action.payload,
          completed: false
        }

    case TodosActionTypes.TOGGLE_TODO:
      return { 
        ...state, 
        completed: !state.completed 
      }

    default:
      return state
  }
}

// Reducer for all TODOs
const todos = (state = {}, action) => {
  const { type, payload: todo } = action
  switch (type) {

    case TodosActionTypes.ADD_TODO:
      return {
        ...state,
        [todo.id]: reduceTodo({}, action)
      }

    case TodosActionTypes.TOGGLE_TODO:
      if (!state[todo.id]) {
        return state
      }
      return {
        ...state,
        [todo.id]: reduceTodo(state[todo.id], action)
      }

    default:
      return state
  }
}

export default todos
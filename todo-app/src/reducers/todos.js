// Action Types
export const TodosActionTypes = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO'
}

// Reducer
const todos = (state = [], action) => {
  switch (action.type) {

    case TodosActionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

    case TodosActionTypes.TOGGLE_TODO:
      return state.map(todo => 
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo)

    default:
      return state
  }
}

export default todos
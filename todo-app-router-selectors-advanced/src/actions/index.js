import { TodosActionTypes } from '../reducers/todos'
import v4 from 'uuid/v4'

// Todo actions
export const addTodo = text => ({
  type: TodosActionTypes.ADD_TODO,
  id: v4(),
  text
})

export const toggleTodo = id => ({
  type: TodosActionTypes.TOGGLE_TODO,
  id
})

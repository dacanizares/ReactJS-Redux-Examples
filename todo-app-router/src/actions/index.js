import { TodosActionTypes } from '../reducers/todos'
import { VisibilityFilterActionTypes } from '../reducers/visibilityFilter'

// Todo actions
let nextTodoId = 0
export const addTodo = text => ({
  type: TodosActionTypes.ADD_TODO,
  id: nextTodoId++,
  text
})

export const toggleTodo = id => ({
  type: TodosActionTypes.TOGGLE_TODO,
  id
})

// Visibility filter actions
export const setVisibilityFilter = filter => ({
  type: VisibilityFilterActionTypes.SET_VISIBILITY_FILTER,
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: '',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
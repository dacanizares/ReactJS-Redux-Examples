import { TodosActionTypes } from '../reducers/todos'
import { VisibilityFilterActionTypes } from '../reducers/visibilityFilter'
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

// Visibility filter actions
export const setVisibilityFilter = filter => ({
  type: VisibilityFilterActionTypes.SET_VISIBILITY_FILTER,
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'all',
  SHOW_COMPLETED: 'completed',
  SHOW_ACTIVE: 'active'
}
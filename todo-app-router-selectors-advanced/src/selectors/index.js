import { VisibilityFilters } from '../common'

// Router Selectors
const getVisibilityFilter = ({ match: { params } }) => params.filter || VisibilityFilters.SHOW_ALL

// Redux Store Selectors
const getTodos = (state) => state.todos

// Advanced Selectors
export const getVisibleTodos = (state, props) => {
  const visibilityFilter = getVisibilityFilter(props)
  const todos = getTodos(state)
  switch (visibilityFilter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + visibilityFilter)
  }
}
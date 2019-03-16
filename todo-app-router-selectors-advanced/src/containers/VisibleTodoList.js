import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { getVisibleTodos } from '../selectors';


const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state, ownProps)
})

export default withRouter(connect(
  mapStateToProps,
  { toggleTodo }
)(TodoList))
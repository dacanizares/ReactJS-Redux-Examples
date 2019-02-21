import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { getVisibleTodos } from '../selectors';


const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state, ownProps)
})

export default connect(
  mapStateToProps,
  { toggleTodo }
)(TodoList)
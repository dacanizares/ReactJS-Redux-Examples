import SingleForm from '../components/SingleForm'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = connect(
    null,
    {submitAction: addTodo}
)(SingleForm);

export default AddTodo;

AddTodo.defaultProps = {
    actionText: 'Add TO-DO'
}
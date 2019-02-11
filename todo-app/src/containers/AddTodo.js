import SingleForm from '../components/SingleForm'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

export default connect(
    null,
    {submitAction: addTodo}
)(SingleForm)
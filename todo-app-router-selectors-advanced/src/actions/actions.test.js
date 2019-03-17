import { addTodo, toggleTodo } from './index'
import { TodosActionTypes } from '../reducers/todos'

const isUUID = (str) => (
  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(str)
)

describe('actions unit test', () => {  
  it('should return a valid ADD TODO', () => {
    const action = addTodo('my todo')

    expect(isUUID(action.payload.id)).toEqual(true)
    expect(action.payload.text).toEqual('my todo')
    expect(action.type).toEqual(TodosActionTypes.ADD_TODO)    
  })
})
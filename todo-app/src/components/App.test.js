import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import App from './App'

jest.mock('../containers/AddTodo', () => () => 'AddTodo')
jest.mock('../containers/VisibleTodoList', () => () => 'VisibleTodoList')
jest.mock('../containers/FilterLink', () => () => 'FilterLink')

describe('App basic tests', () => {    
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});


describe('App snapshot tests', () => {    
  it('renders correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

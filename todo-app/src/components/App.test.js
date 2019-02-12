import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock('../containers/AddTodo', () => () => 'AddTodo');
jest.mock('../containers/VisibleTodoList', () => () => 'VisibleTodoList');
jest.mock('../containers/FilterLink', () => () => 'FilterLink');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

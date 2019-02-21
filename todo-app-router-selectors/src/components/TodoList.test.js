import React from 'react';
import renderer from 'react-test-renderer';
import TodoList from './TodoList';

jest.mock('./Todo', () => 'Todo');

describe('TodoList snapshot tests', () => {    
  it('renders correctly when no todos', () => {
    const tree = renderer
      .create(<TodoList todos={[]} toggleTodo={() => {}}  />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('renders correctly when multiple todos', () => {
    const tree = renderer
      .create(
        <TodoList 
          todos={[
            {id:1, completed: false, text: 'text'}, 
            {id:2, completed: true, text: 'text2'}]}  
          toggleTodo={() => {}} 
        />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import Todo from './Todo'

describe('Todo snapshot tests', () => {    
  it('renders correctly when uncompleted', () => {
    const tree = renderer
      .create(<Todo onClick={() => {}} completed={false} text='Todo!' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('renders correctly when completed', () => {
    const tree = renderer
      .create(<Todo onClick={() => {}} completed={false} text='Todo!' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

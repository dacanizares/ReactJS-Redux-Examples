import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import AddTodo from './AddTodo';

// Example test of how to inject a mockstore
// I'm not really sure on the usefulness of this approach.
// Anyway, here it is for reference purpouses.

describe('AddTodo snapshot tests', () => {
  const mockStore = configureStore();

  it('renders correctly', () => {  
    const tree = renderer
      .create(<Provider store={mockStore({})}><AddTodo /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
});
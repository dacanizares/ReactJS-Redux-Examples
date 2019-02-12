import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer'

jest.mock('../containers/FilterLink', () => () => 'FilterLink');

describe('Footer snapshot tests', () => {    
  it('renders correctly', () => {
    const tree = renderer
      .create(<Footer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

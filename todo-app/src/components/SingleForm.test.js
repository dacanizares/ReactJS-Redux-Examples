import React from 'react';
import renderer from 'react-test-renderer';
import SingleForm from './SingleForm';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('SingleForm snapshot tests', () => {    
  it('renders correctly', () => {
    const tree = renderer
      .create(<SingleForm actionText='ACTION'  submitAction={null} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('SingleForm functional tests', () => {
  let wrapper;
  let mockSubmit;
  
  beforeEach(() => {
    mockSubmit = jest.fn();
    Enzyme.configure({ adapter: new Adapter() });
    wrapper = mount(<SingleForm actionText='ACTION'  submitAction={mockSubmit} />);
  })

  it('should not submit without input data', () => {
    wrapper.find('form').simulate('submit');
    
    expect(mockSubmit.mock.calls.length).toBe(0);
  });

  it('should submit with input data', () => {
    wrapper.find('input').instance().value = 'Anything';
    wrapper.find('input').simulate('change');    
    wrapper.find('form').simulate('submit');

    expect(wrapper.find('input').instance().value).toBe('');
    expect(mockSubmit.mock.calls.length).toBe(1);
  });
});
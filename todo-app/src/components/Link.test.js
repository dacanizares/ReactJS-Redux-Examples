import React from 'react';
import renderer from 'react-test-renderer';
import Link from './Link'

describe('Link snapshot tests', () => {    
  it('renders correctly when active', () => {
    const tree = renderer
      .create(<Link active={true} onClick={() => {}}>Children text</Link>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when un-active', () => {
    const tree = renderer
      .create(<Link active={false} onClick={() => {}}>Children text</Link>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

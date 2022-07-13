import React from 'react';
import renderer from 'react-test-renderer';
import Stackscreen from '../../../src/screens/stackscreens/StackScreen';

describe('Stack screens', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Stackscreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

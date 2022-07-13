import React from 'react';
import renderer from 'react-test-renderer';
import Profile from '../../../src/screens/profile/Profile';

describe('Profile', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Profile navigation={undefined} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

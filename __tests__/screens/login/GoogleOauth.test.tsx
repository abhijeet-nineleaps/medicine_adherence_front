import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../../../src/screens/login/GoogleOauth';

describe('Google Auth', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Login navigation={undefined} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

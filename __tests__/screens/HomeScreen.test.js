import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../../src/screens/HomeScreen';
jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<HomeScreen/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
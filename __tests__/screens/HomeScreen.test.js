import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../../src/screens/HomeScreen';
jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useEffect: jest.fn(),
}));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<HomeScreen/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('test the only function', () => {
    const wrapper = renderer.create(<HomeScreen />);
    const inst = wrapper.getInstance();
    expect(
      inst?.camIcon(<Icon size={40} name="camera" color="black"></Icon>),
    ).toMatchSnapshot();
  });
});
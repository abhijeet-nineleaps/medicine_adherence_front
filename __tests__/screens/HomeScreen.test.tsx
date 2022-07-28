import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../../src/screens/HomeScreen';
jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));
jest.mock("@react-native-async-storage/async-storage", () => ({
  default: jest.fn(),
}));
// jest.mock("@react-navigation/bottom-tabs", () => ({
//   default: jest.fn(),
// }));
// jest.mock('@react-navigation/native', () => ({
//   ...jest.requireActual('@react-navigation/native'),
//   useNavigation: jest.fn(),
// }));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<HomeScreen />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  // it('checks for text', () => {
  //   const tree = renderer.create(<HomeScreen />);
  //   const text = tree.root.findByProps({testID: 'timingText'}).props;
  //   expect(text.children).toEqual('Timings')
  // });
  // it('checks for  icon', () => {
  //   const tree = renderer.create(<HomeScreen/>);
  //   const icon = tree.root.findByProps({testID: 'cameraIcon'}).props;
  //   expect(icon.children).toBeTruthy();
  // });
});

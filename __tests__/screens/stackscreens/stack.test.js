import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import renderer from 'react-test-renderer';
import Stackscreen from '../../../src/screens/stackscreens/StackScreen';
jest.mock('rn-fetch-blob', () => ({
  default: jest.fn(),
}));
jest.mock('react-native-push-notification', () => ({
  default: jest.fn(),
}));
jest.mock('@react-native-google-signin/google-signin', () => ({
  default: jest.fn(),
}));
jest.mock('@react-native-firebase/messaging', () => ({
  default: jest.fn(),
}));
jest.mock('@react-native-community/netinfo', () => ({
  default: jest.fn(),
}));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <NavigationContainer>
          <Stackscreen />
        </NavigationContainer>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

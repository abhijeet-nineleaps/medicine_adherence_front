import React from 'react';
import renderer from 'react-test-renderer';
import OnboardingScreen from '../../src/screens/OnboardingScreen';
jest.mock('@react-native-google-signin/google-signin', () => ({
  default: jest.fn(),
}));
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useFocusEffect: jest.fn(),
  setTimeout: jest.fn(),
}));
describe('OnBoarding Screen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<OnboardingScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');
  test('test timeout', () => {
    const timerGame = require('../../src/screens/OnboardingScreen');
    expect(setTimeout).toHaveBeenCalled;
  });
});

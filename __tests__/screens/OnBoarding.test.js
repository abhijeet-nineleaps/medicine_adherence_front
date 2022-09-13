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
jest.useFakeTimers();
describe('OnBoarding Screen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<OnboardingScreen />).toJSON();
    jest.runAllTimers();
    expect(tree).toMatchSnapshot();
  });
});

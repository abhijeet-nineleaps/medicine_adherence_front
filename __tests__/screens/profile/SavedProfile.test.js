import { render } from '@testing-library/react-native';
import React from 'react';
import SavedDetails from '../../../src/screens/profile/SavedDetails';
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn().mockImplementation((func) => func()),
}));
jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(),
}));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = render(<SavedDetails/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
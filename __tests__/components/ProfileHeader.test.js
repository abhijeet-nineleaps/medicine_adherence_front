import React from "react";
import renderer from 'react-test-renderer';
import enableHooks from "jest-react-hooks-shallow";
import ProfileHeader from "../../src/components/ProfileHeader";
enableHooks(jest);
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));jest.mock("@react-native-google-signin/google-signin", () => ({
    default: jest.fn(),
  }));
  jest.mock("@react-navigation/native", () => ({
    ...jest.requireActual("@react-navigation/native"),
    useFocusEffect: jest.fn().mockImplementation((getuser) => getuser()),
  }));
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn(),
}));
describe('Click send image', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(<ProfileHeader/>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
});
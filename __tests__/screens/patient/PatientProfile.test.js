import React from 'react';
import renderer from 'react-test-renderer';
import enableHooks from "jest-react-hooks-shallow";
import ViewProfile from '../../../src/screens/patient/PatientProfile';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new Adapter()});
enableHooks(jest);
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn().mockImplementation((func) => func()),
}));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ViewProfile route={undefined} navigation={undefined}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
});
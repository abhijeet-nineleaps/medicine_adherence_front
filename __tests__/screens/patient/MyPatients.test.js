import React from 'react';
import renderer from 'react-test-renderer';
import enableHooks from "jest-react-hooks-shallow";
import Mypatient from '../../../src/screens/patient/MyPatients';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
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
  useFocusEffect: jest.fn(),
}));
jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Mypatient navigation={undefined}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Mypatient empFnc={mockFn} />);
    wrapper.find('#emp').simulate('press');
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Mypatient navProfile={mockFn} />);
    wrapper.find('#pressProfile').simulate('press');
  });
});
import React from 'react';
import renderer from 'react-test-renderer';
import enableHooks from "jest-react-hooks-shallow";
import Addcaretaker from '../../../src/screens/caretaker/AddCaretaker';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CareTaker from '../../../src/screens/caretaker/Caretaker';
Enzyme.configure({adapter: new Adapter()});
// jest.mock('react-native', () => {
//   return {
//     StyleSheet: {
//       create:  () => ({}),
//     },
//     // NativeMdules: {
//     //   RNVectorIconsManager: () => ({}),
//     // }
//   };
// });
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
jest.mock("react-native-elements", () => ({
  default: jest.fn(),
  SpeedDial : {
    Action :  () => ({}),
  }
}));
jest.mock("react-native-paper", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-vector-icons", () => ({
  default: jest.fn(),
}));

describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Addcaretaker navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Addcaretaker search={mockFn} />);
    wrapper.find('#search').simulate('press');
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Addcaretaker emp={mockFn} />);
    wrapper.find('#emp').simulate('press');
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Addcaretaker del={mockFn} />);
    wrapper.find('#delete').simulate('press');
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import enableHooks from "jest-react-hooks-shallow";
import Caretakercomp from '../../../src/screens/caretaker/CaretakerComp';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new Adapter()});
// jest.mock('react-native', () => {
//   return {
//     StyleSheet: {
//       create: () => ({}),
//     },
//   };
// });
enableHooks(jest);
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
// jest.mock("react-native-vector-icons", () => ({
//   default: jest.fn(),
// }));
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn(),
}));
jest.mock("react-native-elements", () => ({
  default: jest.fn(),
  Tab: {
    Item : () => ({}),
  },
  TabView: {
    Item: () => ({}),
  }
}));
jest.mock("react-native-paper", () => ({
  default: jest.fn(),
}));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Caretakercomp navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Caretakercomp handleChange={mockFn} />);
    wrapper.find('#change').simulate('change');
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Caretakercomp loginFnc={mockFn} />);
    wrapper.find('#ok').simulate('change');
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Caretakercomp homeFnc={mockFn} />);
    wrapper.find('#cancel').simulate('change');
  });

});

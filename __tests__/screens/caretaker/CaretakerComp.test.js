import React from 'react';
import enableHooks from 'jest-react-hooks-shallow';
import Caretakercomp from '../../../src/screens/caretaker/CaretakerComp';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new Adapter()});

enableHooks(jest);
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useFocusEffect: jest.fn().mockImplementation(func => func()),
}));
jest.mock('react-native-elements', () => ({
  default: jest.fn(),
  Tab: {
    Item: () => ({}),
  },
  TabView: {
    Item: () => ({}),
  },
}));
jest.mock('react-native-paper', () => ({
  default: jest.fn(),
}));
const props = {
  check2: true,
  navigation: {
    addListener: jest.fn(),
    navigate: jest.fn(),
  },
};
describe('Click send image', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Caretakercomp />);
    expect(wrapper).toMatchSnapshot();
  });
  it('test .. ', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Caretakercomp loginFnc={mockFn}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
